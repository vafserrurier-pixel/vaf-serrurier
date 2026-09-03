import type { Metadata } from "next";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import PriceReminder from "@/components/PriceReminder";
import QuoteBlock from "@/components/QuoteBlock";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/depannage-serrurier-nice/" },
  title: "Urgence serrurier Nice 24h/24 – Dépannage rapide | VAF",
  description:
    "Serrurier en urgence à Nice : serrure bloquée, clé cassée, cylindre grippé. J'interviens jour et nuit, prix annoncé avant intervention.",
};

const sectionsFr = [
  {
    heading: "Une serrure bloquée à Nice, d'où ça vient",
    paragraphs: [
      "Une serrure qui résiste vient rarement de nulle part. Le plus souvent, c'est le cylindre qui a pris la poussière et l'humidité au fil des saisons, ou un mécanisme interne fatigué. Autre cause fréquente : un défaut d'alignement de la porte qui force le pêne à chaque fermeture. Sur les immeubles anciens du centre de Nice, l'humidité et les variations de température jouent aussi beaucoup sur le bois et sur le jeu de la porte.",
      "Avant de conclure quoi que ce soit, je vérifie l'ensemble : la porte, la gâche, le pêne et le cylindre. Une serrure qui grippe légèrement aujourd'hui peut se bloquer complètement demain. Résultat : une intervention préventive coûte presque toujours moins cher qu'un dépannage en pleine nuit, une fois le mécanisme totalement figé.",
    ],
  },
  {
    heading: "Clé cassée dans la serrure",
    paragraphs: [
      "C'est l'un des dépannages les plus fréquents : une clé usée qui casse net dans le barillet, souvent au pire moment. J'extrais le morceau resté à l'intérieur avec les outils adaptés, puis je vérifie l'état du cylindre avant de le remettre en service. Le perçage ne reste qu'une solution de tout dernier recours, si aucune autre méthode n'aboutit.",
      "Un réflexe à éviter absolument : pousser la clé cassée avec un objet pointu ou tenter de la coller. Ces deux gestes, très courants, compliquent presque toujours l'extraction et abîment le cylindre. Résultat : un dépannage simple se transforme en remplacement complet.",
    ],
  },
  {
    heading: "Quand la clé tourne dans le vide",
    paragraphs: [
      "Si la clé tourne sans que rien ne se passe, le mécanisme ne transmet plus le mouvement au pêne. C'est souvent le signe d'une pièce interne cassée ou d'un cylindre complètement usé. Je contrôle l'ensemble porte, gâche, pêne et cylindre pour identifier précisément l'origine du problème. Ensuite, je corrige ce qui peut l'être, et je ne remplace que ce qui est réellement nécessaire.",
    ],
  },
  {
    heading: "Cylindre grippé : agir avant la panne complète",
    paragraphs: [
      "Un cylindre qui accroche, une clé qui force un peu plus chaque semaine : ce sont des signaux d'alerte. Un peu de lubrifiant adapté peut parfois soulager temporairement. Mais si le problème revient, mieux vaut le traiter avant de se retrouver bloqué dehors un soir de week-end.",
    ],
  },
  {
    heading: "Comment je fixe le tarif d'un dépannage",
    paragraphs: [
      "Le coût dépend du problème rencontré, du temps nécessaire sur place et des pièces éventuellement à remplacer. Vous m'appelez, vous m'expliquez le souci en quelques mots, et je vous donne un prix avant de me déplacer — pas de mauvaise surprise à la fin.",
    ],
  },
];

const faqFr = [
  {
    question: "Comment se passe l'intervention d'un serrurier à Nice ?",
    answer:
      "J'écoute d'abord le problème au téléphone, je propose la solution la plus adaptée, j'annonce un devis détaillé, puis je réalise l'intervention sur place.",
  },
  {
    question: "Qui prend en charge le remplacement d'une serrure à Nice ?",
    answer:
      "En général, le propriétaire prend en charge les frais de serrurerie liés à l'usure normale. Les dégradations résultant d'un usage anormal restent à la charge de l'occupant.",
  },
  {
    question: "Comment un serrurier ouvre-t-il une porte claquée sans clé ?",
    answer:
      "Selon le modèle de serrure, j'insère une fine feuille rigide entre le cadre et le pêne, puis je la fais glisser pour libérer le mécanisme, sans abîmer la porte.",
  },
  {
    question: "Est-ce que l'assurance habitation rembourse un remplacement de serrure à Nice ?",
    answer:
      "Dans la majorité des cas, l'assurance habitation du locataire ou du propriétaire prend en charge le remplacement d'une serrure endommagée, notamment après effraction. Vérifiez les conditions de votre contrat.",
  },
  {
    question: "Un serrurier a-t-il le droit d'annoncer son prix seulement après l'intervention ?",
    answer:
      "Non. Le métier de serrurier est réglementé : je suis dans l'obligation de vous fournir un devis avant de commencer les travaux.",
  },
  {
    question: "Y a-t-il un serrurier ouvert maintenant près de moi à Nice ?",
    answer:
      "Oui, j'interviens 24h/24 et 7j/7 sur Nice et ses environs, y compris la nuit, le week-end et les jours fériés.",
  },
];

