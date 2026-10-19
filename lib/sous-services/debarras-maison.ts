// ─── Types ────────────────────────────────────────────────────────────────────

export interface ServiceCard {
  title: string
  desc: (city: string) => string
  image: string
  svgPaths: string[]
}

export interface TarifCard {
  label: string
  price: string
  svgPaths: string[]
}

export interface SeoBlock {
  title: (city: string) => string
  text: (city: string) => string
  image: string
  imageAlt: (city: string) => string
}

export interface SchemaOffer {
  name: string
  desc: (city: string, url: string) => string
  price?: string
  unit?: string
}

export interface SousServiceConfig {
  slug: string
  label: string
  heroImage: string
  aboutImage: string
  title: (city: string, cp: string) => string
  metaDescription: (city: string, deptName: string) => string
  h1: (city: string) => string
  heroCardBadge: string
  heroCardTitle: string
  heroCardSub: string
  heroUrgence: string
  heroIntro: (city: string) => string
  heroSpecialiste: (city: string) => string
  checkpoints: string[]
  messagePlaceholder: string
  aboutTitle: (city: string) => string
  aboutParagraph: (city: string) => string
  ctaTitle: (city: string) => string
  ctaText: (city: string) => string
  faqSectionTitle: string
  faqItems: { q: (city: string) => string; a: (city: string) => string }[]
  knowsAbout: string[]
  schemaName: (city: string) => string
  schemaDescription: (city: string, cp: string) => string
  schemaKeywords: (city: string, cp: string) => string
  schemaSlogan: string
  schemaOffers: SchemaOffer[]
  tarifCards: TarifCard[]
  tarifTitle: (city: string) => string
  tarifSubtitle: string
  serviceCards: ServiceCard[]
  seoBlocks: [SeoBlock, SeoBlock]
  quoteFormTitle: string
  quoteFormSubtitle: string
}

// ─── SVG paths communs ────────────────────────────────────────────────────────

const homePath = ["M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6"]
const truckPath = ["M9 17a2 2 0 100 4 2 2 0 000-4zm8 0a2 2 0 100 4 2 2 0 000-4zM3 5h2l2.5 8h9L19 7H7"]
const boxPath = ["M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"]
const recyclePath = ["M4 4v5h.582m15.356 2A8.001 8.001 0 004.582 9m0 0H9m11 11v-5h-.581m0 0a8.003 8.003 0 01-15.357-2m15.357 2H15"]
const archivePath = ["M5 8h14M5 8a2 2 0 110-4h14a2 2 0 110 4M5 8v10a2 2 0 002 2h10a2 2 0 002-2V8m-9 4h4"]
const scalePath = ["M3 6l3 1m0 0l-3 9a5.002 5.002 0 006.001 0M6 7l3 9M6 7l6-2m6 2l3-1m-3 1l-3 9a5.002 5.002 0 006.001 0M18 7l3 9m-3-9l-6-2m0-2v2m0 16V5m0 16H9m3 0h3"]
const shieldPath = ["M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"]
const garagePath = ["M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3", "M9 21V9h6v12"]
const checkPath = ["M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"]
const trashPath = ["M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"]
const buildingPath = ["M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"]
const starPath = ["M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z"]
const euroPath = ["M14.121 15.536c-1.171 1.952-3.07 1.952-4.242 0-1.172-1.953-1.172-5.119 0-7.072 1.171-1.952 3.07-1.952 4.242 0M8 10.5h4m-4 3h4m9-1.5a9 9 0 11-18 0 9 9 0 0118 0z"]

// ─── Sous-services ────────────────────────────────────────────────────────────

