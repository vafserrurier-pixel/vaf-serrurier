import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import ArticleSummary from "@/components/ArticleSummary";
import ArticleByline from "@/components/ArticleByline";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleTable from "@/components/ArticleTable";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import ArticleKeyTakeaways from "@/components/ArticleKeyTakeaways";
import AuthorBox from "@/components/AuthorBox";
import ArticleNav from "@/components/ArticleNav";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBadges from "@/components/TrustBadges";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { blogPostByHref } from "@/lib/blogPosts";

const HREF = "/blog/changer-serrure-separation-divorce/";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Séparation, divorce : qui a le droit de faire changer la serrure ? | VAF",
  description: "Époux, pacsés, concubins : ce que dit vraiment la loi sur le changement de serrure pendant une séparation, et la procédure rapide en cas de violences conjugales.",
});

const toc = [
  { id: "logement-familial", label: "Mariés : le logement familial est protégé" },
  { id: "autorisation-juge", label: "Le juge peut autoriser le changement de serrure" },
  { id: "concubins-pacs", label: "Concubinage et PACS : une autre règle" },
  { id: "violences-conjugales", label: "Violences conjugales : une procédure rapide" },
  { id: "recap", label: "Récapitulatif selon votre situation" },
  { id: "litige", label: "Ce qui protège en cas de litige" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "Mon conjoint a fait changer la serrure sans mon accord, que faire ?",
    answer:
      "Si vous êtes mariés et que le divorce n'est pas encore prononcé, ce changement viole en principe l'article 215 du Code civil sur le logement familial : vous pouvez en demander l'annulation. Rapprochez-vous d'un avocat en droit de la famille ou du juge aux affaires familiales pour faire valoir vos droits, en particulier pour obtenir l'accès au logement.",
  },
  {
    question: "Je suis marié(e) et seul(e) propriétaire du logement : puis-je changer la serrure librement ?",
    answer:
      "Non, pas tant que le divorce n'est pas prononcé. L'article 215 du Code civil protège le logement de la famille indépendamment de la question de propriété : les deux époux doivent être d'accord, sauf décision contraire du juge aux affaires familiales.",
  },
  {
    question: "Le divorce est prononcé, puis-je changer la serrure ?",
    answer:
      "Une fois le divorce définitivement prononcé, le logement occupé par l'un des ex-époux ne constitue plus le « logement de la famille » au sens de l'article 215. La protection cesse en principe à ce moment-là, mais les modalités concrètes (qui reste dans les lieux, qui doit partir) doivent rester conformes au jugement de divorce.",
  },
  {
    question: "Je ne suis pas marié(e) mais je suis seul(e) titulaire du bail : puis-je changer la serrure ?",
    answer:
      "Le PACS et le concubinage ne donnent pas la même protection automatique du logement que le mariage. Si vous êtes seul(e) titulaire du bail ou seul(e) propriétaire et que votre ex-partenaire est simplement hébergé(e), vous pouvez reprendre la pleine disposition du logement. En revanche, si cette personne refuse de partir, une expulsion « à la main » (serrure changée pour l'empêcher de rentrer alors qu'elle est toujours présente ou s'y oppose) vous expose à un litige : mieux vaut passer par une décision de justice plutôt que forcer la situation vous-même.",
  },
  {
    question: "Que faire en urgence en cas de violences conjugales ?",
    answer:
      "L'ordonnance de protection permet au juge aux affaires familiales d'attribuer le logement à la victime et d'évincer l'auteur des violences, que vous soyez marié(e), pacsé(e) ou en concubinage. Une version d'urgence (ordonnance provisoire de protection immédiate) peut être rendue en 24h en cas de danger grave et immédiat. En cas de danger, appelez d'abord le 17 ou le 3919 (numéro national dédié) avant toute autre démarche.",
  },
  {
    question: "Combien coûte un changement de serrure dans ce contexte ?",
    answer:
      "Le tarif dépend du type de serrure et du cylindre choisi, pas du contexte de la demande : retrouvez ma grille de prix habituelle, toujours annoncée avant l'intervention.",
  },
];

