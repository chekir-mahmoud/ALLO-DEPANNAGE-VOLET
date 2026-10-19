// Testimonial interface definition
export interface Testimonial {
  name: string
  location: string
  rating: number
  text: string
  date: string
}

// Témoignages pour Débarras de Maison (12 témoignages)
export const DEBARRAS_MAISON_TESTIMONIALS: Testimonial[] = [
  {
    name: "Marie Lambert",
    location: "Placeholder City 1",
    rating: 5,
    text: "Service impeccable ! L'équipe est arrivée à l'heure, très professionnelle et respectueuse. Mon appartement était encombré depuis des années, tout a été débarrassé en quelques heures. Je recommande vivement !",
    date: "Il y a 2 semaines",
  },
  {
    name: "Sophie Martin",
    location: "Placeholder City 2",
    rating: 5,
    text: "J'ai fait appel à eux pour un débarras suite à une succession. L'équipe a été très respectueuse et délicate. Ils ont su gérer cette situation difficile avec beaucoup d'humanité. Merci infiniment.",
    date: "Il y a 3 semaines",
  },
  {
    name: "François Dupont",
    location: "Placeholder City 3",
    rating: 5,
    text: "Débarras complet d'une maison suite à succession familiale. L'équipe a fait preuve d'une grande délicatesse et d'un respect exemplaire. Le nettoyage après débarras était impeccable. Service humain et professionnel.",
    date: "Il y a 2 semaines",
  },
  {
    name: "Sylvie Laporte",
    location: "Placeholder City 4",
    rating: 5,
    text: "Situation difficile avec syndrome de Diogène chez un proche. L'équipe a été d'une discrétion et d'une compassion remarquables. Travail méticuleux, nettoyage en profondeur. Je ne peux que les remercier.",
    date: "Il y a 1 mois",
  },
  {
    name: "Jean Delorme",
    location: "Placeholder City 5",
    rating: 5,
    text: "Débarras d'une cave remplie d'objets depuis 20 ans. L'équipe a été efficace et respectueuse. Tri minutieux des affaires, recyclage approprié. Merci pour cette belle intervention !",
    date: "Il y a 2 semaines",
  },
  {
    name: "Nicole Granger",
    location: "Placeholder City 6",
    rating: 5,
    text: "Appel d'urgence pour débarrasser après un sinistre. L'équipe a réagi rapidement et avec beaucoup d'empathie. Service vraiment professionnel dans une situation difficile.",
    date: "Il y a 1 semaine",
  },
  {
    name: "Michel Lemaire",
    location: "Placeholder City 7",
    rating: 5,
    text: "Débarras complet d'un garage encombré depuis années. Travail rapide et efficace, espace retrouvé ! Équipe sympathique et honnête. Très satisfait.",
    date: "Il y a 3 semaines",
  },
  {
    name: "Isabelle Renaud",
    location: "Placeholder City 8",
    rating: 5,
    text: "Service de débarras lors d'une mutation professionnelle. L'équipe a compris l'urgence et livré en temps imparti. Communication excellente tout au long.",
    date: "Il y a 1 mois",
  },
  {
    name: "Paul Bianchi",
    location: "Placeholder City 9",
    rating: 5,
    text: "Débarras d'une maison entière suite à héritage. L'équipe a trié avec soin, respecté les objets de valeur. Processus simple et transparent. Merci !",
    date: "Il y a 2 semaines",
  },
  {
    name: "Claire Moreau",
    location: "Placeholder City 10",
    rating: 5,
    text: "Nettoyage complet après débarras. L'équipe s'est occupée de tout, de l'enlèvement au ménage final. Maison impeccable et prête à la vente.",
    date: "Il y a 1 semaine",
  },
  {
    name: "Robert Fabre",
    location: "Placeholder City 11",
    rating: 5,
    text: "Intervention très professionnelle pour le débarras d'un appartement locatif. Respect du timing, état impeccable. Je recommande pour les professionnels !",
    date: "Il y a 2 semaines",
  },
  {
    name: "Monique Arnaud",
    location: "Placeholder City 12",
    rating: 5,
    text: "Service au-delà de mes attentes ! Équipe discrète, efficace et bienveillante. Le débarras est complet et mon espace est libre. Merci beaucoup !",
    date: "Il y a 1 semaine",
  },
]

/**
 * Recupere les temoignages pour un service specifique
 */
export function getTestimonialsByService(serviceSlug: string): Testimonial[] {
  switch (serviceSlug.toLowerCase()) {
    case "debarras-maison":
      return DEBARRAS_MAISON_TESTIMONIALS
    default:
      return []
  }
}
