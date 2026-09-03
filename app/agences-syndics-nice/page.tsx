import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/agences-syndics-nice/" },
  title: "Serrurier partenaire agences & syndics à Nice | VAF",
  description:
    "Serrurier partenaire d'agences immobilières à Nice : changement de serrure entre locataires, dépannage, remise de clés. Ouvert aux syndics de copropriété.",
};

const sections = [
  {
    heading: "Déjà partenaire de plusieurs agences à Nice",
    paragraphs: [
      "Je travaille aujourd'hui avec deux agences immobilières à Nice, sur l'ensemble de leurs besoins en serrurerie : changement de serrure entre deux locataires, dépannage sur un logement vacant ou occupé, remise de clés au nouvel entrant, mise en sécurité après un départ compliqué ou une perte de clés. Le même artisan suit vos dossiers d'un bout à l'autre, sans sous-traitance.",
    ],
  },
  {
    heading: "Un tarif étudié selon votre volume",
    paragraphs: [
      "Le tarif d'un particulier ne s'applique pas nécessairement à une agence qui me sollicite régulièrement. J'applique un tarif préférentiel étudié au cas par cas, selon la fréquence et la nature de vos demandes — on en discute directement selon votre situation, plutôt qu'une grille figée qui ne correspondrait à personne.",
    ],
  },
  {
    heading: "Ouvert aux syndics de copropriété",
    paragraphs: [
      "Je n'ai pas encore de partenariat établi avec un syndic, mais je suis disponible pour accompagner une copropriété sur l'entretien courant de ses accès : portes de hall, digicodes, gâches électriques, blocs boîtes aux lettres, sur demande du syndic ou d'un résident mandaté. Si vous gérez une copropriété à Nice et cherchez un interlocuteur unique plutôt qu'un prestataire changeant, contactez-moi pour en discuter.",
    ],
  },
  {
    heading: "Pourquoi un artisan solo plutôt qu'un prestataire multi-comptes",
    paragraphs: [
      "Je ne gère pas des dizaines de comptes en simultané. C'est justement ce qui me permet de rester réactif et de connaître vos dossiers, plutôt que de vous renvoyer à un standard téléphonique à chaque appel. C'est le même serrurier qui vous répond, qui intervient, et qui reste joignable après.",
    ],
  },
];

const faq = [
  {
    question: "Travaillez-vous déjà avec des agences immobilières à Nice ?",
    answer:
      "Oui, avec deux agences à ce jour, pour l'ensemble de leurs besoins en serrurerie sur leur parc locatif.",
  },
  {
    question: "Proposez-vous un tarif spécifique pour les professionnels ?",
    answer:
      "Oui, un tarif préférentiel étudié au cas par cas selon le volume et la nature de vos demandes, à discuter directement.",
  },
  {
    question: "Intervenez-vous pour les syndics de copropriété ?",
    answer:
      "Je n'ai pas encore de partenariat établi avec un syndic, mais je suis ouvert à en construire un. Contactez-moi pour en discuter.",
  },
  {
    question: "Comment se passe un changement de serrure entre deux locataires ?",
    answer:
      "Je remplace le cylindre ou la serrure selon l'état constaté, avec remise de clés neuves. L'ancien locataire n'a alors plus accès au logement.",
  },
  {
    question: "Intervenez-vous en urgence pour un logement vacant ou sinistré ?",
    answer:
      "Oui, avec le même délai que pour un particulier — je vous annonce un prix avant de me déplacer, quelle que soit l'urgence.",
  },
];

export default function AgencesSyndicsNicePage() {
  return (
    <ServicePageTemplate
      h1="Serrurier partenaire des agences et syndics à Nice"
      lead="Déjà partenaire de deux agences immobilières à Nice pour leurs besoins en serrurerie, et ouvert à accompagner aussi les syndics de copropriété."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Agences & syndics"
      path="/agences-syndics-nice/"
      relatedServices={[
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}
