import type { Metadata } from "next";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import PriceReminder from "@/components/PriceReminder";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/ouverture-de-porte-nice/" },
  title: "Porte claquée à Nice – Ouverture sans casse 24h/24 | VAF",
  description:
    "Porte claquée ou verrouillée à Nice ? J'ouvre sans casse quand c'est possible, devis annoncé avant intervention. Disponible jour et nuit.",
};

const sectionsFr = [
  {
    heading: "Porte claquée n'est pas porte verrouillée",
    paragraphs: [
      "C'est la première question que je pose au téléphone, car la méthode change complètement selon le cas. Une porte claquée — fermée par le simple mouvement du battant, sans tour de clé — se résout très souvent sans aucune casse. Une gâche mal réglée, un pêne un peu voilé ou une poignée usée provoquent fréquemment ce genre de blocage, surtout sur les portes plus anciennes du centre de Nice.",
    ],
  },
  {
    heading: "Porte verrouillée à clé",
    paragraphs: [
      "Ce cas demande davantage de précautions, selon le type de serrure installée : cylindre standard, serrure multipoints ou modèle plus ancien. Si vos clés sont perdues ou volées, j'en profite souvent pour vous proposer un remplacement de cylindre. Cette solution règle le problème d'accès et améliore la sécurité en même temps, plutôt que de reproduire une clé qui pourrait circuler ailleurs.",
    ],
  },
  {
    heading: "Clé cassée ou serrure bloquée",
    paragraphs: [
      "J'extrais proprement le morceau de clé resté dans le cylindre, sans forcer ni abîmer le mécanisme. Une serrure bloquée peut aussi venir d'un cylindre grippé par l'humidité ou d'un frottement de la porte sur son cadre. Dans tous les cas, une intervention préventive coûte presque toujours moins cher qu'un dépannage de nuit un week-end.",
    ],
  },
  {
    heading: "Porte blindée verrouillée",
    paragraphs: [
      "J'adapte ma méthode sans jamais transiger sur la qualité de l'ouverture, ni forcer sur une porte blindée conçue justement pour résister. L'objectif reste le même : rester propre, respecter la structure du bâti, et ne pas transformer une ouverture en réparation lourde.",
    ],
  },
  {
    heading: "Une pièce d'identité toujours demandée",
    paragraphs: [
      "Avant d'ouvrir une porte verrouillée, je dois vérifier votre identité et votre droit d'occupation du logement — pièce d'identité et document à votre nom à cette adresse (bail, facture, titre de propriété). Ce n'est pas de la paperasse inutile. La réglementation impose cette vérification à tout serrurier, sous peine de poursuites pour complicité de violation de domicile en cas de manquement. C'est une protection pour vous comme pour moi.",
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
      "Pas dans la majorité des cas de porte claquée : je privilégie toujours une méthode sans casse quand la configuration le permet. Pour une porte verrouillée sur un modèle de serrure très résistant, une intervention plus technique peut parfois être nécessaire — je vous préviens avant d'agir.",
  },
  {
    question: "Pourquoi un serrurier demande-t-il une pièce d'identité avant d'ouvrir une porte ?",
    answer:
      "C'est une obligation réglementaire, pas un choix de ma part : je dois vérifier votre identité et votre droit d'occupation du logement avant toute ouverture de porte verrouillée, pour éviter de faciliter une intrusion. Gardez une pièce d'identité et un justificatif à votre nom à portée de main.",
  },
];

const sectionsEn = [
  {
    heading: "A slammed door is not the same as a locked door",
    paragraphs: [
      "This is the first question I ask on the phone, because the method changes completely depending on the case. A door slammed shut — closed by the simple movement of the door itself, without turning a key — very often gets resolved with zero damage. A misaligned strike plate, a slightly warped bolt or a worn handle frequently cause this kind of jam, especially on the older doors in central Nice.",
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
      "I cleanly extract the piece of key left inside the cylinder, without forcing or damaging the mechanism. A jammed lock can also come from a cylinder stiffened by humidity or a door rubbing against its frame. Either way, a preventive callout is almost always cheaper than a night-time repair on a weekend.",
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
      "Before opening a locked door, I have to verify your identity and your right to occupy the property — an ID card plus a document in your name at that address (lease, bill, deed). This isn't unnecessary paperwork. Regulation requires this check from every locksmith, with legal liability for complicity in an unlawful entry if it's skipped. It protects you as much as it protects me.",
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
      "Not in most slammed-door cases: I always favor a damage-free method when the setup allows it. For a locked door on a very resistant lock model, a more technical approach may sometimes be needed — I'll tell you before I act.",
  },
  {
    question: "Why does a locksmith ask for ID before opening a door?",
    answer:
      "It's a regulatory requirement, not my own choice: I must verify your identity and your right to occupy the property before opening any locked door, to avoid facilitating an unlawful entry. Keep an ID and proof in your name close at hand.",
  },
];

export default function OuvertureDePorteNicePage() {
  return (
    <LocalizedServicePage
      fr={{
        h1: "Porte claquée à Nice : ouverture 24h/24 et 7j/7",
        lead: "Porte claquée ou fermée à clé, avec ou sans casse selon la situation : je diagnostique par téléphone, j'annonce un prix, puis j'interviens proprement.",
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Ouverture de porte",
        path: "/ouverture-de-porte-nice/",
        image: {
          src: "/images/serrurier-nice-ouverture-de-porte.webp",
          alt: "Porte d'entrée avec nouvelle serrure installée par un serrurier à Nice",
        },
        extra: (
          <PriceReminder
            priceLabel="149 € TTC (189 € TTC pour une porte blindée verrouillée)"
            locale="fr"
          />
        ),
        relatedServices: [
          { href: "/depannage-serrurier-nice/", label: "Dépannage serrurier" },
          { href: "/changement-serrure-nice/", label: "Changement de serrure" },
          { href: "/installation-porte-blindee-nice/", label: "Installation porte blindée" },
          { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
        ],
      }}
      en={{
        h1: "Door slammed shut in Nice: opened 24/7",
        lead: "Door slammed shut or locked with a key, with or without damage depending on the situation: I diagnose over the phone, quote a price, then get it done cleanly.",
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
            priceLabel="€149 incl. VAT (€189 incl. VAT for a locked security door)"
            locale="en"
          />
        ),
        relatedServices: [
          { href: "/depannage-serrurier-nice/", label: "Emergency callout" },
          { href: "/changement-serrure-nice/", label: "Lock change" },
          { href: "/installation-porte-blindee-nice/", label: "Security door installation" },
          { href: "/tarifs-serrurier-nice/", label: "See all pricing" },
        ],
      }}
    />
  );
}
