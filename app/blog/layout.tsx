import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Blog : conseils pour votre débarras | Débarras Proximité",
  description: "Nos guides pour préparer un débarras, connaître les prix, choisir son entreprise, gérer une succession, trier et recycler vos objets.",
  path: "/blog",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
