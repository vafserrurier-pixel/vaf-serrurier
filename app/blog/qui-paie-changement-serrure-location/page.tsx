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

const HREF = "/blog/qui-paie-changement-serrure-location/";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Location : qui paie le changement de serrure ? | VAF",
  description: "Clés perdues, cambriolage, location saisonnière, changement de locataire : qui du propriétaire ou du locataire paie le changement de serrure à Nice.",
});

const toc = [
  { id: "cles-perdues", label: "Clés perdues ou usage normal : au locataire" },
  { id: "vetuste", label: "Vétusté de la serrure : au propriétaire" },
  { id: "cambriolage", label: "Après un cambriolage : généralement l'assurance" },
  { id: "changement-locataire", label: "Changement de locataire : au propriétaire" },
  { id: "saisonniere", label: "Cas particulier : la location saisonnière" },
  { id: "recap", label: "Récapitulatif : qui paie selon la cause" },
  { id: "facture", label: "Ce qui évite le litige : une facture claire" },
  { id: "desaccord", label: "En cas de désaccord persistant" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "Le propriétaire peut-il refuser de rembourser un changement de serrure après cambriolage ?",
    answer:
      "La prise en charge après un cambriolage relève en général de l'assurance habitation du locataire occupant, pas du propriétaire directement. En cas de doute, le dépôt de plainte et une facture détaillée restent les documents de référence.",
  },
  {
    question: "Dois-je demander l'autorisation du propriétaire avant de changer la serrure ?",
    answer:
      "Par précaution, prévenez toujours le propriétaire, même si la cause du changement relève de votre responsabilité de locataire. Ça évite tout malentendu à l'état des lieux de sortie.",
  },
  {
    question: "Que se passe-t-il si le locataire perd son trousseau plusieurs fois ?",
    answer:
      "Chaque perte relève en principe de l'entretien courant à la charge du locataire, quelle que soit la fréquence. Un propriétaire peut cependant s'interroger si la situation devient récurrente.",
  },
  {
    question: "Le dépôt de garantie peut-il couvrir ce type de frais ?",
    answer:
      "Le dépôt de garantie sert surtout à couvrir des dégradations constatées à la sortie du logement, pas les frais courants engagés pendant la location. Chaque situation reste à évaluer au cas par cas.",
  },
  {
    question: "Qui paie si la serrure casse pendant l'état des lieux de sortie ?",
    answer:
      "Un diagnostic permet en général de déterminer si la panne vient d'une usure normale (souvent à la charge du propriétaire au titre de la vétusté) ou d'un usage anormal du locataire.",
  },
  {
    question: "Pour une location saisonnière, faut-il changer le cylindre entre chaque séjour ?",
    answer:
      "Non, ce n'est ni nécessaire ni raisonnable si le cylindre est à clé à reproduction protégée : la copie est impossible sans la carte de propriété, donc compter les clés à chaque check-out suffit. Voir la section dédiée plus bas.",
  },
];

