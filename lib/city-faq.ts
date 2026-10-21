// Questions fréquentes des pages ville (affichées et transmises à Google)

export function getCityFaq(city: string) {
  return [
    {
      question: `Combien coûte un dépannage de volet roulant à ${city} ?`,
      answer: "Le diagnostic et le déplacement sont proposés dès 69 €, un déblocage dès 89 €, le remplacement d'une sangle ou d'une manivelle dès 79 € et celui d'un moteur dès 290 €. Le prix exact dépend de la panne et des pièces à remplacer : il vous est toujours annoncé avant l'intervention.",
    },
    {
      question: `Intervenez-vous en urgence à ${city}, même le week-end ?`,
      answer: `Oui. Notre service de dépannage fonctionne 7j/7 à ${city}, y compris le week-end et les jours fériés, pour les volets roulants bloqués en position ouverte ou fermée et les rideaux métalliques de commerces.`,
    },
    {
      question: "Mon volet roulant est bloqué : que faire ?",
      answer: "Ne forcez pas sur la sangle, la manivelle ou la commande. Pour un volet électrique, vérifiez le disjoncteur et la pile de la télécommande, puis attendez 15 à 30 minutes si le volet a été manœuvré plusieurs fois de suite. Si le volet reste bloqué, un technicien intervient pour le débloquer et réparer la cause de la panne.",
    },
    {
      question: "Réparez-vous toutes les marques de volets roulants ?",
      answer: "Oui. Nous intervenons sur toutes les marques de volets et de moteurs : Somfy, Bubendorff, Profalux, Simu, Nice, Franciaflex et la plupart des autres fabricants, sur les volets manuels comme électriques.",
    },
    {
      question: `Peut-on motoriser un volet roulant manuel à ${city} ?`,
      answer: "Oui, dans la grande majorité des cas. Un moteur tubulaire remplace la sangle ou la manivelle, sans changer le coffre ni le tablier s'ils sont en bon état. La motorisation d'un volet manuel est proposée dès 450 €, avec un moteur filaire, radio ou solaire.",
    },
    {
      question: "Faut-il remplacer tout le volet quand une lame est cassée ?",
      answer: "Non. Une à trois lames abîmées se remplacent individuellement par des lames de même profil et de même couleur. Le remplacement du tablier complet n'est conseillé que si de nombreuses lames sont endommagées ou si le PVC est devenu cassant.",
    },
    {
      question: `Intervenez-vous sur les rideaux métalliques et les stores à ${city} ?`,
      answer: "Oui. Nous dépannons, réparons, motorisons et posons les rideaux métalliques des commerces, et nous remplaçons les toiles, bras et moteurs des stores bannes. Un contrat d'entretien annuel est également proposé.",
    },
    {
      question: "Le devis est-il gratuit ?",
      answer: "Oui, le devis est 100 % gratuit et sans engagement. Il détaille le déplacement, les pièces et la main-d'œuvre, et vous est toujours remis avant toute intervention.",
    },
    {
      question: "Les réparations sont-elles garanties ?",
      answer: "Oui. Les pièces remplacées et la main-d'œuvre sont garanties, et les moteurs bénéficient en plus de la garantie du fabricant. Les durées figurent sur le devis et la facture.",
    },
    {
      question: "Intervenez-vous pour les particuliers et les professionnels ?",
      answer: "Oui, nous intervenons auprès des particuliers comme des professionnels : commerces, syndics de copropriété, bailleurs, agences immobilières et entreprises, ponctuellement ou dans le cadre d'un contrat d'entretien.",
    },
  ]
}
