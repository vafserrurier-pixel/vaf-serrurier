import type { Metadata } from "next";
import Link from "next/link";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import PriceReminder from "@/components/PriceReminder";
import QuoteBlock from "@/components/QuoteBlock";
import ArticleTable from "@/components/ArticleTable";
import { ShieldIcon, WrenchIcon, CheckIcon, HandshakeIcon, DoorIcon, DoubleLockIcon, StarIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { getGoogleReviews } from "@/lib/reviews";
import { formatRating } from "@/lib/reviewFormat";
import { buildMetadata } from "@/lib/metadata";
import ServiceReviewsLive from "@/components/ServiceReviewsLive";

export const metadata: Metadata = buildMetadata({
  path: "/blindage-porte-nice/",
  title: "Blindage de porte Nice : certifié BP1, porte conservée",
  description:
    "Blindage de porte à Nice : votre porte gardée, bâti acier et serrure multipoints, certifié BP1 dès 2 689 € TTC posé. Devis gratuit. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";
const olClass = "list-decimal pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const sectionsFr = [
  {
    heading: "Blindage, bloc-porte ou simples renforts : ce qu'il vous faut vraiment",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Le blindage n&apos;est pas toujours la bonne réponse. Avant de vous faire un devis, je regarde votre porte et
          ce que vous voulez protéger. Voici ce que je pose, de la solution la plus légère à la plus complète :
        </p>
        <ArticleTable
          headers={["Solution", "Pour quelle porte", "Ce qu'elle apporte", "Prix TTC posé"]}
          rows={[
            [
              <Link key="poignee" href="/poignee-blindee-nice/" className={linkClass}>
                Poignée blindée
              </Link>,
              "Porte saine, serrure récente",
              "Protège le cylindre contre l'arrachement et la casse",
              "349 €",
            ],
            [
              "Cornières anti-pince",
              "Porte avec du jeu entre le battant et le cadre",
              "Empêche de glisser un pied-de-biche côté serrure",
              "269 €",
            ],
            [
              <Link key="carenee" href="/serrure-carenee-nice/" className={linkClass}>
                Serrure carénée 5 points
              </Link>,
              "Porte solide qui ne ferme que sur un point",
              "Ferme la porte sur toute sa hauteur",
              "1 249 €",
            ],
            [
              "Blindage de porte",
              "Porte en bois sain que vous voulez garder",
              "Une vraie porte blindée certifiée, sans changer la menuiserie",
              "Dès 2 689 €",
            ],
            [
              <Link key="bloc" href="/installation-porte-blindee-nice/" className={linkClass}>
                Bloc-porte blindé neuf
              </Link>,
              "Porte ou cadre trop abîmés, ou envie d'un nouveau style",
              "Porte, cadre et serrure neufs",
              "Dès 3 490 €",
            ],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          Sur une porte d&apos;immeuble solide, une poignée blindée et des cornières anti-pince suffisent souvent,
          soit 618 € pour les deux. Si c&apos;est votre cas, je vous le dis plutôt que de vous vendre un blindage.
        </p>
      </>
    ),
  },
  {
    heading: "Ce que comprend un blindage",
    paragraphs: [],
    extra: (
      <>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">Le bâti acier</strong>, fixé sur le dormant existant : il reçoit les points
            de fermeture et empêche d&apos;écarter la porte du cadre.
          </li>
          <li>
            <strong className="text-navy">Le renfort du battant</strong>, qui fait d&apos;une porte en bois une porte
            blindée, sans changer son aspect côté palier.
          </li>
          <li>
            <strong className="text-navy">Une serrure en applique</strong>, côté intérieur, de 3 à 7 points selon le
            niveau visé.
          </li>
          <li>
            <strong className="text-navy">Un cylindre haute sécurité</strong>, avec des clés dont la copie est
            protégée.
          </li>
        </ul>
        <p className={pClass}>
          La pose dure environ 4 heures, sans travaux de maçonnerie. Vous refermez chez vous le soir même avec vos
          nouvelles clés.
        </p>
      </>
    ),
  },
  {
    heading: "Les trois modèles que je pose",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Je pose la gamme{" "}
          <a href="https://www.valentesecurystar.com/" target="_blank" rel="noopener" className={linkClass}>
            Valente Securystar
          </a>
          , un fabricant français installé à Thiais depuis 1995.
        </p>
        <ArticleTable
          headers={["Modèle", "Ce qui le distingue", "Prix TTC posé"]}
          rows={[
            [
              "Citadin",
              "Le modèle de référence : bâti acier 20/10e (25/10e en option), serrure en applique Royal Star de 3, 5 ou 7 points (Little Star, Queen Star ou King Star), cylindre européen breveté à roue dentée livré avec 4 clés à reproduction protégée. Certifié BP1.",
              "Dès 2 689 €",
            ],
            [
              "Parisien",
              "Le haut de gamme : bâti acier 25/10e avec anti-pinces intégrés. Certifiable jusqu'à BP3 en combinant bâti 25/10e, blindage 50/10e et serrure 7 points.",
              "Sur devis",
            ],
            [
              "Parisien Hermétic",
              "La version économique : livrée sans serrure, elle réutilise la vôtre. Un joint hermétique en fil de verre renforce l'isolation phonique et thermique.",
              "Sur devis",
            ],
          ]}
        />
      </>
    ),
  },
  {
    heading: "BP1, BP2, BP3 : ce que veulent dire ces niveaux",
    paragraphs: [
      <>
        Les niveaux BP de la{" "}
        <Link href="/blog/certification-a2p-serrure-nice/" className={linkClass}>
          certification A2P
        </Link>{" "}
        mesurent combien de temps la porte entière résiste à une attaque testée en laboratoire : 5 minutes pour BP1,
        10 minutes pour BP2, 15 minutes pour BP3. Le niveau porte sur l&apos;ensemble (porte, bâti, serrure), pas
        seulement sur la serrure : une serrure 3 étoiles posée sur une porte légère ne fait pas une porte BP3.
      </>,
    ],
  },
  {
    heading: "Ce que je vérifie avant de proposer un blindage",
    paragraphs: [],
    extra: (
      <>
        <ol className={olClass}>
          <li>
            <strong className="text-navy">Le bois du battant</strong> : sain, sans pourriture ni fente, surtout en bas
            de porte.
          </li>
          <li>
            <strong className="text-navy">Le dormant</strong> : le bâti acier s&apos;y fixe, il doit être solidement
            tenu dans le mur.
          </li>
          <li>
            <strong className="text-navy">Le jeu de la porte</strong> : une porte qui frotte ou qui a bougé se règle
            avant la pose.
          </li>
          <li>
            <strong className="text-navy">La place côté intérieur</strong>, pour la serrure en applique.
          </li>
        </ol>
        <p className={pClass}>
          Si l&apos;un de ces points ne va pas, je vous propose un bloc-porte neuf plutôt qu&apos;un blindage posé sur
          une base fragile.
        </p>
      </>
    ),
  },
  {
    heading: "Ce que je refuse de faire",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>Blinder une porte au bois pourri ou au cadre déformé : elle aurait l&apos;air blindée sans l&apos;être.</li>
        <li>Vous vendre un blindage quand une poignée blindée et des cornières suffisent.</li>
        <li>Vous promettre une baisse de votre prime d&apos;assurance : cela dépend de votre contrat.</li>
        <li>
          Poser un blindage dans l&apos;urgence{" "}
          <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
            après une effraction
          </Link>{" "}
          : le soir même, je remets la porte en état de fermer ; le blindage se décide ensuite, au calme, sur devis.
        </li>
      </ul>
    ),
  },
  {
    heading: "Exemple type",
    paragraphs: [
      "Exemple type, une situation fréquente et non un client précis : un appartement dans un immeuble ancien du centre de Nice, avec la porte en bois massif d'origine et une serrure qui ne ferme que sur un point. Le bois est sain, et la copropriété tient à l'aspect des portes palières. Le blindage Citadin est alors cohérent : la porte garde son aspect côté palier, elle ferme sur 3 à 7 points, et l'ensemble est certifié BP1. Avec un budget plus serré, une serrure carénée 5 points et des cornières anti-pince sont une première étape.",
    ],
  },
  {
    heading: "Copropriété, location et assurance",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Copropriété</strong> : tant que l&apos;aspect extérieur côté palier ne change
          pas, le blindage ne demande aucune autorisation de l&apos;assemblée générale.
        </li>
        <li>
          <strong className="text-navy">Location</strong> : si vous êtes locataire, demandez l&apos;accord écrit de
          votre propriétaire avant la pose.
        </li>
        <li>
          <strong className="text-navy">Assurance</strong> : certains assureurs tiennent compte de la certification de
          la porte, d&apos;autres non. Ma facture détaillée mentionne le niveau de certification posé, à présenter à
          votre assureur.
        </li>
      </ul>
    ),
  },
  {
    heading: "Prix, devis et paiement",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Le prix</strong> : le Citadin démarre à 2 689 € TTC, pose comprise. Le
          Parisien et le Parisien Hermétic sont sur devis. Le montant final dépend du modèle, du nombre de points de
          fermeture et de l&apos;état de votre porte. Le détail de tous mes prix est sur{" "}
          <Link href="/tarifs-serrurier-nice/" className={linkClass}>
            ma page tarifs
          </Link>
          .
        </li>
        <li>
          <strong className="text-navy">Le devis</strong> : la visite sur place et le devis sont gratuits, le devis
          vous est remis sous 24h.
        </li>
        <li>
          <strong className="text-navy">L&apos;acompte</strong> : 30 % à la validation du devis.
        </li>
        <li>
          <strong className="text-navy">Le paiement</strong> : par carte bancaire, en espèces ou par virement, avec
          une facture détaillée envoyée par e-mail.
        </li>
        <li>
          <strong className="text-navy">La garantie</strong> : le matériel est couvert par la garantie fabricant
          Valente Securystar de 15 ans.
        </li>
      </ul>
    ),
  },
  {
    heading: "Entretien",
    paragraphs: [
      "Un graissage léger des paumelles une à deux fois par an, avec un lubrifiant pour métal, et un coup d'œil au jeu de fermeture suffisent. Si la porte commence à résister ou à mal refermer, appelez-moi tôt : un réglage coûte moins cher qu'une serrure forcée.",
    ],
  },
];

