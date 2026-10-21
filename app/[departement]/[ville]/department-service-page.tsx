import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SITE_URL, departmentPath } from "@/lib/site"
import { getPhoneByDepartment } from "@/lib/phone-config"
import { getDepartmentConfig, getCitiesByDepartment } from "@/lib/service-config"
import { avisPourDepartement } from "@/lib/testimonials/exemples-volet-roulant"
import { SOUS_SERVICES_VOLET, getSousServiceBySlug, resolveSousServiceDepartment } from "@/lib/sous-services/volet-roulant"
import ServiceClient from "@/app/nos-services/[slug]/service-client"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

// Page prestation d'un département : /[departement]/[prestation] (ex. /gironde/depannage-volet-roulant).
// Partage la route /[departement]/[ville] : page.tsx l'affiche quand le 2e segment est une prestation.
// Même design que la page nationale /nos-services/[prestation], textes adaptés au département.

const pageUrl = (departement: string, slug: string) => `${SITE_URL}/${departement}/${slug}`

export function isDepartmentServiceSlug(slug: string): boolean {
  return Boolean(getSousServiceBySlug(slug))
}

export function getDepartmentServiceMetadata(departement: string, slug: string): Metadata {
  const deptConfig = getDepartmentConfig(departement)
  const config = getSousServiceBySlug(slug)
  if (!deptConfig || !config) return { title: "Page non trouvée" }
  const ss = resolveSousServiceDepartment(config, deptConfig, pageUrl(departement, slug))
  const title = `${ss.label} ${deptConfig.name} (${deptConfig.postalCode}) 7j/7 | Allo Dépannage Volet`
  const image = `${SITE_URL}${ss.ogImage ?? ss.heroImage}`
  return {
    title,
    description: ss.metaDescription,
    keywords: [...ss.knowsAbout.map((k) => `${k} ${deptConfig.name}`), `${ss.label} ${deptConfig.postalCode}`],
    alternates: { canonical: `/${departement}/${slug}` },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "Allo Dépannage Volet",
      title,
      description: ss.metaDescription,
      url: pageUrl(departement, slug),
      images: [{ url: image, alt: `${ss.label} ${deptConfig.displayName} par Allo Dépannage Volet` }],
    },
    twitter: { card: "summary_large_image", title, description: ss.metaDescription, images: [image] },
  }
}

export default function DepartmentServicePage({ departement, slug }: { departement: string; slug: string }) {
  const deptConfig = getDepartmentConfig(departement)
  const config = getSousServiceBySlug(slug)
  if (!deptConfig || !config) notFound()

  const url = pageUrl(departement, slug)
  const ss = resolveSousServiceDepartment(config, deptConfig, url)
  const phoneConfig = getPhoneByDepartment(departement)

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${url}#service`,
    name: `${ss.label} ${deptConfig.name}`,
    description: ss.schemaDescription,
    slogan: ss.schemaSlogan,
    serviceType: ss.label,
    provider: { "@type": "Organization", name: "Allo Dépannage Volet", url: SITE_URL, telephone: phoneConfig.display },
    areaServed: {
      "@type": "AdministrativeArea",
      name: deptConfig.name,
      containedInPlace: { "@type": "Country", name: "France" },
    },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Tarifs ${ss.label} ${deptConfig.displayName}`,
      itemListElement: ss.schemaOffers.map((offer) => ({
        "@type": "Offer",
        name: offer.name,
        description: offer.desc,
        ...(offer.price ? { price: offer.price, priceCurrency: "EUR" } : {}),
      })),
    },
  }

  const others = SOUS_SERVICES_VOLET.filter((s) => s.slug !== slug).map((s) => ({
    slug: s.slug,
    label: s.label,
    sub: s.heroCardSub,
    image: s.heroImage,
  }))

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />
      <BreadcrumbSchema
        items={[
          { name: deptConfig.name, path: departmentPath(departement) },
          { name: ss.label, path: `/${departement}/${slug}` },
        ]}
      />
      <ServiceClient
        ss={ss}
        others={others}
        phoneConfig={phoneConfig}
        place={deptConfig.displayName}
        othersBasePath={departmentPath(departement)}
        testimonials={avisPourDepartement(deptConfig.postalCode, Object.values(getCitiesByDepartment(departement)))}
      />
    </>
  )
}
