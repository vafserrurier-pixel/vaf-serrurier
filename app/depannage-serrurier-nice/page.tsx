import type { Metadata } from "next";
import Link from "next/link";
import LocalizedServicePage from "@/components/LocalizedServicePage";
import PriceReminder from "@/components/PriceReminder";
import QuoteBlock from "@/components/QuoteBlock";
import ServiceGuideSection from "@/components/ServiceGuideSection";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import { AlertLockIcon, WrenchIcon, KeyIcon, BoltIcon } from "@/components/Icons";
import { buildMetadata } from "@/lib/metadata";

const symptoms = [
  {
    Icon: AlertLockIcon,
    title: "La clé force ou résiste",
    cause: "Cylindre encrassé, gâche mal réglée ou porte qui a bougé.",
    urgence: "Faible à modérée : à traiter avant blocage complet.",
  },
  {
    Icon: WrenchIcon,
    title: "Clé cassée dans le cylindre",
    cause: "Usure du métal, souvent après un forçage léger et répété.",
    urgence: "Élevée si aucun double n'est disponible.",
  },
  {
    Icon: KeyIcon,
    title: "La clé tourne dans le vide",
    cause: "Pièce interne cassée ou cylindre complètement usé.",
    urgence: "Élevée : le pêne ne bouge plus du tout.",
  },
  {
    Icon: BoltIcon,
    title: "Blocage soudain, porte déjà fermée",
    cause: "Mécanisme grippé ou pièce rompue sans signe avant-coureur.",
    urgence: "Immédiate si vous êtes bloqué dehors ou dedans.",
  },
];

const guideToc = [
  { id: "diagnostic", label: "Reconnaître le symptôme avant d'appeler" },
  { id: "entretien", label: "Entretien préventif : le bon geste" },
  { id: "devis", label: "Vos droits : un devis avant toute intervention" },
  { id: "reparer-remplacer", label: "Réparer ou remplacer : comment je tranche" },
  { id: "faq", label: "Questions complémentaires" },
];

const guideFaq = [
  {
    question: "Puis-je lubrifier moi-même une serrure qui résiste ?",
    answer:
      "Oui, avec un lubrifiant adapté au mécanisme (graphite en poudre ou lubrifiant sec pour serrure), en petite quantité. Évitez les huiles ou dégrippants type WD-40 en usage régulier : ils apportent un soulagement immédiat mais retiennent ensuite la poussière, ce qui aggrave le grippage à moyen terme.",
  },
  {
    question: "Un devis est-il vraiment obligatoire avant une intervention ?",
    answer:
      "Oui, c'est une obligation réglementaire pour les prestations de dépannage à domicile, pas une option laissée à l'appréciation du professionnel. Je vous communique un prix avant de me déplacer et un devis détaillé avant toute intervention.",
  },
  {
    question: "Combien de temps avant qu'une serrure qui résiste finisse par se bloquer ?",
    answer:
      "Impossible à garantir précisément : cela dépend de l'usage quotidien et de l'état du mécanisme. Un cylindre qui accroche déjà régulièrement peut se bloquer du jour au lendemain, d'où l'intérêt de ne pas attendre.",
  },
  {
    question: "Dois-je essayer de forcer si la clé tourne dans le vide ?",
    answer:
      "Non : forcer n'a aucun effet quand une pièce interne est cassée, et risque d'endommager le cylindre au point de compliquer son remplacement. Mieux vaut couper l'usage de cette porte et faire intervenir un professionnel.",
  },
];

