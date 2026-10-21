import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Blog : conseils volets roulants | Allo Dépannage Volet",
  description: "Nos guides sur les volets roulants : volet bloqué, prix d'un dépannage, moteur en panne, motorisation, lames, sangles, entretien et rideaux métalliques.",
  path: "/blog",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
