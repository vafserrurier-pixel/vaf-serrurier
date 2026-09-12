import type { Metadata } from "next";
import Link from "next/link";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import PriceReminder from "@/components/PriceReminder";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import { ShieldIcon, WrenchIcon, CheckIcon, HandshakeIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/metadata";

const criteres = [
  {
    Icon: ShieldIcon,
    title: "Cornières anti-pince",
    text: "Empêchent d'introduire un pied-de-biche entre le dormant et le battant.",
  },
  {
    Icon: WrenchIcon,
    title: "Paumelles anti-dégondage",
    text: "Bloquent le retrait de la porte par les gonds, même une fois les paumelles visibles dégagées.",
  },
  {
    Icon: CheckIcon,
    title: "Épaisseur et nature de la tôle",
    text: "Un chiffre à demander précisément : elle conditionne la résistance réelle, au-delà du seul niveau de serrure.",
  },
  {
    Icon: HandshakeIcon,
    title: "Facture conforme aux assureurs",
    text: "Mentionne le niveau de certification posé, document généralement demandé pour la réduction de prime.",
  },
];

const guideToc = [
  { id: "decision", label: "Bloc-porte ou blindage : la checklist de décision" },
  { id: "verifier", label: "Ce qu'il faut vérifier au-delà du niveau de serrure" },
  { id: "confort", label: "Isolation phonique et thermique : un effet secondaire réel" },
  { id: "entretien", label: "Entretien : ce qui prolonge la durée de vie" },
  { id: "faq", label: "Questions complémentaires" },
];

const guideFaq = [
  {
    question: "Un devis moins cher avec le même niveau A2P est-il forcément équivalent ?",
    answer:
      "Pas nécessairement. Le niveau A2P encadre la résistance de l'ensemble serrure-cylindre-porte testée, mais la qualité de pose (réglage du bâti, ajustement des paumelles) influence tout autant la résistance réelle. Un excellent produit mal posé perd une bonne partie de son intérêt.",
  },
  {
    question: "Le blindage réduit-il l'isolation phonique ou thermique ?",
    answer:
      "Non, généralement l'inverse : la plaque d'acier et la garniture ajoutées renforcent aussi l'isolation par rapport à une porte d'entrée standard, même si ce n'est pas leur fonction première.",
  },
  {
    question: "Faut-il graisser les paumelles d'une porte blindée ?",
    answer:
      "Un point de contrôle simple à faire soi-même une à deux fois par an, avec un lubrifiant adapté au métal, pour éviter le grincement et préserver le jeu de fermeture dans la durée.",
  },
  {
    question: "Combien de temps dure l'installation d'une porte blindée ?",
    answer:
      "Comptez généralement une demi-journée pour un blindage, une journée complète pour un bloc-porte complet, selon l'état du bâti existant et les ajustements nécessaires.",
  },
];

const guideContent = (
  <>
    <p className="text-slate leading-relaxed">
      Ce guide détaille les critères concrets à vérifier au-delà du seul
      niveau A2P déjà présenté plus haut, pour comparer un devis à un autre en
      toute connaissance de cause.
    </p>

    <div className="bg-cream rounded-xl p-6 border border-navy/10">
      <p className="font-heading font-bold text-navy mb-4">À vérifier sur un devis, au-delà du prix</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {criteres.map(({ Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-steel/10 text-steel shrink-0">
              <Icon className="w-4 h-4" />
            </span>
            <div>
              <p className="font-heading font-semibold text-navy text-sm">{title}</p>
              <p className="text-sm text-slate leading-snug mt-0.5">{text}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <ArticleSectionHeading number={1} id="decision" level="h3">
        Bloc-porte ou blindage : la checklist de décision
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Trois questions suffisent la plupart du temps à orienter le choix :
        le dormant actuel est-il sain (pas de bois pourri, pas de déformation
        visible) ? Le règlement de copropriété impose-t-il une apparence
        identique côté palier ? Le budget cible correspond-il plutôt à un
        renfort ciblé ou à un remplacement complet ? Un dormant en bon état
        et une contrainte esthétique forte orientent vers le blindage ; un
        bâti fatigué ou un objectif de résistance maximale orientent vers un
        bloc-porte complet.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={2} id="verifier" level="h3">
        Ce qu&apos;il faut vérifier au-delà du niveau de serrure
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Le niveau A2P (BP1, BP2, BP3) résume une résistance testée en
        laboratoire, mais deux devis au même niveau ne se valent pas
        forcément sur le terrain. Les cornières anti-pince, qui empêchent
        d&apos;insérer un pied-de-biche entre le dormant et le battant, et les
        paumelles anti-dégondage, qui empêchent de sortir la porte par les
        gonds, comptent parmi les éléments qui font la différence en usage
        réel. Je les inclus systématiquement sur mes installations, et je
        recommande de les demander explicitement à tout professionnel.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={3} id="confort" level="h3">
        Isolation phonique et thermique : un effet secondaire réel
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Ce n&apos;est pas l&apos;objectif premier d&apos;une porte blindée, mais
        l&apos;épaisseur de la tôle et la garniture intérieure améliorent
        presque toujours l&apos;isolation par rapport à une porte d&apos;entrée
        standard, un vrai plus sur les paliers exposés au bruit des cages
        d&apos;escalier du centre de Nice.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={4} id="entretien" level="h3">
        Entretien : ce qui prolonge la durée de vie
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un graissage léger des paumelles une à deux fois par an et un
        contrôle visuel du jeu de fermeture suffisent la plupart du temps.
        Si la porte commence à résister ou à mal refermer, mieux vaut agir
        tôt : le détail des solutions selon le symptôme est sur ma page{" "}
        <Link href="/depannage-serrurier-nice/" className="text-steel underline">
          dépannage serrurier
        </Link>
        .
      </p>
    </div>
  </>
);

export const metadata: Metadata = buildMetadata({
  path: "/installation-porte-blindee-nice/",
  title: "Porte blindée Nice – Blindage & bloc-porte A2P | VAF",
  description: "Porte blindée ou blindage d'une porte existante à Nice : diagnostic, devis annoncé, pose soignée. Certification A2P BP expliquée simplement.",
});

const sectionsFr = [
  {
    heading: "Porte blindée ou blindage, que choisir",
    paragraphs: [
      "Deux solutions existent : le bloc-porte blindé complet, ou le blindage qui renforce une porte existante. Le choix dépend de l'état actuel de votre porte et de votre bâti : un bloc-porte convient mieux quand l'ensemble est fatigué, le blindage quand la porte reste saine et robuste.",
    ],
  },
  {
    heading: "En copropriété à Nice",
    paragraphs: [
      <>
            Les règlements de{" "}
            <Link href="/agences-syndics-nice/" className="text-steel underline">
              copropriété
            </Link>{" "}
            imposent parfois une apparence extérieure identique sur le palier. Le blindage préserve souvent mieux l&apos;esthétique existante, tandis qu&apos;un bloc-porte doit respecter les finitions visibles imposées.
          </>,
    ],
  },
  {
    heading: "Ce qui fait vraiment la sécurité d'une porte",
    paragraphs: [
      "Une serrure solide ne suffit pas : le bâti, les points d'ancrage et les paumelles comptent tout autant. Une porte bien posée et bien réglée dure plus longtemps qu'une installation expédiée, je prends le temps nécessaire pour l'ajustement.",
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
      "La certification A2P est reconnue par la quasi-totalité des assureurs français. Elle conditionne souvent la couverture vol de votre contrat, et peut donner droit à une réduction de prime habitation, notamment à partir du niveau BP2. Les montants exacts varient selon les compagnies et les contrats : à vérifier directement auprès de votre assureur. Je vous fournis une facture détaillée mentionnant le niveau de certification posé. C'est le document généralement demandé pour faire valoir cette amélioration de sécurité auprès de votre assurance.",
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
      "Two solutions exist: a full armored door block, or reinforcement that strengthens an existing door. The choice depends on the current condition of your door and building: a full door block suits a tired setup better, reinforcement suits a door that's still sound and sturdy.",
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
      "A solid lock isn't enough: the frame, the anchor points and the hinges matter just as much. A door fitted and adjusted properly lasts longer than a rushed install, I take the time needed to get the adjustment right.",
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
      "A2P certification is recognized by almost all French insurers. It often affects the theft cover in your contract, and can qualify you for a reduced home insurance premium, particularly from BP2 level up. Exact amounts vary by insurer and contract: check directly with yours. I provide a detailed invoice stating the certification level fitted. It's the document usually required to claim this security upgrade with your insurer.",
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
            priceLabel="à partir de 2 689 € TTC"
            note="Prix pour une porte de taille standard avec serrure 5 points en applique, un devis sur place reste systématique avant tout engagement"
            locale="fr"
          />
        ),
        processSteps: [
          {
            title: "Appel",
            text: "Vous me décrivez votre porte actuelle et vos priorités (sécurité, isolation, esthétique) pour un premier avis dès le téléphone.",
          },
          {
            title: "Rendez-vous",
            text: "Ce n'est pas toujours une urgence : je fixe un rendez-vous pour évaluer votre porte sur place, à l'heure qui vous convient, tout en restant réactif si besoin.",
          },
          {
            title: "Évaluation de la porte et du bâti",
            text: "J'examine l'état du bâti et de la porte existante pour déterminer si un blindage suffit ou si un bloc-porte complet est nécessaire.",
          },
          {
            title: "Règlement",
            text: "Le devis détaillé est validé avant le début des travaux, facture conforme aux assureurs à l'appui.",
          },
        ],
        relatedServices: [
          { href: "/changement-serrure-nice/", label: "Changement de serrure" },
          { href: "/mise-en-securite-apres-effraction-nice/", label: "Après effraction" },
          { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
          { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
          { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
          { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
          { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
        ],
        relatedArticle: {
          href: "/blog/certification-a2p-serrure-nice/",
          label: "Certification A2P : ce que ce sigle change vraiment pour votre serrure",
        },
        guide: (
          <ServiceGuideSection readingMinutes={5} toc={guideToc} faq={guideFaq}>
            {guideContent}
          </ServiceGuideSection>
        ),
        guideFaqForSchema: guideFaq,
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
            priceLabel="from €2,689 incl. VAT"
            note="Price for a standard door size with a 5-point rim lock, an on-site quote is always required before any commitment"
            locale="en"
          />
        ),
        processSteps: [
          {
            title: "Call",
            text: "You describe your current door and your priorities (security, insulation, appearance) for a first opinion right there on the phone.",
          },
          {
            title: "Appointment",
            text: "This isn't always urgent: I schedule a visit to assess your door on site, at a time that suits you, while staying responsive if needed.",
          },
          {
            title: "Assessing the door and the building",
            text: "I examine the condition of the building and the existing door to determine whether reinforcement is enough or a full armored door block is needed.",
          },
          {
            title: "Payment",
            text: "The detailed quote is confirmed before work starts, with an invoice that meets insurer requirements.",
          },
        ],
        relatedServices: [
          { href: "/changement-serrure-nice/", label: "Lock change" },
          { href: "/mise-en-securite-apres-effraction-nice/", label: "After a break-in" },
          { href: "/depannage-serrurier-nice/", label: "Emergency callout" },
          { href: "/ouverture-de-coffre-fort-nice/", label: "Safe opening" },
          { href: "/installation-coffre-fort-nice/", label: "Safe installation" },
          { href: "/serrure-carenee-nice/", label: "5-point shrouded lock" },
          { href: "/tarifs-serrurier-nice/", label: "See all pricing" },
        ],
      }}
    />
  );
}
