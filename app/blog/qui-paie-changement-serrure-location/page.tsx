import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import ArticleSummary from "@/components/ArticleSummary";
import ArticleToc from "@/components/ArticleToc";
import ArticleTable from "@/components/ArticleTable";
import ArticleKeyTakeaways from "@/components/ArticleKeyTakeaways";
import AuthorBox from "@/components/AuthorBox";
import ArticleNav from "@/components/ArticleNav";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBadges from "@/components/TrustBadges";
import { ClockIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

const HREF = "/blog/qui-paie-changement-serrure-location/";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Location : qui paie le changement de serrure ? | VAF",
  description: "Clés perdues, cambriolage, changement de locataire : qui du propriétaire ou du locataire paie le changement de serrure à Nice. Ce que dit la règle générale.",
});

const toc = [
  { id: "cles-perdues", label: "Clés perdues ou usage normal : au locataire" },
  { id: "vetuste", label: "Vétusté de la serrure : au propriétaire" },
  { id: "cambriolage", label: "Après un cambriolage : généralement l'assurance" },
  { id: "changement-locataire", label: "Changement de locataire : au propriétaire" },
  { id: "recap", label: "Récapitulatif : qui paie selon la cause" },
  { id: "facture", label: "Ce qui évite le litige : une facture claire" },
  { id: "desaccord", label: "En cas de désaccord persistant" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "Le propriétaire peut-il refuser de rembourser un changement de serrure après cambriolage ?",
    answer:
      "La prise en charge après un cambriolage relève en général de l'assurance habitation du locataire occupant, pas du propriétaire directement. En cas de doute, le dépôt de plainte et une facture détaillée restent les documents de référence.",
  },
  {
    question: "Dois-je demander l'autorisation du propriétaire avant de changer la serrure ?",
    answer:
      "Par précaution, prévenez toujours le propriétaire, même si la cause du changement relève de votre responsabilité de locataire. Ça évite tout malentendu à l'état des lieux de sortie.",
  },
  {
    question: "Que se passe-t-il si le locataire perd son trousseau plusieurs fois ?",
    answer:
      "Chaque perte relève en principe de l'entretien courant à la charge du locataire, quelle que soit la fréquence. Un propriétaire peut cependant s'interroger si la situation devient récurrente.",
  },
  {
    question: "Le dépôt de garantie peut-il couvrir ce type de frais ?",
    answer:
      "Le dépôt de garantie sert surtout à couvrir des dégradations constatées à la sortie du logement, pas les frais courants engagés pendant la location. Chaque situation reste à évaluer au cas par cas.",
  },
  {
    question: "Qui paie si la serrure casse pendant l'état des lieux de sortie ?",
    answer:
      "Un diagnostic permet en général de déterminer si la panne vient d'une usure normale (souvent à la charge du propriétaire au titre de la vétusté) ou d'un usage anormal du locataire.",
  },
  {
    question: "Faut-il un accord écrit entre propriétaire et locataire avant l'intervention ?",
    answer:
      "Ce n'est pas obligatoire dans l'urgence, mais un échange écrit (SMS, email) précisant qui a demandé l'intervention et pourquoi facilite grandement les choses en cas de désaccord ultérieur.",
  },
];

export default function QuiPaieChangementSerrureLocationPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={blogPostingSchema({
          headline: "Location : qui paie le changement de serrure ?",
          description:
            "Clés perdues, cambriolage, changement de locataire : qui du propriétaire ou du locataire paie le changement de serrure à Nice. Ce que dit la règle générale.",
          url: `${business.domain}${HREF}`,
          datePublished: "2026-09-08",
          dateModified: "2026-09-12",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Qui paie le changement de serrure", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "Qui paie le changement de serrure", href: HREF },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        Location : qui paie le changement de serrure ?
      </h1>
      <p className="flex items-center gap-1.5 text-xs text-slate mt-3">
        <ClockIcon className="w-3.5 h-3.5" />6 min de lecture &middot; Mis à jour le 12 septembre 2026
      </p>

      <div className="mt-6">
        <TrustBadges />
      </div>

      <div className="mt-8">
        <ArticleSummary
          points={[
            "Clés perdues ou usure normale : c'est au locataire, comme tout entretien courant.",
            "Vétusté de la serrure ancienne : c'est au propriétaire.",
            "Après un cambriolage : généralement l'assurance habitation du locataire.",
            "Entre deux locataires : généralement au propriétaire, pour repartir sur une base saine.",
          ]}
        />
      </div>

      <div className="mt-8">
        <ArticleToc items={toc} />
      </div>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          C&apos;est une question que je reçois régulièrement, propriétaires comme
          locataires : après une perte de clés, un cambriolage ou un changement de
          locataire, qui doit régler la facture ? La réponse dépend surtout de la
          cause du changement, pas du fait d&apos;être propriétaire ou locataire en
          soi. Voici la règle générale, et ses limites.
        </p>

        <div>
          <h2 id="cles-perdues" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
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

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/images/pool/benoit-serrurier-trousseau-cles-nice.webp"
            alt="Trousseau de clés tenu par un serrurier à Nice"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 id="vetuste" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Vétusté de la serrure : au propriétaire
          </h2>
          <p>
            Si la serrure lâche parce qu&apos;elle est ancienne, mal entretenue depuis
            longtemps ou défaillante indépendamment de tout usage anormal, la
            réparation relève de l&apos;entretien du logement, donc du propriétaire.
            La distinction n&apos;est pas toujours évidente : un diagnostic sur place
            permet en général de voir si la panne vient d&apos;une usure logique de
            plusieurs années, ou d&apos;un incident ponctuel.
          </p>
        </div>

        <div>
          <h2 id="cambriolage" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Après un cambriolage : généralement l&apos;assurance
          </h2>
          <p>
            Quand la serrure a été forcée lors d&apos;une{" "}
            <Link href="/mis-en-securite-apres-effraction-nice/" className="text-steel underline">
              effraction
            </Link>
            , c&apos;est en général l&apos;assurance habitation (celle du locataire occupant, dans la
            plupart des contrats multirisques habitation) qui prend en charge la
            remise en état, sous réserve du dépôt de plainte et des conditions
            précises du contrat. Une facture détaillée, mentionnant clairement la
            nature de l&apos;intervention, est le document généralement demandé pour
            la déclaration de sinistre. Les montants exacts et les franchises
            dépendent de chaque contrat : à vérifier directement auprès de
            l&apos;assureur concerné.
          </p>
        </div>

        <div>
          <h2 id="changement-locataire" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Changement de locataire : généralement au propriétaire
          </h2>
          <p>
            Entre le départ d&apos;un locataire et l&apos;arrivée du suivant, c&apos;est
            en général au propriétaire de s&apos;assurer que le logement est
            correctement sécurisé pour un nouvel occupant : cela fait partie de la
            remise en état normale du bien entre deux baux. Rien n&apos;empêche un
            propriétaire prudent de le faire systématiquement, même sans obligation
            stricte, simplement pour repartir sur un{" "}
            <Link href="/changement-serrure-nice/" className="text-steel underline">
              changement de serrure
            </Link>{" "}
            fiable à chaque nouveau bail.
          </p>
        </div>

        <ArticleTable
          caption="Récapitulatif de la règle générale selon la cause du changement."
          headers={["Cause", "Qui paie généralement", "Justificatif utile"]}
          rows={[
            ["Clés perdues, usage normal", "Locataire", "Aucun, entretien courant"],
            ["Vétusté de la serrure", "Propriétaire", "Diagnostic de l'artisan"],
            ["Cambriolage / effraction", "Assurance habitation du locataire", "Dépôt de plainte + facture détaillée"],
            ["Changement de locataire", "Propriétaire", "Facture entre deux baux"],
          ]}
        />

        <div>
          <h2 id="facture" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Ce qui évite le litige : une facture claire
          </h2>
          <p>
            Dans tous les cas, le document qui compte le plus en cas de désaccord est
            une facture détaillée, mentionnant précisément la nature de
            l&apos;intervention et sa cause probable (usure, casse accidentelle,
            effraction constatée). C&apos;est ce document que je remets
            systématiquement, quelle que soit la situation, pour que propriétaire et
            locataire puissent s&apos;appuyer sur des faits plutôt que sur une
            interprétation. Retrouvez mes{" "}
            <Link href="/tarifs-serrurier-nice/" className="text-steel underline">
              tarifs annoncés à l&apos;avance
            </Link>
            .
          </p>
        </div>

        <div>
          <h2 id="desaccord" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            En cas de désaccord persistant
          </h2>
          <p>
            Si propriétaire et locataire ne s&apos;entendent pas sur la prise en
            charge, la règle générale décrite ici reste un repère, pas une décision
            juridique. En cas de litige réel, un commissaire de justice (ex-huissier)
            peut constater une situation, et la commission départementale de
            conciliation ou le tribunal compétent tranchent en dernier recours. Je
            n&apos;ai pas vocation à arbitrer ce type de désaccord : mon rôle
            s&apos;arrête à l&apos;intervention et à la facture qui la documente. Pour
            les copropriétés, un cas particulier est traité dans mon article sur les{" "}
            <Link href="/agences-syndics-nice/" className="text-steel underline">
              clés de hall et digicodes en copropriété
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="mt-10">
        <ArticleKeyTakeaways
          points={[
            "La cause du changement détermine qui paie, pas le simple statut propriétaire/locataire.",
            "Clés perdues et usure normale restent à la charge du locataire.",
            "Vétusté et changement de locataire relèvent généralement du propriétaire.",
            "Une facture détaillée reste le meilleur document en cas de désaccord.",
          ]}
        />
      </div>

      <div className="mt-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">Foire aux questions</h2>
        <FaqAccordion items={faqItems} />
      </div>

      <div className="mt-10">
        <AuthorBox />
      </div>

      <div className="mt-10">
        <CtaBlock title="Besoin d'un changement de serrure à Nice ?" />
      </div>

      <div className="mt-10">
        <ArticleNav currentHref={HREF} />
      </div>
    </article>
  );
}
