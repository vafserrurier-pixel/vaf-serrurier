import type { Metadata } from "next";
import Link from "next/link";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import PriceReminder from "@/components/PriceReminder";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import ArticleTable from "@/components/ArticleTable";
import SituationSelector, { type Situation } from "@/components/SituationSelector";
import {
  DoorIcon,
  KeyIcon,
  WrenchIcon,
  ShieldIcon,
  HandshakeIcon,
  StarIcon,
  KeyQuestionIcon,
  BrokenKeyIcon,
  GearIcon,
  DoubleLockIcon,
  HeartIcon,
} from "@/components/Icons";
import { business } from "@/lib/business";
import { fallbackReviews } from "@/lib/reviews";
import { buildMetadata } from "@/lib/metadata";

const situations: Situation[] = [
  {
    Icon: <DoorIcon className="w-4 h-4" />,
    title: "Porte claquée",
    text: "Les clés sont restées à l'intérieur, mais la porte n'est pas verrouillée à clé.",
    anchorId: "diagnostic",
  },
  {
    Icon: <KeyQuestionIcon className="w-4 h-4" />,
    title: "Clé perdue ou volée",
    text: "Porte verrouillée, sans clé disponible pour l'ouvrir.",
    anchorId: "situation-cle-perdue",
  },
  {
    Icon: <BrokenKeyIcon className="w-4 h-4" />,
    title: "Clé cassée dans la serrure",
    text: "Le fragment reste coincé dans le cylindre, la clé ne tourne plus.",
    anchorId: "situation-cle-cassee",
  },
  {
    Icon: <GearIcon className="w-4 h-4" />,
    title: "Serrure grippée ou bloquée",
    text: "Le mécanisme résiste, avec ou sans clé, souvent après une usure progressive.",
    anchorId: "situation-serrure-grippee",
  },
  {
    Icon: <DoubleLockIcon className="w-4 h-4" />,
    title: "Porte verrouillée à double tour",
    text: "Le pêne dormant est engagé, la méthode radio ne fonctionne plus.",
    anchorId: "situation-double-tour",
  },
  {
    Icon: <HeartIcon className="w-4 h-4" />,
    title: "Personne vulnérable à l'intérieur",
    text: "Enfant, personne âgée ou animal bloqué seul : situation prioritaire, à signaler dès l'appel.",
    anchorId: "prioritaire",
    priority: true,
  },
];

const guideToc = [
  { id: "diagnostic", label: "Reconnaître sa situation avant d'appeler" },
  { id: "technique", label: "Porte verrouillée sans clé : quelle méthode selon votre cas" },
  { id: "prioritaire", label: "Cas prioritaires : personne ou animal à l'intérieur" },
  { id: "criteres", label: "Quand une ouverture sans casse devient peu réaliste" },
  { id: "tarifs", label: "Tarifs indicatifs selon votre situation" },
  { id: "apres", label: "Après l'ouverture : faut-il changer le cylindre ?" },
  { id: "faq", label: "Questions complémentaires" },
];

const guideFaq = [
  {
    question: "Le crochetage (ouverture fine, sans aucune casse) est-il toujours possible ?",
    answer:
      "Non. C'est une technique réelle, utilisée par les serruriers professionnels, mais elle demande du temps et ne fonctionne pas sur tous les cylindres selon leur niveau de sécurité. Passé un certain temps sans résultat, une méthode plus directe (perçage du cylindre) devient plus raisonnable qu'un forçage prolongé.",
  },
  {
    question: "Combien de temps prend une ouverture de porte verrouillée sans clé ?",
    answer:
      "Cela dépend entièrement du type de cylindre et de son état. Une porte claquée se résout en quelques minutes ; une porte verrouillée sur un cylindre résistant peut demander plus de temps, sans que je puisse garantir un délai avant d'avoir vu la serrure.",
  },
  {
    question: "Le cylindre est-il toujours remplacé après une ouverture destructive ?",
    answer:
      "Oui, dans la quasi-totalité des cas : un cylindre percé ou forcé ne remplit plus correctement sa fonction de sécurité une fois l'opération terminée. Le remplacement est inclus dans l'intervention, jamais annoncé après coup.",
  },
  {
    question: "Que faire si une personne âgée, un enfant ou un animal est seul à l'intérieur ?",
    answer:
      "Signalez-le dès l'appel : c'est traité en priorité absolue. Selon la situation, une coordination avec les pompiers reste possible en complément de mon intervention.",
  },
  {
    question: "Une porte verrouillée à double tour est-elle plus longue à ouvrir qu'une porte à simple tour ?",
    answer:
      "Généralement oui, puisque le pêne dormant est engagé plus profondément et que la méthode radio, efficace sur une porte simplement claquée, ne s'applique plus.",
  },
  {
    question: "Dois-je rester dehors pendant toute l'intervention ?",
    answer:
      "Pas nécessairement une fois votre identité vérifiée : vous pouvez rester à proximité, mais je dois pouvoir accéder librement à la porte le temps du diagnostic et de l'ouverture.",
  },
  {
    question: "Le prix annoncé au téléphone peut-il changer une fois sur place ?",
    answer:
      "Non : je travaille au forfait, pas à la fourchette. Le prix annoncé selon votre situation est celui que vous payez, sauf pièce supplémentaire clairement identifiée sur place et validée par vous avant toute facturation.",
  },
];

