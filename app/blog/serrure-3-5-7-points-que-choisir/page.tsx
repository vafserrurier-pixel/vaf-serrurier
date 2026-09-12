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

const HREF = "/blog/serrure-3-5-7-points-que-choisir/";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Serrure 3, 5 ou 7 points : laquelle choisir ? | VAF",
  description: "Différence réelle entre une serrure 3, 5 et 7 points, et comment choisir le bon niveau selon votre porte. Explications claires, sans survendre.",
});

const toc = [
  { id: "fonctionnement", label: "Comment fonctionne une serrure multipoints" },
  { id: "plus-de-points", label: "Plus de points, plus de sécurité ? Pas tout à fait" },
  { id: "comparatif", label: "Comparatif des trois niveaux" },
  { id: "cas-usage", label: "Dans quel cas chaque niveau est pertinent" },
  { id: "pourquoi-porte", label: "Pourquoi la porte d'entrée mérite cette attention" },
  { id: "bati", label: "Le rôle du bâti, souvent négligé" },
  { id: "conseil", label: "Mon conseil pour éviter le suréquipement" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "Une serrure 5 points est-elle deux fois plus sûre qu'une 3 points ?",
    answer:
      "Non, pas de façon proportionnelle. Le vrai bond de sécurité se fait entre 1 et 3 points. Passer à 5 points améliore surtout la répartition des efforts sur une porte large ou haute, mais ne double pas mécaniquement la résistance.",
  },
  {
    question: "Puis-je installer une serrure 7 points sur n'importe quelle porte ?",
    answer:
      "Techniquement souvent oui, mais ce n'est pas toujours pertinent : sur une porte d'appartement standard, une 7 points est généralement du suréquipement. Je vérifie toujours l'état du bâti et le besoin réel avant de la recommander.",
  },
  {
    question: "Le nombre de points est-il lié à la certification A2P ?",
    answer:
      "Non, ce sont deux choses différentes. Le nombre de points décrit la répartition mécanique du verrouillage, tandis que l'A2P certifie un niveau de résistance testé en laboratoire. Le détail est expliqué dans mon article sur la certification A2P.",
  },
  {
    question: "Faut-il changer toute la porte pour passer à plus de points ?",
    answer:
      "Pas nécessairement si le bâti est en bon état : on peut souvent remplacer uniquement le mécanisme de serrure. En revanche, si le cadre est abîmé, un changement de porte ou un renfort du chambranle devient la priorité avant même de parler de points.",
  },
  {
    question: "Quel signe indique qu'il faut renforcer ma serrure actuelle ?",
    answer:
      "Une clé qui force, un pêne qui accroche, une porte qui a déjà subi une tentative d'effraction, ou simplement une serrure à un seul point sur une porte d'entrée : ce sont les signaux qui justifient un diagnostic.",
  },
  {
    question: "Une serrure multipoints convient-elle à une porte de garage ou un portail ?",
    answer:
      "Le principe s'applique surtout aux portes battantes classiques. Pour un garage ou un portail, d'autres solutions de verrouillage sont souvent plus adaptées : c'est un diagnostic à faire au cas par cas selon le type d'ouvrant.",
  },
];

