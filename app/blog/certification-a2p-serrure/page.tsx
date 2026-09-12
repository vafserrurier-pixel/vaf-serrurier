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

const HREF = "/blog/certification-a2p-serrure/";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Certification A2P : ce que ça change pour votre serrure | VAF",
  description: "A2P, une ou trois étoiles : ce que signifie réellement cette certification sur une serrure, un cylindre ou un blindage, et comment vérifier qu'elle est authentique.",
  article: { author: business.firstName, readingTime: "8 min" },
});

const toc = [
  { id: "definition", label: "Qu'est-ce que la certification A2P" },
  { id: "etoiles", label: "Une, deux ou trois étoiles" },
  { id: "comparatif", label: "Comparatif des niveaux A2P" },
  { id: "pourquoi", label: "Pourquoi ça compte, au-delà de la sécurité" },
  { id: "verifier", label: "Comment vérifier qu'un produit est vraiment certifié" },
  { id: "confusion", label: "À ne pas confondre : A2P étoiles et A2P BP" },
  { id: "approche", label: "Mon approche sur le choix du niveau" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "Un produit \"haute sécurité\" affiché sur l'emballage est-il forcément A2P ?",
    answer:
      "Non. \"Haute sécurité\" ou \"anti-effraction\" sont des formules commerciales libres, sans contrôle indépendant derrière. Seul le marquage A2P avec son nombre d'étoiles correspond à un test réalisé par le CNPP.",
  },
  {
    question: "Où trouver le marquage A2P sur ma serrure ou mon cylindre ?",
    answer:
      "Il doit apparaître directement sur le produit, souvent sur la têtière du cylindre ou la plaque de la serrure, pas seulement sur l'emballage ou une fiche commerciale. Je peux vous le montrer avant la pose si vous avez un doute.",
  },
  {
    question: "Quelle différence entre A2P étoiles et A2P BP ?",
    answer:
      "Les étoiles (1 à 3) notent une serrure ou un cylindre seul, avec une résistance testée de 5, 10 ou 15 minutes selon le niveau. Le sigle BP (BP1, BP2, BP3) note un bloc-porte blindé complet : cadre, gonds, panneau et serrure évalués ensemble.",
  },
  {
    question: "Mon assurance exige-t-elle un niveau A2P précis ?",
    answer:
      "Ça dépend entièrement de votre contrat : certains assureurs conditionnent une garantie vol à un niveau A2P minimum pour les logements avec des biens de valeur. Vérifiez les conditions exactes auprès de votre assureur plutôt que de vous fier à une règle générale.",
  },
  {
    question: "Un cylindre A2P 3 étoiles suffit-il sans porte blindée derrière ?",
    answer:
      "Un excellent cylindre posé sur une porte standard non blindée n'offre pas le même niveau de résistance globale qu'un bloc-porte certifié BP. Le niveau de la porte et celui de la serrure se complètent, ils ne se remplacent pas.",
  },
  {
    question: "La certification A2P a-t-elle une durée de validité ?",
    answer:
      "La certification s'applique à une référence produit précise, testée par le CNPP. En cas de doute sur un produit ancien ou une référence introuvable, le plus sûr est de vérifier directement auprès du fabricant plutôt que de supposer qu'elle est toujours valable.",
  },
];