const faqFr = [
  {
    question: "Combien coûte un blindage de porte à Nice ?",
    answer:
      "À partir de 2 689 € TTC avec le modèle Citadin, pose comprise. Le Parisien et le Parisien Hermétic sont sur devis. La visite et le devis sont gratuits, le devis vous est remis sous 24h.",
  },
  {
    question: "Quelle différence entre un blindage et un bloc-porte neuf ?",
    answer:
      "Le blindage garde votre porte et la renforce. Le bloc-porte remplace la porte, le cadre et la serrure. Si votre porte ou son cadre sont trop abîmés, le bloc-porte est la bonne solution.",
  },
  {
    question: "Combien de temps dure la pose ?",
    answer: "Environ 4 heures, sans travaux de maçonnerie. Vous refermez chez vous le soir même.",
  },
  {
    question: "Faut-il l'accord de la copropriété pour blinder sa porte ?",
    answer:
      "Non, tant que l'aspect extérieur côté palier ne change pas. Si vous êtes locataire, demandez l'accord écrit de votre propriétaire.",
  },
  {
    question: "Peut-on blinder n'importe quelle porte ?",
    answer:
      "Non : il faut un bois sain et un dormant solide. Si ce n'est pas le cas, je vous propose un bloc-porte neuf.",
  },
  {
    question: "Quelle garantie sur un blindage ?",
    answer: "Le matériel est couvert par la garantie fabricant Valente Securystar de 15 ans.",
  },
  {
    question: "Faut-il verser un acompte ?",
    answer:
      "Oui, 30 % à la validation du devis. Le paiement se fait par carte bancaire, en espèces ou par virement, avec une facture détaillée envoyée par e-mail.",
  },
];

