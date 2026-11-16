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

const HREF = "/blog/cylindre-standard-ou-haute-securite-nice/";
const TITLE = "Cylindre standard ou haute sécurité : que choisir à Nice ?";
const DESCRIPTION =
  "Cylindre standard dès 249 € ou haute sécurité dès 349 € posé à Nice : les vraies différences, les modèles Héraclès et Vachette, et lequel choisir.";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: TITLE,
  description: DESCRIPTION,
  article: { author: business.firstName, readingTime: "3 min" },
  image: blogPostByHref(HREF)?.image,
});

const toc = [
  { id: "types", label: "Les deux types de cylindres que je pose" },
  { id: "standard", label: "Le cylindre standard : pour qui ?" },
  { id: "haute-securite", label: "Le cylindre haute sécurité : pour qui ?" },
  { id: "carte", label: "La carte : à garder précieusement" },
  { id: "autre-marque", label: "Et si ma serrure est d'une autre marque ?" },
  { id: "exemple", label: "Exemple type" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Quelle est la différence entre un cylindre standard et un cylindre haute sécurité ?",
    answer:
      "Le cylindre haute sécurité résiste plus longtemps aux techniques d'effraction : perçage, crochetage, bumping et, selon le modèle, casse et arrachement. Le cylindre standard offre une protection de base, avec 2 goupilles anti-perçage sur le modèle que je pose.",
  },
  {
    question: "Combien coûte un changement de cylindre à Nice ?",
    answer:
      "Dès 249 € TTC pour un cylindre standard et à partir de 349 € TTC pour un cylindre haute sécurité, cylindre, pose et déplacement compris. Les cylindres certifiés A2P sont sur devis.",
  },
  {
    question: "Quel cylindre choisir pour un appartement ?",
    answer:
      "Si l'immeuble est bien sécurisé, un cylindre standard suffit souvent. Si l'immeuble n'est pas bien sécurisé, ou si votre porte a une bonne serrure mais une poignée simple, je recommande la haute sécurité.",
  },
  {
    question: "Quelles marques de cylindres posez-vous ?",
    answer:
      "En standard, le Héraclès Y7+. En haute sécurité, les Héraclès Y8, HQ et Platinium, et les Vachette Radial-R, Radialis et Radial NT.",
  },
  {
    question: "Peut-on refaire une clé sans la carte ?",
    answer:
      "Non : la carte fournie avec le cylindre est demandée pour refaire une clé. Je ne refais que les clés protégées, sur devis.",
  },
  {
    question: "Faut-il attendre une commande pour un cylindre haute sécurité ?",
    answer: "Non. J'ai les deux types de cylindres en stock, la pose est immédiate.",
  },
];

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed";
const ulClass = "list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed";

