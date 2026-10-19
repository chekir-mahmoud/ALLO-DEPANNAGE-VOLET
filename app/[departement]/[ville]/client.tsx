"use client"
import { COMPANY_ADDRESS, SITE_URL, cityPath } from "@/lib/site"
import type React from "react"
import { useState, useEffect } from "react"
import Image from "next/image"
import Link from "next/link"
import { notFound } from "next/navigation"
import { Button } from "@/components/ui/button"
import { Card, CardContent } from "@/components/ui/card"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { Phone, MapPin, CheckCircle2, FileText, Users, ShieldCheck, ChevronRight } from "lucide-react"
import DepartmentMap from "@/components/department-map"
import Header from "@/components/header"
import QuoteFormHeading from "@/components/quote-form-heading"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/QuoteForm"
import type { Testimonial } from "@/lib/testimonials"
import type { ResolvedSousServiceConfig } from "@/lib/sous-services/debarras-maison"
import { replaceTestimonialCitiesWithDepartmentCities } from "@/lib/testimonials"
import DynamicHead from "@/components/DynamicHead"
import FloatingButtons from "@/components/FloatingButtons"
import RealisationsSection from "@/components/sections/realisations-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import TarifsSection from "@/components/sections/tarifs-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import WhyChooseUsSection from "@/components/sections/why-choose-us-section"
import FormulesSection from "@/components/sections/formules-section"
import { getDepartmentAreaPhrase } from "@/lib/department-area-phrase"

interface ClientVillePageProps {
  cityData: { name: string; postalCode: string; population: string } | null
  phoneConfig: { tel: string; display: string }
  initialVilleSlug: string
  serviceSlug?: string
  departmentSlug?: string
  departmentConfig?: { slug: string; name: string; displayName: string; postalCode: string } | null
  testimonials?: Testimonial[]
  cities?: { name: string; slug: string }[]
  departmentCities?: Record<string, { name: string }>
  cityContent?: {
    intro: string
    accessText: string | null
    activityText: string | null
    quartiers: string[]
    hasSpecificContent: boolean
  }
  // Page de sous-service (ex. /gironde/bordeaux/debarras-maison) : même design, contenu adapté
  sousService?: ResolvedSousServiceConfig
}

// ─── Coordonnées GPS par département ─────────────────────────────────────────
const DEPT_COORDINATES: Record<string, { lat: string; lng: string }> = {
  "ain": { lat: "46.2044", lng: "5.2254" }, "allier": { lat: "46.3590", lng: "3.3318" },
  "ardeche": { lat: "44.7547", lng: "4.6005" }, "cantal": { lat: "45.0474", lng: "2.6186" },
  "drome": { lat: "44.9334", lng: "4.8924" }, "isere": { lat: "45.1885", lng: "5.7245" },
  "loire": { lat: "45.4397", lng: "4.3872" }, "haute-loire": { lat: "45.0432", lng: "3.8857" },
  "puy-de-dome": { lat: "45.7749", lng: "3.0826" }, "rhone": { lat: "45.7640", lng: "4.8357" },
  "savoie": { lat: "45.5646", lng: "5.9178" }, "haute-savoie": { lat: "45.8992", lng: "6.1294" },
  "cote-dor": { lat: "47.3167", lng: "4.8300" }, "doubs": { lat: "47.2380", lng: "6.0227" },
  "jura": { lat: "46.6706", lng: "5.5580" }, "nievre": { lat: "47.1179", lng: "3.5332" },
  "haute-saone": { lat: "47.6231", lng: "6.1534" }, "saone-et-loire": { lat: "46.6386", lng: "4.5278" },
  "yonne": { lat: "47.7990", lng: "3.5678" }, "territoire-de-belfort": { lat: "47.6384", lng: "6.8628" },
  "cotes-darmor": { lat: "48.5146", lng: "-2.7603" }, "finistere": { lat: "48.2315", lng: "-4.1556" },
  "ille-et-vilaine": { lat: "48.1126", lng: "-1.6793" }, "morbihan": { lat: "47.7479", lng: "-2.7778" },
  "cher": { lat: "47.0640", lng: "2.3963" }, "eure-et-loir": { lat: "48.4458", lng: "1.4874" },
  "indre": { lat: "46.8124", lng: "1.6905" }, "indre-et-loire": { lat: "47.3936", lng: "0.6898" },
  "loir-et-cher": { lat: "47.5932", lng: "1.3359" }, "loiret": { lat: "47.9029", lng: "2.0817" },
  "corse-du-sud": { lat: "41.8592", lng: "9.0128" }, "haute-corse": { lat: "42.3085", lng: "9.2614" },
  "ardennes": { lat: "49.6968", lng: "4.7038" }, "aube": { lat: "48.3001", lng: "4.0768" },
  "marne": { lat: "49.0440", lng: "4.3694" }, "haute-marne": { lat: "48.1080", lng: "5.1399" },
  "meurthe-et-moselle": { lat: "48.6921", lng: "6.1844" }, "meuse": { lat: "48.9953", lng: "5.3581" },
  "moselle": { lat: "49.1193", lng: "6.1757" }, "bas-rhin": { lat: "48.5734", lng: "7.7521" },
  "haut-rhin": { lat: "47.9029", lng: "7.3587" }, "vosges": { lat: "48.1654", lng: "6.4496" },
  "aisne": { lat: "49.5651", lng: "3.6208" }, "nord": { lat: "50.6292", lng: "3.0573" },
  "oise": { lat: "49.4179", lng: "2.4230" }, "pas-de-calais": { lat: "50.5138", lng: "2.3978" },
  "somme": { lat: "49.9220", lng: "2.3011" }, "paris": { lat: "48.8566", lng: "2.3522" },
  "seine-et-marne": { lat: "48.6084", lng: "2.8979" }, "yvelines": { lat: "48.7713", lng: "1.8685" },
  "essonne": { lat: "48.5302", lng: "2.1647" }, "hauts-de-seine": { lat: "48.8924", lng: "2.2196" },
  "seine-saint-denis": { lat: "48.9356", lng: "2.3539" }, "val-de-marne": { lat: "48.7941", lng: "2.4728" },
  "val-doise": { lat: "49.0695", lng: "2.0810" }, "calvados": { lat: "49.0924", lng: "-0.3583" },
  "eure": { lat: "49.0761", lng: "1.1762" }, "manche": { lat: "49.1177", lng: "-1.3082" },
  "orne": { lat: "48.5790", lng: "0.0866" }, "seine-maritime": { lat: "49.6944", lng: "1.1756" },
  "charente": { lat: "45.6484", lng: "0.1568" }, "charente-maritime": { lat: "45.7500", lng: "-0.7889" },
  "correze": { lat: "45.3433", lng: "1.8816" }, "creuse": { lat: "46.0000", lng: "2.0000" },
  "dordogne": { lat: "45.1833", lng: "0.7167" }, "gironde": { lat: "44.8378", lng: "-0.5792" },
  "landes": { lat: "43.9493", lng: "-0.7559" }, "lot-et-garonne": { lat: "44.3500", lng: "0.5333" },
  "pyrenees-atlantiques": { lat: "43.2951", lng: "-0.3708" }, "deux-sevres": { lat: "46.5554", lng: "-0.3296" },
  "vienne": { lat: "46.5802", lng: "0.3404" }, "haute-vienne": { lat: "45.8354", lng: "1.2625" },
  "ariege": { lat: "42.9514", lng: "1.6043" }, "aude": { lat: "43.2130", lng: "2.3536" },
  "aveyron": { lat: "44.3500", lng: "2.5759" }, "gard": { lat: "43.9666", lng: "4.1645" },
  "haute-garonne": { lat: "43.6047", lng: "1.4442" }, "gers": { lat: "43.6447", lng: "0.5883" },
  "herault": { lat: "43.6119", lng: "3.8772" }, "lot": { lat: "44.6586", lng: "1.4442" },
  "lozere": { lat: "44.5183", lng: "3.4990" }, "hautes-pyrenees": { lat: "43.0940", lng: "0.1651" },
  "pyrenees-orientales": { lat: "42.6887", lng: "2.8948" }, "tarn": { lat: "43.7929", lng: "2.1490" },
  "tarn-et-garonne": { lat: "44.0167", lng: "1.3500" }, "loire-atlantique": { lat: "47.2184", lng: "-1.5536" },
  "maine-et-loire": { lat: "47.4667", lng: "-0.5500" }, "mayenne": { lat: "48.1554", lng: "-0.6070" },
  "sarthe": { lat: "47.9952", lng: "0.1902" }, "vendee": { lat: "46.6696", lng: "-1.4260" },
  "alpes-de-haute-provence": { lat: "44.0922", lng: "6.2360" }, "hautes-alpes": { lat: "44.5586", lng: "6.0800" },
  "alpes-maritimes": { lat: "43.9175", lng: "7.2447" }, "bouches-du-rhone": { lat: "43.5283", lng: "5.0319" },
  "var": { lat: "43.4667", lng: "6.2167" }, "vaucluse": { lat: "43.9493", lng: "5.1000" },
  "guadeloupe": { lat: "16.2650", lng: "-61.5510" }, "martinique": { lat: "14.6415", lng: "-61.0242" },
  "guyane": { lat: "3.9339", lng: "-53.1258" }, "la-reunion": { lat: "-21.1151", lng: "55.5364" },
  "mayotte": { lat: "-12.8275", lng: "45.1662" },
}

