import type { Metadata } from "next";
import Link from "next/link";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import BrandsSection from "@/components/BrandsSection";
import PriceReminder from "@/components/PriceReminder";
import QuoteBlock from "@/components/QuoteBlock";
import ArticleTable from "@/components/ArticleTable";
import { StarIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { getGoogleReviews } from "@/lib/reviews";
import { formatRating } from "@/lib/reviewFormat";
import ServiceReviewsLive from "@/components/ServiceReviewsLive";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/changement-serrure-nice/",
  title: "Changement de serrure Nice : cylindre, multipoints",
  description:
    "Changement de serrure ou de cylindre à Nice : cylindre européen, serrure multipoints, clés neuves remises sur place. Prix annoncé avant. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";
const olClass = "list-decimal pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const sectionsFr = [
  {
    heading: "Quand changer sa serrure",
    paragraphs: [],
    extra: (
      <ArticleTable
        headers={["Situation", "Ce que je conseille"]}
        rows={[
          ["Vous emménagez", "Changer le cylindre : impossible de savoir qui a gardé une clé."],
          ["Clés perdues ou volées", "Changer le cylindre ; la serrure peut rester."],
          [
            "Tentative d'effraction",
            "Changer le cylindre abîmé, contrôler la serrure et la gâche, et refermer le jour même.",
          ],
          [
            "La clé force de plus en plus",
            <>
              D&apos;abord un{" "}
              <Link href="/blog/entretien-serrure/" className={linkClass}>
                entretien
              </Link>{" "}
              ; si le cylindre est usé, le changer avant qu&apos;il ne casse la clé.
            </>,
          ],
          [
            <>
              <Link href="/blog/changer-serrure-separation-divorce/" className={linkClass}>
                Séparation
              </Link>{" "}
              ou départ d&apos;un colocataire
            </>,
            "Changer le cylindre, selon ce que permet votre situation.",
          ],
          ["Vous voulez plus de sécurité", "Monter en cylindre certifié A2P, ou passer à une serrure multipoints."],
        ]}
      />
    ),
  },
  {
    heading: "Cylindre ou serrure complète : comment je fais la différence",
    paragraphs: [
      "Le cylindre (on dit aussi barillet) reçoit votre clé. La serrure regroupe tout le reste : le boîtier fixé à la porte, le ou les pênes, et la gâche côté cadre.",
    ],
    extra: (
      <>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">Si la clé accroche, tourne mal ou doit être changée</strong> (emménagement,
            perte, vol), le cylindre suffit. C&apos;est ce que je fais le plus souvent, et c&apos;est aussi le moins
            cher.
          </li>
          <li>
            <strong className="text-navy">Si le mécanisme résiste même avec une clé neuve</strong>, si le pêne ne sort
            plus franchement ou si la poignée est devenue molle, c&apos;est la serrure elle-même qui est en cause.
          </li>
          <li>
            <strong className="text-navy">Si la serrure est trop ancienne</strong> pour qu&apos;on trouve un cylindre
            compatible, je remplace l&apos;ensemble.
          </li>
        </ul>
        <p className={pClass}>
          Je regarde toujours la porte avant de proposer quoi que ce soit : une serrure neuve sur une porte mal alignée
          forcera dès la première semaine.
        </p>
      </>
    ),
  },
  {
    heading: "Mesurer son cylindre",
    paragraphs: [
      <>
        La plupart des cylindres posés en France ont le même profil, dit « européen » (
        <a
          href="https://www.france-cadenas.fr/a/118-la-norme-europeenne-en-1303"
          target="_blank"
          rel="noopener"
          className={linkClass}
        >
          norme EN 1303
        </a>
        ). On peut donc remplacer une marque par une autre, à condition de reprendre exactement les mêmes dimensions.
      </>,
      "Pour le mesurer, on prend comme repère la vis qui tient le cylindre, visible sur le chant de la porte : une longueur vers l'extérieur, une vers l'intérieur. Dans les appartements niçois, je trouve surtout du 30 × 30 mm, puis du 30 × 40 et du 30 × 50 sur les portes plus épaisses. Je contrôle ces mesures sur place avant de poser quoi que ce soit : s'il est trop long et ressort de la porte, il offre une prise pour le casser.",
    ],
  },
  {
    heading: "Tailles particulières",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Demi-cylindre</strong> : une clé d&apos;un seul côté. On le trouve sur les
          portes de garage, de cave ou de local technique.
        </li>
        <li>
          <strong className="text-navy">Cylindre à bouton</strong> : une clé côté extérieur, un bouton côté intérieur.
          Vous fermez et ouvrez de l&apos;intérieur sans chercher vos clés, pratique pour sortir vite.
        </li>
        <li>
          <strong className="text-navy">Paliers de 2,5 mm</strong> : quelques gammes haut de gamme ne suivent pas les
          tailles habituelles (32,5 mm au lieu de 30 ou 35). Je le vérifie avant de commander, pour ne pas poser un
          cylindre qui dépasse.
        </li>
      </ul>
    ),
  },
  {
    heading: "Cylindres de marque : la solution adaptable",
    paragraphs: [
      <>
        Certaines serrures haut de gamme n&apos;utilisent pas le profil européen, mais un cylindre propre à leur
        fabricant :{" "}
        <a
          href="https://www.fichet-pointfort.com/fr/fr/products/serrure-de-securite/cylindre-et-cle/787-z"
          target="_blank"
          rel="noopener"
          className={linkClass}
        >
          Fichet
        </a>{" "}
        (787, F3D),{" "}
        <a
          href="https://www.picard-serrures.com/global/fr/cle-cylindre-haute-securite"
          target="_blank"
          rel="noopener"
          className={linkClass}
        >
          Picard
        </a>{" "}
        (VAK),{" "}
        <a href="https://bricard.com/professionnels/" target="_blank" rel="noopener" className={linkClass}>
          Bricard
        </a>{" "}
        (Supersûreté), par exemple. Leurs clés ne se reproduisent que chez le fabricant ou un revendeur agréé, sur
        présentation d&apos;une carte de propriété. Remplacer ce cylindre par un cylindre d&apos;origine coûte cher, et
        le délai de commande peut être long.
      </>,
      <>
        Il existe souvent une autre solution : un <strong className="text-navy">cylindre adaptable</strong>, fabriqué
        pour entrer dans la serrure d&apos;origine à la place du cylindre de marque. Vous gardez votre serrure et votre
        porte, pour un prix nettement plus bas qu&apos;un cylindre d&apos;origine. En contrepartie, vous ne bénéficiez
        plus de la reproduction contrôlée du fabricant d&apos;origine.
      </>,
      "Envoyez-moi une photo du cylindre et la marque gravée sur la clé : je vous dis au téléphone si un adaptable existe pour votre modèle, et je vous annonce les deux prix, adaptable et d'origine, pour que vous choisissiez.",
    ],
  },
  {
    heading: "Les niveaux de sécurité A2P",
    paragraphs: [
      <>
        Le CNPP, un laboratoire indépendant, attribue la{" "}
        <Link href="/blog/certification-a2p-serrure-nice/" className={linkClass}>
          certification A2P
        </Link>
        . Il classe cylindres et serrures selon le temps qu&apos;ils tiennent face à un cambrioleur :
      </>,
    ],
    extra: (
      <>
        <div className="mb-4">
          <ArticleTable
            headers={["Niveau", "Résistance", "Pour qui"]}
            rows={[
              ["A2P 1 étoile", "5 minutes", "La plupart des appartements"],
              ["A2P 2 étoiles", "10 minutes", "Rez-de-chaussée, porte peu visible, exigence de l'assureur"],
              ["A2P 3 étoiles", "15 minutes", "Biens de valeur, exigence d'assurance élevée"],
            ]}
          />
        </div>
        <p className={pClass}>
          Pour un logement ordinaire, la loi n&apos;exige aucun niveau A2P ; c&apos;est parfois votre assureur qui
          l&apos;exige, vérifiez votre contrat. Je vous conseille le niveau utile pour votre porte, pas le plus cher :
          un cylindre 3 étoiles ne sert à rien si la porte autour cède en premier.
        </p>
        <p className={pClass}>
          Certaines gammes ont une <strong className="text-navy">clé à reproduction contrôlée</strong> : les doubles ne
          se font que sur présentation d&apos;une carte de propriété. Vous savez exactement combien de clés existent ;
          en contrepartie, le cylindre coûte plus cher.
        </p>
      </>
    ),
  },
  {
    heading: "Serrure à larder, en applique, multipoints",
    paragraphs: [],
    extra: (
      <>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">
              <Link href="/blog/remplacer-coffre-a-larder-nice/" className={linkClass}>
                Serrure à larder
              </Link>
            </strong>{" "}
            : logée à l&apos;intérieur de la porte, on ne voit
            que le cylindre. On la trouve sur la plupart des vieilles portes d&apos;appartement à Nice, souvent avec un
            seul point de fermeture.
          </li>
          <li>
            <strong className="text-navy">Serrure en applique 3 points</strong> : vissée côté intérieur, elle
            verrouille la porte en trois points répartis sur sa hauteur. Un vrai gain de sécurité sur une porte
            ancienne.
          </li>
          <li>
            <strong className="text-navy">
              <Link href="/serrure-carenee-nice/" className={linkClass}>
                Serrure carénée 5 points
              </Link>
            </strong>{" "}
            : le même principe, avec cinq points et un capot d&apos;acier qui cache et protège tout le mécanisme.
            C&apos;est le niveau au-dessus.
          </li>
        </ul>
        <p className={pClass}>
          Une serrure multipoints tient la porte en plusieurs endroits, du haut jusqu&apos;en bas, ce qui l&apos;empêche
          de se déformer avec les années. En contrepartie, elle doit être parfaitement réglée : mal alignée, elle force
          à chaque fermeture et s&apos;use vite. Je fais toujours plusieurs essais de fermeture et un réglage fin après
          la pose. Pour choisir entre{" "}
          <Link href="/blog/serrure-multipoints-3-5-7-nice/" className={linkClass}>
            3, 5 ou 7 points
          </Link>
          , voir mon article dédié.
        </p>
      </>
    ),
  },
  {
    heading: "Mes prix",
    paragraphs: [],
    extra: (
      <>
        <div className="mb-4">
          <ArticleTable
            headers={["Prestation", "Prix TTC", "Durée"]}
            rows={[
              ["Cylindre européen standard, fourni posé", "249 €", "Moins d'une heure"],
              ["Cylindre certifié A2P 1, 2 ou 3 étoiles", "Sur devis, selon la taille et la marque", "Moins d'une heure"],
              [
                "Cylindre de marque (Fichet, Picard, Bricard) : d'origine ou adaptable",
                "Sur devis, les deux prix annoncés",
                "Moins d'une heure",
              ],
              [
                "Serrure à larder (remplacement du boîtier)",
                "89 € de main-d'œuvre, boîtier en plus selon le modèle",
                "Un peu plus qu'un cylindre",
              ],
              ["Serrure en applique 3 points", "699 €, fournie posée", "3 heures environ"],
              ["Serrure carénée 5 points (Héraclès Sésame)", "1 249 €, fournie posée", "Une demi-journée environ"],
            ]}
          />
        </div>
        <p className={pClass}>
          Le déplacement à Nice est compris. Après 19 h, le week-end et les jours fériés, le tarif de nuit vous est
          annoncé avant que je parte. Le détail complet est sur ma{" "}
          <Link href="/tarifs-serrurier-nice/" prefetch={false} className={linkClass}>
            page Tarifs
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    heading: "Comment se passe l'intervention",
    paragraphs: [],
    extra: (
      <ol className={olClass}>
        <li>
          <strong className="text-navy">Au téléphone</strong>, vous me décrivez la porte et la serrure ; une photo par
          WhatsApp m&apos;aide à apporter la bonne pièce.
        </li>
        <li>
          <strong className="text-navy">Sur place</strong>, j&apos;identifie le modèle, je mesure le cylindre et je
          contrôle l&apos;alignement de la porte et du cadre.
        </li>
        <li>
          <strong className="text-navy">Je vous annonce le prix</strong> de la solution que je propose, avant de
          démonter quoi que ce soit.
        </li>
        <li>
          <strong className="text-navy">Je pose</strong>, puis je teste la fermeture plusieurs fois et j&apos;ajuste la
          gâche si besoin.
        </li>
        <li>
          <strong className="text-navy">Je vous remets les clés neuves</strong> et une facture détaillée.
        </li>
      </ol>
    ),
  },
  {
    heading: "Après une effraction",
    paragraphs: [
      <>
        La priorité est de pouvoir refermer chez vous le soir même. Je remplace ce qui est réellement abîmé (le
        cylindre, la gâche, parfois le boîtier de serrure) et je consolide la porte. Si elle est trop endommagée, je
        fais une{" "}
        <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
          mise en sécurité provisoire
        </Link>{" "}
        en attendant une réparation durable ou une{" "}
        <Link href="/installation-porte-blindee-nice/" className={linkClass}>
          porte blindée
        </Link>
        . Je ne vous vends pas une serrure complète si un cylindre suffit.
      </>,
      "Pour l'assurance, vous avez 2 jours ouvrés pour déclarer un vol à votre assureur (article L113-2 du Code des assurances). Gardez la facture et le dépôt de plainte.",
    ],
  },
  {
    heading: "Ce que dit la loi",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Copropriété</strong> : la porte de votre appartement et sa serrure sont
          privatives ; vous pouvez changer la serrure sans autorisation du syndic.
        </li>
        <li>
          <strong className="text-navy">Locataire</strong> : les frais d&apos;une perte de clés ou de l&apos;usage
          normal sont en général pour le locataire ; une serrure hors d&apos;usage par vétusté est pour le propriétaire.
          Le détail est dans mon article «{" "}
          <Link href="/blog/qui-paie-changement-serrure-location-nice/" className={linkClass}>
            qui paie
          </Link>{" "}
          ».
        </li>
        <li>
          <strong className="text-navy">Propriétaire</strong> : il ne peut pas changer la serrure d&apos;un logement
          loué sans l&apos;accord du locataire.
        </li>
        <li>
          <strong className="text-navy">Litige</strong> : un commissaire de justice (ancien huissier) peut constater un
          changement de serrure fait sans accord ou un refus d&apos;accès ; ce constat sert de preuve.
        </li>
      </ul>
    ),
  },
  {
    heading: "Les marques que je pose",
    paragraphs: [
      "Je travaille sur toutes les grandes marques, quel que soit le modèle déjà installé chez vous : Fichet, Picard, Héraclès, Vachette, Bricard, Cisa, Mottura, Kaba, Iseo. Je vous conseille le cylindre adapté à votre porte et à votre budget, sans préférence de marque.",
    ],
    extra: (
      <div id="marques" className="scroll-mt-24 mt-4">
        <BrandsSection locale="fr" />
      </div>
    ),
  },
];

