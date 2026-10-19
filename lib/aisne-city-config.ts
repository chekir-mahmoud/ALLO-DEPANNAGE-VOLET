export interface City {
  name: string
  postalCode: string
  population?: number
}

export const VALID_CITIES: { [key: string]: City } = {
  "saint-quentin": { name: "Saint-Quentin", postalCode: "02100", population: 55483 },
  soissons: { name: "Soissons", postalCode: "02200", population: 28920 },
  laon: { name: "Laon", postalCode: "02000", population: 24558 },
  chauny: { name: "Chauny", postalCode: "02300", population: 12143 },
  tergnier: { name: "Tergnier", postalCode: "02700", population: 12891 },
  villers: { name: "Villers-Cotterêts", postalCode: "02600", population: 8747 },
  "coulommiers-la-tour": { name: "Château-Thierry", postalCode: "02400", population: 12445 },
  belleu: { name: "Belleu", postalCode: "02200", population: 2834 },
  seraucourt: { name: "Séraucourt-le-Grand", postalCode: "02790", population: 1875 },
  vaux: { name: "Vaux-Andigny", postalCode: "02410", population: 1654 },
  oulchy: { name: "Oulchy-le-Château", postalCode: "02210", population: 856 },
  plouich: { name: "Plouich", postalCode: "02000", population: 634 },
  "saint-laurent": { name: "Saint-Laurent-Blangy", postalCode: "02160", population: 2134 },
  conde: { name: "Condé-sur-Aisne", postalCode: "02330", population: 1458 },
  vesles: { name: "Vesles-et-Caumont", postalCode: "02200", population: 564 },
  dury: { name: "Dury", postalCode: "02400", population: 1134 },
  "mont-saint-martin": { name: "Mont-Saint-Martin", postalCode: "02200", population: 2345 },
  bucy: { name: "Bucy-le-Long", postalCode: "02160", population: 1876 },
  ambleny: { name: "Ambleny", postalCode: "02290", population: 478 },
  bosmont: { name: "Bosmont-sur-Serre", postalCode: "02500", population: 234 },
  "guise": { name: "Guise", postalCode: "02120", population: 4800 },
  "hirson": { name: "Hirson", postalCode: "02500", population: 8800 },
  "fere-en-tardenois": { name: "Fère-en-Tardenois", postalCode: "02130", population: 3000 },
  "marle": { name: "Marle", postalCode: "02250", population: 2300 },
  "montcornet": { name: "Montcornet", postalCode: "02340", population: 1400 },
  "sissonne": { name: "Sissonne", postalCode: "02150", population: 2200 },
  "vervins": { name: "Vervins", postalCode: "02140", population: 2500 },
  "rozoy-sur-serre": { name: "Rozoy-sur-Serre", postalCode: "02360", population: 1000 },
  "crecy-sur-serre": { name: "Crécy-sur-Serre", postalCode: "02270", population: 1500 },
  "anizy-le-grand": { name: "Anizy-le-Grand", postalCode: "02320", population: 2000 },
  "trosly-loire": { name: "Trosly-Loire", postalCode: "02300", population: 600 },
  "vic-sur-aisne": { name: "Vic-sur-Aisne", postalCode: "02290", population: 1700 },
  "blerancourt": { name: "Blérancourt", postalCode: "02300", population: 1200 },
  "coucy-le-chateau": { name: "Coucy-le-Château-Auffrique", postalCode: "02380", population: 1000 },
  "saint-gobain": { name: "Saint-Gobain", postalCode: "02410", population: 2200 },
  "essomes-sur-marne": { name: "Essômes-sur-Marne", postalCode: "02400", population: 3000 },
  "etampes-sur-marne": { name: "Étampes-sur-Marne", postalCode: "02400", population: 2800 },
  "neuilly-saint-front": { name: "Neuilly-Saint-Front", postalCode: "02470", population: 2000 },
  "bruyeres-et-montberault": { name: "Bruyères-et-Montbérault", postalCode: "02860", population: 1500 },
  "chavignon": { name: "Chavignon", postalCode: "02000", population: 800 },
  "athies-sous-laon": { name: "Athies-sous-Laon", postalCode: "02840", population: 2600 },
  "gauchy": { name: "Gauchy", postalCode: "02430", population: 5500 },
  "beautor": { name: "Beautor", postalCode: "02800", population: 2600 },
  "terny-sorny": { name: "Terny-Sorny", postalCode: "02880", population: 600 },
  "urvillers": { name: "Urvillers", postalCode: "02690", population: 700 },
  "essigny-le-grand": { name: "Essigny-le-Grand", postalCode: "02690", population: 1100 },
  "ribemont": { name: "Ribemont", postalCode: "02240", population: 2000 },
  "origny-sainte-benoite": { name: "Origny-Sainte-Benoîte", postalCode: "02390", population: 1700 },
  "montigny-en-arrouaise": { name: "Montigny-en-Arrouaise", postalCode: "02110", population: 900 },
  "le-catelet": { name: "Le Catelet", postalCode: "02420", population: 200 },
}

export const DEPARTMENT_SLUG = "aisne"
export const DEPARTMENT_NAME = "Aisne"
export const DEPARTMENT_POSTAL_CODE = "02"
