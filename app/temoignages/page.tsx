"use client"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import FloatingButtons from "@/components/FloatingButtons"
import { VOLET_INTERVENTIONS } from "@/lib/testimonials/exemples-volet-roulant"
import { CheckCircle2, ChevronRight, Clock, FileText, Phone, Quote, Star, BadgeEuro } from "lucide-react"

// Satisfaction par critère (notes sur 5) — À AJUSTER selon vos avis réels
const SATISFACTION = [
  { label: "Ponctualité", score: 4.9 },
  { label: "Rapidité d'intervention", score: 4.8 },
  { label: "Qualité de la réparation", score: 4.9 },
  { label: "Prix et transparence", score: 4.7 },
]

export default function TemoignagesPage() {
  const phoneConfig = DEFAULT_PHONE
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)


  // Avis clients (les avis provisoires n'apparaissent pas sur le site en ligne)
  const publishedTestimonials = VOLET_INTERVENTIONS

  return (
    <div className="min-h-screen bg-white">
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que la page À propos */}
      <section
        aria-label="Avis clients de Allo Dépannage Volet"
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        id="hero"
      >
        <Image
          src="/images/volet/technicien-reparation-volet-roulant.jpg"
          alt="Volet roulant réparé par Allo Dépannage Volet"
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

          <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Particuliers, commerçants, syndics ou professionnels : découvrez les retours de nos clients après le dépannage, la réparation ou la motorisation de leurs volets roulants. Leur satisfaction est notre meilleure carte de visite.
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
      {publishedTestimonials.length > 0 && (
      <section className="bg-gray-50 py-10 md:py-14" id="clients">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Avis de nos clients</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Ce que disent nos clients</h2>
              <p className="text-gray-600 text-lg max-w-3xl">Particuliers, commerçants et professionnels nous font confiance pour leurs volets roulants, rideaux métalliques et stores.</p>
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
                      <p className="text-xs text-gray-500">{testimonial.location}</p>
                    </div>
                    <span className="flex-shrink-0 text-xs text-gray-400">{testimonial.date}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>
      )}

      {/* Bandeau final */}
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-7xl rounded-2xl bg-[#0E2452] px-6 py-7 text-white sm:px-10 md:min-h-[156px] flex items-center">
            <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
              <div className="min-w-0 flex-1 text-center md:text-left">
                <span className="mb-2 inline-block rounded-full bg-[#FFC629] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0E2452]">
                  Rappel sous 30 min
                </span>
                <h3 className="mb-1 text-lg font-bold md:text-xl">Rejoignez nos clients satisfaits</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Décrivez votre panne ou votre projet : nous vous rappelons en moins de 30 minutes avec un devis gratuit et sans engagement.
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
