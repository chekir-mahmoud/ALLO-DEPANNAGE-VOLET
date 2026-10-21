"use client"

import type React from "react"
import { useState } from "react"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { DEFAULT_PHONE } from "@/lib/phone-config"
import Header from "@/components/header"
import Footer from "@/components/Footer"
import QuoteForm from "@/components/quote-form"
import FloatingButtons from "@/components/FloatingButtons"
import { Phone, ChevronDown, Wrench, Zap, MapPin, Euro, DollarSign, Clock, FileText, CheckCircle2, ShieldCheck, Star, BadgeEuro } from "lucide-react"

export default function FAQPage() {
  const phoneConfig = DEFAULT_PHONE // ← Ajoutez cette ligne
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  // Icônes mapping
  const iconMap: { [key: string]: React.ComponentType<{ className?: string; strokeWidth?: number }> } = {
    Wrench,
    Zap,
    MapPin,
    Euro,
    DollarSign,
    ShieldCheck,
  }

  const faqData = {
    clients: {
      title: "Tout savoir sur nos interventions",
      subtitle: "Dépannage, réparation, motorisation, installation, rideaux métalliques et stores : nos réponses sur nos prestations et notre zone d'intervention partout en France.",
      categories: [
        {
          id: "depannage",
          title: "Dépannage et réparation",
          icon: "Wrench",
          subcategories: [
            {
              id: "depannage-details",
              title: "Pannes et réparations",
              faqs: [
                {
                  question: "Mon volet roulant est bloqué : que faire ?",
                  answer: "Ne forcez pas sur la sangle, la manivelle ou la commande. Pour un volet électrique, vérifiez le disjoncteur et la pile de la télécommande, puis attendez 15 à 30 minutes si le volet a été manœuvré plusieurs fois de suite. Si le volet reste bloqué, contactez-nous : un technicien intervient 7j/7.",
                },
                {
                  question: "Intervenez-vous en urgence le week-end ?",
                  answer: "Oui. Notre service de dépannage fonctionne 7j/7, y compris le week-end et les jours fériés, pour les volets bloqués en position ouverte ou fermée et les rideaux métalliques de commerces.",
                },
                {
                  question: "Réparez-vous toutes les marques de volets roulants ?",
                  answer: "Oui. Nous intervenons sur toutes les marques de volets et de moteurs : Somfy, Bubendorff, Profalux, Simu, Nice, Franciaflex et la plupart des autres fabricants, sur les volets manuels comme électriques.",
                },
                {
                  question: "Faut-il remplacer tout le volet quand une lame est cassée ?",
                  answer: "Non. Une à trois lames abîmées se remplacent individuellement par des lames de même profil et de même couleur. Le remplacement du tablier complet n'est conseillé que si de nombreuses lames sont endommagées ou si le PVC est devenu cassant.",
                },
                {
                  question: "Le dépannage est-il réalisé en une seule visite ?",
                  answer: "Dans la grande majorité des cas, oui : nos véhicules transportent les pièces les plus courantes (sangles, enrouleurs, treuils, attaches, lames). Si une pièce spécifique doit être commandée, le volet est mis en sécurité en attendant la réparation définitive.",
                },
              ],
            },
          ],
        },
        {
          id: "prestations",
          title: "Motorisation, installation, rideaux et stores",
          icon: "Zap",
          subcategories: [
            {
              id: "prestations-details",
              title: "Nos autres prestations",
              faqs: [
                {
                  question: "Peut-on motoriser un volet roulant manuel ?",
                  answer: "Oui, dans la grande majorité des cas. Un moteur tubulaire remplace la sangle ou la manivelle, sans changer le coffre ni le tablier s'ils sont en bon état. Le moteur peut être filaire, radio avec télécommande ou solaire, sans raccordement électrique.",
                },
                {
                  question: "Mon moteur ne répond plus : faut-il le changer ?",
                  answer: "Pas forcément. L'alimentation, la commande, la protection thermique ou le réglage des fins de course peuvent être en cause. Le technicien vérifie chaque point et ne remplace le moteur que s'il est réellement hors service.",
                },
                {
                  question: "Posez-vous des volets roulants neufs ?",
                  answer: "Oui. Nous posons des volets roulants sur mesure en rénovation, sur des fenêtres existantes et sans gros travaux, ainsi qu'en construction neuve. Ils peuvent être manuels, électriques ou solaires, en PVC ou en aluminium.",
                },
                {
                  question: "Intervenez-vous sur les rideaux métalliques des commerces ?",
                  answer: "Oui. Nous dépannons, réparons, motorisons et posons les rideaux métalliques des commerces, ateliers et entrepôts, 7j/7, et proposons un contrat d'entretien annuel pour anticiper les pannes.",
                },
                {
                  question: "Réparez-vous les stores bannes ?",
                  answer: "Oui. Nous remplaçons les toiles, les bras articulés et les moteurs des stores bannes, motorisons les stores manuels et posons des stores bannes et intérieurs sur mesure.",
                },
              ],
            },
          ],
        },
        {
          id: "zone",
          title: "Zone d'intervention et délais",
          icon: "MapPin",
          subcategories: [
            {
              id: "zone-details",
              title: "Où et quand intervenons-nous ?",
              faqs: [
                {
                  question: "Où intervenez-vous ?",
                  answer: "Nous intervenons dans toute la France métropolitaine, des grandes villes aux petites communes rurales, ainsi qu'en Guadeloupe, en Martinique, en Guyane et à La Réunion.",
                },
                {
                  question: "Quel est le délai d'intervention ?",
                  answer: "Pour un volet bloqué ou un rideau métallique coincé, nous intervenons le plus rapidement possible, 7j/7. Pour une installation ou une motorisation, le rendez-vous est fixé selon vos disponibilités après validation du devis.",
                },
                {
                  question: "Travaillez-vous pour les copropriétés et les professionnels ?",
                  answer: "Oui. Nous intervenons pour les particuliers, les syndics de copropriété, les bailleurs, les commerces et les entreprises, ponctuellement ou dans le cadre d'un contrat d'entretien.",
                },
                {
                  question: "Dois-je être présent pendant l'intervention ?",
                  answer: "Oui, ou une personne de confiance : le technicien doit accéder au volet et au coffre, souvent depuis l'intérieur, et vous montrer le bon fonctionnement du volet à la fin de l'intervention.",
                },
                {
                  question: "Comment préparer l'intervention ?",
                  answer: "Dégagez l'accès à la fenêtre concernée et, si possible, envoyez-nous une photo du volet et du coffre ainsi que la marque du moteur. Ces informations permettent au technicien de prévoir les bonnes pièces.",
                },
              ],
            },
          ],
        },
      ],
    },
    pratique: {
      title: "Devis, prix et paiement",
      subtitle: "Devis gratuit, tarifs, paiement et garanties : tout ce qu'il faut savoir avant de faire appel à nos techniciens.",
      categories: [
        {
          id: "devis",
          title: "Devis gratuit",
          icon: "Euro",
          subcategories: [
            {
              id: "devis-details",
              title: "Votre devis",
              faqs: [
                {
                  question: "Le devis est-il gratuit ?",
                  answer: "Oui. Le devis est 100 % gratuit et sans engagement. Il vous est toujours remis avant toute intervention : vous connaissez le prix avant de donner votre accord.",
                },
                {
                  question: "Comment obtenir un devis ?",
                  answer: "Remplissez le formulaire de demande de devis, appelez-nous ou écrivez-nous sur WhatsApp. Une photo du volet et la marque du moteur nous aident à vous donner une première estimation rapidement. Nous vous rappelons en moins de 30 minutes.",
                },
                {
                  question: "Le devis est-il détaillé ?",
                  answer: "Oui. Il précise le déplacement, chaque pièce remplacée (avec la marque et la référence du moteur), la main-d'œuvre, le taux de TVA et la durée de garantie.",
                },
                {
                  question: "Le prix peut-il changer après le devis ?",
                  answer: "Non, le prix validé est celui que vous payez. Si le technicien découvre une panne supplémentaire pendant l'intervention, il vous la signale et aucun travail supplémentaire n'est réalisé sans votre accord.",
                },
                {
                  question: "Puis-je estimer le prix en ligne ?",
                  answer: "Oui. Notre simulateur d'estimation vous donne une fourchette de prix immédiate en quelques questions. Pour un prix ferme, demandez un devis gratuit.",
                },
              ],
            },
          ],
        },
        {
          id: "tarifs",
          title: "Prix des interventions",
          icon: "DollarSign",
          subcategories: [
            {
              id: "tarifs-details",
              title: "Combien coûte une intervention ?",
              faqs: [
                {
                  question: "Combien coûte un dépannage de volet roulant ?",
                  answer: "Le diagnostic et le déplacement sont proposés dès 69 €, un déblocage dès 89 € et le remplacement d'une sangle ou d'une manivelle dès 79 €. Le prix final dépend de la panne et des pièces à remplacer.",
                },
                {
                  question: "Combien coûte le remplacement d'un moteur ?",
                  answer: "Le remplacement d'un moteur filaire est proposé dès 290 € et celui d'un moteur radio (Somfy et autres marques) dès 390 €, selon la puissance nécessaire et la marque.",
                },
                {
                  question: "Combien coûte la motorisation d'un volet manuel ?",
                  answer: "La motorisation d'un volet roulant manuel est proposée dès 450 €. Le prix varie selon la taille du volet et le type de moteur : filaire, radio ou solaire.",
                },
                {
                  question: "Combien coûte la pose d'un volet roulant ?",
                  answer: "La pose d'un volet roulant en rénovation est proposée dès 390 €, fourniture et pose comprises pour une fenêtre standard. Les grandes dimensions et les volets solaires font l'objet d'un devis.",
                },
                {
                  question: "Quel taux de TVA s'applique ?",
                  answer: "Pour les travaux réalisés dans un logement achevé depuis plus de deux ans, la réparation et le remplacement de volets roulants peuvent bénéficier d'un taux de TVA réduit de 10 %, sous conditions. Le taux applicable figure sur le devis.",
                },
              ],
            },
          ],
        },
        {
          id: "paiement",
          title: "Paiement et garanties",
          icon: "ShieldCheck",
          subcategories: [
            {
              id: "paiement-details",
              title: "Paiement et garanties",
              faqs: [
                {
                  question: "Quels moyens de paiement acceptez-vous ?",
                  answer: "Nous acceptons la carte bancaire (CB, Visa, Mastercard), le virement, le chèque et les espèces dans la limite légale de 1 000 €.",
                },
                {
                  question: "Quand dois-je payer ?",
                  answer: "Le paiement se fait à la fin de l'intervention, une fois que vous avez constaté le bon fonctionnement de votre volet. Aucun paiement à l'avance n'est demandé pour un dépannage.",
                },
                {
                  question: "Un acompte est-il demandé ?",
                  answer: "Uniquement pour les chantiers de plus de 3 000 €, par exemple l'installation de plusieurs volets neufs : un acompte de 30 % est alors demandé à la signature du devis. Le solde est réglé à la fin de l'intervention.",
                },
                {
                  question: "Recevrai-je une facture ?",
                  answer: "Oui, une facture détaillée vous est remise à la fin de l'intervention. Conservez-la : elle sert de justificatif pour la garantie des pièces et de la main-d'œuvre.",
                },
                {
                  question: "Les réparations sont-elles garanties ?",
                  answer: "Oui. Les pièces remplacées et la main-d'œuvre sont garanties. Les moteurs bénéficient en plus de la garantie du fabricant. Les durées figurent sur le devis et la facture.",
                },
              ],
            },
          ],
        },
      ],
    },
  }

  return (
    <div className="min-h-screen bg-white">
      {/* HEADER */}
      <Header phoneConfig={phoneConfig} onContactClick={() => setIsQuoteFormOpen(true)} forceShowHeader={isQuoteFormOpen} />
      {/* HERO — même style que la page À propos */}
      <section
        aria-label="Questions fréquentes sur les volets roulants"
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        id="hero"
      >
        <Image
          src="/images/volet/axe-support-volet-roulant.jpg"
          alt="Axe et support de volet roulant en réparation"
          fill
          priority
          className="object-cover object-center opacity-30"
        />
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(14,36,82,0.97)_0%,rgba(14,36,82,0.86)_48%,rgba(14,36,82,0.38)_100%)]" />

        <div className="relative mx-auto max-w-7xl px-5 py-10 md:px-8 md:py-14">
          <p className="mb-4 inline-flex items-center gap-2 text-sm font-semibold uppercase tracking-[0.18em] text-[#FFC629]">
            Foire aux questions
          </p>

          <h1 className="text-4xl font-bold leading-tight md:text-6xl lg:min-h-[2lh] xl:min-h-0">
            Vos questions sur nos <span className="text-[#FFC629]">services</span>
          </h1>

          <p className="mt-6 text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Pannes, dépannage, motorisation, installation, devis, tarifs et garanties : trouvez rapidement les réponses à vos questions sur nos interventions partout en France.
          </p>

          <div className="mt-9 flex flex-col gap-4 sm:flex-row sm:gap-6">
            <Button
              size="lg"
              className="h-12 w-full justify-center rounded-lg border-2 border-[#FFC629] bg-[#FFC629] px-6 text-base font-bold text-[#0E2452] transition-colors duration-300 hover:border-white hover:bg-white hover:text-[#0E2452] sm:w-64"
              onClick={() => setIsQuoteFormOpen(true)}
            >
              <FileText className="mr-2 h-5 w-5" aria-hidden="true" />
              Obtenir un devis gratuit
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
          <div className="flex items-center gap-3"><CheckCircle2 className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Devis 100% gratuit</span></div>
          <div className="flex items-center gap-3"><Clock className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Dépannage 7j/7</span></div>
          <div className="flex items-center gap-3"><Star className="h-5 w-5 fill-[#FFC629] text-[#FFC629]" /><span className="text-sm text-slate-200">4,8/5 par nos clients</span></div>
          <div className="flex items-center gap-3"><BadgeEuro className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Tarifs transparents</span></div>
        </div>
      </section>

      {/* FAQ — même style que les FAQ des pages département */}
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{
          __html: JSON.stringify({
            "@context": "https://schema.org",
            "@type": "FAQPage",
            "mainEntity": [faqData.clients, faqData.pratique]
              .flatMap((group) => group.categories)
              .flatMap((category) => category.subcategories)
              .flatMap((subcategory) => subcategory.faqs)
              .map((f) => ({ "@type": "Question", "name": f.question, "acceptedAnswer": { "@type": "Answer", "text": f.answer } })),
          }),
        }}
      />
      {[
        { group: faqData.clients, eyebrow: "Nos prestations", bg: "bg-white" },
        { group: faqData.pratique, eyebrow: "Prix & organisation", bg: "bg-gray-50" },
      ].map(({ group, eyebrow, bg }) => (
        <section key={group.title} className={`${bg} py-10 md:py-14`}>
          <div className="container mx-auto px-4 md:px-8">
            <div className="max-w-7xl mx-auto mb-10">
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />{eyebrow}</p>
              <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">{group.title}</h2>
              <p className="text-gray-600 text-lg max-w-3xl">{group.subtitle}</p>
            </div>

            <div className="max-w-7xl mx-auto space-y-10">
              {group.categories.map((category) => {
                const IconComponent = iconMap[category.icon]
                return (
                  <div key={category.id}>
                    <div className="mb-4 flex items-center gap-4">
                      <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452]">
                        <IconComponent className="h-6 w-6 text-[#FFC629]" aria-hidden="true" />
                      </span>
                      <h3 className="text-xl md:text-2xl font-bold text-[#0E2452]">{category.title}</h3>
                    </div>

                    <div className="space-y-3">
                      {category.subcategories.flatMap((subcategory) => subcategory.faqs).map((faq) => (
                        <details key={faq.question} className="group rounded-xl border border-gray-200 bg-white transition-colors open:border-[#0E2452] open:shadow-md">
                          <summary className="flex w-full cursor-pointer list-none items-center justify-between gap-4 px-6 py-5 text-left">
                            <span className="font-semibold text-[#0E2452]">{faq.question}</span>
                            <span className="flex h-8 w-8 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452] transition-transform duration-300 group-open:rotate-180">
                              <ChevronDown className="h-4 w-4 text-[#FFC629]" />
                            </span>
                          </summary>
                          <div className="px-6 pb-5 text-gray-600 leading-relaxed text-justify hyphens-auto" lang="fr">
                            {faq.answer}
                          </div>
                        </details>
                      ))}
                    </div>
                  </div>
                )
              })}
            </div>
          </div>
        </section>
      ))}

      {/* FOOTER */}
      <Footer phoneConfig={phoneConfig} />

      {/* MODAL FORMULAIRE */}
      <QuoteForm isOpen={isQuoteFormOpen} onClose={() => setIsQuoteFormOpen(false)} phoneConfig={phoneConfig} />

      {/* Boutons flottants */}
      <FloatingButtons phoneConfig={phoneConfig} onQuoteClick={() => setIsQuoteFormOpen(true)} />
    </div>
  )
}