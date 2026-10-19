// ─── Simulateur d'estimation de débarras ─────────────────────────────────────
// Tous les tarifs du simulateur sont ici : modifiez les valeurs pour ajuster les estimations.
// Les montants sont indicatifs (TTC) ; le devis gratuit fixe le prix définitif.

export type BienId = "maison" | "appartement" | "local" | "cave" | "garage" | "grenier" | "chantier" | "autre"
export type TailleId = string
export type EncombrementId = "faible" | "moyen" | "important" | "tres-important"
export type EtageId = "rdc" | "1" | "2" | "3+"
export type StationnementId = "devant" | "moins-30" | "30-100" | "plus-100"

export const BIENS: { id: BienId; label: string; desc: string; parSurface: boolean }[] = [
  { id: "maison", label: "Maison", desc: "Maison individuelle, villa, corps de ferme", parSurface: true },
  { id: "appartement", label: "Appartement", desc: "Studio, T2, T3, T4 et plus", parSurface: true },
  { id: "local", label: "Local professionnel", desc: "Bureau, commerce, entrepôt", parSurface: true },
  { id: "cave", label: "Cave", desc: "Cave ou sous-sol", parSurface: false },
  { id: "garage", label: "Garage", desc: "Garage, box ou atelier", parSurface: false },
  { id: "grenier", label: "Grenier", desc: "Grenier ou combles", parSurface: false },
  { id: "chantier", label: "Fin de chantier", desc: "Gravats, ferraille, déchets de travaux", parSurface: false },
  { id: "autre", label: "Autre", desc: "Dépendance, abri de jardin…", parSurface: true },
]

// Prix de base selon la surface (maison, appartement, local, autre)
export const SURFACES: { id: TailleId; label: string; prix: number }[] = [
  { id: "s-30", label: "Moins de 30 m²", prix: 250 },
  { id: "s-60", label: "30 à 60 m²", prix: 450 },
  { id: "s-100", label: "60 à 100 m²", prix: 650 },
  { id: "s-150", label: "100 à 150 m²", prix: 900 },
  { id: "s-150+", label: "Plus de 150 m²", prix: 1400 },
]

// Prix de base selon la taille (cave, garage, grenier, fin de chantier)
export const TAILLES: { id: TailleId; label: string; desc: string; prix: number }[] = [
  { id: "t-petit", label: "Petit", desc: "Moins de 5 m³", prix: 150 },
  { id: "t-moyen", label: "Moyen", desc: "5 à 10 m³", prix: 199 },
  { id: "t-grand", label: "Grand", desc: "10 à 20 m³", prix: 300 },
  { id: "t-tres-grand", label: "Très grand", desc: "Plus de 20 m³", prix: 450 },
]

// Multiplicateur selon le niveau de remplissage
export const ENCOMBREMENTS: { id: EncombrementId; label: string; desc: string; coef: number }[] = [
  { id: "faible", label: "Faible", desc: "Quelques meubles et objets", coef: 0.7 },
  { id: "moyen", label: "Moyen", desc: "Logement meublé normalement", coef: 1 },
  { id: "important", label: "Important", desc: "Pièces bien remplies", coef: 1.3 },
  { id: "tres-important", label: "Très important", desc: "Accumulation, passages encombrés", coef: 1.6 },
]

export const ETAGES: { id: EtageId; label: string; niveau: number }[] = [
  { id: "rdc", label: "Rez-de-chaussée", niveau: 0 },
  { id: "1", label: "1er étage", niveau: 1 },
  { id: "2", label: "2e étage", niveau: 2 },
  { id: "3+", label: "3e étage ou plus", niveau: 3 },
]
// Majoration par étage sans ascenseur
export const MAJORATION_ETAGE_SANS_ASCENSEUR = 0.1

