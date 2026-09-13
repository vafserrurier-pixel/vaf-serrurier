import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import LazyMap from "@/components/LazyMap";
import CtaBlock from "@/components/CtaBlock";
import ServiceGrid from "@/components/ServiceGrid";
import JsonLd from "@/components/JsonLd";
import { business, zones } from "@/lib/business";
import { isQuartierBuilt, quartierHref, sectorPages } from "@/lib/quartiers";
import { communes, communeHref, isCommuneBuilt, builtCommunes } from "@/lib/communes";
import { buildMetadata } from "@/lib/metadata";
import { itemListSchema } from "@/lib/schema";

export const metadata: Metadata = buildMetadata({
  path: "/zones-intervention-nice/",
  title: "Zones d'intervention à Nice | Votre Artisan Français",
  description: "Je me déplace dans tous les quartiers de Nice : centre, est, nord et ouest. Retrouvez tous les secteurs et quartiers couverts.",
});

const sectors: { key: keyof typeof sectorPages; label: string; quartiers: readonly string[] }[] = [
  { key: "centre", label: "Centre", quartiers: zones.centre },
  { key: "est", label: "Est", quartiers: zones.est },
  { key: "nord", label: "Nord", quartiers: zones.nord },
  { key: "ouest", label: "Ouest", quartiers: zones.ouest },
];

// Phrases reprises telles quelles (ou legerement raccourcies) des intros deja
// publiees sur chacune des 4 pages secteur : ne pas inventer de nouveau texte.
const sectorDescriptions: Record<keyof typeof sectorPages, string> = {
  centre:
    "C'est un secteur dense, où se côtoient immeubles Belle Époque, grands ensembles plus récents comme le Brancolar voisin, et quartiers populaires au passé cosmopolite comme La Madeleine ou la Libération.",
  est:
    "C'est un secteur très contrasté, entre bâti historique du port, quartiers populaires denses et hauteurs résidentielles de standing.",
  nord:
    "C'est un secteur qui mêle grands ensembles d'habitat collectif, résidences familiales et villas sur les hauteurs.",
  ouest:
    "Portes de villas et de maisons individuelles, serrures multipoints de résidences plus récentes, zones plus isolées comme Lingostière ou Bellet : c'est le secteur le plus contrasté de la ville.",
};

const totalQuartiers = zones.centre.length + zones.est.length + zones.nord.length + zones.ouest.length;
const builtQuartiersCount = [...zones.centre, ...zones.est, ...zones.nord, ...zones.ouest].filter(
  isQuartierBuilt,
).length;
const builtCommunesCount = builtCommunes.length;
const coverageSentence =
  builtQuartiersCount === totalQuartiers
    ? `Ce sont ${totalQuartiers} quartiers de Nice, tous avec leur page dédiée, plus ${builtCommunesCount} commune${builtCommunesCount > 1 ? "s" : ""} voisine${builtCommunesCount > 1 ? "s" : ""} déjà pourvue${builtCommunesCount > 1 ? "s" : ""} d'une page.`
    : `Ce sont ${totalQuartiers} quartiers de Nice, dont ${builtQuartiersCount} avec leur page dédiée, plus ${builtCommunesCount} commune${builtCommunesCount > 1 ? "s" : ""} voisine${builtCommunesCount > 1 ? "s" : ""} déjà pourvue${builtCommunesCount > 1 ? "s" : ""} d'une page.`;

// Schema.org ItemList : chaque quartier/commune deja affiche sur cette page,
// avec l'URL de sa page dediee si elle existe, sinon celle du secteur/hub qui
// le mentionne (jamais d'URL inventee).
const itemListEntries = [
  ...sectors.flatMap((sector) =>
    sector.quartiers.map((quartier) => ({
      name: quartier,
      url: `${business.domain}${isQuartierBuilt(quartier) ? quartierHref(quartier) : sectorPages[sector.key].href}`,
    })),
  ),
  ...communes.map((commune) => ({
    name: commune,
    url: `${business.domain}${isCommuneBuilt(commune) ? communeHref(commune) : "/zones-intervention-nice/"}`,
  })),
];

