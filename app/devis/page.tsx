import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"
import DevisClient from "./client"

export const metadata = pageMetadata({
  title: "Devis débarras gratuit | Débarras Proximité",
  description: "Devis gratuit et sans engagement pour votre débarras de maison, cave, grenier ou succession, partout en France. Rappel sous 30 minutes.",
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
