"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import ContactFormInline from "@/components/contact-form-inline"
import QuoteForm from "@/components/quote-form"

import { Phone, Mail, Clock, FileText, ChevronDown, MessageCircle, CheckCircle2, Star, BadgeEuro } from "lucide-react"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import FloatingButtons from "@/components/FloatingButtons"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import WhyChooseUsSection from "@/components/sections/why-choose-us-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import { VOLET_INTERVENTIONS } from "@/lib/testimonials/exemples-volet-roulant"

const CONTACT_FAQ = [
  {
    question: "En combien de temps êtes-vous rappelé après votre demande ?",
    answer: "Nous vous rappelons en moins de 30 minutes, 7j/7. Pour un volet bloqué ou un rideau métallique coincé, appelez-nous directement : notre service de dépannage fonctionne 24h/24.",
  },
  {
    question: "Puis-je obtenir un devis sans visite ?",
    answer: "Oui, pour de nombreuses interventions. Envoyez-nous une photo du volet, du coffre et, si possible, la marque du moteur par WhatsApp ou par e-mail : c'est souvent suffisant pour vous donner un prix. Pour une installation sur mesure, une prise de mesures sur place est nécessaire.",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer: "Oui, le devis est 100 % gratuit et sans engagement, qu'il soit établi sur photos ou après le diagnostic sur place. Il vous est toujours remis avant toute intervention.",
  },
  {
    question: "Quelles informations préparer avant de nous contacter ?",
    answer: "L'adresse d'intervention, le type de volet (manuel à sangle ou à manivelle, électrique filaire, radio ou solaire), la marque du moteur si vous la connaissez, la panne constatée, le nombre de volets concernés et, si possible, quelques photos. Pour une installation, indiquez les dimensions approximatives des fenêtres.",
  },
  {
    question: "Intervenez-vous en urgence ?",
    answer: "Oui. Pour un volet bloqué en position ouverte ou fermée, ou un rideau métallique de commerce coincé, appelez-nous directement : notre service de dépannage intervient 7j/7, y compris le week-end et les jours fériés.",
  },
]

