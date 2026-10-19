// ─────────────────────────────────────────────────────────────────────────────
// lib/debarras-city-content.ts
// Système de contenu conditionnel par ville — débarras maison
// ─────────────────────────────────────────────────────────────────────────────

export type CityType = "metropole" | "ville-moyenne" | "periurbain" | "rural"
export type CityActivity = "industriel" | "residentiel" | "mixte" | "tertiaire" | "portuaire" | "touristique"
export type CityAccess = "centre-ville-dense" | "zone-pavillonnaire" | "zone-industrielle" | "acces-difficile" | "standard"

export interface DebarrasCityProfile {
  type: CityType
  activity: CityActivity
  access: CityAccess
  population?: number
  proximite?: string
  particularite?: string
  quartiers?: string[]
  zonePrioritaire?: boolean
}

// ─── Profils par ville ────────────────────────────────────────────────────────

export const DEBARRAS_CITY_PROFILES: Record<string, DebarrasCityProfile> = {

  // ── Gironde ───────────────────────────────────────────────────────────────
  "bordeaux": {
    type: "metropole",
    activity: "mixte",
    access: "centre-ville-dense",
    population: 260000,
    particularite: "Bordeaux compte un parc immobilier ancien dense, avec de nombreuses successions et ventes immobilières chaque année. Nous intervenons dans tous les quartiers — des appartements haussmanniens des Chartrons aux maisons de ville du quartier Saint-Michel — avec discrétion et efficacité.",
    quartiers: ["Chartrons", "Saint-Michel", "Bacalan", "Caudéran", "Mériadeck", "Bastide", "Nansouty", "Saint-Augustin", "La Victoire", "Belcier"],
    zonePrioritaire: true,
  },
  "merignac": {
    type: "metropole",
    activity: "mixte",
    access: "zone-pavillonnaire",
    population: 68000,
    proximite: "Bordeaux",
    particularite: "Mérignac est une ville pavillonnaire à forte densité résidentielle, avec de nombreuses maisons individuelles à vider lors de déménagements, successions ou ventes. Nos équipes interviennent rapidement dans tous les quartiers, y compris les zones proches de l'aéroport.",
    quartiers: ["Arlac", "Capeyron", "Chemin-Long", "La Glacière"],
    zonePrioritaire: true,
  },
  "pessac": {
    type: "metropole",
    activity: "residentiel",
    access: "zone-pavillonnaire",
    population: 62000,
    proximite: "Bordeaux",
    particularite: "Pessac est une ville résidentielle et universitaire avec un parc de maisons individuelles important. Nombreuses demandes de débarras liées aux successions, déménagements étudiants et ventes de résidences principales.",
    quartiers: ["Camponac", "Alouette", "Saige", "Centre"],
    zonePrioritaire: true,
  },
  "libourne": {
    type: "ville-moyenne",
    activity: "mixte",
    access: "standard",
    population: 25000,
    particularite: "Libourne et son bassin de vie génèrent une forte demande de débarras liée au marché immobilier actif du Libournais. Nous intervenons pour les vides maison avant vente, les successions et les débarras de caves et greniers dans les maisons de ville du centre.",
  },
  "arcachon": {
    type: "ville-moyenne",
    activity: "touristique",
    access: "acces-difficile",
    population: 11000,
    particularite: "Arcachon est une station balnéaire avec de nombreuses résidences secondaires à vider en fin de saison ou lors de successions. Accès parfois complexes dans les quartiers de villas historiques de la Ville d'Hiver. Délais à prévoir en période estivale.",
    zonePrioritaire: true,
  },

  // ── Isère ─────────────────────────────────────────────────────────────────
  "grenoble": {
    type: "metropole",
    activity: "mixte",
    access: "centre-ville-dense",
    population: 160000,
    particularite: "Grenoble est une ville dense avec un parc immobilier varié — appartements anciens en hypercentre, maisons de ville dans les quartiers périphériques. Forte demande de débarras liée aux mutations professionnelles, successions et rénovations thermiques.",
    quartiers: ["Championnet", "Eaux-Claires", "Villeneuve", "Mistral", "Hyper-Centre", "Île Verte", "Europole", "Berriat", "Saint-Bruno"],
    zonePrioritaire: true,
  },
  "echirolles": {
    type: "metropole",
    activity: "residentiel",
    access: "standard",
    population: 36000,
    proximite: "Grenoble",
    particularite: "Échirolles est une ville résidentielle proche de Grenoble avec de nombreux logements collectifs et pavillonnaires. Nos équipes interviennent rapidement pour les débarras d'appartements, caves et garages.",
  },
  "voiron": {
    type: "ville-moyenne",
    activity: "mixte",
    access: "standard",
    population: 20000,
    particularite: "Voiron et le Voironnais concentrent un parc immobilier mixte — maisons individuelles et immeubles anciens — avec une demande régulière de débarras liée aux successions et aux ventes entre particuliers.",
  },

  // ── Rhône ─────────────────────────────────────────────────────────────────
  "lyon": {
    type: "metropole",
    activity: "mixte",
    access: "centre-ville-dense",
    population: 520000,
    particularite: "Lyon est la deuxième métropole française avec un parc immobilier exceptionnel — traboules du Vieux-Lyon, immeubles haussmanniens de la Presqu'île, maisons bourgeoises de la Croix-Rousse. Nous gérons les contraintes d'accès et les autorisations de voirie pour chaque intervention.",
    quartiers: ["Croix-Rousse", "Confluence", "Part-Dieu", "Vieux-Lyon", "Monplaisir", "Guillotière"],
    zonePrioritaire: true,
  },
  "villeurbanne": {
    type: "metropole",
    activity: "mixte",
    access: "centre-ville-dense",
    population: 150000,
    proximite: "Lyon",
    particularite: "Villeurbanne est une ville dense avec un parc immobilier en forte renovation. Nombreuses demandes de débarras liées aux successions, aux ventes d'appartements anciens et aux réhabilitations de logements dans les quartiers historiques.",
    zonePrioritaire: true,
  },

  // ── Bouches-du-Rhône ──────────────────────────────────────────────────────
  "marseille": {
    type: "metropole",
    activity: "mixte",
    access: "centre-ville-dense",
    population: 870000,
    particularite: "Marseille dispose d'un parc immobilier ancien très important avec de nombreuses successions chaque année. Du Panier au quartier Endoume, nos équipes interviennent dans tous les arrondissements pour des débarras complets, discrèts et professionnels.",
    quartiers: ["Panier", "Joliette", "Endoume", "Saint-Victor", "Noailles", "Belle de Mai"],
    zonePrioritaire: true,
  },
  "aix-en-provence": {
    type: "ville-moyenne",
    activity: "tertiaire",
    access: "acces-difficile",
    population: 145000,
    particularite: "Aix-en-Provence possède un centre historique classé avec de nombreuses maisons de maître et hôtels particuliers. Les débarras de succession y sont fréquents et nécessitent discrétion et expertise pour l'estimation des biens. Accès réglementés dans le Vieil-Aix.",
    zonePrioritaire: true,
  },

  // ── Haute-Garonne ─────────────────────────────────────────────────────────
  "toulouse": {
    type: "metropole",
    activity: "mixte",
    access: "centre-ville-dense",
    population: 480000,
    particularite: "Toulouse est la quatrième ville de France avec une forte croissance démographique. Nombreuses demandes de débarras liées aux mutations, successions et ventes dans les quartiers historiques comme Saint-Cyprien ou les Minimes.",
    quartiers: ["Capitole", "Saint-Cyprien", "Les Minimes", "Rangueil", "Compans-Caffarelli"],
    zonePrioritaire: true,
  },

  // ── Nord ──────────────────────────────────────────────────────────────────
  "lille": {
    type: "metropole",
    activity: "mixte",
    access: "centre-ville-dense",
    population: 235000,
    particularite: "Lille dispose d'un parc immobilier dense avec de nombreuses maisons de ville flamandes à débarrasser lors de successions ou ventes. Nos équipes connaissent les contraintes d'accès du Vieux-Lille et interviennent avec le matériel adapté.",
    zonePrioritaire: true,
  },
  "roubaix": {
    type: "ville-moyenne",
    activity: "industriel",
    access: "standard",
    population: 97000,
    proximite: "Lille",
    particularite: "Roubaix est une ville en pleine reconversion avec un parc immobilier ancien important. Nombreuses demandes de débarras dans les maisons ouvrières et les logements collectifs liées aux successions et aux projets de rénovation.",
  },

  // ── Grand Est ─────────────────────────────────────────────────────────────
  "strasbourg": {
    type: "metropole",
    activity: "mixte",
    access: "centre-ville-dense",
    population: 285000,
    particularite: "Strasbourg possède un patrimoine architectural exceptionnel — maisons à colombages de la Grande Île, immeubles alsaciens du XIXe siècle. Les débarras de succession y sont fréquents et peuvent révéler des objets de grande valeur. Nous réalisons une estimation sérieuse avant chaque intervention.",
    quartiers: ["Neudorf", "Cronenbourg", "Hautepierre", "Robertsau", "Koenigshoffen"],
    zonePrioritaire: true,
  },
  "mulhouse": {
    type: "ville-moyenne",
    activity: "mixte",
    access: "standard",
    population: 110000,
    particularite: "Mulhouse est une ville industrielle alsacienne avec un parc immobilier varié. Forte demande de débarras liée aux successions dans les maisons ouvrières et les appartements anciens du centre-ville.",
    quartiers: ["Bourtzwiller", "Dornach", "Rebberg"],
  },
  "reims": {
    type: "ville-moyenne",
    activity: "mixte",
    access: "centre-ville-dense",
    population: 183000,
    particularite: "Reims possède un riche patrimoine architectural — hôtels particuliers, maisons Art Déco reconstruites après la Grande Guerre. Les successions y génèrent souvent des débarras de grande envergure avec des biens patrimoniaux à estimer.",
    quartiers: ["Clairmarais", "Croix-Rouge", "Centre", "Murigny"],
  },
  "nancy": {
    type: "ville-moyenne",
    activity: "tertiaire",
    access: "centre-ville-dense",
    population: 104000,
    particularite: "Nancy, ancienne capitale ducale de Lorraine, possède un patrimoine Art Nouveau remarquable. Les débarras de succession dans les maisons bourgeoises du centre peuvent révéler des objets de grande valeur. Estimation gratuite systématique avant chaque intervention.",
    quartiers: ["Stanislas", "Haussonville", "Trois-Maisons", "Blandan"],
  },
  "metz": {
    type: "ville-moyenne",
    activity: "mixte",
    access: "standard",
    population: 118000,
    particularite: "Metz est une ville en plein essor avec un parc immobilier mixte — quartiers anciens et zones pavillonnaires. Nos équipes interviennent rapidement pour les débarras de maisons, appartements et successions dans toute l'agglomération messine.",
    quartiers: ["Sablon", "Bellecroix", "Queuleu", "Borny"],
    zonePrioritaire: true,
  },
}

