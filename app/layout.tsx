import type React from "react"
import type { Metadata } from "next"
import { COMPANY_ADDRESS } from "@/lib/site"
import { Geist, Geist_Mono } from "next/font/google"
import "./globals.css"

const geist = Geist({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist"
})

const geistMono = Geist_Mono({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-geist-mono"
})

export const metadata: Metadata = {
  metadataBase: new URL("https://www.debarras-proximite.fr"),

  title: {
    default: "Débarras de maison partout en France | Débarras Proximité",
    template: "%s",
  },

  description:
    "Débarras Proximité : débarras de maison, appartement, cave, grenier et succession partout en France. Vidage complet, enlèvement d'encombrants, tri et recyclage. Devis gratuit le jour même, intervention sous 24h/48h.",

  authors: [{ name: "Débarras Proximité", url: "https://www.debarras-proximite.fr" }],
  creator: "Débarras Proximité",
  publisher: "Débarras Proximité",
  applicationName: "Débarras Proximité",
  category: "Débarras de maison et enlèvement d'encombrants",
  classification: "Business Services",

  formatDetection: { telephone: true, email: true, address: true },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.debarras-proximite.fr/",
    siteName: "Débarras Proximité",
    title: "Débarras de maison partout en France | Débarras Proximité",
    description: "Débarras de maison, appartement, cave, grenier et succession partout en France. Devis gratuit le jour même, intervention rapide.",
    images: [
      {
        url: "https://www.debarras-proximite.fr/images/debarras-gratuit-768x512.jpg",
        width: 768,
        height: 512,
        alt: "Débarras Proximité - Débarras de maison partout en France",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Débarras de maison partout en France | Débarras Proximité",
    description: "Débarras de maison, cave, grenier et succession partout en France. Devis gratuit le jour même.",
    images: ["https://www.debarras-proximite.fr/images/debarras-gratuit-768x512.jpg"],
  },

  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },

  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "48x48" },
      { url: "/icon-32x32.png", type: "image/png", sizes: "32x32" },
      { url: "/favicon.png", type: "image/png", sizes: "96x96" },
      { url: "/icon-192.png", type: "image/png", sizes: "192x192" },
    ],
    apple: [{ url: "/apple-icon.png", sizes: "180x180" }],
  },

  manifest: "/site.webmanifest",
  appleWebApp: { capable: true, title: "Débarras Proximité", statusBarStyle: "default" },

  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
}

// ─── Script 1 : Organization ──────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.debarras-proximite.fr/#organization",
  "name": "Débarras Proximité",
  "legalName": "Débarras Proximité",
  "description": "Débarras de maison, appartement, cave, grenier et succession partout en France. Vidage complet, enlèvement d'encombrants, tri et recyclage.",
  "url": "https://www.debarras-proximite.fr",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.debarras-proximite.fr/images/logo-debarras-proximite.png",
    "width": 1200,
    "height": 297
  },
  "image": "https://www.debarras-proximite.fr/images/debarras-gratuit-768x512.jpg",
  "telephone": "+33775229002",
  "email": "contact@debarras-proximite.fr",
  "address": COMPANY_ADDRESS,
  "areaServed": { "@type": "Country", "name": "France" },
  "foundingDate": "2017",
  "numberOfEmployees": {
    "@type": "QuantitativeValue",
    "minValue": 10,
    "maxValue": 50
  },
  "slogan": "Le débarras de maison partout en France",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33775229002",
    "contactType": "customer service",
    "contactOption": "TollFree",
    "availableLanguage": "French",
    "hoursAvailable": {
      "@type": "OpeningHoursSpecification",
      "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"],
      "opens": "00:00",
      "closes": "23:59"
    }
  }
}

// ─── Script 2 : WebSite ───────────────────────────────────────────────────────
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  "@id": "https://www.debarras-proximite.fr/#website",
  "url": "https://www.debarras-proximite.fr",
  "name": "Débarras Proximité",
  "publisher": {
    "@id": "https://www.debarras-proximite.fr/#organization"
  }
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="fr" className={`${geist.variable} ${geistMono.variable}`}>
      <head>
        {/* Schema Organization */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />

        {/* Schema WebSite */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />

        {/* Theme Color */}
        <meta name="theme-color" content="#0E2452" />
        <meta name="msapplication-TileColor" content="#0E2452" />

        {/* Viewport */}
        <meta name="viewport" content="width=device-width, initial-scale=1, maximum-scale=5" />

        {/* Google Analytics / Tag Manager : à ajouter avec les identifiants Débarras Proximité */}
      </head>

      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}