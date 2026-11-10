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

const HREF = "/blog/serrurier-nuit-dimanche-prix-nice/";
const TITLE = "Serrurier la nuit ou le dimanche à Nice : prix et délai";
const DESCRIPTION =
  "Bloqué dehors la nuit, le dimanche ou un jour férié à Nice : le prix d'un serrurier, le délai d'arrivée, et comment éviter les mauvaises surprises.";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: TITLE,
  description: DESCRIPTION,
  article: { author: business.firstName, readingTime: "3 min" },
  image: blogPostByHref(HREF)?.image,
});

const toc = [
  { id: "disponibilite", label: "Disponible la nuit, le dimanche et les jours fériés" },
  { id: "prix", label: "Combien coûte un serrurier la nuit ou le dimanche ?" },
  { id: "prix-annonce", label: "Le prix est annoncé avant que je parte" },
  { id: "questions", label: "Les questions à poser avant que quelqu'un se déplace" },
  { id: "attendant", label: "En attendant le serrurier" },
  { id: "exemple", label: "Exemple type" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quel est le prix d'un serrurier le dimanche ou la nuit à Nice ?",
    answer:
      "Après 19 h, le week-end et les jours fériés, l'ouverture d'une porte claquée coûte 189 € et celle d'une porte fermée à clé 209 €. Si le cylindre doit être changé, il est en plus, dès 249 €, au même prix qu'en journée.",
  },
  {
    question: "Intervenez-vous le dimanche et les jours fériés ?",
    answer: "Oui, 24h/24 et 7j/7, y compris le dimanche et les jours fériés.",
  },
  {
    question: "En combien de temps arrivez-vous la nuit ?",
    answer: "En 30 minutes partout à Nice, de jour comme de nuit.",
  },
  {
    question: "Pourquoi c'est plus cher la nuit ?",
    answer:
      "Parce que l'intervention se fait en dehors des heures normales. Seule l'ouverture est majorée : le prix du cylindre ne change pas avec l'heure.",
  },
  {
    question: "Ma porte est simplement claquée : faut-il percer ?",
    answer:
      "Non. Une porte claquée sans tour de clé s'ouvre sans dégât, avec une feuille souple glissée entre la porte et le cadre.",
  },
  {
    question: "Comment savoir le prix avant votre arrivée ?",
    answer:
      "Je vous l'annonce au téléphone, à partir de votre situation et, si possible, d'une photo de la serrure. C'est ce prix que vous payez.",
  },
];

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed";
const olClass = "list-decimal pl-5 flex flex-col gap-2.5 text-slate leading-relaxed";
const ulClass = "list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed";

