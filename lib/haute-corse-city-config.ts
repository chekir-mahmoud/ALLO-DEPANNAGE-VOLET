// Haute-Corse (2B) - 50 villes et communes optimisées SEO
// Populations INSEE 2023 (millésimées 2026, source : insee.fr / wikipedia)
// Note : Capanelle et Ajaccio sont en Corse-du-Sud (2A) — exclues
export const VALID_CITIES: { [key: string]: { name: string; postalCode: string; population?: string } } = {

  // ── Bastia & agglomération ────────────────────────────────────────────────
  "bastia": { name: "Bastia", postalCode: "20200", population: "48296" },
  "biguglia": { name: "Biguglia", postalCode: "20620", population: "7732" },
  "borgo": { name: "Borgo", postalCode: "20290", population: "9254" },
  "lucciana": { name: "Lucciana", postalCode: "20290", population: "6321" },
  "furiani": { name: "Furiani", postalCode: "20600", population: "5814" },
  "ville-di-pietrabugno": { name: "Ville-di-Pietrabugno", postalCode: "20200", population: "4102" },
  "san-martino-di-lota": { name: "San-Martino-di-Lota", postalCode: "20200", population: "2801" },
  "santa-maria-di-lota": { name: "Santa-Maria-di-Lota", postalCode: "20200", population: "2418" },
  "olmeta-di-tuda": { name: "Olmeta-di-Tuda", postalCode: "20232", population: "650" },
  "murato": { name: "Murato", postalCode: "20239", population: "840" },

  // ── Cap Corse ─────────────────────────────────────────────────────────────
  "brando": { name: "Brando", postalCode: "20222", population: "1602" },
  "nonza": { name: "Nonza", postalCode: "20217", population: "71" },
  "pino": { name: "Pino", postalCode: "20228", population: "132" },
  "macinaggio": { name: "Rogliano (Macinaggio)", postalCode: "20247", population: "887" },
  "canari": { name: "Canari", postalCode: "20217", population: "286" },
  "centuri": { name: "Centuri", postalCode: "20238", population: "222" },
  "olcani": { name: "Olcani", postalCode: "20217", population: "52" },
  "sisco": { name: "Sisco", postalCode: "20233", population: "562" },
  "meria": { name: "Meria", postalCode: "20245", population: "290" },

  // ── Balagne ───────────────────────────────────────────────────────────────
  "calvi": { name: "Calvi", postalCode: "20260", population: "5766" },
  "l-ile-rousse": { name: "L'Île-Rousse", postalCode: "20220", population: "3095" },
  "calenzana": { name: "Calenzana", postalCode: "20214", population: "2520" },
  "lumio": { name: "Lumio", postalCode: "20260", population: "1258" },
  "belgodere": { name: "Belgodère", postalCode: "20226", population: "696" },
  "aregno": { name: "Aregno", postalCode: "20220", population: "597" },
  "monticello": { name: "Monticello", postalCode: "20220", population: "1672" },
  "oletta": { name: "Oletta", postalCode: "20232", population: "1847" },
  "saint-florent": { name: "Saint-Florent", postalCode: "20217", population: "1814" },
  "algajola": { name: "Algajola", postalCode: "20220", population: "358" },
  "corbara": { name: "Corbara", postalCode: "20220", population: "820" },

  // ── Corte & Centre ────────────────────────────────────────────────────────
  "corte": { name: "Corte", postalCode: "20250", population: "7484" },
  "venaco": { name: "Venaco", postalCode: "20231", population: "588" },
  "vivario": { name: "Vivario", postalCode: "20219", population: "542" },
  "morosaglia": { name: "Morosaglia", postalCode: "20218", population: "1188" },
  "castello-di-rostino": { name: "Castello-di-Rostino", postalCode: "20235", population: "600" },
  "calacuccia": { name: "Calacuccia", postalCode: "20224", population: "268" },
  "piedicroce": { name: "Piedicroce", postalCode: "20229", population: "122" },

  // ── Casinca & Côte orientale ──────────────────────────────────────────────
  "penta-di-casinca": { name: "Penta-di-Casinca", postalCode: "20213", population: "3748" },
  "vescovato": { name: "Vescovato", postalCode: "20215", population: "3302" },
  "cervione": { name: "Cervione", postalCode: "20221", population: "1809" },
  "san-nicolao": { name: "San-Nicolao", postalCode: "20230", population: "2090" },
  "santa-lucia-di-moriani": { name: "Santa-Lucia-di-Moriani", postalCode: "20230", population: "1640" },
  "castellare-di-casinca": { name: "Castellare-di-Casinca", postalCode: "20213", population: "2108" },
  "venzolasca": { name: "Venzolasca", postalCode: "20215", population: "1980" },

  // ── Plaine orientale & Sud-Est ────────────────────────────────────────────
  "ghisonaccia": { name: "Ghisonaccia", postalCode: "20240", population: "4183" },
  "aleria": { name: "Aléria", postalCode: "20270", population: "2185" },
  "prunelli-di-fiumorbo": { name: "Prunelli-di-Fiumorbo", postalCode: "20243", population: "3672" },
  "ventiseri": { name: "Ventiseri", postalCode: "20240", population: "1608" },
  "linguizzetta": { name: "Linguizzetta", postalCode: "20230", population: "1048" },
  "antisanti": { name: "Antisanti", postalCode: "20270", population: "556" },
  "solaro": { name: "Solaro", postalCode: "20240", population: "480" },
}

export const DEPARTMENT_SLUG = "haute-corse"
export const DEPARTMENT_NAME = "Haute-Corse"
export const DEPARTMENT_POSTAL_CODE = "2B"