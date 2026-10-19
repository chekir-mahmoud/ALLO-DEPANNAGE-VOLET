import Image from "next/image"
import Link from "next/link"
import { ArrowRight, Calendar, Clock } from "lucide-react"
import type { articles } from "./data"

// Carte article — même style que les cartes du site (bordure fine, coins arrondis, pastille marine)
export default function ArticleCard({ article, featured = false }: { article: (typeof articles)[number]; featured?: boolean }) {
  return (
    <Link
      href={`/blog/${article.slug}`}
      className="group flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200 bg-white transition-shadow hover:shadow-lg"
    >
      <div className={`relative overflow-hidden ${featured ? "h-56 md:h-64" : "h-48"}`}>
        <Image
          src={article.image || "/placeholder.svg"}
          alt={article.title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1024px) 50vw, 33vw"
          className="object-cover transition-transform duration-300 group-hover:scale-105"
        />
        <span className="absolute left-4 top-4 rounded-full bg-[#0E2452] px-3 py-1 text-xs font-bold uppercase tracking-widest text-[#FFC629]">
          {article.category}
        </span>
      </div>

      <div className="flex flex-1 flex-col p-6">
        <div className="mb-3 flex flex-wrap items-center gap-4 text-sm text-gray-500">
          <span className="flex items-center gap-1.5">
            <Calendar className="h-4 w-4 text-[#0E2452]" aria-hidden="true" />
            {new Date(article.date).toLocaleDateString("fr-FR", { day: "numeric", month: "long", year: "numeric" })}
          </span>
          <span className="flex items-center gap-1.5">
            <Clock className="h-4 w-4 text-[#0E2452]" aria-hidden="true" />
            {article.readTime} de lecture
          </span>
        </div>

        <h3 className={`mb-3 font-bold text-[#0E2452] ${featured ? "text-xl md:text-2xl" : "text-lg"}`}>{article.title}</h3>
        <p className="mb-6 line-clamp-3 text-gray-600 leading-relaxed">{article.excerpt}</p>

        <span className="mt-auto flex items-center justify-between gap-4 border-t border-gray-100 pt-4">
          <span className="font-semibold text-[#0E2452]">Lire l&apos;article</span>
          <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452] transition-transform duration-300 group-hover:translate-x-1">
            <ArrowRight className="h-4 w-4 text-[#FFC629]" aria-hidden="true" />
          </span>
        </span>
      </div>
    </Link>
  )
}
