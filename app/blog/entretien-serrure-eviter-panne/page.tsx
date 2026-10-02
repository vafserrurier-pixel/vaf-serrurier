import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import ArticleSummary from "@/components/ArticleSummary";
import ArticleByline from "@/components/ArticleByline";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import ArticleWarning from "@/components/ArticleWarning";
import ArticleKeyTakeaways from "@/components/ArticleKeyTakeaways";
import AuthorBox from "@/components/AuthorBox";
import ArticleNav from "@/components/ArticleNav";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBadges from "@/components/TrustBadges";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { blogPostByHref } from "@/lib/blogPosts";

const HREF = "/blog/entretien-serrure-eviter-panne/";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Entretien d'une serrure : le geste qui évite la panne | VAF",
  description: "Démonter le cylindre, le nettoyer, le graisser au WD-40 : mon geste d'entretien, et pourquoi l'huile alimentaire est une mauvaise idée pour une serrure.",
  article: { author: business.firstName, readingTime: "4 min" },
});

const toc = [
  { id: "geste", label: "Ce que je recommande : démonter, nettoyer, graisser" },
  { id: "huile-alimentaire", label: "Le produit à ne jamais utiliser" },
  { id: "quand-appeler", label: "Quand m'appeler plutôt que de forcer" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "Quel produit utiliser pour graisser un cylindre de serrure ?",
    answer:
      "Je recommande le WD-40, appliqué une fois le cylindre démonté et nettoyé. C'est le produit que je conseille pour l'entretien d'une serrure.",
  },
  {
    question: "Puis-je mettre de l'huile de cuisine dans ma serrure ?",
    answer:
      "Non, c'est un réflexe courant mais une mauvaise idée. Une huile alimentaire n'est pas conçue pour un mécanisme de serrure : avec le temps, elle devient collante et attire la poussière et la saleté au lieu de protéger le mécanisme.",
  },
  {
    question: "À quelle fréquence faut-il entretenir sa serrure ?",
    answer:
      "Je ne donne pas de rythme précis : l'idée est d'en faire un entretien régulier, de temps en temps, plutôt que d'attendre que la clé commence à forcer pour s'en occuper.",
  },
  {
    question: "Ma clé force toujours après l'entretien, que faire ?",
    answer:
      "Appelez-moi plutôt que de forcer. Je regarde le cylindre sur place et j'annonce le prix avant d'intervenir. Un changement de cylindre standard démarre à 249 € TTC, déplacement et main d'œuvre inclus.",
  },
];

