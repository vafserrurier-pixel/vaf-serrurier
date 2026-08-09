import Link from "next/link";
import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import ProcessSteps from "./ProcessSteps";
import ReviewsSection from "./ReviewsSection";
import FaqAccordion, { FaqItem } from "./FaqAccordion";
import LazyMap from "./LazyMap";
import CtaBlock from "./CtaBlock";
import { business } from "@/lib/business";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { sectorPages } from "@/lib/quartiers";

export type ContentBlock = { heading: string; paragraphs: string[] };

export default function QuartierPageTemplate({
  quartier,
  sector,
  intro,
  blocks,
  travelEstimate,
  faq,
  path,
  relatedServices,
}: {
  quartier: string;
  sector: keyof typeof sectorPages;
  intro: string[];
  blocks: ContentBlock[];
  travelEstimate: string;
  faq: FaqItem[];
  path: string;
  relatedServices: { href: string; label: string }[];
}) {
  const url = `${business.domain}${path}`;
  const sectorInfo = sectorPages[sector];

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Serrurier à ${quartier}, Nice`,
          description: intro[0],
          url,
        })}
      />
      <JsonLd data={faqSchema(faq)} />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Zones d'intervention", url: `${business.domain}/zones-intervention-nice/` },
          { name: quartier, url },
        ])}
      />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-4xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Zones d'intervention", href: "/zones-intervention-nice/" },
              { name: quartier, href: path },
            ]}
          />
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            Serrurier à {quartier}, Nice
          </h1>
          {intro.map((paragraph, index) => (
            <p key={index} className="mt-4 text-slate leading-relaxed max-w-2xl">
              {paragraph}
            </p>
          ))}
          <a
            href={business.phone.href}
            className="inline-block mt-6 bg-urgent text-white font-semibold px-6 py-3 rounded-full"
          >
            Appeler <span className="font-tabular-nums">{business.phone.display}</span>
          </a>
          <p className="mt-3 text-xs text-slate">
            Délai habituel depuis le {business.address.full} : {travelEstimate}
          </p>
        </div>
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading font-semibold text-navy mb-4">
          Comment se déroule mon intervention
        </h2>
        <ProcessSteps />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10 flex flex-col gap-8">
        {blocks.map((block) => (
          <div key={block.heading}>
            <h2 className="font-heading text-xl font-bold text-navy mb-2">
              {block.heading}
            </h2>
            {block.paragraphs.map((paragraph, index) => (
              <p key={index} className="text-slate leading-relaxed mb-2">
                {paragraph}
              </p>
            ))}
          </div>
        ))}
      </section>

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
            Localisation
          </h2>
          <p className="text-slate text-sm mb-4">
            {quartier} fait partie du secteur{" "}
            <Link href={sectorInfo.href} className="text-steel underline">
              {sectorInfo.label}
            </Link>
            . Voir aussi{" "}
            <Link href="/zones-intervention-nice/" className="text-steel underline">
              tous les quartiers couverts
            </Link>
            .
          </p>
          <LazyMap />
        </div>
        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-4">
            Services disponibles à {quartier}
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

      <section className="mx-auto max-w-4xl px-4 pb-14">
        <CtaBlock title={`Besoin d'un serrurier à ${quartier} ?`} />
      </section>
    </>
  );
}