const guideContent = (
  <>
    <p className="text-slate leading-relaxed">
      Ce guide détaille le diagnostic, l&apos;entretien préventif et vos droits en
      tant que client, en complément des symptômes déjà décrits plus haut sur
      cette page.
    </p>

    <div className="bg-cream rounded-xl p-6 border border-navy/10">
      <p className="font-heading font-bold text-navy mb-4">Symptôme, cause probable et urgence</p>
      <div className="grid gap-4 sm:grid-cols-2">
        {symptoms.map(({ Icon, title, cause, urgence }) => (
          <div key={title} className="flex items-start gap-3">
            <span className="inline-flex items-center justify-center w-9 h-9 rounded-full bg-steel/10 text-steel shrink-0">
              <Icon className="w-4 h-4" />
            </span>
            <div>
              <p className="font-heading font-semibold text-navy text-sm">{title}</p>
              <p className="text-sm text-slate leading-snug mt-0.5">{cause}</p>
              <p className="text-xs text-steel font-semibold mt-1">{urgence}</p>
            </div>
          </div>
        ))}
      </div>
    </div>

    <div>
      <ArticleSectionHeading number={1} id="diagnostic" level="h3">
        Reconnaître le symptôme avant d&apos;appeler
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Le tableau ci-dessus donne un premier repère, mais un seul geste en dit
        souvent plus long : essayez la clé lentement, sans forcer. Une
        résistance progressive pointe vers un encrassement ou un léger
        désalignement de la porte. Un blocage net et soudain, sans à-coups
        avant-coureurs, évoque plutôt une pièce interne rompue. Cette
        distinction m&apos;aide déjà à préparer le bon outillage avant de me
        déplacer.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={2} id="entretien" level="h3">
        Entretien préventif : le bon geste (et celui à éviter)
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un cylindre qui commence à résister peut souvent être soulagé avec un
        lubrifiant sec (graphite en poudre ou lubrifiant spécial serrure), à
        appliquer en petite quantité directement dans le cylindre. Les
        dégrippants classiques type WD-40 soulagent sur l&apos;instant mais,
        utilisés en continu, retiennent la poussière et finissent par aggraver
        le grippage. Sur les portes plus anciennes du centre de Nice,
        l&apos;humidité fait aussi gonfler légèrement le bois : un simple
        réglage de la gâche évite parfois un dépannage complet.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={3} id="devis" level="h3">
        Vos droits : un devis avant toute intervention
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Les prestations de dépannage à domicile dans le bâtiment sont
        encadrées par l&apos;
        <a
          href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033935513"
          target="_blank"
          rel="noopener noreferrer"
          className="text-steel underline"
        >
          arrêté du 24 janvier 2017 relatif à la publicité des prix
        </a>{" "}
        : un prix doit vous être communiqué avant le déplacement, et un devis
        détaillé avant le début des travaux. Ce n&apos;est pas une option
        laissée à l&apos;appréciation du professionnel.
      </p>
    </div>

    <div>
      <ArticleSectionHeading number={4} id="reparer-remplacer" level="h3">
        Réparer ou remplacer : comment je tranche
      </ArticleSectionHeading>
      <p className="text-slate leading-relaxed">
        Un nettoyage, un réglage de gâche ou une extraction de clé cassée
        suffisent souvent à régler le problème sans remplacer quoi que ce
        soit. Le remplacement devient nécessaire quand une pièce interne est
        rompue, quand le cylindre a été percé pour une ouverture, ou quand
        c&apos;est l&apos;occasion de monter en niveau de sécurité : le détail
        des critères de choix est sur ma page{" "}
        <Link href="/changement-serrure-nice/" className="text-steel underline">
          changement de serrure
        </Link>
        .
      </p>
    </div>
  </>
);

export const metadata: Metadata = buildMetadata({
  path: "/depannage-serrurier-nice/",
  title: "Urgence serrurier Nice 24h/24 – Dépannage rapide | VAF",
  description: "Serrurier en urgence à Nice : serrure bloquée, clé cassée, cylindre grippé. J'interviens jour et nuit, prix annoncé avant intervention.",
});

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
      "Le coût dépend du problème rencontré, du temps nécessaire sur place et des pièces éventuellement à remplacer. Vous m'appelez, vous m'expliquez le souci en quelques mots, et je vous donne un prix avant de me déplacer, pas de mauvaise surprise à la fin.",
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
            text: "Vous décrivez la panne (porte bloquée, cylindre grippé, clé cassée) et j'identifie la cause la plus probable dès le téléphone.",
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
          { href: "/mise-en-securite-apres-effraction-nice/", label: "Après effraction" },
          { href: "/ouverture-de-coffre-fort-nice/", label: "Ouverture de coffre-fort" },
          { href: "/installation-coffre-fort-nice/", label: "Installation de coffre-fort" },
          { href: "/serrure-carenee-nice/", label: "Serrure carénée 5 points" },
          { href: "/tarifs-serrurier-nice/", label: "Voir tous les tarifs" },
        ],
        relatedArticle: {
          href: "/blog/que-faire-apres-cambriolage-nice/",
          label: "Que faire après un cambriolage : les bons réflexes",
        },
        guide: (
          <ServiceGuideSection readingMinutes={5} toc={guideToc} faq={guideFaq}>
            {guideContent}
          </ServiceGuideSection>
        ),
        guideFaqForSchema: guideFaq,
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
            text: "You describe the fault (jammed door, seized cylinder, broken key) and I identify the most likely cause right there on the phone.",
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
          { href: "/mise-en-securite-apres-effraction-nice/", label: "After a break-in" },
          { href: "/ouverture-de-coffre-fort-nice/", label: "Safe opening" },
          { href: "/installation-coffre-fort-nice/", label: "Safe installation" },
          { href: "/serrure-carenee-nice/", label: "5-point shrouded lock" },
          { href: "/tarifs-serrurier-nice/", label: "See all pricing" },
        ],
      }}
    />
  );
}
