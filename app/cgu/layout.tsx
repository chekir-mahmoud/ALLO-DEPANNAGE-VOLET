import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Conditions générales d'utilisation | Débarras Proximité",
  description: "Conditions générales d'utilisation du site Débarras Proximité : accès au site, responsabilités, propriété intellectuelle et droit applicable.",
  path: "/cgu",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "CGU", path: "/cgu" }]} />
      {children}
    </>
  )
}
