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

const HREF = "/blog/verrou-bloque-changer-prix-nice/";
const TITLE = "Verrou bloqué ou à changer : que faire et quel prix à Nice ?";
const DESCRIPTION =
  "Verrou qui coince, clé cassée, verrou forcé : les bons gestes, réparer ou changer, double entrée ou bouton, et le prix d'un verrou posé à Nice.";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: TITLE,
  description: DESCRIPTION,
  article: { author: business.firstName, readingTime: "5 min" },
  image: blogPostByHref(HREF)?.image,
});

const toc = [
  { id: "pourquoi", label: "Pourquoi un verrou se bloque-t-il ?" },
  { id: "avant-appel", label: "Que faire avant d'appeler un serrurier ?" },
  { id: "reparer-changer", label: "Réparer ou changer le verrou ?" },
  { id: "double-entree-bouton", label: "Verrou à double entrée ou à bouton : lequel choisir ?" },
  { id: "prix", label: "Combien coûte un verrou à Nice ?" },
  { id: "verrous-poses", label: "Les verrous que je pose" },
  { id: "exemple", label: "Exemple type" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Combien coûte le remplacement d'un verrou à Nice ?",
    answer:
      "Un forfait de 229 € TTC, déplacement, main-d'œuvre et verrou inclus, que le verrou soit à double entrée ou à bouton. La pose d'un verrou supplémentaire est au même prix.",
  },
  {
    question: "Ma clé ne tourne plus dans le verrou : que faire ?",
    answer:
      "Ne forcez pas. Essayez de soulever ou de pousser légèrement la porte en tournant la clé : si le pêne frotte contre la gâche, il se libère souvent. Sinon, appelez un serrurier avant que la clé ne casse.",
  },
  {
    question: "Faut-il changer le verrou quand on emménage ?",
    answer:
      "C'est conseillé si vous ne savez pas combien de doubles circulent. Remplacer le verrou vous garantit d'être le seul à avoir les clés.",
  },
  {
    question: "Verrou à double entrée ou à bouton : lequel choisir ?",
    answer:
      "Le verrou à double entrée s'ouvre avec une clé des deux côtés : c'est plus sûr si une vitre est proche de la porte. Le verrou à bouton est plus pratique au quotidien. Les deux sont au même prix.",
  },
  {
    question: "Quelle marque de verrou installez-vous ?",
    answer: "Principalement Héraclès, avec un cylindre 5 goupilles. J'installe aussi des verrous Vachette sur demande.",
  },
  {
    question: "Mon verrou a été forcé : faut-il le changer ?",
    answer:
      "Oui. Un verrou forcé ne protège plus correctement votre porte. Après une effraction, il vaut aussi mieux vérifier l'état de la serrure principale.",
  },
];

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed";
const olClass = "list-decimal pl-5 flex flex-col gap-2.5 text-slate leading-relaxed";
const ulClass = "list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed";

