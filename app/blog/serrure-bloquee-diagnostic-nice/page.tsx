import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import ArticleSummary from "@/components/ArticleSummary";
import ArticleByline from "@/components/ArticleByline";
import ArticleLayout from "@/components/ArticleLayout";
import ArticleSectionHeading from "@/components/ArticleSectionHeading";
import AuthorBox from "@/components/AuthorBox";
import ArticleNav from "@/components/ArticleNav";
import FaqAccordion from "@/components/FaqAccordion";
import TrustBadges from "@/components/TrustBadges";
import { business } from "@/lib/business";
import { blogPostingSchema, breadcrumbSchema } from "@/lib/schema";
import { buildMetadata } from "@/lib/metadata";
import { blogPostByHref } from "@/lib/blogPosts";

const HREF = "/blog/serrure-bloquee-diagnostic-nice/";
const TITLE = "Serrure bloquée à Nice : comment identifier la panne avant d'appeler un serrurier ?";
const DESCRIPTION =
  "Clé qui ne tourne plus, qui tourne dans le vide, pêne coincé : repérez l'origine du blocage, les gestes sans risque et quand appeler un serrurier à Nice.";

export const metadata: Metadata = buildMetadata({
  path: HREF,
  title: "Serrure bloquée à Nice : identifier la panne",
  description: DESCRIPTION,
  article: { author: business.firstName, readingTime: "8 min" },
  image: blogPostByHref(HREF)?.image,
});

const toc = [
  { id: "pourquoi", label: "Pourquoi une serrure se bloque" },
  { id: "reconnaitre", label: "Reconnaître l'origine du problème" },
  { id: "que-faire", label: "Que faire quand une serrure est bloquée" },
  { id: "reparer-remplacer", label: "Réparer la serrure ou remplacer le cylindre" },
  { id: "appeler", label: "Quand appeler un serrurier à Nice" },
  { id: "prix", label: "Le prix d'un dépannage" },
  { id: "eviter", label: "Éviter que la serrure se bloque de nouveau" },
  { id: "faq", label: "Questions fréquentes" },
];

const faqItems = [
  {
    question: "Peut-on ouvrir soi-même une serrure bloquée avec une carte ou un tournevis ?",
    answer:
      "Non. Une carte ne repousse que le pêne à demi-tour d'une porte simplement claquée, pas celui d'une porte verrouillée à clé. Sur une serrure bloquée, bricoler abîme le plus souvent le cylindre ou la gâche.",
  },
  {
    question: "Une serrure bloquée est-elle le signe d'une tentative d'effraction ?",
    answer:
      "Pas forcément : un blocage vient très souvent de l'usure ou d'un défaut d'alignement. Mais des rayures autour du cylindre, un cadre abîmé, ou une serrure qui fonctionnait la veille et se bloque après une absence justifient de s'arrêter, de photographier avant de toucher à quoi que ce soit, et de le signaler.",
  },
  {
    question: "Combien de temps peut-on attendre avant d'appeler ?",
    answer:
      "Si la porte se ferme et se verrouille encore malgré une clé dure, vous pouvez attendre un créneau en journée, sans forcer. Si elle ne se verrouille plus, ou si vous êtes bloqué dehors ou dedans, c'est une urgence.",
  },
];

const linkClass = "text-steel underline";
const h3Class = "font-heading font-semibold text-navy mb-1";
const pClass = "text-slate leading-relaxed";

