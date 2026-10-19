"use client"

import type React from "react"
import { articles } from "@/app/blog/data"
import ArticleCard from "@/app/blog/article-card"
import Image from "next/image"
import { notFound, useParams } from "next/navigation"
import ReactMarkdown from "react-markdown"
import remarkGfm from "remark-gfm"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import { Button } from "@/components/ui/button"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import { Children, isValidElement, useState, useEffect } from "react"
import { FileText, Clock, Calendar, Share2, ChevronRight, ChevronDown, Check, Link2, CheckCircle2, ShieldCheck, Star, BadgeEuro } from "lucide-react"
import Link from "next/link"
import FloatingButtons from "@/components/FloatingButtons"

// Identifiant d'ancre stable (sans accents ni ponctuation), partagé par le sommaire et les titres H2
const slugify = (text: string) =>
  text
    .normalize("NFD")
    .replace(/[̀-ͯ]/g, "")
    .toLowerCase()
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")

const textOf = (children: React.ReactNode) =>
  Children.toArray(children)
    .map((child) => (typeof child === "string" || typeof child === "number" ? String(child) : ""))
    .join("")

export default function BlogPostPage() {
  const params = useParams()
  const slug = params.slug as string
  const phoneConfig = DEFAULT_PHONE
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)
  const [scrollProgress, setScrollProgress] = useState(0)
  const [activeHeading, setActiveHeading] = useState("")
  const [linkCopied, setLinkCopied] = useState(false)

  const article = articles.find((a) => a.slug === slug)

  // Articles similaires : même catégorie d'abord, puis les autres
  const relatedArticles = articles
    .filter((a) => a.slug !== slug)
    .sort((a, b) => Number(b.category === article?.category) - Number(a.category === article?.category))
    .slice(0, 3)

  // Barre de progression de lecture
  useEffect(() => {
    const handleScroll = () => {
      const documentHeight = document.documentElement.scrollHeight - window.innerHeight
      setScrollProgress(documentHeight > 0 ? (window.scrollY / documentHeight) * 100 : 0)
    }
    window.addEventListener("scroll", handleScroll, { passive: true })
    return () => window.removeEventListener("scroll", handleScroll)
  }, [])

  // Titre en cours de lecture, surligné dans le sommaire
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActiveHeading(entry.target.id)
        })
      },
      { rootMargin: "-20% 0px -70% 0px" },
    )
    document.querySelectorAll("article h2[id]").forEach((h) => observer.observe(h))
    return () => observer.disconnect()
  }, [slug])

  if (!article) {
    return notFound()
  }

  // Sommaire construit à partir des titres H2 du contenu
  const tableOfContents = (article.content.match(/^## .+$/gm) || []).map((h) => {
    const title = h.replace(/^## /, "")
    return { title, id: slugify(title) }
  })

  const formattedDate = new Date(article.date).toLocaleDateString("fr-FR", {
    day: "numeric",
    month: "long",
    year: "numeric",
  })

  const handleShare = async () => {
    if (navigator.share) {
      try {
        await navigator.share({ title: article.title, text: article.excerpt, url: window.location.href })
      } catch {}
      return
    }
    try {
      await navigator.clipboard.writeText(window.location.href)
      setLinkCopied(true)
      setTimeout(() => setLinkCopied(false), 2000)
    } catch {}
  }

  const tocLinks = (
    <ol className="grid gap-x-8 gap-y-1 md:grid-cols-2">
      {tableOfContents.map((item) => (
        <li key={item.id}>
          <a
            href={`#${item.id}`}
            className={`block border-l-2 py-1.5 pl-3 text-sm leading-snug transition-colors ${
              activeHeading === item.id
                ? "border-[#FFC629] font-semibold text-[#0E2452]"
                : "border-gray-200 text-gray-600 hover:border-[#0E2452] hover:text-[#0E2452]"
            }`}
          >
            {item.title}
          </a>
        </li>
      ))}
    </ol>
  )

  return (
    <div className="min-h-screen bg-white overflow-x-hidden">
      {/* Barre de progression */}
      <div className="fixed top-0 left-0 w-full h-1 bg-gray-200 z-[150]">
        <div className="h-full bg-[#FFC629] transition-all duration-150" style={{ width: `${scrollProgress}%` }} />
      </div>

      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que les autres pages */}
      <section className="relative isolate overflow-hidden bg-[#0E2452] text-white" id="hero">
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          priority
          sizes="100vw"
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.86)_48%,rgba(14,36,82,0.38)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          {/* Fil d'Ariane */}
          <nav aria-label="Fil d'Ariane" className="mb-6 flex min-w-0 items-center gap-2 text-sm text-slate-300">
            <Link href="/" className="whitespace-nowrap transition-colors hover:text-[#FFC629]">Accueil</Link>
            <ChevronRight className="h-4 w-4 flex-shrink-0" aria-hidden="true" />
            <Link href="/blog" className="whitespace-nowrap transition-colors hover:text-[#FFC629]">Blog</Link>
          </nav>

          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC629]">
            {article.category}
          </p>

          <h1 className={`font-bold leading-tight ${article.title.length > 60 ? "text-3xl md:text-4xl lg:text-5xl" : "text-4xl md:text-6xl"}`}>{article.title}</h1>

          <p className="mt-6 max-w-5xl text-lg leading-8 text-slate-300 md:text-xl text-justify hyphens-auto" lang="fr">
            {article.excerpt}
          </p>

          <div className="mt-6 flex flex-wrap items-center gap-x-6 gap-y-2 text-sm text-slate-200">
            <span className="flex items-center gap-2">
              <Calendar className="h-5 w-5 text-[#FFC629]" aria-hidden="true" />
              {formattedDate}
            </span>
            <span className="flex items-center gap-2">
              <Clock className="h-5 w-5 text-[#FFC629]" aria-hidden="true" />
              {article.readTime} de lecture
            </span>
          </div>

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
              size="lg"
              variant="outline"
              className="h-12 w-full justify-center rounded-lg border-2 border-white/40 bg-transparent px-6 text-base font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0E2452] sm:w-64"
              onClick={handleShare}
            >
              {linkCopied ? <Link2 className="mr-2 h-5 w-5" aria-hidden="true" /> : <Share2 className="mr-2 h-5 w-5" aria-hidden="true" />}
              {linkCopied ? "Lien copié" : "Partager"}
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

      {/* CONTENU + SOMMAIRE */}
      <section className="bg-white py-10 md:py-14">
        <div className="mx-auto max-w-7xl px-5 md:px-8">
          <div className="min-w-0">
            {/* Sommaire */}
            {tableOfContents.length > 0 && (
              <details open className="group mb-10 rounded-2xl border border-gray-200 bg-gray-50">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-4 px-5 py-4">
                  <span className="flex items-center gap-2 font-bold text-[#0E2452]">
                    <FileText className="h-5 w-5" aria-hidden="true" />
                    Sommaire
                  </span>
                  <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452] transition-transform duration-300 group-open:rotate-180">
                    <ChevronDown className="h-4 w-4 text-[#FFC629]" aria-hidden="true" />
                  </span>
                </summary>
                <div className="px-5 pb-5">{tocLinks}</div>
              </details>
            )}

            {/* Article */}
            <article lang="fr" className="text-gray-700">
              <ReactMarkdown
                remarkPlugins={[remarkGfm]}
                components={{
                  h2: ({ children }) => (
                    <h2
                      id={slugify(textOf(children))}
                      className="mt-12 mb-5 scroll-mt-28 border-l-4 border-[#FFC629] pl-4 text-2xl font-bold leading-tight text-[#0E2452] first:mt-0 md:text-3xl"
                    >
                      {children}
                    </h2>
                  ),
                  h3: ({ children }) => (
                    <h3 className="mt-8 mb-3 text-xl font-bold text-[#0E2452] md:text-2xl">{children}</h3>
                  ),
                  p: ({ children }) => (
                    <p className="mb-5 text-base leading-8 md:text-lg text-justify hyphens-auto">{children}</p>
                  ),
                  // Nombre de points pair : 2 colonnes symétriques ; impair : une seule colonne
                  ul: ({ children }) => {
                    const count = Children.toArray(children).filter(isValidElement).length
                    return <ul className={`my-6 grid gap-3 ${count % 2 === 0 ? "md:grid-cols-2" : ""}`}>{children}</ul>
                  },
                  ol: ({ children }) => <ol className="my-6 space-y-3">{children}</ol>,
                  li: ({ children }) => (
                    <li className="flex items-start gap-3 text-base leading-7 md:text-lg">
                      <span className="mt-1 flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452]">
                        <Check className="h-3.5 w-3.5 text-[#FFC629]" strokeWidth={3} aria-hidden="true" />
                      </span>
                      <span className="min-w-0">{children}</span>
                    </li>
                  ),
                  strong: ({ children }) => <strong className="font-bold text-[#0E2452]">{children}</strong>,
                  a: ({ children, href }) => (
                    <a
                      href={href}
                      className="font-semibold text-[#0E2452] underline decoration-[#FFC629] decoration-2 underline-offset-4 transition-colors hover:text-[#0E2452]/70 break-words"
                    >
                      {children}
                    </a>
                  ),
                  blockquote: ({ children }) => (
                    <blockquote className="my-8 rounded-r-xl border-l-4 border-[#FFC629] bg-gray-50 p-5 italic text-gray-700 md:p-6">
                      {children}
                    </blockquote>
                  ),
                  table: ({ children }) => (
                    <div className="my-8 overflow-x-auto rounded-xl border border-gray-200">
                      <table className="min-w-full text-left text-sm md:text-base">{children}</table>
                    </div>
                  ),
                  th: ({ children }) => <th className="bg-[#0E2452] px-4 py-3 font-semibold text-white">{children}</th>,
                  td: ({ children }) => <td className="border-t border-gray-200 px-4 py-3">{children}</td>,
                }}
              >
                {article.content}
              </ReactMarkdown>
            </article>

            {/* Bandeau CTA */}
            <div className="mt-10 rounded-2xl bg-[#0E2452] px-6 py-7 text-white sm:px-10">
              <div className="flex w-full flex-col items-center justify-between gap-6 md:flex-row">
                <div className="min-w-0 flex-1 text-center md:text-left">
                  <span className="mb-2 inline-block rounded-full bg-[#FFC629] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#0E2452]">
                    Rappel sous 30 min
                  </span>
                  <h2 className="mb-1 text-lg font-bold md:text-xl">Un débarras à prévoir ?</h2>
                  <p className="text-sm leading-relaxed text-slate-300">
                    Devis gratuit le jour même, intervention sous 24h/48h, équipe assurée partout en France.
                  </p>
                </div>
                <Button
                  size="lg"
                  className="group h-12 w-full flex-shrink-0 border-2 border-[#FFC629] bg-[#FFC629] px-6 text-base font-bold text-[#0E2452] whitespace-nowrap shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-[#0E2452] hover:text-white hover:shadow-xl sm:w-auto"
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

      {/* ARTICLES SIMILAIRES */}
      {relatedArticles.length > 0 && (
        <section className="bg-gray-50 py-10 md:py-14">
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-7xl mx-auto mb-10">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />À lire aussi</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">Articles similaires</h2>
            </div>
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 lg:grid-cols-3 gap-6">
              {relatedArticles.map((relArticle) => (
                <ArticleCard key={relArticle.slug} article={relArticle} />
              ))}
            </div>
          </div>
        </section>
      )}

      <Footer phoneConfig={phoneConfig} />

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} phoneConfig={phoneConfig} />

      {/* Boutons flottants */}
      <FloatingButtons phoneConfig={phoneConfig} onQuoteClick={() => setIsQuoteFormOpen(true)} />
    </div>
  )
}
