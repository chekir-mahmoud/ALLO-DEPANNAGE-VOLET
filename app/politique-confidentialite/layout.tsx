import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Politique de confidentialité | Allo Dépannage Volet",
  description: "Politique de confidentialité de Allo Dépannage Volet : données collectées, utilisation, conservation et exercice de vos droits (RGPD).",
  path: "/politique-confidentialite",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Politique de confidentialité", path: "/politique-confidentialite" }]} />
      {children}
    </>
  )
}
