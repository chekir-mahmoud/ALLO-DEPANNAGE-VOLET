"use client"

import { useState } from "react"
import Image from "next/image"
import { ChevronLeft, ChevronRight } from "lucide-react"

  // Réalisations avant / après (photos de chantiers réels)
const projects = [
    { label: "Cave", title: "Débarras d'une cave encombrée", before: "/images/realisations/cave-avant.jpg", after: "/images/realisations/cave-apres.jpg" },
    { label: "Chambre", title: "Débarras d'une chambre", before: "/images/realisations/chambre-avant.jpg", after: "/images/realisations/chambre-apres.jpg" },
    { label: "Grenier", title: "Débarras d'un grenier", before: "/images/realisations/grenier-avant.jpg", after: "/images/realisations/grenier-apres.jpg" },
    { label: "Salon", title: "Débarras d'un salon après succession", before: "/images/realisations/salon-avant.jpg", after: "/images/realisations/salon-apres.jpg" },
    { label: "Séjour", title: "Débarras d'un séjour d'appartement", before: "/images/realisations/sejour-avant.jpg", after: "/images/realisations/sejour-apres.jpg" },
  ]

// Section « Nos réalisations » (avant / après), partagée par les pages ville, prestation et département
export default function RealisationsSection({ place, className = "bg-gray-50", padding = "py-14 md:py-20" }: { place: string; className?: string; padding?: string }) {
  const [currentProjectIndex, setCurrentProjectIndex] = useState(0)

  return (
    <section id="realisations" className={`${className} ${padding}`}>
      <div
        className="container mx-auto px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Nos réalisations</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Le résultat de nos interventions</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Des espaces libérés grâce au savoir-faire et au sérieux de notre équipe.
            </p>
          </div>

          <div className="relative px-9 md:px-14">
            <div className="grid md:grid-cols-2 gap-4 md:gap-5">
              {[
                { src: projects[currentProjectIndex].before, label: "Avant", badge: "bg-[#0E2452] text-white" },
                { src: projects[currentProjectIndex].after, label: "Après", badge: "bg-[#FFC629] text-[#0E2452]" },
              ].map((img) => (
                <figure key={img.label} className="relative aspect-[12/5] md:aspect-[759/221] overflow-hidden rounded-2xl bg-gray-200 shadow-lg">
                  <Image
                    key={img.src}
                    src={img.src}
                    alt={`${projects[currentProjectIndex].title} ${place} — ${img.label.toLowerCase()} l'intervention`}
                    fill
                    sizes="(min-width: 768px) 50vw, 100vw"
                    className="object-cover animate-in fade-in duration-500"
                  />
                  <figcaption className={`absolute left-4 top-4 rounded-full px-4 py-1.5 text-xs font-bold uppercase tracking-wider shadow-md ${img.badge}`}>
                    {img.label}
                  </figcaption>
                </figure>
              ))}
            </div>

            {/* Flèches de navigation */}
            <button
              type="button"
              onClick={() => setCurrentProjectIndex((i) => (i - 1 + projects.length) % projects.length)}
              className="absolute left-0 top-1/2 -translate-y-1/2 text-[#0E2452] transition-transform duration-200 hover:-translate-x-1 hover:opacity-80"
              aria-label="Réalisation précédente"
            >
              <ChevronLeft className="h-9 w-9 md:h-12 md:w-12" strokeWidth={2.5} />
            </button>
            <button
              type="button"
              onClick={() => setCurrentProjectIndex((i) => (i + 1) % projects.length)}
              className="absolute right-0 top-1/2 -translate-y-1/2 text-[#0E2452] transition-transform duration-200 hover:translate-x-1 hover:opacity-80"
              aria-label="Réalisation suivante"
            >
              <ChevronRight className="h-9 w-9 md:h-12 md:w-12" strokeWidth={2.5} />
            </button>
          </div>
        </div>
      </div>
    </section>
  )
}
