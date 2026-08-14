import type { Metadata } from "next";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import PriceReminder from "@/components/PriceReminder";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/installation-porte-blindee-nice/" },
  title: "Porte blindée Nice – Blindage & bloc-porte A2P | VAF",
  description:
    "Porte blindée ou blindage d'une porte existante à Nice : diagnostic, devis annoncé, pose soignée. Certification A2P BP expliquée simplement.",
};

const sectionsFr = [
  {
    heading: "Porte blindée ou blindage, que choisir",
    paragraphs: [
      "Deux solutions existent : le bloc-porte blindé complet, ou le blindage qui renforce une porte existante. Le choix dépend de l'état actuel de votre porte et de votre bâti — un bloc-porte convient mieux quand l'ensemble est fatigué, le blindage quand la porte reste saine et robuste.",
    ],
  },
  {
    heading: "En copropriété à Nice",
    paragraphs: [
      "Les règlements de copropriété imposent parfois une apparence extérieure identique sur le palier. Le blindage préserve souvent mieux l'esthétique existante, tandis qu'un bloc-porte doit respecter les finitions visibles imposées.",
    ],
  },
  {
    heading: "Ce qui fait vraiment la sécurité d'une porte",
    paragraphs: [
      "Une serrure solide ne suffit pas : le bâti, les points d'ancrage et les paumelles comptent tout autant. Une porte bien posée et bien réglée dure plus longtemps qu'une installation expédiée — je prends le temps nécessaire pour l'ajustement.",
      "Un cambrioleur met en moyenne 90 secondes pour forcer une serrure classique. Une porte blindée bien posée peut résister près de 50 minutes.",
    ],
  },
  {
    heading: "Comprendre la certification A2P BP",
    paragraphs: [
      "La certification A2P classe les blocs-portes selon des niveaux de résistance : BP1, BP2, BP3. Une porte A2P BP1 possède une serrure 3 points minimum et résiste aux tentatives d'effraction pendant au moins 5 minutes. C'est un repère utile pour comparer, mais une excellente porte mal posée perd tout son intérêt.",
    ],
  },
  {
    heading: "Déroulé d'une installation",
    paragraphs: [
      "Je prends le temps de comprendre le besoin, et j'observe l'entrée et ses contraintes. Je propose ensuite une solution cohérente, avec un devis annoncé avant tout engagement. Sur place, je protège les zones de passage, je dépose l'ancienne porte proprement, puis je prépare le support. Je pose et j'ajuste finement, je teste plusieurs fois la fermeture, et j'explique enfin l'entretien à prévoir.",
    ],
  },
  {
    heading: "Ce qui fait varier le prix d'une porte blindée",
    paragraphs: [
      "Le choix entre blindage et bloc-porte complet est le facteur le plus déterminant. Viennent ensuite le niveau de serrure (multipoints, certification A2P), le cylindre, les finitions visibles côté palier, et la configuration du chantier. Un accès compliqué en étage élevé sans ascenseur, par exemple, rallonge la manutention. Un devis détaillé, annoncé avant tout engagement, tient compte de chacun de ces éléments.",
    ],
  },
  {
    heading: "Un impact réel sur votre assurance habitation",
    paragraphs: [
      "La certification A2P est reconnue par la quasi-totalité des assureurs français. Elle conditionne souvent la couverture vol de votre contrat, et peut donner droit à une réduction de prime habitation, notamment à partir du niveau BP2. Les montants exacts varient selon les compagnies et les contrats — à vérifier directement auprès de votre assureur. Je vous fournis une facture détaillée mentionnant le niveau de certification posé. C'est le document généralement demandé pour faire valoir cette amélioration de sécurité auprès de votre assurance.",
    ],
  },
];

