// Section « Pourquoi nous choisir ? » (6 engagements), partagée
import { BadgeCheck, CheckCircle2, Clock, FileText, ShieldCheck, Users } from "lucide-react"

export default function WhyChooseUsSection({ className = "bg-white", padding = "py-10 md:py-14" }: { className?: string; padding?: string }) {
  return (
    <section className={`${className} ${padding}`} id="why-choose-us">
      <div
        className="container mx-auto px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto mb-12">
          <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Nos engagements</p>
          <h2 className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">
            Pourquoi nous choisir ?
          </h2>
          <p className="text-gray-600 text-lg max-w-3xl">
            Un service professionnel et transparent, du diagnostic à la remise en service de vos volets.
          </p>
        </div>

        <ul className="max-w-7xl mx-auto grid sm:grid-cols-2 lg:grid-cols-3 gap-5 md:gap-6">
          {[
            {
              Icon: FileText,
              title: "Devis gratuit et sans engagement",
              text: "Diagnostic clair et devis détaillé : vous connaissez le prix avant toute intervention.",
            },
            {
              Icon: Clock,
              title: "Dépannage d'urgence 7j/7",
              text: "Volet bloqué ouvert ou fermé : intervention rapide, y compris le week-end.",
            },
            {
              Icon: CheckCircle2,
              title: "Toutes marques",
              text: "Somfy, Bubendorff, Profalux, Simu, Nice… volets manuels, électriques, radio ou solaires.",
            },
            {
              Icon: BadgeCheck,
              title: "Pièces de qualité",
              text: "Moteurs, lames, sangles et mécanismes de marque, adaptés à votre installation.",
            },
            {
              Icon: Users,
              title: "Techniciens qualifiés",
              text: "Des techniciens formés aux volets roulants, rideaux métalliques et stores.",
            },
            {
              Icon: ShieldCheck,
              title: "Pièces et main-d'œuvre garanties",
              text: "Intervention assurée et garantie, avec un suivi personnalisé après réparation.",
            },
          ].map(({ Icon, title, text }) => (
            <li key={title} className="flex items-start gap-4 rounded-2xl border border-gray-200 bg-white p-6 transition-shadow hover:shadow-lg">
              <span className="flex h-12 w-12 flex-shrink-0 items-center justify-center rounded-full bg-[#0E2452]">
                <Icon className="h-6 w-6 text-[#FFC629]" aria-hidden="true" />
              </span>
              <div>
                <h3 className="mb-1 text-lg font-bold text-[#0E2452]">{title}</h3>
                <p className="text-sm leading-relaxed text-gray-600">{text}</p>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
