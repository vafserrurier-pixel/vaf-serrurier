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

const HREF = "/blog/cles-perdues-que-faire-nice/";
const TITLE = "Clés perdues à Nice : que faire, et faut-il changer la serrure ?";
const DESCRIPTION =
  "Clés perdues ou volées à Nice : les bons réflexes, quand changer le cylindre, porte claquée ou fermée à clé. Prix fixes, sur place en 30 min.";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: TITLE,
  description: DESCRIPTION,
  article: { author: business.firstName, readingTime: "6 min" },
  image: blogPostByHref(HREF)?.image,
});

const toc = [
  { id: "reflexes", label: "Les trois premiers réflexes" },
  { id: "changer-serrure", label: "Faut-il changer la serrure ? Ça dépend de la situation" },
  { id: "bloque-dehors", label: "Bloqué dehors : porte claquée ou fermée à clé ?" },
  { id: "carte-propriete", label: "La carte de propriété : à vérifier avant de refaire des clés" },
  { id: "qui-paie", label: "Locataire, copropriété, assurance : qui paie ?" },
  { id: "exemple", label: "Exemple type" },
  { id: "prochaine-fois", label: "Pour la prochaine fois" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "J'ai perdu mes clés : dois-je obligatoirement changer la serrure ?",
    answer:
      "Non, pas si rien ne permet de relier vos clés à votre adresse. Si elles portaient votre nom ou votre adresse, ou si elles ont été volées avec vos papiers, changez le cylindre le jour même.",
  },
  {
    question: "Combien coûte un serrurier pour des clés perdues à Nice ?",
    answer:
      "Pour une porte claquée, 149 € en journée et 189 € après 19 h, le week-end et les jours fériés. Pour une porte fermée à clé, 149 € en journée ou 209 € la nuit pour l'ouverture, plus le cylindre neuf, dès 249 € posé. Déplacement compris, prix annoncé avant de partir.",
  },
  {
    question: "Faut-il changer toute la serrure ou seulement le cylindre ?",
    answer:
      "Dans la grande majorité des cas, seulement le cylindre : la serrure et la porte restent en place, seules les clés changent.",
  },
  {
    question: "Je suis locataire et j'ai perdu mes clés : qui paie ?",
    answer:
      "En général le locataire, puisque la perte vient de lui. Prévenez votre bailleur avant le changement de cylindre, et gardez la facture détaillée.",
  },
  {
    question: "Peut-on refaire une clé sans la carte de propriété ?",
    answer:
      "Pour un cylindre de sécurité, non : la carte est exigée pour commander des doubles. Si vous l'avez perdue aussi, le plus simple est de changer le cylindre, qui est en général livré avec une nouvelle carte.",
  },
  {
    question: "Pouvez-vous ouvrir ma porte sans l'abîmer ?",
    answer:
      "Oui si elle est simplement claquée. Si elle est fermée à clé, je perce le cylindre, jamais la porte, et je pose un cylindre neuf.",
  },
];

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed";
const listClass = "list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed";

