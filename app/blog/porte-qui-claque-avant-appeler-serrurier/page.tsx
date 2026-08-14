import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: {
    canonical: "https://vaf-serrurier.fr/blog/porte-qui-claque-avant-appeler-serrurier/",
  },
  title: "Porte qui claque : les bons réflexes avant d'appeler | VAF",
  description:
    "Porte claquée à Nice : les vérifications à faire avant d'appeler, ce qu'il ne faut pas tenter seul, et comment reconnaître une annonce à prix d'appel.",
};

export default function PorteQuiClaquePage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={blogPostingSchema({
          headline: "Porte qui claque : les bons réflexes avant d'appeler un serrurier",
          description:
            "Porte claquée à Nice : les vérifications à faire avant d'appeler, ce qu'il ne faut pas tenter seul, et comment reconnaître une annonce à prix d'appel.",
          url: `${business.domain}/blog/porte-qui-claque-avant-appeler-serrurier/`,
          datePublished: "2026-08-09",
          dateModified: "2026-08-13",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          {
            name: "Porte qui claque",
            url: `${business.domain}/blog/porte-qui-claque-avant-appeler-serrurier/`,
          },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          {
            name: "Porte qui claque",
            href: "/blog/porte-qui-claque-avant-appeler-serrurier/",
          },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        Porte qui claque : les bons réflexes avant d&apos;appeler un serrurier
      </h1>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          C&apos;est l&apos;un des appels les plus fréquents que je reçois : une
          porte qui se referme d&apos;un coup de vent ou d&apos;un geste rapide, et
          la question qui suit immédiatement — faut-il forcer, appeler tout de suite,
          ou d&apos;abord vérifier quelque chose ? Voici l&apos;ordre que je conseille.
        </p>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Vérifiez d&apos;abord si la porte est vraiment verrouillée
          </h2>
          <p>
            Une porte qui claque ne s&apos;est pas forcément verrouillée. Sur
            beaucoup de modèles, le pêne demi-tour se bloque au claquement, mais le
            pêne dormant (le vrai verrouillage) ne s&apos;engage que si la porte a
            été fermée à clé. Avant toute chose, essayez la poignée. Si elle
            s&apos;actionne normalement, vous n&apos;avez pas besoin d&apos;un
            serrurier.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Cherchez un double de clé ou un accès alternatif
          </h2>
          <p>
            Avant d&apos;appeler, demandez-vous si un proche, un voisin ou un membre
            de la famille ne détient pas un double. Vérifiez aussi s&apos;il existe
            un autre accès au logement (porte de service, fenêtre accessible sans
            risque) plutôt que de vous précipiter sur un service payant en urgence.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Ne tentez pas de forcer la porte vous-même
          </h2>
          <p>
            Glisser une carte, un tournevis ou tout autre objet dans l&apos;huisserie
            abîme presque toujours le dormant ou le battant, même sans succès. Résultat :
            l&apos;intervention professionnelle qui suit coûte plus cher, parce
            qu&apos;il faut aussi réparer les dégâts causés par la tentative. Un
            diagnostic correct avant toute manipulation évite ce genre de mauvaise
            surprise.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Méfiez-vous des annonces avec un prix affiché très bas
          </h2>
          <p>
            En cherchant « serrurier urgence » dans l&apos;affolement, on tombe
            souvent sur des prix d&apos;appel très attractifs (30 ou 40 € par
            exemple), annoncés pour un simple déplacement. Le tarif réel, une fois
            sur place, grimpe presque toujours bien au-delà une fois sur le pas de la
            porte. Une intervention sérieuse pour une porte claquée descend rarement
            sous les 100 € tout compris — chez moi, ce tarif est annoncé à
            l&apos;avance et fixe, sans surprise une fois sur place.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Comment un serrurier ouvre une porte claquée sans l&apos;abîmer
          </h2>
          <p>
            Sur la plupart des portes, j&apos;utilise la méthode radio, aussi appelée
            technique de la feuille Mika ou du by-pass : une fine plaque rigide glissée
            entre le cadre et le pêne, qui libère le mécanisme sans dommage dans la
            quasi-totalité des cas. C&apos;est plus délicat qu&apos;il n&apos;y paraît
            — mal maîtrisée, cette manipulation abîme justement ce qu&apos;elle est
            censée préserver, d&apos;où l&apos;intérêt de laisser un professionnel s&apos;en
            charger dès que la porte résiste un peu.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Ce que je fais concrètement à mon arrivée
          </h2>
          <p>
            Je commence toujours par un diagnostic rapide de la serrure et du type de
            verrouillage avant de choisir la méthode d&apos;ouverture, et
            j&apos;annonce le prix avant d&apos;intervenir. L&apos;objectif est
            d&apos;ouvrir sans endommager la porte quand c&apos;est possible, plutôt
            que de forcer par défaut.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <CtaBlock title="Porte claquée maintenant ?" />
      </div>

      <p className="mt-6 text-sm text-slate">
        Voir aussi :{" "}
        <Link href="/ouverture-de-porte-nice/" className="text-steel underline">
          ouverture de porte
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
