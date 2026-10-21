import type React from "react"
import { pageMetadata } from "@/lib/seo"

export const metadata = pageMetadata({
  title: "Nos services : volets roulants, rideaux et stores | Allo Dépannage Volet",
  description: "Dépannage, réparation, installation et motorisation de volets roulants, rideaux métalliques et stores partout en France, 7j/7. Toutes marques, devis gratuit.",
  path: "/nos-services",
})

export default function Layout({ children }: { children: React.ReactNode }) {
  return children
}
