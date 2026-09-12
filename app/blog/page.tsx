import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import { buildMetadata } from "@/lib/metadata";
import { blogPosts as posts } from "@/lib/blogPosts";

export const metadata: Metadata = buildMetadata({
  path: "/blog/",
  title: "Blog serrurerie | Votre Artisan Français, Nice",
  description: "Astuces simples, explications claires et conseils d'artisan sur la serrurerie à Nice.",
});

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
