import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import TarifsClient from "./client"

export const metadata = pageMetadata({
  title: "Tarifs d'un débarras partout en France | Débarras Proximité",
  description: "Prix d'un débarras de maison, appartement, cave, grenier ou succession : par logement, au volume ou par objet. Devis gratuit le jour même.",
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
