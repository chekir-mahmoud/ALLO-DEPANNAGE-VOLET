import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Politique de cookies | Allo Dépannage Volet",
  description: "Les cookies utilisés sur le site Allo Dépannage Volet, leur utilité et la façon de gérer ou refuser vos préférences.",
  path: "/cookies",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Cookies", path: "/cookies" }]} />
      {children}
    </>
  )
}
