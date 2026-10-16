import type { Metadata } from "next";
import Link from "next/link";
import SectorPageTemplate from "@/components/SectorPageTemplate";
import ArticleTable from "@/components/ArticleTable";
import { zones } from "@/lib/business";
import { buildMetadata } from "@/lib/metadata";

export const metadata: Metadata = buildMetadata({
  path: "/serrurier-nice-centre/",
  title: "Serrurier Nice Centre 06000 : Vieux-Nice, Carré d'Or",
  description:
    "Serrurier dans le centre de Nice 24h/24 : Vieux-Nice, Garibaldi, Carré d'Or, Libération, Cimiez. Sur place en 30 min, prix affichés. Tél. 04 22 13 85 44",
});

const linkClass = "text-steel underline";
const pClass = "text-slate leading-relaxed mb-2";
const listClass = "list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mb-2";

const intro = [
  "Porte claquée rue Droite, clé cassée dans une vieille serrure du Carré d'Or, cylindre forcé à la Libération : j'interviens dans tout le centre de Nice, 24h/24 et 7j/7, en 30 minutes en urgence. Je pars du 2 rue Antoine Gautier, à deux pas de la place Garibaldi. Mes prix sont affichés, identiques dans toute la ville, et annoncés avant que je me déplace.",
];

// Les 19 quartiers du tableau (même liste que zones.centre dans lib/business.ts).
const quartierRows: [string, string][] = [
  ["Vieux-Nice", "Cours Saleya, place Rossetti et la cathédrale Sainte-Réparate, rue Droite, colline du Château"],
  ["Garibaldi", "Place Garibaldi, rue Ségurane et ses antiquaires, rue Cassini"],
  ["Jean-Médecin", "Avenue Jean-Médecin, basilique Notre-Dame, Nice Étoile"],
  ["Carré d'Or", "Rue Paradis, rue Alphonse-Karr, rue Masséna, entre la place Masséna et le boulevard Victor-Hugo"],
  ["Quartier des Musiciens", "Rues Rossini, Gounod, Berlioz et Verdi, autour du boulevard Victor-Hugo"],
  ["Quartier Wilson", "Place Wilson, rue Pastorelli, rue Gioffredo"],
  ["Quartier des Fleurs", "Avenue des Fleurs"],
  ["Baumettes", "Musée des Beaux-Arts, avenue des Baumettes"],
  ["Promenade des Anglais", "Le front de mer, de l'hôtel Negresco au jardin Albert-Ier"],
  ["Saint-Philippe", "Avenue Saint-Philippe, au pied des collines de l'ouest"],
  ["Gambetta", "Boulevard Gambetta, près de la gare Nice-Ville"],
  ["Libération", "Marché de la Libération, ancienne gare du Sud, avenue Malausséna"],
  ["Désambrois", "Avenue Désambrois, entre Jean-Médecin et Carabacel"],
  ["Carabacel", "Boulevard Carabacel, entre le Paillon et Cimiez"],
  ["Parc Impérial", "Cathédrale orthodoxe russe Saint-Nicolas, lycée du Parc Impérial, boulevard du Tzarewitch"],
  ["Cimiez", "Arènes et monastère de Cimiez, musée Matisse, le Régina"],
  ["Magnan", "Rue de France, au débouché du vallon de Magnan sur la Promenade"],
  ["La Madeleine", "Boulevard de la Madeleine, dans la vallée"],
  ["Saint-Pierre-de-Féric", "Les hauteurs au nord-ouest de Magnan"],
];

const quartiersContent = (
  <>
    <h2 className="font-heading text-2xl font-bold text-navy mb-3">Les quartiers du centre où j&apos;interviens</h2>
    <p className={pClass}>
      Le centre de Nice, c&apos;est 19 quartiers très différents, des ruelles du Vieux-Nice aux collines de Cimiez, sur
      les codes postaux 06000, 06100 et 06200 :
    </p>
    <ArticleTable
      headers={["Quartier", "Repères"]}
      rows={quartierRows.map(([quartier, reperes]) => [quartier, reperes])}
    />
    <p className="text-slate leading-relaxed mt-4">
      Le quartier Jean-Médecin a aussi sa propre page : voir ma{" "}
      <Link href="/serrurier-jean-medecin-nice/" className={linkClass}>
        page dédiée au quartier Jean-Médecin
      </Link>
      .
    </p>
  </>
);

