// Section « Nos marques » : bande de logos qui défile vers la gauche (en pause au survol)
import Image from "next/image"
import { PackageCheck } from "lucide-react"

const MARQUES = [
  { name: "Somfy", src: "/images/marques/somfy.png", w: 611 },
  { name: "Bubendorff", src: "/images/marques/bubendorff.png", w: 790 },
  { name: "Simu", src: "/images/marques/simu.png", w: 155 },
  { name: "Franciaflex", src: "/images/marques/franciaflex.png", w: 307 },
  { name: "Nice", src: "/images/marques/nice.png", w: 160 },
  { name: "CAME", src: "/images/marques/came.png", w: 615 },
  { name: "Motorline", src: "/images/marques/motorline.png", w: 694 },
  { name: "Somfy Designed for Silence", src: "/images/marques/somfy-designed-for-silence.png", w: 405 },
]

export default function BrandsSection({ className = "bg-white", padding = "py-10 md:py-14" }: { className?: string; padding?: string }) {
  return (
    <section className={`${className} ${padding}`} id="marques" aria-labelledby="marques-titre">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Nos marques</p>
            <h2 id="marques-titre" className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Réparation volet roulant toutes marques</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Notre équipe intervient sur tous les types et toutes les marques de volets roulants présents sur le marché français :
            </p>
          </div>

          {/* Bande de logos (la liste est doublée pour un défilement continu) */}
          <div className="group relative overflow-hidden rounded-2xl border border-gray-200 bg-gray-50 py-6 md:py-8 [mask-image:linear-gradient(to_right,transparent,black_8%,black_92%,transparent)]">
            <ul className="flex w-max animate-[defilement-marques_40s_linear_infinite] group-hover:[animation-play-state:paused] motion-reduce:animate-none">
              {[...MARQUES, ...MARQUES].map((m, i) => (
                <li
                  key={`${m.name}-${i}`}
                  aria-hidden={i >= MARQUES.length}
                  className="mr-4 flex h-20 w-40 flex-shrink-0 items-center justify-center rounded-xl border border-gray-200 bg-white px-4 shadow-sm md:mr-6 md:h-24 md:w-52 md:px-6"
                >
                  <Image src={m.src} alt={i < MARQUES.length ? m.name : ""} width={m.w} height={160} sizes="208px" className="h-auto max-h-12 w-auto max-w-full object-contain md:max-h-14" />
                </li>
              ))}
            </ul>
          </div>

          <div className="mt-8 flex flex-col items-center gap-4 rounded-2xl bg-[#0E2452] px-6 py-6 text-center text-white sm:flex-row sm:px-8 sm:text-left">
            <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC629]">
              <PackageCheck className="h-6 w-6 text-[#0E2452]" aria-hidden="true" />
            </span>
            <div className="min-w-0">
              <p className="font-bold text-white">Toutes marques, tous modèles</p>
              <p className="text-sm leading-relaxed text-slate-300 text-justify hyphens-auto sm:text-left" lang="fr">
                Peu importe la marque ou le modèle de votre volet : si nous n&apos;avons pas la pièce en stock, nous la commandons sous 24h et revenons finir le travail.
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}
