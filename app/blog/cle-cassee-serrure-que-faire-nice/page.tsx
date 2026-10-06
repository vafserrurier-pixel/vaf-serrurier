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
import ArticleTable from "@/components/ArticleTable";
import AuthorBox from "@/components/AuthorBox";
import ArticleNav from "@/components/ArticleNav";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBadges from "@/components/TrustBadges";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { blogPostByHref } from "@/lib/blogPosts";

const HREF = "/blog/cle-cassee-serrure-que-faire-nice/";
const TITLE = "Clé cassée dans la serrure à Nice : que faire et quand appeler un serrurier";
const DESCRIPTION =
  "Clé cassée dans la serrure : ne forcez pas. Ce que vous pouvez tenter, ce qu'il faut éviter et quand appeler un serrurier. Extraction à 149 € TTC.";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Clé cassée dans la serrure à Nice : que faire | VAF",
  description: DESCRIPTION,
  article: { author: business.firstName, readingTime: "3 min" },
  image: blogPostByHref(HREF)?.image,
});

const toc = [
  { id: "pourquoi", label: "Pourquoi une clé casse dans la serrure" },
  { id: "tenter", label: "Ce que vous pouvez tenter, selon la situation" },
  { id: "eviter", label: "Ce qu'il vaut mieux ne pas faire" },
  { id: "intervention", label: "Comment j'interviens" },
  { id: "serrurier", label: "Besoin d'un serrurier pour une clé cassée à Nice" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "Que faire si ma clé casse dans la serrure ?",
    answer:
      "Ne forcez pas. Si le morceau dépasse nettement, vous pouvez tenter de le saisir délicatement avec une pince fine. S'il est à l'intérieur du cylindre, n'insistez pas et appelez un serrurier.",
  },
  {
    question: "Peut-on retirer soi-même une clé cassée ?",
    answer:
      "Seulement si le morceau dépasse nettement du cylindre. À l'intérieur, les solutions de bricolage (colle, force, démontage) risquent d'abîmer la serrure : mieux vaut un professionnel.",
  },
  {
    question: "Faut-il changer le cylindre après une clé cassée ?",
    answer:
      "Pas systématiquement. Après l'extraction, je teste la clé : si elle rentre toujours, le cylindre reste en place. Je ne le remplace que si la clé ne rentre plus.",
  },
  {
    question: "Combien coûte l'extraction d'une clé cassée à Nice ?",
    answer: "149 € TTC. Le tarif de nuit est annoncé avant que j'intervienne.",
  },
];

const linkClass = "text-steel underline";