export default function ChangerSerrureSeparationDivorcePage() {
  const post = blogPostByHref(HREF)!;
  return (
    <article>
      <JsonLd
        data={blogPostingSchema({
          headline: "Séparation, divorce : qui a le droit de faire changer la serrure ?",
          description:
            "Époux, pacsés, concubins : ce que dit vraiment la loi sur le changement de serrure pendant une séparation, et la procédure rapide en cas de violences conjugales.",
          url: `${business.domain}${HREF}`,
          datePublished: "2026-09-18",
          dateModified: "2026-09-18",
          image: post.image,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Séparation, divorce : qui a le droit de changer la serrure", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Séparation, divorce : qui a le droit de changer la serrure", href: HREF },
            ]}
          />
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}>
            {post.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            Séparation, divorce : qui a le droit de faire changer la serrure ?
          </h1>
          <ArticleByline readingMinutes={7} updatedLabel="Rédigé le 18 septembre 2026" />
          <div className="mt-6">
            <TrustBadges />
          </div>
          <div className="mt-8">
            <ArticleSummary
              points={[
                <>
                  Mariés, divorce non prononcé : le <strong>logement familial est protégé</strong> par l&apos;article 215 du Code civil, quelle que soit la question de propriété.
                </>,
                "Seul le juge aux affaires familiales peut attribuer la jouissance exclusive du logement et autoriser un changement de serrure pendant la procédure.",
                "PACS et concubinage suivent une autre règle : tout dépend de qui est propriétaire ou titulaire du bail.",
                <>
                  En cas de violences conjugales, l&apos;<strong>ordonnance de protection</strong> permet une réponse rapide (jusqu&apos;à 24h en urgence), quel que soit le statut du couple.
                </>,
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className="text-slate leading-relaxed">
              C&apos;est une question que j&apos;entends régulièrement au téléphone dans des
              circonstances difficiles : une séparation qui se passe mal, et l&apos;envie
              légitime de reprendre le contrôle de son logement. Le problème, c&apos;est
              que la réponse n&apos;est pas la même selon que vous êtes marié, pacsé ou en
              concubinage, et qu&apos;agir trop vite peut se retourner contre vous
              juridiquement. Voici ce que dit réellement la loi, pour éviter d&apos;aggraver
              une situation déjà compliquée.
            </p>

            <div>
              <ArticleSectionHeading number={1} id="logement-familial">
                Mariés : le logement familial est protégé
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Si vous êtes mariés et que le divorce n&apos;est pas encore prononcé,
                l&apos;
                <a
                  href="https://www.legifrance.gouv.fr/codes/article_lc/LEGIARTI000006422766"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel underline"
                >
                  article 215 du Code civil
                </a>{" "}
                protège ce qu&apos;on appelle le « logement de la famille ». Son troisième
                alinéa est clair : les époux ne peuvent pas, l&apos;un sans l&apos;autre,
                disposer des droits qui assurent ce logement. En clair, changer la
                serrure sans l&apos;accord de l&apos;autre revient à le priver d&apos;un
                droit sur le logement familial, ce que la loi interdit précisément.
              </p>
              <p className="text-slate leading-relaxed mt-4">
                Ce qui surprend souvent : cette protection s&apos;applique{" "}
                <strong>même si vous êtes seul propriétaire ou seul titulaire du bail</strong>.
                Être le seul nom sur l&apos;acte de propriété ne change rien tant que le
                divorce n&apos;a pas été prononcé. Le conjoint qui n&apos;a pas donné son
                accord peut demander l&apos;annulation du changement devant le juge.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/pool/benoit-serrurier-serrure-posee-nice.webp"
                alt="Benoît, artisan serrurier, à côté d'une serrure posée à Nice"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <ArticleSectionHeading number={2} id="autorisation-juge">
                Le juge peut autoriser le changement de serrure
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Pendant la procédure de divorce, le juge aux affaires familiales (JAF)
                peut attribuer la <strong>jouissance exclusive du logement</strong> à
                l&apos;un des deux époux. Depuis la réforme de la procédure de divorce
                entrée en vigueur au 1er janvier 2021, cette décision est prise lors de
                l&apos;audience d&apos;orientation et sur mesures provisoires, et prend la
                forme d&apos;une ordonnance sur mesures provisoires (l&apos;ancienne
                « ordonnance de non-conciliation » n&apos;existe plus sous ce nom).
              </p>
              <p className="text-slate leading-relaxed mt-4">
                Une fois cette jouissance exclusive accordée, l&apos;époux qui en
                bénéficie peut légitimement restreindre l&apos;accès au logement, et donc
                faire changer la serrure. C&apos;est cette décision de justice qui
                sécurise l&apos;intervention, pas une appréciation personnelle de la
                situation.
              </p>
              <p className="text-slate leading-relaxed mt-4">
                Une fois muni de cette décision, il n&apos;y a pas besoin d&apos;attendre :
                un{" "}
                <Link href="/urgence-serrurier-nice/" prefetch={false} className="text-steel underline">
                  serrurier en urgence
                </Link>{" "}
                peut intervenir le jour même pour sécuriser à nouveau le logement.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={3} id="concubins-pacs">
                Concubinage et PACS : une autre règle
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                L&apos;article 215 du Code civil ne s&apos;applique qu&apos;aux couples
                mariés. Ni le PACS ni le concubinage n&apos;offrent cette protection
                automatique du logement. La règle devient alors beaucoup plus simple,
                mais aussi plus binaire : tout dépend de qui est réellement propriétaire
                ou titulaire du bail.
              </p>
              <p className="text-slate leading-relaxed mt-4">
                Si vous êtes seul propriétaire ou seul locataire en titre, et que votre
                partenaire est simplement hébergé sans droit propre sur le logement,
                vous pouvez en principe reprendre la pleine disposition des lieux. En
                revanche, si cette personne refuse de partir, la prudence s&apos;impose :
                changer la serrure pour l&apos;empêcher physiquement de rentrer, alors
                qu&apos;elle conteste la situation, s&apos;apparente à une expulsion
                réalisée sans décision de justice. C&apos;est le type de situation où
                mieux vaut se faire confirmer la marche à suivre par un professionnel du
                droit avant d&apos;agir, plutôt que de s&apos;exposer à un litige.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={4} id="violences-conjugales">
                Violences conjugales : une procédure rapide
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Dans un contexte de violences, la réponse ne dépend plus du statut du
                couple. L&apos;
                <a
                  href="https://www.legifrance.gouv.fr/codes/section_lc/LEGITEXT000006070721/LEGISCTA000022455910/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel underline"
                >
                  ordonnance de protection
                </a>{" "}
                (articles 515-9 à 515-13-1 du Code civil) est ouverte aux couples mariés,
                pacsés ou en concubinage, quelle que soit la durée de la relation ou le
                fait d&apos;avoir vécu ensemble ou non. L&apos;article 515-11 permet au
                juge aux affaires familiales d&apos;attribuer la jouissance du logement au
                conjoint qui n&apos;est pas l&apos;auteur des violences, et d&apos;organiser
                le départ de l&apos;autre.
              </p>
              <p className="text-slate leading-relaxed mt-4">
                Le délai de traitement est volontairement court : l&apos;ordonnance doit
                être rendue au maximum six jours après la fixation de la date
                d&apos;audience. En cas de danger grave et immédiat, une{" "}
                <strong>ordonnance provisoire de protection immédiate</strong> peut être
                délivrée sans audience, en 24 heures.
              </p>
              <p className="text-slate leading-relaxed mt-4">
                Si vous êtes en danger, la priorité reste d&apos;appeler le 17 (police) ou
                le 3919 (numéro national dédié aux violences conjugales, gratuit et
                anonyme) avant toute démarche liée au logement.
              </p>
            </div>

            <ArticleTable
              caption="Qui peut légitimement faire changer la serrure, selon la situation."
              headers={["Situation", "Changement de serrure possible ?", "Ce qu'il faut"]}
              rows={[
                ["Mariés, aucune décision de justice", "Non", "Accord des deux époux (art. 215 C. civ.)"],
                ["Mariés, jouissance exclusive accordée par le JAF", "Oui", "Ordonnance sur mesures provisoires"],
                ["Mariés, divorce définitivement prononcé", "Oui, en principe", "Jugement de divorce"],
                ["PACS/concubinage, seul titulaire du bail ou propriétaire", "Oui, si l'autre n'a pas de droit propre", "Titre de propriété ou bail à votre nom"],
                ["PACS/concubinage, l'autre refuse de partir", "Non, sans décision", "Décision de justice recommandée"],
                ["Violences conjugales, tout statut", "Oui, en urgence", "Ordonnance de protection (délai 24h à 6 jours)"],
              ]}
            />

            <div>
              <ArticleSectionHeading number={5} id="recap">
                Récapitulatif selon votre situation
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Le tableau ci-dessus résume les situations les plus fréquentes. Dans tous
                les cas hors urgence, c&apos;est une décision de justice qui sécurise le
                changement de serrure, pas la simple conviction d&apos;être dans son bon
                droit.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={6} id="litige">
                Ce qui protège en cas de litige
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Comme pour toute intervention, une facture détaillée reste le document
                de référence si la situation est contestée par la suite : date, adresse,
                nature exacte de l&apos;intervention, matériel posé. Je ne suis pas en
                mesure de vérifier la validité d&apos;un jugement ou d&apos;arbitrer un
                désaccord entre deux personnes séparées : mon rôle s&apos;arrête à
                l&apos;intervention et à la facture qui la documente, le reste relève d&apos;un
                avocat ou du juge compétent. Retrouvez mes{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className="text-steel underline">
                  tarifs annoncés à l&apos;avance
                </Link>
                {" "}et le détail d&apos;un{" "}
                <Link href="/changement-serrure-nice/" prefetch={false} className="text-steel underline">
                  changement de serrure
                </Link>
                . Une question proche, sur qui paie plutôt que sur qui a le droit
                d&apos;agir, est traitée dans mon article sur{" "}
                <Link href="/blog/qui-paie-changement-serrure-location-nice/" prefetch={false} className="text-steel underline">
                  la répartition des frais en location
                </Link>
                .
              </p>
            </div>

            <ArticleKeyTakeaways
              points={[
                "Mariés : le logement familial est protégé par l'article 215 du Code civil, indépendamment de la propriété, tant que le divorce n'est pas prononcé.",
                "Seule une décision du juge aux affaires familiales (jouissance exclusive, jugement de divorce) sécurise juridiquement un changement de serrure entre époux.",
                "PACS et concubinage suivent une autre logique : tout dépend de qui est propriétaire ou titulaire du bail, pas d'une protection automatique du logement.",
                "En cas de violences conjugales, l'ordonnance de protection permet une réponse rapide (jusqu'à 24h en urgence) quel que soit le statut du couple.",
              ]}
            />

            <div>
              <ArticleSectionHeading number={7} id="faq">
                Foire aux questions
              </ArticleSectionHeading>
              <FaqAccordion items={faqItems} />
            </div>

            <AuthorBox />
          </ArticleLayout>
        </div>
      </section>

      <section className="bg-white border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <CtaBlock title="Besoin d'un changement de serrure à Nice ?" />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <ArticleNav currentHref={HREF} />
        </div>
      </section>
    </article>
  );
}
