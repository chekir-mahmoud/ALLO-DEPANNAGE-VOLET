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
import { VOLET_INTERVENTIONS } from "@/lib/testimonials/exemples-volet-roulant"
import Link from "next/link"
import { CheckCircle2, ChevronDown, ChevronRight, BadgeEuro, FileText, Clock, Star, Building2, Cog, Ruler, Wrench, Plus, Calculator } from "lucide-react"

interface TarifsClientProps {
  phoneConfig: { tel: string; display: string }
}

const FAQ = [
  { question: `Comment est calculé le prix d'un dépannage de volet roulant ?`, answer: `Le prix dépend de la panne, des pièces à remplacer, des dimensions du volet et de son accessibilité. Le devis détaille le déplacement, les pièces et la main-d'œuvre : vous connaissez le prix avant l'intervention.` },
  { question: `Le déplacement est-il payant ?`, answer: `Le déplacement et le diagnostic sont proposés dès 69 €. Ce montant vous est toujours annoncé avant le déplacement du technicien.` },
  { question: `Le devis est-il payant ?`, answer: `Non. Le devis est 100 % gratuit et sans engagement. Il est établi à partir de votre description et de vos photos, ou après le diagnostic sur place.` },
  { question: `Vaut-il mieux réparer ou remplacer son volet roulant ?`, answer: `La réparation est presque toujours plus économique. Le remplacement complet ne se justifie que si le coffre, les coulisses ou le tablier sont très abîmés, ou si vous souhaitez améliorer l'isolation.` },
  { question: `Quand dois-je payer ?`, answer: `Le paiement s'effectue à la fin de l'intervention, une fois que vous avez constaté le bon fonctionnement de votre volet. Une facture détaillée vous est remise.` },
]

// Ce qui fait varier le prix
const PRICE_FACTORS = [
  { Icon: Wrench, label: "Type de panne" },
  { Icon: Cog, label: "Pièces à remplacer" },
  { Icon: Ruler, label: "Dimensions du volet" },
  { Icon: Building2, label: "Accès et hauteur" },
]

export default function TarifsClient({ phoneConfig }: TarifsClientProps) {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  return (
    <div className="min-h-screen bg-white">
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que la page À propos */}
      <section
        aria-label="Tarifs de volets roulants"
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        id="hero"
      >
        <Image
          src="/images/volet/mecanisme-coffre-volet-roulant.jpg"
          alt="Mécanisme de volet roulant en réparation"
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
            Des tarifs <span className="text-[#FFC629]">transparents</span> et sans surprise
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Des prix clairs pour le dépannage, la réparation, l'installation et la motorisation de vos volets roulants. Votre devis est détaillé, gratuit, sans engagement et sans frais cachés.
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
          <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Dépannage 7j/7</span></div>
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
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-6 leading-tight">Comment est calculé le prix d&apos;une intervention ?</h2>
              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto" lang="fr">
                <p>
                  Chaque intervention est différente : le prix dépend avant tout de la <strong className="text-[#0E2452]">panne</strong>,
                  des <strong className="text-[#0E2452]">pièces à remplacer</strong> et des <strong className="text-[#0E2452]">dimensions</strong> de votre volet.
                </p>
                <p>
                  Nos devis détaillent le déplacement, les pièces et la main-d&apos;œuvre. Le diagnostic permet de réparer uniquement
                  ce qui doit l&apos;être : une réparation coûte le plus souvent bien moins cher qu&apos;un remplacement complet.
                </p>
              </div>
              <ul className="mt-8 grid grid-cols-2 gap-3">
                {PRICE_FACTORS.map(({ Icon, label }) => (
                  <li key={label} className="flex min-h-[64px] items-center gap-3 rounded-xl border border-gray-200 bg-white px-3 py-3 sm:px-4">
                    <span className="flex h-10 w-10 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452]">
                      <Icon className="h-5 w-5 text-[#FFC629]" aria-hidden="true" />
                    </span>
                    <span className="text-sm md:text-base font-semibold leading-tight text-[#0E2452]">{label}</span>
                  </li>
                ))}
              </ul>
            </div>
            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/volet/moteur-tubulaire-volet-roulant.jpg"
                alt="Moteur tubulaire et pièces de volet roulant"
                width={1128}
                height={720}
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
                  items: ["Diagnostic de la panne", "Déplacement du technicien", "Main-d'œuvre et réglages", "Pièces détaillées sur le devis", "Tests de fonctionnement", "Garantie pièces et main-d'œuvre"],
                  Icon: CheckCircle2,
                  dark: true,
                },
                {
                  title: "En option, sur demande",
                  items: ["Motorisation des volets manuels", "Télécommande supplémentaire", "Centralisation et domotique", "Lames isolantes en aluminium", "Volet roulant solaire", "Contrat d'entretien annuel"],
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
              Vous hésitez sur la prestation ?{" "}
              <Link href="/nos-services" className="font-semibold text-[#0E2452] underline-offset-4 hover:underline">
                Découvrir toutes nos prestations
              </Link>
            </p>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={VOLET_INTERVENTIONS} examples className="bg-white" padding="py-10 md:py-14" />

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
                  Devis gratuit et sans engagement
                </span>
                <h3 className="mb-1 text-lg font-bold md:text-xl">Besoin d&apos;un prix précis ?</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Décrivez votre panne ou votre projet : nous vous rappelons en moins de 30 minutes et vous remettons un devis détaillé, partout en France.
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
        title="Demandez votre devis gratuit"
        subtitle="Dépannage, réparation, installation et motorisation"
      />
    </div>
  )
}
