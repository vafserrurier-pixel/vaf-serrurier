import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import ArticleByline from "@/components/ArticleByline";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import ArticleTable from "@/components/ArticleTable";
import AuthorBox from "@/components/AuthorBox";
import ArticleNav from "@/components/ArticleNav";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBadges from "@/components/TrustBadges";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { blogPostByHref } from "@/lib/blogPosts";

const HREF = "/blog/arnaque-serrurier-nice-comment-eviter/";
const TITLE = "Arnaque au serrurier à Nice : comment l'éviter ?";
const DESCRIPTION =
  "Autocollants, prix flous, facture à 1 300 € : comment repérer un serrurier qui profite de l'urgence, le prix normal à Nice, et que faire après.";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: TITLE,
  description: DESCRIPTION,
  article: { author: business.firstName, readingTime: "5 min" },
  image: blogPostByHref(HREF)?.image,
});

const toc = [
  { id: "qui", label: "Qui sont les serruriers qui profitent de l'urgence ?" },
  { id: "reconnaitre", label: "Comment les reconnaître avant d'appeler ?" },
  { id: "prix", label: "Quel est le prix normal d'une ouverture de porte à Nice ?" },
  { id: "honnete", label: "Que doit faire un serrurier honnête avant de commencer ?" },
  { id: "cas-reel", label: "Un cas réel à Nice" },
  { id: "facture-abusive", label: "Que faire si vous avez déjà payé une facture abusive ?" },
  { id: "paiement", label: "Payer par carte plutôt qu'en espèces" },
  { id: "reflexe", label: "Le meilleur réflexe : choisir avant d'en avoir besoin" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quel est le prix normal d'une ouverture de porte à Nice ?",
    answer:
      "Chez un artisan honnête, une porte claquée s'ouvre pour environ 150 € en journée. Chez moi, c'est 149 € TTC, déplacement compris, et 189 € le soir après 19 h, le week-end et les jours fériés. Pour une porte fermée à clé, il faut ajouter un cylindre neuf, dès 249 €. Une facture de 1 000 € pour une simple ouverture n'est pas normale.",
  },
  {
    question: "Le serrurier doit-il donner un devis avant d'intervenir ?",
    answer:
      "Oui. Il doit vous remettre un document écrit et détaillé, à signer avant de commencer, avec la main-d'œuvre, les pièces et leur prix.",
  },
  {
    question: "Comment reconnaître un serrurier qui risque d'abuser ?",
    answer:
      "Un autocollant dans le hall, aucune adresse à Nice, un prix flou au téléphone, pas de SIRET, et une fiche Google sans avis réels sont autant de signaux d'alerte.",
  },
  {
    question: "Le serrurier peut-il repartir avec ma serrure ?",
    answer:
      "Non. Les pièces remplacées vous appartiennent, et le document remis avant les travaux doit indiquer que vous pouvez les conserver.",
  },
  {
    question: "Que faire après une facture abusive ?",
    answer:
      "Rassemblez les preuves, contestez par lettre recommandée, signalez les faits sur SignalConso, faites-vous aider par votre protection juridique ou une association de consommateurs, et portez plainte si la démarche amiable échoue.",
  },
  {
    question: "Faut-il payer un serrurier en espèces ?",
    answer:
      "Mieux vaut payer par carte bancaire ou par virement, qui laissent une trace en cas de litige. Méfiez-vous d'un serrurier qui exige des espèces sur-le-champ. Chez moi, presque tous les clients paient par carte ou par virement instantané.",
  },
];

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed";
const olClass = "list-decimal pl-5 flex flex-col gap-2.5 text-slate leading-relaxed";

