// ─── Simulateur d'estimation : volets roulants, rideaux métalliques et stores ──
// Tous les tarifs du simulateur sont ici : modifiez les valeurs pour ajuster les estimations.
// Les montants sont indicatifs (TTC) ; le devis gratuit fixe le prix définitif.
// Les prix de base reprennent la grille affichée sur le site (« dès … »).

export type BesoinId = "depannage" | "moteur" | "reparation" | "motorisation" | "installation" | "rideau" | "store" | "entretien"
export type ManoeuvreId = "manuel" | "filaire" | "radio" | "solaire" | "inconnu"
export type TailleId = "petite" | "standard" | "porte-fenetre" | "baie"
export type NombreId = "1" | "2" | "3" | "4-5" | "6+"
export type AccesId = "facile" | "etage" | "difficile"
export type DelaiId = "urgent" | "semaine" | "planifie"

export const BESOINS: { id: BesoinId; label: string; desc: string; prix: number }[] = [
  { id: "depannage", label: "Volet bloqué", desc: "Ne monte plus, ne descend plus, coincé", prix: 89 },
  { id: "moteur", label: "Moteur en panne", desc: "Le volet électrique ne répond plus", prix: 290 },
  { id: "reparation", label: "Réparation", desc: "Lames, sangle, manivelle, attaches", prix: 119 },
  { id: "motorisation", label: "Motoriser un volet manuel", desc: "Remplacer la sangle ou la manivelle", prix: 450 },
  { id: "installation", label: "Pose d'un volet neuf", desc: "Rénovation ou remplacement", prix: 390 },
  { id: "rideau", label: "Rideau métallique", desc: "Commerce, atelier, entrepôt", prix: 149 },
  { id: "store", label: "Store banne", desc: "Toile, bras, moteur", prix: 129 },
  { id: "entretien", label: "Contrat d'entretien", desc: "Visite annuelle de contrôle", prix: 99 },
]

export const MANOEUVRES: { id: ManoeuvreId; label: string; desc: string }[] = [
  { id: "manuel", label: "Manuel", desc: "Sangle ou manivelle" },
  { id: "filaire", label: "Électrique filaire", desc: "Interrupteur mural" },
  { id: "radio", label: "Électrique radio", desc: "Télécommande, Somfy…" },
  { id: "solaire", label: "Solaire", desc: "Panneau sur le coffre" },
  { id: "inconnu", label: "Je ne sais pas", desc: "Le technicien vérifiera" },
]

// Supplément selon la manœuvre (celle du volet existant, ou celle souhaitée pour une pose ou une motorisation)
export const SUPPLEMENT_MANOEUVRE: Partial<Record<BesoinId, Partial<Record<ManoeuvreId, number>>>> = {
  moteur: { radio: 100, solaire: 160 },
  motorisation: { radio: 70, solaire: 200 },
  installation: { filaire: 90, radio: 160, solaire: 260 },
  store: { filaire: 40, radio: 60, solaire: 80 },
}

// Multiplicateur selon la taille du volet
export const TAILLES: { id: TailleId; label: string; desc: string; coef: number }[] = [
  { id: "petite", label: "Petite fenêtre", desc: "Moins de 1 m de large", coef: 0.9 },
  { id: "standard", label: "Fenêtre standard", desc: "1 à 1,6 m de large", coef: 1 },
  { id: "porte-fenetre", label: "Porte-fenêtre", desc: "1,6 à 2,4 m de large", coef: 1.15 },
  { id: "baie", label: "Baie vitrée", desc: "Plus de 2,4 m de large", coef: 1.4 },
]

// Les volets supplémentaires d'une même intervention sont comptés à tarif réduit (déplacement commun)
export const NOMBRES: { id: NombreId; label: string; quantite: number }[] = [
  { id: "1", label: "1 volet", quantite: 1 },
  { id: "2", label: "2 volets", quantite: 2 },
  { id: "3", label: "3 volets", quantite: 3 },
  { id: "4-5", label: "4 ou 5 volets", quantite: 4.5 },
  { id: "6+", label: "6 volets ou plus", quantite: 6 },
]
export const TAUX_VOLET_SUPPLEMENTAIRE = 0.8

