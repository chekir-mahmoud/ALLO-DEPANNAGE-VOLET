// Dordogne (24) - 50 villes optimisées SEO
// Populations INSEE 2023 (millésimées 2026, source : insee.fr / wikipedia)
export const VALID_CITIES: { [key: string]: { name: string; postalCode: string; population: string } } = {

  // ── Arrondissement de Périgueux ───────────────────────────────────────────
  "perigueux": { name: "Périgueux", postalCode: "24000", population: "29055" },
  "boulazac-isle-manoire": { name: "Boulazac Isle Manoire", postalCode: "24750", population: "10759" },
  "coulounieix-chamiers": { name: "Coulounieix-Chamiers", postalCode: "24660", population: "7832" },
  "trelissac": { name: "Trélissac", postalCode: "24750", population: "7372" },
  "chancelade": { name: "Chancelade", postalCode: "24650", population: "4380" },
  "saint-astier": { name: "Saint-Astier", postalCode: "24110", population: "6584" },
  "marsac-sur-l-isle": { name: "Marsac-sur-l'Isle", postalCode: "24430", population: "3580" },
  "saint-pierre-de-chignac": { name: "Saint-Pierre-de-Chignac", postalCode: "24330", population: "1840" },
  "bassillac-et-auberoche": { name: "Bassillac et Auberoche", postalCode: "24330", population: "4210" },
  "sanilhac": { name: "Sanilhac", postalCode: "24660", population: "3900" },
  "razac-sur-l-isle": { name: "Razac-sur-l'Isle", postalCode: "24430", population: "3200" },
  "thenon": { name: "Thenon", postalCode: "24210", population: "1600" },
  "excideuil": { name: "Excideuil", postalCode: "24160", population: "1480" },
  "sorges-et-ligueux-en-perigord": { name: "Sorges et Ligueux en Périgord", postalCode: "24420", population: "1639" },
  "hautefort": { name: "Hautefort", postalCode: "24390", population: "1080" },

  // ── Arrondissement de Nontron (Périgord Vert) ─────────────────────────────
  "nontron": { name: "Nontron", postalCode: "24300", population: "3070" },
  "thiviers": { name: "Thiviers", postalCode: "24800", population: "3050" },
  "brantome-en-perigord": { name: "Brantôme en Périgord", postalCode: "24310", population: "3748" },
  "jumilhac-le-grand": { name: "Jumilhac-le-Grand", postalCode: "24630", population: "1400" },
  "saint-pardoux-la-riviere": { name: "Saint-Pardoux-la-Rivière", postalCode: "24470", population: "1420" },
  "mareuil-en-perigord": { name: "Mareuil en Périgord", postalCode: "24340", population: "2650" },
  "pieguet-pluviers": { name: "Piégut-Pluviers", postalCode: "24360", population: "1080" },

  // ── Arrondissement de Bergerac (Périgord Pourpre) ─────────────────────────
  "bergerac": { name: "Bergerac", postalCode: "24100", population: "27110" },
  "mussidan": { name: "Mussidan", postalCode: "24400", population: "2850" },
  "lalinde": { name: "Lalinde", postalCode: "24150", population: "4959" },
  "le-buisson-de-cadouin": { name: "Le Buisson-de-Cadouin", postalCode: "24480", population: "1960" },
  "riberac": { name: "Ribérac", postalCode: "24600", population: "4625" },
  "eymet": { name: "Eymet", postalCode: "24500", population: "2750" },
  "montpon-menesterol": { name: "Montpon-Ménestérol", postalCode: "24700", population: "5380" },
  "issigeac": { name: "Issigeac", postalCode: "24560", population: "720" },
  "monbazillac": { name: "Monbazillac", postalCode: "24240", population: "1050" },
  "prigonrieux": { name: "Prigonrieux", postalCode: "24130", population: "3200" },
  "la-force": { name: "La Force", postalCode: "24130", population: "2400" },
  "saint-aulaye-puymangou": { name: "Saint-Aulaye-Puymangou", postalCode: "24410", population: "2150" },
  "sigoules-et-flaugeac": { name: "Sigoulès-et-Flaugeac", postalCode: "24240", population: "1251" },

  // ── Arrondissement de Sarlat (Périgord Noir) ──────────────────────────────
  "sarlat-la-caneda": { name: "Sarlat-la-Canéda", postalCode: "24200", population: "8763" },
  "terrasson-lavilledieu": { name: "Terrasson-Lavilledieu", postalCode: "24120", population: "6218" },
  "montignac-lascaux": { name: "Montignac-Lascaux", postalCode: "24290", population: "3100" },
  "le-lardin-saint-lazare": { name: "Le Lardin-Saint-Lazare", postalCode: "24570", population: "1980" },
  "saint-cyprien": { name: "Saint-Cyprien", postalCode: "24220", population: "1660" },
  "les-eyzies": { name: "Les Eyzies", postalCode: "24620", population: "2970" },
  "domme": { name: "Domme", postalCode: "24250", population: "1120" },
  "beynac-et-cazenac": { name: "Beynac-et-Cazenac", postalCode: "24220", population: "530" },
  "castels-et-bezenac": { name: "Castels et Bézenac", postalCode: "24220", population: "2140" },
  "coly-saint-amand": { name: "Coly-Saint-Amand", postalCode: "24120", population: "750" },
  "villefranche-du-perigord": { name: "Villefranche-du-Périgord", postalCode: "24550", population: "850" },
  "monpazier": { name: "Monpazier", postalCode: "24540", population: "520" },
  "pays-de-belves": { name: "Pays-de-Belvès", postalCode: "24170", population: "1310" },
  "salignac-eyvigues": { name: "Salignac-Eyvigues", postalCode: "24590", population: "1560" },
  "vitrac": { name: "Vitrac", postalCode: "24200", population: "826" },
}

export const DEPARTMENT_SLUG = "dordogne"
export const DEPARTMENT_NAME = "Dordogne"
export const DEPARTMENT_POSTAL_CODE = "24"
