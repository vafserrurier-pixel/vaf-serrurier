import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import ArticleSummary from "@/components/ArticleSummary";
import ArticleToc from "@/components/ArticleToc";
import ArticleTable from "@/components/ArticleTable";
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
    <article className="mx-auto max-w-3xl px-4 py-10">
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
        <ClockIcon className="w-3.5 h-3.5" />6 min de lecture &middot; Mis à jour le 12 septembre 2026
      </p>

      <div className="mt-6">
        <TrustBadges />
      </div>

      <div className="mt-8">
        <ArticleSummary
          points={[
            "Trois mesures sont indispensables avant d'acheter : axe, entraxe, largeur de tête.",
            "Tous les coffres à larder ne sont pas interchangeables, même à taille proche.",
            "Le remplacement se fait porte en place, sans outillage complexe.",
            "En cas de bâti abîmé ou de mécanisme non standard, mieux vaut appeler un professionnel.",
          ]}
        />
      </div>

      <div className="mt-8">
        <ArticleToc items={toc} />
      </div>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          Remplacer un coffre à larder paraît simple, mais ça demande de la précision :
          de bonnes mesures, un mécanisme compatible, et une fermeture qui joue
          correctement une fois reposée. Avant de commencer, je vous conseille de
          vérifier l&apos;état de la porte et du cadre.
        </p>

        <div>
          <h2 id="definition" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            C&apos;est quoi un coffre à larder
          </h2>
          <p>
            Le coffre à larder, c&apos;est le corps de la serrure, encastré dans
            l&apos;épaisseur de la porte. Il contient le demi-tour, le pêne dormant et
            le mécanisme. Je le remplace quand la poignée devient molle, que la clé
            accroche, ou après une tentative d&apos;effraction.
          </p>
        </div>

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/images/pool/reparation-mecanisme-serrure-nice.webp"
            alt="Réparation d'un mécanisme de serrure par un serrurier à Nice"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 id="mesures" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Les mesures essentielles
          </h2>
          <p>
            Trois mesures sont indispensables. Il faut aussi vérifier le sens
            d&apos;ouverture de la porte et l&apos;orientation du demi-tour avant de
            commander quoi que ce soit.
          </p>
        </div>

        <ArticleTable
          caption="Les trois mesures à prendre avant d'acheter un coffre à larder neuf."
          headers={["Mesure", "Ce qu'elle définit"]}
          rows={[
            ["Axe", "De la têtière au centre du carré de la poignée"],
            ["Entraxe", "Du centre du carré au centre du cylindre"],
            ["Largeur de tête", "Largeur de la têtière visible sur la tranche de la porte"],
          ]}
        />

        <div>
          <h2 id="outils" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Les outils nécessaires
          </h2>
          <p>
            Pas besoin d&apos;un atelier complet : des tournevis adaptés, des clés Allen,
            un mètre, un crayon et un petit ciseau à bois pour les ajustements
            suffisent dans la plupart des cas.
          </p>
        </div>

        <div>
          <h2 id="compatibilite" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Compatible ou pas : comment le savoir avant d&apos;acheter
          </h2>
          <p>
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
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 id="etapes" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Les étapes du remplacement
          </h2>
          <ol className="list-decimal pl-5 flex flex-col gap-1">
            <li>Retirer les poignées et le cylindre.</li>
            <li>Dévisser la têtière et sortir l&apos;ancien mécanisme.</li>
            <li>Insérer le nouveau coffre et tout remonter.</li>
            <li>Tester la fermeture et ajuster la gâche si nécessaire.</li>
          </ol>
        </div>

        <div>
          <h2 id="erreurs" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Les erreurs fréquentes
          </h2>
          <p>
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
          <h2 id="professionnel" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Quand faire appel à un professionnel
          </h2>
          <p>
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
      </div>

      <div className="mt-10">
        <ArticleKeyTakeaways
          points={[
            "Prenez l'axe, l'entraxe et la largeur de tête avant d'acheter un coffre neuf.",
            "Vérifiez le sens de porte et la marque d'origine : les entraxes propriétaires existent.",
            "Le remplacement se fait porte en place, avec un outillage simple.",
            "Un bâti abîmé ou un mécanisme non standard justifient l'appel à un professionnel.",
          ]}
        />
      </div>

      <div className="mt-10">
        <h2 className="font-heading text-xl font-bold text-navy mb-4">Foire aux questions</h2>
        <FaqAccordion items={faqItems} />
      </div>

      <div className="mt-10">
        <AuthorBox />
      </div>

      <div className="mt-10">
        <CtaBlock title="Une question sur votre serrure ?" />
      </div>

      <div className="mt-10">
        <ArticleNav currentHref={HREF} />
      </div>
    </article>
  );
}