const guideContent = (
  <>
    <p className="text-slate leading-relaxed">
      Ce guide complète les informations déjà présentes plus haut sur cette page,
      avec le détail des techniques utilisées selon votre situation. Cliquez sur
      une carte ci-dessous pour aller directement à la section qui vous concerne.
    </p>

    <div className="bg-steel/10 rounded-2xl p-6 border border-navy/10">
      <p className="font-heading font-bold text-navy mb-4">Dans quelle situation êtes-vous ?</p>
      <SituationSelector situations={situations} />
    </div>

    <div>
      <ArticleSectionHeading number={1} id="diagnostic" level="h3" size="lg" numberStyle="plain">
        Reconnaître sa situation avant d&apos;appeler
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un seul geste change tout le diagnostic : essayez la poignée. Si elle
        s&apos;actionne normalement, seul le pêne demi-tour est engagé, la porte
        est simplement claquée. Si elle résiste complètement, un ou plusieurs
        tours de clé ont été donnés : le pêne dormant (ou les pênes d&apos;une
        serrure multipoints) est sorti dans la gâche, et la méthode change
        radicalement.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={2} id="technique" level="h3" size="lg" numberStyle="plain">
        Porte verrouillée sans clé : quelle méthode selon votre cas
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Sur une porte réellement verrouillée, sans clé disponible, deux familles
        de méthodes existent. Le crochetage (une manipulation fine des goupilles
        du cylindre, sans aucune casse) est une technique réelle, utilisée par
        les serruriers professionnels, mais elle demande de la dextérité et ne
        fonctionne pas sur tous les cylindres dans un temps raisonnable, en
        particulier sur les modèles récents ou{" "}
        <Link href="/blog/certification-a2p-serrure-nice/" className="text-steel underline">
          certifiés A2P
        </Link>
        . Passé ce délai, une méthode plus directe (perçage du cylindre) devient
        le choix pragmatique plutôt qu&apos;un forçage prolongé qui abîmerait
        davantage la porte. Dans les deux cas, le cylindre est ensuite remplacé
        pour repartir sur une sécurité fiable. Voir mon article sur{" "}
        <Link href="/blog/serrure-multipoints-3-5-7-nice/" className="text-steel underline">
          le choix du bon niveau de serrure
        </Link>
        .
      </p>

      <div className="mt-5">
        <h4 id="situation-cle-perdue" className="font-heading font-semibold text-navy mb-1 scroll-mt-24">
          Clé perdue ou volée : remplacer plutôt que reproduire
        </h4>
        <p className="text-slate leading-relaxed">
          Si la clé est perdue ou volée plutôt que simplement oubliée à
          l&apos;intérieur, un remplacement du cylindre reste la solution la
          plus sûre une fois la porte ouverte : reproduire l&apos;ancienne clé
          laisserait en circulation un double dont vous ne maîtrisez plus
          l&apos;usage.
        </p>
      </div>

      <div className="mt-5">
        <h4 id="situation-cle-cassee" className="font-heading font-semibold text-navy mb-1 scroll-mt-24">
          Clé cassée dans la serrure
        </h4>
        <p className="text-slate leading-relaxed">
          Un fragment de clé resté dans le cylindre se retire avec un outil
          d&apos;extraction adapté, sans forcer. Ne tentez jamais de le
          repousser avec un objet pointu ou de le coller : ces réflexes
          courants compliquent presque toujours l&apos;extraction et abîment
          le cylindre, ce qui transforme un dépannage simple en remplacement
          complet.
        </p>
      </div>

      <div className="mt-5">
        <h4 id="situation-serrure-grippee" className="font-heading font-semibold text-navy mb-1 scroll-mt-24">
          Serrure grippée ou bloquée
        </h4>
        <p className="text-slate leading-relaxed">
          Un mécanisme qui résiste vient le plus souvent d&apos;un cylindre
          encrassé par la poussière et l&apos;humidité, ou d&apos;un léger
          désalignement de la porte qui force le pêne à chaque fermeture. Le
          diagnostic sur place permet de distinguer un simple nettoyage d&apos;un
          mécanisme réellement en fin de vie.
        </p>
      </div>

      <div className="mt-5">
        <h4 id="situation-double-tour" className="font-heading font-semibold text-navy mb-1 scroll-mt-24">
          Porte verrouillée à double tour (pêne dormant engagé)
        </h4>
        <p className="text-slate leading-relaxed">
          Quand un ou plusieurs tours de clé ont été donnés, le pêne dormant
          (ou les pênes d&apos;une serrure multipoints) est engagé profondément
          dans la gâche : la méthode radio, efficace sur une porte simplement
          claquée, ne s&apos;applique plus. Le diagnostic du cylindre devient
          alors la première étape avant de choisir entre crochetage et
          perçage.
        </p>
      </div>
    </div>

    <div>
      <ArticleSectionHeading number={3} id="prioritaire" level="h3" size="lg" numberStyle="plain">
        Cas prioritaires : personne ou animal à l&apos;intérieur
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un enfant, une personne âgée ou un animal seul derrière une porte
        bloquée change l&apos;ordre des priorités : signalez-le dès l&apos;appel,
        je l&apos;indique en premier au diagnostic pour adapter la méthode la
        plus rapide compatible avec la situation, plutôt que la moins
        destructrice par défaut.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={4} id="criteres" level="h3" size="lg" numberStyle="plain">
        Quand une ouverture sans casse devient peu réaliste
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Quelques critères concrets, tirés du diagnostic sur place, orientent
        vers le perçage plutôt qu&apos;un crochetage prolongé :
      </p>
      <ul className="list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mt-2">
        <li>
          Un cylindre certifié A2P ou conforme aux classes de résistance les
          plus élevées de la norme{" "}
          <Link href="/changement-serrure-nice/#niveau" className="text-steel underline">
            EN 1303
          </Link>{" "}
          (résistance au perçage et à l&apos;arrachement), plus résistant au crochetage.
        </li>
        <li>Une serrure multipoints avec plusieurs pênes déjà engagés, qui multiplie les points à manipuler.</li>
        <li>Un cylindre visiblement grippé par la rouille ou une tentative de forçage préalable.</li>
      </ul>
    </div>

    <div className="bg-steel/10 border border-navy/10 rounded-2xl p-6">
      <ArticleSectionHeading number={5} id="tarifs" level="h3" size="lg" numberStyle="plain">
        Tarifs indicatifs selon votre situation
      </ArticleSectionHeading>
      <ArticleTable
        caption="Majoration de 50% après 19h, le week-end et les jours fériés, dans tous les cas. Détail complet sur ma page tarifs."
        headers={["Situation", "Prix", "Durée indicative"]}
        zebra="bold"
        featuredRowIndex={0}
        rows={[
          ["Porte claquée (simple)", "149 € TTC", "Quelques minutes en général"],
          ["Porte blindée claquée", "149 € TTC", "Quelques minutes en général"],
          ["Porte verrouillée standard (cylindre européen)", "149 € TTC", "Variable selon l'état du cylindre"],
          ["Porte verrouillée haute sécurité (ex. Fichet)", "189 € TTC", "Diagnostic sur place, peut demander plus de temps"],
          ["Clé cassée dans la serrure", "à partir de 149 € TTC", "Quelques minutes à quelques dizaines de minutes"],
        ]}
      />
    </div>

    <div>
      <ArticleSectionHeading number={6} id="apres" level="h3" size="lg" numberStyle="plain">
        Après l&apos;ouverture : faut-il changer le cylindre ?
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Après une ouverture non destructive (méthode radio ou crochetage
        réussi), rien n&apos;oblige à remplacer quoi que ce soit. Après une
        ouverture destructive, le remplacement du cylindre est nécessaire et
        inclus dans l&apos;intervention. C&apos;est aussi l&apos;occasion de
        revoir le niveau de sécurité si vous le souhaitez : le détail complet
        est sur ma page{" "}
        <Link href="/changement-serrure-nice/" className="text-steel underline">
          changement de serrure
        </Link>
        .
      </p>
    </div>
  </>
);

