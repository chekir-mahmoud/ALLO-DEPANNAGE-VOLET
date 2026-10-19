"use client"
import { useState } from "react"
import Image from "next/image"
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import Header from "@/components/header"
import BreadcrumbSchema from "@/components/breadcrumb-schema"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import FloatingButtons from "@/components/FloatingButtons"
import WhyChooseUsSection from "@/components/sections/why-choose-us-section"
import HowItWorksSection from "@/components/sections/how-it-works-section"
import TarifsSection from "@/components/sections/tarifs-section"
import { BadgeEuro, ChevronRight, CheckCircle2, FileText, Phone, ShieldCheck, Star } from "lucide-react"
import { SOUS_SERVICES_DEBARRAS } from "@/lib/sous-services/debarras-maison"
import { servicePath } from "@/lib/site"

// Descriptions nationales (sans ville) de chaque prestation
const NATIONAL_DESCRIPTIONS: Record<string, string> = {
  "debarras-succession": "Après un décès, notre équipe intervient avec discrétion et respect pour vider, trier et évacuer le contenu du logement. Les objets de valeur sont estimés gratuitement, et nous pouvons travailler en lien avec le notaire ou les héritiers.",
  "debarras-maison": "Vente, mise en location, déménagement ou démolition : nous prenons en charge le vidage complet de votre maison, du mobilier et de l'électroménager jusqu'aux vêtements, déchets et objets encombrants.",
  "debarras-cave-grenier": "Cave, grenier ou combles saturés de vieux meubles et d'objets accumulés depuis des années : nous vidons tout, trions ce qui peut être donné ou recyclé et laissons un espace propre et dégagé.",
  "debarras-syndrome-diogene": "Face à une accumulation extrême ou à un logement insalubre, notre équipe formée intervient avec méthode, discrétion et bienveillance pour vider, désinfecter et remettre le bien en état, sans jugement.",
  "debarras-fin-de-chantier": "Vos travaux sont terminés ? Nous évacuons gravats, ferraille, chutes de matériaux et emballages : chargement, tri, transport vers des filières agréées et nettoyage des lieux.",
  "debarras-garage": "Outils inutilisés, vieux pneus, cartons et objets entassés : nous vidons entièrement votre garage, trions et recyclons ce qui peut l'être, et laissons un espace propre et utilisable.",
}

