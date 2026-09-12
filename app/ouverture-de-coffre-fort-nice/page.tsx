import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import PriceReminder from "@/components/PriceReminder";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import { buildMetadata } from "@/lib/metadata";

const guideToc = [
  { id: "mecanismes", label: "Trois familles de mécanismes, trois approches" },
  { id: "destructif-ou-non", label: "Ce qui rend une ouverture non destructive possible" },
  { id: "heritage", label: "Coffre hérité : la procédure pas à pas" },
  { id: "apres", label: "Après l'ouverture : réparer, remplacer ou monter en gamme" },
  { id: "faq", label: "Questions complémentaires" },
];

const guideFaq = [
  {
    question: "Une serrure électronique est-elle plus longue à ouvrir qu'une serrure à clé ?",
    answer:
      "Pas forcément plus longue, mais la méthode diffère complètement : sur l'électronique, je travaille surtout sur le boîtier de commande et l'alimentation, pas sur un mécanisme mécanique à manipuler.",
  },
  {
    question: "Que se passe-t-il si le notaire n'a pas encore été désigné pour la succession ?",
    answer:
      "Appelez-moi avant de vous déplacer avec les documents disponibles (livret de famille, acte de décès) : selon la situation, je vous indique ce qui peut suffire à sécuriser l'intervention en attendant l'acte de notoriété définitif.",
  },
  {
    question: "Le coffre est ouvert par perçage : peut-on le refermer normalement après ?",
    answer:
      "Cela dépend de l'ampleur du perçage. Sur certains modèles, un remplacement du bloc de serrure suffit à remettre le coffre en service ; sur d'autres, notamment après un perçage large, le remplacement complet devient plus cohérent.",
  },
  {
    question: "Puis-je garder le même modèle de coffre après une ouverture destructive ?",
    answer:
      "Oui si le corps du coffre n'a pas été touché, seul le mécanisme de verrouillage. Je vous le confirme après diagnostic, avant de proposer une réparation ou un changement de gamme.",
  },
];

const guideContent = (
  <>
    <p className="text-slate leading-relaxed">
      Ce guide détaille les aspects techniques du diagnostic selon le type de
      mécanisme, en complément des situations déjà décrites plus haut sur
      cette page.
    </p>

    <div>
      <ArticleSectionHeading number={1} id="mecanismes" level="h3">
        Trois familles de mécanismes, trois approches
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Une serrure à clé se travaille comme un cylindre classique, en plus
        robuste. Une combinaison mécanique à disques demande une écoute fine
        du mécanisme pour repérer les points d&apos;encoche. Une serrure
        électronique à code implique de diagnostiquer d&apos;abord le boîtier
        de commande et l&apos;alimentation (piles à plat, carte électronique
        défaillante) avant même d&apos;envisager le mécanisme de verrouillage
        lui-même : une bonne partie des blocages électroniques viennent
        justement de là plutôt que d&apos;un vrai problème de serrure.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={2} id="destructif-ou-non" level="h3">
        Ce qui rend une ouverture non destructive possible
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un mécanisme propre et bien entretenu se manipule presque toujours
        sans dommage. Un mécanisme grippé par l&apos;âge, la rouille ou un
        choc antérieur réduit fortement les chances d&apos;une ouverture fine
        dans un temps raisonnable. C&apos;est cet état réel du mécanisme,
        constaté sur place, qui oriente vers le perçage plutôt qu&apos;une
        règle générale selon la marque ou le modèle.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={3} id="heritage" level="h3">
        Coffre hérité : la procédure pas à pas
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un acte de notoriété (délivré par le notaire en charge de la
        succession) reste le document le plus simple à présenter. À défaut,
        les coordonnées de ce notaire permettent souvent de sécuriser
        l&apos;intervention par un contact direct avant mon déplacement.
        J&apos;évite ainsi de vous demander un déplacement pour rien si un
        document manque.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={4} id="apres" level="h3">
        Après l&apos;ouverture : réparer, remplacer ou monter en gamme
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Après une ouverture fine, le mécanisme reste en général utilisable
        tel quel. Après une ouverture destructive, je vous indique si un
        remplacement du bloc de serrure suffit ou si le corps du coffre est
        également concerné. C&apos;est aussi le bon moment pour revoir le
        niveau de protection si le coffre ouvert ne correspondait plus à vos
        besoins : le détail des certifications et de la fixation est sur ma
        page{" "}
        <Link href="/installation-coffre-fort-nice/" className="text-steel underline">
          installation de coffre-fort
        </Link>
        .
      </p>
    </div>
  </>
);

export const metadata: Metadata = buildMetadata({
  path: "/ouverture-de-coffre-fort-nice/",
  title: "Ouverture de coffre-fort Nice – Serrurier | VAF",
  description: "Coffre-fort bloqué, code oublié, clé perdue à Nice ? J'ouvre le coffre sans le détruire quand c'est possible. Devis annoncé avant intervention.",
});

