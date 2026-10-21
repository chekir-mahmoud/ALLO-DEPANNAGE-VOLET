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
import { Phone, MapPin, CheckCircle2, FileText, Users, ShieldCheck, ChevronRight, Wrench } from "lucide-react"
import DepartmentMap from "@/components/department-map"
import Header from "@/components/header"
import QuoteFormHeading from "@/components/quote-form-heading"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/QuoteForm"
import { SERVICES_SECTION_TITLE, type ResolvedSousServiceConfig } from "@/lib/sous-services/volet-roulant"
import { VOLET_INTERVENTIONS } from "@/lib/testimonials/exemples-volet-roulant"
import { VOLET_SERVICES } from "@/lib/services-volet-roulant"
import { getCityFaq } from "@/lib/city-faq"
import DynamicHead from "@/components/DynamicHead"
import FloatingButtons from "@/components/FloatingButtons"
import TestimonialsSection from "@/components/sections/testimonials-section"
import TarifsSection from "@/components/sections/tarifs-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import BrandsSection from "@/components/sections/brands-section"
import PannesSection from "@/components/sections/pannes-section"
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
  cities?: { name: string; slug: string }[]
  departmentCities?: Record<string, { name: string }>
  // Page de sous-service (ex. /gironde/bordeaux/depannage-volet-roulant) : même design, contenu adapté
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

