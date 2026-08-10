export default function JsonLd({ data }: { data: object }) {
  // JSON.stringify ne s'échappe pas de "</script>" — un champ contenant ce
  // texte littéral (avis externe, contenu futur non maîtrisé) casserait le
  // tag et permettrait d'injecter du HTML/JS. < reste un JSON valide.
  const json = JSON.stringify(data).replace(/</g, "\\u003c");
  return (
    <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: json }} />
  );
}