const sections = [
  {
    heading: "Code oublié, clé perdue, coffre hérité",
    paragraphs: [
      "Un code de coffre-fort oublié, une clé perdue, ou un coffre hérité dont personne ne connaît plus la combinaison : ce sont les situations les plus fréquentes. Je commence toujours par identifier le modèle et la marque du coffre avant de choisir la méthode d'ouverture la plus adaptée.",
    ],
  },
  {
    heading: "Ouvrir sans détruire, quand c'est possible",
    paragraphs: [
      "Selon le mécanisme (serrure à clé, à combinaison mécanique ou électronique), je privilégie toujours une méthode qui préserve le coffre et permet de le remettre en service ensuite. Le perçage ou la découpe restent une solution de dernier recours, quand le mécanisme est bloqué de façon irréversible.",
    ],
  },
  {
    heading: "Une pièce d'identité systématiquement demandée",
    paragraphs: [
      "Avant toute ouverture de coffre-fort, je demande une pièce d'identité et un justificatif de votre lien avec le logement ou le bien concerné. C'est la même règle que pour l'ouverture d'une porte d'entrée verrouillée. Ce n'est pas une formalité superflue : c'est une garantie, pour vous comme pour moi, que je n'interviens pas sur un coffre qui ne vous appartient pas.",
    ],
  },
  {
    heading: "Coffre-fort hérité, une situation fréquente",
    paragraphs: [
      "Ouvrir le coffre-fort d'un proche décédé, sans code ni clé retrouvés, est une demande que je reçois régulièrement. Un justificatif de qualité d'héritier (acte de notoriété, ou à défaut le contact du notaire en charge de la succession) permet de sécuriser l'intervention avant même mon déplacement.",
    ],
  },
  {
    heading: "Après l'ouverture",
    paragraphs: [
      "Une fois le coffre ouvert, je vous explique l'état du mécanisme et je vous conseille sur la suite : réparation de la serrure existante, remplacement, ou passage à un modèle plus fiable si le mécanisme est trop endommagé pour être restauré.",
    ],
  },
];

const faq = [
  {
    question: "Pouvez-vous ouvrir un coffre-fort sans la clé ni le code ?",
    answer:
      "Dans la majorité des cas, oui, selon le modèle et le mécanisme. Je diagnostique la serrure avant de proposer une méthode d'ouverture adaptée, en privilégiant toujours la solution la moins destructive.",
  },
  {
    question: "L'ouverture d'un coffre-fort abîme-t-elle toujours la serrure ?",
    answer:
      "Non, pas systématiquement. Pour beaucoup de mécanismes, une ouverture fine est possible sans destruction. Le perçage n'intervient qu'en dernier recours, sur les mécanismes bloqués de façon irréversible.",
  },
  {
    question: "Intervenez-vous sur tous types de coffres-forts ?",
    answer:
      "J'interviens sur la plupart des coffres résidentiels à clé, à combinaison mécanique ou électronique. Pour les modèles très spécifiques ou les coffres de très haute sécurité, je vous le confirme après diagnostic.",
  },
  {
    question: "Combien coûte l'ouverture d'un coffre-fort à Nice ?",
    answer:
      "Le tarif dépend du modèle, du mécanisme et de la méthode nécessaire. Je vous annonce un prix avant intervention, une fois la situation décrite au téléphone.",
  },
  {
    question: "Intervenez-vous en urgence pour un coffre-fort bloqué ?",
    answer:
      "Oui, je suis disponible 24h/24 et 7j/7 pour ce type d'intervention comme pour le reste de mes services de serrurerie.",
  },
  {
    question: "Quels documents dois-je préparer pour l'ouverture de mon coffre-fort ?",
    answer:
      "Une pièce d'identité et un justificatif de votre lien avec le logement (bail, titre de propriété, facture à votre nom). C'est une vérification systématique, quelle que soit la situation.",
  },
  {
    question: "Comment ouvrir le coffre-fort d'un proche décédé ?",
    answer:
      "Un acte de notoriété ou les coordonnées du notaire en charge de la succession permettent de sécuriser l'intervention. N'hésitez pas à m'en parler au téléphone avant le déplacement, je vous indiquerai précisément ce qu'il faut préparer.",
  },
];

export default function OuvertureDeCoffreFortNicePage() {
  return (
    <ServicePageTemplate
      h1="Ouverture de coffre-fort à Nice"
      lead="Code oublié, clé perdue, coffre bloqué ou hérité : je diagnostique le mécanisme et j'ouvre votre coffre-fort en privilégiant toujours la méthode la moins destructive."
      sections={sections}
      faq={faq}
      breadcrumbLabel="Ouverture de coffre-fort"
      path="/ouverture-de-coffre-fort-nice/"
      image={{
        src: "/images/serrurier-nice-coffre-fort.webp",
        alt: "Coffre-fort à serrure électronique diagnostiqué par un serrurier à Nice",
      }}
      extra={
        <PriceReminder
          priceLabel="À partir de 299 € TTC"
          note="Prix ajusté selon le modèle et la méthode nécessaire"
          locale="fr"
        />
      }
      processSteps={[
        {
          title: "Appel",
          text: "Vous me décrivez le modèle de coffre-fort si vous le connaissez, et la raison du blocage : code oublié, clé perdue, coffre hérité.",
        },
        {
          title: "Délai d'arrivée",
          text: "Je vous annonce un prix et un délai réaliste selon votre secteur et l'heure (généralement 15 à 30 minutes à Nice), et je vous préviens si la situation évolue en route.",
        },
        {
          title: "Diagnostic du mécanisme",
          text: "J'identifie le modèle et le type de mécanisme (à clé, combinaison mécanique ou électronique) pour choisir la méthode la moins destructive.",
        },
        {
          title: "Règlement",
          text: "Le prix confirmé avant l'ouverture est celui que vous payez, quelle que soit la méthode finalement nécessaire.",
        },
      ]}
      relatedArticle={{
        href: "/blog/certification-a2p-serrure-nice/",
        label: "Certification A2P : ce que ce sigle change vraiment pour votre serrure",
      }}
      guide={
        <ServiceGuideSection readingMinutes={4} toc={guideToc} faq={guideFaq}>
          {guideContent}
        </ServiceGuideSection>
      }
      guideFaqForSchema={guideFaq}
      relatedServices={[
        { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
        { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
        { href: "/changement-serrure-nice/", label: "Changement de serrure" },
        { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
        { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
      ]}
    />
  );
}