// ─── Helpers ──────────────────────────────────────────────────────────────────

export function getDebarrasCityProfile(villeSlug: string): DebarrasCityProfile | null {
  return DEBARRAS_CITY_PROFILES[villeSlug] ?? null
}

export function getDebarrasCityIntro(
  cityName: string,
  postalCode: string,
  profile: DebarrasCityProfile | null
): string {
  if (profile?.particularite) return profile.particularite

  const byType: Record<CityType, string> = {
    "metropole": `${cityName} est une ville à forte densité avec un parc immobilier varié — appartements anciens, maisons de ville, successions fréquentes. Nos équipes interviennent rapidement pour tout type de débarras, avec devis gratuit le jour même.`,
    "ville-moyenne": `${cityName} et son bassin de vie génèrent une demande régulière de débarras — successions, ventes immobilières, déménagements. Nous intervenons sous 24h/48h avec une équipe professionnelle et discrète.`,
    "periurbain": `${cityName}, commune péri-urbaine en développement, concentre de nombreuses maisons individuelles à débarrasser lors de ventes ou successions. Intervention rapide, devis gratuit sur place.`,
    "rural": `${cityName} est desservie dans le cadre de notre couverture départementale. Débarras de maison, cave, grenier ou garage — devis gratuit et sans engagement, intervention sous 48h.`,
  }

  return profile ? byType[profile.type] : `Notre service de débarras intervient à ${cityName} (${postalCode}) et dans les communes alentour. Devis gratuit le jour même, tous types de biens acceptés pour particuliers et professionnels.`
}

