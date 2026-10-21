import type { MetadataRoute } from "next"

// Robots SEO et IA qui parcourent tout le site sans apporter de clients :
// bloqués pour ne pas consommer le quota Vercel (Google, Bing, etc. restent autorisés)
const BLOCKED_BOTS = [
  "AhrefsBot",
  "SemrushBot",
  "MJ12bot",
  "DotBot",
  "BLEXBot",
  "DataForSeoBot",
  "PetalBot",
  "Bytespider",
  "GPTBot",
  "CCBot",
  "ClaudeBot",
  "anthropic-ai",
  "Google-Extended",
  "meta-externalagent",
  "Amazonbot",
]

export default function robots(): MetadataRoute.Robots {
  return {
    rules: [
      {
        userAgent: "*",
        allow: "/",
        disallow: ["/api/"],
      },
      {
        userAgent: BLOCKED_BOTS,
        disallow: "/",
      },
    ],
    sitemap: "https://www.allo-depannage-volet.fr/sitemap.xml",
  }
}
