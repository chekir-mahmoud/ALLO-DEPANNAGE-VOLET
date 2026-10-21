"use client"

import { useState } from "react"
import Image from "next/image"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import { Building2, CheckCircle2, ChevronDown, ChevronRight, Clock, FileText, MapPin, Phone, ShieldCheck, Star, Wrench, BadgeEuro } from "lucide-react"
import { Button } from "@/components/ui/button"
import Link from "next/link"
import { ACTIVE_DEPARTMENTS } from "@/lib/departments"
import { departmentPath } from "@/lib/site"
import FloatingButtons from "@/components/FloatingButtons"
import TestimonialsSection from "@/components/sections/testimonials-section"
import { VOLET_INTERVENTIONS } from "@/lib/testimonials/exemples-volet-roulant"

// Questions fréquentes sur la zone d'intervention (affichées et transmises à Google)
const ZONE_FAQ = [
  { question: `Intervenez-vous dans ma commune ?`, answer: `Nous intervenons dans toute la France métropolitaine, des grandes villes aux petites communes rurales, ainsi qu'en outre-mer. Si votre commune n'apparaît pas dans nos pages, contactez-nous : nous vous confirmons la disponibilité d'un technicien et le délai d'intervention.` },
  { question: `Y a-t-il des frais de déplacement ?`, answer: `Le déplacement et le diagnostic sont proposés dès 69 €, montant annoncé avant l'intervention. Le devis détaille ensuite les pièces et la main-d'œuvre : le prix validé est celui que vous payez, sans supplément caché.` },
  { question: `Intervenez-vous en urgence le week-end ?`, answer: `Oui. Notre service de dépannage fonctionne 7j/7, y compris le week-end et les jours fériés, pour les volets roulants bloqués et les rideaux métalliques de commerces.` },
  { question: `Intervenez-vous en outre-mer ?`, answer: `Oui, nous intervenons également en Guadeloupe, en Martinique, en Guyane et à La Réunion. Les délais peuvent varier selon la commune : nous vous les précisons dès votre demande.` },
  { question: `Le service est-il le même partout en France ?`, answer: `Oui. Où que vous soyez, vous bénéficiez de la même méthode : diagnostic précis, devis clair avant toute intervention, réparation sur toutes les marques, pièces et main-d'œuvre garanties.` },
]

export default function ZonesInterventionPage() {
  const phoneConfig = DEFAULT_PHONE
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)


  // Tous les départements, par numéro
  // La Corse (2A, 2B) se range entre le 19 et le 21
  const sortKey = (code: string) => (code === "2A" ? 20.1 : code === "2B" ? 20.2 : Number(code))
  const departments = Object.values(ACTIVE_DEPARTMENTS).sort((a, b) => sortKey(a.postalCode) - sortKey(b.postalCode))

  return (
    <div className="min-h-screen bg-white">
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que la page À propos */}
      <section
        aria-label="Zone d'intervention de Allo Dépannage Volet"
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        id="hero"
      >
        <Image
          src="/images/volet/rideau-metallique-depannage.jpg"
          alt="Technicien Allo Dépannage Volet en intervention partout en France"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.86)_48%,rgba(14,36,82,0.38)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC629]">
            Zone d&apos;intervention
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:min-h-[2lh] xl:min-h-0">
            Dépannage partout en <span className="text-[#FFC629]">France</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Grandes villes, villes moyennes ou petites communes rurales : nos techniciens dépannent, réparent et motorisent vos volets roulants dans toute la France métropolitaine et en outre-mer, 7j/7.
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

      {/* ZONES */}
      <section className="bg-white py-10 md:py-14" id="zones">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Présence nationale</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Les départements que nous desservons</h2>
              <p className="text-gray-600 text-lg max-w-3xl">
                Choisissez votre département pour découvrir les villes où nous intervenons et nos prestations de volets roulants.
              </p>
            </div>

            {/* Chiffres clés */}
            <ul className="mb-10 grid grid-cols-2 lg:grid-cols-4 gap-4">
              {[
                { Icon: MapPin, val: `${departments.length}`, label: "Départements couverts" },
                { Icon: Building2, val: "5 500+", label: "Communes desservies" },
                { Icon: Clock, val: "7j/7", label: "Dépannage d'urgence" },
                { Icon: Star, val: "4,8/5", label: "Note Google (480 avis)" },
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

            {/* Liste des départements */}
            <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
              {departments.map((dept) => (
                <Link
                  key={dept.slug}
                  prefetch={false}
                  href={departmentPath(dept.slug)}
                  className="group flex items-center gap-2 rounded-lg border border-gray-200 bg-white px-3 py-2.5 transition-colors duration-200 hover:border-[#0E2452] hover:bg-[#0E2452]"
                >
                  <MapPin className="h-4 w-4 flex-shrink-0 text-[#0E2452] transition-colors group-hover:text-[#FFC629]" aria-hidden="true" />
                  <span className="min-w-0 truncate text-sm font-medium text-gray-700 transition-colors group-hover:text-white">
                    {dept.name}
                    <span className="ml-1 font-normal text-gray-400 group-hover:text-slate-300">{dept.postalCode}</span>
                  </span>
                </Link>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Comment nous intervenons partout en France */}
      <section className="bg-gray-50 py-10 md:py-14" id="couverture">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Notre organisation</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Le même service, partout en France</h2>
              <p className="text-gray-600 text-lg max-w-3xl">
                Que vous soyez en ville ou à la campagne, nous vous offrons la même qualité d&apos;intervention et les mêmes engagements.
              </p>
            </div>
            <ul className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
              {[
                { Icon: Wrench, title: "Des techniciens proches de vous", text: "Des techniciens qualifiés qui connaissent votre secteur et se déplacent rapidement." },
                { Icon: FileText, title: "Le même devis gratuit", text: "Un diagnostic précis et un devis clair, remis avant toute intervention, partout." },
                { Icon: ShieldCheck, title: "Aucun frais caché", text: "Déplacement, pièces et main-d'œuvre détaillés dans le devis." },
                { Icon: Clock, title: "Dépannage d'urgence 7j/7", text: "Volet bloqué ou rideau coincé : intervention rapide, y compris le week-end." },
              ].map(({ Icon, title, text }) => (
                <li key={title} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6">
                  <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452]">
                    <Icon className="h-6 w-6 text-[#FFC629]" aria-hidden="true" />
                  </span>
                  <div>
                    <h3 className="mb-1 text-lg font-bold text-[#0E2452]">{title}</h3>
                    <p className="text-sm leading-relaxed text-gray-600">{text}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>

      <TestimonialsSection testimonials={VOLET_INTERVENTIONS} examples className="bg-white" padding="py-10 md:py-14" />

      {/* FAQ zone d'intervention */}
      <section className="bg-gray-50 py-10 md:py-14" id="faq-zone">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "FAQPage",
              "mainEntity": ZONE_FAQ.map((f) => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
            }),
          }}
        />
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Questions fréquentes</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">Vos questions sur notre zone d&apos;intervention</h2>
          </div>
          <div className="max-w-7xl mx-auto space-y-3">
            {ZONE_FAQ.map((faq) => (
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
                  Partout en France
                </span>
                <h3 className="mb-1 text-lg font-bold md:text-xl">Vous ne trouvez pas votre département ?</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Contactez-nous : nos techniciens interviennent dans toute la France, 7j/7, avec un devis gratuit avant toute intervention.
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