export default function ContactPage() {
  const phoneConfig = DEFAULT_PHONE

  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que la page À propos */}
      <section
        aria-label="Contacter Allo Dépannage Volet"
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        id="hero"
      >
        <Image
          src="/images/volet/reparation-coffre-volet-roulant.jpg"
          alt="Technicien Allo Dépannage Volet en intervention sur un volet roulant"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.86)_48%,rgba(14,36,82,0.38)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC629]">
            Contact
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:min-h-[2lh] xl:min-h-0">
            Contactez <span className="text-[#FFC629]">Allo Dépannage Volet</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Un volet bloqué, une demande de devis ou une question ? Appelez-nous ou remplissez le formulaire : nous vous rappelons en moins de 30 minutes, 7j/7.
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
          <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Dépannage 7j/7</span></div>
          <div className="flex items-center gap-3"><Star className="h-5 w-5 fill-[#FFC629] text-[#FFC629]" /><span className="text-sm text-slate-200">4,8/5 par nos clients</span></div>
          <div className="flex items-center gap-3"><BadgeEuro className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Tarifs transparents</span></div>
        </div>
      </section>

      {/* COORDONNÉES + FORMULAIRE */}
      <section className="bg-white py-10 md:py-14" id="coordonnees">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Nous contacter</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Parlons de vos volets roulants</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Par téléphone, WhatsApp, e-mail ou via le formulaire : nos techniciens vous répondent rapidement, partout en France (
              <Link href="/zone-intervention" className="font-semibold text-[#0E2452] underline decoration-[#FFC629] decoration-2 underline-offset-4">voir les départements</Link>).
            </p>
          </div>

          {/* Bandeau des coordonnées */}
          <ul className="max-w-7xl mx-auto grid gap-6 rounded-2xl bg-[#0E2452] px-6 py-7 text-white sm:grid-cols-2 sm:px-10 xl:grid-cols-[1fr_1.1fr_1.3fr_1.2fr] xl:gap-0 xl:divide-x xl:divide-white/15">
            <li className="flex items-center gap-4 xl:pr-6">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC629]">
                <Phone className="h-6 w-6 text-[#0E2452]" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">Téléphone</p>
                <a href={`tel:${phoneConfig.tel}`} className="text-lg font-bold text-[#FFC629] hover:underline">{phoneConfig.display}</a>
              </div>
            </li>
            <li className="flex items-center gap-4 xl:px-6">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC629]">
                <MessageCircle className="h-6 w-6 text-[#0E2452]" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">WhatsApp</p>
                <a
                  href={`https://wa.me/${phoneConfig.tel.replace(/[^0-9]/g, "")}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-white hover:text-[#FFC629]"
                >
                  Envoyez vos photos
                </a>
              </div>
            </li>
            <li className="flex items-center gap-4 xl:px-6">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC629]">
                <Mail className="h-6 w-6 text-[#0E2452]" aria-hidden="true" />
              </span>
              <div className="min-w-0">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">E-mail</p>
                <a href="mailto:contact@allo-depannage-volet.fr" className="font-semibold text-white hover:text-[#FFC629] xl:text-sm">contact@<wbr /><span className="whitespace-nowrap">allo-depannage-volet.fr</span></a>
              </div>
            </li>
            <li className="flex items-center gap-4 xl:pl-6">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC629]">
                <Clock className="h-6 w-6 text-[#0E2452]" aria-hidden="true" />
              </span>
              <div className="min-w-0 text-sm">
                <p className="text-xs font-semibold uppercase tracking-[0.12em] text-slate-300">Horaires</p>
                <p className="text-white"><span className="font-semibold">Dépannage :</span> 24h/24, 7j/7</p>
                <p className="text-white"><span className="font-semibold">Devis :</span> rappel sous 30 min</p>
              </div>
            </li>
          </ul>

          {/* Formulaire sur toute la largeur */}
          <div className="max-w-7xl mx-auto mt-10">
            <ContactFormInline />
          </div>
        </div>
      </section>

      {/* Après votre demande : les étapes */}
      <HowItWorksSection className="bg-gray-50" />

      {/* Nos engagements */}
      <WhyChooseUsSection className="bg-white" />

      {/* Avis clients */}
      <TestimonialsSection testimonials={VOLET_INTERVENTIONS} examples className="bg-gray-50" padding="py-10 md:py-14" />

      {/* FAQ contact */}
      <section className="bg-white py-10 md:py-14" id="faq-contact">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": CONTACT_FAQ.map((f) => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
            }),
          }}
        />
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Questions fréquentes</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">Vos questions avant de nous contacter</h2>
          </div>
          <div className="max-w-7xl mx-auto space-y-3">
            {CONTACT_FAQ.map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-gray-200 bg-white transition-colors open:border-[#0E2452] open:shadow-md">
                <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-semibold text-[#0E2452]">{faq.question}</span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452] transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown className="h-4 w-4 text-[#FFC629]" />
                  </span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-justify hyphens-auto" lang="fr">{faq.answer}</div>
              </details>
            ))}
          </div>

          {/* Bandeau urgence */}
          <div className="mt-12 mx-auto max-w-7xl rounded-2xl bg-[#0E2452] px-6 py-7 text-white sm:px-10 md:min-h-[156px] flex items-center">
            <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
              <div className="min-w-0 flex-1 text-center md:text-left">
                <span className="mb-2 inline-block rounded-full bg-[#FFC629] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0E2452]">
                  Dépannage urgent
                </span>
                <h3 className="mb-1 text-lg font-bold md:text-xl">Volet bloqué ou rideau métallique coincé ?</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Appelez-nous directement : un technicien intervient 7j/7, y compris le week-end et les jours fériés.
                </p>
              </div>
              <Button
                asChild
                size="lg"
                className="group h-12 flex-shrink-0 border-2 border-[#FFC629] bg-[#FFC629] px-6 text-base font-bold text-[#0E2452] whitespace-nowrap shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-[#0E2452] hover:text-white hover:shadow-xl"
              >
                <a href={`tel:${phoneConfig.tel}`}>
                  <Phone className="mr-2 h-5 w-5" aria-hidden="true" />
                  {phoneConfig.display}
                </a>
              </Button>
            </div>
          </div>
        </div>
      </section>

      {/* FOOTER */}
      <Footer phoneConfig={phoneConfig} />

      {/* Quote Form */}
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} phoneConfig={phoneConfig} />

      {/* Boutons flottants */}
      <FloatingButtons phoneConfig={phoneConfig} onQuoteClick={() => setIsQuoteFormOpen(true)} />
    </div>
  )
}
