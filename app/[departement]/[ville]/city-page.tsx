import type { Metadata } from "next"
import { SITE_URL, cityPath } from "@/lib/site"
import ClientVillePage from "./client"
import { getPhoneByDepartmentService } from "@/lib/phone-config"
import {
  getDepartmentConfig,
  getCityDataByDepartment,
  getCitiesByDepartment,
  type CityData,
  type DepartmentServiceConfig,
} from "@/lib/service-config"
import { getTestimonialsByServiceAndDepartment } from "@/lib/testimonials"
import { notFound } from "next/navigation"
import { getDebarrasCityContentBlocks } from "@/lib/service-debarras-city-content"
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
    title: `Débarras de maison ${cityData.name} (${cityData.postalCode}) | Débarras Proximité`,
    description: `Débarras de maison à ${cityData.name} (${cityData.postalCode}) : vidage complet, tri et recyclage, succession, cave et grenier. Devis gratuit le jour même, intervention 24/48h.`,
    keywords: [
      `débarras maison ${cityData.name}`,
      `débarras ${cityData.name}`,
      `vidage maison ${cityData.name}`,
      `enlèvement encombrants ${cityData.name}`,
      `débarras succession ${cityData.name}`,
      `vide maison ${cityData.name}`,
      `débarras appartement ${cityData.name}`,
      `débarras cave grenier ${cityData.name}`,
      `débarras professionnel ${cityData.postalCode}`,
      `débarrasser maison ${cityData.postalCode}`,
      `débarras maison ${deptConfig.name}`,
    ],
    alternates: {
      canonical: cityPath(departement, villeSlug),
    },
    openGraph: {
      title: `Débarras de maison ${cityData.name} (${cityData.postalCode}) | Débarras Proximité`,
      description: `Débarras de maison à ${cityData.name} : vidage complet, tri et recyclage, succession, cave et grenier. Devis gratuit le jour même, intervention 24/48h.`,
      url: `${SITE_URL}${cityPath(departement, villeSlug)}`,
      siteName: "Débarras Proximité",
      images: [
        {
          url: "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Debarras%20Succession-d8XmzDnqvJzN1OeVus3EuipxZXBP78.jpg",
          width: 1200,
          height: 630,
          alt: `Débarras et vidage complet de maison à ${cityData.name} par Débarras Proximité`,
        },
      ],
      locale: "fr_FR",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: `Débarras de maison ${cityData.name} | Débarras Proximité`,
      description: `Débarras de maison à ${cityData.name} (${cityData.postalCode}). Devis gratuit le jour même, intervention 24/48h.`,
      images: [
        "https://hebbkx1anhila5yf.public.blob.vercel-storage.com/Debarras%20Succession-d8XmzDnqvJzN1OeVus3EuipxZXBP78.jpg",
      ],
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

  const cityContent = getDebarrasCityContentBlocks(
    cityData.name,
    cityData.postalCode,
    villeSlug
  )

  const phoneConfig = getPhoneByDepartmentService(departement, "debarras-maison")
  const testimonials = getTestimonialsByServiceAndDepartment("debarras-maison", departement)
  const departmentCities = getCitiesByDepartment(departement)

  return (
    <ClientVillePage
      cityData={cityData}
      phoneConfig={phoneConfig}
      initialVilleSlug={villeSlug}
      serviceSlug="debarras-maison"
      departmentSlug={departement}
      departmentConfig={deptConfig}
      testimonials={testimonials}
      departmentCities={departmentCities}
      cityContent={cityContent}
    />
  )
}