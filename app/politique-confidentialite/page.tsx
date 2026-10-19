"use client"

import Link from "next/link"
import LegalPage from "@/components/legal-page"
import { DEFAULT_PHONE } from "@/lib/phone-config"

export default function PolitiqueConfidentialite() {
  const phoneConfig = DEFAULT_PHONE

  return (
    <LegalPage
      title="Politique de confidentialité"
      intro="Comment nous collectons, utilisons et protégeons vos données personnelles, et comment exercer vos droits."
      current="/politique-confidentialite"
    >
        <section>
          <h2>Introduction</h2>
          <p>
            DÉBARRAS PROXIMITÉ s'engage à respecter votre vie privée et à protéger vos données personnelles. Cette politique de confidentialité explique comment nous collectons, utilisons et protégeons vos informations.
          </p>
        </section>

        <section>
          <h2>Données collectées</h2>
          <p>Nous collectons les données suivantes :</p>
          <ul>
            <li>Informations d'identification (nom, prénom, email, téléphone)</li>
            <li>Adresse et localisation</li>
            <li>Informations sur vos demandes de service</li>
            <li>Données de navigation et d'utilisation du site</li>
            <li>Données de paiement (traitées de manière sécurisée)</li>
          </ul>
        </section>

        <section>
          <h2>Utilisation des données</h2>
          <p>Vos données personnelles sont utilisées pour :</p>
          <ul>
            <li>Traiter et honorer vos demandes de service</li>
            <li>Vous envoyer des confirmations et des mises à jour</li>
            <li>Améliorer notre service et notre site web</li>
            <li>Vous contacter avec des offres pertinentes (avec votre consentement)</li>
            <li>Respecter nos obligations légales</li>
          </ul>
        </section>

        <section>
          <h2>Base légale du traitement</h2>
          <p>
            Le traitement de vos données personnelles repose sur : l'exécution d'un contrat, votre consentement, ou nos intérêts légitimes conformément au RGPD.
          </p>
        </section>

        <section>
          <h2>Partage des données</h2>
          <p>
            Vos données personnelles ne sont pas vendues à des tiers. Elles peuvent être partagées avec :
          </p>
          <ul>
            <li>Nos partenaires professionnels (prestataires de service)</li>
            <li>Les autorités compétentes si requis par la loi</li>
            <li>Notre hébergeur (Vercel) pour des raisons techniques</li>
          </ul>
        </section>

        <section>
          <h2>Sécurité des données</h2>
          <p>
            DÉBARRAS PROXIMITÉ met en place des mesures techniques et organisationnelles pour protéger vos données contre l'accès non autorisé, la modification ou la destruction. Nous utilisons le chiffrement SSL et d'autres technologies de sécurité.
          </p>
        </section>

        <section>
          <h2>Droits des utilisateurs</h2>
          <p>Vous avez le droit de :</p>
          <ul>
            <li>Accéder à vos données personnelles</li>
            <li>Corriger vos données inexactes</li>
            <li>Supprimer vos données</li>
            <li>Retirer votre consentement</li>
            <li>Obtenir une copie de vos données</li>
            <li>Vous opposer au traitement de vos données</li>
          </ul>
          <p>
            Pour exercer ces droits, contactez-nous à : contact@debarras-proximite.fr
          </p>
        </section>

        <section>
          <h2>Cookies</h2>
          <p>
            Notre site utilise des cookies pour améliorer votre expérience. Voir notre <Link href="/cookies" className="text-[#FFC629] hover:text-[#E6AE14] font-semibold">politique de cookies</Link> pour plus d'informations.
          </p>
        </section>

        <section>
          <h2>Rétention des données</h2>
          <p>
            Vos données personnelles sont conservées aussi longtemps que nécessaire pour fournir nos services et respecter nos obligations légales. Généralement, nous conservons les données pendant 3 ans après la dernière interaction.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Pour toute question concernant cette politique, contactez-nous :<br />
            <strong>Email :</strong> contact@debarras-proximite.fr<br />
            <strong>Téléphone :</strong> {phoneConfig.display}
          </p>
        </section>
    </LegalPage>
  )
}
