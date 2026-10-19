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
                Un processus simple en 4 étapes pour votre débarras
              </h2>

              <div className="space-y-8 relative">

                {/* Ligne verticale */}
                <div className="absolute left-4 md:left-6 top-6 bottom-6 w-0.5 bg-gray-300"></div>

                {[
                  {
                    number: "1",
                    title: "Demande de devis gratuit",
                    desc: "Contactez-nous par téléphone, formulaire ou WhatsApp. Décrivez votre besoin de débarras (maison, appartement, cave, garage) et recevez un devis rapide et gratuit le jour même.",
                  },
                  {
                    number: "2",
                    title: "Visite et estimation sur place",
                    desc: "Un expert se déplace gratuitement pour évaluer le volume à débarrasser et vous proposer un devis clair, adapté et sans engagement.",
                  },
                  {
                    number: "3",
                    title: "Intervention rapide",
                    desc: "Notre équipe intervient à la date convenue pour vider entièrement les lieux, trier les objets et effectuer le débarras avec soin et efficacité.",
                  },
                  {
                    number: "4",
                    title: "Recyclage et nettoyage",
                    desc: "Nous assurons le tri, le recyclage et le don des objets réutilisables. Les lieux sont laissés propres après intervention.",
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
              <div className="rounded-2xl overflow-hidden shadow-2xl h-full">
                <img
                  src="/images/debarras-maison.jpg"
                  alt="Service de débarras professionnel maison appartement"
                  className="w-full h-full object-cover"
                />
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
