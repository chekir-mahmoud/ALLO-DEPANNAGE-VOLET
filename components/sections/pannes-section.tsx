// Section « Ce que nous réparons » : pannes courantes (pages Dépannage et Réparation)
import Image from "next/image"

const PANNES = [
  { icon: "volet-bloque", title: "Volet bloqué en position ouverte ou fermée", text: "Mécanisme grippé, lames coincées dans les coulisses ou axe bloqué : nous débloquons le tablier sans forcer et remettons le volet en service, souvent en une seule visite." },
  { icon: "panne-moteur", title: "Panne ou remplacement du moteur de volet roulant", text: "Moteur tubulaire grillé, qui bourdonne ou ne répond plus à la commande : diagnostic de l'alimentation, puis réparation ou remplacement par un moteur adapté." },
  { icon: "manoeuvre", title: "Défaillance du système de manœuvre", text: "Sangle cassée ou usée, manivelle qui tourne dans le vide, treuil ou ressort d'enrouleur détendu : remplacement des pièces de manœuvre défectueuses." },
  { icon: "lames", title: "Lames de tablier cassées ou endommagées", text: "Lames tordues, fissurées ou déboîtées après un choc ou un coup de vent : remplacement par des lames de même profil et de même couleur." },
  { icon: "glissieres", title: "Glissières et coulisses hors service", text: "Rails pliés, désaxés ou décollés du cadre qui freinent le tablier : redressage, refixation ou remplacement des coulisses pour un volet qui glisse sans effort." },
  { icon: "telecommande", title: "Pannes télécommande et automatisme", text: "Perte de signal, télécommande dépairée ou carte à réinitialiser : reprogrammation, appairage ou remplacement de la commande et du récepteur." },
  { icon: "fins-de-course", title: "Fins de course déréglées ou défaillantes", text: "Volet qui s'arrête trop tôt, force en butée ou dépasse sa position : réglage précis des fins de course pour protéger le moteur et le tablier." },
  { icon: "verrouillage", title: "Défaillance du système de verrouillage", text: "Barre de sécurité, serrure tambour ou verrou automatique qui ne s'engage plus : réparation ou remplacement pour garder un volet qui protège votre logement." },
]

export default function PannesSection({ className = "bg-white", padding = "py-10 md:py-14" }: { className?: string; padding?: string }) {
  return (
    <section className={`${className} ${padding}`} id="pannes" aria-labelledby="pannes-titre">
      <div className="container mx-auto px-4 md:px-8">
        <div className="max-w-7xl mx-auto">
          <div className="mb-10">
            <p className="mb-3 inline-flex items-center gap-3 text-sm font-semibold uppercase tracking-[0.16em] text-[#0E2452]"><span className="h-1 w-8 rounded-full bg-[#FFC629]" aria-hidden="true" />Ce que nous réparons</p>
            <h2 id="pannes-titre" className="text-3xl md:text-4xl font-bold text-[#0E2452] mb-3">Pannes courantes que nous résolvons</h2>
            <p className="text-gray-600 text-lg max-w-3xl">
              Nos techniciens traitent la plupart des pannes dès la première visite, avec les pièces en stock.
            </p>
          </div>

          <ul className="grid gap-5 sm:grid-cols-2 lg:grid-cols-4 md:gap-6">
            {PANNES.map((p) => (
              <li key={p.icon} className="group flex flex-col items-center rounded-2xl bg-[#0E2452] p-6 shadow-lg transition-all duration-300 hover:-translate-y-1 hover:shadow-2xl">
                <span className="mb-5 flex h-20 w-20 items-center justify-center rounded-full border-4 border-white/25 bg-[#FFC629] shadow-[0_0_0_6px_rgba(255,198,41,0.15)] transition-transform duration-300 group-hover:scale-110">
                  <Image src={`/images/pannes/${p.icon}-icone.png`} alt="" aria-hidden="true" width={160} height={160} className="h-11 w-11" />
                </span>
                <h3 className="mb-2 flex min-h-[2lh] items-center justify-center text-center text-lg font-bold leading-snug text-white">{p.title}</h3>
                <p className="w-full text-sm leading-relaxed text-slate-300 text-justify hyphens-auto" lang="fr">{p.text}</p>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}