export const SOUS_SERVICES_DEBARRAS: SousServiceConfig[] = [

  // ── 1. Débarras de succession ─────────────────────────────────────────────
  {
    slug: "debarras-succession",
    label: "Débarras de succession",
    heroImage: "/images/debarras-succession.jpg",
    aboutImage: "/images/debarras-succession.jpg",
    title: (city, cp) => `Débarras succession ${city} (${cp}) | Débarras Proximité`,
    metaDescription: (city, dept) => `Débarras de succession à ${city} ${dept} : vidage, tri des objets et rachat d'antiquités, en lien avec le notaire. Devis gratuit le jour même.`,
    h1: (city) => `Débarras de succession à ${city} – Vidage de maison & estimation gratuite`,
    heroCardBadge: "Devis et déplacement gratuits",
    heroCardTitle: "Débarras succession rapide",
    heroCardSub: "Discrétion, respect et efficacité",
    heroUrgence: "Intervention sous 24–48h, coordonné avec votre notaire",
    heroIntro: (city) => `Face au débarras d'une succession à ${city}, notre équipe intervient avec discrétion et respect pour vider, trier et évacuer le contenu de la maison. Estimation gratuite des objets de valeur incluse.`,
    heroSpecialiste: (city) => `Spécialiste du débarras de succession à ${city}`,
    checkpoints: [
      "Estimation gratuite des objets",
      "Rachat d'antiquités et objets",
      "Vidage discret et respectueux",
      "Lien avec le notaire",
    ],
    messagePlaceholder: "Décrivez la situation (surface approximative, type de bien, présence d'objets de valeur, date souhaitée...)",
    aboutTitle: (city) => `Débarras de succession professionnel à ${city}`,
    aboutParagraph: (city) => `Notre équipe intervient à ${city} pour tous les débarras de succession : vidage complet de maison, appartement, cave ou grenier dans le cadre d'une succession, d'un héritage ou après le décès d'un proche. Nous procédons à une estimation gratuite des meubles, objets d'art et antiquités afin de vous proposer un rachat ou une valorisation. Le reste est trié : ce qui peut être donné à des associations locales l'est systématiquement, et les déchets sont acheminés vers des filières de recyclage agréées. Notre intervention est coordonnée avec votre notaire ou vos héritiers selon vos besoins, dans le plus grand respect du moment difficile que vous traversez.`,
    ctaTitle: (city) => `Succession à gérer à ${city} ? Contactez-nous maintenant`,
    ctaText: (city) => `Notre équipe intervient à ${city} pour vous accompagner dans le débarras de succession avec discrétion et efficacité. Estimation gratuite, devis transparent, intervention rapide.`,
    faqSectionTitle: "Tout savoir sur le débarras de succession",
    faqItems: [
      { q: (c) => `Combien coûte un débarras de succession à ${c} ?`, a: (c) => `Le prix d'un débarras de succession à ${c} varie selon le volume, l'accessibilité du bien et la valeur des objets. Dans certains cas, le rachat d'antiquités ou de meubles de valeur peut compenser partiellement ou totalement le coût du débarras. Le devis est toujours gratuit et sans engagement.` },
      { q: (c) => `Faut-il l'accord de tous les héritiers pour faire appel à un débarreur à ${c} ?`, a: () => `Pour un débarras dans le cadre d'une succession, il est recommandé d'avoir l'accord de l'ensemble des héritiers ou du notaire en charge de la succession avant toute intervention. Nous pouvons coordonner nos délais avec votre étude notariale.` },
      { q: (c) => `Intervenez-vous rapidement après un décès à ${c} ?`, a: (c) => `Oui, nous intervenons sous 24 à 48h après votre appel à ${c}. Pour les situations urgentes (fin de bail, vente immobilière imminente), nous pouvons organiser une intervention le jour même selon disponibilité.` },
      { q: () => `Que devient le contenu de la maison après le débarras ?`, a: () => `Nous procédons à un tri rigoureux : les objets en bon état sont donnés à des associations, les antiquités et objets de valeur sont rachetés ou estimés, les matériaux recyclables vont en déchetterie agréée et les déchets résiduels sont traités conformément à la réglementation.` },
      { q: (c) => `Proposez-vous une estimation des objets de valeur avant le débarras de succession à ${c} ?`, a: (c) => `Oui, avant toute intervention à ${c}, notre expert réalise une estimation gratuite des meubles, bibelots, tableaux, argenterie et objets d'art présents dans le bien. Cette estimation vous permet d'obtenir un rachat immédiat ou de confier certains objets à des ventes aux enchères.` },
      { q: () => `Pouvez-vous vider une maison en mauvais état ou encombrement extrême ?`, a: () => `Oui, nous intervenons même dans les cas difficiles : maisons encombrées depuis de nombreuses années, syndromes de Diogène, biens laissés à l'abandon depuis longtemps. Notre équipe est formée pour ces situations délicates et dispose du matériel adapté.` },
      { q: (c) => `Fournissez-vous un document de don ou de destruction pour les héritiers à ${c} ?`, a: (c) => `Oui, à l'issue du débarras à ${c}, nous vous remettons un bordereau de dépôt en déchetterie, un reçu pour les objets donnés aux associations et une facture détaillée pour les héritiers et le notaire.` },
      { q: () => `Le débarras de succession peut-il être réalisé en une journée ?`, a: () => `Pour un appartement ou une petite maison, le débarras peut souvent être réalisé en une journée. Pour une grande maison ou un bien avec beaucoup d'effets personnels, il faut généralement 2 à 3 jours. Nous vous communiquons toujours une estimation de durée avant intervention.` },
    ],
    knowsAbout: ["Débarras succession", "Vidage maison succession", "Débarras après décès", "Estimation objets succession", "Rachat antiquités succession", "Débarras maison héritage"],
    schemaName: (city) => `DÉBARRAS PROXIMITÉ – Débarras Succession ${city}`,
    schemaDescription: (city, cp) => `Débarras de succession à ${city} (${cp}). Vidage complet, estimation gratuite, rachat d'objets, discrétion garantie. Devis gratuit.`,
    schemaKeywords: (city, cp) => `débarras succession ${city}, vidage maison succession ${city}, débarras après décès ${cp}, débarras héritage ${city}`,
    schemaSlogan: "Discrétion, respect et efficacité pour votre succession",
    schemaOffers: [
      { name: "Estimation gratuite succession", desc: (city) => `Estimation gratuite des objets, meubles et antiquités d'une succession à ${city} avant débarras.` },
      { name: "Débarras succession appartement", desc: (city) => `Vidage complet d'un appartement dans le cadre d'une succession à ${city}.`, price: "250", unit: "intervention" },
      { name: "Débarras succession maison", desc: (city) => `Vidage complet d'une maison dans le cadre d'une succession à ${city}. Prix selon volume.`, price: "900", unit: "intervention" },
      { name: "Rachat objets et antiquités", desc: (city) => `Rachat immédiat de meubles, bibelots, tableaux et antiquités d'une succession à ${city}.` },
      { name: "Débarras cave / grenier succession", desc: (city) => `Vidage de cave et grenier dans le cadre d'une succession à ${city}.`, price: "199", unit: "intervention" },
      { name: "Coordination notaire", desc: (city, url) => `Coordination de l'intervention avec le notaire en charge de la succession à ${city}.` },
    ],
    tarifCards: [
      { label: "Estimation gratuite", price: "Gratuit", svgPaths: scalePath },
      { label: "Débarras appartement", price: "À partir de 250 €", svgPaths: buildingPath },
      { label: "Débarras maison", price: "À partir de 900 €", svgPaths: homePath },
      { label: "Rachat objets", price: "Sur estimation", svgPaths: starPath },
      { label: "Cave / grenier", price: "À partir de 199 €", svgPaths: archivePath },
      { label: "Urgence 24h", price: "Sur devis", svgPaths: checkPath },
    ],
    tarifTitle: (city) => `Nos tarifs pour le débarras de succession à ${city}`,
    tarifSubtitle: "Tarifs indicatifs – le rachat d'objets peut réduire ou annuler le coût",
    serviceCards: [
      { title: "Estimation & rachat", desc: (c) => `Avant toute intervention à ${c}, notre expert évalue gratuitement la valeur des meubles, bibelots et antiquités. Rachat immédiat ou mise en vente pour compenser le coût du débarras.`, image: "/images/estimation-rachat-antiquites.jpg", svgPaths: scalePath },
      { title: "Tri & don associations", desc: (c) => `Nous trions soigneusement le contenu du bien à ${c} : les objets en bon état sont donnés à des associations locales, réduisant l'impact environnemental et permettant une déduction fiscale.`, image: "/images/Tri_recyclage_don.jpg", svgPaths: recyclePath },
      { title: "Vidage complet", desc: (c) => `Évacuation complète du contenu de la maison ou appartement à ${c} : mobilier, vêtements, appareils électroménagers, déchets. Nous laissons le bien vide et propre.`, image: "/images/debarras-vide-maison.jpg", svgPaths: homePath },
      { title: "Coordination héritiers", desc: (c) => `Notre équipe à ${c} s'adapte à votre calendrier et peut intervenir en coordination avec le notaire, les héritiers ou l'agence immobilière chargée de la vente.`, image: "/images/debarras-Coordination-heritiers.jpg", svgPaths: checkPath },
      { title: "Débarras cave & grenier", desc: (c) => `Dans le cadre d'une succession à ${c}, nous vidons également les caves, greniers et dépendances du bien. Accès difficile, escaliers raides, trappe de combles — nous gérons tout.`, image: "/images/debarras-grenier.jpg", svgPaths: archivePath },
      { title: "Nettoyage fin d'intervention", desc: (c) => `Une fois le bien vidé à ${c}, nous réalisons un nettoyage de base pour remettre le logement en état de visite ou de vente : balayage, dépoussiérage, évacuation des derniers résidus.`, image: "/images/debarras-maison.jpg", svgPaths: checkPath },
    ],
    seoBlocks: [
      {
        title: (c) => `Débarras de succession à ${c} — Estimation gratuite et rachat d'objets`,
        text: (c) => `Le débarras de succession est une étape délicate qui demande discrétion et professionnalisme. À ${c}, notre équipe intervient rapidement pour vider, trier et évacuer le contenu d'un bien hérité, qu'il s'agisse d'une maison, d'un appartement, d'une cave ou d'un grenier.\n\nAvant toute intervention, nous réalisons une estimation gratuite des objets présents : meubles anciens, bibelots, argenterie, tableaux, livres et objets de collection. Cette estimation vous permet de récupérer la valeur des biens ou de la déduire du coût total du débarras. Dans de nombreux cas, le rachat d'antiquités ou de mobilier peut réduire significativement — voire annuler — la facture finale du débarras de succession à ${c}.`,
        image: "/images/rachat-debarras-apres-deces.jpg",
        imageAlt: (c) => `Équipe Débarras Proximité réalisant un débarras de succession dans une maison à ${c}`,
      },
      {
        title: (c) => `Débarras après décès à ${c} — Intervention rapide et coordonnée`,
        text: (c) => `Après le décès d'un proche, le débarras du logement à ${c} doit souvent être réalisé rapidement pour permettre la vente ou la restitution du bien. Notre équipe intervient sous 24 à 48h et peut coordonner son intervention avec votre notaire, vos héritiers ou l'agence immobilière.\n\nNous nous chargeons de tout : tri, évacuation, nettoyage final. Les objets en bon état sont donnés à des associations partenaires, les objets de valeur sont rachetés ou mis en vente, et les déchets sont traités dans des filières agréées. À la fin de l'intervention à ${c}, vous recevez un bilan complet avec les bordereaux de dépôt et les reçus de don.`,
        image: "/images/Debarras_apres-deces.jpg",
        imageAlt: (c) => `Débarras après décès dans un appartement à ${c} par Débarras Proximité`,
      },
    ],
    quoteFormTitle: "Débarras succession : Obtenez votre estimation gratuite !",
    quoteFormSubtitle: "Maison, appartement, cave, grenier — discrétion garantie",
  },

  // ── 2. Débarras de maison (ancien « Vide maison ») ────────────────────────────────────────────────────────
  {
    slug: "debarras-maison",
    label: "Débarras de maison",
    heroImage: "/images/debarras-vide-maison.jpg",
    aboutImage: "/images/debarras-vide-maison.jpg",
    title: (city, cp) => `Débarras complet de maison ${city} | Débarras Proximité`,
    metaDescription: (city, dept) => `Débarras complet de maison à ${city} ${dept} : mobilier et déchets évacués, tri et recyclage, nettoyage final. Devis gratuit le jour même.`,
    h1: (city) => `Débarras de maison à ${city} – Vidage complet et rapide`,
    heroCardBadge: "Devis et déplacement gratuits",
    heroCardTitle: "Débarras de maison professionnel",
    heroCardSub: "Tous volumes, maisons, villas, corps de ferme",
    heroUrgence: "Vente imminente ou fin de bail ? On intervient en urgence !",
    heroIntro: (city) => `Vous avez besoin de vider complètement une maison à ${city} avant une vente, une mise en location ou une démolition ? Notre équipe prend en charge l'intégralité du vidage : mobilier, électroménager, vêtements, déchets et objets encombrants.`,
    heroSpecialiste: (city) => `Spécialiste du vide maison à ${city}`,
    checkpoints: [
      "Vidage complet du logement",
      "Tri sélectif et recyclage",
      "Rachat d'objets de valeur",
      "Nettoyage final sur demande",
    ],
    messagePlaceholder: "Décrivez le bien à vider (surface, nombre de pièces, présence de cave/grenier, date souhaitée...)",
    aboutTitle: (city) => `Vide maison professionnel à ${city}`,
    aboutParagraph: (city) => `Notre entreprise de vide maison intervient à ${city} et dans toute la région pour vider rapidement et efficacement tout type de bien immobilier : maison, villa, appartement, corps de ferme, local commercial. Qu'il s'agisse d'une vente immobilière, d'une fin de bail, d'un déménagement ou d'une rénovation à venir, nous nous adaptons à votre calendrier et intervenons sous 24 à 48h après validation du devis. Notre équipe s'occupe de tout : démontage et évacuation du mobilier, enlèvement des électroménagers, tri des vêtements et effets personnels, évacuation des déchets encombrants. Les objets récupérables sont donnés à des associations ou rachetés si de valeur, le reste est traité dans des filières agréées.`,
    ctaTitle: (city) => `Besoin d'un vide maison à ${city} ?`,
    ctaText: (city) => `Notre équipe se déplace à ${city} pour un vide maison rapide et professionnel. Devis gratuit sur place, tarif transparent, intervention sous 24–48h.`,
    faqSectionTitle: "Tout savoir sur le vide maison",
    faqItems: [
      { q: (c) => `Quel est le prix d'un vide maison à ${c} ?`, a: (c) => `Le tarif d'un vide maison à ${c} dépend principalement du volume à évacuer et de l'accessibilité du bien. Comptez entre 300 € et 2 500 € pour un appartement, et entre 800 € et 6 000 € pour une maison. Dans certains cas, le rachat d'objets de valeur peut réduire significativement la facture. Devis gratuit sur place.` },
      { q: (c) => `En combien de temps peut-on vider une maison à ${c} ?`, a: () => `Pour un appartement standard (F3/F4), le vidage prend généralement une journée. Pour une maison individuelle, comptez 1 à 3 jours selon le volume et l'encombrement. Pour les grands corps de ferme ou maisons de maître, prévoir 3 à 5 jours.` },
      { q: (c) => `Intervenez-vous en urgence pour un vide maison à ${c} ?`, a: (c) => `Oui, nous intervenons en urgence à ${c} sous 24h pour les situations de vente immobilière imminente, fin de bail ou libération rapide d'un bien. Contactez-nous pour une intervention le jour même selon disponibilité.` },
      { q: () => `Le vide maison inclut-il le nettoyage ?`, a: () => `Le vide maison comprend l'enlèvement de tous les meubles et effets personnels. Un nettoyage de base est inclus dans notre prestation. Un nettoyage approfondi (état des lieux locatif, remise en état après débarras) peut être ajouté en option sur devis.` },
      { q: () => `Que faites-vous avec les objets récupérés lors du vide maison ?`, a: () => `Nous trions systématiquement le contenu : les objets en bon état sont donnés à des associations locales ou rachetés si de valeur, les matériaux recyclables vont en déchetterie agréée, et les déchets non recyclables sont traités conformément à la réglementation environnementale.` },
      { q: (c) => `Videz-vous aussi les caves et greniers à ${c} ?`, a: (c) => `Oui, le vide maison à ${c} comprend l'évacuation de toutes les dépendances : cave, grenier, garage, remise, abri de jardin. Signalez-le lors de votre demande de devis pour qu'il soit pris en compte.` },
      { q: () => `Fournissez-vous une facture et un certificat de traitement des déchets ?`, a: () => `Oui, nous vous remettons une facture détaillée avec la liste des prestations effectuées, un bordereau de dépôt en déchetterie agréée et, sur demande, les reçus de don aux associations partenaires.` },
      { q: (c) => `Peut-on être présent lors du vide maison à ${c} ?`, a: (c) => `Vous pouvez être présent ou nous confier les clés selon votre préférence. Notre équipe à ${c} travaille avec la même rigueur dans les deux cas. Nous vous informons en temps réel du déroulement des opérations si vous le souhaitez.` },
    ],
    knowsAbout: ["Vide maison", "Vidage maison complet", "Enlèvement mobilier", "Débarras maison vente", "Vide appartement", "Vidage maison héritage"],
    schemaName: (city) => `DÉBARRAS PROXIMITÉ – Vide Maison ${city}`,
    schemaDescription: (city, cp) => `Vide maison à ${city} (${cp}). Vidage complet, enlèvement mobilier et déchets, nettoyage. Intervention rapide. Devis gratuit.`,
    schemaKeywords: (city, cp) => `vide maison ${city}, vidage maison ${city}, vider maison ${cp}, enlèvement mobilier ${city}, débarras maison ${city}`,
    schemaSlogan: "Votre maison vidée en 24–48h, propre et prête",
    schemaOffers: [
      { name: "Vide appartement T2/T3", desc: (city) => `Vidage complet d'un appartement 2 ou 3 pièces à ${city}.`, price: "450", unit: "intervention" },
      { name: "Vide maison individuelle", desc: (city) => `Vidage complet d'une maison individuelle à ${city}. Tarif selon volume.`, price: "900", unit: "intervention" },
      { name: "Vide cave et grenier", desc: (city) => `Vidage de cave et/ou grenier en complément du vide maison à ${city}.`, price: "199", unit: "intervention" },
      { name: "Nettoyage après vidage", desc: (city) => `Nettoyage complet du bien après vidage à ${city}, état des lieux inclus.`, price: "150", unit: "intervention" },
      { name: "Vide maison urgence", desc: (city) => `Vide maison en urgence sous 24h à ${city} pour vente ou fin de bail.` },
      { name: "Estimation & rachat objets", desc: (city, url) => `Estimation gratuite et rachat des objets de valeur lors du vide maison à ${city}.` },
    ],
    tarifCards: [
      { label: "Vide appartement", price: "À partir de 250 €", svgPaths: buildingPath },
      { label: "Vide maison", price: "À partir de 900 €", svgPaths: homePath },
      { label: "Cave / grenier", price: "À partir de 199 €", svgPaths: archivePath },
      { label: "Nettoyage final", price: "À partir de 150 €", svgPaths: checkPath },
      { label: "Urgence 24h", price: "Sur devis", svgPaths: truckPath },
      { label: "Rachat objets", price: "Gratuit", svgPaths: euroPath },
    ],
    tarifTitle: (city) => `Nos tarifs pour le vide maison à ${city}`,
    tarifSubtitle: "Tarifs indicatifs – devis gratuit sur place selon volume réel",
    serviceCards: [
      { title: "Vidage mobilier & électroménager", desc: (c) => `Démontage et évacuation de l'intégralité du mobilier, appareils électroménagers, literie et équipements de votre bien à ${c}. Travail soigné, sans dégradation des murs et sols.`, image: "/images/Vidage_mobilier_electromenager.jpg", svgPaths: truckPath },
      { title: "Enlèvement encombrants", desc: (c) => `Évacuation de tous les encombrants présents à ${c} : cartons, vêtements, bibelots, déchets divers. Tri sélectif systématique pour valoriser les matières recyclables.`, image: "/images/Enlevement-encombrants.jpg", svgPaths: trashPath },
      { title: "Cave, grenier, garage", desc: (c) => `Vidage complet des dépendances du bien à ${c} : cave, grenier, garage, remise. Aucun espace n'est laissé de côté pour un bien totalement libéré.`, image: "/images/debarras-cave.jpg", svgPaths: archivePath },
      { title: "Nettoyage & remise en état", desc: (c) => `Après le vidage, notre équipe à ${c} réalise un nettoyage de base du bien. Un état des lieux complet peut être établi pour faciliter la restitution au bailleur ou la mise en vente.`, image: "/images/debarras-maison.jpg", svgPaths: checkPath },
      { title: "Estimation & rachat d'objets", desc: (c) => `Lors du vide maison à ${c}, notre expert identifie les meubles anciens, bibelots et objets de valeur. Rachat immédiat proposé sur place pour réduire voire annuler le coût de l'intervention.`, image: "/images/rachat-antiquites.jpg", svgPaths: scalePath },
      { title: "Don aux associations", desc: (c) => `Tous les objets en bon état récupérés lors du vide maison à ${c} sont remis à des associations locales partenaires. Vous recevez un reçu de don utilisable pour votre déclaration fiscale.`, image: "/images/Don_aux_associations.jpg", svgPaths: recyclePath },
    ],
    seoBlocks: [
      {
        title: (c) => `Vide maison à ${c} — Vidage complet en 24–48h`,
        text: (c) => `Le vide maison est une prestation qui demande rapidité, organisation et sérieux. À ${c}, notre équipe spécialisée prend en charge l'intégralité du vidage de votre bien en 24 à 48h : démontage et évacuation du mobilier, enlèvement des électroménagers, tri des vêtements et effets personnels, évacuation des déchets encombrants.\n\nNous intervenons dans tous les contextes : vente immobilière imminente, fin de bail, déménagement, rénovation à venir ou succession. Quel que soit l'état du bien, notre équipe à ${c} gère tout de A à Z avec une organisation efficace et un respect total des personnes et des lieux.`,
        image: "/images/debarras_maison.jpg",
        imageAlt: (c) => `Équipe Débarras Proximité réalisant un vide maison complet à ${c}`,
      },
      {
        title: (c) => `Tri, recyclage et don — Notre engagement écologique à ${c}`,
        text: (c) => `Chez Débarras Proximité, le vide maison à ${c} ne se résume pas à "tout jeter". Nous appliquons un tri rigoureux à chaque intervention : les objets en bon état sont donnés à des associations locales (meubles, vêtements, jouets), les matériaux valorisables sont acheminés vers des filières de recyclage agréées, et les déchets résiduels sont traités selon la réglementation en vigueur.\n\nSi des objets de valeur (meubles anciens, bibelots, œuvres d'art, argenterie) sont identifiés lors du vide maison à ${c}, nous vous proposons une estimation gratuite et un rachat immédiat. Cette démarche peut réduire ou annuler le coût de la prestation.`,
        image: "/images/Tri_recyclage_don.jpg",
        imageAlt: (c) => `Tri sélectif et recyclage lors d'un vide maison à ${c}`,
      },
    ],
    quoteFormTitle: "Vide maison : Obtenez votre devis gratuit !",
    quoteFormSubtitle: "Maison, appartement, villa, corps de ferme — tous volumes",
  },

  // ── 3. Débarras cave et grenier ──────────────────────────────────────────
  {
    slug: "debarras-cave-grenier",
    label: "Débarras cave et grenier",
    heroImage: "/images/debarras-grenier.jpg",
    aboutImage: "/images/debarras-cave.jpg",
    title: (city, cp) => `Débarras cave et grenier ${city} (${cp}) | Débarras Proximité`,
    metaDescription: (city, dept) => `Débarras de cave, grenier et combles à ${city} ${dept} : vidage complet, tri sélectif et évacuation de tous encombrants. Devis gratuit le jour même.`,
    h1: (city) => `Débarras cave et grenier à ${city} – Vidage et évacuation`,
    heroCardBadge: "Devis et déplacement gratuits",
    heroCardTitle: "Débarras cave & grenier",
    heroCardSub: "Évacuation rapide, tri sélectif garanti",
    heroUrgence: "Cave ou grenier envahi ? On intervient vite !",
    heroIntro: (city) => `Votre cave ou grenier à ${city} est saturé d'encombrants, de vieux meubles ou d'objets accumulés depuis des années ? Notre équipe spécialisée prend en charge le vidage complet avec tri, évacuation et remise en état.`,
    heroSpecialiste: (city) => `Spécialiste du débarras cave et grenier à ${city}`,
    checkpoints: [
      "Cave, grenier et combles",
      "Tri sélectif et recyclage",
      "Évacuation de tous encombrants",
      "Nettoyage après intervention",
    ],
    messagePlaceholder: "Décrivez l'espace à vider (cave, grenier, combles, type d'encombrants, surface approximative...)",
    aboutTitle: (city) => `Débarras cave et grenier professionnel à ${city}`,
    aboutParagraph: (city) => `Notre équipe intervient à ${city} pour vider et débarrasser caves, greniers, combles, sous-sols et remises de tout type d'encombrants : vieux meubles, électroménager hors d'usage, cartons, archives, outillage, déchets divers. Nous réalisons un tri sélectif complet et évacuons l'ensemble vers les filières adaptées : déchetteries agréées, associations locales pour les objets récupérables, filières de recyclage pour les matériaux valorisables. L'espace vous est rendu propre et libéré, prêt à être réutilisé ou vendu.`,
    ctaTitle: (city) => `Cave ou grenier à vider à ${city} ?`,
    ctaText: (city) => `Notre équipe intervient à ${city} pour un débarras cave ou grenier rapide et efficace. Devis gratuit, tarif transparent, tri sélectif garanti.`,
    faqSectionTitle: "Tout savoir sur le débarras cave et grenier",
    faqItems: [
      { q: (c) => `Quel est le prix d'un débarras de cave à ${c} ?`, a: (c) => `Le tarif d'un débarras de cave à ${c} dépend du volume et de l'accessibilité (escalier, monte-charge, accès extérieur). Comptez entre 150 € et 600 € pour une cave standard. Un devis gratuit sur place est toujours réalisé avant intervention.` },
      { q: (c) => `Videz-vous aussi les greniers difficiles d'accès à ${c} ?`, a: (c) => `Oui, notre équipe est équipée pour intervenir dans les greniers à faible hauteur sous plafond, avec escalier raide ou trappe d'accès. Nous apportons le matériel adapté (sangles, chariots, protection des sols) pour chaque intervention à ${c}.` },
      { q: () => `Peut-on débarrasser une cave ou grenier remplis de déchets dangereux ?`, a: () => `Pour les déchets dangereux (amiante, peintures anciennes au plomb, produits chimiques), nous faisons appel à des prestataires spécialisés agréés. Signalez-nous la présence de ces matériaux lors de la prise de contact pour que nous adaptions l'intervention.` },
      { q: (c) => `En combien de temps peut-on vider un grenier à ${c} ?`, a: () => `Pour un grenier standard (40 à 80 m²), le vidage prend généralement une demi-journée à une journée complète. Pour des greniers très chargés ou difficiles d'accès, comptez 1 à 2 jours.` },
      { q: (c) => `Le débarras cave et grenier inclut-il le nettoyage à ${c} ?`, a: (c) => `Oui, après l'évacuation complète des encombrants à ${c}, notre équipe réalise un balayage et un nettoyage de base de l'espace. Un nettoyage approfondi peut être ajouté en option sur demande.` },
      { q: () => `Récupérez-vous les objets de valeur trouvés dans la cave ou le grenier ?`, a: () => `Oui, lors du tri, nous identifions les objets pouvant avoir une valeur marchande (meubles anciens, outillage professionnel, électroménager récent). Sur votre accord, nous vous proposons une estimation gratuite et un rachat immédiat.` },
      { q: (c) => `Débarrassez-vous aussi les sous-sols de copropriété à ${c} ?`, a: (c) => `Oui, nous intervenons dans les caves de copropriété à ${c}. Pensez à obtenir l'autorisation du syndic ou du bailleur si nécessaire. Nous pouvons également intervenir dans plusieurs caves d'un même immeuble lors d'une même intervention.` },
      { q: () => `Fournissez-vous une attestation de traitement des déchets ?`, a: () => `Oui, à la fin de l'intervention, nous vous remettons un bordereau de dépôt en déchetterie agréée et les reçus de don aux associations partenaires si applicable.` },
    ],
    knowsAbout: ["Débarras cave", "Vidage grenier", "Débarras combles", "Évacuation encombrants cave", "Nettoyage grenier", "Débarras sous-sol"],
    schemaName: (city) => `DÉBARRAS PROXIMITÉ – Débarras Cave et Grenier ${city}`,
    schemaDescription: (city, cp) => `Débarras cave et grenier à ${city} (${cp}). Vidage complet, tri sélectif, évacuation rapide. Devis gratuit.`,
    schemaKeywords: (city, cp) => `débarras cave ${city}, vidage grenier ${city}, débarras cave grenier ${cp}, vider combles ${city}`,
    schemaSlogan: "Cave et grenier vidés, espace retrouvé",
    schemaOffers: [
      { name: "Débarras cave standard", desc: (city) => `Vidage complet d'une cave standard à ${city}. Tri sélectif inclus.`, price: "199", unit: "intervention" },
      { name: "Débarras grenier", desc: (city) => `Vidage complet d'un grenier à ${city}. Évacuation de tous les encombrants.`, price: "250", unit: "intervention" },
      { name: "Débarras combles", desc: (city) => `Vidage de combles aménagés ou perdus à ${city}.`, price: "300", unit: "intervention" },
      { name: "Pack cave + grenier", desc: (city) => `Vidage combiné cave et grenier à ${city} lors d'une même intervention.`, price: "380", unit: "intervention" },
      { name: "Nettoyage après débarras", desc: (city) => `Nettoyage approfondi de la cave ou du grenier après débarras à ${city}.`, price: "80", unit: "intervention" },
      { name: "Évacuation déchets spéciaux", desc: (city, url) => `Évacuation de déchets particuliers (huiles, peintures, électronique) dans les filières agréées à ${city}.` },
    ],
    tarifCards: [
      { label: "Cave standard", price: "À partir de 199 €", svgPaths: archivePath },
      { label: "Grenier", price: "À partir de 250 €", svgPaths: boxPath },
      { label: "Combles", price: "À partir de 300 €", svgPaths: homePath },
      { label: "Pack cave + grenier", price: "À partir de 380 €", svgPaths: truckPath },
      { label: "Nettoyage final", price: "À partir de 80 €", svgPaths: checkPath },
      { label: "Déchets spéciaux", price: "Sur devis", svgPaths: recyclePath },
    ],
    tarifTitle: (city) => `Nos tarifs pour le débarras cave et grenier à ${city}`,
    tarifSubtitle: "Tarifs indicatifs – devis gratuit sur place",
    serviceCards: [
      { title: "Vidage cave", desc: (c) => `Évacuation complète du contenu de votre cave à ${c} : meubles, cartons, électroménager, outils, déchets divers. Tri sélectif systématique.`, image: "/images/debarras-cave.jpg", svgPaths: archivePath },
      { title: "Vidage grenier", desc: (c) => `Débarras complet de votre grenier ou combles à ${c}. Nous gérons l'accès difficile, les trappes, les escaliers raides et les objets volumineux.`, image: "/images/debarras-grenier.jpg", svgPaths: boxPath },
      { title: "Tri & recyclage", desc: (c) => `Tri rigoureux de tous les objets évacués à ${c} : dons aux associations, recyclage des matériaux, traitement spécifique des déchets dangereux.`, image: "/images/Tri_recyclage_don.jpg", svgPaths: recyclePath },
      { title: "Nettoyage final", desc: (c) => `Après l'évacuation de votre cave ou grenier à ${c}, nettoyage de base inclus. Espace remis en état, propre et prêt à être réutilisé.`, image: "/images/Nettoyage-final-apres-debarras.jpg", svgPaths: checkPath },
      { title: "Déchets dangereux & spéciaux", desc: (c) => `Identification et évacuation des déchets spéciaux trouvés dans votre cave ou grenier à ${c} : peintures, solvants, batteries, amiante. Traitement dans les filières agréées avec bordereau de dépôt.`, image: "/images/Dechets_dangereux_speciaux.jpg", svgPaths: shieldPath },
      { title: "Estimation & rachat sur place", desc: (c) => `Notre expert identifie lors du tri les objets de valeur cachés dans votre cave ou grenier à ${c} : outillage, meubles anciens, collections. Rachat immédiat proposé pour réduire la facture.`, image: "/images/Rachat_Immediat_Antiquites.jpg", svgPaths: scalePath },
    ],
    seoBlocks: [
      {
        title: (c) => `Débarras cave et grenier à ${c} — Vidage rapide et tri sélectif`,
        text: (c) => `Cave envahie d'encombrants, grenier impossible à traverser, combles transformés en décharge ? Notre équipe intervient à ${c} pour vider ces espaces de fond en comble. Nous prenons en charge l'intégralité de la prestation : transport du matériel d'évacuation, vidage des espaces, tri des objets et évacuation vers les filières adaptées.\n\nNous intervenons dans tous les types d'espaces : caves de maison individuelle ou de copropriété, greniers sous les toits, combles aménagés ou perdus, sous-sols, remises, abris de jardin à ${c}. Notre équipe est équipée pour les accès difficiles et les objets lourds ou volumineux.`,
        image: "/images/debarras-grenier.jpg",
        imageAlt: (c) => `Débarras de grenier encombré à ${c} par l'équipe Débarras Proximité`,
      },
      {
        title: (c) => `Valorisation des objets et respect de l'environnement à ${c}`,
        text: (c) => `Chez Débarras Proximité, nous ne nous contentons pas de "vider" — nous trions et valorisons. Lors de chaque débarras cave et grenier à ${c}, nos équipes identifient les objets pouvant avoir une seconde vie : meubles anciens estimés et rachetés, vêtements et jouets donnés à des associations, matériaux recyclables orientés vers les bonnes filières.\n\nLes déchets dangereux (huiles, peintures, produits chimiques) sont confiés à des prestataires spécialisés. À la fin de l'intervention à ${c}, vous recevez un bordereau de dépôt en déchetterie et les reçus de don, pour une traçabilité complète du traitement de vos encombrants.`,
        image: "/images/debarras-cave.jpg",
        imageAlt: (c) => `Tri sélectif lors d'un débarras cave à ${c} par Débarras Proximité`,
      },
    ],
    quoteFormTitle: "Débarras cave et grenier : Obtenez votre devis gratuit !",
    quoteFormSubtitle: "Cave, grenier, combles, remise — tous espaces",
  },

  // ── 4. Débarras syndrome de Diogène ──────────────────────────────────────
  {
    slug: "debarras-syndrome-diogene",
    label: "Débarras syndrome de Diogène",
    heroImage: "/images/debarras-syndrome-diogene.jpg",
    aboutImage: "/images/Debarras-syndrome-de-Diogene.jpg",
    title: (city, cp) => `Débarras syndrome de Diogène ${city} | Débarras Proximité`,
    metaDescription: (city, dept) => `Débarras de logement Diogène à ${city} ${dept} : tri, évacuation et désinfection, avec discrétion et sans jugement. Devis gratuit le jour même.`,
    h1: (city) => `Débarras syndrome de Diogène à ${city} – Intervention discrète et respectueuse`,
    heroCardBadge: "Devis et déplacement gratuits",
    heroCardTitle: "Débarras logement encombré",
    heroCardSub: "Accumulation extrême, insalubrité, urgence sociale",
    heroUrgence: "Intervention sous 24–48h, en coordination avec les services sociaux",
    heroIntro: (city) => `Le syndrome de Diogène entraîne une accumulation pathologique d'objets et parfois une insalubrité grave du logement. À ${city}, notre équipe formée intervient avec discrétion, respect et efficacité pour vider, désinfecter et remettre en état le bien, sans jugement.`,
    heroSpecialiste: (city) => `Spécialiste du débarras de logement en situation d'accumulation à ${city}`,
    checkpoints: [
      "Intervention discrète, sans jugement",
      "Équipe formée et expérimentée",
      "Tri, évacuation et désinfection",
      "Relais avec services sociaux",
    ],
    messagePlaceholder: "Décrivez la situation (type de bien, état approximatif, présence de la personne, date souhaitée, coordination avec des tiers...)",
    aboutTitle: (city) => `Débarras syndrome de Diogène professionnel à ${city}`,
    aboutParagraph: (city) => `Le syndrome de Diogène se caractérise par une accumulation incontrôlée d'objets, de déchets ou d'animaux dans un logement, souvent accompagnée d'une négligence corporelle et sociale. À ${city}, notre équipe est formée pour intervenir dans ces situations délicates avec humanité, discrétion et efficacité. Nous prenons en charge le tri intégral du logement, l'évacuation de tous les encombrants et déchets, ainsi que la désinfection du bien. Nous pouvons coordonner notre intervention avec la famille, les services sociaux, un médecin ou le bailleur. À l'issue de l'intervention, le logement est vidé, nettoyé et débarrassé de toute infestation éventuelle (nuisibles, moisissures).`,
    ctaTitle: (city) => `Logement encombré à gérer à ${city} ? Contactez-nous`,
    ctaText: (city) => `Notre équipe intervient à ${city} pour les débarras liés au syndrome de Diogène avec discrétion et professionnalisme. Devis gratuit, intervention rapide, coordination possible avec les services sociaux.`,
    faqSectionTitle: "Tout savoir sur le débarras syndrome de Diogène",
    faqItems: [
      { q: (c) => `Combien coûte un débarras pour syndrome de Diogène à ${c} ?`, a: (c) => `Le coût d'un débarras de logement en situation de Diogène à ${c} varie selon la surface, le niveau d'accumulation et l'état sanitaire du bien. Il faut compter entre 800 € et 3 000 € pour un appartement, et davantage pour une maison. Un devis gratuit sur place est indispensable pour évaluer le volume réel.` },
      { q: (c) => `La personne concernée doit-elle être présente lors du débarras à ${c} ?`, a: (c) => `Non, la présence de la personne n'est pas obligatoire. Le débarras peut être organisé par un proche, un tuteur ou un service social à ${c}. Si la personne est présente, nous adaptons notre intervention avec encore plus de douceur et de respect.` },
      { q: (c) => `Intervenez-vous en urgence pour les situations d'insalubrité grave à ${c} ?`, a: (c) => `Oui, nous pouvons intervenir sous 24 à 48h à ${c} pour les situations urgentes : arrêté d'insalubrité, mise en danger de la personne, intervention à la demande des services sociaux ou d'un bailleur.` },
      { q: () => `Comment se déroule un débarras syndrome de Diogène ?`, a: () => `L'intervention se déroule en 3 phases : 1) Évaluation et tri des objets conservés sur demande de la famille ou du mandataire ; 2) Évacuation complète de tous les encombrants, déchets et matières souillées ; 3) Désinfection du logement et traitement contre les nuisibles si nécessaire. Un bilan complet vous est remis à l'issue.` },
      { q: (c) => `Pouvez-vous intervenir en coordination avec les services sociaux à ${c} ?`, a: (c) => `Oui, nous travaillons régulièrement en lien avec les services sociaux, les assistants sociaux, les tuteurs et les services d'aide à domicile à ${c}. Nous nous adaptons aux procédures en cours et respectons les délais imposés par les autorités.` },
      { q: () => `Que faites-vous des objets et documents personnels trouvés dans le logement ?`, a: () => `Nous identifions et mettons de côté tous les documents administratifs (papiers d'identité, relevés bancaires, actes notariés) et objets de valeur repérés lors du tri. Ils sont remis à la famille ou au mandataire légal avant évacuation du reste.` },
      { q: (c) => `Assurez-vous la désinfection et le traitement contre les nuisibles après le débarras à ${c} ?`, a: (c) => `Oui, selon l'état du logement à ${c}, nous proposons une désinfection complète des surfaces, un traitement anti-nuisibles (cafards, punaises de lit, rongeurs) et un traitement anti-moisissures. Ces prestations sont intégrées dans notre offre globale.` },
      { q: (c) => `Le bailleur peut-il mandater Débarras Proximité directement pour un débarras Diogène à ${c} ?`, a: (c) => `Oui, les bailleurs sociaux et privés peuvent nous mandater directement à ${c}. Nous intervenons sur présentation d'un mandat, d'un jugement d'expulsion ou d'un arrêté de mise en demeure. Devis et facture au nom du bailleur.` },
    ],
    knowsAbout: ["Débarras syndrome de Diogène", "Logement insalubre", "Débarras accumulation pathologique", "Nettoyage logement encombré", "Désinfection après Diogène", "Débarras urgence sociale"],
    schemaName: (city) => `DÉBARRAS PROXIMITÉ – Débarras Syndrome de Diogène ${city}`,
    schemaDescription: (city, cp) => `Débarras syndrome de Diogène à ${city} (${cp}). Logement encombré ou insalubre, intervention discrète et respectueuse. Désinfection, tri, évacuation. Devis gratuit.`,
    schemaKeywords: (city, cp) => `débarras syndrome de Diogène ${city}, logement insalubre ${city}, débarras accumulation ${cp}, nettoyage logement encombré ${city}`,
    schemaSlogan: "Intervention discrète, respectueuse et professionnelle pour les logements en difficulté",
    schemaOffers: [
      { name: "Évaluation gratuite logement encombré", desc: (city) => `Visite et évaluation gratuite du niveau d'accumulation et de l'état sanitaire du logement à ${city}.` },
      { name: "Débarras appartement Diogène", desc: (city) => `Tri, évacuation et désinfection d'un appartement en situation de Diogène à ${city}.`, price: "900", unit: "intervention" },
      { name: "Débarras maison Diogène", desc: (city) => `Vidage complet et désinfection d'une maison en situation d'accumulation pathologique à ${city}.`, price: "1800", unit: "intervention" },
      { name: "Désinfection & traitement nuisibles", desc: (city) => `Désinfection complète et traitement anti-nuisibles (cafards, punaises, rongeurs) après débarras à ${city}.`, price: "300", unit: "intervention" },
      { name: "Coordination services sociaux", desc: (city, url) => `Coordination de l'intervention avec les services sociaux, tuteurs ou bailleur à ${city}.` },
      { name: "Débarras urgence bailleur", desc: (city) => `Débarras d'un logement insalubre sous mandat bailleur ou arrêté d'insalubrité à ${city}.`, price: "1200", unit: "intervention" },
    ],
    tarifCards: [
      { label: "Évaluation gratuite", price: "Gratuit", svgPaths: scalePath },
      { label: "Appartement Diogène", price: "À partir de 900 €", svgPaths: buildingPath },
      { label: "Maison Diogène", price: "À partir de 1 800 €", svgPaths: homePath },
      { label: "Désinfection & nuisibles", price: "À partir de 300 €", svgPaths: shieldPath },
      { label: "Urgence bailleur", price: "À partir de 1 200 €", svgPaths: checkPath },
      { label: "Coordination sociale", price: "Inclus", svgPaths: recyclePath },
    ],
    tarifTitle: (city) => `Nos tarifs pour le débarras syndrome de Diogène à ${city}`,
    tarifSubtitle: "Tarifs indicatifs — devis gratuit sur place indispensable selon l'état du logement",
    serviceCards: [
      { title: "Tri & conservation sur demande", desc: (c) => `Avant toute évacuation à ${c}, nous identifions et mettons de côté les documents administratifs, objets de valeur et effets personnels à conserver selon la demande de la famille ou du mandataire.`, image: "/images/Tri-conservation-sur-demande.jpg", svgPaths: archivePath },
      { title: "Vidage complet du logement", desc: (c) => `Évacuation intégrale de tous les encombrants, déchets et matières accumulées dans le logement à ${c}. Notre équipe renforcée gère les volumes extrêmes et les conditions difficiles.`, image: "/images/Vidage-complet-du-logement.jpg", svgPaths: homePath },
      { title: "Désinfection & traitement nuisibles", desc: (c) => `Après le vidage à ${c}, désinfection complète des surfaces, traitement anti-cafards, punaises de lit et rongeurs, ainsi que traitement anti-moisissures selon le niveau de contamination.`, image: "/images/Desinfection-traitement-nuisibles.jpg", svgPaths: shieldPath },
      { title: "Coordination sociale & familiale", desc: (c) => `Notre équipe à ${c} peut travailler en lien avec les services sociaux, tuteurs, médecins et proches. Nous nous adaptons aux procédures légales et respectons le rythme de chaque situation.`, image: "/images/Coordination-sociale-familiale.jpg", svgPaths: checkPath },
      { title: "Intervention bailleur & urgence", desc: (c) => `Sur mandat d'un bailleur ou arrêté d'insalubrité, nous intervenons sous 24h à ${c}. Facture et rapport d'intervention remis au bailleur ou à l'huissier.`, image: "/images/debarras-intervention-bailleur-urgence.jpg", svgPaths: truckPath },
      { title: "Remise en état du bien", desc: (c) => `À l'issue du débarras à ${c}, nettoyage approfondi et remise en état du logement pour permettre sa réintégration, sa mise en location ou sa mise en vente dans les meilleures conditions.`, image: "/images/debarras-Remise-en-etat-du-bien.jpg", svgPaths: recyclePath },
    ],
    seoBlocks: [
      {
        title: (c) => `Débarras syndrome de Diogène à ${c} — Une intervention humaine et professionnelle`,
        text: (c) => `Le syndrome de Diogène est une pathologie sérieuse qui entraîne une accumulation incontrôlée d'objets, de déchets et parfois d'animaux dans le logement. Les conséquences peuvent être graves : insalubrité, risques sanitaires pour la personne et les voisins, arrêté municipal de mise en demeure ou expulsion. À ${c}, notre équipe est spécialement formée pour intervenir dans ce type de situation avec humanité, discrétion et efficacité.\n\nContrairement à un débarras classique, le débarras Diogène nécessite une approche adaptée : tri préalable des documents importants et effets personnels, protection du personnel (combinaisons, masques), traitement des nuisibles et moisissures, coordination avec les services sociaux ou le bailleur. Nous intervenons sous 24 à 48h à ${c} et vous remettons un bilan complet à l'issue de l'intervention.`,
        image: "/images/debarras_syndrome_diogene.jpg",
        imageAlt: (c) => `Équipe Débarras Proximité intervenant dans un logement encombré à ${c}`,
      },
      {
        title: (c) => `Désinfection et remise en état après syndrome de Diogène à ${c}`,
        text: (c) => `Une fois le logement vidé à ${c}, la désinfection est une étape indispensable. Les logements touchés par le syndrome de Diogène présentent souvent des contaminations bactériennes, des infestations de nuisibles (cafards, punaises de lit, rongeurs) et des moisissures. Notre équipe réalise un traitement complet incluant la désinfection des surfaces, le traitement anti-nuisibles et si nécessaire un traitement fongicide.\n\nNous travaillons avec des produits professionnels homologués et vous remettons un rapport d'intervention détaillé. Ce rapport est utilisable pour les démarches auprès de votre bailleur, de votre assurance ou des services sociaux. À l'issue, le logement est remis en état de réintégration ou de remise en location à ${c}.`,
        image: "/images/Desinfection-remise-en-etat-syndrome-de-Diogene.jpg",
        imageAlt: (c) => `Désinfection d'un logement après syndrome de Diogène à ${c} par Débarras Proximité`,
      },
    ],
    quoteFormTitle: "Débarras Diogène : Obtenez votre évaluation gratuite !",
    quoteFormSubtitle: "Intervention discrète, respectueuse et rapide — coordination sociale possible",
  },

  // ── 5. Débarras fin de chantier (gravats, ferraille) ──────────────────────
  {
    slug: "debarras-fin-de-chantier",
    label: "Débarras fin de chantier",
    heroImage: "/images/debarras-fin-de-chantier.jpg",
    aboutImage: "/images/image-debarras-fin-de-chantier.jpeg",
    title: (city, cp) => `Débarras fin de chantier ${city} (${cp}) | Débarras Proximité`,
    metaDescription: (city, dept) => `Débarras de fin de chantier à ${city} ${dept} : gravats, ferraille et déchets de travaux évacués en filières agréées. Devis gratuit le jour même.`,
    h1: (city) => `Débarras fin de chantier à ${city} – Gravats, ferraille et déchets de travaux`,
    heroCardBadge: "Devis et déplacement gratuits",
    heroCardTitle: "Débarras chantier express",
    heroCardSub: "Gravats, ferraille, déchets de travaux",
    heroUrgence: "Réception de chantier imminente ? Intervention rapide garantie !",
    heroIntro: (city) => `Vos travaux sont terminés à ${city} et il reste des gravats, de la ferraille, des chutes de matériaux et des emballages ? Notre équipe prend en charge l'évacuation complète de vos déchets de chantier : chargement, tri, transport en filières agréées et nettoyage des lieux.`,
    heroSpecialiste: (city) => `Spécialiste du débarras fin de chantier à ${city}`,
    checkpoints: [
      "Gravats, béton et plâtre",
      "Ferraille et métaux enlevés",
      "Filières de tri agréées",
      "Nettoyage du chantier inclus",
    ],
    messagePlaceholder: "Décrivez le chantier (type de déchets : gravats, ferraille, bois, plâtre… volume estimé, accès, étage, date souhaitée...)",
    aboutTitle: (city) => `Débarras fin de chantier professionnel à ${city}`,
    aboutParagraph: (city) => `Notre équipe intervient à ${city} pour débarrasser tous types de chantiers : rénovation de maison ou d'appartement, démolition intérieure, réfection de salle de bain ou de cuisine, travaux d'extension. Nous évacuons les gravats (béton, briques, parpaings, carrelage, plâtre), la ferraille et les métaux (radiateurs, tuyauterie, câbles, structures), le bois, les menuiseries déposées, les sanitaires et les emballages. Chaque catégorie est triée et acheminée vers la filière adaptée : recyclage des inertes, valorisation des métaux, centre de traitement agréé. Le chantier vous est rendu propre, prêt pour la réception des travaux ou l'emménagement.`,
    ctaTitle: (city) => `Chantier à débarrasser à ${city} ?`,
    ctaText: (city) => `Notre équipe intervient à ${city} pour évacuer vos gravats, votre ferraille et tous vos déchets de travaux. Devis gratuit et intervention rapide, particuliers comme professionnels.`,
    faqSectionTitle: "Tout savoir sur le débarras fin de chantier",
    faqItems: [
      { q: (c) => `Combien coûte un débarras fin de chantier à ${c} ?`, a: (c) => `Le tarif d'un débarras de chantier à ${c} dépend du volume, de la nature des déchets et de l'accès. Comptez à partir de 150 € pour un petit volume de gravats, et entre 400 € et 1 200 € pour une fin de chantier complète de rénovation. La ferraille pouvant être valorisée, elle réduit souvent la facture. Devis gratuit.` },
      { q: () => `Quels déchets de chantier enlevez-vous ?`, a: () => `Nous enlevons les gravats et déchets inertes (béton, briques, parpaings, tuiles, carrelage, faïence), le plâtre et les plaques de plâtre, la ferraille et les métaux, le bois et les menuiseries, les sanitaires, les emballages et le tout-venant de chantier. Les déchets dangereux (amiante notamment) relèvent d'entreprises certifiées et ne sont pas pris en charge.` },
      { q: (c) => `Récupérez-vous la ferraille à ${c} ?`, a: (c) => `Oui, la ferraille et les métaux (cuivre, laiton, aluminium, acier, fonte) sont valorisés. Selon la quantité et la nature des métaux, leur valeur est déduite du devis à ${c}, et l'enlèvement peut même être gratuit pour un volume important de métaux.` },
      { q: () => `Faut-il prévoir une benne pour évacuer mes gravats ?`, a: () => `Pas forcément. Pour les petits et moyens volumes, nous chargeons directement nos camions, sans emprise sur la voie publique. Pour les très gros volumes, nous pouvons vous proposer une benne adaptée via notre service de location de bennes.` },
      { q: (c) => `En combien de temps intervenez-vous à ${c} ?`, a: (c) => `Nous intervenons généralement sous 24 à 72h à ${c} après validation du devis. Une fin de chantier standard se traite en une demi-journée à une journée selon le volume et l'accès.` },
      { q: () => `Fournissez-vous un justificatif de traitement des déchets ?`, a: () => `Oui, les déchets sont déposés en déchetterie professionnelle ou en centre de tri agréé. Un justificatif de dépôt peut vous être remis, utile notamment pour les professionnels du bâtiment et les maîtres d'ouvrage.` },
      { q: () => `Intervenez-vous pour les artisans et entreprises du BTP ?`, a: () => `Oui, nous travaillons aussi bien pour les particuliers que pour les artisans, entreprises du bâtiment, promoteurs et agences immobilières. Nous pouvons intervenir ponctuellement ou de façon régulière sur vos chantiers.` },
      { q: () => `Le nettoyage du chantier est-il inclus ?`, a: () => `Un balayage et un dépoussiérage de base sont inclus après l'évacuation. Un nettoyage complet de fin de chantier (vitres, sols, traces de peinture et de plâtre) est proposé en option sur devis.` },
    ],
    knowsAbout: ["Débarras fin de chantier", "Évacuation gravats", "Enlèvement ferraille", "Déchets de chantier", "Débarras chantier rénovation", "Nettoyage fin de chantier"],
    schemaName: (city) => `DÉBARRAS PROXIMITÉ – Débarras Fin de Chantier ${city}`,
    schemaDescription: (city, cp) => `Débarras fin de chantier à ${city} (${cp}). Évacuation gravats, ferraille, déchets de travaux. Tri et recyclage. Devis gratuit.`,
    schemaKeywords: (city, cp) => `débarras fin de chantier ${city}, évacuation gravats ${city}, enlèvement ferraille ${city}, déchets de chantier ${cp}, débarras chantier ${city}`,
    schemaSlogan: "Votre chantier débarrassé et propre, prêt pour la réception",
    schemaOffers: [
      { name: "Évacuation gravats", desc: (city) => `Enlèvement et évacuation de gravats (béton, briques, carrelage, plâtre) à ${city}.`, price: "150", unit: "intervention" },
      { name: "Enlèvement ferraille", desc: (city) => `Enlèvement et valorisation de ferraille et métaux à ${city}.` },
      { name: "Débarras fin de chantier complet", desc: (city) => `Évacuation complète des déchets de travaux et nettoyage de base à ${city}.`, price: "400", unit: "intervention" },
      { name: "Déchets de rénovation", desc: (city) => `Évacuation des déchets de rénovation (bois, menuiseries, sanitaires, emballages) à ${city}.`, price: "200", unit: "intervention" },
      { name: "Nettoyage fin de chantier", desc: (city) => `Nettoyage complet du chantier après évacuation des déchets à ${city}.`, price: "200", unit: "intervention" },
      { name: "Débarras chantier urgence", desc: (city) => `Débarras de chantier en urgence sous 24h à ${city} avant réception des travaux.` },
    ],
    tarifCards: [
      { label: "Petit volume de gravats", price: "À partir de 150 €", svgPaths: trashPath },
      { label: "Ferraille & métaux", price: "Gratuit ou déduit", svgPaths: recyclePath },
      { label: "Déchets de rénovation", price: "À partir de 200 €", svgPaths: boxPath },
      { label: "Fin de chantier complète", price: "À partir de 400 €", svgPaths: buildingPath },
      { label: "Nettoyage fin de chantier", price: "À partir de 200 €", svgPaths: checkPath },
      { label: "Urgence 24h", price: "Sur devis", svgPaths: truckPath },
    ],
    tarifTitle: (city) => `Nos tarifs pour le débarras fin de chantier à ${city}`,
    tarifSubtitle: "Tarifs indicatifs selon volume et nature des déchets — devis gratuit",
    serviceCards: [
      { title: "Évacuation de gravats", desc: (c) => `Enlèvement des gravats à ${c} : béton, briques, parpaings, tuiles, carrelage, faïence et plâtre. Chargement manuel ou en big bags, transport vers une filière de recyclage des inertes.`, image: "/images/image-evacuation-de-gravats.jpeg", svgPaths: checkPath },
      { title: "Enlèvement de ferraille", desc: (c) => `Récupération de la ferraille et des métaux à ${c} : radiateurs, tuyauterie, câbles, structures métalliques, cuivre et aluminium. Valorisation en filière de recyclage, déduite de votre devis.`, image: "/images/image-enlevement-de-ferraille.jpeg", svgPaths: checkPath },
      { title: "Déchets de rénovation", desc: (c) => `Évacuation des déchets de rénovation à ${c} : bois, menuiseries déposées, sanitaires, cuisines démontées, moquettes, emballages et tout-venant de chantier.`, image: "/images/image-dechets-de-renovation.jpeg", svgPaths: checkPath },
      { title: "Fin de chantier complète", desc: (c) => `Débarras complet en fin de travaux à ${c} : tous les déchets et encombrants du chantier sont évacués en une intervention pour une réception de chantier sereine.`, image: "/images/image-fin-de-chantier-complete.jpeg", svgPaths: checkPath },
      { title: "Nettoyage fin de chantier", desc: (c) => `Après l'évacuation, nettoyage du chantier à ${c} : dépoussiérage, sols, traces de plâtre et de peinture. Le logement est prêt à être habité ou livré.`, image: "/images/image-nettoyage-fin-de-chantier.jpeg", svgPaths: checkPath },
      { title: "Débarras après démolition", desc: (c) => `Après une démolition intérieure ou partielle à ${c} (cloisons, cuisine, salle de bain, faux plafonds), nous évacuons tous les déchets : gravats, plâtre, bois, ferraille et sanitaires. Tri en filières agréées et site rendu propre.`, image: "/images/image-debarras-apres-demolition.jpeg", svgPaths: checkPath },
    ],
    seoBlocks: [
      {
        title: (c) => `Débarras fin de chantier à ${c} — Gravats, ferraille et déchets de travaux`,
        text: (c) => `À la fin de travaux de rénovation, de démolition intérieure ou d'extension, les déchets s'accumulent vite : gravats, ferraille, plâtre, bois, emballages. À ${c}, notre équipe intervient rapidement pour évacuer l'ensemble de ces déchets de chantier, sans que vous ayez à faire d'allers-retours en déchetterie.\n\nNous chargeons, trions et transportons chaque type de déchet vers la filière adaptée : les gravats inertes sont recyclés en granulats, la ferraille et les métaux sont valorisés, le bois et le tout-venant sont traités en centre agréé. Vous êtes libéré de toute la logistique.`,
        image: "/images/debarras-fin-de-chantier.jpg",
        imageAlt: (c) => `Évacuation de gravats et de ferraille en fin de chantier à ${c} par l'équipe Débarras Proximité`,
      },
      {
        title: (c) => `Un chantier propre et prêt pour la réception à ${c}`,
        text: (c) => `Un chantier débarrassé, c'est une réception des travaux plus sereine et un logement prêt à être habité, loué ou vendu. Après l'évacuation des déchets à ${c}, nous réalisons un nettoyage de base et proposons en option un nettoyage complet de fin de chantier.\n\nParticuliers, artisans ou entreprises du BTP : nous adaptons notre intervention à votre chantier et vous remettons sur demande un justificatif de dépôt des déchets en filière agréée.`,
        image: "/images/image-chantier-propre.jpeg",
        imageAlt: (c) => `Chantier nettoyé et débarrassé à ${c} après évacuation des déchets`,
      },
    ],
    quoteFormTitle: "Débarras fin de chantier : Obtenez votre devis gratuit !",
    quoteFormSubtitle: "Gravats, ferraille, déchets de rénovation — particuliers et professionnels",
  },

  // ── 6. Débarras de garage ─────────────────────────────────────────────────
  {
    slug: "debarras-garage",
    label: "Débarras de garage",
    heroImage: "/images/debarras-garage.jpg",
    aboutImage: "/images//debarras-garage.jpg",
    title: (city, cp) => `Débarras de garage ${city} (${cp}) | Débarras Proximité`,
    metaDescription: (city, dept) => `Débarras de garage à ${city} ${dept} : outillage, pneus et encombrants évacués, tri et recyclage, nettoyage final. Devis gratuit le jour même.`,
    h1: (city) => `Débarras de garage à ${city} – Vidage complet et rapide`,
    heroCardBadge: "Devis et déplacement gratuits",
    heroCardTitle: "Débarras garage express",
    heroCardSub: "Outils, pneus, cartons, électroménager...",
    heroUrgence: "Garage à vendre ou à louer ? On le vide rapidement !",
    heroIntro: (city) => `Votre garage à ${city} est envahi d'outils inutilisés, de vieux pneus, de cartons et d'objets accumulés ? Notre équipe spécialisée prend en charge le vidage complet de votre garage en une journée.`,
    heroSpecialiste: (city) => `Spécialiste du débarras de garage à ${city}`,
    checkpoints: [
      "Vidage complet du garage",
      "Outils, pneus et cartons",
      "Tri sélectif et recyclage",
      "Nettoyage final inclus",
    ],
    messagePlaceholder: "Décrivez le garage (surface, type de contenu, présence d'huiles ou produits chimiques, date souhaitée...)",
    aboutTitle: (city) => `Débarras de garage professionnel à ${city}`,
    aboutParagraph: (city) => `Notre équipe de débarras intervient à ${city} pour vider complètement votre garage ou box de stationnement : outillage, vieux pneus, huiles de vidange, cartons, électroménager hors d'usage, vélos, mobilier stocké, gravats légers. Nous réalisons un tri rigoureux de chaque catégorie d'objets et orientons chacun vers la bonne filière : recyclage des métaux, traitement des huiles usagées, revalorisation des outils en bon état. Votre garage est rendu vide, balayé et propre, prêt à être réutilisé ou vendu.`,
    ctaTitle: (city) => `Garage à débarrasser à ${city} ?`,
    ctaText: (city) => `Notre équipe se déplace à ${city} pour le débarras complet de votre garage. Devis gratuit, intervention en une journée, tri et recyclage inclus.`,
    faqSectionTitle: "Tout savoir sur le débarras de garage",
    faqItems: [
      { q: (c) => `Combien coûte le débarras d'un garage à ${c} ?`, a: (c) => `Le tarif d'un débarras de garage à ${c} varie selon le volume et le type de contenu. Comptez entre 150 € et 500 € pour un garage individuel standard. Les garages avec beaucoup de ferraille ou d'outillage récupérable peuvent bénéficier d'un rachat qui réduit la facture. Devis gratuit.` },
      { q: (c) => `Pouvez-vous enlever des pneus usagés à ${c} ?`, a: (c) => `Oui, nous enlevons les pneus usagés et les évacuons vers les filières de recyclage agréées (collecteurs certifiés). Cette prestation est souvent payante car le recyclage des pneus implique une redevance de traitement.` },
      { q: () => `Gérez-vous les huiles usagées et les produits chimiques de garage ?`, a: () => `Oui, nous prenons en charge les huiles de vidange, liquides de frein et autres fluides automobiles. Ces déchets dangereux sont confiés à des collecteurs agréés. Signalez-nous leur présence lors du devis.` },
      { q: (c) => `En combien de temps peut-on vider un garage à ${c} ?`, a: () => `Pour un garage individuel standard (25–50 m²), le débarras se réalise en une demi-journée à une journée. Pour un grand garage ou un atelier chargé, prévoir 1 à 2 journées.` },
      { q: (c) => `Rachetez-vous les outils et le matériel de garage à ${c} ?`, a: (c) => `Oui, si votre garage contient des outils en bon état (outillage électroportatif, établi, compresseur, pompe à huile), notre expert réalise une estimation gratuite lors du devis et peut vous proposer un rachat immédiat à ${c}.` },
      { q: () => `Pouvez-vous débarrasser un garage rempli de gravats légers ?`, a: () => `Oui, nous enlevons les gravats légers (plâtre, carrelage, parpaing en petite quantité). Pour des volumes importants, nous recommandons une benne à déchets adaptée ou notre service de location de bennes.` },
      { q: (c) => `Débarrassez-vous aussi les boxes de parking de copropriété à ${c} ?`, a: (c) => `Oui, nous intervenons dans les boxes de parking en sous-sol de copropriété à ${c}. Nous respectons les règles de l'immeuble et protégeons les parties communes lors de l'évacuation.` },
      { q: () => `Le débarras de garage inclut-il le nettoyage ?`, a: () => `Oui, après l'évacuation complète, nous réalisons un balayage et un nettoyage de base du sol du garage. Un nettoyage haute pression du sol peut être ajouté en option selon l'état du revêtement.` },
    ],
    knowsAbout: ["Débarras garage", "Vidage garage", "Enlèvement outils", "Évacuation pneus", "Débarras box parking", "Nettoyage garage"],
    schemaName: (city) => `DÉBARRAS PROXIMITÉ – Débarras Garage ${city}`,
    schemaDescription: (city, cp) => `Débarras de garage à ${city} (${cp}). Vidage complet, outils, pneus, déchets automobiles. Tri sélectif. Devis gratuit.`,
    schemaKeywords: (city, cp) => `débarras garage ${city}, vidage garage ${city}, vider garage ${cp}, enlèvement pneus ${city}, débarras atelier ${city}`,
    schemaSlogan: "Votre garage vidé et nettoyé en une journée",
    schemaOffers: [
      { name: "Débarras garage standard", desc: (city) => `Vidage complet d'un garage individuel à ${city}. Tri et recyclage inclus.`, price: "199", unit: "intervention" },
      { name: "Débarras garage / atelier chargé", desc: (city) => `Vidage complet d'un grand garage ou atelier à ${city}. Prix selon volume.`, price: "400", unit: "intervention" },
      { name: "Enlèvement pneus", desc: (city) => `Évacuation et recyclage de pneus usagés à ${city} vers collecteurs agréés.`, price: "10", unit: "pneu" },
      { name: "Collecte huiles usagées", desc: (city) => `Collecte et traitement des huiles de vidange et liquides automobiles à ${city}.`, price: "50", unit: "intervention" },
      { name: "Nettoyage sol garage", desc: (city) => `Nettoyage haute pression du sol du garage après débarras à ${city}.`, price: "80", unit: "intervention" },
      { name: "Estimation & rachat outillage", desc: (city, url) => `Estimation gratuite et rachat des outils et matériels en bon état à ${city}.` },
    ],
    tarifCards: [
      { label: "Garage standard", price: "À partir de 199 €", svgPaths: garagePath },
      { label: "Grand garage / atelier", price: "À partir de 400 €", svgPaths: homePath },
      { label: "Pneus usagés", price: "À partir de 10 €/pneu", svgPaths: recyclePath },
      { label: "Huiles usagées", price: "À partir de 50 €", svgPaths: boxPath },
      { label: "Nettoyage sol", price: "À partir de 80 €", svgPaths: checkPath },
      { label: "Rachat outillage", price: "Gratuit", svgPaths: euroPath },
    ],
    tarifTitle: (city) => `Nos tarifs pour le débarras de garage à ${city}`,
    tarifSubtitle: "Tarifs indicatifs — devis gratuit, rachat possible",
    serviceCards: [
      { title: "Vidage complet garage", desc: (c) => `Évacuation de tout le contenu de votre garage à ${c} : outillage, cartons, vélos, meubles stockés, électroménager. Tri sélectif et recyclage inclus.`, image: "/images/debarras-garage.jpg", svgPaths: garagePath },
      { title: "Pneus & déchets auto", desc: (c) => `Collecte et évacuation des pneus usagés, huiles de vidange, liquides de frein et batteries à ${c}. Filières agréées uniquement.`, image: "/images/Pneus_dechets_auto.jpg", svgPaths: recyclePath },
      { title: "Outillage & ferraille", desc: (c) => `Estimation et rachat des outils et matériels en bon état à ${c}. La ferraille est recyclée, les outils de qualité revendus ou rachetés.`, image: "/images/Outillage-ferraille.jpg", svgPaths: boxPath },
      { title: "Nettoyage final", desc: (c) => `Après le débarras complet de votre garage à ${c}, balayage et nettoyage de base. Option nettoyage haute pression du sol disponible.`, image: "/images/Nettoyage-final-apres-debarras.jpg", svgPaths: checkPath },
      { title: "Débarras box & parking souterrain", desc: (c) => `Vidage de box de parking, emplacement souterrain ou local à vélos à ${c}. Accès bas de plafond ou en sous-sol : notre équipe s'adapte pour évacuer les objets volumineux.`, image: "/images/debarras-cave.jpg", svgPaths: archivePath },
      { title: "Désinfection & dépoussiérage", desc: (c) => `Après le vidage du garage à ${c}, désinfection complète et dépoussiérage des murs et sols. Élimination des traces d'huile, de rouille et de moisissures pour un garage propre et sain.`, image: "/images/Desinfection-traitement-nuisibles.jpg", svgPaths: shieldPath },
    ],
    seoBlocks: [
      {
        title: (c) => `Débarras de garage à ${c} — Vidage complet en une journée`,
        text: (c) => `Votre garage à ${c} s'est transformé au fil des années en un espace de stockage saturé : outils inutilisés, vieux pneus de rechange, cartons de déménagement jamais ouverts, électroménager en panne, vélos rouillés... Notre équipe intervient pour vider et trier intégralement votre garage en une seule journée.\n\nNous nous chargeons de tout : démontage des étagères si nécessaire, évacuation des objets lourds et volumineux, collecte séparée des déchets dangereux (huiles, produits chimiques). À la fin de l'intervention à ${c}, votre garage est vide, balayé et prêt à être utilisé pour ce pour quoi il a été conçu.`,
        image: "/images/debarras-garage.jpg",
        imageAlt: (c) => `Débarras de garage encombré à ${c} par l'équipe Débarras Proximité`,
      },
      {
        title: (c) => `Recyclage et rachat — Valoriser le contenu de votre garage à ${c}`,
        text: (c) => `Un garage n'est pas uniquement rempli de déchets. Lors du débarras à ${c}, notre expert identifie les objets ayant une valeur marchande : outillage électroportatif, établi, compresseur, vélos de valeur, pièces automobiles. Ces objets vous sont rachetés ou estimés, ce qui peut significativement réduire le coût final du débarras.\n\nLes pneus usagés sont envoyés chez des collecteurs agréés, les huiles et liquides automobiles chez des éco-organismes, les métaux dans des filières de recyclage certifiées. Vous recevez les bordereaux de traitement correspondants, garantissant une intervention 100 % conforme à la réglementation environnementale.`,
        image: "/images/Rachat_Immediat_Antiquites.jpg",
        imageAlt: (c) => `Tri et recyclage lors d'un débarras garage à ${c} par Débarras Proximité`,
      },
    ],
    quoteFormTitle: "Débarras garage : Obtenez votre devis gratuit !",
    quoteFormSubtitle: "Garage individuel, atelier, box parking — on vide tout",
  },
]

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getSousServiceBySlug(slug: string): SousServiceConfig | undefined {
  return SOUS_SERVICES_DEBARRAS.find((s) => s.slug === slug)
}