// ─── Nom de la ville en jaune dans le titre ──────────────────────────────────
const highlightCity = (text: string, city: string) => {
  const i = text.lastIndexOf(city)
  if (i === -1) return text
  return <>{text.slice(0, i)}<span className="text-[#FFC629]">{city}</span>{text.slice(i + city.length)}</>
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
) => ({
  "@context": "https://schema.org",
  "@type": ["LocalBusiness", "HomeAndConstructionBusiness"],
  "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}`,
  "name": `ALLO DÉPANNAGE VOLET - Dépannage volet roulant ${cityData.name}`,
  "alternateName": `Dépannage et réparation de volets roulants ${cityData.name} - ALLO DÉPANNAGE VOLET`,
  "image": [
    "https://www.allo-depannage-volet.fr/images/volet/technicien-reparation-volet-roulant.jpg",
    "https://www.allo-depannage-volet.fr/images/volet/depannage-volet-roulant-bloque.jpg",
    "https://www.allo-depannage-volet.fr/images/volet/moteur-tubulaire-volet-roulant.jpg",
  ],
  "logo": "https://www.allo-depannage-volet.fr/images/logo-depannage-volet-roulant.png",
  "description": `Dépannage, réparation, installation et motorisation de volets roulants à ${cityData.name} (${cityData.postalCode}), 7j/7. Rideaux métalliques et stores, toutes marques, devis gratuit.`,
  "address": COMPANY_ADDRESS,
  "geo": {
    "@type": "GeoCoordinates",
    "latitude": gps.lat,
    "longitude": gps.lng,
  },
  "telephone": phoneConfig.tel,
  "email": "contact@allo-depannage-volet.fr",
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
    "Dépannage volet roulant", "Réparation volet roulant",
    "Remplacement moteur volet roulant", "Motorisation volet roulant",
    "Installation volet roulant", "Remplacement lames volet roulant",
    "Rideau métallique", "Store banne",
  ],
  "hasOfferCatalog": {
    "@type": "OfferCatalog",
    "name": `Dépannage de volets roulants à ${cityData.name}`,
    "itemListElement": [
      {
        "@type": "Offer", "name": `Diagnostic et déplacement à ${cityData.name}`,
        "description": `Diagnostic complet d'un volet roulant en panne à ${cityData.name}.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "69", "priceCurrency": "EUR", "minPrice": "69", "unitText": "intervention" },
        "itemOffered": { "@type": "Service", "name": `Diagnostic et déplacement à ${cityData.name}`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name } },
      },
      {
        "@type": "Offer", "name": `Déblocage de volet roulant à ${cityData.name}`,
        "description": `Déblocage d'un volet roulant coincé en position ouverte, fermée ou à mi-hauteur à ${cityData.name}.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "89", "priceCurrency": "EUR", "minPrice": "89", "unitText": "intervention" },
        "itemOffered": { "@type": "Service", "name": `Déblocage de volet roulant à ${cityData.name}`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name } },
      },
      {
        "@type": "Offer", "name": `Remplacement de sangle ou manivelle à ${cityData.name}`,
        "description": `Remplacement de sangle, d'enrouleur, de manivelle ou de treuil à ${cityData.name}.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "79", "priceCurrency": "EUR", "minPrice": "79", "unitText": "intervention" },
        "itemOffered": { "@type": "Service", "name": `Remplacement de sangle ou manivelle à ${cityData.name}`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name } },
      },
      {
        "@type": "Offer", "name": `Remplacement de lames à ${cityData.name}`,
        "description": `Remplacement de lames de volet roulant cassées ou déformées à ${cityData.name}.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "119", "priceCurrency": "EUR", "minPrice": "119", "unitText": "intervention" },
        "itemOffered": { "@type": "Service", "name": `Remplacement de lames à ${cityData.name}`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name } },
      },
      {
        "@type": "Offer", "name": `Remplacement de moteur à ${cityData.name}`,
        "description": `Remplacement de moteur de volet roulant filaire ou radio, toutes marques à ${cityData.name}.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "290", "priceCurrency": "EUR", "minPrice": "290", "unitText": "intervention" },
        "itemOffered": { "@type": "Service", "name": `Remplacement de moteur à ${cityData.name}`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name } },
      },
      {
        "@type": "Offer", "name": `Motorisation de volet roulant à ${cityData.name}`,
        "description": `Motorisation d'un volet roulant à sangle ou à manivelle à ${cityData.name}.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "450", "priceCurrency": "EUR", "minPrice": "450", "unitText": "intervention" },
        "itemOffered": { "@type": "Service", "name": `Motorisation de volet roulant à ${cityData.name}`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name } },
      },
      {
        "@type": "Offer", "name": `Pose de volet roulant à ${cityData.name}`,
        "description": `Fourniture et pose de volet roulant sur mesure en rénovation à ${cityData.name}.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "390", "priceCurrency": "EUR", "minPrice": "390", "unitText": "intervention" },
        "itemOffered": { "@type": "Service", "name": `Pose de volet roulant à ${cityData.name}`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name } },
      },
      {
        "@type": "Offer", "name": `Dépannage de rideau métallique à ${cityData.name}`,
        "description": `Déblocage et réparation de rideau métallique pour les commerces à ${cityData.name}.`,
        "priceSpecification": { "@type": "UnitPriceSpecification", "price": "149", "priceCurrency": "EUR", "minPrice": "149", "unitText": "intervention" },
        "itemOffered": { "@type": "Service", "name": `Dépannage de rideau métallique à ${cityData.name}`, "provider": { "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}` }, "areaServed": { "@type": "City", "name": cityData.name } },
      },
    ],
  },
  "slogan": "Dépannage de volets roulants 7j/7, toutes marques, devis gratuit",
  "mainEntityOfPage": {
    "@type": "WebPage",
    "@id": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}`,
    "address": COMPANY_ADDRESS,
    "potentialAction": [
      { "@type": "ReserveAction", "target": { "@type": "EntryPoint", "urlTemplate": `${SITE_URL}${cityPath(departmentSlug, initialVilleSlug)}`, "actionPlatform": ["http://schema.org/DesktopWebPlatform", "http://schema.org/MobileWebPlatform"] }, "result": { "@type": "Reservation", "name": "Demande de devis volet roulant" } },
      { "@type": "CommunicateAction", "target": { "@type": "EntryPoint", "urlTemplate": `tel:${phoneConfig.tel}` } },
    ],
  },
})

// ─── Builder FAQPage ──────────────────────────────────────────────────────────
const buildFaqData = (cityData: { name: string; postalCode: string }) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  "mainEntity": getCityFaq(cityData.name).map((f) => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
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
    "name": `Dépannage de volet roulant à ${cityData.name}`,
    "alternateName": [
      `Réparation volet roulant ${cityData.name}`,
      `Motorisation volet roulant ${cityData.name}`,
      `Installation volet roulant ${cityData.name}`,
      `Rideau métallique ${cityData.name}`,
    ],
    "description": `Dépannage, réparation, installation et motorisation de volets roulants à ${cityData.name} (${cityData.postalCode}), 7j/7, toutes marques.`,
    "url": pageUrl,
    "serviceType": "Dépannage de volets roulants",
    "provider": {
      "@type": "LocalBusiness",
      "@id": pageUrl,
      "name": `ALLO DÉPANNAGE VOLET - Dépannage volet roulant ${cityData.name}`,
      "telephone": phoneConfig.tel,
      "address": COMPANY_ADDRESS,
    },
    "areaServed": { "@type": "City", "name": cityData.name },
    "hasOfferCatalog": {
      "@type": "OfferCatalog",
      "name": `Tarifs volets roulants à ${cityData.name}`,
      "itemListElement": [
        { "@type": "Offer", "name": `Déblocage de volet roulant à ${cityData.name}`, "price": "89", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Service", "name": "Déblocage de volet roulant", "description": "Volet bloqué ouvert, fermé ou à mi-hauteur" } },
        { "@type": "Offer", "name": `Remplacement de sangle à ${cityData.name}`, "price": "79", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Service", "name": "Remplacement de sangle ou manivelle", "description": "Sangle, enrouleur, manivelle, treuil" } },
        { "@type": "Offer", "name": `Remplacement de lames à ${cityData.name}`, "price": "119", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Service", "name": "Remplacement de lames", "description": "Lames PVC ou aluminium" } },
        { "@type": "Offer", "name": `Remplacement de moteur à ${cityData.name}`, "price": "290", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Service", "name": "Remplacement de moteur", "description": "Moteur filaire ou radio, toutes marques" } },
        { "@type": "Offer", "name": `Pose de volet roulant à ${cityData.name}`, "price": "390", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Service", "name": "Pose de volet roulant", "description": "Volet sur mesure en rénovation" } },
        { "@type": "Offer", "name": `Motorisation de volet roulant à ${cityData.name}`, "price": "450", "priceCurrency": "EUR", "availability": "https://schema.org/InStock", "itemOffered": { "@type": "Service", "name": "Motorisation de volet roulant", "description": "Moteur filaire, radio ou solaire" } },
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
      "lowPrice": "79",
      "highPrice": "450",
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
    "name": `Comment faire dépanner son volet roulant à ${cityData.name} ?`,
    "description": `Les 4 étapes pour faire dépanner ou réparer votre volet roulant à ${cityData.name} (${cityData.postalCode}) : devis gratuit, diagnostic, réparation et tests.`,
    "image": "https://www.allo-depannage-volet.fr/images/volet/technicien-reparation-volet-roulant.jpg",
    "estimatedCost": { "@type": "MonetaryAmount", "currency": "EUR", "value": "0" },
    "supply": [
      { "@type": "HowToSupply", "name": "Accès au volet roulant et au coffre" },
      { "@type": "HowToSupply", "name": "Marque du moteur si possible" },
    ],
    "tool": [{ "@type": "HowToTool", "name": "Formulaire de devis en ligne ou téléphone" }],
    "step": [
      { "@type": "HowToStep", "position": "1", "name": "Vous nous contactez", "text": `Contactez ALLO DÉPANNAGE VOLET par téléphone, formulaire ou WhatsApp et décrivez la panne de votre volet roulant à ${cityData.name}. Une photo du volet aide à préparer l'intervention.`, "url": `${pageUrl}#hero` },
      { "@type": "HowToStep", "position": "2", "name": "Diagnostic et devis", "text": `Un technicien établit le diagnostic à ${cityData.name}, identifie les pièces à remplacer et vous remet un devis clair avant toute intervention.`, "url": `${pageUrl}#how-it-works` },
      { "@type": "HowToStep", "position": "3", "name": "Réparation ou installation", "text": "Déblocage, remplacement du moteur, de la sangle ou des lames, motorisation ou pose : l'intervention est réalisée le plus souvent en une seule visite.", "url": `${pageUrl}#how-it-works` },
      { "@type": "HowToStep", "position": "4", "name": "Tests et garantie", "text": "Le technicien teste le volet, règle les fins de course et vous explique l'entretien. Les pièces et la main-d'œuvre sont garanties.", "url": `${pageUrl}#how-it-works` },
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
  cities = [],
  departmentCities,
  sousService: ss,
}: ClientVillePageProps) {
  if (!cityData) { notFound() }


  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
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

  // Photo de la section « Réparer plutôt que remplacer » : la première qui n'est pas déjà affichée sur la page
  const imagesPage = ss ? [ss.heroImage, ss.aboutImage, ...ss.serviceCards.map((x) => x.image), ...ss.seoBlocks.map((x) => x.image)] : []
  const rseImage = [
    "/images/volet/installation-volet-roulant.jpg",
    "/images/volet/mecanisme-coffre-volet-roulant.jpg",
    "/images/volet/axe-support-volet-roulant.jpg",
    "/images/volet/moteur-somfy-volet-roulant.jpg",
  ].find((img) => !imagesPage.includes(img)) ?? "/images/volet/installation-volet-roulant.jpg"

  const gps = DEPT_COORDINATES[departmentSlug] ?? { lat: "46.603354", lng: "1.888334" }

  return (
    <div className="min-h-screen bg-white">

      {/* ── Scripts JSON-LD injectés SSR ── */}
      <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: serializeJsonLd(buildLocalBusinessData(cityData, departmentSlug, initialVilleSlug, phoneConfig, departmentConfig ?? null, gps)) }} />
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
          style={{ backgroundImage: `url(${ss?.heroImage ?? "/images/volet/depannage-volet-roulant-bloque.jpg"})` }}
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.88)_55%,rgba(14,36,82,0.6)_100%)]" />

        <div
          className={`max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12 transition-all duration-1000 ${visibleSections.has("hero") ? "opacity-100 translate-y-0" : "opacity-0 translate-y-10"
            }`}
        >
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-center">
            <div className="lg:self-stretch lg:flex lg:flex-col lg:-mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-5">
                {ss ? (<>{highlightCity(ss.h1.split(" – ")[0], cityData.name)} et {getDepartmentAreaPhrase(departmentConfig, departmentSlug)}.{ss.h1.includes(" – ") && <span className="mt-2 block text-base md:text-lg font-medium text-[#FFC629]">{ss.h1.split(" – ").slice(1).join(" – ")}.</span>}</>) : <>Dépannage de volets roulants à <span className="text-[#FFC629]">{cityData.name}</span> et {getDepartmentAreaPhrase(departmentConfig, departmentSlug)}.</>}
              </h1>

              <p className="text-lg leading-relaxed text-slate-200 mb-6 max-w-2xl text-justify hyphens-auto" lang="fr">
                {ss ? ss.heroIntro : "Volet bloqué, moteur en panne, lames cassées ou sangle usée : nos techniciens dépannent, réparent et motorisent vos volets roulants, rideaux métalliques et stores, 7j/7."}
              </p>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                {(ss ? ss.checkpoints : [
                  "Devis gratuit et sans engagement",
                  "Dépannage d'urgence 7j/7",
                  "Toutes marques : Somfy, Bubendorff…",
                  "Pièces et main-d'œuvre garanties",
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
                  { Icon: ShieldCheck, label: "Diagnostic sur place" },
                  { Icon: Wrench, label: "Techniciens qualifiés" },
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
                      <Input id="adresse" name="adresse" placeholder="Adresse d'intervention *" aria-label="Adresse d'intervention" required autoComplete="street-address"
                        value={formData.adresse} onChange={handleInputChange} className="h-11 border border-gray-200 focus:border-[#FFC629] focus-visible:ring-[#FFC629] rounded-lg" />
                    </div>

                    <div>
                      <Textarea id="message" name="message" rows={2}
                        placeholder={ss?.messagePlaceholder ?? "Votre besoin : volet bloqué, moteur, sangle, motorisation, nombre de volets..."} aria-label="Votre besoin"
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
              {ss ? `${SERVICES_SECTION_TITLE[ss.slug] ?? ss.label} à ${cityData.name}` : `Nos prestations de volets roulants à ${cityData.name}`}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {(ss
              ? ss.serviceCards.map((c) => ({ slug: "", title: c.title, short: c.desc, image: c.image }))
              : VOLET_SERVICES.map((v) => ({ slug: v.slug, title: v.label, short: v.sub, image: v.image }))
            ).map((service, i) => {
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
      {["depannage-volet-roulant", "reparation-volet-roulant"].includes(ss?.slug ?? "") && <PannesSection className="bg-white" padding="pt-0 pb-10 md:pb-14" />}
      {!["rideau-metallique", "store-banne"].includes(ss?.slug ?? "") && <BrandsSection className="bg-white" padding="pt-0 pb-10 md:pb-14" />}
      <HowItWorksSection />
      <WhyChooseUsSection />
      <TestimonialsSection padding="py-10 md:py-14" testimonials={VOLET_INTERVENTIONS} examples className="bg-white" />
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
              Prix indicatifs TTC. Le tarif définitif dépend de la panne, des pièces à remplacer, des dimensions et de l&apos;accès. Devis gratuit et sans engagement, remis avant toute intervention.
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
                {ss ? ss.aboutTitle : `Votre spécialiste du volet roulant à ${cityData.name}`}
              </h2>

              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto" lang="fr">
                {ss ? <p>{ss.aboutParagraph}</p> : (<>
                <p>
                  À {cityData.name}, nos techniciens dépannent, réparent et motorisent les volets roulants des particuliers,
                  des commerçants, des syndics de copropriété et des professionnels, 7j/7.
                </p>
                <p>
                  Chaque intervention commence par un diagnostic précis : nous remplaçons uniquement les pièces nécessaires,
                  sur toutes les marques (Somfy, Bubendorff, Profalux, Simu, Nice…), avec un devis clair remis avant l&apos;intervention.
                </p>
                <p>
                  Nous testons ensuite le volet, réglons les fins de course et vous expliquons l&apos;entretien : pièces et main-d&apos;œuvre sont garanties.
                </p>
                </>)}
              </div>
            </div>

            {/* Right Column - Image */}
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src={ss?.aboutImage ?? "/images/volet/reparation-coffre-volet-roulant.jpg"}
                alt={`Technicien Allo Dépannage Volet en intervention sur un volet roulant à ${cityData.name}`}
                width={677}
                height={369}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          {/* Arguments */}
          <ul className="max-w-7xl mx-auto mt-10 md:mt-12 grid md:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                Icon: MapPin,
                title: "Techniciens proches de vous",
                text: `Nous intervenons rapidement à ${cityData.name} et dans les communes voisines, 7j/7.`,
              },
              {
                Icon: Users,
                title: "Un interlocuteur unique",
                text: "Une seule personne vous suit, de la demande de devis jusqu'aux tests de fonctionnement.",
              },
              {
                Icon: CheckCircle2,
                title: "Paiement après intervention",
                text: "Vous ne payez qu'une fois l'intervention terminée et le bon fonctionnement vérifié avec vous.",
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
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Notre engagement</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">
                Réparer plutôt que remplacer
              </h2>
              <p className="text-lg text-gray-600 lg:whitespace-nowrap">
                Un diagnostic précis permet de prolonger la vie de vos volets et de limiter les déchets.
              </p>
            </div>

            <div className="grid lg:grid-cols-2 gap-10 lg:gap-14 items-center">
              {/* Left: Image */}
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-[320px] md:h-[420px]">
                <Image src={rseImage} alt="Mécanisme de volet roulant réparé plutôt que remplacé" fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
              </div>

              {/* Right: Engagements */}
              <ol className="divide-y divide-gray-200">
                {[
                  {
                    title: "Diagnostic avant tout remplacement",
                    text: "Un réglage, une attache ou une sangle suffisent souvent à remettre un volet en service. Nous remplaçons uniquement ce qui doit l'être : votre réparation vous coûte moins cher.",
                  },
                  {
                    title: "Pièces de qualité et garanties",
                    text: "Moteurs, lames et mécanismes de marques reconnues, adaptés à votre volet, pour une réparation durable. Pièces et main-d'œuvre sont garanties.",
                  },
                  {
                    title: "Recyclage des pièces usagées",
                    text: "Les moteurs, lames et pièces remplacés sont déposés dans les filières de recyclage adaptées, notamment pour les équipements électriques.",
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
                  <Image src={block.image} alt={block.imageAlt} fill sizes="(min-width: 768px) 50vw, 100vw" className="object-cover" />
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
              Des solutions adaptées à chaque volet roulant
            </h2>
            <p className="text-gray-600 text-lg lg:whitespace-nowrap">
              Dépannage, réparation, motorisation, installation, rideaux métalliques et stores : nous gérons tout.
            </p>
          </div>

          <div className="max-w-7xl mx-auto flex flex-col gap-12 md:gap-14">

            {/* ── BLOC 1 ── */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="relative min-h-[300px] h-full rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="/images/volet/depannage-volet-roulant-bloque.jpg"
                  alt={`Dépannage de volet roulant bloqué à ${cityData.name}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 order-1 md:order-2">
                <h3 className="font-bold text-[#0E2452] text-2xl leading-snug">
                  Dépannage de volet roulant à {cityData.name} – Intervention d&apos;urgence 7j/7
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-justify hyphens-auto" lang="fr">
                  Votre volet roulant est bloqué en position ouverte, fermée ou à mi-hauteur à {cityData.name} ? Nos techniciens interviennent 7j/7, y compris le week-end et les jours fériés, pour identifier la cause du blocage et remettre votre volet en service.
                  <br />
                  <br />
                  Moteur qui ne répond plus, tablier sorti des coulisses, attache cassée ou sangle rompue : le véhicule d&apos;intervention contient les pièces les plus courantes, pour réparer le plus souvent en une seule visite.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    `Intervention d'urgence 7j/7 à ${cityData.name}`,
                    "Volets manuels et électriques",
                    "Pièces courantes dans le véhicule",
                    "Devis remis avant l'intervention",
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

            {/* ── BLOC 2 ── */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col gap-4 order-1 md:order-1">
                <h3 className="font-bold text-[#0E2452] text-2xl leading-snug">
                  Réparation de volet roulant à {cityData.name} – Lames, sangle et manivelle
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-justify hyphens-auto" lang="fr">
                  Lames fendues ou enfoncées, sangle usée, manivelle qui tourne dans le vide ou tablier qui descend de travers : nos techniciens réparent votre volet roulant à {cityData.name} en remplaçant uniquement les pièces nécessaires.
                  <br />
                  <br />
                  Les lames sont remplacées par des lames de même profil et de même couleur que l&apos;existant. Lorsque le tablier est trop abîmé, nous vous proposons un tablier neuf, éventuellement en lames isolantes.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    "Lames assorties à l'existant",
                    "Sangles, enrouleurs, treuils et manivelles",
                    "Attaches, coulisses et lame finale",
                    "Réparation garantie",
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
                  src="/images/volet/tablier-lames-volet-roulant.jpg"
                  alt={`Lames et tablier de volet roulant à ${cityData.name}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* ── BLOC 3 ── */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="relative min-h-[300px] h-full rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="/images/volet/moteur-tubulaire-volet-roulant.jpg"
                  alt={`Moteur tubulaire de volet roulant à ${cityData.name}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 order-1 md:order-2">
                <h3 className="font-bold text-[#0E2452] text-2xl leading-snug">
                  Moteur et motorisation de volet roulant à {cityData.name}
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-justify hyphens-auto" lang="fr">
                  Votre moteur de volet roulant est en panne ou vous souhaitez motoriser vos volets manuels à {cityData.name} ? Nous installons des moteurs filaires, radio ou solaires de marques reconnues, de puissance adaptée au poids du tablier.
                  <br />
                  <br />
                  La motorisation se fait sans changer le coffre ni le tablier lorsqu&apos;ils sont en bon état. Télécommande, programmation horaire, centralisation et pilotage depuis votre smartphone sont possibles.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    "Remplacement de moteur toutes marques",
                    "Motorisation de volets manuels",
                    "Moteurs filaires, radio ou solaires",
                    "Télécommande et domotique",
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

            {/* ── BLOC 4 ── */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col gap-4 order-1 md:order-1">
                <h3 className="font-bold text-[#0E2452] text-2xl leading-snug">
                  Installation de volets roulants à {cityData.name} – Pose neuve et rénovation
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-justify hyphens-auto" lang="fr">
                  Vous souhaitez équiper vos fenêtres ou remplacer d&apos;anciens volets à {cityData.name} ? Nous posons des volets roulants sur mesure, en rénovation sur des fenêtres existantes et sans gros travaux, ou en construction neuve.
                  <br />
                  <br />
                  Nous vous conseillons sur le coffre, le matériau des lames (PVC ou aluminium), la couleur et le type de manœuvre. Chaque volet est fabriqué aux dimensions exactes après une prise de mesures sur place.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    "Volets sur mesure",
                    "Rénovation et construction neuve",
                    "Manuels, électriques ou solaires",
                    "Prise de mesures sur place",
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
                  src="/images/volet/installation-volet-roulant.jpg"
                  alt={`Installation de volet roulant à ${cityData.name}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* ── BLOC 5 ── */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="relative min-h-[300px] h-full rounded-2xl overflow-hidden shadow-xl order-2 md:order-1">
                <Image
                  src="/images/volet/rideau-metallique-depannage.jpg"
                  alt={`Dépannage de rideau métallique à ${cityData.name}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className="flex flex-col gap-4 order-1 md:order-2">
                <h3 className="font-bold text-[#0E2452] text-2xl leading-snug">
                  Rideau métallique à {cityData.name} – Dépannage pour les commerces
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-justify hyphens-auto" lang="fr">
                  Un rideau métallique bloqué empêche d&apos;ouvrir ou de fermer votre commerce à {cityData.name}. Nos techniciens interviennent 7j/7, tôt le matin comme en soirée, pour débloquer le rideau et mettre votre local en sécurité.
                  <br />
                  <br />
                  Moteur, frein, ressort de compensation, lames ou serrure : nous réparons la cause de la panne, motorisons les rideaux manuels et proposons un contrat d&apos;entretien annuel pour anticiper les pannes.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    "Dépannage d'urgence 7j/7",
                    "Mise en sécurité du commerce",
                    "Motorisation des rideaux manuels",
                    "Contrat d'entretien annuel",
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

            {/* ── BLOC 6 ── */}
            <div className="grid md:grid-cols-2 gap-12 items-stretch">
              <div className="flex flex-col gap-4 order-1 md:order-1">
                <h3 className="font-bold text-[#0E2452] text-2xl leading-snug">
                  Store banne à {cityData.name} – Toile, bras et moteur
                </h3>
                <p className="text-gray-600 text-base leading-relaxed text-justify hyphens-auto" lang="fr">
                  Toile déchirée, bras articulé cassé ou moteur qui ne répond plus : nous réparons et entretenons vos stores bannes et stores intérieurs à {cityData.name}, toutes marques.
                  <br />
                  <br />
                  Nous remplaçons les toiles sur mesure, motorisons les stores manuels et installons des capteurs vent et soleil, pour profiter de l&apos;ombre au bon moment et protéger la toile.
                </p>
                <ul className="flex flex-col gap-2 mt-auto">
                  {[
                    "Remplacement de toile sur mesure",
                    "Bras articulés et mécanisme",
                    "Motorisation et capteurs vent",
                    "Stores bannes et intérieurs",
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
                  src="/images/volet/mecanisme-coffre-volet-roulant.jpg"
                  alt={`Mécanisme de store et de volet roulant à ${cityData.name}`}
                  fill
                  sizes="(min-width: 768px) 50vw, 100vw"
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
                Depuis {cityData.name}, nos techniciens interviennent dans tout le département pour vos volets roulants : un service local, rapide et fiable, près de chez vous.
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
                      Rappel sous 30 min
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
              {ss ? ss.faqSectionTitle : `Volets roulants à ${cityData.name} : vos questions`}
            </h2>
          </div>

          <div className="max-w-7xl mx-auto space-y-3">
            {(ss ? ss.faqItems.map((f) => ({ question: f.q, answer: f.a })) : getCityFaq(cityData.name)
            ).map((faq, index) => (
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
                  {ss ? ss.ctaTitle : `Un volet roulant en panne à ${cityData.name} ?`}
                </h3>
                <p
                  className="text-sm leading-relaxed text-justify md:text-left"
                  style={{ color: "#a8b8d8" }}
                >
                  {ss ? ss.ctaText : "Dépannage d'urgence 7j/7, devis gratuit avant intervention, techniciens qualifiés et réparations garanties, sur toutes les marques."}
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
        title={ss?.quoteFormTitle ?? "Demandez votre devis gratuit"}
        subtitle={ss?.quoteFormSubtitle ?? "Dépannage, réparation, installation et motorisation"}
      />

    </div>
  )
}