const faqFr = [
  {
    question: "Combien coûte un changement de serrure à Nice ?",
    answer:
      "249 € TTC pour un cylindre européen standard, fourni posé, déplacement compris. Les cylindres certifiés A2P et la serrure complète sont sur devis ; une serrure en applique 3 points coûte 699 €.",
  },
  {
    question: "Faut-il changer toute la serrure ou seulement le cylindre ?",
    answer:
      "Le plus souvent, le cylindre suffit : après un emménagement, une perte ou un vol de clés. La serrure complète ne se change que si le mécanisme lui-même est usé ou cassé.",
  },
  {
    question: "Combien de temps dure un changement de cylindre ?",
    answer: "Moins d'une heure, essais de fermeture compris.",
  },
  {
    question: "Puis-je changer la serrure sans l'accord de la copropriété ?",
    answer: "Oui. La porte de votre appartement et sa serrure sont des parties privatives.",
  },
  {
    question: "Qui paie le changement de serrure dans une location ?",
    answer: "En général le locataire en cas de perte de clés, et le propriétaire si la serrure est usée par vétusté.",
  },
  {
    question: "J'ai une serrure Fichet ou Picard : faut-il tout changer ?",
    answer:
      "Non. Souvent, un cylindre adaptable se pose dans votre serrure d'origine, pour moins cher qu'un cylindre de marque. Je vous annonce les deux prix pour que vous choisissiez.",
  },
  {
    question: "Quel délai pour déclarer un cambriolage à l'assurance ?",
    answer: "2 jours ouvrés après la découverte du vol.",
  },
];

