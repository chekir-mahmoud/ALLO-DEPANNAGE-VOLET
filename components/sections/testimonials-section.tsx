"use client"

import { useEffect, useState } from "react"
import type React from "react"
import { Star } from "lucide-react"

type Review = { name: string; location: string; rating: number; text: string; date: string }

// Section « Avis de nos clients », partagée par les pages ville, prestation et département
export default function TestimonialsSection({ testimonials, className = "bg-white", padding = "py-14 md:py-20" }: { testimonials: Review[]; className?: string; padding?: string }) {
  const allTestimonials = testimonials
  const [currentTestimonialIndex, setCurrentTestimonialIndex] = useState(0)
  const [touchStart, setTouchStart] = useState<number | null>(null)
  const [touchEnd, setTouchEnd] = useState<number | null>(null)

  // Largeur d'écran lue après le chargement (le serveur affiche la version ordinateur) :
  // évite que le HTML du serveur et celui du navigateur diffèrent
  const [isMobile, setIsMobile] = useState(false)
  useEffect(() => {
    const update = () => setIsMobile(window.innerWidth < 768)
    update()
    window.addEventListener("resize", update)
    return () => window.removeEventListener("resize", update)
  }, [])
  const step = isMobile ? 1 : 3
  const stepSize = () => step
  const nextTestimonials = () => {
    const step = stepSize()
    setCurrentTestimonialIndex((prev) => (prev + step >= allTestimonials.length ? 0 : prev + step))
  }
  const prevTestimonials = () => {
    const step = stepSize()
    setCurrentTestimonialIndex((prev) => (prev - step < 0 ? Math.max(0, allTestimonials.length - step) : prev - step))
  }
  const handleTouchStart = (e: React.TouchEvent) => {
    setTouchEnd(null)
    setTouchStart(e.targetTouches[0].clientX)
  }
  const handleTouchMove = (e: React.TouchEvent) => setTouchEnd(e.targetTouches[0].clientX)
  const handleTouchEnd = () => {
    if (!touchStart || !touchEnd) return
    const distance = touchStart - touchEnd
    if (distance > 50) nextTestimonials()
    if (distance < -50) prevTestimonials()
  }

  return (
    <section
      className={`${className} ${padding}`}
      id="testimonials"
    >
      <div
        className="container mx-auto px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <div>
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Avis de nos clients</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452]">
                Ce que disent nos clients
              </h2>
            </div>

          </div>

          <div
            className="grid grid-cols-1 md:grid-cols-3 gap-6"
            onTouchStart={handleTouchStart}
            onTouchMove={handleTouchMove}
            onTouchEnd={handleTouchEnd}
          >
            {(() => {
              return allTestimonials
                .slice(currentTestimonialIndex, currentTestimonialIndex + step)
                .map((review, index) => (
                  <article
                    key={currentTestimonialIndex + index}
                    className="flex flex-col rounded-2xl border border-gray-200 bg-white p-7 shadow-sm transition-shadow duration-300 hover:shadow-xl"
                  >
                    <div className="mb-4 flex items-center justify-between">
                      <span className="flex gap-0.5" aria-label={`${review.rating} étoiles sur 5`}>
                        {[...Array(review.rating)].map((_, i) => (
                          <Star key={i} className="h-4 w-4 fill-[#FFC629] text-[#FFC629]" aria-hidden="true" />
                        ))}
                      </span>
                      <svg className="h-8 w-8 text-[#FFC629]" viewBox="0 0 24 24" fill="currentColor" aria-hidden="true">
                        <path d="M9.983 3v7.391c0 5.704-3.731 9.57-8.983 10.609l-.995-2.151c2.432-.917 3.995-3.638 3.995-5.849h-4v-10h9.983zm14.017 0v7.391c0 5.704-3.748 9.571-9 10.609l-.996-2.151c2.433-.917 3.996-3.638 3.996-5.849h-3.983v-10h9.983z" />
                      </svg>
                    </div>

                    <p className="flex-1 text-sm leading-relaxed text-gray-700 text-justify hyphens-auto" lang="fr">
                      {review.text}
                    </p>

                    <div className="mt-6 flex items-center gap-3 border-t border-gray-100 pt-5">
                      <div className="flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452] text-lg font-bold text-[#FFC629]">
                        {review.name.charAt(0)}
                      </div>
                      <div className="min-w-0 flex-1">
                        <p className="font-semibold text-[#0E2452]">{review.name}</p>
                        <p className="text-xs text-gray-500">{review.location} · {review.date}</p>
                      </div>
                      <svg className="h-5 w-5 flex-shrink-0" viewBox="0 0 24 24" aria-label="Avis Google">
                        <path fill="#4285F4" d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z" />
                        <path fill="#34A853" d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z" />
                        <path fill="#FBBC05" d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.07H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.93l2.85-2.22.81-.62z" />
                        <path fill="#EA4335" d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.07l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z" />
                      </svg>
                    </div>
                  </article>
                ))
            })()}
          </div>

          <div className="flex justify-center gap-2 mt-8">
            {(() => {
              const totalDots = Math.ceil(allTestimonials.length / step)
              return Array.from({ length: totalDots }, (_, i) => (
                <button
                  key={i}
                  type="button"
                  onClick={() => setCurrentTestimonialIndex(i * step)}
                  className={`h-2 rounded-full transition-all duration-300 ${Math.floor(currentTestimonialIndex / step) === i
                    ? "bg-[#0E2452] w-8"
                    : "w-2 bg-gray-300 hover:bg-gray-400"
                    }`}
                  aria-label={`Aller au groupe d'avis ${i + 1}`}
                />
              ))
            })()}
          </div>
        </div>
      </div>
    </section>
  )
}
