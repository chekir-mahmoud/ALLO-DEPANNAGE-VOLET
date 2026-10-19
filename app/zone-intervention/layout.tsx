import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Zone d'intervention : partout en France | Débarras Proximité",
  description: "Débarras Proximité intervient partout en France métropolitaine et en outre-mer : découvrez nos départements desservis. Devis gratuit le jour même.",
  path: "/zone-intervention",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Zone d'intervention", path: "/zone-intervention" }]} />
      {children}
    </>
  )
}