export const metadata: Metadata = buildMetadata({
  path: "/ouverture-de-porte-nice/",
  title: "Ouverture de porte à Nice – Serrurier 24h/24 | VAF",
  description: "Porte claquée, verrouillée ou clé cassée à Nice ? Diagnostic précis par téléphone, ouverture sans casse quand c'est possible, devis annoncé avant intervention.",
});

const sectionsFr = [
  {
    heading: "Porte claquée n'est pas porte verrouillée",
    Icon: <DoorIcon className="w-4 h-4" />,
    paragraphs: [
      "C'est la première question que je pose au téléphone, car la méthode change complètement selon le cas. Une porte claquée (fermée par le simple mouvement du battant, sans tour de clé) se résout très souvent sans aucune casse. J'utilise le plus souvent la méthode radio, aussi appelée technique de la feuille Mika ou du by-pass : une fine plaque rigide glissée entre le cadre et le pêne, qui libère le mécanisme sans dommage dans 99% des cas. Une gâche mal réglée, un pêne un peu voilé ou une poignée usée provoquent fréquemment ce genre de blocage, surtout sur les portes plus anciennes du centre de Nice.",
    ],
  },
  {
    heading: "Porte verrouillée à clé",
    Icon: <KeyIcon className="w-4 h-4" />,
    paragraphs: [
      "Ce cas demande davantage de précautions, selon le type de serrure installée : cylindre standard, serrure multipoints ou modèle plus ancien. Si vos clés sont perdues ou volées, j'en profite souvent pour vous proposer un remplacement de cylindre. Cette solution règle le problème d'accès et améliore la sécurité en même temps, plutôt que de reproduire une clé qui pourrait circuler ailleurs.",
    ],
  },
  {
    heading: "Clé cassée ou serrure bloquée",
    Icon: <WrenchIcon className="w-4 h-4" />,
    paragraphs: [
      "J'extrais proprement le morceau de clé resté dans le cylindre, avec un outil d'extraction adapté, sans forcer ni abîmer le mécanisme. Le perçage du cylindre reste une solution de tout dernier recours, uniquement si aucune autre méthode n'aboutit. Une serrure bloquée peut aussi venir d'un cylindre grippé par l'humidité ou d'un frottement de la porte sur son cadre. Dans tous les cas, une intervention préventive coûte presque toujours moins cher qu'un dépannage de nuit un week-end.",
    ],
  },
  {
    heading: "Porte blindée verrouillée",
    Icon: <ShieldIcon className="w-4 h-4" />,
    paragraphs: [
      "J'adapte ma méthode sans jamais transiger sur la qualité de l'ouverture, ni forcer sur une porte blindée conçue justement pour résister. L'objectif reste le même : rester propre, respecter la structure du bâti, et ne pas transformer une ouverture en réparation lourde.",
    ],
  },
  {
    heading: "Cas prioritaire : personne ou animal à l'intérieur",
    Icon: <HeartIcon className="w-4 h-4" />,
    accent: "urgent" as const,
    paragraphs: [
      "Un enfant, une personne âgée ou un animal seul derrière une porte bloquée change l'ordre des priorités : signalez-le dès l'appel, je l'indique en premier au diagnostic pour adapter la méthode la plus rapide compatible avec la situation, plutôt que la moins destructrice par défaut.",
    ],
  },
  {
    heading: "Une pièce d'identité toujours demandée",
    Icon: <HandshakeIcon className="w-4 h-4" />,
    accent: "urgent" as const,
    paragraphs: [
      <>
        Avant d&apos;ouvrir une porte verrouillée, je vérifie votre identité et
        votre droit d&apos;occupation du logement : pièce d&apos;identité et
        document à votre nom à cette adresse (bail, facture, titre de
        propriété). Ce n&apos;est pas de la paperasse inutile : introduire
        quelqu&apos;un dans un logement qui n&apos;est pas le sien, sans droit
        ni justification, est puni par{" "}
        <a
          href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000047899987"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          l&apos;article 226-4 du Code pénal
        </a>{" "}
        (jusqu&apos;à 3 ans d&apos;emprisonnement et 45 000 € d&apos;amende), et
        un professionnel qui faciliterait sciemment une telle intrusion
        s&apos;expose à être poursuivi comme complice. Cette vérification
        systématique est donc une protection pour vous comme pour moi.
      </>,
    ],
  },
];

