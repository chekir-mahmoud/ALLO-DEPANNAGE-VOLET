import type { Metadata } from "next"
import { SITE_URL, COMPANY_ADDRESS } from "@/lib/site"
import { notFound } from "next/navigation"
import { getPhoneByDepartment } from "@/lib/phone-config"
import { ACTIVE_DEPARTMENTS, getDepartmentConfig, getCitiesByDepartment } from "@/lib/service-config"
import DepartmentPageClient from "./client"
import { getDepartmentFaq } from "@/lib/department-faq"

export const dynamicParams = true
// Pas de régénération périodique : le contenu vient du code et ne change qu'au déploiement,
// qui vide le cache. Chaque page est calculée une seule fois par déploiement.
export const revalidate = false

// Les ~100 pages départements sont pré-générées au build : servies directement par le CDN,
// sans rendu ni écriture ISR à la première visite
export async function generateStaticParams() {
  return Object.keys(ACTIVE_DEPARTMENTS).map((departement) => ({ departement }))
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
      description: "Ce département n'est pas encore couvert par nos services de dépannage de volets roulants.",
    }
  }

  return {
    title: `Dépannage volet roulant ${deptConfig.displayName} (${deptConfig.postalCode}) 7j/7`,
    description: `Dépannage, réparation, installation et motorisation de volets roulants ${deptConfig.displayName} (${deptConfig.postalCode}), 7j/7. Rideaux métalliques et stores, toutes marques, devis gratuit.`,
    keywords: [
      `dépannage volet roulant ${deptConfig.name}`,
      `réparation volet roulant ${deptConfig.name}`,
      `volet roulant bloqué ${deptConfig.name}`,
      `moteur volet roulant ${deptConfig.name}`,
      `motorisation volet roulant ${deptConfig.name}`,
      `installation volet roulant ${deptConfig.name}`,
      `rideau métallique ${deptConfig.name}`,
      `store banne ${deptConfig.name}`,
      `dépannage volet roulant ${deptConfig.postalCode}`,
      `réparateur volet roulant ${deptConfig.postalCode}`,
    ],
    alternates: {
      canonical: `/${departement}`,
    },
    openGraph: {
      title: `Dépannage volet roulant ${deptConfig.displayName} (${deptConfig.postalCode}) 7j/7`,
      description: `Dépannage, réparation, installation et motorisation de volets roulants ${deptConfig.displayName}, 7j/7. Toutes marques, devis gratuit.`,
      url: `${SITE_URL}/${departement}`,
      siteName: "Allo Dépannage Volet",
      images: [
        {
          url: `${SITE_URL}/images/volet/technicien-reparation-volet-roulant.jpg`,
          width: 1536,
          height: 1024,
          alt: `Dépannage de volets roulants ${deptConfig.displayName} par Allo Dépannage Volet`,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Dépannage volet roulant ${deptConfig.displayName} | Allo Dépannage Volet`,
      description: `Dépannage, réparation et motorisation de volets roulants ${deptConfig.displayName} (${deptConfig.postalCode}), 7j/7. Devis gratuit.`,
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

  const phoneConfig = getPhoneByDepartment(departement)

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
        "name": `Dépannage de volets roulants ${deptConfig.displayName}`,
        "description": `Dépannage, réparation, installation et motorisation de volets roulants, rideaux métalliques et stores ${deptConfig.displayName} (${deptConfig.postalCode}), 7j/7, toutes marques.`,
        "provider": {
          "@type": "LocalBusiness",
          "name": "Allo Dépannage Volet",
          "url": SITE_URL,
          "telephone": phoneConfig.display,
          "address": COMPANY_ADDRESS,
          "areaServed": {
            "@type": "AdministrativeArea",
            "name": deptConfig.name,
          },
          "priceRange": "€€",
        },
        "serviceType": "Dépannage de volets roulants",
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
        "mainEntity": getDepartmentFaq(deptConfig).map((f) => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
      },
    ],
  }

  return (
    <>
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(structuredData) }} />

      <DepartmentPageClient
        departmentSlug={departement}
        deptConfig={deptConfig}
        phoneConfig={phoneConfig}
        cities={cities}
      />
    </>
  )
}
