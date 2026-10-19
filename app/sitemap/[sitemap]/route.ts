import { NextResponse } from "next/server"
import { ACTIVE_DEPARTMENTS, getCitiesByDepartment } from "@/lib/service-config"
import { SOUS_SERVICES_DEBARRAS } from "@/lib/sous-services/debarras-maison"
import { articles } from "@/app/blog/data"
import { SITE_URL, HOME_DEPARTMENT, cityPath, servicePath, sousServicePath } from "@/lib/site"

const DEBARRAS_SOUS_SERVICES = SOUS_SERVICES_DEBARRAS.map((s) => s.slug)

type UrlEntry = { loc: string; priority: string; changefreq: string }

function toXml(urls: UrlEntry[]): NextResponse {
  const today = new Date().toISOString().split("T")[0]
  const xml = `<?xml version="1.0" encoding="UTF-8"?>
<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
${urls.map((url) => `  <url>
    <loc>${url.loc}</loc>
    <lastmod>${today}</lastmod>
    <changefreq>${url.changefreq}</changefreq>
    <priority>${url.priority}</priority>
  </url>`).join("\n")}
</urlset>`

  return new NextResponse(xml, {
    headers: { "Content-Type": "application/xml; charset=utf-8" },
  })
}

// Sitemaps générés une seule fois au build (statique), au lieu d'une fonction à chaque requête
export const dynamic = "force-static"
export const dynamicParams = false

export function generateStaticParams() {
  return [{ sitemap: "static.xml" }, ...Object.keys(ACTIVE_DEPARTMENTS).map((slug) => ({ sitemap: `${slug}.xml` }))]
}

export async function GET(
  request: Request,
  { params }: { params: Promise<{ sitemap: string }> }
) {
  const { sitemap } = await params

  // ── Sitemap statique ────────────────────────────────────────────────────────
  if (sitemap === "static.xml") {
    const staticPages: [string, string, string][] = [
      ["/", "1.0", "daily"],
      ["/nos-services", "0.9", "weekly"],
      ["/tarifs", "0.8", "weekly"],
      ["/zone-intervention", "0.8", "weekly"],
      ["/devis", "0.8", "monthly"],
      ["/estimation", "0.8", "monthly"],
      ["/a-propos", "0.6", "monthly"],
      ["/temoignages", "0.6", "weekly"],
      ["/foire-aux-questions", "0.6", "monthly"],
      ["/blog", "0.8", "daily"],
      ["/contact", "0.7", "monthly"],
      ["/mentions-legales", "0.3", "yearly"],
      ["/politique-confidentialite", "0.3", "yearly"],
      ["/cgv", "0.3", "yearly"],
      ["/cgu", "0.3", "yearly"],
      ["/cookies", "0.3", "yearly"],
    ]
    const urls: UrlEntry[] = [
      ...staticPages.map(([path, priority, changefreq]) => ({
        loc: path === "/" ? `${SITE_URL}/` : `${SITE_URL}${path}`,
        priority,
        changefreq,
      })),
      ...SOUS_SERVICES_DEBARRAS.map((ss) => ({
        loc: `${SITE_URL}${servicePath(ss.slug)}`,
        priority: "0.8",
        changefreq: "monthly",
      })),
      ...articles.map((article) => ({
        loc: `${SITE_URL}/blog/${article.slug}`,
        priority: "0.6",
        changefreq: "monthly",
      })),
    ]
    return toXml(urls)
  }

  // ── Sitemap par département ─────────────────────────────────────────────────
  const departmentSlug = sitemap.replace(".xml", "")
  if (!ACTIVE_DEPARTMENTS[departmentSlug]) {
    return new NextResponse("Not Found", { status: 404 })
  }

  const isGironde = departmentSlug === HOME_DEPARTMENT
  const urls: UrlEntry[] = [{
    loc: `${SITE_URL}/${departmentSlug}`,
    priority: isGironde ? "0.95" : "0.85",
    changefreq: isGironde ? "daily" : "weekly",
  }]

  for (const citySlug of Object.keys(getCitiesByDepartment(departmentSlug) ?? {})) {
    const path = cityPath(departmentSlug, citySlug)
    // La page d'accueil (Bordeaux) est déjà dans le sitemap statique
    if (path !== "/") {
      urls.push({
        loc: `${SITE_URL}${path}`,
        priority: isGironde ? "0.92" : "0.80",
        changefreq: isGironde ? "daily" : "weekly",
      })
    }

    for (const ssSlug of DEBARRAS_SOUS_SERVICES) {
      urls.push({
        loc: `${SITE_URL}${sousServicePath(departmentSlug, citySlug, ssSlug)}`,
        priority: isGironde ? "0.90" : "0.75",
        changefreq: isGironde ? "daily" : "weekly",
      })
    }
  }

  return toXml(urls)
}