// ─── Resolved (serializable) config ──────────────────────────────────────────

export interface ResolvedSousServiceConfig {
  slug: string
  label: string
  heroImage: string
  aboutImage: string
  title: string
  metaDescription: string
  h1: string
  heroCardBadge: string
  heroCardTitle: string
  heroCardSub: string
  heroUrgence: string
  heroIntro: string
  heroSpecialiste: string
  checkpoints: string[]
  messagePlaceholder: string
  aboutTitle: string
  aboutParagraph: string
  ctaTitle: string
  ctaText: string
  faqSectionTitle: string
  faqItems: { q: string; a: string }[]
  knowsAbout: string[]
  schemaName: string
  schemaDescription: string
  schemaKeywords: string
  schemaSlogan: string
  schemaOffers: { name: string; desc: string; price?: string; unit?: string }[]
  tarifCards: TarifCard[]
  tarifTitle: string
  tarifSubtitle: string
  serviceCards: { title: string; desc: string; image: string; svgPaths: string[] }[]
  seoBlocks: [
    { title: string; text: string; image: string; imageAlt: string },
    { title: string; text: string; image: string; imageAlt: string },
  ]
  quoteFormTitle: string
  quoteFormSubtitle: string
}

export function resolveSousServiceConfig(
  config: SousServiceConfig,
  city: string,
  cp: string,
  deptName: string,
  pageUrl: string,
): ResolvedSousServiceConfig {
  return {
    slug: config.slug,
    label: config.label,
    heroImage: config.heroImage,
    aboutImage: config.aboutImage,
    title: config.title(city, cp),
    metaDescription: config.metaDescription(city, deptName),
    h1: config.h1(city),
    heroCardBadge: config.heroCardBadge,
    heroCardTitle: config.heroCardTitle,
    heroCardSub: config.heroCardSub,
    heroUrgence: config.heroUrgence,
    heroIntro: config.heroIntro(city),
    heroSpecialiste: config.heroSpecialiste(city),
    checkpoints: config.checkpoints,
    messagePlaceholder: config.messagePlaceholder,
    aboutTitle: config.aboutTitle(city),
    aboutParagraph: config.aboutParagraph(city),
    ctaTitle: config.ctaTitle(city),
    ctaText: config.ctaText(city),
    faqSectionTitle: config.faqSectionTitle,
    faqItems: config.faqItems.map((f) => ({ q: f.q(city), a: f.a(city) })),
    knowsAbout: config.knowsAbout,
    schemaName: config.schemaName(city),
    schemaDescription: config.schemaDescription(city, cp),
    schemaKeywords: config.schemaKeywords(city, cp),
    schemaSlogan: config.schemaSlogan,
    schemaOffers: config.schemaOffers.map((o) => ({
      name: o.name,
      desc: o.desc(city, pageUrl),
      price: o.price,
      unit: o.unit,
    })),
    tarifCards: config.tarifCards,
    tarifTitle: config.tarifTitle(city),
    tarifSubtitle: config.tarifSubtitle,
    serviceCards: config.serviceCards.map((c) => ({
      title: c.title,
      desc: c.desc(city),
      image: c.image,
      svgPaths: c.svgPaths,
    })),
    seoBlocks: [
      {
        title: config.seoBlocks[0].title(city),
        text: config.seoBlocks[0].text(city),
        image: config.seoBlocks[0].image,
        imageAlt: config.seoBlocks[0].imageAlt(city),
      },
      {
        title: config.seoBlocks[1].title(city),
        text: config.seoBlocks[1].text(city),
        image: config.seoBlocks[1].image,
        imageAlt: config.seoBlocks[1].imageAlt(city),
      },
    ],
    quoteFormTitle: config.quoteFormTitle,
    quoteFormSubtitle: config.quoteFormSubtitle,
  }
}


