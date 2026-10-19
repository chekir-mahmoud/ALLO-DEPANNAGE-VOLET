// Configuration des villes de la Savoie (73)
export const VALID_CITIES: Record<string, { name: string; postalCode: string; population?: string }> = {
  // Agglomération de Chambéry
  "chambery": { name: "Chambéry", postalCode: "73000", population: "59490" },
  "la-motte-servolex": { name: "La Motte-Servolex", postalCode: "73290", population: "12000" },
  "barberaz": { name: "Barberaz", postalCode: "73000", population: "6000" },
  "cognin": { name: "Cognin", postalCode: "73160", population: "6500" },
  "saint-alban-leysse": { name: "Saint-Alban-Leysse", postalCode: "73230", population: "6500" },
  "bassens": { name: "Bassens", postalCode: "73000", population: "4000" },
  "challes-les-eaux": { name: "Challes-les-Eaux", postalCode: "73190", population: "5500" },
  "la-ravoire": { name: "La Ravoire", postalCode: "73490", population: "8000" },
  "sonnaz": { name: "Sonnaz", postalCode: "73000", population: "2000" },
  "jacob-bellecombette": { name: "Jacob-Bellecombette", postalCode: "73000", population: "3500" },
  "barby": { name: "Barby", postalCode: "73460", population: "2500" },
  "saint-jean-d-arvey": { name: "Saint-Jean-d'Arvey", postalCode: "73230", population: "1000" },
  
  // Aix-les-Bains et le Lac du Bourget
  "aix-les-bains": { name: "Aix-les-Bains", postalCode: "73100", population: "31000" },
  "le-bourget-du-lac": { name: "Le Bourget-du-Lac", postalCode: "73370", population: "4500" },
  "viviers-du-lac": { name: "Viviers-du-Lac", postalCode: "73420", population: "2000" },
  "drumettaz-clarafond": { name: "Drumettaz-Clarafond", postalCode: "73420", population: "3500" },
  "tresserve": { name: "Tresserve", postalCode: "73100", population: "3500" },
  "gresy-sur-aix": { name: "Grésy-sur-Aix", postalCode: "73100", population: "4000" },
  "mouxy": { name: "Mouxy", postalCode: "73100", population: "2000" },
  "puer": { name: "Puygros", postalCode: "73100", population: "1500" },
  
  // Albertville et la Combe de Savoie
  "albertville": { name: "Albertville", postalCode: "73200", population: "19500" },
  "ugine": { name: "Ugine", postalCode: "73400", population: "7000" },
  "grignon": { name: "Grignon", postalCode: "73200", population: "1500" },
  "tours-en-savoie": { name: "Tours-en-Savoie", postalCode: "73790", population: "1500" },
  "frontenex": { name: "Frontenex", postalCode: "73460", population: "2000" },
  "mercury": { name: "Mercury", postalCode: "73200", population: "2000" },
  "gilly-sur-isere": { name: "Gilly-sur-Isère", postalCode: "73200", population: "2500" },
  
  // Maurienne
  "saint-jean-de-maurienne": { name: "Saint-Jean-de-Maurienne", postalCode: "73300", population: "8000" },
  "la-chambre": { name: "La Chambre", postalCode: "73130", population: "1200" },
  "saint-michel-de-maurienne": { name: "Saint-Michel-de-Maurienne", postalCode: "73140", population: "2800" },
  "modane": { name: "Modane", postalCode: "73500", population: "3000" },
  "saint-avre": { name: "Saint-Avre", postalCode: "73130", population: "1000" },
  "la-rochette": { name: "La Rochette", postalCode: "73110", population: "3500" },
  "pontamafrey-montpascal": { name: "Pontamafrey-Montpascal", postalCode: "73300", population: "800" },
  
  // Tarentaise
  "moutiers": { name: "Moûtiers", postalCode: "73600", population: "4000" },
  "bourg-saint-maurice": { name: "Bourg-Saint-Maurice", postalCode: "73700", population: "7500" },
  "aime-la-plagne": { name: "Aime-la-Plagne", postalCode: "73210", population: "4000" },
  "la-lechere": { name: "La Léchère", postalCode: "73260", population: "2000" },
  "notre-dame-de-bellecombe": { name: "Notre-Dame-de-Bellecombe", postalCode: "73590", population: "600" },
  
  // Stations de ski
  "courchevel": { name: "Courchevel", postalCode: "73120", population: "2000" },
  "meribel": { name: "Méribel", postalCode: "73550", population: "1800" },
  "val-thorens": { name: "Val Thorens", postalCode: "73440", population: "400" },
  "les-menuires": { name: "Les Menuires", postalCode: "73440", population: "400" },
  "la-plagne": { name: "La Plagne", postalCode: "73210", population: "2000" },
  "les-arcs": { name: "Les Arcs", postalCode: "73700", population: "1500" },
  "tignes": { name: "Tignes", postalCode: "73320", population: "2500" },
  "val-d-isere": { name: "Val-d'Isère", postalCode: "73150", population: "1700" },
  "la-tania": { name: "La Tania", postalCode: "73600", population: "200" },
  "valmorel": { name: "Valmorel", postalCode: "73260", population: "300" },
  "pralognan-la-vanoise": { name: "Pralognan-la-Vanoise", postalCode: "73710", population: "700" },
  
  // Avant-Pays savoyard
  "pont-de-beauvoisin": { name: "Pont-de-Beauvoisin", postalCode: "73330", population: "5000" },
  "les-echelles": { name: "Les Échelles", postalCode: "73360", population: "1500" },
  "yenne": { name: "Yenne", postalCode: "73170", population: "3000" },
  "saint-genix-les-villages": { name: "Saint-Genix-les-Villages", postalCode: "73240", population: "2500" },
  
  // Chartreuse
  "saint-pierre-d-entremont": { name: "Saint-Pierre-d'Entremont", postalCode: "73670", population: "400" },
  "entremont-le-vieux": { name: "Entremont-le-Vieux", postalCode: "73670", population: "600" },
  "saint-pierre-de-chartreuse": { name: "Saint-Pierre-de-Chartreuse", postalCode: "38380", population: "800" },
  
  // Beaufortain
  "beaufort": { name: "Beaufort", postalCode: "73270", population: "2300" },
  "villard-sur-doron": { name: "Villard-sur-Doron", postalCode: "73270", population: "500" },
  "areches-beaufort": { name: "Arêches-Beaufort", postalCode: "73270", population: "800" },
}
