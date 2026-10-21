import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "FAQ volet roulant : panne, prix, motorisation | Allo Dépannage Volet",
  description: "Toutes les réponses sur le dépannage, la réparation, la motorisation et l'installation de volets roulants : devis, tarifs, délais, paiement et garanties.",
  path: "/foire-aux-questions",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Questions fréquentes", path: "/foire-aux-questions" }]} />
      {children}
    </>
  )
}