export default function ZonesInterventionNicePage() {
  return (
    <>
    <JsonLd data={itemListSchema(itemListEntries)} />
    <section className="bg-white border-b border-navy/10">
      <div className="mx-auto max-w-5xl px-4 py-12 grid gap-8 sm:grid-cols-2 items-center">
        <div>
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Zones d'intervention", href: "/zones-intervention-nice/" },
            ]}
          />
          <AvailabilityBadge />
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            Zones d&apos;intervention à Nice
          </h1>
          <div className="mt-4 text-slate leading-relaxed flex flex-col gap-3">
            <p>
              J&apos;interviens dans l&apos;ensemble des quartiers de Nice, depuis mon point
              de départ au 2 Rue Antoine Gautier. Que vous soyez dans le centre-ville, sur
              les hauteurs du nord, du côté du Port à l&apos;est, ou dans les secteurs plus
              résidentiels de l&apos;ouest, la méthode reste la même : un diagnostic par
              téléphone, un prix annoncé avant intervention, et un déplacement organisé
              selon l&apos;urgence de la situation.
            </p>
            <p>
              Nice est une ville étendue, avec des quartiers très différents les uns des
              autres : le bâti ancien du Vieux-Nice n&apos;a pas les mêmes besoins en
              serrurerie que les grands ensembles du Brancolar ou les résidences
              pavillonnaires de l&apos;ouest de la ville. C&apos;est pourquoi je m&apos;attache
              à connaître les spécificités de chaque secteur plutôt que de proposer une
              solution unique partout.
            </p>
            <p>
              Pour faciliter la recherche, j&apos;ai organisé mes zones d&apos;intervention en
              quatre secteurs (Centre, Est, Nord et Ouest), chacun avec sa propre page
              listant les quartiers couverts. {coverageSentence} Les communes voisines
              restant à documenter sont d&apos;ores et déjà couvertes, même sans page
              individuelle : un simple appel suffit.
            </p>
          </div>

          <a
            href={business.phone.href}
            className="inline-block mt-6 bg-urgent text-white font-semibold px-6 py-3 rounded-full"
          >
            Appeler <span className="font-tabular-nums">{business.phone.display}</span>
          </a>
        </div>
        <div className="relative aspect-[4/3] rounded-xl overflow-hidden shadow-sm order-first sm:order-last">
          <Image
            src="/images/pool/nice-vue-aerienne-baie-des-anges-unsplash.webp"
            alt="Vue aérienne de la baie des Anges et de la Promenade des Anglais à Nice"
            fill
            sizes="(min-width: 640px) 40vw, 100vw"
            className="object-cover"
            priority
            fetchPriority="high"
          />
        </div>
      </div>
    </section>

    <section className="mx-auto max-w-4xl px-4 py-10">
      <LazyMap />

      <div className="mt-8">
        <h2 className="font-heading text-lg font-bold text-navy mb-2">
          Vue d&apos;ensemble de la zone couverte
        </h2>
        <p className="text-sm text-slate mb-3 max-w-2xl">
          Nice et les communes voisines où j&apos;interviens, en un coup d&apos;œil.
        </p>
        <LazyMap zoom={11} showInfo={false} title="Nice et les communes voisines" />
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {sectors.map((sector) => (
          <div key={sector.label}>
            <h2 className="font-heading text-lg font-bold text-navy mb-1.5">
              <Link href={sectorPages[sector.key].href} className="hover:text-steel">
                Nice {sector.label}
              </Link>
            </h2>
            <p className="text-sm text-slate leading-snug mb-2.5">{sectorDescriptions[sector.key]}</p>
            <ul className="text-sm text-slate flex flex-wrap gap-x-1 gap-y-1">
              {sector.quartiers.map((quartier, index) => (
                <li key={quartier}>
                  {isQuartierBuilt(quartier) ? (
                    <Link href={quartierHref(quartier)} className="text-steel hover:underline">
                      {quartier}
                    </Link>
                  ) : (
                    quartier
                  )}
                  {index < sector.quartiers.length - 1 ? "," : ""}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-14">
        <h2 className="font-heading text-lg font-bold text-navy mb-2">
          Villes voisines de Nice
        </h2>
        <p className="text-sm text-slate mb-4 max-w-2xl">
          Je me déplace aussi dans certaines communes limitrophes de Nice. Les villes
          déjà pourvues d&apos;une page dédiée apparaissent en lien ci-dessous ; les
          autres restent couvertes dès aujourd&apos;hui même sans page individuelle.
        </p>
        <ul className="text-sm text-slate flex flex-wrap gap-x-1 gap-y-1">
          {communes.map((commune, index) => (
            <li key={commune}>
              {isCommuneBuilt(commune) ? (
                <Link href={communeHref(commune)} className="text-steel hover:underline">
                  {commune}
                </Link>
              ) : (
                commune
              )}
              {index < communes.length - 1 ? "," : ""}
            </li>
          ))}
        </ul>
      </div>
    </section>

    <section className="bg-navy py-14">
      <div className="mx-auto max-w-4xl px-4">
        <h2 className="font-heading text-xl font-bold text-cream mb-1.5">Mes services</h2>
        <p className="text-cream/70 text-sm mb-6 max-w-xl">
          Un seul numéro pour tout ce qui touche vos serrures et vos portes à Nice.
        </p>
        <ServiceGrid />
      </div>
    </section>

    <section className="mx-auto max-w-4xl px-4">
      <p className="text-slate text-sm">
        Pour aller plus loin :{" "}
        <Link href="/blog/porte-qui-claque-serrurier-nice/" className="text-steel underline">
          porte qui claque, les bons réflexes avant d&apos;appeler
        </Link>
        .
      </p>
    </section>

    <section className="mx-auto max-w-4xl px-4 py-10">
      <CtaBlock />
    </section>
    </>
  );
}
