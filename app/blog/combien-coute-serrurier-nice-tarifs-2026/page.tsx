import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import ArticleSummary from "@/components/ArticleSummary";
import ArticleByline from "@/components/ArticleByline";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleTable from "@/components/ArticleTable";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import ArticleOpinion from "@/components/ArticleOpinion";
import ArticleKeyTakeaways from "@/components/ArticleKeyTakeaways";
import AuthorBox from "@/components/AuthorBox";
import ArticleNav from "@/components/ArticleNav";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBadges from "@/components/TrustBadges";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { blogPostByHref } from "@/lib/blogPosts";

const HREF = "/blog/combien-coute-serrurier-nice-tarifs-2026/";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Combien coûte un serrurier à Nice ? Tarifs 2026 | VAF",
  description: "Déplacement, main d'œuvre, pièce, majoration : ce qui compose vraiment un prix de serrurier à Nice, comparé à ce qu'affichent d'autres artisans du secteur.",
  article: { author: business.firstName, readingTime: "12 min" },
});

const toc = [
  { id: "compose-prix", label: "Ce qui compose vraiment un prix" },
  { id: "tarifs-annonces", label: "Mes tarifs annoncés à l'avance" },
  { id: "majoration-perimetre", label: "Majoration : ce qu'elle couvre vraiment" },
  { id: "comparatif", label: "Ce qu'affichent d'autres serruriers à Nice" },
  { id: "prix-eleve", label: "Pourquoi un prix plus élevé reste parfois le bon choix" },
  { id: "nice-vs-national", label: "Nice face au reste de la France" },
  { id: "a2p", label: "Ce que change la certification A2P" },
  { id: "engagement", label: "Mon engagement : ce qui est vérifiable" },
  { id: "leviers", label: "Réduire le coût de votre intervention" },
  { id: "recap", label: "Tableau récapitulatif" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "Pourquoi deux serruriers à Nice peuvent-ils afficher des prix très différents pour la même intervention ?",
    answer:
      "Le plus souvent parce que le prix affiché ne couvre pas les mêmes postes : l'un inclut le déplacement et la main d'œuvre, l'autre affiche la pièce seule et ajoute le reste ensuite. Comparer deux prix « à partir de » sans vérifier ce qu'ils incluent chacun ne veut pas dire grand-chose.",
  },
  {
    question: "Le forfait de 249 € pour un cylindre est-il vraiment plus avantageux qu'un tarif horaire affiché plus bas ?",
    answer:
      "Dans la plupart des cas, oui, dès que l'intervention dépasse une heure : un tarif horaire affiché plus bas grimpe vite une fois la pièce, le déplacement et la main d'œuvre additionnés. Un forfait fixe vous met à l'abri d'un dépassement si le diagnostic se révèle plus long que prévu.",
  },
  {
    question: "La majoration de 50% s'applique-t-elle aussi sur le prix d'un cylindre ou d'une serrure remplacée ?",
    answer:
      "Non, jamais. Elle porte uniquement sur le déplacement et la main d'œuvre. Un cylindre Heraclès ou Fichet coûte exactement le même prix un samedi soir qu'un mardi après-midi : seul le temps que je passe chez vous est majoré.",
  },
  {
    question: "Pourquoi votre majoration est-elle fixe à 50%, sans paliers horaires ?",
    answer:
      "Pour que vous puissiez calculer le prix final vous-même, à n'importe quelle heure, sans avoir à vérifier dans quelle tranche horaire vous tombez. C'est aussi ce qui évite qu'une intervention en pleine nuit coûte le double du tarif de jour, comme c'est le cas chez certains confrères au-delà d'un certain horaire.",
  },
  {
    question: "Le déplacement est-il compris dans le prix affiché, ou facturé en supplément comme chez certains serruriers ?",
    answer:
      "Compris, systématiquement, sur l'ensemble de Nice. Il n'y a pas de frais de déplacement à ajouter séparément à mes tarifs affichés, contrairement à certaines grilles où ce poste apparaît à part.",
  },
  {
    question: "Comment vérifier moi-même si un prix affiché en ligne est complet avant d'appeler ?",
    answer:
      "Demandez explicitement si le prix annoncé inclut le déplacement et la main d'œuvre, ou seulement la pièce. Demandez aussi si la majoration soir/nuit/week-end est fixe ou à paliers, et si elle porte sur la pièce ou seulement sur l'intervention. Ces questions suffisent à comparer deux devis sur des bases équivalentes.",
  },
];