const sectionsEn = [
  {
    heading: "What door reinforcement is",
    Icon: <ShieldIcon className="w-4 h-4" />,
    paragraphs: [
      "Reinforcement strengthens your existing door without replacing it: a steel frame system covers the door frame and receives a high-resistance rim lock. Your original wooden door is kept, preserving the exterior look on the landing. The result is a genuine armored door, without changing your original door or frame.",
    ],
  },
  {
    heading: "Three models depending on your needs",
    Icon: <CheckIcon className="w-4 h-4" />,
    paragraphs: [
      <>
        The Citadin (reference model, BP1-certified), the Parisien
        (high-end, certifiable up to BP3) and the Parisien Hermétic (budget
        version, enhanced insulation): three models from the{" "}
        <a
          href="https://www.valentesecurystar.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          Valente Securystar
        </a>{" "}
        range, a French manufacturer based in Thiais since 1995. The Citadin starts at
        €2,689 incl. VAT, fitted; the Parisien and the Parisien Hermétic are
        quoted individually.
      </>,
    ],
  },
  {
    heading: "Why reinforcement changes the odds",
    Icon: <WrenchIcon className="w-4 h-4" />,
    paragraphs: [
      "A burglar takes about 90 seconds on average to force a standard lock. A well-fitted reinforced door can hold out for nearly 50 minutes, a gap that discourages the vast majority of attempts.",
    ],
  },
  {
    heading: "Your home insurance",
    Icon: <HandshakeIcon className="w-4 h-4" />,
    paragraphs: [
      "Some insurers take a door's A2P certification into account, others don't: it depends on your contract, and I don't promise any premium reduction. I provide a detailed invoice stating the certification level fitted, to present to your insurer.",
    ],
  },
  {
    heading: "Sound and heat insulation, a real bonus",
    Icon: <DoubleLockIcon className="w-4 h-4" />,
    paragraphs: [
      "It isn't the primary goal of reinforcement, but the steel frame and inner lining almost always improve insulation compared to a standard front door, a real plus on landings exposed to stairwell noise in central Nice.",
    ],
  },
  {
    heading: "No co-ownership approval needed",
    Icon: <DoorIcon className="w-4 h-4" />,
    paragraphs: [
      "As long as the exterior look on the landing stays unchanged, reinforcement needs no approval from the co-ownership general meeting.",
    ],
  },
];

