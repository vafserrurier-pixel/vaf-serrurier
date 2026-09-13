import type { Metadata } from "next";
import Link from "next/link";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import PriceReminder from "@/components/PriceReminder";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import ArticleTable from "@/components/ArticleTable";
import { ShieldIcon, WrenchIcon, CheckIcon, HandshakeIcon, DoorIcon, DoubleLockIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/metadata";

const criteresFr = [
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

const guideTocFr = [
  { id: "principe", label: "Le principe du blindage : conserver la porte, renforcer le bâti" },
  { id: "modeles", label: "Trois modèles selon votre besoin" },
  { id: "au-dela-du-prix", label: "Ce qu'il faut vérifier au-delà du prix" },
  { id: "pas-la-solution", label: "Quand ce n'est pas la bonne solution" },
  { id: "entretien", label: "Entretien : ce qui prolonge la durée de vie" },
  { id: "faq", label: "Questions complémentaires" },
];

const guideFaqFr = [
  {
    question: "Un devis moins cher avec le même niveau A2P est-il forcément équivalent ?",
    answer:
      "Pas nécessairement. Le niveau A2P encadre la résistance de l'ensemble serrure-cylindre-bâti testée, mais la qualité de pose (réglage du bâti, ajustement des paumelles) influence tout autant la résistance réelle. Un excellent produit mal posé perd une bonne partie de son intérêt.",
  },
  {
    question: "Le blindage réduit-il l'isolation phonique ou thermique ?",
    answer:
      "Non, généralement l'inverse : le bâti en acier et la garniture ajoutée renforcent aussi l'isolation par rapport à une porte d'entrée standard, même si ce n'est pas leur fonction première. Le modèle Parisien Hermétic va plus loin avec un joint hermétique fil de verre dédié à ce renfort.",
  },
  {
    question: "Faut-il graisser les paumelles d'une porte blindée ?",
    answer:
      "Un point de contrôle simple à faire soi-même une à deux fois par an, avec un lubrifiant adapté au métal, pour éviter le grincement et préserver le jeu de fermeture dans la durée.",
  },
];

const guideContentFr = (
  <>
    <p className="text-slate leading-relaxed">
      Ce guide détaille les critères concrets à vérifier au-delà du prix
      affiché, et les cas où le blindage n&apos;est pas la réponse la plus
      adaptée.
    </p>

    <div>
      <ArticleSectionHeading number={1} id="principe" level="h3" size="lg" numberStyle="plain">
        Le principe du blindage : conserver la porte, renforcer le bâti
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Contrairement à un bloc-porte neuf, le blindage conserve votre porte
        en bois existante : un système de bâti en acier vient l&apos;habiller
        et la renforcer, sans reprendre l&apos;ensemble de la menuiserie. Il
        s&apos;adresse à une porte dont le bois reste globalement sain, mais
        dont le niveau de sécurité doit être significativement relevé.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={2} id="modeles" level="h3" size="lg" numberStyle="plain">
        Trois modèles selon votre besoin
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Le <strong className="text-navy">Citadin</strong> reste la référence
        de la gamme : bâti acier 20/10e (option 25/10e), serrure en applique
        Royal Star (Little Star 3 points, Queen Star 5 points ou King Star 7
        points selon le niveau visé), cylindre européen breveté à roue
        dentée avec 4 clés à reproduction protégée, certifié BP1. Le{" "}
        <strong className="text-navy">Parisien</strong> monte en gamme avec
        des anti-pinces intégrés au bâti acier 25/10e, et peut être certifié
        jusqu&apos;à BP3 en combinant bâti 25/10e, blindage 50/10e et serrure
        7 points. Le{" "}
        <strong className="text-navy">Parisien Hermétic</strong> est une
        version économique livrée sans serrure (la vôtre est réutilisée),
        avec un joint hermétique fil de verre qui renforce l&apos;étanchéité
        acoustique et thermique.
      </p>
    </div>

    <div className="bg-steel/10 border border-navy/10 rounded-xl p-6">
      <p className="font-heading font-bold text-navy mb-4">À vérifier sur un devis, au-delà du prix</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {criteresFr.map(({ Icon, title, text }) => (
          <div key={title} className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-white text-steel shrink-0">
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
      <ArticleSectionHeading number={3} id="pas-la-solution" level="h3" size="lg" numberStyle="plain">
        Quand ce n&apos;est pas la bonne solution
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Le blindage est un excellent renfort, pas une réponse universelle.
        Deux cas où je vous oriente ailleurs :
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed mt-3">
        <li>
          <strong className="text-navy">Porte trop dégradée</strong> — le blindage renforce une porte
          existante, il ne compense pas un bois pourri ou un bâti déformé. Dans ce cas, un{" "}
          <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
            bloc-porte neuf
          </Link>{" "}
          reprend l&apos;ensemble de la menuiserie plutôt que de renforcer une base fragile.
        </li>
        <li>
          <strong className="text-navy">Besoin de personnalisation esthétique poussée</strong> — le
          blindage préserve l&apos;aspect de votre porte actuelle. Si vous cherchez un style neuf
          (vitrage, finitions design), la gamme{" "}
          <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
            bloc-porte
          </Link>{" "}
          offre un vrai choix de lignes et de matériaux.
        </li>
      </ul>
    </div>

    <div>
      <ArticleSectionHeading number={4} id="entretien" level="h3" size="lg" numberStyle="plain">
        Entretien : ce qui prolonge la durée de vie
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un graissage léger des paumelles une à deux fois par an et un
        contrôle visuel du jeu de fermeture suffisent la plupart du temps.
        Si la porte commence à résister ou à mal refermer, mieux vaut agir
        tôt : le détail des solutions selon le symptôme est sur ma page{" "}
        <Link href="/urgence-serrurier-nice/" className="text-steel underline">
          dépannage serrurier
        </Link>
        .
      </p>
    </div>
  </>
);

export const metadata: Metadata = buildMetadata({
  path: "/blindage-porte-nice/",
  title: "Blindage de porte à Nice – 2 689 € TTC | VAF",
  description:
    "Blindage de porte à Nice : renforcez votre porte existante sans la remplacer. Bâti acier, serrure en applique, certification A2P BP. 2 689 € TTC, devis sur place.",
});

const sectionsFr = [
  {
    heading: "Qu'est-ce que le blindage de porte",
    Icon: <ShieldIcon className="w-4 h-4" />,
    paragraphs: [
      "Le blindage renforce votre porte existante sans la remplacer : un système de bâti en acier vient habiller le dormant et recevoir une serrure en applique haute résistance. La porte en bois d'origine est conservée, ce qui préserve l'aspect extérieur côté palier.",
    ],
  },
  {
    heading: "Trois modèles selon votre besoin",
    Icon: <CheckIcon className="w-4 h-4" />,
    paragraphs: [
      <>
        Le Citadin (référence, certifié BP1), le Parisien (haut de gamme,
        certifiable jusqu&apos;à BP3) et le Parisien Hermétic (version
        économique, isolation renforcée) : trois modèles de la gamme{" "}
        <a
          href="https://www.valentesecurystar.com/"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          Valente Securystar
        </a>
        , fabricant français installé à Thiais depuis 1995. Le détail de
        chaque modèle est dans mon guide complet.
      </>,
    ],
  },
  {
    heading: "Pourquoi le blindage change la donne",
    Icon: <WrenchIcon className="w-4 h-4" />,
    paragraphs: [
      "Un cambrioleur met en moyenne 90 secondes pour forcer une serrure classique. Une porte blindée bien posée peut résister près de 50 minutes, un écart qui décourage la grande majorité des tentatives.",
    ],
  },
  {
    heading: "Un vrai impact sur votre assurance habitation",
    Icon: <HandshakeIcon className="w-4 h-4" />,
    paragraphs: [
      "La certification A2P est reconnue par la quasi-totalité des assureurs français et peut donner droit à une réduction de prime habitation, notamment à partir du niveau BP2. Les montants exacts varient selon les compagnies et les contrats : à vérifier directement auprès de votre assureur.",
    ],
  },
  {
    heading: "Isolation phonique et thermique, un vrai plus",
    Icon: <DoubleLockIcon className="w-4 h-4" />,
    paragraphs: [
      "Ce n'est pas l'objectif premier du blindage, mais le bâti acier et la garniture intérieure améliorent presque toujours l'isolation par rapport à une porte d'entrée standard, un vrai plus sur les paliers exposés au bruit des cages d'escalier du centre de Nice.",
    ],
  },
  {
    heading: "Aucune autorisation de copropriété nécessaire",
    Icon: <DoorIcon className="w-4 h-4" />,
    paragraphs: [
      "Tant que l'aspect extérieur côté palier reste inchangé, le blindage ne nécessite aucune autorisation de l'assemblée générale de copropriété.",
    ],
  },
];

const faqFr = [
  {
    question: "Combien coûte un blindage de porte à Nice ?",
    answer:
      "2 689 € TTC pour une configuration de référence (blindage avec serrure carénée 5 points). C'est un tarif confirmé, mais le montant final dépend du modèle choisi (Citadin, Parisien, Parisien Hermétic) et de l'état de votre porte : un devis sur place reste systématique avant tout engagement.",
  },
  {
    question: "Quelle différence avec un bloc-porte neuf ?",
    answer:
      "Le blindage conserve votre porte existante et renforce son bâti. Le bloc-porte remplace l'ensemble de la menuiserie. Si votre porte ou son bâti sont trop dégradés, voir ma page bloc-porte blindé.",
  },
  {
    question: "Faut-il une autorisation de copropriété pour faire blinder ma porte ?",
    answer:
      "Non, dans la grande majorité des cas, tant que l'aspect extérieur côté palier reste inchangé.",
  },
  {
    question: "Quelle garantie sur un blindage de porte ?",
    answer:
      "Garantie de pose de 2 ans de ma part, et garantie fabricant de 15 ans sur le matériel (gamme Valente Securystar, fabricant français) : deux garanties distinctes et cumulables.",
  },
  {
    question: "Combien de temps dure la pose d'un blindage ?",
    answer: "Généralement 2 à 3 heures, sans travaux de maçonnerie.",
  },
  {
    question: "Le blindage résiste-t-il vraiment aux cambrioleurs ?",
    answer:
      "Selon les données de Valente Securystar, le fabricant de la gamme que je pose, 95% des cambrioleurs abandonnent après 3 minutes de tentative infructueuse face à ce type de blindage. C'est une statistique du fabricant, pas une mesure indépendante, mais elle recoupe le constat général : un accès qui résiste plus de quelques minutes décourage la grande majorité des tentatives.",
  },
];

const sectionsEn = [
  {
    heading: "What door reinforcement is",
    Icon: <ShieldIcon className="w-4 h-4" />,
    paragraphs: [
      "Reinforcement strengthens your existing door without replacing it: a steel frame system covers the door frame and receives a high-resistance rim lock. Your original wooden door is kept, preserving the exterior look on the landing.",
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
        range, a French manufacturer based in Thiais since 1995. Full
        details for each model are in my complete guide.
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
    heading: "A real impact on your home insurance",
    Icon: <HandshakeIcon className="w-4 h-4" />,
    paragraphs: [
      "A2P certification is recognized by almost all French insurers and can qualify you for a reduced home insurance premium, particularly from BP2 level up. Exact amounts vary by insurer and contract: check directly with yours.",
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
      "€2,689 incl. VAT for a reference configuration (reinforcement with a 5-point shrouded lock). This price is confirmed, but the final amount depends on the model chosen (Citadin, Parisien, Parisien Hermétic) and your door's condition: an on-site quote is always required beforehand.",
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
      "A 2-year fitting warranty from me, and a 15-year manufacturer warranty on the material (Valente Securystar range, a French manufacturer): two separate, combinable warranties.",
  },
  {
    question: "How long does fitting take?",
    answer: "Generally 2 to 3 hours, with no masonry work.",
  },
  {
    question: "Does reinforcement really hold off burglars?",
    answer:
      "According to Valente Securystar, the manufacturer of the range I fit, 95% of burglars give up after 3 minutes of unsuccessful attempts against this type of reinforcement. That's a manufacturer statistic, not an independent measurement, but it matches the general pattern: an entry point that resists more than a few minutes discourages the vast majority of attempts.",
  },
];

export default function BlindagePorteNicePage() {
  return (
    <LocalizedServicePage
      fr={{
        h1: "Blindage de porte à Nice",
        lead: "Renforcer votre porte existante sans la remplacer : bâti acier, serrure en applique et cylindre haute sécurité. 2 689 € TTC pose comprise, devis confirmé avant intervention.",
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Blindage de porte",
        path: "/blindage-porte-nice/",
        image: {
          src: "/images/pool/porte-blindee-pose-serrurier-nice.webp",
          alt: "Pose d'un blindage de porte avec bâti acier par un serrurier à Nice",
        },
        sectionsVariant: "cards",
        sectionsHeading: "Ce qu'il faut savoir sur le blindage de porte",
        headingScale: "lg",
        extra: (
          <>
            <PriceReminder
              priceLabel="2 689 € TTC"
              note="Configuration de référence : blindage avec serrure carénée 5 points. Le tarif final dépend du modèle (Citadin, Parisien, Parisien Hermétic) et de l'état de votre porte, devis sur place systématique."
              locale="fr"
            />
            <div className="mx-auto max-w-4xl px-4 mt-4">
              <div className="bg-steel/10 border border-navy/10 rounded-xl p-5 sm:p-6">
                <p className="font-heading font-semibold text-navy mb-1">
                  Deux garanties distinctes, cumulables
                </p>
                <p className="text-sm text-slate leading-relaxed">
                  Garantie de pose de 2 ans de ma part sur l&apos;installation, et garantie fabricant
                  Valente Securystar de 15 ans sur le matériel, 5 ans de plus que la moyenne du
                  marché.
                </p>
              </div>
            </div>
          </>
        ),
        processSteps: [
          {
            title: "Appel",
            text: "Vous me décrivez votre porte actuelle, je vous indique si le blindage est adapté ou si un bloc-porte neuf serait plus cohérent.",
          },
          {
            title: "Rendez-vous",
            text: "Je me déplace pour évaluer l'état de votre porte et de son bâti, à l'heure qui vous convient.",
          },
          {
            title: "Choix du modèle et pose",
            text: "Je vous oriente vers le modèle adapté (Citadin, Parisien, Parisien Hermétic) et je pose l'ensemble en 2 à 3 heures, sans maçonnerie.",
          },
          {
            title: "Garantie",
            text: "Facture détaillée à l'appui, avec la garantie de pose de 2 ans et la garantie fabricant de 15 ans.",
          },
        ],
        relatedArticle: {
          href: "/blog/certification-a2p-serrure-nice/",
          label: "Certification A2P : ce que ce sigle change vraiment pour votre serrure",
        },
        guide: (
          <ServiceGuideSection readingMinutes={6} toc={guideTocFr} faq={guideFaqFr}>
            {guideContentFr}
          </ServiceGuideSection>
        ),
        guideFaqForSchema: guideFaqFr,
      }}
      en={{
        h1: "Door reinforcement in Nice",
        lead: "Reinforce your existing door without replacing it: steel frame, rim lock and high-security cylinder. €2,689 incl. VAT fitted, quote confirmed before work.",
        sections: sectionsEn,
        faq: faqEn,
        breadcrumbLabel: "Door reinforcement",
        path: "/blindage-porte-nice/",
        image: {
          src: "/images/pool/porte-blindee-pose-serrurier-nice.webp",
          alt: "Fitting a steel-frame door reinforcement by a locksmith in Nice",
        },
        sectionsVariant: "cards",
        sectionsHeading: "What to know about door reinforcement",
        headingScale: "lg",
        extra: (
          <>
            <PriceReminder
              priceLabel="€2,689 incl. VAT"
              note="Reference configuration: reinforcement with a 5-point shrouded lock. Final price depends on the model (Citadin, Parisien, Parisien Hermétic) and your door's condition, on-site quote always required."
              locale="en"
            />
            <div className="mx-auto max-w-4xl px-4 mt-4">
              <div className="bg-steel/10 border border-navy/10 rounded-xl p-5 sm:p-6">
                <p className="font-heading font-semibold text-navy mb-1">
                  Two separate, combinable warranties
                </p>
                <p className="text-sm text-slate leading-relaxed">
                  A 2-year fitting warranty from me on the installation, and a 15-year Valente
                  Securystar manufacturer warranty on the material, 5 years more than the market
                  average.
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
            text: "I visit to assess your door and its frame, at a time that suits you.",
          },
          {
            title: "Model choice and fitting",
            text: "I guide you to the right model (Citadin, Parisien, Parisien Hermétic) and fit it in 2 to 3 hours, with no masonry work.",
          },
          {
            title: "Warranty",
            text: "Detailed invoice provided, with the 2-year fitting warranty and the 15-year manufacturer warranty.",
          },
        ],
      }}
    />
  );
}
