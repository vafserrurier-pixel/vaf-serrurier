"use client";

import Image from "next/image";
import Link from "next/link";
import ProcessSteps from "@/components/ProcessSteps";
import AvailabilityBadge from "@/components/AvailabilityBadge";
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
import ArticleTable from "@/components/ArticleTable";
import { homeFaqFr } from "./homeFaq";
import BlogPreview from "@/components/BlogPreview";
import InsuranceBanner from "@/components/InsuranceBanner";
import { PriceTagIcon, HandshakeIcon, StarIcon, WhatsAppIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { sectorPages, featuredLocalPages } from "@/lib/quartiers";
import { builtCommunes, communeHref } from "@/lib/communes";
import { useLocale } from "@/lib/locale";
import { formatRating } from "@/lib/reviewFormat";
import { useReviewStats } from "@/components/ReviewStatsProvider";

// Selection propre a la home (page la plus visitee) : 5 services avec une
// vraie photo, couvrant chaque grande categorie (urgence, ouverture,
// remplacement, renfort, coffre-fort) plutot que les 3 plus demandes
// generiques utilises par defaut ailleurs sur le site.
const homeFeaturedHrefs = [
  "/urgence-serrurier-nice/",
  "/ouverture-de-porte-nice/",
  "/changement-serrure-nice/",
  "/blindage-porte-nice/",
  "/ouverture-de-coffre-fort-nice/",
];

const introPhoto = {
  src: "/images/pool/benoit-serrurier-pose-porte-nice.webp",
  alt: "Benoît, serrurier à Nice",
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

const homeFaqEn: FaqItem[] = [
  {
    question: "Is there a locksmith open near me in Nice right now?",
    answer:
      "Yes, I work 24/7 across Nice, including nights, weekends and public holidays. You call me, and I'll tell you how long it'll take me to get there.",
  },
  {
    question: "How much does an emergency locksmith cost in Nice?",
    answer:
      "From €149 incl. VAT for a standard door opening. After 7pm, on weekends and public holidays: €189 for a slammed door, €209 for a locked door. Full details are on my pricing page, and the exact price is always given before I start any work.",
  },
  {
    question: "Do you give a quote before the work starts?",
    answer:
      "Always, and it isn't optional: French law requires every locksmith to quote a price before starting any work. I confirm it on site before I begin.",
  },
  {
    question: "Which areas of Nice do you cover?",
    answer:
      "I cover the whole of Nice (center, east, north and west), from the Old Town to Fabron, through Cimiez or Riquier. See the full detail on the areas covered page (in French).",
  },
  {
    question: "Why choose a solo locksmith over a large company?",
    answer:
      "Because I'm the one who answers the phone, the one who shows up, and the one you can still reach afterward if needed. No middleman, no subcontracting: a single point of contact from the first call to the end of the job.",
  },
  {
    question: "Do you handle both emergencies and planned projects?",
    answer:
      "Yes. Emergencies (a slammed door, a break-in) take priority, but I handle planned projects just as much, like a lock change or fitting a security door.",
  },
  {
    question: "How do you open a slammed door without damaging it?",
    answer:
      "Most often with the radio method, also called the shim or by-pass technique: a thin rigid strip slid between the frame and the bolt, which releases the mechanism without damage: 99% of slammed doors are opened with no damage. For a broken key, I extract the piece with a proper tool; drilling stays a last-resort solution.",
  },
];

const strings = {
  en: {
    badge: "Available now: free quote by phone",
    h1a: "Locksmith in",
    h1b: ", available 24/7",
    lead: "Door slammed shut, jammed lock, break-in: you explain the situation, I quote a price before I travel to you. What matters is transparency, not promises.",
    call: "Call",
    whatsapp: "Message on WhatsApp",
    seePricing: "See pricing",
    heroAlt: "Locksmith Nice",
    heroCaption: "Benoît, locksmith in Nice",
    introTitle: "A locksmith craftsman, not a platform of middlemen",
    intro: [
      "My name is Benoît, a locksmith based at 2 Rue Antoine Gautier in Nice. There's no switchboard here redirecting your call to an unknown subcontractor. I'm the one who picks up, the one who diagnoses over the phone, and the one who comes to you.",
      `I work across the whole city, from the Old Town to the Promenade des Anglais, through Cimiez, Riquier or Fabron. My work covers everything locksmithing-related: door opening, fixing a stuck lock, cylinder replacement, fitting or reinforcing a door, and securing a home after a break-in. In every case, I quote the price before I start. The result: across the {count} reviews left on my Google listing, one point comes up again and again: no bad surprises on the bill.`,
      "Not every situation is the same. Some need an immediate response (a door slammed shut with the keys inside, a break-in to secure within the hour). Others get planned calmly, like replacing an aging lock or fitting a security door before summer. Either way, the method stays the same: I diagnose first, quote a price second, and only start once you've said yes.",
      "This approach applies just as much to someone in their city-center apartment as to a property manager or letting agency handling several properties in Nice. In practice, that means the same clear explanations, the same price quoted before work starts, and a single point of contact from one callout to the next.",
    ],
    aboutLink: "More about me (in French) →",
    crimeTitle: "Break-ins in Nice, a risk worth taking seriously",
    crimeText:
      "According to figures from the French Interior Ministry published in March 2026, the burglary rate in Nice rose to 0.61% of homes in 2025, up from 0.54% the previous year. That level is now above the national average (0.56%), and well above the average for the Alpes-Maritimes département (0.43%). A properly fitted door remains the most direct way to limit this risk, wherever you are in the city.",
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
    howItWorksSubtitle: "From your call to payment: a simple process, no grey areas.",
    pricingTitle: "My pricing in Nice",
    services: "My locksmith services in Nice",
    servicesSubtitle: "From emergency callouts to full security upgrades, one craftsman for everything, no subcontracting.",
    brands: "Lock brands I install in Nice",
    feature1Title: "Price quoted upfront",
    feature1Text:
      "You get the quote before I touch anything, it's a legal requirement I always follow, emergency or not.",
    feature2Title: "A craftsman, not a call center",
    feature2Text: "You speak directly to the person who'll show up at your place, from the first call to the end of the job.",
    feature3Title: "{rating}/5 from {count} reviews",
    feature3Text: "Verified Google reviews, not staged testimonials. You can check them before you call.",
    areaTitle: "Service area in Nice",
    areaText: (address: string) => (
      <>
        I cover every neighborhood in Nice, working out of {address}. Choose your area to
        see the neighborhoods covered.
      </>
    ),
    quartiersSubtitle: "The areas I work in",
    seeAllQuartiers: "See all areas (in French) →",
    contactTitle: "Need a quote or a callout?",
    contactText: "Describe your situation and I'll reply quickly. For an emergency, calling remains the fastest way to reach me.",
    faqTitle: "Frequently asked questions",
  },
};

function HomeBodyEn() {
  const locale = "en" as const;
  const { rating, count } = useReviewStats();
  // Les textes contiennent {count} et {rating} : on les remplit avec les valeurs lues en direct.
  const fill = (text: string) =>
    text.replace("{count}", String(count)).replace("{rating}", formatRating(rating, locale));
  const t = strings[locale];
  const cards = sectorCards[locale];
  const homeFaq = homeFaqEn;

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-steel/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-navy/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 grid gap-10 sm:grid-cols-2 items-center">
          <div className="text-center sm:text-left">
            <AvailabilityBadge locale={locale} />
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
              {t.h1a} <span className="text-steel">Nice</span>
              {t.h1b}
            </h1>
            <p className="mt-4 text-slate leading-relaxed max-w-xl mx-auto sm:mx-0">{t.lead}</p>
            <div className="flex flex-col sm:flex-row items-center sm:items-start gap-3 mt-6">
              <a
                href={business.phone.href}
                data-hero-cta
                className="inline-block whitespace-nowrap bg-urgent text-white font-semibold px-5 py-3 rounded-full shadow-lg shadow-urgent/20 hover:opacity-90 transition-opacity"
              >
                {t.call} <span className="font-phone font-bold">{business.phone.display}</span>
              </a>
              <a
                href={business.whatsapp.href}
                data-hero-cta
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.whatsapp}
                className="inline-flex items-center justify-center bg-emerald-600 text-white p-3 rounded-full hover:opacity-90"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <Link
                href="/tarifs-serrurier-nice/"
                prefetch={false}
                className="inline-block whitespace-nowrap border border-navy/20 text-navy font-semibold px-5 py-3 rounded-full hover:bg-white transition-colors"
              >
                {t.seePricing}
              </Link>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/pool/benoit-serrurier-mecanisme-porte-nice.webp"
                alt={t.heroAlt}
                fill
                sizes="(min-width: 640px) 40vw, 100vw"
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>
            <p className="mt-2 text-xs text-slate text-center sm:text-left">{t.heroCaption}</p>
          </div>
        </div>
      </section>

      <StatBar locale={locale} delay="30 min" delayLabel="In an emergency" delayUnit="in Nice" />

      <section className="mx-auto max-w-5xl px-4 pt-8 pb-2">
        <TrustBadges locale={locale} />
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-8 sm:grid-cols-2 items-start">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">{t.introTitle}</h2>
            <div className="text-slate leading-relaxed flex flex-col gap-3">
              {t.intro.map((paragraph, index) => (
                <p key={index}>{fill(paragraph)}</p>
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
        <h2 className="text-center font-heading font-semibold text-navy mb-2">{t.howItWorks}</h2>
        <p className="text-slate text-sm mb-6 text-center max-w-xl mx-auto">{t.howItWorksSubtitle}</p>
        <ProcessSteps locale={locale} delayEstimate="30 minutes" />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6 text-center text-center">{t.pricingTitle}</h2>
        <PricingTable locale={locale} />
      </section>

      <section className="mx-auto max-w-5xl px-4 pb-14">
        <QuoteBlock locale={locale} />
      </section>

      <section className="bg-navy py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-heading text-2xl font-bold text-cream mb-2 text-center">{t.services}</h2>
          <p className="text-cream/70 text-sm mb-8 text-center max-w-xl mx-auto">{t.servicesSubtitle}</p>
          <ServiceGrid locale={locale} featuredHrefs={homeFeaturedHrefs} />
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
            <p className="font-heading font-semibold text-navy mb-2">{fill(t.feature3Title)}</p>
            <p className="text-sm text-slate leading-relaxed">{t.feature3Text}</p>
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pt-10">
        <InsuranceBanner locale={locale} />
      </section>

      <section className="bg-white border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <ReviewsSection locale={locale} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <BlogPreview locale={locale} />
      </section>

      <section className="bg-white border-y border-navy/10">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="font-heading text-2xl font-bold text-navy mb-3">{t.crimeTitle}</h2>
          <p className="text-slate leading-relaxed">{t.crimeText}</p>
          <p className="text-xs text-slate mt-2">
            {locale === "en" ? "Source: " : "Source : "}
            <a
              href="https://www.interieur.gouv.fr/Interstats/Infractions-et-sentiment-d-insecurite/Cambriolages"
              target="_blank"
              rel="noopener noreferrer"
              className="underline hover:text-steel"
            >
              {locale === "en"
                ? "French Interior Ministry: official burglary statistics"
                : "Ministère de l'Intérieur : statistiques officielles des cambriolages"}
            </a>
          </p>
        </div>
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
              prefetch={false}
              className="block rounded-xl border border-navy/10 bg-white p-5 shadow-sm hover:border-steel hover:shadow-md transition-all"
            >
              <h3 className="font-heading font-bold text-navy mb-1.5">
                {locale === "en" ? "Locksmith in" : "Serrurier à"} {sectorPages[sector.key].label}
              </h3>
              <p className="text-sm text-slate leading-relaxed">{sector.blurb}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-center font-heading font-semibold text-navy text-sm mb-3">
            {t.quartiersSubtitle}
          </h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {featuredLocalPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                prefetch={false}
                className="inline-block bg-white border border-navy/10 text-navy text-sm px-3.5 py-1.5 rounded-full hover:border-steel hover:text-steel transition-colors"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-center mt-4">
          <Link href="/zones-intervention-nice/" className="text-steel underline text-sm">
            {t.seeAllQuartiers}
          </Link>
        </p>
        {builtCommunes.length > 0 && (
          <div className="mt-8">
            <h3 className="text-center font-heading font-semibold text-navy text-sm mb-3">
              {locale === "en" ? "Towns near Nice" : "Villes voisines de Nice"}
            </h3>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {builtCommunes.map((commune) => (
                <Link
                  key={commune}
                  href={communeHref(commune)}
                  prefetch={false}
                  className="inline-block bg-white border border-navy/10 text-navy text-sm px-3.5 py-1.5 rounded-full hover:border-steel hover:text-steel transition-colors"
                >
                  {commune}
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className="mt-8">
          <LazyMap locale={locale} />
        </div>
      </section>

      <section id="contact" className="bg-white border-y border-navy/10">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <h2 className="font-heading text-2xl font-bold text-navy mb-4">{t.contactTitle}</h2>
          <p className="text-slate text-sm mb-4">{t.contactText}</p>
          <ContactForm locale={locale} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6 text-center">{t.faqTitle}</h2>
        <FaqAccordion items={homeFaq} />
      </section>
    </>
  );
}

const linkClass = "text-steel underline";

const frStrings = {
  badge: "Disponible maintenant : devis gratuit par téléphone",
  h1a: "Serrurier à",
  h1b: ", 24h/24 : un artisan, sur place en 30 minutes",
  lead: "Porte claquée, clé cassée, serrure bloquée ou effraction : je vous annonce le prix au téléphone, et j'arrive en 30 minutes partout à Nice, de jour comme de nuit.",
  call: "Appeler",
  whatsapp: "Écrire sur WhatsApp",
  seePricing: "Voir les tarifs",
  heroAlt: "Serrurier Nice",
  heroCaption: "Benoît, artisan serrurier à Nice",
  aboutLink: "En savoir plus sur mon parcours →",
  servicesTitle: "Mes services de serrurerie à Nice",
  servicesSubtitle: "De l'urgence à la sécurisation complète, un seul artisan pour tout, sans sous-traitance.",
  areaTitle: "Zone d'intervention à Nice",
  quartiersSubtitle: "Les secteurs où j'interviens",
  seeAllQuartiers: "Voir tous les secteurs →",
  contactTitle: "Un devis ou une intervention ?",
  contactText: "Décrivez votre situation, je vous réponds vite. Pour une urgence, l'appel reste le moyen le plus rapide.",
  faqTitle: "Questions fréquentes",
};

function HomeBodyFr() {
  const t = frStrings;
  const locale = "fr" as const;
  const cards = sectorCards.fr;

  return (
    <>
      <section className="relative overflow-hidden bg-white">
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -top-32 -right-32 w-[28rem] h-[28rem] rounded-full bg-steel/10 blur-3xl"
        />
        <div
          aria-hidden="true"
          className="pointer-events-none absolute -bottom-24 -left-24 w-72 h-72 rounded-full bg-navy/5 blur-3xl"
        />
        <div className="relative mx-auto max-w-5xl px-4 py-16 grid gap-10 sm:grid-cols-2 items-center">
          <div className="text-center sm:text-left">
            <AvailabilityBadge locale={locale} />
            <h1 className="font-heading text-4xl sm:text-5xl font-bold text-navy">
              {t.h1a} <span className="text-steel">Nice</span>
              {t.h1b}
            </h1>
            <p className="mt-4 text-slate leading-relaxed max-w-xl mx-auto sm:mx-0">{t.lead}</p>
            <div className="flex flex-col sm:flex-row items-stretch sm:items-start gap-3 mt-6">
              <a
                href={business.phone.href}
                data-hero-cta
                className="inline-block whitespace-nowrap text-center bg-urgent text-white font-semibold px-5 py-3.5 sm:py-3 rounded-full shadow-lg shadow-urgent/20 hover:opacity-90 transition-opacity"
              >
                {t.call} <span className="font-phone font-bold">{business.phone.display}</span>
              </a>
              <a
                href={business.whatsapp.href}
                data-hero-cta
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.whatsapp}
                className="inline-flex items-center justify-center gap-2 bg-emerald-600 text-white font-semibold px-5 py-3.5 sm:p-3 rounded-full hover:opacity-90"
              >
                <WhatsAppIcon className="w-5 h-5" />
                <span className="sm:hidden">{t.whatsapp}</span>
              </a>
              <Link
                href="/tarifs-serrurier-nice/"
                prefetch={false}
                className="text-center text-steel underline underline-offset-4 font-semibold py-2 sm:inline-block sm:whitespace-nowrap sm:no-underline sm:border sm:border-navy/20 sm:text-navy sm:px-5 sm:py-3 sm:rounded-full sm:hover:bg-white transition-colors"
              >
                {t.seePricing}
              </Link>
            </div>
          </div>
          <div>
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm">
              <Image
                src="/images/pool/benoit-serrurier-mecanisme-porte-nice.webp"
                alt={t.heroAlt}
                fill
                sizes="(min-width: 640px) 40vw, 100vw"
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>
            <p className="mt-2 text-xs text-slate text-center sm:text-left">{t.heroCaption}</p>
          </div>
        </div>
      </section>

      <StatBar locale={locale} delay="30 min" delayLabel="En urgence" delayUnit="à Nice" />

      <section className="mx-auto max-w-5xl px-4 pt-8 pb-8">
        <TrustBadges locale={locale} hideReviews gridOnMobile />
      </section>

      <section className="bg-white border-y border-navy/10">
        <div className="mx-auto max-w-5xl px-4 py-14">
          <ReviewsSection locale={locale} />
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <div className="grid gap-8 sm:grid-cols-2 items-start">
          <div>
            <h2 className="font-heading text-2xl font-bold text-navy mb-4">Un serrurier artisan, pas une plateforme</h2>
            <div className="text-slate leading-relaxed flex flex-col gap-3">
              <p>
                Je m&apos;appelle Benoît, serrurier depuis 2011. J&apos;ai créé mon entreprise en 2023, au 2 rue
                Antoine Gautier, à Nice. Quand vous appelez, c&apos;est moi qui décroche, moi qui vous conseille au
                téléphone, et moi qui viens. Pas de standard, pas de sous-traitant envoyé à votre place.
              </p>
              <p>
                J&apos;interviens dans tous les quartiers de Nice et dans les villes voisines. Pour une urgence comme
                pour un projet, la méthode est la même : je regarde d&apos;abord, je vous donne le prix ensuite, et je
                ne commence qu&apos;une fois que vous avez dit oui.
              </p>
              <p>
                Je pose et je dépanne toutes les marques : Fichet, Picard, Héraclès, Cisa, Vak, Vachette, Bricard,
                Mottura, Kaba, Iseo, et Valente Securystar pour les portes blindées. Je vous conseille la marque
                adaptée à votre porte, pas celle qui m&apos;arrange.
              </p>
              <p>
                Je travaille pour les particuliers comme pour les syndics et les agences immobilières, avec les mêmes
                prix affichés et un seul interlocuteur d&apos;une intervention à l&apos;autre.
              </p>
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

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6 text-center">Mes prix les plus demandés</h2>
        <ArticleTable
          headers={["Intervention", "En journée", "Après 19 h, week-end, jours fériés"]}
          rows={[
            [
              <>
                <Link href="/ouverture-de-porte-nice/" className={linkClass}>
                  Porte claquée
                </Link>
                , ouverture sans dégât
              </>,
              "149 €",
              "189 €",
            ],
            ["Porte fermée à clé, clés perdues", "149 € + cylindre (dès 249 €)", "209 € + cylindre"],
            [
              <>
                <Link href="/changement-serrure-nice/" className={linkClass}>
                  Cylindre neuf
                </Link>
                , clés remises sur place
              </>,
              "Dès 249 €",
              "Prix annoncé au téléphone",
            ],
            [
              <>
                <Link href="/poignee-blindee-nice/" className={linkClass}>
                  Poignée blindée
                </Link>{" "}
                posée
              </>,
              "349 €",
              "Sur rendez-vous",
            ],
            [
              <>
                <Link href="/serrure-carenee-nice/" className={linkClass}>
                  Serrure carénée 5 points
                </Link>{" "}
                posée
              </>,
              "1 249 €",
              "Sur rendez-vous",
            ],
            [
              <>
                <Link href="/blindage-porte-nice/" className={linkClass}>
                  Blindage de porte
                </Link>{" "}
                (porte conservée)
              </>,
              "Dès 2 689 €",
              "Sur rendez-vous",
            ],
            [
              <Link key="bloc" href="/installation-porte-blindee-nice/" className={linkClass}>
                Bloc-porte blindé neuf
              </Link>,
              "Dès 3 490 €",
              "Sur rendez-vous",
            ],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          Tous les prix sont TTC, déplacement compris à Nice. Pour les serrures Fichet, Picard et Muel, le prix est sur
          devis : ces serrures coûtent cher et le prix varie d&apos;un modèle à l&apos;autre. Le détail de{" "}
          <Link href="/tarifs-serrurier-nice/" className={linkClass}>
            tous mes tarifs
          </Link>{" "}
          est sur une page dédiée, et un article explique{" "}
          <Link href="/blog/prix-serrurier-nice-guide/" className={linkClass}>
            ce qui fait varier un prix
          </Link>
          .
        </p>
      </section>

      <section className="bg-navy py-14">
        <div className="mx-auto max-w-5xl px-4">
          <h2 className="font-heading text-2xl font-bold text-cream mb-2 text-center">{t.servicesTitle}</h2>
          <p className="text-cream/70 text-sm mb-8 text-center max-w-xl mx-auto">{t.servicesSubtitle}</p>
          <ServiceGrid locale={locale} featuredHrefs={homeFeaturedHrefs} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="font-heading text-2xl font-bold text-navy mb-4">Pourquoi on m&apos;appelle à Nice</h2>
        <ul className="list-disc pl-5 flex flex-col gap-2 text-slate leading-relaxed">
          <li>
            <strong className="text-navy">La porte claquée</strong>, de loin le cas le plus fréquent : la porte se
            referme, les clés sont restées à l&apos;intérieur. Elle s&apos;ouvre presque toujours sans dégât, sans
            percer ni forcer la serrure.
          </li>
          <li>
            <strong className="text-navy">L&apos;effraction ou la tentative</strong> : cylindre arraché, porte forcée,
            cadre abîmé. La priorité est de{" "}
            <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
              sécuriser le logement le soir même
            </Link>
            , puis de choisir à tête reposée un renfort qui évite que ça recommence.
          </li>
          <li>
            <strong className="text-navy">L&apos;air marin</strong> : à Nice, le sel accélère la corrosion des
            serrures, surtout sur les portes exposées à l&apos;extérieur, les garages et les portails. Une clé qui
            force ou un cylindre qui tourne mal sont souvent les premiers signes, bien avant la panne.
          </li>
          <li>
            <strong className="text-navy">L&apos;usure</strong> : jeu dans le mécanisme, verrouillage qui accroche.
            Changer une serrure avant la panne coûte toujours moins cher qu&apos;un dépannage en urgence.
          </li>
        </ul>
      </section>

      <section className="bg-white py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-2xl font-bold text-navy mb-4">Ce que je vous garantis</h2>
          <ul className="list-disc pl-5 flex flex-col gap-2 text-slate leading-relaxed">
            <li>
              <strong className="text-navy">Le prix avant l&apos;intervention, toujours.</strong> Pour un dépannage à
              domicile, la loi impose un document détaillé avant tous travaux, dès le premier euro, puis une facture
              au-delà de 25 € TTC (
              <a
                href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000033935513"
                target="_blank"
                rel="noopener"
                className={linkClass}
              >
                arrêté du 24 janvier 2017
              </a>
              ). Je le respecte, même en pleine nuit.
            </li>
            <li>
              <strong className="text-navy">Une facture détaillée</strong>, qui décrit les dégâts et les réparations :
              c&apos;est le document que demandent les assurances.
            </li>
            <li>
              <strong className="text-navy">Une vidéo avant/après sur demande</strong>, par WhatsApp ou par e-mail, si
              vous n&apos;êtes pas sur place.
            </li>
            <li>
              <strong className="text-navy">Une pose garantie 2 ans</strong> sur les renforts que j&apos;installe, en
              plus de la garantie du fabricant.
            </li>
            <li>
              <strong className="text-navy">Une assurance RC Pro et décennale</strong> chez APRIL.
            </li>
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <BlogPreview locale={locale} />
      </section>

      <section className="mx-auto max-w-5xl px-4 py-14">
        <h2 className="font-heading text-2xl font-bold text-navy mb-2 text-center">{t.areaTitle}</h2>
        <p className="text-slate text-sm mb-8 text-center max-w-2xl mx-auto">
          J&apos;interviens dans tous les quartiers de Nice, depuis le {business.address.full}. Choisissez votre secteur
          pour voir les quartiers couverts.
        </p>
        <div className="grid gap-4 sm:grid-cols-2">
          {cards.map((sector) => (
            <Link
              key={sector.key}
              href={sectorPages[sector.key].href}
              prefetch={false}
              className="block rounded-xl border border-navy/10 bg-white p-5 shadow-sm hover:border-steel hover:shadow-md transition-all"
            >
              <h3 className="font-heading font-bold text-navy mb-1.5">Serrurier à {sectorPages[sector.key].label}</h3>
              <p className="text-sm text-slate leading-relaxed">{sector.blurb}</p>
            </Link>
          ))}
        </div>
        <div className="mt-8">
          <h3 className="text-center font-heading font-semibold text-navy text-sm mb-3">{t.quartiersSubtitle}</h3>
          <div className="flex flex-wrap items-center justify-center gap-2">
            {featuredLocalPages.map((page) => (
              <Link
                key={page.href}
                href={page.href}
                prefetch={false}
                className="inline-block bg-white border border-navy/10 text-navy text-sm px-3.5 py-1.5 rounded-full hover:border-steel hover:text-steel transition-colors"
              >
                {page.label}
              </Link>
            ))}
          </div>
        </div>
        <p className="text-center mt-4">
          <Link href="/zones-intervention-nice/" className="text-steel underline text-sm">
            {t.seeAllQuartiers}
          </Link>
        </p>
        {builtCommunes.length > 0 && (
          <div className="mt-8">
            <h3 className="text-center font-heading font-semibold text-navy text-sm mb-3">Villes voisines de Nice</h3>
            <div className="flex flex-wrap items-center justify-center gap-2">
              {builtCommunes.map((commune) => (
                <Link
                  key={commune}
                  href={communeHref(commune)}
                  prefetch={false}
                  className="inline-block bg-white border border-navy/10 text-navy text-sm px-3.5 py-1.5 rounded-full hover:border-steel hover:text-steel transition-colors"
                >
                  {commune}
                </Link>
              ))}
            </div>
          </div>
        )}
        <div className="mt-8">
          <LazyMap locale={locale} />
        </div>
      </section>

      <section id="contact" className="bg-white border-y border-navy/10">
        <div className="mx-auto max-w-4xl px-4 py-14">
          <h2 className="font-heading text-2xl font-bold text-navy mb-4">{t.contactTitle}</h2>
          <p className="text-slate text-sm mb-4">{t.contactText}</p>
          <ContactForm locale={locale} />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-14">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6 text-center">{t.faqTitle}</h2>
        <FaqAccordion items={homeFaqFr} />
      </section>
    </>
  );
}

export default function HomeBody() {
  const { locale } = useLocale();
  return locale === "en" ? <HomeBodyEn /> : <HomeBodyFr />;
}
