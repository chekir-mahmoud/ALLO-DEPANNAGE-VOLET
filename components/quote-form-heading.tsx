import { Clock } from "lucide-react"

// Titre des formulaires de devis des en-têtes (accueil, prestations, départements, villes).
// Mobile : « Devis gratuit » + « et sans engagement » dessous à gauche, pastille « Rappel sous 30 min » à droite.
// Ordinateur : titre centré et « Rappel en moins de 30 minutes. » dessous.
// À placer en premier dans une carte avec une marge intérieure p-5 md:p-6.
export default function QuoteFormHeading() {
  return (
    <div className="-mx-5 -mt-5 mb-5 flex items-center justify-between gap-3 border-b border-gray-200 bg-white px-5 py-4 md:mx-0 md:mt-0 md:mb-4 md:block md:border-0 md:bg-transparent md:p-0 md:text-center">
      <h2 className="text-lg font-bold leading-snug text-[#0E2452] md:text-2xl">
        Devis gratuit{" "}
        <span className="block whitespace-nowrap text-sm font-medium text-gray-500 md:inline md:whitespace-normal md:text-2xl md:font-bold md:text-[#0E2452]">
          et sans engagement
        </span>
      </h2>
      <p className="flex flex-shrink-0 items-center gap-1.5 whitespace-nowrap rounded-full bg-[#0E2452] px-3 py-1.5 text-xs font-bold text-[#FFC629] md:mt-1 md:inline-flex md:rounded-none md:bg-transparent md:p-0 md:text-sm md:font-normal md:text-gray-500">
        <Clock className="h-3.5 w-3.5 md:hidden" aria-hidden="true" />
        <span className="md:hidden">Rappel sous 30 min</span>
        <span className="hidden md:inline">Rappel en moins de 30 minutes.</span>
      </p>
    </div>
  )
}
