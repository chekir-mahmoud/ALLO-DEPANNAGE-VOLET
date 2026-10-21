import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site"
import HomeClient from "./home-client"

// Page d'accueil nationale (aucune ville ni département mis en avant)
// Pas de régénération périodique : le contenu vient du code et ne change qu'au déploiement,
// qui vide le cache. Chaque page est calculée une seule fois par déploiement.
export const revalidate = false

const TITLE = "Dépannage et réparation volet roulant 7j/7 partout en France"
const DESCRIPTION =
  "Dépannage, réparation, installation et motorisation de volets roulants 7j/7 partout en France. Rideaux métalliques et stores. Devis gratuit."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "dépannage volet roulant",
    "réparation volet roulant",
    "volet roulant bloqué",
    "motorisation volet roulant",
    "remplacement moteur volet roulant",
    "installation volet roulant",
    "rideau métallique",
    "réparation store banne",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Allo Dépannage Volet",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/`,
    images: [{ url: "/images/volet/technicien-reparation-volet-roulant.jpg", alt: "Dépannage de volets roulants par Allo Dépannage Volet" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/volet/technicien-reparation-volet-roulant.jpg"],
  },
}

export default function HomePage() {
  return <HomeClient />
}
