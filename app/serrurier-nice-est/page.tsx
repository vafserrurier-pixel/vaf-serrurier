import type { Metadata } from "next";
import Link from "next/link";
import SectorPageTemplate from "@/components/SectorPageTemplate";
import ArticleTable from "@/components/ArticleTable";
import { zones } from "@/lib/business";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-nice-est/",
  title: "Serrurier Nice Est 06300 : Port, Riquier, Mont Boron",
  description:
    "Serrurier dans l'est de Nice 24h/24 : Port, Riquier, Saint-Roch, Pasteur, Ariane, Mont Boron. Sur place en 30 min, prix affichés. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const intro = [
  "Clés oubliées en sortant d'un restaurant du port, cylindre forcé à Riquier, villa du Mont Boron à sécuriser avant de partir : l'est de Nice, c'est mon secteur. Ma boutique est au 2 rue Antoine Gautier, à Nice, dans le 06300. J'interviens 24h/24 et 7j/7, en 30 minutes en urgence, avec des prix affichés et annoncés avant de partir.",
];

// Les 8 quartiers du tableau (même liste que zones.est dans lib/business.ts).
const quartierRows: [string, string][] = [
  ["Le Port", "Port Lympia, place de l'Île-de-Beauté, église Notre-Dame-du-Port, quai des Docks, rue Bonaparte"],
  ["Riquier", "Gare de Riquier, avenue de la République"],
  ["Saint-Roch", "Route de Turin, le 109 (anciens abattoirs)"],
  ["Pasteur", "Hôpital Pasteur, abbaye de Saint-Pons, terminus du tramway"],
  ["Bon Voyage", "Entre Saint-Roch et Pasteur"],
  ["L'Ariane", "Au nord de Pasteur, le long du Paillon"],
  ["Mont Boron", "Parc forestier du Mont Boron, boulevard du Mont-Boron, le Cap de Nice"],
  ["Mont Alban", "Fort du Mont-Alban, au sommet de la colline"],
];

const quartiersContent = (
  <>
    <h2 className="font-heading text-2xl font-bold text-navy mb-3">Les quartiers de l&apos;est où j&apos;interviens</h2>
    <ArticleTable headers={["Quartier", "Repères"]} rows={quartierRows.map(([quartier, reperes]) => [quartier, reperes])} />
    <p className="text-slate leading-relaxed mt-4">
      Au-delà du Mont Boron, j&apos;interviens aussi à{" "}
      <Link href="/serrurier-villefranche-sur-mer/" className={linkClass}>
        Villefranche-sur-Mer
      </Link>
      ,{" "}
      <Link href="/serrurier-beaulieu-sur-mer/" className={linkClass}>
        Beaulieu-sur-Mer
      </Link>{" "}
      et{" "}
      <Link href="/serrurier-eze/" className={linkClass}>
        Èze
      </Link>
      , aux mêmes prix qu&apos;à Nice, déplacement compris.
    </p>
  </>
);

