"use client"

import { useState, Suspense } from "react"
import Image from "next/image"
import Header from "@/components/header"
import BreadcrumbSchema from "@/components/breadcrumb-schema"
import Footer from "@/components/Footer"
import { articles } from "./data"
import ArticleCard from "./article-card"
import QuoteForm from "@/components/quote-form"
import { Phone, FileText, CheckCircle2, ShieldCheck, Star, BadgeEuro } from "lucide-react"
import { Button } from "@/components/ui/button"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import FloatingButtons from "@/components/FloatingButtons"

// Les articles sont définis dans ./data.ts

function BlogContent() {
  const phoneConfig = DEFAULT_PHONE
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  // Articles à la une, puis les autres du plus récent au plus ancien (sans doublon)
  const featuredArticles = articles.filter((article) => article.featured)
  const otherArticles = articles
    .filter((article) => !article.featured)
    .sort((a, b) => b.date.localeCompare(a.date))

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Header */}
      <BreadcrumbSchema items={[{ name: "Blog", path: "/blog" }]} />
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que la page À propos */}
      <section
        aria-label="Blog Débarras Proximité"
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
            Blog &amp; conseils
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:min-h-[2lh] xl:min-h-0">
            Nos conseils pour réussir votre <span className="text-[#FFC629]">débarras</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Guides pratiques, prix, succession, tri et recyclage : les conseils de nos équipes pour préparer et organiser votre débarras sereinement.
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

      {/* ARTICLES À LA UNE */}
      {featuredArticles.length > 0 && (
        <section className="bg-white py-10 md:py-14" id="featured">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-7xl mx-auto mb-10">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />À la une</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Nos guides pour préparer votre débarras</h2>
              <p className="text-gray-600 text-lg max-w-3xl">
                Organisation, choix du professionnel, tri des objets : l&apos;essentiel à savoir avant de vider une maison ou un appartement.
              </p>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-6">
              {featuredArticles.map((article) => (
                <ArticleCard key={article.id} article={article} featured />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* TOUS LES ARTICLES (hors articles à la une) */}
      {otherArticles.length > 0 && (
        <section className="bg-gray-50 py-10 md:py-14" id="articles">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-7xl mx-auto mb-10">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Tous nos articles</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">Conseils et actualités du débarras</h2>
            </div>

            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {otherArticles.map((article) => (
                <ArticleCard key={article.id} article={article} />
              ))}
            </div>
          </div>
        </section>
      )}

      {/* FOOTER */}
      <Footer phoneConfig={phoneConfig} />

      {/* Quote Form */}
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} phoneConfig={phoneConfig} />

      {/* Boutons flottants */}
      <FloatingButtons phoneConfig={phoneConfig} onQuoteClick={() => setIsQuoteFormOpen(true)} />
    </div>
  )
}

export default function BlogPage() {
  return (
    <Suspense fallback={null}>
      <BlogContent />
    </Suspense>
  )
}
