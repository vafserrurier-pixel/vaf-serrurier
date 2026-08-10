import type { Metadata } from "next";
import JsonLd from "@/components/JsonLd";
import { faqSchema } from "@/lib/schema";
import HomeBody from "./HomeBody";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/" },
  title: "Serrurier Nice 24h/24 – Devis avant intervention | VAF",
  description:
    "Serrurier artisan à Nice, joignable 24h/24 et 7j/7. Ouverture de porte, dépannage, changement de serrure, porte blindée. Prix annoncé avant intervention, sans surprise.",
};

const homeFaq = [
  {
    question: "Y a-t-il un serrurier ouvert maintenant près de moi à Nice ?",
    answer:
      "Oui, j'interviens 24h/24 et 7j/7 sur Nice, y compris la nuit, le week-end et les jours fériés. Vous m'appelez, je vous dis dans combien de temps je peux être sur place.",
  },
  {
    question: "Combien coûte un serrurier en urgence à Nice ?",
    answer:
      "À partir de 149 € TTC pour une ouverture de porte standard, avec une majoration de 50% après 19h, le week-end et les jours fériés. Le détail complet est sur ma page tarifs, et le prix exact est toujours annoncé avant que j'intervienne.",
  },
  {
    question: "Donnez-vous un devis avant l'intervention ?",
    answer:
      "Systématiquement, et ce n'est pas une option : la loi oblige tout serrurier à annoncer son prix avant de commencer les travaux. Je vous le confirme sur place avant d'intervenir.",
  },
  {
    question: "Dans quels quartiers de Nice intervenez-vous ?",
    answer:
      "Je couvre l'ensemble de Nice — centre, est, nord et ouest, du Vieux-Nice à Fabron en passant par Cimiez ou Riquier. Voir le détail sur la page zones d'intervention.",
  },
  {
    question: "Pourquoi choisir un artisan serrurier solo plutôt qu'une grande enseigne ?",
    answer:
      "Parce que c'est moi qui réponds au téléphone, moi qui viens, et moi qui reste joignable après l'intervention si besoin. Pas d'intermédiaire, pas de sous-traitance, un seul interlocuteur du premier appel à la fin du chantier.",
  },
  {
    question: "Travaillez-vous aussi bien sur les urgences que sur les projets programmés ?",
    answer:
      "Oui. Les urgences (porte claquée, effraction) passent en priorité, mais j'interviens tout autant sur des projets réfléchis à l'avance comme un changement de serrure ou l'installation d'une porte blindée.",
  },
];

export default function HomePage() {
  return (
    <>
      <JsonLd data={faqSchema(homeFaq)} />
      <HomeBody />
    </>
  );
}