const faqFr = [
  {
    question: "Comment savoir si ma porte blindée est aux normes ?",
    answer:
      "Une serrure de porte blindée conforme comporte plusieurs points de fermeture (2, 3, 5 voire 7) associés à un cylindre et une serrure certifiés A2P.",
  },
  {
    question: "Qu'est-ce qu'une porte A2P BP1 ?",
    answer:
      "Une porte A2P BP1 possède une serrure 3 points minimum et résiste aux tentatives d'effraction pendant au moins 5 minutes, selon un test normalisé.",
  },
  {
    question: "Quels sont les avantages réels d'une porte blindée ?",
    answer:
      "Là où une serrure classique cède en environ 90 secondes, une porte blindée bien posée peut résister près de 50 minutes à une tentative d'effraction.",
  },
  {
    question: "Qui installe une porte blindée à Nice ?",
    answer:
      "J'interviens moi-même, du diagnostic à la pose finale, en tant qu'artisan serrurier spécialisé dans le blindage de porte.",
  },
  {
    question: "Quel est le poids d'une porte blindée ?",
    answer:
      "Pour des dimensions courantes (largeur 1,10 m, hauteur 2,20 m), comptez entre 130 et 180 kg, davantage si la porte offre en plus une résistance au feu.",
  },
  {
    question: "Puis-je installer une porte blindée en copropriété à Nice ?",
    answer:
      "Oui, dans la grande majorité des cas, mais le règlement de copropriété peut imposer une apparence extérieure identique sur le palier. Le blindage d'une porte existante est souvent la solution la plus simple à faire accepter, car il ne change pas l'aspect vu du couloir.",
  },
  {
    question: "Une porte blindée fait-elle vraiment baisser ma prime d'assurance ?",
    answer:
      "Dans la majorité des cas, oui, à partir du niveau A2P BP2. Le montant de la réduction dépend de votre assureur et de votre contrat : je vous conseille de vérifier ce point directement auprès de lui, muni de la facture détaillée que je vous remets.",
  },
];

const sectionsEn = [
  {
    heading: "Security door or reinforcement: which to choose",
    paragraphs: [
      "Two solutions exist: a full armored door block, or reinforcement that strengthens an existing door. The choice depends on the current condition of your door and building — a full door block suits a tired setup better, reinforcement suits a door that's still sound and sturdy.",
    ],
  },
  {
    heading: "In an apartment building in Nice",
    paragraphs: [
      "Building bylaws sometimes require an identical exterior appearance on the landing. Reinforcement often preserves the existing look better, while a full door block has to respect the required visible finish.",
    ],
  },
  {
    heading: "What actually makes a door secure",
    paragraphs: [
      "A solid lock isn't enough: the frame, the anchor points and the hinges matter just as much. A door fitted and adjusted properly lasts longer than a rushed install — I take the time needed to get the adjustment right.",
      "A burglar takes about 90 seconds on average to force a standard lock. A well-fitted security door can hold out for nearly 50 minutes.",
    ],
  },
  {
    heading: "Understanding A2P BP certification",
    paragraphs: [
      "A2P certification ranks door blocks by resistance level: BP1, BP2, BP3. An A2P BP1 door has at least a 3-point lock and resists break-in attempts for at least 5 minutes. It's a useful benchmark for comparison, but an excellent door poorly fitted loses all its value.",
    ],
  },
  {
    heading: "How an installation goes",
    paragraphs: [
      "I take the time to understand the need, and look at the entrance and its constraints. I then suggest a solution that fits, with a price quoted before any commitment. On site, I protect the walkways, remove the old door cleanly, then prepare the frame. I fit and fine-adjust, test the closing several times, and finish by explaining the upkeep to expect.",
    ],
  },
  {
    heading: "What makes the price of a security door vary",
    paragraphs: [
      "The choice between reinforcement and a full door block is the biggest factor. Next come the lock level (multipoint, A2P certification), the cylinder, the visible finish on the landing side, and the site setup. Awkward access on a high floor with no lift, for example, adds handling time. A detailed quote, given before any commitment, accounts for each of these factors.",
    ],
  },
  {
    heading: "A real impact on your home insurance",
    paragraphs: [
      "A2P certification is recognized by almost all French insurers. It often affects the theft cover in your contract, and can qualify you for a reduced home insurance premium, particularly from BP2 level up. Exact amounts vary by insurer and contract — check directly with yours. I provide a detailed invoice stating the certification level fitted. It's the document usually required to claim this security upgrade with your insurer.",
    ],
  },
];

