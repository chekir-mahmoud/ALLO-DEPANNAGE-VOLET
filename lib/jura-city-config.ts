// Jura (39) - 50 villes optimisées SEO
// Populations INSEE 2023 (millésimées 2026, source : insee.fr / wikipedia)
export const VALID_CITIES: { [key: string]: { name: string; postalCode: string; population: string } } = {

  // ── Arrondissement de Dole ────────────────────────────────────────────────
  "dole": { name: "Dole", postalCode: "39100", population: "23840" },
  "tavaux": { name: "Tavaux", postalCode: "39500", population: "3888" },
  "damparis": { name: "Damparis", postalCode: "39500", population: "2587" },
  "mont-sous-vaudrey": { name: "Mont-sous-Vaudrey", postalCode: "39380", population: "1700" },
  "chaussin": { name: "Chaussin", postalCode: "39120", population: "1600" },
  "rochefort-sur-nenon": { name: "Rochefort-sur-Nenon", postalCode: "39100", population: "1200" },
  "fraisans": { name: "Fraisans", postalCode: "39700", population: "950" },
  "choisey": { name: "Choisey", postalCode: "39100", population: "1800" },
  "foucherans": { name: "Foucherans", postalCode: "39100", population: "2100" },
  "champvans": { name: "Champvans", postalCode: "39100", population: "1400" },
  "saint-aubin": { name: "Saint-Aubin", postalCode: "39410", population: "1300" },
  "deschaux": { name: "Deschaux", postalCode: "39120", population: "1100" },

  // ── Arrondissement de Lons-le-Saunier ────────────────────────────────────
  "lons-le-saunier": { name: "Lons-le-Saunier", postalCode: "39000", population: "16618" },
  "montmorot": { name: "Montmorot", postalCode: "39570", population: "3261" },
  "poligny": { name: "Poligny", postalCode: "39800", population: "3976" },
  "arbois": { name: "Arbois", postalCode: "39600", population: "3114" },
  "salins-les-bains": { name: "Salins-les-Bains", postalCode: "39110", population: "2390" },
  "saint-amour": { name: "Saint-Amour", postalCode: "39160", population: "2349" },
  "orgelet": { name: "Orgelet", postalCode: "39270", population: "1700" },
  "bletterans": { name: "Bletterans", postalCode: "39140", population: "1400" },
  "arlay": { name: "Arlay", postalCode: "39140", population: "900" },
  "perrigny": { name: "Perrigny", postalCode: "39570", population: "2400" },
  "courlaoux": { name: "Courlaoux", postalCode: "39570", population: "1300" },
  "cousance": { name: "Cousance", postalCode: "19190", population: "1200" },
  "macornay": { name: "Macornay", postalCode: "39570", population: "1100" },
  "l-etoile": { name: "L'Étoile", postalCode: "39570", population: "800" },
  "clairvaux-les-lacs": { name: "Clairvaux-les-Lacs", postalCode: "39130", population: "1600" },
  "baume-les-messieurs": { name: "Baume-les-Messieurs", postalCode: "39210", population: "200" },
  "chateau-chalon": { name: "Château-Chalon", postalCode: "39210", population: "160" },
  "arinthod": { name: "Arinthod", postalCode: "39240", population: "1000" },

  // ── Arrondissement de Saint-Claude ───────────────────────────────────────
  "saint-claude": { name: "Saint-Claude", postalCode: "39200", population: "8386" },
  "champagnole": { name: "Champagnole", postalCode: "39300", population: "8036" },
  "hauts-de-bienne": { name: "Hauts-de-Bienne", postalCode: "39400", population: "5032" },
  "les-rousses": { name: "Les Rousses", postalCode: "39220", population: "3740" },
  "morbier": { name: "Morbier", postalCode: "39400", population: "2456" },
  "lavans-les-saint-claude": { name: "Lavans-lès-Saint-Claude", postalCode: "39170", population: "2351" },
  "moirans-en-montagne": { name: "Moirans-en-Montagne", postalCode: "39260", population: "2400" },
  "saint-laurent-en-grandvaux": { name: "Saint-Laurent-en-Grandvaux", postalCode: "39150", population: "1600" },
  "coteaux-du-lizon": { name: "Coteaux du Lizon", postalCode: "39170", population: "2200" },
  "longchaumois": { name: "Longchaumois", postalCode: "39400", population: "900" },
  "bois-d-amont": { name: "Bois-d'Amont", postalCode: "39220", population: "900" },
  "foncine-le-haut": { name: "Foncine-le-Haut", postalCode: "39460", population: "1100" },
  "grande-riviere-chateau": { name: "Grande-Rivière Château", postalCode: "39150", population: "1200" },
  "lamoura": { name: "Lamoura", postalCode: "39310", population: "500" },

  // ── Sites touristiques & patrimoniaux ────────────────────────────────────
  "ilay": { name: "Ilay", postalCode: "39150", population: "200" },
  "menouille": { name: "Ménouille", postalCode: "39130", population: "180" },
  "bonlieu": { name: "Bonlieu", postalCode: "39130", population: "220" },
  "chalain": { name: "Fontenu (Lac de Chalain)", postalCode: "39130", population: "220" },
  "pupillin": { name: "Pupillin", postalCode: "39600", population: "280" },
  "chateau-des-pretres": { name: "Rye", postalCode: "39230", population: "160" },
}

export const DEPARTMENT_SLUG = "jura"
export const DEPARTMENT_NAME = "Jura"
export const DEPARTMENT_POSTAL_CODE = "39"