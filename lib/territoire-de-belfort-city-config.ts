// Territoire de Belfort (90) - Toutes les communes SEO-utiles (~50)
// Populations légales INSEE en vigueur au 1er janvier 2026 (recensement 2023)
// Note : Montbéliard est dans le Doubs (25), Dung dans le Doubs (25),
//        Bourbach-le-Bas/-Haut dans le Haut-Rhin (68) — tous exclus
// Note : le département ne compte que 101 communes au total
export const VALID_CITIES: { [key: string]: { name: string; postalCode: string; population: string } } = {

  // ── Belfort & agglomération immédiate ────────────────────────────────────
  "belfort": { name: "Belfort", postalCode: "90000", population: "45912" },
  "valdoie": { name: "Valdoie", postalCode: "90300", population: "5269" },
  "bavilliers": { name: "Bavilliers", postalCode: "90800", population: "4678" },
  "danjoutin": { name: "Danjoutin", postalCode: "90400", population: "3719" },
  "offemont": { name: "Offemont", postalCode: "90300", population: "3995" },
  "essert": { name: "Essert", postalCode: "90850", population: "3287" },
  "cravanche": { name: "Cravanche", postalCode: "90300", population: "1954" },
  "dorans": { name: "Dorans", postalCode: "90400", population: "1418" },
  "denney": { name: "Denney", postalCode: "90400", population: "1380" },
  "andelnans": { name: "Andelnans", postalCode: "90400", population: "1093" },
  "vescemont": { name: "Vescemont", postalCode: "90200", population: "748" },
  "eloie": { name: "Éloie", postalCode: "90300", population: "878" },
  "vezelois": { name: "Vézelois", postalCode: "90400", population: "930" },
  "roppe": { name: "Roppe", postalCode: "90380", population: "1065" },
  "bermont": { name: "Bermont", postalCode: "90400", population: "358" },
  "bessoncourt": { name: "Bessoncourt", postalCode: "90200", population: "1309" },

  // ── Ceinture sud & ouest de Belfort ───────────────────────────────────────
  "chatenois-les-forges": { name: "Châtenois-les-Forges", postalCode: "90700", population: "2747" },
  "evette-salbert": { name: "Évette-Salbert", postalCode: "90350", population: "2065" },
  "chevremont": { name: "Chèvremont", postalCode: "90340", population: "1615" },
  "bourogne": { name: "Bourogne", postalCode: "90140", population: "1904" },
  "foussemagne": { name: "Foussemagne", postalCode: "90150", population: "904" },
  "rougegoutte": { name: "Rougegoutte", postalCode: "90200", population: "878" },
  "fontaine": { name: "Fontaine", postalCode: "90150", population: "1580" },
  "lacollonge": { name: "Lacollonge", postalCode: "90400", population: "620" },
  "lariviere": { name: "Larivière", postalCode: "90150", population: "480" },
  "feche-l-eglise": { name: "Fêche-l'Église", postalCode: "90100", population: "1180" },
  "courcelles": { name: "Courcelles", postalCode: "90100", population: "588" },
  "recouvrance": { name: "Recouvrance", postalCode: "90140", population: "350" },

  // ── Delle & frontière suisse ──────────────────────────────────────────────
  "delle": { name: "Delle", postalCode: "90100", population: "5667" },
  "joncherey": { name: "Joncherey", postalCode: "90100", population: "1580" },
  "rechesy": { name: "Réchésy", postalCode: "90370", population: "714" },
  "faverois": { name: "Faverois", postalCode: "90100", population: "542" },
  "lebetain": { name: "Lebetain", postalCode: "90100", population: "422" },
  "morvillars": { name: "Morvillars", postalCode: "90110", population: "1045" },
  "grandvillars": { name: "Grandvillars", postalCode: "90600", population: "3015" },
  "beaucourt": { name: "Beaucourt", postalCode: "90500", population: "4966" },
  "meroux-moval": { name: "Meroux-Moval", postalCode: "90400", population: "1780" },
  "trevenans": { name: "Trévenans", postalCode: "90400", population: "1420" },
  "florimont": { name: "Florimont", postalCode: "90100", population: "568" },
  "courtelevant": { name: "Courtelevant", postalCode: "90100", population: "342" },

  // ── Giromagny & Ballon d'Alsace ───────────────────────────────────────────
  "giromagny": { name: "Giromagny", postalCode: "90200", population: "3129" },
  "rougemont-le-chateau": { name: "Rougemont-le-Château", postalCode: "90110", population: "1720" },
  "etueffont": { name: "Étueffont", postalCode: "90170", population: "1612" },
  "lachapelle-sous-chaux": { name: "Lachapelle-sous-Chaux", postalCode: "90170", population: "620" },
  "auxelles-bas": { name: "Auxelles-Bas", postalCode: "90200", population: "417" },
  "auxelles-haut": { name: "Auxelles-Haut", postalCode: "90200", population: "287" },
  "anjoutey": { name: "Anjoutey", postalCode: "90170", population: "611" },
  "romagny-sous-rougemont": { name: "Romagny-sous-Rougemont", postalCode: "90110", population: "960" },
  "lepuix": { name: "Lepuix", postalCode: "90200", population: "780" },
  "lamadeleine-val-des-anges": { name: "Lamadeleine-Val-des-Anges", postalCode: "90170", population: "320" },
}

export const DEPARTMENT_SLUG = "territoire-de-belfort"
export const DEPARTMENT_NAME = "Territoire de Belfort"
export const DEPARTMENT_POSTAL_CODE = "90"