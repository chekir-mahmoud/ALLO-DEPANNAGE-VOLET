"use client"

import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import HeroQuoteForm from "@/components/hero-quote-form"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import FloatingButtons from "@/components/FloatingButtons"
import BrandsSection from "@/components/sections/brands-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import TarifsSection from "@/components/sections/tarifs-section"
import WhyChooseUsSection from "@/components/sections/why-choose-us-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import ArticleCard from "@/app/blog/article-card"
import { articles } from "@/app/blog/data"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import { servicePath } from "@/lib/site"
import { ACTIVE_DEPARTMENTS } from "@/lib/departments"
import { VOLET_SERVICES } from "@/lib/services-volet-roulant"
import { VOLET_INTERVENTIONS } from "@/lib/testimonials/exemples-volet-roulant"
import {
  BadgeCheck, Building2, CheckCircle2, ChevronDown, ChevronRight, Clock, FileText, MapPin, Phone, ShieldCheck, Wrench,
} from "lucide-react"

// Questions fréquentes générales (affichées et transmises à Google)
export const HOME_FAQ = [
  {
    question: "Mon volet roulant est bloqué : que faire ?",
    answer: "Ne forcez pas sur la manivelle, la sangle ou l'interrupteur : vous risqueriez d'aggraver la panne. Coupez l'alimentation s'il s'agit d'un volet électrique, puis contactez-nous. Nous intervenons en urgence 7j/7 pour débloquer le volet, identifier la cause (lame cassée, sangle usée, moteur ou axe défaillant) et le remettre en service.",
  },
  {
    question: "Combien coûte le dépannage d'un volet roulant ?",
    answer: "Le prix dépend de la panne et des pièces à remplacer. À titre indicatif : diagnostic et déplacement dès 69 €, remplacement de sangle dès 79 €, remplacement de lames dès 119 €, remplacement de moteur dès 290 €. Le devis est gratuit et vous connaissez le prix avant toute intervention.",
  },
  {
    question: "Réparez-vous toutes les marques de volets roulants ?",
    answer: "Oui. Nous intervenons sur toutes les marques de volets roulants et de moteurs : Somfy, Bubendorff, Profalux, Simu, Nice, Franciaflex et bien d'autres, ainsi que sur les volets manuels à sangle ou à manivelle et les volets électriques filaires, radio ou solaires.",
  },
  {
    question: "Peut-on motoriser un volet roulant manuel ?",
    answer: "Oui, dans la grande majorité des cas. Nous remplaçons la sangle ou la manivelle par un moteur tubulaire adapté, avec interrupteur ou télécommande, et nous pouvons centraliser plusieurs volets ou les relier à une box domotique.",
  },
  {
    question: "Intervenez-vous aussi sur les rideaux métalliques et les stores ?",
    answer: "Oui. Nous installons, dépannons et entretenons les rideaux métalliques des commerces et locaux professionnels, ainsi que les stores bannes et stores intérieurs. Ces interventions sont possibles partout en France, avec un devis gratuit.",
  },
]


const LATEST_ARTICLES = [...articles].sort((a, b) => b.date.localeCompare(a.date)).slice(0, 3)

