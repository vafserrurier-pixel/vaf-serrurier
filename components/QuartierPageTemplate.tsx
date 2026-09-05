import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";
import JsonLd from "./JsonLd";
import Breadcrumbs from "./Breadcrumbs";
import ProcessSteps from "./ProcessSteps";
import ReviewsSection from "./ReviewsSection";
import FaqAccordion, { FaqItem } from "./FaqAccordion";
import LazyMap from "./LazyMap";
import CtaBlock from "./CtaBlock";
import PricingTable from "./PricingTable";
import BrandsSection from "./BrandsSection";
import TrustBadges from "./TrustBadges";
import StatBar from "./StatBar";
import { business } from "@/lib/business";
import { breadcrumbSchema, faqSchema, serviceSchema } from "@/lib/schema";
import { quartierHref, relatedQuartiers, sectorPages } from "@/lib/quartiers";
import { pickPortrait } from "@/lib/photos";

export type ContentBlock = { heading: string; paragraphs: ReactNode[] };

export default function QuartierPageTemplate({
  quartier,
  sector,
  intro,
  blocks,
  travelEstimate,
  faq,
  path,
  relatedServices,
  crimeIntro,
  crimeClosing,
}: {
  quartier: string;
  sector: keyof typeof sectorPages;
  intro: string[];
  blocks: ContentBlock[];
  travelEstimate: string;
  faq: FaqItem[];
  path: string;
  relatedServices: { href: string; label: string }[];
  crimeIntro?: string;
  crimeClosing?: string;
}) {
  const url = `${business.domain}${path}`;
  const sectorInfo = sectorPages[sector];
  const nearbyQuartiers = relatedQuartiers(sector, quartier);
  const photo = pickPortrait(quartier);

  return (
    <>
      <JsonLd
        data={serviceSchema({
          name: `Serrurier à ${quartier}, Nice`,
          description: intro[0],
          url,
          areaServed: { type: "Place", name: `${quartier}, Nice` },
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
        <div className="mx-auto max-w-5xl px-4 py-10 grid gap-8 sm:grid-cols-2 items-center">
          <div>
            <Breadcrumbs
              items={[
                { name: "Accueil", href: "/" },
                { name: "Zones d'intervention", href: "/zones-intervention-nice/" },
                { name: quartier, href: path },
              ]}
            />
            <span className="inline-flex items-center gap-1.5 bg-emerald-50 text-emerald-700 text-xs font-semibold px-3 py-1 rounded-full mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" aria-hidden="true" />
              Disponible maintenant — devis gratuit par téléphone
            </span>
            <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
              Serrurier à {quartier}, Nice
            </h1>
            {intro.map((paragraph, index) => (
              <p key={index} className="mt-4 text-slate leading-relaxed max-w-2xl">
                {paragraph}
              </p>
            ))}
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
            <p className="mt-3 text-xs text-slate">
              Délai habituel depuis le {business.address.full} : {travelEstimate}
            </p>
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
        </div>
      </section>

      <StatBar />

      <section className="mx-auto max-w-4xl px-4 pt-8 pb-2">
        <TrustBadges />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading font-semibold text-navy mb-2 text-center">
          Comment se déroule mon intervention à {quartier}
        </h2>
        <p className="text-slate text-sm mb-6 text-center max-w-xl mx-auto">
          De votre appel au règlement : un déroulement simple, sans zone d&apos;ombre.
        </p>
        <ProcessSteps place={quartier} />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">
          Mes tarifs à {quartier}
        </h2>
        <PricingTable />
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
          Marques de serrures que je pose
        </h2>
        <BrandsSection />
      </section>

      <section className="mx-auto max-w-4xl px-4 py-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-2">
          Les cambriolages à Nice, une réalité à prendre au sérieux
        </h2>
        <p className="text-slate leading-relaxed">
          {crimeIntro ?? `À ${quartier} comme ailleurs à Nice, la sécurité de la porte d'entrée reste un sujet à prendre au sérieux.`}
          {" "}Selon les chiffres du ministère de l&apos;Intérieur publiés en mars 2026, le
          taux de cambriolages à Nice est remonté à 0,61% des logements en 2025,
          contre 0,54% l&apos;année précédente. Ce niveau est désormais supérieur
          à la moyenne nationale (0,56%), et bien au-dessus de la moyenne du
          département des Alpes-Maritimes (0,43%). Cette donnée concerne
          l&apos;ensemble de la ville de
          Nice, qui ne compte pas d&apos;arrondissements officiels — il n&apos;existe
          pas de statistique publique à l&apos;échelle du seul quartier de {quartier}.{" "}
          {crimeClosing ?? "Une porte correctement équipée reste le moyen le plus direct de limiter ce risque, où que vous soyez dans la ville."}
        </p>
        <p className="text-xs text-slate mt-2">
          Source :{" "}
          <a
            href="https://www.interieur.gouv.fr/Interstats/Infractions-et-sentiment-d-insecurite/Cambriolages"
            target="_blank"
            rel="noopener noreferrer"
            className="underline hover:text-steel"
          >
            Ministère de l&apos;Intérieur — statistiques officielles des cambriolages
          </a>
        </p>
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
          {nearbyQuartiers.length > 0 && (
            <div className="mt-6">
              <p className="text-sm text-slate mb-2">
                J&apos;interviens aussi dans ces quartiers du secteur {sectorInfo.label} :
              </p>
              <ul className="flex flex-wrap gap-2">
                {nearbyQuartiers.map((name) => (
                  <li key={name}>
                    <Link
                      href={quartierHref(name)}
                      className="block bg-white border border-navy/10 rounded-full px-3 py-1 text-sm text-steel hover:border-steel"
                    >
                      {name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>
          )}
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
