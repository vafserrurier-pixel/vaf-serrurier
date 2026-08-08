import type { Metadata } from "next";
import LegalPageLayout from "@/components/LegalPageLayout";
import { business } from "@/lib/business";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/conditions-generales-dutilisation/" },
  title: "Conditions générales d'utilisation | Votre Artisan Français",
  description: "CGU du site vaf-serrurier.fr.",
};

export default function CguPage() {
  return (
    <LegalPageLayout
      title="Conditions générales d'utilisation"
      path="/conditions-generales-dutilisation/"
    >
      <div>
        <h2>Article 1 — Objet</h2>
        <p>
          Les présentes conditions générales d&apos;utilisation (CGU) encadrent l&apos;accès
          et l&apos;usage du site {business.domain.replace("https://", "")}. L&apos;accès au
          site implique l&apos;acceptation pleine et entière de ces conditions.
        </p>
        <p>
          Toute demande de service passe par mes conditions générales de vente, distinctes
          des présentes CGU.
        </p>
      </div>

      <div>
        <h2>Article 2 — Accès au site</h2>
        <p>
          Le site est accessible gratuitement à tout utilisateur disposant d&apos;un accès
          à internet. Les frais de connexion restent à la charge de l&apos;utilisateur. Je
          m&apos;engage à assurer au mieux la disponibilité du site, sans garantie absolue,
          et je ne peux être tenu responsable des dommages liés à une interruption de
          connexion.
        </p>
      </div>

      <div>
        <h2>Article 3 — Propriété intellectuelle</h2>
        <p>
          Les marques, logos, textes et contenus présents sur ce site sont protégés par le
          droit de la propriété intellectuelle. Toute reproduction non autorisée constitue
          une contrefaçon.
        </p>
      </div>

      <div>
        <h2>Article 4 — Données personnelles</h2>
        <p>
          Vos données ne sont utilisées que dans le cadre de la gestion de votre demande.
          Vous disposez d&apos;un droit d&apos;accès, de rectification et de suppression de
          vos données, détaillé dans la politique de confidentialité.
        </p>
      </div>

      <div>
        <h2>Article 5 — Responsabilité et force majeure</h2>
        <p>
          Ma responsabilité ne saurait être engagée en cas de force majeure. Je ne suis pas
          responsable du contenu des sites vers lesquels des liens hypertextes pourraient
          renvoyer.
        </p>
      </div>

      <div>
        <h2>Article 6 — Droit applicable</h2>
        <p>
          Les présentes CGU sont soumises au droit français. En cas de litige, les
          tribunaux français sont seuls compétents.
        </p>
      </div>
    </LegalPageLayout>
  );
}
