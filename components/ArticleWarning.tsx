import type { ReactNode } from "react";
import { AlertLockIcon } from "./Icons";

/**
 * Encart de mise en garde (arnaques, prix d'appel, pieges a eviter) :
 * distinct visuellement de ArticleSummary (neutre) et ArticleKeyTakeaways
 * (bilan), pour que le lecteur repere immediatement un avertissement.
 */
export default function ArticleWarning({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <div className="bg-urgent/5 border-l-4 border-urgent rounded-r-lg p-5 flex gap-3">
      <AlertLockIcon className="w-5 h-5 text-urgent shrink-0 mt-0.5" />
      <div>
        <p className="font-heading font-bold text-urgent mb-1.5">{title}</p>
        <p className="text-sm text-slate leading-relaxed">{children}</p>
      </div>
    </div>
  );
}
