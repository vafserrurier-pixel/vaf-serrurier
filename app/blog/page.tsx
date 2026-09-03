import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/blog/" },
  title: "Blog serrurerie | Votre Artisan Français, Nice",
  description:
    "Astuces simples, explications claires et conseils d'artisan sur la serrurerie à Nice.",
};

const posts = [
  {
    href: "/blog/que-faire-apres-un-cambriolage/",
    title: "Que faire après un cambriolage : les bons réflexes",
    excerpt:
      "Ne rien toucher, faire opposition, porter plainte sous 48h, prévenir l'assurance : l'ordre des démarches recommandé après une effraction.",
    category: "Sécurité",
    accent: "border-t-urgent",
    tagClass: "bg-urgent/10 text-urgent",
  },
  {
    href: "/blog/serrure-3-5-7-points-que-choisir/",
    title: "Serrure 3, 5 ou 7 points : laquelle choisir ?",
    excerpt:
      "Plus de points ne veut pas dire plus de sécurité à tous les coups. Comment choisir le bon niveau selon votre porte, sans suréquipement inutile.",
    category: "Conseil pratique",
    accent: "border-t-steel",
    tagClass: "bg-steel/10 text-steel",
  },
  {
    href: "/remplacer-coffre-a-larder/",
    title: "Comment remplacer un coffre à larder : guide simple et propre",
    excerpt:
      "Remplacer un coffre à larder demande de la précision : bonnes mesures, mécanisme adapté, fermeture qui joue bien. Voici comment je m'y prends.",
    category: "Conseil pratique",
    accent: "border-t-steel",
    tagClass: "bg-steel/10 text-steel",
  },
  {
    href: "/blog/certification-a2p-serrure/",
    title: "Certification A2P : ce que ce sigle change vraiment pour votre serrure",
    excerpt:
      "Une, deux ou trois étoiles : ce que signifie réellement cette certification, et comment vérifier qu'elle est authentique avant de payer.",
    category: "Comprendre",
    accent: "border-t-navy",
    tagClass: "bg-navy/10 text-navy",
  },
  {
    href: "/blog/serrurier-agree-assurances-vrai-faux/",
    title: "« Agréé toutes assurances » : ce que cette formule ne veut pas dire",
    excerpt:
      "Ce sigle qu'on voit sur beaucoup de camionnettes n'a pas d'autorité derrière lui. Voici ce qui compte vraiment pour votre dossier d'assurance.",
    category: "Éviter les arnaques",
    accent: "border-t-urgent",
    tagClass: "bg-urgent/10 text-urgent",
  },
  {
    href: "/blog/porte-qui-claque-avant-appeler-serrurier/",
    title: "Porte qui claque : les bons réflexes avant d'appeler un serrurier",
    excerpt:
      "Vérifications à faire avant d'appeler, ce qu'il ne faut surtout pas tenter seul, et comment reconnaître une annonce à prix d'appel trop bas.",
    category: "Conseil pratique",
    accent: "border-t-steel",
    tagClass: "bg-steel/10 text-steel",
  },
  {
    href: "/blog/qui-paie-changement-serrure-location/",
    title: "Location : qui paie le changement de serrure ?",
    excerpt:
      "Clés perdues, cambriolage, changement de locataire : la règle générale pour savoir qui du propriétaire ou du locataire prend en charge la facture.",
    category: "Comprendre",
    accent: "border-t-navy",
    tagClass: "bg-navy/10 text-navy",
  },
  {
    href: "/blog/cles-hall-digicode-organigramme-copropriete/",
    title: "Clés de hall, digicode, organigramme : qui décide en copropriété ?",
    excerpt:
      "Serrure de hall, digicode, organigramme de clés : qui décide, qui paie, et ce qui détermine le prix d'une intervention en copropriété.",
    category: "Comprendre",
    accent: "border-t-navy",
    tagClass: "bg-navy/10 text-navy",
  },
];

export default function BlogPage() {
  return (
    <section className="mx-auto max-w-4xl px-4 py-10">
      <Breadcrumbs items={[{ name: "Accueil", href: "/" }, { name: "Blog", href: "/blog/" }]} />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">Blog</h1>
      <p className="mt-4 text-slate leading-relaxed max-w-2xl">
        Astuces simples, explications claires et conseils d&apos;artisan.
      </p>
      <ul className="mt-8 grid gap-4 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.href}>
            <Link
              href={post.href}
              className={`block bg-white border border-navy/10 border-t-4 ${post.accent} rounded-lg p-5 shadow-sm hover:shadow-md transition-shadow h-full`}
            >
              <span
                className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}
              >
                {post.category}
              </span>
              <p className="font-heading font-semibold text-navy">{post.title}</p>
              <p className="text-sm text-slate mt-1">{post.excerpt}</p>
              <span className="inline-flex items-center gap-1 text-sm font-semibold text-steel mt-3">
                Lire l&apos;article
                <svg width="14" height="14" viewBox="0 0 24 24" fill="none" aria-hidden="true">
                  <path
                    d="M5 12h14M13 6l6 6-6 6"
                    stroke="currentColor"
                    strokeWidth="2"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