const faqFr = [
  {
    question: "Comment ouvrir une porte claquée sans serrurier ?",
    answer:
      "Selon le modèle, une fine feuille rigide (type radiographie ou carte) glissée entre le cadre et le pêne peut parfois suffire à libérer le mécanisme. Si ça résiste, mieux vaut éviter de forcer : vous risquez d'abîmer la gâche ou le battant, ce qui coûtera plus cher à réparer qu'un simple déplacement.",
  },
  {
    question: "Comment ouvrir une porte avec la clé restée à l'intérieur ?",
    answer:
      "Avec un double de clé, on peut parfois pousser doucement le mécanisme pour faire tomber la clé restée sur le barillet. Ce n'est pas garanti selon le modèle de serrure, et j'interviens directement si cette méthode ne fonctionne pas.",
  },
  {
    question: "C'est quoi le pêne d'une porte ?",
    answer:
      "Le pêne est la pièce mobile de la serrure, située sur le chant de la porte, qui vient s'insérer dans la gâche du cadre pour maintenir la porte fermée. C'est cette pièce qui bloque (ou débloque) l'ouverture selon sa position.",
  },
  {
    question: "Combien coûte une ouverture de porte claquée à Nice ?",
    answer:
      "149 € TTC pour une ouverture standard en journée. Le détail complet des tarifs, y compris les majorations de nuit et de week-end, est disponible sur ma page tarifs.",
  },
  {
    question: "Combien coûte une ouverture de porte verrouillée à Nice ?",
    answer:
      "149 € TTC pour une situation standard, 189 € TTC s'il s'agit d'une porte blindée verrouillée. Une majoration de 50% s'applique après 19h, le week-end et les jours fériés.",
  },
  {
    question: "Une ouverture de porte laisse-t-elle des traces ?",
    answer:
      "Pas dans la majorité des cas de porte claquée : je privilégie toujours une méthode sans casse quand la configuration le permet. Pour une porte verrouillée sur un modèle de serrure très résistant, une intervention plus technique peut parfois être nécessaire, je vous préviens avant d'agir.",
  },
  {
    question: "Pourquoi un serrurier demande-t-il une pièce d'identité avant d'ouvrir une porte ?",
    answer:
      "C'est une pratique que j'applique systématiquement, pas un simple choix commercial : un professionnel qui faciliterait sciemment l'accès à un logement sans vérifier qui y a droit s'expose à être poursuivi comme complice de violation de domicile (article 226-4 du Code pénal). Gardez une pièce d'identité et un justificatif à votre nom à portée de main.",
  },
  {
    question: "Un locataire peut-il faire appel à un serrurier sans l'accord de son propriétaire ?",
    answer:
      "Oui : en tant que locataire, votre bail suffit à prouver votre droit d'occupation du logement, au même titre qu'une facture ou un titre de propriété pour un propriétaire. Aucun accord préalable du propriétaire n'est nécessaire pour une ouverture de porte.",
  },
];

