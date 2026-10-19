import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Conditions générales de vente | Débarras Proximité",
  description: "Conditions générales de vente de Débarras Proximité : devis, commande, paiement, délais d'intervention et responsabilités.",
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
