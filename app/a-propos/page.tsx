"use client"

import { Phone, FileText, CheckCircle2, Clock, Star, ChevronRight, BadgeEuro, BadgeCheck, Wrench, Eye } from "lucide-react"
import { Button } from "@/components/ui/button"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { VOLET_SERVICES } from "@/lib/services-volet-roulant"
import { servicePath } from "@/lib/site"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import FloatingButtons from "@/components/FloatingButtons"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import WhyChooseUsSection from "@/components/sections/why-choose-us-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import { VOLET_INTERVENTIONS } from "@/lib/testimonials/exemples-volet-roulant"

export default function AProposPage() {
  const phoneConfig = DEFAULT_PHONE

  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      {/* Header */}
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que l'en-tête des pages département, sans formulaire */}
      <section
        aria-label="À propos de Allo Dépannage Volet"
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        id="hero"
      >
        <Image
          src="/images/volet/installation-volet-roulant.jpg"
          alt="Technicien Allo Dépannage Volet en intervention sur un volet roulant"
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
            À propos de <span className="text-[#FFC629]">Allo Dépannage Volet</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Spécialistes du volet roulant, nos techniciens interviennent partout en France, 7j/7, pour dépanner, réparer, installer et motoriser vos volets roulants, rideaux métalliques et stores.
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

      <section className="bg-white py-10 md:py-14" id="services-showcase">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            {/* Texte à gauche, photo à droite de même hauteur (ordinateur) */}
            <div className="grid lg:grid-cols-2 gap-12 lg:gap-16 items-stretch">
              <div>
                <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Notre métier</p>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E2452] mb-6 leading-tight">
                  Le volet roulant, c&apos;est notre métier
                </h2>
                <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto" lang="fr">
                  <p>
                    Allo Dépannage Volet accompagne les particuliers, les commerçants, les syndics de copropriété et les
                    professionnels pour toutes leurs fermetures, partout en France. Dépannage d&apos;urgence 7j/7, devis gratuit
                    avant toute intervention et tarifs transparents : nous remettons vos volets en service rapidement.
                  </p>
                  <p>
                    Volet bloqué, moteur en panne, sangle cassée ou lames abîmées : chaque intervention commence par un
                    diagnostic précis. Nos techniciens remplacent uniquement les pièces nécessaires, motorisent les volets
                    manuels, posent des volets neufs en rénovation et entretiennent les rideaux métalliques et les stores
                    bannes.
                  </p>
                  <p>
                    Somfy, Bubendorff, Profalux, Simu, Nice ou Franciaflex : nous intervenons sur toutes les marques, avec
                    des pièces de qualité, une garantie sur les pièces et la main-d&apos;œuvre, et un interlocuteur unique du
                    premier appel jusqu&apos;aux tests de fonctionnement.
                  </p>
                </div>
              </div>

              {/* Photo (même hauteur que le texte sur ordinateur) */}
              <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl lg:aspect-auto lg:h-full lg:min-h-[320px]">
                <Image
                  src="/images/volet/depannage-volet-roulant-bloque.jpg"
                  alt="Technicien débloquant un volet roulant"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
            </div>

            {/* Nos prestations : titre puis cartes photo sur une ligne (ordinateur) */}
            <div className="mt-12 mb-6 flex flex-col gap-4 md:flex-row md:items-end md:justify-between">
              <div>
                <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Nos prestations</p>
                <h3 className="text-2xl md:text-3xl font-bold text-[#0E2452]">Une solution pour chaque volet roulant</h3>
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
              {VOLET_SERVICES.map((ss) => (
                <li key={ss.slug}>
                  <Link href={servicePath(ss.slug)} className="group relative flex h-36 overflow-hidden rounded-xl lg:h-44">
                    <Image
                      src={ss.image}
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
              {/* Photo (après le texte sur mobile, pour ne pas suivre l'image de la section précédente) */}
              <div className="order-last lg:order-none">
                <div className="relative aspect-[4/5] w-full overflow-hidden rounded-2xl shadow-xl lg:aspect-auto lg:h-[500px]">
                  <Image
                    src="/images/volet/moteur-tubulaire-volet-roulant.jpg"
                    alt="Moteur tubulaire et axe de volet roulant avant installation"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
              </div>

              {/* Texte */}
              <div>
                <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Notre histoire</p>
                <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-6 leading-tight">
                  Rendre le dépannage de volets roulants simple, rapide et fiable
                </h2>
                <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto" lang="fr">
                  <p>
                    Un volet roulant bloqué, c&apos;est une pièce plongée dans le noir, une maison qui ne ferme plus ou un
                    commerce qui ne peut pas ouvrir. Allo Dépannage Volet est né de cette conviction : chacun mérite un
                    dépanneur réactif, compétent et transparent sur ses prix.
                  </p>
                  <p>
                    Aujourd&apos;hui, nos techniciens interviennent partout en France avec la même méthode : un diagnostic clair,
                    un devis remis avant toute intervention, une réparation durable et des conseils pour bien entretenir vos
                    volets.
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
                  { Icon: Clock, title: "Réactivité", text: "Dépannage d'urgence 7j/7, y compris le week-end et les jours fériés." },
                  { Icon: Wrench, title: "Expertise", text: "Des techniciens formés sur toutes les marques de volets et de moteurs." },
                  { Icon: Eye, title: "Transparence", text: "Un devis clair, sans frais cachés ni mauvaise surprise." },
                  { Icon: BadgeCheck, title: "Durabilité", text: "Réparer plutôt que remplacer, avec des pièces de qualité garanties." },
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

      <TestimonialsSection testimonials={VOLET_INTERVENTIONS} examples className="bg-white" padding="py-10 md:py-14" />

      {/* Bandeau final */}
      <section className="bg-gray-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-7xl rounded-2xl bg-[#0E2452] px-6 py-7 text-white sm:px-10 md:min-h-[156px] flex items-center">
            <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
              <div className="min-w-0 flex-1 text-center md:text-left">
                <span className="mb-2 inline-block rounded-full bg-[#FFC629] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0E2452]">
                  Rappel sous 30 min
                </span>
                <h3 className="mb-1 text-lg font-bold md:text-xl">Un volet roulant en panne ?</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Décrivez-nous votre besoin : nous vous rappelons rapidement et vous remettons un devis gratuit, partout en France, 7j/7.
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
