"use client"

import Link from "next/link"
import LegalPage from "@/components/legal-page"
import { DEFAULT_PHONE } from "@/lib/phone-config"

export default function CGV() {
  const phoneConfig = DEFAULT_PHONE

  return (
    <LegalPage
      title="Conditions générales de vente"
      intro="Les conditions applicables à nos prestations de dépannage, de réparation, d'installation et de motorisation : devis, commande, paiement, garanties et intervention."
      current="/cgv"
    >
        <section>
          <h2>Objet et champ d&apos;application</h2>
          <p>
            Les présentes Conditions Générales de Vente (CGV) s&apos;appliquent à toutes les prestations réalisées par Monsieur Jimmy Ziegler, entrepreneur individuel exerçant sous le nom commercial ALLO DÉPANNAGE VOLET (SIREN 528 225 154, 202 Avenue de Soubeyran, 33460 Arsac), ci-après « le Prestataire », pour le compte de ses clients particuliers ou professionnels, ci-après « le Client ».
          </p>
          <p>
            Toute commande implique l&apos;acceptation des présentes CGV. Les conditions particulières figurant sur le devis accepté prévalent sur les présentes CGV.
          </p>
        </section>

        <section>
          <h2>Prestations proposées</h2>
          <p>
            Le Prestataire propose le dépannage, la réparation, l&apos;entretien, l&apos;installation et la motorisation de volets roulants (manuels, électriques, radio ou solaires), le dépannage, la réparation et la motorisation de rideaux métalliques, ainsi que la réparation, la motorisation et la pose de stores bannes, sur toutes les marques.
          </p>
        </section>

        <section>
          <h2>Devis et tarifs</h2>
          <p>
            Toute intervention fait l&apos;objet d&apos;un devis gratuit, remis au Client avant le début des travaux. Le devis détaille le déplacement, le diagnostic, les pièces (avec leur marque et leur référence), la main-d&apos;œuvre, le taux de TVA applicable et les garanties. Sauf mention contraire, il est valable 30 jours.
          </p>
          <p>
            Le montant du déplacement et du diagnostic est toujours annoncé au Client avant le déplacement du technicien. Les prix affichés sur le site, notamment sur la page <Link href="/tarifs" className="text-[#FFC629] hover:text-[#E6AE14] font-semibold">tarifs</Link> et dans le simulateur d&apos;estimation, sont indicatifs et exprimés TTC : seul le devis accepté fait foi.
          </p>
          <p>
            Si le technicien constate sur place une panne ou des travaux différents de ceux prévus, un nouveau devis est soumis au Client, qui reste libre de l&apos;accepter ou non.
          </p>
        </section>

        <section>
          <h2>Commande</h2>
          <p>
            La commande est formée par l&apos;acceptation du devis par le Client (signature, mention « bon pour accord » ou accord écrit, y compris par voie électronique). Aucuns travaux ne sont engagés sans cet accord.
          </p>
        </section>

        <section>
          <h2>Paiement</h2>
          <p>
            Le paiement s&apos;effectue à la fin de l&apos;intervention, une fois que le Client a constaté le bon fonctionnement de l&apos;équipement. Aucun paiement à l&apos;avance n&apos;est demandé pour un dépannage.
          </p>
          <p>
            Pour les chantiers d&apos;un montant supérieur à 3 000 € TTC (par exemple l&apos;installation de plusieurs volets neufs), un acompte de 30 % est demandé à l&apos;acceptation du devis, le solde étant réglé à la fin des travaux.
          </p>
          <p>
            Moyens de paiement acceptés : carte bancaire, virement, chèque et espèces dans la limite légale de 1 000 €. Une facture détaillée est remise au Client à la fin de l&apos;intervention.
          </p>
          <p>
            Pour les clients professionnels, tout retard de paiement entraîne l&apos;application de pénalités au taux de trois fois le taux d&apos;intérêt légal, ainsi que d&apos;une indemnité forfaitaire pour frais de recouvrement de 40 € (articles L441-10 et D441-5 du Code de commerce).
          </p>
        </section>

        <section>
          <h2>Délais et conditions d&apos;intervention</h2>
          <p>
            Les délais d&apos;intervention sont communiqués à titre indicatif. Le Prestataire s&apos;efforce de les respecter mais ne peut être tenu responsable d&apos;un retard dû à un cas de force majeure, aux conditions météorologiques, à l&apos;indisponibilité d&apos;une pièce chez le fournisseur ou à l&apos;impossibilité d&apos;accéder au lieu d&apos;intervention.
          </p>
          <p>
            Le Client s&apos;engage à permettre l&apos;accès à l&apos;équipement (coffre, fenêtre, alimentation électrique) et à signaler toute particularité connue de l&apos;installation. Lorsqu&apos;une pièce spécifique doit être commandée, le technicien met l&apos;équipement en sécurité et convient avec le Client d&apos;une nouvelle date d&apos;intervention.
          </p>
        </section>

        <section>
          <h2>Droit de rétractation</h2>
          <p>
            Lorsque le contrat est conclu à distance ou au domicile du Client consommateur, celui-ci dispose d&apos;un délai de 14 jours à compter de la conclusion du contrat pour se rétracter, sans avoir à se justifier (articles L221-18 et suivants du Code de la consommation), en adressant sa décision par email ou par courrier aux coordonnées ci-dessous.
          </p>
          <p>
            Conformément à l&apos;article L221-28 du Code de la consommation, le droit de rétractation ne peut pas être exercé :
          </p>
          <ul>
            <li>pour les travaux d&apos;entretien ou de réparation à réaliser en urgence au domicile du Client et expressément sollicités par lui, dans la limite des pièces de rechange et des travaux strictement nécessaires pour répondre à l&apos;urgence ;</li>
            <li>pour les prestations pleinement exécutées avant la fin du délai de rétractation, lorsque leur exécution a commencé après accord préalable exprès du Client et renoncement exprès à son droit de rétractation ;</li>
            <li>pour les biens confectionnés selon les spécifications du Client ou nettement personnalisés, comme les volets roulants fabriqués sur mesure.</li>
          </ul>
          <p>
            Si le Client a demandé que la prestation commence avant la fin du délai de rétractation puis se rétracte, il verse un montant proportionnel au service déjà fourni.
          </p>
        </section>

        <section>
          <h2>Garanties</h2>
          <p>
            Les pièces remplacées et la main-d&apos;œuvre sont garanties ; les durées de garantie figurent sur le devis et sur la facture. Les moteurs et les équipements neufs bénéficient en outre de la garantie de leur fabricant.
          </p>
          <p>
            Ces garanties s&apos;ajoutent aux garanties légales dont bénéficie le Client : garantie légale de conformité (articles L217-3 et suivants du Code de la consommation) et garantie des vices cachés (articles 1641 et suivants du Code civil).
          </p>
          <p>
            Les garanties ne couvrent pas les dommages résultant d&apos;une mauvaise utilisation, d&apos;un défaut d&apos;entretien, d&apos;une intervention d&apos;un tiers, d&apos;un choc, d&apos;un événement climatique exceptionnel ou d&apos;une installation électrique non conforme.
          </p>
        </section>

        <section>
          <h2>Responsabilité</h2>
          <p>
            Le Prestataire est responsable de la bonne exécution des prestations prévues au devis. Il ne saurait être tenu responsable des désordres préexistants à son intervention ni des dommages causés par le Client ou par un tiers.
          </p>
        </section>

        <section>
          <h2>Réclamations et litiges</h2>
          <p>
            En cas de réclamation ou de litige, le Client est invité à contacter directement Monsieur Jimmy Ziegler, responsable d&apos;ALLO DÉPANNAGE VOLET, afin de rechercher ensemble une solution amiable :
          </p>
          <ul>
            <li>par téléphone au {phoneConfig.display} ;</li>
            <li>par email à contact@allo-depannage-volet.fr ;</li>
            <li>par courrier au 202 Avenue de Soubeyran, 33460 Arsac.</li>
          </ul>
          <p>
            Le Prestataire s&apos;engage à étudier chaque réclamation et à y répondre dans les meilleurs délais.
          </p>
        </section>

        <section>
          <h2>Droit applicable</h2>
          <p>
            Les présentes CGV sont régies par la loi française. À défaut de résolution amiable, tout litige est porté devant les juridictions françaises compétentes.
          </p>
        </section>

        <section>
          <h2>Contact</h2>
          <p>
            Pour toute question concernant ces CGV, veuillez nous contacter :<br />
            <strong>Email :</strong> contact@allo-depannage-volet.fr<br />
            <strong>Téléphone :</strong> {phoneConfig.display}<br />
            <strong>Adresse :</strong> 202 Avenue de Soubeyran, 33460 Arsac
          </p>
        </section>
    </LegalPage>
  )
}
