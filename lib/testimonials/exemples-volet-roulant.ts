// AVIS CLIENTS
// ⚠️ Les avis marqués aRemplacer sont provisoires (ce ne sont pas de vrais clients) :
// ils s'affichent uniquement en développement (npm run dev) et n'apparaissent JAMAIS
// sur le site en ligne. Remplacez-les par vos vrais avis (copiés depuis votre fiche Google)
// en mettant aRemplacer: false (et google: true pour afficher le logo Google).

export interface AvisClient {
  name: string
  location: string
  rating: number
  text: string
  date: string
  service: string
  google?: boolean
  aRemplacer?: boolean
}

const TOUS_LES_AVIS: AvisClient[] = [
  {
    name: "Sophie Martin",
    location: "Lyon (69)",
    rating: 5,
    text: "Volet roulant bloqué en position fermée un dimanche. Le technicien est venu le jour même, a remplacé la sangle et vérifié le mécanisme. Intervention rapide et prix annoncé respecté.",
    date: "septembre 2026",
    service: "Dépannage volet roulant",
    aRemplacer: true,
  },
  {
    name: "Marc Lefèvre",
    location: "Bordeaux (33)",
    rating: 5,
    text: "Moteur Somfy en panne sur le volet du salon. Diagnostic clair, remplacement du moteur en moins d'une heure et réglage des fins de course. Très professionnel.",
    date: "septembre 2026",
    service: "Remplacement moteur",
    aRemplacer: true,
  },
  {
    name: "Nadia Benali",
    location: "Toulouse (31)",
    rating: 5,
    text: "Motorisation de trois volets manuels avec télécommande centralisée. Travail propre, explications claires et devis détaillé avant l'intervention.",
    date: "août 2026",
    service: "Motorisation",
    aRemplacer: true,
  },
  {
    name: "Julien Moreau",
    location: "Marseille (13)",
    rating: 5,
    text: "Rideau métallique de mon commerce coincé à mi-hauteur. Dépannage en urgence avant l'ouverture, puis contrat d'entretien annuel. Je recommande.",
    date: "août 2026",
    service: "Rideau métallique",
    aRemplacer: true,
  },
  {
    name: "Claire Dupont",
    location: "Nantes (44)",
    rating: 5,
    text: "Remplacement de plusieurs lames cassées après un coup de vent. Lames assorties à l'existant, volet qui fonctionne à nouveau parfaitement.",
    date: "juillet 2026",
    service: "Remplacement de lames",
    aRemplacer: true,
  },
  {
    name: "Thomas Girard",
    location: "Lille (59)",
    rating: 5,
    text: "Réparation de la toile et du bras de notre store banne. Technicien ponctuel et soigneux, intervention réalisée en une matinée.",
    date: "juillet 2026",
    service: "Store banne",
    aRemplacer: true,
  },
]

// Avis réellement affichés : les avis provisoires sont retirés du site en ligne
export const VOLET_INTERVENTIONS: AvisClient[] = TOUS_LES_AVIS.filter(
  (a) => !a.aRemplacer || process.env.NODE_ENV !== "production",
)
