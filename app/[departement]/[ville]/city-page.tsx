import type { Metadata } from "next"
import { SITE_URL, cityPath } from "@/lib/site"
import ClientVillePage from "./client"
import { getPhoneByDepartment } from "@/lib/phone-config"
import {
  getDepartmentConfig,
  getCityDataByDepartment,
  getDisplayedDepartmentCities,
  cityHasSousServices,
  type CityData,
  type DepartmentServiceConfig,
} from "@/lib/service-config"
import { notFound } from "next/navigation"
import { redirectToKnownCity } from "@/lib/city-redirect"

// Page ville /[departement]/[ville]

export function getCityMetadata(departement: string, villeSlug: string): Metadata {
  const deptConfig = getDepartmentConfig(departement)
  const cityData = getCityDataByDepartment(departement, villeSlug)

  if (!deptConfig || !cityData) {
    return {
      title: "Page non trouvée",
      description: "Cette page n'existe pas.",
    }
  }

  return cityMetadata(departement, villeSlug, deptConfig, cityData)
}

function cityMetadata(
  departement: string,
  villeSlug: string,
  deptConfig: DepartmentServiceConfig,
  cityData: CityData,
): Metadata {
  return {
    title: `Dépannage volet roulant ${cityData.name} (${cityData.postalCode}) 7j/7 | Allo Dépannage Volet`,
    description: `Dépannage, réparation, installation et motorisation de volets roulants à ${cityData.name} (${cityData.postalCode}), 7j/7. Rideaux métalliques et stores, toutes marques, devis gratuit.`,
    keywords: [
      `dépannage volet roulant ${cityData.name}`,
      `réparation volet roulant ${cityData.name}`,
      `volet roulant bloqué ${cityData.name}`,
      `moteur volet roulant ${cityData.name}`,
      `motorisation volet roulant ${cityData.name}`,
      `installation volet roulant ${cityData.name}`,
      `rideau métallique ${cityData.name}`,
      `store banne ${cityData.name}`,
      `dépannage volet roulant ${cityData.postalCode}`,
      `réparateur volet roulant ${cityData.postalCode}`,
      `dépannage volet roulant ${deptConfig.name}`,
    ],
    alternates: {
      canonical: cityPath(departement, villeSlug),
    },
    openGraph: {
      title: `Dépannage volet roulant ${cityData.name} (${cityData.postalCode}) 7j/7 | Allo Dépannage Volet`,
      description: `Dépannage, réparation, installation et motorisation de volets roulants à ${cityData.name}, 7j/7. Toutes marques, devis gratuit.`,
      url: `${SITE_URL}${cityPath(departement, villeSlug)}`,
      siteName: "Allo Dépannage Volet",
      images: [
        {
          url: `${SITE_URL}/images/volet/technicien-reparation-volet-roulant.jpg`,
          width: 1536,
          height: 1024,
          alt: `Dépannage de volets roulants à ${cityData.name} par Allo Dépannage Volet`,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Dépannage volet roulant ${cityData.name} | Allo Dépannage Volet`,
      description: `Dépannage, réparation et motorisation de volets roulants à ${cityData.name} (${cityData.postalCode}), 7j/7. Devis gratuit.`,
      images: [`${SITE_URL}/images/volet/technicien-reparation-volet-roulant.jpg`],
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

export default function CityPage({ departement, villeSlug }: { departement: string; villeSlug: string }) {
  const deptConfig = getDepartmentConfig(departement)
  const cityData = getCityDataByDepartment(departement, villeSlug)

  if (deptConfig && !cityData) redirectToKnownCity(departement, villeSlug)

  if (!deptConfig || !cityData) {
    notFound()
  }

  const phoneConfig = getPhoneByDepartment(departement)
  const departmentCities = getDisplayedDepartmentCities(departement)

  return (
    <ClientVillePage
      cityData={{ ...cityData, population: cityData.population ?? "" }}
      phoneConfig={phoneConfig}
      initialVilleSlug={villeSlug}
      departmentSlug={departement}
      departmentConfig={deptConfig}
      departmentCities={departmentCities}
      hasSousServices={cityHasSousServices(departement, villeSlug)}
    />
  )
}