export default function ArnaqueSerrurierPage() {
  const post = blogPostByHref(HREF)!;
  return (
    <article>
      <JsonLd
        data={blogPostingSchema({
          headline: TITLE,
          description: DESCRIPTION,
          url: `${business.domain}${HREF}`,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          image: post.image,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Arnaque au serrurier à Nice", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Arnaque au serrurier à Nice", href: HREF },
            ]}
          />
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}>
            {post.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{TITLE}</h1>
          <ArticleByline readingMinutes={post.readingMinutes} updatedLabel="Publié le 29 octobre 2026" />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className={pClass}>
              Pour éviter une facture abusive, demandez le prix total au téléphone avant que le serrurier se
              déplace, exigez un document écrit et détaillé avant qu&apos;il commence, et méfiez-vous des
              autocollants collés dans les halls d&apos;immeubles. À Nice, une{" "}
              <Link href="/ouverture-de-porte-nice/" className={linkClass}>
                ouverture de porte
              </Link>{" "}
              claquée coûte 149 € en journée chez un artisan honnête, pas 1 000 € ou plus.
            </p>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <ArticleSectionHeading number={1} id="qui">
                Qui sont les serruriers qui profitent de l&apos;urgence ?
              </ArticleSectionHeading>
              <p className={pClass}>
                Sur le terrain, ce que je vois le plus souvent, ce ne sont pas de faux serruriers, mais des
                entreprises peu scrupuleuses qui misent tout sur la publicité en ligne et sur la panique de leurs
                clients. Elles apparaissent en tête des résultats grâce aux annonces payantes, et collent leurs
                autocollants en haut des portes d&apos;entrée et dans les halls.
              </p>
              <p className={`${pClass} mt-3`}>
                Les techniciens envoyés sont souvent peu expérimentés, et ils sont parfois rémunérés au
                pourcentage de la facture : plus elle est élevée, plus ils gagnent. Le siège de ces sociétés
                n&apos;est souvent pas à Nice : il peut être à Paris ou ailleurs, et le numéro appelé est celui
                d&apos;un standard.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={2} id="reconnaitre">
                Comment les reconnaître avant d&apos;appeler ?
              </ArticleSectionHeading>
              <ol className={olClass}>
                <li>
                  <strong className="text-navy">Un autocollant sur votre porte ou dans le hall</strong> : personne
                  de l&apos;immeuble ne l&apos;a commandé. C&apos;est de la publicité, pas un serrurier recommandé
                  par votre syndic.
                </li>
                <li>
                  <strong className="text-navy">Aucune adresse à Nice</strong>, ou une adresse introuvable, et un
                  numéro qui tombe sur un standard.
                </li>
                <li>
                  <strong className="text-navy">Un prix flou au téléphone</strong> : « ça dépend », « on verra sur
                  place », ou un tarif d&apos;appel très bas sans frais de déplacement ni pièces.
                </li>
                <li>
                  <strong className="text-navy">Pas de nom d&apos;entreprise ni de SIRET</strong> sur le site ou
                  l&apos;annonce.
                </li>
                <li>
                  <strong className="text-navy">Une fiche Google sans avis réels</strong>, ou des avis tous
                  identiques.
                </li>
              </ol>
              <p className={`${pClass} mt-3`}>
                Prenez deux minutes pour vérifier, même en pleine panique. C&apos;est ce temps-là qui fait la
                différence entre 149 € et 1 000 €.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={3} id="prix">
                Quel est le prix normal d&apos;une ouverture de porte à Nice ?
              </ArticleSectionHeading>
              <ArticleTable
                headers={["Situation", "En journée", "Après 19 h, week-end, jours fériés"]}
                rows={[
                  ["Porte claquée, ouverte sans dégât", "149 €", "189 €"],
                  ["Porte fermée à clé", "149 € + cylindre (dès 249 €)", "209 € + cylindre"],
                ]}
              />
              <p className={`${pClass} mt-4`}>
                Les montants de ce tableau sont TTC, et le déplacement est inclus partout à Nice. Une porte simplement claquée s&apos;ouvre presque
                toujours sans dégât. Pour une porte fermée à clé, il faut en général percer le cylindre puis{" "}
                <Link href="/changement-serrure-nice/" className={linkClass}>
                  changer le cylindre
                </Link>{" "}
                : c&apos;est ce qui explique l&apos;écart de prix. Vous trouverez{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className={linkClass}>
                  tous mes tarifs
                </Link>{" "}
                en ligne, et{" "}
                <Link href="/blog/prix-serrurier-nice-guide/" className={linkClass}>
                  ce qui fait varier le prix
                </Link>{" "}
                d&apos;une intervention à l&apos;autre.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={4} id="honnete">
                Que doit faire un serrurier honnête avant de commencer ?
              </ArticleSectionHeading>
              <p className={pClass}>
                Le dépannage à domicile est encadré par l&apos;arrêté du 24 janvier 2017. Avant de se déplacer, le
                professionnel doit vous communiquer ses tarifs s&apos;ils vous les demandez, frais de déplacement
                compris. Avant les travaux, il doit vous remettre un document écrit et détaillé, que vous signez,
                avec la main-d&apos;œuvre, les pièces et leur prix, et les éventuelles majorations.
              </p>
              <p className={`${pClass} mt-3`}>
                Ce document doit aussi indiquer que vous pouvez conserver les pièces remplacées. Elles vous
                appartiennent : un serrurier n&apos;a pas à repartir avec votre serrure.
              </p>
              <p className={`${pClass} mt-3`}>
                Ma façon de faire est simple : je vous demande une photo de votre serrure, par WhatsApp ou par
                SMS. Je vous annonce ainsi un prix complet, TTC, y compris le cylindre si son remplacement devient
                nécessaire, avant même de partir. Sur place, je vous confirme ce prix avant de commencer.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={5} id="cas-reel">
                Un cas réel à Nice
              </ArticleSectionHeading>
              <p className={pClass}>
                Un vendredi matin, un client m&apos;appelle. La veille au soir, il ne pouvait plus ouvrir sa
                porte. Pris de panique, il a appelé le premier numéro trouvé, sans vérifier. L&apos;ouverture lui a
                été facturée 1 300 €. Et le serrurier est reparti avec la serrure, pour l&apos;obliger à le
                rappeler le lendemain.
              </p>
              <p className={`${pClass} mt-3`}>
                Devant les prix annoncés pour la suite, ce client a pris le temps de chercher un autre serrurier,
                et il m&apos;a appelé. Ce genre de situation se règle en quelques minutes et pour une fraction de
                ce prix quand on connaît les tarifs normaux.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={6} id="facture-abusive">
                Que faire si vous avez déjà payé une facture abusive ?
              </ArticleSectionHeading>
              <ol className={olClass}>
                <li>
                  <strong className="text-navy">Rassemblez les preuves</strong> : devis, facture, photos de la
                  porte et de la serrure, captures d&apos;écran de l&apos;annonce ou de l&apos;autocollant.
                </li>
                <li>
                  <strong className="text-navy">Contestez par écrit</strong> : envoyez une lettre recommandée avec
                  accusé de réception qui résume les faits et ce qui manquait (devis, prix annoncé, facture
                  détaillée).
                </li>
                <li>
                  <strong className="text-navy">Signalez les faits sur SignalConso</strong>, la plateforme de la
                  répression des fraudes (DGCCRF).
                </li>
                <li>
                  <strong className="text-navy">Faites-vous aider</strong> par votre assurance protection
                  juridique si vous en avez une, ou par une association de consommateurs.
                </li>
                <li>
                  <strong className="text-navy">Portez plainte</strong> au commissariat ou à la gendarmerie si la
                  démarche amiable échoue, surtout si vous avez subi des pressions.
                </li>
              </ol>
            </div>

            <div>
              <ArticleSectionHeading number={7} id="paiement">
                Payer par carte plutôt qu&apos;en espèces
              </ArticleSectionHeading>
              <p className={pClass}>
                Un paiement par carte bancaire ou par virement laisse une trace, ce qui vous protège en cas de
                litige. Méfiez-vous d&apos;un serrurier qui exige des espèces sur-le-champ. Chez moi, presque tous
                les clients paient par carte ou par virement instantané. J&apos;accepte aussi les espèces, mais
                c&apos;est devenu rare.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={8} id="reflexe">
                Le meilleur réflexe : choisir avant d&apos;en avoir besoin
              </ArticleSectionHeading>
              <p className={pClass}>
                Le jour où vous êtes bloqué dehors, vous n&apos;avez pas le temps de comparer. Enregistrez dès
                aujourd&apos;hui le numéro d&apos;un serrurier local dont vous avez vérifié l&apos;adresse, les
                prix et les avis. Et si votre porte vient de claquer, lisez aussi{" "}
                <Link href="/blog/porte-qui-claque-serrurier-nice/" className={linkClass}>
                  les bons réflexes avant d&apos;appeler
                </Link>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={9} id="faq">
                Questions fréquentes
              </ArticleSectionHeading>
              <FaqAccordion items={faqItems} />
            </div>

            <AuthorBox />
          </ArticleLayout>
        </div>
      </section>

      <section className="bg-white border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <div className="mb-6">
            <TrustBadges />
          </div>
          <CtaBlock title="Besoin d'un serrurier à Nice ?" />
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
