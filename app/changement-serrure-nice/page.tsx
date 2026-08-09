import type { Metadata } from "next";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import BrandsSection from "@/components/BrandsSection";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/changement-serrure-nice/" },
  title: "Changement de serrure Nice – Cylindre & multipoints | VAF",
  description:
    "Remplacement de cylindre, serrure complète ou multipoints à Nice. Devis annoncé avant travaux, solution adaptée à votre porte. Appelez le 04 22 13 85 44.",
};

const sections = [
  {
    heading: "Quand faut-il changer une serrure à Nice",
    paragraphs: [
      "Un déménagement, une perte de clés, un vol ou une effraction sont les cas les plus fréquents. Une clé qui force de plus en plus, un cylindre qui accroche, ou une fermeture de moins en moins franche sont aussi des signes d'usure à ne pas ignorer : mieux vaut changer une serrure fatiguée avant qu'elle ne lâche complètement, souvent au pire moment.",
    ],
  },
  {
    heading: "Cylindre ou serrure complète, quelle différence",
    paragraphs: [
      "Le cylindre est la pièce qui reçoit la clé et actionne le mécanisme : son remplacement suffit souvent et coûte nettement moins cher qu'un remplacement complet. Une serrure complète devient nécessaire quand le mécanisme lui-même — le coffre encastré dans la porte — est endommagé, instable ou d'un modèle trop ancien pour trouver un cylindre compatible.",
    ],
  },
  {
    heading: "Serrure multipoints, confort et fiabilité au quotidien",
    paragraphs: [
      "Une serrure multipoints répartit la résistance sur plusieurs points d'ancrage (3, 5 voire 7 points selon les modèles), ce qui limite les déformations de la porte dans le temps. Elle demande en revanche un réglage précis : un mauvais alignement use la serrure prématurément et peut la faire forcer à chaque fermeture, je fais donc toujours un contrôle fin après la pose.",
    ],
  },
  {
    heading: "Certification A2P, utile ou pas",
    paragraphs: [
      "La certification A2P aide à comparer objectivement la résistance d'une serrure face à une tentative d'effraction. Ce n'est pas une obligation légale pour un logement standard, et je préfère vous orienter vers une sécurisation cohérente avec l'état réel de votre porte plutôt que vers du suréquipement qui ne servira à rien si le bâti autour reste fragile.",
    ],
  },
  {
    heading: "Changement de serrure après une effraction",
    paragraphs: [
      "Après une tentative d'effraction, la priorité reste la fermeture immédiate de votre porte. Je remplace ensuite les éléments réellement endommagés — cylindre, gâche, parfois le coffre de serrure — et je stabilise l'ensemble pour éviter un nouveau risque, sans vous vendre un remplacement complet si ce n'est pas nécessaire.",
    ],
  },
  {
    heading: "Ce que je fais concrètement chez vous",
    paragraphs: [
      "J'identifie d'abord le modèle de serrure en place, je vérifie l'alignement de la porte et du cadre, puis je propose la solution la plus cohérente avec votre budget et votre niveau d'exigence en sécurité. La pose est suivie de plusieurs tests de fermeture et d'un ajustement fin, pour éviter qu'une serrure neuve ne force dès la première semaine.",
    ],
  },
];

const faq = [
  {
    question: "Le propriétaire peut-il changer la serrure sans prévenir le locataire ?",
    answer:
      "Non, un changement de serrure doit rester justifié et communiqué. Le propriétaire peut demander un double des clés, que le locataire accepte ou non selon les termes du bail.",
  },
  {
    question: "Le changement de serrure est-il à la charge du locataire ?",
    answer:
      "Les frais liés à l'usage normal ou à une perte de clés reviennent généralement au locataire, sauf si la serrure est défaillante pour cause de vétusté.",
  },
  {
    question: "Comment faire constater un changement de serrure ?",
    answer:
      "Un huissier de justice peut constater un refus d'accès ou un changement de serrure effectué sans accord, en cas de litige entre propriétaire et locataire.",
  },
  {
    question: "Quand dois-je changer ma serrure à Nice ?",
    answer:
      "Après un déménagement, un vol de clés, un cambriolage, ou simplement quand la clé force et que le cylindre commence à rouiller ou à accrocher.",
  },
  {
    question: "Combien coûte un changement de serrure à Nice ?",
    answer:
      "À partir de 119 € pour un cylindre selon le grade de sécurité, et sur devis pour une serrure complète. Le prix exact est toujours annoncé avant intervention.",
  },
  {
    question: "Combien de temps dure un changement de serrure ?",
    answer:
      "Un remplacement de cylindre prend généralement moins d'une heure. Une serrure complète, avec réglage fin de l'alignement, demande un peu plus de temps selon l'état de la porte.",
  },
];

export default function ChangementSerrureNicePage() {
  return (
    <ServicePageTemplate
      h1="Changement de serrure à Nice"
      lead="Remplacement de cylindre, de serrure complète ou multipoints : je vous propose une solution cohérente avec votre porte, sans suréquipement inutile, devis annoncé avant travaux."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Changement de serrure"
      path="/changement-serrure-nice/"
      image={{
        src: "/images/serrurier-nice-changement-de-serrure.webp",
        alt: "Clé usée dans un cylindre de porte à remplacer, changement de serrure à Nice",
      }}
      extra={
        <section className="mx-auto max-w-4xl px-4 py-10">
          <h2 className="font-heading text-xl font-bold text-navy mb-4 text-center">
            Marques de serrures que je pose
          </h2>
          <BrandsSection />
        </section>
      }
      relatedServices={[
        { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}
