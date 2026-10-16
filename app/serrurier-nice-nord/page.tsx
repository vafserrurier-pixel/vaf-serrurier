import type { Metadata } from "next";
import Link from "next/link";
import SectorPageTemplate from "@/components/SectorPageTemplate";
import ArticleTable from "@/components/ArticleTable";
import { zones } from "@/lib/business";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-nice-nord/",
  title: "Serrurier Nice Nord 06100 : Borriglione, Gairaut, Rimiez",
  description:
    "Serrurier dans le nord de Nice 24h/24 : Borriglione, Saint-Barthélémy, Gairaut, Rimiez, Saint-Pancrace. Sur place en 30 min, prix affichés. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const intro = [
  "Porte claquée dans un studio de Valrose, clé coincée dans la serrure à Saint-Barthélémy, maison de Gairaut à sécuriser : j'interviens dans tout le nord de Nice, du tramway de Borriglione jusqu'aux collines de Saint-Pancrace. 24h/24 et 7j/7, en 30 minutes en urgence, avec des prix affichés et annoncés avant de partir.",
];

// Les 16 quartiers du tableau (même liste que zones.nord dans lib/business.ts).
const quartierRows: [string, string][] = [
  ["Saint-Maurice", "Église Sainte-Jeanne-d'Arc, entre la Libération et Cimiez"],
  ["Valrose", "Campus universitaire et château de Valrose"],
  ["Borriglione", "Avenue Borriglione, station de tramway"],
  ["Gorbella", "Boulevard Gorbella, station de tramway"],
  ["Saint-Barthélémy", "Avenue Saint-Barthélémy, au pied des collines"],
  ["Le Ray", "L'ancien stade du Ray et son nouveau quartier"],
  ["Las Planas", "Au nord du Ray, le long du tramway"],
  ["Brancolar", "Les nouvelles résidences de l'ancien site Enedis"],
  ["Chambrun", "Parc Chambrun"],
  ["Les Poètes", "Le quartier résidentiel près de Chambrun"],
  ["Rimiez", "Les hauteurs au-dessus de Cimiez"],
  ["Gairaut", "La cascade de Gairaut, route de Gairaut"],
  ["Saint-Pancrace", "Chapelle Saint-Pancrace, route de Saint-Pancrace"],
  ["Pessicart", "Les collines du nord-ouest"],
  ["Corniche des Oliviers", "Les collines résidentielles du nord"],
  ["Mantega", "Les collines résidentielles du nord"],
];

const quartiersContent = (
  <>
    <h2 className="font-heading text-2xl font-bold text-navy mb-3">Les quartiers du nord où j&apos;interviens</h2>
    <p className={pClass}>
      Le nord de Nice, c&apos;est deux mondes : en bas, les quartiers denses le long du tramway, en haut, les collines
      et leurs maisons. Cimiez, tout proche, est sur{" "}
      <Link href="/serrurier-nice-centre/" className={linkClass}>
        ma page Centre
      </Link>
      .
    </p>
    <ArticleTable headers={["Quartier", "Repères"]} rows={quartierRows.map(([quartier, reperes]) => [quartier, reperes])} />
  </>
);

