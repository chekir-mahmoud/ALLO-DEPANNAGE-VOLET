import { ACTIVE_DEPARTMENTS, type DepartmentServiceConfig } from "./departments"
import { VALID_CITIES as GIRONDE_CITIES } from "./city-config"
import { VALID_CITIES as ISERE_CITIES } from "./isere-city-config"
import { VALID_CITIES as RHONE_CITIES } from "./rhone-city-config"
import { VALID_CITIES as HAUTE_SAVOIE_CITIES } from "./haute-savoie-city-config"
import { VALID_CITIES as LOIRE_ATLANTIQUE_CITIES } from "./loire-atlantique-city-config"
import { VALID_CITIES as HERAULT_CITIES } from "./herault-city-config"
import { VALID_CITIES as HAUTE_GARONNE_CITIES } from "./haute-garonne-city-config"
import { VALID_CITIES as AIN_CITIES } from "./ain-city-config"
import { VALID_CITIES as ARDECHE_CITIES } from "./ardeche-city-config"
import { VALID_CITIES as DROME_CITIES } from "./drome-city-config"
import { VALID_CITIES as LOIRE_CITIES } from "./loire-city-config"
import { VALID_CITIES as SAVOIE_CITIES } from "./savoie-city-config"
import { VALID_CITIES as ALLIER_CITIES } from "./allier-city-config"
import { VALID_CITIES as CANTAL_CITIES } from "./cantal-city-config"
import { VALID_CITIES as HAUTE_LOIRE_CITIES } from "./haute-loire-city-config"
import { VALID_CITIES as PUY_DE_DOME_CITIES } from "./puy-de-dome-city-config"
import { VALID_CITIES as CHARENTE_CITIES } from "./charente-city-config"
import { VALID_CITIES as CHARENTE_MARITIME_CITIES } from "./charente-maritime-city-config"
import { VALID_CITIES as CORREZE_CITIES } from "./correze-city-config"
import { VALID_CITIES as CREUSE_CITIES } from "./creuse-city-config"
import { VALID_CITIES as LOIRET_CITIES } from "./loiret-city-config"
import { VALID_CITIES as MAYENNE_CITIES } from "./mayenne-city-config"
import { VALID_CITIES as SARTHE_CITIES } from "./sarthe-city-config"
import { VALID_CITIES as MAINE_ET_LOIRE_CITIES } from "./maine-et-loire-city-config"
import { VALID_CITIES as ARDENNES_CITIES } from "./ardennes-city-config"
import { VALID_CITIES as AUBE_CITIES } from "./aube-city-config"
import { VALID_CITIES as MARNE_CITIES } from "./marne-city-config"
import { VALID_CITIES as MEURTHE_ET_MOSELLE_CITIES } from "./meurthe-et-moselle-city-config"
import { VALID_CITIES as MEUSE_CITIES } from "./meuse-city-config"
import { VALID_CITIES as MOSELLE_CITIES } from "./moselle-city-config"
import { VALID_CITIES as BAS_RHIN_CITIES } from "./bas-rhin-city-config"
import { VALID_CITIES as HAUT_RHIN_CITIES } from "./haut-rhin-city-config"
import { VALID_CITIES as VOSGES_CITIES } from "./vosges-city-config"
import { VALID_CITIES as NORD_CITIES } from "./nord-city-config"
import { VALID_CITIES as OISE_CITIES } from "./oise-city-config"
import { VALID_CITIES as PAS_DE_CALAIS_CITIES } from "./pas-de-calais-city-config"
import { VALID_CITIES as SOMME_CITIES } from "./somme-city-config"
import { VALID_CITIES as SEINE_ET_MARNE_CITIES } from "./seine-et-marne-city-config"
import { VALID_CITIES as YVELINES_CITIES } from "./yvelines-city-config"
import { VALID_CITIES as ESSONNE_CITIES } from "./essonne-city-config"
import { VALID_CITIES as HAUTS_DE_SEINE_CITIES } from "./hauts-de-seine-city-config"
import { VALID_CITIES as SEINE_SAINT_DENIS_CITIES } from "./seine-saint-denis-city-config"
import { VALID_CITIES as VAL_DE_MARNE_CITIES } from "./val-de-marne-city-config"
import { VALID_CITIES as VAL_D_OISE_CITIES } from "./val-d-oise-city-config"
import { VALID_CITIES as EURE_CITIES } from "./eure-city-config"
import { VALID_CITIES as MANCHE_CITIES } from "./manche-city-config"
import { VALID_CITIES as ORNE_CITIES } from "./orne-city-config"
import { VALID_CITIES as SEINE_MARITIME_CITIES } from "./seine-maritime-city-config"
import { VALID_CITIES as DOUBS_CITIES } from "./doubs-city-config"
import { VALID_CITIES as JURA_CITIES } from "./jura-city-config"
import { VALID_CITIES as NIEVRE_CITIES } from "./nievre-city-config"
import { VALID_CITIES as HAUTE_SAONE_CITIES } from "./haute-saone-city-config"
import { VALID_CITIES as SAONE_ET_LOIRE_CITIES } from "./saone-et-loire-city-config"
import { VALID_CITIES as YONNE_CITIES } from "./yonne-city-config"
import { VALID_CITIES as TERRITOIRE_DE_BELFORT_CITIES } from "./territoire-de-belfort-city-config"
import { VALID_CITIES as COTES_D_ARMOR_CITIES } from "./cotes-d-armor-city-config"
import { VALID_CITIES as FINISTERE_CITIES } from "./finistere-city-config"
import { VALID_CITIES as ILLE_ET_VILAINE_CITIES } from "./ille-et-vilaine-city-config"
import { VALID_CITIES as MORBIHAN_CITIES } from "./morbihan-city-config"
import { VALID_CITIES as EURE_ET_LOIR_CITIES } from "./eure-et-loir-city-config"
import { VALID_CITIES as INDRE_CITIES } from "./indre-city-config"
import { VALID_CITIES as INDRE_ET_LOIRE_CITIES } from "./indre-et-loire-city-config"
import { VALID_CITIES as LOIR_ET_CHER_CITIES } from "./loir-et-cher-city-config"
import { VALID_CITIES as DORDOGNE_CITIES } from "./dordogne-city-config"
import { VALID_CITIES as LANDES_CITIES } from "./landes-city-config"
import { VALID_CITIES as LOT_ET_GARONNE_CITIES } from "./lot-et-garonne-city-config"
import { VALID_CITIES as PYRENEES_ATLANTIQUES_CITIES } from "./pyrenees-atlantiques-city-config"
import { VALID_CITIES as DEUX_SEVRES_CITIES } from "./deux-sevres-city-config"
import { VALID_CITIES as VIENNE_CITIES } from "./vienne-city-config"
import { VALID_CITIES as HAUTE_VIENNE_CITIES } from "./haute-vienne-city-config"
import { VALID_CITIES as ARIEGE_CITIES } from "./ariege-city-config"
import { VALID_CITIES as AUDE_CITIES } from "./aude-city-config"
import { VALID_CITIES as AVEYRON_CITIES } from "./aveyron-city-config"
import { VALID_CITIES as GARD_CITIES } from "./gard-city-config"
import { VALID_CITIES as GERS_CITIES } from "./gers-city-config"
import { VALID_CITIES as LOT_CITIES } from "./lot-city-config"
import { VALID_CITIES as LOZERE_CITIES } from "./lozere-city-config"
import { VALID_CITIES as HAUTES_PYRENEES_CITIES } from "./hautes-pyrenees-city-config"
import { VALID_CITIES as PYRENEES_ORIENTALES_CITIES } from "./pyrenees-orientales-city-config"
import { VALID_CITIES as TARN_ET_GARONNE_CITIES } from "./tarn-et-garonne-city-config"
import { VALID_CITIES as TARN_CITIES } from "./tarn-city-config"
import { VALID_CITIES as CALVADOS_CITIES } from "./calvados-city-config"
import { VALID_CITIES as CHER_CITIES } from "./cher-city-config"
import { VALID_CITIES as VENDEE_CITIES } from "./vendee-city-config"
import { VALID_CITIES as ALPES_DE_HAUTE_PROVENCE_CITIES } from "./alpes-de-haute-provence-city-config"
import { VALID_CITIES as HAUTES_ALPES_CITIES } from "./hautes-alpes-city-config"
import { VALID_CITIES as VAR_CITIES } from "./var-city-config"
import { VALID_CITIES as VAUCLUSE_CITIES } from "./vaucluse-city-config"
import { VALID_CITIES as COTE_D_OR_CITIES } from "./cote-d-or-city-config"
import { VALID_CITIES as AISNE_CITIES } from "./aisne-city-config"
import { VALID_CITIES as HAUTE_MARNE_CITIES } from "./haute-marne-city-config"
import { VALID_CITIES as ALPES_MARITIMES_CITIES } from "./alpes-maritimes-city-config"
import { VALID_CITIES as CORSE_DU_SUD_CITIES } from "./corse-du-sud-city-config"
import { VALID_CITIES as HAUTE_CORSE_CITIES } from "./haute-corse-city-config"
import { VALID_CITIES as GUYANE_CITIES } from "./guyane-city-config"
import { VALID_CITIES as REUNION_CITIES } from "./reunion-city-config"
import { VALID_CITIES as MAYOTTE_CITIES } from "./mayotte-city-config"
import { VALID_CITIES as MARTINIQUE_CITIES } from "./martinique-city-config"
import { VALID_CITIES as GUADELOUPE_CITIES } from "./guadeloupe-city-config"
import { VALID_CITIES as BOUCHES_DU_RHONE_CITIES } from "./bouches-du-rhone-city-config"
import { VALID_CITIES as PARIS_CITIES } from "./paris-city-config"


