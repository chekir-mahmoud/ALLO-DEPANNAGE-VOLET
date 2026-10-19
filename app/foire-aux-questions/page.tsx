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
import { Phone, ChevronDown, Package, Euro, Calendar, Shield, UserPlus, DollarSign, Laptop, TrendingUp, FileText, CheckCircle2, ShieldCheck, Star, BadgeEuro } from "lucide-react"

export default function FAQPage() {
  const phoneConfig = DEFAULT_PHONE // ← Ajoutez cette ligne
  const [isQuoteFormOpen, setIsQuoteFormOpen] = useState(false)

  // Icônes mapping
  const iconMap: { [key: string]: React.ComponentType<{ className?: string; strokeWidth?: number }> } = {
    Package,
    Euro,
    Calendar,
    Shield,
    UserPlus,
    DollarSign,
    Laptop,
    TrendingUp,
  }

  const faqData = {
    clients: {
      title: "Tout savoir sur nos services de débarras",
      subtitle: "Débarras de maison, d'appartement, de cave ou de succession : nos réponses sur nos services, le tri de vos objets et notre zone d'intervention partout en France.",
      categories: [
        {
          id: "services",
          title: "Nos prestations de débarras",
          icon: "Package",
          subcategories: [
            {
              id: "services-disponibles",
              title: "Types de débarras",
              faqs: [
                {
                  question: "Quels types de débarras réalisez-vous ?",
                  answer: "Nous réalisons tous les débarras : maison, appartement, cave, grenier, garage, dépendances, locaux professionnels et fins de chantier. Nous intervenons aussi pour les débarras après décès, les vide-maisons avant une vente ou un déménagement, et les situations de syndrome de Diogène. Chaque chantier est traité avec discrétion et efficacité.",
                },
                {
                  question: "Comment se passe un débarras de maison après un décès ?",
                  answer: "Le débarras de succession est l'une de nos spécialités. Nous intervenons avec respect, mettons de côté les papiers, photos et souvenirs que la famille souhaite garder, et pouvons coordonner l'intervention avec le notaire, les héritiers ou l'agence immobilière. Les objets de valeur peuvent être rachetés pour alléger le coût.",
                },
                {
                  question: "Proposez-vous un débarras en urgence ?",
                  answer: "Oui. Pour une vente immobilière imminente, une fin de bail ou une remise des clés, nous organisons une intervention rapide, parfois le jour même selon nos disponibilités dans votre secteur. Appelez-nous pour connaître le délai le plus court possible.",
                },
                {
                  question: "Intervenez-vous pour un débarras de syndrome de Diogène ?",
                  answer: "Oui. Nos équipes sont formées aux logements très encombrés ou insalubres. Nous intervenons sans jugement et en toute discrétion : tri, évacuation complète, puis désinfection et remise en état si nécessaire, en lien avec la famille, le bailleur ou les services sociaux.",
                },
                {
                  question: "Dois-je être présent le jour du débarras ?",
                  answer: "Non, votre présence n'est pas obligatoire. Vous pouvez nous confier les clés après validation du devis : notre équipe est assurée et de confiance. Nous vous conseillons simplement d'être joignable en début et en fin de chantier pour vos dernières consignes.",
                },
              ],
            },
          ],
        },
        {
          id: "tri",
          title: "Tri, dons et recyclage des objets",
          icon: "Shield",
          subcategories: [
            {
              id: "tri-details",
              title: "Que deviennent vos objets ?",
              faqs: [
                {
                  question: "Que deviennent les meubles et objets après un débarras ?",
                  answer: "Tout est trié sur place. Les objets en bon état sont donnés à des associations et recycleries ou revendus, les matériaux recyclables partent dans les filières adaptées, et le reste est déposé en déchetterie agréée. Cette démarche éco-responsable limite les déchets et peut réduire le prix de votre débarras.",
                },
                {
                  question: "Rachetez-vous les meubles anciens et objets de valeur ?",
                  answer: "Oui. Avant l'intervention, nous estimons gratuitement les meubles, antiquités, bibelots et objets de collection. Leur valeur est déduite du prix du débarras et peut même le couvrir entièrement.",
                },
                {
                  question: "Puis-je garder certains objets ou documents ?",
                  answer: "Bien sûr. Indiquez-nous ce que vous souhaitez conserver avant l'intervention. Pendant le tri, nous mettons aussi de côté tout ce qui peut avoir de l'importance : papiers administratifs, photos, bijoux, courriers. Rien de personnel n'est jeté sans votre accord.",
                },
                {
                  question: "Où sont emmenés les déchets après un débarras ?",
                  answer: "Ce qui ne peut être ni donné ni revendu est acheminé vers des déchetteries et filières de recyclage agréées : bois, métaux, électroménager, textiles, cartons. Aucun dépôt sauvage : chaque déchet est traité conformément à la réglementation.",
                },
                {
                  question: "Le nettoyage est-il inclus après le débarras ?",
                  answer: "Oui, un nettoyage sommaire est inclus : balayage, dépoussiérage et évacuation des derniers déchets. Les lieux sont rendus vides et propres, prêts pour une visite, une vente ou un état des lieux. Un nettoyage approfondi peut être ajouté sur demande.",
                },
              ],
            },
          ],
        },
        {
          id: "zone",
          title: "Zone d'intervention et délais",
          icon: "Calendar",
          subcategories: [
            {
              id: "zones",
              title: "Où et quand intervenons-nous ?",
              faqs: [
                {
                  question: "Dans quelles villes faites-vous des débarras ?",
                  answer: "Nous intervenons partout en France : grandes villes, villes moyennes et petites communes, en France métropolitaine comme en outre-mer. Consultez notre page Zone d'intervention pour trouver votre département et les villes desservies.",
                },
                {
                  question: "Intervenez-vous dans les petites communes et zones rurales ?",
                  answer: "Oui. Nos équipes se déplacent aussi dans les communes rurales et les zones difficiles d'accès, avec le même niveau de service et un devis gratuit. C'est pratique si vous gérez à distance une succession ou un logement situé loin de chez vous.",
                },
                {
                  question: "Quel est le délai d'intervention pour un débarras ?",
                  answer: "Nous intervenons généralement sous 24 à 48 h après validation du devis. Pour les gros volumes, nous planifions le chantier à la date qui vous convient, en tenant compte de vos contraintes de vente, de bail ou de déménagement.",
                },
                {
                  question: "Faites-vous des débarras le week-end ?",
                  answer: "Oui, sur rendez-vous, 7 jours sur 7. C'est utile pour les débarras urgents ou si vous n'êtes disponible que le samedi ou le dimanche.",
                },
                {
                  question: "Combien de temps dure un débarras de maison ?",
                  answer: "Un studio ou une cave se vide le plus souvent en une demi-journée, un appartement en une journée, et une maison entière en un à trois jours selon le volume et l'accessibilité. La durée exacte est indiquée sur votre devis.",
                },
              ],
            },
          ],
        },
      ],
    },
    pratique: {
      title: "Devis et prix d'un débarras",
      subtitle: "Devis gratuit, tarifs, déroulement et paiement : tout ce qu'il faut savoir avant de réserver votre débarras.",
      categories: [
        {
          id: "devis",
          title: "Devis de débarras gratuit",
          icon: "Euro",
          subcategories: [
            {
              id: "devis-gratuit",
              title: "Votre devis",
              faqs: [
                {
                  question: "Le devis de débarras est-il gratuit et sans engagement ?",
                  answer: "Oui, le devis est 100 % gratuit et sans engagement. Selon le volume, nous l'établissons à partir de vos photos ou après une visite gratuite sur place.",
                },
                {
                  question: "Comment obtenir un devis de débarras rapidement ?",
                  answer: "Remplissez notre formulaire de demande de devis, appelez-nous ou envoyez-nous des photos des pièces à vider. Nous vous rappelons en moins de 30 minutes et vous transmettons une estimation claire le jour même.",
                },
                {
                  question: "Peut-on faire un devis de débarras sur photos ?",
                  answer: "Oui, pour la plupart des débarras. Quelques photos de chaque pièce, l'étage et la présence d'un ascenseur suffisent pour estimer le volume. Pour une maison complète ou un chantier complexe, nous préférons une visite gratuite afin de vous donner un prix ferme.",
                },
                {
                  question: "Combien de temps le devis est-il valable ?",
                  answer: "Notre devis est valable 15 jours. Si la quantité d'objets à évacuer change d'ici l'intervention, nous l'ajustons avec vous avant le début du chantier.",
                },
                {
                  question: "Comment se déroule un débarras, du devis à la remise des clés ?",
                  answer: "1) Demande de devis en ligne ou par téléphone. 2) Estimation sur photos ou visite, puis devis détaillé. 3) Intervention à la date convenue : tri, évacuation, dons et recyclage. 4) Nettoyage sommaire et remise des clés.",
                },
              ],
            },
          ],
        },
        {
          id: "tarifs",
          title: "Prix d'un débarras",
          icon: "DollarSign",
          subcategories: [
            {
              id: "tarifs-details",
              title: "Combien coûte un débarras ?",
              faqs: [
                {
                  question: "Quel est le prix d'un débarras de maison ?",
                  answer: "À titre indicatif, comptez dès 250 € pour un studio, dès 450 € pour un T2, dès 650 € pour un T3 et dès 900 € pour une maison. Le prix final dépend du volume, de l'accessibilité et de la valeur des objets récupérables : seul le devis gratuit vous donne un tarif exact.",
                },
                {
                  question: "Comment est calculé le prix d'un débarras ?",
                  answer: "Le tarif dépend du volume à évacuer (en m³), de l'accessibilité (étage, ascenseur, stationnement), du temps de tri et de la valeur des objets revendables. Exemples : dès 150 € pour moins de 5 m³, dès 550 € de 15 à 30 m³, dès 1 400 € au-delà de 50 m³.",
                },
                {
                  question: "Un débarras peut-il être gratuit ?",
                  answer: "Oui, lorsque la valeur des meubles et objets que nous rachetons couvre le coût de l'intervention. C'est souvent le cas pour les successions avec du mobilier ancien. Nous vous l'indiquons dès l'estimation.",
                },
                {
                  question: "Combien coûte le débarras d'une cave ou d'un garage ?",
                  answer: "Le débarras d'une cave ou d'un garage démarre à 199 €. Pour un ou deux objets seulement, l'enlèvement est possible dès 39 € (matelas, électroménager) ou 69 € (canapé).",
                },
                {
                  question: "Y a-t-il des frais cachés sur le devis ?",
                  answer: "Non. Le devis détaille la main-d'œuvre, le transport et le traitement des déchets en déchetterie. Le prix validé ensemble est celui que vous payez, sans supplément le jour de l'intervention.",
                },
              ],
            },
          ],
        },
        {
          id: "paiement",
          title: "Paiement du débarras",
          icon: "TrendingUp",
          subcategories: [
            {
              id: "paiement-details",
              title: "Modalités de paiement",
              faqs: [
                {
                  question: "Quels moyens de paiement acceptez-vous ?",
                  answer: "Nous acceptons la carte bancaire (CB, Visa, Mastercard), le virement, le chèque et les espèces dans la limite légale de 1 000 €.",
                },
                {
                  question: "Quand faut-il payer le débarras ?",
                  answer: "Le paiement se fait à la fin de l'intervention, une fois le travail terminé et validé par vous. Aucun paiement à l'avance n'est demandé pour les chantiers courants.",
                },
                {
                  question: "Un acompte est-il demandé ?",
                  answer: "Uniquement pour les chantiers de plus de 3 000 € : un acompte de 30 % est alors demandé à la signature du devis. Le solde est réglé à la fin de l'intervention.",
                },
                {
                  question: "Le rachat des objets est-il déduit de la facture ?",
                  answer: "Oui. La valeur des meubles et objets que nous rachetons est déduite directement du montant du débarras et apparaît clairement sur le devis puis sur la facture.",
                },
                {
                  question: "Recevrai-je une facture pour mon débarras ?",
                  answer: "Oui, une facture détaillée vous est remise à la fin de l'intervention. Elle peut être transmise au notaire dans le cadre d'une succession ou servir de justificatif pour un bailleur ou une agence.",
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
        aria-label="Questions fréquentes sur le débarras"
        className="relative isolate overflow-hidden bg-[#0E2452] text-white"
        id="hero"
      >
        <Image
          src="/images/debarras-gratuit-768x512.jpg"
          alt="Équipe Débarras Proximité en intervention de débarras"
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
            Vos questions sur le <span className="text-[#FFC629]">débarras</span>
          </h1>

          <p className="mt-6 max-w-2xl text-lg leading-8 text-slate-300 md:text-xl md:min-h-24 text-justify hyphens-auto" lang="fr">
            Devis, tarifs, délais, succession, tri et recyclage : trouvez rapidement les réponses à vos questions sur nos débarras partout en France.
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
          <div className="flex items-center gap-3"><ShieldCheck className="h-5 w-5 text-[#FFC629]" /><span className="text-sm text-slate-200">Équipe assurée</span></div>
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