const blocks = [
  {
    heading: "Le long du tramway : immeubles, studios et colocations",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          De Borriglione à Las Planas, en passant par Gorbella, Saint-Barthélémy et Le Ray, le nord de Nice est fait
          d&apos;immeubles et de copropriétés, desservis par la ligne 1 du tramway. Le campus de Valrose attire de
          nombreux étudiants, logés en studio ou en colocation.
        </p>
        <p className={pClass}>
          Pour un propriétaire qui loue, la situation classique est la fin de bail : un jeu de clés manque, ou vous ne
          savez pas combien de doubles ont été faits. Le plus sûr est de{" "}
          <Link href="/changement-serrure-nice/" className={linkClass}>
            changer le cylindre
          </Link>{" "}
          avant d&apos;accueillir le locataire suivant. Pour un étudiant qui a claqué sa porte, l&apos;ouverture est au
          même prix que partout dans Nice : 149 € en journée, 189 € le soir et le week-end.
        </p>
      </>
    ),
  },
  {
    heading: "Les collines : maisons, villas et plusieurs portes à protéger",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          À Gairaut, Saint-Pancrace, Pessicart, Rimiez ou sur la Corniche des Oliviers, beaucoup de maisons ont
          plusieurs accès : porte d&apos;entrée, porte de garage, porte de service. Un cambrioleur ne s&apos;attaque
          pas à la porte la plus solide, il cherche la plus faible. Quand je viens pour une porte, je regarde aussi les
          autres accès si vous me le demandez.
        </p>
        <p className={pClass}>Selon l&apos;état de la porte d&apos;entrée :</p>
        <ul className={listClass}>
          <li>
            une{" "}
            <strong className="text-navy">
              <Link href="/poignee-blindee-nice/" className={linkClass}>
                poignée blindée
              </Link>
            </strong>{" "}
            protège un cylindre qui dépasse (349 €) ;
          </li>
          <li>
            une{" "}
            <strong className="text-navy">
              <Link href="/serrure-carenee-nice/" className={linkClass}>
                serrure carénée
              </Link>
            </strong>{" "}
            5 points ferme une porte qui ne tient que sur un point (1 249 €) ;
          </li>
          <li>
            un{" "}
            <strong className="text-navy">
              <Link href="/blindage-porte-nice/" className={linkClass}>
                blindage de porte
              </Link>
            </strong>{" "}
            renforce une porte en bois sain que vous voulez garder (dès 2 689 €).
          </li>
        </ul>
        <p className={pClass}>
          Après une tentative d&apos;effraction, je fais d&apos;abord la{" "}
          <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
            mise en sécurité
          </Link>{" "}
          pour que la maison ferme le soir même, puis on choisit le renfort au calme.
        </p>
      </>
    ),
  },
  {
    heading: "Trouver votre maison vite : ce qu'il faut me dire",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Sur les routes des collines, les numéros ne sont pas toujours visibles et certaines maisons sont au bout
          d&apos;un chemin privé. Pour que j&apos;arrive en 30 minutes, donnez-moi au téléphone :
        </p>
        <ul className={listClass}>
          <li>l&apos;adresse exacte et un repère : un virage, un portail de couleur, une boîte aux lettres ;</li>
          <li>si la maison est au bout d&apos;un chemin, l&apos;endroit où je peux me garer ;</li>
          <li>si vous pouvez, votre position ou une photo de la serrure par WhatsApp.</li>
        </ul>
      </>
    ),
  },
  {
    heading: "Résidences récentes du Brancolar : gardez votre carte de propriété",
    paragraphs: [
      "Dans les résidences récentes, comme celles du Brancolar, les portes sont souvent équipées de cylindres haute sécurité livrés avec une carte de propriété. Cette carte sert à commander des doubles de clés : sans elle, on ne peut pas en faire faire. Rangez-la ailleurs que dans votre trousseau, et si vous l'avez perdue, je vous conseille sur les solutions possibles.",
    ],
  },
  {
    heading: "Exemple type",
    paragraphs: [
      <>
        Exemple type, une situation fréquente et non un client précis : un dimanche matin, à Saint-Barthélémy, une{" "}
        <Link href="/blog/cle-cassee-serrure-que-faire-nice/" className={linkClass}>
          clé cassée
        </Link>{" "}
        reste coincée dans la serrure de la porte d&apos;entrée. La propriétaire n&apos;a pas forcé avec une pince, ce
        qui facilite l&apos;extraction. J&apos;extrais le morceau de clé, je teste le cylindre : il fonctionne, rien à
        changer. Coût : 189 €, le tarif du dimanche pour une clé cassée, annoncé au téléphone. Le détail de tous mes
        prix est sur{" "}
        <Link href="/tarifs-serrurier-nice/" className={linkClass}>
          ma page tarifs
        </Link>
        .
      </>,
    ],
  },
];

const faq = [
  {
    question: "Quels quartiers du nord de Nice couvrez-vous ?",
    answer:
      "Tout le nord : Saint-Maurice, Valrose, Borriglione, Gorbella, Saint-Barthélémy, Le Ray, Las Planas, Brancolar, Chambrun, les Poètes, Rimiez, Gairaut, Saint-Pancrace, Pessicart, la Corniche des Oliviers et Mantega.",
  },
  {
    question: "En combien de temps arrivez-vous dans le nord de Nice ?",
    answer: "En urgence, en 30 minutes, 24h/24 et 7j/7, en bas comme sur les collines.",
  },
  {
    question: "Ma maison est au bout d'un chemin sur les collines : comment me trouvez-vous ?",
    answer:
      "Donnez-moi au téléphone l'adresse, un repère visible et l'endroit où me garer, ou envoyez votre position par WhatsApp.",
  },
  {
    question: "Je loue un studio près de Valrose : faut-il changer le cylindre entre deux locataires ?",
    answer:
      "C'est le plus sûr quand un jeu de clés manque ou que vous ne savez pas combien de doubles existent. Le changement de cylindre démarre à 249 € TTC.",
  },
  {
    question: "J'ai perdu la carte de propriété de mes clés : que faire ?",
    answer:
      "Sans la carte, on ne peut pas commander de doubles. Appelez-moi : je vous conseille sur les solutions possibles selon votre cylindre.",
  },
  {
    question: "Vos prix sont-ils différents dans le nord ?",
    answer:
      "Non, ce sont les mêmes dans tout Nice : 149 € en journée pour une ouverture, 189 € ou 209 € le soir, le week-end et les jours fériés, déplacement compris.",
  },
  {
    question: "Intervenez-vous à Cimiez ?",
    answer: "Oui, Cimiez fait partie de mon secteur Centre, avec les mêmes prix et le même délai de 30 minutes.",
  },
];

export default function SerrurierNiceNordPage() {
  return (
    <SectorPageTemplate
      title="Serrurier à Nice Nord"
      h1="Serrurier à Nice Nord : Borriglione, Saint-Barthélémy, Gairaut, Rimiez"
      sectorKey="nord"
      intro={intro}
      blocks={blocks}
      faq={faq}
      quartiers={zones.nord}
      quartiersContent={quartiersContent}
      areaServedPlaces={quartierRows.map(([quartier]) => quartier)}
      hideReinforcementNote
      faqAfterReviews
      path="/serrurier-nice-nord/"
    />
  );
}
