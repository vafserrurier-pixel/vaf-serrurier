import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/mentions-legales/" },
  title: "Mentions légales | Votre Artisan Français",
  description: "Mentions légales du site vaf-serrurier.fr, édité par Votre Artisan Français.",
};

export default function MentionsLegalesPage() {
  return (
    <LegalPageLayout title="Mentions légales" path="/mentions-legales/">
      <div>
        <h2>Éditeur du site</h2>
        <p>
          Le site {business.domain.replace("https://", "")} est édité par {business.legalName},
          {" "}{business.legalForm}, immatriculée au {business.rcs}.
        </p>
        <p>Siège social : {business.address.full}</p>
        <p>SIRET : {business.siret}</p>
        <p>Directeur de la publication : {business.firstName}, président de la société</p>
        <p>
          Email : {business.email} — Téléphone :{" "}
          <a href={business.phone.href} className="underline">
            {business.phone.display}
          </a>
        </p>
      </div>

      <div>
        <h2>Hébergement</h2>
        <p>
          Le nom de domaine est enregistré chez {business.hostingProvider}. L&apos;hébergement
          technique du site est précisé dans la fiche d&apos;hébergement mise à jour lors de
          la mise en ligne.
        </p>
      </div>

      <div>
        <h2>Conformité légale</h2>
        <p>
          Ce site respecte la loi n°2004-575 du 21 juin 2004 pour la confiance dans
          l&apos;économie numérique.
        </p>
      </div>

      <div>
        <h2>Accessibilité du site</h2>
        <p>
          Le site est accessible 24h/24, sauf en cas de maintenance. Je ne peux être tenu
          responsable des dommages liés à une indisponibilité temporaire.
        </p>
      </div>

      <div>
        <h2>Cookies</h2>
        <p>
          Le site utilise des cookies conformément à la réglementation européenne. Voir la{" "}
          <a href="/politique-de-confidentialite/" className="underline">
            politique de confidentialité
          </a>{" "}
          pour le détail.
        </p>
      </div>

      <div>
        <h2>Signalement de contenu</h2>
        <p>Pour toute réclamation concernant un contenu du site, contactez-moi à {business.email}.</p>
      </div>

      <div>
        <h2>Droit applicable</h2>
        <p>Les présentes mentions légales sont régies par le droit français.</p>
      </div>
    </LegalPageLayout>
  );
}