export default function ClesPerduesPage() {
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
          { name: "Clés perdues à Nice", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Clés perdues à Nice", href: HREF },
            ]}
          />
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}>
            {post.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{TITLE}</h1>
          <ArticleByline readingMinutes={post.readingMinutes} updatedLabel="Publié le 24 octobre 2026" />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className={pClass}>
              Vous fouillez vos poches devant la porte, puis votre sac, puis la voiture : les clés ne sont nulle
              part. Avant d&apos;appeler qui que ce soit, posez-vous deux questions. Quelqu&apos;un a-t-il un double ?
              Et la personne qui trouvera vos clés peut-elle savoir où vous habitez ? Ces deux réponses décident de
              tout le reste : du prix, et de la nécessité de changer la serrure.
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
              <ArticleSectionHeading number={1} id="reflexes">
                Les trois premiers réflexes
              </ArticleSectionHeading>
              <ol className="list-decimal pl-5 flex flex-col gap-2.5 text-slate leading-relaxed">
                <li>
                  <strong className="text-navy">Cherchez un double avant d&apos;appeler un serrurier.</strong> Un
                  proche, un voisin, votre agence, votre gardien : si quelqu&apos;un a un jeu de clés, c&apos;est de
                  loin la solution la moins chère.
                </li>
                <li>
                  <strong className="text-navy">
                    Refaites le chemin et appelez les derniers endroits où vous êtes passé
                  </strong>{" "}
                  : commerce, restaurant, salle de sport. Des clés perdues sont parfois simplement rapportées.
                </li>
                <li>
                  <strong className="text-navy">Demandez-vous si vos clés peuvent mener jusqu&apos;à chez vous.</strong>{" "}
                  Une étiquette avec votre nom ou votre adresse, des papiers d&apos;identité dans le même sac, un
                  courrier dans la poche : c&apos;est ce point qui décide s&apos;il faut changer la serrure.
                </li>
              </ol>
            </div>

            <div>
              <ArticleSectionHeading number={2} id="changer-serrure">
                Faut-il changer la serrure ? Ça dépend de la situation
              </ArticleSectionHeading>
              <ArticleTable
                headers={["Situation", "Risque", "Ce que je conseille"]}
                rows={[
                  [
                    "Clés perdues seules, sans nom ni adresse",
                    "Faible : la personne qui les trouve ne sait pas quelle porte elles ouvrent",
                    "Changer le cylindre n'est pas obligatoire, mais vous pouvez le faire pour être tranquille.",
                  ],
                  ["Clés perdues avec un indice sur votre adresse", "Élevé", "Changer le cylindre le jour même."],
                  [
                    "Clés volées avec votre sac ou vos papiers",
                    "Élevé",
                    "Changer le cylindre le jour même, et porter plainte pour le vol.",
                  ],
                ]}
              />
              <p className={`${pClass} mt-4`}>
                Bonne nouvelle : dans la plupart des cas, il suffit de{" "}
                <Link href="/changement-serrure-nice/" className={linkClass}>
                  changer le cylindre
                </Link>
                , la partie de la serrure dans laquelle entre la clé. La serrure et la porte restent en place, seules
                les clés changent. Un cylindre standard coûte dès 249 € TTC posé, déplacement compris, avec les clés
                neuves remises sur place.
              </p>
              <p className={`${pClass} mt-3`}>
                Refaire des doubles ne règle rien si vos clés peuvent mener jusqu&apos;à chez vous : le cylindre
                s&apos;ouvre toujours avec les clés perdues.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={3} id="bloque-dehors">
                Bloqué dehors : porte claquée ou fermée à clé ?
              </ArticleSectionHeading>
              <p className={pClass}>
                Si vous êtes à la porte de chez vous sans clés et que vous avez besoin d&apos;un{" "}
                <Link href="/urgence-serrurier-nice/" className={linkClass}>
                  serrurier en urgence
                </Link>
                , tout dépend de la façon dont la porte a été fermée.
              </p>
              <ul className={`${listClass} mt-3`}>
                <li>
                  <strong className="text-navy">Porte simplement claquée</strong>, sans tour de clé : je l&apos;ouvre
                  sans dégât, avec une feuille souple glissée entre la porte et le cadre. 149 € en journée, 189 €
                  après 19 h, le week-end et les jours fériés.
                </li>
                <li>
                  <strong className="text-navy">Porte fermée à clé</strong> : il faut percer le cylindre, jamais la
                  porte, puis en poser un neuf. En journée, 149 € pour l&apos;ouverture et dès 249 € pour le
                  cylindre. Après 19 h, le week-end et les jours fériés, l&apos;ouverture passe à 209 €. Le prix du
                  cylindre, lui, ne change pas avec l&apos;heure.
                </li>
              </ul>
              <p className={`${pClass} mt-3`}>
                Dans les deux cas, j&apos;arrive en 30 minutes partout à Nice, et le prix est annoncé au téléphone
                avant que je parte. Les techniques sont détaillées sur ma page{" "}
                <Link href="/ouverture-de-porte-nice/" className={linkClass}>
                  ouverture de porte
                </Link>
                , et tous mes prix sur{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className={linkClass}>
                  ma page tarifs
                </Link>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={4} id="carte-propriete">
                La carte de propriété : à vérifier avant de refaire des clés
              </ArticleSectionHeading>
              <p className={pClass}>
                La plupart des cylindres de sécurité sont livrés avec une carte de propriété. Sans elle, impossible
                de commander des doubles. Si vous avez perdu vos clés mais que la carte est restée chez vous, et que
                rien ne relie vos clés à votre adresse, des doubles peuvent suffire. Si la carte a disparu avec les
                clés, le plus simple est de changer le cylindre : un cylindre de sécurité neuf est en général livré
                avec sa propre carte. Rangez-la ailleurs que dans votre trousseau.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={5} id="qui-paie">
                Locataire, copropriété, assurance : qui paie ?
              </ArticleSectionHeading>
              <ul className={listClass}>
                <li>
                  <strong className="text-navy">Vous êtes locataire</strong> : en général, la perte des clés est à
                  votre charge. Prévenez votre bailleur ou votre agence avant de changer le cylindre, et gardez la
                  facture détaillée que je vous remets. Tout est expliqué dans mon article{" "}
                  <Link href="/blog/qui-paie-changement-serrure-location-nice/" className={linkClass}>
                    qui paie le changement de serrure en location
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-navy">Vous avez perdu la clé du hall ou le badge de l&apos;immeuble</strong>{" "}
                  : ce sont des parties communes, c&apos;est donc au syndic qu&apos;il faut s&apos;adresser. Je
                  l&apos;explique dans mon article{" "}
                  <Link href="/blog/digicode-cles-hall-copropriete-nice/" className={linkClass}>
                    qui décide en copropriété
                  </Link>
                  .
                </li>
                <li>
                  <strong className="text-navy">Vos clés ont été volées</strong> : certains contrats d&apos;assurance
                  habitation prennent en charge le changement de serrure après un vol de clés. Vérifiez le vôtre : ma
                  facture détaillée sert de justificatif.
                </li>
              </ul>
            </div>

            <div>
              <ArticleSectionHeading number={6} id="exemple">
                Exemple type
              </ArticleSectionHeading>
              <p className={pClass}>
                Exemple type, une situation fréquente et non un client précis : un vendredi soir, une habitante du
                Carré d&apos;Or se fait voler son sac en terrasse, avec ses clés et sa carte d&apos;identité. Sa porte
                est fermée à clé. Elle m&apos;appelle à 21 h. J&apos;arrive en 30 minutes, j&apos;ouvre en perçant le
                cylindre et j&apos;en pose un neuf avec des clés neuves : 209 € pour l&apos;ouverture de nuit et
                249 € pour le cylindre standard, soit 458 € TTC, annoncés au téléphone avant de partir. Le soir même,
                elle dort chez elle, derrière une serrure que plus personne d&apos;autre ne peut ouvrir.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={7} id="prochaine-fois">
                Pour la prochaine fois
              </ArticleSectionHeading>
              <ul className={listClass}>
                <li>
                  <strong className="text-navy">Confiez un double</strong> à une personne de confiance. Jamais sous le
                  paillasson, dans un pot de fleurs ou dans la boîte aux lettres.
                </li>
                <li>
                  <strong className="text-navy">Ne mettez jamais votre adresse</strong> ni votre nom sur votre
                  porte-clés.
                </li>
                <li>
                  <strong className="text-navy">Rangez la carte de propriété</strong> à part, à la maison.
                </li>
                <li>
                  <strong className="text-navy">Enregistrez mon numéro</strong> dans votre téléphone : 04 22 13 85 44.
                </li>
              </ul>
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
