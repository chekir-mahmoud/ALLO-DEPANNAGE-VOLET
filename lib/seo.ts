import type { Metadata } from "next"

// Métadonnées d'une page : titre, description, URL canonique et aperçus de partage
// (Open Graph / Twitter) propres à la page. Les pages qui n'utilisaient que la configuration
// générale annonçaient l'URL et l'image de l'accueil au partage.

const DEFAULT_IMAGE = "/images/debarras-gratuit-768x512.jpg"

export function pageMetadata({
  title,
  description,
  path,
  image = DEFAULT_IMAGE,
  imageAlt,
}: {
  title: string
  description: string
  path: string
  image?: string
  imageAlt?: string
}): Metadata {
  const images = [{ url: image, alt: imageAlt ?? title }]
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      locale: "fr_FR",
      siteName: "Débarras Proximité",
      title,
      description,
      url: path,
      images,
    },
    twitter: { card: "summary_large_image", title, description, images: [image] },
  }
}