export default function SerrureMultipointsPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={blogPostingSchema({
          headline: "Serrure 3, 5 ou 7 points : laquelle choisir ?",
          description:
            "Différence réelle entre une serrure 3, 5 et 7 points, et comment choisir le bon niveau selon votre porte. Explications claires, sans survendre.",
          url: `${business.domain}${HREF}`,
          datePublished: "2026-08-09",
          dateModified: "2026-09-12",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Serrure 3, 5 ou 7 points", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "Serrure 3, 5 ou 7 points", href: HREF },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        Serrure 3, 5 ou 7 points : laquelle choisir ?
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
            "Le vrai bond de sécurité se fait entre 1 et 3 points, pas au-delà.",
            "5 et 7 points servent surtout les portes larges, hautes, ou les besoins renforcés.",
            "Un bâti abîmé limite l'efficacité de n'importe quel niveau de serrure.",
            "Je diagnostique toujours la porte avant de recommander un nombre de points.",
          ]}
        />
      </div>

      <div className="mt-8">
        <ArticleToc items={toc} />
      </div>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          C&apos;est une des questions que l&apos;on me pose le plus souvent lors d&apos;un{" "}
          <Link href="/changement-serrure-nice/" className="text-steel underline">
            changement de serrure
          </Link>{" "}
          : faut-il vraiment mettre plus de points de fermeture, ou est-ce du suréquipement ?
          La réponse dépend de votre porte, pas d&apos;un principe général.
        </p>

        <div>
          <h2 id="fonctionnement" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
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

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/images/serrurier-nice-porte-blindee-multipoints.webp"
            alt="Serrure multipoints posée sur une porte blindée à Nice"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 id="plus-de-points" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
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

        <ArticleTable
          caption="Comparatif indicatif des trois niveaux de serrure multipoints."
          headers={["Niveau", "Points d'ancrage", "Cas d'usage typique"]}
          rows={[
            ["3 points", "Central + haut + bas", "Appartement standard, porte de taille classique"],
            ["5 points", "3 points + intermédiaires/latéraux", "Maison individuelle, porte large ou haute (+2,10 m), rez-de-chaussée exposé"],
            ["7 points", "Répartis sur toute la hauteur", "Grande porte, accès isolé, besoin de sécurité renforcée"],
          ]}
        />

        <div>
          <h2 id="cas-usage" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Dans quel cas chaque niveau est pertinent
          </h2>
          <p>
            Pour la majorité des appartements avec une porte standard, une{" "}
            <Link href="/serrure-carenee-nice/" className="text-steel underline">
              serrure 3 points de bon niveau
            </Link>{" "}
            (certifiée A2P) constitue déjà une protection sérieuse. La 5 points devient
            intéressante pour une maison individuelle, une porte large ou haute
            (au-delà de 2,10 m), ou un logement en rez-de-chaussée particulièrement
            exposé. La 7 points reste réservée aux configurations les plus exigeantes :
            grandes portes, accès isolés, ou besoin de sécurité renforcée après une
            première tentative d&apos;effraction.
          </p>
        </div>

        <div>
          <h2 id="pourquoi-porte" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Pourquoi la porte d&apos;entrée mérite cette attention
          </h2>
          <p>
            Selon les{" "}
            <a
              href="https://www.interieur.gouv.fr/Interstats/Infractions-et-sentiment-d-insecurite/Cambriolages"
              target="_blank"
              rel="noopener noreferrer"
              className="text-steel underline"
            >
              statistiques du ministère de l&apos;Intérieur
            </a>
            , la porte d&apos;entrée principale reste le point d&apos;accès le plus utilisé lors
            des cambriolages et tentatives de cambriolage en France, largement devant
            les fenêtres ou les autres accès. Et le facteur temps compte réellement :
            la grande majorité des cambrioleurs abandonnent leur tentative en quelques
            minutes si la porte résiste. C&apos;est tout l&apos;intérêt d&apos;une
            serrure adaptée, plutôt que la plus chère du catalogue.
          </p>
        </div>

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/images/pool/serrure-multipoints-porte-noire-rue-nice.webp"
            alt="Serrure multipoints sur une porte d'entrée à Nice"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 id="bati" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
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
            réelle qu&apos;ajouter des points de fermeture. Dans les cas les plus dégradés,
            une{" "}
            <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
              porte blindée complète
            </Link>{" "}
            reste la solution la plus fiable.
          </p>
        </div>

        <div>
          <h2 id="conseil" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Mon conseil pour éviter le suréquipement
          </h2>
          <p>
            Je diagnostique toujours la porte avant de recommander un nombre de points :
            l&apos;état du bâti, la largeur et la hauteur du battant, le niveau de
            risque réel de votre logement. Inutile de payer une serrure 7 points sur
            une porte d&apos;appartement standard en étage si un 3 points A2P bien posé
            suffit largement, et inversement, sous-équiper une grande porte de maison
            individuelle serait une fausse économie. Le prix exact dépend toujours du
            diagnostic ; retrouvez mes{" "}
            <Link href="/tarifs-serrurier-nice/" className="text-steel underline">
              tarifs indicatifs
            </Link>{" "}
            à titre de repère.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <ArticleKeyTakeaways
          points={[
            "Le vrai gain de sécurité se joue entre 1 et 3 points, pas au-delà de façon proportionnelle.",
            "5 et 7 points répondent à des portes larges, hautes, ou des besoins renforcés spécifiques.",
            "Un bâti fragile limite l'efficacité de n'importe quel niveau de serrure.",
            "Un diagnostic sur place reste le seul moyen d'éviter le sous- ou le suréquipement.",
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
        <CtaBlock title="Une question sur le choix de votre serrure ?" />
      </div>

      <div className="mt-10">
        <ArticleNav currentHref={HREF} />
      </div>
    </article>
  );
}
