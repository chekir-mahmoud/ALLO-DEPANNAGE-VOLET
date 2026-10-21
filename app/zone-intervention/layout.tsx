import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Zone d'intervention : partout en France | Allo Dépannage Volet",
  description: "Dépannage, réparation et motorisation de volets roulants partout en France métropolitaine et en outre-mer, 7j/7 : découvrez nos départements desservis.",
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
