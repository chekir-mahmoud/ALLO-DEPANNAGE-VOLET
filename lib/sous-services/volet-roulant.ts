// Prestations volets roulants : contenu des pages /nos-services/… et /[departement]/[ville]/…

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
  // Image de partage (Facebook, WhatsApp) si différente de la photo de fond du haut de page
  ogImage?: string
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
const shieldPath = ["M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"]
const checkPath = ["M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z"]
const buildingPath = ["M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4"]
const boltPath = ["M13 10V3L4 14h7v7l9-11h-7z"]
const clockPath = ["M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"]
const cogPath = ["M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z", "M15 12a3 3 0 11-6 0 3 3 0 016 0z"]
const sunPath = ["M12 3v1m0 16v1m9-9h-1M4 12H3m15.364 6.364l-.707-.707M6.343 6.343l-.707-.707m12.728 0l-.707.707M6.343 17.657l-.707.707M16 12a4 4 0 11-8 0 4 4 0 018 0z"]
const remotePath = ["M12 18h.01M8 21h8a2 2 0 002-2V5a2 2 0 00-2-2H8a2 2 0 00-2 2v14a2 2 0 002 2z"]

// ─── Photos ───────────────────────────────────────────────────────────────────

const IMG = {
  mecanisme: "/images/volet/mecanisme-coffre-volet-roulant.jpg",
  coffre: "/images/volet/reparation-coffre-volet-roulant.jpg",
  tablier: "/images/volet/tablier-lames-volet-roulant.jpg",
  axe: "/images/volet/axe-support-volet-roulant.jpg",
  ressort: "/images/volet/ressort-porte-garage.jpg",
  technicien: "/images/volet/technicien-reparation-volet-roulant.jpg",
  bloque: "/images/volet/depannage-volet-roulant-bloque.jpg",
  installation: "/images/volet/installation-volet-roulant.jpg",
  moteur: "/images/volet/moteur-tubulaire-volet-roulant.jpg",
  rideau: "/images/volet/rideau-metallique-depannage.jpg",
  telecommande: "/images/volet/telecommande-volet-roulant.jpg",
  manivelle: "/images/volet/manivelle-volet-roulant.jpg",
  moteurSomfy: "/images/volet/moteur-somfy-volet-roulant.jpg",
  tablierEnroule: "/images/volet/tablier-enroule-volet-roulant.jpg",
  sangle: "/images/volet/sangle-enrouleur-volet-roulant.jpg",
  poseTablier: "/images/volet/pose-tablier-volet-roulant.jpg",
  maisonVolets: "/images/volet/maison-volets-roulants-baie.jpg",
  technicienCoffre: "/images/volet/technicien-coffre-volet-roulant.jpg",
  solaire: "/images/volet/volet-roulant-solaire.jpg",
  fenetreToit: "/images/volet/volet-roulant-fenetre-de-toit.jpg",
  moteurCoffre: "/images/volet/moteur-installe-coffre-volet-roulant.jpg",
  moteursSomfy: "/images/volet/moteurs-somfy-oximo-ipso.jpg",
  interrupteur: "/images/volet/interrupteur-volets-roulants-salon.jpg",
  finsDeCourse: "/images/volet/fins-de-course-moteur-volet-roulant.jpg",
  axeRideau: "/images/volet/axe-rideau-metallique.jpg",
  moteurRideau: "/images/volet/technicien-moteur-rideau-metallique.jpg",
  store: "/images/volet/reparation-store-banne.jpg",
  storeInstallation: "/images/volet/installation-store-banne.jpg",
  storeTerrasse: "/images/volet/store-banne-terrasse.jpg",
  storeTube: "/images/volet/tube-enroulement-store-banne.jpg",
  storeToile: "/images/volet/remplacement-toile-store-banne.jpg",
  storeBras: "/images/volet/reparation-bras-store-banne.jpg",
  storePoseMoteur: "/images/volet/pose-moteur-store-banne.jpg",
  storeMecanismes: "/images/volet/mecanismes-stores.jpg",
  storeCoffre: "/images/volet/store-banne-coffre-terrasse.jpg",
}

// ─── Prestations ──────────────────────────────────────────────────────────────
// Les textes sont écrits pour une ville (« à Bordeaux ») : la version nationale
// (/nos-services/…) retire automatiquement la mention de lieu.

