// ─── "dans toute l'Isère" / "dans toute la Gironde" / "dans tout le Rhône" ─────
// Le champ displayName de ACTIVE_DEPARTMENTS ("en X", "dans le/la/l' X", "à X")
// ne permet pas de déduire le genre grammatical de façon fiable (ex: "en Var",
// "en Vaucluse", "en Aveyron" sont pourtant masculins). On utilise donc une
// table de genre dédiée pour construire correctement la formule "tout(e) ...".
type DeptGender = "m" | "f" | "mp" | "fp" | "none" | "f-article-included"

const DEPARTMENT_GENDER: Record<string, DeptGender> = {
  gironde: "f", isere: "f", rhone: "m", "haute-savoie": "f", "loire-atlantique": "f",
  herault: "m", "haute-garonne": "f", ain: "m", ardeche: "f", drome: "f", loire: "f",
  savoie: "f", allier: "m", cantal: "m", "haute-loire": "f", "puy-de-dome": "m",
  charente: "f", "charente-maritime": "f", martinique: "f", guadeloupe: "f",
  paris: "none", "alpes-maritimes": "fp", "bouches-du-rhone": "fp", "val-d-oise": "m",
  "cote-d-or": "f", aisne: "f", "haute-marne": "f", cher: "m", calvados: "m", tarn: "m",
  "maine-et-loire": "m", mayenne: "f", sarthe: "f", vendee: "f",
  "alpes-de-haute-provence": "fp", "hautes-alpes": "fp", var: "m", vaucluse: "m",
  ariege: "f", aude: "f", aveyron: "m", gard: "m", gers: "m", lot: "m", lozere: "f",
  "hautes-pyrenees": "fp", "pyrenees-orientales": "fp", "tarn-et-garonne": "m",
  correze: "f", creuse: "f", doubs: "m", jura: "m", nievre: "f", "haute-saone": "f",
  "saone-et-loire": "f", yonne: "f", "territoire-de-belfort": "m", "cotes-d-armor": "fp",
  finistere: "m", "ille-et-vilaine": "f", morbihan: "m", "eure-et-loir": "m", indre: "f",
  "indre-et-loire": "f", "loir-et-cher": "m", loiret: "m", dordogne: "f", landes: "fp",
  "lot-et-garonne": "m", "pyrenees-atlantiques": "fp", "deux-sevres": "fp", vienne: "f",
  "haute-vienne": "f", ardennes: "fp", aube: "f", marne: "f", "meurthe-et-moselle": "f",
  meuse: "f", moselle: "f", "bas-rhin": "m", "haut-rhin": "m", vosges: "fp", nord: "m",
  oise: "f", "pas-de-calais": "m", somme: "f", "seine-et-marne": "f", yvelines: "fp",
  essonne: "f", "hauts-de-seine": "mp", "seine-saint-denis": "f", "val-de-marne": "m",
  eure: "f", manche: "f", orne: "f", "seine-maritime": "f", "corse-du-sud": "f",
  "haute-corse": "f", guyane: "f", reunion: "f-article-included", mayotte: "none",
}

export function getDepartmentAreaPhrase(
  departmentConfig?: { name: string; displayName: string } | null,
  departmentSlug?: string,
): string {
  const name = departmentConfig?.name
  if (!name) return "dans toute la région"

  const gender = departmentSlug ? DEPARTMENT_GENDER[departmentSlug] : undefined
  if (!gender) return departmentConfig?.displayName ?? "dans toute la région"

  if (gender === "none") return `dans tout ${name}`
  if (gender === "f-article-included") return `dans toute ${name}`
  if (gender === "fp") return `dans toutes les ${name}`
  if (gender === "mp") return `dans tous les ${name}`

  // "Haute-X" / "Hautes-X" / "Haut-X" ne s'élident jamais (h aspiré) : "la Haute-Savoie", "le Haut-Rhin"
  const elides = /^[aeiouyéèàâêîôû]/i.test(name) && !/^Hautes?-|^Haut-/.test(name)
  if (gender === "m") return elides ? `dans tout l'${name}` : `dans tout le ${name}`
  return elides ? `dans toute l'${name}` : `dans toute la ${name}`
}
