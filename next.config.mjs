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
  },
}

export default nextConfig
