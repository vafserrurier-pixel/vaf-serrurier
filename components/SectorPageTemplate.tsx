import Image from "next/image";
import Link from "next/link";
import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import ServiceGrid from "./ServiceGrid";
import ReviewsSection from "./ReviewsSection";
import FaqAccordion, { FaqItem } from "./FaqAccordion";
import CtaBlock from "./CtaBlock";
import LazyMap from "./LazyMap";
import BlogPreview from "./BlogPreview";
import { business } from "@/lib/business";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { isQuartierBuilt, quartierHref, sectorPages } from "@/lib/quartiers";
import { pickPortrait } from "@/lib/photos";

export type ContentBlock = { heading: string; paragraphs: string[] };

export default function SectorPageTemplate({
  title,
  sectorKey,
  intro,
  blocks,
  faq,
  quartiers,
  path,
}: {
  title: string;
  sectorKey: keyof typeof sectorPages;
  intro: string[];
  blocks: ContentBlock[];
  faq: FaqItem[];
  quartiers: readonly string[];
  path: string;
}) {
  const url = `${business.domain}${path}`;
  const siblingSectors = (Object.keys(sectorPages) as (keyof typeof sectorPages)[]).filter(
    (key) => key !== sectorKey,
  );
  const photo = pickPortrait(sectorKey);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: title,
          description: intro[0],
          url,
          areaServed: { type: "Place", name: sectorPages[sectorKey].label },
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Zones d'intervention", url: `${business.domain}/zones-intervention-nice/` },
          { name: title, url },
        ])}
      />

      <section className="mx-auto max-w-5xl px-4 py-10 grid gap-8 sm:grid-cols-2 items-center">
        <div>
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Zones d'intervention", href: "/zones-intervention-nice/" },
              { name: title, href: path },
            ]}
          />
          <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
            <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
            Disponible maintenant — devis gratuit par téléphone
          </span>
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{title}</h1>
          <div className="mt-4 text-slate leading-relaxed max-w-2xl flex flex-col gap-3">
            {intro.map((paragraph, index) => (
              <p key={index}>{paragraph}</p>
            ))}
          </div>
          <div className="flex flex-wrap items-center gap-3 mt-6">
            <a
              href={business.phone.href}
              className="inline-block bg-urgent text-white font-semibold px-6 py-3 rounded-full"
            >
              Appeler <span className="font-tabular-nums">{business.phone.display}</span>
            </a>
            <Link
              href="/tarifs-serrurier-nice/"
              className="inline-block whitespace-nowrap border border-navy/20 text-navy font-semibold px-6 py-3 rounded-full hover:bg-white transition-colors"
            >
              Voir les tarifs
            </Link>
          </div>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm order-first sm:order-last">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="(min-width: 640px) 40vw, 100vw"
            className="object-cover"
            priority
            fetchPriority="high"
          />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 pb-10">
        <div className="mt-2">
          <LazyMap />
        </div>

        <h2 className="font-heading text-xl font-bold text-navy mt-10 mb-4">
          Quartiers couverts
        </h2>
        <ul className="flex flex-wrap gap-2">
          {quartiers.map((quartier) =>
            isQuartierBuilt(quartier) ? (
              <li key={quartier}>
                <Link
                  href={quartierHref(quartier)}
                  className="block bg-white border border-navy/10 rounded-full px-4 py-1.5 text-sm text-steel hover:border-steel"
                >
                  {quartier}
                </Link>
              </li>
            ) : (
              <li
                key={quartier}
                className="block bg-cream border border-navy/10 rounded-full px-4 py-1.5 text-sm text-slate"
              >
                {quartier}
              </li>
            ),
          )}
        </ul>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 flex flex-col gap-8">
        {blocks.map((block) => (
          <div key={block.heading}>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">{block.heading}</h2>
            {block.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate leading-relaxed mb-2">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">Questions fréquentes</h2>
        <FaqAccordion items={faq} />
      </section>

      <section className="bg-navy py-14">
        <div className="mx-auto max-w-4xl px-4">
          <h2 className="font-heading text-xl font-bold text-cream mb-4">Mes services</h2>
          <ServiceGrid />
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <ReviewsSection />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <BlogPreview />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">Les autres secteurs de Nice</h2>
        <div className="flex flex-wrap gap-3">
          {siblingSectors.map((key) => (
            <Link
              key={key}
              href={sectorPages[key].href}
              className="block bg-white border border-navy/10 rounded-lg px-4 py-2.5 text-sm text-navy hover:border-steel"
            >
              Serrurier à {sectorPages[key].label}
            </Link>
          ))}
          <Link
            href="/zones-intervention-nice/"
            className="block bg-cream border border-navy/10 rounded-lg px-4 py-2.5 text-sm text-steel hover:border-steel"
          >
            Voir tous les quartiers →
          </Link>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <CtaBlock title={`Besoin d'un serrurier ${title.replace("Serrurier à", "à")} ?`} />
      </section>
    </>
  );
}