const blocks = [
  {
    heading: "Le bâti du centre, et ce qu'il demande",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Le centre concentre les portes les plus variées de la ville. Chaque type demande une approche différente :
        </p>
        <ArticleTable
          headers={["Type d'immeuble", "Où on le trouve", "Ce que je fais le plus souvent"]}
          rows={[
            [
              "Immeubles anciens, portes en bois épaisses, serrures d'époque",
              "Vieux-Nice, Garibaldi",
              <>
                <Link href="/ouverture-de-porte-nice/" className={linkClass}>
                  Ouverture sans dégât
                </Link>
                ,{" "}
                <Link href="/changement-serrure-nice/" className={linkClass}>
                  cylindre adaptable
                </Link>{" "}
                dans la serrure d&apos;origine, ou réparation d&apos;une serrure à{" "}
                <Link href="/blog/remplacer-coffre-a-larder-nice/" className={linkClass}>
                  coffre à larder
                </Link>
              </>,
            ],
            [
              "Immeubles bourgeois, portes palières d'origine",
              "Carré d'Or, Musiciens, Baumettes, Cimiez, Promenade des Anglais",
              <>
                Renfort qui garde l&apos;aspect de la porte :{" "}
                <Link href="/blindage-porte-nice/" className={linkClass}>
                  blindage de porte
                </Link>{" "}
                ou{" "}
                <Link href="/serrure-carenee-nice/" className={linkClass}>
                  serrure carénée
                </Link>
              </>,
            ],
            [
              "Résidences plus récentes, portes blindées ou serrures multipoints",
              "Magnan, La Madeleine, Saint-Pierre-de-Féric, Parc Impérial",
              "Changement de cylindre, cylindre certifié A2P, réglage de la serrure",
            ],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          Sur les immeubles bourgeois, la copropriété tient souvent à l&apos;aspect des portes palières. Le blindage de
          porte garde votre porte d&apos;origine côté palier, la serrure carénée se pose côté intérieur et ne se voit
          pas du couloir. La{" "}
          <Link href="/poignee-blindee-nice/" className={linkClass}>
            poignée blindée
          </Link>
          , elle, se voit depuis le palier : si votre règlement est strict, vérifiez auprès du syndic avant la pose.
        </p>
        <p className={pClass}>
          Dans les serrures d&apos;origine Fichet, Picard ou Bricard, très présentes dans les immeubles anciens du
          centre, je pose souvent un cylindre adaptable : la serrure reste en place, seul le cylindre change.
        </p>
      </>
    ),
  },
  {
    heading: "Vieux-Nice et rues piétonnes : comment j'arrive vite",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Une grande partie du Vieux-Nice est piétonne, et on ne se gare pas facilement autour du cours Saleya ou de la
          rue Droite. Pour que j&apos;arrive en 30 minutes, donnez-moi au téléphone :
        </p>
        <ul className={listClass}>
          <li>la rue et le numéro exacts, et la place ou le repère le plus proche ;</li>
          <li>le code d&apos;accès de l&apos;immeuble et l&apos;étage ;</li>
          <li>
            si vous pouvez, une photo de la serrure par WhatsApp : j&apos;apporte directement le bon outil ou le bon
            cylindre.
          </li>
        </ul>
      </>
    ),
  },
  {
    heading: "Syndics, agences et commerces du centre",
    paragraphs: [],
    extra: (
      <>
        <p className={pClass}>
          Le centre compte beaucoup de copropriétés gérées par des syndics et d&apos;appartements loués par des
          agences. Je travaille pour eux avec les mêmes prix affichés : porte de hall, serrure de cave ou de local
          poubelles, changement de cylindre entre deux locataires, et{" "}
          <Link href="/agences-syndics-nice/" className={linkClass}>
            organigramme de clés
          </Link>{" "}
          pour les immeubles qui veulent maîtriser qui ouvre quoi.
        </p>
        <p className={pClass}>
          Pour les commerces de l&apos;avenue Jean-Médecin, du Carré d&apos;Or ou du Vieux-Nice, j&apos;interviens sur
          les serrures de boutique : porte d&apos;entrée, cylindre, ouverture le matin avant l&apos;ouverture du
          magasin, ou mise en sécurité{" "}
          <Link href="/mise-en-securite-apres-effraction-nice/" className={linkClass}>
            après une effraction
          </Link>
          . Je ne fais pas les rideaux métalliques.
        </p>
      </>
    ),
  },
  {
    heading: "Mes prix, les mêmes dans tout Nice",
    paragraphs: [],
    extra: (
      <>
        <ArticleTable
          headers={["Intervention", "En journée", "Après 19 h, week-end, jours fériés"]}
          rows={[
            ["Porte claquée", "149 €", "189 €"],
            ["Porte fermée à clé", "149 € + cylindre (dès 249 €)", "209 € + cylindre"],
            ["Changement de cylindre", "Dès 249 €", "Prix annoncé au téléphone"],
            ["Poignée blindée posée", "349 €", "Sur rendez-vous"],
            ["Serrure carénée 5 points posée", "1 249 €", "Sur rendez-vous"],
            ["Blindage de porte", "Dès 2 689 €", "Sur rendez-vous"],
          ]}
        />
        <p className="text-slate leading-relaxed mt-4">
          Prix TTC, déplacement compris dans tout le centre. Pour les serrures Fichet, Picard et Muel, le prix est sur
          devis. Le détail est sur{" "}
          <Link href="/tarifs-serrurier-nice/" className={linkClass}>
            ma page tarifs
          </Link>
          .
        </p>
      </>
    ),
  },
  {
    heading: "Exemple type",
    paragraphs: [
      "Exemple type, une situation fréquente et non un client précis : un samedi soir, une habitante du Vieux-Nice claque sa porte en descendant la poubelle. Ses clés sont restées à l'intérieur, au troisième étage d'un immeuble sans ascenseur, près de la place Rossetti. Au téléphone, elle me donne la rue, le code et l'étage. La porte est simplement claquée, pas fermée à clé : je l'ouvre à la feuille Mika, sans dégât, pour 189 €, le tarif du soir et du week-end annoncé avant de partir.",
    ],
  },
];