const blocks = [
  {
    heading: "Ma boutique est dans ce secteur",
    paragraphs: [
      "Pour l'est de Nice, je pars de ma boutique du 2 rue Antoine Gautier, à deux pas du port et de la place Garibaldi. J'interviens partout dans Nice, mais l'est est le secteur le plus proche de ma boutique. En urgence, j'arrive en 30 minutes, du quai des Docks au sommet du Mont Boron.",
    ],
  },
  {
    heading: "Le port : appartements, meublés et locations de courte durée",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Autour du port Lympia et de la rue Bonaparte, beaucoup d&apos;appartements sont loués en meublé ou à la
          semaine. Pour un propriétaire ou une conciergerie, deux situations reviennent :
        </p>
        <ul className={listClass}>
          <li>
            <strong className="text-navy">Le voyageur enfermé dehors</strong>, souvent tard le soir : j&apos;ouvre la
            porte claquée sans dégât, au prix annoncé avant de partir.
          </li>
          <li>
            <strong className="text-navy">Les clés qui ne reviennent pas</strong> : quand un jeu de clés est perdu ou
            n&apos;est pas rendu,{" "}
            <Link href="/changement-serrure-nice/" className={linkClass}>
              changez le cylindre
            </Link>{" "}
            avant l&apos;arrivée suivante. Vous repartez avec des clés neuves dont vous savez où elles sont.
          </li>
        </ul>
        <p className={pClass}>
          Pour une copropriété ou un propriétaire qui gère plusieurs logements, un{" "}
          <Link href="/agences-syndics-nice/" className={linkClass}>
            organigramme de clés
          </Link>{" "}
          permet d&apos;ouvrir plusieurs portes avec une seule clé, sans donner accès à tout le monde.
        </p>
      </>
    ),
  },
  {
    heading: "Mont Boron, Mont Alban, Cap de Nice : les villas des hauteurs",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Sur les hauteurs, beaucoup de villas et d&apos;appartements sont des résidences secondaires, fermés plusieurs
          mois par an. Une porte qui reste longtemps sans personne doit résister plus longtemps. Selon l&apos;état de
          la porte, je propose :
        </p>
        <ArticleTable
          headers={["Situation", "Ce que je propose", "Prix TTC posé"]}
          rows={[
            [
              "Porte saine, cylindre qui dépasse",
              <>
                <Link href="/poignee-blindee-nice/" className={linkClass}>
                  Poignée blindée
                </Link>
                , avec cornières anti-pince si la porte a du jeu
              </>,
              "349 €, ou 618 € avec les cornières",
            ],
            [
              "Porte saine qui ne ferme que sur un point",
              <Link key="carenee" href="/serrure-carenee-nice/" className={linkClass}>
                Serrure carénée 5 points
              </Link>,
              "1 249 €",
            ],
            [
              "Porte en bois sain que vous voulez garder",
              <Link key="blindage" href="/blindage-porte-nice/" className={linkClass}>
                Blindage de porte
              </Link>,
              "Dès 2 689 €",
            ],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          Après une tentative d&apos;effraction pendant votre absence, je fais d&apos;abord la{" "}
          <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
            mise en sécurité
          </Link>{" "}
          pour que la villa ferme le soir même, puis on choisit le renfort au calme.
        </p>
      </>
    ),
  },
  {
    heading: "Riquier, Saint-Roch, Pasteur, Bon Voyage, l'Ariane : les immeubles d'habitation",
    paragraphs: [
      "Ces quartiers sont surtout faits d'immeubles d'habitation, des immeubles anciens de Riquier aux grands ensembles de l'Ariane. Les portes palières sont le plus souvent standard, avec un cylindre européen. Les interventions les plus courantes : porte claquée, clés perdues, cylindre usé ou forcé.",
      "Si vous êtes locataire, retenez une règle simple : quand vous avez perdu vos clés ou oublié de les prendre, l'intervention est en général à votre charge ; quand la serrure lâche par usure normale, c'est au propriétaire. Prévenez votre bailleur avant de faire changer le cylindre, et gardez la facture détaillée que je vous remets.",
    ],
  },
  {
    heading: "Exemple type",
    paragraphs: [
      <>
        Exemple type, une situation fréquente et non un client précis : un mardi midi, un locataire de Riquier se rend
        compte qu&apos;il a perdu ses clés. Sa porte est fermée à clé, et il ne peut pas savoir qui les a trouvées.
        J&apos;ouvre la{" "}
        <Link href="/ouverture-de-porte-nice/" className={linkClass}>
          porte fermée à clé
        </Link>{" "}
        en perçant le cylindre, jamais la porte, puis je pose un cylindre neuf avec des clés neuves : 149 € pour
        l&apos;ouverture et 249 € pour le cylindre standard, soit 398 € TTC en journée, annoncés au téléphone. Il garde
        la facture pour son bailleur. Le détail de tous mes prix est sur{" "}
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
    question: "Quels quartiers de l'est de Nice couvrez-vous ?",
    answer:
      "Tout l'est : le Port, Riquier, Saint-Roch, Pasteur, Bon Voyage, l'Ariane, le Mont Boron et le Mont Alban, jusqu'au Cap de Nice.",
  },
  {
    question: "En combien de temps arrivez-vous dans l'est de Nice ?",
    answer:
      "En urgence, en 30 minutes, 24h/24 et 7j/7. Ma boutique est dans ce secteur, au 2 rue Antoine Gautier.",
  },
  {
    question: "Je loue un appartement au port : que faire si un voyageur ne rend pas les clés ?",
    answer:
      "Faites changer le cylindre avant l'arrivée suivante : vous repartez avec des clés neuves. Le changement de cylindre démarre à 249 € TTC.",
  },
  {
    question: "Ma villa du Mont Boron reste fermée plusieurs mois : comment la protéger ?",
    answer:
      "Selon l'état de la porte : une poignée blindée avec des cornières anti-pince (618 €), une serrure carénée 5 points (1 249 €) ou un blindage de porte (dès 2 689 €). Je regarde la porte avant de vous conseiller.",
  },
  {
    question: "Je suis locataire et j'ai perdu mes clés : qui paie ?",
    answer:
      "En général le locataire, quand les clés ont été perdues ou oubliées. Si la serrure lâche par usure normale, c'est au propriétaire. Prévenez votre bailleur avant de changer le cylindre.",
  },
  {
    question: "Vos prix sont-ils différents dans l'est ?",
    answer:
      "Non, ce sont les mêmes dans tout Nice : 149 € en journée pour une ouverture, 189 € ou 209 € le soir, le week-end et les jours fériés, déplacement compris.",
  },
  {
    question: "Travaillez-vous avec les conciergeries et les syndics du secteur ?",
    answer:
      "Oui, avec les mêmes prix affichés : ouvertures pour les voyageurs, changements de cylindre entre deux locations, portes de hall et organigrammes de clés.",
  },
];

export default function SerrurierNiceEstPage() {
  return (
    <SectorPageTemplate
      title="Serrurier à Nice Est"
      h1="Serrurier à Nice Est : le Port, Riquier, Pasteur, Mont Boron"
      sectorKey="est"
      intro={intro}
      blocks={blocks}
      faq={faq}
      quartiers={zones.est}
      quartiersContent={quartiersContent}
      areaServedPlaces={quartierRows.map(([quartier]) => quartier)}
      hideReinforcementNote
      faqAfterReviews
      path="/serrurier-nice-est/"
    />
  );
}
