import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import PriceReminder from "@/components/PriceReminder";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import { buildMetadata } from "@/lib/metadata";

const guideToc = [
  { id: "usage", label: "Quel usage, quel niveau de protection" },
  { id: "armes", label: "Cas particulier : la détention d'armes à feu" },
  { id: "fixation-support", label: "La fixation selon votre type de support" },
  { id: "emplacement", label: "Emplacement : au-delà de la seule discrétion" },
  { id: "faq", label: "Questions complémentaires" },
];

const guideFaq = [
  {
    question: "Un coffre anti-effraction protège-t-il aussi mes documents contre l'incendie ?",
    answer:
      "Pas automatiquement : ce sont deux normes distinctes (A2P/EN 1143-1 pour l'effraction, EN 1047-1 pour le feu). Certains modèles cumulent les deux certifications, à vérifier précisément avant l'achat si les deux usages vous concernent.",
  },
  {
    question: "Une armoire à fusils suffit-elle légalement pour des armes de catégorie B ?",
    answer:
      "Oui, à condition qu'elle soit certifiée (typiquement EN 14450 S1 ou S2) et adaptée au nombre d'armes détenues. Une simple armoire non certifiée ne répond pas à l'obligation réglementaire.",
  },
  {
    question: "Puis-je fixer un coffre-fort moi-même sans serrurier ?",
    answer:
      "Techniquement oui pour un petit modèle léger, mais une fixation mal dimensionnée pour le poids du coffre et la nature du support (cheville inadaptée, béton mal préparé) réduit fortement sa résistance réelle à l'arrachement.",
  },
  {
    question: "Un coffre-fort au sol est-il plus sûr qu'un coffre mural ?",
    answer:
      "Cela dépend surtout de la qualité du support et de la fixation, pas uniquement de l'emplacement. Un ancrage solide dans une dalle béton pleine offre en général plus de résistance qu'une fixation murale sur cloison légère.",
  },
];

const guideContent = (
  <>
    <p className="text-slate leading-relaxed">
      Ce guide détaille le choix du niveau de protection selon l&apos;usage,
      et les contraintes de fixation propres à votre logement, en complément
      des certifications déjà présentées plus haut.
    </p>

    <div>
      <ArticleSectionHeading number={1} id="usage" level="h3">
        Quel usage, quel niveau de protection
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Des documents papier importants relèvent d&apos;abord d&apos;une
        protection incendie (norme EN 1047-1, label S60P ou S120P selon la
        durée de résistance recherchée), alors que des bijoux ou des espèces
        relèvent avant tout d&apos;une résistance à l&apos;effraction (A2P ou
        EN 1143-1). Un support numérique (disque dur, clé USB) demande une
        protection encore plus stricte contre la chaleur (classe DIS de l&apos;EN
        1047-1, température maintenue sous 70°C). Beaucoup de foyers ont
        besoin d&apos;un compromis entre ces objectifs plutôt que du niveau
        maximal sur un seul critère.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={2} id="armes" level="h3">
        Cas particulier : la détention d&apos;armes à feu
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Pour les armes de catégorie B détenues à domicile, l&apos;
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000034753901"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          article R314-3 du Code de la sécurité intérieure
        </a>{" "}
        impose un rangement dans un coffre ou une armoire forte adaptée,
        matériel généralement certifié EN 14450 (niveau S1 ou S2) pour
        répondre à cette exigence. Ce n&apos;est pas une simple recommandation :
        le non-respect expose à une amende et à un retrait de
        l&apos;autorisation préfectorale.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={3} id="fixation-support" level="h3">
        La fixation selon votre type de support
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Une dalle béton pleine permet une fixation par cheville chimique ou
        mécanique dimensionnée pour résister à un arrachement franc. Un
        plancher bois ou une cloison légère demande une réflexion différente :
        renforcement local du support, ou choix d&apos;un modèle suffisamment
        lourd pour ne pas dépendre uniquement de la fixation. Je vous
        conseille sur ce point avant l&apos;achat si vous ne l&apos;avez pas
        encore choisi, pour éviter un modèle inadapté à votre logement.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={4} id="emplacement" level="h3">
        Emplacement : au-delà de la seule discrétion
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un emplacement discret ne doit pas non plus devenir inaccessible en
        cas d&apos;urgence, ni exposé à l&apos;humidité si le coffre contient de
        l&apos;électronique ou des documents sensibles. J&apos;évalue ces
        contraintes avec vous au moment du rendez-vous, en tenant compte de
        la configuration réelle de votre logement.
      </p>
    </div>
  </>
);

export const metadata: Metadata = buildMetadata({
  path: "/installation-coffre-fort-nice/",
  title: "Installation de coffre-fort Nice – Serrurier | VAF",
  description: "Installation et fixation de coffre-fort à Nice : conseil sur le modèle, pose sécurisée au sol ou au mur. Devis annoncé avant intervention.",
});

