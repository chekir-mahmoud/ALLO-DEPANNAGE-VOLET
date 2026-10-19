import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Mentions légales | Débarras Proximité",
  description: "Mentions légales du site Débarras Proximité : éditeur, hébergeur, propriété intellectuelle et conditions d'utilisation du site.",
  path: "/mentions-legales",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Mentions légales", path: "/mentions-legales" }]} />
      {children}
    </>
  )
}