export const SOUS_SERVICES_VOLET: SousServiceConfig[] = [

  // ── 1. Dépannage volet roulant ─────────────────────────────────────────────
  {
    slug: "depannage-volet-roulant",
    label: "Dépannage volet roulant",
    heroImage: IMG.bloque,
    aboutImage: IMG.coffre,
    title: (city, cp) => `Dépannage volet roulant ${city} (${cp}) 7j/7 | Allo Dépannage Volet`,
    metaDescription: (city, dept) => `Dépannage de volet roulant à ${city} ${dept} 7j/7 : volet bloqué, moteur en panne, sangle cassée. Toutes marques, devis gratuit avant intervention.`,
    h1: (city) => `Dépannage de volet roulant à ${city}`,
    heroCardBadge: "Devis gratuit avant intervention",
    heroCardTitle: "Dépannage volet roulant rapide",
    heroCardSub: "Urgence 7j/7, diagnostic, volet bloqué",
    heroUrgence: "Volet bloqué ? Intervention d'urgence 7j/7, même le week-end",
    heroIntro: (city) => `Volet roulant bloqué, moteur qui ne répond plus ou tablier coincé à mi-hauteur à ${city} ? Nos techniciens interviennent en urgence 7j/7 pour diagnostiquer la panne et remettre votre volet en service, sur toutes les marques.`,
    heroSpecialiste: (city) => `Spécialiste du dépannage de volet roulant à ${city}`,
    checkpoints: [
      "Intervention d'urgence 7j/7",
      "Diagnostic précis de la panne",
      "Pièces courantes dans le véhicule",
      "Toutes marques de volets",
    ],
    messagePlaceholder: "Décrivez la panne (volet bloqué ouvert ou fermé, électrique ou manuel, marque, nombre de volets...)",
    aboutTitle: (city) => `Dépanneur de volets roulants à ${city}`,
    aboutParagraph: (city) => `Nos techniciens interviennent à ${city} et ses environs pour tous les dépannages de volets roulants : volet bloqué en position ouverte ou fermée, tablier coincé ou sorti des coulisses, moteur qui ne répond plus, sangle ou manivelle cassée, télécommande hors service. Chaque intervention commence par un diagnostic précis : nous vérifions l'alimentation, la commande, le moteur, l'axe, les attaches et le tablier pour identifier la pièce en cause. Le véhicule d'intervention contient les pièces les plus courantes (sangles, enrouleurs, treuils, attaches, lames, inverseurs), ce qui permet de réparer le plus souvent en une seule visite. Nous intervenons sur toutes les marques, Somfy, Bubendorff, Profalux, Simu, Nice ou Franciaflex, et vous remettons un devis clair avant toute réparation.`,
    ctaTitle: (city) => `Volet roulant bloqué à ${city} ? Appelez-nous`,
    ctaText: (city) => `Nos techniciens interviennent à ${city} 7j/7 pour débloquer et réparer votre volet roulant. Diagnostic clair, devis gratuit avant intervention, pièces et main-d'œuvre garanties.`,
    faqSectionTitle: "Tout savoir sur le dépannage de volet roulant",
    faqItems: [
      { q: (c) => `Combien coûte un dépannage de volet roulant à ${c} ?`, a: () => `Le diagnostic et le déplacement sont proposés dès 69 €, un déblocage dès 89 € et le remplacement d'une sangle ou d'une manivelle dès 79 €. Le prix final dépend de la panne et des pièces à remplacer : il vous est toujours annoncé avant l'intervention.` },
      { q: (c) => `Intervenez-vous le week-end et les jours fériés à ${c} ?`, a: () => `Oui, notre service de dépannage d'urgence fonctionne 7j/7, y compris le week-end et les jours fériés, pour les volets bloqués en position fermée ou ouverte.` },
      { q: () => `Mon volet roulant électrique ne répond plus : que vérifier ?`, a: () => `Contrôlez le disjoncteur du circuit des volets, changez la pile de la télécommande et attendez 15 à 30 minutes si le volet a été manœuvré plusieurs fois de suite : le moteur se coupe parfois pour refroidir. Si le volet reste bloqué, un technicien doit intervenir.` },
      { q: () => `Réparez-vous toutes les marques de volets roulants ?`, a: () => `Oui. Nous intervenons sur toutes les marques de volets et de moteurs : Somfy, Bubendorff, Profalux, Simu, Nice, Franciaflex et la plupart des autres fabricants.` },
      { q: () => `Le dépannage peut-il être fait en une seule visite ?`, a: () => `Dans la majorité des cas, oui. Nos véhicules transportent les pièces les plus courantes. Si une pièce spécifique doit être commandée, le technicien met le volet en sécurité et revient pour la réparation définitive.` },
      { q: () => `Les réparations sont-elles garanties ?`, a: () => `Oui, les pièces remplacées et la main-d'œuvre sont garanties. La durée de garantie figure sur le devis et sur la facture.` },
    ],
    knowsAbout: ["Dépannage volet roulant", "Volet roulant bloqué", "Réparation volet roulant électrique", "Dépannage moteur volet roulant", "Dépannage volet roulant urgence", "Déblocage volet roulant"],
    schemaName: (city) => `ALLO DÉPANNAGE VOLET – Dépannage ${city}`,
    schemaDescription: (city, cp) => `Dépannage de volet roulant à ${city} (${cp}) 7j/7 : volet bloqué, moteur en panne, sangle cassée, lames abîmées. Toutes marques, devis gratuit.`,
    schemaKeywords: (city, cp) => `dépannage volet roulant ${city}, volet roulant bloqué ${city}, réparation volet roulant ${cp}, dépannage volet électrique ${city}`,
    schemaSlogan: "Votre volet roulant remis en service 7j/7",
    schemaOffers: [
      { name: "Diagnostic et déplacement", desc: (city) => `Diagnostic complet d'un volet roulant en panne à ${city}.`, price: "69", unit: "intervention" },
      { name: "Déblocage de volet roulant", desc: (city) => `Déblocage d'un volet roulant coincé en position ouverte, fermée ou à mi-hauteur à ${city}.`, price: "89", unit: "intervention" },
      { name: "Remplacement de sangle ou manivelle", desc: (city) => `Remplacement de sangle, d'enrouleur ou de manivelle de volet roulant à ${city}.`, price: "79", unit: "intervention" },
      { name: "Remplacement de lames", desc: (city) => `Remplacement de lames de volet roulant cassées ou déformées à ${city}.`, price: "119", unit: "intervention" },
      { name: "Remplacement de moteur", desc: (city) => `Remplacement de moteur de volet roulant filaire ou radio à ${city}.`, price: "290", unit: "intervention" },
      { name: "Dépannage d'urgence 7j/7", desc: (city) => `Intervention d'urgence 7j/7 pour volet roulant bloqué à ${city}.` },
    ],
    tarifCards: [
      { label: "Diagnostic et déplacement", price: "À partir de 69 €", svgPaths: checkPath },
      { label: "Déblocage de volet roulant", price: "À partir de 89 €", svgPaths: cogPath },
      { label: "Sangle ou manivelle", price: "À partir de 79 €", svgPaths: homePath },
      { label: "Remplacement de lames", price: "À partir de 119 €", svgPaths: buildingPath },
      { label: "Remplacement de moteur", price: "À partir de 290 €", svgPaths: boltPath },
      { label: "Télécommande ou inverseur", price: "À partir de 59 €", svgPaths: remotePath },
    ],
    tarifTitle: (city) => `Nos tarifs de dépannage de volet roulant à ${city}`,
    tarifSubtitle: "Tarifs indicatifs TTC : le prix exact vous est annoncé avant toute intervention",
    serviceCards: [
      { title: "Volet bloqué", desc: (c) => `Volet coincé ouvert, fermé ou à mi-hauteur à ${c} : nous identifions la cause du blocage et débloquons le tablier sans abîmer le mécanisme.`, image: IMG.bloque, svgPaths: cogPath },
      { title: "Moteur en panne", desc: () => `Moteur qui ne répond plus, qui bourdonne ou s'arrête en cours de route : diagnostic, réglage des fins de course ou remplacement du moteur.`, image: IMG.moteurSomfy, svgPaths: boltPath },
      { title: "Sangle et manivelle", desc: () => `Sangle effilochée ou cassée, enrouleur qui ne remonte plus, manivelle qui tourne dans le vide : remplacement rapide des pièces usées.`, image: IMG.manivelle, svgPaths: homePath },
      { title: "Lames et tablier", desc: () => `Lames fendues, enfoncées ou sorties des coulisses après un choc ou un coup de vent : remplacement des lames ou du tablier complet.`, image: IMG.tablier, svgPaths: buildingPath },
      { title: "Axe et attaches", desc: () => `Attaches de tablier cassées, axe désolidarisé ou palier usé : nous remettons en état le mécanisme d'enroulement dans le coffre.`, image: IMG.axe, svgPaths: cogPath },
      { title: "Commande et télécommande", desc: () => `Interrupteur, inverseur ou télécommande défectueux : remplacement, programmation et appairage de vos commandes.`, image: IMG.telecommande, svgPaths: remotePath },
    ],
    seoBlocks: [
      {
        title: (c) => `Dépannage de volet roulant à ${c} — Un diagnostic avant toute réparation`,
        text: (c) => `Un volet roulant bloqué n'est pas toujours synonyme de grosse panne. À ${c}, nos techniciens commencent chaque intervention par un diagnostic complet : alimentation électrique, commande, moteur, fins de course, axe, attaches et état du tablier.\n\nCe diagnostic permet de réparer uniquement ce qui doit l'être. Un simple réglage, une attache ou une sangle suffit souvent à remettre le volet en service, sans remplacement coûteux. Le devis vous est remis avant toute réparation : vous connaissez le prix avant de donner votre accord.`,
        image: IMG.mecanisme,
        imageAlt: (c) => `Technicien réalisant le diagnostic d'un volet roulant à ${c}`,
      },
      {
        title: (c) => `Volet roulant bloqué à ${c} — Intervention d'urgence 7j/7`,
        text: (c) => `Un volet bloqué en position fermée plonge une pièce dans le noir, et un volet resté ouvert laisse votre logement sans protection. C'est pourquoi notre service de dépannage à ${c} fonctionne 7j/7, y compris le week-end et les jours fériés.\n\nNos véhicules d'intervention transportent les pièces les plus courantes : sangles, enrouleurs, treuils, attaches, lames, inverseurs et télécommandes. Le plus souvent, votre volet est réparé en une seule visite. Si une pièce spécifique doit être commandée, le technicien met le volet en sécurité en attendant la réparation définitive.`,
        image: IMG.moteur,
        imageAlt: (c) => `Dépannage d'urgence d'un volet roulant bloqué à ${c}`,
      },
    ],
    quoteFormTitle: "Volet roulant bloqué : demandez votre dépannage",
    quoteFormSubtitle: "Intervention d'urgence 7j/7 sur toutes les marques",
  },

  // ── 2. Réparation volet roulant ────────────────────────────────────────────
  {
    slug: "reparation-volet-roulant",
    label: "Réparation volet roulant",
    heroImage: IMG.mecanisme,
    aboutImage: IMG.moteurSomfy,
    title: (city, cp) => `Réparation volet roulant ${city} (${cp}) | Allo Dépannage Volet`,
    metaDescription: (city, dept) => `Réparation de volet roulant à ${city} ${dept} : tablier, lames, sangle, manivelle, attaches et mécanisme. Toutes marques, devis gratuit avant intervention.`,
    h1: (city) => `Réparation de volet roulant à ${city}`,
    heroCardBadge: "Devis gratuit avant intervention",
    heroCardTitle: "Réparation volet roulant",
    heroCardSub: "Tablier, lames, sangle, manivelle, mécanisme",
    heroUrgence: "Réparation durable, pièces et main-d'œuvre garanties",
    heroIntro: (city) => `Lames cassées, sangle usée, manivelle qui tourne dans le vide ou tablier qui descend de travers à ${city} ? Nos techniciens réparent votre volet roulant en remplaçant uniquement les pièces nécessaires, avec des pièces adaptées à votre modèle.`,
    heroSpecialiste: (city) => `Spécialiste de la réparation de volet roulant à ${city}`,
    checkpoints: [
      "Remplacement des pièces usées",
      "Lames assorties à l'existant",
      "Volets manuels et électriques",
      "Pièces et main-d'œuvre garanties",
    ],
    messagePlaceholder: "Décrivez le problème (lames cassées, sangle, manivelle, volet de travers, dimensions, marque...)",
    aboutTitle: (city) => `Réparation de volets roulants à ${city}`,
    aboutParagraph: (city) => `Nos techniciens interviennent à ${city} et ses environs pour réparer tous les types de volets roulants : volets à sangle, à manivelle, électriques filaires, radio ou solaires, en PVC ou en aluminium. Nous remplaçons les lames fendues ou enfoncées par des lames de même profil et de même couleur, changeons les sangles, enrouleurs, treuils et manivelles usés, remplaçons les attaches du tablier, la lame finale et les embouts, et remettons en état les coulisses déformées. Lorsque le tablier est trop abîmé ou que le PVC est devenu cassant, nous vous proposons un tablier neuf, éventuellement en lames isolantes. Notre priorité : réparer plutôt que remplacer, pour prolonger la durée de vie de votre volet au meilleur prix.`,
    ctaTitle: (city) => `Un volet roulant à réparer à ${city} ?`,
    ctaText: (city) => `Nos techniciens réparent votre volet roulant à ${city} avec des pièces adaptées à votre modèle. Diagnostic clair, devis gratuit, réparation garantie.`,
    faqSectionTitle: "Tout savoir sur la réparation de volet roulant",
    faqItems: [
      { q: (c) => `Combien coûte la réparation d'un volet roulant à ${c} ?`, a: () => `Le remplacement d'une sangle ou d'une manivelle est proposé dès 79 €, le remplacement de lames dès 119 € et celui du tablier complet dès 249 €. Le prix dépend des pièces, des dimensions et du matériau du volet.` },
      { q: () => `Faut-il remplacer tout le volet quand une lame est cassée ?`, a: () => `Non. Une à trois lames abîmées se remplacent individuellement. Le remplacement du tablier n'est conseillé que si de nombreuses lames sont endommagées ou si le PVC est devenu jaune et cassant.` },
      { q: () => `Trouvez-vous des lames de la même couleur ?`, a: () => `Les couleurs courantes (blanc, gris, beige, ton bois) sont disponibles. Pour une teinte spécifique, nous vérifions la disponibilité avant l'intervention.` },
      { q: () => `Ma sangle a cassé et le volet est fermé : que faire ?`, a: () => `Ne soulevez pas le tablier à la main. Un technicien peut remplacer la sangle et l'enrouleur rapidement et rouvrir le volet sans risque.` },
      { q: () => `Réparez-vous les volets anciens ?`, a: () => `Oui. Pour les modèles anciens dont certaines pièces ne sont plus fabriquées, nous proposons des pièces compatibles ou un tablier neuf adapté au coffre et aux coulisses existants.` },
      { q: () => `Combien de temps dure une réparation ?`, a: () => `La plupart des réparations sont réalisées en une à deux heures sur place, pièces comprises.` },
    ],
    knowsAbout: ["Réparation volet roulant", "Remplacement lames volet roulant", "Remplacement sangle volet roulant", "Réparation manivelle volet roulant", "Remplacement tablier volet roulant", "Réparation volet roulant manuel"],
    schemaName: (city) => `ALLO DÉPANNAGE VOLET – Réparation ${city}`,
    schemaDescription: (city, cp) => `Réparation de volet roulant à ${city} (${cp}) : lames, tablier, sangle, manivelle, attaches et mécanisme. Toutes marques, devis gratuit.`,
    schemaKeywords: (city, cp) => `réparation volet roulant ${city}, remplacement lames volet ${city}, sangle volet roulant ${cp}, manivelle volet roulant ${city}`,
    schemaSlogan: "Réparer plutôt que remplacer",
    schemaOffers: [
      { name: "Remplacement de sangle", desc: (city) => `Remplacement de sangle et d'enrouleur de volet roulant à ${city}.`, price: "79", unit: "intervention" },
      { name: "Remplacement de manivelle ou treuil", desc: (city) => `Remplacement de manivelle, genouillère ou treuil de volet roulant à ${city}.`, price: "79", unit: "intervention" },
      { name: "Remplacement de lames", desc: (city) => `Remplacement de lames de volet roulant PVC ou aluminium à ${city}.`, price: "119", unit: "intervention" },
      { name: "Remplacement du tablier", desc: (city) => `Remplacement complet du tablier de volet roulant à ${city}.`, price: "249", unit: "intervention" },
      { name: "Remplacement des attaches", desc: (city) => `Remplacement des attaches entre le tablier et l'axe d'un volet roulant à ${city}.` },
      { name: "Remise en état des coulisses", desc: (city) => `Redressage, nettoyage ou remplacement des coulisses de volet roulant à ${city}.` },
    ],
    tarifCards: [
      { label: "Diagnostic et déplacement", price: "À partir de 69 €", svgPaths: checkPath },
      { label: "Remplacement de sangle", price: "À partir de 79 €", svgPaths: homePath },
      { label: "Manivelle ou treuil", price: "À partir de 79 €", svgPaths: cogPath },
      { label: "Remplacement de lames", price: "À partir de 119 €", svgPaths: buildingPath },
      { label: "Remplacement du tablier", price: "À partir de 249 €", svgPaths: buildingPath },
      { label: "Attaches et coulisses", price: "Sur devis", svgPaths: shieldPath },
    ],
    tarifTitle: (city) => `Nos tarifs de réparation de volet roulant à ${city}`,
    tarifSubtitle: "Tarifs indicatifs TTC selon les pièces, les dimensions et le matériau du volet",
    serviceCards: [
      { title: "Lames cassées", desc: () => `Lames fendues, enfoncées ou déboîtées : remplacement par des lames de même profil et de même couleur que l'existant.`, image: IMG.tablier, svgPaths: buildingPath },
      { title: "Tablier complet", desc: () => `Tablier trop abîmé ou PVC devenu cassant : pose d'un tablier neuf en PVC ou en aluminium, éventuellement en lames isolantes.`, image: IMG.bloque, svgPaths: buildingPath },
      { title: "Sangle et enrouleur", desc: () => `Sangle effilochée ou cassée, enrouleur qui ne remonte plus : remplacement de la sangle et du ressort d'enrouleur.`, image: IMG.sangle, svgPaths: homePath },
      { title: "Manivelle et treuil", desc: () => `Manivelle qui tourne dans le vide ou devenue dure : remplacement du treuil, de la genouillère ou de la tringle.`, image: IMG.manivelle, svgPaths: cogPath },
      { title: "Attaches et axe", desc: () => `Attaches de tablier cassées ou axe endommagé : remise en état du mécanisme d'enroulement dans le coffre.`, image: IMG.axe, svgPaths: cogPath },
      { title: "Coulisses et lame finale", desc: (c) => `Coulisses déformées ou encrassées, lame finale tordue à ${c} : redressage, nettoyage ou remplacement pour un volet qui glisse sans effort.`, image: IMG.coffre, svgPaths: shieldPath },
    ],
    seoBlocks: [
      {
        title: (c) => `Réparation de volet roulant à ${c} — Remplacer uniquement les pièces usées`,
        text: (c) => `Un volet roulant est composé de nombreuses pièces : tablier et lames, lame finale, attaches, axe d'enroulement, coulisses, sangle et enrouleur ou treuil et manivelle. Lorsqu'une seule pièce s'use, il est rarement nécessaire de remplacer tout le volet.\n\nÀ ${c}, nos techniciens identifient la pièce en cause et la remplacent par une pièce adaptée à votre modèle. Cette approche permet de prolonger la durée de vie de votre volet de nombreuses années, pour un coût bien inférieur à celui d'un remplacement complet.`,
        image: IMG.moteur,
        imageAlt: (c) => `Pièces de volet roulant remplacées lors d'une réparation à ${c}`,
      },
      {
        title: (c) => `Lames et tablier de volet roulant à ${c} — PVC ou aluminium`,
        text: (c) => `Les lames en PVC sont économiques et isolantes, mais elles supportent moins bien les chocs et le soleil intense. Les lames en aluminium, plus résistantes, conviennent aux grandes dimensions et aux façades exposées ; en double paroi avec mousse isolante, elles améliorent aussi le confort thermique et acoustique.\n\nLors de la réparation à ${c}, nous vous conseillons la solution la plus adaptée : remplacement de quelques lames assorties à l'existant, ou tablier neuf lorsque le volet est trop ancien.`,
        image: IMG.tablierEnroule,
        imageAlt: (c) => `Tablier et lames de volet roulant remplacés à ${c}`,
      },
    ],
    quoteFormTitle: "Réparation de volet roulant : votre devis gratuit",
    quoteFormSubtitle: "Lames, tablier, sangle, manivelle — toutes marques",
  },

  // ── 3. Installation volet roulant ──────────────────────────────────────────
  {
    slug: "installation-volet-roulant",
    label: "Installation volet roulant",
    heroImage: IMG.installation,
    aboutImage: IMG.technicienCoffre,
    title: (city, cp) => `Installation volet roulant ${city} (${cp}) | Allo Dépannage Volet`,
    metaDescription: (city, dept) => `Installation de volet roulant à ${city} ${dept} : pose neuve, rénovation et remplacement de volets manuels, électriques ou solaires. Devis gratuit sur mesure.`,
    h1: (city) => `Installation de volet roulant à ${city}`,
    heroCardBadge: "Visite et devis gratuits",
    heroCardTitle: "Pose de volet roulant sur mesure",
    heroCardSub: "Pose neuve, rénovation et modernisation",
    heroUrgence: "Volets sur mesure, posés par nos techniciens",
    heroIntro: (city) => `Vous souhaitez équiper vos fenêtres de volets roulants ou remplacer d'anciens volets à ${city} ? Nos techniciens posent des volets roulants sur mesure, en rénovation ou en construction neuve, manuels, électriques ou solaires.`,
    heroSpecialiste: (city) => `Spécialiste de la pose de volet roulant à ${city}`,
    checkpoints: [
      "Prise de mesures sur place",
      "Volets sur mesure",
      "Rénovation et construction neuve",
      "Manuels, électriques ou solaires",
    ],
    messagePlaceholder: "Décrivez votre projet (nombre de fenêtres, dimensions approximatives, volet électrique ou manuel, pose en rénovation...)",
    aboutTitle: (city) => `Pose de volets roulants à ${city}`,
    aboutParagraph: (city) => `Nos techniciens interviennent à ${city} et ses environs pour l'installation de volets roulants sur mesure. En rénovation, le volet se pose sans gros travaux, avec un coffre extérieur ou sous linteau, sur des fenêtres existantes : c'est la solution idéale pour remplacer des volets battants ou d'anciens volets fatigués. En construction neuve, nous posons des volets avec coffre intégré ou tunnel. Nous vous conseillons sur le matériau des lames (PVC ou aluminium, simple ou double paroi isolante), la couleur, le type de manœuvre (sangle, manivelle, moteur filaire, radio ou solaire) et la centralisation. Chaque volet est fabriqué aux dimensions exactes de vos fenêtres après une prise de mesures sur place.`,
    ctaTitle: (city) => `Un projet de volets roulants à ${city} ?`,
    ctaText: (city) => `Nos techniciens se déplacent à ${city} pour prendre les mesures et vous conseiller. Devis gratuit et détaillé, volets sur mesure posés par nos soins.`,
    faqSectionTitle: "Tout savoir sur l'installation de volet roulant",
    faqItems: [
      { q: (c) => `Combien coûte la pose d'un volet roulant à ${c} ?`, a: () => `La pose d'un volet roulant en rénovation est proposée dès 390 €, fourniture et pose comprises pour une fenêtre standard. Le prix dépend des dimensions, du matériau des lames et du type de manœuvre.` },
      { q: () => `Quelle différence entre pose en rénovation et pose en neuf ?`, a: () => `En rénovation, le volet est posé sur une fenêtre existante, avec un coffre extérieur ou sous linteau, sans travaux de maçonnerie. En neuf, le coffre est intégré à la construction ou à la menuiserie.` },
      { q: () => `Faut-il choisir un volet électrique ou manuel ?`, a: () => `Le volet électrique apporte plus de confort, surtout pour les grandes fenêtres et les baies vitrées. Le volet solaire évite tout raccordement électrique. Le volet manuel reste la solution la plus économique.` },
      { q: () => `PVC ou aluminium : quel matériau choisir ?`, a: () => `Le PVC est économique et isolant, adapté aux fenêtres de taille standard. L'aluminium est plus résistant et convient aux grandes dimensions et aux façades exposées.` },
      { q: () => `Combien de temps dure l'installation ?`, a: () => `Comptez en général une à deux heures par volet en rénovation. Pour une maison complète, l'installation se fait le plus souvent en une journée.` },
      { q: () => `Les volets posés sont-ils garantis ?`, a: () => `Oui. Les volets et les moteurs bénéficient de la garantie du fabricant, et la pose est garantie par nos soins. Les durées figurent sur le devis.` },
    ],
    knowsAbout: ["Installation volet roulant", "Pose volet roulant", "Volet roulant rénovation", "Volet roulant sur mesure", "Remplacement volet roulant", "Volet roulant solaire"],
    schemaName: (city) => `ALLO DÉPANNAGE VOLET – Installation ${city}`,
    schemaDescription: (city, cp) => `Installation de volet roulant à ${city} (${cp}) : pose neuve et rénovation, volets sur mesure manuels, électriques ou solaires. Devis gratuit.`,
    schemaKeywords: (city, cp) => `installation volet roulant ${city}, pose volet roulant ${city}, volet roulant rénovation ${cp}, volet roulant sur mesure ${city}`,
    schemaSlogan: "Des volets roulants sur mesure, posés dans les règles",
    schemaOffers: [
      { name: "Prise de mesures et devis", desc: (city) => `Visite, prise de mesures et conseils pour un projet de volets roulants à ${city}.` },
      { name: "Pose de volet roulant en rénovation", desc: (city) => `Fourniture et pose d'un volet roulant sur mesure en rénovation à ${city}.`, price: "390", unit: "volet" },
      { name: "Pose de volet roulant neuf", desc: (city) => `Pose de volet roulant en construction neuve à ${city}.` },
      { name: "Volet roulant solaire", desc: (city) => `Installation de volet roulant solaire sans raccordement électrique à ${city}.` },
      { name: "Remplacement de volets battants", desc: (city) => `Remplacement de volets battants par des volets roulants à ${city}.` },
      { name: "Centralisation des volets", desc: (city) => `Centralisation et programmation des volets roulants à ${city}.` },
    ],
    tarifCards: [
      { label: "Visite et prise de mesures", price: "Gratuit", svgPaths: checkPath },
      { label: "Pose en rénovation", price: "À partir de 390 €", svgPaths: homePath },
      { label: "Pose en construction neuve", price: "Sur devis", svgPaths: buildingPath },
      { label: "Volet roulant solaire", price: "Sur devis", svgPaths: sunPath },
      { label: "Remplacement de volets battants", price: "Sur devis", svgPaths: homePath },
      { label: "Centralisation", price: "Sur devis", svgPaths: remotePath },
    ],
    tarifTitle: (city) => `Nos tarifs d'installation de volet roulant à ${city}`,
    tarifSubtitle: "Tarifs indicatifs TTC selon les dimensions, le matériau et le type de manœuvre",
    serviceCards: [
      { title: "Pose en rénovation", desc: () => `Coffre extérieur ou sous linteau, pose sur fenêtre existante sans travaux de maçonnerie : la solution idéale pour équiper un logement habité.`, image: IMG.poseTablier, svgPaths: homePath },
      { title: "Construction neuve", desc: () => `Volets avec coffre intégré ou tunnel, posés en coordination avec votre menuisier ou votre constructeur.`, image: IMG.maisonVolets, svgPaths: buildingPath },
      { title: "Remplacement de volets", desc: (c) => `Anciens volets roulants fatigués ou volets battants à ${c} : dépose et remplacement par des volets roulants modernes et isolants.`, image: IMG.bloque, svgPaths: cogPath },
      { title: "Volets électriques", desc: () => `Moteur filaire ou radio, commande murale ou télécommande, programmation et centralisation de tous les volets.`, image: IMG.telecommande, svgPaths: boltPath },
      { title: "Volets solaires", desc: () => `Aucun raccordement électrique : un panneau photovoltaïque recharge la batterie du moteur. Pose rapide et propre.`, image: IMG.solaire, svgPaths: sunPath },
      { title: "Volet de fenêtre de toit", desc: () => `Volets roulants pour fenêtres de toit Velux et autres marques : pose, commande électrique ou solaire, pour occulter les combles et les protéger de la chaleur.`, image: IMG.fenetreToit, svgPaths: homePath },
    ],
    seoBlocks: [
      {
        title: (c) => `Installation de volet roulant à ${c} — Sur mesure, en rénovation ou en neuf`,
        text: (c) => `Chaque fenêtre est différente : c'est pourquoi nos volets roulants sont fabriqués sur mesure, après une prise de mesures sur place. À ${c}, nous posons des volets en rénovation sur des fenêtres existantes, sans gros travaux, ainsi que des volets en construction neuve avec coffre intégré.\n\nNous vous conseillons sur le coffre, les coulisses, le matériau et la couleur des lames, ainsi que sur le type de manœuvre. Le devis détaillé précise chaque élément, pour un projet sans surprise.`,
        image: IMG.axe,
        imageAlt: (c) => `Installation d'un volet roulant sur mesure à ${c}`,
      },
      {
        title: (c) => `Modernisation de vos volets à ${c} — Confort, sécurité et isolation`,
        text: (c) => `Remplacer d'anciens volets par des volets roulants modernes améliore le confort au quotidien, la sécurité du logement et l'isolation des fenêtres. Fermés la nuit en hiver, ils limitent les déperditions de chaleur ; fermés en journée l'été, ils protègent de la chaleur.\n\nÀ ${c}, nous proposons des volets électriques ou solaires, programmables et centralisables, pour piloter tous les volets de la maison en un geste ou depuis votre smartphone.`,
        image: IMG.moteur,
        imageAlt: (c) => `Volet roulant électrique moderne installé à ${c}`,
      },
    ],
    quoteFormTitle: "Installation de volets roulants : votre devis gratuit",
    quoteFormSubtitle: "Pose neuve et rénovation, volets sur mesure",
  },

  // ── 4. Motorisation volet roulant ──────────────────────────────────────────
  {
    slug: "motorisation-volet-roulant",
    label: "Motorisation volet roulant",
    heroImage: IMG.coffre,
    aboutImage: IMG.technicienCoffre,
    title: (city, cp) => `Motorisation volet roulant ${city} (${cp}) | Allo Dépannage Volet`,
    metaDescription: (city, dept) => `Motorisation et remplacement de moteur de volet roulant à ${city} ${dept} : moteur filaire, radio ou solaire, Somfy et toutes marques. Devis gratuit.`,
    h1: (city) => `Motorisation de volet roulant à ${city}`,
    heroCardBadge: "Devis gratuit avant intervention",
    heroCardTitle: "Motorisation volet roulant",
    heroCardSub: "Motorisation, remplacement moteur, domotique",
    heroUrgence: "Moteur en panne ? Remplacement rapide, toutes marques",
    heroIntro: (city) => `Vous souhaitez motoriser vos volets manuels ou remplacer un moteur en panne à ${city} ? Nos techniciens installent des moteurs filaires, radio ou solaires adaptés à vos volets, avec télécommande, centralisation et pilotage à distance.`,
    heroSpecialiste: (city) => `Spécialiste de la motorisation de volet roulant à ${city}`,
    checkpoints: [
      "Motorisation de volets manuels",
      "Remplacement de moteur",
      "Somfy, Simu, Bubendorff, Nice…",
      "Télécommande et domotique",
    ],
    messagePlaceholder: "Décrivez votre besoin (motoriser des volets manuels, moteur en panne, marque, nombre de volets, télécommande...)",
    aboutTitle: (city) => `Motorisation de volets roulants à ${city}`,
    aboutParagraph: (city) => `Nos techniciens interviennent à ${city} et ses environs pour motoriser les volets roulants manuels et remplacer les moteurs en panne. La motorisation consiste à placer un moteur tubulaire dans l'axe d'enroulement, à la place de la sangle ou de la manivelle, sans changer le coffre, les coulisses ni le tablier lorsqu'ils sont en bon état. Nous choisissons un moteur de puissance adaptée au poids du tablier, filaire avec interrupteur mural, radio avec télécommande, ou solaire sans aucun raccordement électrique. Pour un moteur en panne, nous vérifions d'abord l'alimentation, la commande et les fins de course, puis remplaçons le moteur par un modèle de même marque ou compatible : Somfy, Simu, Bubendorff, Nice, Profalux. Nous pouvons aussi centraliser tous vos volets et les rendre pilotables depuis votre smartphone.`,
    ctaTitle: (city) => `Motoriser vos volets à ${city} ?`,
    ctaText: (city) => `Nos techniciens motorisent vos volets roulants ou remplacent votre moteur à ${city}. Conseils personnalisés, devis gratuit, moteurs de marques reconnues.`,
    faqSectionTitle: "Tout savoir sur la motorisation de volet roulant",
    faqItems: [
      { q: (c) => `Combien coûte la motorisation d'un volet roulant à ${c} ?`, a: () => `La motorisation d'un volet manuel est proposée dès 450 €. Le remplacement d'un moteur filaire est proposé dès 290 € et celui d'un moteur radio dès 390 €. Le prix dépend de la taille du volet et du type de moteur.` },
      { q: () => `Peut-on motoriser n'importe quel volet roulant manuel ?`, a: () => `Dans la grande majorité des cas, oui, à condition que le coffre soit accessible et que le tablier soit en bon état. Le technicien le vérifie lors du diagnostic.` },
      { q: () => `Moteur filaire, radio ou solaire : lequel choisir ?`, a: () => `Le moteur filaire est le plus économique si une alimentation est disponible. Le moteur radio évite de créer une saignée pour l'interrupteur et permet la centralisation. Le moteur solaire ne nécessite aucun raccordement électrique.` },
      { q: () => `Peut-on remplacer un moteur Somfy par une autre marque ?`, a: () => `Oui, à condition de choisir un moteur de diamètre et de puissance adaptés à l'axe et au tablier. Nous vérifions la compatibilité avant l'intervention.` },
      { q: () => `Peut-on piloter ses volets depuis un smartphone ?`, a: () => `Oui, avec des moteurs radio et une box domotique compatible. Vous pouvez programmer l'ouverture et la fermeture, et piloter vos volets à distance.` },
      { q: () => `Combien de temps dure la motorisation ?`, a: () => `Comptez une à deux heures par volet. Pour plusieurs volets, l'intervention est généralement réalisée en une journée.` },
    ],
    knowsAbout: ["Motorisation volet roulant", "Remplacement moteur volet roulant", "Moteur Somfy volet roulant", "Moteur tubulaire", "Volet roulant électrique", "Domotique volet roulant"],
    schemaName: (city) => `ALLO DÉPANNAGE VOLET – Motorisation ${city}`,
    schemaDescription: (city, cp) => `Motorisation de volet roulant et remplacement de moteur à ${city} (${cp}) : moteurs filaires, radio et solaires, toutes marques. Devis gratuit.`,
    schemaKeywords: (city, cp) => `motorisation volet roulant ${city}, moteur volet roulant ${city}, remplacement moteur volet ${cp}, moteur Somfy ${city}`,
    schemaSlogan: "Le confort d'un volet électrique, sans changer de volet",
    schemaOffers: [
      { name: "Motorisation d'un volet manuel", desc: (city) => `Motorisation d'un volet roulant à sangle ou à manivelle à ${city}.`, price: "450", unit: "volet" },
      { name: "Remplacement de moteur filaire", desc: (city) => `Remplacement d'un moteur de volet roulant filaire à ${city}.`, price: "290", unit: "volet" },
      { name: "Remplacement de moteur radio", desc: (city) => `Remplacement d'un moteur de volet roulant radio (Somfy et autres marques) à ${city}.`, price: "390", unit: "volet" },
      { name: "Télécommande ou inverseur", desc: (city) => `Remplacement et programmation de télécommande ou d'inverseur de volet roulant à ${city}.`, price: "59", unit: "pièce" },
      { name: "Motorisation solaire", desc: (city) => `Motorisation solaire de volet roulant sans raccordement électrique à ${city}.` },
      { name: "Centralisation et domotique", desc: (city) => `Centralisation et pilotage à distance des volets roulants à ${city}.` },
    ],
    tarifCards: [
      { label: "Motorisation d'un volet manuel", price: "À partir de 450 €", svgPaths: boltPath },
      { label: "Moteur filaire", price: "À partir de 290 €", svgPaths: boltPath },
      { label: "Moteur radio (Somfy…)", price: "À partir de 390 €", svgPaths: remotePath },
      { label: "Télécommande ou inverseur", price: "À partir de 59 €", svgPaths: remotePath },
      { label: "Motorisation solaire", price: "Sur devis", svgPaths: sunPath },
      { label: "Centralisation et domotique", price: "Sur devis", svgPaths: cogPath },
    ],
    tarifTitle: (city) => `Nos tarifs de motorisation de volet roulant à ${city}`,
    tarifSubtitle: "Tarifs indicatifs TTC selon la taille du volet et le type de moteur",
    serviceCards: [
      { title: "Installation et remplacement de moteur", desc: (c) => `Pose d'un moteur neuf ou remplacement d'un moteur hors service à ${c} : moteur de même marque ou compatible, de puissance adaptée au poids du tablier.`, image: IMG.moteursSomfy, svgPaths: boltPath },
      { title: "Dépannage et réparation de moteur", desc: () => `Moteur qui ne répond plus, qui bourdonne ou s'arrête en cours de route : diagnostic de l'alimentation, de la commande et du moteur, puis réparation.`, image: IMG.moteurSomfy, svgPaths: boltPath },
      { title: "Motorisation de volet roulant manuel", desc: () => `Remplacement de la sangle ou de la manivelle par un moteur tubulaire filaire, radio ou solaire, sans changer le coffre ni le tablier.`, image: IMG.moteurCoffre, svgPaths: cogPath },
      { title: "Réglage et programmation du moteur", desc: () => `Volet qui force en butée ou s'arrête trop tôt : réglage des fins de course, programmation des positions et appairage des commandes.`, image: IMG.finsDeCourse, svgPaths: cogPath },
      { title: "Réparation de télécommande et de commande", desc: () => `Télécommande, interrupteur ou inverseur défectueux : remplacement, reprogrammation et appairage avec votre moteur.`, image: IMG.telecommande, svgPaths: remotePath },
      { title: "Motorisation connectée et domotique", desc: () => `Centralisation de tous vos volets, programmation horaire et pilotage depuis votre smartphone ou votre box domotique.`, image: IMG.interrupteur, svgPaths: remotePath },
    ],
    seoBlocks: [
      {
        title: (c) => `Motorisation de volet roulant à ${c} — Le confort sans changer de volet`,
        text: (c) => `Motoriser un volet roulant manuel ne demande pas de remplacer tout le volet. À ${c}, nos techniciens installent un moteur tubulaire dans l'axe d'enroulement, à la place de la sangle ou de la manivelle, et conservent le coffre, les coulisses et le tablier lorsqu'ils sont en bon état.\n\nLa puissance du moteur, exprimée en newton-mètre, est calculée selon la largeur, la hauteur et le matériau du tablier. Un moteur bien dimensionné fonctionne sans forcer et dure plus longtemps.`,
        image: IMG.moteur,
        imageAlt: (c) => `Moteur tubulaire installé pour motoriser un volet roulant à ${c}`,
      },
      {
        title: (c) => `Moteur de volet roulant en panne à ${c} — Diagnostic et remplacement`,
        text: (c) => `Un volet électrique qui ne répond plus n'a pas toujours un moteur en panne : alimentation, commande, protection thermique ou fins de course peuvent être en cause. Nos techniciens vérifient chaque point avant de conclure.\n\nSi le moteur est hors service, nous le remplaçons à ${c} par un modèle de même marque ou compatible, puis nous réglons les fins de course et testons le volet. Nous intervenons sur toutes les marques : Somfy, Simu, Bubendorff, Nice, Profalux.`,
        image: IMG.axe,
        imageAlt: (c) => `Remplacement d'un moteur de volet roulant à ${c}`,
      },
    ],
    quoteFormTitle: "Motorisation de volet roulant : votre devis gratuit",
    quoteFormSubtitle: "Moteur filaire, radio ou solaire — toutes marques",
  },

  // ── 5. Rideau métallique ───────────────────────────────────────────────────
  {
    slug: "rideau-metallique",
    label: "Rideau métallique",
    heroImage: IMG.axeRideau,
    aboutImage: IMG.technicienCoffre,
    title: (city, cp) => `Rideau métallique ${city} (${cp}) : dépannage et pose | Allo Dépannage Volet`,
    metaDescription: (city, dept) => `Dépannage, réparation, motorisation et pose de rideau métallique à ${city} ${dept} pour les commerces. Intervention 7j/7, contrat d'entretien, devis gratuit.`,
    h1: (city) => `Dépannage et réparation de rideaux métalliques à ${city}`,
    heroCardBadge: "Intervention 7j/7 pour les commerces",
    heroCardTitle: "Dépannage rideau métallique",
    heroCardSub: "Pose, dépannage et entretien pour les commerces",
    heroUrgence: "Rideau bloqué ? Intervention avant l'ouverture du magasin",
    heroIntro: (city) => `Rideau métallique bloqué, moteur en panne ou lames endommagées à ${city} ? Nos techniciens interviennent 7j/7 pour dépanner, réparer, motoriser et entretenir les rideaux métalliques des commerces, ateliers et entrepôts.`,
    heroSpecialiste: (city) => `Spécialiste du rideau métallique à ${city}`,
    checkpoints: [
      "Dépannage d'urgence 7j/7",
      "Mise en sécurité du commerce",
      "Lames pleines, micro-perforées, grilles",
      "Contrat d'entretien annuel",
    ],
    messagePlaceholder: "Décrivez la situation (rideau bloqué ouvert ou fermé, manuel ou électrique, dimensions, type de commerce...)",
    aboutTitle: (city) => `Rideaux métalliques pour les commerces à ${city}`,
    aboutParagraph: (city) => `Nos techniciens interviennent à ${city} et ses environs pour les rideaux métalliques des commerces, restaurants, ateliers et entrepôts. En dépannage, nous débloquons les rideaux coincés et mettons le local en sécurité, puis réparons la cause de la panne : moteur ou frein moteur, ressort de compensation, lames tordues, coulisses déformées, serrure grippée ou boîtier de commande. Nous motorisons les rideaux manuels, posons des rideaux neufs à lames pleines, micro-perforées ou à grille, et proposons un contrat d'entretien annuel pour contrôler le moteur, le ressort, les lames et les dispositifs de sécurité. Pour limiter la fermeture de votre commerce, nos interventions sont possibles 7j/7, tôt le matin comme en soirée.`,
    ctaTitle: (city) => `Rideau métallique bloqué à ${city} ?`,
    ctaText: (city) => `Nos techniciens interviennent 7j/7 à ${city} pour dépanner votre rideau métallique et sécuriser votre commerce. Devis gratuit avant intervention.`,
    faqSectionTitle: "Tout savoir sur les rideaux métalliques",
    faqItems: [
      { q: (c) => `Combien coûte un dépannage de rideau métallique à ${c} ?`, a: () => `Le dépannage d'un rideau métallique est proposé dès 149 €. Le remplacement de lames, de moteur ou de ressort fait l'objet d'un devis selon les dimensions du rideau.` },
      { q: () => `Intervenez-vous avant l'ouverture du magasin ?`, a: () => `Oui. Notre service de dépannage fonctionne 7j/7, tôt le matin et en soirée, pour limiter la fermeture de votre commerce.` },
      { q: () => `Mon rideau est bloqué ouvert : que faire ?`, a: () => `N'insistez pas sur la commande et ne forcez pas le tablier. Appelez-nous : le technicien met d'abord le rideau en sécurité pour que vous puissiez fermer votre commerce, puis répare la panne.` },
      { q: () => `Peut-on motoriser un rideau métallique manuel ?`, a: () => `Oui, la plupart des rideaux manuels peuvent être motorisés après vérification du tablier, des coulisses et de l'axe.` },
      { q: () => `Pourquoi souscrire un contrat d'entretien ?`, a: () => `Un rideau métallique est manœuvré au moins deux fois par jour. L'entretien annuel permet de détecter l'usure du moteur, du frein et du ressort avant qu'une panne ne bloque votre commerce.` },
      { q: () => `Quels types de rideaux installez-vous ?`, a: () => `Rideaux à lames pleines, à lames micro-perforées ou à grille, manuels ou motorisés, adaptés aux dimensions de votre vitrine ou de votre porte.` },
    ],
    knowsAbout: ["Dépannage rideau métallique", "Réparation rideau métallique", "Rideau de fer", "Motorisation rideau métallique", "Pose rideau métallique", "Entretien rideau métallique"],
    schemaName: (city) => `ALLO DÉPANNAGE VOLET – Rideau métallique ${city}`,
    schemaDescription: (city, cp) => `Dépannage, réparation, motorisation et pose de rideau métallique à ${city} (${cp}) pour les commerces. Intervention 7j/7, devis gratuit.`,
    schemaKeywords: (city, cp) => `rideau métallique ${city}, dépannage rideau métallique ${city}, rideau de fer ${cp}, réparation rideau métallique ${city}`,
    schemaSlogan: "Votre commerce ouvert et sécurisé 7j/7",
    schemaOffers: [
      { name: "Dépannage de rideau métallique", desc: (city) => `Déblocage et dépannage de rideau métallique pour les commerces à ${city}.`, price: "149", unit: "intervention" },
      { name: "Remplacement de lames", desc: (city) => `Remplacement de lames de rideau métallique endommagées à ${city}.` },
      { name: "Remplacement de moteur", desc: (city) => `Remplacement du moteur ou du frein moteur d'un rideau métallique à ${city}.` },
      { name: "Motorisation de rideau métallique", desc: (city) => `Motorisation d'un rideau métallique manuel à ${city}.` },
      { name: "Pose de rideau métallique", desc: (city) => `Fourniture et pose de rideau métallique sur mesure à ${city}.` },
      { name: "Contrat d'entretien", desc: (city) => `Contrat d'entretien annuel de rideau métallique à ${city}.`, price: "99", unit: "an" },
    ],
    tarifCards: [
      { label: "Dépannage de rideau métallique", price: "À partir de 149 €", svgPaths: clockPath },
      { label: "Remplacement de lames", price: "Sur devis", svgPaths: buildingPath },
      { label: "Moteur ou frein moteur", price: "Sur devis", svgPaths: boltPath },
      { label: "Ressort de compensation", price: "Sur devis", svgPaths: cogPath },
      { label: "Pose de rideau neuf", price: "Sur devis", svgPaths: buildingPath },
      { label: "Contrat d'entretien", price: "À partir de 99 €/an", svgPaths: shieldPath },
    ],
    tarifTitle: (city) => `Nos tarifs pour les rideaux métalliques à ${city}`,
    tarifSubtitle: "Tarifs indicatifs TTC selon les dimensions du rideau et les pièces à remplacer",
    serviceCards: [
      { title: "Dépannage d'urgence", desc: (c) => `Rideau bloqué ouvert, fermé ou à mi-hauteur à ${c} : déblocage et mise en sécurité de votre commerce, 7j/7.`, image: IMG.rideau, svgPaths: clockPath },
      { title: "Moteur et frein", desc: () => `Moteur central ou latéral en panne, frein moteur usé : diagnostic et remplacement par un moteur adapté au poids du tablier.`, image: IMG.moteurRideau, svgPaths: boltPath },
      { title: "Ressort de compensation", desc: () => `Rideau devenu trop lourd ou qui retombe : remplacement et réglage du ressort de compensation en toute sécurité.`, image: IMG.ressort, svgPaths: cogPath },
      { title: "Lames et coulisses", desc: () => `Lames tordues après un choc, coulisses déformées ou rouillées : remplacement des pièces endommagées.`, image: IMG.tablierEnroule, svgPaths: buildingPath },
      { title: "Motorisation", desc: () => `Motorisation d'un rideau manuel avec boîtier à clé ou télécommande pour ouvrir et fermer sans effort.`, image: IMG.telecommande, svgPaths: remotePath },
      { title: "Contrat d'entretien", desc: () => `Visite annuelle : contrôle du moteur, du ressort, des lames, graissage et test des dispositifs de sécurité.`, image: IMG.finsDeCourse, svgPaths: shieldPath },
    ],
    seoBlocks: [
      {
        title: (c) => `Dépannage de rideau métallique à ${c} — Votre commerce sécurisé`,
        text: (c) => `Un rideau métallique bloqué empêche d'ouvrir le magasin le matin ou de le fermer en toute sécurité le soir. À ${c}, nos techniciens interviennent 7j/7 pour débloquer le rideau et identifier la cause de la panne : moteur, frein, ressort, lames, coulisses, serrure ou commande.\n\nSi la pièce nécessaire n'est pas disponible immédiatement, le rideau est mis en sécurité pour que votre commerce puisse être fermé, puis le technicien revient pour la réparation définitive.`,
        image: IMG.moteur,
        imageAlt: (c) => `Pièces de rideau métallique remplacées lors d'un dépannage à ${c}`,
      },
      {
        title: (c) => `Entretien de rideau métallique à ${c} — Anticiper les pannes`,
        text: (c) => `Manœuvré plusieurs fois par jour, un rideau métallique s'use plus vite qu'un volet roulant. Notre contrat d'entretien annuel à ${c} comprend le contrôle du moteur et du frein, la vérification du ressort de compensation, le nettoyage et le graissage des coulisses et de l'axe, le contrôle des lames et des attaches, et le test des dispositifs de sécurité.\n\nCette visite permet de détecter l'usure avant la panne et de planifier les réparations au moment qui convient à votre activité.`,
        image: IMG.axe,
        imageAlt: (c) => `Entretien du mécanisme d'un rideau métallique à ${c}`,
      },
    ],
    quoteFormTitle: "Rideau métallique : demandez votre dépannage",
    quoteFormSubtitle: "Commerces, ateliers, entrepôts — intervention 7j/7",
  },

  // ── 6. Store banne et intérieur ────────────────────────────────────────────
  {
    slug: "store-banne",
    label: "Store banne",
    heroImage: IMG.moteurCoffre,
    ogImage: IMG.storeCoffre,
    aboutImage: IMG.storeCoffre,
    title: (city, cp) => `Dépannage store banne ${city} (${cp}) | Allo Dépannage Volet`,
    metaDescription: (city, dept) => `Dépannage, réparation, motorisation et installation de stores bannes à ${city} ${dept} : toile, bras, moteur, store bloqué. Toutes marques, devis gratuit.`,
    h1: (city) => `Dépannage et installation de stores bannes à ${city}`,
    heroCardBadge: "Devis gratuit avant intervention",
    heroCardTitle: "Dépannage et installation de store banne",
    heroCardSub: "Réparation, toile, moteur et pose sur mesure",
    heroUrgence: "Store bloqué ouvert ? Intervention rapide",
    heroIntro: (city) => `Toile déchirée, bras cassé, moteur en panne ou store bloqué ouvert à ${city} ? Nos techniciens dépannent, réparent, motorisent et installent vos stores bannes et stores de terrasse, toutes marques.`,
    heroSpecialiste: (city) => `Spécialiste du store banne à ${city}`,
    checkpoints: [
      "Dépannage de store bloqué",
      "Remplacement de toile et de bras",
      "Motorisation et capteurs vent",
      "Pose de store sur mesure",
    ],
    messagePlaceholder: "Décrivez votre besoin (store bloqué, toile, bras, moteur, dimensions, marque...)",
    aboutTitle: (city) => `Stores bannes à ${city}`,
    aboutParagraph: (city) => `Nos techniciens interviennent à ${city} et ses environs pour le dépannage, la réparation, la motorisation et l'installation des stores bannes, stores de terrasse et stores coffres. En réparation, nous remplaçons les toiles déchirées ou décolorées, les bras articulés et leurs câbles, les supports, la manivelle ou le treuil, et le moteur des stores électriques. Nous motorisons les stores manuels et installons des automatismes, capteurs vent et soleil, pour protéger la toile et profiter de l'ombre au bon moment. Pour les projets neufs, nous vous conseillons sur le type de store, la toile, l'avancée et la motorisation, puis posons un store sur mesure adapté à votre façade et à votre terrasse.`,
    ctaTitle: (city) => `Un store à installer ou à réparer à ${city} ?`,
    ctaText: (city) => `Nos techniciens interviennent à ${city} pour la pose, la réparation et la motorisation de vos stores. Conseils, devis gratuit et travail soigné.`,
    faqSectionTitle: "Tout savoir sur les stores bannes",
    faqItems: [
      { q: (c) => `Combien coûte la réparation d'un store banne à ${c} ?`, a: () => `La réparation d'un store banne est proposée dès 129 €. Le remplacement de la toile, d'un bras ou du moteur fait l'objet d'un devis selon les dimensions et le modèle du store.` },
      { q: () => `Peut-on changer uniquement la toile d'un store banne ?`, a: () => `Oui. Si l'armature et les bras sont en bon état, seule la toile est remplacée, avec un large choix de coloris et de tissus.` },
      { q: () => `Mon store est bloqué ouvert : que faire ?`, a: () => `N'insistez pas sur la commande, surtout par vent fort. Un technicien peut débloquer le store et le refermer pour protéger la toile et les bras.` },
      { q: () => `Peut-on motoriser un store banne manuel ?`, a: () => `Oui, la plupart des stores bannes manuels peuvent être motorisés, avec télécommande et capteur vent pour refermer le store automatiquement.` },
      { q: () => `Quelle est la durée de vie d'un store banne ?`, a: () => `Un store banne bien entretenu dure en moyenne 15 à 20 ans. La toile se remplace généralement tous les 8 à 12 ans, selon l'exposition au soleil et aux intempéries.` },
      { q: () => `Comment entretenir la toile de mon store ?`, a: () => `Brossez la toile à sec, puis lavez-la à l'eau claire avec une brosse douce. Évitez le nettoyeur haute pression et ne refermez jamais une toile mouillée pendant plusieurs jours.` },
    ],
    knowsAbout: ["Store banne", "Dépannage store banne", "Réparation store banne", "Installation store banne", "Remplacement toile store", "Motorisation store banne"],
    schemaName: (city) => `ALLO DÉPANNAGE VOLET – Store banne ${city}`,
    schemaDescription: (city, cp) => `Dépannage, réparation, motorisation et installation de stores bannes à ${city} (${cp}). Devis gratuit.`,
    schemaKeywords: (city, cp) => `store banne ${city}, réparation store banne ${city}, toile store banne ${cp}, motorisation store ${city}`,
    schemaSlogan: "Profitez de l'ombre, sans souci",
    schemaOffers: [
      { name: "Réparation de store banne", desc: (city) => `Réparation de store banne : bras, supports, mécanisme à ${city}.`, price: "129", unit: "intervention" },
      { name: "Remplacement de toile", desc: (city) => `Remplacement de toile de store banne sur mesure à ${city}.` },
      { name: "Remplacement de moteur", desc: (city) => `Remplacement du moteur d'un store banne électrique à ${city}.` },
      { name: "Motorisation de store", desc: (city) => `Motorisation d'un store banne manuel avec capteur vent à ${city}.` },
      { name: "Pose de store banne", desc: (city) => `Fourniture et pose de store banne sur mesure à ${city}.` },
      { name: "Dépannage de store banne", desc: (city) => `Dépannage de store banne bloqué ou électrique en panne à ${city}.` },
    ],
    tarifCards: [
      { label: "Réparation de store banne", price: "À partir de 129 €", svgPaths: cogPath },
      { label: "Remplacement de toile", price: "Sur devis", svgPaths: sunPath },
      { label: "Bras articulés", price: "Sur devis", svgPaths: cogPath },
      { label: "Moteur de store", price: "Sur devis", svgPaths: boltPath },
      { label: "Pose de store banne", price: "Sur devis", svgPaths: homePath },
      { label: "Contrat d'entretien", price: "À partir de 99 €/an", svgPaths: shieldPath },
    ],
    tarifTitle: (city) => `Nos tarifs pour les stores à ${city}`,
    tarifSubtitle: "Tarifs indicatifs TTC selon le modèle, les dimensions et les pièces à remplacer",
    serviceCards: [
      { title: "Installation de store banne", desc: () => `Pose de store banne sur mesure, adaptée à votre façade, à vos dimensions et à vos besoins en protection solaire.`, image: IMG.storeInstallation, svgPaths: homePath },
      { title: "Remplacement de toile", desc: () => `Toile déchirée, décolorée ou usée : remplacement sur mesure avec un large choix de coloris et de tissus résistants aux intempéries.`, image: IMG.storeToile, svgPaths: sunPath },
      { title: "Réparation de store banne", desc: () => `Bras articulé cassé, manivelle bloquée ou mécanisme endommagé : diagnostic et réparation des éléments défectueux.`, image: IMG.storeBras, svgPaths: cogPath },
      { title: "Dépannage de store banne électrique", desc: () => `Store bloqué ou qui ne répond plus : recherche de panne et intervention sur les composants électriques et mécaniques.`, image: IMG.store, svgPaths: boltPath },
      { title: "Motorisation de store banne", desc: () => `Transformez votre store manuel en store motorisé grâce à une solution adaptée, avec commande murale ou télécommande.`, image: IMG.storePoseMoteur, svgPaths: remotePath },
      { title: "Remplacement de moteur de store banne", desc: () => `Moteur en panne ou devenu trop bruyant : remplacement du moteur et réglage des fins de course pour retrouver un fonctionnement optimal.`, image: IMG.storeMecanismes, svgPaths: boltPath },
    ],
    seoBlocks: [
      {
        title: (c) => `Réparation de store banne à ${c} — Toile, bras et moteur`,
        text: (c) => `Un store banne est exposé au soleil, à la pluie et au vent : la toile, les bras articulés et le moteur finissent par s'user. À ${c}, nos techniciens réparent les stores de toutes marques en remplaçant uniquement les pièces nécessaires.\n\nUne toile neuve redonne un coup de jeune à votre terrasse sans changer l'armature, et un bras ou un moteur remplacé prolonge la durée de vie du store de plusieurs années.`,
        image: IMG.storeTube,
        imageAlt: (c) => `Réparation du mécanisme d'un store banne à ${c}`,
      },
      {
        title: (c) => `Installation de store à ${c} — Sur mesure et motorisé`,
        text: (c) => `Store banne monobloc, semi-coffre ou coffre intégral qui protège la toile : nous vous conseillons la solution adaptée à votre logement ou à votre commerce à ${c}.\n\nLa motorisation avec capteur vent referme automatiquement le store en cas de rafale, et le capteur soleil le déploie aux heures chaudes : un confort au quotidien et une toile mieux protégée.`,
        image: IMG.storeTerrasse,
        imageAlt: (c) => `Store banne installé sur une terrasse à ${c}`,
      },
    ],
    quoteFormTitle: "Store banne : votre devis gratuit",
    quoteFormSubtitle: "Pose, réparation, motorisation et entretien",
  },
]

