import Link from "next/link";
import type { Locale } from "@/lib/locale";

const featuredPosts = [
  {
    href: "/blog/serrurier-nuit-dimanche-prix-nice/",
    title: "Serrurier la nuit ou le dimanche à Nice : prix et délai",
    excerpt:
      "Bloqué dehors la nuit, le dimanche ou un jour férié à Nice : le prix d'un serrurier, le délai d'arrivée, et comment éviter les mauvaises surprises.",
    category: "Conseil pratique",
  },
  {
    href: "/blog/verrou-bloque-changer-prix-nice/",
    title: "Verrou bloqué ou à changer : que faire et quel prix à Nice ?",
    excerpt:
      "Verrou qui coince, clé cassée, verrou forcé : les bons gestes, réparer ou changer, double entrée ou bouton, et le prix d'un verrou posé à Nice.",
    category: "Conseil pratique",
  },
  {
    href: "/blog/arnaque-serrurier-nice-comment-eviter/",
    title: "Arnaque au serrurier à Nice : comment l'éviter ?",
    excerpt:
      "Autocollants, prix flous, facture à 1 300 € : comment repérer un serrurier qui profite de l'urgence, le prix normal à Nice, et que faire après.",
    category: "Conseil pratique",
  },
];

const strings = {
  fr: {
    title: "Mes derniers articles",
    subtitle: "Conseils pratiques et explications claires, sans jargon commercial.",
    read: "Lire l'article",
    seeAll: "Voir tous les articles →",
  },
  en: {
    title: "From the blog (in French)",
    subtitle: "Practical advice and clear explanations, no sales pitch.",
    read: "Read the article",
    seeAll: "See all articles (in French) →",
  },
};

export default function BlogPreview({ locale = "fr" }: { locale?: Locale }) {
  const t = strings[locale];
  return (
    <div>
      <h2 className="font-heading text-2xl font-bold text-navy mb-2 text-center">{t.title}</h2>
      <p className="text-slate text-sm mb-8 text-center max-w-xl mx-auto">{t.subtitle}</p>
      <div className="grid gap-4 sm:grid-cols-3">
        {featuredPosts.map((post) => (
          <Link
            key={post.href}
            href={post.href}
            className="group block bg-white border border-navy/10 border-t-4 border-t-steel rounded-lg p-5 shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all h-full"
          >
            <span className="inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 bg-steel/10 text-steel">
              {post.category}
            </span>
            <p className="font-heading font-semibold text-navy">{post.title}</p>
            <p className="text-sm text-slate mt-1">{post.excerpt}</p>
            <span className="inline-flex items-center gap-1 text-sm font-semibold text-steel mt-3">
              {t.read}
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
        ))}
      </div>
      <p className="text-center mt-6">
        <Link href="/blog/" className="text-steel underline text-sm">
          {t.seeAll}
        </Link>
      </p>
    </div>
  );
}
