"use client"

import Link from "next/link"
import LegalPage from "@/components/legal-page"
import { DEFAULT_PHONE } from "@/lib/phone-config"

export default function MentionsLegales() {
  const phoneConfig = DEFAULT_PHONE

  return (
    <LegalPage
      title="Mentions légales"
      intro="Informations sur l'éditeur, l'hébergeur et les conditions d'utilisation du site Allo Dépannage Volet."
      current="/mentions-legales"
    >
        <section>
          <h2>Informations légales</h2>
          <p>
            <strong>Entreprise :</strong> ALLO DÉPANNAGE VOLET<br />
            <strong>Forme juridique :</strong> SARL<br />
            <strong>Siège social :</strong> 77 rue Calixte Camelle, 33130 Bègles, France<br />
            <strong>SIREN :</strong> 790 993 976<br />
            <strong>SIRET (siège social) :</strong> 790 993 976 00022<br />
            <strong>RCS :</strong> Bordeaux 790 993 976<br />
            <strong>Numéro de TVA intracommunautaire :</strong> FR33790993976<br />
            <strong>Date de création :</strong> 1<sup>er</sup> février 2013<br />
            <strong>Dirigeant :</strong> Kévin Azaie<br />
            <strong>Téléphone :</strong> {phoneConfig.display}<br />
            <strong>Email :</strong> contact@allo-depannage-volet.fr
          </p>
        </section>

        <section>
          <h2>Directeur de la publication</h2>
          <p>
            Le directeur de la publication du site www.allo-depannage-volet.fr est Kévin Azaie, dirigeant de ALLO DÉPANNAGE VOLET.
          </p>
        </section>

        <section>
          <h2>Hébergeur du site</h2>
          <p>
            <strong>Hébergeur :</strong> Vercel Inc.<br />
            <strong>Adresse :</strong> 340 S Lemon Ave, Walnut, CA 91789, USA<br />
            <strong>Site :</strong> www.vercel.com
          </p>
        </section>

        <section>
          <h2>Propriété intellectuelle</h2>
          <p>
            L'ensemble des éléments présents sur le site www.allo-depannage-volet.fr, notamment les textes, images, graphismes, logos et leurs mises en forme constituent des œuvres de l'esprit protégées par les dispositions du code français de la propriété intellectuelle et du code de la propriété industrielle.
          </p>
          <p>
            Toute reproduction, modification ou exploitation totale ou partielle des contenus et des marques sans l'accord préalable et écrit de ALLO DÉPANNAGE VOLET est strictement interdite.
          </p>
        </section>

        <section>
          <h2>Responsabilité</h2>
          <p>
            ALLO DÉPANNAGE VOLET s'efforce d'assurer l'exactitude et la mise à jour des informations publiées sur ce site. Néanmoins, ALLO DÉPANNAGE VOLET ne peut garantir l'exactitude, la précision ou l'exhaustivité des informations mises à disposition sur ce site.
          </p>
          <p>
            En conséquence, ALLO DÉPANNAGE VOLET décline toute responsabilité pour tout dommage ou préjudice de quelque nature que ce soit, direct ou indirect, susceptible de résulter de l'accès ou de l'utilisation du site.
          </p>
        </section>

        <section>
          <h2>Liens externes</h2>
          <p>
            Le site www.allo-depannage-volet.fr peut contenir des liens vers d'autres sites Internet. ALLO DÉPANNAGE VOLET n'est pas responsable du contenu de ces sites externes. L'accès à ces sites externes se fait sous la responsabilité exclusive de l'utilisateur.
          </p>
        </section>

        <section>
          <h2>Données personnelles</h2>
          <p>
            Pour plus d'informations sur le traitement de vos données personnelles, veuillez consulter notre <Link href="/politique-confidentialite" className="text-[#FFC629] hover:text-[#E6AE14] font-semibold">politique de confidentialité</Link>.
          </p>
        </section>

        <section>
          <h2>Droit applicable</h2>
          <p>
            Le site www.allo-depannage-volet.fr et son contenu sont soumis aux lois françaises. Tout litige relatif à ce site est soumis à la compétence exclusive des tribunaux français.
          </p>
        </section>
    </LegalPage>
  )
}
