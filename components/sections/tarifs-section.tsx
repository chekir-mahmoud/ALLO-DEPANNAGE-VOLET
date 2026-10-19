// Section « Combien coûte un débarras ? » (tarifs généraux), partagée par les pages ville et département
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
              Combien coûte un débarras {place} ?
            </h2>
            <p className="text-gray-600 text-lg lg:whitespace-nowrap">
              Des tarifs clairs et sans surprise, selon votre logement, le volume ou les objets à enlever.
            </p>
          </div>

          <div className="grid lg:grid-cols-3 gap-5 md:gap-6">
            {[
              {
                title: "Par type de logement",
                intro: "Le plus simple pour estimer votre budget.",
                rows: [
                  { label: "Studio", prix: "dès 250 €" },
                  { label: "Appartement T2", prix: "dès 450 €" },
                  { label: "Appartement T3", prix: "dès 650 €" },
                  { label: "Appartement T4 et plus", prix: "sur devis" },
                  { label: "Maison", prix: "dès 900 €" },
                ],
                note: "Prix selon le volume, l'accès et les déchets.",
              },
              {
                title: "Au volume",
                intro: "Le plus transparent pour les grands débarras.",
                rows: [
                  { label: "Mini débarras", sous: "moins de 5 m³", prix: "dès 150 €" },
                  { label: "Petit débarras", sous: "5 à 15 m³", prix: "dès 250 €" },
                  { label: "Débarras moyen", sous: "15 à 30 m³", prix: "dès 550 €" },
                  { label: "Gros débarras", sous: "30 à 50 m³", prix: "dès 900 €" },
                  { label: "Très gros débarras", sous: "50 m³ et plus", prix: "dès 1 400 €" },
                ],
                note: "Prix selon le tri, le poids, la manutention et le traitement.",
              },
              {
                title: "Par objet ou prestation",
                intro: "Idéal pour les petits enlèvements.",
                rows: [
                  { label: "Canapé", prix: "dès 69 €" },
                  { label: "Matelas", prix: "dès 39 €" },
                  { label: "Électroménager", prix: "dès 39 €" },
                  { label: "Enlèvement de meubles", prix: "dès 99 €" },
                  { label: "Cave ou garage", prix: "dès 199 €" },
                ],
                note: "Prix selon le déplacement, la manutention et le traitement.",
              },
            ].map((grille) => (
              <article key={grille.title} className="flex flex-col rounded-2xl border border-gray-200 bg-white p-6 md:p-7 transition-shadow duration-300 hover:shadow-xl">
                <h3 className="text-xl font-bold text-[#0E2452]">{grille.title}</h3>
                <p className="mt-1 text-sm text-gray-500">{grille.intro}</p>
                <div className="my-5 h-1 w-10 rounded-full bg-[#FFC629]" aria-hidden="true" />
                <dl className="flex-1 divide-y divide-gray-100">
                  {grille.rows.map((row) => (
                    <div key={row.label} className="flex items-baseline justify-between gap-4 py-3">
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
            Prix indicatifs TTC. Le tarif définitif dépend du volume, de l'accessibilité et du type de biens à évacuer. Devis gratuit et sans engagement, établi le jour même.
          </p>
        </div>
      </div>
    </section>
  )
}
