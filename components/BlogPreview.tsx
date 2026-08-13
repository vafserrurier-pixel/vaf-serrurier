import Link from "next/link";
import type { Locale } from "@/lib/locale";

const featuredPosts = [
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
    href: "/blog/certification-a2p-serrure/",
    title: "Certification A2P : ce que ce sigle change vraiment pour votre serrure",
    excerpt:
      "Une, deux ou trois étoiles : ce que signifie réellement cette certification, et comment vérifier qu'elle est authentique avant de payer.",
    category: "Comprendre",
    accent: "border-t-navy",
    tagClass: "bg-navy/10 text-navy",
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
