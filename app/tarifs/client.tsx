"use client"

import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import FloatingButtons from "@/components/FloatingButtons"
import TarifsSection from "@/components/sections/tarifs-section"
import FormulesSection from "@/components/sections/formules-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import { DEBARRAS_MAISON_TESTIMONIALS } from "@/lib/testimonials/service-testimonials"
import Link from "next/link"
import { CheckCircle2, ChevronDown, ChevronRight, BadgeEuro, FileText, ShieldCheck, Star, Boxes, Building2, Recycle, Coins, Plus, Calculator } from "lucide-react"

interface TarifsClientProps {
  phoneConfig: { tel: string; display: string }
}

// Avis affichés avec des villes réparties dans toute la France
const NATIONAL_CITIES = ["Paris", "Lyon", "Marseille", "Toulouse", "Nantes", "Lille", "Strasbourg", "Montpellier", "Rennes", "Nice"]
const NATIONAL_TESTIMONIALS = DEBARRAS_MAISON_TESTIMONIALS.map((t, i) => ({ ...t, location: NATIONAL_CITIES[i % NATIONAL_CITIES.length] }))

const FAQ = [
  { question: `Comment est calculé le prix d'un débarras ?`, answer: `Le prix dépend du volume à évacuer, de l'accessibilité (étage, ascenseur, stationnement), du temps de tri et de la valeur des objets récupérables. Le devis détaille la main-d'œuvre, le transport et le traitement des déchets.` },
  { question: `Le débarras de maison peut-il être gratuit ?`, answer: `Dans certains cas, la revente des meubles et objets de valeur compense tout ou partie des frais. Nous vous l'indiquons dès l'estimation, toujours gratuite et sans engagement.` },
  { question: `Le devis est-il payant ?`, answer: `Non. Le devis est 100 % gratuit et sans engagement, établi le jour même après une visite sur place ou à partir de vos photos.` },
  { question: `Les prix sont-ils les mêmes partout en France ?`, answer: `Nos prix indicatifs s'appliquent partout en France. Le tarif définitif dépend surtout du volume, de l'accès au logement et du type de déchets, que nous évaluons lors de l'estimation gratuite.` },
  { question: `Quand dois-je payer ?`, answer: `Le paiement s'effectue à la fin de l'intervention, une fois que vous avez constaté que les lieux sont vidés et propres. Une facture vous est remise.` },
]