export default function HomeClient() {
  const phoneConfig = DEFAULT_PHONE
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)
  const departmentCount = Object.keys(ACTIVE_DEPARTMENTS).length

  return (
    <div className="min-h-screen bg-white">
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que l'en-tête des pages ville, sans ville */}
      <section
        aria-label="Dépannage et réparation de volets roulants partout en France"
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        id="hero"
      >
        <Image
          src="/images/volet/mecanisme-coffre-volet-roulant.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="-z-10 object-cover object-center opacity-35"
        />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.88)_55%,rgba(14,36,82,0.6)_100%)]" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-center">
            <div className="lg:self-stretch lg:flex lg:flex-col lg:-mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-5">
                Dépannage et réparation de volets roulants <span className="text-[#FFC629]">partout en France</span>.
              </h1>

              <p className="text-lg leading-relaxed text-slate-200 mb-6 max-w-2xl text-justify hyphens-auto" lang="fr">
                Volet bloqué, moteur en panne, lames cassées ou sangle usée : nos techniciens interviennent 7j/7 pour réparer, motoriser ou remplacer vos volets roulants, rideaux métalliques et stores.
              </p>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                {["Devis gratuit et sans engagement", "Dépannage d'urgence 7j/7", "Toutes marques : Somfy, Bubendorff…", "Pièces et main-d'œuvre garanties"].map((item) => (
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

            {/* Formulaire de devis */}
            <HeroQuoteForm />
          </div>
        </div>
      </section>

      {/* NOS PRESTATIONS */}
      <section className="bg-white py-10 md:py-14" id="services">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Nos prestations</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Une solution pour chaque volet roulant</h2>
              <p className="text-gray-600 text-lg max-w-3xl">Particuliers, commerces et copropriétés : dépannage, réparation, installation et motorisation, avec un devis gratuit avant toute intervention.</p>
            </div>
            <Link
              href="/nos-services"
              className="group inline-flex flex-shrink-0 items-center font-semibold text-[#0E2452] underline decoration-[#FFC629] decoration-2 underline-offset-4"
            >
              Toutes nos prestations
              <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <ul className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
            {VOLET_SERVICES.map((ss) => (
              <li key={ss.slug}>
                <Link
                  href={servicePath(ss.slug)}
                  className="group relative flex h-64 overflow-hidden rounded-2xl"
                >
                  <Image
                    src={ss.image || "/placeholder.svg"}
                    alt={ss.label}
                    fill
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2452]/95 via-[#0E2452]/40 to-transparent" />
                  <div className="relative mt-auto p-6">
                    <div className="mb-3 h-1 w-12 rounded-full bg-[#FFC629] transition-all duration-300 group-hover:w-20" />
                    <h3 className="text-xl font-bold leading-tight text-white">{ss.label}</h3>
                    <p className="mt-1 text-sm font-medium text-[#FFC629]">{ss.sub}</p>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <BrandsSection className="bg-white" padding="pt-0 pb-10 md:pb-14" />

      <HowItWorksSection className="bg-gray-50" />

      <TarifsSection place="en France" className="bg-white" padding="py-10 md:py-14" />

      <WhyChooseUsSection className="bg-gray-50" />

      {/* ZONE D'INTERVENTION */}
      <section className="bg-white py-10 md:py-14" id="zone">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Présence nationale</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Le même service, partout en France</h2>
              <p className="text-gray-600 text-lg max-w-3xl">Grandes villes, villes moyennes ou communes rurales : nos techniciens se déplacent dans toute la France métropolitaine et en outre-mer pour dépanner vos volets roulants.</p>
            </div>
            <Link
              href="/zone-intervention"
              className="group inline-flex flex-shrink-0 items-center font-semibold text-[#0E2452] underline decoration-[#FFC629] decoration-2 underline-offset-4"
            >
              Voir les départements
              <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <ul className="max-w-7xl mx-auto grid grid-cols-2 lg:grid-cols-4 gap-4">
            {[
              { Icon: MapPin, val: `${departmentCount}`, label: "Départements couverts" },
              { Icon: Building2, val: "5 500+", label: "Communes desservies" },
              { Icon: Clock, val: "7j/7", label: "Dépannage d'urgence" },
              { Icon: BadgeCheck, val: "Toutes", label: "Marques de volets" },
            ].map(({ Icon, val, label }) => (
              <li key={label} className="flex flex-col items-center gap-3 rounded-2xl border border-gray-200 bg-gray-50 px-3 py-5 text-center sm:flex-row sm:gap-4 sm:p-5 sm:text-left">
                <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452]">
                  <Icon className="h-6 w-6 text-[#FFC629]" aria-hidden="true" />
                </span>
                <div>
                  <p className="text-2xl md:text-3xl font-bold leading-none text-[#0E2452]">{val}</p>
                  <p className="mt-1 text-xs text-gray-500 sm:text-sm">{label}</p>
                </div>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <TestimonialsSection testimonials={VOLET_INTERVENTIONS} examples className="bg-gray-50" padding="py-10 md:py-14" />

      {/* DERNIERS ARTICLES */}
      <section className="bg-white py-10 md:py-14" id="blog">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Blog & conseils</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">Nos derniers conseils</h2>
            </div>
            <Link
              href="/blog"
              className="group inline-flex flex-shrink-0 items-center font-semibold text-[#0E2452] underline decoration-[#FFC629] decoration-2 underline-offset-4"
            >
              Tous nos articles
              <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
          <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {LATEST_ARTICLES.map((article) => (
              <ArticleCard key={article.id} article={article} />
            ))}
          </div>
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-gray-50 py-10 md:py-14" id="faq">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": HOME_FAQ.map((f) => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
            }),
          }}
        />
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10 flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
            <div>
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Questions fréquentes</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">Vos questions sur les volets roulants</h2>
            </div>
            <Link
              href="/foire-aux-questions"
              className="group inline-flex flex-shrink-0 items-center font-semibold text-[#0E2452] underline decoration-[#FFC629] decoration-2 underline-offset-4"
            >
              Toutes les questions
              <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>
          <div className="max-w-7xl mx-auto space-y-3">
            {HOME_FAQ.map((faq) => (
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

          {/* Bandeau CTA */}
          <div className="mt-12 mx-auto max-w-7xl rounded-2xl bg-[#0E2452] px-6 py-7 text-white sm:px-10 md:min-h-[156px] flex items-center">
            <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
              <div className="min-w-0 flex-1 text-center md:text-left">
                <span className="mb-2 inline-block rounded-full bg-[#FFC629] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0E2452]">
                  Rappel sous 30 min
                </span>
                <h3 className="mb-1 text-lg font-bold md:text-xl">Un volet roulant bloqué ou en panne ?</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Dépannage d'urgence 7j/7, devis gratuit, techniciens qualifiés partout en France.
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

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} phoneConfig={phoneConfig} />

      <FloatingButtons phoneConfig={phoneConfig} onQuoteClick={() => setIsQuoteFormOpen(true)} />
    </div>
  )
}