// ─── Helpers JSON-LD ──────────────────────────────────────────────────────────
const serializeJsonLd = (data: unknown): string => {
  try { return JSON.stringify(data) } catch { return "{}" }
}

// ─── Builder LocalBusiness ────────────────────────────────────────────────────
const buildLocalBusinessData = (
  cityData: { name: string; postalCode: string },
  departmentSlug: string,
  initialVilleSlug: string,
  phoneConfig: { tel: string },
  departmentConfig: { name: string; displayName: string } | null,
  gps: { lat: string; lng: string },
  allTestimonials: Array<{ name: string; rating: number; text: string }>,
) => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}`,
  "name": `DÉBARRAS PROXIMITÉ - Débarras de Maison ${cityData.name}`,
  "alternateName": `Débarrasseur professionnel ${cityData.name} - DÉBARRAS PROXIMITÉ`,
  "image": [
    "https://www.debarras-proximite.fr/images/debarras-gratuit-768x512.jpg",
    "https://www.debarras-proximite.fr/images/debarras-vide-maison.jpg",
    "https://www.debarras-proximite.fr/images/debarras-grenier.jpg",
  ],
  "logo": "https://www.debarras-proximite.fr/images/logo-debarras-proximite.png",
  "description": `Service professionnel de débarras à ${cityData.name} (${cityData.postalCode}). Débarras maison, appartement, cave, grenier, fin de chantier, locaux professionnels et succession. Devis gratuit le jour même, rachat meubles possible, recyclage inclus.`,
  "address": COMPANY_ADDRESS,
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": gps.lat,
    "longitude": gps.lng,
  },
  "telephone": phoneConfig.tel,
  "email": "contact@debarras-proximite.fr",
  "url": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}`,
  "sameAs": [
  ],
  "priceRange": "€€",
  "currenciesAccepted": "EUR",
  "paymentAccepted": "Cash, Carte bancaire, Virement, Chèque",
  "openingHoursSpecification": [
    {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59",
    },
  ],
  "aggregateRating": {
    "@type": "AggregateRating",
    "ratingValue": "4.8",
    "bestRating": "5",
    "worstRating": "1",
    "ratingCount": "480",
    "reviewCount": "480",
  },
  "areaServed": [
    { "@type": "City", "name": cityData.name },
    { "@type": "AdministrativeArea", "name": departmentConfig?.name ?? departmentSlug },
  ],
  "serviceArea": {
    "@type": "GeoCircle",
    "geoMidpoint": { "@type": "GeoCoordinates", "latitude": gps.lat, "longitude": gps.lng },
    "geoRadius": "30000",
  },
  "knowsAbout": [
    "Débarras de maison", "Vide maison succession",
    "Débarras appartement", "Débarras cave et grenier",
    "Débarras fin de chantier", "Débarras locaux professionnels",
    "Enlèvement encombrants", "Rachat meubles anciens",
    "Estimation antiquités", "Débarras syndrome de Diogène",
    "Débarras garde-meubles", "Débarras après sinistre",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `Services de Débarras à ${cityData.name}`,
    "itemListElement": [
      {
        "@type": "Offer", "name": `Débarras de maison complet à ${cityData.name}`,
        "description": `Vidage complet de maison à ${cityData.name} : meubles, objets, vêtements, électroménager. Tri sélectif et recyclage inclus.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "299", "priceCurrency": "EUR", "minPrice": "299", "unitText": "prestation" },
        "itemOffered": { "@type": "Service", "name": `Débarras de maison complet à ${cityData.name}`, "description": `Vidage complet de maison à ${cityData.name} : dépose, tri, évacuation et nettoyage. Rachat possible de meubles et objets de valeur.`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name }, "availableChannel": { "@type": "ServiceChannel", "servicePhone": phoneConfig.tel, "serviceUrl": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` } },
      },
      {
        "@type": "Offer", "name": `Débarras appartement à ${cityData.name}`,
        "description": `Vidage complet ou partiel d'appartement à ${cityData.name}. Devis gratuit, intervention rapide.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "199", "priceCurrency": "EUR", "minPrice": "199", "unitText": "prestation" },
        "itemOffered": { "@type": "Service", "name": `Débarras appartement à ${cityData.name}`, "description": `Débarras d'appartement à ${cityData.name} avant vente, location ou succession. Enlèvement meubles, électroménager et encombrants.`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name } },
      },
      {
        "@type": "Offer", "name": `Vide maison succession à ${cityData.name}`,
        "description": `Débarras succession à ${cityData.name} : estimation, rachat objets de valeur et vidage complet. Service discret et respectueux.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "299", "priceCurrency": "EUR", "minPrice": "299", "unitText": "prestation" },
        "itemOffered": { "@type": "Service", "name": `Vide maison succession à ${cityData.name}`, "description": `Vide maison succession à ${cityData.name} : estimation et rachat d'antiquités, meubles et objets de valeur. Service discret et accompagnement personnalisé.`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name } },
      },
      {
        "@type": "Offer", "name": `Débarras cave et grenier à ${cityData.name}`,
        "description": `Vidage de cave, grenier ou sous-sol à ${cityData.name}. Encombrants, meubles anciens et objets divers évacués.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "149", "priceCurrency": "EUR", "minPrice": "149", "unitText": "prestation" },
        "itemOffered": { "@type": "Service", "name": `Débarras cave et grenier à ${cityData.name}`, "description": `Vidage de cave, grenier et sous-sol à ${cityData.name}. Tri sélectif, évacuation et recyclage des objets encombrants.`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name } },
      },
      {
        "@type": "Offer", "name": `Débarras fin de chantier à ${cityData.name}`,
        "description": `Évacuation gravats, matériaux et encombrants après travaux à ${cityData.name}. Chantier propre garanti.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "199", "priceCurrency": "EUR", "minPrice": "199", "unitText": "prestation" },
        "itemOffered": { "@type": "Service", "name": `Débarras fin de chantier à ${cityData.name}`, "description": `Évacuation de gravats, matériaux de construction et encombrants après travaux à ${cityData.name}. Nettoyage de chantier inclus.`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name } },
      },
      {
        "@type": "Offer", "name": `Débarras locaux professionnels à ${cityData.name}`,
        "description": `Vidage de bureaux, commerces, entrepôts ou locaux professionnels à ${cityData.name}. Intervention rapide.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "299", "priceCurrency": "EUR", "minPrice": "299", "unitText": "prestation" },
        "itemOffered": { "@type": "Service", "name": `Débarras locaux professionnels à ${cityData.name}`, "description": `Débarras de bureaux, commerces, entrepôts et locaux industriels à ${cityData.name}. Meubles, équipements et encombrants évacués rapidement.`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name } },
      },
      {
        "@type": "Offer", "name": `Enlèvement encombrants à ${cityData.name}`,
        "description": `Enlèvement de meubles, électroménager et encombrants à ${cityData.name}. Rachat possible.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "99", "priceCurrency": "EUR", "minPrice": "99", "unitText": "prestation" },
        "itemOffered": { "@type": "Service", "name": `Enlèvement encombrants à ${cityData.name}`, "description": `Enlèvement de meubles, appareils électroménager et encombrants à ${cityData.name}. Estimation et rachat possible des objets de valeur.`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name }, "availableChannel": { "@type": "ServiceChannel", "servicePhone": phoneConfig.tel, "serviceUrl": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` } },
      },
      {
        "@type": "Offer", "name": `Devis gratuit débarras à ${cityData.name}`,
        "description": `Devis gratuit débarras à ${cityData.name}. Rappel sous 30 minutes. Sans engagement.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "0", "priceCurrency": "EUR", "minPrice": "0", "unitText": "devis" },
        "itemOffered": { "@type": "Service", "name": `Devis gratuit débarras à ${cityData.name}`, "description": `Estimation gratuite et sans engagement à ${cityData.name} pour tous vos besoins de débarras. Rappel sous 30 minutes, intervention sous 24h/48h.`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name }, "availableChannel": { "@type": "ServiceChannel", "servicePhone": phoneConfig.tel, "serviceUrl": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` } },
      },
    ],
  },
  "foundingDate": "2017",
  "slogan": "Débarras professionnel, devis gratuit le jour même, particuliers et professionnels",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}`,
    "address": COMPANY_ADDRESS,
    "potentialAction": [
      { "@type": "ReserveAction", "target": { "@type": "EntryPoint", "urlTemplate": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}`, "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"] }, "result": { "@type": "Reservation", "name": "Demande de devis débarras" } },
      { "@type": "CommunicateAction", "target": { "@type": "EntryPoint", "urlTemplate": `tel:${phoneConfig.tel}` } },
    ],
  },
})

// ─── Builder FAQPage ──────────────────────────────────────────────────────────
const buildFaqData = (cityData: { name: string; postalCode: string }) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": [
    { "@type": "Question", "name": `Quel est le prix d'un débarras de maison à ${cityData.name} ?`, "acceptedAnswer": { "@type": "Answer", "text": `Le débarras de maison à ${cityData.name} démarre à partir de 299 €. Le tarif dépend du volume à évacuer, du type de bien (maison, appartement, cave) et de l'accessibilité. Un rachat de meubles ou objets de valeur peut réduire le coût final. Devis gratuit établi le jour même.` } },
    { "@type": "Question", "name": `Combien coûte un vide maison suite à succession à ${cityData.name} ?`, "acceptedAnswer": { "@type": "Answer", "text": `Le vide maison succession à ${cityData.name} démarre à 299 €. Selon la valeur des meubles et objets présents, le rachat peut réduire significativement ou compenser totalement le coût. Nous réalisons une estimation gratuite et transparente avant toute intervention.` } },
    { "@type": "Question", "name": `Quel est le délai d'intervention pour un débarras à ${cityData.name} ?`, "acceptedAnswer": { "@type": "Answer", "text": `Nous intervenons généralement sous 24 à 72 heures à ${cityData.name} après confirmation du devis. Pour les situations urgentes (sinistre, délai de vente), nous pouvons intervenir plus rapidement selon nos disponibilités.` } },
    { "@type": "Question", "name": `Rachetez-vous les meubles et objets lors d'un débarras à ${cityData.name} ?`, "acceptedAnswer": { "@type": "Answer", "text": `Oui, nous estimons et rachetons meubles, antiquités, tableaux, vaisselle, argenterie et objets de valeur lors de chaque débarras à ${cityData.name}. Le montant du rachat est déduit du coût de la prestation, pouvant la rendre gratuite ou payante selon le contenu.` } },
    { "@type": "Question", "name": `Débarrassez-vous les caves et greniers à ${cityData.name} ?`, "acceptedAnswer": { "@type": "Answer", "text": `Oui, nous réalisons le vidage complet de caves, greniers, sous-sols et combles à ${cityData.name}. Qu'il s'agisse d'objets encombrants, de vieux meubles ou de déchets divers, nous trions, évacuons et recyclons l'ensemble du contenu.` } },
    { "@type": "Question", "name": `Faites-vous des débarras de locaux professionnels à ${cityData.name} ?`, "acceptedAnswer": { "@type": "Answer", "text": `Oui, nous intervenons dans les bureaux, commerces, entrepôts et locaux industriels à ${cityData.name}. Meubles de bureau, équipements informatiques, rayonnages, stocks et encombrants sont évacués rapidement avec un camion adapté.` } },
    { "@type": "Question", "name": `Proposez-vous un devis gratuit avant le débarras ?`, "acceptedAnswer": { "@type": "Answer", "text": `Oui, tous nos devis de débarras sont entièrement gratuits et sans engagement. Nous nous déplaçons à ${cityData.name} pour évaluer le volume, estimer les objets de valeur et vous remettre un devis détaillé et transparent avant toute intervention.` } },
    { "@type": "Question", "name": `Quels types de biens débarrassez-vous à ${cityData.name} ?`, "acceptedAnswer": { "@type": "Answer", "text": `À ${cityData.name}, nous débarrassons : maisons, appartements, caves, greniers, garages, fin de chantier, locaux professionnels, bureaux, commerces et entrepôts. Nous intervenons aussi pour les débarras d'urgence, les syndromes de Diogène et les débarras après sinistre.` } },
  ],
})

