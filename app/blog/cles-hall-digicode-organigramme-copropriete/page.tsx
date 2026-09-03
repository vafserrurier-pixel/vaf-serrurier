import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://vaf-serrurier.fr/blog/cles-hall-digicode-organigramme-copropriete/",
  },
  title: "Clés de hall, digicode, organigramme : qui décide en copropriété ? | VAF",
  description:
    "Serrure de hall, digicode, organigramme de clés en copropriété à Nice : qui décide, qui paie, et ce qui détermine le prix d'une intervention.",
};

export default function ClesHallDigicodeOrganigrammeCoproprietePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={blogPostingSchema({
          headline: "Clés de hall, digicode, organigramme : qui décide en copropriété ?",
          description:
            "Serrure de hall, digicode, organigramme de clés en copropriété à Nice : qui décide, qui paie, et ce qui détermine le prix d'une intervention.",
          url: `${business.domain}/blog/cles-hall-digicode-organigramme-copropriete/`,
          datePublished: "2026-09-03",
          dateModified: "2026-09-03",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          {
            name: "Clés de hall, digicode, organigramme",
            url: `${business.domain}/blog/cles-hall-digicode-organigramme-copropriete/`,
          },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          {
            name: "Clés de hall, digicode, organigramme",
            href: "/blog/cles-hall-digicode-organigramme-copropriete/",
          },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        Clés de hall, digicode, organigramme : qui décide en copropriété ?
      </h1>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          C&apos;est une question qui revient souvent, du côté des syndics comme des
          conseils syndicaux : qui a le pouvoir de faire changer une serrure de hall,
          de modifier un digicode, ou de mettre en place un organigramme de clés ? Et
          surtout, qui paie ? Voici les grands principes, avant d&apos;entrer dans le
          détail de ce qui influence le prix d&apos;une intervention.
        </p>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Qui décide : le syndic, sur mandat de l&apos;assemblée générale
          </h2>
          <p>
            Une porte de hall, un digicode ou une gâche électrique font partie des
            parties communes de l&apos;immeuble. Toute décision qui engage une dépense
            significative — remplacement de la serrure, installation d&apos;un nouveau
            digicode, mise en place d&apos;un organigramme — relève en principe d&apos;un
            vote en assemblée générale des copropriétaires. Le syndic exécute la
            décision votée, il ne la prend pas seul, sauf urgence avérée.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Qui paie : la collectivité des copropriétaires
          </h2>
          <p>
            Le remplacement d&apos;une serrure de hall ou d&apos;un digicode est une
            dépense d&apos;entretien des parties communes : elle est répartie entre
            tous les copropriétaires selon leurs tantièmes, via les charges
            communes. Une exception fréquente : si la dégradation est causée par un
            tiers identifié (un locataire, un prestataire), c&apos;est à cette personne
            ou à son assurance de rembourser la copropriété, pas aux autres
            copropriétaires de l&apos;absorber dans les charges.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            En cas d&apos;urgence, le syndic peut agir sans attendre l&apos;AG
          </h2>
          <p>
            Une porte de hall fracturée, une serrure bloquée qui empêche l&apos;accès
            à l&apos;immeuble : dans ce type de situation, le syndic n&apos;a pas à
            attendre la prochaine assemblée générale pour faire intervenir un
            serrurier. Il peut mandater une intervention immédiate pour sécuriser
            l&apos;accès, et la faire ratifier a posteriori par les copropriétaires.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Digicode : un code qui doit tourner régulièrement
          </h2>
          <p>
            Un digicode n&apos;est utile que s&apos;il reste confidentiel. En pratique,
            beaucoup de copropriétés ne le changent jamais, alors qu&apos;il finit par
            circuler bien au-delà des occupants (livreurs, anciens locataires,
            visiteurs). Le faire tourner une à deux fois par an, et à chaque
            changement de prestataire ayant eu besoin du code, reste la mesure la
            plus simple pour garder un accès réellement contrôlé.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Organigramme de clés : utile dès que plusieurs personnes ont besoin d&apos;un accès différent
          </h2>
          <p>
            Un organigramme de clés organise une hiérarchie d&apos;accès : une clé
            passe générale ouvre tout l&apos;immeuble (syndic, entretien), une clé
            passe partiel ouvre certaines zones seulement (local poubelles, cave),
            et les résidents gardent leur clé individuelle. L&apos;intérêt principal :
            en cas de perte ou de départ d&apos;un prestataire, on révoque ou remplace
            uniquement le niveau concerné, sans avoir à changer toutes les serrures
            de l&apos;immeuble.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Ce qui détermine le prix d&apos;une intervention
          </h2>
          <p>
            Trois éléments font varier le prix : le nombre de points d&apos;accès à
            traiter (une porte de hall seule coûte moins qu&apos;un ensemble
            hall + parking + local technique), le type de matériel (une gâche
            électrique demande davantage de travail qu&apos;une serrure mécanique), et
            la complexité de l&apos;organigramme si plusieurs niveaux de clés sont
            nécessaires. Dans tous les cas, un devis détaillé, poste par poste, reste
            la seule façon d&apos;avoir un prix fiable — pas une estimation
            approximative au téléphone.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <CtaBlock title="Besoin d'intervenir sur les accès de votre copropriété ?" />
      </div>

      <p className="mt-6 text-sm text-slate">
        Voir aussi :{" "}
        <Link href="/agences-syndics-nice/" className="text-steel underline">
          serrurier partenaire agences & syndics
        </Link>{" "}
        et{" "}
        <Link href="/mis-en-securite-apres-effraction-nice/" className="text-steel underline">
          mise en sécurité après effraction
        </Link>
        .
      </p>
    </article>
  );
}
