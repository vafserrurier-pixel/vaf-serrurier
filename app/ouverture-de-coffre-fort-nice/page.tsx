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
  path: "/ouverture-de-coffre-fort-nice/",
  title: "Ouverture de coffre-fort Nice : code oublié, clé perdue",
  description:
    "Coffre-fort bloqué à Nice, code oublié ou clé perdue : ouverture sans casse quand c'est possible, dès 299 € TTC, 24h/24. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const sections = [
  {
    heading: "Avant de m'appeler : deux vérifications",
    paragraphs: [],
    extra: (
      <>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">Coffre électronique</strong> : changez les piles. Une bonne partie des
            coffres « bloqués » ont simplement des piles à plat ou un boîtier de commande en panne, pas une serrure
            défaillante. Sur certains modèles, une clé de secours ou un contact pour pile extérieure permet d&apos;ouvrir
            sans intervention.
          </li>
          <li>
            <strong className="text-navy">Les papiers du coffre</strong> : cherchez la notice, la facture ou la carte
            de propriété. Elles m&apos;indiquent la marque et le modèle, et chez certains fabricants elles permettent de
            commander une clé ou une procédure de réinitialisation.
          </li>
        </ul>
        <p className={pClass}>
          Si rien ne fonctionne, décrivez-moi le coffre au téléphone, ou envoyez-moi une photo par WhatsApp : je vous
          dis tout de suite si une ouverture sans casse est probable.
        </p>
      </>
    ),
  },
  {
    heading: "Les situations que je traite",
    paragraphs: [],
    extra: (
      <>
        <ArticleTable
          headers={["Situation", "Ce que je regarde en premier", "Prix TTC"]}
          rows={[
            ["Code électronique oublié", "L'alimentation et le boîtier de commande", "Dès 299 €"],
            ["Combinaison mécanique perdue", "Le modèle et l'état du mécanisme", "Dès 299 €"],
            ["Clé perdue ou cassée", "Le type de serrure et la possibilité de l'ouvrir sans perçage", "Dès 299 €"],
            [
              "Coffre qui refuse de s'ouvrir avec le bon code ou la bonne clé",
              "Le pêne, souvent bloqué par la charge ou un choc",
              "Dès 299 €",
            ],
            [
              "Coffre hérité, sans code ni clé",
              "Les justificatifs de succession, puis le mécanisme",
              "Dès 299 €",
            ],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          Le prix exact dépend du modèle et du mécanisme. Je vous l&apos;annonce au téléphone et je le confirme sur
          place avant d&apos;ouvrir : c&apos;est celui que vous payez, quelle que soit la méthode finalement nécessaire.
          Le détail de tous mes prix est sur{" "}
          <Link href="/tarifs-serrurier-nice/" className={linkClass}>
            ma page tarifs
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    heading: "Trois mécanismes, trois méthodes",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Serrure à clé</strong> : elle se travaille comme un cylindre de porte, en plus
          robuste. Une ouverture sans casse est souvent possible.
        </li>
        <li>
          <strong className="text-navy">Combinaison mécanique à disques</strong> : elle demande une manipulation fine
          du mécanisme, sans le démonter.
        </li>
        <li>
          <strong className="text-navy">Serrure électronique</strong> : je diagnostique d&apos;abord l&apos;alimentation
          et le boîtier de commande. Le blocage vient souvent de là, et non du verrou lui-même.
        </li>
      </ul>
    ),
  },
  {
    heading: "Ouvrir sans casser, et quand il faut percer",
    paragraphs: [
      "Je commence toujours par la méthode qui préserve le coffre. Un mécanisme propre et bien entretenu s'ouvre presque toujours sans dommage. Un mécanisme grippé par l'âge, la rouille ou un choc réduit les chances d'une ouverture fine dans un temps raisonnable.",
      "Le perçage reste le dernier recours. Quand il est nécessaire, il est ciblé : sur beaucoup de modèles, on remplace ensuite le bloc de serrure et le coffre reprend du service. Je vous le dis avant de commencer, et le prix ne change pas.",
    ],
  },
  {
    heading: "Pièce d'identité et justificatif : toujours",
    paragraphs: [
      <>
        Avant d&apos;ouvrir un coffre-fort, je demande une pièce d&apos;identité et un justificatif de votre lien avec
        le logement : bail, titre de propriété ou facture à votre nom. C&apos;est la même règle que pour une{" "}
        <Link href="/ouverture-de-porte-nice/" className={linkClass}>
          ouverture de porte
        </Link>
        . C&apos;est une garantie, pour vous comme pour moi, que je n&apos;ouvre pas un coffre qui n&apos;est pas le
        vôtre.
      </>,
    ],
  },
  {
    heading: "Coffre hérité : ce qu'il faut préparer",
    paragraphs: [
      "Ouvrir le coffre d'un proche décédé, sans code ni clé, est une demande fréquente. Le document le plus simple est l'acte de notoriété, délivré par le notaire chargé de la succession. À défaut, les coordonnées de ce notaire permettent souvent de régler la question par un contact direct.",
      "Si le notaire n'est pas encore désigné, appelez-moi avec les documents que vous avez (livret de famille, acte de décès) : je vous dis ce qui peut suffire, avant de me déplacer. Vous évitez ainsi un déplacement pour rien.",
    ],
  },
  {
    heading: "Après l'ouverture : réparer ou remplacer",
    paragraphs: [
      "Après une ouverture sans casse, le coffre reste en général utilisable tel quel : il suffit de programmer un nouveau code ou de refaire une clé. Après un perçage, je vous dis si un nouveau bloc de serrure suffit ou si le corps du coffre est touché.",
      "Si vous remplacez la serrure, elle doit correspondre au niveau de certification du coffre. La norme EN 1300 classe la serrure seule ; les normes EN 14450 et EN 1143-1 classent le coffre. Une serrure de niveau inférieur peut faire perdre la certification de l'ensemble, et l'assureur peut en tenir compte après un sinistre. Je vérifie cette compatibilité avant de proposer une serrure.",
      <>
        Si le coffre ne correspond plus à vos besoins, le choix d&apos;un nouveau modèle et sa fixation sont détaillés
        sur ma page{" "}
        <Link href="/installation-coffre-fort-nice/" className={linkClass}>
          installation de coffre-fort
        </Link>
        .
      </>,
    ],
  },
  {
    heading: "Ce que je refuse de faire",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Ouvrir sans pièce d&apos;identité ni justificatif</strong>, quelle que soit
          l&apos;urgence.
        </li>
        <li>
          <strong className="text-navy">Percer d&apos;emblée</strong> pour gagner du temps, quand une ouverture sans
          casse est possible.
        </li>
        <li>
          <strong className="text-navy">Remettre en service une serrure d&apos;un niveau inférieur à celui du coffre</strong>{" "}
          sans vous prévenir.
        </li>
      </ul>
    ),
  },
  {
    heading: "Exemple type",
    paragraphs: [
      "Exemple type, une situation fréquente et non un client précis : une famille vide l'appartement d'un parent décédé et trouve un coffre électronique scellé dans un placard. Personne ne connaît le code, l'écran ne s'allume plus. Avec l'acte de notoriété en main, je commence par l'alimentation : les piles sont à plat depuis des mois. Une fois le boîtier alimenté, l'ouverture se fait sans perçage, et le coffre peut être reprogrammé ou démonté pour être déplacé.",
    ],
  },
  {
    heading: "Prix et paiement",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Le prix</strong> : à partir de 299 € TTC, annoncé au téléphone selon le modèle,
          confirmé avant l&apos;ouverture.
        </li>
        <li>
          <strong className="text-navy">Le paiement</strong> : par carte bancaire, en espèces ou par virement, avec une
          facture détaillée.
        </li>
      </ul>
    ),
  },
];

