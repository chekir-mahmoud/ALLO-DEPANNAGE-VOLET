import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"
import EstimationClient from "./estimation-client"

export const metadata = pageMetadata({
  title: "Simulateur de prix de débarras gratuit | Débarras Proximité",
  description: "Estimez gratuitement le prix de votre débarras (maison, appartement, cave, garage, local) en 1 minute, puis recevez un devis ferme et gratuit.",
  path: "/estimation",
})

export default function EstimationPage() {
  return (
    <>
      <BreadcrumbSchema items={[{ name: "Estimation", path: "/estimation" }]} />
      <EstimationClient />
    </>
  )
}
