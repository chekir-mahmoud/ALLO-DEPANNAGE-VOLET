// Deux-Sèvres (79) - 50 villes optimisées SEO
// Populations INSEE 2023 (millésimées 2026, source : insee.fr / wikipedia)
export const VALID_CITIES: { [key: string]: { name: string; postalCode: string; population: string } } = {

  // ── Arrondissement de Niort ───────────────────────────────────────────────
  "niort": { name: "Niort", postalCode: "79000", population: "59854" },
  "chauray": { name: "Chauray", postalCode: "79180", population: "5985" },
  "la-creche": { name: "La Crèche", postalCode: "79260", population: "5449" },
  "aiffres": { name: "Aiffres", postalCode: "79230", population: "4780" },
  "echire": { name: "Échiré", postalCode: "79410", population: "3560" },
  "bessines": { name: "Bessines", postalCode: "79000", population: "3480" },
  "saint-gelais": { name: "Saint-Gelais", postalCode: "79410", population: "3320" },
  "frontenay-rohan-rohan": { name: "Frontenay-Rohan-Rohan", postalCode: "79270", population: "2967" },
  "prahecq": { name: "Prahecq", postalCode: "79230", population: "2650" },
  "vouille": { name: "Vouillé", postalCode: "79230", population: "3020" },
  "mogne": { name: "Magné", postalCode: "79460", population: "3150" },
  "coulon": { name: "Coulon", postalCode: "79510", population: "2320" },
  "saint-maixent-l-ecole": { name: "Saint-Maixent-l'École", postalCode: "79400", population: "7483" },
  "melle": { name: "Melle", postalCode: "79500", population: "3880" },
  "celles-sur-belle": { name: "Celles-sur-Belle", postalCode: "79370", population: "3620" },
  "beauvoir-sur-niort": { name: "Beauvoir-sur-Niort", postalCode: "79360", population: "2180" },
  "mauz-sur-le-mignon": { name: "Mauzé-sur-le-Mignon", postalCode: "79210", population: "2870" },
  "coulonges-sur-l-autize": { name: "Coulonges-sur-l'Autize", postalCode: "79160", population: "2350" },
  "chef-boutonne": { name: "Chef-Boutonne", postalCode: "79110", population: "2080" },
  "brioux-sur-boutonne": { name: "Brioux-sur-Boutonne", postalCode: "79170", population: "1430" },
  "cherveux": { name: "Cherveux", postalCode: "79410", population: "2120" },
  "mougon": { name: "Mougon", postalCode: "79370", population: "2580" },

  // ── Arrondissement de Bressuire ───────────────────────────────────────────
  "bressuire": { name: "Bressuire", postalCode: "79300", population: "18615" },
  "mauleon": { name: "Mauléon", postalCode: "79700", population: "8172" },
  "nueil-les-aubiers": { name: "Nueil-les-Aubiers", postalCode: "79250", population: "5444" },
  "cerizay": { name: "Cerizay", postalCode: "79140", population: "4850" },
  "moncoutant": { name: "Moncoutant-sur-Sèvre", postalCode: "79320", population: "4260" },
  "argenton-les-vallees": { name: "Argenton-les-Vallées", postalCode: "79150", population: "5180" },
  "la-foret-sur-sevre": { name: "La Forêt-sur-Sèvre", postalCode: "79380", population: "2680" },
  "saint-varent": { name: "Saint-Varent", postalCode: "79330", population: "2320" },
  "la-chapelle-saint-laurent": { name: "La Chapelle-Saint-Laurent", postalCode: "79430", population: "2460" },
  "courlay": { name: "Courlay", postalCode: "79440", population: "1980" },
  "oiron": { name: "Oiron", postalCode: "79100", population: "1050" },

  // ── Arrondissement de Parthenay ───────────────────────────────────────────
  "parthenay": { name: "Parthenay", postalCode: "79200", population: "10478" },
  "thouars": { name: "Thouars", postalCode: "79100", population: "9822" },
  "airvault": { name: "Airvault", postalCode: "79600", population: "3280" },
  "secondigny": { name: "Secondigny", postalCode: "79130", population: "1820" },
  "chatillon-sur-thouet": { name: "Châtillon-sur-Thouet", postalCode: "79200", population: "2980" },
  "la-peyratte": { name: "La Peyratte", postalCode: "79200", population: "1620" },
  "argenton-l-eglise": { name: "Argenton-l'Église", postalCode: "79290", population: "1480" },
  "saint-loup-lamaire": { name: "Saint-Loup-Lamairé", postalCode: "79600", population: "1160" },
  "mazieres-en-gatine": { name: "Mazières-en-Gâtine", postalCode: "79310", population: "1580" },
  "champdeniers": { name: "Champdeniers", postalCode: "79220", population: "1950" },

  // ── Communes rurales notables ─────────────────────────────────────────────
  "cersay": { name: "Val en Vignes", postalCode: "79290", population: "3980" },
  "plaine-et-vallees": { name: "Plaine-et-Vallées", postalCode: "79100", population: "6820" },
  "beaussais-vitre": { name: "Beaussais-Vitré", postalCode: "79370", population: "2580" },
  "lezay": { name: "Lezay", postalCode: "79120", population: "1680" },
  "saint-hilaire-la-palud": { name: "Saint-Hilaire-la-Palud", postalCode: "79210", population: "1820" },
  "pamproux": { name: "Pamproux", postalCode: "79800", population: "1560" },
  "la-mothe-saint-heray": { name: "La Mothe-Saint-Héray", postalCode: "79800", population: "1720" },
  "prailles-la-couarde": { name: "Prailles-La Couarde", postalCode: "79370", population: "1620" },
}

export const DEPARTMENT_SLUG = "deux-sevres"
export const DEPARTMENT_NAME = "Deux-Sèvres"
export const DEPARTMENT_POSTAL_CODE = "79"