export default function QuiPaieChangementSerrureLocationPage() {
  return (
    <article>
      <JsonLd
        data={blogPostingSchema({
          headline: "Location : qui paie le changement de serrure ?",
          description:
            "Clés perdues, cambriolage, location saisonnière, changement de locataire : qui du propriétaire ou du locataire paie le changement de serrure à Nice.",
          url: `${business.domain}${HREF}`,
          datePublished: "2026-09-08",
          dateModified: "2026-09-12",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Qui paie le changement de serrure", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Qui paie le changement de serrure", href: HREF },
            ]}
          />
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            Location : qui paie le changement de serrure ?
          </h1>
          <ArticleByline readingMinutes={9} updatedLabel="Mis à jour le 12 septembre 2026" />
          <div className="mt-6">
            <TrustBadges />
          </div>
          <div className="mt-8">
            <ArticleSummary
              points={[
                <>
                  Clés perdues ou usure normale : <strong>c&apos;est au locataire</strong>, comme tout entretien courant (décret n°87-712).
                </>,
                "Vétusté de la serrure ancienne : c'est au propriétaire.",
                "Après un cambriolage : généralement l'assurance habitation du locataire.",
                <>
                  En location saisonnière, le vrai risque est <strong>la clé copiée</strong>, pas l&apos;effraction : un cylindre à reproduction protégée règle le problème.
                </>,
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className="text-slate leading-relaxed">
              C&apos;est une question que je reçois régulièrement, propriétaires comme
              locataires : après une perte de clés, un cambriolage ou un changement de
              locataire, qui doit régler la facture ? La réponse dépend surtout de la
              cause du changement, pas du fait d&apos;être propriétaire ou locataire en
              soi. Voici la règle générale, et ses limites.
            </p>

            <div>
              <ArticleSectionHeading number={1} id="cles-perdues">
                Clés perdues ou usage normal : au locataire
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Un trousseau égaré, une clé cassée dans la serrure par accident, ou une
                usure liée à l&apos;utilisation quotidienne relèvent en principe de
                l&apos;entretien courant du logement, à la charge du locataire. Ce
                n&apos;est pas une simple habitude du secteur : l&apos;
                <a
                  href="https://www.legifrance.gouv.fr/jorf/id/JORFTEXT000000522461"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-steel underline"
                >
                  annexe du décret n°87-712 du 26 août 1987
                </a>{" "}
                liste explicitement le graissage des serrures et verrous, ainsi que le
                remplacement des clés égarées ou détériorées, parmi les réparations
                locatives à la charge du locataire.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/pool/benoit-serrurier-trousseau-cles-nice.webp"
                alt="Trousseau de clés tenu par un serrurier à Nice"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <ArticleSectionHeading number={2} id="vetuste">
                Vétusté de la serrure : au propriétaire
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Si la serrure lâche parce qu&apos;elle est ancienne, mal entretenue depuis
                longtemps ou défaillante indépendamment de tout usage anormal, la
                réparation relève de l&apos;entretien du logement, donc du propriétaire.
                La distinction n&apos;est pas toujours évidente : un diagnostic sur place
                permet en général de voir si la panne vient d&apos;une usure logique de
                plusieurs années, ou d&apos;un incident ponctuel.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={3} id="cambriolage">
                Après un cambriolage : généralement l&apos;assurance
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Quand la serrure a été forcée lors d&apos;une{" "}
                <Link href="/mis-en-securite-apres-effraction-nice/" className="text-steel underline">
                  effraction
                </Link>
                , c&apos;est en général l&apos;assurance habitation (celle du locataire occupant, dans la
                plupart des contrats multirisques habitation) qui prend en charge la
                remise en état, sous réserve du dépôt de plainte et des conditions
                précises du contrat. Une facture détaillée, mentionnant clairement la
                nature de l&apos;intervention, est le document généralement demandé pour
                la déclaration de sinistre. Les montants exacts et les franchises
                dépendent de chaque contrat : à vérifier directement auprès de
                l&apos;assureur concerné.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={4} id="changement-locataire">
                Changement de locataire : généralement au propriétaire
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Entre le départ d&apos;un locataire et l&apos;arrivée du suivant, c&apos;est
                en général au propriétaire de s&apos;assurer que le logement est
                correctement sécurisé pour un nouvel occupant : cela fait partie de la
                remise en état normale du bien entre deux baux. Rien n&apos;empêche un
                propriétaire prudent de le faire systématiquement, même sans obligation
                stricte, simplement pour repartir sur un{" "}
                <Link href="/changement-serrure-nice/" className="text-steel underline">
                  changement de serrure
                </Link>{" "}
                fiable à chaque nouveau bail.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={5} id="saisonniere">
                Cas particulier : la location saisonnière
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                En location saisonnière (meublé de tourisme, plateformes type Airbnb), la
                question ne se pose pas de la même façon : le logement change
                d&apos;occupant chaque semaine, parfois plusieurs fois par mois. C&apos;est
                une situation très fréquente dans les quartiers touristiques de Nice
                (Vieux-Nice, Carré d&apos;Or, bord de Promenade des Anglais), où une
                grande partie du parc locatif tourne en courte durée. Le vrai
                risque n&apos;est pas d&apos;abord l&apos;effraction, c&apos;est la clé
                qui circule sans que vous le sachiez.
              </p>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  Clé standard ou clé à reproduction protégée
                </h3>
                <p className="text-slate leading-relaxed">
                  Une clé plate classique se reproduit à l&apos;identique dans n&apos;importe
                  quelle cordonnerie, sans aucun justificatif : un locataire de passage
                  peut s&apos;en faire un double en cinq minutes, et vous n&apos;en saurez
                  jamais rien. Un cylindre à clé à reproduction protégée fonctionne à
                  l&apos;inverse : la clé est associée à une carte de propriété, et seul
                  le fabricant ou un réseau d&apos;agents agréés peut en produire une
                  copie. Plusieurs marques que je pose proposent cette protection, dont
                  Vachette (gamme Radial), Fichet et Héraclès. C&apos;est, de loin,
                  l&apos;investissement le plus utile pour un bien loué en courte durée.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  Cylindre débrayable : ne plus jamais rester enfermé dehors
                </h3>
                <p className="text-slate leading-relaxed">
                  La fonction débrayable (parfois appelée fonction de secours) permet
                  d&apos;ouvrir la porte de l&apos;extérieur même si une clé est restée
                  engagée à l&apos;intérieur, un incident fréquent en rotation locative.
                  Sans cette fonction, un cylindre classique se bloque de l&apos;extérieur
                  tant que la clé intérieure n&apos;est pas retirée. Pour un logement en
                  location, j&apos;évite de poser un cylindre non débrayable par défaut,
                  justement pour éviter ce type d&apos;appel évitable.
                </p>
              </div>
              <p className="text-slate leading-relaxed mt-4">
                Avec ces deux fonctions réunies, changer le cylindre à chaque départ de
                locataire n&apos;a pas de sens : il suffit de compter les clés remises à
                chaque check-out, puisqu&apos;aucun double caché n&apos;est possible sans
                la carte de propriété. Un remplacement reste justifié en cas de clé non
                rendue, de perte, ou de doute sérieux sur une copie.
              </p>
            </div>

            <ArticleTable
              caption="Récapitulatif de la règle générale selon la cause du changement."
              headers={["Cause", "Qui paie généralement", "Justificatif utile"]}
              rows={[
                ["Clés perdues, usage normal", "Locataire", "Décret n°87-712 (entretien courant)"],
                ["Vétusté de la serrure", "Propriétaire", "Diagnostic de l'artisan"],
                ["Cambriolage / effraction", "Assurance habitation du locataire", "Dépôt de plainte + facture détaillée"],
                ["Changement de locataire", "Propriétaire", "Facture entre deux baux"],
                ["Location saisonnière", "Propriétaire-loueur (investissement, pas récurrent)", "Facture du cylindre sécurisé"],
              ]}
            />

            <div>
              <ArticleSectionHeading number={6} id="recap">
                Récapitulatif : qui paie selon la cause
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Le tableau ci-dessus résume les cinq situations les plus fréquentes. Dans
                tous les cas, la cause précise du changement détermine qui paie, pas le
                simple statut de propriétaire ou de locataire.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={7} id="facture">
                Ce qui évite le litige : une facture claire
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Dans tous les cas, le document qui compte le plus en cas de désaccord est
                une facture détaillée, mentionnant précisément la nature de
                l&apos;intervention et sa cause probable (usure, casse accidentelle,
                effraction constatée). C&apos;est ce document que je remets
                systématiquement, quelle que soit la situation, pour que propriétaire et
                locataire puissent s&apos;appuyer sur des faits plutôt que sur une
                interprétation.
              </p>
              <p className="text-slate leading-relaxed mt-4">
                Une facture réellement utile en cas de litige mentionne au minimum :
              </p>
              <ul className="list-disc pl-5 flex flex-col gap-1.5 text-slate leading-relaxed">
                <li>Le SIRET de l&apos;artisan intervenu.</li>
                <li>La date et l&apos;adresse exacte de l&apos;intervention.</li>
                <li>La nature précise du problème constaté (usure, casse, effraction).</li>
                <li>Le détail du matériel posé (marque, référence, certification éventuelle).</li>
              </ul>
              <p className="text-slate leading-relaxed mt-4">
                Retrouvez mes{" "}
                <Link href="/tarifs-serrurier-nice/" className="text-steel underline">
                  tarifs annoncés à l&apos;avance
                </Link>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={8} id="desaccord">
                En cas de désaccord persistant
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Si propriétaire et locataire ne s&apos;entendent pas sur la prise en
                charge, la règle générale décrite ici reste un repère, pas une décision
                juridique. En cas de litige réel, un commissaire de justice (ex-huissier)
                peut constater une situation, et la commission départementale de
                conciliation ou le tribunal compétent tranchent en dernier recours. Je
                n&apos;ai pas vocation à arbitrer ce type de désaccord : mon rôle
                s&apos;arrête à l&apos;intervention et à la facture qui la documente. Pour
                les copropriétés, un cas particulier est traité dans mon article sur les{" "}
                <Link href="/agences-syndics-nice/" className="text-steel underline">
                  clés de hall et digicodes en copropriété
                </Link>
                .
              </p>
            </div>

            <ArticleOpinion quote="Pour un propriétaire-loueur, je recommande presque toujours le cylindre à reproduction protégée dès la première pose. C'est un peu plus cher à l'achat, mais ça règle le problème une fois pour toutes, plutôt que de rouvrir le sujet à chaque changement de locataire." />

            <ArticleKeyTakeaways
              points={[
                "La cause du changement détermine qui paie, pas le simple statut propriétaire/locataire.",
                "Clés perdues et usure normale restent à la charge du locataire (décret n°87-712).",
                "Vétusté et changement de locataire relèvent généralement du propriétaire.",
                "En location saisonnière, un cylindre à reproduction protégée et débrayable évite l'essentiel des soucis.",
              ]}
            />

            <div>
              <ArticleSectionHeading number={9} id="faq">
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
          <CtaBlock title="Besoin d'un changement de serrure à Nice ?" />
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
