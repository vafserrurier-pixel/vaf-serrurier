import type { Locale } from "@/lib/locale";

const brandsByLocale = {
  fr: [
    {
      name: "Fichet",
      text: "Référence française de la haute sécurité, cylindres et serrures certifiés reconnus pour leur résistance à l'effraction.",
      url: "https://www.fichet-pointfort.com/fr/fr",
    },
    {
      name: "Picard",
      text: "Fabricant français historique, large gamme de cylindres et serrures du standard au haut de gamme.",
      url: "https://www.picard-serrures.com/global/fr",
    },
    {
      name: "Heraclès",
      text: "Cylindres et serrures reconnus pour leur robustesse, courants sur les portes d'entrée en France.",
      url: "https://www.heracles.fr/",
    },
    {
      name: "Cisa",
      text: "Fabricant italien de référence, serrures mécaniques et électroniques utilisées en résidentiel comme en collectif.",
      url: "https://www.cisa.com/fr/",
    },
    {
      name: "Vak",
      text: "Marque de cylindres haute sécurité développée par Picard, une alternative solide sur de nombreux modèles de porte.",
      url: "https://www.picard-serrures.com/global/fr",
    },
  ],
  en: [
    {
      name: "Fichet",
      text: "A French benchmark in high security, certified cylinders and locks known for their resistance to forced entry.",
      url: "https://www.fichet-pointfort.com/fr/fr",
    },
    {
      name: "Picard",
      text: "A long-standing French manufacturer, with a wide range of cylinders and locks from standard to high-end.",
      url: "https://www.picard-serrures.com/global/fr",
    },
    {
      name: "Heraclès",
      text: "Cylinders and locks known for their sturdiness, common on front doors across France.",
      url: "https://www.heracles.fr/",
    },
    {
      name: "Cisa",
      text: "A leading Italian manufacturer, mechanical and electronic locks used in both homes and apartment buildings.",
      url: "https://www.cisa.com/fr/",
    },
    {
      name: "Vak",
      text: "A high-security cylinder brand developed by Picard, a solid alternative on many door models.",
      url: "https://www.picard-serrures.com/global/fr",
    },
  ],
};

const intro = {
  fr: "Je travaille avec les grandes marques de serrurerie du marché, quel que soit le modèle déjà installé chez vous. Je vous oriente vers la solution la plus cohérente avec votre porte, sans vous vendre une marque plutôt qu'une autre.",
  en: "I work with the major locksmithing brands on the market, whatever model is already installed at your place. I guide you toward the solution that best fits your door, without pushing one brand over another.",
};

export default function BrandsSection({ locale = "fr" }: { locale?: Locale }) {
  const brands = brandsByLocale[locale];
  return (
    <div>
      <p className="text-slate leading-relaxed max-w-2xl mx-auto text-center mb-8">
        {intro[locale]}
      </p>
      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-5">
        {brands.map((brand) => (
          <a
            key={brand.name}
            href={brand.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block bg-white rounded-lg border border-navy/10 p-4 text-center hover:border-steel hover:shadow-sm transition-all"
          >
            <p className="font-heading font-bold text-navy mb-1.5">{brand.name}</p>
            <p className="text-xs text-slate leading-relaxed">{brand.text}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
