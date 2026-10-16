import Link from "next/link";
import type { FaqItem } from "@/components/FaqAccordion";

// FAQ française de l'accueil : une seule liste, utilisée pour l'affichage (HomeBody) et pour
// le schéma FAQPage (page.tsx), afin que les deux restent identiques.
export const homeFaqFr: FaqItem[] = [
  {
    question: "Y a-t-il un serrurier disponible maintenant à Nice ?",
    answer:
      "Oui, j'interviens 24h/24 et 7j/7, y compris la nuit, le week-end et les jours fériés. Appelez-moi : je vous dis tout de suite quand je peux être sur place.",
  },
  {
    question: "En combien de temps arrivez-vous ?",
    answer: "En urgence, en 30 minutes partout à Nice, de jour comme de nuit.",
  },
  {
    question: "Combien coûte un serrurier à Nice ?",
    answer:
      "149 € TTC en journée pour une ouverture de porte, déplacement compris. Après 19 h, le week-end et les jours fériés : 189 € pour une porte claquée, 209 € pour une porte fermée à clé. Les pièces, comme un cylindre, s'ajoutent, et leur prix est annoncé avant.",
  },
  {
    question: "Donnez-vous le prix avant d'intervenir ?",
    answer:
      "Toujours. La loi l'impose pour un dépannage à domicile, dès le premier euro, et je vous le confirme sur place avant de commencer.",
  },
  {
    question: "Comment ouvrez-vous une porte claquée sans l'abîmer ?",
    answer:
      "Avec une feuille Mika, une fine plaque rigide glissée entre la porte et le cadre pour repousser le pêne : 99 % des portes claquées s'ouvrent ainsi sans dégât. Le perçage reste le tout dernier recours.",
  },
  {
    question: "Dans quels quartiers et quelles villes intervenez-vous ?",
    answer: (
      <>
        Dans tous les quartiers de Nice, et dans les villes voisines : Èze, Villefranche-sur-Mer, Beaulieu-sur-Mer,
        Saint-Laurent-du-Var et Cagnes-sur-Mer. Le détail est sur ma page{" "}
        <Link href="/zones-intervention-nice/" className="text-steel underline">
          zones d&apos;intervention
        </Link>
        .
      </>
    ),
    schemaText:
      "Dans tous les quartiers de Nice, et dans les villes voisines : Èze, Villefranche-sur-Mer, Beaulieu-sur-Mer, Saint-Laurent-du-Var et Cagnes-sur-Mer. Le détail est sur ma page zones d'intervention.",
  },
  {
    question: "Mon assurance peut-elle rembourser l'intervention ?",
    answer:
      "Souvent, après une effraction ou certains sinistres, selon les conditions de votre contrat. Certaines cartes bancaires haut de gamme incluent aussi une assistance serrurerie. Je vous remets une facture détaillée, le document qu'elles demandent.",
  },
];
