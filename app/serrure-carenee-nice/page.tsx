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
  path: "/serrure-carenee-nice/",
  title: "Serrure carénée 5 points Nice : Héraclès, 1 249 € posée",
  description:
    "Serrure carénée 5 points à Nice : Héraclès Sésame A2P 1 étoile à 1 249 € TTC posée, pose garantie 2 ans, fabricant 10 ans. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";
const olClass = "list-decimal pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const sections = [
  {
    heading: "Ce que change une serrure carénée",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Sur beaucoup de portes niçoises, la serrure d&apos;origine ne ferme que sur un point, au niveau de la
          poignée. Le haut et le bas de la porte restent libres : avec un levier, on peut écarter la porte du cadre et
          faire sauter ce point unique.
        </p>
        <p className={pClass}>La serrure carénée répond à ce problème de deux façons :</p>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">5 points de fermeture</strong> : un pêne au centre, des points en haut et
            en bas, et des points intermédiaires. L&apos;effort d&apos;une attaque se répartit sur toute la hauteur du
            cadre, au lieu de se concentrer au milieu.
          </li>
          <li>
            <strong className="text-navy">Un carénage en acier</strong> : le boîtier et les tringles sont couverts par
            un capot métallique. Une serrure en applique sans capot laisse son mécanisme exposé à la pince ou à la
            perceuse ; le carénage supprime ce point faible.
          </li>
        </ul>
        <p className={pClass}>
          Elle se pose sur la face intérieure de la porte, sans entaille dans le bois : elle convient aux portes en
          bois comme aux portes métalliques. Pour choisir le nombre de points, voir mon article sur les serrures{" "}
          <Link href="/blog/serrure-multipoints-3-5-7-nice/" className={linkClass}>
            3, 5 ou 7 points
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    heading: "Le prix : un forfait, pas une fourchette",
    paragraphs: [],
    extra: (
      <>
        <ArticleTable
          headers={["Prestation", "Ce qui est compris", "Prix TTC"]}
          rows={[
            [
              "Serrure carénée Héraclès Sésame, A2P 1 étoile",
              "Serrure, cylindre, pose et réglage des 5 points",
              "1 249 €",
            ],
            [
              "Serrure carénée A2P 3 étoiles",
              "Un niveau de résistance supérieur, ou une exigence de votre assureur",
              "Sur devis",
            ],
            ["Combo blindage pivot + serrure carénée", "La carénée, plus un renfort acier côté charnières", "Dès 1 890 €"],
            [
              "Blindage complet (pour comparaison)",
              "Bâti acier sur tout le dormant, serrure en applique, porte conservée",
              "Dès 2 689 €",
            ],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          Le forfait couvre toute la gamme Héraclès Sésame, notamment les modèles Y8C et HXR. Le modèle exact est
          choisi après avoir vu votre porte, pas au téléphone : le prix, lui, ne change pas.
        </p>
        <p className={pClass}>
          Attention à ne pas confondre le combo avec un{" "}
          <Link href="/blindage-porte-nice/" className={linkClass}>
            blindage complet
          </Link>
          . Le blindage pivot ne renforce que le côté charnières, la carénée protégeant déjà le côté serrure. Le
          blindage complet habille tout le dormant d&apos;un bâti acier : c&apos;est la solution pour un renfort
          global sans changer la porte. Le détail de tous mes prix est sur{" "}
          <Link href="/tarifs-serrurier-nice/" className={linkClass}>
            ma page tarifs
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    heading: "Carénée, poignée ou blindage : laquelle pour votre porte",
    paragraphs: [],
    extra: (
      <>
        <ArticleTable
          headers={["Ce que vous constatez", "Ce que je propose", "Prix TTC posé"]}
          rows={[
            [
              "Porte et serrure saines, seul le cylindre dépasse et paraît fragile",
              <Link key="poignee" href="/poignee-blindee-nice/" className={linkClass}>
                Poignée blindée
              </Link>,
              "349 €",
            ],
            [
              "Clés perdues ou cylindre usé, serrure en bon état",
              <Link key="cylindre" href="/changement-serrure-nice/" className={linkClass}>
                Cylindre neuf
              </Link>,
              "Dès 249 €",
            ],
            ["Porte saine qui ne ferme que sur un point", "Serrure carénée 5 points", "1 249 €"],
            ["Porte saine, mais vous voulez une vraie porte blindée", "Blindage complet", "Dès 2 689 €"],
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
          Je vous conseille selon l&apos;état réel de votre porte, pas selon la solution la plus chère.
        </p>
      </>
    ),
  },
  {
    heading: "Ce que je vérifie avant la pose",
    paragraphs: [],
    extra: (
      <ol className={olClass}>
        <li>
          <strong className="text-navy">Le support</strong> : les points haut et bas s&apos;ancrent dans le cadre et
          dans le sol ou le linteau. Ils ont besoin d&apos;un bois ou d&apos;une maçonnerie sains pour tenir.
        </li>
        <li>
          <strong className="text-navy">La porte</strong> : son épaisseur, sa planéité, et le jeu avec le cadre. Une
          porte voilée se règle d&apos;abord, sinon les points ne s&apos;engagent pas.
        </li>
        <li>
          <strong className="text-navy">L&apos;ancienne serrure</strong> : ses trous et ses entailles, qu&apos;il
          faut parfois reboucher ou recouvrir.
        </li>
        <li>
          <strong className="text-navy">Le sens d&apos;ouverture et la place côté intérieur</strong>, pour le capot
          et les tringles.
        </li>
      </ol>
    ),
  },
  {
    heading: "Combien de temps dure la pose",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>Comptez 3 à 5 heures. Le temps dépend surtout du cadre :</p>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">vers 5 heures sur un bâti en bois ancien</strong>, comme beaucoup de portes
            palières du Vieux-Nice ou de Cimiez : le réglage des points d&apos;ancrage demande plus de finesse ;
          </li>
          <li>
            <strong className="text-navy">vers 3 heures sur un bâti en béton ou en acier</strong>, plus régulier,
            comme dans la plupart des immeubles récents.
          </li>
        </ul>
        <p className={pClass}>
          La pose se fait sur rendez-vous, à l&apos;heure qui vous convient. Le soir même, vous fermez chez vous avec
          vos nouvelles clés.
        </p>
      </>
    ),
  },
  {
    heading: "A2P : ce qui fait garder ou perdre la certification",
    paragraphs: [
      <>
        Les Sésame que je pose sont{" "}
        <Link href="/blog/certification-a2p-serrure-nice/" className={linkClass}>
          certifiées A2P 1 étoile
        </Link>
        . Pour un niveau supérieur, je pose aussi des carénées certifiées A2P 3 étoiles, sur devis. La certification
        porte sur l&apos;ensemble testé : le boîtier, le cylindre et leurs accessoires. Si vous changez plus tard le
        cylindre pour un modèle non certifié ou non compatible, l&apos;ensemble perd sa certification, même si le
        carénage reste intact.
      </>,
      "C'est un point à garder en tête si votre assureur demande une serrure certifiée : ce jour-là, faites remplacer le cylindre par un modèle compatible, certifié au même niveau.",
    ],
  },
  {
    heading: "Ce que je refuse de faire",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Poser une poignée blindée sur une serrure carénée</strong> : le carénage
          protège déjà le cylindre, une poignée blindée par-dessus n&apos;apporte rien de plus.
        </li>
        <li>
          <strong className="text-navy">Poser une carénée sur un cadre fragile</strong> : les points d&apos;ancrage ne
          tiendraient pas. Je vous oriente alors vers un bloc-porte neuf.
        </li>
        <li>
          <strong className="text-navy">Vous vendre une carénée quand un cylindre neuf suffit</strong> : si seul le
          cylindre est en cause, je change le cylindre.
        </li>
        <li>
          <strong className="text-navy">Poser une carénée en urgence</strong>{" "}
          <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
            après une effraction
          </Link>{" "}
          : le soir même, je remets la porte en état de fermer ; la carénée se pose ensuite, sur rendez-vous.
        </li>
      </ul>
    ),
  },
  {
    heading: "Exemple type",
    paragraphs: [
      "Exemple type, une situation fréquente et non un client précis : un appartement au deuxième étage d'un immeuble ancien, porte palière en bois massif, serrure d'origine à un point, voisin cambriolé le mois précédent. Le bois est sain, le cadre tient bien. Ici, la serrure carénée est cohérente : la porte ferme désormais en haut, au milieu et en bas, l'aspect côté palier ne change pas, et la pose prend environ 5 heures sur ce bâti en bois.",
    ],
  },
  {
    heading: "Copropriété et location",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Copropriété</strong> : la serrure se pose côté intérieur, l&apos;aspect de la
          porte vu du palier ne change pas. Dans la grande majorité des cas, aucune autorisation n&apos;est
          nécessaire. Si vous êtes{" "}
          <Link href="/agences-syndics-nice/" className={linkClass}>
            syndic
          </Link>{" "}
          ou gestionnaire, je travaille aussi pour les parties communes.
        </li>
        <li>
          <strong className="text-navy">Location</strong> : la carénée modifie durablement la porte. Si vous êtes
          locataire, demandez l&apos;accord écrit de votre propriétaire. Sans accord, un changement de cylindre reste
          la solution la plus simple.
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
          <strong className="text-navy">La garantie</strong> : ma pose est garantie 2 ans, et le mécanisme est
          couvert par la garantie fabricant Héraclès de 10 ans.
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
        Un coup d&apos;œil au jeu de fermeture et un lubrifiant sec sur les points d&apos;ancrage, une à deux fois par
        an, suffisent à garder le réglage. Si la clé commence à forcer ou qu&apos;un point ne s&apos;engage plus,
        appelez-moi tôt. Pour le cylindre, voir mon article sur l&apos;
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
    question: "Combien coûte une serrure carénée 5 points à Nice ?",
    answer:
      "1 249 € TTC, fournie et posée, pour toute la gamme Héraclès Sésame. Le combo blindage pivot + serrure carénée démarre à 1 890 € TTC. Une carénée A2P 3 étoiles est possible sur devis.",
  },
  {
    question: "Quelle différence entre une serrure carénée et une serrure en applique classique ?",
    answer:
      "Sur une serrure en applique classique, le mécanisme est exposé. Sur une carénée, il est caché sous un capot en acier, et la porte ferme sur plusieurs points de haut en bas.",
  },
  {
    question: "Une serrure carénée remplace-t-elle un blindage ?",
    answer:
      "Non. Elle renforce la fermeture de la porte, pas la porte elle-même. Pour une vraie porte blindée sans changer la porte, il faut un blindage complet ; si le cadre est abîmé, un bloc-porte neuf.",
  },
  {
    question: "Combien de temps dure la pose ?",
    answer:
      "3 à 5 heures : plutôt 5 heures sur un bâti en bois ancien, plutôt 3 heures sur un bâti en béton ou en acier.",
  },
  {
    question: "Peut-on poser une serrure carénée en copropriété ?",
    answer:
      "Oui, dans la grande majorité des cas : elle se pose côté intérieur et ne change pas l'aspect de la porte vu du palier.",
  },
  {
    question: "Peut-on ajouter une poignée blindée sur une serrure carénée ?",
    answer: "Non, c'est inutile : le carénage protège déjà le cylindre.",
  },
  {
    question: "Quelle garantie sur une serrure carénée ?",
    answer:
      "Ma pose est garantie 2 ans, et le mécanisme est couvert par la garantie fabricant Héraclès de 10 ans. Le paiement se fait par carte bancaire, en espèces ou par virement, avec une facture détaillée.",
  },
];

export default async function SerrureCareneeNicePage() {
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
      h1="Serrure carénée 5 points à Nice : 1 249 € fournie posée"
      lead="Une serrure carénée ferme votre porte sur 5 points, de haut en bas, avec un mécanisme caché sous un capot en acier côté intérieur. Je pose la gamme Héraclès Sésame, certifiée A2P 1 étoile, à 1 249 € TTC, matériel et pose compris, sans toucher à l'aspect de votre porte côté palier. Comptez 3 à 5 heures de pose, sur rendez-vous, avec un devis confirmé avant que je commence."
      hideProcessSteps
      sections={sections}
      faq={faq}
      breadcrumbLabel="Serrure carénée 5 points"
      path="/serrure-carenee-nice/"
      image={{
        src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
        alt: "Serrure carénée Nice",
      }}
      headingScale="lg"
      heroTrustNote={heroTrustNote}
      extra={
        <>
          <PriceReminder
            priceLabel="1 249 € TTC"
            note="Forfait unique, gamme Héraclès Sésame, fournie posée. Combo blindage pivot + carénée : à partir de 1 890 € TTC. Devis confirmé avant intervention."
            locale="fr"
          />
          <ServiceReviewsLive path="/serrure-carenee-nice/" />
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