// ─── Version nationale (sans ville ni département) ───────────────────────────
// Les textes sont écrits pour une ville (« … à Bordeaux »). Pour les pages /nos-services/[slug],
// on les résout avec des marqueurs puis on retire proprement la mention de lieu.

const CITY = "§VILLE§"
const CP = "§CP§"
const DEPT = "§DEPT§"

function withoutPlace(text: string): string {
  return text
    .replace(new RegExp(`à ${CITY} et dans toute la région`, "g"), "partout en France")
    .replace(new RegExp(`à ${CITY} et ses environs`, "g"), "partout en France")
    .replace(new RegExp(`à ${CITY} et dans les communes[^.]*`, "g"), "partout en France")
    // « À Bordeaux, notre équipe… » → « Notre équipe… »
    .replace(new RegExp(`(^|[.!?]\\s+)À ${CITY}, (\\p{L})`, "gu"), (_m, start: string, letter: string) => start + letter.toUpperCase())
    .replace(new RegExp(`\\s*\\(${CP}\\)`, "g"), "")
    .replace(new RegExp(`\\s+(à|de|sur|dans|près de) ${CITY}`, "g"), "")
    .replace(new RegExp(`\\s*(${CITY}|${CP}|${DEPT})`, "g"), "")
    .replace(/\s+([,.])/g, "$1")
    .replace(/\s{2,}/g, " ")
    .trim()
}

function stripPlaces<T>(value: T): T {
  if (typeof value === "string") return withoutPlace(value) as T
  if (Array.isArray(value)) return value.map(stripPlaces) as T
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, stripPlaces(v)])) as T
  }
  return value
}

export function resolveSousServiceNational(config: SousServiceConfig, pageUrl: string): ResolvedSousServiceConfig {
  return stripPlaces(resolveSousServiceConfig(config, CITY, CP, DEPT, pageUrl))
}
