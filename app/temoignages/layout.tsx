import type React from "react"
import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

export const metadata = pageMetadata({
  title: "Avis clients : 4,8/5 sur 480 avis | Débarras Proximité",
  description: "Les avis de nos clients sur leurs débarras de maison, cave, grenier et succession partout en France : 4,8/5 sur 480 avis Google.",
  path: "/temoignages",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Avis clients", path: "/temoignages" }]} />
      {children}
    </>
  )
}
