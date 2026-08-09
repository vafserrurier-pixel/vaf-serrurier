import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/depannage-serrurier-nice/" },
  title: "Urgence serrurier Nice 24h/24 – Dépannage rapide | VAF",
  description:
    "Serrurier en urgence à Nice : serrure bloquée, clé cassée, cylindre grippé. J'interviens jour et nuit, prix annoncé avant intervention. Appelez le 04 22 13 85 44.",
};

const sections = [
  {
    heading: "Une serrure bloquée à Nice, d'où ça vient",
    paragraphs: [
      "Une serrure qui résiste vient rarement de nulle part. Le plus souvent, c'est le cylindre qui a pris la poussière et l'humidité au fil des saisons, un mécanisme interne fatigué, ou tout simplement un défaut d'alignement de la porte qui force le pêne à chaque fermeture. Sur les immeubles anciens du centre de Nice, l'humidité et les variations de température jouent aussi beaucoup sur le bois et sur le jeu de la porte.",
      "Avant de conclure quoi que ce soit, je vérifie l'ensemble : la porte, la gâche, le pêne et le cylindre. Une serrure qui grippe légèrement aujourd'hui peut se bloquer complètement demain — une intervention préventive coûte presque toujours moins cher qu'un dépannage en pleine nuit, une fois le mécanisme totalement figé.",
    ],
  },
  {
    heading: "Clé cassée dans la serrure",
    paragraphs: [
      "C'est l'un des dépannages les plus fréquents : une clé usée qui casse net dans le barillet, souvent au pire moment. J'extrais le morceau resté à l'intérieur avec les outils adaptés, puis je vérifie l'état du cylindre avant de le remettre en service.",
      "Un réflexe à éviter absolument : pousser la clé cassée avec un objet pointu ou tenter de la coller. Ces deux gestes, très courants, compliquent presque toujours l'extraction et abîment le cylindre, ce qui transforme un dépannage simple en remplacement complet.",
    ],
  },
  {
    heading: "Quand la clé tourne dans le vide",
    paragraphs: [
      "Si la clé tourne sans que rien ne se passe, le mécanisme ne transmet plus le mouvement au pêne. C'est souvent le signe d'une pièce interne cassée ou d'un cylindre complètement usé. Je contrôle l'ensemble porte, gâche, pêne et cylindre pour identifier précisément l'origine du problème, je corrige ce qui peut l'être, et je ne remplace que ce qui est réellement nécessaire.",
    ],
  },
  {
    heading: "Cylindre grippé : agir avant la panne complète",
    paragraphs: [
      "Un cylindre qui accroche, une clé qui force un peu plus chaque semaine : ce sont des signaux d'alerte. Un peu de lubrifiant adapté peut parfois soulager temporairement, mais si le problème revient, mieux vaut le traiter avant de se retrouver bloqué dehors un soir de week-end.",
    ],
  },
  {
    heading: "Comment je fixe le tarif d'un dépannage",
    paragraphs: [
      "Le coût dépend du problème rencontré, du temps nécessaire sur place et des pièces éventuellement à remplacer. Vous m'appelez, vous m'expliquez le souci en quelques mots, et je vous donne un prix avant de me déplacer — pas de mauvaise surprise à la fin.",
    ],
  },
];

const faq = [
  {
    question: "Comment se passe l'intervention d'un serrurier à Nice ?",
    answer:
      "J'écoute d'abord le problème au téléphone, je propose la solution la plus adaptée, j'annonce un devis détaillé, puis je réalise l'intervention sur place.",
  },
  {
    question: "Qui prend en charge le remplacement d'une serrure à Nice ?",
    answer:
      "En général, le propriétaire prend en charge les frais de serrurerie liés à l'usure normale. Les dégradations résultant d'un usage anormal restent à la charge de l'occupant.",
  },
  {
    question: "Comment un serrurier ouvre-t-il une porte claquée sans clé ?",
    answer:
      "Selon le modèle de serrure, j'insère une fine feuille rigide entre le cadre et le pêne, puis je la fais glisser pour libérer le mécanisme, sans abîmer la porte.",
  },
  {
    question: "Est-ce que l'assurance habitation rembourse un remplacement de serrure à Nice ?",
    answer:
      "Dans la majorité des cas, l'assurance habitation du locataire ou du propriétaire prend en charge le remplacement d'une serrure endommagée, notamment après effraction. Vérifiez les conditions de votre contrat.",
  },
  {
    question: "Un serrurier a-t-il le droit d'annoncer son prix seulement après l'intervention ?",
    answer:
      "Non. Le métier de serrurier est réglementé : je suis dans l'obligation de vous fournir un devis avant de commencer les travaux.",
  },
  {
    question: "Y a-t-il un serrurier ouvert maintenant près de moi à Nice ?",
    answer:
      "Oui, j'interviens 24h/24 et 7j/7 sur Nice et ses environs, y compris la nuit, le week-end et les jours fériés.",
  },
];

export default function DepannageSerrurierNicePage() {
  return (
    <ServicePageTemplate
      h1="Urgence serrurier à Nice, dépannage 24h/24 et 7j/7"
      lead="Serrure bloquée, clé cassée, cylindre qui grippe : vous m'expliquez la situation, je vous donne un prix avant de me déplacer, et j'interviens proprement, de jour comme de nuit."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Dépannage serrurier"
      path="/depannage-serrurier-nice/"
      image={{
        src: "/images/serrurier-nice-depannage-reparation.webp",
        alt: "Réparation d'un mécanisme de serrure par un serrurier à Nice",
      }}
      relatedServices={[
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}