export default function NosServicesPage() {
  const phoneConfig = DEFAULT_PHONE
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  // Les liens « En savoir plus » mènent aux pages détaillées de chaque prestation
  const services = SOUS_SERVICES_DEBARRAS.map((ss) => ({
    id: ss.slug,
    title: ss.label,
    subtitle: ss.heroCardSub,
    description: NATIONAL_DESCRIPTIONS[ss.slug] ?? ss.heroIntro("votre ville"),
    features: ss.checkpoints,
    image: ss.heroImage,
    href: servicePath(ss.slug),
  }))

  return (
    <div className="min-h-screen bg-white">
      <BreadcrumbSchema items={[{ name: "Nos services", path: "/nos-services" }]} />
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que la page À propos */}
      <section
        aria-label="Nos services de débarras"
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        id="hero"
      >
        <Image
          src="/images/debarras-gratuit-768x512.jpg"
          alt="Débarras de maison réalisé par Débarras Proximité"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.86)_48%,rgba(14,36,82,0.38)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC629]">
            Nos services
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:min-h-[2lh] xl:min-h-0">
            Nos prestations de <span className="text-[#FFC629]">débarras</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Maison, succession, cave et grenier, garage, fin de chantier ou syndrome de Diogène : découvrez toutes nos prestations de débarras, pour les particuliers comme pour les professionnels.
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


      {/* GRILLE DES SERVICES */}
      <section className="bg-white py-10 md:py-14" id="services">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto">
            <div className="mb-10">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Nos prestations</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Une solution pour chaque débarras</h2>
              <p className="text-gray-600 text-lg max-w-3xl">
                Choisissez la prestation qui correspond à votre situation : chaque intervention commence par un devis gratuit, établi le jour même.
              </p>
            </div>

            <div className="grid md:grid-cols-2 gap-6 lg:gap-8">
              {services.map((service) => (
                <article
                  key={service.id}
                  className="group flex flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow duration-300 hover:shadow-xl"
                >
                  <div className="relative h-56 md:h-64 overflow-hidden">
                    <Image
                      src={service.image || "/placeholder.svg"}
                      alt={service.title}
                      fill
                      sizes="(min-width: 768px) 50vw, 100vw"
                      className="object-cover transition-transform duration-700 group-hover:scale-105"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-[#0E2452]/90 via-[#0E2452]/30 to-transparent" />
                    <div className="absolute inset-x-0 bottom-0 p-6">
                      <div className="mb-3 h-1 w-12 rounded-full bg-[#FFC629] transition-all duration-300 group-hover:w-20" />
                      <h3 className="text-2xl font-bold leading-tight text-white">{service.title}</h3>
                      <p className="mt-1 text-sm font-medium text-[#FFC629]">{service.subtitle}</p>
                    </div>
                  </div>

                  <div className="flex flex-1 flex-col p-6 md:p-7">
                    <p className="text-gray-600 leading-relaxed text-justify hyphens-auto" lang="fr">{service.description}</p>

                    <ul className="mt-5 grid gap-3 sm:grid-cols-2 border-t border-gray-100 pt-5">
                      {service.features.map((feature) => (
                        <li key={feature} className="flex items-start gap-2.5 text-sm font-medium text-gray-700">
                          <CheckCircle2 className="mt-0.5 h-5 w-5 flex-shrink-0 text-[#0E2452]" aria-hidden="true" />
                          {feature}
                        </li>
                      ))}
                    </ul>

                    <div className="mt-6 flex flex-col gap-3 pt-1 sm:flex-row sm:mt-auto sm:pt-6">
                      <Button
                        className="group/btn h-12 flex-1 justify-center rounded-lg border-2 border-[#FFC629] bg-[#FFC629] px-6 text-base font-bold text-[#0E2452] transition-colors duration-300 hover:border-[#0E2452] hover:bg-[#0E2452] hover:text-white"
                        onClick={() => setIsQuoteFormOpen(true)}
                      >
                        <FileText className="mr-2 h-5 w-5" aria-hidden="true" />
                        Devis gratuit
                      </Button>
                      <Button
                        asChild
                        variant="outline"
                        className="group/link h-12 flex-1 justify-center rounded-lg border-2 border-[#0E2452] bg-transparent px-6 text-base font-semibold text-[#0E2452] transition-colors duration-300 hover:bg-[#0E2452] hover:text-white"
                      >
                        <Link href={service.href} aria-label={`En savoir plus : ${service.title}`}>
                          En savoir plus
                          <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover/link:translate-x-1" aria-hidden="true" />
                        </Link>
                      </Button>
                    </div>
                  </div>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <HowItWorksSection className="bg-gray-50" />

      <TarifsSection place="en France" className="bg-white" padding="py-10 md:py-14" />

      <WhyChooseUsSection className="bg-gray-50" />

      {/* Bandeau final */}
      <section className="bg-white py-10 md:py-14">
        <div className="container mx-auto px-4 md:px-8">
          <div className="mx-auto max-w-7xl rounded-2xl bg-[#0E2452] px-6 py-7 text-white sm:px-10 md:min-h-[156px] flex items-center">
            <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
              <div className="min-w-0 flex-1 text-center md:text-left">
                <span className="mb-2 inline-block rounded-full bg-[#FFC629] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0E2452]">
                  Rappel sous 30 min
                </span>
                <h3 className="mb-1 text-lg font-bold md:text-xl">Besoin d&apos;un débarras ?</h3>
                <p className="text-sm leading-relaxed text-slate-300">
                  Contactez-nous pour un devis gratuit et sans engagement, établi le jour même.
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
