"use client"

import { HOME_CITY, HOME_DEPARTMENT } from "@/lib/site"
import type React from "react"
import { useState } from "react"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import RealisationsSection from "@/components/sections/realisations-section"
import TestimonialsSection from "@/components/sections/testimonials-section"
import TarifsSection from "@/components/sections/tarifs-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import Header from "@/components/header"
import QuoteFormHeading from "@/components/quote-form-heading"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import FloatingButtons from "@/components/FloatingButtons"
import { Clock, ShieldCheck, Truck, CheckCircle2, ChevronDown, Star, FileCheck, Phone, MapPin, FileText, ChevronRight, BadgeEuro } from "lucide-react"

interface DepartmentPageClientProps {
  departmentSlug: string
  deptConfig: { name: string; displayName: string; postalCode: string }
  phoneConfig: { tel: string; display: string }
  cities: Array<{ slug: string; name: string; postalCode: string }>
  testimonials: Array<{ name: string; location: string; rating: number; text: string; date: string }>
}

export default function DepartmentPageClient({
  departmentSlug,
  deptConfig,
  phoneConfig,
  cities,
  testimonials,
}: DepartmentPageClientProps) {
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)
  const [heroSubmitting, setHeroSubmitting] = useState(false)
  const [heroSuccess, setHeroSuccess] = useState(false)

  const handleHeroSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    const data = Object.fromEntries(new FormData(form)) as Record<string, string>
    const [prenom, ...rest] = (data.nom || "").trim().split(" ")
    setHeroSubmitting(true)
    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom: prenom || data.nom,
          nom: rest.join(" ") || data.nom,
          telephone: data.telephone,
          email: data.email,
          adresse: data.adresse,
          message: data.message,
          pageUrl: window.location.href,
          pagePath: window.location.pathname,
        }),
      })
      if (response.ok) {
        setHeroSuccess(true)
        form.reset()
        setTimeout(() => setHeroSuccess(false), 4000)
      } else {
        alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.")
      }
    } catch {
      alert("Une erreur est survenue lors de l'envoi. Veuillez réessayer.")
    } finally {
      setHeroSubmitting(false)
    }
  }

  // Villes : ordre alphabétique, ville principale (Bordeaux pour la Gironde) en premier
  const [showAllCities, setShowAllCities] = useState(false)
  const CITY_PREVIEW_COUNT = 50
  const featuredSlug = departmentSlug === HOME_DEPARTMENT ? HOME_CITY : ""
  const sortedCities = [...cities].sort((a, b) => {
    if (a.slug === featuredSlug) return -1
    if (b.slug === featuredSlug) return 1
    return a.name.localeCompare(b.name, "fr")
  })
  const displayedCities = showAllCities ? sortedCities : sortedCities.slice(0, CITY_PREVIEW_COUNT)

  return (
    <div className="min-h-screen overflow-x-hidden bg-[#f7f8fa] text-slate-950">
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} />

      {/* HERO */}
      <section
        aria-label={`Débarras de logements et locaux ${deptConfig.displayName} — DÉBARRAS PROXIMITÉ`}
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
      >
        <Image
          src="/images/debarras-gratuit-768x512.jpg"
          alt={`Débarras professionnel de logements et locaux ${deptConfig.displayName}`}
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.86)_48%,rgba(14,36,82,0.38)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-8 md:px-8 md:py-10">
          <div className="grid lg:grid-cols-[3fr_2fr] gap-10 lg:gap-14 items-end">
          {/* pb desktop = marge basse de la carte (24px) + mention sous le bouton (28px) */}
          <div className="lg:pb-[52px]">
            <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC629]">
              <span className="h-2 w-2 rounded-full bg-[#FFC629] animate-pulse" /> Actuellement disponible
            </p>

            <h1 className="text-4xl font-bold leading-tight md:text-6xl">
              Débarras de logements et locaux <span className="text-[#FFC629]">{deptConfig.displayName}</span>
            </h1>

            <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl">
              Maisons, appartements, locaux professionnels, caves et greniers : nous vidons, trions et recyclons {deptConfig.displayName}. Équipe assurée, intervention sous 24h/48h.
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

          {/* Formulaire de devis */}
          <div className="overflow-hidden rounded-2xl bg-white p-5 md:p-6 text-gray-900 shadow-2xl">
            <QuoteFormHeading />
            {heroSuccess ? (
              <div className="py-10 text-center">
                <CheckCircle2 className="mx-auto mb-3 h-12 w-12 text-green-600" aria-hidden="true" />
                <p className="text-lg font-bold text-[#0E2452]">Demande envoyée !</p>
                <p className="mt-1 text-sm text-gray-600">Nous vous rappelons en moins de 30 minutes.</p>
              </div>
            ) : (
              <form className="space-y-3" onSubmit={handleHeroSubmit}>
                <Input name="nom" placeholder="Nom et prénom *" aria-label="Nom et prénom" required autoComplete="name" className="h-11 rounded-lg border border-gray-200 focus-visible:ring-[#FFC629]" />
                <div className="grid sm:grid-cols-2 gap-3">
                  <Input name="telephone" type="tel" placeholder="Téléphone *" aria-label="Téléphone" required autoComplete="tel" className="h-11 rounded-lg border border-gray-200 focus-visible:ring-[#FFC629]" />
                  <Input name="email" type="email" placeholder="E-mail (facultatif)" aria-label="E-mail" autoComplete="email" className="h-11 rounded-lg border border-gray-200 focus-visible:ring-[#FFC629]" />
                </div>
                <Input name="adresse" placeholder="Adresse du logement *" aria-label="Adresse du logement" required autoComplete="street-address" className="h-11 rounded-lg border border-gray-200 focus-visible:ring-[#FFC629]" />
                <Textarea name="message" rows={2} placeholder="Votre projet : type de bien, pièces à vider, date souhaitée..." aria-label="Votre projet" className="resize-none rounded-lg border border-gray-200 focus-visible:ring-[#FFC629]" />
                <Button type="submit" disabled={heroSubmitting} className="group h-12 w-full rounded-lg border-2 border-[#FFC629] bg-[#FFC629] text-base font-bold text-[#0E2452] transition-colors duration-300 hover:border-[#0E2452] hover:bg-[#0E2452] hover:text-white">
                  {heroSubmitting ? "Envoi en cours..." : (
                    <span className="inline-flex items-center justify-center gap-1.5">
                      Obtenir mon devis gratuit
                      <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} aria-hidden="true" />
                    </span>
                  )}
                </Button>
                <p className="text-center text-xs text-gray-500">Sans engagement · Vos données restent confidentielles</p>
              </form>
            )}
          </div>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-3 border-t border-white/15 px-5 py-6 lg:grid-cols-4 md:px-8">
          <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Devis 100% gratuit</span></div>
          <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Équipe assurée</span></div>
          <div className="flex items-center gap-3"><Star className="h-5 w-5 fill-[#FFC629] text-[#FFC629]" /><span className="text-sm text-slate-200">4,8/5 par nos clients</span></div>
          <div className="flex items-center gap-3"><BadgeEuro className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Tarifs transparents</span></div>
        </div>
      </section>

      {/* EXPERTISE */}
      <section className="bg-gray-50 py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid lg:grid-cols-2 gap-12 lg:gap-16 items-center">
            <div>
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Expertise &amp; savoir-faire</p>
              <h2 className="text-3xl md:text-4xl lg:text-5xl font-bold text-[#0E2452] mb-6 leading-tight">
                Experts en débarras de logements et locaux {deptConfig.displayName}
              </h2>

              <div className="space-y-4 text-gray-600 text-base md:text-lg leading-relaxed text-justify hyphens-auto" lang="fr">
                <p>
                  Spécialisées dans le <strong className="text-[#0E2452]">débarras complet de logements et locaux {deptConfig.displayName}</strong>, nos équipes
                  interviennent avec professionnalisme et respect pour vider votre bien en toute sérénité : vente, location ou succession.
                </p>
                <p>
                  Du vidage intégral à l'enlèvement ponctuel d'encombrants, en passant par la cave, le garage ou le grenier, nous
                  intervenons dans tout le département {deptConfig.postalCode} avec tri sélectif et recyclage.
                </p>
                <p>
                  Chaque intervention est précédée d'un <strong className="text-[#0E2452]">devis gratuit et sans engagement</strong>, établi
                  sur place ou sur photos, incluant main-d'œuvre, transport et traitement des déchets.
                </p>
              </div>
            </div>

            <div className="rounded-2xl overflow-hidden shadow-xl">
              <Image
                src="/images/debarras-gratuit-768x512.jpg"
                alt={`Équipe Débarras Proximité réalisant un débarras de logement ${deptConfig.displayName} (${deptConfig.postalCode})`}
                width={768}
                height={512}
                className="w-full h-auto object-cover"
              />
            </div>
          </div>

          <ul className="max-w-7xl mx-auto mt-12 md:mt-16 grid sm:grid-cols-2 lg:grid-cols-4 gap-5 md:gap-6">
            {[
              { Icon: ShieldCheck, title: "Équipes qualifiées", text: "Un travail professionnel et soigné." },
              { Icon: Truck, title: "Évacuation complète", text: "Transport, tri et recyclage inclus." },
              { Icon: Clock, title: "Intervention rapide", text: "Sous 24 à 48h après le devis." },
              { Icon: FileCheck, title: "Devis gratuit", text: "Sans engagement, le jour même." },
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
      </section>

      {/* SERVICES */}
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Nos services</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">
              Nos prestations de débarras {deptConfig.displayName}
            </h2>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-7xl mx-auto">
            {[
              { title: "Débarras complet de maison", short: "Vidage intégral, tri, évacuation et recyclage en une seule intervention.", image: "/images/vide-maison-debarras.jpg" },
              { title: "Débarras après succession", short: "Intervention discrète, en lien avec le notaire ou les héritiers.", image: "/images/Rachat_successions.jpg" },
              { title: "Débarras cave et grenier", short: "Caves, greniers et combles désencombrés et remis en état.", image: "/images/service-3.jpg" },
              { title: "Débarras de garage", short: "Outillage, pièces et objets stockés évacués dans les règles.", image: "/images/service-4.jpg" },
              { title: "Débarras syndrome de Diogène", short: "Logements très encombrés traités avec méthode et bienveillance.", image: "/images/debarras-syndrome-diogene.jpg" },
              { title: "Débarras fin de chantier", short: "Gravats, bois, métaux et tout-venant évacués et recyclés.", image: "/images/debarras-fin-de-chantier.jpg" },
            ].map((service) => (
              <article key={service.title} className="group relative block h-96 overflow-hidden rounded-2xl shadow-lg">
                <img
                  src={service.image}
                  alt={`${service.title} ${deptConfig.displayName}`}
                  loading="lazy"
                  className="absolute inset-0 h-full w-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2452] via-[#0E2452]/60 to-transparent transition-opacity duration-300 group-hover:from-[#0E2452] group-hover:via-[#0E2452]/75" />
                <div className="absolute inset-x-0 bottom-0 p-6 md:p-7">
                  <div className="mb-4 h-1 w-12 rounded-full bg-[#FFC629] transition-all duration-300 group-hover:w-20" />
                  <h3 className="text-2xl font-bold leading-tight text-white">{service.title}</h3>
                  <p className="mt-2 text-sm leading-relaxed text-white/85">{service.short}</p>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <HowItWorksSection />

      <RealisationsSection padding="py-10 md:py-14" place={deptConfig.displayName} className="bg-white" />

      <TestimonialsSection padding="py-10 md:py-14" testimonials={testimonials} className="bg-gray-50" />

      <TarifsSection padding="py-10 md:py-14" place={deptConfig.displayName} className="bg-white" />

      {/* VILLES */}
      <section className="bg-gray-50 py-10 md:py-14" id="zones">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Zone d&apos;intervention</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">
                Villes desservies {deptConfig.displayName}
              </h2>
              <p className="text-gray-600 text-lg max-w-3xl">
                Nous intervenons dans {sortedCities.length} communes du département {deptConfig.postalCode}, et au-delà sur demande.
              </p>
            </div>

            <div className="mb-8">
              {/* Liste des villes */}
              <div>
                <p className="mb-3 text-sm font-semibold text-[#0E2452]">
                  {sortedCities.length} villes desservies
                </p>

                {displayedCities.length > 0 ? (
                  <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2">
                    {displayedCities.map((city) => {
                      const isHome = city.slug === featuredSlug
                      return (
                        <Link
                          key={city.slug}
                          prefetch={false}
                          href={`/${departmentSlug}/${city.slug}`}
                          className={`group flex items-center gap-2 rounded-lg border px-3 py-2 transition-colors duration-200 hover:border-[#0E2452] hover:bg-[#0E2452] ${
                            isHome ? "border-[#0E2452] bg-[#0E2452]" : "border-gray-200 bg-white"
                          }`}
                        >
                          <MapPin className={`h-3.5 w-3.5 flex-shrink-0 transition-colors group-hover:text-[#FFC629] ${isHome ? "text-[#FFC629]" : "text-[#0E2452]"}`} aria-hidden="true" />
                          <span className={`min-w-0 truncate text-xs font-medium transition-colors group-hover:text-white ${isHome ? "text-white" : "text-gray-700"}`}>
                            {city.name}
                            <span className={`ml-1 font-normal group-hover:text-slate-300 ${isHome ? "text-slate-300" : "text-gray-400"}`}>{city.postalCode}</span>
                          </span>
                        </Link>
                      )
                    })}
                  </div>
                ) : (
                  <p className="rounded-xl bg-gray-50 p-4 text-sm text-gray-600">
                    Aucune commune ne correspond. Nous intervenons sans doute aussi chez vous : demandez-nous un devis.
                  </p>
                )}

                {sortedCities.length > CITY_PREVIEW_COUNT && (
                  <button
                    type="button"
                    onClick={() => setShowAllCities((v) => !v)}
                    className="mt-5 inline-flex items-center gap-2 text-sm font-semibold text-[#0E2452] underline-offset-4 hover:underline"
                  >
                    {showAllCities ? "Afficher moins de communes" : `Voir toutes les communes (${sortedCities.length})`}
                    <ChevronDown className={`h-4 w-4 transition-transform ${showAllCities ? "rotate-180" : ""}`} aria-hidden="true" />
                  </button>
                )}
              </div>

            </div>

            {/* Bandeau : ville non listée */}
            <div className="mx-auto max-w-7xl rounded-2xl bg-[#0E2452] px-6 py-7 text-white sm:px-10 md:min-h-[156px] flex items-center">
              <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
                <div className="min-w-0 flex-1 text-center md:text-left">
                  <span className="mb-2 inline-block rounded-full bg-[#FFC629] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0E2452]">
                    Tout le département {deptConfig.postalCode}
                  </span>
                  <h3 className="mb-1 text-lg font-bold md:text-xl">
                    Votre ville ne figure pas dans la liste ?
                  </h3>
                  <p className="text-sm leading-relaxed text-slate-300">
                    Nous intervenons sur une large zone : contactez-nous pour vérifier la disponibilité dans votre commune.
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
        </div>
      </section>

      {/* FAQ */}
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto mb-10">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Questions fréquentes</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">
              Débarras de logements et locaux {deptConfig.displayName} : vos questions
            </h2>
          </div>

          <div className="max-w-7xl mx-auto space-y-3">
            {[
              {
                question: "Quel est le délai d'intervention pour un débarras de logement ou de local ?",
                answer: `Nos équipes interviennent généralement sous 24 à 48 heures ${deptConfig.displayName} après validation du devis. Pour les situations urgentes (succession, vente immobilière imminente), nous pouvons organiser une intervention le jour même selon disponibilité.`,
              },
              {
                question: "Le débarras d'un logement est-il payant ou peut-il être gratuit ?",
                answer: "Le coût dépend du volume à évacuer, de l'accessibilité et de la valeur des objets récupérables. Dans certains cas, la revente des biens peut compenser tout ou partie des frais. Le devis est toujours gratuit et sans engagement.",
              },
              {
                question: "Que devient le contenu du logement après le débarras ?",
                answer: "Nous procédons à un tri rigoureux : les objets en bon état sont donnés à des associations ou revendus, les matériaux recyclables sont acheminés en déchetterie agréée, et les déchets sont traités conformément à la réglementation environnementale.",
              },
              {
                question: `Intervenez-vous dans toutes les villes du département ${deptConfig.postalCode} ?`,
                answer: `Oui, nous couvrons l'ensemble du département ${deptConfig.postalCode} ${deptConfig.displayName}, y compris les communes rurales et les zones difficiles d'accès.`,
              },
            ].map((faq) => (
              <details key={faq.question} className="group rounded-xl border border-gray-200 bg-white transition-colors open:border-[#0E2452] open:shadow-md">
                <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                  <span className="font-semibold text-[#0E2452]">{faq.question}</span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452] transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown className="h-4 w-4 text-[#FFC629]" />
                  </span>
                </summary>
                <div className="px-6 pb-5 text-gray-600 leading-relaxed text-justify hyphens-auto" lang="fr">
                  {faq.answer}
                </div>
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
                <h3 className="mb-1 text-lg font-bold md:text-xl">
                  Un logement ou un local à vider {deptConfig.displayName} ?
                </h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Devis gratuit le jour même, intervention sous 24h/48h, équipe assurée dans tout le département {deptConfig.postalCode}.
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

      {/* Boutons flottants */}
      <FloatingButtons phoneConfig={phoneConfig} onQuoteClick={() => setIsQuoteFormOpen(true)} />

      <QuoteForm
        isOpen={isQuoteFormOpen}
        onClose={() => setIsQuoteFormOpen(false)}
        phoneConfig={phoneConfig}
        title="Demandez votre débarras gratuit"
        subtitle="Maison, appartement, cave, grenier, et autres locaux"
      />
    </div>
  )
}
