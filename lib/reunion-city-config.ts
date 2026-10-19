// La Réunion (974) — 24 communes officielles + 26 quartiers/sections SEO
// Population INSEE 2023 (source : insee.fr)
export const VALID_CITIES: { [key: string]: { name: string; postalCode: string; population?: string } } = {

  // ── Nord ────────────────────────────────────────────────────────────────
  "saint-denis": { name: "Saint-Denis", postalCode: "97400", population: "155634" },
  "sainte-marie": { name: "Sainte-Marie", postalCode: "97438", population: "34500" },
  "sainte-suzanne": { name: "Sainte-Suzanne", postalCode: "97441", population: "25700" },

  // Quartiers de Saint-Denis (codes postaux distincts)
  "saint-denis-97410": { name: "Saint-Denis (La Montagne)", postalCode: "97415", population: undefined },
  "moufia": { name: "Moufia", postalCode: "97400", population: undefined },
  "bois-de-nefles-saint-denis": { name: "Bois-de-Nèfles Saint-Denis", postalCode: "97400", population: undefined },

  // ── Est ─────────────────────────────────────────────────────────────────
  "saint-benoit": { name: "Saint-Benoît", postalCode: "97470", population: "37800" },
  "saint-andre": { name: "Saint-André", postalCode: "97440", population: "57200" },
  "bras-panon": { name: "Bras-Panon", postalCode: "97412", population: "13200" },
  "salazie": { name: "Salazie", postalCode: "97433", population: "8000" },
  "plaine-des-palmistes": { name: "La Plaine-des-Palmistes", postalCode: "97431", population: "5400" },
  "saint-philippe": { name: "Saint-Philippe", postalCode: "97442", population: "5200" },

  // Quartiers notables Est
  "grand-ilet": { name: "Grand Ilet", postalCode: "97433", population: undefined },
  "hell-bourg": { name: "Hell-Bourg", postalCode: "97433", population: undefined },
  "sainte-anne": { name: "Sainte-Anne", postalCode: "97440", population: undefined },

  // ── Ouest ────────────────────────────────────────────────────────────────
  "saint-paul": { name: "Saint-Paul", postalCode: "97460", population: "108000" },
  "le-port": { name: "Le Port", postalCode: "97420", population: "39500" },
  "la-possession": { name: "La Possession", postalCode: "97419", population: "35000" },
  "saint-leu": { name: "Saint-Leu", postalCode: "97424", population: "36000" },
  "trois-bassins": { name: "Trois-Bassins", postalCode: "97426", population: "7400" },

  // Quartiers notables Ouest
  "saint-gilles-les-bains": { name: "Saint-Gilles-les-Bains", postalCode: "97434", population: undefined },
  "l-hermitage": { name: "L'Hermitage", postalCode: "97434", population: undefined },
  "la-saline": { name: "La Saline", postalCode: "97434", population: undefined },
  "bois-de-nefles-saint-paul": { name: "Bois-de-Nèfles Saint-Paul", postalCode: "97460", population: undefined },
  "tan-rouge": { name: "Tan Rouge", postalCode: "97460", population: undefined },
  "plateau-caillou": { name: "Plateau Caillou", postalCode: "97460", population: undefined },
  "la-montagne": { name: "La Montagne", postalCode: "97419", population: undefined },

  // ── Sud ──────────────────────────────────────────────────────────────────
  "saint-pierre": { name: "Saint-Pierre", postalCode: "97410", population: "82800" },
  "le-tampon": { name: "Le Tampon", postalCode: "97430", population: "78000" },
  "saint-louis": { name: "Saint-Louis", postalCode: "97450", population: "56200" },
  "saint-joseph": { name: "Saint-Joseph", postalCode: "97480", population: "39500" },
  "petite-ile": { name: "Petite-Île", postalCode: "97429", population: "13500" },
  "les-avirons": { name: "Les Avirons", postalCode: "97425", population: "12800" },
  "etang-sale": { name: "Étang-Salé", postalCode: "97427", population: "14600" },
  "cilaos": { name: "Cilaos", postalCode: "97413", population: "5400" },
  "entre-deux": { name: "L'Entre-Deux", postalCode: "97414", population: "6700" },

  // Quartiers notables Sud
  "grand-bois": { name: "Grand Bois", postalCode: "97480", population: undefined },
  "vincendo": { name: "Vincendo", postalCode: "97480", population: undefined },
  "manapany": { name: "Manapany", postalCode: "97480", population: undefined },
  "le-tampon-7": { name: "Le Tampon (Bourg Murat)", postalCode: "97418", population: undefined },
  "piton-saint-leu": { name: "Piton Saint-Leu", postalCode: "97424", population: undefined },
  "ravine-des-cabris": { name: "Ravine des Cabris", postalCode: "97432", population: undefined },
  "terre-sainte": { name: "Terre Sainte", postalCode: "97410", population: undefined },
  "grand-bourg": { name: "Grand Bourg", postalCode: "97450", population: undefined },

  // Lieux-dits touristiques / notables SEO
  "mafate": { name: "Cirque de Mafate", postalCode: "97419", population: undefined },
  "piton-de-la-fournaise": { name: "Piton de la Fournaise", postalCode: "97418", population: undefined },
  "ilet-a-cordes": { name: "Îlet à Cordes", postalCode: "97413", population: undefined },
  "le-guillaume": { name: "Le Guillaume", postalCode: "97460", population: undefined },
  "les-lianes": { name: "Les Lianes", postalCode: "97440", population: undefined },
  "sainte-rose": { name: "Sainte-Rose", postalCode: "97439", population: "7200" },
}

export const DEPARTMENT_SLUG = "la-reunion"
export const DEPARTMENT_NAME = "La Réunion"
export const DEPARTMENT_POSTAL_CODE = "974"