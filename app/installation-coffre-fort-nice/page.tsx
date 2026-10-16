import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import PriceReminder from "@/components/PriceReminder";
import QuoteBlock from "@/components/QuoteBlock";
import ArticleTable from "@/components/ArticleTable";
import ServiceReviewsLive from "@/components/ServiceReviewsLive";
import { StarIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { getGoogleReviews } from "@/lib/reviews";
import { formatRating } from "@/lib/reviewFormat";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/installation-coffre-fort-nice/",
  title: "Installation de coffre-fort Nice : fourni, posé, fixé",
  description:
    "Coffre-fort à Nice fourni et posé, ou pose du vôtre : conseil sur le modèle, fixation au sol ou au mur. Pose dès 299 € TTC. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";
const olClass = "list-decimal pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const sections = [
  {
    heading: "Ce que vous voulez protéger décide du coffre",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>Il n&apos;existe pas de coffre idéal pour tout. Le bon modèle dépend de ce que vous y rangez :</p>
        <ArticleTable
          headers={["Ce que vous rangez", "Ce qu'il faut", "La norme à regarder"]}
          rows={[
            [
              "Documents papier (actes, titres, contrats)",
              "Une protection contre le feu",
              "EN 1047-1, classe S 60 P ou S 120 P",
            ],
            [
              "Disques durs, clés USB",
              "Une protection renforcée contre la chaleur",
              "EN 1047-1, classe DIS",
            ],
            [
              "Bijoux, espèces, objets de valeur",
              "Une résistance à l'effraction",
              "EN 14450 (S1 ou S2) ou EN 1143-1 (grade 0 à VI)",
            ],
            [
              "Armes de catégories A et B",
              "Un coffre-fort ou une armoire forte adaptés",
              "Obligation légale, voir plus bas",
            ],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          Beaucoup de foyers ont besoin des deux : un coffre qui résiste à l&apos;effraction et au feu. Certains
          modèles cumulent les deux certifications ; vérifiez-le précisément avant l&apos;achat.
        </p>
      </>
    ),
  },
  {
    heading: "Les normes en clair",
    paragraphs: [],
    extra: (
      <>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">EN 14450</strong> : les coffres résidentiels courants, en deux niveaux, S1 et
            S2.
          </li>
          <li>
            <strong className="text-navy">EN 1143-1</strong> : les coffres haute sécurité, classés du grade 0 au grade
            VI. C&apos;est la référence pour les biens de valeur importante.
          </li>
          <li>
            <strong className="text-navy">EN 1047-1</strong> : la résistance au feu, pendant 60 ou 120 minutes.
          </li>
          <li>
            <strong className="text-navy">EN 1300</strong> : la serrure seule, classée de A à D, indépendamment du
            coffre.
          </li>
        </ul>
        <p className={pClass}>
          Un conseil simple : avant d&apos;acheter, demandez à votre assureur quel niveau il exige pour couvrir ce que
          vous voulez ranger. C&apos;est lui qui fixe le plafond d&apos;indemnisation, et le bon niveau évite d&apos;acheter
          trop cher ou pas assez.
        </p>
      </>
    ),
  },
  {
    heading: "Votre assurance",
    paragraphs: [
      "Sans coffre déclaré, la plupart des contrats habitation plafonnent fortement la couverture des bijoux et des espèces. Un coffre certifié et déclaré permet en général de relever ce plafond. Les montants dépendent entièrement de votre contrat : vérifiez-les auprès de votre assureur, et déclarez le coffre et sa certification une fois posé.",
    ],
  },
  {
    heading: "Détention d'armes : une obligation légale",
    paragraphs: [
      <>
        Pour les armes de catégories A et B détenues à domicile, l&apos;
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000034753901"
          target="_blank"
          rel="noopener"
          className={linkClass}
        >
          article R314-3 du Code de la sécurité intérieure
        </a>{" "}
        impose de les conserver dans un coffre-fort ou une armoire forte adaptés au type et au nombre d&apos;armes, ou dans une pièce forte protégée. Une
        armoire ordinaire ne suffit pas. Je vous conseille sur un modèle adapté et je le fixe solidement.
      </>,
    ],
  },
  {
    heading: "La fixation, selon votre support",
    paragraphs: [],
    extra: (
      <>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">Dalle béton pleine</strong> : la meilleure base. Le coffre est ancré par
            chevilles chimiques ou mécaniques, dimensionnées pour résister à un arrachement.
          </li>
          <li>
            <strong className="text-navy">Mur porteur en maçonnerie</strong> : une bonne alternative pour un coffre
            mural ou un coffre posé contre le mur.
          </li>
          <li>
            <strong className="text-navy">Plancher bois ou cloison légère</strong>, fréquents dans les immeubles
            anciens : une fixation seule ne suffit pas. Il faut renforcer le support localement, ou choisir un modèle
            assez lourd pour ne pas dépendre uniquement de la fixation.
          </li>
        </ul>
        <p className={pClass}>
          Si vous n&apos;avez pas encore de coffre, je regarde d&apos;abord le support avant de vous en proposer un :
          vous évitez un modèle impossible à fixer correctement chez vous.
        </p>
      </>
    ),
  },
  {
    heading: "L'emplacement",
    paragraphs: [
      "Un coffre visible dès l'entrée est une cible. Je vous conseille un emplacement discret mais accessible : placard, dressing, sous un escalier. Il doit aussi rester à l'abri de l'humidité, surtout s'il contient des documents ou de l'électronique.",
    ],
  },
  {
    heading: "Ce que je vérifie avant la pose",
    paragraphs: [],
    extra: (
      <ol className={olClass}>
        <li>
          <strong className="text-navy">Le poids du coffre et l&apos;accès</strong> : escaliers, ascenseur, largeur
          des portes. Un coffre lourd se monte avec du matériel adapté.
        </li>
        <li>
          <strong className="text-navy">Le support</strong> : béton, maçonnerie, bois ou cloison.
        </li>
        <li>
          <strong className="text-navy">Les canalisations et les câbles</strong> dans le sol ou le mur, avant de
          percer.
        </li>
        <li>
          <strong className="text-navy">Les trous de fixation prévus par le fabricant</strong>, et les chevilles
          adaptées au poids.
        </li>
      </ol>
    ),
  },
  {
    heading: "Ce que je refuse de faire",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Poser un coffre sans le fixer</strong> : il serait emporté entier.
        </li>
        <li>
          <strong className="text-navy">Le fixer dans une simple cloison en plaque de plâtre</strong> : la fixation
          céderait au premier levier.
        </li>
        <li>
          <strong className="text-navy">Percer sans vérifier</strong> la présence de canalisations ou de câbles.
        </li>
      </ul>
    ),
  },
  {
    heading: "Exemple type",
    paragraphs: [
      "Exemple type, une situation fréquente et non un client précis : un couple achète un coffre pour des bijoux de famille et des documents. Leur appartement, dans un immeuble ancien, a un plancher en bois. Leur assureur exige un coffre certifié pour couvrir les bijoux au-delà du plafond de base. Ils choisissent un modèle qui résiste à l'effraction et au feu, posé dans le dressing, contre le mur porteur : je le fixe au mur et au sol, avec un renfort sous le plancher.",
    ],
  },
  {
    heading: "Après la pose",
    paragraphs: [
      <>
        Je vérifie avec vous l&apos;ouverture et la fermeture, et vous rappelle de noter le code ou de ranger la clé de
        secours ailleurs que dans le coffre. En cas de code oublié ou de clé perdue plus tard, voir ma page{" "}
        <Link href="/ouverture-de-coffre-fort-nice/" className={linkClass}>
          ouverture de coffre-fort
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Prix, devis et paiement",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Le prix de la pose</strong> : à partir de 299 € TTC pour la pose et la
          fixation. Il dépend du poids du coffre, du support et de l&apos;accès. Le détail de tous mes prix est sur{" "}
          <Link href="/tarifs-serrurier-nice/" className={linkClass}>
            ma page tarifs
          </Link>
          .
        </li>
        <li>
          <strong className="text-navy">Le coffre fourni</strong> : je vous le chiffre sur devis, selon le modèle, la
          certification et la taille, pose comprise.
        </li>
        <li>
          <strong className="text-navy">Le devis</strong> : le prix est confirmé avant la pose, et c&apos;est celui que
          vous payez.
        </li>
        <li>
          <strong className="text-navy">La garantie</strong> : ma pose est garantie 2 ans.
        </li>
        <li>
          <strong className="text-navy">Le paiement</strong> : par carte bancaire, en espèces ou par virement, avec
          une facture détaillée, utile pour déclarer le coffre à votre assureur.
        </li>
      </ul>
    ),
  },
];

