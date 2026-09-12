import type { ReactNode } from "react";
import ArticleLayout from "./ArticleLayout";
import type { ArticleTocItem } from "./ArticleToc";
import FaqAccordion, { type FaqItem } from "./FaqAccordion";
import { ClockIcon } from "./Icons";

/**
 * Section "guide complet" optionnelle, ajoutee APRES le contenu
 * transactionnel d'une page service (hero, tarifs, avis, FAQ courte) sans
 * le remplacer. Reprend la logique de mise en page des articles de blog
 * (sommaire fixe, sections numerotees) pour approfondir un service precis.
 *
 * La FAQ passee ici est uniquement visuelle (FaqAccordion) : le schema
 * JSON-LD FAQPage reste gere une seule fois au niveau de la page/du
 * template (combiner ce tableau avec la FAQ courte existante avant de
 * l'envoyer a faqSchema(), pour eviter deux schemas FAQPage concurrents
 * sur la meme page).
 */
export default function ServiceGuideSection({
  readingMinutes,
  toc,
  faq,
  faqTitle = "Questions complémentaires sur ce guide",
  children,
}: {
  readingMinutes: number;
  toc: ArticleTocItem[];
  faq: FaqItem[];
  faqTitle?: string;
  children: ReactNode;
}) {
  return (
    <section className="bg-white border-y border-navy/10 py-12">
      <div className="mx-auto max-w-5xl px-4">
        <div className="max-w-3xl mx-auto mb-8 text-center">
          <h2 className="font-heading text-2xl font-bold text-navy">Guide complet</h2>
          <p className="flex items-center justify-center gap-1.5 text-xs text-slate mt-2">
            <ClockIcon className="w-3.5 h-3.5" />
            {readingMinutes} min de lecture
          </p>
        </div>
        <ArticleLayout toc={toc}>
          {children}
          <div>
            <h3 className="font-heading text-xl font-bold text-navy mb-4">{faqTitle}</h3>
            <FaqAccordion items={faq} />
          </div>
        </ArticleLayout>
      </div>
    </section>
  );
}
