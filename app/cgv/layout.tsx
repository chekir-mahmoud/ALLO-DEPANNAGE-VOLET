import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Conditions générales de vente | Allo Dépannage Volet",
  description: "Conditions générales de vente d'Allo Dépannage Volet : devis gratuit, commande, paiement, rétractation, garanties et réclamations pour le dépannage et la pose de volets roulants.",
  path: "/cgv",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "CGV", path: "/cgv" }]} />
      {children}
    </>
  )
}