const faq = [
  {
    question: "Faut-il vraiment fixer un coffre-fort ?",
    answer:
      "Oui, toujours. Un coffre non fixé peut être emporté entier, ce qui annule tout l'intérêt de sa résistance.",
  },
  {
    question: "Combien coûte l'installation d'un coffre-fort à Nice ?",
    answer:
      "À partir de 299 € TTC pour la pose et la fixation. Le prix dépend du poids du coffre, du support et de l'accès, et il est confirmé avant la pose.",
  },
  {
    question: "Vendez-vous des coffres-forts, ou posez-vous celui que j'ai acheté ?",
    answer:
      "Les deux. Je vous fournis un coffre adapté à ce que vous voulez protéger, sur devis, pose comprise. Je pose aussi un coffre que vous avez déjà acheté.",
  },
  {
    question: "Quel coffre choisir pour des documents ?",
    answer:
      "Un coffre résistant au feu, certifié EN 1047-1. Pour des disques durs ou des clés USB, il faut la classe DIS, qui protège mieux de la chaleur.",
  },
  {
    question: "Un coffre anti-effraction protège-t-il aussi du feu ?",
    answer:
      "Pas automatiquement : ce sont deux certifications différentes. Certains modèles cumulent les deux ; vérifiez-le avant l'achat.",
  },
  {
    question: "Peut-on fixer un coffre dans un appartement ancien avec un plancher en bois ?",
    answer:
      "Oui, mais pas avec une simple fixation : il faut renforcer le support, ou fixer le coffre aussi au mur porteur.",
  },
  {
    question: "Un coffre certifié change-t-il ma couverture d'assurance ?",
    answer:
      "En général oui, mais les montants dépendent entièrement de votre contrat. Demandez à votre assureur le niveau exigé avant d'acheter.",
  },
];

