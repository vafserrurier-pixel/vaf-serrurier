import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { breadcrumbSchema, faqSchema, offerSchema } from "@/lib/schema";
import { cardsByLocale } from "@/lib/pricingCards";
import TarifsBody from "./TarifsBody";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/tarifs-serrurier-nice/",
  title: "Tarifs serrurier Nice – Prix sans surprise | VAF",
  description: "Ouverture de porte, changement de serrure, porte blindée : mes tarifs à Nice, sans surprise. Devis annoncé avant chaque intervention, 24h/24.",
});

const faq = [
  {
    question: "Combien coûte un serrurier en urgence à Nice ?",
    answer:
      "Le tarif de base dépend du service (ouverture, dépannage, remplacement) et une majoration de 50% s'applique après 19h, le week-end et les jours fériés. Le montant exact est toujours annoncé avant que j'intervienne.",
  },
  {
    question: "Le devis est-il vraiment gratuit ?",
    answer:
      "Oui. Je vous annonce un prix par téléphone selon votre description, et je le confirme sur place avant de commencer les travaux, c'est une obligation légale pour un serrurier.",
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
      "Méfiez-vous des prix d'appel affichés très bas, du refus de donner un prix par téléphone, d'une annonce d'office de remplacement de cylindre avant diagnostic, de l'absence de SIREN ou d'adresse vérifiable, d'un paiement en espèces exigé sans facture, ou d'une majoration non annoncée à l'avance. Une intervention sérieuse, déplacement compris, descend rarement sous les 100 € tout compris. Exigez un prix ferme par téléphone avant tout déplacement et demandez toujours une facture détaillée. C'est exactement pour lutter contre ces pratiques que je me suis installé à mon compte : mes tarifs sont annoncés à l'avance et ne bougent pas une fois sur place, sauf pièce supplémentaire clairement identifiée et validée par vous.",
  },
  {
    question: "Puis-je me rétracter après avoir signé un devis à mon domicile ?",
    answer:
      "En principe oui : un contrat conclu à domicile ouvre un droit de rétractation de 14 jours (article L.221-18 du Code de la consommation). Ce délai ne s'applique toutefois pas quand le client demande expressément une exécution immédiate de la prestation et renonce explicitement à ce droit, ce qui est le cas typique d'un dépannage d'urgence réalisé sur-le-champ (article L.221-28 du Code de la consommation).",
  },
  {
    question: "Que faire en cas de litige avec un professionnel du dépannage ?",
    answer:
      "Tout litige avec un professionnel peut être signalé sur SignalConso (signal.conso.gouv.fr), le service de signalement gratuit de la DGCCRF : le professionnel concerné est notifié et dispose d'un délai pour répondre.",
  },
];

export default function TarifsSerrurierNicePage() {
  const url = `${business.domain}/tarifs-serrurier-nice/`;
  const pricedCards = cardsByLocale.fr.filter(
    (card): card is typeof card & { priceValue: number; priceType: "fixed" | "startingFrom" } =>
      card.priceValue !== undefined && card.priceType !== undefined
  );

  return (
    <>
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Tarifs", url },
        ])}
      />
      {pricedCards.map((card) => (
        <JsonLd
          key={card.title}
          data={offerSchema({
            name: card.seoTitle ?? card.title,
            url,
            priceValue: card.priceValue,
            priceType: card.priceType,
          })}
        />
      ))}
      <TarifsBody />
    </>
  );
}
