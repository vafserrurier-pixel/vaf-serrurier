"use client";

import Image from "next/image";
import Link from "next/link";
import ProcessSteps from "@/components/ProcessSteps";
import QuoteBlock from "@/components/QuoteBlock";
import TrustBadges from "@/components/TrustBadges";
import StatBar from "@/components/StatBar";
import ServiceGrid from "@/components/ServiceGrid";
import ReviewsSection from "@/components/ReviewsSection";
import FaqAccordion, { FaqItem } from "@/components/FaqAccordion";
import LazyMap from "@/components/LazyMap";
import ContactForm from "@/components/ContactForm";
import BrandsSection from "@/components/BrandsSection";
import PricingTable from "@/components/PricingTable";
import InsuranceBanner from "@/components/InsuranceBanner";
import { PriceTagIcon, HandshakeIcon, StarIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { sectorPages, featuredQuartiers, quartierHref } from "@/lib/quartiers";
import { useLocale } from "@/lib/locale";

const introPhoto = {
  src: "/images/pool/benoit-serrurier-pose-porte-nice.webp",
  alt: "Benoît, artisan serrurier, après la pose d'une porte à Nice",
};

const sectorCards = {
  fr: [
    {
      key: "centre" as const,
      blurb: "Du Vieux-Nice à la Promenade des Anglais, en passant par Cimiez et le Carré d'Or.",
    },
    {
      key: "est" as const,
      blurb: "Du port Lympia à Riquier, jusqu'aux hauteurs du Mont Boron et de l'Ariane.",
    },
    {
      key: "nord" as const,
      blurb: "Brancolar, Gairaut, Rimiez, Pessicart et les collines résidentielles du nord.",
    },
    {
      key: "ouest" as const,
      blurb: "Fabron, Saint-Isidore, l'Arénas, Carras et les secteurs plus ruraux de l'ouest.",
    },
  ],
  en: [
    {
      key: "centre" as const,
      blurb: "From the Old Town to the Promenade des Anglais, through Cimiez and the Carré d'Or.",
    },
    {
      key: "est" as const,
      blurb: "From the Lympia harbor to Riquier, up to the heights of Mont Boron and l'Ariane.",
    },
    {
      key: "nord" as const,
      blurb: "Brancolar, Gairaut, Rimiez, Pessicart and the residential hills to the north.",
    },
    {
      key: "ouest" as const,
      blurb: "Fabron, Saint-Isidore, l'Arénas, Carras and the more rural areas to the west.",
    },
  ],
};

const homeFaqFr: FaqItem[] = [
  {
    question: "Y a-t-il un serrurier ouvert maintenant près de moi à Nice ?",
    answer:
      "Oui, j'interviens 24h/24 et 7j/7 sur Nice, y compris la nuit, le week-end et les jours fériés. Vous m'appelez, je vous dis dans combien de temps je peux être sur place.",
  },
  {
    question: "Combien coûte un serrurier en urgence à Nice ?",
    answer:
      "À partir de 149 € TTC pour une ouverture de porte standard, avec une majoration de 50% après 19h, le week-end et les jours fériés. Le détail complet est sur ma page tarifs, et le prix exact est toujours annoncé avant que j'intervienne.",
  },
  {
    question: "Donnez-vous un devis avant l'intervention ?",
    answer:
      "Systématiquement, et ce n'est pas une option : la loi oblige tout serrurier à annoncer son prix avant de commencer les travaux. Je vous le confirme sur place avant d'intervenir.",
  },
  {
    question: "Dans quels quartiers de Nice intervenez-vous ?",
    answer:
      "Je couvre l'ensemble de Nice — centre, est, nord et ouest, du Vieux-Nice à Fabron en passant par Cimiez ou Riquier. Voir le détail sur la page zones d'intervention.",
  },
  {
    question: "Pourquoi choisir un artisan serrurier solo plutôt qu'une grande enseigne ?",
    answer:
      "Parce que c'est moi qui réponds au téléphone, moi qui viens, et moi qui reste joignable après l'intervention si besoin. Pas d'intermédiaire, pas de sous-traitance, un seul interlocuteur du premier appel à la fin du chantier.",
  },
  {
    question: "Travaillez-vous aussi bien sur les urgences que sur les projets programmés ?",
    answer:
      "Oui. Les urgences (porte claquée, effraction) passent en priorité, mais j'interviens tout autant sur des projets réfléchis à l'avance comme un changement de serrure ou l'installation d'une porte blindée.",
  },
  {
    question: "Comment ouvrez-vous une porte claquée sans l'abîmer ?",
    answer:
      "Le plus souvent grâce à la méthode radio, aussi appelée technique de la feuille Mika ou du by-pass : une fine plaque rigide glissée entre le cadre et le pêne, qui libère le mécanisme sans dommage dans 99% des cas. Pour une clé cassée, j'extrais le morceau avec un outil adapté ; le perçage ne reste qu'une solution de tout dernier recours.",
  },
];

const homeFaqEn: FaqItem[] = [
  {
    question: "Is there a locksmith open near me in Nice right now?",
    answer:
      "Yes, I work 24/7 across Nice, including nights, weekends and public holidays. You call me, and I'll tell you how long it'll take me to get there.",
  },
  {
    question: "How much does an emergency locksmith cost in Nice?",
    answer:
      "From €149 incl. VAT for a standard door opening, with a 50% surcharge after 7pm, on weekends and public holidays. Full details are on my pricing page, and the exact price is always given before I start any work.",
  },
  {
    question: "Do you give a quote before the work starts?",
    answer:
      "Always, and it isn't optional: French law requires every locksmith to quote a price before starting any work. I confirm it on site before I begin.",
  },
  {
    question: "Which areas of Nice do you cover?",
    answer:
      "I cover the whole of Nice — center, east, north and west, from the Old Town to Fabron, through Cimiez or Riquier. See the full detail on the areas covered page (in French).",
  },
  {
    question: "Why choose a solo locksmith over a large company?",
    answer:
      "Because I'm the one who answers the phone, the one who shows up, and the one you can still reach afterward if needed. No middleman, no subcontracting — a single point of contact from the first call to the end of the job.",
  },
  {
    question: "Do you handle both emergencies and planned projects?",
    answer:
      "Yes. Emergencies (a slammed door, a break-in) take priority, but I handle planned projects just as much, like a lock change or fitting a security door.",
  },
  {
    question: "How do you open a slammed door without damaging it?",
    answer:
      "Most often with the radio method, also called the shim or by-pass technique: a thin rigid strip slid between the frame and the bolt, which releases the mechanism without damage in 99% of cases. For a broken key, I extract the piece with a proper tool; drilling stays a last-resort solution.",
  },
];

const featuredPosts = [
  {
    href: "/blog/que-faire-apres-un-cambriolage/",
    title: "Que faire après un cambriolage : les bons réflexes",
    excerpt:
      "Ne rien toucher, faire opposition, porter plainte sous 48h, prévenir l'assurance : l'ordre des démarches recommandé après une effraction.",
    category: "Sécurité",
    accent: "border-t-urgent",
    tagClass: "bg-urgent/10 text-urgent",
  },
  {
    href: "/blog/certification-a2p-serrure/",
    title: "Certification A2P : ce que ce sigle change vraiment pour votre serrure",
    excerpt:
      "Une, deux ou trois étoiles : ce que signifie réellement cette certification, et comment vérifier qu'elle est authentique avant de payer.",
    category: "Comprendre",
    accent: "border-t-navy",
    tagClass: "bg-navy/10 text-navy",
  },
  {
    href: "/blog/porte-qui-claque-avant-appeler-serrurier/",
    title: "Porte qui claque : les bons réflexes avant d'appeler un serrurier",
    excerpt:
      "Vérifications à faire avant d'appeler, ce qu'il ne faut surtout pas tenter seul, et comment reconnaître une annonce à prix d'appel trop bas.",
    category: "Conseil pratique",
    accent: "border-t-steel",
    tagClass: "bg-steel/10 text-steel",
  },
];

const strings = {
  fr: {
    badge: "Disponible maintenant — devis par téléphone",
    h1a: "Serrurier à",
    h1b: ", disponible 24h/24",
    lead: "Porte claquée, serrure bloquée, effraction : vous m'expliquez la situation, j'annonce un prix avant de me déplacer. Ce qui compte, c'est la transparence, pas les promesses.",
    call: "Appeler",
    seePricing: "Voir les tarifs",
    heroAlt: "Benoît, artisan serrurier, à côté d'une serrure moderne posée à Nice",
    introTitle: "Un serrurier artisan, pas une plateforme d'intermédiaires",
    intro: [
      "Je m'appelle Benoît, artisan serrurier installé au 2 Rue Antoine Gautier à Nice. Chez moi, pas de standard qui redirige votre appel vers un sous-traitant inconnu. C'est moi qui décroche, moi qui diagnostique au téléphone, et moi qui viens sur place.",
      "J'interviens sur toute la ville, du Vieux-Nice à la Promenade des Anglais, en passant par Cimiez, Riquier ou Fabron. Mon métier couvre tout ce qui touche à la serrurerie : ouverture de porte, dépannage d'une serrure bloquée, changement de cylindre, installation ou blindage de porte, et mise en sécurité après une effraction. Dans tous les cas, j'annonce le prix avant de commencer. Résultat : sur les 150 avis 5 étoiles laissés sur ma fiche Google, un point revient sans cesse — aucune mauvaise surprise sur la facture.",
      "Toutes les situations ne se ressemblent pas. Certaines demandent une réponse immédiate — une porte claquée avec les clés à l'intérieur, un cambriolage à sécuriser dans l'heure. D'autres se préparent calmement, comme le remplacement d'une serrure vieillissante ou l'installation d'une porte blindée avant l'été. Dans les deux cas, la méthode reste la même : je diagnostique d'abord, j'annonce un prix ensuite, et je n'interviens qu'une fois que vous avez dit oui.",
      "Cette approche vaut aussi bien pour un particulier dans son appartement du centre-ville que pour un syndic ou une agence immobilière gérant plusieurs biens sur Nice. Concrètement, vous avez les mêmes explications claires, le même devis annoncé avant travaux, et un seul interlocuteur à qui vous référer d'une intervention à l'autre.",
    ],
    aboutLink: "En savoir plus sur mon parcours →",
    crimeTitle: "Les cambriolages à Nice, une réalité à prendre au sérieux",
    crimeText:
      "Selon les chiffres du ministère de l'Intérieur publiés en mars 2026, le taux de cambriolages à Nice est remonté à 6,1 pour 1 000 logements en 2025, contre 5,4‰ l'année précédente. Ce niveau est désormais supérieur à la moyenne nationale (5,6‰), et bien au-dessus de la moyenne du département des Alpes-Maritimes (4,3‰). Une porte correctement équipée reste le moyen le plus direct de limiter ce risque, où que vous soyez dans la ville.",
    causesTitle: "Pourquoi fait-on appel à un serrurier à Nice",
    causes: [
      {
        title: "La porte claquée, cas le plus fréquent",
        text: "C'est l'appel le plus courant : une porte qui se referme seule, avec les clés restées à l'intérieur. Dans la grande majorité des cas, elle s'ouvre sans dommage grâce à la méthode radio, sans qu'il soit nécessaire de forcer la serrure ou de percer.",
      },
      {
        title: "L'air marin use les mécanismes plus vite",
        text: "À Nice, la proximité de la mer joue un rôle qu'on sous-estime souvent : l'air chargé en sel accélère la corrosion des pièces métalliques, en particulier sur les serrures exposées (portes de garage, entrées donnant sur l'extérieur, portails). Un cylindre qui tourne difficilement ou une clé qui force sont souvent les premiers signes, bien avant la panne complète.",
      },
      {
        title: "L'effraction ou la tentative d'effraction",
        text: "Porte forcée, cylindre arraché ou cadre endommagé : la priorité est de sécuriser le logement dans l'heure, puis de proposer une solution durable, idéalement certifiée A2P, pour ne pas revivre la même situation.",
      },
      {
        title: "L'usure naturelle après plusieurs années",
        text: "Une serrure vieillit même sans incident : jeu dans le mécanisme, clé de plus en plus difficile à tourner, verrouillage qui accroche. Un changement anticipé coûte toujours moins cher et prend moins de temps qu'un dépannage en urgence.",
      },
    ],
    howItWorks: "Comment se déroule mon intervention",
    pricingTitle: "Mes tarifs à Nice",
    services: "Mes services de serrurerie à Nice",
    brands: "Marques de serrures que je pose à Nice",
    feature1Title: "Prix annoncé avant",
    feature1Text:
      "Le devis vous est communiqué avant que je touche à quoi que ce soit — c'est une obligation légale que je respecte systématiquement, urgence ou non.",
    feature2Title: "Un artisan, pas un centre d'appel",
    feature2Text:
      "Vous parlez directement à la personne qui va intervenir chez vous, du premier appel jusqu'à la fin du chantier.",
    feature3Title: "5,0/5 sur plus de 150 avis",
    feature3Text:
      "Des avis Google vérifiés, pas des témoignages mis en scène. Vous pouvez les consulter avant de m'appeler.",
    areaTitle: "Zone d'intervention à Nice",
    areaText: (address: string) => (
      <>
        J&apos;interviens dans tous les quartiers de Nice, depuis le {address}. Choisissez
        votre secteur pour voir les quartiers couverts et le délai d&apos;intervention
        habituel.
      </>
    ),
    blogTitle: "Mes derniers articles",
    blogSubtitle: "Conseils pratiques et explications claires, sans jargon commercial.",
    blogRead: "Lire l'article",
    blogSeeAll: "Voir tous les articles →",
    quartiersSubtitle: "Quelques quartiers où j'interviens régulièrement",
    seeAllQuartiers: "Voir tous les quartiers couverts →",
    contactTitle: "Un devis ou une intervention ?",
    contactText: "Décrivez votre situation, je vous réponds vite. Pour une urgence, l'appel reste le moyen le plus rapide.",
    faqTitle: "Questions fréquentes",
  },
  en: {
    badge: "Available now — quote by phone",
    h1a: "Locksmith in",
    h1b: ", available 24/7",
    lead: "Door slammed shut, jammed lock, break-in: you explain the situation, I quote a price before I travel to you. What matters is transparency, not promises.",
    call: "Call",
    seePricing: "See pricing",
    heroAlt: "Benoît, locksmith, next to a modern lock fitted in Nice",
    introTitle: "A locksmith craftsman, not a platform of middlemen",
    intro: [
      "My name is Benoît, a locksmith based at 2 Rue Antoine Gautier in Nice. There's no switchboard here redirecting your call to an unknown subcontractor. I'm the one who picks up, the one who diagnoses over the phone, and the one who comes to you.",
      "I work across the whole city, from the Old Town to the Promenade des Anglais, through Cimiez, Riquier or Fabron. My work covers everything locksmithing-related: door opening, fixing a stuck lock, cylinder replacement, fitting or reinforcing a door, and securing a home after a break-in. In every case, I quote the price before I start. The result: across 150 five-star reviews on my Google listing, one point comes up again and again — no bad surprises on the bill.",
      "Not every situation is the same. Some need an immediate response — a door slammed shut with the keys inside, a break-in to secure within the hour. Others get planned calmly, like replacing an aging lock or fitting a security door before summer. Either way, the method stays the same: I diagnose first, quote a price second, and only start once you've said yes.",
      "This approach applies just as much to someone in their city-center apartment as to a property manager or letting agency handling several properties in Nice. In practice, that means the same clear explanations, the same price quoted before work starts, and a single point of contact from one callout to the next.",
    ],
    aboutLink: "More about me (in French) →",
    crimeTitle: "Break-ins in Nice, a risk worth taking seriously",
    crimeText:
      "According to figures from the French Interior Ministry published in March 2026, the burglary rate in Nice rose to 6.1 per 1,000 homes in 2025, up from 5.4‰ the previous year. That level is now above the national average (5.6‰), and well above the average for the Alpes-Maritimes département (4.3‰). A properly fitted door remains the most direct way to limit this risk, wherever you are in the city.",
    causesTitle: "Why people call a locksmith in Nice",
    causes: [
      {
        title: "A slammed door, the most common case",
        text: "It's the most frequent call: a door that shuts on its own, with the keys left inside. In the vast majority of cases it opens without any damage using the radio method, with no need to force the lock or drill it.",
      },
      {
        title: "Sea air wears mechanisms out faster",
        text: "In Nice, being close to the sea plays a role that's often underestimated: salt-laden air speeds up corrosion of metal parts, especially on exposed locks (garage doors, entrances facing outside, gates). A cylinder that turns stiffly or a key that needs force are often the first signs, well before a full failure.",
      },
      {
        title: "Break-ins and attempted break-ins",
        text: "A forced door, a torn-out cylinder, a damaged frame: the priority is to secure the home within the hour, then offer a lasting solution, ideally A2P-certified, so it doesn't happen again.",
      },
      {
        title: "Natural wear after several years",
        text: "A lock ages even without an incident: play in the mechanism, a key that's harder and harder to turn, a latch that catches. Replacing it early always costs less and takes less time than an emergency callout.",
      },
    ],
    howItWorks: "How my callout works",
    pricingTitle: "My pricing in Nice",
    services: "My locksmith services in Nice",
    brands: "Lock brands I install in Nice",
    feature1Title: "Price quoted upfront",
    feature1Text:
      "You get the quote before I touch anything — it's a legal requirement I always follow, emergency or not.",
    feature2Title: "A craftsman, not a call center",
    feature2Text: "You speak directly to the person who'll show up at your place, from the first call to the end of the job.",
    feature3Title: "5.0/5 from over 150 reviews",
    feature3Text: "Verified Google reviews, not staged testimonials. You can check them before you call.",
    areaTitle: "Service area in Nice",
    areaText: (address: string) => (
      <>
        I cover every neighborhood in Nice, working out of {address}. Choose your area to
        see the neighborhoods covered and the usual response time.
      </>
    ),
    blogTitle: "From the blog (in French)",
    blogSubtitle: "Practical advice and clear explanations, no sales pitch.",
    blogRead: "Read the article",
    blogSeeAll: "See all articles (in French) →",
    quartiersSubtitle: "Some of the neighborhoods I regularly work in",
    seeAllQuartiers: "See all neighborhoods covered (in French) →",
    contactTitle: "Need a quote or a callout?",
    contactText: "Describe your situation and I'll reply quickly. For an emergency, calling remains the fastest way to reach me.",
    faqTitle: "Frequently asked questions",
  },
};

export default function HomeBody() {
  const { locale } = useLocale();
  const t = strings[locale];
  const cards = sectorCards[locale];
  const homeFaq = locale === "en" ? homeFaqEn : homeFaqFr;

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-steel/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-urgent/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 grid gap-10 sm:grid-cols-2 items-center">
          <div className="text-center sm:text-left">
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              {t.badge}
            </span>
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
              {t.h1a} <span className="text-urgent">Nice</span>
              {t.h1b}
            </h1>
            <p className="mt-4 text-slate leading-relaxed max-w-xl mx-auto sm:mx-0">{t.lead}</p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mt-6">
              <a
                href={business.phone.href}
                className="inline-block whitespace-nowrap bg-urgent text-white font-semibold px-5 py-3 rounded-full shadow-lg shadow-urgent/20 hover:opacity-90 transition-opacity"
              >
                {t.call} <span className="font-tabular-nums">{business.phone.display}</span>
              </a>
              <Link
                href="/tarifs-serrurier-nice/"
                className="inline-block whitespace-nowrap border border-navy/20 text-navy font-semibold px-5 py-3 rounded-full hover:bg-white transition-colors"
              >
                {t.seePricing}
              </Link>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
            <Image
              src="/images/serrurier-nice-porte-cle.webp"
              alt={t.heroAlt}
              fill
              sizes="(min-width: 640px) 40vw, 100vw"
              className="object-cover"
              priority
            />
          </div>
        </div>
      </section>

      <StatBar locale={locale} />

      <section className="mx-auto max-w-5xl px-4 pt-8 pb-2">
        <TrustBadges locale={locale} />
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-8 sm:grid-cols-2 items-start">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">{t.introTitle}</h2>
            <div className="text-slate leading-relaxed flex flex-col gap-3">
              {t.intro.map((paragraph, index) => (
                <p key={index}>{paragraph}</p>
              ))}
              <p>
                <Link href="/a-propos/" className="text-steel underline font-semibold">
                  {t.aboutLink}
                </Link>
              </p>
            </div>
          </div>
          <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
            <Image
              src={introPhoto.src}
              alt={introPhoto.alt}
              fill
              sizes="(min-width: 640px) 40vw, 100vw"
              className="object-cover"
            />
          </div>
        </div>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-heading text-2xl font-bold text-navy mb-8 text-center">{t.causesTitle}</h2>
          <div className="grid gap-6 sm:grid-cols-2">
            {t.causes.map((cause) => (
              <div key={cause.title}>
                <p className="font-heading font-semibold text-navy mb-1.5">{cause.title}</p>
                <p className="text-sm text-slate leading-relaxed">{cause.text}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="text-center font-heading font-semibold text-navy mb-6">{t.howItWorks}</h2>
        <ProcessSteps locale={locale} />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6 text-center">{t.pricingTitle}</h2>
        <PricingTable locale={locale} />
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14">
        <QuoteBlock locale={locale} />
      </section>

      <section className="bg-navy py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-heading text-2xl font-bold text-cream mb-6 text-center">{t.services}</h2>
          <ServiceGrid locale={locale} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="font-heading text-2xl font-bold text-navy mb-4 text-center">{t.brands}</h2>
        <BrandsSection locale={locale} />
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-5xl px-4 grid gap-6 sm:grid-cols-3">
          <div className="rounded-xl border border-navy/10 p-5 shadow-sm">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-steel/10 text-steel mb-3">
              <PriceTagIcon className="w-5 h-5" />
            </span>
            <p className="font-heading font-semibold text-navy mb-2">{t.feature1Title}</p>
            <p className="text-sm text-slate leading-relaxed">{t.feature1Text}</p>
          </div>
          <div className="rounded-xl border border-navy/10 p-5 shadow-sm">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-steel/10 text-steel mb-3">
              <HandshakeIcon className="w-5 h-5" />
            </span>
            <p className="font-heading font-semibold text-navy mb-2">{t.feature2Title}</p>
            <p className="text-sm text-slate leading-relaxed">{t.feature2Text}</p>
          </div>
          <div className="rounded-xl border border-navy/10 p-5 shadow-sm">
            <span className="inline-flex items-center justify-center w-11 h-11 rounded-full bg-steel/10 text-steel mb-3">
              <StarIcon className="w-5 h-5" />
            </span>
            <p className="font-heading font-semibold text-navy mb-2">{t.feature3Title}</p>
            <p className="text-sm text-slate leading-relaxed">{t.feature3Text}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pt-10">
        <InsuranceBanner locale={locale} />
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <ReviewsSection locale={locale} />
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="font-heading text-2xl font-bold text-navy mb-2 text-center">{t.blogTitle}</h2>
        <p className="text-slate text-sm mb-8 text-center max-w-xl mx-auto">{t.blogSubtitle}</p>
        <div className="grid gap-4 sm:grid-cols-3">
          {featuredPosts.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className={`block bg-white border border-navy/10 border-t-4 ${post.accent} rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow h-full`}
            >
              <span
                className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}
              >
                {post.category}
              </span>
              <p className="font-heading font-semibold text-navy">{post.title}</p>
              <p className="text-sm text-slate mt-1">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-steel mt-3">
                {t.blogRead}
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          ))}
        </div>
        <p className="text-center mt-6">
          <Link href="/blog/" className="text-steel underline text-sm">
            {t.blogSeeAll}
          </Link>
        </p>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-2">{t.crimeTitle}</h2>
        <p className="text-slate leading-relaxed">{t.crimeText}</p>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="font-heading text-2xl font-bold text-navy mb-2 text-center">{t.areaTitle}</h2>
        <p className="text-slate text-sm mb-8 text-center max-w-2xl mx-auto">
          {t.areaText(business.address.full)}
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((sector) => (
            <Link
              key={sector.key}
              href={sectorPages[sector.key].href}
              className="block rounded-xl border border-navy/10 bg-white p-5 shadow-sm hover:border-steel hover:shadow-md transition-all"
            >
              <p className="font-heading font-bold text-navy mb-1.5">
                {locale === "en" ? "Locksmith in" : "Serrurier à"} {sectorPages[sector.key].label}
              </p>
              <p className="text-sm text-slate leading-relaxed">{sector.blurb}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-center font-heading font-semibold text-navy text-sm mb-3">
            {t.quartiersSubtitle}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {featuredQuartiers.map((quartier) => (
              <Link
                key={quartier}
                href={quartierHref(quartier)}
                className="inline-block bg-white border border-navy/10 text-navy text-sm px-3.5 py-1.5 rounded-full hover:border-steel hover:text-steel transition-colors"
              >
                {quartier}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-center mt-4">
          <Link href="/zones-intervention-nice/" className="text-steel underline text-sm">
            {t.seeAllQuartiers}
          </Link>
        </p>
        <div className="mt-8">
          <LazyMap locale={locale} />
        </div>
      </section>

      <section id="contact" className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="font-heading text-2xl font-bold text-navy mb-4">{t.contactTitle}</h2>
        <p className="text-slate text-sm mb-4">{t.contactText}</p>
        <ContactForm locale={locale} />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6">{t.faqTitle}</h2>
        <FaqAccordion items={homeFaq} />
      </section>
    </>
  );
}
