/** @type {import('next').NextConfig} */
const nextConfig = {
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    // WebP seul : deux fois moins de conversions qu'avec AVIF + WebP
    formats: ["image/webp"],
    // Moins de tailles générées par image
    deviceSizes: [640, 828, 1080, 1280, 1920],
    imageSizes: [64, 128, 256, 384],
    // Images optimisées gardées en cache 1 an (au lieu de 60 s par défaut)
    minimumCacheTTL: 31536000,
    remotePatterns: [
      { protocol: "https", hostname: "images.unsplash.com" },
    ],
  },
  async redirects() {
    return [
      // Ancien domaine -> nouveau domaine (301), en conservant le chemin
      ...["www.debarras-services-33.fr", "debarras-services-33.fr"].map((host) => ({
        source: "/:path*",
        has: [{ type: "host", value: host }],
        destination: "https://www.debarras-proximite.fr/:path*",
        permanent: true,
      })),
      // Sous-service débarras appartement remplacé par débarras fin de chantier
      {
        source: "/:departement/:ville/debarras-appartement",
        destination: "/:departement/:ville/debarras-fin-de-chantier",
        permanent: true,
      },
      // Sous-service « vide maison » renommé « débarras de maison »
      {
        source: "/:departement/:ville/vide-maison",
        destination: "/:departement/:ville/debarras-maison",
        permanent: true,
      },
      // Anciennes URL /debarras-maison/... -> URL courtes /[departement]/[ville]/...
      { source: "/debarras-maison", destination: "/zone-intervention", permanent: true },
            {
        source: "/debarras-maison/:departement/:ville/debarras-appartement",
        destination: "/:departement/:ville/debarras-fin-de-chantier",
        permanent: true,
      },
      { source: "/debarras-maison/:path*", destination: "/:path*", permanent: true },
    ]
  },
}

export default nextConfig
