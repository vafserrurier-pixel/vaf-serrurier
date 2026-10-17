import type { Metadata } from "next";
import Link from "next/link";
import SectorPageTemplate from "@/components/SectorPageTemplate";
import ArticleTable from "@/components/ArticleTable";
import { zones } from "@/lib/business";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-nice-ouest/",
  title: "Serrurier Nice Ouest 06200 : Fabron, Arénas, Caucade",
  description:
    "Serrurier dans l'ouest de Nice 24h/24 : Fabron, Carras, Californie, Caucade, Arénas, Saint-Isidore. Sur place en 30 min, prix affichés. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const intro = [
  "Porte claquée en rentrant de la plage à Carras, cylindre forcé dans un bureau de l'Arénas, maison de Bellet à sécuriser : j'interviens dans tout l'ouest de Nice, de la Promenade des Anglais jusqu'aux vignes de Bellet. 24h/24 et 7j/7, en 30 minutes en urgence, avec des prix affichés et annoncés avant de partir.",
];

// Les 16 quartiers du tableau (même liste que zones.ouest dans lib/business.ts).
const quartierRows: [string, string][] = [
  ["Californie", "Avenue de la Californie, la Promenade côté ouest"],
  ["Carras", "Le front de mer de Carras"],
  ["Ferber", "Le bord de mer, à l'approche de l'aéroport"],
  ["La Lanterne", "Avenue de la Lanterne"],
  ["Fabron", "Musée international d'Art naïf, avenue de Fabron"],
  ["Corniche Fleurie", "Les hauteurs au-dessus de Fabron"],
  ["Caucade", "Cimetière de Caucade"],
  ["Sainte-Marguerite", "Avenue Sainte-Marguerite"],
  ["Saint-Augustin", "Gare de Nice-Saint-Augustin"],
  ["Arénas", "Le quartier d'affaires face à l'aéroport Nice Côte d'Azur"],
  ["Les Moulins", "Le quartier des Moulins, en renouvellement"],
  ["L'Archet", "Hôpital de l'Archet"],
  ["Saint-Antoine", "Route de Saint-Antoine-de-Ginestière"],
  ["Saint-Isidore", "Le stade Allianz Riviera"],
  ["Lingostière", "Le centre commercial de Lingostière, la vallée du Var"],
  ["Bellet", "Les vignes de l'appellation Bellet, Saint-Roman-de-Bellet"],
];

const quartiersContent = (
  <>
    <h2 className="font-heading text-2xl font-bold text-navy mb-3">Les quartiers de l&apos;ouest où j&apos;interviens</h2>
    <p className={pClass}>
      L&apos;ouest de Nice va du front de mer, entre la Promenade et l&apos;aéroport, jusqu&apos;aux collines et à la
      plaine du Var.
    </p>
    <ArticleTable headers={["Quartier", "Repères"]} rows={quartierRows.map(([quartier, reperes]) => [quartier, reperes])} />
    <p className="text-slate leading-relaxed mt-4">
      Juste de l&apos;autre côté du Var, j&apos;interviens aussi à{" "}
      <Link href="/serrurier-saint-laurent-du-var/" className={linkClass}>
        Saint-Laurent-du-Var
      </Link>{" "}
      et à{" "}
      <Link href="/serrurier-cagnes-sur-mer/" className={linkClass}>
        Cagnes-sur-Mer
      </Link>
      , aux mêmes prix qu&apos;à Nice, déplacement compris.
    </p>
  </>
);