const faqEn = [
  {
    question: "How much does door reinforcement cost in Nice?",
    answer:
      "From €2,689 incl. VAT with the Citadin model, fitted. The Parisien and the Parisien Hermétic are quoted individually, and the final amount depends on the model chosen and your door's condition. The on-site visit and the quote are free, and the quote is sent to you within 24 hours, before any commitment.",
  },
  {
    question: "What's the difference with a new armored door block?",
    answer:
      "Reinforcement keeps your existing door and strengthens its frame. A door block replaces the whole unit. If your door or its frame are too damaged, see my armored door block page.",
  },
  {
    question: "Do I need co-ownership approval to reinforce my door?",
    answer: "No, in most cases, as long as the exterior look on the landing stays unchanged.",
  },
  {
    question: "What warranty comes with door reinforcement?",
    answer:
      "The material fitted is covered by the 15-year manufacturer warranty (Valente Securystar range, a French manufacturer).",
  },
  {
    question: "How long does fitting take?",
    answer: "About 4 hours, with no masonry work.",
  },
  {
    question: "Can any door be reinforced?",
    answer:
      "Reinforcement is always possible as long as the door is sound: healthy wood and a frame in good condition. If the wood is rotten or the frame warped, I steer you to a new door block, which replaces the whole unit.",
  },
  {
    question: "Does reinforcement change the look of my door?",
    answer:
      "No. Your original door is kept: the exterior look, on the landing side, stays the same.",
  },
  {
    question: "Is a deposit required and how do I pay?",
    answer:
      "For this type of work, a 30% deposit is requested when the quote is accepted. You can pay by bank card, cash or bank transfer, and the detailed invoice is sent to you by e-mail.",
  },
  {
    question: "Does reinforcement really hold off burglars?",
    answer:
      "According to Valente Securystar, the manufacturer of the range I fit, 95% of burglars give up after 3 minutes of unsuccessful attempts against this type of reinforcement. That's a manufacturer statistic, not an independent measurement, but it matches the general pattern: an entry point that resists more than a few minutes discourages the vast majority of attempts.",
  },
];

