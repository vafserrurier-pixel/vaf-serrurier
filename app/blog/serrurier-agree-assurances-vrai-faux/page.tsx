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

const HREF = "/blog/serrurier-agree-assurances-vrai-faux/";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "« Agréé toutes assurances » : la vérité sur cette formule | VAF",
  description: "Vous avez déjà vu ce sigle sur une camionnette ou une annonce. Voici ce qu'il signifie réellement, et ce qu'il faut vérifier à la place.",
});

const toc = [
  { id: "pas-agrement", label: "Il n'existe pas d'agrément unique" },
  { id: "demande-reelle", label: "Ce que les assureurs demandent réellement" },
  { id: "comparatif", label: "Ce qui ne prouve rien vs ce qui compte" },
  { id: "verifier", label: "Le vrai indicateur à vérifier avant d'appeler" },
  { id: "origine", label: "D'où vient cette confusion, concrètement" },
  { id: "pourquoi-pas", label: "Pourquoi je ne mets pas ce sigle sur mon site" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "Existe-t-il un vrai agrément officiel délivré aux serruriers ?",
    answer:
      "Non, pas d'agrément unique reconnu par l'ensemble des compagnies d'assurance. Chaque assureur fixe ses propres conditions dans son contrat, indépendamment des autres.",
  },
  {
    question: "Comment vérifier le SIRET d'un artisan avant de le faire intervenir ?",
    answer:
      "Le SIRET est consultable publiquement sur des annuaires officiels d'entreprises. Un artisan sérieux ne devrait jamais hésiter à le communiquer avant intervention.",
  },
  {
    question: "Une facture suffit-elle toujours pour être remboursé par l'assurance ?",
    answer:
      "C'est le document de base attendu, mais chaque contrat a ses propres exigences (mentions précises, éventuelle preuve de certification du matériel). Le plus sûr reste de vérifier directement les conditions de votre contrat.",
  },
  {
    question: "Pourquoi certains serruriers affichent-ils quand même ce sigle sur leur camionnette ?",
    answer:
      "Souvent sans mauvaise intention, simplement parce que la formule rassure et circule depuis longtemps dans le métier. D'autres l'utilisent pour donner une impression d'officialité à une entreprise récente ou peu identifiable.",
  },
  {
    question: "Que dois-je demander avant d'accepter un devis en urgence ?",
    answer:
      "Le SIRET de l'entreprise, la preuve d'une assurance responsabilité civile professionnelle en cours, et un prix annoncé avant l'intervention plutôt qu'au moment de payer.",
  },
  {
    question: "La certification A2P remplace-t-elle cette mention ?",
    answer:
      "Ce sont deux sujets différents : l'A2P certifie un produit (serrure, cylindre), pas un artisan. Le détail est expliqué dans mon article sur la certification A2P.",
  },
];

