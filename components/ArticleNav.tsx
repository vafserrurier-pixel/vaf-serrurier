import Link from "next/link";
import { blogPosts } from "@/lib/blogPosts";

export default function ArticleNav({ currentHref }: { currentHref: string }) {
  const index = blogPosts.findIndex((post) => post.href === currentHref);
  if (index === -1) return null;

  const current = blogPosts[index];
  const prev = index > 0 ? blogPosts[index - 1] : null;
  const next = index < blogPosts.length - 1 ? blogPosts[index + 1] : null;

  const sameCategory = blogPosts.filter(
    (post) => post.href !== currentHref && post.category === current.category
  );
  const others = blogPosts.filter(
    (post) => post.href !== currentHref && post.category !== current.category
  );
  const related = [...sameCategory, ...others].slice(0, 3);

  return (
    <div className="flex flex-col gap-8">
      {(prev || next) && (
        <div className="grid gap-3 sm:grid-cols-2">
          {prev && (
            <Link
              href={prev.href}
              className="bg-white border border-navy/10 rounded-lg p-4 hover:border-steel hover:shadow-sm transition-all"
            >
              <span className="text-xs text-slate">&larr; Article précédent</span>
              <p className="font-heading font-semibold text-navy text-sm mt-1">{prev.title}</p>
            </Link>
          )}
          {next && (
            <Link
              href={next.href}
              className="bg-white border border-navy/10 rounded-lg p-4 hover:border-steel hover:shadow-sm transition-all sm:text-right"
            >
              <span className="text-xs text-slate">Article suivant &rarr;</span>
              <p className="font-heading font-semibold text-navy text-sm mt-1">{next.title}</p>
            </Link>
          )}
        </div>
      )}

      <div>
        <p className="font-heading font-bold text-navy mb-3">À lire aussi</p>
        <div className="grid gap-3 sm:grid-cols-3">
          {related.map((post) => (
            <Link
              key={post.href}
              href={post.href}
              className={`block bg-white border border-navy/10 border-t-4 ${post.accent} rounded-lg p-4 hover:shadow-sm transition-shadow`}
            >
              <span
                className={`inline-block text-xs font-semibold px-2 py-0.5 rounded-full mb-2 ${post.tagClass}`}
              >
                {post.category}
              </span>
              <p className="font-heading font-semibold text-navy text-sm">{post.title}</p>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
