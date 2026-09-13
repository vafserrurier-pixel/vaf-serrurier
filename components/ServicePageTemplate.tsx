import Image from "next/image";
import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import ProcessSteps, { ProcessStep } from "./ProcessSteps";
import ReviewsSection from "./ReviewsSection";
import FaqAccordion, { FaqItem } from "./FaqAccordion";
import LazyMap from "./LazyMap";
import CtaBlock from "./CtaBlock";
import RelatedServicesGrid from "./RelatedServicesGrid";
import { WhatsAppIcon } from "./Icons";
import Link from "next/link";
import { business } from "@/lib/business";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { featuredQuartiers, quartierHref } from "@/lib/quartiers";
import { builtCommunes, communeHref } from "@/lib/communes";
import { contentDates } from "@/lib/contentDates.generated";
import type { ReactNode } from "react";
import type { Locale } from "@/lib/locale";

export type ServiceSection = {
  heading: string;
  paragraphs: ReactNode[];
  /**
   * Icone optionnelle affichee en tete de section quand sectionsVariant="cards".
   * Passer un element deja instancie (ex. <DoorIcon className="w-5 h-5" />),
   * pas une reference de composant : ce contenu traverse la frontiere
   * serveur/client de LocalizedServicePage, qui ne peut serialiser que des
   * elements React, pas des fonctions.
   */
  Icon?: ReactNode;
  /**
   * Accent visuel optionnel pour distinguer une carte qui le justifie
   * reellement (urgence, information legale importante) des autres cartes
   * du meme groupe. N'utiliser que sur les cartes qui le meritent vraiment :
   * applique partout, l'effet de hierarchie disparait.
   */
  accent?: "urgent";
  /** Ancre optionnelle (id DOM) pour permettre un scroll direct vers cette carte, ex. depuis un selecteur de situations. */
  id?: string;
  /**
   * Contenu additionnel affiche apres les paragraphes, HORS de la balise <p>
   * qui les enveloppe (utile pour des listes <ul>/<ol> ou tout element de
   * bloc : une liste ne peut pas etre imbriquee dans un <p>, ce qui casse
   * l'hydratation React si on l'y met directement).
   */
  extra?: ReactNode;
};
export type ServiceImage = { src: string; alt: string };

const strings = {
  fr: {
    home: "Accueil",
    badge: "Disponible maintenant : devis gratuit par téléphone",
    call: "Appeler",
    whatsapp: "Écrire sur WhatsApp",
    seePricing: "Voir les tarifs",
    seeGuide: "Voir le guide complet",
    howItWorks: "Comment se déroule mon intervention",
    faqTitle: "Questions fréquentes",
    readMore: "Pour aller plus loin",
    serviceArea: "Zone d'intervention",
    serviceAreaText: (address: string) => (
      <>J&apos;interviens dans tous les quartiers de Nice depuis le {address}.</>
    ),
    seeAllAreas: "Voir tous les secteurs",
    otherServices: "Autres interventions",
    nearYou: "Ce service près de chez vous",
    seeAllQuartiers: "Voir les 46 quartiers couverts",
    nearbyTowns: "Villes voisines de Nice",
  },
  en: {
    home: "Home",
    badge: "Available now: free quote by phone",
    call: "Call",
    whatsapp: "Message on WhatsApp",
    seePricing: "See pricing",
    seeGuide: "See the full guide",
    howItWorks: "How my callout works",
    faqTitle: "Frequently asked questions",
    readMore: "To go further",
    serviceArea: "Service area",
    serviceAreaText: (address: string) => (
      <>I cover every neighborhood in Nice, working out of {address}.</>
    ),
    seeAllAreas: "See all areas (in French)",
    otherServices: "Other services",
    nearYou: "This service near you",
    seeAllQuartiers: "See all 46 neighborhoods covered (in French)",
    nearbyTowns: "Towns near Nice",
  },
};

