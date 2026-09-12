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
import ArticleOpinion from "@/components/ArticleOpinion";
import ArticleKeyTakeaways from "@/components/ArticleKeyTakeaways";
import AuthorBox from "@/components/AuthorBox";
import ArticleNav from "@/components/ArticleNav";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBadges from "@/components/TrustBadges";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { blogPostByHref } from "@/lib/blogPosts";

const HREF = "/blog/digicode-cles-hall-copropriete-nice/";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Clés de hall, digicode, organigramme : qui décide en copropriété ? | VAF",
  description: "Serrure de hall, digicode, organigramme de clés en copropriété à Nice : qui décide, qui paie, et ce qui détermine le prix d'une intervention.",
  article: { author: business.firstName, readingTime: "7 min" },
});

const toc = [
  { id: "qui-decide", label: "Qui décide : le syndic, sur mandat de l'AG" },
  { id: "qui-paie", label: "Qui paie : la collectivité des copropriétaires" },
  { id: "urgence", label: "En cas d'urgence, le syndic peut agir sans attendre" },
  { id: "digicode", label: "Digicode : un code qui doit tourner régulièrement" },
  { id: "organigramme", label: "Organigramme de clés : utile à partir de plusieurs accès" },
  { id: "recap", label: "Récapitulatif : qui décide, qui paie" },
  { id: "prix", label: "Ce qui détermine le prix d'une intervention" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "Le syndic peut-il changer le digicode sans vote en assemblée générale ?",
    answer:
      "Pour un simple changement de code sans remplacement de matériel, le syndic peut généralement agir dans le cadre de sa gestion courante. Un remplacement complet du digicode, lui, relève d'un vote en AG.",
  },
  {
    question: "Combien coûte un organigramme de clés pour un petit immeuble ?",
    answer:
      "Le prix dépend du nombre de niveaux d'accès et de points à équiper (hall, cave, local technique). Un devis détaillé, poste par poste, reste la seule façon d'avoir un prix fiable pour votre immeuble.",
  },
  {
    question: "Que faire si un ancien locataire ou prestataire a toujours le code du digicode ?",
    answer:
      "C'est justement la raison de faire tourner le code régulièrement, au moins une à deux fois par an et à chaque fin de contrat avec un prestataire ayant eu besoin d'y accéder.",
  },
  {
    question: "Un copropriétaire peut-il refuser de payer sa quote-part pour la serrure de hall ?",
    answer:
      "Une dépense votée en assemblée générale s'impose à l'ensemble des copropriétaires selon leurs tantièmes. Un désaccord sur le principe se règle en amont, lors du vote, pas après coup.",
  },
  {
    question: "Qui contacter en cas de porte de hall bloquée en urgence, la nuit ou le week-end ?",
    answer:
      "Le syndic peut mandater une intervention immédiate sans attendre la prochaine AG. J'interviens 24h/24 sur Nice pour ce type de situation, avec une facture qui pourra être ratifiée a posteriori.",
  },
  {
    question: "Le conseil syndical peut-il imposer un changement de serrure de hall ?",
    answer:
      "Le conseil syndical a un rôle consultatif : il peut proposer et préparer une résolution, mais la décision finale (hors urgence) revient au vote de l'assemblée générale des copropriétaires.",
  },
];

