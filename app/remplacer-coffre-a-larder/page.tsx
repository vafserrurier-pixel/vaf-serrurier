import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import ArticleSummary from "@/components/ArticleSummary";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleTable from "@/components/ArticleTable";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import ArticleOpinion from "@/components/ArticleOpinion";
import ArticleKeyTakeaways from "@/components/ArticleKeyTakeaways";
import AuthorBox from "@/components/AuthorBox";
import ArticleNav from "@/components/ArticleNav";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBadges from "@/components/TrustBadges";
import { ClockIcon } from "@/components/Icons";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

const HREF = "/remplacer-coffre-a-larder/";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Remplacer un coffre à larder : guide simple et propre | VAF",
  description: "Le coffre à larder semble simple à remplacer mais demande de la précision : mesures, mécanisme, fermeture. Mon guide étape par étape.",
});

const toc = [
  { id: "definition", label: "C'est quoi un coffre à larder" },
  { id: "mesures", label: "Les mesures essentielles" },
  { id: "outils", label: "Les outils nécessaires" },
  { id: "compatibilite", label: "Compatible ou pas : comment le savoir" },
  { id: "etapes", label: "Les étapes du remplacement" },
  { id: "erreurs", label: "Les erreurs fréquentes" },
  { id: "professionnel", label: "Quand faire appel à un professionnel" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "Comment savoir si mon coffre à larder est compatible avec un modèle neuf du commerce ?",
    answer:
      "Comparez précisément l'axe, l'entraxe et la largeur de tête de l'ancien coffre avec la fiche technique du modèle neuf. En cas de doute, démontez l'ancien et présentez-le physiquement en magasin plutôt que de commander sur les seules mesures.",
  },
  {
    question: "Mes mesures ne correspondent à aucun standard : que faire ?",
    answer:
      "Certains fabricants comme Fichet, Vachette ou Bricard utilisent des entraxes propriétaires. Dans ce cas, il faut soit trouver la référence exacte d'origine auprès du fabricant, soit faire appel à un serrurier qui a accès à un stock plus large de pièces.",
  },
  {
    question: "Peut-on remplacer un coffre à larder sans démonter la porte ?",
    answer:
      "Oui dans la grande majorité des cas : le remplacement se fait porte en place, en retirant seulement la poignée, le cylindre puis la têtière pour sortir l'ancien mécanisme.",
  },
  {
    question: "Quelle différence entre un coffre à larder et un simple cylindre ?",
    answer:
      "Le cylindre est la pièce dans laquelle la clé tourne. Le coffre à larder est le boîtier complet encastré dans la porte qui contient le mécanisme de verrouillage (demi-tour, pêne dormant) : on peut parfois changer l'un sans l'autre selon la panne.",
  },
  {
    question: "Combien de temps prend ce remplacement ?",
    answer:
      "Pour un particulier bricoleur avec le bon matériel, comptez en général une à deux heures. Si le remplacement révèle un problème de bâti ou une incompatibilité, mieux vaut s'arrêter et faire appel à un professionnel plutôt que de prolonger l'intervention en forçant.",
  },
  {
    question: "Que faire si le remplacement révèle un problème plus large ?",
    answer:
      "Si le bâti est abîmé, la porte blindée, ou le mécanisme non standard, n'insistez pas : contactez-moi directement plutôt que de forcer une pièce qui ne correspond pas, ce qui abîmerait la porte davantage.",
  },
];