export function getDebarrasCityAccessText(
  cityName: string,
  profile: DebarrasCityProfile | null
): string | null {
  if (!profile) return `Nous intervenons directement à ${cityName} à l'adresse souhaitée — maison, appartement, cave, grenier ou garage. Nos équipes s'adaptent aux contraintes d'accès et laissent les lieux propres après intervention.`

  const byAccess: Record<CityAccess, string | null> = {
    "centre-ville-dense": `Interventions en centre-ville de ${cityName} : nos équipes maîtrisent les contraintes des rues étroites, des immeubles sans ascenseur et des accès réglementés. Nous adaptons nos véhicules et notre organisation pour intervenir efficacement, même dans les zones les plus denses. Autorisations de voirie gérées si nécessaire.`,
    "zone-pavillonnaire": `Zone pavillonnaire de ${cityName} : nos équipes interviennent directement dans votre propriété — jardin, garage, cave ou maison entière. Accès par le portail, protection des sols et des murs garantie. Idéal pour les débarras complets avant vente ou après succession.`,
    "zone-industrielle": `Secteur de ${cityName} : nous intervenons aussi bien dans les logements résidentiels que dans les locaux professionnels. Véhicules adaptés aux accès industriels et aux volumes importants. Intervention rapide pour entreprises et particuliers.`,
    "acces-difficile": `Accès spécifiques à ${cityName} : chaque intervention est préparée en amont pour s'adapter aux contraintes locales — ruelles étroites, escaliers, bâtiments classés. Nos équipes choisissent le matériel adapté pour une intervention sécurisée et sans dommage.`,
    "standard": `Nos équipes interviennent directement à ${cityName} à l'adresse souhaitée. Maison, appartement, cave, grenier ou garage — nous adaptons notre intervention aux contraintes de votre logement et laissons les lieux propres après débarras.`,
  }

  return byAccess[profile.access]
}