const sectionsEn = [
  {
    heading: "A slammed door is not the same as a locked door",
    paragraphs: [
      "This is the first question I ask on the phone, because the method changes completely depending on the case. A door slammed shut (closed by the simple movement of the door itself, without turning a key) very often gets resolved with zero damage. I most often use the radio method, also called the shim or by-pass technique: a thin rigid strip slid between the frame and the bolt, which releases the mechanism without damage in 99% of cases. A misaligned strike plate, a slightly warped bolt or a worn handle frequently cause this kind of jam, especially on the older doors in central Nice.",
    ],
  },
  {
    heading: "Door locked with a key",
    paragraphs: [
      "This case calls for more care, depending on the type of lock installed: standard cylinder, multipoint lock, or an older model. If your keys are lost or stolen, I'll often suggest a cylinder replacement at the same time. It solves the access problem and improves security in one go, rather than cutting a new key that could still be circulating elsewhere.",
    ],
  },
  {
    heading: "Broken key or jammed lock",
    paragraphs: [
      "I cleanly extract the piece of key left inside the cylinder, using a proper extraction tool, without forcing or damaging the mechanism. Drilling the cylinder stays a last-resort solution, only if no other method works. A jammed lock can also come from a cylinder stiffened by humidity or a door rubbing against its frame. Either way, a preventive callout is almost always cheaper than a night-time repair on a weekend.",
    ],
  },
  {
    heading: "Locked security door",
    paragraphs: [
      "I adapt my method without ever compromising on the quality of the opening, and without forcing a security door that's specifically built to resist. The goal stays the same: stay clean, respect the structure of the building, and avoid turning an opening into a heavy repair job.",
    ],
  },
  {
    heading: "ID is always required",
    paragraphs: [
      <>
        Before opening a locked door, I verify your identity and your right to
        occupy the property: an ID card plus a document in your name at that
        address (lease, bill, deed). This isn&apos;t unnecessary paperwork:
        entering someone&apos;s home without right or justification is
        punishable under Article 226-4 of the French Penal Code (up to 3
        years&apos; imprisonment and a €45,000 fine), and a professional who
        knowingly facilitated such an entry could be prosecuted as an
        accomplice. This systematic check protects you as much as it protects
        me.
      </>,
    ],
  },
];

