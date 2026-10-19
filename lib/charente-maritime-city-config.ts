// Charente-Maritime (17) - 50 villes optimisées SEO
// Populations INSEE 2023 (source : insee.fr / populations légales 2026)
export const VALID_CITIES: { [key: string]: { name: string; postalCode: string; population: string } } = {

  // ── Arrondissement de La Rochelle ────────────────────────────────────────
  "la-rochelle": { name: "La Rochelle", postalCode: "17000", population: "77500" },
  "aytre": { name: "Aytré", postalCode: "17440", population: "9800" },
  "perigny": { name: "Périgny", postalCode: "17180", population: "8800" },
  "puilboreau": { name: "Puilboreau", postalCode: "17138", population: "7900" },
  "lagord": { name: "Lagord", postalCode: "17140", population: "7600" },
  "chatelaillon-plage": { name: "Châtelaillon-Plage", postalCode: "17340", population: "6400" },
  "dompierre-sur-mer": { name: "Dompierre-sur-Mer", postalCode: "17139", population: "6200" },
  "sainte-soulle": { name: "Sainte-Soulle", postalCode: "17220", population: "5200" },
  "nieul-sur-mer": { name: "Nieul-sur-Mer", postalCode: "17137", population: "5000" },
  "saint-xandre": { name: "Saint-Xandre", postalCode: "17138", population: "5400" },
  "salles-sur-mer": { name: "Salles-sur-Mer", postalCode: "17220", population: "4100" },
  "la-jarne": { name: "La Jarne", postalCode: "17220", population: "3500" },

  // ── Arrondissement de Rochefort ──────────────────────────────────────────
  "rochefort": { name: "Rochefort", postalCode: "17300", population: "23500" },
  "tonnay-charente": { name: "Tonnay-Charente", postalCode: "17430", population: "8200" },
  "fouras": { name: "Fouras", postalCode: "17450", population: "4400" },
  "echillais": { name: "Échillais", postalCode: "17620", population: "3800" },
  "cabariot": { name: "Cabariot", postalCode: "17430", population: "1600" },
  "soubise": { name: "Soubise", postalCode: "17780", population: "3200" },
  "saint-agnant": { name: "Saint-Agnant", postalCode: "17620", population: "2100" },
  "breuil-magne": { name: "Breuil-Magné", postalCode: "17870", population: "2800" },

  // ── Arrondissement de Saintes ────────────────────────────────────────────
  "saintes": { name: "Saintes", postalCode: "17100", population: "25200" },
  "saujon": { name: "Saujon", postalCode: "17600", population: "7800" },
  "chaniers": { name: "Chaniers", postalCode: "17610", population: "3700" },
  "fontcouverte": { name: "Fontcouverte", postalCode: "17100", population: "2600" },
  "saint-georges-des-coteaux": { name: "Saint-Georges-des-Coteaux", postalCode: "17810", population: "3100" },
  "saint-cesaire": { name: "Saint-Césaire", postalCode: "17770", population: "2900" },
  "pons": { name: "Pons", postalCode: "17800", population: "4100" },
  "gemozac": { name: "Gémozac", postalCode: "17260", population: "2900" },

  // ── Arrondissement de Jonzac ─────────────────────────────────────────────
  "jonzac": { name: "Jonzac", postalCode: "17500", population: "3400" },
  "montendre": { name: "Montendre", postalCode: "17130", population: "3300" },
  "mirambeau": { name: "Mirambeau", postalCode: "17150", population: "1600" },
  "saint-genis-de-saintonge": { name: "Saint-Genis-de-Saintonge", postalCode: "17240", population: "2500" },
  "montlieu-la-garde": { name: "Montlieu-la-Garde", postalCode: "17210", population: "1500" },

  // ── Arrondissement de Saint-Jean-d'Angély ────────────────────────────────
  "saint-jean-d-angely": { name: "Saint-Jean-d'Angély", postalCode: "17400", population: "7100" },
  "surgeres": { name: "Surgères", postalCode: "17700", population: "6900" },
  "aigrefeuille-d-aunis": { name: "Aigrefeuille-d'Aunis", postalCode: "17290", population: "4300" },
  "matha": { name: "Matha", postalCode: "17160", population: "2300" },
  "saint-savinien": { name: "Saint-Savinien", postalCode: "17350", population: "2500" },
  "tonnay-boutonne": { name: "Tonnay-Boutonne", postalCode: "17380", population: "1700" },

  // ── Île d'Oléron ─────────────────────────────────────────────────────────
  "saint-pierre-d-oleron": { name: "Saint-Pierre-d'Oléron", postalCode: "17310", population: "6700" },
  "le-chateau-d-oleron": { name: "Le Château-d'Oléron", postalCode: "17480", population: "4300" },
  "saint-georges-d-oleron": { name: "Saint-Georges-d'Oléron", postalCode: "17190", population: "3900" },
  "dolus-d-oleron": { name: "Dolus-d'Oléron", postalCode: "17550", population: "3300" },
  "saint-trojan-les-bains": { name: "Saint-Trojan-les-Bains", postalCode: "17370", population: "1500" },

  // ── Île de Ré ─────────────────────────────────────────────────────────────
  "saint-martin-de-re": { name: "Saint-Martin-de-Ré", postalCode: "17410", population: "2600" },
  "sainte-marie-de-re": { name: "Sainte-Marie-de-Ré", postalCode: "17740", population: "3700" },
  "la-flotte": { name: "La Flotte", postalCode: "17630", population: "3100" },
  "ars-en-re": { name: "Ars-en-Ré", postalCode: "17590", population: "1400" },

  // ── Côte de Beauté & Marennes-Oléron ────────────────────────────────────
  "royan": { name: "Royan", postalCode: "17200", population: "18500" },
  "saint-georges-de-didonne": { name: "Saint-Georges-de-Didonne", postalCode: "17110", population: "5400" },
  "saint-palais-sur-mer": { name: "Saint-Palais-sur-Mer", postalCode: "17420", population: "5200" },
  "vaux-sur-mer": { name: "Vaux-sur-Mer", postalCode: "17640", population: "5700" },
  "meschers-sur-gironde": { name: "Meschers-sur-Gironde", postalCode: "17132", population: "3600" },
  "la-tremblade": { name: "La Tremblade", postalCode: "17390", population: "5200" },
  "marennes": { name: "Marennes-Hiers-Brouage", postalCode: "17320", population: "6200" },
  "bourcefranc-le-chapus": { name: "Bourcefranc-le-Chapus", postalCode: "17560", population: "3700" },
  "semussac": { name: "Sémussac", postalCode: "17120", population: "1300" },
}

export const DEPARTMENT_SLUG = "charente-maritime"
export const DEPARTMENT_NAME = "Charente-Maritime"
export const DEPARTMENT_POSTAL_CODE = "17"