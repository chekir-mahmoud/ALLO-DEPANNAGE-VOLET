// Mayotte (976) - 17 communes + villages principaux, optimisés SEO
// ⚠️ Mayotte ne compte que 17 communes. Les entrées supplémentaires
//    correspondent aux villages/quartiers les plus recherchés en ligne.
export const VALID_CITIES: { [key: string]: { name: string; slug: string; population: number } } = {

  // Grande-Terre — Nord-Est (zone la plus peuplée)
  "mamoudzou": { name: "Mamoudzou", slug: "mamoudzou", population: 75000 },
  "kaweni": { name: "Kawéni", slug: "kaweni", population: 18000 },
  "cavani": { name: "Cavani", slug: "cavani", population: 12000 },
  "passamainty": { name: "Passamainty", slug: "passamainty", population: 10000 },
  "vahibe": { name: "Vahibé", slug: "vahibe", population: 8000 },
  "trevani": { name: "Trévani", slug: "trevani", population: 7000 },

  "koungou": { name: "Koungou", slug: "koungou", population: 39000 },
  "longoni": { name: "Longoni", slug: "longoni", population: 9000 },
  "kangani": { name: "Kangani", slug: "kangani", population: 5000 },

  "bandraboua": { name: "Bandraboua", slug: "bandraboua", population: 16000 },
  "dzoumogne": { name: "Dzoumogné", slug: "dzoumogne", population: 7000 },
  "bouyouni": { name: "Bouyouni", slug: "bouyouni", population: 4500 },
  "handreme": { name: "Handrema", slug: "handreme", population: 3500 },

  // Petite-Terre
  "dzaoudzi": { name: "Dzaoudzi", slug: "dzaoudzi", population: 20000 },
  "labattoir": { name: "Labattoir", slug: "labattoir", population: 11000 },
  "pamandzi": { name: "Pamandzi", slug: "pamandzi", population: 12000 },

  // Grande-Terre — Sud de Mamoudzou
  "dembeni": { name: "Dembéni", slug: "dembeni", population: 14000 },
  "iloni": { name: "Iloni", slug: "iloni", population: 4000 },
  "tsararano": { name: "Tsararano", slug: "tsararano", population: 3500 },
  "hajangoua": { name: "Hajangoua", slug: "hajangoua", population: 3000 },

  "tsingoni": { name: "Tsingoni", slug: "tsingoni", population: 13000 },
  "mirereni": { name: "Miréréni", slug: "mirereni", population: 4500 },
  "majicavo": { name: "Majicavo", slug: "majicavo", population: 5000 },

  // Grande-Terre — Centre
  "ouangani": { name: "Ouangani", slug: "ouangani", population: 11000 },
  "kahani": { name: "Kahani", slug: "kahani", population: 4000 },
  "coconi": { name: "Coconi", slug: "coconi", population: 3500 },
  "barakani": { name: "Barakani", slug: "barakani", population: 2500 },

  "chiconi": { name: "Chiconi", slug: "chiconi", population: 10000 },
  "mtsapere": { name: "M'tsapéré", slug: "mtsapere", population: 6000 },

  // Grande-Terre — Ouest
  "sada": { name: "Sada", slug: "sada", population: 12000 },
  "mtsangadoua": { name: "M'tsangadoua", slug: "mtsangadoua", population: 4000 },

  "chirongui": { name: "Chirongui", slug: "chirongui", population: 11000 },
  "poroani": { name: "Poroani", slug: "poroani", population: 3500 },
  "malamani": { name: "Malamani", slug: "malamani", population: 3000 },

  "mtsamboro": { name: "Mtsamboro", slug: "mtsamboro", population: 8500 },
  "hamjago": { name: "Hamjago", slug: "hamjago", population: 3500 },

  "acoua": { name: "Acoua", slug: "acoua", population: 6500 },
  "mtsangamouji": { name: "M'Tsangamouji", slug: "mtsangamouji", population: 8000 },

  // Grande-Terre — Sud
  "bandele": { name: "Bandrélé", slug: "bandele", population: 10500 },
  "bambo-est": { name: "Bambo Est", slug: "bambo-est", population: 3500 },
  "nyambadao": { name: "Nyambadao", slug: "nyambadao", population: 2500 },
  "hamouro": { name: "Hamouro", slug: "hamouro", population: 2000 },

  "kani-keli": { name: "Kani-Kéli", slug: "kani-keli", population: 7000 },
  "boueni": { name: "Bouéni", slug: "boueni", population: 6500 },
  "mramadoudou": { name: "Mramadoudou", slug: "mramadoudou", population: 3000 },

  // Villages côtiers / touristiques
  "n-gouja": { name: "N'Gouja", slug: "n-gouja", population: 1500 },
  "saziley": { name: "Saziley", slug: "saziley", population: 800 },
  "mbouanatsa": { name: "Mbouanatsa", slug: "mbouanatsa", population: 1200 },
};