// Saône-et-Loire (71) - 50 villes optimisées SEO
// Populations INSEE 2023 (millésimées 2026, source : insee.fr / wikipedia)
// Note : Thizy, Juliénas et Oingt sont dans le Rhône (69) — exclus
//        Saint-Amour est dans le Jura (39) — exclu
export const VALID_CITIES: { [key: string]: { name: string; postalCode: string; population: string } } = {

  // ── Arrondissement de Chalon-sur-Saône ────────────────────────────────────
  "chalon-sur-saone": { name: "Chalon-sur-Saône", postalCode: "71100", population: "45056" },
  "saint-remy": { name: "Saint-Rémy", postalCode: "71100", population: "6109" },
  "chatenoy-le-royal": { name: "Châtenoy-le-Royal", postalCode: "71880", population: "5906" },
  "saint-marcel": { name: "Saint-Marcel", postalCode: "71380", population: "6080" },
  "tournus": { name: "Tournus", postalCode: "71700", population: "5849" },
  "chagny": { name: "Chagny", postalCode: "71150", population: "5600" },
  "givry": { name: "Givry", postalCode: "71640", population: "3900" },
  "buxy": { name: "Buxy", postalCode: "71390", population: "2150" },
  "sennecey-le-grand": { name: "Sennecey-le-Grand", postalCode: "71240", population: "3100" },
  "champforgeuil": { name: "Champforgeuil", postalCode: "71530", population: "3200" },
  "crissey": { name: "Crissey", postalCode: "71530", population: "3100" },
  "dracy-le-fort": { name: "Dracy-le-Fort", postalCode: "71640", population: "2400" },
  "gergy": { name: "Gergy", postalCode: "71590", population: "2400" },
  "varennes-le-grand": { name: "Varennes-le-Grand", postalCode: "71240", population: "2650" },

  // ── Arrondissement d'Autun ────────────────────────────────────────────────
  "autun": { name: "Autun", postalCode: "71400", population: "12800" },
  "le-creusot": { name: "Le Creusot", postalCode: "71200", population: "21269" },
  "montceau-les-mines": { name: "Montceau-les-Mines", postalCode: "71300", population: "17950" },
  "blanzy": { name: "Blanzy", postalCode: "71450", population: "6633" },
  "montchanin": { name: "Montchanin", postalCode: "71210", population: "5100" },
  "sanvignes-les-mines": { name: "Sanvignes-les-Mines", postalCode: "71594", population: "4350" },
  "torcy": { name: "Torcy", postalCode: "71210", population: "3180" },
  "montcenis": { name: "Montcenis", postalCode: "71710", population: "2450" },
  "epinac": { name: "Épinac", postalCode: "71360", population: "2480" },
  "ciry-le-noble": { name: "Ciry-le-Noble", postalCode: "71420", population: "2350" },
  "bourbon-lancy": { name: "Bourbon-Lancy", postalCode: "71140", population: "5300" },
  "cordesse": { name: "Cordesse", postalCode: "71550", population: "880" },

  // ── Arrondissement de Charolles ───────────────────────────────────────────
  "paray-le-monial": { name: "Paray-le-Monial", postalCode: "71600", population: "9107" },
  "digoin": { name: "Digoin", postalCode: "71160", population: "8303" },
  "gueugnon": { name: "Gueugnon", postalCode: "71130", population: "7512" },
  "charolles": { name: "Charolles", postalCode: "71120", population: "2750" },
  "chauffailles": { name: "Chauffailles", postalCode: "71170", population: "3950" },
  "la-clayette": { name: "La Clayette", postalCode: "71800", population: "2000" },
  "marcigny": { name: "Marcigny", postalCode: "71110", population: "1840" },
  "etang-sur-arroux": { name: "Étang-sur-Arroux", postalCode: "71190", population: "1720" },
  "toulon-sur-arroux": { name: "Toulon-sur-Arroux", postalCode: "71320", population: "1580" },

  // ── Arrondissement de Louhans ─────────────────────────────────────────────
  "louhans": { name: "Louhans", postalCode: "71500", population: "6520" },
  "pierre-de-bresse": { name: "Pierre-de-Bresse", postalCode: "71270", population: "1880" },
  "saint-germain-du-bois": { name: "Saint-Germain-du-Bois", postalCode: "71330", population: "1960" },
  "branges": { name: "Branges", postalCode: "71500", population: "1550" },
  "saint-martin-en-bresse": { name: "Saint-Martin-en-Bresse", postalCode: "71620", population: "2000" },
  "saint-germain-du-plain": { name: "Saint-Germain-du-Plain", postalCode: "71370", population: "2100" },

  // ── Arrondissement de Mâcon ───────────────────────────────────────────────
  "macon": { name: "Mâcon", postalCode: "71000", population: "33908" },
  "charnay-les-macon": { name: "Charnay-lès-Mâcon", postalCode: "71850", population: "6827" },
  "cluny": { name: "Cluny", postalCode: "71250", population: "4280" },
  "la-chapelle-de-guinchay": { name: "La Chapelle-de-Guinchay", postalCode: "71570", population: "3250" },
  "romaneche-thorins": { name: "Romanèche-Thorins", postalCode: "71570", population: "1890" },
  "lugny": { name: "Lugny", postalCode: "71260", population: "870" },
  "creches-sur-saone": { name: "Crèches-sur-Saône", postalCode: "71680", population: "3100" },
  "sance": { name: "Sancé", postalCode: "71000", population: "2580" },
  "prisse": { name: "Prissé", postalCode: "71960", population: "2150" },
  "pierreclos": { name: "Pierreclos", postalCode: "71960", population: "580" },
  "tramayes": { name: "Tramayes", postalCode: "71520", population: "780" },
}

export const DEPARTMENT_SLUG = "saone-et-loire"
export const DEPARTMENT_NAME = "Saône-et-Loire"
export const DEPARTMENT_POSTAL_CODE = "71"