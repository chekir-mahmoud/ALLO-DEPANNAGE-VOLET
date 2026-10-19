import type { Metadata } from "next"
import { SITE_URL } from "@/lib/site"
import HomeClient from "./home-client"

// Page d'accueil nationale (aucune ville ni département mis en avant)
// Pas de régénération périodique : le contenu vient du code et ne change qu'au déploiement,
// qui vide le cache. Chaque page est calculée une seule fois par déploiement.
export const revalidate = false

const TITLE = "Débarras de maison partout en France | Débarras Proximité"
const DESCRIPTION =
  "Débarras de maison, appartement, succession, cave, grenier et garage partout en France. Devis gratuit le jour même, intervention sous 24/48h."

export const metadata: Metadata = {
  title: TITLE,
  description: DESCRIPTION,
  keywords: [
    "débarras maison",
    "débarras appartement",
    "débarras succession",
    "vider une maison",
    "entreprise de débarras",
    "débarras cave grenier",
    "devis débarras gratuit",
  ],
  alternates: { canonical: "/" },
  openGraph: {
    type: "website",
    locale: "fr_FR",
    siteName: "Débarras Proximité",
    title: TITLE,
    description: DESCRIPTION,
    url: `${SITE_URL}/`,
    images: [{ url: "/images/debarras-gratuit-768x512.jpg", alt: "Débarras de maison par Débarras Proximité" }],
  },
  twitter: {
    card: "summary_large_image",
    title: TITLE,
    description: DESCRIPTION,
    images: ["/images/debarras-gratuit-768x512.jpg"],
  },
}

export default function HomePage() {
  return <HomeClient />
}