export default function CombienCouteSerrurierNiceTarifs2026Page() {
  const post = blogPostByHref(HREF)!;
  return (
    <article>
      <JsonLd
        data={blogPostingSchema({
          headline: "Combien coûte un serrurier à Nice ? Tarifs 2026",
          description:
            "Déplacement, main d'œuvre, pièce, majoration : ce qui compose vraiment un prix de serrurier à Nice, comparé à ce qu'affichent d'autres artisans du secteur.",
          url: `${business.domain}${HREF}`,
          datePublished: "2026-09-25",
          dateModified: "2026-09-25",
          image: post.image,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Combien coûte un serrurier à Nice", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Combien coûte un serrurier à Nice", href: HREF },
            ]}
          />
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}>

            {post.category}

          </span>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            Combien coûte un serrurier à Nice ? Tarifs 2026
          </h1>
          <ArticleByline readingMinutes={12} updatedLabel="Publié le 25 septembre 2026" />
          <div className="mt-6">
            <TrustBadges />
          </div>
          <div className="relative aspect-[16/9] rounded-xl overflow-hidden mt-8">
            <Image
              src={post.image}
              alt="Tarifs serrurier à Nice 2026 : devis annoncé au téléphone, prix clés"
              fill
              sizes="(min-width: 1024px) 760px, 100vw"
              className="object-cover"
              priority
            />
          </div>
          <div className="mt-8">
            <ArticleSummary
              points={[
                <>
                  Un prix de serrurier se compose de trois éléments : <strong>déplacement, main d&apos;œuvre et pièce</strong>. Le prix affiché le plus bas n&apos;inclut pas toujours les trois.
                </>,
                "Mes tarifs sont fixes et annoncés avant tout déplacement, déplacement inclus sur toute la ville.",
                <>
                  Ma majoration de +50% ne porte <strong>jamais sur le prix d&apos;une pièce</strong>, uniquement sur le déplacement et la main d&apos;œuvre.
                </>,
                "SIRET vérifiable, adresse physique, assurance RC Pro, garantie décennale et garanties fabricant réelles (15 ans sur un blindage) : des engagements concrets, pas des arguments commerciaux.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className="text-slate leading-relaxed">
              « Combien ça coûte ? » C&apos;est la première question qu&apos;on me pose au
              téléphone, et c&apos;est normal : personne n&apos;aime signer un chèque en
              blanc pour une porte claquée. Le problème, c&apos;est que la plupart des prix
              affichés en ligne par les serruriers ne représentent qu&apos;une partie de la
              facture réelle. Voici comment je construis les miens, ce que j&apos;ai pu
              vérifier sur ce qu&apos;affichent d&apos;autres serruriers à Nice, et les
              engagements concrets qui vont avec, détaillés plus loin dans cet article.
            </p>

            <div>
              <ArticleSectionHeading number={1} id="compose-prix">
                Ce qui compose vraiment un prix
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Une facture de serrurerie additionne en principe trois postes : le{" "}
                <strong>déplacement</strong> (le fait de venir jusqu&apos;à chez vous),
                la <strong>main d&apos;œuvre</strong> (le temps passé à diagnostiquer et
                intervenir), et la <strong>pièce</strong> éventuellement posée (cylindre,
                serrure, gâche). Le prix affiché sur un site ou une publicité ne précise pas
                toujours lequel de ces trois postes il couvre : un « à partir de 69 € »
                pour un cylindre, par exemple, correspond parfois à la pièce seule, avec le
                déplacement et la main d&apos;œuvre ajoutés ensuite. Ce n&apos;est pas
                illégal en soi, tant que le détail est annoncé avant l&apos;intervention,
                mais ça explique pourquoi deux prix affichés « à partir de » ne sont pas
                toujours comparables terme à terme.
              </p>
              <p className="text-slate leading-relaxed mt-4">
                Ma manière de faire est différente : mes tarifs affichés sur ma page{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className="text-steel underline">
                  tarifs
                </Link>{" "}
                incluent toujours le déplacement et la main d&apos;œuvre. Seule une pièce
                remplacée s&apos;ajoute, et elle est systématiquement annoncée et validée
                avec vous avant d&apos;être facturée.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={2} id="tarifs-annonces">
                Mes tarifs annoncés à l&apos;avance
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Pour comparer avec ce qu&apos;affichent d&apos;autres serruriers plus bas
                dans cet article, voici les trois repères qui reviennent le plus souvent :
              </p>
            </div>

            <ArticleTable
              caption="Tarifs TTC, déplacement et main d'œuvre inclus, hors pièce éventuelle."
              headers={["Intervention", "Prix"]}
              rows={[
                ["Porte claquée / verrouillée (cylindre européen)", "149 € TTC"],
                ["Changement de cylindre standard", "dès 249 € TTC"],
                ["Majoration soir / week-end / jours fériés", "+50% sur main-d'œuvre et déplacement uniquement"],
              ]}
              featuredRowIndex={0}
            />

            <p className="text-slate leading-relaxed">
              Le détail complet de toutes mes prestations (serrure Fichet, blindage,
              poignée blindée, coffre-fort...) est sur ma page{" "}
              <Link href="/tarifs-serrurier-nice/" prefetch={false} className="text-steel underline">
                tarifs
              </Link>
              .
            </p>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/pool/benoit-serrurier-mecanisme-porte-nice.webp"
                alt="Diagnostic d'un mécanisme de porte par un serrurier à Nice"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <ArticleSectionHeading number={3} id="majoration-perimetre">
                Majoration soir, week-end, jours fériés : ce qu&apos;elle couvre vraiment
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Un point souvent mal compris, et qui mérite d&apos;être précisé clairement :
                ma majoration de <strong>+50%</strong> porte uniquement sur le{" "}
                <strong>déplacement et la main d&apos;œuvre</strong>, jamais sur le prix
                d&apos;une pièce remplacée. Un cylindre Heraclès ne coûte pas plus cher un
                samedi soir qu&apos;un mardi après-midi : seul le temps que je passe chez
                vous est majoré, pas le matériel posé.
              </p>
              <p className="text-slate leading-relaxed mt-4">
                Après 19h, le week-end et les jours fériés, cette majoration unique
                s&apos;applique donc à la partie main-d&apos;œuvre et déplacement de la
                facture, sans palier supplémentaire selon l&apos;heure exacte. Une
                intervention à 20h coûte le même supplément qu&apos;une intervention à 3h
                du matin : c&apos;est un choix délibéré de simplicité, pour que vous
                puissiez calculer le prix final vous-même, à n&apos;importe quelle heure,
                sans avoir à vérifier dans quelle tranche horaire vous tombez.
              </p>
              <p className="text-slate leading-relaxed mt-4">
                Ce n&apos;est pas la norme partout : plusieurs grilles tarifaires relevées à
                Nice appliquent une majoration à paliers, avec un premier seuil autour de
                +50% en soirée, puis un second seuil pouvant monter jusqu&apos;à{" "}
                <strong>+100%</strong> (soit le double du tarif de jour) au cœur de la nuit,
                généralement entre minuit et 7h du matin, ainsi que certains créneaux de
                week-end. Sur une urgence à 2h du matin, la différence entre une majoration
                fixe de 50% et un palier à 100% peut représenter plusieurs dizaines
                d&apos;euros d&apos;écart sur la même intervention.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={4} id="comparatif">
                Ce qu&apos;affichent d&apos;autres serruriers à Nice
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                J&apos;ai vérifié les grilles tarifaires publiées par plusieurs entreprises
                de serrurerie actives à Nice au moment de la rédaction de cet article
                (septembre 2026). Sans citer de nom précis, voici deux profils de
                tarification assez représentatifs du marché local, à comparer aux miens :
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-slate leading-relaxed mt-3">
                <li>
                  Une entreprise affiche une <strong>ouverture de porte à 148,50 € TTC</strong>{" "}
                  pour un particulier, déplacement et une heure de main d&apos;œuvre
                  inclus : un prix proche du mien (149 €). La différence se joue sur la
                  majoration, appliquée à paliers : +50% en soirée (18h-minuit) ou le
                  week-end, puis +100% de minuit à 7h du matin ainsi que la nuit du week-end
                  et des jours fériés.
                </li>
                <li>
                  Une autre affiche une ouverture de porte claquée <strong>dès 89 €</strong>{" "}
                  en journée, avec des paliers à 109 € en soirée et 139 € la nuit et le
                  week-end. Un frais de déplacement de 45 € apparaît par ailleurs sur sa
                  grille tarifaire. Pour un changement de cylindre, le prix affiché «à
                  partir de 69 €» correspond à la pièce seule : la main d&apos;œuvre est
                  facturée en plus, à 65 € de l&apos;heure. En comptant une heure de travail,
                  le total réel (cylindre + main d&apos;œuvre) dépasse déjà 130 €, avant
                  même d&apos;ajouter un éventuel déplacement.
                </li>
              </ul>
              <p className="text-slate leading-relaxed mt-4">
                À l&apos;échelle nationale, une étude récente du secteur situe le prix moyen
                d&apos;une ouverture de porte classique autour de 135 € TTC en France, avec
                une fourchette de 80 à 200 € en journée et des écarts régionaux marqués : une
                ouverture de porte revient par exemple environ 30 à 40% plus cher à Paris que
                dans des villes moyennes comme Lille. Les majorations de nuit ou de week-end
                observées à l&apos;échelle du pays vont, elles, de +20% à +100% selon les
                professionnels, avec une moyenne autour de +30%.
              </p>
              <p className="text-slate leading-relaxed mt-4">
                Certains sites, plus rares, affichent encore des prix d&apos;appel très bas
                (30 à 40 €) qui n&apos;ont pas vocation à être le prix réellement facturé :
                c&apos;est le signal d&apos;alerte classique détaillé sur ma page{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className="text-steel underline">
                  tarifs
                </Link>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={5} id="prix-eleve">
                Pourquoi un prix plus élevé reste parfois le bon choix
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Un prix affiché plus haut au premier regard n&apos;est pas forcément le
                moins avantageux une fois tout additionné. Deux exemples concrets, à partir
                des grilles tarifaires relevées ci-dessus :
              </p>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  Le changement de cylindre : un forfait contre une addition
                </h3>
                <p className="text-slate leading-relaxed">
                  Mon tarif de 249 € TTC pour un changement de cylindre standard est un
                  forfait unique, quelle que soit la durée réelle de l&apos;intervention.
                  Face à une offre affichée « à partir de 69 € » pour la pièce seule, avec
                  déplacement (45 €) et main d&apos;œuvre (65 €/h) ajoutés séparément : une
                  heure de travail porte déjà le total à environ 179 €, une heure et demie à
                  plus de 210 €. Si le cylindre est grippé, la porte voilée, ou
                  l&apos;accès difficile, le compteur horaire continue de tourner et peut
                  dépasser mon forfait fixe. Avec un prix unique annoncé à l&apos;avance,
                  vous n&apos;avez pas ce risque : la difficulté du diagnostic est mon
                  problème, pas le vôtre.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  La majoration de nuit : une règle simple contre un palier qui double
                </h3>
                <p className="text-slate leading-relaxed">
                  Sur une urgence entre minuit et 7h du matin, ma majoration fixe de +50%
                  reste plus avantageuse qu&apos;un barème à paliers qui monte à +100% sur
                  ce créneau, comme j&apos;en ai relevé sur une grille tarifaire locale. En
                  clair : à tarif de base équivalent, une intervention en pleine nuit chez
                  moi ne double jamais le prix, contrairement à un système à paliers qui le
                  fait au-delà d&apos;un certain horaire. Et dans les deux cas, cette
                  majoration ne touche jamais le prix d&apos;une pièce remplacée.
                </p>
              </div>
              <p className="text-slate leading-relaxed mt-4">
                Comment repérer un prix d&apos;appel trompeur avant même de faire venir un
                serrurier : le détail complet est sur ma page{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className="text-steel underline">
                  tarifs
                </Link>
                . Sur un sujet proche, mon article sur{" "}
                <Link href="/blog/serrurier-agree-assurances-nice/" className="text-steel underline">
                  « agréé toutes assurances »
                </Link>{" "}
                explique pourquoi ce sigle, souvent vu sur les camionnettes, n&apos;a
                aucune autorité derrière lui.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={6} id="nice-vs-national">
                Nice face au reste de la France : pourquoi le niveau de prix diffère
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Je ne dispose pas d&apos;une moyenne officielle vérifiée spécifique à Nice à
                vous communiquer, seulement des exemples concrets déjà cités plus haut. Mais
                plusieurs facteurs réels et propres à la ville expliquent pourquoi le niveau
                de prix y est rarement dans le bas de la fourchette nationale évoquée plus
                haut (autour de 135 € TTC pour une ouverture simple) :
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-slate leading-relaxed mt-3">
                <li>
                  <strong>Le coût de la vie sur la Côte d&apos;Azur</strong> : loyer d&apos;un
                  local professionnel, carburant, assurances, matériel. C&apos;est le même
                  mécanisme, à une autre échelle, que l&apos;écart déjà cité entre Paris et
                  une ville moyenne comme Lille.
                </li>
                <li>
                  <strong>Une part importante de bâti ancien</strong> : Vieux-Nice, Cimiez,
                  Carré d&apos;Or et d&apos;autres quartiers du centre comptent de nombreux
                  immeubles avec des portes et des serrures d&apos;origine, parfois
                  centenaires. Ce type d&apos;intervention demande souvent plus de temps et
                  un savoir-faire spécifique pour ne pas abîmer une porte de caractère,
                  plutôt qu&apos;un remplacement standard.
                </li>
                <li>
                  <strong>Une demande saisonnière marquée</strong> : la part importante de
                  logements loués en courte durée (Vieux-Nice, Carré d&apos;Or, bord de mer)
                  génère des pics de demande concentrés, notamment l&apos;été, qui pèsent sur
                  la disponibilité des artisans localement.
                </li>
              </ul>
              <p className="text-slate leading-relaxed mt-4">
                Ces facteurs jouent chez tous les serruriers installés à Nice, pas seulement
                chez moi : ils font partie du contexte, pas d&apos;une justification propre à
                mes tarifs.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/pool/cylindre-fichet-boitier-demonte-etabli-nice.webp"
                alt="Cylindre Fichet démonté sur établi par un serrurier à Nice"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <ArticleSectionHeading number={7} id="a2p">
                Ce que change la certification A2P
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Un cylindre ou une serrure affichée « haute sécurité » n&apos;a de valeur
                que si elle est réellement certifiée. La certification A2P, délivrée par le
                CNPP après des tests en laboratoire, est le seul repère reconnu par les
                assurances habitation pour un mécanisme renforcé : une étoile résiste 5
                minutes aux outils d&apos;effraction courants, deux étoiles 10 minutes, trois
                étoiles au moins 15 minutes. C&apos;est ce test, pas le prix affiché ni le
                design, qui justifie l&apos;écart de tarif entre un cylindre standard et un
                cylindre haute sécurité comme le Fichet proposé sur devis dans mes tarifs.
              </p>
              <p className="text-slate leading-relaxed mt-4">
                J&apos;explique le détail de cette certification, la différence avec le
                sigle A2P BP (qui note un bloc-porte complet plutôt qu&apos;une serrure
                seule) et comment vérifier qu&apos;un produit est vraiment certifié dans mon
                article dédié à la{" "}
                <Link href="/blog/certification-a2p-serrure-nice/" className="text-steel underline">
                  certification A2P
                </Link>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={8} id="engagement">
                Mon engagement : ce qui est vérifiable
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Un tarif annoncé à l&apos;avance ne vaut que si l&apos;entreprise qui le
                propose est elle-même vérifiable. Voici ce qui l&apos;est concrètement, pas
                comme argument commercial, mais comme des points que vous pouvez contrôler
                vous-même avant même que je me déplace :
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-slate leading-relaxed mt-3">
                <li>
                  <strong>SIRET vérifiable</strong> : {business.siret}, consultable
                  publiquement en quelques secondes.
                </li>
                <li>
                  <strong>Une adresse physique réelle</strong> : {business.address.full},
                  pas seulement un numéro de mobile.
                </li>
                <li>
                  <strong>Une assurance responsabilité civile professionnelle</strong> (
                  {business.insurance.provider}) et une <strong>garantie décennale</strong>{" "}
                  en cours de validité.
                </li>
                <li>
                  <strong>Artisan serrurier depuis {business.professionSinceYear}</strong>,
                  avant de m&apos;installer à mon compte à Nice.
                </li>
                <li>
                  <strong>Des garanties fabricant réelles sur le matériel posé</strong>, pas
                  seulement sur mon intervention : 15 ans sur un blindage de porte, 10 ans
                  sur une poignée blindée gamme Héraclès Salomé — le détail complet est sur
                  ma page{" "}
                  <Link href="/tarifs-serrurier-nice/" prefetch={false} className="text-steel underline">
                    tarifs
                  </Link>
                  .
                </li>
              </ul>
            </div>

            <div>
              <ArticleSectionHeading number={9} id="leviers">
                Réduire le coût de votre intervention : les leviers légaux
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Avant de comparer des tarifs de serrurier, plusieurs leviers légaux
                permettent souvent de réduire la facture finale, ou de vous faire rembourser
                après coup :
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-2 text-slate leading-relaxed mt-3">
                <li>
                  <strong>Garantie assistance de votre assurance habitation</strong> : le
                  plafond couvert est souvent modeste pour une simple ouverture de porte,
                  mais nettement plus élevé en cas d&apos;effraction avérée, avec une
                  franchise à vérifier selon votre contrat. Une facture détaillée reste le
                  document indispensable pour toute déclaration.
                </li>
                <li>
                  <strong>Garantie assistance de certaines cartes bancaires haut de gamme</strong>{" "}
                  (Visa Premier, Gold Mastercard ou équivalent) : le plafond varie fortement
                  selon la carte et l&apos;émetteur, à vérifier directement auprès de votre
                  banque avant d&apos;en avoir besoin.
                </li>
                <li>
                  <strong>Programmer une intervention plutôt que d&apos;attendre l&apos;urgence complète</strong>{" "}
                  : un rendez-vous en journée évite la majoration de soir, de nuit, de
                  week-end ou de jour férié — un cylindre qui commence à forcer se traite
                  mieux avant la panne complète.
                </li>
                <li>
                  <strong>Toujours demander un devis écrit</strong>, même pour une petite
                  intervention : c&apos;est ce document, pas un simple reçu, qui facilite un
                  remboursement d&apos;assurance a posteriori.
                </li>
              </ul>
              <p className="text-slate leading-relaxed mt-4">
                Le détail de ces garanties d&apos;assistance est expliqué sur ma page{" "}
                <Link href="/urgence-serrurier-nice/" className="text-steel underline">
                  urgence serrurier
                </Link>
                .
              </p>
            </div>

            <ArticleTable
              caption="Récapitulatif : ce qui distingue mes tarifs des grilles à paliers relevées à Nice."
              headers={["Poste", "Chez moi", "Pratique courante relevée"]}
              rows={[
                ["Déplacement", "Toujours inclus", "Parfois facturé à part (ex. 45 €)"],
                ["Ouverture de porte claquée", "149 € TTC, tout compris", "89 à 149 € selon l'heure, + déplacement possible"],
                ["Changement de cylindre", "dès 249 € TTC, forfait unique", "Pièce seule dès 69 € + main d'œuvre + déplacement"],
                ["Majoration soir/nuit/week-end", "+50% unique, sur main-d'œuvre et déplacement, jamais les pièces", "+50% à +100% selon l'heure exacte"],
                ["Devis", "Annoncé au téléphone, confirmé sur place", "Variable selon l'entreprise"],
              ]}
            />

            <div>
              <ArticleSectionHeading number={10} id="recap">
                Tableau récapitulatif
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Le tableau ci-dessus résume l&apos;essentiel : à service comparable, la
                différence entre les grilles tarifaires se joue surtout sur ce qui est
                inclus dans le prix affiché, et sur la façon dont la majoration est
                calculée. Retrouvez le détail complet de mes tarifs, service par service,
                sur ma page{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className="text-steel underline">
                  tarifs
                </Link>
                .
              </p>
            </div>

            <ArticleOpinion quote="Je ne prétends pas être systématiquement le moins cher de Nice, et ce n'est pas mon objectif. Mon objectif, c'est que vous puissiez calculer le prix final avant même que j'arrive, sans mauvaise surprise, sans palier caché et sans majoration qui déborde sur le prix du matériel. C'est ça, la vraie différence entre un tarif annoncé et un tarif d'appel." />

            <ArticleKeyTakeaways
              points={[
                "Un prix de serrurier se compose du déplacement, de la main d'œuvre et de la pièce éventuelle : vérifiez ce qui est réellement inclus.",
                "Mes tarifs sont fixes, déplacement et main d'œuvre toujours inclus, hors pièce remplacée.",
                "Ma majoration unique de +50% ne porte que sur le déplacement et la main d'œuvre, jamais sur le prix d'une pièce.",
                "SIRET, adresse, assurance RC Pro, garantie décennale et garanties fabricant sont vérifiables indépendamment, pas de simples arguments.",
              ]}
            />

            <div>
              <ArticleSectionHeading number={11} id="faq">
                Foire aux questions
              </ArticleSectionHeading>
              <FaqAccordion items={faqItems} />
            </div>

            <AuthorBox />
          </ArticleLayout>
        </div>
      </section>

      <section className="bg-white border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <CtaBlock title="Besoin d'un devis clair, annoncé avant l'intervention ?" />
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-4xl px-4">
          <ArticleNav currentHref={HREF} />
        </div>
      </section>
    </article>
  );
}
