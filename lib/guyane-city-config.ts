// Guyane (973) - 22 communes + quartiers/lieux-dits principaux, optimisés SEO
// ⚠️ La Guyane ne compte que 22 communes. Les entrées supplémentaires
//    correspondent aux quartiers et localités les plus recherchés en ligne.
export const VALID_CITIES: { [key: string]: { name: string; slug: string; population: number } } = {

  // Arrondissement de Cayenne — Communauté d'Agglomération du Centre Littoral (CACL)
  "cayenne": { name: "Cayenne", slug: "cayenne", population: 65956 },
  "matoury": { name: "Matoury", slug: "matoury", population: 34474 },
  "remire-montjoly": { name: "Rémire-Montjoly", slug: "remire-montjoly", population: 25793 },
  "macouria": { name: "Macouria", slug: "macouria", population: 19087 },
  "montsinery-tonnegrande": { name: "Montsinéry-Tonnegrande", slug: "montsinery-tonnegrande", population: 3141 },
  "roura": { name: "Roura", slug: "roura", population: 3436 },

  // Quartiers de Cayenne les plus recherchés
  "rochambeau": { name: "Rochambeau", slug: "rochambeau", population: 8000 },
  "les-hattes-cayenne": { name: "Les Hattes", slug: "les-hattes-cayenne", population: 5000 },
  "baduel": { name: "Baduel", slug: "baduel", population: 7000 },
  "cabassou": { name: "Cabassou", slug: "cabassou", population: 4000 },
  "suzini": { name: "Suzini", slug: "suzini", population: 3500 },
  "montabo": { name: "Montabo", slug: "montabo", population: 4500 },

  // Arrondissement de Cayenne — Communauté de Communes des Savanes (CCS)
  "kourou": { name: "Kourou", slug: "kourou", population: 24805 },
  "sinnamary": { name: "Sinnamary", slug: "sinnamary", population: 2855 },
  "iracoubo": { name: "Iracoubo", slug: "iracoubo", population: 1729 },
  "saint-elie": { name: "Saint-Élie", slug: "saint-elie", population: 244 },

  // Quartiers de Kourou
  "les-roches": { name: "Les Roches", slug: "les-roches", population: 4000 },
  "bourg-de-kourou": { name: "Bourg de Kourou", slug: "bourg-de-kourou", population: 6000 },

  // Arrondissement de Saint-Laurent-du-Maroni — Communauté de Communes de l'Ouest Guyanais (CCOG)
  "saint-laurent-du-maroni": { name: "Saint-Laurent-du-Maroni", slug: "saint-laurent-du-maroni", population: 49173 },
  "mana": { name: "Mana", slug: "mana", population: 11605 },
  "apatou": { name: "Apatou", slug: "apatou", population: 8500 },
  "grand-santi": { name: "Grand-Santi", slug: "grand-santi", population: 8859 },
  "papaichton": { name: "Papaichton", slug: "papaichton", population: 5684 },
  "maripasoula": { name: "Maripasoula", slug: "maripasoula", population: 9768 },
  "awala-yalimapo": { name: "Awala-Yalimapo", slug: "awala-yalimapo", population: 1400 },

  // Quartiers / localités de Saint-Laurent-du-Maroni
  "chantier-venezuela": { name: "Chantier Venezuela", slug: "chantier-venezuela", population: 7000 },
  "bourg-saint-laurent": { name: "Bourg Saint-Laurent", slug: "bourg-saint-laurent", population: 9000 },
  "camp-de-la-transportation": { name: "Camp de la Transportation", slug: "camp-de-la-transportation", population: 3000 },

  // Localités de Mana
  "javouhey": { name: "Javouhey", slug: "javouhey", population: 2500 },
  "organabo": { name: "Organabo", slug: "organabo", population: 800 },

  // Arrondissement de Saint-Georges
  "saint-georges": { name: "Saint-Georges", slug: "saint-georges", population: 4303 },
  "regina": { name: "Régina", slug: "regina", population: 844 },
  "ouanary": { name: "Ouanary", slug: "ouanary", population: 266 },
  "camopi": { name: "Camopi", slug: "camopi", population: 1500 },

  // Localités intérieures / fleuve Maroni
  "saul": { name: "Saül", slug: "saul", population: 153 },
  "papaichton-centre": { name: "Bœuf-Mort", slug: "papaichton-centre", population: 600 },
  "twenke": { name: "Twenké", slug: "twenke", population: 500 },
  "antecume-pata": { name: "Antécume-Pata", slug: "antecume-pata", population: 350 },

  // Localités de Matoury
  "balata": { name: "Balata", slug: "balata", population: 5000 },
  "bourda": { name: "Bourda", slug: "bourda", population: 4000 },
  "degrad-des-cannes": { name: "Dégrad-des-Cannes", slug: "degrad-des-cannes", population: 6000 },

  // Localités de Rémire-Montjoly
  "montjoly": { name: "Montjoly", slug: "montjoly", population: 8000 },
  "remiville": { name: "Rémiville", slug: "remiville", population: 5000 },

  // Localités de Macouria
  "tonate": { name: "Tonate", slug: "tonate", population: 8000 },
  "soula": { name: "Soula", slug: "soula", population: 3000 },

  // Localités côtières / touristiques
  "kourou-bourg": { name: "Village de Kourou", slug: "kourou-bourg", population: 3000 },
  "les-hattes-awala": { name: "Les Hattes (Awala)", slug: "les-hattes-awala", population: 600 },
  "saul-grand-boeuf-mort": { name: "Grand Bœuf Mort", slug: "saul-grand-boeuf-mort", population: 200 },
  "saint-jean-du-maroni": { name: "Saint-Jean-du-Maroni", slug: "saint-jean-du-maroni", population: 4000 },
  "sparouine": { name: "Sparouine", slug: "sparouine", population: 500 },
  "voltaire": { name: "Voltaire", slug: "voltaire", population: 800 },
};