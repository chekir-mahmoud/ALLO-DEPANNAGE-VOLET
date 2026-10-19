import { SITE_URL } from "@/lib/site"

// Fil d'Ariane pour Google (données structurées BreadcrumbList).
// « Accueil » est ajouté automatiquement en premier élément.
export default function BreadcrumbSchema({ items }: { items: { name: string; path: string }[] }) {
  const all = [{ name: "Accueil", path: "/" }, ...items]
  const data = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: all.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: `${SITE_URL}${item.path === "/" ? "/" : item.path}`,
    })),
  }
  return <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(data) }} />
}
