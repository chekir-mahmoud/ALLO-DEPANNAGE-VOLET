"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle2, ChevronRight } from "lucide-react"
import QuoteFormHeading from "@/components/quote-form-heading"

// Formulaire de devis de l'en-tête — même présentation que sur les pages ville
export default function HeroQuoteForm({
  messagePlaceholder = "Votre projet : type de bien, pièces à vider, date souhaitée...",
}: {
  messagePlaceholder?: string
}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [success, setSuccess] = useState(false)
  const [error, setError] = useState(false)
  const fieldClass = "h-11 rounded-lg border border-gray-200 focus-visible:border-[#0E2452] focus-visible:ring-[#0E2452]/20"

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const form = e.currentTarget
    setIsSubmitting(true)
    setError(false)
    const values = Object.fromEntries(new FormData(form)) as Record<string, string>
    const [prenom, ...rest] = (values.nomComplet || "").trim().split(" ")
    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom,
          nom: rest.join(" ") || prenom,
          telephone: values.telephone,
          email: values.email,
          adresse: values.adresse,
          message: values.message,
          pageUrl: window.location.href,
          pagePath: window.location.pathname,
        }),
      })
      if (!response.ok) throw new Error()
      form.reset()
      setSuccess(true)
      setTimeout(() => setSuccess(false), 4000)
    } catch {
      setError(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  return (
    <div className="overflow-hidden rounded-2xl bg-white p-5 text-gray-900 shadow-2xl md:p-6">
      <QuoteFormHeading />

      {success ? (
        <div className="py-12 text-center">
          <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#0E2452]">
            <CheckCircle2 className="h-8 w-8 text-[#FFC629]" aria-hidden="true" />
          </span>
          <h3 className="mb-2 text-xl font-bold text-[#0E2452]">Demande envoyée !</h3>
          <p className="text-gray-600">Nous vous rappelons en moins de 30 minutes.</p>
        </div>
      ) : (
        <form className="space-y-3" onSubmit={handleSubmit}>
          <Input name="nomComplet" placeholder="Nom et prénom *" aria-label="Nom et prénom" required autoComplete="name" className={fieldClass} />
          <div className="grid gap-3 sm:grid-cols-2">
            <Input name="telephone" type="tel" placeholder="Téléphone *" aria-label="Téléphone" required autoComplete="tel" className={fieldClass} />
            <Input name="email" type="email" placeholder="E-mail (facultatif)" aria-label="E-mail" autoComplete="email" className={fieldClass} />
          </div>
          <Input name="adresse" placeholder="Adresse du logement *" aria-label="Adresse du logement" required autoComplete="street-address" className={fieldClass} />
          <Textarea
            name="message"
            rows={2}
            placeholder={messagePlaceholder}
            aria-label="Votre projet"
            className="resize-none rounded-lg border border-gray-200 focus-visible:border-[#0E2452] focus-visible:ring-[#0E2452]/20"
          />

          {error && (
            <p role="alert" className="rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
              L&apos;envoi n&apos;a pas abouti. Réessayez ou appelez-nous.
            </p>
          )}

          <Button
            type="submit"
            disabled={isSubmitting}
            className="group h-12 w-full rounded-lg border-2 border-[#FFC629] bg-[#FFC629] text-base font-bold text-[#0E2452] shadow-md transition-colors duration-300 hover:border-[#0E2452] hover:bg-[#0E2452] hover:text-white"
          >
            {isSubmitting ? (
              "Envoi en cours..."
            ) : (
              <span className="inline-flex items-center justify-center gap-1.5">
                Obtenir mon devis gratuit
                <ChevronRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" strokeWidth={2.5} aria-hidden="true" />
              </span>
            )}
          </Button>
          <p className="pt-1 text-center text-xs text-gray-500">Sans engagement · Vos données restent confidentielles</p>
        </form>
      )}
    </div>
  )
}