// Titre de la section « Nos services » de chaque prestation
export const SERVICES_SECTION_TITLE: Record<string, string> = {
  "depannage-volet-roulant": "Nos solutions de dépannage de volets roulants",
  "reparation-volet-roulant": "Nos solutions de réparation de volets roulants",
  "installation-volet-roulant": "Nos solutions d'installation de volets roulants",
  "motorisation-volet-roulant": "Nos solutions de motorisation de volets roulants",
  "rideau-metallique": "Nos solutions pour les rideaux métalliques",
  "store-banne": "Nos solutions pour les stores bannes",
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getSousServiceBySlug(slug: string): SousServiceConfig | undefined {
  return SOUS_SERVICES_VOLET.find((s) => s.slug === slug)
}

// ─── Resolved (serializable) config ──────────────────────────────────────────

export interface ResolvedSousServiceConfig {
  slug: string
  label: string
  heroImage: string
  ogImage?: string
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
    ogImage: config.ogImage,
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

// ─── Version département (/gironde/depannage-volet-roulant) ─────────────────
// Même principe : « à Bordeaux » devient « en Gironde », « Bordeaux (33000) » devient « Gironde (33) ».

function mapStrings<T>(value: T, fn: (s: string) => string): T {
  if (typeof value === "string") return fn(value) as T
  if (Array.isArray(value)) return value.map((v) => mapStrings(v, fn)) as T
  if (value && typeof value === "object") {
    return Object.fromEntries(Object.entries(value).map(([k, v]) => [k, mapStrings(v, fn)])) as T
  }
  return value
}

export function resolveSousServiceDepartment(
  config: SousServiceConfig,
  dept: { name: string; displayName: string; postalCode: string },
  pageUrl: string,
): ResolvedSousServiceConfig {
  // displayName : « en Gironde », « dans l'Isère »…
  const inDept = dept.displayName
  const InDept = inDept.charAt(0).toUpperCase() + inDept.slice(1)
  const resolved = mapStrings(resolveSousServiceConfig(config, CITY, CP, DEPT, pageUrl), (text) =>
    text
      .replace(new RegExp(`à ${CITY} ${DEPT}`, "g"), inDept)
      .replace(new RegExp(`à ${CITY} et (dans toute la région|ses environs)`, "g"), inDept)
      .replace(new RegExp(`à ${CITY} et dans les communes[^.]*`, "g"), inDept)
      .replace(new RegExp(`(^|[.!?]\\s+)À ${CITY},`, "g"), (_m, start: string) => `${start}${InDept},`)
      .replace(new RegExp(`(à|dans|près de) ${CITY}`, "g"), inDept)
      .replace(new RegExp(`(de|sur) ${CITY}`, "g"), `$1 ${dept.name}`)
      .replace(new RegExp(CITY, "g"), dept.name)
      .replace(new RegExp(CP, "g"), dept.postalCode)
      .replace(new RegExp(DEPT, "g"), inDept),
  )
  // Titre principal sans lieu : la page ajoute « en Gironde » en surligné (comme « partout en France »)
  return { ...resolved, h1: resolveSousServiceNational(config, pageUrl).h1 }
}