export default function RemplacerCoffreALarderPage() {
  return (
    <article>
      <JsonLd
        data={blogPostingSchema({
          headline: "Comment remplacer un coffre à larder : guide simple et propre",
          description:
            "Le coffre à larder semble simple à remplacer mais demande de la précision : mesures, mécanisme, fermeture. Mon guide étape par étape.",
          url: `${business.domain}${HREF}`,
          datePublished: "2026-08-08",
          dateModified: "2026-09-12",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Remplacer un coffre à larder", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Remplacer un coffre à larder", href: HREF },
            ]}
          />
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            Comment remplacer un coffre à larder : guide simple et propre
          </h1>
          <p className="flex items-center gap-1.5 text-xs text-slate mt-3">
            <ClockIcon className="w-3.5 h-3.5" />7 min de lecture &middot; Mis à jour le 12 septembre 2026
          </p>
          <div className="mt-6">
            <TrustBadges />
          </div>
          <div className="mt-8">
            <ArticleSummary
              points={[
                <>
                  <strong>Trois mesures</strong> sont indispensables avant d&apos;acheter : axe, entraxe, largeur de tête.
                </>,
                "Tous les coffres à larder ne sont pas interchangeables, même à taille proche.",
                "Le remplacement se fait porte en place, sans outillage complexe.",
                "En cas de bâti abîmé ou de mécanisme non standard, mieux vaut appeler un professionnel.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className="text-slate leading-relaxed">
              Remplacer un coffre à larder paraît simple, mais ça demande de la précision :
              de bonnes mesures, un mécanisme compatible, et une fermeture qui joue
              correctement une fois reposée. Avant de commencer, je vous conseille de
              vérifier l&apos;état de la porte et du cadre.
            </p>

            <div>
              <ArticleSectionHeading number={1} id="definition">
                C&apos;est quoi un coffre à larder
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Le coffre à larder, c&apos;est le corps de la serrure, encastré dans
                l&apos;épaisseur de la porte. Il contient le demi-tour, le pêne dormant et
                le mécanisme.
              </p>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  Coffre à larder ou simple cylindre : ne pas confondre
                </h3>
                <p className="text-slate leading-relaxed">
                  Le cylindre est uniquement la pièce dans laquelle la clé tourne. Le
                  coffre à larder est le boîtier complet qui contient tout le mécanisme de
                  verrouillage. Selon la panne, on peut parfois changer l&apos;un sans
                  l&apos;autre : une clé qui accroche vient souvent du seul cylindre,
                  tandis qu&apos;une poignée molle ou un pêne qui ne sort plus vient
                  généralement du coffre lui-même.
                </p>
              </div>
              <p className="text-slate leading-relaxed mt-4">
                Je remplace le coffre quand la poignée devient molle, que la clé accroche
                malgré un cylindre changé, ou après une tentative d&apos;effraction.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/pool/reparation-mecanisme-serrure-nice.webp"
                alt="Réparation d'un mécanisme de serrure par un serrurier à Nice"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <ArticleSectionHeading number={2} id="mesures">
                Les mesures essentielles
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Trois mesures sont indispensables. Il faut aussi vérifier le sens
                d&apos;ouverture de la porte et l&apos;orientation du demi-tour avant de
                commander quoi que ce soit.
              </p>
              <div className="mt-4">
                <ArticleTable
                  caption="Les trois mesures à prendre avant d'acheter un coffre à larder neuf."
                  headers={["Mesure", "Ce qu'elle définit"]}
                  rows={[
                    ["Axe", "De la têtière au centre du carré de la poignée"],
                    ["Entraxe", "Du centre du carré au centre du cylindre"],
                    ["Largeur de tête", "Largeur de la têtière visible sur la tranche de la porte"],
                  ]}
                />
              </div>
            </div>

            <div>
              <ArticleSectionHeading number={3} id="outils">
                Les outils nécessaires
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Pas besoin d&apos;un atelier complet : des tournevis adaptés, des clés Allen,
                un mètre, un crayon et un petit ciseau à bois pour les ajustements
                suffisent dans la plupart des cas.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={4} id="compatibilite">
                Compatible ou pas : comment le savoir avant d&apos;acheter
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Tous les coffres à larder ne sont pas interchangeables, même à taille
                proche. Avant d&apos;en acheter un neuf, vérifiez le sens de la porte
                (poussant ou tirant, droite ou gauche), la fonction exacte (simple, à
                condamnation, ou avec bec-de-cane), et si possible la marque d&apos;origine :
                certains fabricants comme{" "}
                <a
                  href="https://www.fichet-pointfort.com/fr/fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel underline"
                >
                  Fichet
                </a>
                ,{" "}
                <a
                  href="https://www.vachette.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel underline"
                >
                  Vachette
                </a>{" "}
                ou{" "}
                <a
                  href="https://www.bricard.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel underline"
                >
                  Bricard
                </a>{" "}
                utilisent des entraxes propriétaires qui ne correspondent à aucun standard générique.
                Dans le doute, démontez d&apos;abord l&apos;ancien coffre et comparez-le
                physiquement en magasin plutôt que de commander sur la seule base des
                mesures.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/pool/percage-nouveau-cylindre-porte-nice.webp"
                alt="Perçage pour un nouveau cylindre de porte à Nice"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <ArticleSectionHeading number={5} id="etapes">
                Les étapes du remplacement
              </ArticleSectionHeading>
              <ol className="list-decimal pl-5 flex flex-col gap-1 text-slate leading-relaxed">
                <li>Retirer les poignées et le cylindre.</li>
                <li>Dévisser la têtière et sortir l&apos;ancien mécanisme.</li>
                <li>Insérer le nouveau coffre et tout remonter.</li>
                <li>Tester la fermeture et ajuster la gâche si nécessaire.</li>
              </ol>
            </div>

            <div>
              <ArticleSectionHeading number={6} id="erreurs">
                Les erreurs fréquentes
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Acheter sans avoir pris les bonnes mesures, forcer des pièces
                incompatibles, tester porte fermée, ou confondre un problème de porte avec
                un problème de{" "}
                <Link href="/changement-serrure-nice/" className="text-steel underline">
                  serrure
                </Link>{" "}
                : ce sont les pièges les plus courants.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={7} id="professionnel">
                Quand faire appel à un professionnel
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Si le remplacement révèle un problème plus large (bâti abîmé,{" "}
                <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
                  porte blindée
                </Link>
                , mécanisme non standard), mieux vaut me{" "}
                <Link href="/depannage-serrurier-nice/" className="text-steel underline">
                  contacter directement
                </Link>{" "}
                plutôt que de forcer une pièce qui ne correspond pas. Retrouvez mes{" "}
                <Link href="/tarifs-serrurier-nice/" className="text-steel underline">
                  tarifs annoncés à l&apos;avance
                </Link>{" "}
                avant toute intervention.
              </p>
            </div>

            <ArticleOpinion quote="Un coffre à larder mal identifié, c'est la panne la plus bête à aggraver soi-même. Si le doute persiste après les mesures, mieux vaut me l'envoyer en photo avant d'acheter que de forcer une pièce qui ne rentre pas." />

            <ArticleKeyTakeaways
              points={[
                "Prenez l'axe, l'entraxe et la largeur de tête avant d'acheter un coffre neuf.",
                "Vérifiez le sens de porte et la marque d'origine : les entraxes propriétaires existent.",
                "Le remplacement se fait porte en place, avec un outillage simple.",
                "Un bâti abîmé ou un mécanisme non standard justifient l'appel à un professionnel.",
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
          <CtaBlock title="Une question sur votre serrure ?" />
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
