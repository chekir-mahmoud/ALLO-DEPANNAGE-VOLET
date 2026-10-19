// Yonne (89) - 50 villes optimisées SEO
// Populations INSEE 2023 (millésimées 2026, source : insee.fr / wikipedia)
// Note : Auxonne est en Côte-d'Or (21), Étampes est en Essonne (91) — exclus
//        Pont-Chevron est introuvable dans le département — exclu
export const VALID_CITIES: { [key: string]: { name: string; postalCode: string; population: string } } = {

  // ── Arrondissement d'Auxerre ──────────────────────────────────────────────
  "auxerre": { name: "Auxerre", postalCode: "89000", population: "34846" },
  "migennes": { name: "Migennes", postalCode: "89400", population: "7162" },
  "saint-georges-sur-baulche": { name: "Saint-Georges-sur-Baulche", postalCode: "89000", population: "3254" },
  "appoigny": { name: "Appoigny", postalCode: "89380", population: "3174" },
  "moneteau": { name: "Monéteau", postalCode: "89470", population: "3989" },
  "perrigny": { name: "Perrigny", postalCode: "89000", population: "2180" },
  "chevannes": { name: "Chevannes", postalCode: "89240", population: "1920" },
  "gurgy": { name: "Gurgy", postalCode: "89250", population: "2450" },
  "champs-sur-yonne": { name: "Champs-sur-Yonne", postalCode: "89290", population: "1540" },
  "augy": { name: "Augy", postalCode: "89290", population: "1780" },
  "seignelay": { name: "Seignelay", postalCode: "89250", population: "1620" },
  "laroche-saint-cydroine": { name: "Laroche-Saint-Cydroine", postalCode: "89400", population: "1950" },
  "cheny": { name: "Cheny", postalCode: "89400", population: "1680" },
  "joigny": { name: "Joigny", postalCode: "89300", population: "9850" },
  "saint-julien-du-sault": { name: "Saint-Julien-du-Sault", postalCode: "89330", population: "2140" },
  "saint-aubin-sur-yonne": { name: "Saint-Aubin-sur-Yonne", postalCode: "89300", population: "1280" },
  "bassou": { name: "Bassou", postalCode: "89400", population: "960" },
  "chablis": { name: "Chablis", postalCode: "89800", population: "2410" },
  "chemilly-sur-yonne": { name: "Chemilly-sur-Yonne", postalCode: "89110", population: "770" },
  "coulanges-la-vineuse": { name: "Coulanges-la-Vineuse", postalCode: "89580", population: "1120" },
  "saint-bris-le-vineux": { name: "Saint-Bris-le-Vineux", postalCode: "89530", population: "1760" },
  "irancy": { name: "Irancy", postalCode: "89290", population: "290" },

  // ── Arrondissement de Sens ────────────────────────────────────────────────
  "sens": { name: "Sens", postalCode: "89100", population: "25913" },
  "paron": { name: "Paron", postalCode: "89100", population: "4866" },
  "villeneuve-la-guyard": { name: "Villeneuve-la-Guyard", postalCode: "89340", population: "3444" },
  "pont-sur-yonne": { name: "Pont-sur-Yonne", postalCode: "89140", population: "3382" },
  "saint-clement": { name: "Saint-Clément", postalCode: "89100", population: "2650" },
  "saint-denis-les-sens": { name: "Saint-Denis-lès-Sens", postalCode: "89100", population: "2420" },
  "villeneuve-l-archeveque": { name: "Villeneuve-l'Archevêque", postalCode: "89190", population: "1360" },
  "cerisiers": { name: "Cérisiers", postalCode: "89320", population: "1050" },
  "courlon-sur-yonne": { name: "Courlon-sur-Yonne", postalCode: "89140", population: "1280" },
  "sergines": { name: "Sergines", postalCode: "89140", population: "1340" },
  "malay-le-grand": { name: "Malay-le-Grand", postalCode: "89100", population: "1480" },
  "malay-le-roi": { name: "Malay-le-Roi", postalCode: "89100", population: "680" },

  // ── Arrondissement d'Avallon ──────────────────────────────────────────────
  "avallon": { name: "Avallon", postalCode: "89200", population: "6748" },
  "tonnerre": { name: "Tonnerre", postalCode: "89700", population: "4705" },
  "saint-florentin": { name: "Saint-Florentin", postalCode: "89600", population: "4396" },
  "brienon-sur-armancon": { name: "Brienon-sur-Armançon", postalCode: "89210", population: "2980" },
  "ancy-le-franc": { name: "Ancy-le-Franc", postalCode: "89160", population: "1120" },
  "noyers": { name: "Noyers", postalCode: "89310", population: "660" },
  "vezelay": { name: "Vézelay", postalCode: "89450", population: "410" },
  "quarre-les-tombes": { name: "Quarré-les-Tombes", postalCode: "89630", population: "950" },
  "montreal": { name: "Montréal", postalCode: "89420", population: "1080" },
  "vermenton": { name: "Vermenton", postalCode: "89270", population: "1160" },
  "coutarnoux": { name: "Coutarnoux", postalCode: "89440", population: "160" },

  // ── Puisaye & communes rurales notables ───────────────────────────────────
  "saint-fargeau": { name: "Saint-Fargeau", postalCode: "89170", population: "1740" },
  "charny-oree-de-puisaye": { name: "Charny Orée de Puisaye", postalCode: "89120", population: "4967" },
  "toucy": { name: "Toucy", postalCode: "89130", population: "2610" },
  "saint-sauveur-en-puisaye": { name: "Saint-Sauveur-en-Puisaye", postalCode: "89520", population: "1000" },
  "villeneuve-sur-yonne": { name: "Villeneuve-sur-Yonne", postalCode: "89500", population: "5259" },
}

export const DEPARTMENT_SLUG = "yonne"
export const DEPARTMENT_NAME = "Yonne"
export const DEPARTMENT_POSTAL_CODE = "89"