export default function CertificationA2pPage() {
  const post = blogPostByHref(HREF)!;
  return (
    <article>
      <JsonLd
        data={blogPostingSchema({
          headline: "Certification A2P : ce que ce sigle change vraiment pour votre serrure",
          description:
            "A2P, une ou trois étoiles : ce que signifie réellement cette certification sur une serrure, un cylindre ou un blindage, et comment vérifier qu'elle est authentique.",
          url: `${business.domain}${HREF}`,
          datePublished: "2026-08-09",
          dateModified: "2026-09-12",
          image: post.image,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Certification A2P", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Certification A2P", href: HREF },
            ]}
          />
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}>

            {post.category}

          </span>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            Certification A2P : ce que ce sigle change vraiment pour votre serrure
          </h1>
          <ArticleByline readingMinutes={8} updatedLabel="Mis à jour le 12 septembre 2026" />
          <div className="mt-6">
            <TrustBadges />
          </div>
          <div className="mt-8">
            <ArticleSummary
              points={[
                "L'A2P est une certification indépendante délivrée par le CNPP, pas une formule commerciale libre.",
                <>
                  Une étoile résiste <strong>5 minutes</strong>, deux <strong>10 minutes</strong>, trois <strong>15 minutes</strong>, selon les tests du CNPP.
                </>,
                "A2P étoiles note une serrure ou un cylindre seul ; A2P BP note un bloc-porte complet.",
                "Le marquage doit apparaître sur le produit lui-même, pas seulement sur l'emballage.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className="text-slate leading-relaxed">
              Vous avez sûrement déjà vu ce sigle sur l&apos;emballage d&apos;un cylindre ou
              dans la fiche technique d&apos;une serrure : A2P, parfois suivi d&apos;une,
              deux ou trois étoiles. C&apos;est l&apos;un des rares repères réellement
              vérifiables dans un secteur où beaucoup d&apos;annonces parlent de « haute
              sécurité » sans rien de concret derrière.
            </p>

            <div>
              <ArticleSectionHeading number={1} id="definition">
                Qu&apos;est-ce que la certification A2P
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                A2P (Assurance Prévention Protection) est une certification française
                délivrée par le{" "}
                <a
                  href="https://www.cnpp.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel underline"
                >
                  CNPP
                </a>
                , un organisme indépendant, après des tests en
                laboratoire. Elle s&apos;applique aux serrures, cylindres, blocs-portes
                blindés, coffres-forts et systèmes d&apos;alarme. Contrairement à une
                mention commerciale comme « haute sécurité » ou « anti-effraction », c&apos;est
                un label attribué après des essais standardisés, pas une formule choisie
                librement par le fabricant.
              </p>
              <div className="mt-4">
                <ArticleWarning title="« Coffre-fort certifié A2P » peut ne concerner que la serrure">
                  Sur un coffre-fort, le marquage A2P porte souvent uniquement sur la
                  serrure intégrée, pas sur la résistance globale du caisson. Pour la
                  résistance réelle du coffre entier, c&apos;est la norme européenne{" "}
                  <strong>EN 1143-1</strong> qu&apos;il faut demander, avec une serrure
                  elle-même classée EN 1300 (classes A, B ou C). Un vendeur qui parle
                  seulement d&apos;A2P sans mentionner l&apos;EN 1143-1 vend peut-être un
                  bon verrou sur une boîte ordinaire.
                </ArticleWarning>
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/pool/cylindre-fichet-demonte-serrurier-nice.webp"
                alt="Cylindre Fichet démonté par un serrurier à Nice"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <ArticleSectionHeading number={2} id="etoiles">
                Une, deux ou trois étoiles : une échelle, pas un chiffre marketing
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Le nombre d&apos;étoiles correspond à un temps de résistance testé en
                laboratoire face à des outils d&apos;effraction courants : une étoile
                résiste 5 minutes, deux étoiles 10 minutes, trois étoiles au moins 15
                minutes face à des attaques méthodiques avec outils professionnels. Ce
                n&apos;est pas une question de prix affiché ou de design, mais d&apos;un
                résultat de test reproductible. Un cylindre 1 étoile et un cylindre 3
                étoiles peuvent se ressembler visuellement tout en offrant un temps de
                résistance très différent.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={3} id="comparatif">
                Comparatif des niveaux A2P
              </ArticleSectionHeading>
              <ArticleTable
                caption="Comparatif simplifié des échelles A2P, d'après les tests du CNPP."
                headers={["Certification", "Résistance testée", "S'applique à"]}
                rows={[
                  ["A2P *", "5 minutes", "Cylindre ou serrure seule"],
                  ["A2P **", "10 minutes", "Cylindre ou serrure seule"],
                  ["A2P ***", "15 minutes minimum", "Cylindre ou serrure seule"],
                  ["A2P BP1 / BP2 / BP3", "Échelle propre au bloc-porte", "Bloc-porte blindé complet (cadre, gonds, panneau, serrure)"],
                ]}
              />
            </div>

            <div>
              <ArticleSectionHeading number={4} id="pourquoi">
                Pourquoi ça compte, au-delà de la sécurité elle-même
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Au-delà de la résistance physique, disposer d&apos;un équipement
                certifié A2P facilite généralement les démarches après un sinistre.
                Beaucoup de contrats d&apos;assurance habitation en tiennent compte, en
                particulier pour les logements avec des biens de valeur ou dans certaines
                zones. À Nice, où une part importante du parc est louée en meublé de
                tourisme ou occupée une partie de l&apos;année seulement, ce niveau de
                certification revient souvent dans les conditions demandées par les
                assureurs pour les résidences secondaires. Je vous invite à vérifier les
                conditions exactes de votre propre contrat plutôt que de vous fier à une
                règle générale, chaque assureur fixant ses propres critères — voir aussi
                mon article sur{" "}
                <Link href="/blog/serrurier-agree-assurances-vrai-faux/" className="text-steel underline">
                  ce qui se vérifie réellement chez un serrurier
                </Link>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={5} id="verifier">
                Comment vérifier qu&apos;un produit est vraiment certifié
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Le marquage A2P doit apparaître directement sur le produit (souvent sur
                la têtière du cylindre ou la plaque de la serrure), pas seulement sur une
                plaquette commerciale ou un site internet. En cas de doute, vous pouvez
                demander à votre serrurier de vous montrer cette marque avant la pose, ou
                vérifier la référence exacte du produit auprès du fabricant.
              </p>
              <div className="mt-4">
                <ArticleWarning title="Une formule vague ne vaut rien">
                  « Norme A2P » sans étoile précisée, ou « équivalent A2P », n&apos;a
                  aucune valeur certifiée. Seul un nombre d&apos;étoiles (ou un sigle BP)
                  associé à une référence produit vérifiable correspond à un vrai test du
                  CNPP.
                </ArticleWarning>
              </div>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/pool/cylindre-fichet-main-serrurier-nice.webp"
                alt="Cylindre Fichet tenu en main par un serrurier à Nice"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <ArticleSectionHeading number={6} id="confusion">
                À ne pas confondre : A2P étoiles et A2P BP
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Le CNPP délivre en réalité deux échelles A2P différentes, et la confusion
                est fréquente. Les serrures et cylindres sont notés en étoiles (1 à 3),
                comme expliqué plus haut. Les blocs-portes blindés complets, eux, sont notés
                BP1, BP2 ou BP3, une échelle qui évalue la porte entière (cadre, gonds,
                panneau et serrure) et non la seule serrure. Un excellent cylindre 3
                étoiles posé sur une{" "}
                <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
                  porte standard non blindée
                </Link>{" "}
                n&apos;offre pas le même niveau de résistance globale qu&apos;un bloc-porte certifié BP, même
                d&apos;entrée de gamme.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={7} id="approche">
                Mon approche sur le choix du niveau
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Je pose des cylindres et serrures de marques reconnues (
                <a href="https://www.fichet-pointfort.com/fr/fr" target="_blank" rel="noopener noreferrer" className="text-steel underline">
                  Fichet
                </a>
                ,{" "}
                <a href="https://www.picard-serrures.com/global/fr" target="_blank" rel="noopener noreferrer" className="text-steel underline">
                  Picard
                </a>
                ,{" "}
                <a href="https://www.heracles.fr/" target="_blank" rel="noopener noreferrer" className="text-steel underline">
                  Heraclès
                </a>
                ,{" "}
                <a href="https://www.cisa.com/fr/" target="_blank" rel="noopener noreferrer" className="text-steel underline">
                  Cisa
                </a>
                , Vak selon les cas) et je peux vous montrer le marquage
                avant l&apos;installation. Je diagnostique toujours la porte avant de
                recommander un niveau, que ce soit pour un{" "}
                <Link href="/changement-serrure-nice/" className="text-steel underline">
                  changement de serrure
                </Link>{" "}
                ou une{" "}
                <Link href="/installation-coffre-fort-nice/" className="text-steel underline">
                  installation de coffre-fort
                </Link>{" "}
                : un logement en étage sans antécédent n&apos;a pas les mêmes besoins
                qu&apos;un rez-de-chaussée exposé ou un logement ayant déjà subi une
                tentative d&apos;effraction. Le prix varie selon la marque et le niveau
                choisi ; consultez mes{" "}
                <Link href="/tarifs-serrurier-nice/" className="text-steel underline">
                  tarifs indicatifs
                </Link>
                .
              </p>
            </div>

            <ArticleOpinion quote="Je ne pose jamais une étoile de plus juste pour l'argument commercial. Une A2P* bien posée sur une porte saine vaut souvent mieux qu'une A2P*** posée sur un bâti que personne n'a vérifié." />

            <ArticleKeyTakeaways
              points={[
                "L'A2P est un test indépendant du CNPP, pas une formule commerciale.",
                "Une, deux, trois étoiles : 5, 10, 15 minutes de résistance testée.",
                "Les étoiles notent une serrure seule ; le BP note un bloc-porte complet.",
                "Un cylindre A2P haut de gamme ne compense pas une porte non blindée fragile.",
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
          <CtaBlock title="Une question sur le niveau de certification adapté à votre porte ?" />
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
