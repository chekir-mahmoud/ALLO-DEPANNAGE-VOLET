import { pageMetadata } from "@/lib/seo"
import BreadcrumbSchema from "@/components/breadcrumb-schema"
import EstimationClient from "./estimation-client"

export const metadata = pageMetadata({
  title: "Simulateur de prix volet roulant gratuit | Allo Dépannage Volet",
  description: "Estimez gratuitement le prix d'un dépannage, d'une réparation, d'un moteur, d'une motorisation ou d'une pose de volet roulant en 1 minute, puis recevez un devis gratuit.",
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