const faq = [
  {
    question: "Pouvez-vous ouvrir un coffre-fort sans la clé ni le code ?",
    answer:
      "Dans la majorité des cas, oui, selon le modèle et le mécanisme. Je commence toujours par une méthode qui ne casse rien.",
  },
  {
    question: "Combien coûte l'ouverture d'un coffre-fort à Nice ?",
    answer:
      "À partir de 299 € TTC. Le prix exact dépend du modèle et du mécanisme ; il est annoncé au téléphone et confirmé avant l'ouverture, quelle que soit la méthode.",
  },
  {
    question: "L'ouverture abîme-t-elle le coffre ?",
    answer:
      "Pas forcément. Beaucoup de mécanismes s'ouvrent sans dommage. Le perçage n'intervient qu'en dernier recours, et souvent un nouveau bloc de serrure suffit ensuite.",
  },
  {
    question: "Mon coffre électronique ne répond plus : que faire ?",
    answer:
      "Changez d'abord les piles : c'est la cause la plus fréquente. Si l'écran reste éteint ou que le code est refusé, appelez-moi.",
  },
  {
    question: "Intervenez-vous en urgence ?",
    answer: "Oui, 24h/24 et 7j/7, en 30 minutes partout à Nice.",
  },
  {
    question: "Quels documents dois-je préparer ?",
    answer:
      "Une pièce d'identité et un justificatif de votre lien avec le logement : bail, titre de propriété ou facture à votre nom.",
  },
  {
    question: "Comment ouvrir le coffre-fort d'un proche décédé ?",
    answer:
      "Préparez l'acte de notoriété ou les coordonnées du notaire chargé de la succession. Appelez-moi avant le déplacement : je vous dis précisément ce qu'il faut.",
  },
];

export default async function OuvertureDeCoffreFortNicePage() {
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
      h1="Ouverture de coffre-fort à Nice : code oublié, clé perdue"
      lead="Code oublié, clé perdue, coffre qui ne s'ouvre plus ou coffre hérité sans combinaison : j'ouvre votre coffre-fort en choisissant toujours la méthode qui le laisse utilisable. En urgence, j'arrive en 30 minutes partout à Nice, 24h/24. À partir de 299 € TTC, prix annoncé au téléphone et confirmé avant l'ouverture."
      hideProcessSteps
      sections={sections}
      faq={faq}
      breadcrumbLabel="Ouverture de coffre-fort"
      path="/ouverture-de-coffre-fort-nice/"
      image={{
        src: "/images/serrurier-nice-coffre-fort.webp",
        alt: "Ouverture coffre-fort Nice",
      }}
      heroTrustNote={heroTrustNote}
      extra={
        <>
          <PriceReminder
            priceLabel="À partir de 299 € TTC"
            note="Prix annoncé au téléphone selon le modèle, confirmé avant l'ouverture, quelle que soit la méthode."
            locale="fr"
          />
          <ServiceReviewsLive path="/ouverture-de-coffre-fort-nice/" />
          <div className="mx-auto max-w-4xl px-4 py-10">
            <QuoteBlock locale="fr" />
          </div>
        </>
      }
    />
  );
}
