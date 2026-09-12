import { KeyIcon } from "./Icons";

/**
 * Prise de position personnelle de l'artisan sur le sujet de l'article
 * (distinct de QuoteBlock, qui porte une citation fixe reutilisee sur
 * plusieurs pages du site). Le texte differe a chaque article.
 */
export default function ArticleOpinion({ quote }: { quote: string }) {
  return (
    <div className="relative bg-cream rounded-xl border border-navy/10 px-6 py-8 sm:px-10">
      <span
        className="block font-heading text-5xl text-steel/20 leading-none select-none"
        aria-hidden="true"
      >
        &laquo;
      </span>
      <p className="font-heading italic font-medium text-lg text-navy leading-snug -mt-3">
        {quote}
      </p>
      <div className="flex items-center gap-2 mt-4">
        <KeyIcon className="w-3.5 h-3.5 text-steel" />
        <p className="text-sm text-slate">Benoît, Votre Artisan Français</p>
      </div>
    </div>
  );
}
