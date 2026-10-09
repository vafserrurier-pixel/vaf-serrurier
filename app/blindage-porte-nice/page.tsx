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
    title: "Facture détaillée",
    text: "Mentionne le niveau de certification posé : le document à présenter à votre assureur.",
  },
];

const guideTocFr = [
  { id: "principe", label: "Le principe du blindage : conserver la porte, renforcer le bâti" },
  { id: "modeles", label: "Trois modèles selon votre besoin" },
  { id: "au-dela-du-prix", label: "Ce qu'il faut vérifier au-delà du prix" },
  { id: "pas-la-solution", label: "Quand ce n'est pas la bonne solution" },
  { id: "devis", label: "Prix, devis, acompte et paiement" },
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
        Le blindage est toujours possible tant que votre porte est viable :
        bois sain, bâti en état. Il ne change pas l&apos;aspect extérieur de la
        porte, ce qui compte en copropriété. Ce n&apos;est pas une réponse
        universelle pour autant. Deux cas où je vous oriente ailleurs :
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed mt-3">
        <li>
          <strong className="text-navy">Porte trop dégradée</strong> : le blindage renforce une porte
          existante, il ne compense pas un bois pourri ou un bâti déformé. Dans ce cas, un{" "}
          <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
            bloc-porte neuf
          </Link>{" "}
          reprend l&apos;ensemble de la menuiserie plutôt que de renforcer une base fragile.
        </li>
        <li>
          <strong className="text-navy">Besoin de personnalisation esthétique poussée</strong> : le
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
      <ArticleSectionHeading number={4} id="devis" level="h3" size="lg" numberStyle="plain">
        Prix, devis, acompte et paiement
      </ArticleSectionHeading>
      <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed">
        <li>
          <strong className="text-navy">Le prix</strong> : le modèle Citadin démarre à 2 689 € TTC,
          pose comprise. Le Parisien et le Parisien Hermétic sont chiffrés sur devis.
        </li>
        <li>
          <strong className="text-navy">Le devis</strong> : la visite sur place et le devis sont
          gratuits, et le devis vous est remis sous 24h.
        </li>
        <li>
          <strong className="text-navy">La pose</strong> : elle dure environ 4 heures, sans travaux
          de maçonnerie.
        </li>
        <li>
          <strong className="text-navy">L&apos;acompte</strong> : 30 % à la validation du devis,
          pour ce type de travaux.
        </li>
        <li>
          <strong className="text-navy">Le paiement</strong> : carte bancaire, espèces ou virement,
          avec une facture détaillée envoyée par e-mail.
        </li>
      </ul>
    </div>

    <div>
      <ArticleSectionHeading number={5} id="entretien" level="h3" size="lg" numberStyle="plain">
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
  title: "Blindage de porte à Nice – Garantie fabricant 15 ans",
  description:
    "Blindage de porte à Nice : renforcez votre porte existante sans la remplacer. Bâti acier, serrure en applique, certification A2P BP. Visite et devis gratuits sur place.",
});