// Type pour les données de ville
export type CityData = { name: string; postalCode: string; population?: string }

// Données brutes des fichiers de villes (les champs varient d'un fichier à l'autre)
function getRawCitiesByDepartment(departmentSlug: string): Record<string, any> {
  switch (departmentSlug.toLowerCase()) {
    case "gironde":
      return GIRONDE_CITIES
    case "isere":
      return ISERE_CITIES
    case "rhone":
      return RHONE_CITIES
    case "haute-savoie":
      return HAUTE_SAVOIE_CITIES
    case "loire-atlantique":
      return LOIRE_ATLANTIQUE_CITIES
    case "herault":
      return HERAULT_CITIES
    case "haute-garonne":
      return HAUTE_GARONNE_CITIES
    case "ain":
      return AIN_CITIES
    case "ardeche":
      return ARDECHE_CITIES
    case "drome":
      return DROME_CITIES
    case "loire":
      return LOIRE_CITIES
    case "savoie":
      return SAVOIE_CITIES
    case "allier":
      return ALLIER_CITIES
    case "cantal":
      return CANTAL_CITIES
    case "haute-loire":
      return HAUTE_LOIRE_CITIES
    case "puy-de-dome":
      return PUY_DE_DOME_CITIES
    case "charente":
      return CHARENTE_CITIES
    case "charente-maritime":
      return CHARENTE_MARITIME_CITIES
    case "correze":
      return CORREZE_CITIES
    case "creuse":
      return CREUSE_CITIES
    case "doubs":
      return DOUBS_CITIES
    case "jura":
      return JURA_CITIES
    case "nievre":
      return NIEVRE_CITIES
    case "haute-saone":
      return HAUTE_SAONE_CITIES
    case "saone-et-loire":
      return SAONE_ET_LOIRE_CITIES
    case "yonne":
      return YONNE_CITIES
    case "territoire-de-belfort":
      return TERRITOIRE_DE_BELFORT_CITIES
    case "cotes-d-armor":
      return COTES_D_ARMOR_CITIES
    case "finistere":
      return FINISTERE_CITIES
    case "ille-et-vilaine":
      return ILLE_ET_VILAINE_CITIES
    case "morbihan":
      return MORBIHAN_CITIES
    case "eure-et-loir":
      return EURE_ET_LOIR_CITIES
    case "indre":
      return INDRE_CITIES
    case "indre-et-loire":
      return INDRE_ET_LOIRE_CITIES
    case "loir-et-cher":
      return LOIR_ET_CHER_CITIES
    case "loiret":
      return LOIRET_CITIES
    case "mayenne":
      return MAYENNE_CITIES
    case "sarthe":
      return SARTHE_CITIES
    case "maine-et-loire":
      return MAINE_ET_LOIRE_CITIES
    case "ardennes":
      return ARDENNES_CITIES
    case "aube":
      return AUBE_CITIES
    case "marne":
      return MARNE_CITIES
    case "meurthe-et-moselle":
      return MEURTHE_ET_MOSELLE_CITIES
    case "meuse":
      return MEUSE_CITIES
    case "moselle":
      return MOSELLE_CITIES
    case "bas-rhin":
      return BAS_RHIN_CITIES
    case "haut-rhin":
      return HAUT_RHIN_CITIES
    case "vosges":
      return VOSGES_CITIES
    case "nord":
      return NORD_CITIES
    case "oise":
      return OISE_CITIES
    case "pas-de-calais":
      return PAS_DE_CALAIS_CITIES
    case "somme":
      return SOMME_CITIES
    case "seine-et-marne":
      return SEINE_ET_MARNE_CITIES
    case "yvelines":
      return YVELINES_CITIES
    case "essonne":
      return ESSONNE_CITIES
    case "hauts-de-seine":
      return HAUTS_DE_SEINE_CITIES
    case "seine-saint-denis":
      return SEINE_SAINT_DENIS_CITIES
    case "val-de-marne":
      return VAL_DE_MARNE_CITIES
    case "val-d-oise":
      return VAL_D_OISE_CITIES
    case "eure":
      return EURE_CITIES
    case "manche":
      return MANCHE_CITIES
    case "orne":
      return ORNE_CITIES
    case "seine-maritime":
      return SEINE_MARITIME_CITIES
    case "doubs":
      return DOUBS_CITIES
    case "jura":
      return JURA_CITIES
    case "nievre":
      return NIEVRE_CITIES
    case "haute-saone":
      return HAUTE_SAONE_CITIES
    case "saone-et-loire":
      return SAONE_ET_LOIRE_CITIES
    case "yonne":
      return YONNE_CITIES
    case "territoire-de-belfort":
      return TERRITOIRE_DE_BELFORT_CITIES
    case "cotes-d-armor":
      return COTES_D_ARMOR_CITIES
    case "finistere":
      return FINISTERE_CITIES
    case "ille-et-vilaine":
      return ILLE_ET_VILAINE_CITIES
    case "morbihan":
      return MORBIHAN_CITIES
    case "eure-et-loir":
      return EURE_ET_LOIR_CITIES
    case "indre":
      return INDRE_CITIES
    case "indre-et-loire":
      return INDRE_ET_LOIRE_CITIES
    case "loir-et-cher":
      return LOIR_ET_CHER_CITIES
    case "dordogne":
      return DORDOGNE_CITIES
    case "landes":
      return LANDES_CITIES
    case "lot-et-garonne":
      return LOT_ET_GARONNE_CITIES
    case "pyrenees-atlantiques":
      return PYRENEES_ATLANTIQUES_CITIES
    case "deux-sevres":
      return DEUX_SEVRES_CITIES
    case "vienne":
      return VIENNE_CITIES
    case "haute-vienne":
      return HAUTE_VIENNE_CITIES
    case "correze":
      return CORREZE_CITIES
    case "ariege":
      return ARIEGE_CITIES
    case "aude":
      return AUDE_CITIES
    case "aveyron":
      return AVEYRON_CITIES
    case "gard":
      return GARD_CITIES
    case "gers":
      return GERS_CITIES
    case "lot":
      return LOT_CITIES
    case "lozere":
      return LOZERE_CITIES
    case "hautes-pyrenees":
      return HAUTES_PYRENEES_CITIES
    case "pyrenees-orientales":
      return PYRENEES_ORIENTALES_CITIES
    case "tarn-et-garonne":
      return TARN_ET_GARONNE_CITIES
    case "tarn":
      return TARN_CITIES
    case "calvados":
      return CALVADOS_CITIES
    case "cher":
      return CHER_CITIES
    case "vendee":
      return VENDEE_CITIES
    case "alpes-de-haute-provence":
      return ALPES_DE_HAUTE_PROVENCE_CITIES
    case "hautes-alpes":
      return HAUTES_ALPES_CITIES
    case "var":
      return VAR_CITIES
    case "vaucluse":
      return VAUCLUSE_CITIES
    case "cote-d-or":
      return COTE_D_OR_CITIES
    case "aisne":
      return AISNE_CITIES
    case "haute-marne":
      return HAUTE_MARNE_CITIES
    case "alpes-maritimes":
      return ALPES_MARITIMES_CITIES
    case "corse-du-sud":
      return CORSE_DU_SUD_CITIES
    case "haute-corse":
      return HAUTE_CORSE_CITIES
    case "guyane":
      return GUYANE_CITIES
    case "reunion":
      return REUNION_CITIES
    case "mayotte":
      return MAYOTTE_CITIES
    case "martinique":
      return MARTINIQUE_CITIES
    case "guadeloupe":
      return GUADELOUPE_CITIES
    case "bouches-du-rhone":
      return BOUCHES_DU_RHONE_CITIES
    case "paris":
      return PARIS_CITIES
    default:
      return {}
  }
}

