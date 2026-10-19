// Section « Nos formules » (gratuit / remisé / sur devis), partagée
import { CheckCircle2, ChevronRight } from "lucide-react"

export default function FormulesSection({
  place,
  onQuote,
  className = "bg-gray-50",
  padding = "py-10 md:py-14",
}: {
  place: string
  onQuote: () => void
  className?: string
  padding?: string
}) {
  return (
    <section className={`${className} ${padding}`} id="pricing-formulas">
      <div
        className="container mx-auto px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Nos formules</p>
            <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">
              Nos formules de débarras {place}
            </h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Chaque situation est unique : la valeur de vos objets détermine le prix de votre débarras.
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 md:gap-6 lg:gap-8 items-stretch pt-4">
            {[
              {
                name: "Débarras gratuit",
                price: "Gratuit, voire rémunéré",
                desc: "Vos biens ont de la valeur ? Nous les rachetons : le débarras peut être entièrement gratuit, voire vous rapporter de l'argent.",
                items: ["Estimation gratuite sur place", "Rachat de meubles, antiquités et objets", "Valeur déduite du débarras", "Vous pouvez être rémunéré"],
                ideal: "Successions avec mobilier ancien, maisons meublées, collections, électroménager récent.",
                cta: "Demander une estimation",
                featured: false,
              },
              {
                name: "Débarras remisé",
                price: "Tarif réduit",
                desc: "Une partie de vos biens a de la valeur ? Nous la rachetons et déduisons cette somme du coût total du débarras.",
                items: ["Réduction directe sur le devis", "Tri et valorisation des objets", "Rachat partiel du contenu", "Débarras complet assuré"],
                ideal: "Appartements à vider, caves avec objets valorisables, débarras mixtes.",
                cta: "Obtenir mon devis gratuit",
                featured: true,
              },
              {
                name: "Débarras sur devis",
                price: "Prix fixe annoncé",
                desc: "Pour les débarras sans objets valorisables. Un tarif transparent, basé sur le volume, l'accès et le type de déchets.",
                items: ["Devis détaillé gratuit", "Prix fixe, sans surprise", "Évacuation de tous types de déchets", "Nettoyage en option"],
                ideal: "Encombrants, garages, greniers, locaux avec beaucoup de déchets ou d'objets sans valeur.",
                cta: "Demander mon devis",
                featured: false,
              },
            ].map((formule) => (
                <div
                  key={formule.name}
                  className={`relative flex flex-col rounded-3xl p-8 transition-all duration-300 hover:-translate-y-1 bg-[#0E2452] text-white shadow-xl hover:shadow-2xl`}
                >
                  {formule.featured && (
                    <span className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap rounded-full bg-[#FFC629] px-5 py-1.5 text-xs font-bold uppercase tracking-wider text-[#0E2452] shadow-md">
                      Le plus demandé
                    </span>
                  )}

                  <div className="text-center">
                    <h3 className={`text-sm font-bold uppercase tracking-[0.16em] text-[#FFC629]`}>
                      {formule.name}
                    </h3>
                    <p className={`mt-3 text-3xl font-bold leading-tight text-white`}>
                      {formule.price}
                    </p>
                    <div className="mx-auto mt-4 h-1 w-10 rounded-full bg-[#FFC629]" aria-hidden="true" />
                    <p className={`mt-5 text-sm leading-relaxed text-slate-300`}>
                      {formule.desc}
                    </p>
                  </div>

                  <ul className={`mt-7 flex-1 space-y-3 border-t pt-7 border-white/15`}>
                    {formule.items.map((item) => (
                      <li key={item} className={`flex items-start gap-3 text-sm text-white`}>
                        <CheckCircle2 className={`mt-0.5 h-5 w-5 flex-shrink-0 text-[#FFC629]`} aria-hidden="true" />
                        {item}
                      </li>
                    ))}
                  </ul>

                  <p className={`mt-7 rounded-xl p-4 text-center text-sm leading-relaxed bg-white/10 text-slate-200`}>
                    <span className={`block mb-1 text-xs font-bold uppercase tracking-wider text-[#FFC629]`}>Idéal pour</span>
                    {formule.ideal}
                  </p>

                  <button
                    type="button"
                    onClick={onQuote}
                    className="group/cta mt-7 inline-flex w-full items-center justify-center gap-1.5 rounded-xl border-2 border-[#FFC629] bg-[#FFC629] py-3.5 text-sm font-bold text-[#0E2452] shadow-md transition-all duration-300 hover:-translate-y-0.5 hover:border-white hover:bg-[#0E2452] hover:text-white hover:shadow-xl"
                  >
                    {formule.cta}
                    <ChevronRight className="h-4 w-4 transition-transform duration-300 group-hover/cta:translate-x-1" strokeWidth={2.5} aria-hidden="true" />
                  </button>
                </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  )
}
