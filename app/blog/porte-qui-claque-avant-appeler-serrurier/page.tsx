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
import ArticleWarning from "@/components/ArticleWarning";
import ArticleKeyTakeaways from "@/components/ArticleKeyTakeaways";
import AuthorBox from "@/components/AuthorBox";
import ArticleNav from "@/components/ArticleNav";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBadges from "@/components/TrustBadges";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema, faqSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";

const HREF = "/blog/porte-qui-claque-avant-appeler-serrurier/";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Porte qui claque : les bons réflexes avant d'appeler | VAF",
  description: "Porte claquée à Nice : les vérifications à faire avant d'appeler, ce qu'il ne faut pas tenter seul, et comment reconnaître une annonce à prix d'appel.",
});

const toc = [
  { id: "verrouillee", label: "Porte claquée ou porte verrouillée : la distinction clé" },
  { id: "double-cle", label: "Cherchez un double de clé ou un accès alternatif" },
  { id: "ne-forcez-pas", label: "Ne tentez pas de forcer la porte vous-même" },
  { id: "prix-appel", label: "Méfiez-vous des annonces à prix d'appel trop bas" },
  { id: "methode-radio", label: "Comment un serrurier ouvre une porte claquée" },
  { id: "arrivee", label: "Ce que je fais concrètement à mon arrivée" },
  { id: "faq", label: "Foire aux questions" },
];

const faqItems = [
  {
    question: "La méthode radio abîme-t-elle la porte ?",
    answer:
      "Non, c'est justement son intérêt : bien maîtrisée, elle libère le mécanisme sans dommage dans la quasi-totalité des cas. C'est une manipulation délicate, ce qui justifie de la laisser à un professionnel plutôt que de l'improviser.",
  },
  {
    question: "Ma porte est verrouillée à clé, pas juste claquée : est-ce différent ?",
    answer:
      "Oui, le diagnostic et la méthode d'ouverture changent selon que seul le pêne demi-tour est engagé (porte claquée) ou que le pêne dormant est verrouillé à clé. C'est la première chose que je vérifie en arrivant.",
  },
  {
    question: "Combien de temps prend une ouverture de porte claquée ?",
    answer:
      "Dans la majorité des cas, l'intervention se fait en quelques minutes une fois sur place, hors temps de trajet. La durée exacte dépend du type de serrure et de son état.",
  },
  {
    question: "Puis-je appeler à n'importe quelle heure, y compris la nuit ?",
    answer:
      "Oui, j'interviens 24h/24 et 7j/7 sur Nice. Une majoration s'applique en dehors des horaires standards, toujours annoncée avant l'intervention.",
  },
  {
    question: "Comment reconnaître une annonce sérieuse en cherchant \"serrurier urgence\" ?",
    answer:
      "Méfiez-vous des prix d'appel affichés très bas pour un simple déplacement : le tarif réel grimpe souvent une fois sur place. Un prix annoncé clairement au téléphone, avant tout déplacement, reste le meilleur indicateur.",
  },
  {
    question: "Faut-il changer la serrure après une ouverture par la méthode radio ?",
    answer:
      "Pas systématiquement si la serrure fonctionne normalement ensuite. Je vous le signale uniquement si le mécanisme montre des signes de faiblesse au moment du diagnostic.",
  },
];