const sectionsFr = [
  {
    heading: "Qu'est-ce que le blindage de porte",
    Icon: <ShieldIcon className="w-4 h-4" />,
    paragraphs: [
      "Le blindage renforce votre porte existante sans la remplacer : un système de bâti en acier vient habiller le dormant et recevoir une serrure en applique haute résistance. La porte en bois d'origine est conservée, ce qui préserve l'aspect extérieur côté palier. Le résultat est une véritable porte blindée, sans changer de menuiserie ni de porte d'origine.",
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
        chaque modèle est dans mon guide complet. Le Citadin démarre à 2 689 €
        TTC, pose comprise ; le Parisien et le Parisien Hermétic sont sur devis.
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
    heading: "Votre assurance habitation",
    Icon: <HandshakeIcon className="w-4 h-4" />,
    paragraphs: [
      "Certains assureurs tiennent compte de la certification A2P d'une porte, d'autres non : cela dépend de votre contrat, et je ne m'engage sur aucune réduction de prime. Je vous remets une facture détaillée qui mentionne le niveau de certification posé, à présenter à votre assureur.",
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
      "À partir de 2 689 € TTC avec le modèle Citadin, pose comprise. Le Parisien et le Parisien Hermétic sont chiffrés sur devis, et le montant final dépend du modèle choisi et de l'état de votre porte. La visite sur place et le devis sont gratuits, le devis vous est remis sous 24h, avant tout engagement.",
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
      "Le matériel posé est couvert par la garantie fabricant de 15 ans (gamme Valente Securystar, fabricant français).",
  },
  {
    question: "Combien de temps dure la pose d'un blindage ?",
    answer: "Environ 4 heures, sans travaux de maçonnerie.",
  },
  {
    question: "Peut-on blinder n'importe quelle porte ?",
    answer:
      "Le blindage est toujours possible tant que la porte est viable, c'est-à-dire un bois sain et un bâti en état. Si le bois est pourri ou le bâti déformé, je vous oriente vers un bloc-porte neuf, qui reprend toute la menuiserie.",
  },
  {
    question: "Le blindage change-t-il l'aspect de ma porte ?",
    answer:
      "Non. Votre porte d'origine est conservée : l'aspect extérieur, côté palier, ne change pas.",
  },
  {
    question: "Faut-il verser un acompte et comment payer ?",
    answer:
      "Pour ce type de travaux, un acompte de 30 % est demandé à la validation du devis. Le paiement se fait par carte bancaire, espèces ou virement, et la facture détaillée vous est envoyée par e-mail.",
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
        range, a French manufacturer based in Thiais since 1995. Full
        details for each model are in my complete guide. The Citadin starts at
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

export default function BlindagePorteNicePage() {
  return (
    <LocalizedServicePage
      fr={{
        h1: "Blindage de porte à Nice : renforcer une porte blindée existante",
        lead: "Transformer votre porte existante en porte blindée sans la remplacer : bâti acier, serrure en applique et cylindre haute sécurité. À partir de 2 689 € TTC pose comprise (modèle Citadin), devis gratuit confirmé avant intervention.",
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Blindage de porte",
        path: "/blindage-porte-nice/",
        image: {
          src: "/images/pool/porte-blindee-pose-serrurier-nice.webp",
          alt: "Blindage de porte Nice",
        },
        sectionsVariant: "cards",
        sectionsHeading: "Ce qu'il faut savoir sur le blindage de porte",
        headingScale: "lg",
        extra: (
          <>
            <PriceReminder
              priceLabel="à partir de 2 689 € TTC"
              note="Modèle Citadin, pose comprise. Le Parisien et le Parisien Hermétic sont sur devis. Visite et devis gratuits, devis remis sous 24h."
              locale="fr"
            />
            <div className="mx-auto max-w-4xl px-4 mt-4">
              <div className="bg-steel/10 border border-navy/10 rounded-xl p-5 sm:p-6">
                <p className="font-heading font-semibold text-navy mb-1">
                  Garantie fabricant de 15 ans
                </p>
                <p className="text-sm text-slate leading-relaxed">
                  Le matériel posé est couvert par la garantie fabricant Valente Securystar de 15 ans.
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
            text: "Je me déplace pour évaluer l'état de votre porte et de son bâti, à l'heure qui vous convient. La visite et le devis sont gratuits, le devis vous est remis sous 24h.",
          },
          {
            title: "Choix du modèle et pose",
            text: "Je vous oriente vers le modèle adapté (Citadin, Parisien, Parisien Hermétic) et je pose l'ensemble en 4 heures environ, sans maçonnerie. Un acompte de 30 % est demandé à la validation du devis.",
          },
          {
            title: "Garantie",
            text: "Facture détaillée envoyée par e-mail, avec la garantie fabricant de 15 ans sur le matériel.",
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
