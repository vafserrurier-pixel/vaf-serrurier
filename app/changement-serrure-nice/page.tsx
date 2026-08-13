import type { Metadata } from "next";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import BrandsSection from "@/components/BrandsSection";
import PriceReminder from "@/components/PriceReminder";
import QuoteBlock from "@/components/QuoteBlock";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/changement-serrure-nice/" },
  title: "Changement de serrure Nice – Cylindre & multipoints | VAF",
  description:
    "Remplacement de cylindre, serrure complète ou multipoints à Nice. Devis annoncé avant travaux, solution adaptée à votre porte. Appelez le 04 22 13 85 44.",
};

const sectionsFr = [
  {
    heading: "Quand faut-il changer une serrure à Nice",
    paragraphs: [
      "Un déménagement, une perte de clés, un vol ou une effraction sont les cas les plus fréquents. Une clé qui force de plus en plus, un cylindre qui accroche, ou une fermeture de moins en moins franche sont aussi des signes d'usure à ne pas ignorer. Mieux vaut changer une serrure fatiguée avant qu'elle ne lâche complètement, souvent au pire moment.",
    ],
  },
  {
    heading: "Cylindre ou serrure complète, quelle différence",
    paragraphs: [
      "Le cylindre est la pièce qui reçoit la clé et actionne le mécanisme. Son remplacement suffit souvent, et coûte nettement moins cher qu'un remplacement complet. Une serrure complète devient nécessaire quand le mécanisme lui-même — le coffre encastré dans la porte — est endommagé ou instable, ou quand il s'agit d'un modèle trop ancien pour trouver un cylindre compatible.",
    ],
  },
  {
    heading: "Serrure multipoints, confort et fiabilité au quotidien",
    paragraphs: [
      "Une serrure multipoints répartit la résistance sur plusieurs points d'ancrage (3, 5 voire 7 points selon les modèles), ce qui limite les déformations de la porte dans le temps. Elle demande en revanche un réglage précis : un mauvais alignement use la serrure prématurément et peut la faire forcer à chaque fermeture. C'est pourquoi je fais toujours un contrôle fin après la pose.",
    ],
  },
  {
    heading: "Certification A2P, utile ou pas",
    paragraphs: [
      "La certification A2P aide à comparer objectivement la résistance d'une serrure face à une tentative d'effraction. Je pose des serrures et cylindres certifiés A2P 1, 2 ou 3 étoiles selon le besoin réel de votre logement, sans viser systématiquement le niveau maximum. Ce n'est pas une obligation légale pour un logement standard. Je préfère donc vous orienter vers une sécurisation cohérente avec l'état réel de votre porte, plutôt que vers du suréquipement qui ne servira à rien si le bâti autour reste fragile.",
    ],
  },
  {
    heading: "Changement de serrure après une effraction",
    paragraphs: [
      "Après une tentative d'effraction, la priorité reste la fermeture immédiate de votre porte. Je remplace ensuite les éléments réellement endommagés — cylindre, gâche, parfois le coffre de serrure — et je stabilise l'ensemble pour éviter un nouveau risque. Je ne vous vends pas un remplacement complet si ce n'est pas nécessaire.",
    ],
  },
  {
    heading: "Ce que je fais concrètement chez vous",
    paragraphs: [
      "J'identifie d'abord le modèle de serrure en place, puis je vérifie l'alignement de la porte et du cadre. Ensuite, je propose la solution la plus cohérente avec votre budget et votre niveau d'exigence en sécurité. Je termine par plusieurs tests de fermeture et un ajustement fin, pour éviter qu'une serrure neuve ne force dès la première semaine.",
    ],
  },
];

const faqFr = [
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
      "249 € TTC pour un remplacement de cylindre européen, déplacement et main d'œuvre inclus, et sur devis pour une serrure complète. Le prix exact est toujours annoncé avant intervention.",
  },
  {
    question: "Combien de temps dure un changement de serrure ?",
    answer:
      "Un remplacement de cylindre prend généralement moins d'une heure. Une serrure complète, avec réglage fin de l'alignement, demande un peu plus de temps selon l'état de la porte.",
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
      "The cylinder is the part that takes the key and drives the mechanism. Replacing it is often enough, and costs noticeably less than a full replacement. A full lock replacement becomes necessary when the mechanism itself — the case set into the door — is damaged or loose, or too old a model to find a compatible cylinder.",
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
      "A2P certification helps objectively compare a lock's resistance to a break-in attempt. I fit locks and cylinders certified A2P 1, 2 or 3 stars depending on your home's real needs, without automatically pushing the highest level. It isn't a legal requirement for a standard home. So I'd rather guide you toward security that matches the real condition of your door, than toward over-equipping it — which won't help much if the structure around it stays weak.",
    ],
  },
  {
    heading: "Changing a lock after a break-in",
    paragraphs: [
      "After an attempted break-in, the priority is closing your door securely right away. I then replace whatever's actually damaged — cylinder, strike plate, sometimes the lock case — and stabilize the whole assembly to prevent a repeat risk. I won't sell you a full replacement if it isn't needed.",
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

export default function ChangementSerrureNicePage() {
  return (
    <LocalizedServicePage
      fr={{
        h1: "Changement de serrure à Nice",
        lead: "Remplacement de cylindre, de serrure complète ou multipoints : je vous propose une solution cohérente avec votre porte, sans suréquipement inutile, devis annoncé avant travaux.",
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Changement de serrure",
        path: "/changement-serrure-nice/",
        image: {
          src: "/images/serrurier-nice-changement-de-serrure.webp",
          alt: "Cylindre de serrure Heraclès neuf et poignée, changement de serrure à Nice",
        },
        extra: (
          <>
            <div className="py-10">
              <PriceReminder
                priceLabel="À partir de 249 € TTC pour un cylindre standard (haute sécurité et serrure complète sur devis)"
                locale="fr"
              />
            </div>
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
        ),
        relatedServices: [
          { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
          { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
          { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
          { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
        ],
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
          alt: "New Heraclès lock cylinder and handle, lock change in Nice",
        },
        extra: (
          <>
            <div className="py-10">
              <PriceReminder
                priceLabel="From €249 incl. VAT for a standard cylinder (high-security and full lock quoted on assessment)"
                locale="en"
              />
            </div>
            <section className="mx-auto max-w-4xl px-4 py-10">
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
        relatedServices: [
          { href: "/ouverture-de-porte-nice/", label: "Door opening" },
          { href: "/depannage-serrurier-nice/", label: "Emergency callout" },
          { href: "/mis-en-securite-apres-effraction-nice/", label: "After a break-in" },
          { href: "/tarifs-serrurier-nice/", label: "See all pricing" },
        ],
      }}
    />
  );
}
