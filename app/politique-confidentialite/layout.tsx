import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Politique de confidentialité | Débarras Proximité",
  description: "Politique de confidentialité de Débarras Proximité : données collectées, utilisation, conservation et exercice de vos droits (RGPD).",
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
