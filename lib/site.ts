export const SITE_URL = "https://www.debarras-proximite.fr"
export const SITE_NAME = "Débarras Proximité"

// Adresse du siège (données structurées Google), identique aux mentions légales
export const COMPANY_ADDRESS = {
  "@type": "PostalAddress",
  streetAddress: "77 rue Calixte Camelle",
  postalCode: "33130",
  addressLocality: "Bègles",
  addressRegion: "Gironde",
  addressCountry: "FR",
}

// Ville de référence (pages détaillées des prestations, ville mise en avant en Gironde).
// La page d'accueil est nationale : Bordeaux a sa propre URL /gironde/bordeaux.
export const HOME_DEPARTMENT = "gironde"
export const HOME_CITY = "bordeaux"

export const departmentPath = (departmentSlug: string) => `/${departmentSlug}`

export const cityPath = (departmentSlug: string, villeSlug: string) => `/${departmentSlug}/${villeSlug}`

// Page nationale d'une prestation (sans ville)
export const servicePath = (sousServiceSlug: string) => `/nos-services/${sousServiceSlug}`

export const sousServicePath = (departmentSlug: string, villeSlug: string, sousServiceSlug: string) =>
  `/${departmentSlug}/${villeSlug}/${sousServiceSlug}`