export default function VerrouBloqueChangerPage() {
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
          { name: "Verrou bloqué ou à changer", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Verrou bloqué ou à changer", href: HREF },
            ]}
          />
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}>
            {post.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{TITLE}</h1>
          <ArticleByline readingMinutes={post.readingMinutes} updatedLabel="Publié le 3 novembre 2026" />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className={pClass}>
              Un verrou qui coince ne se répare pas en forçant. Si la clé ne tourne plus, arrêtez-vous avant de la
              tordre ou de la casser : dans la plupart des cas, le verrou se débloque ou se remplace en une seule
              intervention. À Nice, je remplace ou je pose un verrou pour un forfait de 229 € TTC, déplacement,
              main-d&apos;œuvre et verrou inclus, que ce soit un verrou à double entrée ou à bouton.
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
              <ArticleSectionHeading number={1} id="pourquoi">
                Pourquoi un verrou se bloque-t-il ?
              </ArticleSectionHeading>
              <p className={pClass}>
                Un verrou est un mécanisme simple, mais il travaille tous les jours. Les causes de blocage que je
                rencontre le plus souvent :
              </p>
              <ol className={`${olClass} mt-3`}>
                <li>
                  <strong className="text-navy">La clé ne tourne plus</strong>, ou seulement en forçant : le
                  cylindre est encrassé, usé, ou la clé elle-même s&apos;est déformée avec le temps.
                </li>
                <li>
                  <strong className="text-navy">Le pêne frotte contre la gâche</strong> : la porte a bougé, et le
                  verrou accroche au moment de fermer ou d&apos;ouvrir.
                </li>
                <li>
                  <strong className="text-navy">
                    Une{" "}
                    <Link href="/blog/cle-cassee-serrure-que-faire-nice/" className={linkClass}>
                      clé cassée
                    </Link>
                  </strong>{" "}
                  est restée dans le cylindre.
                </li>
                <li>
                  <strong className="text-navy">Le verrou a été forcé</strong> lors d&apos;une tentative
                  d&apos;effraction : il tourne dans le vide, ou il ne verrouille plus.
                </li>
                <li>
                  <strong className="text-navy">L&apos;air marin</strong>, à Nice, grippe peu à peu les verrous
                  exposés, surtout sur les portes donnant sur l&apos;extérieur.
                </li>
              </ol>
            </div>

            <div>
              <ArticleSectionHeading number={2} id="avant-appel">
                Que faire avant d&apos;appeler un serrurier ?
              </ArticleSectionHeading>
              <ul className={ulClass}>
                <li>
                  <strong className="text-navy">Ne forcez pas sur la clé</strong> : une clé tordue ou cassée dans le
                  cylindre complique l&apos;intervention.
                </li>
                <li>
                  <strong className="text-navy">Essayez de soulever ou de pousser légèrement la porte</strong>{" "}
                  pendant que vous tournez la clé : si le pêne frotte contre la gâche, ce simple geste suffit
                  souvent à libérer le verrou.
                </li>
                <li>
                  <strong className="text-navy">N&apos;utilisez pas d&apos;huile de cuisine ni de graisse épaisse</strong>{" "}
                  dans le cylindre : elles retiennent la poussière et aggravent le problème.
                </li>
                <li>
                  <strong className="text-navy">Si la clé s&apos;est cassée</strong>, ne tentez pas de l&apos;extraire
                  avec une épingle ou un cutter : vous risquez de l&apos;enfoncer davantage.
                </li>
              </ul>
              <p className={`${pClass} mt-3`}>
                Si c&apos;est la serrure principale qui résiste plutôt que le verrou, j&apos;explique le diagnostic
                dans mon article sur la{" "}
                <Link href="/blog/serrure-bloquee-diagnostic-nice/" className={linkClass}>
                  serrure bloquée
                </Link>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={3} id="reparer-changer">
                Réparer ou changer le verrou ?
              </ArticleSectionHeading>
              <p className={pClass}>
                Quand le problème vient de la porte, comme un pêne qui frotte contre la gâche, un réglage suffit
                souvent, sans rien remplacer. En revanche, je conseille de changer le verrou quand :
              </p>
              <ul className={`${ulClass} mt-3`}>
                <li>le cylindre est usé ou abîmé, et la clé tourne de plus en plus mal ;</li>
                <li>le verrou a été forcé ou percé ;</li>
                <li>vous avez perdu vos clés, ou vous ne savez plus combien de personnes en ont un double ;</li>
                <li>vous emménagez dans un logement et voulez être le seul à avoir les clés.</li>
              </ul>
              <p className={`${pClass} mt-3`}>
                Je vous dis sur place ce qui peut être réparé, et je vous annonce le prix avant de commencer.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={4} id="double-entree-bouton">
                Verrou à double entrée ou à bouton : lequel choisir ?
              </ArticleSectionHeading>
              <ArticleTable
                headers={["Type de verrou", "Comment il s'ouvre", "Ce qu'il faut savoir"]}
                rows={[
                  [
                    "À double entrée",
                    "Avec une clé, de l'extérieur comme de l'intérieur",
                    "Personne ne peut l'ouvrir de l'intérieur sans clé, par exemple en passant le bras par une vitre cassée. Gardez une clé à portée de main à l'intérieur pour pouvoir sortir vite en cas d'urgence.",
                  ],
                  [
                    "À bouton",
                    "Avec une clé de l'extérieur, avec un bouton de l'intérieur",
                    "Plus pratique au quotidien : on sort sans chercher la clé. À éviter si une vitre ou un vasistas permet d'atteindre le bouton depuis l'extérieur.",
                  ],
                ]}
              />
              <p className={`${pClass} mt-4`}>
                Le prix est le même pour les deux : le choix dépend de votre porte et de vos habitudes.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={5} id="prix">
                Combien coûte un verrou à Nice ?
              </ArticleSectionHeading>
              <ul className={ulClass}>
                <li>
                  <strong className="text-navy">Remplacement d&apos;un verrou</strong> : forfait de 229 € TTC,
                  déplacement, main-d&apos;œuvre et verrou inclus.
                </li>
                <li>
                  <strong className="text-navy">Pose d&apos;un verrou supplémentaire</strong> sur une porte qui
                  n&apos;en a pas : même forfait de 229 € TTC, tout compris.
                </li>
                <li>Le prix est le même pour un verrou à double entrée ou à bouton.</li>
              </ul>
              <p className={`${pClass} mt-3`}>
                Si vous êtes bloqué dehors et que le verrou est fermé à clé, il faut d&apos;abord ouvrir la porte :
                l&apos;
                <Link href="/ouverture-de-porte-nice/" className={linkClass}>
                  ouverture de porte
                </Link>{" "}
                est facturée 149 € en journée et 209 € après 19 h, le week-end et les jours fériés, puis le verrou
                est remplacé. Le prix total vous est annoncé au téléphone avant que je me déplace. Le détail de{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className={linkClass}>
                  mes tarifs
                </Link>{" "}
                est en ligne.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={6} id="verrous-poses">
                Les verrous que je pose
              </ArticleSectionHeading>
              <p className={pClass}>
                Je pose principalement des verrous Héraclès, équipés d&apos;un cylindre 5 goupilles : un modèle
                simple, fiable et adapté à la plupart des portes d&apos;appartement. Sur demande, j&apos;installe
                aussi des verrous Vachette. Si vous cherchez un niveau de sécurité plus élevé, par exemple après un
                cambriolage, mieux vaut penser à un{" "}
                <Link href="/changement-serrure-nice/" className={linkClass}>
                  changement de serrure
                </Link>{" "}
                complet plutôt qu&apos;à un verrou seul : je vous conseille la solution adaptée à votre porte.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={7} id="exemple">
                Exemple type
              </ArticleSectionHeading>
              <p className={pClass}>
                Exemple type, une situation fréquente et non un client précis : un habitant de Riquier emménage dans
                un appartement dont l&apos;ancien locataire avait plusieurs doubles. Le verrou fonctionne, mais il ne
                sait pas qui en possède encore une clé. Je remplace le verrou par un modèle Héraclès à double entrée,
                je vérifie qu&apos;il ferme sans forcer, et je lui remets les clés neuves. Le forfait de 229 € TTC,
                tout compris, lui a été annoncé avant l&apos;intervention.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={8} id="faq">
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
