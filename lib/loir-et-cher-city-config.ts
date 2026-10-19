// Loir-et-Cher (41) - 50 villes optimisées SEO
export const VALID_CITIES: { [key: string]: { name: string; slug: string; population: number } } = {

  // Région de Blois (arrondissement de Blois)
  "blois": { name: "Blois", slug: "blois", population: 46813 },
  "vineuil": { name: "Vineuil", slug: "vineuil", population: 8067 },
  "la-chaussee-saint-victor": { name: "La Chaussée-Saint-Victor", slug: "la-chaussee-saint-victor", population: 4501 },
  "saint-gervais-la-foret": { name: "Saint-Gervais-la-Forêt", slug: "saint-gervais-la-foret", population: 3400 },
  "villebarou": { name: "Villebarou", slug: "villebarou", population: 2800 },
  "saint-denis-sur-loire": { name: "Saint-Denis-sur-Loire", slug: "saint-denis-sur-loire", population: 2200 },
  "menars": { name: "Ménars", slug: "menars", population: 1500 },
  "mont-pres-chambord": { name: "Mont-près-Chambord", slug: "mont-pres-chambord", population: 3200 },
  "cellettes": { name: "Cellettes", slug: "cellettes", population: 2500 },
  "saint-sulpice-de-pommeray": { name: "Saint-Sulpice-de-Pommeray", slug: "saint-sulpice-de-pommeray", population: 1800 },

  // Région Châteaux de la Loire / Val de Loire
  "veuzain-sur-loire": { name: "Veuzain-sur-Loire", slug: "veuzain-sur-loire", population: 3556 },
  "chaumont-sur-loire": { name: "Chaumont-sur-Loire", slug: "chaumont-sur-loire", population: 1100 },
  "cande-sur-beuvron": { name: "Candé-sur-Beuvron", slug: "cande-sur-beuvron", population: 1500 },
  "chambord": { name: "Chambord", slug: "chambord", population: 200 },
  "bracieux": { name: "Bracieux", slug: "bracieux", population: 1400 },
  "muides-sur-loire": { name: "Muides-sur-Loire", slug: "muides-sur-loire", population: 1300 },
  "saint-dye-sur-loire": { name: "Saint-Dyé-sur-Loire", slug: "saint-dye-sur-loire", population: 1100 },
  "mer": { name: "Mer", slug: "mer", population: 6235 },
  "saint-laurent-nouan": { name: "Saint-Laurent-Nouan", slug: "saint-laurent-nouan", population: 4343 },

  // Région de Vendôme (arrondissement de Vendôme)
  "vendome": { name: "Vendôme", slug: "vendome", population: 15747 },
  "montoire-sur-le-loir": { name: "Montoire-sur-le-Loir", slug: "montoire-sur-le-loir", population: 3808 },
  "beauce-la-romaine": { name: "Beauce la Romaine", slug: "beauce-la-romaine", population: 3473 },
  "mondoubleau": { name: "Mondoubleau", slug: "mondoubleau", population: 1600 },
  "savigny-sur-braye": { name: "Savigny-sur-Braye", slug: "savigny-sur-braye", population: 1400 },
  "lavardin": { name: "Lavardin", slug: "lavardin", population: 300 },
  "naveil": { name: "Naveil", slug: "naveil", population: 2500 },
  "moree": { name: "Morée", slug: "moree", population: 1500 },
  "droue": { name: "Droué", slug: "droue", population: 1100 },

  // Région de Romorantin (arrondissement de Romorantin-Lanthenay)
  "romorantin-lanthenay": { name: "Romorantin-Lanthenay", slug: "romorantin-lanthenay", population: 18115 },
  "salbris": { name: "Salbris", slug: "salbris", population: 4897 },
  "lamotte-beuvron": { name: "Lamotte-Beuvron", slug: "lamotte-beuvron", population: 4565 },
  "le-controis-en-sologne": { name: "Le Controis-en-Sologne", slug: "le-controis-en-sologne", population: 6719 },
  "selles-sur-cher": { name: "Selles-sur-Cher", slug: "selles-sur-cher", population: 4590 },
  "montrichard-val-de-cher": { name: "Montrichard Val de Cher", slug: "montrichard-val-de-cher", population: 3816 },
  "saint-aignan": { name: "Saint-Aignan", slug: "saint-aignan", population: 3000 },
  "noyers-sur-cher": { name: "Noyers-sur-Cher", slug: "noyers-sur-cher", population: 2600 },
  "villefranche-sur-cher": { name: "Villefranche-sur-Cher", slug: "villefranche-sur-cher", population: 2500 },
  "mennetou-sur-cher": { name: "Mennetou-sur-Cher", slug: "mennetou-sur-cher", population: 900 },
  "selles-saint-denis": { name: "Selles-Saint-Denis", slug: "selles-saint-denis", population: 1100 },

  // Sologne — villes stratégiques SEO
  "nouan-le-fuzelier": { name: "Nouan-le-Fuzelier", slug: "nouan-le-fuzelier", population: 2200 },
  "neung-sur-beuvron": { name: "Neung-sur-Beuvron", slug: "neung-sur-beuvron", population: 1400 },
  "pierrefitte-sur-sauldre": { name: "Pierrefitte-sur-Sauldre", slug: "pierrefitte-sur-sauldre", population: 900 },
  "la-ferte-saint-cyr": { name: "La Ferté-Saint-Cyr", slug: "la-ferte-saint-cyr", population: 900 },
  "souvigny-en-sologne": { name: "Souvigny-en-Sologne", slug: "souvigny-en-sologne", population: 700 },

  // Pays des Châteaux — villes touristiques SEO
  "cheverny": { name: "Cheverny", slug: "cheverny", population: 1000 },
  "cour-cheverny": { name: "Cour-Cheverny", slug: "cour-cheverny", population: 2700 },
  "fougeres-sur-bievre": { name: "Fougères-sur-Bièvre", slug: "fougeres-sur-bievre", population: 900 },
  "pontlevoy": { name: "Pontlevoy", slug: "pontlevoy", population: 1500 },
  "saint-romain-sur-cher": { name: "Saint-Romain-sur-Cher", slug: "saint-romain-sur-cher", population: 2000 },
  "thesee": { name: "Thésée", slug: "thesee", population: 1200 },
};