const faqEn = [
  {
    question: "How do I know if my security door meets current standards?",
    answer:
      "A compliant security door lock has several locking points (2, 3, 5 or even 7) combined with an A2P-certified cylinder and lock.",
  },
  {
    question: "What is an A2P BP1 door?",
    answer:
      "An A2P BP1 door has at least a 3-point lock and resists break-in attempts for at least 5 minutes, under a standardized test.",
  },
  {
    question: "What are the real benefits of a security door?",
    answer:
      "Where a standard lock gives way in about 90 seconds, a well-fitted security door can resist a break-in attempt for nearly 50 minutes.",
  },
  {
    question: "Who installs security doors in Nice?",
    answer:
      "I handle it myself, from diagnosis to final fitting, as a locksmith specialized in door reinforcement.",
  },
  {
    question: "How much does a security door weigh?",
    answer:
      "For common dimensions (1.10 m wide, 2.20 m tall), expect between 130 and 180 kg, more if the door also offers fire resistance.",
  },
  {
    question: "Can I install a security door in an apartment building in Nice?",
    answer:
      "Yes, in most cases, though the building bylaws may require an identical exterior look on the landing. Reinforcing an existing door is often the easiest solution to get approved, since it doesn't change the appearance seen from the hallway.",
  },
  {
    question: "Does a security door really lower my insurance premium?",
    answer:
      "In most cases, yes, from A2P BP2 level up. The size of the reduction depends on your insurer and contract: I'd recommend checking directly with them, with the detailed invoice I provide.",
  },
];

export default function InstallationPorteBlindeeNicePage() {
  return (
    <LocalizedServicePage
      fr={{
        h1: "Installation de porte blindée à Nice",
        lead: "Bloc-porte blindé complet ou blindage d'une porte existante : je vous aide à choisir la solution adaptée à votre porte et à votre bâti, devis annoncé avant intervention.",
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Installation porte blindée",
        path: "/installation-porte-blindee-nice/",
        image: {
          src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
          alt: "Serrurier posant une serrure multipoints sur une porte à Nice",
        },
        extra: (
          <PriceReminder
            priceLabel="1 490 € TTC"
            note="Devis détaillé confirmé avant tout engagement, selon votre porte"
            locale="fr"
          />
        ),
        relatedServices: [
          { href: "/changement-serrure-nice/", label: "Changement de serrure" },
          { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
          { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
          { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
          { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
        ],
      }}
      en={{
        h1: "Security door installation in Nice",
        lead: "Full armored door block or reinforcing an existing door: I help you choose the solution suited to your door and your building, price quoted before the work starts.",
        sections: sectionsEn,
        faq: faqEn,
        breadcrumbLabel: "Security door installation",
        path: "/installation-porte-blindee-nice/",
        image: {
          src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
          alt: "Locksmith fitting a multipoint lock on a door in Nice",
        },
        extra: (
          <PriceReminder
            priceLabel="€1,490 incl. VAT"
            note="Detailed quote confirmed before any commitment, based on your door"
            locale="en"
          />
        ),
        relatedServices: [
          { href: "/changement-serrure-nice/", label: "Lock change" },
          { href: "/mis-en-securite-apres-effraction-nice/", label: "After a break-in" },
          { href: "/depannage-serrurier-nice/", label: "Emergency callout" },
          { href: "/ouverture-de-coffre-fort-nice/", label: "Safe opening" },
          { href: "/tarifs-serrurier-nice/", label: "See all pricing" },
        ],
      }}
    />
  );
}
