"use client"

import LegalPage from "@/components/legal-page"
import { DEFAULT_PHONE } from "@/lib/phone-config"

export default function CGU() {
  const phoneConfig = DEFAULT_PHONE

  return (
    <LegalPage
      title="Conditions générales d'utilisation"
      intro="Les règles d'accès et d'utilisation du site www.allo-depannage-volet.fr."
      current="/cgu"
    >
        <section>
          <h2>Objet</h2>
          <p>
            Les présentes Conditions Générales d'Utilisation (CGU) définissent les modalités d'accès et d'utilisation du site www.allo-depannage-volet.fr et de ses services par les utilisateurs.
          </p>
        </section>

        <section>
          <h2>Accès au site</h2>
          <p>
            L'accès au site www.allo-depannage-volet.fr est gratuit et libre. Cependant, ALLO DÉPANNAGE VOLET se réserve le droit de restreindre ou de refuser l'accès à certains utilisateurs sans préavis.
          </p>
        </section>

        <section>
          <h2>Responsabilités de l'utilisateur</h2>
          <p>L'utilisateur s'engage à :</p>
          <ul>
            <li>Fournir des informations exactes et complètes</li>
            <li>Utiliser le site de manière légale et éthique</li>
            <li>Ne pas accéder au site par des moyens non autorisés</li>
            <li>Ne pas interférer avec le fonctionnement du site</li>
            <li>Respecter les droits de propriété intellectuelle</li>
          </ul>
        </section>

        <section>
          <h2>Contenu utilisateur</h2>
          <p>
            En soumettant du contenu sur le site, vous accordez à ALLO DÉPANNAGE VOLET une licence non exclusive pour utiliser, reproduire et modifier ce contenu.
          </p>
          <p>
            Vous garantissez que le contenu ne viole pas les droits de tiers et ne contient pas de matériel offensant ou illégal.
          </p>
        </section>

        <section>
          <h2>Limitation de responsabilité</h2>
          <p>
            ALLO DÉPANNAGE VOLET n'est pas responsable des dommages directs ou indirects résultant de l'utilisation ou de l'inability à utiliser le site, y compris les pertes de données, les interruptions de service ou les autres problèmes techniques.
          </p>
        </section>

        <section>
          <h2>Liens externes</h2>
          <p>
            Le site peut contenir des liens vers des sites tiers. ALLO DÉPANNAGE VOLET n'est pas responsable du contenu, de la disponibilité ou de la politique de confidentialité de ces sites.
          </p>
        </section>

        <section>
          <h2>Modifications des services</h2>
          <p>
            ALLO DÉPANNAGE VOLET se réserve le droit de modifier, suspendre ou terminer les services à tout moment. Les utilisateurs seront notifiés des modifications importantes.
          </p>
        </section>

        <section>
          <h2>Indemnisation</h2>
          <p>
            L'utilisateur accepte d'indemniser et de dégager ALLO DÉPANNAGE VOLET de toute responsabilité pour toute réclamation ou action en justice résultant de son utilisation du site ou de sa violation des CGU.
          </p>
        </section>

        <section>
          <h2>Droit applicable</h2>
          <p>
            Les présentes CGU sont régies par la loi française. Tout litige est soumis à la juridiction exclusive des tribunaux français.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Pour toute question concernant ces CGU, veuillez nous contacter :<br />
            <strong>Email :</strong> contact@allo-depannage-volet.fr<br />
            <strong>Téléphone :</strong> {phoneConfig.display}
          </p>
        </section>
    </LegalPage>
  )
}
