import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Politique de cookies | Débarras Proximité",
  description: "Les cookies utilisés sur le site Débarras Proximité, leur utilité et la façon de gérer ou refuser vos préférences.",
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