export default function EntretienSerrureEviterPannePage() {
  const post = blogPostByHref(HREF)!;
  return (
    <article>
      <JsonLd
        data={blogPostingSchema({
          headline: "Entretien d'une serrure : le geste simple qui évite la panne",
          description:
            "Démonter le cylindre, le nettoyer, le graisser au WD-40 : mon geste d'entretien, et pourquoi l'huile alimentaire est une mauvaise idée pour une serrure.",
          url: `${business.domain}${HREF}`,
          datePublished: "2026-10-02",
          dateModified: "2026-10-02",
          image: post.image,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Entretien d'une serrure", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Entretien d'une serrure", href: HREF },
            ]}
          />
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}>
            {post.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            Entretien d&apos;une serrure : le geste simple qui évite la panne
          </h1>
          <ArticleByline readingMinutes={post.readingMinutes} updatedLabel="Publié le 2 octobre 2026" />
          <div className="mt-6">
            <TrustBadges />
          </div>
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mt-8">
            <Image
              src={post.image}
              alt="serrurier Nice entretien serrure"
              fill
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover object-[50%_35%]"
              priority
            />
          </div>
          <div className="mt-8">
            <ArticleSummary
              points={[
                <>
                  Je recommande de <strong>démonter le cylindre de temps en temps</strong> (le sortir de la porte), de le nettoyer, puis de le graisser au WD-40.
                </>,
                <>
                  Jamais d&apos;<strong>huile alimentaire</strong> : elle devient collante avec le temps et attire la saleté au lieu de protéger.
                </>,
                "Pas de calendrier à suivre à la lettre : l'important est que l'entretien soit régulier, avant que la clé ne force.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className="text-slate leading-relaxed">
              On pense rarement à sa serrure tant qu&apos;elle fonctionne. C&apos;est
              souvent le jour où la clé force, ou ne tourne plus, qu&apos;on s&apos;en
              préoccupe. Voici le geste d&apos;entretien que je recommande, et le produit
              que je vois souvent utiliser par réflexe alors qu&apos;il ne faut surtout
              pas.
            </p>

            <div>
              <ArticleSectionHeading number={1} id="geste">
                Ce que je recommande : démonter, nettoyer, graisser
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Mon conseil tient en trois gestes, dans cet ordre. Je ne fixe pas de
                calendrier précis : l&apos;idée est d&apos;en faire un entretien régulier,
                plutôt que d&apos;attendre que la clé commence à forcer.
              </p>
              <ol className="list-decimal pl-5 mt-3 flex flex-col gap-1.5 text-slate leading-relaxed">
                <li>Sortir le cylindre de la porte, de temps en temps.</li>
                <li>Le nettoyer et graisser autour de l&apos;entraîneur.</li>
                <li>Le graisser au WD-40.</li>
              </ol>

              <div className="mt-6">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  Étape 1 : sortir le cylindre de la porte
                </h3>
                <p className="text-slate leading-relaxed">
                  Démonter le cylindre, c&apos;est simplement le sortir de la porte. Sur un
                  cylindre européen classique, voici comment faire :
                </p>
                <ol className="list-decimal pl-5 mt-2 flex flex-col gap-1.5 text-slate leading-relaxed">
                  <li>
                    Laissez la porte ouverte pendant toute l&apos;opération, pour ne pas
                    vous retrouver enfermé dehors.
                  </li>
                  <li>
                    Repérez la vis de fixation du cylindre, sur la tranche de la porte, au
                    niveau de la serrure, et dévissez-la.
                  </li>
                  <li>
                    Introduisez la clé et tournez-la légèrement, jusqu&apos;à la position où
                    le cylindre coulisse librement. Cette position varie selon les modèles.
                  </li>
                  <li>Tirez le cylindre vers vous pour le sortir de la porte.</li>
                </ol>
                <p className="text-slate leading-relaxed mt-2">
                  Si vous ne trouvez pas la vis ou si le cylindre ne sort pas, n&apos;insistez
                  pas : appelez-moi.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  Étape 2 : le nettoyer et graisser autour de l&apos;entraîneur
                </h3>
                <p className="text-slate leading-relaxed">
                  Essuyez le cylindre avec un chiffon propre pour retirer la poussière et
                  les dépôts visibles, en particulier autour de l&apos;entrée de clé.
                  Graissez aussi autour de l&apos;entraîneur, la came située à
                  l&apos;extrémité du cylindre, celle qui actionne le mécanisme de la
                  serrure.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  Étape 3 : le graisser au WD-40
                </h3>
                <p className="text-slate leading-relaxed">
                  Pulvérisez un peu de WD-40 dans l&apos;entrée de clé, puis introduisez la
                  clé et faites-la aller-retour plusieurs fois pour répartir le produit.
                  Essuyez l&apos;excédent.
                </p>
              </div>

              <div className="mt-4">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  Pour le remettre en place
                </h3>
                <p className="text-slate leading-relaxed">
                  Replacez le cylindre dans son logement, revissez la vis de fixation, puis
                  testez le verrouillage porte ouverte avant de la refermer.
                </p>
              </div>
            </div>

            <div>
              <ArticleSectionHeading number={2} id="huile-alimentaire">
                Le produit à ne jamais utiliser : l&apos;huile alimentaire
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                C&apos;est un geste que font souvent les particuliers, par réflexe : la
                serrure grince ou résiste, et on attrape l&apos;huile qu&apos;on a sous
                la main, celle de la cuisine. C&apos;est une mauvaise idée. Une huile
                alimentaire n&apos;est pas conçue pour un mécanisme de serrure. Avec le
                temps, elle devient collante et attire la poussière et la saleté au lieu
                de protéger le mécanisme : on obtient l&apos;inverse de ce qu&apos;on
                cherchait.
              </p>
              <div className="mt-4">
                <ArticleWarning title="Pas d'huile de cuisine dans une serrure">
                  Elle n&apos;est pas faite pour ça : elle devient collante et encrasse le
                  mécanisme. Le produit que je recommande est le WD-40, une fois le
                  cylindre démonté et nettoyé.
                </ArticleWarning>
              </div>
            </div>

            <div>
              <ArticleSectionHeading number={3} id="quand-appeler">
                Quand m&apos;appeler plutôt que de forcer
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Une clé qui force est souvent le premier signe d&apos;un mécanisme qui
                fatigue, bien avant la panne complète. Si elle continue de forcer après
                l&apos;entretien, appelez-moi plutôt que d&apos;insister : je regarde le
                cylindre sur place et j&apos;annonce le prix avant d&apos;intervenir. Un{" "}
                <Link href="/changement-serrure-nice/" className="text-steel underline">
                  changement de cylindre
                </Link>{" "}
                standard démarre à 249 € TTC, déplacement et main d&apos;œuvre inclus,
                détail sur mes{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className="text-steel underline">
                  tarifs
                </Link>
                . Et si la porte est déjà bloquée ou la clé cassée, c&apos;est la page{" "}
                <Link href="/ouverture-de-porte-nice/" className="text-steel underline">
                  ouverture de porte à Nice
                </Link>
                . Pour une situation qui ne peut pas attendre, j&apos;interviens aussi en{" "}
                <Link href="/urgence-serrurier-nice/" className="text-steel underline">
                  urgence 24h/24
                </Link>{" "}
                dans tous les{" "}
                <Link href="/zones-intervention-nice/" className="text-steel underline">
                  quartiers de Nice
                </Link>
                .
              </p>
            </div>

            <ArticleKeyTakeaways
              points={[
                "Démonter le cylindre de temps en temps, le nettoyer, puis le graisser au WD-40.",
                "Jamais d'huile alimentaire : elle devient collante et attire la poussière et la saleté.",
                "Un entretien régulier vaut mieux que d'attendre que la clé commence à forcer.",
                "Si la clé force toujours après l'entretien, mieux vaut faire regarder le cylindre que d'insister.",
              ]}
            />

            <div>
              <ArticleSectionHeading number={4} id="faq">
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
          <CtaBlock title="Une serrure qui force ?" />
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