// ─── Builder BreadcrumbList ───────────────────────────────────────────────────
const buildBreadcrumbData = (
  cityData: { name: string },
  departmentSlug: string,
  initialVilleSlug: string,
  departmentConfig: { name: string; displayName: string } | null,
) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  "itemListElement": [
    { "@type": "ListItem", "position": 1, "name": "Accueil", "item": `${SITE_URL}/` },
    { "@type": "ListItem", "position": 2, "name": departmentConfig?.name ?? departmentSlug, "item": `${SITE_URL}/${departmentSlug}` },
    { "@type": "ListItem", "position": 3, "name": cityData.name, "item": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` },
  ],
})

// ─── Builder Service ──────────────────────────────────────────────────────────
const buildServiceData = (
  cityData: { name: string; postalCode: string },
  departmentSlug: string,
  initialVilleSlug: string,
  phoneConfig: { tel: string },
  departmentConfig: { displayName: string } | null,
) => {
  const pageUrl = `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}`
  return {
    "@context": "https://schema.org",
    "@type": "Service",
    "@id": `${pageUrl}#service`,
    "name": `Débarras de maison à ${cityData.name}`,
    "alternateName": [
      `Vide maison ${cityData.name}`,
      `Débarras appartement ${cityData.name}`,
      `Débarras succession ${cityData.name}`,
      `Débarras cave grenier ${cityData.name}`,
    ],
    "description": `Service professionnel de débarras de maison à ${cityData.name} (${cityData.postalCode}). Intervention sous 24h/48h pour maisons, appartements, caves, greniers et successions.`,
    "url": pageUrl,
    "serviceType": "Débarras de maison",
    "provider": {
      "@type": "LocalBusiness",
      "@id": pageUrl,
      "name": `DÉBARRAS PROXIMITÉ - Débarras de Maison ${cityData.name}`,
      "telephone": phoneConfig.tel,
      "address": COMPANY_ADDRESS,
    },
    "areaServed": { "@type": "City", "name": cityData.name },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Prestations de débarras à ${cityData.name}`,
      "itemListElement": [
        { "@type": "Offer", "name": `Débarras maison à ${cityData.name}`, "price": "900", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Service", "name": "Débarras maison complet", "description": "Vidage intégral, tri et évacuation" } },
        { "@type": "Offer", "name": `Débarras appartement à ${cityData.name}`, "price": "250", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Service", "name": "Débarras appartement", "description": "Studio au grand logement, succession ou vente" } },
        { "@type": "Offer", "name": `Débarras cave grenier à ${cityData.name}`, "price": "199", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Service", "name": "Débarras cave et grenier", "description": "Stockage, combles, sous-sol" } },
        { "@type": "Offer", "name": `Débarras succession à ${cityData.name}`, "price": "299", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Service", "name": "Vide maison succession", "description": "Accompagnement discret et respectueux" } },
        { "@type": "Offer", "name": `Débarras garage à ${cityData.name}`, "price": "199", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Service", "name": "Débarras garage", "description": "Véhicules, outils, encombrants" } },
        { "@type": "Offer", "name": `Enlèvement encombrants à ${cityData.name}`, "price": "39", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Service", "name": "Enlèvement encombrants", "description": "Meubles, électroménager, objets volumineux" } },
      ],
    },
    "availableChannel": {
      "@type": "ServiceChannel",
      "servicePhone": { "@type": "ContactPoint", "telephone": phoneConfig.tel },
      "serviceUrl": pageUrl,
      "availableLanguage": "French",
    },
    "offers": {
      "@type": "AggregateOffer",
      "lowPrice": "39",
      "highPrice": "900",
      "priceCurrency": "EUR",
      "offerCount": "6",
    },
  }
}

// ─── Builder HowTo ────────────────────────────────────────────────────────────
const buildHowToData = (
  cityData: { name: string; postalCode: string },
  departmentSlug: string,
  initialVilleSlug: string,
) => {
  const pageUrl = `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}`
  return {
    "@context": "https://schema.org",
    "@type": "HowTo",
    "name": `Comment faire débarrasser sa maison à ${cityData.name} ?`,
    "description": `Guide pratique pour faire débarrasser votre maison à ${cityData.name} (${cityData.postalCode}) en 4 étapes simples. Devis gratuit, intervention sous 24h/48h, recyclage inclus.`,
    "image": "https://www.debarras-proximite.fr/images/debarras-gratuit-768x512.jpg",
    "totalTime": "PT48H",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "0" },
    "supply": [
      { "@type": "HowToSupply", "name": "Accès au logement à débarrasser" },
      { "@type": "HowToSupply", "name": "Liste des objets à conserver si succession" },
    ],
    "tool": [{ "@type": "HowToTool", "name": "Formulaire de devis en ligne ou téléphone" }],
    "step": [
      { "@type": "HowToStep", "position": "1", "name": "Demandez votre devis gratuit", "text": `Contactez DÉBARRAS PROXIMITÉ par téléphone, formulaire ou WhatsApp. Décrivez le logement à débarrasser à ${cityData.name} (type, surface, contenu estimé). Devis gratuit le jour même, sans engagement.`, "url": `${pageUrl}#hero`, "image": "https://www.debarras-proximite.fr/images/debarras-gratuit-768x512.jpg" },
      { "@type": "HowToStep", "position": "2", "name": "Visite et estimation sur place", "text": `Un expert DÉBARRAS PROXIMITÉ se déplace gratuitement à ${cityData.name} pour évaluer le volume à débarrasser, estimer les objets de valeur et vous remettre un devis détaillé et transparent.`, "url": `${pageUrl}#how-it-works`, "image": "https://www.debarras-proximite.fr/images/debarras-maison.jpg" },
      { "@type": "HowToStep", "position": "3", "name": "Intervention rapide", "text": `Notre équipe intervient à la date convenue à ${cityData.name} pour vider entièrement les lieux, trier les objets (rachat, don, recyclage) et effectuer le débarras avec soin et efficacité.`, "url": `${pageUrl}#how-it-works`, "image": "https://www.debarras-proximite.fr/images/debarras-maison.jpg" },
      { "@type": "HowToStep", "position": "4", "name": "Recyclage et remise en état", "text": `Nous assurons le tri, le recyclage et le don des objets réutilisables. Les lieux sont laissés propres après intervention. Nettoyage complet disponible en option à ${cityData.name}.`, "url": `${pageUrl}#how-it-works`, "image": "https://www.debarras-proximite.fr/images/debarras-recyclage.jpg" },
    ],
  }
}

