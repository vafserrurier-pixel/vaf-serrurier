import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/blog/serrure-3-5-7-points-que-choisir/" },
  title: "Serrure 3, 5 ou 7 points : laquelle choisir ? | VAF",
  description:
    "Différence réelle entre une serrure 3, 5 et 7 points, et comment choisir le bon niveau selon votre porte. Explications claires, sans survendre.",
};

export default function SerrureMultipointsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          {
            name: "Serrure 3, 5 ou 7 points",
            url: `${business.domain}/blog/serrure-3-5-7-points-que-choisir/`,
          },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "Serrure 3, 5 ou 7 points", href: "/blog/serrure-3-5-7-points-que-choisir/" },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        Serrure 3, 5 ou 7 points : laquelle choisir ?
      </h1>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          C&apos;est une des questions que l&apos;on me pose le plus souvent lors d&apos;un
          changement de serrure : faut-il vraiment mettre plus de points de fermeture,
          ou est-ce du suréquipement ? La réponse dépend de votre porte, pas d&apos;un
          principe général.
        </p>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Comment fonctionne une serrure multipoints
          </h2>
          <p>
            Contrairement à une serrure à un point qui verrouille la porte à un seul
            endroit, une serrure multipoints ancre le battant dans son dormant en
            plusieurs endroits répartis sur toute la hauteur. Il y a un point central
            assuré par le cylindre, complété par des points hauts et bas. La serrure 3
            points associe généralement un point central à un point haut et un point bas.
            La 5 points ajoute des points intermédiaires ou latéraux. La 7 points répartit
            ses pênes sur l&apos;ensemble de la hauteur de la porte.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Plus de points, plus de sécurité ? Pas tout à fait
          </h2>
          <p>
            Le passage d&apos;un point à trois points constitue un vrai bond de
            sécurité, car il empêche la porte de se déformer localement sous l&apos;effet
            d&apos;un pied-de-biche. En revanche, la sécurité n&apos;augmente pas de
            façon strictement proportionnelle au nombre de points. Passer de 3 à 5
            points améliore surtout la répartition des efforts sur une porte large ou
            haute, mais ne compense ni un cylindre bas de gamme, ni un bâti fragile
            autour de la porte. Une excellente serrure posée sur un chambranle abîmé
            reste vulnérable.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Dans quel cas chaque niveau est pertinent
          </h2>
          <p>
            Pour la majorité des appartements avec une porte standard, une serrure 3
            points de bon niveau (certifiée A2P) constitue déjà une protection sérieuse.
            La 5 points devient intéressante pour une maison individuelle, une porte
            large ou haute (au-delà de 2,10 m), ou un logement en rez-de-chaussée
            particulièrement exposé. La 7 points reste réservée aux configurations les
            plus exigeantes : grandes portes, accès isolés, ou besoin de sécurité
            renforcée après une première tentative d&apos;effraction.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Pourquoi la porte d&apos;entrée mérite cette attention
          </h2>
          <p>
            Selon les statistiques du ministère de l&apos;Intérieur, la porte
            d&apos;entrée principale reste le point d&apos;accès le plus utilisé lors
            des cambriolages et tentatives de cambriolage en France, largement devant
            les fenêtres ou les autres accès. Et le facteur temps compte réellement :
            la grande majorité des cambrioleurs abandonnent leur tentative en quelques
            minutes si la porte résiste. C&apos;est tout l&apos;intérêt d&apos;une
            serrure adaptée, plutôt que la plus chère du catalogue.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Le rôle du bâti, souvent négligé
          </h2>
          <p>
            Une serrure multipoints ne travaille jamais seule : elle s&apos;ancre dans
            la gâche et dans le cadre de la porte. Si le chambranle est fissuré, mal
            fixé au mur, ou en bois trop tendre, même une serrure 7 points perd une
            bonne partie de son efficacité, car les points d&apos;ancrage n&apos;ont
            plus rien de solide à mordre. C&apos;est pour ça que je vérifie toujours
            l&apos;état du cadre avant de recommander un niveau de serrure : parfois,
            renforcer la gâche ou consolider le chambranle apporte plus de sécurité
            réelle qu&apos;ajouter des points de fermeture.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Mon conseil pour éviter le suréquipement
          </h2>
          <p>
            Je diagnostique toujours la porte avant de recommander un nombre de points :
            l&apos;état du bâti, la largeur et la hauteur du battant, le niveau de
            risque réel de votre logement. Inutile de payer une serrure 7 points sur
            une porte d&apos;appartement standard en étage si un 3 points A2P bien posé
            suffit largement — et inversement, sous-équiper une grande porte de maison
            individuelle serait une fausse économie.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <CtaBlock title="Une question sur le choix de votre serrure ?" />
      </div>

      <p className="mt-6 text-sm text-slate">
        Voir aussi :{" "}
        <Link href="/changement-serrure-nice/" className="text-steel underline">
          changement de serrure
        </Link>{" "}
        et{" "}
        <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
          installation de porte blindée
        </Link>
        .
      </p>
    </article>
  );
}