export const ACCES: { id: AccesId; label: string; desc: string; prix: number }[] = [
  { id: "facile", label: "Accès facile", desc: "Rez-de-chaussée ou coffre intérieur", prix: 0 },
  { id: "etage", label: "En étage", desc: "Échelle nécessaire", prix: 40 },
  { id: "difficile", label: "Accès difficile", desc: "Grande hauteur, échafaudage", prix: 150 },
]

// Le délai est transmis au technicien ; il ne modifie pas l'estimation
export const DELAIS: { id: DelaiId; label: string; desc: string }[] = [
  { id: "urgent", label: "Dès que possible", desc: "Dépannage d'urgence 7j/7" },
  { id: "semaine", label: "Dans la semaine", desc: "Rendez-vous à convenir" },
  { id: "planifie", label: "Je planifie", desc: "Pas de date précise" },
]

export const OPTIONS: { id: string; label: string; prix: number }[] = [
  { id: "telecommande", label: "Télécommande supplémentaire", prix: 59 },
  { id: "inverseur", label: "Remplacement de l'interrupteur", prix: 59 },
  { id: "lames-isolantes", label: "Lames isolantes en aluminium", prix: 80 },
  { id: "centralisation", label: "Centralisation des volets", prix: 150 },
  { id: "capteur", label: "Capteur vent ou soleil", prix: 120 },
  { id: "reglages", label: "Nettoyage des coulisses et réglages", prix: 40 },
]

// Fourchette affichée autour du montant calculé
export const FOURCHETTE = { bas: 0.9, haut: 1.2 }

export interface EstimationChoix {
  besoin?: BesoinId
  manoeuvre?: ManoeuvreId
  taille?: TailleId
  nombre?: NombreId
  acces?: AccesId
  delai?: DelaiId
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

// Calcul de l'estimation ; renvoie null tant que le besoin, la manœuvre, la taille et le nombre ne sont pas choisis
export function calculerEstimation(c: EstimationChoix): EstimationResultat | null {
  const besoin = BESOINS.find((b) => b.id === c.besoin)
  const manoeuvre = MANOEUVRES.find((m) => m.id === c.manoeuvre)
  const taille = TAILLES.find((t) => t.id === c.taille)
  const nombre = NOMBRES.find((n) => n.id === c.nombre)
  if (!besoin || !manoeuvre || !taille || !nombre) return null

  const lignes: EstimationLigne[] = []
  const supplement = SUPPLEMENT_MANOEUVRE[besoin.id]?.[manoeuvre.id] ?? 0
  const unitaire = (besoin.prix + supplement) * taille.coef
  // Contrat d'entretien : un forfait par site, quel que soit le nombre de volets
  const quantite = besoin.id === "entretien" ? 1 : 1 + (nombre.quantite - 1) * TAUX_VOLET_SUPPLEMENTAIRE
  lignes.push({
    label: besoin.label,
    detail: `${nombre.label} · ${taille.label.toLowerCase()} · ${manoeuvre.label.toLowerCase()}`,
    qty: 1,
    price: arrondi(unitaire * quantite),
  })

  const acces = ACCES.find((a) => a.id === c.acces)
  if (acces && acces.prix > 0) lignes.push({ label: acces.label, detail: acces.desc, qty: 1, price: acces.prix })

  for (const id of c.options) {
    const o = OPTIONS.find((x) => x.id === id)
    if (o) lignes.push({ label: o.label, qty: 1, price: o.prix })
  }

  const total = lignes.reduce((s, l) => s + l.price, 0)
  // La fourchette ne descend jamais sous le prix d'appel affiché sur le site (« dès 89 € »…)
  const min = Math.max(arrondi(total * FOURCHETTE.bas), besoin.prix)
  const max = Math.max(arrondi(total * FOURCHETTE.haut), arrondi(min * FOURCHETTE.haut))
  return { lignes, total: Math.max(total, besoin.prix), min, max }
}
