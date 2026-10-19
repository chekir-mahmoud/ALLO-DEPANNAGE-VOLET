"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import FloatingButtons from "@/components/FloatingButtons"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import { Button } from "@/components/ui/button"
import { CheckCircle2, FileText, Mail, Phone, ShieldCheck, Star, BadgeEuro } from "lucide-react"

// Gabarit commun des pages légales (mentions, confidentialité, CGU, CGV, cookies)

// Mise en forme du contenu : une section par ligne, titre numéroté à gauche et texte à droite
const contentClass = [
  "[counter-reset:section] divide-y divide-gray-200",
  "[&_section]:grid [&_section]:gap-3 [&_section]:py-5 md:[&_section]:py-6 lg:[&_section]:grid-cols-[minmax(0,1fr)_minmax(0,2fr)] lg:[&_section]:gap-x-12 lg:[&_section]:gap-y-0 [&_section]:[counter-increment:section]",
  "[&_section>*:not(h2)]:lg:col-start-2",
  "[&_h2]:flex [&_h2]:items-baseline [&_h2]:gap-3 [&_h2]:text-lg md:[&_h2]:text-xl [&_h2]:font-bold [&_h2]:leading-snug [&_h2]:text-[#0E2452] lg:[&_h2]:row-span-[20]",
  "[&_h2]:before:min-w-[2ch] [&_h2]:before:font-bold [&_h2]:before:text-[#FFC629] [&_h2]:before:content-[counter(section,decimal-leading-zero)]",
  "[&_p]:text-gray-700 [&_p]:leading-relaxed [&_p+p]:mt-3 [&_p+ul]:mt-3 [&_ul+p]:mt-3",
  "[&_ul]:list-none [&_ul]:space-y-2 [&_ul]:pl-0",
  "[&_li]:relative [&_li]:pl-5 [&_li]:text-gray-700 [&_li]:leading-relaxed [&_li]:before:absolute [&_li]:before:left-0 [&_li]:before:top-[0.65em] [&_li]:before:h-1.5 [&_li]:before:w-1.5 [&_li]:before:rounded-full [&_li]:before:bg-[#0E2452] [&_li]:before:content-['']",
  "[&_strong]:font-semibold [&_strong]:text-[#0E2452]",
  "[&_a]:font-semibold [&_a]:text-[#0E2452] [&_a]:underline [&_a]:decoration-[#FFC629] [&_a]:decoration-2 [&_a]:underline-offset-4",
].join(" ")

export default function LegalPage({
  title,
  intro,
  current,
  children,
}: {
  title: string
  intro: string
  current: string
  children: React.ReactNode
}) {
  const phoneConfig = DEFAULT_PHONE
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* EN-TÊTE — même style et même hauteur que les autres pages */}
      <section aria-label={title} className="relative isolate overflow-hidden bg-[#0E2452] text-white" id="hero">
        <Image src="/images/debarras-gratuit-768x512.jpg" alt="" aria-hidden="true" fill priority sizes="100vw" className="-z-10 object-cover object-center opacity-30" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.86)_48%,rgba(14,36,82,0.38)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC629]">
            Informations légales
          </p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:min-h-[2lh] xl:min-h-0">{title}</h1>
          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            {intro}
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

      {/* CONTENU — toute la largeur, une section par ligne */}
      <section className="bg-white py-6 md:py-8">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className={contentClass} lang="fr">
            {children}
          </div>
          <p className="mt-6 text-sm text-gray-500">Dernière mise à jour : {new Date().getFullYear()}</p>
        </div>
      </section>

      {/* BANDEAU CONTACT */}
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto flex max-w-7xl flex-col items-center justify-between gap-6 rounded-2xl bg-[#0E2452] px-6 py-7 text-white sm:px-10 md:flex-row">
            <div className="min-w-0 flex-1 text-center md:text-left">
              <span className="mb-2 inline-block rounded-full bg-[#FFC629] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0E2452]">
                Une question ?
              </span>
              <h2 className="mb-1 text-lg font-bold md:text-xl">Notre équipe vous répond</h2>
              <p className="text-sm leading-relaxed text-slate-300">
                Pour toute question sur ces informations ou sur vos données, contactez-nous.
              </p>
            </div>
            <div className="flex w-full flex-col gap-3 sm:w-auto sm:flex-row">
              <a
                href="mailto:contact@debarras-proximite.fr"
                className="inline-flex h-12 w-full items-center justify-center rounded-lg border-2 border-white/40 px-5 font-semibold transition-colors hover:border-white hover:bg-white hover:text-[#0E2452] sm:w-56"
              >
                <Mail className="mr-2 h-5 w-5" aria-hidden="true" /> Nous écrire
              </a>
              <a
                href={`tel:${phoneConfig.tel}`}
                className="inline-flex h-12 w-full items-center justify-center rounded-lg border-2 border-[#FFC629] bg-[#FFC629] px-5 font-bold text-[#0E2452] transition-colors hover:border-white hover:bg-white sm:w-56"
              >
                <Phone className="mr-2 h-5 w-5" aria-hidden="true" /> {phoneConfig.display}
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer phoneConfig={phoneConfig} />

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} phoneConfig={phoneConfig} />

      <FloatingButtons phoneConfig={phoneConfig} onQuoteClick={() => setIsQuoteFormOpen(true)} />
    </div>
  )
}