const sectionsEn = [
  {
    heading: "Where a stuck lock in Nice usually comes from",
    paragraphs: [
      "A lock that resists rarely comes out of nowhere. Most often it's a cylinder that has collected dust and humidity over the seasons, or a tired internal mechanism. Another common cause: a misaligned door that forces the bolt every time it closes. In Nice's older city-center buildings, humidity and temperature swings also affect the wood and how well the door sits in its frame.",
      "Before concluding anything, I check everything: the door, the strike plate, the bolt and the cylinder. A lock that sticks slightly today can jam completely tomorrow. The result: a preventive callout is almost always cheaper than a middle-of-the-night repair once the mechanism has fully seized.",
    ],
  },
  {
    heading: "A key broken off inside the lock",
    paragraphs: [
      "This is one of the most common callouts: a worn key snaps clean off inside the cylinder, usually at the worst possible time. I extract the piece left inside with the right tools, then check the condition of the cylinder before putting it back into service. Drilling stays a last-resort solution, only if no other method works.",
      "One thing to avoid absolutely: pushing the broken key with a sharp object or trying to glue it back together. Both of these common reflexes almost always make extraction harder and damage the cylinder. The result: a simple repair turns into a full replacement.",
    ],
  },
  {
    heading: "When the key turns but nothing happens",
    paragraphs: [
      "If the key turns freely without engaging anything, the mechanism is no longer transmitting movement to the bolt. This is often a sign of a broken internal part or a fully worn cylinder. I check the whole assembly — door, strike plate, bolt and cylinder — to pinpoint the exact cause. Then I fix what can be fixed, and only replace what's truly necessary.",
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
      "The cost depends on the problem, the time needed on site, and any parts that need replacing. You call me, explain the issue in a few words, and I give you a price before I travel to you — no bad surprises at the end.",
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

export default function DepannageSerrurierNicePage() {
  return (
    <LocalizedServicePage
      fr={{
        h1: "Urgence serrurier à Nice, dépannage 24h/24 et 7j/7",
        lead: "Serrure bloquée, clé cassée, cylindre qui grippe : vous m'expliquez la situation, je vous donne un prix avant de me déplacer, et j'interviens proprement, de jour comme de nuit.",
        sections: sectionsFr,
        faq: faqFr,
        breadcrumbLabel: "Dépannage serrurier",
        path: "/depannage-serrurier-nice/",
        image: {
          src: "/images/serrurier-nice-depannage-reparation.webp",
          alt: "Réparation d'un mécanisme de serrure par un serrurier à Nice",
        },
        extra: (
          <>
            <PriceReminder priceLabel="À partir de 149 € TTC" locale="fr" />
            <div className="mx-auto max-w-4xl px-4 py-10">
              <QuoteBlock locale="fr" />
            </div>
          </>
        ),
        processSteps: [
          {
            title: "Appel",
            text: "Vous décrivez la panne — porte bloquée, cylindre grippé, clé cassée — et j'identifie la cause la plus probable dès le téléphone.",
          },
          {
            title: "Délai d'arrivée",
            text: "Je vous annonce un prix et un délai réaliste selon votre secteur et l'heure (généralement 15 à 30 minutes à Nice), et je vous préviens si la situation évolue en route.",
          },
          {
            title: "Diagnostic de la panne",
            text: "J'examine le mécanisme pour confirmer s'il s'agit d'un blocage, d'une usure ou d'une casse, avant de choisir la méthode la moins invasive.",
          },
          {
            title: "Règlement",
            text: "Le prix confirmé sur place est celui que vous payez, facture détaillée à l'appui, sans supplément surprise une fois la panne réglée.",
          },
        ],
        relatedServices: [
          { href: "/ouverture-de-porte-nice/", label: "Ouverture de porte" },
          { href: "/changement-serrure-nice/", label: "Changement de serrure" },
          { href: "/mis-en-securite-apres-effraction-nice/", label: "Après effraction" },
          { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
          { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
          { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
          { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
        ],
      }}
      en={{
        h1: "Emergency locksmith in Nice, 24/7 callout service",
        lead: "Stuck lock, broken key, jammed cylinder: you explain the situation, I quote a price before I travel to you, and I get it fixed cleanly, day or night.",
        sections: sectionsEn,
        faq: faqEn,
        breadcrumbLabel: "Emergency callout",
        path: "/depannage-serrurier-nice/",
        image: {
          src: "/images/serrurier-nice-depannage-reparation.webp",
          alt: "A locksmith repairing a lock mechanism in Nice",
        },
        extra: (
          <>
            <PriceReminder priceLabel="From €149 incl. VAT" locale="en" />
            <div className="mx-auto max-w-4xl px-4 py-10">
              <QuoteBlock locale="en" />
            </div>
          </>
        ),
        processSteps: [
          {
            title: "Call",
            text: "You describe the fault — jammed door, seized cylinder, broken key — and I identify the most likely cause right there on the phone.",
          },
          {
            title: "Time to arrival",
            text: "I quote a price and a realistic time frame based on your area and the time of day (usually 15 to 30 minutes in Nice), and let you know if anything changes on the way.",
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
        relatedServices: [
          { href: "/ouverture-de-porte-nice/", label: "Door opening" },
          { href: "/changement-serrure-nice/", label: "Lock change" },
          { href: "/mis-en-securite-apres-effraction-nice/", label: "After a break-in" },
          { href: "/ouverture-de-coffre-fort-nice/", label: "Safe opening" },
          { href: "/installation-coffre-fort-nice/", label: "Safe installation" },
          { href: "/serrure-carenee-nice/", label: "5-point shrouded lock" },
          { href: "/tarifs-serrurier-nice/", label: "See all pricing" },
        ],
      }}
    />
  );
}