const faqEn = [
  {
    question: "How can I open a slammed door without a locksmith?",
    answer:
      "Depending on the model, a thin rigid strip (an old X-ray film or a card) slid between the frame and the bolt can sometimes be enough to release the mechanism. If it resists, it's best not to force it: you risk damaging the strike plate or the door itself, which costs more to repair than a simple callout.",
  },
  {
    question: "How do you open a door when the key was left inside?",
    answer:
      "With a spare key, it's sometimes possible to gently push the mechanism so the key left in the cylinder falls out. This isn't guaranteed depending on the lock model, and I intervene directly if this method doesn't work.",
  },
  {
    question: "What is a door bolt?",
    answer:
      "The bolt is the moving part of the lock, on the edge of the door, that slides into the strike plate on the frame to keep the door shut. It's this part that blocks or releases the opening depending on its position.",
  },
  {
    question: "How much does opening a slammed door cost in Nice?",
    answer:
      "€149 incl. VAT for a standard daytime opening. Full pricing details, including night and weekend surcharges, are on my pricing page.",
  },
  {
    question: "How much does opening a locked door cost in Nice?",
    answer:
      "€149 incl. VAT for a standard situation, €189 incl. VAT for a locked security door. A 50% surcharge applies after 7pm, on weekends and public holidays.",
  },
  {
    question: "Does opening a door leave marks?",
    answer:
      "Not in most slammed-door cases: I always favor a damage-free method when the setup allows it. For a locked door on a very resistant lock model, a more technical approach may sometimes be needed, I'll tell you before I act.",
  },
  {
    question: "Why does a locksmith ask for ID before opening a door?",
    answer:
      "It's a practice I apply systematically, not just a business choice: a professional who knowingly facilitates access to a home without checking who has a right to it risks being prosecuted as an accomplice to unlawful entry (Article 226-4 of the French Penal Code). Keep an ID and proof in your name close at hand.",
  },
];

