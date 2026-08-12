import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://vaf-serrurier.fr/blog/serrurier-agree-assurances-vrai-faux/",
  },
  title: "« Agréé toutes assurances » : la vérité sur cette formule | VAF",
  description:
    "Vous avez déjà vu ce sigle sur une camionnette ou une annonce. Voici ce qu'il signifie réellement, et ce qu'il faut vérifier à la place.",
};

export default function AgreeAssurancesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          {
            name: "« Agréé toutes assurances »",
            url: `${business.domain}/blog/serrurier-agree-assurances-vrai-faux/`,
          },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          {
            name: "« Agréé toutes assurances »",
            href: "/blog/serrurier-agree-assurances-vrai-faux/",
          },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        « Agréé toutes assurances » : ce que cette formule ne veut pas dire
      </h1>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          C&apos;est une mention qu&apos;on retrouve sur beaucoup de camionnettes de
          serrurier et d&apos;annonces en ligne à Nice comme ailleurs. Elle sonne
          officiel, presque comme un agrément d&apos;État. Dans les faits, ce
          n&apos;est pas ce que ça signifie, et je préfère vous l&apos;expliquer
          plutôt que d&apos;utiliser moi-même une formule qui prête à confusion.
        </p>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Il n&apos;existe pas d&apos;agrément unique délivré par un organisme central
          </h2>
          <p>
            Contrairement à certaines professions réglementées, il n&apos;y a pas
            d&apos;autorité qui « agrée » un serrurier au nom de l&apos;ensemble des
            compagnies d&apos;assurance. Chaque assureur fixe ses propres conditions
            dans son contrat, indépendamment des autres. Un artisan ne peut donc pas
            être « agréé » par la totalité des assurances à la fois, puisqu&apos;il
            n&apos;existe pas de liste commune à toutes les compagnies.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Ce que les assureurs demandent réellement, en général
          </h2>
          <p>
            D&apos;après ce que je constate sur le terrain, ce qui compte pour un
            dossier de sinistre, c&apos;est une facture détaillée et conforme (avec
            SIRET, description précise de l&apos;intervention, matériel posé). Parfois,
            c&apos;est aussi la preuve que l&apos;équipement installé répond à une norme
            reconnue comme la certification A2P. Chaque contrat a ses propres
            exigences : le plus sûr reste de vérifier directement les conditions du
            vôtre auprès de votre assureur plutôt que de se fier à un sigle affiché
            sur une camionnette.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Le vrai indicateur à vérifier avant d&apos;appeler
          </h2>
          <p>
            Plutôt qu&apos;un sigle sans autorité derrière, je recommande de vérifier
            des éléments concrets et contrôlables : le SIRET de l&apos;entreprise
            (vérifiable publiquement), une assurance responsabilité civile
            professionnelle en cours, et un devis ou un prix annoncé avant
            l&apos;intervention plutôt qu&apos;au moment de payer.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Pourquoi je ne mets pas ce sigle sur mon site
          </h2>
          <p>
            Je préfère mettre en avant ce qui se vérifie réellement : mon SIRET, mon
            assurance RC Pro, et une facture détaillée systématique. Si vous avez un
            doute sur une intervention en cours ailleurs, n&apos;hésitez pas à
            demander ces informations avant d&apos;accepter un devis — c&apos;est un
            réflexe simple qui évite les mauvaises surprises.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <CtaBlock title="Une question avant de faire intervenir un serrurier ?" />
      </div>

      <p className="mt-6 text-sm text-slate">
        Voir aussi :{" "}
        <Link href="/a-propos/" className="text-steel underline">
          qui je suis
        </Link>{" "}
        et{" "}
        <Link href="/tarifs-serrurier-nice/" className="text-steel underline">
          mes tarifs annoncés à l&apos;avance
        </Link>
        .
      </p>
    </article>
  );
}
