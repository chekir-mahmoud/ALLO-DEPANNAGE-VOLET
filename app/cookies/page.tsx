"use client"

import LegalPage from "@/components/legal-page"
import { DEFAULT_PHONE } from "@/lib/phone-config"

export default function Cookies() {
  const phoneConfig = DEFAULT_PHONE

  return (
    <LegalPage
      title="Politique de cookies"
      intro="Les cookies utilisés sur notre site, leur utilité et la façon de gérer vos préférences."
      current="/cookies"
    >
        <section>
          <h2>Qu'est-ce qu'un cookie ?</h2>
          <p>
            Un cookie est un petit fichier texte stocké sur votre appareil (ordinateur, smartphone, tablette) par les sites que vous visitez. Il permet de mémoriser certaines informations sur votre navigation.
          </p>
        </section>

        <section>
          <h2>Types de cookies utilisés</h2>
          <p>Nous utilisons les types de cookies suivants :</p>
          <ul>
            <li><strong>Cookies essentiels :</strong> Nécessaires pour le fonctionnement du site (authentification, sécurité)</li>
            <li><strong>Cookies de performance :</strong> Pour analyser l'utilisation du site et l'améliorer</li>
            <li><strong>Cookies de ciblage :</strong> Pour personnaliser le contenu et les publicités</li>
            <li><strong>Cookies de réseaux sociaux :</strong> Pour intégrer les fonctionnalités des réseaux sociaux</li>
          </ul>
        </section>

        <section>
          <h2>Google Analytics</h2>
          <p>
            Nous utilisons Google Analytics pour analyser l'utilisation du site. Les données sont anonymisées et stockées par Google. Pour plus d'informations, consulter la politique de confidentialité de Google.
          </p>
        </section>

        <section>
          <h2>Consentement</h2>
          <p>
            Lors de votre première visite, vous recevez une demande de consentement pour l'utilisation des cookies non essentiels. Vous pouvez accepter ou refuser.
          </p>
        </section>

        <section>
          <h2>Gestion des cookies</h2>
          <p>
            Vous pouvez gérer les cookies via les paramètres de votre navigateur :
          </p>
          <ul>
            <li><strong>Chrome :</strong> Menu Paramètres → Confidentialité et sécurité → Paramètres des cookies</li>
            <li><strong>Firefox :</strong> Menu Paramètres → Vie privée → Historique</li>
            <li><strong>Safari :</strong> Préférences → Confidentialité</li>
            <li><strong>Edge :</strong> Paramètres → Confidentialité</li>
          </ul>
        </section>

        <section>
          <h2>Acceptation ou refus des cookies</h2>
          <p>
            Si vous refusez les cookies non essentiels, certaines fonctionnalités du site peuvent ne pas fonctionner correctement. Vous pouvez changer votre préférence à tout moment.
          </p>
        </section>

        <section>
          <h2>Cookies tiers</h2>
          <p>
            Notre site peut contenir des cookies tiers provenant de nos partenaires (réseaux sociaux, services de paiement, etc.). Nous vous recommandons de consulter leur politique de cookies.
          </p>
        </section>

        <section>
          <h2>Durée de conservation</h2>
          <p>
            Les cookies ont différentes durées de conservation :
          </p>
          <ul>
            <li>Cookies de session : Supprimés à la fermeture du navigateur</li>
            <li>Cookies persistants : Conservés pendant une période définie</li>
            <li>Cookies analytiques : Généralement 2 ans</li>
          </ul>
        </section>

        <section>
          <h2>Conformité légale</h2>
          <p>
            Notre utilisation des cookies est conforme au RGPD et à la Directive ePrivacy. Nous demandons votre consentement avant de stocker des cookies non essentiels.
          </p>
        </section>

        <section>
          <h2>Modifications</h2>
          <p>
            Cette politique peut être modifiée à tout moment. Les modifications seront publiées sur cette page avec une date de mise à jour.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Pour toute question concernant notre politique de cookies :<br />
            <strong>Email :</strong> contact@allo-depannage-volet.fr<br />
            <strong>Téléphone :</strong> {phoneConfig.display}
          </p>
        </section>
    </LegalPage>
  )
}
