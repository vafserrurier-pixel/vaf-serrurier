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

const HREF = "/blog/certification-a2p-serrure/";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Certification A2P : ce que ça change pour votre serrure | VAF",
  description: "A2P, une ou trois étoiles : ce que signifie cette certification sur une serrure, un cylindre ou un blindage, et comment vérifier qu'elle est authentique.",
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
      "Les étoiles (1 à 3) notent une serrure ou un cylindre seul. Le sigle BP (BP1, BP2, BP3) note un bloc-porte blindé complet : cadre, gonds, panneau et serrure évalués ensemble.",
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
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={blogPostingSchema({
          headline: "Certification A2P : ce que ce sigle change vraiment pour votre serrure",
          description:
            "A2P, une ou trois étoiles : ce que signifie cette certification sur une serrure, un cylindre ou un blindage, et comment vérifier qu'elle est authentique.",
          url: `${business.domain}${HREF}`,
          datePublished: "2026-08-09",
          dateModified: "2026-09-12",
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

      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "Certification A2P", href: HREF },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        Certification A2P : ce que ce sigle change vraiment pour votre serrure
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
            "L'A2P est une certification indépendante délivrée par le CNPP, pas une formule commerciale libre.",
            "Le nombre d'étoiles (1 à 3) correspond à un niveau de résistance testé en laboratoire.",
            "A2P étoiles note une serrure ou un cylindre seul ; A2P BP note un bloc-porte complet.",
            "Le marquage doit apparaître sur le produit lui-même, pas seulement sur l'emballage.",
          ]}
        />
      </div>

      <div className="mt-8">
        <ArticleToc items={toc} />
      </div>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          Vous avez sûrement déjà vu ce sigle sur l&apos;emballage d&apos;un cylindre ou
          dans la fiche technique d&apos;une serrure : A2P, parfois suivi d&apos;une,
          deux ou trois étoiles. C&apos;est l&apos;un des rares repères réellement
          vérifiables dans un secteur où beaucoup d&apos;annonces parlent de « haute
          sécurité » sans rien de concret derrière.
        </p>

        <div>
          <h2 id="definition" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Qu&apos;est-ce que la certification A2P
          </h2>
          <p>
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
        </div>

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/images/pool/cylindre-fichet-demonte-serrurier-nice.webp"
            alt="Cylindre Fichet démonté par un serrurier à Nice"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 id="etoiles" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Une, deux ou trois étoiles : une échelle, pas un chiffre marketing
          </h2>
          <p>
            Le nombre d&apos;étoiles correspond à un niveau de résistance testé en
            laboratoire face à des outils d&apos;effraction courants : plus il y a
            d&apos;étoiles, plus le produit a résisté longtemps aux essais. Ce
            n&apos;est pas une question de prix affiché ou de design, mais d&apos;un
            résultat de test reproductible. Un cylindre 1 étoile et un cylindre 3
            étoiles peuvent se ressembler visuellement tout en offrant un niveau de
            résistance très différent.
          </p>
        </div>

        <ArticleTable
          caption="Comparatif simplifié des échelles A2P. Durées de résistance exactes testées par le CNPP : [SOURCE À CONFIRMER]."
          headers={["Certification", "Ce qui est testé", "S'applique à"]}
          rows={[
            ["A2P *", "Résistance de base à l'effraction", "Cylindre ou serrure seule"],
            ["A2P **", "Résistance intermédiaire", "Cylindre ou serrure seule"],
            ["A2P ***", "Résistance la plus élevée de l'échelle étoiles", "Cylindre ou serrure seule"],
            ["A2P BP1 / BP2 / BP3", "Cadre, gonds, panneau et serrure ensemble", "Bloc-porte blindé complet"],
          ]}
        />

        <div>
          <h2 id="pourquoi" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Pourquoi ça compte, au-delà de la sécurité elle-même
          </h2>
          <p>
            Au-delà de la résistance physique, disposer d&apos;un équipement
            certifié A2P facilite généralement les démarches après un sinistre.
            Beaucoup de contrats d&apos;assurance habitation en tiennent compte, en
            particulier pour les logements avec des biens de valeur ou dans certaines
            zones. Je vous invite à vérifier les conditions exactes de votre propre
            contrat plutôt que de vous fier à une règle générale, chaque assureur
            fixant ses propres critères.
          </p>
        </div>

        <div>
          <h2 id="verifier" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Comment vérifier qu&apos;un produit est vraiment certifié
          </h2>
          <p>
            Le marquage A2P doit apparaître directement sur le produit (souvent sur
            la têtière du cylindre ou la plaque de la serrure), pas seulement sur une
            plaquette commerciale ou un site internet. En cas de doute, vous pouvez
            demander à votre serrurier de vous montrer cette marque avant la pose, ou
            vérifier la référence exacte du produit auprès du fabricant. Une
            expression comme « norme A2P » sans étoile précisée, ou « équivalent
            A2P », n&apos;a pas de valeur certifiée.
          </p>
        </div>

        <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
          <Image
            src="/images/pool/cylindre-fichet-main-serrurier-nice.webp"
            alt="Cylindre Fichet tenu en main par un serrurier à Nice"
            fill
            sizes="(min-width: 768px) 768px, 100vw"
            className="object-cover"
          />
        </div>

        <div>
          <h2 id="confusion" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            À ne pas confondre : A2P étoiles et A2P BP
          </h2>
          <p>
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
          <h2 id="approche" className="font-heading text-xl font-bold text-navy mb-2 scroll-mt-24">
            Mon approche sur le choix du niveau
          </h2>
          <p>
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
      </div>

      <div className="mt-10">
        <ArticleKeyTakeaways
          points={[
            "L'A2P est un test indépendant du CNPP, pas une formule commerciale.",
            "Les étoiles notent une serrure seule ; le BP note un bloc-porte complet.",
            "Le marquage doit être visible sur le produit lui-même, pas seulement sur l'emballage.",
            "Un cylindre A2P haut de gamme ne compense pas une porte non blindée fragile.",
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
        <CtaBlock title="Une question sur le niveau de certification adapté à votre porte ?" />
      </div>

      <div className="mt-10">
        <ArticleNav currentHref={HREF} />
      </div>
    </article>
  );
}
