import type { Metadata } from "next"
import { SITE_URL, COMPANY_ADDRESS, cityPath } from "@/lib/site"
import { notFound, permanentRedirect } from "next/navigation"
import { getDepartmentConfig, getCityDataByDepartment, getDisplayedDepartmentCities, cityHasSousServices } from "@/lib/service-config"
import { getPhoneByDepartment } from "@/lib/phone-config"
import { getSousServiceBySlug, resolveSousServiceConfig } from "@/lib/sous-services/volet-roulant"
import ClientVillePage from "../client"
import { redirectToKnownCity } from "@/lib/city-redirect"

export const dynamicParams = true
// Pas de régénération périodique : le contenu vient du code et ne change qu'au déploiement,
// qui vide le cache. Chaque page est calculée une seule fois par déploiement.
export const revalidate = false

type Params = Promise<{ departement: string; ville: string; sousService: string }>

export async function generateMetadata({ params }: { params: Params }): Promise<Metadata> {
  const { departement, ville: villeSlug, sousService: ssSlug } = await params

  const deptConfig = getDepartmentConfig(departement)
  const cityData = getCityDataByDepartment(departement, villeSlug)
  const ssConfig = getSousServiceBySlug(ssSlug)

  if (!deptConfig || !cityData || !ssConfig) {
    return { title: "Page non trouvée", description: "Cette page n'existe pas." }
  }

  const ogImage = `https://www.allo-depannage-volet.fr${ssConfig.ogImage ?? ssConfig.heroImage}`

  return {
    title: ssConfig.title(cityData.name, cityData.postalCode),
    description: ssConfig.metaDescription(cityData.name, deptConfig.displayName),
    keywords: [
      ...ssConfig.knowsAbout.map((k) => `${k} ${cityData.name}`),
      `${ssConfig.label} ${cityData.name}`,
      `${ssConfig.label} ${cityData.postalCode}`,
      `dépannage volet roulant ${cityData.name}`,
      `réparation volet roulant ${cityData.name}`,
    ],
    alternates: {
      canonical: `/${departement}/${villeSlug}/${ssSlug}`,
    },
    openGraph: {
      title: ssConfig.title(cityData.name, cityData.postalCode),
      description: ssConfig.metaDescription(cityData.name, deptConfig.displayName),
      url: `${SITE_URL}/${departement}/${villeSlug}/${ssSlug}`,
      siteName: "Allo Dépannage Volet",
      images: [{ url: ogImage, alt: `${ssConfig.label} à ${cityData.name} par Allo Dépannage Volet` }],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: ssConfig.title(cityData.name, cityData.postalCode),
      description: ssConfig.metaDescription(cityData.name, deptConfig.displayName),
      images: [ogImage],
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        "max-video-preview": -1,
        "max-image-preview": "large",
        "max-snippet": -1,
      },
    },
  }
}

export default async function Page({ params }: { params: Params }) {
  const { departement, ville: villeSlug, sousService: ssSlug } = await params

  const deptConfig = getDepartmentConfig(departement)
  const cityData = getCityDataByDepartment(departement, villeSlug)
  const ssConfig = getSousServiceBySlug(ssSlug)

  if (deptConfig && !cityData) redirectToKnownCity(departement, villeSlug, ssSlug)
  if (!deptConfig || !cityData || !ssConfig) notFound()
  // Petites villes : pas de page sous-service, renvoi vers la page ville
  if (!cityHasSousServices(departement, villeSlug)) permanentRedirect(cityPath(departement, villeSlug))

  const phoneConfig = getPhoneByDepartment(departement)
  const departmentCities = getDisplayedDepartmentCities(departement)

  const pageUrl = `${SITE_URL}/${departement}/${villeSlug}/${ssSlug}`
  const resolved = resolveSousServiceConfig(ssConfig, cityData.name, cityData.postalCode, deptConfig.displayName, pageUrl)

  // FAQPage, BreadcrumbList et LocalBusiness sont émis par le composant de la page ville.
  // Ce bloc serveur émet uniquement Service + OfferCatalog pour éviter tout doublon.
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    "name": resolved.schemaName,
    "description": resolved.schemaDescription,
    "slogan": resolved.schemaSlogan,
    "serviceType": resolved.label,
    "provider": {
      "@type": "LocalBusiness",
      "name": "Allo Dépannage Volet",
      "url": "https://www.allo-depannage-volet.fr",
      "telephone": phoneConfig.display,
      "address": COMPANY_ADDRESS,
      "priceRange": "€€",
    },
    "areaServed": {
      "@type": "City",
      "name": cityData.name,
      "containedInPlace": {
        "@type": "AdministrativeArea",
        "name": deptConfig.name,
        "containedInPlace": { "@type": "Country", "name": "France" },
      },
    },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Tarifs ${resolved.label} à ${cityData.name}`,
      "itemListElement": resolved.schemaOffers.map((offer) => ({
        "@type": "Offer",
        "name": offer.name,
        "description": offer.desc,
        ...(offer.price
          ? {
              "price": offer.price,
              "priceCurrency": "EUR",
              ...(offer.unit
                ? { "priceSpecification": { "@type": "UnitPriceSpecification", "price": offer.price, "priceCurrency": "EUR", "unitText": offer.unit } }
                : {}),
            }
          : {}),
      })),
    },
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <ClientVillePage
        cityData={{ ...cityData, population: cityData.population ?? "" }}
        phoneConfig={phoneConfig}
        initialVilleSlug={villeSlug}
        departmentSlug={departement}
        departmentConfig={deptConfig}
        departmentCities={departmentCities}
        sousService={resolved}
      />
    </>
  )
}

// Aucune page pré-générée au build : chaque page est rendue à sa première visite,
// puis servie depuis le cache Vercel jusqu'au prochain déploiement.
export async function generateStaticParams() {
  return []
}
