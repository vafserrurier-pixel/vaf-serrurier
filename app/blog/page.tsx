import type { Metadata } from "next";
import Image from "next/image";
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
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        Conseils de serrurier à Nice, écrits depuis le terrain
      </h1>
      <p className="mt-4 text-slate leading-relaxed max-w-2xl">
        Guides pratiques, explications sans jargon et retours d&apos;intervention réels,
        rédigés par Benoît au fil de ses chantiers à Nice.
      </p>
      <ul className="mt-8 grid gap-5 sm:grid-cols-2">
        {posts.map((post) => (
          <li key={post.href}>
            <Link
              href={post.href}
              className="block bg-white border border-navy/10 rounded-lg overflow-hidden shadow-sm hover:shadow-md transition-shadow h-full"
            >
              <div className="relative aspect-[16/9]">
                <Image
                  src={post.image}
                  alt=""
                  fill
                  sizes="(min-width: 640px) 50vw, 100vw"
                  className="object-cover"
                />
              </div>
              <div className={`p-5 border-t-4 ${post.accent}`}>
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
              </div>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
