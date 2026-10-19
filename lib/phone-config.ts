export interface PhoneConfig {
  display: string
  tel: string
  department: string
}

const ALL_SERVICES = [
  "debarras-maison",
] as const

type ServicePhoneMap = Record<typeof ALL_SERVICES[number], PhoneConfig>

type DeptConfig = {
  services: ServicePhoneMap
}

function makeDept(
  defaultDisplay: string,
  defaultTel: string,
  department: string,
  overrides: Partial<Record<typeof ALL_SERVICES[number], { display: string; tel: string }>> = {},
): DeptConfig {
  const services = {} as ServicePhoneMap
  for (const service of ALL_SERVICES) {
    const ov = overrides[service]
    if (ov) {
      services[service] = { display: ov.display, tel: ov.tel, department }
    } else {
      services[service] = { display: defaultDisplay, tel: defaultTel, department }
    }
  }
  return { services }
}

export const PARTNER_PHONE: PhoneConfig = {
  display: "07 75 22 90 02",
  tel: "+33775229002",
  department: "National",
}

export const DEFAULT_PHONE: PhoneConfig = {
  display: "07 75 22 90 02",
  tel: "+33775229002",
  department: "National",
}

const D = "07 75 22 90 02"
const T = "+33775229002"

// Exceptions
const DEBARRAS_SW = { display: "07 75 22 90 02", tel: "+33775229002" }

// Pages (service + département) où le bouton flottant WhatsApp remplace l'email
const WHATSAPP_DEPARTMENTS_BY_SERVICE: Record<string, string[]> = {
  "debarras-maison": ["charente", "charente-maritime", "dordogne", "haute-garonne", "landes", "isere", "gironde"],
}

export function hasWhatsappButton(serviceSlug: string, departmentSlug?: string): boolean {
  return !!departmentSlug && (WHATSAPP_DEPARTMENTS_BY_SERVICE[serviceSlug] ?? []).includes(departmentSlug)
}
const ALSACE_MOSELLE = { display: "07 75 22 90 02", tel: "+33775229002" }

