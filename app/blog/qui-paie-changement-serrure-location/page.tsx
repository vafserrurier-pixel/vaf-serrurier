import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://vaf-serrurier.fr/blog/qui-paie-changement-serrure-location/",
  },
  title: "Location : qui paie le changement de serrure ? | VAF",
  description:
    "Clés perdues, cambriolage, changement de locataire : qui du propriétaire ou du locataire paie le changement de serrure à Nice. Ce que dit la règle générale.",
};

export default function QuiPaieChangementSerrureLocationPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={blogPostingSchema({
          headline: "Location : qui paie le changement de serrure ?",
          description:
            "Clés perdues, cambriolage, changement de locataire : qui du propriétaire ou du locataire paie le changement de serrure à Nice. Ce que dit la règle générale.",
          url: `${business.domain}/blog/qui-paie-changement-serrure-location/`,
          datePublished: "2026-09-08",
          dateModified: "2026-09-08",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          {
            name: "Qui paie le changement de serrure",
            url: `${business.domain}/blog/qui-paie-changement-serrure-location/`,
          },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          {
            name: "Qui paie le changement de serrure",
            href: "/blog/qui-paie-changement-serrure-location/",
          },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        Location : qui paie le changement de serrure ?
      </h1>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          C&apos;est une question que je reçois régulièrement, propriétaires comme
          locataires : après une perte de clés, un cambriolage ou un changement de
          locataire, qui doit régler la facture ? La réponse dépend surtout de la
          cause du changement, pas du fait d&apos;être propriétaire ou locataire en
          soi. Voici la règle générale, et ses limites.
        </p>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Clés perdues ou usage normal : au locataire
          </h2>
          <p>
            Un trousseau égaré, une clé cassée dans la serrure par accident, ou une
            usure liée à l&apos;utilisation quotidienne relèvent en principe de
            l&apos;entretien courant du logement, à la charge du locataire. C&apos;est
            la même logique que pour un joint de robinet qui s&apos;use avec le temps :
            l&apos;usage normal du bien reste de sa responsabilité.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Vétusté de la serrure : au propriétaire
          </h2>
          <p>
            Si la serrure lâche parce qu&apos;elle est ancienne, mal entretenue depuis
            longtemps ou défaillante indépendamment de tout usage anormal, la
            réparation relève de l&apos;entretien du logement — donc du propriétaire.
            La distinction n&apos;est pas toujours évidente : un diagnostic sur place
            permet en général de voir si la panne vient d&apos;une usure logique de
            plusieurs années, ou d&apos;un incident ponctuel.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Après un cambriolage : généralement l&apos;assurance
          </h2>
          <p>
            Quand la serrure a été forcée lors d&apos;une effraction, c&apos;est en
            général l&apos;assurance habitation — celle du locataire occupant, dans la
            plupart des contrats multirisques habitation — qui prend en charge la
            remise en état, sous réserve du dépôt de plainte et des conditions
            précises du contrat. Une facture détaillée, mentionnant clairement la
            nature de l&apos;intervention, est le document généralement demandé pour
            la déclaration de sinistre. Les montants exacts et les franchises
            dépendent de chaque contrat : à vérifier directement auprès de
            l&apos;assureur concerné.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Changement de locataire : généralement au propriétaire
          </h2>
          <p>
            Entre le départ d&apos;un locataire et l&apos;arrivée du suivant, c&apos;est
            en général au propriétaire de s&apos;assurer que le logement est
            correctement sécurisé pour un nouvel occupant — cela fait partie de la
            remise en état normale du bien entre deux baux. Rien n&apos;empêche un
            propriétaire prudent de le faire systématiquement, même sans obligation
            stricte, simplement pour repartir sur une serrure fiable à chaque nouveau
            bail.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Ce qui évite le litige : une facture claire
          </h2>
          <p>
            Dans tous les cas, le document qui compte le plus en cas de désaccord est
            une facture détaillée, mentionnant précisément la nature de
            l&apos;intervention et sa cause probable — usure, casse accidentelle,
            effraction constatée. C&apos;est ce document que je remets
            systématiquement, quelle que soit la situation, pour que propriétaire et
            locataire puissent s&apos;appuyer sur des faits plutôt que sur une
            interprétation.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            En cas de désaccord persistant
          </h2>
          <p>
            Si propriétaire et locataire ne s&apos;entendent pas sur la prise en
            charge, la règle générale décrite ici reste un repère, pas une décision
            juridique. En cas de litige réel, un commissaire de justice (ex-huissier)
            peut constater une situation, et la commission départementale de
            conciliation ou le tribunal compétent tranchent en dernier recours. Je
            n&apos;ai pas vocation à arbitrer ce type de désaccord — mon rôle
            s&apos;arrête à l&apos;intervention et à la facture qui la documente.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <CtaBlock title="Besoin d'un changement de serrure à Nice ?" />
      </div>

      <p className="mt-6 text-sm text-slate">
        Voir aussi :{" "}
        <Link href="/changement-serrure-nice/" className="text-steel underline">
          changement de serrure
        </Link>
        ,{" "}
        <Link href="/mis-en-securite-apres-effraction-nice/" className="text-steel underline">
          mise en sécurité après effraction
        </Link>{" "}
        et{" "}
        <Link href="/agences-syndics-nice/" className="text-steel underline">
          serrurier partenaire agences & syndics
        </Link>
        .
      </p>
    </article>
  );
}