export default function OuvertureDePorteNicePage() {
  const experienceYears = new Date().getFullYear() - business.professionSinceYear;
  const doorReview = fallbackReviews.find((r) => r.author === "Marine D.");

  const heroTrustNote = (
    <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-sm text-navy">
      <span className="inline-flex items-center gap-1.5 font-semibold">
        <StarIcon className="w-4 h-4 text-amber-400" />
        {business.reviews.rating.toFixed(1)}/5 sur {business.reviews.count}+ avis Google
      </span>
      <span className="text-navy/30" aria-hidden="true">·</span>
      <span>{experienceYears} ans d&apos;expérience à Nice</span>
    </div>
  );

  return (
    <LocalizedServicePage
      fr={{
        h1: "Ouverture de porte à Nice : le bon diagnostic avant la bonne méthode",
        lead: "Porte claquée, verrouillée, clé cassée ou porte blindée : je diagnostique par téléphone, j'annonce un prix, puis j'interviens proprement, sans casse quand c'est possible.",
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Ouverture de porte",
        path: "/ouverture-de-porte-nice/",
        image: {
          src: "/images/serrurier-nice-ouverture-de-porte.webp",
          alt: "Porte d'entrée avec nouvelle serrure installée par un serrurier à Nice",
        },
        sectionsVariant: "cards",
        sectionsHeading: "Ce qu'il faut savoir avant votre intervention",
        headingScale: "lg",
        heroTrustNote,
        extra: (
          <>
            <PriceReminder
              priceLabel="149 € TTC (189 € TTC pour une serrure Fichet verrouillée)"
              locale="fr"
            />
            {doorReview && (
              <div className="mx-auto max-w-2xl px-4 pb-10">
                <div className="bg-white rounded-xl border border-navy/10 shadow-sm p-6">
                  <div className="flex gap-0.5 text-amber-400" aria-hidden="true">
                    {Array.from({ length: doorReview.rating }).map((_, i) => (
                      <svg key={i} width="16" height="16" viewBox="0 0 20 20" fill="currentColor">
                        <path d="M10 1.5l2.6 5.6 6.1.6-4.6 4.1 1.3 6-5.4-3-5.4 3 1.3-6L1.3 7.7l6.1-.6L10 1.5Z" />
                      </svg>
                    ))}
                  </div>
                  <p className="mt-3 text-navy leading-relaxed">&ldquo;{doorReview.text}&rdquo;</p>
                  <p className="mt-3 text-xs text-slate">{doorReview.author} · avis Google vérifié</p>
                </div>
              </div>
            )}
          </>
        ),
        processSteps: [
          {
            title: "Appel",
            text: "Vous m'indiquez si la porte est claquée ou verrouillée à clé, et le type de serrure si vous le connaissez, pour que j'arrive déjà préparé.",
          },
          {
            title: "Délai d'arrivée",
            text: "Je vous annonce un prix et un délai réaliste selon votre secteur et l'heure (généralement 15 à 30 minutes à Nice), et je vous préviens si la situation évolue en route.",
          },
          {
            title: "Diagnostic de la porte",
            text: "Je vérifie le type de serrure et l'état du cadre pour choisir la méthode d'ouverture la moins destructrice, sans forcer si une alternative existe.",
          },
          {
            title: "Règlement",
            text: "Le prix confirmé avant l'ouverture est celui que vous payez, sans supplément surprise une fois la porte rouverte.",
          },
        ],
        relatedArticle: {
          href: "/blog/porte-qui-claque-serrurier-nice/",
          label: "Porte qui claque : les bons réflexes avant d'appeler un serrurier",
        },
        guide: (
          <ServiceGuideSection readingMinutes={7} toc={guideToc} faq={guideFaq}>
            {guideContent}
          </ServiceGuideSection>
        ),
        guideFaqForSchema: guideFaq,
      }}
      en={{
        h1: "Door opening in Nice: the right method for your lock",
        lead: "Door slammed shut, locked, broken key or security door: I diagnose over the phone, quote a price, then get it done cleanly, without damage when possible.",
        sections: sectionsEn,
        faq: faqEn,
        breadcrumbLabel: "Door opening",
        path: "/ouverture-de-porte-nice/",
        image: {
          src: "/images/serrurier-nice-ouverture-de-porte.webp",
          alt: "Front door with a newly installed lock, locksmith in Nice",
        },
        extra: (
          <PriceReminder
            priceLabel="€149 incl. VAT (€189 incl. VAT for a locked Fichet lock)"
            locale="en"
          />
        ),
        processSteps: [
          {
            title: "Call",
            text: "You tell me whether the door is slammed shut or locked with a key, and the lock type if you know it, so I arrive already prepared.",
          },
          {
            title: "Time to arrival",
            text: "I quote a price and a realistic time frame based on your area and the time of day (usually 15 to 30 minutes in Nice), and let you know if anything changes on the way.",
          },
          {
            title: "Diagnosing the door",
            text: "I check the lock type and the frame's condition to choose the least destructive opening method, without forcing anything if an alternative exists.",
          },
          {
            title: "Payment",
            text: "The price confirmed before opening is what you pay, no surprise extra charge once the door is open again.",
          },
        ],
      }}
    />
  );
}