export default function ClesHallDigicodeOrganigrammeCoproprietePage() {
  const post = blogPostByHref(HREF)!;
  return (
    <article>
      <JsonLd
        data={blogPostingSchema({
          headline: "Clés de hall, digicode, organigramme : qui décide en copropriété ?",
          description:
            "Serrure de hall, digicode, organigramme de clés en copropriété à Nice : qui décide, qui paie, et ce qui détermine le prix d'une intervention.",
          url: `${business.domain}${HREF}`,
          datePublished: "2026-09-03",
          dateModified: "2026-09-12",
          image: post.image,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Clés de hall, digicode, organigramme", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Clés de hall, digicode, organigramme", href: HREF },
            ]}
          />
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}>

            {post.category}

          </span>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            Clés de hall, digicode, organigramme : qui décide en copropriété ?
          </h1>
          <ArticleByline readingMinutes={7} updatedLabel="Mis à jour le 12 septembre 2026" />
          <div className="mt-6">
            <TrustBadges />
          </div>
          <div className="mt-8">
            <ArticleSummary
              points={[
                <>
                  Une dépense sur les parties communes relève en principe d&apos;un <strong>vote en assemblée générale</strong> (loi du 10 juillet 1965).
                </>,
                "Le syndic peut agir sans attendre l'AG en cas d'urgence avérée.",
                "Un digicode n'est utile que s'il tourne régulièrement.",
                "Un organigramme de clés évite de changer tout l'immeuble en cas de perte ou de départ.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className="text-slate leading-relaxed">
              C&apos;est une question qui revient souvent, du côté des{" "}
              <Link href="/agences-syndics-nice/" className="text-steel underline">
                syndics
              </Link>{" "}
              comme des conseils syndicaux : qui a le pouvoir de faire changer une serrure de hall,
              de modifier un digicode, ou de mettre en place un organigramme de clés ? Et
              surtout, qui paie ? Voici les grands principes, avant d&apos;entrer dans le
              détail de ce qui influence le prix d&apos;une intervention.
            </p>

            <div>
              <ArticleSectionHeading number={1} id="qui-decide">
                Qui décide : le syndic, sur mandat de l&apos;assemblée générale
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Une porte de hall, un digicode ou une gâche électrique font partie des
                parties communes de l&apos;immeuble. La{" "}
                <a
                  href="https://www.anil.org/copropriete-travaux-majorites/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel underline"
                >
                  loi du 10 juillet 1965
                </a>{" "}
                prévoit plusieurs règles de majorité selon la nature des travaux votés en
                assemblée générale. Le syndic exécute la décision votée, il ne la prend
                pas seul, sauf urgence avérée.
              </p>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  Entretien à l&apos;identique : majorité simple
                </h3>
                <p className="text-slate leading-relaxed">
                  Remplacer une serrure de hall à l&apos;identique, sans changer sa
                  nature, relève généralement de l&apos;entretien courant des parties
                  communes, votée à la majorité simple des copropriétaires présents ou
                  représentés (article 24).
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  Nouvel équipement de sécurité : majorité absolue
                </h3>
                <p className="text-slate leading-relaxed">
                  L&apos;ajout d&apos;un équipement qui n&apos;existait pas encore (un
                  digicode, un interphone, une gâche électrique) est explicitement cité
                  par les textes comme un cas de travaux de sécurité, en général soumis à
                  la majorité absolue de tous les copropriétaires, présents ou non
                  (article 25).
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  Gâche mécanique, gâche électrique, ventouse : ce que le conseil syndical vote
                </h3>
                <p className="text-slate leading-relaxed">
                  Une gâche mécanique se débloque uniquement avec une clé, sans rien
                  d&apos;électrique à entretenir. Une gâche électrique s&apos;ouvre à
                  distance (interphone, digicode, badge), ce qui suppose une alimentation
                  et un entretien régulier. Une ventouse magnétique retient la porte par
                  un électroaimant, une solution surtout utilisée sur les portes vitrées
                  ou les issues de secours, rarement sur un hall d&apos;entrée standard.
                  Savoir laquelle est déjà en place aide à comprendre pourquoi un devis de
                  remplacement varie autant d&apos;un immeuble à l&apos;autre.
                </p>
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/pool/porte-immeuble-interphone-securisee-nice.webp"
                alt="Porte d'immeuble sécurisée avec interphone à Nice"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <ArticleSectionHeading number={2} id="qui-paie">
                Qui paie : la collectivité des copropriétaires
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Le remplacement d&apos;une serrure de hall ou d&apos;un digicode est une
                dépense d&apos;entretien des parties communes : elle est répartie entre
                tous les copropriétaires selon leurs tantièmes, via les charges
                communes. Une exception fréquente : si la dégradation est causée par un
                tiers identifié (un locataire, un prestataire), c&apos;est à cette personne
                ou à son assurance de rembourser la copropriété, pas aux autres
                copropriétaires de l&apos;absorber dans les charges — la même logique de
                responsabilité que pour une{" "}
                <Link href="/blog/qui-paie-changement-serrure-location-nice/" className="text-steel underline">
                  serrure privative en location
                </Link>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={3} id="urgence">
                En cas d&apos;urgence, le syndic peut agir sans attendre l&apos;AG
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Une porte de hall fracturée, une serrure bloquée qui empêche l&apos;accès
                à l&apos;immeuble : dans ce type de situation, comparable à une{" "}
                <Link href="/mise-en-securite-apres-effraction-nice/" className="text-steel underline">
                  mise en sécurité après effraction
                </Link>
                , le syndic n&apos;a pas à
                attendre la prochaine assemblée générale pour faire intervenir un
                serrurier. Il peut mandater une intervention immédiate pour sécuriser
                l&apos;accès, et la faire ratifier a posteriori par les copropriétaires.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={4} id="digicode">
                Digicode : un code qui doit tourner régulièrement
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Un digicode n&apos;est utile que s&apos;il reste confidentiel. En pratique,
                beaucoup de copropriétés ne le changent jamais, alors qu&apos;il finit par
                circuler bien au-delà des occupants (livreurs, anciens locataires,
                visiteurs). Le phénomène est d&apos;autant plus marqué dans les grandes
                copropriétés du centre-ville et de Jean-Médecin, où le nombre de
                logements rend le code difficile à garder confidentiel dans la durée. Le
                faire tourner une à deux fois par an, et à chaque changement de
                prestataire ayant eu besoin du code, reste la mesure la plus simple pour
                garder un accès réellement contrôlé.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={5} id="organigramme">
                Organigramme de clés : utile dès que plusieurs personnes ont besoin d&apos;un accès différent
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Un organigramme de clés organise une hiérarchie d&apos;accès : une clé
                passe générale ouvre tout l&apos;immeuble (syndic, entretien), une clé
                passe partiel ouvre certaines zones seulement (local poubelles, cave),
                et les résidents gardent leur clé individuelle. L&apos;intérêt principal :
                en cas de perte ou de départ d&apos;un prestataire, on révoque ou remplace
                uniquement le niveau concerné, sans avoir à changer toutes les serrures
                de l&apos;immeuble.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/agences-syndics-remise-de-cles.webp"
                alt="Remise de clés entre un serrurier et un syndic à Nice"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <ArticleSectionHeading number={6} id="recap">
                Récapitulatif : qui décide, qui paie
              </ArticleSectionHeading>
              <ArticleTable
                caption="Récapitulatif des rôles en copropriété."
                headers={["Élément", "Qui décide", "Qui paie"]}
                rows={[
                  ["Remplacement à l'identique (hall)", "Majorité simple, article 24", "Copropriétaires, au tantième"],
                  ["Nouveau digicode / interphone", "Majorité absolue, article 25", "Copropriétaires, au tantième"],
                  ["Organigramme de clés", "Assemblée générale", "Copropriétaires, au tantième"],
                  ["Intervention d'urgence", "Syndic seul, ratifiée ensuite", "Copropriétaires, au tantième"],
                ]}
              />
            </div>

            <div>
              <ArticleSectionHeading number={7} id="prix">
                Ce qui détermine le prix d&apos;une intervention
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Trois éléments font varier le prix : le nombre de points d&apos;accès à
                traiter (une porte de hall seule coûte moins qu&apos;un ensemble
                hall + parking + local technique), le type de matériel (une gâche
                électrique demande davantage de travail qu&apos;une serrure mécanique), et
                la complexité de l&apos;organigramme si plusieurs niveaux de clés sont
                nécessaires. Dans tous les cas, un devis détaillé, poste par poste, reste
                la seule façon d&apos;avoir un prix fiable, pas une estimation
                approximative au téléphone. Voir mes{" "}
                <Link href="/tarifs-serrurier-nice/" className="text-steel underline">
                  tarifs indicatifs
                </Link>{" "}
                ; j&apos;interviens dans tous les{" "}
                <Link href="/zones-intervention-nice/" className="text-steel underline">
                  quartiers de Nice
                </Link>
                .
              </p>
            </div>

            <ArticleOpinion quote="Le réflexe que je conseille le plus souvent aux syndics : faites tourner le digicode deux fois par an, même sans raison particulière. C'est gratuit, ça prend cinq minutes, et ça règle silencieusement la moitié des soucis d'accès non maîtrisés." />

            <ArticleKeyTakeaways
              points={[
                "Une dépense sur les parties communes relève en principe d'un vote en assemblée générale.",
                "Un remplacement à l'identique se vote plus facilement (majorité simple) qu'un nouvel équipement (majorité absolue).",
                "Le syndic peut agir sans attendre en cas d'urgence, avec ratification a posteriori.",
                "Un digicode doit tourner régulièrement pour rester réellement utile.",
              ]}
            />

            <div>
              <ArticleSectionHeading number={8} id="faq">
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
          <CtaBlock title="Besoin d'intervenir sur les accès de votre copropriété ?" />
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