export default async function InstallationCoffreFortNicePage() {
  const experienceYears = new Date().getFullYear() - business.professionSinceYear;
  const { rating, count } = await getGoogleReviews();

  const heroTrustNote = (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy">
      <span className="inline-flex items-center gap-1.5 font-semibold">
        <StarIcon className="w-4 h-4 text-amber-400" />
        {formatRating(rating, "fr")}/5 sur {count} avis Google
      </span>
      <span className="text-navy/30" aria-hidden="true">·</span>
      <span>{experienceYears} ans d&apos;expérience à Nice</span>
      <span className="text-navy/30" aria-hidden="true">·</span>
      <span>RC Pro {business.insurance.provider} &amp; garantie décennale</span>
    </div>
  );

  return (
    <ServicePageTemplate
      h1="Installation de coffre-fort à Nice : choix, fixation, emplacement"
      lead="Un coffre-fort qui n'est pas fixé s'emporte entier pendant un cambriolage, quel que soit son niveau de sécurité. Je vous aide à choisir le bon modèle, je le fixe au sol ou au mur selon votre support, et je vous conseille sur l'emplacement. Je fournis le coffre, ou je pose celui que vous avez déjà acheté. La pose et la fixation démarrent à 299 € TTC, sur rendez-vous, avec un devis confirmé avant."
      hideProcessSteps
      sections={sections}
      faq={faq}
      breadcrumbLabel="Installation de coffre-fort"
      path="/installation-coffre-fort-nice/"
      image={{
        src: "/images/serrurier-nice-coffre-fort.webp",
        alt: "Installation coffre-fort Nice",
      }}
      heroTrustNote={heroTrustNote}
      extra={
        <>
          <PriceReminder
            priceLabel="À partir de 299 € TTC"
            note="Pose et fixation, prix selon le poids du coffre et le support. Devis confirmé avant intervention."
            locale="fr"
          />
          <ServiceReviewsLive path="/installation-coffre-fort-nice/" />
          <div className="mx-auto max-w-4xl px-4 py-10">
            <QuoteBlock locale="fr" />
          </div>
        </>
      }
    />
  );
}