const sections = [
  {
    heading: "Choisir le bon coffre-fort avant de l'installer",
    paragraphs: [
      "Un coffre-fort mal choisi ou mal fixé ne protège pas grand-chose. Avant l'installation, je vous aide à évaluer ce dont vous avez réellement besoin : niveau de résistance à l'effraction, protection incendie si nécessaire, et taille adaptée à ce que vous voulez y ranger.",
    ],
  },
  {
    heading: "Une fixation qui fait toute la différence",
    paragraphs: [
      "Un coffre-fort non fixé peut simplement être emporté lors d'un cambriolage, quel que soit son niveau de sécurité. Je scelle le coffre au sol ou au mur selon la configuration du logement, avec une fixation dimensionnée pour résister à un arrachement.",
    ],
  },
  {
    heading: "Emplacement et discrétion",
    paragraphs: [
      "L'emplacement compte autant que le modèle : un coffre visible dès l'entrée est une cible facile. Je vous conseille sur un emplacement discret et accessible, en tenant compte des contraintes de votre logement (placard, dressing, sous un escalier).",
    ],
  },
  {
    heading: "Comprendre les certifications A2P et EN 1143-1",
    paragraphs: [
      "En France, la certification A2P est délivrée par le CNPP (Centre national de prévention et de protection). Elle classe les coffres selon 1, 2 ou 3 étoiles, correspondant à une durée moyenne de résistance à l'effraction de 5, 10 ou 15 minutes. La norme européenne EN 1143-1, utilisée pour les coffres à usage professionnel comme pour certains modèles résidentiels haut de gamme, définit 7 classes de résistance, de 0 à VI.",
      "Ces classifications ne sont pas qu'un argument commercial : elles conditionnent directement les plafonds de garantie reconnus par les compagnies d'assurance. Je vous oriente vers le niveau de certification cohérent avec ce que vous souhaitez protéger, sans vous vendre plus cher que nécessaire.",
    ],
  },
  {
    heading: "L'impact d'un coffre certifié sur votre assurance",
    paragraphs: [
      "Sans coffre-fort déclaré, la plupart des contrats multirisques habitation plafonnent la couverture des bijoux et espèces à une fraction du capital mobilier, avec un plafond unitaire souvent limité à quelques milliers d'euros. Un coffre certifié permet généralement de relever sensiblement ce plafond. Les montants exacts dépendent entièrement de votre contrat et doivent être vérifiés auprès de votre assureur, mais la différence est réelle. Déclarer le coffre et son niveau de certification à votre assurance conditionne directement l'indemnisation en cas de vol.",
    ],
  },
];

const faq = [
  {
    question: "Faut-il vraiment fixer un coffre-fort au sol ou au mur ?",
    answer:
      "Oui, systématiquement. Un coffre non fixé peut être emporté entier lors d'un cambriolage, ce qui annule tout l'intérêt de son niveau de sécurité.",
  },
  {
    question: "Quel type de coffre-fort choisir pour un appartement ?",
    answer:
      "Cela dépend de ce que vous voulez protéger : documents, bijoux, espèces. Je vous conseille selon vos besoins réels plutôt que de vous orienter vers le modèle le plus cher.",
  },
  {
    question: "Installez-vous des coffres-forts avec protection incendie ?",
    answer:
      "Oui, selon le modèle choisi. Je vous explique la différence entre un coffre anti-effraction et un coffre ignifuge, et je peux vous orienter vers un modèle combinant les deux si nécessaire.",
  },
  {
    question: "Combien coûte l'installation d'un coffre-fort à Nice ?",
    answer:
      "Le tarif dépend du modèle, du poids du coffre et du type de fixation nécessaire. Je vous annonce un prix avant intervention, une fois la situation décrite.",
  },
  {
    question: "Pouvez-vous installer un coffre-fort que j'ai déjà acheté ?",
    answer:
      "Oui, je peux intervenir uniquement pour la pose et la fixation d'un coffre-fort que vous avez déjà, sans que vous ayez besoin de l'acheter via moi.",
  },
  {
    question: "Que veut dire un coffre-fort A2P 3 étoiles ?",
    answer:
      "C'est le niveau de certification A2P le plus élevé délivré par le CNPP pour les coffres résidentiels, correspondant à une durée moyenne de résistance à l'effraction d'environ 15 minutes selon les tests normalisés.",
  },
  {
    question: "Un coffre certifié change-t-il vraiment ma couverture d'assurance ?",
    answer:
      "Dans la majorité des cas, oui, mais les montants exacts dépendent entièrement de votre contrat. Je vous conseille de vérifier les plafonds indiqués par votre assureur avant de choisir le niveau de certification de votre coffre.",
  },
];

export default function InstallationCoffreFortNicePage() {
  return (
    <ServicePageTemplate
      h1="Installation de coffre-fort à Nice"
      lead="Choix du modèle, fixation sécurisée au sol ou au mur, emplacement discret : je vous accompagne pour que votre coffre-fort protège vraiment ce qu'il contient."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Installation de coffre-fort"
      path="/installation-coffre-fort-nice/"
      image={{
        src: "/images/serrurier-nice-coffre-fort.webp",
        alt: "Coffre-fort à installer, prêt pour la fixation, à Nice",
      }}
      extra={
        <PriceReminder
          priceLabel="À partir de 299 € TTC"
          note="Prix ajusté selon le modèle et la fixation nécessaire"
          locale="fr"
        />
      }
      processSteps={[
        {
          title: "Appel",
          text: "Vous me décrivez l'usage prévu (documents, valeurs, armes) et l'emplacement envisagé, pour vous orienter vers le bon modèle.",
        },
        {
          title: "Rendez-vous",
          text: "Je fixe un rendez-vous pour évaluer l'emplacement et le support de fixation, à l'heure qui vous convient.",
        },
        {
          title: "Choix de l'emplacement et fixation",
          text: "Je vous conseille sur le modèle et l'emplacement, puis je prépare la fixation au sol ou au mur pour une résistance réelle à l'arrachement.",
        },
        {
          title: "Règlement",
          text: "Le devis détaillé est validé avant l'installation, sans supplément surprise une fois le coffre fixé.",
        },
      ]}
      relatedArticle={{
        href: "/blog/certification-a2p-serrure-nice/",
        label: "Certification A2P : ce que ce sigle change vraiment pour votre serrure",
      }}
      guide={
        <ServiceGuideSection readingMinutes={5} toc={guideToc} faq={guideFaq}>
          {guideContent}
        </ServiceGuideSection>
      }
      guideFaqForSchema={guideFaq}
      relatedServices={[
        { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
        { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}
