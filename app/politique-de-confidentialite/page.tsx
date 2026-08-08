import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/politique-de-confidentialite/" },
  title: "Politique de confidentialité | Votre Artisan Français",
  description:
    "Comment vos données personnelles sont traitées sur vaf-serrurier.fr : formulaire de contact, cookies, droits RGPD.",
};

export default function PolitiqueDeConfidentialitePage() {
  return (
    <LegalPageLayout title="Politique de confidentialité" path="/politique-de-confidentialite/">
      <div>
        <h2>Qui collecte vos données</h2>
        <p>
          {business.legalName}, {business.legalForm}, {business.address.full}, est
          responsable du traitement des données collectées sur ce site.
        </p>
      </div>

      <div>
        <h2>Quelles données sont collectées</h2>
        <p>
          Via le formulaire de contact : votre nom, votre numéro de téléphone et le
          contenu de votre message. Aucune autre donnée personnelle n&apos;est collectée
          activement sur ce site.
        </p>
      </div>

      <div>
        <h2>Pourquoi ces données sont collectées</h2>
        <p>
          Uniquement pour répondre à votre demande de devis ou d&apos;intervention. Ces
          données ne sont ni vendues, ni cédées à des tiers à des fins commerciales.
        </p>
      </div>

      <div>
        <h2>Combien de temps sont-elles conservées</h2>
        <p>
          Les messages reçus via le formulaire sont conservés le temps nécessaire au
          traitement de votre demande, puis supprimés au maximum 3 ans après le dernier
          contact, sauf obligation légale de conservation plus longue (facturation
          notamment).
        </p>
      </div>

      <div>
        <h2>Vos droits</h2>
        <p>
          Conformément au RGPD, vous disposez d&apos;un droit d&apos;accès, de
          rectification, de suppression et de portabilité de vos données, ainsi que du
          droit de retirer votre consentement à tout moment. Pour exercer ces droits,
          contactez-moi à {business.email}.
        </p>
      </div>

      <div>
        <h2>Cookies</h2>
        <p>
          Ce site utilise des cookies techniques, indispensables à son fonctionnement, et
          des cookies de mesure d&apos;audience, déposés uniquement avec votre accord via
          le bandeau de consentement affiché lors de votre première visite. Vous pouvez
          changer d&apos;avis à tout moment en effaçant les cookies de votre navigateur.
        </p>
      </div>

      <div>
        <h2>Hébergement des données</h2>
        <p>
          Les données transmises via le formulaire de contact sont envoyées par email de
          façon sécurisée, sans stockage en base de données publique sur ce site.
        </p>
      </div>

      <div>
        <h2>Réclamation</h2>
        <p>
          Si vous estimez que vos droits ne sont pas respectés, vous pouvez adresser une
          réclamation à la CNIL (www.cnil.fr).
        </p>
      </div>
    </LegalPageLayout>
  );
}
