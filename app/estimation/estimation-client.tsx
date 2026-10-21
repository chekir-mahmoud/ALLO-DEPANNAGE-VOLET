"use client"

import type React from "react"
import { useEffect, useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Label } from "@/components/ui/label"
import { Textarea } from "@/components/ui/textarea"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import FloatingButtons from "@/components/FloatingButtons"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import {
  ACCES, BESOINS, DELAIS, MANOEUVRES, NOMBRES, OPTIONS, TAILLES,
  calculerEstimation,
  type BesoinId, type EstimationChoix,
} from "@/lib/estimation"
import { CalendarCheck, Check, CheckCircle2, ChevronLeft, ChevronRight, Clock, Cog, FileText, Hammer, Home, Phone, ShieldCheck, Star, Store, Sun, BadgeEuro, Wrench, Zap } from "lucide-react"

const BESOIN_ICONS: Record<BesoinId, React.ComponentType<{ className?: string }>> = {
  depannage: Wrench,
  moteur: Zap,
  reparation: Hammer,
  motorisation: Cog,
  installation: Home,
  rideau: Store,
  store: Sun,
  entretien: CalendarCheck,
}

const ETAPES = ["Votre besoin", "Type de volet", "Taille et nombre", "Accès et délai", "Options", "Vos coordonnées", "Adresse et envoi"]
const DERNIERE_ETAPE = ETAPES.length - 1
const telephoneValide = (t: string) => t.replace(/\D/g, "").length >= 10

const euros = (n: number) => `${n.toLocaleString("fr-FR")} €`

// Carte de choix (sélection unique ou multiple)
function Choice({
  selected, onClick, label, desc, icon: Icon, multiple = false,
}: {
  selected: boolean
  onClick: () => void
  label: string
  desc?: string
  icon?: React.ComponentType<{ className?: string }>
  multiple?: boolean
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      aria-pressed={selected}
      className={`flex w-full items-center gap-4 rounded-xl border-2 p-4 text-left transition-colors duration-200 ${
        selected ? "border-[#0E2452] bg-[#0E2452]/5" : "border-gray-200 bg-white hover:border-[#0E2452]/50"
      }`}
    >
      {Icon && (
        <span className={`flex h-11 w-11 flex-shrink-0 items-center justify-center rounded-full ${selected ? "bg-[#0E2452]" : "bg-gray-100"}`}>
          <Icon className={`h-5 w-5 ${selected ? "text-[#FFC629]" : "text-[#0E2452]"}`} />
        </span>
      )}
      <span className="min-w-0 flex-1">
        <span className="block font-semibold text-[#0E2452]">{label}</span>
        {desc && <span className="block text-sm text-gray-500">{desc}</span>}
      </span>
      <span
        className={`flex h-6 w-6 flex-shrink-0 items-center justify-center border-2 ${multiple ? "rounded-md" : "rounded-full"} ${
          selected ? "border-[#0E2452] bg-[#0E2452]" : "border-gray-300"
        }`}
        aria-hidden="true"
      >
        {selected && <Check className="h-3.5 w-3.5 text-[#FFC629]" strokeWidth={3} />}
      </span>
    </button>
  )
}

