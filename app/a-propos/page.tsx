"use client"

import { Phone, FileText, CheckCircle2, ShieldCheck, Star, ChevronRight, BadgeEuro, HeartHandshake, Lock, Eye, Recycle } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import BeforeAfterSlider from "@/components/before-after-slider"
import { SOUS_SERVICES_DEBARRAS } from "@/lib/sous-services/debarras-maison"
import { servicePath } from "@/lib/site"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import FloatingButtons from "@/components/FloatingButtons"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import WhyChooseUsSection from "@/components/sections/why-choose-us-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import { DEBARRAS_MAISON_TESTIMONIALS } from "@/lib/testimonials/service-testimonials"

// Avis affichés avec des villes réparties dans toute la France
const NATIONAL_CITIES = ["Paris", "Lyon", "Marseille", "Toulouse", "Nantes", "Lille", "Strasbourg", "Montpellier", "Rennes", "Nice"]
const NATIONAL_TESTIMONIALS = DEBARRAS_MAISON_TESTIMONIALS.map((t, i) => ({ ...t, location: NATIONAL_CITIES[i % NATIONAL_CITIES.length] }))

export default function AProposPage() {
  const phoneConfig = DEFAULT_PHONE

  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que l'en-tête des pages département, sans formulaire */}
      <section
        aria-label="À propos de Débarras Proximité"
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        id="hero"
      >
        <Image
          src="/images/debarras-gratuit-768x512.jpg"
          alt="Équipe Débarras Proximité en intervention de débarras"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.86)_48%,rgba(14,36,82,0.38)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC629]">
            Qui sommes-nous ?
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:min-h-[2lh] xl:min-h-0">
            À propos de <span className="text-[#FFC629]">Débarras Proximité</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Entreprise de débarras présente dans toute la France, nous vidons maisons, appartements, locaux professionnels, caves, greniers et garages, avec soin, rapidité et dans le respect de l&apos;environnement.
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

      <section className="bg-white py-10 md:py-14" id="services-showcase">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Texte à gauche, photo à droite de même hauteur (ordinateur) */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              <div>
                <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Notre métier</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E2452] mb-6 leading-tight">
                  Le débarras de logements et locaux, c&apos;est notre métier
                </h2>
                <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto" lang="fr">
                  <p>
                    Débarras Proximité accompagne les particuliers, les familles, les notaires et les professionnels pour tous
                    leurs débarras, partout en France. Devis gratuit le jour même, tarifs transparents, tri sélectif et
                    recyclage : nous laissons les lieux vides et propres.
                  </p>
                  <p>
                    Maisons, appartements, locaux professionnels, caves, greniers ou garages : chaque intervention commence
                    par une estimation gratuite, sur photos ou sur place. Nos équipes trient, évacuent et valorisent vos
                    biens (dons aux associations, revente, recyclage en filières agréées), puis rendent les lieux propres,
                    prêts pour une vente, une location ou un état des lieux.
                  </p>
                  <p>
                    Succession, déménagement, vente immobilière ou logement très encombré : nous intervenons avec
                    discrétion et respect, sous 24 à 48 heures, avec un interlocuteur unique du devis à la remise des clés.
                  </p>
                </div>
              </div>

              {/* Avant / après : on fait glisser le curseur (même hauteur que le texte sur ordinateur) */}
              <BeforeAfterSlider
                before="/images/realisations/bureau-avant.webp"
                after="/images/realisations/bureau-apres.webp"
                beforeAlt="Bureau encombré avant le débarras"
                afterAlt="Le même bureau vidé et propre après le débarras"
                className="aspect-[4/5] w-full rounded-2xl shadow-xl lg:aspect-auto lg:h-full lg:min-h-[320px]"
              />
            </div>

            {/* Nos prestations : titre puis cartes photo sur une ligne (ordinateur) */}
            <div className="mt-12 mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Nos prestations</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0E2452]">Une solution pour chaque débarras</h3>
              </div>
              <Link
                href="/nos-services"
                className="group inline-flex flex-shrink-0 items-center font-semibold text-[#0E2452] underline decoration-[#FFC629] decoration-2 underline-offset-4"
              >
                Toutes nos prestations
                <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
              </Link>
            </div>
            <ul className="grid grid-cols-2 gap-3 sm:grid-cols-3 sm:gap-4 lg:grid-cols-6">
              {SOUS_SERVICES_DEBARRAS.map((ss) => (
                <li key={ss.slug}>
                  <Link href={servicePath(ss.slug)} className="group relative flex h-36 overflow-hidden rounded-xl lg:h-44">
                    <Image
                      src={ss.heroImage}
                      alt={ss.label}
                      fill
                      sizes="(min-width: 1024px) 16vw, (min-width: 640px) 33vw, 50vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2452]/95 via-[#0E2452]/45 to-transparent" />
                    <div className="relative mt-auto p-3 sm:p-4">
                      <div className="mb-2 h-1 w-8 rounded-full bg-[#FFC629] transition-all duration-300 group-hover:w-12" />
                      <h3 className="text-sm font-bold leading-tight text-white">{ss.label}</h3>
                    </div>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      {/* Notre histoire et nos valeurs */}
      <section className="bg-gray-50 py-10 md:py-14" id="histoire">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="grid lg:grid-cols-2 gap-10 lg:gap-16 items-center">
              {/* Avant / après (après le texte sur mobile, pour ne pas suivre l'image de la section précédente) */}
              <div className="order-last lg:order-none">
                <BeforeAfterSlider
                  before="/images/realisations/sous-sol-avant.webp"
                  after="/images/realisations/sous-sol-apres.webp"
                  beforeAlt="Sous-sol encombré de cartons et d'objets avant le débarras"
                  afterAlt="Le même sous-sol entièrement vidé après le débarras"
                  className="aspect-[4/5] w-full rounded-2xl shadow-xl lg:aspect-auto lg:h-[500px]"
                />
              </div>

              {/* Texte */}
              <div>
                <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Notre histoire</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-6 leading-tight">
                  Rendre le débarras simple, humain et responsable
                </h2>
                <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto" lang="fr">
                  <p>
                    Vider un logement n&apos;est jamais anodin : une succession, un déménagement, une vente ou un logement trop
                    encombré s&apos;accompagnent souvent de stress et d&apos;émotion. Débarras Proximité est né de cette conviction :
                    chacun mérite un interlocuteur fiable, à l&apos;écoute et transparent sur ses prix.
                  </p>
                  <p>
                    Aujourd&apos;hui, nos équipes interviennent partout en France avec la même méthode : une estimation gratuite,
                    un tri soigneux de chaque pièce, des objets donnés ou revendus, et un logement rendu vide et propre.
                  </p>
                </div>
              </div>
            </div>

            {/* Valeurs : cartes au style du site */}
            <div className="mt-12 md:mt-14">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Nos valeurs</p>
              <h3 className="mb-8 text-2xl md:text-3xl font-bold text-[#0E2452]">Ce qui guide chacune de nos interventions</h3>
              <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
                {[
                  { Icon: HeartHandshake, title: "Respect", text: "Nous traitons chaque bien et chaque souvenir avec délicatesse." },
                  { Icon: Lock, title: "Discrétion", text: "Nos interventions se font en toute confidentialité." },
                  { Icon: Eye, title: "Transparence", text: "Un devis clair, sans frais cachés ni mauvaise surprise." },
                  { Icon: Recycle, title: "Responsabilité", text: "Dons, revente et recyclage plutôt que la décharge." },
                ].map(({ Icon, title, text }) => (
                  <li key={title} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
                    <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452]">
                      <Icon className="h-6 w-6 text-[#FFC629]" aria-hidden="true" />
                    </span>
                    <div>
                      <h4 className="mb-1 text-lg font-bold text-[#0E2452]">{title}</h4>
                      <p className="text-sm leading-relaxed text-gray-600">{text}</p>
                    </div>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <WhyChooseUsSection className="bg-white" />


      <HowItWorksSection className="bg-gray-50" />

      <TestimonialsSection testimonials={NATIONAL_TESTIMONIALS} className="bg-white" padding="py-10 md:py-14" />

      {/* Bandeau final */}
      <section className="bg-gray-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-7xl rounded-2xl bg-[#0E2452] px-6 py-7 text-white sm:px-10 md:min-h-[156px] flex items-center">
            <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
              <div className="min-w-0 flex-1 text-center md:text-left">
                <span className="mb-2 inline-block rounded-full bg-[#FFC629] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0E2452]">
                  Rappel sous 30 min
                </span>
                <h3 className="mb-1 text-lg font-bold md:text-xl">Un projet de débarras ?</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Décrivez-nous votre besoin : nous vous rappelons rapidement et vous envoyons un devis gratuit le jour même, partout en France.
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

      {/* FOOTER */}
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