export default function SerrurierNuitDimanchePage() {
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
          { name: "Serrurier la nuit ou le dimanche", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Serrurier la nuit ou le dimanche", href: HREF },
            ]}
          />
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}>
            {post.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{TITLE}</h1>
          <ArticleByline readingMinutes={post.readingMinutes} updatedLabel="Publié le 10 novembre 2026" />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className={pClass}>
              La porte se referme derrière vous à 23 h, un dimanche soir ou un jour férié, et les clés sont restées à
              l&apos;intérieur. C&apos;est souvent à ce moment-là qu&apos;on cherche un{" "}
              <Link href="/urgence-serrurier-nice/" className={linkClass}>
                serrurier en urgence
              </Link>
              , sans avoir le temps de comparer. Voici ce que coûte vraiment une intervention de nuit ou le week-end à
              Nice, en combien de temps j&apos;arrive, et les questions à poser avant que quelqu&apos;un se déplace.
            </p>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt={post.imageAlt}
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
                style={post.imagePosition ? { objectPosition: post.imagePosition } : undefined}
                priority
              />
            </div>

            <div>
              <ArticleSectionHeading number={1} id="disponibilite">
                Disponible la nuit, le dimanche et les jours fériés
              </ArticleSectionHeading>
              <p className={pClass}>
                Je travaille 24h/24 et 7j/7, y compris la nuit, le dimanche et les jours fériés. Quand vous appelez,
                c&apos;est moi qui réponds et c&apos;est moi qui viens, avec mon utilitaire floqué Votre Artisan
                Français. J&apos;arrive en 30 minutes partout à Nice, de jour comme de nuit.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={2} id="prix">
                Combien coûte un serrurier la nuit ou le dimanche ?
              </ArticleSectionHeading>
              <p className={`${pClass} mb-4`}>
                Le tarif change à partir de 19 h, ainsi que le week-end et les jours fériés. Tout dépend surtout de la
                façon dont la porte a été fermée.
              </p>
              <ArticleTable
                headers={["Situation", "En journée", "Après 19 h, le week-end et les jours fériés"]}
                rows={[
                  ["Porte simplement claquée, sans tour de clé", "149 €", "189 €"],
                  ["Porte fermée à clé : ouverture", "149 €", "209 €"],
                  ["Porte fermée à clé : cylindre neuf", "dès 249 €", "dès 249 €"],
                ]}
              />
              <p className={`${pClass} mt-4`}>
                Une{" "}
                <Link href="/blog/porte-qui-claque-serrurier-nice/" className={linkClass}>
                  porte simplement claquée
                </Link>{" "}
                s&apos;ouvre sans dégât, avec une feuille souple glissée entre la porte et le cadre. Une porte fermée à
                clé demande de percer le cylindre, puis d&apos;en poser un neuf. La nuit, seule l&apos;ouverture coûte
                plus cher : le prix du cylindre reste identique, à toute heure.
              </p>
              <p className={`${pClass} mt-3`}>
                Tous les prix sont TTC, déplacement compris. Le détail est sur la page de{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className={linkClass}>
                  mes tarifs
                </Link>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={3} id="prix-annonce">
                Le prix est annoncé avant que je parte
              </ArticleSectionHeading>
              <p className={pClass}>
                Au téléphone, je vous pose deux questions : la porte est-elle claquée ou fermée à clé, et quel type de
                serrure avez-vous ? Si vous pouvez, envoyez-moi une photo de la serrure par WhatsApp ou SMS. Je vous
                annonce alors le prix complet avant de me déplacer, et c&apos;est ce prix-là que vous payez.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={4} id="questions">
                Les questions à poser avant que quelqu&apos;un se déplace
              </ArticleSectionHeading>
              <p className={pClass}>
                La nuit, on est pressé, et c&apos;est justement là que certains en profitent. Avant d&apos;accepter une
                intervention, demandez :
              </p>
              <ol className={`${olClass} mt-3`}>
                <li>
                  <strong className="text-navy">Le prix total TTC</strong>, déplacement compris, pour votre situation
                  précise.
                </li>
                <li>
                  <strong className="text-navy">Le nom de l&apos;entreprise et son adresse</strong> : un vrai artisan
                  local vous les donne sans hésiter.
                </li>
                <li>
                  <strong className="text-navy">La méthode d&apos;ouverture</strong> : une porte simplement claquée ne
                  se perce pas.
                </li>
                <li>
                  <strong className="text-navy">Une facture détaillée</strong> à la fin de l&apos;intervention.
                </li>
              </ol>
              <p className={`${pClass} mt-3`}>
                Si la réponse est floue ou si le prix change une fois sur place, ne signez rien. J&apos;explique comment{" "}
                <Link href="/blog/arnaque-serrurier-nice-comment-eviter/" className={linkClass}>
                  éviter les arnaques
                </Link>{" "}
                dans un article dédié.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={5} id="attendant">
                En attendant le serrurier
              </ArticleSectionHeading>
              <ul className={ulClass}>
                <li>
                  <strong className="text-navy">Mettez-vous à l&apos;abri</strong>, chez un voisin ou dans le hall,
                  surtout s&apos;il fait froid ou s&apos;il est tard.
                </li>
                <li>
                  <strong className="text-navy">Ne forcez pas la porte</strong> ni la serrure : vous risquez
                  d&apos;abîmer le cylindre et de rendre l&apos;ouverture plus chère.
                </li>
                <li>
                  <strong className="text-navy">En cas de danger</strong>, par exemple un enfant seul à
                  l&apos;intérieur ou une plaque de cuisson allumée, appelez d&apos;abord les pompiers au 18 ou le 112.
                </li>
              </ul>
              <p className={`${pClass} mt-3`}>
                Pour le détail des techniques, voir ma page{" "}
                <Link href="/ouverture-de-porte-nice/" className={linkClass}>
                  ouverture de porte
                </Link>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={6} id="exemple">
                Exemple type
              </ArticleSectionHeading>
              <p className={pClass}>
                Exemple type, une situation fréquente et non un client précis : un dimanche à 22 h, un habitant du
                quartier du Port descend ses poubelles et la porte se referme derrière lui, sans tour de clé. Il
                m&apos;appelle, je lui annonce 189 € au téléphone. J&apos;arrive en 30 minutes, j&apos;ouvre sans dégât
                avec une feuille souple, et il rentre chez lui quelques minutes plus tard.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={7} id="faq">
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
