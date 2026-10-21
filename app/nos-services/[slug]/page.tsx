import type { Metadata } from "next"
import { notFound } from "next/navigation"
import { SITE_URL } from "@/lib/site"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import { SOUS_SERVICES_VOLET, getSousServiceBySlug, resolveSousServiceNational } from "@/lib/sous-services/volet-roulant"
import ServiceClient from "./service-client"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

// Page nationale d'une prestation (aucune ville ni département).
// Les pages /[departement]/[ville]/[prestation] gardent, elles, le nom de la ville.

export const dynamicParams = false

export function generateStaticParams() {
  return SOUS_SERVICES_VOLET.map((ss) => ({ slug: ss.slug }))
}

type Params = { params: Promise<{ slug: string }> }

const pageUrl = (slug: string) => `${SITE_URL}/nos-services/${slug}`

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { slug } = await params
  const config = getSousServiceBySlug(slug)
  if (!config) return { title: "Page non trouvée" }
  const ss = resolveSousServiceNational(config, pageUrl(slug))
  const title = `${ss.label} partout en France | Allo Dépannage Volet`
  return {
    title,
    description: ss.metaDescription,
    keywords: ss.knowsAbout,
    alternates: { canonical: `/nos-services/${slug}` },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "Allo Dépannage Volet",
      title,
      description: ss.metaDescription,
      url: pageUrl(slug),
      images: [{ url: ss.ogImage ?? ss.heroImage, alt: `${ss.label} par Allo Dépannage Volet` }],
    },
    twitter: { card: "summary_large_image", title, description: ss.metaDescription, images: [ss.ogImage ?? ss.heroImage] },
  }
}

export default async function Page({ params }: Params) {
  const { slug } = await params
  const config = getSousServiceBySlug(slug)
  if (!config) notFound()
  const ss = resolveSousServiceNational(config, pageUrl(slug))

  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl(slug)}#service`,
    name: ss.label,
    description: ss.schemaDescription,
    slogan: ss.schemaSlogan,
    serviceType: ss.label,
    provider: { "@type": "Organization", name: "Allo Dépannage Volet", url: SITE_URL, telephone: DEFAULT_PHONE.display },
    areaServed: { "@type": "Country", name: "France" },
    hasOfferCatalog: {
      "@type": "OfferCatalog",
      name: `Tarifs ${ss.label}`,
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
      <BreadcrumbSchema items={[{ name: "Nos services", path: "/nos-services" }, { name: ss.label, path: `/nos-services/${slug}` }]} />
      <ServiceClient ss={ss} others={others} />
    </>
  )
}
