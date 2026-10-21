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
  metadataBase: new URL("https://www.allo-depannage-volet.fr"),

  title: {
    default: "Dépannage et réparation volet roulant 7j/7 partout en France",
    template: "%s",
  },

  description:
    "Allo Dépannage Volet : dépannage, réparation, installation et motorisation de volets roulants partout en France, 7j/7. Rideaux métalliques et stores. Devis gratuit.",

  authors: [{ name: "Allo Dépannage Volet", url: "https://www.allo-depannage-volet.fr" }],
  creator: "Allo Dépannage Volet",
  publisher: "Allo Dépannage Volet",
  applicationName: "Allo Dépannage Volet",
  category: "Dépannage et réparation de volets roulants",
  classification: "Business Services",

  formatDetection: { telephone: true, email: true, address: true },

  openGraph: {
    type: "website",
    locale: "fr_FR",
    url: "https://www.allo-depannage-volet.fr/",
    siteName: "Allo Dépannage Volet",
    title: "Dépannage et réparation volet roulant 7j/7 partout en France",
    description: "Dépannage, réparation, installation et motorisation de volets roulants partout en France. Rideaux métalliques et stores. Devis gratuit.",
    images: [
      {
        url: "https://www.allo-depannage-volet.fr/images/volet/technicien-reparation-volet-roulant.jpg",
        width: 1536,
        height: 1024,
        alt: "Allo Dépannage Volet - dépannage de volets roulants partout en France",
        type: "image/jpeg",
      },
    ],
  },

  twitter: {
    card: "summary_large_image",
    title: "Dépannage et réparation volet roulant 7j/7 partout en France",
    description: "Dépannage, réparation et motorisation de volets roulants partout en France. Devis gratuit.",
    images: ["https://www.allo-depannage-volet.fr/images/volet/technicien-reparation-volet-roulant.jpg"],
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
  appleWebApp: { capable: true, title: "Allo Dépannage Volet", statusBarStyle: "default" },

  other: {
    "mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "default",
  },
}

// ─── Script 1 : Organization ──────────────────────────────────────────────────
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  "@id": "https://www.allo-depannage-volet.fr/#organization",
  "name": "Allo Dépannage Volet",
  "legalName": "Allo Dépannage Volet",
  "description": "Dépannage, réparation, installation et motorisation de volets roulants partout en France. Rideaux métalliques et stores.",
  "url": "https://www.allo-depannage-volet.fr",
  "logo": {
    "@type": "ImageObject",
    "url": "https://www.allo-depannage-volet.fr/images/logo-depannage-volet-roulant.png",
    "width": 1200,
    "height": 265
  },
  "image": "https://www.allo-depannage-volet.fr/images/volet/technicien-reparation-volet-roulant.jpg",
  "telephone": "+33620090025",
  "email": "contact@allo-depannage-volet.fr",
  "address": COMPANY_ADDRESS,
  "areaServed": { "@type": "Country", "name": "France" },
  "foundingDate": "2020-05-18",
  "slogan": "Le dépannage de volets roulants partout en France",
  "contactPoint": {
    "@type": "ContactPoint",
    "telephone": "+33620090025",
    "contactType": "customer service",
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
  "@id": "https://www.allo-depannage-volet.fr/#website",
  "url": "https://www.allo-depannage-volet.fr",
  "name": "Allo Dépannage Volet",
  "publisher": {
    "@id": "https://www.allo-depannage-volet.fr/#organization"
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

        {/* Google Analytics / Tag Manager : à ajouter avec les identifiants Allo Dépannage Volet */}
      </head>

      <body className="font-sans antialiased" suppressHydrationWarning>
        {children}
      </body>
    </html>
  )
}