import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "À propos : votre entreprise de débarras | Débarras Proximité",
  description: "Débarras Proximité, entreprise de débarras présente partout en France : logements, locaux, succession, cave et grenier. Devis gratuit le jour même.",
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
