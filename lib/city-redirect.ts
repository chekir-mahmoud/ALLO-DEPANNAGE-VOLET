import { permanentRedirect } from "next/navigation"
import { cityPath } from "@/lib/site"
import { ACTIVE_DEPARTMENTS, getCitiesByDepartment } from "@/lib/service-config"

// Récupère les anciennes URL de villes qui renvoyaient une 404 :
//  - ville renommée dans le même département : /seine-maritime/le-havre -> /seine-maritime/le_havre
//  - ville rattachée au mauvais département : /cher/issoudun -> /indre/issoudun
// La redirection n'a lieu que si une seule ville correspond, sinon la page reste en 404.

const slugify = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe").replace(/æ/g, "ae")
    .toLowerCase().replace(/[^a-z0-9]+/g, "-").replace(/^-+|-+$/g, "")

// Identifiants qu'on accepte pour une ville : sa clé, sa clé avec "-" au lieu de "_", et son nom
const aliasesOf = (key: string, name?: string) => {
  const set = new Set([key, key.replace(/_/g, "-")])
  if (name) set.add(slugify(name))
  return set
}

function findCity(departmentSlug: string, citySlug: string): { departement: string; ville: string } | null {
  const wanted = slugify(citySlug)

  // 1. Même département, ville renommée
  const localCities = Object.entries(getCitiesByDepartment(departmentSlug) ?? {})
  const local = localCities.filter(([key, data]) => aliasesOf(key, data?.name).has(wanted))
  if (local.length === 1) return { departement: departmentSlug, ville: local[0][0] }
  if (local.length > 1) return null

  // Homonyme probable dans le département (ex. "montreuil" vs "Montreuil-sur-Mer") :
  // on ne redirige pas vers une autre ville du même nom ailleurs en France
  const localHomonym = localCities.some(([key, data]) =>
    [...aliasesOf(key, data?.name)].some((a) => a.startsWith(`${wanted}-`)))
  if (localHomonym) return null

  // 2. Autre département (une seule correspondance exacte sur tout le site)
  const matches: { departement: string; ville: string }[] = []
  for (const dept of Object.keys(ACTIVE_DEPARTMENTS)) {
    if (dept === departmentSlug) continue
    for (const [key, data] of Object.entries(getCitiesByDepartment(dept) ?? {})) {
      if (aliasesOf(key, data?.name).has(wanted)) matches.push({ departement: dept, ville: key })
    }
    if (matches.length > 1) return null
  }
  return matches.length === 1 ? matches[0] : null
}

/** À appeler quand la ville est introuvable, juste avant notFound(). */
export function redirectToKnownCity(departmentSlug: string, citySlug: string, rest?: string) {
  const found = findCity(departmentSlug, citySlug)
  if (found && (found.departement !== departmentSlug || found.ville !== citySlug)) {
    permanentRedirect(rest ? `/${found.departement}/${found.ville}/${rest}` : cityPath(found.departement, found.ville))
  }
}
