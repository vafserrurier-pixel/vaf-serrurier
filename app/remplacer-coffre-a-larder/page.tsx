import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/remplacer-coffre-a-larder/" },
  title: "Remplacer un coffre à larder : guide simple et propre | VAF",
  description:
    "Le coffre à larder semble simple à remplacer mais demande de la précision : mesures, mécanisme, fermeture. Mon guide étape par étape.",
};

export default function RemplacerCoffreALarderPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "Remplacer un coffre à larder", href: "/remplacer-coffre-a-larder/" },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        Comment remplacer un coffre à larder : guide simple et propre
      </h1>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          Remplacer un coffre à larder paraît simple, mais ça demande de la précision :
          de bonnes mesures, un mécanisme compatible, et une fermeture qui joue
          correctement une fois reposée. Avant de commencer, je vous conseille de
          vérifier l&apos;état de la porte et du cadre.
        </p>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            C&apos;est quoi un coffre à larder
          </h2>
          <p>
            Le coffre à larder, c&apos;est le corps de la serrure, encastré dans
            l&apos;épaisseur de la porte. Il contient le demi-tour, le pêne dormant et
            le mécanisme. Je le remplace quand la poignée devient molle, que la clé
            accroche, ou après une tentative d&apos;effraction.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Les mesures essentielles
          </h2>
          <p>
            Trois mesures sont indispensables : l&apos;axe (de la têtière au centre du
            carré), l&apos;entraxe (du centre du carré au centre du cylindre), et la
            largeur de tête. Il faut aussi vérifier le sens d&apos;ouverture de la porte
            et l&apos;orientation du demi-tour.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Les outils nécessaires
          </h2>
          <p>
            Pas besoin d&apos;un atelier complet : des tournevis adaptés, des clés Allen,
            un mètre, un crayon et un petit ciseau à bois pour les ajustements
            suffisent dans la plupart des cas.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Compatible ou pas : comment le savoir avant d&apos;acheter
          </h2>
          <p>
            Tous les coffres à larder ne sont pas interchangeables, même à taille
            proche. Avant d&apos;en acheter un neuf, vérifiez le sens de la porte
            (poussant ou tirant, droite ou gauche), la fonction exacte (simple, à
            condamnation, ou avec bec-de-cane), et si possible la marque d&apos;origine
            — certains fabricants comme Fichet, Vachette ou Bricard utilisent des
            entraxes propriétaires qui ne correspondent à aucun standard générique.
            Dans le doute, démontez d&apos;abord l&apos;ancien coffre et comparez-le
            physiquement en magasin plutôt que de commander sur la seule base des
            mesures.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
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
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Les erreurs fréquentes
          </h2>
          <p>
            Acheter sans avoir pris les bonnes mesures, forcer des pièces
            incompatibles, tester porte fermée, ou confondre un problème de porte avec
            un problème de serrure : ce sont les pièges les plus courants.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Quand faire appel à un professionnel
          </h2>
          <p>
            Si le remplacement révèle un problème plus large (bâti abîmé, porte
            blindée, mécanisme non standard), mieux vaut me contacter directement
            plutôt que de forcer une pièce qui ne correspond pas.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <CtaBlock title="Une question sur votre serrure ?" />
      </div>

      <p className="mt-6 text-sm text-slate">
        Voir aussi :{" "}
        <Link href="/changement-serrure-nice/" className="text-steel underline">
          changement de serrure
        </Link>{" "}
        et{" "}
        <Link href="/depannage-serrurier-nice/" className="text-steel underline">
          dépannage serrurier
        </Link>
        .
      </p>
    </article>
  );
}
