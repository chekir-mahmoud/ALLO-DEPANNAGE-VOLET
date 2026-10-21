// Section « Comment ça marche ? » (4 étapes), partagée par toutes les pages
export default function HowItWorksSection({ className = "bg-gray-50", padding = "py-10 md:py-14" }: { className?: string; padding?: string }) {
  return (
    <section className={`${className} ${padding} overflow-x-hidden`} id="how-it-works">
      <div
        className="container mx-auto px-4 md:px-8"
      >
        <div className="max-w-7xl mx-auto">
          <div className="grid lg:grid-cols-2 gap-10 md:gap-16 items-stretch">

            {/* Left: Timeline Content */}
            <div>
              <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />
                COMMENT ÇA MARCHE ?
              </p>

              <h2 className="font-bold text-[#0E2452] mb-10 md:mb-12 leading-tight text-2xl md:text-3xl">
                Un dépannage simple en 4 étapes
              </h2>

              <div className="space-y-8 relative">

                {/* Ligne verticale */}
                <div className="absolute left-4 md:left-6 top-6 bottom-6 w-0.5 bg-gray-300"></div>

                {[
                  {
                    number: "1",
                    title: "Vous nous contactez",
                    desc: "Par téléphone, formulaire ou WhatsApp, décrivez la panne (volet bloqué, moteur, sangle, lames) ou votre projet. Une photo nous aide à préparer l'intervention.",
                  },
                  {
                    number: "2",
                    title: "Diagnostic et devis",
                    desc: "Un technicien établit le diagnostic, identifie les pièces à remplacer et vous remet un devis clair. Vous connaissez le prix avant toute réparation.",
                  },
                  {
                    number: "3",
                    title: "Réparation ou installation",
                    desc: "Déblocage, remplacement du moteur, de la sangle ou des lames, motorisation ou pose : l'intervention est réalisée le plus souvent en une seule visite.",
                  },
                  {
                    number: "4",
                    title: "Tests et garantie",
                    desc: "Nous testons le volet, réglons les fins de course et vous expliquons l'entretien. Les pièces et la main-d'œuvre sont garanties.",
                  },
                ].map((step, i) => (
                  <div key={i} className="relative pl-12 md:pl-16">

                    {/* Numéro */}
                    <div className="absolute left-0 w-10 h-10 md:w-12 md:h-12 rounded-full flex items-center justify-center text-[#0E2452] font-bold text-lg md:text-xl shadow-lg z-10 bg-[#FFC629]">
                      {step.number}
                    </div>

                    <div>
                      <h3 className="text-lg md:text-xl font-bold text-blue-950 mb-2">
                        {step.title}
                      </h3>
                      <p className="text-gray-600 leading-relaxed">
                        {step.desc}
                      </p>
                    </div>

                  </div>
                ))}
              </div>
            </div>

            {/* Right: Image */}
            <div className="relative h-[300px] md:h-full">
              <div className="relative rounded-2xl overflow-hidden shadow-2xl h-full">
                <img
                  src="/images/volet/technicien-reparation-volet-roulant.jpg"
                  alt="Technicien réparant un volet roulant"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-[#0E2452]/60 via-[#0E2452]/30 to-[#0E2452]/15" aria-hidden="true" />
              </div>

              {/* Effets */}
              <div className="absolute -bottom-6 -right-6 w-32 md:w-48 h-32 md:h-48 bg-[#FFC629] rounded-full blur-3xl opacity-20 -z-10"></div>
              <div className="absolute -top-6 -left-6 w-32 md:w-48 h-32 md:h-48 bg-blue-950 rounded-full blur-3xl opacity-20 -z-10"></div>
            </div>

          </div>
        </div>
      </div>
    </section>
  )
}