export default function TarifsClient({ phoneConfig }: TarifsClientProps) {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que la page À propos */}
      <section
        aria-label="Tarifs de débarras"
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        id="hero"
      >
        <Image
          src="/images/debarras-gratuit-768x512.jpg"
          alt="Estimation du prix d'un débarras de maison"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.86)_48%,rgba(14,36,82,0.38)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC629]">
            Nos tarifs
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:min-h-[2lh] xl:min-h-0">
            Tarifs de <span className="text-[#FFC629]">débarras</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Des prix clairs pour le débarras de maison, appartement, cave, grenier ou succession. Votre devis est détaillé, gratuit, sans engagement et sans frais cachés.
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
              <Link href="/estimation"><Calculator className="mr-2 h-5 w-5" aria-hidden="true" /> Estimer mon prix</Link>
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

      {/* Comment sont calculés nos prix */}
      <section className="bg-white py-10 md:py-14" id="calcul-prix">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Prix transparents</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-6 leading-tight">Comment est calculé le prix d&apos;un débarras ?</h2>
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto" lang="fr">
                <p>
                  Chaque débarras est différent : le prix dépend avant tout du <strong className="text-[#0E2452]">volume à évacuer</strong>,
                  de l&apos;<strong className="text-[#0E2452]">accessibilité</strong> du logement et du <strong className="text-[#0E2452]">temps de tri</strong> nécessaire.
                </p>
                <p>
                  Nos devis incluent la main-d&apos;œuvre, le transport et le traitement des déchets en filières agréées. Le rachat des
                  meubles et objets de valeur peut réduire votre facture, voire la couvrir entièrement.
                </p>
              </div>
              <ul className="mt-8 grid sm:grid-cols-2 gap-3">
                {[
                  { Icon: Boxes, label: "Volume à évacuer" },
                  { Icon: Building2, label: "Étage, ascenseur, accès" },
                  { Icon: Recycle, label: "Tri et recyclage" },
                  { Icon: Coins, label: "Rachat déduit du prix" },
                ].map(({ Icon, label }) => (
                  <li key={label} className="flex items-center gap-3 rounded-xl border border-gray-200 bg-white px-4 py-3">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452]">
                      <Icon className="h-5 w-5 text-[#FFC629]" aria-hidden="true" />
                    </span>
                    <span className="text-sm md:text-base font-semibold text-[#0E2452]">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/debarras-maison.jpg"
                alt="Estimation du volume d'un débarras de maison"
                width={768}
                height={512}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      <FormulesSection place="partout en France" onQuote={() => setIsQuoteFormOpen(true)} className="bg-gray-50" />

      <TarifsSection place="en France" className="bg-white" padding="py-10 md:py-14" />

      {/* Inclus / en option */}
      <section className="bg-gray-50 py-10 md:py-14" id="inclus">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Sans surprise</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Ce que comprend votre devis</h2>
              <p className="text-gray-600 text-lg max-w-3xl">Tout est indiqué dans votre devis : vous savez exactement ce que vous payez, avant l&apos;intervention.</p>
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              {[
                {
                  title: "Inclus dans le prix",
                  items: ["Estimation gratuite à domicile", "Main-d'œuvre et manutention", "Transport et évacuation", "Tri, dons et recyclage", "Traitement des déchets en filières agréées", "Nettoyage sommaire des lieux"],
                  Icon: CheckCircle2,
                  dark: true,
                },
                {
                  title: "En option, sur demande",
                  items: ["Nettoyage complet (sols, murs, surfaces)", "Désinfection du logement", "Intervention en urgence ou le week-end", "Rachat de meubles et objets de valeur", "Coordination avec le notaire ou les héritiers", "Attestation de traitement des déchets"],
                  Icon: Plus,
                  dark: false,
                },
              ].map(({ title, items, Icon, dark }) => (
                <div key={title} className={`rounded-2xl p-6 md:p-8 ${dark ? "bg-[#0E2452] text-white" : "border border-gray-200 bg-white"}`}>
                  <h3 className={`text-xl font-bold ${dark ? "text-white" : "text-[#0E2452]"}`}>{title}</h3>
                  <div className="my-4 h-1 w-10 rounded-full bg-[#FFC629]" aria-hidden="true" />
                  <ul className="space-y-3">
                    {items.map((item) => (
                      <li key={item} className={`flex items-start gap-3 text-sm md:text-base ${dark ? "text-slate-100" : "text-gray-700"}`}>
                        <Icon className={`mt-0.5 h-5 w-5 flex-shrink-0 ${dark ? "text-[#FFC629]" : "text-[#0E2452]"}`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
            <p className="mt-8 text-center text-sm text-gray-600">
              Vous hésitez sur le type de débarras ?{" "}
              <Link href="/nos-services" className="font-semibold text-[#0E2452] underline-offset-4 hover:underline">
                Découvrir toutes nos prestations
              </Link>
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={NATIONAL_TESTIMONIALS} className="bg-white" padding="py-10 md:py-14" />

      {/* FAQ tarifs */}
      <section className="bg-gray-50 py-10 md:py-14" id="faq-tarifs">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": FAQ.map((f) => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
            }),
          }}
        />
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Questions fréquentes</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">Vos questions sur nos prix</h2>
          </div>
          <div className="max-w-7xl mx-auto space-y-3">
            {FAQ.map((faq) => (
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
        </div>
      </section>

      {/* Bandeau final */}
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-7xl rounded-2xl bg-[#0E2452] px-6 py-7 text-white sm:px-10 md:min-h-[156px] flex items-center">
            <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
              <div className="min-w-0 flex-1 text-center md:text-left">
                <span className="mb-2 inline-block rounded-full bg-[#FFC629] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0E2452]">
                  Devis gratuit le jour même
                </span>
                <h3 className="mb-1 text-lg font-bold md:text-xl">Besoin d&apos;un prix précis ?</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Décrivez votre débarras : nous vous rappelons en moins de 30 minutes et vous envoyons un devis détaillé, partout en France.
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

      <FloatingButtons phoneConfig={phoneConfig} onQuoteClick={() => setIsQuoteFormOpen(true)} />

      <QuoteForm
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
        phoneConfig={phoneConfig}
        title="Demandez votre devis débarras gratuit"
        subtitle="Maison, appartement, cave, grenier, et autres locaux"
      />
    </div>
  )
}
