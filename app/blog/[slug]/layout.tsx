import type { Metadata } from "next"
import type React from "react"
import { articles } from "@/app/blog/data"
import { SITE_URL } from "@/lib/site"
import BreadcrumbSchema from "@/components/breadcrumb-schema"

// Articles générés au déploiement (pages statiques) ; une adresse inconnue renvoie une 404
export const dynamicParams = false

export function generateStaticParams() {
  return articles.map((a) => ({ slug: a.slug }))
}

export async function generateMetadata({ params }: { params: Promise<{ slug: string }> }): Promise<Metadata> {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)
  if (!article) return { title: "Article introuvable | Allo Dépannage Volet" }
  const images = article.image ? [{ url: article.image, alt: article.title }] : undefined
  // Titre de moins de 65 caractères pour ne pas être tronqué dans Google
  const seoTitle = (article as { metaTitle?: string }).metaTitle ?? article.title
  const branded = `${seoTitle} | Allo Dépannage Volet`
  return {
    title: branded.length <= 65 ? branded : seoTitle,
    description: article.excerpt,
    keywords: article.tags,
    alternates: { canonical: `/blog/${article.slug}` },
    openGraph: {
      type: "article",
      locale: "fr_FR",
      siteName: "Allo Dépannage Volet",
      title: article.title,
      description: article.excerpt,
      url: `/blog/${article.slug}`,
      publishedTime: article.date,
      section: article.category,
      tags: article.tags,
      images,
    },
    twitter: {
      card: "summary_large_image",
      title: article.title,
      description: article.excerpt,
      images: article.image ? [article.image] : undefined,
    },
  }
}

export default async function Layout({ children, params }: { children: React.ReactNode; params: Promise<{ slug: string }> }) {
  const { slug } = await params
  const article = articles.find((a) => a.slug === slug)

  return (
    <>
      {article && (
        <BreadcrumbSchema items={[{ name: "Blog", path: "/blog" }, { name: article.title, path: `/blog/${article.slug}` }]} />
      )}
      {article && (
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              "@context": "https://schema.org",
              "@type": "BlogPosting",
              headline: article.title,
              description: article.excerpt,
              image: article.image ? `${SITE_URL}${article.image}` : undefined,
              datePublished: article.date,
              dateModified: article.date,
              articleSection: article.category,
              keywords: article.tags.join(", "),
              mainEntityOfPage: `${SITE_URL}/blog/${article.slug}`,
              author: { "@type": "Organization", name: "Allo Dépannage Volet", url: SITE_URL },
              publisher: {
                "@type": "Organization",
                name: "Allo Dépannage Volet",
                url: SITE_URL,
                logo: { "@type": "ImageObject", url: `${SITE_URL}/images/logo-depannage-volet-roulant.png` },
              },
            }),
          }}
        />
      )}
      {children}
    </>
  )
}