export const STATIONNEMENTS: { id: StationnementId; label: string; prix: number }[] = [
  { id: "devant", label: "Devant le bâtiment", prix: 0 },
  { id: "moins-30", label: "À moins de 30 m", prix: 0 },
  { id: "30-100", label: "De 30 à 100 m", prix: 50 },
  { id: "plus-100", label: "Plus de 100 m", prix: 100 },
]

export const OPTIONS: { id: string; label: string; prix: number }[] = [
  { id: "cave", label: "Cave en plus", prix: 120 },
  { id: "garage", label: "Garage en plus", prix: 150 },
  { id: "grenier", label: "Grenier en plus", prix: 130 },
  { id: "lourds", label: "Objets très lourds (piano, coffre-fort…)", prix: 80 },
  { id: "electromenager", label: "Électroménager", prix: 40 },
  { id: "cartons", label: "Nombreux cartons", prix: 50 },
  { id: "gravats", label: "Gravats ou déchets de travaux", prix: 90 },
  { id: "nettoyage", label: "Nettoyage approfondi", prix: 150 },
]

// Fourchette affichée autour du montant calculé
export const FOURCHETTE = { bas: 0.9, haut: 1.15 }

export interface EstimationChoix {
  bien?: BienId
  taille?: TailleId
  encombrement?: EncombrementId
  etage?: EtageId
  ascenseur?: boolean
  stationnement?: StationnementId
  options: string[]
}

export interface EstimationLigne {
  label: string
  detail?: string
  qty: number
  price: number
}

export interface EstimationResultat {
  lignes: EstimationLigne[]
  total: number
  min: number
  max: number
}

const arrondi = (n: number) => Math.round(n / 10) * 10

export const tailleChoices = (bien?: BienId) =>
  BIENS.find((b) => b.id === bien)?.parSurface === false
    ? TAILLES.map((t) => ({ id: t.id, label: t.label, desc: t.desc, prix: t.prix }))
    : SURFACES.map((s) => ({ id: s.id, label: s.label, desc: "", prix: s.prix }))

// Calcul de l'estimation ; renvoie null tant que le bien, la taille et l'encombrement ne sont pas choisis
export function calculerEstimation(c: EstimationChoix): EstimationResultat | null {
  const bien = BIENS.find((b) => b.id === c.bien)
  const taille = tailleChoices(c.bien).find((t) => t.id === c.taille)
  const enc = ENCOMBREMENTS.find((e) => e.id === c.encombrement)
  if (!bien || !taille || !enc) return null

  const lignes: EstimationLigne[] = []
  const base = taille.prix * enc.coef
  lignes.push({ label: `Débarras ${bien.label.toLowerCase()}`, detail: `${taille.label} · encombrement ${enc.label.toLowerCase()}`, qty: 1, price: arrondi(base) })

  const etage = ETAGES.find((e) => e.id === c.etage)
  if (etage && etage.niveau > 0 && c.ascenseur === false) {
    lignes.push({ label: "Accès sans ascenseur", detail: etage.label, qty: 1, price: arrondi(base * MAJORATION_ETAGE_SANS_ASCENSEUR * etage.niveau) })
  }

  const stat = STATIONNEMENTS.find((s) => s.id === c.stationnement)
  if (stat && stat.prix > 0) lignes.push({ label: "Stationnement éloigné", detail: stat.label, qty: 1, price: stat.prix })

  for (const id of c.options) {
    const o = OPTIONS.find((x) => x.id === id)
    if (o) lignes.push({ label: o.label, qty: 1, price: o.prix })
  }

  const total = lignes.reduce((s, l) => s + l.price, 0)
  // La fourchette ne descend jamais sous le prix d'appel affiché sur le site (« dès 250 € » pour un studio…)
  const min = Math.max(arrondi(total * FOURCHETTE.bas), taille.prix)
  const max = Math.max(arrondi(total * FOURCHETTE.haut), arrondi(min * FOURCHETTE.haut))
  return { lignes, total: Math.max(total, taille.prix), min, max }
}
