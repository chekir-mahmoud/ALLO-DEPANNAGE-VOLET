"use client"

import LegalPage from "@/components/legal-page"
import { DEFAULT_PHONE } from "@/lib/phone-config"

export default function CGV() {
  const phoneConfig = DEFAULT_PHONE

  return (
    <LegalPage
      title="Conditions générales de vente"
      intro="Les conditions applicables à nos prestations de débarras : devis, commande, paiement et intervention."
      current="/cgv"
    >
        <section>
          <h2>Objet</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) s'appliquent à tous les services proposés par ALLO DÉPANNAGE VOLET. Elles définissent les droits et obligations des parties.
          </p>
        </section>

        <section>
          <h2>Services proposés</h2>
          <p>
            ALLO DÉPANNAGE VOLET propose des services professionnels incluant : débarras de maisons, d'appartements, de caves, de greniers, de garages et de locaux, débarras de succession, enlèvement d'encombrants, et nettoyage après débarras.
          </p>
        </section>

        <section>
          <h2>Tarifs et devis</h2>
          <p>
            Les tarifs sont communiqués sur devis gratuit. Le devis est valide 15 jours. Toute modification de la prestation justifiera une révision du devis.
          </p>
        </section>

        <section>
          <h2>Commande et acceptation</h2>
          <p>
            La commande n'est définitive qu'après acceptation écrite par ALLO DÉPANNAGE VOLET. Un acompte peut être demandé avant le début des travaux.
          </p>
        </section>

        <section>
          <h2>Conditions de paiement</h2>
          <p>
            Le paiement peut être effectué par virement, carte bancaire, chèque ou espèces. Les conditions de paiement sont précisées dans le devis (acompte, solde, délais de paiement).
          </p>
        </section>

        <section>
          <h2>Délais d'intervention</h2>
          <p>
            Les délais d'intervention sont communiqués à titre indicatif. ALLO DÉPANNAGE VOLET s'engage à intervenir dans les délais annoncés mais décline toute responsabilité en cas de retard justifié.
          </p>
        </section>

        <section>
          <h2>Droit de rétractation</h2>
          <p>
            Conformément à la loi française, l'utilisateur a un délai de 14 jours pour se rétracter après la signature du contrat, sauf pour les services commencés sur demande expresse.
          </p>
        </section>

        <section>
          <h2>Responsabilité</h2>
          <p>
            ALLO DÉPANNAGE VOLET décline toute responsabilité pour les dommages causés par l'utilisateur lors des travaux. Une assurance peut être souscrite sur demande.
          </p>
        </section>

        <section>
          <h2>Résiliation</h2>
          <p>
            En cas de non-respect des obligations par l'une des parties, l'autre partie peut résilier le contrat après mise en demeure restée sans réponse pendant 15 jours.
          </p>
        </section>

        <section>
          <h2>Droit applicable</h2>
          <p>
            Les présentes CGV sont régies par la loi française. Tout litige est soumis à la compétence des tribunaux français.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Pour toute question concernant ces CGV, veuillez nous contacter :<br />
            <strong>Email :</strong> contact@allo-depannage-volet.fr<br />
            <strong>Téléphone :</strong> {phoneConfig.display}
          </p>
        </section>
    </LegalPage>
  )
}
