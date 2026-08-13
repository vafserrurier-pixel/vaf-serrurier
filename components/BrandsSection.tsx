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
    {
      name: "Vachette",
      text: "Marque française historique, cylindres et serrures fiables, très répandus sur les portes d'immeuble à Nice.",
      url: "https://www.vachette.fr",
    },
    {
      name: "Bricard",
      text: "Fabricant français reconnu pour ses serrures multipoints et ses cylindres haute sécurité, notamment en copropriété.",
      url: "https://www.bricard.fr",
    },
    {
      name: "Mottura",
      text: "Marque italienne spécialisée dans les serrures à cylindre européen, appréciée pour son bon rapport qualité-prix.",
      url: "https://www.mottura.com",
    },
    {
      name: "Kaba",
      text: "Cylindres haute sécurité d'origine suisse, souvent utilisés en copropriété pour leur gestion fine des clés autorisées.",
      url: "https://www.kaba.fr",
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
    {
      name: "Vachette",
      text: "A long-standing French brand, reliable cylinders and locks, very common on apartment building doors in Nice.",
      url: "https://www.vachette.fr",
    },
    {
      name: "Bricard",
      text: "A French manufacturer known for its multipoint locks and high-security cylinders, especially in apartment buildings.",
      url: "https://www.bricard.fr",
    },
    {
      name: "Mottura",
      text: "An Italian brand specialised in European-profile cylinder locks, valued for good value for money.",
      url: "https://www.mottura.com",
    },
    {
      name: "Kaba",
      text: "Swiss-origin high-security cylinders, often used in apartment buildings for their fine-grained key management.",
      url: "https://www.kaba.fr",
    },
  ],
};

const intro = {
  fr: "Je travaille avec les grandes marques de serrurerie du marché, quel que soit le modèle déjà installé chez vous. Je vous oriente vers la solution la plus cohérente avec votre porte, sans vous vendre une marque plutôt qu'une autre. Selon la gamme, la clé est fournie avec une carte de reproduction ou de propriété, qui limite la copie non autorisée.",
  en: "I work with the major locksmithing brands on the market, whatever model is already installed at your place. I guide you toward the solution that best fits your door, without pushing one brand over another. Depending on the range, the key comes with a reproduction or ownership card, which limits unauthorised copying.",
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
            className="group block bg-white rounded-lg border border-navy/10 p-5 text-center hover:border-steel hover:shadow-sm hover:-translate-y-0.5 transition-all"
          >
            <span
              className="flex items-center justify-center w-11 h-11 rounded-full bg-navy text-cream font-heading font-bold text-lg mx-auto mb-3 shadow-sm group-hover:bg-urgent transition-colors"
              aria-hidden="true"
            >
              {brand.name[0]}
            </span>
            <p className="font-heading font-bold text-navy mb-1.5">{brand.name}</p>
            <p className="text-xs text-slate leading-relaxed">{brand.text}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