export function getDebarrasCityActivityText(
  cityName: string,
  profile: DebarrasCityProfile | null
): string | null {
  if (!profile) return null

  const byActivity: Record<CityActivity, string | null> = {
    "industriel": `${cityName}, ville à vocation industrielle, génère aussi des besoins importants de débarras résidentiels. Nos équipes interviennent pour les particuliers et les professionnels — débarras de logements ouvriers, locaux d'activité et entrepôts.`,
    "residentiel": `Zone résidentielle de ${cityName} — nos services de débarras sont particulièrement adaptés aux maisons individuelles, pavillons et appartements. Vide maison, succession, déménagement ou rénovation : nous gérons tout de A à Z.`,
    "mixte": null,
    "tertiaire": `${cityName}, ville à dominante tertiaire, concentre de nombreux logements bourgeois et appartements anciens. Les débarras de succession y sont fréquents et peuvent révéler des biens de valeur — mobilier, œuvres d'art, vaisselle ancienne — que nous estimons et rachetons.`,
    "portuaire": `Ville de ${cityName} — notre service de débarras intervient pour tous types de biens, des logements résidentiels aux entrepôts et locaux professionnels. Équipes disponibles rapidement pour les interventions urgentes.`,
    "touristique": `${cityName}, destination touristique, concentre de nombreuses résidences secondaires à vider en fin de saison ou lors de successions. Notre service de débarras est particulièrement adapté aux villas, maisons de vacances et appartements de standing.`,
  }

  return byActivity[profile.activity]
}

export function getDebarrasCityContentBlocks(
  cityName: string,
  postalCode: string,
  villeSlug: string
): {
  intro: string
  accessText: string | null
  activityText: string | null
  quartiers: string[]
  hasSpecificContent: boolean
} {
  const profile = getDebarrasCityProfile(villeSlug)

  return {
    intro: getDebarrasCityIntro(cityName, postalCode, profile),
    accessText: getDebarrasCityAccessText(cityName, profile),
    activityText: getDebarrasCityActivityText(cityName, profile),
    quartiers: profile?.quartiers ?? [],
    hasSpecificContent: profile !== null,
  }
}