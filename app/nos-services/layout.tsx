import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Nos services de débarras partout en France | Débarras Proximité",
  description: "Nos prestations de débarras partout en France : maison, succession, cave, grenier, garage, fin de chantier et Diogène. Devis gratuit le jour même.",
  path: "/nos-services",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
