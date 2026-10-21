import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "À propos : spécialiste du volet roulant | Allo Dépannage Volet",
  description: "Allo Dépannage Volet, spécialiste du dépannage, de la réparation et de la motorisation de volets roulants partout en France, 7j/7. Toutes marques, devis gratuit.",
  path: "/a-propos",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "À propos", path: "/a-propos" }]} />
      {children}
    </>
  )
}
