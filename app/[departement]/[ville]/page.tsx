import type { Metadata } from "next"
import CityPage, { getCityMetadata } from "./city-page"

export const dynamicParams = true
// Pas de régénération périodique : le contenu vient du code et ne change qu'au déploiement,
// qui vide le cache. Chaque page est calculée une seule fois par déploiement.
export const revalidate = false

// Aucune page pré-générée au build : chaque page est rendue à sa première visite,
// puis servie depuis le cache Vercel jusqu'au prochain déploiement.
export async function generateStaticParams() {
  return []
}

type Params = { params: Promise<{ departement: string; ville: string }> }

export async function generateMetadata({ params }: Params): Promise<Metadata> {
  const { departement, ville } = await params
  return getCityMetadata(departement, ville)
}

export default async function Page({ params }: Params) {
  const { departement, ville } = await params
  return <CityPage departement={departement} villeSlug={ville} />
}
