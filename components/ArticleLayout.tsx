import type { ReactNode } from "react";
import ArticleToc, { type ArticleTocItem } from "./ArticleToc";

/**
 * A partir du sommaire, la mise en page passe en deux colonnes sur grand
 * ecran : le sommaire reste visible (sticky) pendant que le contenu
 * defile. Sur mobile, le sommaire reste un simple bloc en tete de
 * contenu (pas de sticky, pas assez de place).
 */
export default function ArticleLayout({
  toc,
  tocAccentColor,
  children,
}: {
  toc: ArticleTocItem[];
  /** Passe-plat vers ArticleToc.accentColor, pour rester coherent avec des titres numerotes en numberStyle="plain". */
  tocAccentColor?: "steel" | "urgent";
  children: ReactNode;
}) {
  return (
    <div className="grid grid-cols-1 lg:grid-cols-[240px_1fr] gap-8 items-start">
      <div className="hidden lg:block sticky top-24">
        <ArticleToc items={toc} accentColor={tocAccentColor} />
      </div>
      <div className="lg:hidden">
        <ArticleToc items={toc} accentColor={tocAccentColor} />
      </div>
      <div className="flex flex-col gap-8 min-w-0">{children}</div>
    </div>
  );
}
