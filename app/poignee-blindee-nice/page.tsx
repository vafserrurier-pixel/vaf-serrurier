import type { Metadata } from "next";
import Link from "next/link";
import ServicePageTemplate from "@/components/ServicePageTemplate";
import PriceReminder from "@/components/PriceReminder";
import BrandsSection from "@/components/BrandsSection";
import QuoteBlock from "@/components/QuoteBlock";
import ArticleTable from "@/components/ArticleTable";
import ServiceReviewsLive from "@/components/ServiceReviewsLive";
import { StarIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { getGoogleReviews } from "@/lib/reviews";
import { formatRating } from "@/lib/reviewFormat";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/poignee-blindee-nice/",
  title: "Poignée blindée Nice : Héraclès Salomé, cylindre protégé",
  description:
    "Poignée blindée à Nice : Héraclès Salomé posée en une heure, 349 € TTC, cylindre caché et protégé, garantie fabricant 10 ans. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";
const olClass = "list-decimal pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const sections = [
  {
    heading: "Pourquoi le cylindre est le point faible",
    paragraphs: [
      "Un cylindre qui dépasse de la porte, même de quelques millimètres, offre une prise. On peut le casser, l'arracher ou le percer en peu de temps, sans toucher à la serrure ni à la porte. Un cylindre de bonne qualité résiste mieux au crochetage, mais pas à un outil qui le saisit de l'extérieur.",
      "La poignée blindée supprime cette prise : le cylindre est enfermé dans un bloc métallique, il ne dépasse plus et n'est plus accessible. Seule l'entrée de la clé reste ouverte.",
    ],
  },
  {
    heading: "La poignée que je pose : Héraclès Salomé",
    paragraphs: [],
    extra: (
      <>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">Une plaque extérieure en aluminium massif</strong> d&apos;environ 15 mm
            d&apos;épaisseur, qui encaisse les tentatives d&apos;arrachement.
          </li>
          <li>
            <strong className="text-navy">Une plaque intérieure en acier</strong>, qui reprend l&apos;effort de
            l&apos;autre côté de la porte.
          </li>
          <li>
            <strong className="text-navy">Un protecteur de cylindre en inox chromé</strong>, avec une pastille
            anti-perçage.
          </li>
          <li>
            <strong className="text-navy">Cinq finitions</strong> : argent, doré, inox, noir satiné ou champagne, à
            choisir selon votre porte et votre palier. La finition ne change rien à la protection.
          </li>
        </ul>
        <p className={pClass}>
          Elle s&apos;adapte à différents entraxes de fixation : je vérifie sur place la configuration de votre porte.
          Le matériel est couvert par la garantie fabricant Héraclès de 10 ans.
        </p>
        <p className={pClass}>Je pose un seul modèle, à un seul prix : vous n&apos;avez pas de gamme à comparer.</p>
      </>
    ),
  },
  {
    heading: "Le prix",
    paragraphs: [],
    extra: (
      <>
        <ArticleTable
          headers={["Prestation", "Ce qui est compris", "Prix TTC"]}
          rows={[
            ["Poignée blindée Héraclès Salomé", "Poignée, pose et réglage, cylindre existant conservé", "349 €"],
            ["Poignée blindée + cornières anti-pince", "Les deux renforts, posés dans la même visite", "618 €"],
            ["Cylindre à remplacer en plus", "Si le vôtre est usé ou si des clés ont été perdues", "Dès 249 €"],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          Le prix est confirmé après avoir vu votre cylindre, avant que je commence. Le détail de tous mes prix est sur{" "}
          <Link href="/tarifs-serrurier-nice/" className={linkClass}>
            ma page tarifs
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    heading: "Poignée, cylindre ou carénée : que choisir",
    paragraphs: [],
    extra: (
      <>
        <ArticleTable
          headers={["Ce que vous constatez", "Ce que je propose", "Prix TTC posé"]}
          rows={[
            ["Cylindre qui dépasse, porte et serrure saines", "Poignée blindée", "349 €"],
            [
              "Clés perdues, cylindre usé ou qui force",
              <Link key="cylindre" href="/changement-serrure-nice/" className={linkClass}>
                Cylindre neuf
              </Link>,
              "Dès 249 €",
            ],
            [
              "Porte qui ne ferme que sur un point",
              <Link key="carenee" href="/serrure-carenee-nice/" className={linkClass}>
                Serrure carénée 5 points
              </Link>,
              "1 249 €",
            ],
            [
              "Porte saine, mais vous voulez une vraie porte blindée",
              <Link key="blindage" href="/blindage-porte-nice/" className={linkClass}>
                Blindage de porte
              </Link>,
              "Dès 2 689 €",
            ],
            [
              "Porte ou cadre abîmés, déformés ou pourris",
              <Link key="bloc" href="/installation-porte-blindee-nice/" className={linkClass}>
                Bloc-porte blindé neuf
              </Link>,
              "Dès 3 490 €",
            ],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          La poignée blindée et le cylindre se complètent : le cylindre résiste au crochetage, la poignée l&apos;empêche
          d&apos;être saisi de l&apos;extérieur.
        </p>
      </>
    ),
  },
  {
    heading: "Le duo poignée blindée et cornières anti-pince",
    paragraphs: [
      "La poignée protège le cylindre, mais pas l'espace entre la porte et le cadre. Avec un pied-de-biche glissé côté serrure, on peut écarter la porte et faire sauter le pêne sans toucher au cylindre.",
      "Les cornières anti-pince sont des profilés métalliques qui recouvrent cet espace. Avec la poignée blindée, elles couvrent les deux attaques les plus courantes sur une porte d'appartement : le cylindre et le levier. Les deux ensemble coûtent 618 € TTC posés, soit souvent la meilleure protection pour le prix sur une porte saine.",
    ],
  },
  {
    heading: "Ce que je vérifie avant la pose",
    paragraphs: [],
    extra: (
      <ol className={olClass}>
        <li>
          <strong className="text-navy">Le cylindre</strong> : sa longueur, ce qui dépasse de chaque côté, et son
          état. Un cylindre trop long ou usé se change en même temps.
        </li>
        <li>
          <strong className="text-navy">La porte</strong> : son épaisseur et l&apos;espace disponible côté dormant
          pour fixer la plaque.
        </li>
        <li>
          <strong className="text-navy">La certification</strong> : si votre cylindre a une{" "}
          <Link href="/blog/certification-a2p-serrure-nice/" className={linkClass}>
            certification A2P
          </Link>
          , la poignée ne la remet pas en cause, puisqu&apos;elle ne touche pas au mécanisme. Je le vérifie sur votre
          modèle.
        </li>
        <li>
          <strong className="text-navy">L&apos;aspect côté palier</strong>, si votre copropriété impose une apparence
          uniforme.
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
          <strong className="text-navy">Poser une poignée blindée sur une serrure carénée</strong> : le carénage
          protège déjà le cylindre, la poignée n&apos;apporte rien de plus.
        </li>
        <li>
          <strong className="text-navy">Poser une poignée sur un cylindre usé ou dont des clés ont été perdues</strong>{" "}
          : je change d&apos;abord le cylindre, sinon la poignée protège un point déjà faible.
        </li>
        <li>
          <strong className="text-navy">Présenter la poignée comme une solution à tout</strong> : sur une porte ou un
          cadre fragiles, elle ne suffit pas, et je vous le dis.
        </li>
        <li>
          <strong className="text-navy">Poser la poignée sans regarder le reste</strong>{" "}
          <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
            après une effraction
          </Link>{" "}
          : je vérifie d&apos;abord le cadre, la gâche et la serrure, qui ont pu souffrir pendant la tentative.
        </li>
      </ul>
    ),
  },
  {
    heading: "Exemple type",
    paragraphs: [
      "Exemple type, une situation fréquente et non un client précis : une porte d'appartement en bon état dans une résidence des années 1980, serrure 3 points récente, cylindre qui dépasse de 5 mm côté palier. Le cylindre fonctionne bien et toutes les clés sont là. Ici, la poignée blindée suffit : le cylindre est conservé, la pose prend une heure, et la porte n'a plus de prise visible. Si la porte a du jeu côté serrure, j'ajoute les cornières anti-pince.",
    ],
  },
  {
    heading: "Copropriété et location",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Copropriété</strong> : contrairement à une serrure carénée posée à
          l&apos;intérieur, la poignée blindée se voit depuis le palier. Dans la grande majorité des cas, elle est
          acceptée ; si votre règlement impose un aspect strict, vérifiez auprès de votre{" "}
          <Link href="/agences-syndics-nice/" className={linkClass}>
            syndic
          </Link>{" "}
          avant la pose, et choisissez une finition proche de vos portes voisines.
        </li>
        <li>
          <strong className="text-navy">Location</strong> : demandez l&apos;accord de votre propriétaire avant la
          pose.
        </li>
      </ul>
    ),
  },
  {
    heading: "Garantie, devis et paiement",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">La garantie</strong> : ma pose est garantie 2 ans, et le matériel est couvert
          par la garantie fabricant Héraclès de 10 ans.
        </li>
        <li>
          <strong className="text-navy">Le devis</strong> : le prix est confirmé avant que je commence, et c&apos;est
          celui que vous payez.
        </li>
        <li>
          <strong className="text-navy">Le paiement</strong> : par carte bancaire, en espèces ou par virement, avec
          une facture détaillée.
        </li>
        <li>
          <strong className="text-navy">La vidéo</strong> : si vous n&apos;êtes pas sur place, je vous envoie sur
          demande une courte vidéo avant/après, par WhatsApp ou par e-mail.
        </li>
      </ul>
    ),
  },
  {
    heading: "Entretien",
    paragraphs: [],
    extra: (
      <p className={pClass}>
        Un coup d&apos;œil aux fixations et un lubrifiant sec dans le cylindre, une à deux fois par an, suffisent. Si
        la clé commence à forcer, appelez-moi tôt. Pour le cylindre, voir mon article sur l&apos;
        <Link href="/blog/entretien-serrure/" className={linkClass}>
          entretien d&apos;une serrure
        </Link>
        .
      </p>
    ),
  },
];

const faq = [
  {
    question: "Combien coûte une poignée blindée à Nice ?",
    answer:
      "349 € TTC, pose et réglage compris, avec votre cylindre conservé. Avec les cornières anti-pince, l'ensemble coûte 618 € TTC.",
  },
  {
    question: "Combien de temps dure la pose ?",
    answer: "Environ une heure, en une seule visite, sans modifier la structure de la porte.",
  },
  {
    question: "Une poignée blindée est-elle compatible avec ma porte ?",
    answer:
      "Dans la grande majorité des cas, oui : elle s'adapte à différents entraxes de fixation. Je confirme la configuration sur place.",
  },
  {
    question: "Quelle différence avec un changement de cylindre ?",
    answer:
      "Le cylindre neuf résiste mieux au crochetage. La poignée blindée empêche de saisir le cylindre de l'extérieur. Les deux se complètent.",
  },
  {
    question: "La poignée blindée fait-elle perdre la certification A2P de mon cylindre ?",
    answer: "Non : elle recouvre le cylindre sans toucher à son mécanisme. Je le vérifie sur votre modèle.",
  },
  {
    question: "Peut-on poser une poignée blindée sur une serrure carénée ?",
    answer: "Non, c'est inutile : le carénage protège déjà le cylindre.",
  },
  {
    question: "Quelle garantie sur une poignée blindée ?",
    answer:
      "Ma pose est garantie 2 ans, et le matériel est couvert par la garantie fabricant Héraclès de 10 ans.",
  },
];

export default async function PoigneeBlindeeNicePage() {
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
      h1="Poignée blindée à Nice : 349 € posée, cylindre protégé"
      lead="Sur la plupart des portes, le cylindre dépasse côté palier : c'est le premier point qu'un cambrioleur attaque. La poignée blindée le recouvre entièrement, seule l'entrée de la clé reste visible. Je pose la Héraclès Salomé à 349 € TTC, pose et réglage compris, en une heure environ, sans modifier votre porte."
      hideProcessSteps
      sections={sections}
      faq={faq}
      breadcrumbLabel="Installation poignée blindée"
      path="/poignee-blindee-nice/"
      image={{
        src: "/images/pool/poignee-serrure-moderne-porte-creme-nice.webp",
        alt: "Poignée blindée Nice",
      }}
      headingScale="lg"
      heroTrustNote={heroTrustNote}
      extra={
        <>
          <PriceReminder
            priceLabel="349 € TTC"
            note="Un seul modèle, un tarif clair. Pose et réglage inclus, devis confirmé après diagnostic du cylindre en place."
            locale="fr"
          />
          <ServiceReviewsLive path="/poignee-blindee-nice/" />
          <section className="mx-auto max-w-4xl px-4 py-10">
            <h2 className="font-heading text-xl font-bold text-navy mb-4 text-center">
              Marques de serrures que je pose
            </h2>
            <BrandsSection locale="fr" />
          </section>
          <div className="mx-auto max-w-4xl px-4 pb-10">
            <QuoteBlock locale="fr" />
          </div>
        </>
      }
    />
  );
}
