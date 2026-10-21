// Section « Combien coûte un dépannage de volet roulant ? » (tarifs généraux), partagée par les pages ville et département
import Link from "next/link"
import { Calculator, ChevronRight } from "lucide-react"

export default function TarifsSection({ place, className = "bg-white", padding = "py-14 md:py-20" }: { place: string; className?: string; padding?: string }) {
  return (
    <section className={`${className} ${padding}`} id="pricing-tarifs">
      <div
        className="container mx-auto px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Nos tarifs</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">
              Combien coûte un dépannage de volet roulant {place} ?
            </h2>
            <p className="text-gray-600 text-lg lg:whitespace-nowrap">
              Des tarifs clairs et sans surprise, selon la panne, les pièces à remplacer ou votre projet.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: "Dépannage et réparation",
                intro: "Pour un volet bloqué ou abîmé.",
                rows: [
                  { label: "Diagnostic et déplacement", prix: "dès 69 €" },
                  { label: "Déblocage de volet roulant", prix: "dès 89 €" },
                  { label: "Remplacement de sangle ou manivelle", prix: "dès 79 €" },
                  { label: "Remplacement de lames", prix: "dès 119 €" },
                  { label: "Remplacement du tablier", prix: "dès 249 €" },
                ],
                note: "Prix selon la panne, les dimensions et l'accès.",
              },
              {
                title: "Moteurs et motorisation",
                intro: "Pour passer à l'électrique ou remplacer un moteur.",
                rows: [
                  { label: "Remplacement moteur", sous: "filaire", prix: "dès 290 €" },
                  { label: "Remplacement moteur", sous: "radio, Somfy…", prix: "dès 390 €" },
                  { label: "Motorisation d'un volet manuel", prix: "dès 450 €" },
                  { label: "Télécommande ou inverseur", prix: "dès 59 €" },
                  { label: "Centralisation et domotique", prix: "sur devis" },
                ],
                note: "Prix selon la marque, le moteur et le nombre de volets.",
              },
              {
                title: "Installation, rideaux et stores",
                intro: "Pour équiper ou moderniser vos fermetures.",
                rows: [
                  { label: "Pose de volet roulant", sous: "rénovation", prix: "dès 390 €" },
                  { label: "Pose de volet roulant neuf", prix: "sur devis" },
                  { label: "Dépannage rideau métallique", prix: "dès 149 €" },
                  { label: "Réparation de store banne", prix: "dès 129 €" },
                  { label: "Contrat d'entretien", prix: "dès 99 €/an" },
                ],
                note: "Prix selon les dimensions, le modèle et la pose.",
              },
            ].map((grille) => (
              <article key={grille.title} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 md:p-7 transition-shadow duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-[#0E2452]">{grille.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{grille.intro}</p>
                <div className="my-5 h-1 w-10 rounded-full bg-[#FFC629]" aria-hidden="true" />
                <dl className="flex-1 divide-y divide-gray-100">
                  {grille.rows.map((row) => (
                    <div key={`${row.label}-${row.sous ?? ""}`} className="flex items-baseline justify-between gap-4 py-3">
                      <dt className="text-sm font-medium text-gray-700">
                        {row.label}
                        {"sous" in row && <span className="ml-1.5 text-xs font-normal text-gray-500">({row.sous})</span>}
                      </dt>
                      <dd className="text-right font-bold text-[#0E2452] whitespace-nowrap">{row.prix}</dd>
                    </div>
                  ))}
                </dl>
                <p className="mt-5 rounded-xl bg-gray-50 p-4 text-center text-xs leading-relaxed text-gray-500">{grille.note}</p>
              </article>
            ))}
          </div>

          {/* Lien vers le simulateur de prix */}
          <div className="mt-8 flex flex-col items-center justify-between gap-4 rounded-2xl border border-gray-200 bg-gray-50 p-5 sm:flex-row md:px-8">
            <div className="flex items-center gap-4">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452]">
                <Calculator className="h-6 w-6 text-[#FFC629]" aria-hidden="true" />
              </span>
              <div>
                <p className="font-bold text-[#0E2452]">Estimez votre prix en 1 minute</p>
                <p className="text-sm text-gray-600">Répondez à 5 questions et obtenez une fourchette de prix immédiate.</p>
              </div>
            </div>
            <Link
              href="/estimation"
              className="group inline-flex h-12 flex-shrink-0 items-center justify-center rounded-lg border-2 border-[#FFC629] bg-[#FFC629] px-6 font-bold text-[#0E2452] transition-colors duration-300 hover:border-[#0E2452] hover:bg-[#0E2452] hover:text-white"
            >
              Lancer le simulateur
              <ChevronRight className="ml-1 h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" aria-hidden="true" />
            </Link>
          </div>

          <p className="mt-8 mx-auto max-w-4xl text-center text-xs text-gray-500">
            Prix indicatifs TTC, pièces standards incluses. Le tarif définitif dépend de la panne, des pièces et de l'accès. Devis gratuit et sans engagement avant toute intervention.
          </p>
        </div>
      </div>
    </section>
  )
}
