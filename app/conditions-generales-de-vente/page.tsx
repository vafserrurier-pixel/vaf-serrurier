import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/conditions-generales-de-vente/" },
  title: "Conditions générales de vente | Votre Artisan Français",
  description: "CGV des prestations de serrurerie proposées par Votre Artisan Français à Nice.",
};

export default function CgvPage() {
  return (
    <LegalPageLayout title="Conditions générales de vente" path="/conditions-generales-de-vente/">
      <div>
        <h2>Article 1 — Champ d&apos;application</h2>
        <p>
          Les présentes conditions générales de vente s&apos;appliquent à toutes les
          prestations de serrurerie réalisées par {business.legalName}, {business.legalForm},
          artisan basé à Nice : ouverture de porte, dépannage, changement de serrure,
          installation ou blindage de porte, mise en sécurité après effraction.
        </p>
      </div>

      <div>
        <h2>Article 2 — Information précontractuelle et devis</h2>
        <p>
          Avant toute intervention, je vous communique clairement la nature de la
          prestation, le tarif estimé, le délai d&apos;intervention et mes coordonnées. Un
          devis est annoncé avant le début des travaux.
        </p>
      </div>

      <div>
        <h2>Article 3 — Droit de rétractation</h2>
        <p>
          Pour une commande à distance, vous disposez d&apos;un délai de rétractation de 14
          jours. Ce délai ne s&apos;applique pas aux interventions d&apos;urgence réalisées à
          votre demande expresse avant l&apos;expiration de ce délai, ni aux prestations
          nécessitant une adaptation sur-mesure.
        </p>
      </div>

      <div>
        <h2>Article 4 — Commande et paiement</h2>
        <p>
          Un acompte de 40% peut être demandé à la commande pour les interventions
          programmées (hors urgence). Le solde est dû à la fin de la prestation. Les
          règlements sont acceptés par chèque, espèces ou carte bancaire.
        </p>
      </div>

      <div>
        <h2>Article 5 — Délai d&apos;exécution</h2>
        <p>
          Les prestations sont réalisées dans un délai maximal de 6 mois à compter de la
          validation de la commande, sauf indisponibilité exceptionnelle communiquée au
          préalable.
        </p>
      </div>

      <div>
        <h2>Article 6 — Garanties</h2>
        <p>
          Je garantis la main d&apos;œuvre et les pièces posées pendant un an. La garantie
          légale de conformité s&apos;applique également : tout défaut doit être signalé
          dans les 2 mois suivant sa découverte.
        </p>
      </div>

      <div>
        <h2>Article 7 — Données personnelles</h2>
        <p>
          Vos données sont traitées uniquement pour la gestion de votre commande, dans le
          respect du RGPD. Vous disposez d&apos;un droit d&apos;accès, de rectification et
          de suppression, détaillé dans la politique de confidentialité.
        </p>
      </div>

      <div>
        <h2>Article 8 — Réclamations et litiges</h2>
        <p>
          Toute réclamation doit être adressée par écrit à {business.email}. Une tentative
          de médiation est recherchée avant toute action judiciaire. Les tribunaux français
          sont seuls compétents en cas de litige.
        </p>
      </div>
    </LegalPageLayout>
  );
}