export default function ServicePageTemplate({
  h1,
  lead,
  sections,
  faq,
  breadcrumbLabel,
  path,
  relatedServices,
  image,
  extra,
  locale = "fr",
  processSteps,
  relatedArticle,
  guide,
  guideFaqForSchema,
  sectionsVariant = "default",
  headingScale = "default",
  heroTrustNote,
  sectionsHeading,
}: {
  h1: string;
  lead: string;
  sections: ServiceSection[];
  faq: FaqItem[];
  breadcrumbLabel: string;
  path: string;
  relatedServices: { href: string; label: string }[];
  image?: ServiceImage;
  /** Contenu additionnel optionnel, inséré après les sections principales (avant la FAQ). */
  extra?: ReactNode;
  locale?: Locale;
  /** Étapes "Comment se déroule mon intervention" propres à ce service. */
  processSteps?: ProcessStep[];
  /** Lien retour vers l'article de blog le plus pertinent pour ce service (maillage interne bidirectionnel). */
  relatedArticle?: { href: string; label: string };
  /** Section "guide complet" optionnelle (voir ServiceGuideSection), affichee juste avant le bloc d'appel final. */
  guide?: ReactNode;
  /**
   * FAQ de la section guide, pour le schema uniquement (la FAQ visuelle est
   * rendue par ServiceGuideSection lui-meme, via `guide`). Combinee avec
   * `faq` dans un seul faqSchema() pour eviter deux blocs FAQPage
   * concurrents sur la meme page.
   */
  guideFaqForSchema?: FaqItem[];
  /**
   * Variante d'affichage des sections principales : "cards" transforme
   * chaque section en carte avec icone/bordure/ombre. Reservee pour l'instant
   * a une page pilote ; "default" preserve exactement le rendu historique
   * pour toutes les autres pages qui ne passent pas cette prop.
   */
  sectionsVariant?: "default" | "cards";
  /**
   * Echelle typographique des titres H2 de la page (sections, "Comment se
   * deroule", FAQ). "lg" agrandit ces titres sur desktop tout en gardant la
   * taille historique sur mobile. "default" ne change rien pour les pages
   * qui ne passent pas cette prop.
   */
  headingScale?: "default" | "lg";
  /** Bandeau de confiance optionnel (avis/anciennete) affiche sous les boutons du hero. */
  heroTrustNote?: ReactNode;
  /** Titre H2 optionnel affiche au-dessus des sections principales, pour introduire/justifier le groupe (utile surtout avec sectionsVariant="cards"). */
  sectionsHeading?: string;
}) {
  const url = `${business.domain}${path}`;
  const t = strings[locale];
  const h2Size = headingScale === "lg" ? "text-2xl sm:text-3xl" : "text-2xl";

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: breadcrumbLabel,
          description: lead,
          url,
          dateModified: contentDates[path],
        })}
      />
      <JsonLd data={faqSchema(guideFaqForSchema ? [...faq, ...guideFaqForSchema] : faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: t.home, url: business.domain },
          { name: breadcrumbLabel, url },
        ])}
      />
      {image && (
        <JsonLd
          data={{
            "@context": "https://schema.org",
            "@type": "ImageObject",
            contentUrl: `${business.domain}${image.src}`,
            description: image.alt,
          }}
        />
      )}

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-5xl px-4 py-12 grid gap-8 sm:grid-cols-2 items-center">
          <div>
            <Breadcrumbs
              locale={locale}
              items={[
                { name: t.home, href: "/" },
                { name: breadcrumbLabel, href: path },
              ]}
            />
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              {t.badge}
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{h1}</h1>
            <p className="mt-4 text-slate leading-relaxed max-w-2xl">{lead}</p>
            <div className="flex flex-wrap items-center gap-3 mt-6">
              <a
                href={business.phone.href}
                className="inline-block bg-urgent text-white font-semibold px-6 py-3 rounded-full"
              >
                {t.call} <span className="font-tabular-nums">{business.phone.display}</span>
              </a>
              <a
                href={business.whatsapp.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={t.whatsapp}
                className="inline-flex items-center justify-center bg-emerald-600 text-white p-3 rounded-full hover:opacity-90"
              >
                <WhatsAppIcon className="w-5 h-5" />
              </a>
              <Link
                href="/tarifs-serrurier-nice/"
                className="inline-block whitespace-nowrap border border-navy/20 text-navy font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors"
              >
                {t.seePricing}
              </Link>
              {guide && (
                <a
                  href="#guide"
                  className="inline-flex items-center gap-1 text-sm font-semibold text-steel hover:underline"
                >
                  {t.seeGuide}
                  <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                    <path
                      d="M12 5v14M5 12l7 7 7-7"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                    />
                  </svg>
                </a>
              )}
            </div>
            {heroTrustNote && <div className="mt-4">{heroTrustNote}</div>}
          </div>
          {image && (
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm order-first sm:order-last">
              <Image
                src={image.src}
                alt={image.alt}
                fill
                sizes="(min-width: 640px) 40vw, 100vw"
                className="object-cover"
                priority
                fetchPriority="high"
              />
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className={`font-heading ${h2Size} font-bold text-navy mb-6 text-center`}>{t.howItWorks}</h2>
        <ProcessSteps locale={locale} steps={processSteps} />
      </section>

      <section className="bg-white border-y border-navy/10">
        <div className="mx-auto max-w-4xl px-4 py-12">
          {sectionsVariant === "cards" ? (
            <div className="bg-steel/10 border border-navy/10 rounded-2xl p-6 sm:p-8">
              {sectionsHeading && (
                <h2 className={`font-heading ${h2Size} font-bold text-navy mb-6 text-center`}>
                  {sectionsHeading}
                </h2>
              )}
              <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
                {sections.map((section) => (
                  <div
                    key={section.heading}
                    id={section.id}
                    className={`relative bg-white rounded-xl border shadow-sm p-4 ${
                      section.id ? "scroll-mt-24" : ""
                    } ${section.accent === "urgent" ? "border-urgent/40" : "border-navy/10"}`}
                  >
                    {section.accent === "urgent" && (
                      <span className="absolute -top-2 -right-2 bg-urgent text-white text-[10px] font-semibold px-2 py-0.5 rounded-full shadow-sm">
                        Important
                      </span>
                    )}
                    {section.Icon && (
                      <span
                        className={`inline-flex items-center justify-center w-8 h-8 rounded-lg mb-2 ${
                          section.accent === "urgent" ? "bg-urgent/15 text-urgent" : "bg-steel/10 text-steel"
                        }`}
                      >
                        {section.Icon}
                      </span>
                    )}
                    <h2 className="font-heading text-lg font-bold text-navy mb-1.5">
                      {section.heading}
                    </h2>
                    {section.paragraphs.map((paragraph, index) => (
                      <p key={index} className="text-slate text-sm leading-relaxed mb-2">
                        {paragraph}
                      </p>
                    ))}
                    {section.extra}
                  </div>
                ))}
              </div>
            </div>
          ) : (
            <div className="flex flex-col gap-8">
              {sections.map((section) => (
                <div key={section.heading}>
                  <h2 className={`font-heading ${h2Size} font-bold text-navy mb-3`}>
                    {section.heading}
                  </h2>
                  {section.paragraphs.map((paragraph, index) => (
                    <p key={index} className="text-slate leading-relaxed mb-2">
                      {paragraph}
                    </p>
                  ))}
                  {section.extra}
                </div>
              ))}
            </div>
          )}
        </div>
      </section>

      {extra}

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className={`font-heading ${h2Size} font-bold text-navy mb-6 text-center`}>{t.faqTitle}</h2>
        <FaqAccordion items={faq} />
      </section>

      {relatedArticle && (
        <section className="mx-auto max-w-4xl px-4 pb-12">
          <p className="text-slate text-sm">
            {t.readMore} :{" "}
            <Link href={relatedArticle.href} className="text-steel underline">
              {relatedArticle.label}
            </Link>
          </p>
        </section>
      )}

      <section className="bg-white border-y border-navy/10">
        <div className="mx-auto max-w-4xl px-4 py-12">
          <ReviewsSection locale={locale} />
        </div>
      </section>

      {guide}

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6 text-center">{t.otherServices}</h2>
        <RelatedServicesGrid items={relatedServices} locale={locale} />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6 text-center">{t.serviceArea}</h2>
        <p className="text-slate text-sm mb-4">
          {t.serviceAreaText(business.address.full)}{" "}
          <Link href="/zones-intervention-nice/" className="text-steel underline">
            {t.seeAllAreas}
          </Link>
          .
        </p>
        <LazyMap locale={locale} />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6 text-center">{t.nearYou}</h2>
        <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
          {featuredQuartiers.map((quartier) => (
            <Link
              key={quartier}
              href={quartierHref(quartier)}
              className="bg-white border border-navy/10 rounded-lg px-4 py-3 text-sm text-navy hover:border-steel hover:shadow-sm transition-all"
            >
              {quartier}
            </Link>
          ))}
        </div>
        <Link
          href="/zones-intervention-nice/"
          className="inline-flex items-center gap-1 text-sm font-semibold text-steel mt-4 hover:underline"
        >
          {t.seeAllQuartiers}
          <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
            <path
              d="M5 12h14M13 6l6 6-6 6"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </Link>
      </section>

      {builtCommunes.length > 0 && (
        <section className="mx-auto max-w-4xl px-4 py-12">
          <h2 className="font-heading text-2xl font-bold text-navy mb-6 text-center">{t.nearbyTowns}</h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
            {builtCommunes.map((commune) => (
              <Link
                key={commune}
                href={communeHref(commune)}
                className="bg-white border border-navy/10 rounded-lg px-4 py-3 text-sm text-navy hover:border-steel hover:shadow-sm transition-all"
              >
                {commune}
              </Link>
            ))}
          </div>
        </section>
      )}

      <section className="mx-auto max-w-4xl px-4 py-12 pb-14">
        <CtaBlock locale={locale} />
      </section>
    </>
  );
}
