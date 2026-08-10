import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { breadcrumbSchema, faqSchema } from "@/lib/schema";
import TarifsBody from "./TarifsBody";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/tarifs-serrurier-nice/" },
  title: "Tarifs serrurier Nice – Prix sans surprise | VAF",
  description:
    "Ouverture de porte, changement de serrure, porte blindée : mes tarifs à Nice, sans surprise. Devis annoncé avant chaque intervention, 24h/24.",
};

const faq = [
  {
    question: "Combien coûte un serrurier en urgence à Nice ?",
    answer:
      "Le tarif de base dépend du service (ouverture, dépannage, remplacement) et une majoration de 50% s'applique après 19h, le week-end et les jours fériés. Le montant exact est toujours annoncé avant que j'intervienne.",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui. Je vous annonce un prix par téléphone selon votre description, et je le confirme sur place avant de commencer les travaux — c'est une obligation légale pour un serrurier.",
  },
  {
    question: "Les pièces remplacées sont-elles comprises dans le prix affiché ?",
    answer:
      "Non, les pièces remplacées (cylindre, serrure, gâche...) sont facturées en supplément et toujours annoncées avant votre accord.",
  },
  {
    question: "Pourquoi les prix varient-ils d'une intervention à l'autre ?",
    answer:
      "Le type de serrure, la marque, l'état de la porte et l'heure d'intervention font varier le tarif final. Les prix affichés couvrent les situations standards.",
  },
  {
    question: "Comment éviter une arnaque de serrurier ?",
    answer:
      "Méfiez-vous d'abord des prix d'appel affichés très bas (30 ou 40 € par exemple) : c'est presque toujours le signe que la facture va gonfler une fois le technicien sur place, avec des frais ajoutés sur le pas de la porte. Une intervention sérieuse, déplacement compris, descend rarement sous les 100 € tout compris — un prix très inférieur à la réalité du marché doit alerter, pas rassurer. Exigez un prix ferme par téléphone avant tout déplacement, demandez toujours une facture détaillée, et vérifiez que l'entreprise a une adresse et un SIRET vérifiables, pas seulement un numéro de mobile. C'est exactement pour lutter contre ces pratiques que je me suis installé à mon compte : mes tarifs sont annoncés à l'avance et ne bougent pas une fois sur place, sauf pièce supplémentaire clairement identifiée et validée par vous.",
  },
];

export default function TarifsSerrurierNicePage() {
  const url = `${business.domain}/tarifs-serrurier-nice/`;

  return (
    <>
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Tarifs", url },
        ])}
      />
      <TarifsBody />
    </>
  );
}