export default function AgreeAssurancesPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={blogPostingSchema({
          headline: "« Agréé toutes assurances » : ce que cette formule ne veut pas dire",
          description:
            "Vous avez déjà vu ce sigle sur une camionnette ou une annonce. Voici ce qu'il signifie réellement, et ce qu'il faut vérifier à la place.",
          url: `${business.domain}${HREF}`,
          datePublished: "2026-08-09",
          dateModified: "2026-09-12",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "« Agréé toutes assurances »", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "« Agréé toutes assurances »", href: HREF },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        « Agréé toutes assurances » : ce que cette formule ne veut pas dire
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
            "Il n'existe pas d'organisme qui « agrée » un serrurier au nom de toutes les assurances.",
            "Chaque assureur fixe ses propres conditions dans son contrat, indépendamment des autres.",
            "Ce qui compte réellement : SIRET vérifiable, assurance RC Pro, facture détaillée.",
            "Un devis annoncé avant intervention reste le meilleur indicateur de sérieux.",
          ]}
        />
      </div>

      <div className="mt-8">
        <ArticleToc items={toc} />
      </div>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          C&apos;est une mention qu&apos;on retrouve sur beaucoup de camionnettes de
          serrurier et d&apos;annonces en ligne à Nice comme ailleurs. Elle sonne
          officiel, presque comme un agrément d&apos;État. Dans les faits, ce
          n&apos;est pas ce que ça signifie, et je préfère vous l&apos;expliquer
          plutôt que d&apos;utiliser moi-même une formule qui prête à confusion.
        </p>

        <div>
          <h2 id="pas-agrement" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
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

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/images/pool/benoit-artisan-serrurier-nice.webp"
            alt="Benoît, artisan serrurier à Nice, sur une intervention"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 id="demande-reelle" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
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

        <ArticleTable
          caption="Ce qui ne prouve rien face à ce qui se vérifie réellement."
          headers={["Souvent affiché", "Ce que ça prouve", "Ce qu'il faut vérifier à la place"]}
          rows={[
            ["« Agréé toutes assurances »", "Rien de vérifiable, aucune autorité derrière", "SIRET et assurance RC Pro de l'artisan"],
            ["« Certifié haute sécurité »", "Formule commerciale libre", "Marquage A2P réel sur le produit"],
            ["Prix d'appel très bas affiché", "Rarement le prix final", "Devis annoncé avant intervention"],
          ]}
        />

        <div>
          <h2 id="verifier" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Le vrai indicateur à vérifier avant d&apos;appeler
          </h2>
          <p>
            Plutôt qu&apos;un sigle sans autorité derrière, je recommande de vérifier
            des éléments concrets et contrôlables : le SIRET de l&apos;entreprise
            (vérifiable publiquement), une assurance responsabilité civile
            professionnelle en cours, et un devis ou un prix annoncé avant
            l&apos;intervention plutôt qu&apos;au moment de payer. Retrouvez mes{" "}
            <Link href="/tarifs-serrurier-nice/" className="text-steel underline">
              tarifs annoncés à l&apos;avance
            </Link>{" "}
            à titre d&apos;exemple.
          </p>
        </div>

        <div>
          <h2 id="origine" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            D&apos;où vient cette confusion, concrètement
          </h2>
          <p>
            Beaucoup d&apos;artisans reprennent cette formule sans mauvaise intention,
            simplement parce qu&apos;elle rassure et qu&apos;elle circule depuis
            longtemps dans le métier. D&apos;autres l&apos;utilisent volontairement
            pour donner une impression d&apos;officialité à une entreprise récente ou
            peu identifiable. Dans les deux cas, le résultat est le même pour vous :
            la mention ne garantit rien de vérifiable, ni sur la qualité du travail,
            ni sur la prise en charge par votre assurance en cas de{" "}
            <Link href="/mis-en-securite-apres-effraction-nice/" className="text-steel underline">
              sinistre
            </Link>
            .
          </p>
        </div>

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/images/pool/benoit-serrurier-porte-ancienne-nice.webp"
            alt="Benoît, artisan serrurier, intervenant sur une porte ancienne à Nice"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 id="pourquoi-pas" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Pourquoi je ne mets pas ce sigle sur mon site
          </h2>
          <p>
            Je préfère mettre en avant ce qui se vérifie réellement : mon SIRET, mon
            assurance RC Pro, et une facture détaillée systématique. Si vous avez un
            doute sur une intervention en cours ailleurs, n&apos;hésitez pas à
            demander ces informations avant d&apos;accepter un devis : c&apos;est un
            réflexe simple qui évite les mauvaises surprises. Vous pouvez aussi
            retrouver{" "}
            <Link href="/a-propos/" className="text-steel underline">
              mon parcours complet
            </Link>{" "}
            ou me contacter directement pour un{" "}
            <Link href="/depannage-serrurier-nice/" className="text-steel underline">
              dépannage
            </Link>
            .
          </p>
        </div>
      </div>

      <div className="mt-10">
        <ArticleKeyTakeaways
          points={[
            "Il n'existe pas d'organisme qui agrée un serrurier au nom de toutes les assurances.",
            "Le SIRET et l'assurance RC Pro sont les éléments réellement vérifiables.",
            "Une facture détaillée reste le document clé pour votre dossier de sinistre.",
            "Un prix annoncé avant intervention est le meilleur signe de sérieux.",
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
        <CtaBlock title="Une question avant de faire intervenir un serrurier ?" />
      </div>

      <div className="mt-10">
        <ArticleNav currentHref={HREF} />
      </div>
    </article>
  );
}
