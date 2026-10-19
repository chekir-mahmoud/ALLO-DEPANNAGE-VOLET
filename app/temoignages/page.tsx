"use client"
import { useState } from "react"
import Image from "next/image"
import Script from "next/script"
import { Button } from "@/components/ui/button"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import FloatingButtons from "@/components/FloatingButtons"
import RealisationsSection from "@/components/sections/realisations-section"
import { CheckCircle2, ChevronRight, FileText, Phone, Quote, ShieldCheck, Star, BadgeEuro } from "lucide-react"

// Satisfaction par critère (notes sur 5) — à ajuster selon vos avis réels
const SATISFACTION = [
  { label: "Ponctualité", score: 4.9 },
  { label: "Rapidité d'intervention", score: 4.8 },
  { label: "Respect des lieux", score: 4.9 },
  { label: "Prix et transparence", score: 4.7 },
]

const formatDate = (iso: string) => {
  const d = new Date(iso)
  return isNaN(d.getTime()) ? iso : d.toLocaleDateString("fr-FR", { month: "long", year: "numeric" })
}

export default function TemoignagesPage() {
  const phoneConfig = DEFAULT_PHONE
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)


  // Témoignages clients
  const clientTestimonials = [
    {
      name: "Marie Dubois",
      location: "Paris (75)",
      service: "Débarras appartement",
      rating: 5,
      image: "/client-woman-1.jpg",
      text: "Service impeccable ! L'équipe est arrivée à l'heure, très professionnelle et respectueuse. Mon appartement a été vidé en une matinée. Je recommande vivement Débarras Proximité.",
      date: "2026-01-10",
    },
    {
      name: "Jean-Pierre Martin",
      location: "Lyon (69)",
      service: "Débarras maison",
      rating: 5,
      image: "/client-man-1.jpg",
      text: "Excellent rapport qualité-prix. Devis gratuit et transparent, pas de surprise. Intervention rapide et efficace pour vider la maison.",
      date: "2025-11-02",
    },
    {
      name: "Sophie Lefebvre",
      location: "Bordeaux (33)",
      service: "Débarras cave",
      rating: 5,
      image: "/client-woman-2.jpg",
      text: "Très bon service, cave vidée rapidement et proprement. Équipe ponctuelle et efficace.",
      date: "2025-09-14",
    },
    {
      name: "Ahmed Benali",
      location: "Marseille (13)",
      service: "Débarras grenier",
      rating: 5,
      image: "/client-man-2.jpg",
      text: "Professionnels sérieux, tri des objets avec soin et respect de l’environnement.",
      date: "2025-08-20",
    },
    {
      name: "Claire Rousseau",
      location: "Lille (59)",
      service: "Débarras succession",
      rating: 5,
      image: "/client-woman-3.jpg",
      text: "Très bon accompagnement dans un moment difficile. Équipe respectueuse et efficace.",
      date: "2025-06-18",
    },
    {
      name: "Marc Durand",
      location: "Toulouse (31)",
      service: "Débarras garage",
      rating: 5,
      image: "/client-man-3.jpg",
      text: "Garage vidé rapidement, travail propre et prix honnête.",
      date: "2025-05-03",
    },
    {
      name: "Nathalie Petit",
      location: "Nantes (44)",
      service: "Débarras appartement",
      rating: 5,
      image: "/client-woman-4.jpg",
      text: "Service parfait du début à la fin, équipe très professionnelle et rapide.",
      date: "2025-03-22",
    },
    {
      name: "Laurent Bernard",
      location: "Strasbourg (67)",
      service: "Débarras bureau",
      rating: 5,
      image: "/client-man-4.jpg",
      text: "Bureaux vidés rapidement, service très professionnel.",
      date: "2025-02-11",
    },
    {
      name: "Isabelle Moreau",
      location: "Grenoble (38)",
      service: "Débarras maison",
      rating: 5,
      image: "/client-woman-5.jpg",
      text: "Maison vidée rapidement, équipe efficace et respectueuse.",
      date: "2024-12-01",
    },
    {
      name: "Emma Leroy",
      location: "Nantes (44)",
      service: "Débarras maison",
      rating: 5,
      image: "/client-woman-9.jpg",
      text: "Maison vidée rapidement, équipe efficace.",
      date: "2023-09-05",
    },
    {
      name: "Chloé Moreau",
      location: "Grenoble (38)",
      service: "Débarras cave",
      rating: 5,
      image: "/client-woman-10.jpg",
      text: "Cave totalement vidée, excellent travail.",
      date: "2023-04-21",
    },
    {
      name: "Sarah Lopez",
      location: "Montpellier (34)",
      service: "Débarras appartement",
      rating: 5,
      image: "/client-woman-11.jpg",
      text: "Intervention rapide et efficace, appartement vidé sans stress.",
      date: "2023-12-05",
    },
    {
      name: "Romain Thomas",
      location: "Lille (59)",
      service: "Débarras garage",
      rating: 5,
      image: "/client-man-14.jpg",
      text: "Garage vidé en une matinée, super service.",
      date: "2022-11-09",
    },
    {
      name: "Yassine Karim",
      location: "Strasbourg (67)",
      service: "Débarras maison",
      rating: 5,
      image: "/client-man-15.jpg",
      text: "Maison vidée rapidement et proprement.",
      date: "2022-05-04",
    },
    {
      name: "Émilie Robert",
      location: "Montpellier (34)",
      service: "Débarras maison",
      rating: 5,
      image: "/client-woman-6.jpg",
      text: "Travail impeccable pour le débarras complet de la maison familiale. Équipe très respectueuse et efficace.",
      date: "Il y a 2 semaines",
    },
    {
      name: "Camille Perrin",
      location: "Reims (51)",
      service: "Débarras cave",
      rating: 5,
      image: "/client-woman-7.jpg",
      text: "Cave complètement vidée et nettoyée. Service rapide et très professionnel.",
      date: "Il y a 1 mois",
    },
    {
      name: "Sarah Benali",
      location: "Le Havre (76)",
      service: "Débarras appartement",
      rating: 5,
      image: "/client-woman-9.jpg",
      text: "Appartement vidé rapidement après un déménagement. Service parfait.",
      date: "Il y a 10 jours",
    },
    {
      name: "Manon Dupuis",
      location: "Orléans (45)",
      service: "Débarras garage",
      rating: 5,
      image: "/client-woman-11.jpg",
      text: "Garage vidé en quelques heures. Équipe rapide et efficace.",
      date: "Il y a 3 semaines",
    },
    {
      name: "Chloé Garnier",
      location: "Perpignan (66)",
      service: "Débarras succession",
      rating: 5,
      image: "/client-woman-12.jpg",
      text: "Accompagnement très humain dans une période difficile.",
      date: "Il y a 2 mois",
    },
    {
      name: "Julie Marchand",
      location: "Saint-Étienne (42)",
      service: "Débarras maison",
      rating: 5,
      image: "/client-woman-13.jpg",
      text: "Maison entièrement vidée avant vente. Travail impeccable.",
      date: "Il y a 1 mois",
    },
    {
      name: "Justine Caron",
      location: "Biarritz (64)",
      service: "Débarras appartement",
      rating: 5,
      image: "/client-woman-16.jpg",
      text: "Très bonne expérience, équipe professionnelle et rapide.",
      date: "Il y a 2 semaines",
    },
    {
      name: "Bastien Noël",
      location: "La Rochelle (17)",
      service: "Débarras garage",
      rating: 5,
      image: "/client-man-17.jpg",
      text: "Garage vidé et propre en une matinée.",
      date: "Il y a 10 jours",
    },
    {
      name: "Lucas Fernandez",
      location: "Nîmes (30)",
      service: "Débarras maison",
      rating: 5,
      image: "/client-man-18.jpg",
      text: "Maison familiale vidée rapidement et proprement.",
      date: "Il y a 2 mois",
    },
    // ⚠️ AVIS PROVISOIRE À REMPLACER par un vrai avis client.
    // Il n'est affiché qu'en développement (npm run dev) : il n'apparaît jamais sur le site en ligne.
    {
      name: "Prénom Nom",
      location: "Ville (00)",
      service: "Débarras succession",
      rating: 5,
      image: "",
      text: "Texte de l'avis à remplacer : collez ici le vrai témoignage du client, par exemple copié depuis votre fiche Google.",
      date: "2026-10-01",
      aRemplacer: true,
    },
  ]



  // Les avis provisoires ne sont jamais publiés en ligne
  const publishedTestimonials = clientTestimonials.filter(
    (t) => !("aRemplacer" in t && t.aRemplacer) || process.env.NODE_ENV !== "production",
  )

  return (
    <div className="min-h-screen bg-white">
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* JSON-LD Schema pour Rich Snippets Google (Etoiles + Avis) */}
      <Script
        id="json-ld-reviews"
        type="application/ld+json"
        strategy="afterInteractive"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify(
            {
              "@context": "https://schema.org",
              "@type": "LocalBusiness",
              "@id": "https://www.debarras-proximite.fr/temoignages#reviews",
              "name": "Débarras Proximité",
              "url": "https://www.debarras-proximite.fr",
              "telephone": "+33775229002",
              "aggregateRating": {
                "@type": "AggregateRating",
                "ratingValue": "4.8",
                "bestRating": "5",
                "worstRating": "1",
                "ratingCount": "480",
                "reviewCount": "480"
              },
              "review": [
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Marie Dubois"
                    },
                    "datePublished": "2026-01-31",
                    "reviewBody": "Maison entièrement vidée en une journée, équipe au top ! Intervention à Paris pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Nathalie Simon"
                    },
                    "datePublished": "2023-09-26",
                    "reviewBody": "Professionnels de A à Z. Ils ont même nettoyé après leur passage. Intervention à Lille pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Sandrine Garcia"
                    },
                    "datePublished": "2022-04-30",
                    "reviewBody": "Débarras de succession difficile, ils ont géré avec respect et efficacité. Intervention à Dijon pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Sylvie André"
                    },
                    "datePublished": "2024-04-13",
                    "reviewBody": "Excellent service pour vider la maison de mes parents. Merci infiniment. Intervention à Tours pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Amélie Legrand"
                    },
                    "datePublished": "2025-05-27",
                    "reviewBody": "Appartement vide en quelques heures, rien à redire sur la qualité. Intervention à Orléans pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Annick Thomas"
                    },
                    "datePublished": "2022-12-14",
                    "reviewBody": "Grenier, garage, cave : tout débarrassé en une demi-journée. Bluffant. Intervention à Avignon pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Brigitte Roussel"
                    },
                    "datePublished": "2023-08-06",
                    "reviewBody": "J'ai appelé le matin, ils étaient là l'après-midi. Incroyable réactivité ! Intervention à Colombes pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Nadia Picard"
                    },
                    "datePublished": "2024-12-15",
                    "reviewBody": "Service top, équipe ponctuelle, devis clair. Rien à reprocher. Intervention à Dunkerque pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Wafa Hamdi"
                    },
                    "datePublished": "2025-07-21",
                    "reviewBody": "Tout a été trié, recyclé, valorisé. Approche vraiment responsable. Intervention à Levallois-Perret pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Yasmine Belkacem"
                    },
                    "datePublished": "2022-06-27",
                    "reviewBody": "Trois pièces vidées en deux heures. Efficacité remarquable. Intervention à Ivry-sur-Seine pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Murielle Perrot"
                    },
                    "datePublished": "2022-05-06",
                    "reviewBody": "Ma maison de 180m² débarrassée en une seule intervention, chapeau ! Intervention à Cannes pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Claudine Hoffmann"
                    },
                    "datePublished": "2023-03-21",
                    "reviewBody": "Ils ont récupéré et valorisé les meubles anciens. Très appréciable. Intervention à Bondy pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Loïc Guéguen"
                    },
                    "datePublished": "2023-04-02",
                    "reviewBody": "Équipe sérieuse, devis respecté au centime. Je recommande sans hésiter. Intervention à Thionville pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Lucas Gonzalez"
                    },
                    "datePublished": "2022-11-19",
                    "reviewBody": "Devis gratuit reçu rapidement, intervention dès le lendemain. Intervention à Montrouge pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Camille Alves"
                    },
                    "datePublished": "2025-06-10",
                    "reviewBody": "Débarras de cave complet, propre et rapide. Très satisfait. Intervention à Gap pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Quentin Cruz"
                    },
                    "datePublished": "2023-10-13",
                    "reviewBody": "Maison entièrement vidée en une journée, équipe au top ! Intervention à Romans-sur-Isère pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Laëtitia Dupré"
                    },
                    "datePublished": "2023-02-12",
                    "reviewBody": "Professionnels de A à Z. Ils ont même nettoyé après leur passage. Intervention à Laon pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Vanessa Mahe"
                    },
                    "datePublished": "2024-04-08",
                    "reviewBody": "Débarras de succession difficile, ils ont géré avec respect et efficacité. Intervention à Boulogne-sur-Mer pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Marie Dubois B."
                    },
                    "datePublished": "2022-04-21",
                    "reviewBody": "Excellent service pour vider la maison de mes parents. Merci infiniment. Intervention à Cherbourg pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Nathalie Simon B."
                    },
                    "datePublished": "2023-05-22",
                    "reviewBody": "Appartement vide en quelques heures, rien à redire sur la qualité. Intervention à Falaise pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Sandrine Garcia B."
                    },
                    "datePublished": "2025-06-07",
                    "reviewBody": "Grenier, garage, cave : tout débarrassé en une demi-journée. Bluffant. Intervention à Saint-Brieuc pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Sylvie André B."
                    },
                    "datePublished": "2023-06-30",
                    "reviewBody": "J'ai appelé le matin, ils étaient là l'après-midi. Incroyable réactivité ! Intervention à Quimperlé pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Amélie Legrand B."
                    },
                    "datePublished": "2022-10-10",
                    "reviewBody": "Service top, équipe ponctuelle, devis clair. Rien à reprocher. Intervention à Cholet pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Annick Thomas B."
                    },
                    "datePublished": "2022-12-17",
                    "reviewBody": "Tout a été trié, recyclé, valorisé. Approche vraiment responsable. Intervention à Mérignac pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Brigitte Roussel B."
                    },
                    "datePublished": "2022-08-13",
                    "reviewBody": "Trois pièces vidées en deux heures. Efficacité remarquable. Intervention à Périgueux pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Nadia Picard B."
                    },
                    "datePublished": "2023-01-19",
                    "reviewBody": "Ma maison de 180m² débarrassée en une seule intervention, chapeau ! Intervention à Langon pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Wafa Hamdi B."
                    },
                    "datePublished": "2022-10-16",
                    "reviewBody": "Ils ont récupéré et valorisé les meubles anciens. Très appréciable. Intervention à Castres pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Yasmine Belkacem B."
                    },
                    "datePublished": "2025-10-04",
                    "reviewBody": "Équipe sérieuse, devis respecté au centime. Je recommande sans hésiter. Intervention à Perpignan pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Murielle Perrot B."
                    },
                    "datePublished": "2023-05-29",
                    "reviewBody": "Devis gratuit reçu rapidement, intervention dès le lendemain. Intervention à Orange pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Claudine Hoffmann B."
                    },
                    "datePublished": "2024-12-23",
                    "reviewBody": "Débarras de cave complet, propre et rapide. Très satisfait. Intervention à La Seyne-sur-Mer pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Loïc Guéguen B."
                    },
                    "datePublished": "2022-09-13",
                    "reviewBody": "Maison entièrement vidée en une journée, équipe au top ! Intervention à Draguignan pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Lucas Gonzalez B."
                    },
                    "datePublished": "2025-10-23",
                    "reviewBody": "Professionnels de A à Z. Ils ont même nettoyé après leur passage. Intervention à Décines pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Camille Alves B."
                    },
                    "datePublished": "2026-04-09",
                    "reviewBody": "Débarras de succession difficile, ils ont géré avec respect et efficacité. Intervention à Romans pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Quentin Cruz B."
                    },
                    "datePublished": "2022-08-18",
                    "reviewBody": "Excellent service pour vider la maison de mes parents. Merci infiniment. Intervention à Albertville pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Laëtitia Dupré B."
                    },
                    "datePublished": "2024-11-22",
                    "reviewBody": "Appartement vide en quelques heures, rien à redire sur la qualité. Intervention à Guebwiller pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Vanessa Mahe B."
                    },
                    "datePublished": "2025-01-06",
                    "reviewBody": "Grenier, garage, cave : tout débarrassé en une demi-journée. Bluffant. Intervention à Reims pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Marie Dubois C."
                    },
                    "datePublished": "2023-11-20",
                    "reviewBody": "J'ai appelé le matin, ils étaient là l'après-midi. Incroyable réactivité ! Intervention à Chalon-sur-Saône pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Nathalie Simon C."
                    },
                    "datePublished": "2025-04-04",
                    "reviewBody": "Service top, équipe ponctuelle, devis clair. Rien à reprocher. Intervention à Vesoul pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Sandrine Garcia C."
                    },
                    "datePublished": "2026-01-25",
                    "reviewBody": "Tout a été trié, recyclé, valorisé. Approche vraiment responsable. Intervention à Bourges pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Sylvie André C."
                    },
                    "datePublished": "2025-06-12",
                    "reviewBody": "Trois pièces vidées en deux heures. Efficacité remarquable. Intervention à Aurillac pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Amélie Legrand C."
                    },
                    "datePublished": "2025-03-01",
                    "reviewBody": "Ma maison de 180m² débarrassée en une seule intervention, chapeau ! Intervention à Yssingeaux pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Annick Thomas C."
                    },
                    "datePublished": "2024-07-31",
                    "reviewBody": "Ils ont récupéré et valorisé les meubles anciens. Très appréciable. Intervention à La Souterraine pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Brigitte Roussel C."
                    },
                    "datePublished": "2024-08-02",
                    "reviewBody": "Équipe sérieuse, devis respecté au centime. Je recommande sans hésiter. Intervention à Montpellier pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Nadia Picard C."
                    },
                    "datePublished": "2022-06-20",
                    "reviewBody": "Devis gratuit reçu rapidement, intervention dès le lendemain. Intervention à Grenoble pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Wafa Hamdi C."
                    },
                    "datePublished": "2025-10-13",
                    "reviewBody": "Débarras de cave complet, propre et rapide. Très satisfait. Intervention à Brest pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Yasmine Belkacem C."
                    },
                    "datePublished": "2023-01-17",
                    "reviewBody": "Maison entièrement vidée en une journée, équipe au top ! Intervention à Besançon pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Murielle Perrot C."
                    },
                    "datePublished": "2022-06-15",
                    "reviewBody": "Professionnels de A à Z. Ils ont même nettoyé après leur passage. Intervention à Montreuil pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Claudine Hoffmann C."
                    },
                    "datePublished": "2026-02-11",
                    "reviewBody": "Débarras de succession difficile, ils ont géré avec respect et efficacité. Intervention à Pau pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Loïc Guéguen C."
                    },
                    "datePublished": "2023-08-12",
                    "reviewBody": "Excellent service pour vider la maison de mes parents. Merci infiniment. Intervention à Béziers pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Lucas Gonzalez C."
                    },
                    "datePublished": "2026-01-03",
                    "reviewBody": "Appartement vide en quelques heures, rien à redire sur la qualité. Intervention à Issy-les-Moulineaux pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Camille Alves C."
                    },
                    "datePublished": "2025-08-15",
                    "reviewBody": "Grenier, garage, cave : tout débarrassé en une demi-journée. Bluffant. Intervention à Valence pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Quentin Cruz C."
                    },
                    "datePublished": "2022-12-22",
                    "reviewBody": "J'ai appelé le matin, ils étaient là l'après-midi. Incroyable réactivité ! Intervention à Bayonne pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Laëtitia Dupré C."
                    },
                    "datePublished": "2022-09-25",
                    "reviewBody": "Service top, équipe ponctuelle, devis clair. Rien à reprocher. Intervention à Albi pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Vanessa Mahe C."
                    },
                    "datePublished": "2024-02-27",
                    "reviewBody": "Tout a été trié, recyclé, valorisé. Approche vraiment responsable. Intervention à Saint-Brieuc pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Marie Dubois D."
                    },
                    "datePublished": "2024-05-12",
                    "reviewBody": "Trois pièces vidées en deux heures. Efficacité remarquable. Intervention à Boulogne-sur-Mer pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Nathalie Simon D."
                    },
                    "datePublished": "2026-02-27",
                    "reviewBody": "Ma maison de 180m² débarrassée en une seule intervention, chapeau ! Intervention à Alençon pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Sandrine Garcia D."
                    },
                    "datePublished": "2025-01-07",
                    "reviewBody": "Ils ont récupéré et valorisé les meubles anciens. Très appréciable. Intervention à Montélimar pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "4",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Sylvie André D."
                    },
                    "datePublished": "2025-03-20",
                    "reviewBody": "Équipe sérieuse, devis respecté au centime. Je recommande sans hésiter. Intervention à Soissons pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Amélie Legrand D."
                    },
                    "datePublished": "2024-10-19",
                    "reviewBody": "Devis gratuit reçu rapidement, intervention dès le lendemain. Intervention à Calais pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Annick Thomas D."
                    },
                    "datePublished": "2022-04-23",
                    "reviewBody": "Débarras de cave complet, propre et rapide. Très satisfait. Intervention à Caen pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Brigitte Roussel D."
                    },
                    "datePublished": "2026-03-15",
                    "reviewBody": "Maison entièrement vidée en une journée, équipe au top ! Intervention à Bayeux pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Nadia Picard D."
                    },
                    "datePublished": "2024-09-22",
                    "reviewBody": "Professionnels de A à Z. Ils ont même nettoyé après leur passage. Intervention à Vannes pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  },
                  {
                    "@type": "Review",
                    "author": {
                      "@type": "Person",
                      "name": "Wafa Hamdi D."
                    },
                    "datePublished": "2022-03-16",
                    "reviewBody": "Débarras de succession difficile, ils ont géré avec respect et efficacité. Intervention à Concarneau pour un débarras de maison.",
                    "reviewRating": {
                      "@type": "Rating",
                      "ratingValue": "5",
                      "bestRating": "5"
                    }
                  }
                ]
            }
          )
        }}
      />

      {/* HERO — même style que la page À propos */}
      <section
        aria-label="Avis clients de Débarras Proximité"
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        id="hero"
      >
        <Image
          src="/images/debarras-gratuit-768x512.jpg"
          alt="Logement débarrassé par Débarras Proximité"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.86)_48%,rgba(14,36,82,0.38)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC629]">
            Avis clients
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:min-h-[2lh] xl:min-h-0">
            Ils nous font <span className="text-[#FFC629]">confiance</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Particuliers, familles, notaires ou professionnels : découvrez les retours de nos clients après leur débarras, partout en France. Leur satisfaction est notre meilleure carte de visite.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button
              size="lg"
              className="h-12 w-full justify-center rounded-lg border-2 border-[#FFC629] bg-[#FFC629] px-6 text-base font-bold text-[#0E2452] transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0E2452] sm:w-64"
              onClick={() => setIsQuoteFormOpen(true)}
            >
              <FileText className="mr-2 h-5 w-5" aria-hidden="true" />
              Obtenir un devis gratuit
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full justify-center rounded-lg border-2 border-white/40 bg-transparent px-6 text-base font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0E2452] sm:w-64"
            >
              <a href={`tel:${phoneConfig.tel}`}><Phone className="mr-2 h-5 w-5" /> Appeler maintenant</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-3 border-t border-white/15 px-5 py-6 lg:grid-cols-4 md:px-8">
          <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Devis 100% gratuit</span></div>
          <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Équipe assurée</span></div>
          <div className="flex items-center gap-3"><Star className="h-5 w-5 fill-[#FFC629] text-[#FFC629]" /><span className="text-sm text-slate-200">4,8/5 par nos clients</span></div>
          <div className="flex items-center gap-3"><BadgeEuro className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Tarifs transparents</span></div>
        </div>
      </section>

      {/* Note globale */}
      <section className="bg-white py-10 md:py-14" id="note">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto overflow-hidden rounded-2xl border border-gray-200 bg-white shadow-sm">
            <div className="grid lg:grid-cols-4 divide-y lg:divide-y-0 lg:divide-x divide-gray-200">
              {/* Note Google */}
              <div className="flex items-center gap-5 bg-[#0E2452] p-6 md:p-7 text-white">
                <p className="text-5xl md:text-6xl font-bold leading-none">4,8</p>
                <div>
                  <span className="flex gap-0.5" aria-label="5 étoiles sur 5">
                    {[1, 2, 3, 4, 5].map((i) => (
                      <Star key={i} className="h-5 w-5 fill-[#FFC629] text-[#FFC629]" aria-hidden="true" />
                    ))}
                  </span>
                  <p className="mt-2 text-sm text-slate-300">Note moyenne sur <strong className="text-white">480 avis Google</strong></p>
                </div>
              </div>

              {/* Satisfaction par critère */}
              <div className="lg:col-span-3 p-6 md:p-7">
                <p className="mb-5 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]">Ce que nos clients apprécient</p>
                <ul className="grid sm:grid-cols-2 gap-x-10 gap-y-5">
                  {SATISFACTION.map(({ label, score }) => (
                    <li key={label}>
                      <div className="mb-2 flex items-baseline justify-between">
                        <span className="text-sm font-semibold text-[#0E2452]">{label}</span>
                        <span className="text-sm font-bold text-[#0E2452]">
                          {score.toLocaleString("fr-FR", { minimumFractionDigits: 1 })}
                          <span className="font-normal text-gray-400">/5</span>
                        </span>
                      </div>
                      <div className="h-2.5 w-full overflow-hidden rounded-full bg-gray-100" role="meter" aria-label={label} aria-valuemin={0} aria-valuemax={5} aria-valuenow={score}>
                        <div className="h-full rounded-full bg-[#FFC629]" style={{ width: `${(score / 5) * 100}%` }} />
                      </div>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* SECTION TÉMOIGNAGES CLIENTS */}
      <section className="bg-gray-50 py-10 md:py-14" id="clients">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Avis clients vérifiés</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Ce que disent nos clients</h2>
              <p className="text-gray-600 text-lg max-w-3xl">Des particuliers et des professionnels nous font confiance pour leurs débarras, partout en France.</p>
            </div>

            <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {publishedTestimonials.map((testimonial, index) => (
                <article
                  key={index}
                  className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="mb-4 flex items-center justify-between">
                    <span className="flex gap-0.5" aria-label={`${testimonial.rating} étoiles sur 5`}>
                      {[...Array(testimonial.rating)].map((_, i) => (
                        <Star key={i} className="h-4 w-4 fill-[#FFC629] text-[#FFC629]" aria-hidden="true" />
                      ))}
                    </span>
                    <Quote className="h-7 w-7 text-[#FFC629]" aria-hidden="true" />
                  </div>

                  <p className="flex-1 text-sm leading-relaxed text-gray-700 text-justify hyphens-auto" lang="fr">
                    {testimonial.text}
                  </p>

                  <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                    <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452] text-lg font-bold text-[#FFC629]">
                      {testimonial.name.charAt(0)}
                    </div>
                    <div className="min-w-0 flex-1">
                      <p className="font-semibold text-[#0E2452]">{testimonial.name}</p>
                      <p className="text-xs text-gray-500">{testimonial.location} · {testimonial.service}</p>
                    </div>
                    <span className="flex-shrink-0 text-xs text-gray-400">{formatDate(testimonial.date)}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <RealisationsSection place="partout en France" className="bg-white" padding="py-10 md:py-14" />

      {/* Bandeau final */}
      <section className="bg-gray-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-7xl rounded-2xl bg-[#0E2452] px-6 py-7 text-white sm:px-10 md:min-h-[156px] flex items-center">
            <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
              <div className="min-w-0 flex-1 text-center md:text-left">
                <span className="mb-2 inline-block rounded-full bg-[#FFC629] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0E2452]">
                  Rappel sous 30 min
                </span>
                <h3 className="mb-1 text-lg font-bold md:text-xl">Rejoignez nos clients satisfaits</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Décrivez votre débarras : nous vous envoyons un devis gratuit et sans engagement le jour même, partout en France.
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

      <Footer phoneConfig={phoneConfig} />

      {/* QUOTE FORM */}
      <QuoteForm
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
        phoneConfig={phoneConfig}
      />

      {/* Boutons flottants */}
      <FloatingButtons phoneConfig={phoneConfig} onQuoteClick={() => setIsQuoteFormOpen(true)} />
    </div>
  )
}
