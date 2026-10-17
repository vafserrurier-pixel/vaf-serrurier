import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import AvailabilityBadge from "@/components/AvailabilityBadge";
import ArticleTable from "@/components/ArticleTable";
import FaqAccordion from "@/components/FaqAccordion";
import LazyMap from "@/components/LazyMap";
import CtaBlock from "@/components/CtaBlock";
import ServiceGrid from "@/components/ServiceGrid";
import JsonLd from "@/components/JsonLd";
import { business, zones } from "@/lib/business";
import { isQuartierBuilt, quartierHref, sectorPages } from "@/lib/quartiers";
import { communes, communeHref, isCommuneBuilt, builtCommunes } from "@/lib/communes";
import { buildMetadata } from "@/lib/metadata";
import { faqSchema, itemListSchema } from "@/lib/schema";

// Total calculé depuis les 4 listes de lib/business.ts : il reste juste si une liste change.
const totalQuartiers = zones.centre.length + zones.est.length + zones.nord.length + zones.ouest.length;

export const metadata: Metadata = buildMetadata({
  path: "/zones-intervention-nice/",
  title: `Zones d'intervention serrurier Nice : ${totalQuartiers} quartiers, 30 min`,
  description: `Serrurier dans tout Nice 24h/24 : ${totalQuartiers} quartiers, du Vieux-Nice à Bellet, et les communes voisines. Sur place en 30 min, mêmes prix partout. Tél. 04 22 13 85 44`,
});

const sectors: { key: keyof typeof sectorPages; label: string; quartiers: readonly string[] }[] = [
  { key: "centre", label: "Centre", quartiers: zones.centre },
  { key: "est", label: "Est", quartiers: zones.est },
  { key: "nord", label: "Nord", quartiers: zones.nord },
  { key: "ouest", label: "Ouest", quartiers: zones.ouest },
];

const sectorDescriptions: Record<keyof typeof sectorPages, string> = {
  centre:
    "Le cœur de la ville, du cours Saleya jusqu'à Cimiez, en passant par la place Masséna, le Carré d'Or et la Promenade des Anglais : immeubles anciens, immeubles bourgeois et résidences plus récentes.",
  est: "Le secteur de ma boutique : le port Lympia, Riquier, Saint-Roch, Pasteur et l'Ariane, puis les villas du Mont Boron et du Mont Alban.",
  nord: "En bas, les immeubles le long du tramway, de Borriglione à Las Planas. En haut, les maisons des collines, de Rimiez à Saint-Pancrace.",
  ouest:
    "Les immeubles du bord de mer, de Carras à Caucade, les bureaux de l'Arénas près de l'aéroport, et les collines, de Fabron à Bellet.",
};

const sectorTable: { key: keyof typeof sectorPages; postal: string; reperes: string }[] = [
  { key: "centre", postal: "06000", reperes: "Vieux-Nice, place Masséna, Carré d'Or, Cimiez" },
  { key: "est", postal: "06300", reperes: "Port Lympia, Riquier, Pasteur, Mont Boron" },
  { key: "nord", postal: "06100", reperes: "Borriglione, Saint-Barthélémy, Gairaut, Rimiez" },
  { key: "ouest", postal: "06200", reperes: "Fabron, Caucade, Arénas, Bellet" },
];

const faq = [
  {
    question: "Mon quartier n'est pas dans la liste : venez-vous quand même ?",
    answer:
      "Oui. Les listes reprennent les noms de quartiers les plus courants : si vous êtes à Nice, j'interviens. Donnez-moi votre adresse au téléphone.",
  },
  {
    question: "Intervenez-vous en dehors de Nice ?",
    answer:
      "Oui, à Èze, Villefranche-sur-Mer, Beaulieu-sur-Mer, Saint-Laurent-du-Var, Cagnes-sur-Mer et dans toutes les autres communes autour de Nice. Appelez-moi : je vous annonce le prix avant de partir.",
  },
  {
    question: "D'où partez-vous ?",
    answer: "De ma boutique, au 2 rue Antoine Gautier, 06300 Nice, à deux pas du port et de la place Garibaldi.",
  },
];

// Schema.org ItemList : les pages locales qui existent (4 secteurs, communes avec page ;
// sinon l'URL du hub). Les quartiers sans page ne sont pas listés : aucune URL en double ni inventée.
const itemListEntries = [
  ...sectors.map((sector) => ({
    name: `Nice ${sector.label}`,
    url: `${business.domain}${sectorPages[sector.key].href}`,
  })),
  ...communes.map((commune) => ({
    name: commune,
    url: `${business.domain}${isCommuneBuilt(commune) ? communeHref(commune) : "/zones-intervention-nice/"}`,
  })),
];

export default function ZonesInterventionNicePage() {
  return (
    <>
      <JsonLd data={itemListSchema(itemListEntries)} />
      <JsonLd data={faqSchema(faq)} />
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
              Zones d&apos;intervention : tout Nice et les communes voisines
            </h1>
            <div className="mt-4 text-slate leading-relaxed flex flex-col gap-3">
              <p>
                J&apos;interviens dans les {totalQuartiers} quartiers de Nice, du Vieux-Nice aux collines de Bellet, et
                dans les communes autour de Nice. Je pars de ma boutique, au 2 rue Antoine Gautier, dans le 06300. En
                urgence, j&apos;arrive en 30 minutes, 24h/24 et 7j/7.
              </p>
              <p>
                Mes prix sont les mêmes dans toute la ville, déplacement compris, et je vous les annonce au téléphone
                avant de partir. Le détail est sur{" "}
                <Link href="/tarifs-serrurier-nice/" className="text-steel underline">
                  ma page tarifs
                </Link>
                . Pour vous y retrouver, j&apos;ai rangé les quartiers en quatre secteurs, chacun avec sa page.
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
              alt="Baie des Anges Nice"
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

        <div className="mt-10">
          <h2 className="font-heading text-lg font-bold text-navy mb-3">Trouver votre secteur</h2>
          <ArticleTable
            headers={["Secteur", "Code postal principal", "Quelques repères"]}
            rows={sectorTable.map((row) => [
              <Link key={row.key} href={sectorPages[row.key].href} className="text-steel underline">
                {sectorPages[row.key].label}
              </Link>,
              row.postal,
              row.reperes,
            ])}
          />
          <p className="text-sm text-slate leading-relaxed mt-3 max-w-2xl">
            Les codes postaux ne suivent pas exactement les limites des quartiers. En cas de doute, donnez-moi
            simplement votre adresse au téléphone.
          </p>
        </div>

        <div className="mt-8">
          <h2 className="font-heading text-lg font-bold text-navy mb-2">Vue d&apos;ensemble de la zone couverte</h2>
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
          <h2 className="font-heading text-lg font-bold text-navy mb-2">Villes voisines de Nice</h2>
          <p className="text-sm text-slate mb-4 max-w-2xl">
            Ces {builtCommunes.length} communes ont chacune leur page. J&apos;interviens aussi dans toutes les autres
            communes autour de Nice : appelez-moi, je vous annonce le prix avant de partir.
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

      <section className="mx-auto max-w-4xl px-4 py-12">
        <h2 className="font-heading text-2xl font-bold text-navy mb-6 text-center">Questions fréquentes</h2>
        <FaqAccordion items={faq} />
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
