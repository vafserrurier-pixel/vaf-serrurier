import type { Metadata } from "next";
import Link from "next/link";
import Breadcrumbs from "@/components/Breadcrumbs";
import CtaBlock from "@/components/CtaBlock";
import JsonLd from "@/components/JsonLd";
import { business } from "@/lib/business";
import { breadcrumbSchema } from "@/lib/schema";

export const metadata: Metadata = {
  alternates: { canonical: "https://vaf-serrurier.fr/blog/certification-a2p-serrure/" },
  title: "Certification A2P : ce que ça change pour votre serrure | VAF",
  description:
    "A2P, une ou trois étoiles : ce que signifie cette certification sur une serrure, un cylindre ou un blindage, et comment vérifier qu'elle est authentique.",
};

export default function CertificationA2pPage() {
  return (
    <article className="mx-auto max-w-3xl px-4 py-10">
      <JsonLd
        data={breadcrumbSchema([
          { name: "Accueil", url: business.domain },
          { name: "Blog", url: `${business.domain}/blog/` },
          {
            name: "Certification A2P",
            url: `${business.domain}/blog/certification-a2p-serrure/`,
          },
        ])}
      />
      <Breadcrumbs
        items={[
          { name: "Accueil", href: "/" },
          { name: "Blog", href: "/blog/" },
          { name: "Certification A2P", href: "/blog/certification-a2p-serrure/" },
        ]}
      />
      <h1 className="font-heading text-3xl sm:text-4xl font-bold text-navy">
        Certification A2P : ce que ce sigle change vraiment pour votre serrure
      </h1>

      <div className="prose-content mt-8 flex flex-col gap-6 text-slate leading-relaxed">
        <p>
          Vous avez sûrement déjà vu ce sigle sur l&apos;emballage d&apos;un cylindre ou
          dans la fiche technique d&apos;une serrure : A2P, parfois suivi d&apos;une,
          deux ou trois étoiles. C&apos;est l&apos;un des rares repères réellement
          vérifiables dans un secteur où beaucoup d&apos;annonces parlent de « haute
          sécurité » sans rien de concret derrière.
        </p>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Qu&apos;est-ce que la certification A2P
          </h2>
          <p>
            A2P (Assurance Prévention Protection) est une certification française
            délivrée par le CNPP, un organisme indépendant, après des tests en
            laboratoire. Elle s&apos;applique aux serrures, cylindres, blocs-portes
            blindés, coffres-forts et systèmes d&apos;alarme. Contrairement à une
            mention commerciale comme « haute sécurité » ou « anti-effraction », c&apos;est
            un label attribué après des essais standardisés, pas une formule choisie
            librement par le fabricant.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Une, deux ou trois étoiles : une échelle, pas un chiffre marketing
          </h2>
          <p>
            Le nombre d&apos;étoiles correspond à un niveau de résistance testé en
            laboratoire face à des outils d&apos;effraction courants : plus il y a
            d&apos;étoiles, plus le produit a résisté longtemps aux essais. Ce
            n&apos;est pas une question de prix affiché ou de design, mais d&apos;un
            résultat de test reproductible. Un cylindre 1 étoile et un cylindre 3
            étoiles peuvent se ressembler visuellement tout en offrant un niveau de
            résistance très différent.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Pourquoi ça compte, au-delà de la sécurité elle-même
          </h2>
          <p>
            Au-delà de la résistance physique, disposer d&apos;un équipement
            certifié A2P facilite généralement les démarches après un sinistre.
            Beaucoup de contrats d&apos;assurance habitation en tiennent compte, en
            particulier pour les logements avec des biens de valeur ou dans certaines
            zones. Je vous invite à vérifier les conditions exactes de votre propre
            contrat plutôt que de vous fier à une règle générale, chaque assureur
            fixant ses propres critères.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Comment vérifier qu&apos;un produit est vraiment certifié
          </h2>
          <p>
            Le marquage A2P doit apparaître directement sur le produit (souvent sur
            la têtière du cylindre ou la plaque de la serrure), pas seulement sur une
            plaquette commerciale ou un site internet. En cas de doute, vous pouvez
            demander à votre serrurier de vous montrer cette marque avant la pose, ou
            vérifier la référence exacte du produit auprès du fabricant. Une
            expression comme « norme A2P » sans étoile précisée, ou « équivalent
            A2P », n&apos;a pas de valeur certifiée.
          </p>
        </div>

        <div>
          <h2 className="font-heading text-xl font-bold text-navy mb-2">
            Mon approche sur le choix du niveau
          </h2>
          <p>
            Je pose des cylindres et serrures de marques reconnues (Fichet, Picard,
            Heraclès, Cisa, Vak selon les cas) et je peux vous montrer le marquage
            avant l&apos;installation. Je diagnostique toujours la porte avant de
            recommander un niveau : un logement en étage sans antécédent
            n&apos;a pas les mêmes besoins qu&apos;un rez-de-chaussée exposé ou un
            logement ayant déjà subi une tentative d&apos;effraction.
          </p>
        </div>
      </div>

      <div className="mt-10">
        <CtaBlock title="Une question sur le niveau de certification adapté à votre porte ?" />
      </div>

      <p className="mt-6 text-sm text-slate">
        Voir aussi :{" "}
        <Link href="/changement-serrure-nice/" className="text-steel underline">
          changement de serrure
        </Link>{" "}
        et{" "}
        <Link href="/installation-porte-blindee-nice/" className="text-steel underline">
          installation de porte blindée
        </Link>
        .
      </p>
    </article>
  );
}
