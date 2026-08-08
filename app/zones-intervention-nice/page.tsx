import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import LazyMap from "@/components/LazyMap";
import CtaBlock from "@/components/CtaBlock";
import ServiceGrid from "@/components/ServiceGrid";
import { zones } from "@/lib/business";
import { isQuartierBuilt, quartierHref, sectorPages } from "@/lib/quartiers";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/zones-intervention-nice/" },
  title: "Zones d'intervention à Nice | Votre Artisan Français",
  description:
    "Je me déplace dans tous les quartiers de Nice : centre, est, nord et ouest. Retrouvez tous les secteurs et quartiers couverts.",
};

const sectors: { key: keyof typeof sectorPages; label: string; quartiers: readonly string[] }[] = [
  { key: "centre", label: "Centre", quartiers: zones.centre },
  { key: "est", label: "Est", quartiers: zones.est },
  { key: "nord", label: "Nord", quartiers: zones.nord },
  { key: "ouest", label: "Ouest", quartiers: zones.ouest },
];

export default function ZonesInterventionNicePage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Zones d'intervention", href: "/zones-intervention-nice/" },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        Zones d&apos;intervention à Nice
      </h1>
      <div className="mt-4 text-slate leading-relaxed max-w-2xl flex flex-col gap-3">
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
          quatre secteurs — Centre, Est, Nord et Ouest — chacun avec sa propre page
          listant les quartiers couverts. Des pages dédiées à chaque quartier arrivent
          progressivement ; les quartiers déjà pourvus d&apos;une page dédiée apparaissent
          en lien ci-dessous, les autres restent couverts dès aujourd&apos;hui même sans
          page individuelle — un simple appel suffit.
        </p>
      </div>

      <div className="mt-8">
        <LazyMap />
      </div>

      <div className="mt-10 grid gap-8 sm:grid-cols-2">
        {sectors.map((sector) => (
          <div key={sector.label}>
            <h2 className="font-heading text-lg font-bold text-navy mb-2">
              <Link href={sectorPages[sector.key].href} className="hover:text-steel">
                Nice {sector.label}
              </Link>
            </h2>
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
        <h2 className="font-heading text-xl font-bold text-navy mb-4">Mes services</h2>
        <ServiceGrid />
      </div>

      <div className="mt-10">
        <CtaBlock />
      </div>
    </section>
  );
}
