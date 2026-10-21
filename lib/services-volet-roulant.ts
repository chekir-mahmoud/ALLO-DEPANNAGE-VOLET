// Les 6 prestations principales (cartes de l'accueil, pied de page, pages /nos-services/…).

export interface VoletService {
  slug: string
  label: string
  sub: string
  image: string
}

export const VOLET_SERVICES: VoletService[] = [
  {
    slug: "depannage-volet-roulant",
    label: "Dépannage volet roulant",
    sub: "Urgence 7j/7, diagnostic, volet bloqué",
    image: "/images/volet/depannage-volet-roulant-bloque.jpg",
  },
  {
    slug: "reparation-volet-roulant",
    label: "Réparation volet roulant",
    sub: "Tablier, lames, sangle, manivelle, mécanisme",
    image: "/images/volet/reparation-coffre-volet-roulant.jpg",
  },
  {
    slug: "installation-volet-roulant",
    label: "Installation volet roulant",
    sub: "Pose neuve, rénovation et modernisation",
    image: "/images/volet/installation-volet-roulant.jpg",
  },
  {
    slug: "motorisation-volet-roulant",
    label: "Motorisation volet roulant",
    sub: "Motorisation, remplacement moteur, domotique",
    image: "/images/volet/moteur-tubulaire-volet-roulant.jpg",
  },
  {
    slug: "rideau-metallique",
    label: "Rideau métallique",
    sub: "Pose, dépannage et entretien pour les commerces",
    image: "/images/volet/rideau-metallique-depannage.jpg",
  },
  {
    slug: "store-banne",
    label: "Store banne",
    sub: "Réparation, toile, moteur et pose sur mesure",
    image: "/images/volet/reparation-store-banne.jpg",
  },
]
