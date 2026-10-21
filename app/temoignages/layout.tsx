import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Avis clients : dépannage de volets roulants | Allo Dépannage Volet",
  description: "Les avis de nos clients sur le dépannage, la réparation, l'installation et la motorisation de leurs volets roulants, rideaux métalliques et stores, partout en France.",
  path: "/temoignages",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Avis clients", path: "/temoignages" }]} />
      {children}
    </>
  )
}