export default function CylindreStandardOuHauteSecuritePage() {
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
          { name: "Cylindre standard ou haute sécurité", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Cylindre standard ou haute sécurité", href: HREF },
            ]}
          />
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}>
            {post.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{TITLE}</h1>
          <ArticleByline readingMinutes={post.readingMinutes} updatedLabel="Publié le 16 novembre 2026" />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className={pClass}>
              Le cylindre est la partie de la serrure dans laquelle entre la clé. C&apos;est aussi la première pièce
              qu&apos;un cambrioleur attaque. Quand il faut le changer, la question revient toujours : un cylindre
              standard suffit-il, ou faut-il passer à la haute sécurité ? Voici les différences réelles entre les
              deux, les modèles que je pose à Nice, et leur prix.
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
              <ArticleSectionHeading number={1} id="types">
                Les deux types de cylindres que je pose
              </ArticleSectionHeading>
              <ArticleTable
                headers={["", "Cylindre standard", "Cylindre haute sécurité"]}
                rows={[
                  [
                    "Modèles que je pose",
                    "Héraclès Y7+",
                    "Héraclès Y8, HQ ou Platinium, Vachette Radial-R, Radialis ou Radial NT",
                  ],
                  ["Prix posé à Nice", "dès 249 € TTC", "à partir de 349 € TTC (hors versions A2P, sur devis)"],
                  ["Clés fournies", "5 clés réversibles", "clés réversibles, nombre selon le modèle"],
                  ["Carte fournie", "carte de reproduction", "carte de propriété"],
                  [
                    "Protections",
                    "2 goupilles anti-perçage",
                    "anti-perçage, anti-crochetage et anti-bumping, et selon le modèle anti-casse et anti-arrachement",
                  ],
                  ["Disponibilité", "en stock, pose immédiate", "en stock, pose immédiate"],
                ]}
              />
              <p className={`${pClass} mt-4`}>
                Les prix comprennent le cylindre, la pose et le déplacement. Les versions certifiées A2P sont sur
                devis. Retrouvez mes autres prix sur la page de{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className={linkClass}>
                  mes tarifs
                </Link>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={2} id="standard">
                Le cylindre standard : pour qui ?
              </ArticleSectionHeading>
              <p className={pClass}>
                Le cylindre standard que je pose est un Héraclès Y7+. Il a 6 goupilles, dont 2 goupilles
                anti-perçage, et il est livré avec 5 clés réversibles et une carte de reproduction. C&apos;est un bon
                choix quand l&apos;immeuble est déjà bien sécurisé, avec une porte d&apos;entrée fermée et un digicode
                ou un interphone, et pour la plupart des changements courants : clés perdues, emménagement, cylindre
                usé.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/blog/cylindre-heracles-y7-carte-reproduction-nice.webp"
                alt="Cylindre Héraclès Y7+ neuf avec ses clés et sa carte de reproduction, à côté de l'ancien cylindre"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover object-[50%_46%]"
              />
            </div>

            <div>
              <ArticleSectionHeading number={3} id="haute-securite">
                Le cylindre haute sécurité : pour qui ?
              </ArticleSectionHeading>
              <p className={pClass}>
                Un cylindre haute sécurité résiste plus longtemps aux techniques d&apos;effraction : perçage,
                crochetage, bumping et, selon le modèle, casse et arrachement. Le Vachette Radial-R, par exemple, est
                anti-perçage, anti-crochetage et anti-bumping, avec une clé réversible protégée par une carte de
                propriété. Certains modèles existent en version certifiée A2P : j&apos;explique ce que garantit la{" "}
                <Link href="/blog/certification-a2p-serrure-nice/" className={linkClass}>
                  certification A2P
                </Link>{" "}
                dans un article dédié. Attention : « haute sécurité » est une appellation commerciale. Seule la
                certification A2P garantit un test indépendant.
              </p>
              <p className={`${pClass} mt-3`}>Je le recommande dans deux cas :</p>
              <ul className={`${ulClass} mt-3`}>
                <li>
                  <strong className="text-navy">L&apos;immeuble n&apos;est pas bien sécurisé</strong> : porte
                  d&apos;entrée de l&apos;immeuble souvent ouverte, pas de digicode, passage facile jusqu&apos;à votre
                  palier.
                </li>
                <li>
                  <strong className="text-navy">Votre porte a une bonne serrure, mais une poignée simple</strong> : le
                  cylindre est alors le point faible de la porte. Un cylindre haute sécurité, éventuellement complété
                  par une{" "}
                  <Link href="/poignee-blindee-nice/" className={linkClass}>
                    poignée blindée
                  </Link>
                  , renforce l&apos;ensemble.
                </li>
              </ul>
            </div>

            <div>
              <ArticleSectionHeading number={4} id="carte">
                La carte : à garder précieusement
              </ArticleSectionHeading>
              <p className={pClass}>
                Les deux types de cylindres sont livrés avec une carte. Elle est demandée pour refaire une clé : sans
                elle, pas de double. Rangez-la chez vous, à part de votre trousseau, et ne la photographiez pas pour
                l&apos;envoyer à n&apos;importe qui : son numéro est confidentiel. Je ne refais que les clés
                protégées, sur devis, car le prix varie selon la marque de la serrure.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={5} id="autre-marque">
                Et si ma serrure est d&apos;une autre marque ?
              </ArticleSectionHeading>
              <p className={pClass}>
                Je pose des cylindres adaptables sur les serrures d&apos;autres marques : le cylindre change, la
                serrure reste en place. Si la serrure elle-même est abîmée ou trop ancienne, un{" "}
                <Link href="/changement-serrure-nice/" className={linkClass}>
                  changement de serrure
                </Link>{" "}
                complet peut être plus adapté. Je vous le dis à partir d&apos;une photo, avant de me déplacer.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={6} id="exemple">
                Exemple type
              </ArticleSectionHeading>
              <p className={pClass}>
                Exemple type, une situation fréquente et non un client précis : une habitante du quartier Libération
                emménage dans un appartement dont la porte a une bonne serrure 3 points, mais une poignée simple, dans
                un immeuble dont la porte d&apos;entrée reste souvent ouverte. Je lui conseille un cylindre haute
                sécurité plutôt qu&apos;un standard. Le prix lui est annoncé avant mon déplacement, et la pose est
                faite le jour même.
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