export const DEPARTMENT_PHONE_CONFIG: Record<string, DeptConfig> = {

  // ── Charente group — debarras-maison → 07 75 22 90 02 ──────────────────────

  "charente":          makeDept(D, T, "Charente (16)",          { "debarras-maison": DEBARRAS_SW }),
  "charente-maritime": makeDept(D, T, "Charente-Maritime (17)", { "debarras-maison": DEBARRAS_SW }),
  "dordogne":          makeDept(D, T, "Dordogne (24)",          { "debarras-maison": DEBARRAS_SW }),
  "haute-garonne":     makeDept(D, T, "Haute-Garonne (31)",     { "debarras-maison": DEBARRAS_SW }),
  "landes":            makeDept(D, T, "Landes (40)",            { "debarras-maison": DEBARRAS_SW }),
  "isere":             makeDept(D, T, "Isère (38)",             { "debarras-maison": DEBARRAS_SW }),

  // ── Alsace-Moselle group — debarras-maison → 07 75 22 90 02

  "bas-rhin":  makeDept(D, T, "Bas-Rhin (67)",  { "debarras-maison": ALSACE_MOSELLE }),
  "haut-rhin": makeDept(D, T, "Haut-Rhin (68)", { "debarras-maison": ALSACE_MOSELLE }),
  "moselle":   makeDept(D, T, "Moselle (57)",   { "debarras-maison": ALSACE_MOSELLE }),

  // ── All other departments — default 07 75 22 90 02 ─────────────────────────

  "ain":                        makeDept(D, T, "Ain (01)"),
  "aisne":                      makeDept(D, T, "Aisne (02)"),
  "allier":                     makeDept(D, T, "Allier (03)"),
  "alpes-de-haute-provence":    makeDept(D, T, "Alpes-de-Haute-Provence (04)"),
  "hautes-alpes":                makeDept(D, T, "Hautes-Alpes (05)"),
  "alpes-maritimes":            makeDept(D, T, "Alpes-Maritimes (06)"),
  "ardeche":                    makeDept(D, T, "Ardèche (07)"),
  "ardennes":                   makeDept(D, T, "Ardennes (08)"),
  "ariege":                     makeDept(D, T, "Ariège (09)"),
  "aube":                       makeDept(D, T, "Aube (10)"),
  "aude":                       makeDept(D, T, "Aude (11)"),
  "aveyron":                    makeDept(D, T, "Aveyron (12)"),
  "bouches-du-rhone":           makeDept(D, T, "Bouches-du-Rhône (13)"),
  "calvados":                   makeDept(D, T, "Calvados (14)"),
  "cantal":                     makeDept(D, T, "Cantal (15)"),
  "cher":                       makeDept(D, T, "Cher (18)"),
  "correze":                    makeDept(D, T, "Corrèze (19)"),
  "cote-d-or":                  makeDept(D, T, "Côte-d'Or (21)"),
  "cotes-d-armor":              makeDept(D, T, "Côtes-d'Armor (22)"),
  "creuse":                     makeDept(D, T, "Creuse (23)"),
  "doubs":                      makeDept(D, T, "Doubs (25)"),
  "drome":                      makeDept(D, T, "Drôme (26)"),
  "eure":                       makeDept(D, T, "Eure (27)"),
  "eure-et-loir":               makeDept(D, T, "Eure-et-Loir (28)"),
  "finistere":                  makeDept(D, T, "Finistère (29)"),
  "gard":                       makeDept(D, T, "Gard (30)"),
  "gers":                       makeDept(D, T, "Gers (32)"),
  "gironde":                    makeDept(D, T, "Gironde (33)",           { "debarras-maison": DEBARRAS_SW }),
  "herault":                    makeDept(D, T, "Hérault (34)"),
  "ille-et-vilaine":            makeDept(D, T, "Ille-et-Vilaine (35)"),
  "indre":                      makeDept(D, T, "Indre (36)"),
  "indre-et-loire":             makeDept(D, T, "Indre-et-Loire (37)"),
  "jura":                       makeDept(D, T, "Jura (39)"),
  "loir-et-cher":               makeDept(D, T, "Loir-et-Cher (41)"),
  "loire":                      makeDept(D, T, "Loire (42)"),
  "haute-loire":                makeDept(D, T, "Haute-Loire (43)"),
  "loire-atlantique":           makeDept(D, T, "Loire-Atlantique (44)"),
  "loiret":                     makeDept(D, T, "Loiret (45)"),
  "lot":                        makeDept(D, T, "Lot (46)"),
  "lot-et-garonne":             makeDept(D, T, "Lot-et-Garonne (47)"),
  "lozere":                     makeDept(D, T, "Lozère (48)"),
  "maine-et-loire":             makeDept(D, T, "Maine-et-Loire (49)"),
  "manche":                     makeDept(D, T, "Manche (50)"),
  "marne":                      makeDept(D, T, "Marne (51)"),
  "haute-marne":                makeDept(D, T, "Haute-Marne (52)"),
  "mayenne":                    makeDept(D, T, "Mayenne (53)"),
  "meurthe-et-moselle":         makeDept(D, T, "Meurthe-et-Moselle (54)"),
  "meuse":                      makeDept(D, T, "Meuse (55)"),
  "morbihan":                   makeDept(D, T, "Morbihan (56)"),
  "nievre":                     makeDept(D, T, "Nièvre (58)"),
  "nord":                       makeDept(D, T, "Nord (59)"),
  "oise":                       makeDept(D, T, "Oise (60)"),
  "orne":                       makeDept(D, T, "Orne (61)"),
  "pas-de-calais":              makeDept(D, T, "Pas-de-Calais (62)"),
  "puy-de-dome":                makeDept(D, T, "Puy-de-Dôme (63)"),
  "pyrenees-atlantiques":       makeDept(D, T, "Pyrénées-Atlantiques (64)"),
  "hautes-pyrenees":            makeDept(D, T, "Hautes-Pyrénées (65)"),
  "pyrenees-orientales":        makeDept(D, T, "Pyrénées-Orientales (66)"),
  "rhone":                      makeDept(D, T, "Rhône (69)"),
  "haute-saone":                makeDept(D, T, "Haute-Saône (70)"),
  "saone-et-loire":             makeDept(D, T, "Saône-et-Loire (71)"),
  "sarthe":                     makeDept(D, T, "Sarthe (72)"),
  "savoie":                     makeDept(D, T, "Savoie (73)"),
  "haute-savoie":               makeDept(D, T, "Haute-Savoie (74)"),
  "paris":                      makeDept(D, T, "Paris (75)"),
  "seine-maritime":             makeDept(D, T, "Seine-Maritime (76)"),
  "seine-et-marne":             makeDept(D, T, "Seine-et-Marne (77)"),
  "yvelines":                   makeDept(D, T, "Yvelines (78)"),
  "deux-sevres":                makeDept(D, T, "Deux-Sèvres (79)"),
  "somme":                      makeDept(D, T, "Somme (80)"),
  "tarn":                       makeDept(D, T, "Tarn (81)"),
  "tarn-et-garonne":            makeDept(D, T, "Tarn-et-Garonne (82)"),
  "var":                        makeDept(D, T, "Var (83)"),
  "vaucluse":                   makeDept(D, T, "Vaucluse (84)"),
  "vendee":                     makeDept(D, T, "Vendée (85)"),
  "vienne":                     makeDept(D, T, "Vienne (86)"),
  "haute-vienne":               makeDept(D, T, "Haute-Vienne (87)"),
  "vosges":                     makeDept(D, T, "Vosges (88)"),
  "yonne":                      makeDept(D, T, "Yonne (89)"),
  "territoire-de-belfort":      makeDept(D, T, "Territoire de Belfort (90)"),
  "essonne":                    makeDept(D, T, "Essonne (91)"),
  "hauts-de-seine":             makeDept(D, T, "Hauts-de-Seine (92)"),
  "seine-saint-denis":          makeDept(D, T, "Seine-Saint-Denis (93)"),
  "val-de-marne":               makeDept(D, T, "Val-de-Marne (94)"),
  "val-d-oise":                 makeDept(D, T, "Val-d'Oise (95)"),
  "martinique":                 makeDept(D, T, "Martinique (972)"),
  "guadeloupe":                 makeDept(D, T, "Guadeloupe (971)"),
}

export function getPhoneByDepartmentService(
  departmentSlug?: string,
  serviceSlug?: string,
): PhoneConfig {
  if (!departmentSlug) return DEFAULT_PHONE

  const normalizedDept = departmentSlug.toLowerCase().trim()
  const normalizedService = serviceSlug?.toLowerCase().trim()

  const deptConfig = DEPARTMENT_PHONE_CONFIG[normalizedDept]
  if (deptConfig) {
    if (normalizedService) {
      const svc = deptConfig.services[normalizedService as typeof ALL_SERVICES[number]]
      if (svc) return svc
    }
    return deptConfig.services["debarras-maison"]
  }

  return DEFAULT_PHONE
}

export function extractDepartmentFromPath(pathname: string): string | undefined {
  const parts = pathname.split("/").filter(Boolean)
  if (parts.length > 0) {
    const firstSegment = parts[0].toLowerCase()
    if (DEPARTMENT_PHONE_CONFIG[firstSegment]) {
      return firstSegment
    }
  }
  return undefined
}

/**
 * @deprecated Utilisez getPhoneByDepartmentService à la place
 */
export function getPhoneByDepartment(departmentSlug?: string): PhoneConfig {
  return getPhoneByDepartmentService(departmentSlug)
}
