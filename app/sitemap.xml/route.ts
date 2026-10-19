import { NextResponse } from "next/server"

// Fichier statique, généré au build
export const dynamic = "force-static"
import { ACTIVE_DEPARTMENTS } from "@/lib/service-config"
import { SITE_URL, HOME_DEPARTMENT } from "@/lib/site"

export async function GET() {
  // Index XML : pages statiques + un sitemap par département (Gironde en premier)
  const departments = [
    HOME_DEPARTMENT,
    ...Object.keys(ACTIVE_DEPARTMENTS).filter((slug) => slug !== HOME_DEPARTMENT),
  ]

  const sitemapIndex = `<?xml version="1.0" encoding="UTF-8"?>
<sitemapindex xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
  <sitemap>
    <loc>${SITE_URL}/sitemap/static.xml</loc>
  </sitemap>
${departments.map((slug) => `  <sitemap>
    <loc>${SITE_URL}/sitemap/${slug}.xml</loc>
  </sitemap>`).join("\n")}
</sitemapindex>`

  return new NextResponse(sitemapIndex, {
    headers: {
      "Content-Type": "application/xml; charset=utf-8",
    },
  })
}
