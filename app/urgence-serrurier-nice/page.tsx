import type { Metadata } from "next";
import Link from "next/link";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import PriceReminder from "@/components/PriceReminder";
import QuoteBlock from "@/components/QuoteBlock";
import ArticleTable from "@/components/ArticleTable";
import { StarIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { getGoogleReviews } from "@/lib/reviews";
import { formatRating } from "@/lib/reviewFormat";
import { buildMetadata } from "@/lib/metadata";
import ServiceReviewsLive from "@/components/ServiceReviewsLive";

export const metadata: Metadata = buildMetadata({
  path: "/urgence-serrurier-nice/",
  title: "Serrurier urgence Nice 24h/24 : sur place en 30 min",
  description:
    "Serrurier d'urgence à Nice 24h/24, 7j/7 : sur place en 30 min, porte claquée, clé cassée, effraction. Prix annoncé au téléphone. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";
const olClass = "list-decimal pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const sectionsFr = [
  {
    heading: "Prix de jour et de nuit, situation par situation",
    paragraphs: [],
    extra: (
      <>
        <ArticleTable
          headers={["Situation", "Ce que je fais", "En journée", "Après 19 h, week-end, jours fériés"]}
          rows={[
            [
              <>
                <Link href="/ouverture-de-porte-nice/" className={linkClass}>
                  Porte claquée
                </Link>
                , clés à l&apos;intérieur
              </>,
              "Ouverture à la feuille Mika, sans dégât",
              "149 €",
              "189 €",
            ],
            [
              "Porte fermée à clé, clés perdues ou volées",
              "Perçage du cylindre, jamais de la porte, puis cylindre neuf",
              "149 € + cylindre (dès 249 €)",
              "209 € + cylindre",
            ],
            [
              <Link key="cle" href="/blog/cle-cassee-serrure-que-faire-nice/" className={linkClass}>
                Clé cassée dans la serrure
              </Link>,
              "Extraction du morceau, test du cylindre",
              "149 €",
              "189 €",
            ],
            [
              <>
                <Link href="/blog/serrure-bloquee-diagnostic-nice/" className={linkClass}>
                  Serrure bloquée
                </Link>
                , clé qui ne tourne plus
              </>,
              "Dégrippage et réglage ; cylindre remplacé seulement s'il est hors d'usage",
              "Prix annoncé au téléphone",
              "Prix annoncé au téléphone",
            ],
            [
              <Link key="effraction" href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
                Porte forcée, effraction
              </Link>,
              "Mise en sécurité pour que vous puissiez refermer le soir même",
              "Prix annoncé au téléphone",
              "Prix annoncé au téléphone",
            ],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          Pour les serrures Fichet, Picard et Muel, le prix est toujours sur devis : ce sont des serrures chères, et
          le prix varie d&apos;un modèle à l&apos;autre.
        </p>
      </>
    ),
  },
  {
    heading: "Enfant, personne âgée ou animal enfermé",
    paragraphs: [
      "Dites-le dès les premiers mots de l'appel : ces interventions passent avant toutes les autres, je réorganise ma tournée pour venir en premier.",
      "En cas de danger immédiat (malaise, chaleur, fumée, personne qui ne répond plus), appelez aussi les pompiers au 18 ou le 112, en même temps que moi. Ne perdez pas de temps à choisir entre les deux : ils peuvent entrer plus vite que n'importe quel serrurier.",
    ],
  },
  {
    heading: "Comment se passe un dépannage d'urgence",
    paragraphs: [],
    extra: (
      <ol className={olClass}>
        <li>
          <strong className="text-navy">Au téléphone</strong>, je vous pose deux questions : la porte est-elle
          simplement claquée, ou fermée à clé ? Et quelle marque est inscrite sur votre clé, si vous en avez une
          d&apos;origine ? Une photo de la serrure par WhatsApp m&apos;aide à apporter le bon outil.
        </li>
        <li>
          <strong className="text-navy">Je vous annonce le prix et l&apos;heure d&apos;arrivée</strong> avant de
          partir. Si la situation change en route, je vous rappelle.
        </li>
        <li>
          <strong className="text-navy">Sur place</strong>, je regarde la porte et la serrure, je vous confirme la
          méthode, puis j&apos;interviens. Rien n&apos;est fait avant que vous ayez dit oui au prix.
        </li>
        <li>
          <strong className="text-navy">Vous payez le prix annoncé</strong>, par carte, espèces ou virement, et je
          vous remets une facture détaillée.
        </li>
      </ol>
    ),
  },
  {
    heading: "Ce qui peut attendre le lendemain",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Tout ne justifie pas un tarif de nuit. Si vous êtes chez vous et en sécurité, certaines pannes peuvent
          attendre le lendemain matin, au tarif de journée :
        </p>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">la clé force mais tourne encore</strong> : ne forcez plus, évitez de fermer
            à double tour, et appelez-moi le lendemain ;
          </li>
          <li>
            <strong className="text-navy">la porte ferme mais frotte</strong> : c&apos;est souvent un simple réglage
            de gâche ;
          </li>
          <li>
            <strong className="text-navy">vous êtes à l&apos;intérieur et la porte ne se verrouille plus</strong>,
            mais l&apos;immeuble est sûr : une mise en sécurité peut se faire le matin.
          </li>
        </ul>
        <p className={pClass}>Au téléphone, je vous dis honnêtement si votre cas peut attendre.</p>
      </>
    ),
  },
  {
    heading: "En attendant que j'arrive",
    paragraphs: [],
    extra: (
      <ul className={listClass}>
        <li>
          <strong className="text-navy">Ne forcez pas</strong> sur une clé qui résiste, avec une pince ou un
          tournevis : elle finit par casser dans la serrure.
        </li>
        <li>
          <strong className="text-navy">Si une clé est cassée</strong>, laissez le morceau en place et
          n&apos;introduisez rien dans le cylindre, ni autre clé, ni aiguille.
        </li>
        <li>
          <strong className="text-navy">N&apos;essayez pas de lubrifier à l&apos;huile de cuisine</strong> : elle
          colle et encrasse le mécanisme. Le bon geste, à froid et plus tard, c&apos;est le WD-40 ou le graphite sec.
        </li>
        <li>
          <strong className="text-navy">Après une effraction</strong>, ne touchez à rien avant d&apos;avoir pris des
          photos, et prévenez la police.
        </li>
      </ul>
    ),
  },
  {
    heading: "Combien coûte un dépannage en urgence",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Mes prix sont fixes et affichés : 149 € TTC en journée pour une ouverture, déplacement compris. Après 19 h,
          le week-end et les jours fériés, c&apos;est 189 € pour une porte claquée et 209 € pour une porte fermée à
          clé. Les pièces remplacées, comme un cylindre, s&apos;ajoutent, et leur prix vous est annoncé avant. Le
          détail de tous mes{" "}
          <Link href="/tarifs-serrurier-nice/" className={linkClass}>
            tarifs
          </Link>{" "}
          est sur ma page dédiée.
        </p>
        <p className={pClass}>
          Pour un dépannage à domicile, la loi impose un document détaillé avant tous travaux, dès le premier euro,
          puis une facture au-delà de 25 € TTC (
          <a
            href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033935513"
            target="_blank"
            rel="noopener"
            className={linkClass}
          >
            arrêté du 24 janvier 2017
          </a>
          ). Un serrurier qui refuse de vous donner un prix avant d&apos;intervenir ne respecte pas la loi.
        </p>
      </>
    ),
  },
  {
    heading: "Après le dépannage",
    paragraphs: [],
    extra: (
      <p className={pClass}>
        Une fois la porte ouverte, je ne vous vends rien d&apos;inutile. Si le cylindre fonctionne, je le vérifie et
        je le graisse. S&apos;il a été percé, ou si vos clés ont été perdues ou volées, il faut{" "}
        <Link href="/changement-serrure-nice/" className={linkClass}>
          changer le cylindre
        </Link>{" "}
        : quelqu&apos;un d&apos;autre peut avoir vos clés. Si la serrure a été attaquée, une{" "}
        <Link href="/poignee-blindee-nice/" className={linkClass}>
          poignée blindée
        </Link>{" "}
        protège ensuite le cylindre contre l&apos;arrachement, sans gros travaux.
      </p>
    ),
  },
];

const faqFr = [
  {
    question: "Combien de temps pour que vous arriviez ?",
    answer: "En urgence, en 30 minutes partout à Nice, jour et nuit, week-end et jours fériés compris.",
  },
  {
    question: "Combien coûte un serrurier la nuit à Nice ?",
    answer:
      "189 € TTC pour une porte claquée et 209 € pour une porte fermée à clé, après 19 h, le week-end et les jours fériés. En journée, c'est 149 €. Les pièces éventuelles s'ajoutent, au prix annoncé avant.",
  },
  {
    question: "Un serrurier peut-il annoncer son prix seulement après l'intervention ?",
    answer:
      "Non. Pour un dépannage à domicile, un document détaillé avec le prix est obligatoire avant tous travaux, dès le premier euro.",
  },
  {
    question: "Mon assurance habitation rembourse-t-elle un dépannage ?",
    answer: (
      <>
        Souvent, surtout{" "}
        <Link href="/blog/que-faire-apres-cambriolage-nice/" className={linkClass}>
          après un cambriolage
        </Link>{" "}
        ou une tentative d&apos;effraction. Vérifiez les conditions de votre contrat ; je vous remets une facture
        détaillée, le document qu&apos;elle demande.
      </>
    ),
    schemaText:
      "Souvent, surtout après un cambriolage ou une tentative d'effraction. Vérifiez les conditions de votre contrat ; je vous remets une facture détaillée, le document qu'elle demande.",
  },
  {
    question: "Ma carte bancaire peut-elle couvrir un dépannage serrurier ?",
    answer:
      "Certaines cartes haut de gamme (Visa Premier, Gold Mastercard ou équivalent) incluent une assistance serrurerie, avec un plafond qui varie selon la carte. Vérifiez-le auprès de votre banque ; la facture détaillée que je vous remets sert pour le remboursement.",
  },
  {
    question: "Qui paie le dépannage quand on est locataire ?",
    answer:
      "En général le locataire, si la panne vient d'une perte ou d'un oubli de clés. Si la serrure lâche par usure normale, c'est au propriétaire.",
  },
  {
    question: "Comment peut-on payer ?",
    answer: "Par carte bancaire, en espèces ou par virement, avec une facture détaillée dans tous les cas.",
  },
];

const sectionsEn = [
  {
    heading: "A child or pet locked inside: an absolute emergency",
    paragraphs: [
      "A child or pet alone, locked inside, is an absolute emergency that I treat as a priority over any other callout in progress. Tell me right at the start of the call: I'll rearrange my schedule immediately to come to you first.",
      "If there's immediate danger (heat, visible distress, life-threatening risk), also call the fire brigade in parallel (18 in France, or 112 anywhere in the EU): the two are complementary, don't waste time choosing between them.",
    ],
  },
  {
    heading: "Where a stuck lock in Nice usually comes from",
    paragraphs: [
      "A lock that resists rarely comes out of nowhere. Most often it's a cylinder that has collected dust and humidity over the seasons, or a tired internal mechanism. Another common cause: a misaligned door that forces the bolt every time it closes. In Nice's older city-center buildings, humidity and temperature swings also affect the wood and how well the door sits in its frame.",
      "Before concluding anything, I check everything: the door, the strike plate, the bolt and the cylinder. A lock that sticks slightly today can jam completely tomorrow. The result: a preventive callout is almost always cheaper than a middle-of-the-night repair once the mechanism has fully seized.",
    ],
  },
  {
    heading: "A key broken off inside the lock",
    id: "cle-cassee",
    paragraphs: [
      "This is one of the most common callouts: a worn key snaps clean off inside the cylinder, usually at the worst possible time. I extract the piece left inside with the right tools, then check the condition of the cylinder before putting it back into service. Drilling stays a last-resort solution, only if no other method works.",
      "One thing to avoid absolutely: pushing the broken key with a sharp object or trying to glue it back together. Both of these common reflexes almost always make extraction harder and damage the cylinder. The result: a simple repair turns into a full replacement.",
    ],
  },
  {
    heading: "When the key turns but nothing happens",
    paragraphs: [
      "If the key turns freely without engaging anything, the mechanism is no longer transmitting movement to the bolt. This is often a sign of a broken internal part or a fully worn cylinder. I check the whole assembly (door, strike plate, bolt and cylinder) to pinpoint the exact cause. Then I fix what can be fixed, and only replace what's truly necessary.",
    ],
  },
  {
    heading: "A stiff cylinder: act before it fails completely",
    paragraphs: [
      "A cylinder that catches, a key that needs a little more force each week: these are warning signs. The right lubricant can sometimes offer temporary relief. But if the problem keeps coming back, it's better to deal with it before you find yourself locked out on a weekend evening.",
    ],
  },
  {
    heading: "How I set the price for a callout",
    paragraphs: [
      "The cost depends on the problem, the time needed on site, and any parts that need replacing. You call me, explain the issue in a few words, and I give you a price before I travel to you, no bad surprises at the end.",
    ],
  },
];

const faqEn = [
  {
    question: "How does a locksmith callout work in Nice?",
    answer:
      "I first listen to the problem over the phone, suggest the most suitable solution, quote a detailed price, then carry out the work on site.",
  },
  {
    question: "Who covers the cost of a lock replacement in Nice?",
    answer:
      "Generally, the owner covers locksmithing costs tied to normal wear. Damage caused by misuse remains the occupant's responsibility.",
  },
  {
    question: "How does a locksmith open a door slammed shut without a key?",
    answer:
      "Depending on the lock model, I slide a thin, rigid strip between the frame and the bolt to release the mechanism, without damaging the door.",
  },
  {
    question: "Does home insurance cover a lock replacement in Nice?",
    answer:
      "In most cases, the tenant's or owner's home insurance covers replacing a damaged lock, particularly after a break-in. Check the terms of your own contract.",
  },
  {
    question: "Can my bank card cover an emergency locksmith callout?",
    answer:
      "Some premium cards (Visa Premier, Gold Mastercard or equivalent) include locksmith assistance cover, with a reimbursement cap that varies by card and contract. If you have time before the callout, check that cap directly with your card issuer. Either way, I always provide a detailed invoice, the document you'll need for any reimbursement claim afterwards.",
  },
  {
    question: "Is a locksmith allowed to quote a price only after the work is done?",
    answer:
      "No. The locksmith trade is regulated: I'm required to give you a quote before starting any work.",
  },
  {
    question: "Is there a locksmith open near me in Nice right now?",
    answer:
      "Yes, I work 24/7 across Nice and its surrounding area, including nights, weekends and public holidays.",
  },
];

export default async function UrgenceSerrurierNicePage() {
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
        h1: "Serrurier en urgence à Nice, 24h/24 et 7j/7",
        lead: "En urgence, j'arrive en 30 minutes partout à Nice, de jour comme de nuit, le week-end et les jours fériés. Vous m'appelez, vous m'expliquez la situation, et je vous annonce le prix avant de partir. C'est moi qui décroche et moi qui viens : pas de standard, pas de sous-traitant.",
        hideProcessSteps: true,
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Urgence serrurier",
        path: "/urgence-serrurier-nice/",
        image: {
          src: "/images/serrurier-nice-depannage-reparation.webp",
          alt: "Serrurier urgence Nice",
        },
        heroTrustNote,
        extra: (
          <>
            <PriceReminder
              priceLabel="149 € à 209 € TTC"
              note="149 € en journée ; après 19 h, le week-end et les jours fériés : 189 € (porte claquée) ou 209 € (porte fermée à clé). Pièces remplacées en supplément."
              locale="fr"
            />
            <ServiceReviewsLive path="/urgence-serrurier-nice/" />
            <div className="mx-auto max-w-4xl px-4 py-10">
              <QuoteBlock locale="fr" />
            </div>
          </>
        ),
      }}
      en={{
        h1: "Emergency locksmith in Nice, 24/7 callout service",
        lead: "Stuck lock, broken key, jammed cylinder: you explain the situation, I quote a price before I travel to you, and I get it fixed cleanly, day or night.",
        sections: sectionsEn,
        faq: faqEn,
        breadcrumbLabel: "Emergency callout",
        path: "/urgence-serrurier-nice/",
        image: {
          src: "/images/serrurier-nice-depannage-reparation.webp",
          alt: "Emergency locksmith Nice",
        },
        extra: (
          <>
            <PriceReminder
              priceLabel="€149 to €209 incl. VAT"
              note="€149 incl. VAT during the day; after 7pm, on weekends and public holidays: €189 incl. VAT (slammed door) or €209 incl. VAT (locked door). Replaced parts billed separately."
              locale="en"
            />
            <div className="mx-auto max-w-4xl px-4 py-10">
              <QuoteBlock locale="en" />
            </div>
          </>
        ),
        processSteps: [
          {
            title: "Call",
            text: "You describe the fault (jammed door, seized cylinder, broken key) and I identify the most likely cause right there on the phone.",
          },
          {
            title: "Time to arrival",
            text: "I quote a price and a realistic time frame based on your area and the time of day, and let you know if anything changes on the way.",
          },
          {
            title: "Diagnosing the fault",
            text: "I examine the mechanism to confirm whether it's a jam, wear, or breakage, before choosing the least invasive method.",
          },
          {
            title: "Payment",
            text: "The price confirmed on site is what you pay, with a detailed invoice, no surprise extra charge once the fault is fixed.",
          },
        ],
      }}
    />
  );
}
