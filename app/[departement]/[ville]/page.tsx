import type { Metadata } from "next"
import CityPage, { getCityMetadata } from "./city-page"
import DepartmentServicePage, { getDepartmentServiceMetadata, isDepartmentServiceSlug } from "./department-service-page"
import { ACTIVE_DEPARTMENTS } from "@/lib/service-config"
import { SOUS_SERVICES_VOLET } from "@/lib/sous-services/volet-roulant"

export const dynamicParams = true
// Pas de régénération périodique : le contenu vient du code et ne change qu'au déploiement,
// qui vide le cache. Chaque page est calculée une seule fois par déploiement.
export const revalidate = false

// Pages villes : aucune pré-générée au build, chacune est rendue à sa première visite,
// puis servie depuis le cache Vercel jusqu'au prochain déploiement.
// Pages prestation par département (/gironde/depannage-volet-roulant, ~600) : pré-générées au build.
export async function generateStaticParams() {
  return Object.keys(ACTIVE_DEPARTMENTS).flatMap((departement) =>
    SOUS_SERVICES_VOLET.map((ss) => ({ departement, ville: ss.slug })),
  )
}

type Params = { params: Promise<{ departement: string; ville: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { departement, ville } = await params
  if (isDepartmentServiceSlug(ville)) return getDepartmentServiceMetadata(departement, ville)
  return getCityMetadata(departement, ville)
}

export default async function Page({ params }: Params) {
  const { departement, ville } = await params
  if (isDepartmentServiceSlug(ville)) return <DepartmentServicePage departement={departement} slug={ville} />
  return <CityPage departement={departement} villeSlug={ville} />
}
