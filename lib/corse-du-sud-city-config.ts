// Corse-du-Sud (2A) - 50 villes et communes optimisées SEO
// Populations INSEE 2023 (millésimées 2026, source : insee.fr)
// Note : Calvi et Corte sont en Haute-Corse (2B) — exclues
export const VALID_CITIES: { [key: string]: { name: string; postalCode: string; population?: string } } = {

  // ── Ajaccio & périphérie ─────────────────────────────────────────────────
  "ajaccio": { name: "Ajaccio", postalCode: "20000", population: "76320" },
  "bastelicaccia": { name: "Bastelicaccia", postalCode: "20174", population: "4250" },
  "alata": { name: "Alata", postalCode: "20167", population: "2953" },
  "afa": { name: "Afa", postalCode: "20167", population: "2843" },
  "grosseto-prugna": { name: "Grosseto-Prugna", postalCode: "20128", population: "2601" },
  "sarrola-carcopino": { name: "Sarrola-Carcopino", postalCode: "20167", population: "2134" },
  "cuttoli-corticchiato": { name: "Cuttoli-Corticchiato", postalCode: "20138", population: "2035" },
  "peri": { name: "Péri", postalCode: "20167", population: "1750" },
  "appietto": { name: "Appietto", postalCode: "20151", population: "1680" },
  "eccica-suarella": { name: "Eccica-Suarella", postalCode: "20117", population: "1560" },

  // ── Golfe du Valinco & Sartenais ─────────────────────────────────────────
  "sartene": { name: "Sartène", postalCode: "20100", population: "3259" },
  "propriano": { name: "Propriano", postalCode: "20110", population: "3996" },
  "olmeto": { name: "Olmeto", postalCode: "20113", population: "1200" },
  "sollacaro": { name: "Sollacaro", postalCode: "20140", population: "730" },
  "viggianello": { name: "Viggianello", postalCode: "20110", population: "620" },
  "belvedere-campomoro": { name: "Belvédère-Campomoro", postalCode: "20110", population: "159" },
  "petreto-bicchisano": { name: "Petreto-Bicchisano", postalCode: "20140", population: "580" },
  "serra-di-ferro": { name: "Serra-di-Ferro", postalCode: "20140", population: "380" },

  // ── Extrême-Sud : Bonifacio & Porto-Vecchio ──────────────────────────────
  "porto-vecchio": { name: "Porto-Vecchio", postalCode: "20137", population: "11198" },
  "bonifacio": { name: "Bonifacio", postalCode: "20169", population: "3204" },
  "figari": { name: "Figari", postalCode: "20114", population: "1280" },
  "lecci": { name: "Lecci", postalCode: "20137", population: "2080" },
  "conca": { name: "Conca", postalCode: "20135", population: "1151" },
  "sotta": { name: "Sotta", postalCode: "20146", population: "900" },
  "zonza": { name: "Zonza", postalCode: "20124", population: "2341" },
  "levie": { name: "Levie", postalCode: "20170", population: "750" },
  "carbini": { name: "Carbini", postalCode: "20170", population: "114" },

  // ── Alta Rocca & Montagne ────────────────────────────────────────────────
  "quenza": { name: "Quenza", postalCode: "20122", population: "320" },
  "aullene": { name: "Aullène", postalCode: "20116", population: "190" },
  "zicavo": { name: "Zicavo", postalCode: "20132", population: "270" },
  "cozzano": { name: "Cozzano", postalCode: "20148", population: "278" },
  "bocognano": { name: "Bocognano", postalCode: "20136", population: "372" },
  "bastelica": { name: "Bastelica", postalCode: "20119", population: "720" },

  // ── Côte Ouest : Golfe d'Ajaccio au Golfe de Porto ──────────────────────
  "cargese": { name: "Cargèse", postalCode: "20130", population: "1280" },
  "vico": { name: "Vico", postalCode: "20160", population: "975" },
  "coggia": { name: "Coggia", postalCode: "20160", population: "722" },
  "evisa": { name: "Évisa", postalCode: "20126", population: "230" },
  "ota": { name: "Ota", postalCode: "20150", population: "500" },
  "casaglione": { name: "Casaglione", postalCode: "20111", population: "384" },
  "calcatoggio": { name: "Calcatoggio", postalCode: "20111", population: "503" },
  "albitreccia": { name: "Albitreccia", postalCode: "20128", population: "1400" },
  "pietrosella": { name: "Pietrosella", postalCode: "20166", population: "1200" },
  "coti-chiavari": { name: "Coti-Chiavari", postalCode: "20138", population: "724" },

  // ── Intérieur & vallées ──────────────────────────────────────────────────
  "santa-maria-siche": { name: "Santa-Maria-Siché", postalCode: "20190", population: "680" },
  "cauro": { name: "Cauro", postalCode: "20117", population: "1492" },
  "carbuccia": { name: "Carbuccia", postalCode: "20133", population: "375" },
  "tavaco": { name: "Tavaco", postalCode: "20167", population: "750" },
  "ucciani": { name: "Ucciani", postalCode: "20133", population: "450" },
  "valle-di-mezzana": { name: "Valle-di-Mezzana", postalCode: "20167", population: "900" },
  "ocana": { name: "Ocana", postalCode: "20117", population: "480" },
}

export const DEPARTMENT_SLUG = "corse-du-sud"
export const DEPARTMENT_NAME = "Corse-du-Sud"
export const DEPARTMENT_POSTAL_CODE = "2A"