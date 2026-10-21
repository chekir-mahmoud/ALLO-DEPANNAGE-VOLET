"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import FloatingButtons from "@/components/FloatingButtons"
import HeroQuoteForm from "@/components/hero-quote-form"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import BrandsSection from "@/components/sections/brands-section"
import PannesSection from "@/components/sections/pannes-section"
import WhyChooseUsSection from "@/components/sections/why-choose-us-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import { VOLET_INTERVENTIONS, type AvisClient } from "@/lib/testimonials/exemples-volet-roulant"
import { SERVICES_SECTION_TITLE, type ResolvedSousServiceConfig } from "@/lib/sous-services/volet-roulant"
import { CheckCircle2, ChevronDown, ChevronRight, FileText, Phone, ShieldCheck, Wrench } from "lucide-react"

const Eyebrow = ({ children }: { children: React.ReactNode }) => (
  <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]">
    <span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />
    {children}
  </p>
)

type Other = { slug: string; label: string; sub: string; image: string }

// Aussi utilisé pour les pages prestation d'un département (/gironde/depannage-volet-roulant) :
// place = « en Gironde », numéro du département, liens vers les autres prestations du département
export default function ServiceClient({
  ss,
  others,
  phoneConfig = DEFAULT_PHONE,
  place = "partout en France",
  othersBasePath = "/nos-services",
  testimonials = VOLET_INTERVENTIONS,
}: {
  ss: ResolvedSousServiceConfig
  others: Other[]
  phoneConfig?: { tel: string; display: string }
  place?: string
  othersBasePath?: string
  // Page département : avis rattachés aux villes du département
  testimonials?: AvisClient[]
}) {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)
  const [h1Main, ...h1Rest] = ss.h1.split(" – ")

  return (
    <div className="min-h-screen bg-white">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            mainEntity: ss.faqItems.map((f) => ({ "@type": "Question", name: f.q, acceptedAnswer: { "@type": "Answer", text: f.a } })),
          }),
        }}
      />

      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que l'en-tête des pages ville, sans ville */}
      <section aria-label={ss.label} className="relative isolate overflow-hidden bg-[#0E2452] text-white" id="hero">
        <Image src={ss.heroImage} alt="" aria-hidden="true" fill priority sizes="100vw" className="-z-10 object-cover object-center opacity-35" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.88)_55%,rgba(14,36,82,0.6)_100%)]" />

        <div className="max-w-7xl mx-auto px-4 md:px-8 py-8 md:py-12">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-center">
            <div className="lg:self-stretch lg:flex lg:flex-col lg:-mb-6">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold leading-tight text-white mb-5">
                {h1Main} <span className="text-[#FFC629]">{place}</span>.
                {h1Rest.length > 0 && <span className="mt-2 block text-base md:text-lg font-medium text-[#FFC629]">{h1Rest.join(" – ")}.</span>}
              </h1>

              <p className="text-lg leading-relaxed text-slate-200 mb-6 max-w-2xl text-justify hyphens-auto" lang="fr">{ss.heroIntro}</p>

              <ul className="grid sm:grid-cols-2 gap-x-6 gap-y-3 mb-6">
                {ss.checkpoints.map((item) => (
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

            <HeroQuoteForm messagePlaceholder={ss.messagePlaceholder} />
          </div>
        </div>
      </section>

      {/* PRESTATIONS DÉTAILLÉES */}
      <section className="bg-white py-10 md:py-14" id="services">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10">
            <Eyebrow>Nos services</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">{SERVICES_SECTION_TITLE[ss.slug] ?? `${ss.label} : nos interventions`}</h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {ss.serviceCards.map((card) => (
              <article key={card.title} className="group relative h-96 overflow-hidden rounded-2xl shadow-lg">
                <Image
                  src={card.image || "/placeholder.svg"}
                  alt={card.title}
                  fill
                  sizes="(min-width: 1024px) 33vw, (min-width: 768px) 50vw, 100vw"
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2452] via-[#0E2452]/60 to-transparent" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <div className="mb-4 h-1 w-12 rounded-full bg-[#FFC629] transition-all duration-300 group-hover:w-20" />
                  <h3 className="text-2xl font-bold leading-tight text-white">{card.title}</h3>
                  <p className="mt-2 line-clamp-4 text-sm leading-relaxed text-white/85">{card.desc}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {["depannage-volet-roulant", "reparation-volet-roulant"].includes(ss.slug) && <PannesSection className="bg-white" padding="pt-0 pb-10 md:pb-14" />}
      {!["rideau-metallique", "store-banne"].includes(ss.slug) && <BrandsSection className="bg-white" padding="pt-0 pb-10 md:pb-14" />}

      <HowItWorksSection className="bg-gray-50" />

      {/* TARIFS */}
      <section className="bg-white py-10 md:py-14" id="tarifs">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <Eyebrow>Nos tarifs</Eyebrow>
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

      {/* À PROPOS DE LA PRESTATION */}
      <section className="bg-gray-50 py-10 md:py-14" id="about">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 items-stretch">
            <div className="flex flex-col justify-center">
              <Eyebrow>Notre savoir-faire</Eyebrow>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-6 leading-tight">{ss.aboutTitle}</h2>
              <p className="text-gray-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto" lang="fr">{ss.aboutParagraph}</p>
            </div>
            <div className="relative min-h-[320px] overflow-hidden rounded-2xl shadow-xl">
              <Image src={ss.aboutImage} alt={ss.label} fill sizes="(min-width: 1024px) 50vw, 100vw" className="object-cover" />
            </div>
          </div>
        </div>
      </section>

      {/* EN DÉTAIL */}
      <section className="bg-white py-10 md:py-14" id="details">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-12">
            <Eyebrow>En détail</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">{ss.label} : ce qu&apos;il faut savoir</h2>
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

      <WhyChooseUsSection className="bg-gray-50" />

      <TestimonialsSection testimonials={testimonials} examples className="bg-white" padding="py-10 md:py-14" />

      {/* FAQ */}
      <section className="bg-gray-50 py-10 md:py-14" id="faq">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10">
            <Eyebrow>Questions fréquentes</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">{ss.faqSectionTitle}</h2>
          </div>
          <div className="max-w-7xl mx-auto space-y-3">
            {ss.faqItems.map((faq) => (
              <details key={faq.q} className="group rounded-xl border border-gray-200 bg-white transition-colors open:border-[#0E2452] open:shadow-md">
                <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-semibold text-[#0E2452]">{faq.q}</span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452] transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown className="h-4 w-4 text-[#FFC629]" />
                  </span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-justify hyphens-auto" lang="fr">{faq.a}</div>
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
                <h3 className="mb-1 text-lg font-bold md:text-xl">{ss.ctaTitle}</h3>
                <p className="text-sm leading-relaxed text-slate-300">{ss.ctaText}</p>
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

      {/* AUTRES PRESTATIONS */}
      <section className="bg-white py-10 md:py-14" id="autres-prestations">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10">
            <Eyebrow>Nos autres prestations</Eyebrow>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">Découvrez nos autres prestations</h2>
          </div>
          <ul className="max-w-7xl mx-auto grid gap-6 sm:grid-cols-2 lg:grid-cols-5">
            {others.map((o) => (
              <li key={o.slug}>
                <Link href={`${othersBasePath}/${o.slug}`} className="group relative flex h-56 overflow-hidden rounded-2xl">
                  <Image src={o.image} alt={o.label} fill sizes="(min-width: 1024px) 20vw, (min-width: 640px) 50vw, 100vw" className="object-cover transition-transform duration-700 group-hover:scale-105" />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#0E2452]/95 via-[#0E2452]/40 to-transparent" />
                  <div className="relative mt-auto p-5">
                    <div className="mb-3 h-1 w-10 rounded-full bg-[#FFC629] transition-all duration-300 group-hover:w-16" />
                    <h3 className="text-lg font-bold leading-tight text-white">{o.label}</h3>
                  </div>
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <Footer phoneConfig={phoneConfig} />

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} phoneConfig={phoneConfig} />

      <FloatingButtons phoneConfig={phoneConfig} onQuoteClick={() => setIsQuoteFormOpen(true)} />
    </div>
  )
}
