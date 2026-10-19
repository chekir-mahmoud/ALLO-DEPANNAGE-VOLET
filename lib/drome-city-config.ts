// Configuration des villes de la Drôme (26)
export const VALID_CITIES: Record<string, { name: string; postalCode: string; population?: string }> = {
  // Agglomération de Valence
  "valence": { name: "Valence", postalCode: "26000", population: "64000" },
  "bourg-les-valence": { name: "Bourg-lès-Valence", postalCode: "26500", population: "19500" },
  "portes-les-valence": { name: "Portes-lès-Valence", postalCode: "26800", population: "10000" },
  "guilherand-granges": { name: "Guilherand-Granges", postalCode: "07500", population: "12000" },
  "saint-marcel-les-valence": { name: "Saint-Marcel-lès-Valence", postalCode: "26320", population: "6000" },
  "malissard": { name: "Malissard", postalCode: "26120", population: "3500" },
  "chabeuil": { name: "Chabeuil", postalCode: "26120", population: "6500" },
  "soyans": { name: "Soyans", postalCode: "26400", population: "1500" },
  "beaumont-les-valence": { name: "Beaumont-lès-Valence", postalCode: "26760", population: "4000" },
  "romans-sur-isere": { name: "Romans-sur-Isère", postalCode: "26100", population: "34000" },
  "bourg-de-peage": { name: "Bourg-de-Péage", postalCode: "26300", population: "10500" },
  "saint-paul-les-romans": { name: "Saint-Paul-lès-Romans", postalCode: "26750", population: "2000" },

  // Drôme des Collines
  "saint-vallier": { name: "Saint-Vallier", postalCode: "26240", population: "4000" },
  "tain-l-hermitage": { name: "Tain-l'Hermitage", postalCode: "26600", population: "6000" },
  "tournon-sur-rhone": { name: "Tournon-sur-Rhône", postalCode: "07300", population: "11000" },
  "la-roche-de-glun": { name: "La Roche-de-Glun", postalCode: "26600", population: "4000" },
  "crozes-hermitage": { name: "Crozes-Hermitage", postalCode: "26600", population: "600" },

  // Royans-Vercors
  "saint-jean-en-royans": { name: "Saint-Jean-en-Royans", postalCode: "26190", population: "3000" },
  "saint-nazaire-en-royans": { name: "Saint-Nazaire-en-Royans", postalCode: "26190", population: "900" },
  "pont-en-royans": { name: "Pont-en-Royans", postalCode: "38680", population: "850" },
  "die": { name: "Die", postalCode: "26150", population: "4500" },
  "luc-en-diois": { name: "Luc-en-Diois", postalCode: "26310", population: "500" },
  "chatillon-en-diois": { name: "Châtillon-en-Diois", postalCode: "26410", population: "600" },

  // Drôme provençale
  "montelimar": { name: "Montélimar", postalCode: "26200", population: "39000" },
  "pierrelatte": { name: "Pierrelatte", postalCode: "26700", population: "13000" },
  "donzere": { name: "Donzère", postalCode: "26290", population: "5500" },
  "bourg-saint-andeol": { name: "Bourg-Saint-Andéol", postalCode: "07700", population: "7000" },
  "allan": { name: "Allan", postalCode: "26780", population: "1800" },
  "malataverne": { name: "Malataverne", postalCode: "26780", population: "2000" },
  "monteleger": { name: "Montéléger", postalCode: "26760", population: "1500" },
  "chateauneuf-du-rhone": { name: "Châteauneuf-du-Rhône", postalCode: "26780", population: "2500" },

  // Diois
  "crest": { name: "Crest", postalCode: "26400", population: "8500" },
  "livron-sur-drome": { name: "Livron-sur-Drôme", postalCode: "26250", population: "9500" },
  "loriol-sur-drome": { name: "Loriol-sur-Drôme", postalCode: "26270", population: "7000" },
  "saillans": { name: "Saillans", postalCode: "26340", population: "1300" },
  "aouste-sur-sye": { name: "Aouste-sur-Sye", postalCode: "26400", population: "2500" },

  // Baronnies provençales
  "nyons": { name: "Nyons", postalCode: "26110", population: "7000" },
  "buis-les-baronnies": { name: "Buis-les-Baronnies", postalCode: "26170", population: "2300" },
  "saint-paul-trois-chateaux": { name: "Saint-Paul-Trois-Châteaux", postalCode: "26130", population: "9000" },
  "grignan": { name: "Grignan", postalCode: "26230", population: "1600" },
  "valreas": { name: "Valréas", postalCode: "84600", population: "9500" },

  // Tricastin
  "bollene": { name: "Bollène", postalCode: "84500", population: "14000" },
  "saint-paul-trois-chateaux": { name: "Saint-Paul-Trois-Châteaux", postalCode: "26130", population: "9000" },

  // Autres villes
  "dieulefit": { name: "Dieulefit", postalCode: "26220", population: "3000" },
  "grane": { name: "Grane", postalCode: "26400", population: "2000" },
  "alixan": { name: "Alixan", postalCode: "26300", population: "2500" },
  "chatuzange-le-goubet": { name: "Chatuzange-le-Goubet", postalCode: "26300", population: "5000" },
  "etoile-sur-rhone": { name: "Étoile-sur-Rhône", postalCode: "26800", population: "5500" },
  "charmes-sur-rhone": { name: "Charmes-sur-Rhône", postalCode: "07800", population: "3000" },
  "upie": { name: "Upie", postalCode: "26120", population: "1600" },
  "montmeyran": { name: "Montmeyran", postalCode: "26120", population: "3000" },
  "montoison": { name: "Montoison", postalCode: "26800", population: "2000" },
  "cliousclat": { name: "Cliousclat", postalCode: "26270", population: "700" },
  "marsanne": { name: "Marsanne", postalCode: "26740", population: "1300" },
}