export default function SerrureBloqueeDiagnosticPage() {
  const post = blogPostByHref(HREF)!;
  return (
    <article>
      <JsonLd
        data={blogPostingSchema({
          headline: TITLE,
          description: DESCRIPTION,
          url: `${business.domain}${HREF}`,
          datePublished: post.datePublished,
          dateModified: post.dateModified,
          image: post.image,
        })}
      />
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          { name: "Serrure bloquée : identifier la panne", url: `${business.domain}${HREF}` },
        ])}
      />

      <section className="bg-white border-b border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <Breadcrumbs
            items={[
              { name: "Accueil", href: "/" },
              { name: "Blog", href: "/blog/" },
              { name: "Serrure bloquée : identifier la panne", href: HREF },
            ]}
          />
          <span className={`inline-block text-xs font-semibold px-2.5 py-1 rounded-full mb-3 ${post.tagClass}`}>
            {post.category}
          </span>

          <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">{TITLE}</h1>
          <ArticleByline readingMinutes={post.readingMinutes} updatedLabel="Publié le 10 octobre 2026" />
          <div className="mt-6">
            <TrustBadges />
          </div>
          <div className="mt-8">
            <ArticleSummary
              points={[
                "Une serrure bloquée n'est pas toujours une serrure à changer : la clé, le cylindre, le mécanisme ou la porte peuvent être en cause.",
                "Deux tests simples : la clé de secours, puis la serrure porte ouverte.",
                "Ne forcez pas : une clé cassée dans le cylindre complique tout.",
                "Si la porte ne se verrouille plus ou reste fermée, appelez.",
              ]}
            />
          </div>
        </div>
      </section>

      <section className="py-12">
        <div className="mx-auto max-w-5xl px-4">
          <ArticleLayout toc={toc}>
            <p className={pClass}>
              Une clé qui ne tourne plus, qui tourne sans rien entraîner ou qui n&apos;entre plus : sur le
              moment, tout cela s&apos;appelle « serrure bloquée ». Ce sont pourtant des pannes
              différentes, qui n&apos;ont ni la même cause ni la même urgence. Quelques observations,
              faites sans outil et sans rien forcer, suffisent souvent à savoir si le problème vient de la
              clé, du cylindre, du mécanisme ou de la porte elle-même. Ce guide vous aide à faire ce tri,
              et à repérer le moment où il vaut mieux poser la clé et appeler.
            </p>

            <div className="relative aspect-[16/9] rounded-xl overflow-hidden">
              <Image
                src={post.image}
                alt="Test de la clé dans le cylindre d'une porte d'entrée ancienne, porte entrouverte"
                fill
                sizes="(min-width: 1024px) 760px, 100vw"
                className="object-cover"
                priority
              />
            </div>

            <div>
              <ArticleSectionHeading number={1} id="pourquoi">
                Pourquoi une serrure se bloque-t-elle ?
              </ArticleSectionHeading>
              <p className={pClass}>Quatre origines reviennent le plus souvent.</p>
              <p className={`${pClass} mt-3`}>
                <strong className="text-navy">Le cylindre.</strong> C&apos;est la pièce qui reçoit la clé,
                aussi appelée barillet. Avec la poussière, l&apos;humidité et les années, ses petites pièces
                internes ne s&apos;alignent plus correctement et la clé résiste. L&apos;air salin du
                littoral n&apos;arrange rien quand le cylindre n&apos;a jamais été entretenu.
              </p>
              <p className={`${pClass} mt-3`}>
                <strong className="text-navy">La clé.</strong> Une copie approximative, une clé usée ou
                légèrement tordue suffit à bloquer un cylindre pourtant en bon état.
              </p>
              <p className={`${pClass} mt-3`}>
                <strong className="text-navy">Le mécanisme.</strong> Le cylindre fait pivoter une petite
                pièce, la came, qui tire le pêne, la partie mobile qui s&apos;enfonce dans le cadre pour
                fermer la porte. Si cette pièce casse ou se désolidarise, la clé tourne sans effet.
              </p>
              <p className={`${pClass} mt-3`}>
                <strong className="text-navy">La porte elle-même.</strong> Une porte en bois travaille d&apos;une
                saison à l&apos;autre, des charnières s&apos;affaissent, la gâche (la plaque du cadre qui
                reçoit le pêne) n&apos;est plus tout à fait en face. Le pêne frotte alors contre elle et ne
                coulisse plus. La serrure est saine : c&apos;est la porte qui la bloque.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={2} id="reconnaitre">
                Comment reconnaître l&apos;origine du problème ?
              </ArticleSectionHeading>
              <p className={pClass}>
                Repérez d&apos;abord un point qui change tout :{" "}
                <strong className="text-navy">la porte est-elle ouverte ou fermée ?</strong> Porte ouverte,
                vous pouvez tester la serrure sans risque de vous retrouver dehors. Porte fermée, la
                prudence est de mise. Si la porte s&apos;est simplement claquée sans être verrouillée à
                clé, c&apos;est un autre cas : voir{" "}
                <Link href="/blog/porte-qui-claque-serrurier-nice/" className={linkClass}>
                  porte qui claque
                </Link>
                .
              </p>

              <div className="mt-6">
                <h3 className={h3Class}>La clé n&apos;entre pas, ou entre difficilement</h3>
                <p className={pClass}>
                  C&apos;est presque toujours un obstacle dans le canal (saleté, fragment) ou une clé
                  abîmée. Essayez votre clé de secours. Si elle entre normalement, c&apos;est la clé
                  principale qui est en cause : faites-en refaire une copie à partir d&apos;une clé en bon
                  état, pas à partir de la copie fatiguée. Si aucune clé n&apos;entre, le problème est dans
                  le cylindre. À éviter : pousser un objet dans l&apos;entrée de clé. À distance, impossible
                  de savoir si un fragment est logé au fond.
                </p>
              </div>

              <div className="mt-6">
                <h3 className={h3Class}>La clé entre mais ne tourne plus, ou très dur</h3>
                <p className={pClass}>
                  Deux causes très différentes se cachent derrière ce symptôme, et un test simple les
                  départage. Porte ouverte, tournez la clé : si le pêne sort et rentre librement, le
                  cylindre et le mécanisme fonctionnent, et le blocage vient de l&apos;alignement entre la
                  porte et la gâche. Porte fermée, essayez de tourner doucement la clé tout en poussant la
                  porte vers le cadre, ou en la soulevant légèrement par la poignée. Si cela cède, c&apos;est
                  le même diagnostic. Si la clé résiste aussi porte ouverte, le cylindre ou le mécanisme est
                  en cause.
                </p>
                <p className={`${pClass} mt-3`}>
                  Sur une serrure multipoints (plusieurs points de fermeture sur la hauteur de la porte), un
                  seul essai suffit : ne refermez jamais la porte pênes sortis, ils heurteraient le cadre.
                </p>
                <p className={`${pClass} mt-3`}>
                  À éviter : serrer la clé avec une pince. C&apos;est la façon la plus rapide de la casser
                  dans le cylindre (voir{" "}
                  <Link href="/blog/cle-cassee-serrure-que-faire-nice/" className={linkClass}>
                    que faire quand une clé casse dans la serrure
                  </Link>
                  ).
                </p>
              </div>

              <div className="mt-6">
                <h3 className={h3Class}>La clé tourne dans le vide</h3>
                <p className={pClass}>
                  La clé tourne sans résistance, mais le pêne ne bouge pas : la pièce qui les relie a
                  lâché, ou le cylindre est hors d&apos;usage. Aucun geste à la maison n&apos;y remédie, un
                  lubrifiant ne recolle pas une pièce cassée. Si la porte est ouverte, ne la refermez pas
                  sans avoir de quoi la rouvrir. Si elle est fermée, cessez d&apos;insister.
                </p>
              </div>

              <div className="mt-6">
                <h3 className={h3Class}>La poignée ou le pêne reste coincé</h3>
                <p className={pClass}>
                  La poignée ne revient plus, ou le pêne reste sorti : le ressort de la poignée est
                  peut-être fatigué, ou le pêne coince dans la gâche. Même test : poussez la porte vers le
                  cadre en actionnant la poignée. Si elle se libère, l&apos;alignement est en cause. Sur une
                  multipoints, vérifiez aussi que la poignée est dans la position prévue pour votre modèle
                  avant de tourner la clé.
                </p>
              </div>

              <div className="mt-6">
                <h3 className={h3Class}>La porte ferme mal, ou ne se verrouille plus</h3>
                <p className={pClass}>
                  La clé tourne, mais la porte ne se verrouille pas complètement. Regardez si elle frotte
                  au sol ou contre le cadre, si le jeu est irrégulier, s&apos;il y a des traces de
                  frottement sur la gâche : ce sont les signes d&apos;une porte affaissée. Remplacer le
                  cylindre ne servirait à rien, c&apos;est l&apos;alignement qu&apos;il faut traiter.
                </p>
              </div>
            </div>

            <div>
              <ArticleSectionHeading number={3} id="que-faire">
                Que faire quand une serrure est bloquée ?
              </ArticleSectionHeading>
              <ol className="list-decimal pl-5 flex flex-col gap-2.5 text-slate leading-relaxed">
                <li>
                  <strong className="text-navy">Arrêtez de forcer.</strong> Un pied de biche ou une pince
                  sur la clé transforment une panne simple en cylindre à remplacer, voire en clé cassée à
                  extraire.
                </li>
                <li>
                  <strong className="text-navy">Faites les deux tests</strong> : la clé de secours, puis la
                  serrure porte ouverte si la situation le permet.
                </li>
                <li>
                  <strong className="text-navy">Si le cylindre est seulement dur et encrassé</strong>, un
                  peu de lubrifiant adapté dans l&apos;entrée de clé peut le soulager : du graphite en
                  poudre, ou une petite quantité de WD-40. Jamais d&apos;huile de cuisine, qui devient
                  collante (voir{" "}
                  <Link href="/blog/entretien-serrure/" className={linkClass}>
                    l&apos;entretien d&apos;une serrure
                  </Link>
                  ). Cela n&apos;agit pas sur une pièce cassée ni sur un défaut d&apos;alignement. Si le
                  blocage revient, faites contrôler le cylindre.
                </li>
                <li>
                  <strong className="text-navy">
                    Ne démontez pas un cylindre sur une porte que vous ne pouvez plus rouvrir.
                  </strong>
                </li>
                <li>
                  <strong className="text-navy">Si vous ne pouvez plus verrouiller votre porte</strong>,
                  c&apos;est une urgence, quelle que soit l&apos;heure : un logement qui ne ferme pas
                  n&apos;est pas protégé.
                </li>
              </ol>
              <p className={`${pClass} mt-4`}>
                Arrêtez dès que la clé reste coincée, que la résistance augmente ou que vous sentez quelque
                chose céder dans le mécanisme.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={4} id="reparer-remplacer">
                Faut-il réparer la serrure ou remplacer le cylindre ?
              </ArticleSectionHeading>
              <p className={pClass}>
                Tout dépend de ce qui est réellement en cause, et le remplacement n&apos;est pas toujours la
                bonne réponse.
              </p>
              <ul className="list-disc pl-5 mt-3 flex flex-col gap-2.5 text-slate leading-relaxed">
                <li>
                  <strong className="text-navy">Alignement de la porte ou de la gâche :</strong> ni le
                  cylindre ni la serrure ne sont à changer, c&apos;est la porte qu&apos;il faut régler.
                </li>
                <li>
                  <strong className="text-navy">Cylindre encrassé, usé, qui force depuis longtemps :</strong>{" "}
                  un blocage vient le plus souvent du seul cylindre. Le remplacer, sans toucher au reste,
                  règle le problème.
                </li>
                <li>
                  <strong className="text-navy">Mécanisme interne (came, ressort, boîtier) :</strong> la
                  réparation est possible si les pièces existent encore. Sur une serrure ancienne dont les
                  pièces ne se trouvent plus, remplacer le boîtier devient plus raisonnable.
                </li>
                <li>
                  <strong className="text-navy">Après une tentative d&apos;effraction :</strong> mieux vaut
                  remplacer ce qui a été forcé, même si la serrure semble encore fonctionner.
                </li>
              </ul>
              <p className={`${pClass} mt-4`}>
                Le principe : remplacer ce qui est cassé, pas plus. Voir la page{" "}
                <Link href="/changement-serrure-nice/" className={linkClass}>
                  changement de serrure à Nice
                </Link>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={5} id="appeler">
                Quand appeler un serrurier à Nice ?
              </ArticleSectionHeading>
              <p className={pClass}>
                Appelez dans ces cas : la porte est fermée et la clé ne tourne plus ou tourne dans le vide ;
                un morceau de clé est resté dans le cylindre ; vous ne pouvez plus verrouiller la porte ;
                vous voyez des traces de forçage (voir{" "}
                <Link href="/blog/que-faire-apres-cambriolage-nice/" className={linkClass}>
                  que faire après un cambriolage
                </Link>
                ).
              </p>
              <p className={`${pClass} mt-3`}>
                Pour un diagnostic précis au téléphone, préparez : lequel des cinq symptômes ci-dessus, porte
                ouverte ou fermée, serrure simple ou multipoints, âge approximatif de la porte, depuis quand,
                clé de secours ou non. Si un enfant, une personne âgée ou un animal est enfermé derrière la
                porte, dites-le en premier : cela change l&apos;ordre des priorités.
              </p>
              <p className={`${pClass} mt-3`}>
                Je vous donne un prix avant de me déplacer, et j&apos;essaie d&apos;abord d&apos;ouvrir sans
                casse quand c&apos;est possible. La page{" "}
                <Link href="/urgence-serrurier-nice/" className={linkClass}>
                  serrurier en urgence à Nice
                </Link>{" "}
                détaille ma manière de procéder, celle sur l&apos;
                <Link href="/ouverture-de-porte-nice/" className={linkClass}>
                  ouverture de porte
                </Link>{" "}
                les cas particuliers.
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={6} id="prix">
                Quel est le prix d&apos;un dépannage pour une serrure bloquée à Nice ?
              </ArticleSectionHeading>
              <p className={pClass}>
                Il dépend de quatre choses : la nature de la panne, le type de serrure, les pièces à
                remplacer s&apos;il y en a, et l&apos;heure d&apos;intervention.
              </p>
              <p className={`${pClass} mt-3`}>
                Voici ce qui figure sur ma grille : l&apos;ouverture d&apos;une porte claquée ou d&apos;une
                porte verrouillée à cylindre européen est à <strong className="text-navy">149 € TTC</strong>{" "}
                en journée. Après 19 h, le week-end et les jours fériés, c&apos;est 189 € pour une porte
                claquée et 209 € pour une porte verrouillée. Les serrures renforcées comme Fichet sont sur
                devis. Si le cylindre doit être remplacé, comptez à partir de 249 € TTC pour un cylindre
                standard, déplacement, main d&apos;œuvre et clés neuves inclus. Le total de votre situation
                vous est confirmé avant que je commence. Détail sur la page{" "}
                <Link href="/tarifs-serrurier-nice/" prefetch={false} className={linkClass}>
                  tarifs serrurier à Nice
                </Link>
                , et dans l&apos;article{" "}
                <Link href="/blog/prix-serrurier-nice-guide/" className={linkClass}>
                  combien coûte un serrurier à Nice
                </Link>
                .
              </p>
            </div>

            <div>
              <ArticleSectionHeading number={7} id="eviter">
                Comment éviter que la serrure se bloque de nouveau ?
              </ArticleSectionHeading>
              <ul className="list-disc pl-5 flex flex-col gap-2.5 text-slate leading-relaxed">
                <li>
                  <strong className="text-navy">Gardez une clé de secours en bon état</strong>, et faites
                  vos copies à partir de l&apos;original.
                </li>
                <li>
                  <strong className="text-navy">Réagissez au premier signal :</strong> une clé qui force un
                  peu plus chaque semaine annonce le blocage. Mieux vaut agir à ce moment-là qu&apos;un soir
                  de week-end.
                </li>
                <li>
                  <strong className="text-navy">Entretenez le cylindre</strong> avec un lubrifiant adapté,
                  de temps en temps.
                </li>
                <li>
                  <strong className="text-navy">Ne claquez pas la porte</strong>, qui malmène le pêne et la
                  gâche.
                </li>
                <li>
                  <strong className="text-navy">Surveillez la porte :</strong> une porte qui commence à
                  frotter prévient avant que la serrure ne bloque.
                </li>
              </ul>
            </div>

            <div>
              <ArticleSectionHeading number={8} id="faq">
                Questions fréquentes
              </ArticleSectionHeading>
              <FaqAccordion items={faqItems} />
            </div>

            <div>
              <h2 className="font-heading text-xl font-bold text-navy mb-2">En résumé</h2>
              <p className={pClass}>
                Une serrure bloquée est un symptôme, pas un diagnostic. Selon que la clé n&apos;entre pas, ne
                tourne pas, tourne dans le vide ou que la porte est désalignée, le remède diffère et le
                remplacement n&apos;est pas toujours nécessaire. Faites les deux tests, n&apos;insistez pas,
                et si la porte est fermée ou ne se verrouille plus,{" "}
                <Link href="/urgence-serrurier-nice/" className={linkClass}>
                  appelez : je vous donne un prix avant de me déplacer
                </Link>
                , de jour comme de nuit.
              </p>
            </div>

            <AuthorBox />
          </ArticleLayout>
        </div>
      </section>

      <section className="bg-white border-y border-navy/10">
        <div className="mx-auto max-w-3xl px-4 py-10">
          <CtaBlock title="Une serrure bloquée à Nice ?" />
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