export default function CleCasseeSerrurePage() {
  const post = blogPostByHref(HREF)!;
  return (
    <article>
      <JsonLd
        data={blogPostingSchema({
          headline: TITLE,
          description: DESCRIPTION,
          url: `${business.domain}${HREF}`,
          datePublished: "2026-10-06",
          dateModified: "2026-10-06",
          image: post.image,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Clé cassée dans la serrure", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Clé cassée dans la serrure", href: HREF },
            ]}
          />
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}>
            {post.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{TITLE}</h1>
          <ArticleByline readingMinutes={post.readingMinutes} updatedLabel="Publié le 6 octobre 2026" />
          <div className="mt-6">
            <TrustBadges />
          </div>
          <div className="mt-8">
            <ArticleSummary
              points={[
                "Ne forcez pas.",
                "Si le morceau dépasse nettement, vous pouvez tenter de le saisir délicatement avec une pince fine.",
                "S'il est à l'intérieur du cylindre, n'insistez pas : c'est le moment d'appeler un serrurier.",
                "Après l'extraction, le cylindre n'est remplacé que si la clé ne rentre plus.",
                <>
                  Je réalise l&apos;extraction à <strong>149 € TTC</strong>.
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
              Votre clé vient de casser dans la serrure, et le morceau ne bouge plus. Voici ce que vous
              pouvez tenter, ce qu&apos;il vaut mieux éviter, et ce qui se passe quand j&apos;interviens.
            </p>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt="Illustration : clé cassée dans une serrure"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <ArticleSectionHeading number={1} id="pourquoi">
                Pourquoi une clé casse dans la serrure
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Une cause courante : un cylindre usé et devenu difficile à faire fonctionner. La clé
                résiste, on force pour tourner, et à force de forcer, la clé finit par casser.
              </p>
              <p className="text-slate leading-relaxed mt-3">
                C&apos;est pourquoi une clé qui commence à résister est un signal à prendre au sérieux :
                plutôt que de forcer, faites vérifier le cylindre. Un{" "}
                <Link href="/blog/entretien-serrure/" className={linkClass}>
                  entretien régulier de la serrure
                </Link>{" "}
                fait partie des gestes qui aident à éviter ce genre de panne.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={2} id="tenter">
                Ce que vous pouvez tenter, selon la situation
              </ArticleSectionHeading>
              <ArticleTable
                headers={["Situation", "Ce que vous pouvez faire", "Quand appeler"]}
                rows={[
                  [
                    "Le morceau dépasse nettement du cylindre",
                    "Tenter de le saisir délicatement avec une pince fine, sans forcer ni tourner",
                    "Si le morceau ne vient pas tout de suite",
                  ],
                  ["Le morceau est à l'intérieur du cylindre", "Ne rien introduire dans la serrure", "Tout de suite"],
                  ["La clé résiste mais n'est pas encore cassée", "Ne pas forcer", "Pour faire vérifier le cylindre"],
                ]}
              />
              <p className="text-slate leading-relaxed mt-4">
                Pour le morceau qui dépasse, c&apos;est aussi ce que conseillent HomeServe et Futura
                Sciences : une pince plate ou une pince à épiler. Pour un morceau à l&apos;intérieur, ces
                sources décrivent des solutions de bricolage (kit d&apos;extraction, aimant, colle), avec
                des mises en garde sur le risque d&apos;abîmer la serrure. Mon conseil reste de ne pas
                insister.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={3} id="eviter">
                Ce qu&apos;il vaut mieux ne pas faire
              </ArticleSectionHeading>
              <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed">
                <li>
                  <strong className="text-navy">Forcer.</strong> Forcer sur le morceau restant risque de
                  l&apos;enfoncer davantage ou d&apos;abîmer le mécanisme.
                </li>
                <li>
                  <strong className="text-navy">Chercher à ouvrir la porte par un autre moyen.</strong> Il
                  faut connaître les serrures : c&apos;est un métier, et une mauvaise manipulation peut
                  transformer une panne simple en dégât plus coûteux.
                </li>
                <li>
                  <strong className="text-navy">Mettre de la colle.</strong> Certains conseils en ligne le
                  proposent. HomeServe prévient que trop de colle peut rendre la serrure inutilisable,
                  grippée pour de bon, et Futura Sciences demande déjà d&apos;éviter que la colle ne coule
                  dans le mécanisme.
                </li>
              </ul>
            </div>

            <div>
              <ArticleSectionHeading number={4} id="intervention">
                Comment j&apos;interviens
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Quand vous m&apos;appelez pour une clé cassée, j&apos;extrais le morceau resté dans le
                cylindre avec un outil d&apos;extraction adapté, sans forcer ni abîmer le mécanisme.
              </p>
              <p className="text-slate leading-relaxed mt-3">
                Une fois la clé extraite, je teste : si la clé rentre toujours dans le cylindre, je le
                laisse en place. Je ne remplace le cylindre que si, après l&apos;extraction, la clé ne
                rentre plus. Dans ce cas, le remplacement vous est annoncé avant que je le réalise : vous
                pouvez voir mes{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className={linkClass}>
                  tarifs
                </Link>{" "}
                pour le changement de cylindre.
              </p>
              <p className="text-slate leading-relaxed mt-3">
                L&apos;extraction d&apos;une clé cassée est à <strong className="text-navy">149 € TTC</strong>,
                le tarif de nuit étant annoncé avant que j&apos;intervienne.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={5} id="serrurier">
                Besoin d&apos;un serrurier pour une clé cassée à Nice
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Si le morceau est à l&apos;intérieur, ou si vous préférez ne pas risquer d&apos;abîmer la
                serrure, je me déplace à Nice et dans les communes voisines. Voir mon service d&apos;
                <Link href="/urgence-serrurier-nice/" className={linkClass}>
                  urgence serrurier
                </Link>{" "}
                et mon{" "}
                <Link href="/ouverture-de-porte-nice/" className={linkClass}>
                  ouverture de porte
                </Link>
                , ou appelez-moi au{" "}
                <a href={business.phone.href} className={linkClass}>
                  {business.phone.display}
                </a>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={6} id="faq">
                Foire aux questions
              </ArticleSectionHeading>
              <FaqAccordion items={faqItems} />
            </div>

            <p className="text-xs text-slate leading-relaxed">
              <strong>Sources :</strong>{" "}
              <a
                href="https://www.homeserve.fr/conseils-actualites/serrurerie/cle-cassee-serrure"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-steel"
              >
                HomeServe, clé cassée dans la serrure
              </a>{" "}
              ;{" "}
              <a
                href="https://www.futura-sciences.com/maison/questions-reponses/bricolage-cle-cassee-serrure-faire-4238/"
                target="_blank"
                rel="noopener noreferrer"
                className="underline hover:text-steel"
              >
                Futura Sciences, clé cassée dans la serrure
              </a>
              .
            </p>

            <AuthorBox />
          </ArticleLayout>
        </div>
      </section>

      <section className="bg-white border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <CtaBlock title="Une clé cassée dans la serrure ?" />
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