const faq = [
  {
    question: "Quels quartiers du centre de Nice couvrez-vous ?",
    answer:
      "Tout le centre : Vieux-Nice, Garibaldi, Jean-Médecin, Carré d'Or, Musiciens, Wilson, Fleurs, Baumettes, Promenade des Anglais, Saint-Philippe, Gambetta, Libération, Désambrois, Carabacel, Parc Impérial, Cimiez, Magnan, La Madeleine et Saint-Pierre-de-Féric.",
  },
  {
    question: "En combien de temps arrivez-vous dans le centre ?",
    answer:
      "En urgence, en 30 minutes, 24h/24 et 7j/7. Je pars du 2 rue Antoine Gautier, près de la place Garibaldi.",
  },
  {
    question: "Comment faites-vous dans les rues piétonnes du Vieux-Nice ?",
    answer:
      "Donnez-moi au téléphone la rue, le numéro, le code et l'étage, et si possible un repère proche : je prévois l'accès avant de partir, pour arriver dans le délai.",
  },
  {
    question: "Savez-vous intervenir sur les serrures anciennes des immeubles du centre ?",
    answer:
      "Oui. J'ouvre sans dégât quand c'est possible, et sur les serrures d'origine Fichet, Picard ou Bricard, je pose souvent un cylindre adaptable : la serrure reste en place, seul le cylindre change.",
  },
  {
    question: "Ma copropriété tient à l'aspect des portes palières : que me conseillez-vous ?",
    answer:
      "Un blindage de porte, qui garde votre porte d'origine côté palier, ou une serrure carénée, qui se pose côté intérieur. La poignée blindée se voit depuis le palier : vérifiez votre règlement avant.",
  },
  {
    question: "Vos prix sont-ils différents dans le centre ?",
    answer:
      "Non, ce sont les mêmes dans tout Nice : 149 € en journée pour une ouverture, 189 € ou 209 € le soir, le week-end et les jours fériés, déplacement compris.",
  },
  {
    question: "Travaillez-vous pour les syndics et les commerces du centre ?",
    answer:
      "Oui : portes de hall, caves, changement de cylindre entre deux locataires, organigramme de clés, et serrures de boutique. Je ne fais pas les rideaux métalliques.",
  },
];

export default function SerrurierNiceCentrePage() {
  return (
    <SectorPageTemplate
      title="Serrurier à Nice Centre"
      h1="Serrurier à Nice Centre : Vieux-Nice, Carré d'Or, Jean-Médecin, Cimiez"
      sectorKey="centre"
      intro={intro}
      blocks={blocks}
      faq={faq}
      quartiers={zones.centre}
      quartiersContent={quartiersContent}
      areaServedPlaces={quartierRows.map(([quartier]) => quartier)}
      hideReinforcementNote
      faqAfterReviews
      path="/serrurier-nice-centre/"
    />
  );
}