const blocks = [
  {
    heading: "Le bord de mer : les résidences des années 60 à 80",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          De la Californie à Ferber, en passant par Carras et la Lanterne, le bord de mer est bordé de grandes
          résidences construites dans les années 1960 à 1980, souvent avec gardien et digicode. Beaucoup de portes
          palières y sont d&apos;origine : des portes légères, parfois creuses, avec un simple cylindre européen.
        </p>
        <p className={pClass}>
          Une porte creuse ne se renforce pas comme une porte en bois massif. Je regarde d&apos;abord la porte, puis je
          propose :
        </p>
        <ArticleTable
          headers={["État de la porte", "Ce que je propose", "Prix TTC posé"]}
          rows={[
            [
              "Porte en bon état, seul le cylindre est exposé",
              <>
                <Link href="/poignee-blindee-nice/" className={linkClass}>
                  Poignée blindée
                </Link>
                , avec cornières anti-pince si la porte a du jeu
              </>,
              "349 €, ou 618 € avec les cornières",
            ],
            [
              "Clés perdues ou cylindre usé",
              <>
                <Link href="/changement-serrure-nice/" className={linkClass}>
                  Cylindre neuf
                </Link>
                , clés remises sur place
              </>,
              "Dès 249 €",
            ],
            [
              "Porte creuse, abîmée ou déformée",
              <Link key="bloc" href="/installation-porte-blindee-nice/" className={linkClass}>
                Bloc-porte blindé neuf
              </Link>,
              "Dès 3 490 €",
            ],
          ]}
        />
      </>
    ),
  },
  {
    heading: "L'Arénas et la plaine du Var : bureaux et locaux professionnels",
    paragraphs: [
      <>
        L&apos;Arénas et la plaine du Var concentrent des bureaux, des agences et des locaux d&apos;activité. Pour une
        entreprise, je change le cylindre d&apos;une porte d&apos;entrée de bureau ou de local, j&apos;ouvre une porte
        bloquée le matin, et je fais la{" "}
        <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
          mise en sécurité
        </Link>{" "}
        après une effraction pour que le local ferme le soir même. Je vous remets une facture détaillée au nom de
        l&apos;entreprise.
      </>,
    ],
  },
  {
    heading: "Les collines et la plaine : Bellet, Lingostière, Saint-Isidore",
    paragraphs: [
      <>
        Plus on monte vers Bellet, Saint-Antoine ou Lingostière, plus les maisons sont isolées, parfois entourées de
        vignes ou de jardins. Une maison isolée reste plus longtemps sans témoin : une porte qui ne ferme que sur un
        point se renforce avec une{" "}
        <Link href="/serrure-carenee-nice/" className={linkClass}>
          serrure carénée
        </Link>{" "}
        5 points (1 249 €), et une porte en bois sain avec un{" "}
        <Link href="/blindage-porte-nice/" className={linkClass}>
          blindage de porte
        </Link>{" "}
        (dès 2 689 €). Même là-haut, j&apos;arrive en 30 minutes en urgence.
      </>,
    ],
  },
  {
    heading: "Avant de partir en vacances depuis l'aéroport",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          L&apos;ouest de Nice est à deux pas de l&apos;aéroport. Avant de partir, trois vérifications évitent bien des
          appels :
        </p>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">Fermez à double tour</strong>, et vérifiez que la porte est bien verrouillée,
            pas seulement claquée.
          </li>
          <li>
            <strong className="text-navy">Ne laissez pas de clé</strong> sous le paillasson, dans un pot de fleurs ou
            dans la boîte aux lettres : c&apos;est le premier endroit regardé.
          </li>
          <li>
            <strong className="text-navy">Confiez un double</strong> à une personne de confiance, qui peut passer
            relever le courrier.
          </li>
        </ul>
        <p className={pClass}>
          Et si vous revenez d&apos;un voyage en découvrant une porte forcée, voici quoi faire{" "}
          <Link href="/blog/que-faire-apres-cambriolage-nice/" className={linkClass}>
            après un cambriolage
          </Link>
          , avant même de m&apos;appeler.
        </p>
      </>
    ),
  },
  {
    heading: "Exemple type",
    paragraphs: [
      <>
        Exemple type, une situation fréquente et non un client précis : un lundi matin, le responsable d&apos;un bureau
        de l&apos;Arénas trouve le cylindre de la porte d&apos;entrée forcé, sans que personne soit entré. Je remplace
        le cylindre par un cylindre neuf, avec des clés neuves pour l&apos;équipe : à partir de 249 € TTC, prix annoncé
        au téléphone avant de partir. Il garde la facture détaillée pour l&apos;assurance de l&apos;entreprise. Le
        détail de tous mes prix est sur{" "}
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
    question: "Quels quartiers de l'ouest de Nice couvrez-vous ?",
    answer:
      "Tout l'ouest : Californie, Carras, Ferber, la Lanterne, Fabron, la Corniche Fleurie, Sainte-Marguerite, Caucade, l'Arénas, Saint-Augustin, les Moulins, l'Archet, Saint-Antoine, Saint-Isidore, Lingostière et Bellet.",
  },
  {
    question: "En combien de temps arrivez-vous dans l'ouest de Nice ?",
    answer: "En urgence, en 30 minutes, 24h/24 et 7j/7, du bord de mer jusqu'à Bellet.",
  },
  {
    question: "Ma porte palière date des années 70 : que faire pour la sécuriser ?",
    answer:
      "Ça dépend de son état. Si elle est en bon état, une poignée blindée (349 €), avec des cornières anti-pince si elle a du jeu (618 € les deux). Si elle est creuse, abîmée ou déformée, un bloc-porte blindé neuf (dès 3 490 €).",
  },
  {
    question: "Intervenez-vous pour les bureaux et les locaux de l'Arénas ?",
    answer:
      "Oui : changement de cylindre, ouverture de porte bloquée et mise en sécurité après effraction, avec une facture détaillée au nom de l'entreprise.",
  },
  {
    question: "Je pars en vacances : comment éviter un cambriolage ?",
    answer:
      "Fermez à double tour, ne cachez pas de clé près de la porte, et confiez un double à une personne de confiance. Pour aller plus loin, une poignée blindée protège le cylindre.",
  },
  {
    question: "Vos prix sont-ils différents dans l'ouest ?",
    answer:
      "Non, ce sont les mêmes dans tout Nice : 149 € en journée pour une ouverture, 189 € ou 209 € le soir, le week-end et les jours fériés, déplacement compris.",
  },
  {
    question: "Venez-vous jusqu'à Bellet et Lingostière ?",
    answer: "Oui, avec le même délai de 30 minutes en urgence et les mêmes prix que dans le reste de Nice.",
  },
];

export default function SerrurierNiceOuestPage() {
  return (
    <SectorPageTemplate
      title="Serrurier à Nice Ouest"
      h1="Serrurier à Nice Ouest : Fabron, Carras, Californie, Arénas"
      sectorKey="ouest"
      intro={intro}
      blocks={blocks}
      faq={faq}
      quartiers={zones.ouest}
      quartiersContent={quartiersContent}
      areaServedPlaces={quartierRows.map(([quartier]) => quartier)}
      hideReinforcementNote
      faqAfterReviews
      path="/serrurier-nice-ouest/"
    />
  );
}
