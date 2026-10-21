import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"
import DevisClient from "./client"

export const metadata = pageMetadata({
  title: "Devis volet roulant gratuit | Allo Dépannage Volet",
  description: "Devis gratuit et sans engagement pour le dépannage, la réparation, l'installation ou la motorisation de vos volets roulants, partout en France. Rappel sous 30 minutes.",
  path: "/devis",
})

export default function DevisPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Demande de devis", path: "/devis" }]} />
      <DevisClient />
    </>
  )
}