export default function EstimationClient() {
  const phoneConfig = DEFAULT_PHONE
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)
  const [etape, setEtape] = useState(0)
  const [choix, setChoix] = useState<EstimationChoix>({ options: [] })
  const [isSubmitting, setIsSubmitting] = useState(false)
  const [envoye, setEnvoye] = useState(false)
  const [erreur, setErreur] = useState(false)
  const [coord, setCoord] = useState({ prenom: "", nom: "", telephone: "", email: "", adresse: "", contact: "Téléphone", message: "" })
  const champ = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => setCoord((c) => ({ ...c, [e.target.name]: e.target.value }))

  const estimation = calculerEstimation(choix)
  const besoin = BESOINS.find((b) => b.id === choix.besoin)
  const manoeuvre = MANOEUVRES.find((m) => m.id === choix.manoeuvre)
  const taille = TAILLES.find((t) => t.id === choix.taille)
  const nombre = NOMBRES.find((n) => n.id === choix.nombre)
  const acces = ACCES.find((a) => a.id === choix.acces)
  const delai = DELAIS.find((d) => d.id === choix.delai)
  // Pour une pose ou une motorisation, on demande la manœuvre souhaitée
  const manoeuvreSouhaitee = choix.besoin === "installation" || choix.besoin === "motorisation"
  const estRideauOuStore = choix.besoin === "rideau" || choix.besoin === "store"

  const etapeValide = [
    !!choix.besoin,
    !!choix.manoeuvre,
    !!choix.taille && !!choix.nombre,
    !!choix.acces && !!choix.delai,
    true,
    !!coord.prenom.trim() && !!coord.nom.trim() && telephoneValide(coord.telephone),
    coord.adresse.trim().length >= 3,
  ][etape]

  const set = (patch: Partial<EstimationChoix>) => setChoix((c) => ({ ...c, ...patch }))
  const aller = (n: number) => {
    setEtape(n)
    document.getElementById("simulateur")?.scrollIntoView({ behavior: "smooth", block: "start" })
  }

  const recommencer = () => {
    setChoix({ options: [] })
    setCoord({ prenom: "", nom: "", telephone: "", email: "", adresse: "", contact: "Téléphone", message: "" })
    setEnvoye(false)
    setErreur(false)
    aller(0)
  }

  useEffect(() => {
    if (!envoye) return
    const t = setTimeout(recommencer, 8000)
    return () => clearTimeout(t)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [envoye])

  // Le bouton principal passe à l'étape suivante, ou envoie la demande à la dernière étape
  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    if (!etapeValide) return
    if (etape < DERNIERE_ETAPE) {
      aller(etape + 1)
      return
    }
    if (!estimation) return
    setIsSubmitting(true)
    setErreur(false)
    const v = coord
    const recap = [
      `Préférence de contact : ${v.contact}`,
      `Accès : ${acces?.label ?? "-"} · délai souhaité : ${delai?.label.toLowerCase() ?? "-"}`,
      v.message ? `\n${v.message}` : "",
    ].join("\n")
    try {
      const response = await fetch("/api/send-quote", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
          prenom: v.prenom,
          nom: v.nom,
          telephone: v.telephone,
          email: v.email,
          adresse: v.adresse,
          message: recap,
          estimation: estimation.lignes,
          estimationTotal: estimation.total,
          estimationMin: estimation.min,
          estimationMax: estimation.max,
          pageUrl: window.location.href,
          pagePath: window.location.pathname,
        }),
      })
      if (!response.ok) throw new Error()
      setEnvoye(true)
    } catch {
      setErreur(true)
    } finally {
      setIsSubmitting(false)
    }
  }

  const fieldClass = "h-11 text-sm border-gray-300 focus-visible:border-[#0E2452] focus-visible:ring-[#0E2452]/20"
  const labelClass = "text-sm font-semibold text-[#0E2452] mb-1 block"

  return (
    <div className="min-h-screen bg-white">
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />

      {/* HERO — même style que les autres pages */}
      <section aria-label="Simulateur de prix de volet roulant" className="relative isolate overflow-hidden bg-[#0E2452] text-white" id="hero">
        <Image src="/images/volet/moteur-tubulaire-volet-roulant.jpg" alt="" aria-hidden="true" fill priority sizes="100vw" className="-z-10 object-cover object-center opacity-30" />
        <div className="absolute inset-0 -z-10 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.86)_48%,rgba(14,36,82,0.38)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC629]">Simulateur gratuit</p>
          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:min-h-[2lh] xl:min-h-0">
            Estimez le prix de votre <span className="text-[#FFC629]">intervention</span>
          </h1>
          <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Dépannage, réparation, moteur, motorisation ou pose : répondez à 5 questions et obtenez une estimation indicative en moins d&apos;une minute. Gratuit et sans engagement.
          </p>
          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button
              asChild
              size="lg"
              className="h-12 w-full justify-center rounded-lg border-2 border-[#FFC629] bg-[#FFC629] px-6 text-base font-bold text-[#0E2452] transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0E2452] sm:w-64"
            >
              <a href="#simulateur"><FileText className="mr-2 h-5 w-5" aria-hidden="true" /> Commencer</a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 w-full justify-center rounded-lg border-2 border-white/40 bg-transparent px-6 text-base font-semibold text-white transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0E2452] sm:w-64"
            >
              <a href={`tel:${phoneConfig.tel}`}><Phone className="mr-2 h-5 w-5" /> Appeler maintenant</a>
            </Button>
          </div>
        </div>

        <div className="relative mx-auto grid max-w-7xl grid-cols-2 gap-3 border-t border-white/15 px-5 py-6 lg:grid-cols-4 md:px-8">
          <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Moins d&apos;une minute</span></div>
          <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">100% gratuit</span></div>
          <div className="flex items-center gap-3"><Star className="h-5 w-5 fill-[#FFC629] text-[#FFC629]" /><span className="text-sm text-slate-200">4,8/5 par nos clients</span></div>
          <div className="flex items-center gap-3"><BadgeEuro className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Tarifs transparents</span></div>
        </div>
      </section>

      {/* SIMULATEUR */}
      <section className="scroll-mt-24 bg-gray-50 py-10 md:py-14" id="simulateur">
        <div className="container mx-auto px-4 md:px-8">
          <div className="max-w-7xl mx-auto grid gap-6 lg:grid-cols-[1fr_360px] lg:gap-8 items-stretch">
            {/* Étapes */}
            <form onSubmit={handleSubmit} noValidate className="rounded-2xl border border-gray-200 bg-white p-5 md:p-8">
              {/* Progression */}
              <div className="mb-8">
                <div className="mb-2 flex items-center justify-between text-sm">
                  <span className="font-semibold text-[#0E2452]">Étape {etape + 1} sur {ETAPES.length}</span>
                  <span className="text-gray-500">{ETAPES[etape]}</span>
                </div>
                <div className="h-2 overflow-hidden rounded-full bg-gray-100" role="progressbar" aria-valuemin={1} aria-valuemax={ETAPES.length} aria-valuenow={etape + 1}>
                  <div className="h-full rounded-full bg-[#FFC629] transition-all duration-500" style={{ width: `${((etape + 1) / ETAPES.length) * 100}%` }} />
                </div>
              </div>

              {etape === 0 && (
                <fieldset>
                  <legend className="mb-5 text-2xl font-bold text-[#0E2452]">Quel est votre besoin ?</legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {BESOINS.map((b) => (
                      <Choice
                        key={b.id}
                        selected={choix.besoin === b.id}
                        onClick={() => set({ besoin: b.id, manoeuvre: b.id === choix.besoin ? choix.manoeuvre : undefined })}
                        label={b.label}
                        desc={b.desc}
                        icon={BESOIN_ICONS[b.id]}
                      />
                    ))}
                  </div>
                </fieldset>
              )}

              {etape === 1 && (
                <fieldset>
                  <legend className="mb-5 text-2xl font-bold text-[#0E2452]">
                    {manoeuvreSouhaitee
                      ? "Quelle commande souhaitez-vous ?"
                      : estRideauOuStore
                        ? `Comment fonctionne votre ${choix.besoin === "rideau" ? "rideau métallique" : "store"} ?`
                        : "Comment fonctionne votre volet ?"}
                  </legend>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {MANOEUVRES.filter((m) => !(manoeuvreSouhaitee && (m.id === "inconnu" || (choix.besoin === "motorisation" && m.id === "manuel")))).map((m) => (
                      <Choice key={m.id} selected={choix.manoeuvre === m.id} onClick={() => set({ manoeuvre: m.id })} label={m.label} desc={m.desc} />
                    ))}
                  </div>
                </fieldset>
              )}

              {etape === 2 && (
                <div className="space-y-8">
                  <fieldset>
                    <legend className="mb-4 text-2xl font-bold text-[#0E2452]">Quelle est la taille {estRideauOuStore ? "de l'ouverture" : "du volet"} ?</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {TAILLES.map((t) => (
                        <Choice key={t.id} selected={choix.taille === t.id} onClick={() => set({ taille: t.id })} label={t.label} desc={t.desc} />
                      ))}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="mb-4 text-lg font-bold text-[#0E2452]">Combien {estRideauOuStore ? "d'équipements" : "de volets"} sont concernés ?</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {NOMBRES.map((n) => (
                        <Choice key={n.id} selected={choix.nombre === n.id} onClick={() => set({ nombre: n.id })} label={n.label} />
                      ))}
                    </div>
                  </fieldset>
                </div>
              )}

              {etape === 3 && (
                <div className="space-y-8">
                  <fieldset>
                    <legend className="mb-4 text-2xl font-bold text-[#0E2452]">Comment accède-t-on au coffre ?</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {ACCES.map((a) => (
                        <Choice key={a.id} selected={choix.acces === a.id} onClick={() => set({ acces: a.id })} label={a.label} desc={a.desc} />
                      ))}
                    </div>
                  </fieldset>
                  <fieldset>
                    <legend className="mb-4 text-lg font-bold text-[#0E2452]">Quand souhaitez-vous l&apos;intervention ?</legend>
                    <div className="grid gap-3 sm:grid-cols-2">
                      {DELAIS.map((d) => (
                        <Choice key={d.id} selected={choix.delai === d.id} onClick={() => set({ delai: d.id })} label={d.label} desc={d.desc} />
                      ))}
                    </div>
                  </fieldset>
                </div>
              )}

              {etape === 4 && (
                <fieldset>
                  <legend className="mb-2 text-2xl font-bold text-[#0E2452]">Des éléments particuliers ?</legend>
                  <p className="mb-5 text-gray-600">Plusieurs choix possibles. Passez à l&apos;étape suivante si rien ne correspond.</p>
                  <div className="grid gap-3 sm:grid-cols-2">
                    {OPTIONS.map((o) => (
                      <Choice
                        key={o.id}
                        multiple
                        selected={choix.options.includes(o.id)}
                        onClick={() =>
                          set({ options: choix.options.includes(o.id) ? choix.options.filter((x) => x !== o.id) : [...choix.options, o.id] })
                        }
                        label={o.label}
                        desc={`+ ${euros(o.prix)}`}
                      />
                    ))}
                  </div>
                </fieldset>
              )}

              {/* Coordonnées, demandées progressivement */}
              {etape >= 5 && estimation && (
                envoye ? (
                  <div className="py-10 text-center" role="status">
                    <span className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-full bg-[#0E2452]">
                      <CheckCircle2 className="h-8 w-8 text-[#FFC629]" aria-hidden="true" />
                    </span>
                    <h2 className="mb-2 text-2xl font-bold text-[#0E2452]">Demande envoyée !</h2>
                    <p className="mx-auto max-w-md text-gray-600">
                      Merci {coord.prenom}. Nous étudions votre estimation et vous recontactons en moins de 30 minutes pour vous proposer un devis ferme et gratuit.
                    </p>
                    <p className="mt-4 text-sm text-gray-500">Le simulateur va se réinitialiser dans quelques secondes…</p>
                    <Button
                      type="button"
                      onClick={recommencer}
                      className="mt-6 h-11 rounded-lg border-2 border-[#0E2452] bg-transparent px-6 font-semibold text-[#0E2452] transition-colors hover:bg-[#0E2452] hover:text-white"
                    >
                      Faire une nouvelle estimation
                    </Button>
                  </div>
                ) : (
                  <div>
                    {etape === 5 ? (
                      <div className="mb-8 rounded-2xl bg-[#0E2452] p-6 text-center text-white md:p-8">
                        <p className="mb-2 text-sm font-semibold uppercase tracking-[0.16em] text-[#FFC629]">Votre estimation</p>
                        <p className="text-3xl font-bold md:text-5xl">
                          {euros(estimation.min)} <span className="text-slate-300 text-2xl md:text-3xl">à</span> {euros(estimation.max)}
                        </p>
                        <p className="mt-3 text-sm text-slate-300">
                          Estimation indicative TTC. Pour recevoir un devis ferme et gratuit, il ne reste que 2 étapes.
                        </p>
                      </div>
                    ) : (
                      <p className="mb-6 inline-flex items-center gap-2 rounded-full bg-[#0E2452] px-4 py-1.5 text-sm font-semibold text-white">
                        Votre estimation : <span className="text-[#FFC629]">{euros(estimation.min)} – {euros(estimation.max)}</span>
                      </p>
                    )}

                    {etape === 5 && (
                      <fieldset>
                        <legend className="mb-5 text-2xl font-bold text-[#0E2452]">Vos coordonnées</legend>
                        <div className="grid gap-3 sm:grid-cols-2">
                          <div>
                            <Label htmlFor="es-prenom" className={labelClass}>Prénom *</Label>
                            <Input id="es-prenom" name="prenom" value={coord.prenom} onChange={champ} autoComplete="given-name" required autoFocus placeholder="Prénom" className={fieldClass} />
                          </div>
                          <div>
                            <Label htmlFor="es-nom" className={labelClass}>Nom *</Label>
                            <Input id="es-nom" name="nom" value={coord.nom} onChange={champ} autoComplete="family-name" required placeholder="Nom" className={fieldClass} />
                          </div>
                          <div>
                            <Label htmlFor="es-telephone" className={labelClass}>Téléphone *</Label>
                            <Input id="es-telephone" name="telephone" value={coord.telephone} onChange={champ} type="tel" autoComplete="tel" required placeholder="06 XX XX XX XX" className={fieldClass} />
                          </div>
                          <div>
                            <Label htmlFor="es-email" className={labelClass}>Email <span className="font-normal text-gray-500">(facultatif)</span></Label>
                            <Input id="es-email" name="email" value={coord.email} onChange={champ} type="email" autoComplete="email" placeholder="email@exemple.fr" className={fieldClass} />
                          </div>
                        </div>
                      </fieldset>
                    )}

                    {etape === 6 && (
                      <fieldset className="space-y-6">
                        <legend className="mb-5 text-2xl font-bold text-[#0E2452]">Adresse et envoi</legend>
                        <div>
                          <Label htmlFor="es-adresse" className={labelClass}>Adresse ou code postal et ville *</Label>
                          <Input id="es-adresse" name="adresse" value={coord.adresse} onChange={champ} autoComplete="street-address" required autoFocus placeholder="Ex. 12 rue des Lilas, 69003 Lyon" className={fieldClass} />
                        </div>
                        <div>
                          <p className={labelClass}>Comment préférez-vous être recontacté ?</p>
                          <div className="grid gap-3 sm:grid-cols-3">
                            {["Téléphone", "SMS", "E-mail"].map((c) => (
                              <Choice key={c} selected={coord.contact === c} onClick={() => setCoord((x) => ({ ...x, contact: c }))} label={c} />
                            ))}
                          </div>
                        </div>
                        <div>
                          <Label htmlFor="es-message" className={labelClass}>Informations complémentaires <span className="font-normal text-gray-500">(facultatif)</span></Label>
                          <Textarea
                            id="es-message"
                            name="message"
                            value={coord.message}
                            onChange={champ}
                            rows={3}
                            placeholder="Marque du moteur, panne constatée, date souhaitée, contraintes d'accès..."
                            className="resize-none text-sm border-gray-300 focus-visible:border-[#0E2452] focus-visible:ring-[#0E2452]/20"
                          />
                          <p className="mt-3 flex items-center gap-1 text-xs text-gray-500">
                            <ShieldCheck className="h-3.5 w-3.5 text-[#0E2452]" aria-hidden="true" /> Vos données restent confidentielles et ne sont jamais partagées.
                          </p>
                        </div>
                      </fieldset>
                    )}

                    {erreur && (
                      <p role="alert" className="mt-5 rounded-lg border border-red-200 bg-red-50 px-4 py-3 text-sm text-red-700">
                        L&apos;envoi n&apos;a pas abouti. Vos informations sont conservées : réessayez ou appelez-nous au{" "}
                        <a href={`tel:${phoneConfig.tel}`} className="font-semibold underline">{phoneConfig.display}</a>.
                      </p>
                    )}
                  </div>
                )
              )}

              {/* Navigation */}
              {!envoye && (
                <div className="mt-8 flex items-center justify-between gap-4 border-t border-gray-100 pt-6">
                  <Button
                    type="button"
                    variant="outline"
                    onClick={() => aller(etape - 1)}
                    disabled={etape === 0}
                    className="h-11 rounded-lg border-2 border-gray-200 px-5 font-semibold text-[#0E2452] hover:border-[#0E2452] hover:bg-white disabled:opacity-40"
                  >
                    <ChevronLeft className="mr-1 h-5 w-5" aria-hidden="true" />
                    Précédent
                  </Button>
                  {etape === DERNIERE_ETAPE ? (
                    <Button
                      type="submit"
                      disabled={isSubmitting}
                      className="h-11 rounded-lg border-2 border-[#FFC629] bg-[#FFC629] px-6 font-bold text-[#0E2452] transition-colors duration-300 hover:border-[#0E2452] hover:bg-[#0E2452] hover:text-white"
                    >
                      {isSubmitting ? "Envoi en cours..." : "Recevoir mon devis gratuit"}
                    </Button>
                  ) : (
                    <Button
                      type="submit"
                      disabled={!etapeValide}
                      className="h-11 rounded-lg border-2 border-[#0E2452] bg-[#0E2452] px-6 font-bold text-white transition-colors hover:bg-[#0E2452]/90 disabled:opacity-40"
                    >
                      {etape === 4 ? "Voir mon estimation" : "Suivant"}
                      <ChevronRight className="ml-1 h-5 w-5" aria-hidden="true" />
                    </Button>
                  )}
                </div>
              )}
            </form>

            {/* Récapitulatif */}
            <aside className="flex flex-col rounded-2xl bg-[#0E2452] p-6 text-white">
              <p className="mb-4 text-sm font-semibold uppercase tracking-[0.16em] text-[#FFC629]">Votre intervention</p>
              <dl className="space-y-3 text-sm">
                {[
                  ["Besoin", besoin?.label],
                  ["Commande", manoeuvre?.label],
                  ["Taille", taille?.label],
                  ["Nombre", nombre?.label],
                  ["Accès", acces?.label],
                  ["Délai", delai?.label],
                  ["Options", choix.options.length ? choix.options.map((id) => OPTIONS.find((o) => o.id === id)?.label).join(", ") : undefined],
                ].map(([k, v]) => (
                  <div key={k} className="flex justify-between gap-4 border-b border-white/10 pb-3">
                    <dt className="text-slate-300">{k}</dt>
                    <dd className="text-right font-semibold">{v ?? <span className="font-normal text-slate-500">—</span>}</dd>
                  </div>
                ))}
              </dl>

              
              <div className="mt-6 rounded-xl bg-white/10 p-4 text-center lg:mt-auto">
                <p className="text-xs uppercase tracking-[0.12em] text-slate-300">Fourchette estimative</p>
                <p className="mt-1 text-2xl font-bold text-[#FFC629]">
                  {estimation ? `${euros(estimation.min)} – ${euros(estimation.max)}` : "—"}
                </p>
              </div>
              <p className="mt-4 text-xs leading-relaxed text-slate-300">
                Estimation indicative, non contractuelle. Le prix définitif est confirmé par un devis gratuit, après photos ou diagnostic sur place.
              </p>
            </aside>
          </div>
        </div>
      </section>

      <Footer phoneConfig={phoneConfig} />

      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} phoneConfig={phoneConfig} />

      <FloatingButtons phoneConfig={phoneConfig} onQuoteClick={() => setIsQuoteFormOpen(true)} />
    </div>
  )
}