const sectionsEn = [
  {
    heading: "When you should change a lock in Nice",
    paragraphs: [
      "Moving into a new place, lost keys, a theft or a break-in are the most common cases. A key that takes more and more force, a cylinder that catches, or a latch that closes less and less firmly are also wear signs not to ignore. It's better to replace a tired lock before it fails completely, usually at the worst possible time.",
    ],
  },
  {
    heading: "Cylinder or full lock: what's the difference",
    paragraphs: [
      "The cylinder is the part that takes the key and drives the mechanism. Replacing it is often enough, and costs noticeably less than a full replacement. A full lock replacement becomes necessary when the mechanism itself (the case set into the door) is damaged or loose, or too old a model to find a compatible cylinder.",
    ],
  },
  {
    heading: "Multipoint locks: everyday comfort and reliability",
    paragraphs: [
      "A multipoint lock spreads resistance across several anchor points (3, 5 or even 7 depending on the model), which limits the door warping over time. It does require precise adjustment though: poor alignment wears the lock out prematurely and can make it force with every closing. That's why I always do a careful check after fitting one.",
    ],
  },
  {
    heading: "A2P certification: useful or not",
    paragraphs: [
      "A2P certification helps objectively compare a lock's resistance to a break-in attempt. I fit locks and cylinders certified A2P 1, 2 or 3 stars depending on your home's real needs, without automatically pushing the highest level. It isn't a legal requirement for a standard home. So I'd rather guide you toward security that matches the real condition of your door, than toward over-equipping it, which won't help much if the structure around it stays weak.",
    ],
  },
  {
    heading: "Changing a lock after a break-in",
    paragraphs: [
      "After an attempted break-in, the priority is closing your door securely right away. I then replace whatever's actually damaged (cylinder, strike plate, sometimes the lock case) and stabilize the whole assembly to prevent a repeat risk. I won't sell you a full replacement if it isn't needed.",
    ],
  },
  {
    heading: "What I actually do at your place",
    paragraphs: [
      "I first identify the lock model in place, then check the alignment of the door and frame. Next, I suggest the solution that best fits your budget and your security expectations. I finish with several closing tests and fine adjustment, so a new lock doesn't start forcing within the first week.",
    ],
  },
];

