export interface City {
  name: string
  postalCode: string
  population?: number
}

export const VALID_CITIES: { [key: string]: City } = {
  dijon: { name: "Dijon", postalCode: "21000", population: 156087 },
  beaune: { name: "Beaune", postalCode: "21200", population: 21508 },
  nuits: { name: "Nuits-Saint-Georges", postalCode: "21700", population: 4842 },
  gevrey: { name: "Gevrey-Chambertin", postalCode: "21220", population: 3291 },
  montbard: { name: "Montbard", postalCode: "21500", population: 5537 },
  auxonne: { name: "Auxonne", postalCode: "21130", population: 2443 },
  chenove: { name: "Chenôve", postalCode: "21300", population: 6589 },
  talant: { name: "Talant", postalCode: "21240", population: 8356 },
  longvic: { name: "Longvic", postalCode: "21600", population: 9012 },
  fontaines: { name: "Fontaines-lès-Dijon", postalCode: "21121", population: 4625 },
  marsannay: { name: "Marsannay-la-Côte", postalCode: "21160", population: 5847 },
  couchey: { name: "Couchey", postalCode: "21160", population: 1234 },
  fixin: { name: "Fixin", postalCode: "21160", population: 850 },
  meursault: { name: "Meursault", postalCode: "21190", population: 1562 },
  puligny: { name: "Puligny-Montrachet", postalCode: "21190", population: 456 },
  santenay: { name: "Santenay", postalCode: "21590", population: 888 },
  semur: { name: "Semur-en-Auxois", postalCode: "21140", population: 4175 },
  tonnerre: { name: "Tonnerre", postalCode: "89700", population: 6800 },
  chatillon: { name: "Châtillon-sur-Seine", postalCode: "21400", population: 2876 },
  arcenant: { name: "Arcenant", postalCode: "21700", population: 245 },
  alise: { name: "Alise-Sainte-Reine", postalCode: "21150", population: 1100 },
  villers: { name: "Villers-la-Faye", postalCode: "21400", population: 320 },
  montigny: { name: "Montigny-Montfort", postalCode: "21500", population: 420 },
  marcenay: { name: "Marcenay", postalCode: "21360", population: 350 },
  "is-sur-tille": { name: "Is-sur-Tille", postalCode: "21120", population: 3300 },
  vitteaux: { name: "Vitteaux", postalCode: "21350", population: 1800 },
  lux: { name: "Lux", postalCode: "21270", population: 1100 },
  nerveux: { name: "Nerveux", postalCode: "21200", population: 520 },
  gissey: { name: "Gissey-sur-Ouche", postalCode: "21360", population: 600 },
  sombernon: { name: "Sombernon", postalCode: "21540", population: 950 },
  meilly: { name: "Meilly-sur-Rouvres", postalCode: "21360", population: 450 },
  pluvault: { name: "Pluvault", postalCode: "21110", population: 480 },
  commarin: { name: "Commarin", postalCode: "21190", population: 300 },
  prenois: { name: "Prenois", postalCode: "21370", population: 500 },
  beze: { name: "Bèze", postalCode: "21310", population: 800 },
  noisiel: { name: "Noiron-sous-Gevrey", postalCode: "21910", population: 450 },
  lantenay: { name: "Lantenay", postalCode: "21370", population: 300 },
  montceau: { name: "Montceau-et-Echarnant", postalCode: "21220", population: 200 },
  marey: { name: "Marey-sur-Tille", postalCode: "21120", population: 430 },
  labergement: { name: "Labergement-lès-Seurre", postalCode: "21820", population: 620 },
  thenissey: { name: "Thenissey", postalCode: "21310", population: 150 },
  burgonde: { name: "Burgonde", postalCode: "21290", population: 700 },
  tailly: { name: "Tailly", postalCode: "21120", population: 180 },
  saintjean: { name: "Saint-Jean-de-Losne", postalCode: "21170", population: 2800 },
  lamarche: { name: "La Marche", postalCode: "21150", population: 150 },
  chaumont: { name: "Chaumont-le-Bois", postalCode: "21360", population: 210 },
  bligny: { name: "Bligny-sur-Ouche", postalCode: "21360", population: 650 },
  tichey: { name: "Tichey", postalCode: "21200", population: 220 },
  rouvres: { name: "Rouvres-sous-Meilly", postalCode: "21360", population: 180 },
}

export const DEPARTMENT_SLUG = "cote-d-or"
export const DEPARTMENT_NAME = "Côte-d'Or"
export const DEPARTMENT_POSTAL_CODE = "21"