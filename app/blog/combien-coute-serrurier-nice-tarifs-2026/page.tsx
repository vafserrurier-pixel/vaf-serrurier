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
  article: { author: business.firstName, readingTime: "9 min" },
});

const toc = [
  { id: "compose-prix", label: "Ce qui compose vraiment un prix" },
  { id: "tarifs-annonces", label: "Mes tarifs annoncés à l'avance" },
  { id: "majorations", label: "Majorations soir, week-end, jours fériés" },
  { id: "comparatif", label: "Ce qu'affichent d'autres serruriers à Nice" },
  { id: "prix-eleve", label: "Pourquoi un prix plus élevé reste parfois le bon choix" },
  { id: "signaux-alerte", label: "Les signaux qui doivent vous alerter" },
  { id: "recap", label: "Tableau récapitulatif" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "Le devis par téléphone est-il vraiment gratuit et sans engagement ?",
    answer:
      "Oui. Je vous annonce un prix par téléphone selon votre description de la situation, sans aucun engagement de votre part. Ce prix est ensuite confirmé sur place avant que je commence le moindre travail.",
  },
  {
    question: "Le prix annoncé au téléphone est-il le prix final ?",
    answer:
      "Dans l'immense majorité des cas, oui : les tarifs de dépannage (porte claquée, verrouillée) sont fixes. Seul un remplacement de pièce (cylindre, serrure) peut ajouter un coût, mais il est toujours annoncé et validé avec vous avant d'être facturé.",
  },
  {
    question: "Pourquoi votre majoration est-elle fixe à 50%, sans paliers horaires ?",
    answer:
      "Pour que vous puissiez calculer le prix final vous-même, à n'importe quelle heure, sans avoir à vérifier dans quelle tranche horaire vous tombez. C'est aussi ce qui évite qu'une intervention en pleine nuit coûte le double du tarif de jour, comme c'est le cas chez certains confrères au-delà d'un certain horaire.",
  },
  {
    question: "Le déplacement est-il compris dans le prix affiché ?",
    answer:
      "Oui, systématiquement, sur l'ensemble de Nice. Il n'y a pas de frais de déplacement à ajouter séparément à mes tarifs affichés, contrairement à certaines grilles où ce poste apparaît en supplément.",
  },
  {
    question: "Que faire si le prix demandé sur place ne correspond pas au devis annoncé ?",
    answer:
      "Ça ne devrait jamais arriver : le prix confirmé sur place, avant travaux, est celui que vous payez. Si un professionnel change son prix après coup sans justification claire, vous pouvez le signaler sur SignalConso, le service de la DGCCRF dédié à ce type de litige.",
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
          <ArticleByline readingMinutes={9} updatedLabel="Publié le 25 septembre 2026" />
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
                "Ma majoration est unique (+50%), sans palier qui double le tarif en pleine nuit comme chez certains confrères.",
                "Un prix d'appel très bas (30-40 €) affiché en ligne cache presque toujours une facture qui gonfle une fois sur place.",
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
              facture réelle. Voici comment je construis les miens, et ce que j&apos;ai pu
              vérifier sur ce qu&apos;affichent d&apos;autres serruriers à Nice.
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
                Voici mes tarifs standards, déplacement et main d&apos;œuvre inclus sur
                l&apos;ensemble de Nice. Seules les pièces remplacées s&apos;ajoutent, et
                toujours annoncées avant votre accord.
              </p>
            </div>

            <ArticleTable
              caption="Tarifs TTC, déplacement et main d'œuvre inclus, hors pièce éventuelle."
              headers={["Intervention", "Prix", "Inclus"]}
              rows={[
                ["Porte claquée / verrouillée (cylindre européen)", "149 € TTC", "Déplacement + main d'œuvre"],
                ["Porte verrouillée (serrure Fichet)", "189 € TTC", "Déplacement + main d'œuvre"],
                ["Changement de cylindre standard", "dès 249 € TTC", "Déplacement + main d'œuvre + cylindre"],
                ["Cylindre haute sécurité Fichet", "Sur devis", "Diagnostic sur place avant prix ferme"],
                ["Serrure 5 points en applique carénée", "1 249 € TTC", "Fourniture posée"],
                ["Blindage de porte", "2 689 € TTC", "Configuration de référence, devis confirmé"],
                ["Poignée blindée", "349 € TTC", "Pose et réglage inclus"],
                ["Coffre-fort (ouverture, installation)", "dès 299 € TTC", "Ajusté selon le modèle sur place"],
              ]}
              featuredRowIndex={0}
            />

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
              <ArticleSectionHeading number={3} id="majorations">
                Majorations soir, week-end, jours fériés
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Après 19h, le week-end et les jours fériés, une majoration unique de{" "}
                <strong>+50%</strong> s&apos;applique sur mes tarifs, sans palier
                supplémentaire selon l&apos;heure exacte. Une intervention à 20h coûte donc
                le même supplément qu&apos;une intervention à 3h du matin : c&apos;est un
                choix délibéré de simplicité, pour que vous puissiez calculer le prix final
                vous-même, à n&apos;importe quelle heure, sans avoir à vérifier dans quelle
                tranche horaire vous tombez.
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
                  fait au-delà d&apos;un certain horaire.
                </p>
              </div>
            </div>

            <div>
              <ArticleSectionHeading number={6} id="signaux-alerte">
                Les signaux qui doivent vous alerter
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Au-delà de la comparaison de grilles tarifaires, certains signaux méritent
                une vigilance particulière, quel que soit le serrurier contacté :
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed mt-3">
                <li>Un prix d&apos;appel très bas (30 à 40 €) qui refuse d&apos;être confirmé par téléphone.</li>
                <li>Un remplacement de cylindre annoncé d&apos;office, avant même le diagnostic sur place.</li>
                <li>Une majoration non annoncée à l&apos;avance, ou appliquée sans explication une fois sur place.</li>
                <li>Aucun SIRET ni adresse physique vérifiable, seulement un numéro de mobile.</li>
              </ul>
              <p className="text-slate leading-relaxed mt-4">
                Ce ne sont pas des signaux anecdotiques : une enquête de la DGCCRF menée en
                2024 sur 600 professionnels du dépannage à domicile en France a relevé des
                anomalies chez 60% d&apos;entre eux, la serrurerie étant l&apos;un des
                secteurs les plus concernés. En cas de litige avec un professionnel, vous
                pouvez le signaler gratuitement sur{" "}
                <a
                  href="https://signal.conso.gouv.fr"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel underline"
                >
                  SignalConso
                </a>
                , le service de la DGCCRF.
              </p>
              <p className="text-slate leading-relaxed mt-4">
                Retrouvez la liste complète des signaux d&apos;alerte, ainsi que ce que la
                loi exige sur un devis de dépannage, sur ma page{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className="text-steel underline">
                  tarifs serrurier à Nice
                </Link>
                . Sur un sujet proche, mon article sur{" "}
                <Link href="/blog/serrurier-agree-assurances-nice/" className="text-steel underline">
                  « agréé toutes assurances »
                </Link>{" "}
                explique pourquoi ce sigle, souvent vu sur les camionnettes, n&apos;a
                aucune autorité derrière lui.
              </p>
            </div>

            <ArticleTable
              caption="Récapitulatif : ce qui distingue mes tarifs des grilles à paliers relevées à Nice."
              headers={["Poste", "Chez moi", "Pratique courante relevée"]}
              rows={[
                ["Déplacement", "Toujours inclus", "Parfois facturé à part (ex. 45 €)"],
                ["Ouverture de porte claquée", "149 € TTC, tout compris", "89 à 149 € selon l'heure, + déplacement possible"],
                ["Changement de cylindre", "dès 249 € TTC, forfait unique", "Pièce seule dès 69 € + main d'œuvre + déplacement"],
                ["Majoration soir/nuit/week-end", "+50% unique, sans palier", "+50% à +100% selon l'heure exacte"],
                ["Devis", "Annoncé au téléphone, confirmé sur place", "Variable selon l'entreprise"],
              ]}
            />

            <div>
              <ArticleSectionHeading number={7} id="recap">
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

            <ArticleOpinion quote="Je ne prétends pas être systématiquement le moins cher de Nice, et ce n'est pas mon objectif. Mon objectif, c'est que vous puissiez calculer le prix final avant même que j'arrive, sans mauvaise surprise ni palier caché. C'est ça, la vraie différence entre un tarif annoncé et un tarif d'appel." />

            <ArticleKeyTakeaways
              points={[
                "Un prix de serrurier se compose du déplacement, de la main d'œuvre et de la pièce éventuelle : vérifiez ce qui est réellement inclus.",
                "Mes tarifs sont fixes, déplacement et main d'œuvre toujours inclus, hors pièce remplacée.",
                "Ma majoration unique de +50% évite les paliers qui peuvent doubler le tarif en pleine nuit chez certains confrères.",
                "Un prix d'appel très bas affiché en ligne (30-40 €) est presque toujours un signal d'alerte.",
              ]}
            />

            <div>
              <ArticleSectionHeading number={8} id="faq">
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