export default function PorteQuiClaquePage() {
  return (
    <article>
      <JsonLd
        data={blogPostingSchema({
          headline: "Porte qui claque : les bons réflexes avant d'appeler un serrurier",
          description:
            "Porte claquée à Nice : les vérifications à faire avant d'appeler, ce qu'il ne faut pas tenter seul, et comment reconnaître une annonce à prix d'appel.",
          url: `${business.domain}${HREF}`,
          datePublished: "2026-08-09",
          dateModified: "2026-09-12",
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Porte qui claque", url: `${business.domain}${HREF}` },
        ])}
      />
      <JsonLd data={faqSchema(faqItems)} />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Porte qui claque", href: HREF },
            ]}
          />
          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
            Porte qui claque : les bons réflexes avant d&apos;appeler un serrurier
          </h1>
          <ArticleByline readingMinutes={7} updatedLabel="Mis à jour le 12 septembre 2026" />
          <div className="mt-6">
            <TrustBadges />
          </div>
          <div className="mt-8">
            <ArticleSummary
              points={[
                <>
                  Une porte qui claque <strong>n&apos;est pas forcément verrouillée</strong> : essayez d&apos;abord la poignée.
                </>,
                "Ne tentez jamais de la forcer vous-même, ça abîme presque toujours l'huisserie.",
                <>
                  Méfiez-vous des <strong>prix d&apos;appel très bas</strong> affichés en ligne : le tarif réel grimpe souvent sur place.
                </>,
                "La méthode radio permet d'ouvrir sans dommage dans la quasi-totalité des cas.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className="text-slate leading-relaxed">
              C&apos;est l&apos;un des appels les plus fréquents que je reçois : une
              porte qui se referme d&apos;un coup de vent ou d&apos;un geste rapide, et
              la question qui suit immédiatement : faut-il forcer, appeler tout de suite,
              ou d&apos;abord vérifier quelque chose ? Voici l&apos;ordre que je conseille.
            </p>

            <div>
              <ArticleSectionHeading number={1} id="verrouillee">
                Porte claquée ou porte verrouillée : la distinction clé
              </ArticleSectionHeading>
              <div className="mt-2">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  Porte claquée : souvent rien de bloqué
                </h3>
                <p className="text-slate leading-relaxed">
                  Une porte qui claque ne s&apos;est pas forcément verrouillée. Sur
                  beaucoup de modèles, le pêne demi-tour se bloque au claquement, mais le
                  pêne dormant (le vrai verrouillage) ne s&apos;engage que si la porte a
                  été fermée à clé. Avant toute chose, essayez la poignée. Si elle
                  s&apos;actionne normalement, vous n&apos;avez pas besoin d&apos;un
                  serrurier. Sur les portes anciennes en bois du Vieux-Nice, le
                  battant gonfle aussi avec l&apos;humidité et finit parfois par claquer
                  plus fort que d&apos;habitude sans que rien ne soit réellement verrouillé.
                </p>
              </div>
              <div className="mt-4">
                <h3 className="font-heading font-semibold text-navy mb-1">
                  Porte verrouillée à clé : un diagnostic différent
                </h3>
                <p className="text-slate leading-relaxed">
                  Si le pêne dormant est engagé, la méthode d&apos;ouverture change
                  complètement selon le type de serrure installée (cylindre standard,
                  multipoints, modèle ancien). C&apos;est la première chose que je
                  vérifie en arrivant, avant même de sortir un outil.
                </p>
              </div>
            </div>

            <div>
              <ArticleSectionHeading number={2} id="double-cle">
                Cherchez un double de clé ou un accès alternatif
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Avant d&apos;appeler, demandez-vous si un proche, un voisin ou un membre
                de la famille ne détient pas un double. Vérifiez aussi s&apos;il existe
                un autre accès au logement (porte de service, fenêtre accessible sans
                risque) plutôt que de vous précipiter sur un service payant en urgence.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/serrurier-nice-ouverture-de-porte.webp"
                alt="Ouverture de porte par un serrurier à Nice"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <ArticleSectionHeading number={3} id="ne-forcez-pas">
                Ne tentez pas de forcer la porte vous-même
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Glisser une carte, un tournevis ou tout autre objet dans l&apos;huisserie
                abîme presque toujours le dormant ou le battant, même sans succès. Résultat :
                l&apos;intervention professionnelle qui suit coûte plus cher, parce
                qu&apos;il faut aussi réparer les dégâts causés par la tentative. Un
                diagnostic correct avant toute manipulation évite ce genre de mauvaise
                surprise.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={4} id="prix-appel">
                Méfiez-vous des annonces avec un prix affiché très bas
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                En cherchant « serrurier urgence » dans l&apos;affolement, on tombe
                souvent sur des prix d&apos;appel très attractifs (30 ou 40 € par
                exemple), annoncés pour un simple déplacement. Le tarif réel, une fois
                sur place, grimpe presque toujours bien au-delà une fois sur le pas de la
                porte.
              </p>
              <div className="mt-4">
                <ArticleWarning title="Un prix d'appel n'est pas le prix final">
                  Une intervention sérieuse pour une porte claquée descend rarement sous
                  les 100 € tout compris. Chez moi, ce tarif est annoncé à l&apos;avance
                  et fixe, sans surprise une fois sur place. Voir mes{" "}
                  <Link href="/tarifs-serrurier-nice/" className="underline">
                    tarifs détaillés
                  </Link>
                  .
                </ArticleWarning>
              </div>
              <div className="mt-4">
                <ArticleTable
                  caption="Ce qui est annoncé en ligne face au tarif réel constaté sur le terrain."
                  headers={["Annonce type", "Prix affiché", "Réalité fréquente"]}
                  rows={[
                    ["« Déplacement à partir de 30-40 € »", "30-40 €", "Tarif réel final souvent bien plus élevé sur place"],
                    ["Prix annoncé avant intervention", "Fixe, communiqué au téléphone", "Aucune surprise une fois sur place"],
                  ]}
                />
              </div>
            </div>

            <div>
              <ArticleSectionHeading number={5} id="methode-radio">
                Comment un serrurier ouvre une porte claquée sans l&apos;abîmer
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Sur la plupart des portes, j&apos;utilise la méthode radio, aussi appelée
                technique de la feuille Mika ou du by-pass : une fine plaque rigide glissée
                entre le cadre et le pêne, qui libère le mécanisme sans dommage dans la
                quasi-totalité des cas. C&apos;est plus délicat qu&apos;il n&apos;y paraît :
                mal maîtrisée, cette manipulation abîme justement ce qu&apos;elle est
                censée préserver, d&apos;où l&apos;intérêt de laisser un professionnel s&apos;en
                charger dès que la porte résiste un peu.
              </p>
            </div>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src="/images/pool/poignee-porte-serrurier-nice.webp"
                alt="Poignée de porte examinée par un serrurier à Nice"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
              />
            </div>

            <div>
              <ArticleSectionHeading number={6} id="arrivee">
                Ce que je fais concrètement à mon arrivée
              </ArticleSectionHeading>
              <p className="text-slate leading-relaxed">
                Je commence toujours par un diagnostic rapide de la serrure et du type de
                verrouillage avant de choisir la méthode d&apos;ouverture, et
                j&apos;annonce le prix avant d&apos;intervenir. L&apos;objectif est
                d&apos;ouvrir sans endommager la porte quand c&apos;est possible, plutôt
                que de forcer par défaut. J&apos;interviens dans tous les{" "}
                <Link href="/zones-intervention-nice/" className="text-steel underline">
                  quartiers de Nice
                </Link>
                , généralement en moins de 30 minutes.
              </p>
            </div>

            <ArticleOpinion quote="La première question que je pose au téléphone, c'est toujours : la poignée s'actionne-t-elle ? Neuf appels sur dix se règlent en trente secondes rien qu'avec cette question, avant même de me déplacer." />

            <ArticleKeyTakeaways
              points={[
                "Essayez la poignée avant d'appeler : une porte claquée n'est pas toujours verrouillée.",
                "Ne forcez jamais vous-même, ça abîme l'huisserie et fait grimper la facture finale.",
                "Un prix d'appel très bas en ligne cache souvent un tarif réel bien plus élevé sur place.",
                "La méthode radio ouvre sans dommage dans la quasi-totalité des cas, entre des mains expérimentées.",
              ]}
            />

            <div>
              <ArticleSectionHeading number={7} id="faq">
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
          <CtaBlock title="Porte claquée maintenant ?" />
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