export default async function BlindagePorteNicePage() {
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
    <LocalizedServicePage
      fr={{
        h1: "Blindage de porte à Nice : votre porte gardée, renforcée à neuf",
        lead: "Le blindage garde votre porte d'origine et en fait une porte blindée : bâti acier sur le dormant, renfort acier sur le battant, serrure en applique multipoints et cylindre haute sécurité. À partir de 2 689 € TTC pose comprise avec le modèle Citadin, certifié BP1. La visite et le devis sont gratuits, le devis vous est remis sous 24h, et la pose dure environ 4 heures, sans maçonnerie.",
        hideProcessSteps: true,
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Blindage de porte",
        path: "/blindage-porte-nice/",
        image: {
          src: "/images/pool/porte-blindee-pose-serrurier-nice.webp",
          alt: "Blindage de porte Nice",
        },
        headingScale: "lg",
        heroTrustNote,
        extra: (
          <>
            <PriceReminder
              priceLabel="à partir de 2 689 € TTC"
              note="Modèle Citadin, pose comprise. Le Parisien et le Parisien Hermétic sont sur devis. Visite et devis gratuits, devis remis sous 24h."
              locale="fr"
            />
            <ServiceReviewsLive path="/blindage-porte-nice/" />
            <div className="mx-auto max-w-4xl px-4 py-10">
              <QuoteBlock locale="fr" />
            </div>
          </>
        ),
      }}
      en={{
        h1: "Door reinforcement in Nice: turning your door into an armored door",
        lead: "Turn your existing door into an armored door without replacing it: steel frame, rim lock and high-security cylinder. From €2,689 incl. VAT fitted (Citadin model), free quote confirmed before work.",
        sections: sectionsEn,
        faq: faqEn,
        breadcrumbLabel: "Door reinforcement",
        path: "/blindage-porte-nice/",
        image: {
          src: "/images/pool/porte-blindee-pose-serrurier-nice.webp",
          alt: "Door reinforcement Nice",
        },
        sectionsVariant: "cards",
        sectionsHeading: "What to know about door reinforcement",
        headingScale: "lg",
        extra: (
          <>
            <PriceReminder
              priceLabel="from €2,689 incl. VAT"
              note="Citadin model, fitted. The Parisien and the Parisien Hermétic are quoted individually. Free visit and quote, quote sent within 24 hours."
              locale="en"
            />
            <div className="mx-auto max-w-4xl px-4 mt-4">
              <div className="bg-steel/10 border border-navy/10 rounded-xl p-5 sm:p-6">
                <p className="font-heading font-semibold text-navy mb-1">
                  15-year manufacturer warranty
                </p>
                <p className="text-sm text-slate leading-relaxed">
                  The material fitted is covered by the 15-year Valente Securystar manufacturer
                  warranty.
                </p>
              </div>
            </div>
          </>
        ),
        processSteps: [
          {
            title: "Call",
            text: "You describe your current door, I tell you whether reinforcement fits or whether a new door block would make more sense.",
          },
          {
            title: "Appointment",
            text: "I visit to assess your door and its frame, at a time that suits you. The visit and the quote are free, and the quote is sent to you within 24 hours.",
          },
          {
            title: "Model choice and fitting",
            text: "I guide you to the right model (Citadin, Parisien, Parisien Hermétic) and fit it in about 4 hours, with no masonry work. A 30% deposit is requested when the quote is accepted.",
          },
          {
            title: "Warranty",
            text: "Detailed invoice sent by e-mail, with the 15-year manufacturer warranty on the material.",
          },
        ],
      }}
    />
  );
}
