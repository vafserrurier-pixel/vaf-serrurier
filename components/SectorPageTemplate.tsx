import Link from "next/link";
import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import ServiceGrid from "./ServiceGrid";
import CtaBlock from "./CtaBlock";
import LazyMap from "./LazyMap";
import { business } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/schema";
import { isQuartierBuilt, quartierHref } from "@/lib/quartiers";

export default function SectorPageTemplate({
  title,
  paragraphs,
  quartiers,
  path,
}: {
  title: string;
  paragraphs: string[];
  quartiers: readonly string[];
  path: string;
}) {
  const url = `${business.domain}${path}`;

  return (
    <>
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Zones d'intervention", url: `${business.domain}/zones-intervention-nice/` },
          { name: title, url },
        ])}
      />

      <section className="mx-auto max-w-4xl px-4 py-10">
        <Breadcrumbs
          items={[
            { name: "Accueil", href: "/" },
            { name: "Zones d'intervention", href: "/zones-intervention-nice/" },
            { name: title, href: path },
          ]}
        />
        <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{title}</h1>
        <div className="mt-4 text-slate leading-relaxed max-w-2xl flex flex-col gap-3">
          {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
          ))}
        </div>

        <div className="mt-8">
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

        <h2 className="font-heading text-xl font-bold text-navy mt-10 mb-4">
          Mes services
        </h2>
        <ServiceGrid />

        <div className="mt-10">
          <CtaBlock />
        </div>
      </section>
    </>
  );
}
