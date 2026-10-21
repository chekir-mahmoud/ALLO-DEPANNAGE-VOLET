// Questions fréquentes des pages département (affichées et transmises à Google)

export function getDepartmentFaq(dept: { displayName: string; postalCode: string }) {
  return [
    {
      question: "Quel est le délai d'intervention pour un volet roulant bloqué ?",
      answer: `Nos techniciens interviennent le plus rapidement possible ${dept.displayName}, 7j/7, y compris le week-end et les jours fériés. Pour une installation ou une motorisation, le rendez-vous est fixé selon vos disponibilités après validation du devis.`,
    },
    {
      question: "Combien coûte un dépannage de volet roulant ?",
      answer: "Le diagnostic et le déplacement sont proposés dès 69 €, un déblocage dès 89 € et le remplacement d'un moteur dès 290 €. Le prix exact dépend de la panne et des pièces à remplacer : il vous est toujours annoncé avant l'intervention.",
    },
    {
      question: "Intervenez-vous sur toutes les marques de volets roulants ?",
      answer: "Oui. Nous dépannons, réparons et motorisons les volets de toutes marques : Somfy, Bubendorff, Profalux, Simu, Nice, Franciaflex… manuels comme électriques, ainsi que les rideaux métalliques et les stores.",
    },
    {
      question: `Intervenez-vous dans toutes les villes du département ${dept.postalCode} ?`,
      answer: `Oui, nous couvrons l'ensemble du département ${dept.postalCode} ${dept.displayName}, y compris les communes rurales.`,
    },
  ]
}