// Fonction pour obtenir les données d'une ville dans un département
// Villes d'un département, avec un code postal toujours renseigné :
// certains fichiers utilisent "postal" au lieu de "postalCode", d'autres n'en ont pas
// (on retombe alors sur le numéro du département, ex. "05").
const normalizedCitiesCache = new Map<string, Record<string, CityData>>()

export function getCitiesByDepartment(departmentSlug: string): Record<string, CityData> {
  const key = departmentSlug.toLowerCase()
  const cached = normalizedCitiesCache.get(key)
  if (cached) return cached
  const raw = getRawCitiesByDepartment(key) ?? {}
  const deptCode = ACTIVE_DEPARTMENTS[key]?.postalCode ?? ""
  const cities: Record<string, CityData> = {}
  for (const [slug, city] of Object.entries(raw)) {
    cities[slug] = { ...city, postalCode: String(city?.postalCode ?? city?.postal ?? deptCode) }
  }
  normalizedCitiesCache.set(key, cities)
  return cities
}

export function getCityDataByDepartment(departmentSlug: string, citySlug: string): CityData | null {
  const cities = getCitiesByDepartment(departmentSlug)
  return cities[citySlug.toLowerCase()] || null
}

// Pages de sous-services (/[departement]/[ville]/[sousService]) réservées aux villes
// d'au moins SOUS_SERVICE_MIN_POPULATION habitants, plus toutes celles de Gironde.
// Les autres villes renvoient vers les pages nationales /nos-services/... (moins de pages
// quasi identiques à rendre et à mettre en cache sur Vercel).
export const SOUS_SERVICE_MIN_POPULATION = 5000

export function cityHasSousServices(departmentSlug: string, citySlug: string): boolean {
  if (departmentSlug.toLowerCase() === "gironde") return true
  const city = getCityDataByDepartment(departmentSlug, citySlug)
  const population = Number(String(city?.population ?? "").replace(/\D/g, ""))
  return population >= SOUS_SERVICE_MIN_POPULATION
}

// Villes affichées dans le bloc « villes desservies » (48 max, noms seulement) :
// évite d'envoyer au navigateur la liste complète du département sur chaque page ville
export function getDisplayedDepartmentCities(departmentSlug: string): Record<string, { name: string }> {
  return Object.fromEntries(
    Object.entries(getCitiesByDepartment(departmentSlug)).slice(0, 48).map(([slug, city]) => [slug, { name: city.name }]),
  )
}

export { ACTIVE_DEPARTMENTS, type DepartmentServiceConfig } from "./departments"

// Fonction pour obtenir la config d'un département
export function getDepartmentConfig(departmentSlug: string): DepartmentServiceConfig | null {
  return ACTIVE_DEPARTMENTS[departmentSlug.toLowerCase()] || null
}

