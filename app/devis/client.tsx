"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import ContactFormInline from "@/components/contact-form-inline"
import QuoteForm from "@/components/quote-form"
import FloatingButtons from "@/components/FloatingButtons"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import { BadgeCheck, CheckCircle2, Clock, FileText, Phone, Wrench, Star, BadgeEuro } from "lucide-react"

const ENGAGEMENTS = [
  { icon: Clock, title: "Rappel sous 30 minutes", text: "Nous revenons vers vous rapidement avec une première estimation." },
  { icon: CheckCircle2, title: "Devis gratuit", text: "Un devis clair, sans engagement, remis avant toute intervention." },
  { icon: Wrench, title: "Toutes marques", text: "Somfy, Bubendorff, Profalux, Simu, Nice : volets manuels et électriques." },
  { icon: BadgeCheck, title: "Travail garanti", text: "Pièces et main-d'œuvre garanties, intervention soignée." },
]

export default function DevisClient() {
  const phoneConfig = DEFAULT_PHONE
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que la page À propos */}
      <section
        aria-label="Demande de devis de volet roulant"
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        id="hero"
      >
        <Image
          src="/images/volet/depannage-volet-roulant-bloque.jpg"
          alt="Technicien Allo Dépannage Volet intervenant sur un volet roulant"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.86)_48%,rgba(14,36,82,0.38)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC629]">
            Gratuit et sans engagement
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:min-h-[2lh] xl:min-h-0">
            Demandez votre <span className="text-[#FFC629]">devis gratuit</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Volet bloqué, moteur en panne, réparation, installation, motorisation, rideau métallique ou store : décrivez votre besoin, nous vous rappelons en moins de 30 minutes.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button
              asChild
              size="lg"
              className="h-12 w-full justify-center rounded-lg border-2 border-[#FFC629] bg-[#FFC629] px-6 text-base font-bold text-[#0E2452] transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0E2452] sm:w-64"
            >
              <a href="#formulaire">
                <FileText className="mr-2 h-5 w-5" aria-hidden="true" />
                Remplir le formulaire
              </a>
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

      {/* ENGAGEMENTS + FORMULAIRE — même mise en page que /contact */}
      <section className="scroll-mt-24 bg-white py-10 md:py-14" id="formulaire">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Votre devis</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Décrivez votre panne ou votre projet</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Quelques informations suffisent : nous vous rappelons en moins de 30 minutes. Vous préférez appeler ?{" "}
              <a href={`tel:${phoneConfig.tel}`} className="whitespace-nowrap font-semibold text-[#0E2452] underline decoration-[#FFC629] decoration-2 underline-offset-4">{phoneConfig.display}</a>
            </p>
          </div>

          {/* Bandeau des engagements */}
          <ul className="max-w-7xl mx-auto grid gap-6 rounded-2xl bg-[#0E2452] px-6 py-7 text-white sm:grid-cols-2 sm:px-10 lg:grid-cols-4 lg:gap-0 lg:divide-x lg:divide-white/15">
            {ENGAGEMENTS.map(({ icon: Icon, title, text }, i) => (
              <li key={title} className={`flex items-start gap-4 ${i === 0 ? "lg:pr-6" : i === ENGAGEMENTS.length - 1 ? "lg:pl-6" : "lg:px-6"}`}>
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC629]">
                  <Icon className="h-6 w-6 text-[#0E2452]" aria-hidden="true" />
                </span>
                <div className="min-w-0">
                  <p className="font-bold text-white">{title}</p>
                  <p className="text-sm leading-relaxed text-slate-300">{text}</p>
                </div>
              </li>
            ))}
          </ul>

          {/* Formulaire sur toute la largeur */}
          <div className="max-w-7xl mx-auto mt-10">
            <ContactFormInline
              title="Votre demande de devis"
              subtitle="Remplissez le formulaire, nous vous rappelons en moins de 30 minutes"
              messagePlaceholder="Type de panne ou de projet, volet manuel ou électrique, marque, nombre de volets, dimensions approximatives..."
            />
          </div>
        </div>
      </section>

      <Footer phoneConfig={phoneConfig} />

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} phoneConfig={phoneConfig} />

      <FloatingButtons phoneConfig={phoneConfig} onQuoteClick={() => setIsQuoteFormOpen(true)} />
    </div>
  )
}
