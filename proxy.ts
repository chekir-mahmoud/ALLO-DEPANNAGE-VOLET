import { NextResponse } from "next/server"
import type { NextRequest } from "next/server"

// "couffé" -> "couffe", "Montreal_gers" -> "montreal_gers"
const normalizeSlug = (s: string) =>
  s.normalize("NFD").replace(/[̀-ͯ]/g, "").replace(/œ/g, "oe").replace(/æ/g, "ae").toLowerCase()

export function proxy(request: NextRequest) {
  const path = request.nextUrl.pathname

  // 308 : URL de villes avec accents ou majuscules -> identifiant normalisé
  // (pages /[departement]/[ville]/..., on ignore l'API et les fichiers)
  let decodedPath = path
  try { decodedPath = decodeURIComponent(path) } catch {}
  if (/[^\x00-\x7F]|[A-Z]/.test(decodedPath) && !decodedPath.startsWith("/api/") && !decodedPath.includes(".")) {
    const normalized = decodedPath.split("/").map(normalizeSlug).join("/")
    if (normalized !== decodedPath) {
      const url = request.nextUrl.clone()
      url.pathname = normalized
      return NextResponse.redirect(url, 308)
    }
  }

  return NextResponse.next()
}

export const config = {
  // Exécuté seulement pour les chemins contenant une majuscule ou un caractère encodé (accents)
  // (fichiers, ressources Next.js et API exclus)
  matcher: ["/((?!_next/|api/|.*\\.[A-Za-z0-9]+$).*[A-Z%].*)"],
}
