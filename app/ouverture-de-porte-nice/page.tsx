import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/ouverture-de-porte-nice/" },
  title: "Porte claquée à Nice – Ouverture sans casse 24h/24 | VAF",
  description:
    "Porte claquée ou verrouillée à Nice ? J'ouvre sans casse quand c'est possible, devis annoncé avant intervention. Disponible jour et nuit au 04 22 13 85 44.",
};

const sections = [
  {
    heading: "Porte claquée n'est pas porte verrouillée",
    paragraphs: [
      "C'est la première question que je pose au téléphone, car la méthode change complètement selon le cas. Une porte claquée — fermée par le simple mouvement du battant, sans tour de clé — se résout très souvent sans aucune casse : une gâche mal réglée, un pêne un peu voilé ou une poignée usée provoquent fréquemment ce genre de blocage, surtout sur les portes plus anciennes du centre de Nice.",
    ],
  },
  {
    heading: "Porte verrouillée à clé",
    paragraphs: [
      "Ce cas demande davantage de précautions, selon le type de serrure installée : cylindre standard, serrure multipoints ou modèle plus ancien. Si vos clés sont perdues ou volées, j'en profite souvent pour vous proposer un remplacement de cylindre qui règle le problème d'accès et améliore la sécurité en même temps, plutôt que de reproduire une clé qui pourrait circuler ailleurs.",
    ],
  },
  {
    heading: "Clé cassée ou serrure bloquée",
    paragraphs: [
      "J'extrais proprement le morceau de clé resté dans le cylindre, sans forcer ni abîmer le mécanisme. Une serrure bloquée peut aussi venir d'un cylindre grippé par l'humidité ou d'un frottement de la porte sur son cadre : une intervention préventive coûte presque toujours moins cher qu'un dépannage de nuit un week-end.",
    ],
  },
  {
    heading: "Porte blindée verrouillée",
    paragraphs: [
      "J'adapte ma méthode sans jamais transiger sur la qualité de l'ouverture, ni forcer sur une porte blindée conçue justement pour résister. L'objectif reste le même : rester propre, respecter la structure du bâti, et ne pas transformer une ouverture en réparation lourde.",
    ],
  },
  {
    heading: "Une pièce d'identité toujours demandée",
    paragraphs: [
      "Avant d'ouvrir une porte verrouillée, je dois vérifier votre identité et votre droit d'occupation du logement — pièce d'identité et document à votre nom à cette adresse (bail, facture, titre de propriété). Ce n'est pas de la paperasse inutile : la réglementation impose cette vérification à tout serrurier, sous peine de poursuites pour complicité de violation de domicile en cas de manquement. C'est une protection pour vous comme pour moi.",
    ],
  },
];

const faq = [
  {
    question: "Comment ouvrir une porte claquée sans serrurier ?",
    answer:
      "Selon le modèle, une fine feuille rigide (type radiographie ou carte) glissée entre le cadre et le pêne peut parfois suffire à libérer le mécanisme. Si ça résiste, mieux vaut éviter de forcer : vous risquez d'abîmer la gâche ou le battant, ce qui coûtera plus cher à réparer qu'un simple déplacement.",
  },
  {
    question: "Comment ouvrir une porte avec la clé restée à l'intérieur ?",
    answer:
      "Avec un double de clé, on peut parfois pousser doucement le mécanisme pour faire tomber la clé restée sur le barillet. Ce n'est pas garanti selon le modèle de serrure, et j'interviens directement si cette méthode ne fonctionne pas.",
  },
  {
    question: "C'est quoi le pêne d'une porte ?",
    answer:
      "Le pêne est la pièce mobile de la serrure, située sur le chant de la porte, qui vient s'insérer dans la gâche du cadre pour maintenir la porte fermée. C'est cette pièce qui bloque (ou débloque) l'ouverture selon sa position.",
  },
  {
    question: "Combien coûte une ouverture de porte claquée à Nice ?",
    answer:
      "149 € TTC pour une ouverture standard en journée. Le détail complet des tarifs, y compris les majorations de nuit et de week-end, est disponible sur ma page tarifs.",
  },
  {
    question: "Combien coûte une ouverture de porte verrouillée à Nice ?",
    answer:
      "149 € TTC pour une situation standard, 189 € TTC s'il s'agit d'une porte blindée verrouillée. Une majoration de 50% s'applique après 19h, le week-end et les jours fériés.",
  },
  {
    question: "Une ouverture de porte laisse-t-elle des traces ?",
    answer:
      "Pas dans la majorité des cas de porte claquée : je privilégie toujours une méthode sans casse quand la configuration le permet. Pour une porte verrouillée sur un modèle de serrure très résistant, une intervention plus technique peut parfois être nécessaire — je vous préviens avant d'agir.",
  },
  {
    question: "Pourquoi un serrurier demande-t-il une pièce d'identité avant d'ouvrir une porte ?",
    answer:
      "C'est une obligation réglementaire, pas un choix de ma part : je dois vérifier votre identité et votre droit d'occupation du logement avant toute ouverture de porte verrouillée, pour éviter de faciliter une intrusion. Gardez une pièce d'identité et un justificatif à votre nom à portée de main.",
  },
];

export default function OuvertureDePorteNicePage() {
  return (
    <ServicePageTemplate
      h1="Porte claquée à Nice : ouverture 24h/24 et 7j/7"
      lead="Porte claquée ou fermée à clé, avec ou sans casse selon la situation : je diagnostique par téléphone, j'annonce un prix, puis j'interviens proprement."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Ouverture de porte"
      path="/ouverture-de-porte-nice/"
      image={{
        src: "/images/serrurier-nice-ouverture-de-porte.webp",
        alt: "Main ouvrant une porte d'entrée équipée d'une poignée ancienne à Nice",
      }}
      relatedServices={[
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}
