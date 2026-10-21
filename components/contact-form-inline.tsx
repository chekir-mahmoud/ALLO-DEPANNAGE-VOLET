"use client"

import type React from "react"
import { useState } from "react"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import { CheckCircle } from "lucide-react"

interface ContactFormInlineProps {
  title?: string
  subtitle?: string
  messagePlaceholder?: string
}

export default function ContactFormInline({
  title = "Demande de contact",
  subtitle = "Rappel en moins de 30 minutes",
  messagePlaceholder = "Décrivez votre panne ou votre projet...",
}: ContactFormInlineProps = {}) {
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [submitSuccess, setSubmitSuccess] = useState(false)

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    setIsSubmitting(true)

    const formData = new FormData(e.currentTarget)
    const data = { ...Object.fromEntries(formData), pageUrl: window.location.href, pagePath: window.location.pathname }

    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(data),
      })

      if (response.ok) {
        setSubmitSuccess(true)
        ;(e.target as HTMLFormElement).reset()
      }
    } catch (error) {
      // submit error
    } finally {
      setIsSubmitting(false)
    }
  }

  if (submitSuccess) {
    return (
      <div className="h-full rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
        <div className="text-center py-8">
          <div className="w-16 h-16 bg-[#0E2452] rounded-full flex items-center justify-center mx-auto mb-4">
            <CheckCircle className="w-8 h-8 text-[#FFC629]" />
          </div>
          <h3 className="text-xl font-bold text-[#0E2452] mb-2">Demande envoyée !</h3>
          <p className="text-gray-600 mb-4">Nous avons bien reçu votre message.</p>
          <p className="text-[#0E2452] font-semibold">Nous vous rappelons en moins de 30 minutes.</p>
          <Button onClick={() => setSubmitSuccess(false)} className="mt-6 h-11 rounded-lg border-2 border-[#FFC629] bg-[#FFC629] font-bold text-[#0E2452] transition-colors duration-300 hover:border-[#0E2452] hover:bg-[#0E2452] hover:text-white">
            Envoyer une autre demande
          </Button>
        </div>
      </div>
    )
  }

  return (
    <div className="@container h-full rounded-2xl border border-gray-200 bg-white p-6 md:p-8">
      <div className="mb-6">
        <h3 className="text-xl md:text-2xl font-bold text-[#0E2452] mb-2">{title}</h3>
        <p className="text-gray-600 text-sm md:text-base">{subtitle}</p>
      </div>

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid gap-3 @md:grid-cols-2 @4xl:grid-cols-4">
          <div>
            <Label htmlFor="prenom" className="text-sm font-semibold text-[#0E2452] mb-1 block">
              Prénom *
            </Label>
            <Input
              id="prenom"
              name="prenom"
              placeholder="Prénom"
              required
              className="h-11 text-sm border-gray-300 focus-visible:border-[#0E2452] focus-visible:ring-[#0E2452]/20"
            />
          </div>
          <div>
            <Label htmlFor="nom" className="text-sm font-semibold text-[#0E2452] mb-1 block">
              Nom *
            </Label>
            <Input
              id="nom"
              name="nom"
              placeholder="Nom"
              required
              className="h-11 text-sm border-gray-300 focus-visible:border-[#0E2452] focus-visible:ring-[#0E2452]/20"
            />
          </div>
          <div>
            <Label htmlFor="telephone" className="text-sm font-semibold text-[#0E2452] mb-1 block">
              Téléphone *
            </Label>
            <Input
              id="telephone"
              name="telephone"
              type="tel"
              placeholder="06 XX XX XX XX"
              required
              className="h-11 text-sm border-gray-300 focus-visible:border-[#0E2452] focus-visible:ring-[#0E2452]/20"
            />
          </div>
          <div>
            <Label htmlFor="email" className="text-sm font-semibold text-[#0E2452] mb-1 block">
              Email *
            </Label>
            <Input
              id="email"
              name="email"
              type="email"
              placeholder="email@exemple.fr"
              required
              className="h-11 text-sm border-gray-300 focus-visible:border-[#0E2452] focus-visible:ring-[#0E2452]/20"
            />
          </div>
        </div>

        <div>
          <Label htmlFor="adresse" className="text-sm font-semibold text-[#0E2452] mb-1 block">
            Adresse d'intervention *
          </Label>
          <Input
            id="adresse"
            name="adresse"
            placeholder="Adresse, code postal et ville"
            required
            className="h-11 text-sm border-gray-300 focus-visible:border-[#0E2452] focus-visible:ring-[#0E2452]/20"
          />
        </div>

        <div>
          <Label htmlFor="message" className="text-sm font-semibold text-[#0E2452] mb-1 block">
            Votre panne ou projet (optionnel)
          </Label>
          <Textarea
            id="message"
            name="message"
            placeholder={messagePlaceholder}
            rows={3}
            className="text-sm border-gray-300 focus-visible:border-[#0E2452] focus-visible:ring-[#0E2452]/20"
          />
        </div>

        <div className="flex flex-col gap-3 pt-1 @4xl:flex-row-reverse @4xl:items-center @4xl:justify-between">
          <Button
            type="submit"
            className="h-12 w-full rounded-lg border-2 border-[#FFC629] bg-[#FFC629] px-10 text-base font-bold text-[#0E2452] transition-colors duration-300 hover:border-[#0E2452] hover:bg-[#0E2452] hover:text-white @4xl:w-auto"
            disabled={isSubmitting}
          >
            {isSubmitting ? "Envoi en cours..." : "Envoyer ma demande"}
          </Button>

          <p className="flex items-center justify-center gap-1 text-xs text-gray-500">
            <CheckCircle className="h-3.5 w-3.5 text-[#0E2452]" /> Vos données sont sécurisées et ne seront jamais partagées.
          </p>
        </div>
      </form>
    </div>
  )
}
