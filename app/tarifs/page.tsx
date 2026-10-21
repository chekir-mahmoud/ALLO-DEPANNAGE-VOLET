import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import TarifsClient from "./client"

export const metadata = pageMetadata({
  title: "Prix dépannage et réparation volet roulant | Allo Dépannage Volet",
  description: "Tarifs du dépannage, de la réparation, de l'installation et de la motorisation de volets roulants, rideaux métalliques et stores. Devis gratuit, sans frais cachés.",
  path: "/tarifs",
})

export default function TarifsPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Tarifs", path: "/tarifs" }]} />
      <TarifsClient phoneConfig={DEFAULT_PHONE} />
    </>
  )
}
