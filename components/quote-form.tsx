"use client"
import type React from "react"
import { useState, useEffect, useRef } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { X, Phone, Star, Check, CheckCircle } from "lucide-react"
import { VOLET_INTERVENTIONS } from "@/lib/testimonials/exemples-volet-roulant"

interface QuoteFormProps {
  isOpen: boolean
  onClose: () => void
  phoneConfig: {
    tel: string
    display: string
  }
  title?: string
  subtitle?: string
}

// Mêmes engagements que la bande des en-têtes de page
const ENGAGEMENTS = ["Devis gratuit et sans engagement", "Dépannage d'urgence 7j/7", "Toutes marques : Somfy, Bubendorff…", "Pièces et main-d'œuvre garanties"]

// Avis du site (mêmes textes que la section témoignages)
const AVIS = VOLET_INTERVENTIONS

const inputClass =
  "h-10 md:h-11 text-sm border-gray-300 focus-visible:border-[#0E2452] focus-visible:ring-[#0E2452]/20"
const labelClass = "text-xs md:text-sm font-semibold text-[#0E2452] mb-1 block"

export default function QuoteForm({ isOpen, onClose, phoneConfig, title, subtitle }: QuoteFormProps) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)
  const [submitError, setSubmitError] = useState(false)
  const [avisIndex, setAvisIndex] = useState(0)
  const [animating, setAnimating] = useState(false)
  const formRef = useRef<HTMLFormElement>(null)
  const dialogRef = useRef<HTMLDivElement>(null)

  // Rotation des avis
  useEffect(() => {
    if (!isOpen || AVIS.length < 2) return
    const interval = setInterval(() => {
      setAnimating(true)
      setTimeout(() => {
        setAvisIndex((prev) => (prev + 1) % AVIS.length)
        setAnimating(false)
      }, 400)
    }, 4500)
    return () => clearInterval(interval)
  }, [isOpen])

  // Référence stable : les pages passent une nouvelle fonction onClose à chaque rendu
  const onCloseRef = useRef(onClose)
  onCloseRef.current = onClose

  // Blocage du défilement de la page, fermeture avec Échap, focus sur la fenêtre à l'ouverture
  useEffect(() => {
    if (!isOpen) return
    document.body.style.overflow = "hidden"
    dialogRef.current?.focus()
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape") onCloseRef.current()
    }
    window.addEventListener("keydown", onKeyDown)
    return () => {
      document.body.style.overflow = "unset"
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [isOpen])

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)
    setSubmitError(false)

    const data = {
      ...Object.fromEntries(new FormData(e.currentTarget)),
      pageUrl: window.location.href,
      pagePath: window.location.pathname,
    }

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (!response.ok) throw new Error()
      setSubmitSuccess(true)
      formRef.current?.reset()
      setTimeout(() => {
        setSubmitSuccess(false)
        onCloseRef.current()
      }, 3000)
    } catch {
      setSubmitError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  if (!isOpen) return null

  const avis = AVIS[avisIndex]

  return (
    <div
      className="fixed inset-0 z-[10000] flex items-center justify-center p-3 md:p-6"
      role="dialog"
      aria-modal="true"
      aria-labelledby="quote-form-title"
    >
      {/* Fond assombri — un clic ferme la fenêtre */}
      <div className="absolute inset-0 bg-[#0E2452]/70 backdrop-blur-sm" onClick={onClose} aria-hidden="true" />

      <div
        ref={dialogRef}
        tabIndex={-1}
        className="relative flex max-h-[calc(100dvh-1.5rem)] w-full max-w-5xl overflow-hidden rounded-2xl bg-white shadow-2xl outline-none md:max-h-[90vh]"
      >
        {/* ── PANNEAU GAUCHE (ordinateur) — même style que les en-têtes de page ── */}
        <aside className="relative isolate hidden w-[40%] flex-col justify-between gap-8 overflow-hidden bg-[#0E2452] p-8 text-white md:flex">
          <Image
            src="/images/volet/technicien-reparation-volet-roulant.jpg"
            alt=""
            aria-hidden="true"
            fill
            sizes="40vw"
            className="-z-10 object-cover object-center opacity-20"
          />
          <div className="absolute inset-0 -z-10 bg-[linear-gradient(160deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.88)_60%,rgba(14,36,82,0.7)_100%)]" />

          <Image
            src="/images/logo-depannage-volet-roulant-blanc.png"
            alt="Allo Dépannage Volet"
            width={236}
            height={52}
            className="object-contain"
                  style={{ width: "auto" }}
                />

          <div>
            <p className="mb-4 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC629]">Pourquoi nous choisir</p>
            <ul className="space-y-3">
              {ENGAGEMENTS.map((item) => (
                <li key={item} className="flex items-center gap-3">
                  <span className="flex h-6 w-6 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC629]">
                    <Check className="h-3.5 w-3.5 text-[#0E2452]" strokeWidth={3} aria-hidden="true" />
                  </span>
                  <span className="text-sm text-slate-200">{item}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="space-y-4">
            {/* Avis client en rotation (masqué s'il n'y a aucun avis à afficher) */}
            {avis && (<>
            <div className="overflow-hidden">
              <figure
                style={{
                  transform: animating ? "translateX(-110%)" : "translateX(0)",
                  opacity: animating ? 0 : 1,
                  transition: "transform 0.4s ease-in-out, opacity 0.4s ease-in-out",
                }}
                className="rounded-2xl border border-white/15 bg-white/10 p-4"
              >
                <div className="mb-2 flex gap-1" aria-label={`${avis.rating} étoiles sur 5`}>
                  {Array.from({ length: avis.rating }).map((_, i) => (
                    <Star key={i} className="h-3.5 w-3.5 fill-[#FFC629] text-[#FFC629]" aria-hidden="true" />
                  ))}
                </div>
                <blockquote className="mb-3 line-clamp-3 text-xs italic leading-relaxed text-slate-200">« {avis.text} »</blockquote>
                <figcaption className="flex items-center gap-2">
                  <span className="flex h-7 w-7 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC629] text-xs font-bold text-[#0E2452]">
                    {avis.name.charAt(0)}
                  </span>
                  <span>
                    <span className="block text-xs font-semibold text-white">{avis.name}</span>
                    <span className="block text-xs text-slate-300">{avis.location}</span>
                  </span>
                </figcaption>
              </figure>
            </div>

            <div className="flex justify-center gap-1.5" aria-hidden="true">
              {AVIS.map((_, i) => (
                <span
                  key={i}
                  className="h-1 rounded-full transition-all duration-300"
                  style={{ width: i === avisIndex ? "24px" : "6px", backgroundColor: i === avisIndex ? "#FFC629" : "rgba(255,255,255,0.3)" }}
                />
              ))}
            </div>
            </>)}

            <a
              href={`tel:${phoneConfig.tel}`}
              className="flex items-center gap-3 rounded-xl border-2 border-white/40 px-5 py-3 transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0E2452] group"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC629]">
                <Phone className="h-4 w-4 text-[#0E2452]" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-slate-300 group-hover:text-[#0E2452]/70">Vous préférez appeler ?</span>
                <span className="block text-sm font-bold">{phoneConfig.display}</span>
              </span>
            </a>
          </div>
        </aside>

        {/* ── PANNEAU DROIT : formulaire ── */}
        <div className="flex min-w-0 flex-1 flex-col">
          <div className="flex flex-shrink-0 items-start justify-between gap-4 border-b border-gray-200 px-5 py-3 md:px-8 md:py-5">
            <div>
              <p className="mb-1 hidden text-xs font-semibold uppercase tracking-[0.16em] text-[#0E2452]/70 md:block">Gratuit et sans engagement</p>
              <h2 id="quote-form-title" className="text-lg font-bold text-[#0E2452] md:text-2xl">
                {title || "Demande de devis gratuit"}
              </h2>
              <p className="mt-0.5 text-xs text-gray-600 md:mt-1 md:text-sm">{subtitle || "Nous vous rappelons en moins de 30 minutes."}</p>
            </div>
            <button
              type="button"
              onClick={onClose}
              className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-gray-100 text-[#0E2452] transition-colors hover:bg-[#0E2452] hover:text-white"
              aria-label="Fermer"
            >
              <X className="h-5 w-5" />
            </button>
          </div>

          <div className="flex-1 overflow-y-auto px-5 py-4 md:px-8 md:py-6">
            {/* Appel direct (mobile) */}
            <a
              href={`tel:${phoneConfig.tel}`}
              className="mb-4 flex items-center gap-3 rounded-xl bg-[#0E2452] px-4 py-2.5 text-white md:hidden"
            >
              <span className="flex h-9 w-9 flex-shrink-0 items-center justify-center rounded-full bg-[#FFC629]">
                <Phone className="h-4 w-4 text-[#0E2452]" aria-hidden="true" />
              </span>
              <span>
                <span className="block text-xs text-slate-300">Vous préférez appeler ?</span>
                <span className="block text-sm font-bold">{phoneConfig.display}</span>
              </span>
            </a>

            {submitSuccess ? (
              <div className="flex flex-col items-center justify-center py-12 text-center">
                <span className="mb-4 flex h-16 w-16 items-center justify-center rounded-full bg-[#0E2452]">
                  <CheckCircle className="h-8 w-8 text-[#FFC629]" aria-hidden="true" />
                </span>
                <h3 className="mb-1 text-xl font-bold text-[#0E2452]">Demande envoyée !</h3>
                <p className="text-gray-600">Nous vous rappelons en moins de 30 minutes.</p>
              </div>
            ) : (
              <form ref={formRef} onSubmit={handleSubmit} className="space-y-3 md:space-y-4">
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <Label htmlFor="qf-prenom" className={labelClass}>Prénom *</Label>
                    <Input id="qf-prenom" name="prenom" placeholder="Prénom" autoComplete="given-name" required className={inputClass} />
                  </div>
                  <div>
                    <Label htmlFor="qf-nom" className={labelClass}>Nom *</Label>
                    <Input id="qf-nom" name="nom" placeholder="Nom" autoComplete="family-name" required className={inputClass} />
                  </div>
                  <div>
                    <Label htmlFor="qf-telephone" className={labelClass}>Téléphone *</Label>
                    <Input id="qf-telephone" name="telephone" type="tel" placeholder="06 XX XX XX XX" autoComplete="tel" required className={inputClass} />
                  </div>
                  <div>
                    <Label htmlFor="qf-email" className={labelClass}>Email *</Label>
                    <Input id="qf-email" name="email" type="email" placeholder="email@exemple.fr" autoComplete="email" required className={inputClass} />
                  </div>
                </div>

                <div>
                  <Label htmlFor="qf-adresse" className={labelClass}>Adresse d'intervention *</Label>
                  <Input id="qf-adresse" name="adresse" placeholder="Adresse, code postal et ville" autoComplete="street-address" required className={inputClass} />
                </div>

                <div>
                  <Label htmlFor="qf-message" className={labelClass}>
                    Votre panne ou projet <span className="font-normal text-gray-500">(optionnel)</span>
                  </Label>
                  <Textarea
                    id="qf-message"
                    name="message"
                    placeholder="Volet bloqué, moteur, sangle, motorisation, nombre de volets..."
                    rows={3}
                    className="h-16 min-h-0 resize-none text-sm md:h-auto md:min-h-16 border-gray-300 focus-visible:border-[#0E2452] focus-visible:ring-[#0E2452]/20"
                  />
                </div>

                {submitError && (
                  <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                    L&apos;envoi n&apos;a pas abouti. Réessayez ou appelez-nous au{" "}
                    <a href={`tel:${phoneConfig.tel}`} className="font-semibold underline">{phoneConfig.display}</a>.
                  </p>
                )}

                <Button
                  type="submit"
                  className="h-11 md:h-12 w-full rounded-lg border-2 border-[#FFC629] bg-[#FFC629] text-base font-bold text-[#0E2452] transition-colors duration-300 hover:border-[#0E2452] hover:bg-[#0E2452] hover:text-white"
                  disabled={isSubmitting}
                >
                  {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
                </Button>

                <p className="flex items-center justify-center gap-1 text-[11px] text-gray-500 md:text-xs">
                  <CheckCircle className="h-3.5 w-3.5 text-[#0E2452]" aria-hidden="true" /> Vos données sont sécurisées et ne seront jamais partagées.
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </div>
  )
}
