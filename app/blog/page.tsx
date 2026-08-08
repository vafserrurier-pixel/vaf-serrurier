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
    href: "/remplacer-coffre-a-larder/",
    title: "Comment remplacer un coffre à larder : guide simple et propre",
    excerpt:
      "Remplacer un coffre à larder demande de la précision : bonnes mesures, mécanisme adapté, fermeture qui joue bien. Voici comment je m'y prends.",
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
      <ul className="mt-8 flex flex-col gap-4">
        {posts.map((post) => (
          <li key={post.href}>
            <Link
              href={post.href}
              className="block bg-white border border-navy/10 rounded-lg p-5 hover:border-steel"
            >
              <p className="font-heading font-semibold text-navy">{post.title}</p>
              <p className="text-sm text-slate mt-1">{post.excerpt}</p>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
}
