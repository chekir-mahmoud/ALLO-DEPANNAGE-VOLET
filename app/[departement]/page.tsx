import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site"
import { notFound } from "next/navigation"
import { getPhoneByDepartment } from "@/lib/phone-config"
import { getDepartmentConfig, getCitiesByDepartment } from "@/lib/service-config"
import DepartmentPageClient from "./client"
import { getTestimonialsByServiceAndDepartment, replaceTestimonialCitiesWithDepartmentCities } from "@/lib/testimonials"

export const dynamicParams = true
// Pas de régénération périodique : le contenu vient du code et ne change qu'au déploiement,
// qui vide le cache. Chaque page est calculée une seule fois par déploiement.
export const revalidate = false

// Aucune page pré-générée au build : chaque page est rendue à sa première visite,
// puis servie depuis le cache Vercel jusqu'au prochain déploiement.
export async function generateStaticParams() {
  return []
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ departement: string }>
}): Promise<Metadata> {
  const { departement } = await params
  const deptConfig = getDepartmentConfig(departement)

  if (!deptConfig) {
    return {
      title: "Département non trouvé",
      description: "Ce département n'est pas encore couvert par nos services de débarras.",
    }
  }

  return {
    title: `Débarras ${deptConfig.displayName} (${deptConfig.postalCode}) : logements et locaux`,
    description: `Débarras de maisons, appartements et locaux ${deptConfig.displayName} (${deptConfig.postalCode}) : vidage complet, succession, cave et grenier. Devis gratuit le jour même, intervention 24/48h.`,
    keywords: [
      `débarras maison ${deptConfig.name}`,
      `débarras ${deptConfig.name}`,
      `vidage maison ${deptConfig.name}`,
      `enlèvement encombrants ${deptConfig.name}`,
      `débarras succession ${deptConfig.name}`,
      `vide maison ${deptConfig.name}`,
      `débarras appartement ${deptConfig.name}`,
      `débarras cave grenier ${deptConfig.name}`,
      `débarras professionnel ${deptConfig.postalCode}`,
      `débarrasser maison ${deptConfig.postalCode}`,
    ],
    alternates: {
      canonical: `/${departement}`,
    },
    openGraph: {
      title: `Débarras ${deptConfig.displayName} (${deptConfig.postalCode}) : logements et locaux`,
      description: `Débarras de maisons, appartements et locaux ${deptConfig.displayName} : vidage complet, succession, cave et grenier. Devis gratuit le jour même, intervention 24/48h.`,
      url: `${SITE_URL}/${departement}`,
      siteName: "Débarras Proximité",
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Debarras%20Succession-d8XmzDnqvJzN1OeVus3EuipxZXBP78.jpg",
          width: 1200,
          height: 630,
          alt: `Débarras et vidage complet de logements et locaux ${deptConfig.displayName} par Débarras Proximité`,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Débarras de logements et locaux ${deptConfig.displayName} | Débarras Proximité`,
      description: `Débarras de maisons, appartements et locaux ${deptConfig.displayName} (${deptConfig.postalCode}). Devis gratuit le jour même, intervention 24/48h.`,
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

export default async function DepartmentPage({
  params,
}: {
  params: Promise<{ departement: string }>
}) {
  const { departement } = await params
  const deptConfig = getDepartmentConfig(departement)

  if (!deptConfig) {
    notFound()
  }

  const phoneConfig = getPhoneByDepartment(
    departement === "gironde" ? "gironde_debarras" : departement
  )

  const citiesData = getCitiesByDepartment(departement)
  const cities = Object.entries(citiesData)
    .map(([slug, data]) => ({ slug, ...data }))
    .sort((a, b) => a.postalCode.localeCompare(b.postalCode))

  const structuredData = {
    "@context": "https://schema.org",
    "@graph": [
      {
        "@type": "Service",
        "@id": `${SITE_URL}/${departement}#service`,
        "name": `Débarras de logements et locaux ${deptConfig.displayName}`,
        "description": `Service complet de débarras de maisons, appartements, locaux professionnels, caves et greniers ${deptConfig.displayName} (${deptConfig.postalCode}). Évacuation rapide, tri sélectif et traitement écologique des déchets.`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Débarras Proximité",
          "url": SITE_URL,
          "telephone": phoneConfig.display,
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": deptConfig.name,
          },
          "priceRange": "€€",
        },
        "serviceType": "Débarras de logements et locaux",
        "areaServed": {
          "@type": "AdministrativeArea",
          "name": deptConfig.name,
          "containedInPlace": {
            "@type": "Country",
            "name": "France",
          },
        },
        "offers": {
          "@type": "Offer",
          "description": "Devis gratuit et sans engagement",
          "price": "0",
          "priceCurrency": "EUR",
        },
      },
      {
        "@type": "BreadcrumbList",
        "itemListElement": [
          { "@type": "ListItem", "position": 1, "name": "Accueil", "item": SITE_URL },
          { "@type": "ListItem", "position": 2, "name": deptConfig.name, "item": `${SITE_URL}/${departement}` },
        ],
      },
      {
        "@type": "FAQPage",
        "mainEntity": [
          { q: "Quel est le délai d'intervention pour un débarras de logement ou de local ?", a: `Nos équipes interviennent généralement sous 24 à 48 heures ${deptConfig.displayName} après validation du devis. Pour les situations urgentes (succession, vente immobilière imminente), nous pouvons organiser une intervention le jour même selon disponibilité.` },
          { q: "Le débarras d'un logement est-il payant ou peut-il être gratuit ?", a: "Le coût dépend du volume à évacuer, de l'accessibilité et de la valeur des objets récupérables. Dans certains cas, la revente des biens peut compenser tout ou partie des frais. Le devis est toujours gratuit et sans engagement." },
          { q: "Que devient le contenu du logement après le débarras ?", a: "Nous procédons à un tri rigoureux : les objets en bon état sont donnés à des associations ou revendus, les matériaux recyclables sont acheminés en déchetterie agréée, et les déchets sont traités conformément à la réglementation environnementale." },
          { q: `Intervenez-vous dans toutes les villes du département ${deptConfig.postalCode} ?`, a: `Oui, nous couvrons l'ensemble du département ${deptConfig.postalCode} ${deptConfig.displayName}, y compris les communes rurales et les zones difficiles d'accès.` },
        ].map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <DepartmentPageClient
        testimonials={replaceTestimonialCitiesWithDepartmentCities(getTestimonialsByServiceAndDepartment("debarras-maison", departement), citiesData)}
        departmentSlug={departement}
        deptConfig={deptConfig}
        phoneConfig={phoneConfig}
        cities={cities}
      />
    </>
  )
}
