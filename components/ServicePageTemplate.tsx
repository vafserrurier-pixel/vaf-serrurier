import Image from "next/image";
import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import ProcessSteps from "./ProcessSteps";
import ReviewsSection from "./ReviewsSection";
import FaqAccordion, { FaqItem } from "./FaqAccordion";
import LazyMap from "./LazyMap";
import CtaBlock from "./CtaBlock";
import Link from "next/link";
import { business } from "@/lib/business";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { featuredQuartiers, quartierHref } from "@/lib/quartiers";
import type { ReactNode } from "react";

export type ServiceSection = { heading: string; paragraphs: string[] };
export type ServiceImage = { src: string; alt: string };

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
}) {
  const url = `${business.domain}${path}`;

  return (
    <>
      <JsonLd
        data={serviceSchema({ name: breadcrumbLabel, description: lead, url })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
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
        <div className="mx-auto max-w-5xl px-4 py-10 grid gap-8 sm:grid-cols-2 items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Accueil", href: "/" },
                { name: breadcrumbLabel, href: path },
              ]}
            />
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{h1}</h1>
            <p className="mt-4 text-slate leading-relaxed max-w-2xl">{lead}</p>
            <a
              href={business.phone.href}
              className="inline-block mt-6 bg-urgent text-white font-semibold px-6 py-3 rounded-full"
            >
              Appeler <span className="font-tabular-nums">{business.phone.display}</span>
            </a>
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
              />
            </div>
          )}
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading font-semibold text-navy mb-4">
          Comment se déroule mon intervention
        </h2>
        <ProcessSteps />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 flex flex-col gap-8">
        {sections.map((section) => (
          <div key={section.heading}>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              {section.heading}
            </h2>
            {section.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate leading-relaxed mb-2">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </section>

      {extra}

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">
          Questions fréquentes
        </h2>
        <FaqAccordion items={faq} />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <ReviewsSection />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 grid gap-8 sm:grid-cols-2">
        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-4">
            Zone d&apos;intervention
          </h2>
          <p className="text-slate text-sm mb-4">
            J&apos;interviens dans tous les quartiers de Nice depuis le{" "}
            {business.address.full}.{" "}
            <Link href="/zones-intervention-nice/" className="text-steel underline">
              Voir tous les secteurs
            </Link>
            .
          </p>
          <LazyMap />
        </div>
        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-4">
            Autres interventions
          </h2>
          <ul className="flex flex-col gap-2">
            {relatedServices.map((service) => (
              <li key={service.href}>
                <Link
                  href={service.href}
                  className="block bg-white border border-navy/10 rounded-lg px-4 py-2.5 text-sm text-navy hover:border-steel"
                >
                  {service.label}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">
          Ce service près de chez vous
        </h2>
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
          Voir les 46 quartiers couverts
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

      <section className="mx-auto max-w-4xl px-4 pb-14">
        <CtaBlock />
      </section>
    </>
  );
}