const faqEn = [
  {
    question: "Can a landlord change the lock without telling the tenant?",
    answer:
      "No, changing a lock has to stay justified and communicated. The landlord can ask for a spare set of keys, which the tenant may or may not agree to depending on the lease terms.",
  },
  {
    question: "Is a lock change the tenant's responsibility?",
    answer:
      "Costs tied to normal use or lost keys generally fall to the tenant, unless the lock is failing due to age and wear.",
  },
  {
    question: "How can a lock change be formally recorded?",
    answer:
      "A bailiff can formally record a refused access or a lock changed without agreement, in case of a dispute between landlord and tenant.",
  },
  {
    question: "When should I change my lock in Nice?",
    answer:
      "After moving in, after lost keys, after a burglary, or simply when the key needs more force and the cylinder starts rusting or catching.",
  },
  {
    question: "How much does a lock change cost in Nice?",
    answer:
      "€249 incl. VAT for a European cylinder replacement, travel and labor included, and quoted on assessment for a full lock. The exact price is always given before the work starts.",
  },
  {
    question: "How long does a lock change take?",
    answer:
      "A cylinder replacement usually takes under an hour. A full lock, with fine alignment adjustment, takes a bit longer depending on the door's condition.",
  },
];

export default async function ChangementSerrureNicePage() {
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
        h1: "Changement de serrure à Nice : cylindre ou serrure complète",
        lead: "Dans la majorité des cas, je remplace seulement le cylindre et votre serrure reste en place. Un cylindre européen standard coûte 249 € TTC posé, déplacement et main-d'œuvre compris, avec des clés neuves remises sur place. En urgence, j'arrive en 30 minutes partout à Nice ; sinon, on fixe un rendez-vous.",
        leadContent: (
          <>
            Dans la majorité des cas, je remplace seulement le cylindre et votre serrure reste en place. Un cylindre
            européen standard coûte 249 € TTC posé, déplacement et main-d&apos;œuvre compris, avec des clés neuves
            remises sur place.{" "}
            <Link href="/ouverture-de-porte-nice/" className={linkClass}>
              En urgence
            </Link>
            , j&apos;arrive en 30 minutes partout à Nice ; sinon, on fixe un rendez-vous.
          </>
        ),
        hideProcessSteps: true,
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Changement de serrure",
        path: "/changement-serrure-nice/",
        image: {
          src: "/images/serrurier-nice-changement-de-serrure.webp",
          alt: "Changement de serrure Nice",
        },
        headingScale: "lg",
        heroTrustNote,
        extra: (
          <>
            <div className="py-10">
              <PriceReminder
                priceLabel="à partir de 249 € TTC"
                note="Cylindre européen standard fourni posé, déplacement compris. Cylindres A2P, cylindres de marque et serrure complète sur devis."
                locale="fr"
              />
            </div>
            <ServiceReviewsLive path="/changement-serrure-nice/" />
            <div className="mx-auto max-w-4xl px-4 pb-10">
              <QuoteBlock locale="fr" />
            </div>
          </>
        ),
      }}
      en={{
        h1: "Lock change in Nice",
        lead: "Cylinder, full lock or multipoint lock replacement: I suggest a solution that matches your door, no unnecessary over-equipping, price quoted before work starts.",
        sections: sectionsEn,
        faq: faqEn,
        breadcrumbLabel: "Lock change",
        path: "/changement-serrure-nice/",
        image: {
          src: "/images/serrurier-nice-changement-de-serrure.webp",
          alt: "Lock change Nice",
        },
        extra: (
          <>
            <div className="py-10">
              <PriceReminder
                priceLabel="From €249 incl. VAT for a standard cylinder (high-security and full lock quoted on assessment)"
                locale="en"
              />
            </div>
            <section id="marques" className="mx-auto max-w-4xl px-4 py-10 scroll-mt-24">
              <h2 className="font-heading text-xl font-bold text-navy mb-4 text-center">
                Lock brands I install
              </h2>
              <BrandsSection locale="en" />
            </section>
            <div className="mx-auto max-w-4xl px-4 pb-10">
              <QuoteBlock locale="en" />
            </div>
          </>
        ),
        processSteps: [
          {
            title: "Call",
            text: "You describe your door and current lock, and I already point you toward the most suitable options.",
          },
          {
            title: "Time to arrival",
            text: "I quote a price and a realistic time frame based on your area and the time of day and let you know if anything changes on the way.",
          },
          {
            title: "Choosing the cylinder or lock",
            text: "I check your door's exact format to fit a cylinder or full lock that's a perfect match, rather than improvising a solution that won't age well.",
          },
          {
            title: "Payment",
            text: "The price confirmed before fitting is what you pay, new keys and a detailed invoice included.",
          },
        ],
      }}
    />
  );
}