export default function ClientVillePage({
  cityData,
  phoneConfig,
  initialVilleSlug,
  serviceSlug,
  departmentSlug = "gironde",
  departmentConfig,
  testimonials = [],
  cities = [],
  departmentCities,
  cityContent,
  sousService: ss,
}: ClientVillePageProps) {
  if (!cityData) { notFound() }

  const safeTestimonials = Array.isArray(testimonials) ? testimonials : []
  const allTestimonials = replaceTestimonialCitiesWithDepartmentCities(safeTestimonials, departmentCities)

  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    typeDebarras: "",
    ville: cityData?.name || "",
    message: "",
    adresse: "", // Added adresse to formData
    propertyType: "", // Added propertyType to formData
    surface: "", // Added surface to formData
  })


  const [openFaq, setOpenFaq] = useState<number | null>(null)

  const [visibleSections, setVisibleSections] = useState<Set<string>>(new Set())


  const [isHeroSubmitting, setIsHeroSubmitting] = useState(false)
  const [heroSubmitSuccess, setHeroSubmitSuccess] = useState(false)

  const [pageInfo, setPageInfo] = useState({ pageUrl: "", pagePath: "" })
  useEffect(() => {
    // Capturer l'URL et le path dès le chargement de la page
    setPageInfo({
      pageUrl: window.location.href,
      pagePath: window.location.pathname,
    })
  }, []) // 👈 [] = s'exécute une seule fois au chargement


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisibleSections((prev) => new Set(prev).add(entry.target.id))

          }
        })
      },
      { threshold: 0.1 },
    )

    const sections = document.querySelectorAll("[data-animate]")
    sections.forEach((section) => observer.observe(section))

    return () => observer.disconnect()
  }, [])


  // Handler for input changes
  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { id, value } = e.target
    setFormData((prev) => ({
      ...prev,
      [id]: value,
    }))
  }

  // CHANGE: Replaced simple success message with full-screen elegant success message like other forms
  // CHANGE: Replaced broken form submission handlers with exact copy of working Gironde page handlers
  const handleHeroSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsHeroSubmitting(true)

    try {
      const data = {
        prenom: formData.name.split(" ")[0] || formData.name,
        nom: formData.name.split(" ").slice(1).join(" ") || formData.name,
        telephone: formData.phone,
        email: formData.email,
        adresse: formData.adresse,
        message: formData.message,
        pageUrl: pageInfo.pageUrl,    // 👈 AJOUTER CETTE LIGNE
        pagePath: pageInfo.pagePath,  // 👈 AJOUTER CETTE LIGNE
      }


      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })


      if (response.ok) {
        setHeroSubmitSuccess(true)
        setTimeout(() => {
          setHeroSubmitSuccess(false)
          setFormData({
            name: "",
            email: "",
            phone: "",
            typeDebarras: "", // Keep original fields, even if not directly used in this form
            ville: cityData?.name || "",
            adresse: "",
            message: "",
            propertyType: "", // Reset propertyType
            surface: "", // Reset surface
          })
        }, 3000)
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.")
      }
    } catch (error) {
      alert("Une erreur est survenue. Veuillez vérifier votre connexion internet.")
    } finally {
      setIsHeroSubmitting(false)
    }
  }

  const gps = DEPT_COORDINATES[departmentSlug] ?? { lat: "46.603354", lng: "1.888334" }

  return (
    <div className="min-h-screen bg-white">

      {/* ── Scripts JSON-LD injectés SSR ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildLocalBusinessData(cityData, departmentSlug, initialVilleSlug, phoneConfig, departmentConfig ?? null, gps, allTestimonials)) }} />
      {ss ? (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": ss.faqItems.map((f) => ({ "@type": "Question", "name": f.q, "acceptedAnswer": { "@type": "Answer", "text": f.a } })),
          }) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd({
            "@context": "https://schema.org",
            "@type": "BreadcrumbList",
            "itemListElement": [
              { "@type": "ListItem", "position": 1, "name": "Accueil", "item": `${SITE_URL}/` },
              { "@type": "ListItem", "position": 2, "name": departmentConfig?.name ?? departmentSlug, "item": `${SITE_URL}/${departmentSlug}` },
              { "@type": "ListItem", "position": 3, "name": cityData.name, "item": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` },
              { "@type": "ListItem", "position": 4, "name": ss.label, "item": `${SITE_URL}/${departmentSlug}/${initialVilleSlug}/${ss.slug}` },
            ],
          }) }} />
        </>
      ) : (
        <>
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildFaqData(cityData)) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildBreadcrumbData(cityData, departmentSlug, initialVilleSlug, departmentConfig ?? null)) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildServiceData(cityData, departmentSlug, initialVilleSlug, phoneConfig, departmentConfig ?? null)) }} />
          <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildHowToData(cityData, departmentSlug, initialVilleSlug)) }} />
        </>
      )}

      <DynamicHead
        cityName={cityData.name}
        postalCode={cityData.postalCode}
        department={departmentConfig?.displayName ?? departmentSlug}
        lat={parseFloat(gps.lat)}
        lng={parseFloat(gps.lng)}
        phone={phoneConfig.tel}
      />

      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* Hero Section */}
      <section
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        data-animate
        id="hero"
      >
        <div
          className="absolute inset-0 -z-10 bg-cover bg-center opacity-35"
          style={{ backgroundImage: `url(${ss?.heroImage ?? "/images/debarras-gratuit-768x512.jpg"})` }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.88)_55%,rgba(14,36,82,0.6)_100%)]" />

        <div
          className={`max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 transition-all duration-1000 ${visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-center">
            <div className="lg:self-stretch lg:flex lg:flex-col lg:-mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-5">
                {ss ? (<>{ss.h1.split(" – ")[0]}.{ss.h1.includes(" – ") && <span className="mt-2 block text-base md:text-lg font-medium text-[#FFC629]">{ss.h1.split(" – ").slice(1).join(" – ")}.</span>}</>) : <>Débarras de logements à <span className="text-[#FFC629]">{cityData.name}</span> et {getDepartmentAreaPhrase(departmentConfig, departmentSlug)}.</>}
              </h1>

              <p className={`text-lg leading-relaxed text-slate-200 mb-6 max-w-2xl ${ss ? "text-justify hyphens-auto" : ""}`} lang="fr">
                {ss ? ss.heroIntro : "Maison, appartement, cave, grenier, garage ou local professionnel : nous vidons, trions et recyclons, et vous rendons un logement propre et dégagé."}
              </p>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                {(ss ? ss.checkpoints : [
                  "Devis gratuit le jour même",
                  "Intervention sous 24/48h",
                  "Tri, dons et recyclage inclus",
                  "Équipe assurée et discrète",
                ]).map((item) => (
                  <li key={item} className="flex items-center gap-3 text-slate-100">
                    <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#FFC629]" aria-hidden="true" />
                    {item}
                  </li>
                ))}
              </ul>

              <div className="flex flex-col sm:flex-row gap-5 sm:gap-8 mb-6">
                <Button
                  size="lg"
                  className="h-12 w-full sm:w-64 justify-center px-6 border-2 border-[#FFC629] bg-[#FFC629] text-[#0E2452] font-bold text-base transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0E2452]"
                  onClick={() => setIsQuoteFormOpen(true)}
                >
                  <FileText className="w-5 h-5 mr-2" aria-hidden="true" />
                  Demander un devis
                </Button>
                <Button
                  asChild
                  size="lg"
                  variant="outline"
                  className="h-12 w-full sm:w-64 justify-center px-6 border-2 border-white/40 bg-transparent text-white font-semibold text-base transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0E2452]"
                >
                  <a href={`tel:${phoneConfig.tel}`}>
                    <Phone className="w-5 h-5 mr-2" aria-hidden="true" />
                    {phoneConfig.display}
                  </a>
                </Button>
              </div>

              <ul className="flex flex-wrap items-center justify-between gap-x-3 gap-y-2 border-t border-white/15 pt-5 sm:grid sm:grid-cols-2 lg:mt-auto lg:pt-6">
                {[
                  { Icon: ShieldCheck, label: "Visite gratuite et rapide" },
                  { Icon: Users, label: "Plus de 500 clients" },
                ].map(({ Icon, label }) => (
                  <li key={label} className="flex items-center gap-1.5 whitespace-nowrap text-xs font-medium text-slate-100 min-[380px]:gap-2 min-[380px]:text-sm">
                    <Icon className="h-3.5 w-3.5 flex-shrink-0 text-[#FFC629] sm:h-4 sm:w-4" aria-hidden="true" />
                    {label}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Column - Quote Form */}
            <Card className="gap-0 py-0 bg-white text-gray-900 shadow-2xl border-0 rounded-2xl overflow-hidden">
              <CardContent className="p-5 md:p-6">
                <QuoteFormHeading />
                {/* CHANGE: Replaced simple success message with full-screen elegant success message like other forms */}
                {heroSubmitSuccess ? (
                  <div className="py-12 text-center animate-in fade-in duration-500">
                    <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-6 animate-in zoom-in duration-300">
                      <svg className="w-10 h-10 text-green-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                    <h3 className="text-2xl font-bold text-gray-900 mb-3">Demande envoyée avec succès !</h3>
                    <p className="text-gray-600 mb-2">Nous avons bien reçu votre demande de devis.</p>
                    <p className="text-green-600 font-semibold">Nous vous rappelons en moins de 30 minutes.</p>
                    <p className="text-sm text-gray-500 mt-4">Le formulaire se réinitialisera automatiquement...</p>
                  </div>
                ) : (
                  <form className="space-y-3" onSubmit={handleHeroSubmit}>
                    <div>
                      <Input id="name" name="nom" placeholder="Nom et prénom *" aria-label="Nom et prénom" required autoComplete="name"
                        value={formData.name} onChange={handleInputChange} className="h-11 border border-gray-200 focus:border-[#FFC629] focus-visible:ring-[#FFC629] rounded-lg" />
                    </div>

                    <div className="grid sm:grid-cols-2 gap-3">
                      <div>
                        <Input id="phone" name="telephone" type="tel" placeholder="Téléphone *" aria-label="Téléphone" required autoComplete="tel"
                          value={formData.phone} onChange={handleInputChange} className="h-11 border border-gray-200 focus:border-[#FFC629] focus-visible:ring-[#FFC629] rounded-lg" />
                      </div>
                      <div>
                        <Input id="email" name="email" type="email" placeholder="E-mail (facultatif)" aria-label="E-mail" autoComplete="email"
                          value={formData.email} onChange={handleInputChange} className="h-11 border border-gray-200 focus:border-[#FFC629] focus-visible:ring-[#FFC629] rounded-lg" />
                      </div>
                    </div>

                    <div>
                      <Input id="adresse" name="adresse" placeholder="Adresse du logement *" aria-label="Adresse du logement" required autoComplete="street-address"
                        value={formData.adresse} onChange={handleInputChange} className="h-11 border border-gray-200 focus:border-[#FFC629] focus-visible:ring-[#FFC629] rounded-lg" />
                    </div>

                    <div>
                      <Textarea id="message" name="message" rows={2}
                        placeholder="Votre projet : type de bien, pièces à vider, date souhaitée..." aria-label="Votre projet"
                        value={formData.message} onChange={handleInputChange}
                        className="border border-gray-200 focus:border-[#FFC629] focus-visible:ring-[#FFC629] resize-none rounded-lg" />
                    </div>

                    <Button
                      type="submit"
                      className="w-full h-12 border-2 border-[#FFC629] bg-[#FFC629] text-[#0E2452] font-bold text-base shadow-md transition-colors duration-300 rounded-lg group hover:border-[#0E2452] hover:bg-[#0E2452] hover:text-white"
                      disabled={isHeroSubmitting}
                    >
                      {isHeroSubmitting ? (
                        <div className="flex items-center justify-center">
                          <svg
                            className="animate-spin h-5 w-5 text-[#0E2452] mr-3"
                            xmlns="http://www.w3.org/2000/svg"
                            fill="none"
                            viewBox="0 0 24 24"
                          >
                            <circle
                              className="opacity-25"
                              cx="12"
                              cy="12"
                              r="10"
                              stroke="currentColor"
                              strokeWidth="4"
                            ></circle>
                            <path
                              className="opacity-75"
                              fill="currentColor"
                              d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4zm2 5.291A7.962 7.962 0 014 12H0c0 3.042 1.135 5.824 3 8.042l3-2.751z"
                            ></path>
                          </svg>
                          Envoi en cours...
                        </div>
                      ) : heroSubmitSuccess ? (
                        "Message envoyé !"
                      ) : (
                        <span className="inline-flex items-center justify-center gap-1.5">
                          Obtenir mon devis gratuit
                          <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} aria-hidden="true" />
                        </span>
                      )}
                    </Button>
                    <p className="pt-1 text-center text-xs text-gray-500">
                      Sans engagement · Vos données restent confidentielles
                    </p>
                  </form>
                )}
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="bg-white py-10 md:py-14" data-animate>
        <div
          className={`container mx-auto px-4 md:px-8 transition-all duration-1000 ${
            visibleSections.has("services")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto mb-10">
            <h3 className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />
              NOS SERVICES
            </h3>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">
              {ss ? `${ss.label} à ${cityData.name} : nos prestations` : "Nos prestations de débarras"}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {(ss
              ? ss.serviceCards.map((c) => ({ slug: "", title: c.title, short: c.desc, image: c.image }))
              : [
              {
                slug: "debarras-maison",
                title: "Débarras complet de maison",
                short: "Vidage intégral, tri, évacuation et recyclage en une seule intervention.",
                desc: `Vidage intégral de votre maison à ${cityData.name}, quelle que soit la situation : succession, déménagement, vente ou logement insalubre. Nos équipes trient, évacuent et recyclent l'ensemble des biens en une seule intervention rapide et soignée.`,
                image: "/images/vide-maison-debarras.jpg",
              },
              {
                slug: "debarras-succession",
                title: "Débarras après succession",
                short: "Intervention discrète, en lien avec le notaire ou les héritiers.",
                desc: `Intervention discrète et respectueuse pour le débarras d'un logement après une succession à ${cityData.name}. Nous trions les effets personnels, valorisons les objets récupérables et évacuons le reste, en coordination avec le notaire ou les héritiers si nécessaire.`,
                image: "/images/Rachat_successions.jpg",
              },
              {
                slug: "debarras-cave-grenier",
                title: "Débarras cave et grenier",
                short: "Caves, greniers et combles désencombrés et remis en état.",
                desc: `Désencombrement complet de caves, greniers et combles à ${cityData.name}. Nous évacuons meubles, cartons, outils et objets accumulés avec un tri sélectif rigoureux, acheminement en déchetterie agréée et remise en état des espaces vidés.`,
                image: "/images/service-3.jpg",
              },
              {
                slug: "debarras-garage",
                title: "Débarras de garage",
                short: "Outillage, pièces et objets stockés évacués dans les règles.",
                desc: `Vidage complet de garages encombrés à ${cityData.name} : véhicules hors d'usage, outillage, pièces détachées, huiles usagées et tout type d'objets stockés. Intervention rapide avec évacuation conforme et remise en état du sol et des murs.`,
                image: "/images/service-4.jpg",
              },
              {
                slug: "debarras-syndrome-diogene",
                title: "Débarras syndrome de Diogène",
                short: "Logements très encombrés traités avec méthode et bienveillance.",
                desc: `Débarras de logements insalubres ou fortement encombrés à ${cityData.name}, y compris les situations de syndrome de Diogène. Notre équipe spécialisée intervient avec méthode, discrétion et bienveillance pour remettre le logement dans un état habitable.`,
                image: "/images/debarras-syndrome-diogene.jpg",
              },
              {
                slug: "debarras-fin-de-chantier",
                title: "Débarras fin de chantier",
                short: "Gravats, bois, métaux et tout-venant évacués et recyclés.",
                desc: `Évacuation complète de vos déchets de travaux à ${cityData.name} : gravats, ferraille et métaux, plâtre, bois, menuiseries et tout-venant de chantier. Tri, recyclage en filières agréées et nettoyage pour une réception de chantier sereine.`,
                image: "/images/debarras-fin-de-chantier.jpg",
              },
            ]).map((service, i) => {
              const cardClass = "group relative block h-96 overflow-hidden rounded-2xl shadow-lg focus:outline-none focus-visible:ring-4 focus-visible:ring-[#FFC629]"
              const content = (
                <>
                <img
                  src={service.image || "/placeholder.svg"}
                  alt={service.title}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2452] via-[#0E2452]/60 to-transparent transition-opacity duration-300 group-hover:from-[#0E2452] group-hover:via-[#0E2452]/75" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <div className="mb-4 h-1 w-12 rounded-full bg-[#FFC629] transition-all duration-300 group-hover:w-20" />
                  <h3 className="text-2xl font-bold leading-tight text-white">{service.title}</h3>
                  <p className={`mt-2 text-sm leading-relaxed text-white/85 ${ss ? "line-clamp-4" : ""}`}>{service.short}</p>
                  {!ss && <span className="mt-4 inline-flex items-center gap-1.5 text-sm font-semibold text-[#FFC629]">
                    En savoir plus
                    <svg className="h-4 w-4 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24" aria-hidden="true"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" /></svg>
                  </span>}
                </div>
                </>
              )
              return ss ? (
                <article key={i} className={cardClass}>{content}</article>
              ) : (
                <Link
                  key={i}
                  prefetch={false}
                  href={`/${departmentSlug}/${initialVilleSlug}/${service.slug}`}
                  className={cardClass}
                  aria-label={`${service.title} à ${cityData.name}`}
                >
                  {content}
                </Link>
              )
            })}
          </div>
        </div>
      </section>
      <HowItWorksSection />
      <WhyChooseUsSection />
      <RealisationsSection padding="py-10 md:py-14" place={`à ${cityData.name}`} className="bg-gray-50" />
      <TestimonialsSection padding="py-10 md:py-14" testimonials={allTestimonials} className="bg-white" />
      <FormulesSection place={`à ${cityData.name}`} onQuote={() => setIsQuoteFormOpen(true)} />
      {/* Nos Prestations et Tarifs Section */}
      {ss ? (
      <section className="py-10 md:py-14 bg-white" data-animate id="pricing-tarifs">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Nos tarifs</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">{ss.tarifTitle}</h2>
              <p className="text-gray-600 text-lg max-w-3xl">{ss.tarifSubtitle}</p>
            </div>
            <div className="rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
              <dl className="grid md:grid-cols-2 gap-x-12 divide-y divide-gray-100 md:divide-y-0">
                {ss.tarifCards.map((t) => (
                  <div key={t.label} className="flex items-baseline justify-between gap-4 py-3 md:border-b md:border-gray-100">
                    <dt className="text-sm font-medium text-gray-700">{t.label}</dt>
                    <dd className="text-right font-bold text-[#0E2452] whitespace-nowrap">{t.price}</dd>
                  </div>
                ))}
              </dl>
            </div>
            <p className="mt-8 mx-auto max-w-4xl text-center text-xs text-gray-500">
              Prix indicatifs TTC. Le tarif définitif dépend du volume, de l'accessibilité et du type de biens à évacuer. Devis gratuit et sans engagement, établi le jour même.
            </p>
          </div>
        </div>
      </section>
      ) : (
      <TarifsSection padding="py-10 md:py-14" place={`à ${cityData.name}`} className="bg-white" />
      )}
      {/* About Us Section */}
      <section id="about" className="bg-gray-50 py-10 md:py-14" data-animate>
        <div
          className={`container mx-auto px-4 md:px-8 transition-all duration-1000 ${visibleSections.has("about") ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            {/* Left Column - Main Content */}
            <div>
              <p className="mb-3 flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]">
                <span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />
                À propos de nous
              </p>

              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E2452] mb-6 leading-tight">
                {ss ? ss.aboutTitle : "Votre partenaire de confiance pour tous vos débarras"}
              </h2>

              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto" lang="fr">
                {ss ? <p>{ss.aboutParagraph}</p> : (<>
                <p>
                  Basée à {cityData.name}, notre équipe vide maisons, appartements et dépendances pour les particuliers,
                  les familles, les notaires et les professionnels, lors d'une succession, d'un déménagement ou d'une vente.
                </p>
                <p>
                  Après une estimation gratuite sur place, nous trions chaque pièce avec soin : les objets en bon état
                  sont donnés ou rachetés, le reste est évacué vers des filières de recyclage agréées.
                </p>
                <p>
                  Nous rendons un logement vide et propre, prêt pour une visite, une remise des clés ou un état des lieux.
                </p>
                </>)}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={ss?.aboutImage ?? "/images/debarras-maison.jpg"}
                alt={`Équipe Débarras Proximité en intervention de débarras à ${cityData.name}`}
                width={768}
                height={512}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Arguments */}
          <ul className="max-w-7xl mx-auto mt-10 md:mt-12 grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                Icon: MapPin,
                title: "Entreprise locale",
                text: `Basés à ${cityData.name}, nous connaissons le terrain et intervenons rapidement près de chez vous.`,
              },
              {
                Icon: Users,
                title: "Un interlocuteur unique",
                text: "Une seule personne vous suit, de la demande de devis jusqu'à la remise des clés.",
              },
              {
                Icon: CheckCircle2,
                title: "Paiement après intervention",
                text: "Vous ne payez qu'une fois le débarras terminé et les lieux vérifiés avec vous.",
              },
            ].map(({ Icon, title, text }) => (
              <li key={title} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452]">
                  <Icon className="h-6 w-6 text-[#FFC629]" aria-hidden="true" />
                </span>
                <div>
                  <h3 className="mb-1 text-lg font-bold text-[#0E2452]">{title}</h3>
                  <p className="text-sm leading-relaxed text-gray-600">{text}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>
      {/* Our Politique RSE Section */}
      <section
        className="bg-white py-10 md:py-14"
        data-animate
        id="rse-policy"
      >
        <div
          className={`container mx-auto px-4 md:px-8 transition-all duration-1000 ${visibleSections.has("rse-policy") ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-12">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Notre politique RSE</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">
                Une seconde vie pour vos biens
              </h2>
              <p className="text-lg text-gray-600 lg:whitespace-nowrap">
                Au travers de la récupération de vos biens, nous limitons les déchets et leur donnons une nouvelle utilité.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Left: Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[320px] md:h-[420px]">
                <Image src="/images/service-2.jpg" alt="Objets récupérés lors d'un débarras, prêts pour une seconde vie" fill className="object-cover" />
              </div>

              {/* Right: Engagements */}
              <ol className="divide-y divide-gray-200">
                {[
                  {
                    title: "Réparation et revente",
                    text: "Vos meubles et objets en bon état sont réparés puis revendus. Leur valeur est déduite de votre devis : votre débarras vous coûte moins cher.",
                  },
                  {
                    title: "Dons aux associations",
                    text: "Ce qui peut encore servir est donné à des associations locales. Vos biens aident des familles dans le besoin, et vous gardez l'esprit léger.",
                  },
                  {
                    title: "Réemploi et recyclage",
                    text: "Les objets sans preneur en France sont réemployés à l'étranger ou recyclés en filières agréées. Rien ne finit jamais en décharge sauvage.",
                  },
                ].map((item) => (
                  <li key={item.title} className="py-6 first:pt-0 last:pb-0">
                    <div className="border-l-4 border-[#FFC629] pl-5">
                      <h3 className="mb-2 text-xl font-bold text-[#0E2452]">{item.title}</h3>
                      <p className="text-sm md:text-base leading-relaxed text-gray-600 text-justify hyphens-auto" lang="fr">{item.text}</p>
                    </div>
                  </li>
                ))}
              </ol>
            </div>
          </div>
        </div>
      </section>
      {ss ? (
      <section className="bg-gray-50 py-10 md:py-14" data-animate id="eco-responsible">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-12">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />En détail</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">{ss.label} à {cityData.name} : ce qu'il faut savoir</h2>
          </div>
          <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-14">
            {ss.seoBlocks.map((block, i) => (
              <div key={block.title} className="grid md:grid-cols-2 gap-12 items-stretch">
                <div className={`relative min-h-[300px] h-full rounded-2xl overflow-hidden shadow-xl ${i % 2 === 1 ? "md:order-2" : ""}`}>
                  <Image src={block.image} alt={block.imageAlt} fill className="object-cover" />
                </div>
                <div className="flex flex-col justify-center gap-4">
                  <h3 className="font-bold text-[#0E2452] text-2xl leading-snug">{block.title}</h3>
                  <p className="text-gray-600 text-base leading-relaxed text-justify hyphens-auto" lang="fr">{block.text}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
      ) : (
      <section
        aria-labelledby="prestations-heading"
        className="bg-gray-50 py-10 md:py-14"
        data-animate
        id="eco-responsible"
      >
        <div
          className={`container mx-auto px-4 md:px-8 transition-all duration-1000 ${
            visibleSections.has("eco-responsible")
              ? "opacity-100 scale-100"
              : "opacity-0 scale-95"
          }`}
        >
          <div className="max-w-7xl mx-auto mb-12">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Prestations sur mesure</p>
            <h2
              id="prestations-heading"
              className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3"
            >
              Des prestations de débarras adaptées à chaque situation
            </h2>
            <p className="text-gray-600 text-lg lg:whitespace-nowrap">
              Vide maison, nettoyage, sinistre, chantier, succession ou syndrome de Diogène : nous gérons tout.
            </p>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-14">

            {/* ── BLOC 1 ── Image gauche / Texte droite */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="relative min-h-[300px] h-full rounded-2xl overflow-hidden shadow-xl">
                <Image
                  src="/images/d-c3-a9barras-20apr-c3-a8s-20succession.webp"
                  alt={`Équipe professionnelle de débarras à ${cityData.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4">
                <h3 className="font-bold text-[#0E2452] text-2xl leading-snug">
                  Vide maison à {cityData.name} – Intervention rapide et
                  professionnelle
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-justify hyphens-auto" lang="fr">
                  Vous avez besoin d'un service de vide maison à {cityData.name} ?
                  Notre équipe intervient rapidement pour vider entièrement votre
                  maison, quelle que soit la situation : succession, vente
                  immobilière, déménagement ou logement encombré.
                  <br />
                  <br />
                  Nous prenons en charge le tri, l'enlèvement des meubles et
                  objets, avec une intervention discrète, efficace et
                  respectueuse, pour vous garantir un logement propre et prêt à
                  être réutilisé ou vendu.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    `Succession, vente, déménagement à ${cityData.name}`,
                    "Tri sélectif et enlèvement de tous les objets",
                    "Intervention discrète, efficace et respectueuse",
                    "Rappel sous 30 min, devis le jour même",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-medium text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#0E2452]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── BLOC 2 ── Texte gauche / Image droite */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col gap-4 order-1 md:order-1">
                <h3 className="font-bold text-[#0E2452] text-2xl leading-snug">
                  Nettoyage après débarras à {cityData.name} – Logement propre et
                  prêt à l'usage
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-justify hyphens-auto" lang="fr">
                  Après un débarras, un nettoyage complet est souvent
                  indispensable. Nous proposons un service de nettoyage après
                  débarras à {cityData.name}, incluant l'élimination des
                  poussières, saletés et résidus laissés après l'évacuation.
                  <br />
                  <br />
                  Grâce à une intervention rapide et soignée, votre maison ou
                  appartement est rendu propre, sain et immédiatement prêt pour
                  une vente, une location ou une nouvelle occupation.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    `Nettoyage complet après débarras à ${cityData.name}`,
                    "Élimination poussières, saletés et résidus",
                    "Logement prêt pour vente ou location immédiate",
                    "Intervention rapide, soignée et professionnelle",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-medium text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#0E2452]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[300px] h-full rounded-2xl overflow-hidden shadow-xl order-2 md:order-2">
                <Image
                  src="/images/capture-20d-27-c3-a9cran-202025-12-25-20020954.png"
                  alt={`Nettoyage après débarras à ${cityData.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* ── BLOC 3 ── Image gauche / Texte droite */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="relative min-h-[300px] h-full rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="/images/debarras-sinistre.jpg"
                  alt={`Débarras après sinistre incendie dégât des eaux à ${cityData.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 order-1 md:order-2">
                <h3 className="font-bold text-[#0E2452] text-2xl leading-snug">
                  Débarras après sinistre à {cityData.name} – Incendie, dégât des
                  eaux, inondation
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-justify hyphens-auto" lang="fr">
                  Votre logement a été touché par un sinistre à {cityData.name} ?
                  Notre équipe intervient rapidement après un incendie, un dégât
                  des eaux ou une inondation pour évacuer les biens endommagés,
                  nettoyer les lieux et remettre votre logement en état.
                  <br />
                  <br />
                  Nous assurons la coordination avec votre assureur et le syndic
                  de copropriété si nécessaire, en vous fournissant tous les
                  justificatifs nécessaires à votre déclaration de sinistre.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    `Intervention urgente après sinistre à ${cityData.name}`,
                    "Incendie, dégât des eaux, inondation",
                    "Coordination assureur et syndic incluse",
                    "Justificatifs pour déclaration de sinistre fournis",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-medium text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#0E2452]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── BLOC 4 ── Texte gauche / Image droite */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col gap-4 order-1 md:order-1">
                <h3 className="font-bold text-[#0E2452] text-2xl leading-snug">
                  Débarras de chantier à {cityData.name} – Gravats et déchets de
                  travaux
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-justify hyphens-auto" lang="fr">
                  Vos travaux sont terminés et vous avez besoin d'évacuer les
                  déchets de chantier à {cityData.name} ? Nous prenons en charge
                  l'enlèvement et le transport de vos gravats, débris de
                  démolition, matériaux usagés et déchets de fin de chantier.
                  <br />
                  <br />
                  Tous nos déchets de chantier sont acheminés vers des centres de
                  tri agréés pour un traitement conforme à la réglementation en
                  vigueur. Intervention rapide sur devis, pour particuliers et
                  professionnels à {cityData.name} et ses environs.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    `Gravats, débris, déchets de travaux à ${cityData.name}`,
                    "Rénovation, démolition partielle, aménagement intérieur",
                    "Centres de tri agréés, traitement réglementaire",
                    "Intervention rapide pour particuliers et professionnels",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-medium text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#0E2452]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[300px] h-full rounded-2xl overflow-hidden shadow-xl order-2 md:order-2">
                <Image
                  src="/images/debarras-fin-de-chantier.jpg"
                  alt={`Débarras de chantier gravats déchets travaux à ${cityData.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            {/* ── BLOC 5 ── Image gauche / Texte droite */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="relative min-h-[300px] h-full rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="/images/revente-meuble-bordeaux.jpg"
                  alt={`Débarras après succession à ${cityData.name}`}
                  fill
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 order-1 md:order-2">
                <h3 className="font-bold text-[#0E2452] text-2xl leading-snug">
                  Une solution efficace pour un débarras après une succession à{" "}
                  {cityData.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-justify hyphens-auto" lang="fr">
                  Le débarras d'un logement après une succession à {cityData.name}{" "}
                  est une étape souvent difficile à gérer. L'équipe de Débarras Proximité
                  vous accompagne avec respect et bienveillance, du tri minutieux
                  des effets personnels à la mise en valeur des objets
                  récupérables.
                  <br />
                  <br />
                  Nous intervenons aussi pour la gestion des encombrants en
                  proposant un service complet, de la collecte au tri en passant
                  par le don, pour que chaque objet trouve une destination
                  appropriée.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    `Tri minutieux des effets personnels à ${cityData.name}`,
                    "Mise en valeur des objets récupérables",
                    "Service complet collecte, tri et don",
                    "Accompagnement respectueux et bienveillant",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-medium text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#0E2452]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* ── BLOC 6 ── Texte gauche / Image droite */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col gap-4 order-1 md:order-1">
                <h3 className="font-bold text-[#0E2452] text-2xl leading-snug">
                  Débarras en cas de syndrome de Diogène à {cityData.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-justify hyphens-auto" lang="fr">
                  Notre équipe intervient pour effectuer un débarras intégral des
                  logements Diogène à {cityData.name} et dans les communes
                  voisines. Le syndrome de Diogène entraîne une accumulation
                  excessive d'objets et de déchets, rendant le logement insalubre.
                  <br />
                  <br />
                  Notre entreprise vous propose un service de débarras adapté :
                  tri et évacuation des déchets et encombrants, nettoyage des
                  lieux, désinfection des surfaces, avec une approche discrète et
                  sans jugement.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    `Débarras intégral logement Diogène à ${cityData.name}`,
                    "Tri, évacuation, nettoyage et désinfection",
                    "Intervention discrète et sans jugement",
                    "Communes voisines également desservies",
                  ].map((item, i) => (
                    <li
                      key={i}
                      className="flex items-center gap-3 text-sm font-medium text-gray-700"
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0 text-[#0E2452]" aria-hidden="true" />
                      {item}
                    </li>
                  ))}
                </ul>
              </div>
              <div className="relative min-h-[300px] h-full rounded-2xl overflow-hidden shadow-xl order-2 md:order-2">
                <Image
                  src="/images/syndrome-20de-20diog-c3-a8ne.jpg"
                  alt={`Débarras syndrome de Diogène à ${cityData.name}`}
                  fill
                  className="object-cover"
                />
              </div>
            </div>

          </div>
        </div>
      </section>
      )}
      {/* Zones d'Intervention Section */}
      <section id="zones" className="bg-white py-10 md:py-14" data-animate>
        <div
          className={`container mx-auto px-4 md:px-8 transition-all duration-1000 ${
            visibleSections.has("zones")
              ? "opacity-100 translate-y-0"
              : "opacity-0 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto">
            {/* Header */}
            <div className="mb-10">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Présence locale</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">
                Zone d'intervention {departmentConfig?.displayName ?? ""}
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl">
                Depuis {cityData.name}, nous intervenons dans tout le département pour vos débarras : une équipe locale, rapide et fiable, près de chez vous.
              </p>
            </div>

            {/* Grille principale : villes + carte */}
            <div className="grid lg:grid-cols-2 gap-8 items-stretch mb-8">

              {/* Liste villes */}
              <div className="order-2 lg:order-1 flex flex-col">
                <p className="mb-4 text-sm font-semibold text-[#0E2452]">
                  {Object.keys(departmentCities || {}).slice(0, 48).length} villes desservies
                </p>

                <div className="grid grid-cols-2 sm:grid-cols-3 gap-2 flex-1 content-start">
                  {departmentCities &&
                    Object.entries(departmentCities)
                      .slice(0, 48)
                      .map(([slug, city]) => (
                        <Link
                          key={slug}
                          prefetch={false}
                          href={cityPath(departmentSlug, slug)}
                          className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2 transition-colors duration-200 hover:border-[#0E2452] hover:bg-[#0E2452]"
                        >
                          <MapPin className="h-3.5 w-3.5 flex-shrink-0 text-[#0E2452] transition-colors group-hover:text-[#FFC629]" aria-hidden="true" />
                          <span className="truncate text-xs font-medium text-gray-700 transition-colors group-hover:text-white">
                            {city.name}
                          </span>
                        </Link>
                      ))}
                </div>
              </div>

              {/* Carte */}
              <div className="order-1 lg:order-2 min-h-[300px]">
                <div className="rounded-2xl overflow-hidden shadow-xl border border-gray-200 h-full w-full">
                  <DepartmentMap departmentSlug={departmentSlug} serviceSlug={serviceSlug} />
                </div>
              </div>

            </div>

            {/* Bandeau : ville non listée (même style que le bandeau de la FAQ) */}
            <div className="mx-auto max-w-7xl rounded-2xl px-6 sm:px-10 py-7 text-white md:min-h-[156px] flex items-center" style={{ backgroundColor: "#0E2452" }}>
              <div className="flex w-full flex-col md:flex-row items-center justify-between gap-6">
                <div className="flex-1 min-w-0 text-center md:text-left">
                  <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                    <span
                      className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full flex-shrink-0"
                      style={{ backgroundColor: "#FFC629", color: "#0E2452" }}
                    >
                      Toute la {departmentConfig?.name ?? "Gironde"}
                    </span>
                  </div>
                  <h3 className="text-lg md:text-xl font-bold mb-1">
                    Votre ville ne figure pas dans la liste ?
                  </h3>
                  <p
                    className="text-sm leading-relaxed text-justify md:text-left"
                    style={{ color: "#a8b8d8" }}
                  >
                    Nous intervenons sur une large zone : contactez-nous pour vérifier la disponibilité dans votre commune.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="group h-12 flex-shrink-0 border-2 border-[#FFC629] bg-[#FFC629] px-6 text-base font-bold text-[#0E2452] whitespace-nowrap shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-[#0E2452] hover:text-white hover:shadow-xl"
                  onClick={() => setIsQuoteFormOpen(true)}
                >
                  Demander un devis
                  <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="bg-gray-50 py-10 md:py-14" data-animate id="faq">
        <div
          className={`container mx-auto px-4 md:px-8 transition-all duration-1000 ${
            visibleSections.has("faq") ? "opacity-100 translate-y-0" : "opacity-100 translate-y-10"
          }`}
        >
          <div className="max-w-7xl mx-auto mb-10">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Questions fréquentes</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">
              {ss ? ss.faqSectionTitle : "Tout ce que vous devez savoir sur nos services de débarras"}
            </h2>
          </div>

          <div className="max-w-7xl mx-auto space-y-3">
            {(ss ? ss.faqItems.map((f) => ({ question: f.q, answer: f.a })) : [
              {
                question: "Quels types de débarras proposez-vous ?",
                answer: "Nous proposons tous types de débarras : appartements, maisons, caves, greniers, garages, locaux professionnels. Nous intervenons également pour les débarras de succession, les logements Diogène, les débarras après sinistre (incendie, dégât des eaux) et l'évacuation de gravats de chantier. Que vous soyez particulier ou professionnel, nous avons la solution adaptée à votre situation.",
              },
              {
                question: "Comment se déroule un débarras ?",
                answer: "Notre processus est simple : 1) Vous demandez un devis gratuit en ligne ou par téléphone en nous décrivant le contenu à débarrasser. 2) Nous vous proposons une estimation claire (gratuite, remisée ou payante selon la valeur des biens). 3) Nous intervenons à la date convenue avec notre équipe et notre véhicule. 4) Nous trions les objets : rachat des biens valorisables, don aux associations, recyclage des matériaux. 5) Nous vous remettons les lieux propres et dégagés.",
              },
              {
                question: "Quels sont les tarifs d'un débarras ?",
                answer: "Nos tarifs dépendent du volume à évacuer, du type de biens et de l'accessibilité du logement. À titre indicatif : studio dès 250 €, appartement T2 dès 450 €, T3 dès 650 €, maison dès 900 €. Pour un objet seul : canapé dès 69 €, matelas ou électroménager dès 39 €. Le débarras peut aussi être gratuit si vos biens ont de la valeur. Devis gratuit et sans engagement, établi le jour même.",
              },
              {
                question: "Le débarras peut-il être gratuit ?",
                answer: "Oui, dans certains cas le débarras peut être entièrement gratuit, voire vous rapporter de l'argent. C'est possible lorsque vos biens ont une valeur marchande suffisante : mobilier ancien, antiquités, objets de collection, électroménager récent, matériaux de construction. Nous estimons la valeur des biens sur place et déduisons cette somme du coût du débarras. Contactez-nous pour une estimation gratuite.",
              },
              {
                question: "Quel est le délai d'intervention pour un débarras ?",
                answer: "Nous intervenons généralement sous 24 à 48 heures après validation du devis. Pour les situations urgentes (succession, vente immobilière imminente, sinistre), nous pouvons organiser une intervention le jour même selon notre disponibilité. Contactez-nous par téléphone pour les demandes urgentes.",
              },
              {
                question: "Faut-il être présent lors du débarras ?",
                answer: "Votre présence n'est pas obligatoire. Vous pouvez nous confier les clés ou mandater une personne de confiance (notaire, agent immobilier, voisin). Nous vous tenons informé à chaque étape par téléphone et vous envoyons des photos avant/après intervention. Nous remettons les clés à la personne que vous aurez désignée à la fin du débarras.",
              },
              {
                question: "Que devient le contenu après le débarras ?",
                answer: "Nous procédons à un tri rigoureux et responsable : les objets en bon état sont revendus ou donnés à des associations caritatives, les métaux et matériaux recyclables sont acheminés vers des centres agréés, les déchets sont traités conformément à la réglementation environnementale. Nous pouvons vous fournir des attestations de traitement des déchets si nécessaire.",
              },
              {
                question: "Intervenez-vous pour les débarras de succession ?",
                answer: "Oui, nous sommes spécialisés dans les débarras de succession. Notre équipe intervient avec discrétion et bienveillance, en prenant soin de chaque objet qui pourrait avoir une valeur sentimentale ou patrimoniale. Nous pouvons coordonner notre intervention avec le notaire, les héritiers ou l'agence immobilière. Nous établissons un inventaire des biens si nécessaire.",
              },
              {
                question: "Proposez-vous un nettoyage après débarras ?",
                answer: "Oui. Un nettoyage sommaire est inclus dans chaque débarras : balayage, dépoussiérage et évacuation des derniers résidus. Un nettoyage complet (sols, murs, surfaces) est proposé en option, pour un logement prêt pour une vente, une location ou un état des lieux. Demandez-nous un devis combiné débarras + nettoyage.",
              },
              {
                question: "Intervenez-vous pour les particuliers et les professionnels ?",
                answer: "Oui, nous intervenons auprès des particuliers (successions, déménagements, rénovations) et des professionnels (agences immobilières, notaires, syndics, bailleurs sociaux, entreprises). Nous proposons des formules adaptées à chaque besoin et pouvons établir des conventions de partenariat pour les professionnels avec des besoins réguliers.",
              },
            ]).map((faq, index) => (
              <div
                key={index}
                className={`bg-white rounded-xl border transition-all duration-300 ${openFaq === index ? "border-[#0E2452] shadow-md" : "border-gray-200 hover:border-gray-300"} ${
                  visibleSections.has("faq") ? "opacity-100 translate-x-0" : "opacity-0 -translate-x-4"
                }`}
                style={{ transitionDelay: `${index * 100}ms` }}
              >
                <button
                  onClick={() => setOpenFaq(openFaq === index ? null : index)}
                  className="w-full px-6 py-5 text-left flex items-center justify-between gap-4 group"
                >
                  <span className="font-semibold text-[#0E2452]">
                    {faq.question}
                  </span>
                  <div
                    className={`flex-shrink-0 w-8 h-8 rounded-full bg-[#0E2452] flex items-center justify-center transition-transform duration-300 ${
                      openFaq === index ? "rotate-180" : ""
                    }`}
                  >
                    <svg className="w-4 h-4 text-[#FFC629]" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                    </svg>
                  </div>
                </button>
                {openFaq === index && (
                  <div className="px-6 pb-5 text-gray-600 leading-relaxed text-justify hyphens-auto animate-in slide-in-from-top-2 duration-300" lang="fr">
                    {faq.answer}
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Bande CTA */}
          <div
            className={`mx-auto max-w-7xl rounded-2xl px-6 sm:px-10 py-7 text-white mt-12 md:min-h-[156px] flex items-center transition-all duration-1000 delay-300 ${
              visibleSections.has("faq") ? "opacity-100 scale-100" : "opacity-0 scale-95"
            }`}
            style={{ backgroundColor: "#0E2452" }}
          >
            <div className="flex w-full flex-col md:flex-row items-center justify-between gap-6">

              <div className="flex-1 min-w-0 text-center md:text-left">
                <div className="flex items-center justify-center md:justify-start gap-2 mb-2">
                  <span
                    className="text-xs font-bold uppercase tracking-widest px-3 py-1 rounded-full flex-shrink-0"
                    style={{ backgroundColor: "#FFC629", color: "#0E2452" }}
                  >
                    Rappel sous 30 min
                  </span>
                </div>
                <h3 className="text-lg md:text-xl font-bold mb-1">
                  {ss ? ss.ctaTitle : "Prêt à débarrasser votre logement ?"}
                </h3>
                <p
                  className="text-sm leading-relaxed text-justify md:text-left"
                  style={{ color: "#a8b8d8" }}
                >
                  {ss ? ss.ctaText : "Service de débarras rapide et fiable pour succession, vente, déménagement ou logement encombré. Intervention discrète, tri sélectif, logement rendu propre et dégagé."}
                </p>
              </div>

              <Button
                size="lg"
                className="group h-12 flex-shrink-0 border-2 border-[#FFC629] bg-[#FFC629] px-6 text-base font-bold text-[#0E2452] whitespace-nowrap shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-[#0E2452] hover:text-white hover:shadow-xl"
                onClick={() => setIsQuoteFormOpen(true)}
              >
                Demander un devis
                <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Button>

            </div>
          </div>

        </div>
      </section>

      {/* Footer */}
      <Footer phoneConfig={phoneConfig} />

      {/* Boutons flottants */}
      <FloatingButtons phoneConfig={phoneConfig} onQuoteClick={() => setIsQuoteFormOpen(true)} />

      <QuoteForm
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
        phoneConfig={phoneConfig}
        title={ss?.quoteFormTitle ?? "Obtenez un devis de débarras gratuit"}
        subtitle={ss?.quoteFormTitle ?? "Obtenez un devis de débarras gratuit"}
      />

    </div>
  )
}
