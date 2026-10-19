// Haute-Saône (70) - 50 villes optimisées SEO
// Populations légales INSEE en vigueur au 1er janvier 2026 (recensement 2023)
// Note : Cirey-sur-Vézouse est en Meurthe-et-Moselle (54), Nods est dans le Doubs (25) — exclus
export const VALID_CITIES: { [key: string]: { name: string; postalCode: string; population: string } } = {

  // ── Arrondissement de Vesoul ──────────────────────────────────────────────
  "vesoul": { name: "Vesoul", postalCode: "70000", population: "17226" },
  "frotey-les-vesoul": { name: "Frotey-lès-Vesoul", postalCode: "70000", population: "2280" },
  "noidans-les-vesoul": { name: "Noidans-lès-Vesoul", postalCode: "70000", population: "2650" },
  "pusey": { name: "Pusey", postalCode: "70000", population: "2480" },
  "echenoz-le-sec": { name: "Échenoz-le-Sec", postalCode: "70000", population: "850" },
  "vaivre-et-montoille": { name: "Vaivre-et-Montoille", postalCode: "70000", population: "2480" },
  "port-sur-saone": { name: "Port-sur-Saône", postalCode: "70170", population: "2890" },
  "dampierre-sur-linotte": { name: "Dampierre-sur-Linotte", postalCode: "70230", population: "820" },
  "la-demie": { name: "La Demie", postalCode: "70000", population: "1580" },
  "scey-sur-saone-et-saint-albin": { name: "Scey-sur-Saône-et-Saint-Albin", postalCode: "70360", population: "1820" },
  "combeaufontaine": { name: "Combeaufontaine", postalCode: "70120", population: "680" },
  "jussey": { name: "Jussey", postalCode: "70500", population: "1800" },

  // ── Arrondissement de Lure ────────────────────────────────────────────────
  "lure": { name: "Lure", postalCode: "70200", population: "8524" },
  "luxeuil-les-bains": { name: "Luxeuil-les-Bains", postalCode: "70300", population: "7962" },
  "hericourt": { name: "Héricourt", postalCode: "70400", population: "10678" },
  "fougerolles-saint-valbert": { name: "Fougerolles-Saint-Valbert", postalCode: "70220", population: "4039" },
  "saint-loup-sur-semouse": { name: "Saint-Loup-sur-Semouse", postalCode: "70800", population: "3837" },
  "champagney": { name: "Champagney", postalCode: "70290", population: "3920" },
  "ronchamp": { name: "Ronchamp", postalCode: "70250", population: "2800" },
  "aillevillers-et-lyaumont": { name: "Aillevillers-et-Lyaumont", postalCode: "70320", population: "1488" },
  "melisey": { name: "Mélisey", postalCode: "70270", population: "1820" },
  "frahier-et-chatebier": { name: "Frahier-et-Chatebier", postalCode: "70400", population: "1460" },
  "saint-germain": { name: "Saint-Germain", postalCode: "70200", population: "1900" },
  "andornay": { name: "Andornay", postalCode: "70200", population: "1050" },
  "villersexel": { name: "Villersexel", postalCode: "70110", population: "1480" },
  "le-val-saint-eloi": { name: "Le Val-Saint-Éloi", postalCode: "70160", population: "1360" },

  // ── Arrondissement de Gray ────────────────────────────────────────────────
  "gray": { name: "Gray", postalCode: "70100", population: "6578" },
  "pesmes": { name: "Pesmes", postalCode: "70140", population: "1100" },
  "champlitte": { name: "Champlitte", postalCode: "70600", population: "1634" },
  "gy": { name: "Gy", postalCode: "70700", population: "980" },
  "rioz": { name: "Rioz", postalCode: "70190", population: "1680" },
  "montbozon": { name: "Montbozon", postalCode: "70230", population: "960" },
  "seveux-motey": { name: "Seveux-Motey", postalCode: "70130", population: "640" },
  "ray-sur-saone": { name: "Ray-sur-Saône", postalCode: "70130", population: "520" },
  "saint-marcel": { name: "Saint-Marcel", postalCode: "70500", population: "1020" },

  // ── Communes rurales notables ─────────────────────────────────────────────
  "quenoche": { name: "Quenoche", postalCode: "70190", population: "450" },
  "pennesot": { name: "Pennesot", postalCode: "70140", population: "180" },
  "sornay": { name: "Sornay", postalCode: "70150", population: "560" },
  "hautevelle": { name: "Hautevelle", postalCode: "70400", population: "550" },
  "bonboillon": { name: "Bonboillon", postalCode: "70700", population: "210" },
  "gevigney-et-mercey": { name: "Gévigney-et-Mercey", postalCode: "70500", population: "290" },
  "noidans-le-ferroux": { name: "Noidans-le-Ferroux", postalCode: "70190", population: "1180" },
  "mercey-sur-saone": { name: "Mercey-sur-Saône", postalCode: "70130", population: "310" },
  "calmoutier": { name: "Calmoutier", postalCode: "70240", population: "620" },
  "corravillers": { name: "Corravillers", postalCode: "70310", population: "280" },
  "esmoulieres": { name: "Esmoulières", postalCode: "70310", population: "190" },
  "adelans-et-le-val-de-bithaine": { name: "Adelans-et-le-Val-de-Bithaine", postalCode: "70200", population: "311" },
  "aboncourt-gesincourt": { name: "Aboncourt-Gesincourt", postalCode: "70500", population: "216" },
  "fleurey-les-lavoncourt": { name: "Fleurey-lès-Lavoncourt", postalCode: "70120", population: "290" },
  "montureux-et-prantigny": { name: "Montureux-et-Prantigny", postalCode: "70100", population: "350" },
}

export const DEPARTMENT_SLUG = "haute-saone"
export const DEPARTMENT_NAME = "Haute-Saône"
export const DEPARTMENT_POSTAL_CODE = "70"