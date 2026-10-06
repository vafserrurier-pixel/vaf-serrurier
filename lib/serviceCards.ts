// Source unique des icônes + descriptions courtes utilisées à la fois par
// ServiceGrid (accueil, pages secteur, fond navy) et RelatedServicesGrid
// (pages quartier/commune/service, fond blanc) : pour ne jamais avoir deux
// textes différents pour le même service selon la page.
//
// Le texte est une fonction (lieu) => string plutôt qu'une chaîne fixe : ça
// permet d'injecter le nom réel du quartier/commune dans la phrase existante
// (au lieu de réécrire une phrase différente par page, ce qui finirait par
// ressembler à du contenu généré en série).
//
// `image` : reprend la MÊME photo réelle que le hero de la page du service
// (jamais une photo différente ni une photo stock/générée), pour que la
// carte de la grille et la page vers laquelle elle mène montrent le même
// visuel. Deux services peuvent partager le même fichier quand leurs pages
// respectives partagent déjà cette photo (serrure carénée / bloc-porte
// blindé, ouverture / installation de coffre-fort) : c'est un cas existant,
// pas une duplication introduite ici, mais un vrai candidat à une prise de
// vue dédiée. Un service sans `image` (ex. tarifs) retombe sur le
// traitement de secours (fond navy + icône) dans ServiceGrid/RelatedServicesGrid.

import {
  WrenchIcon,
  DoorIcon,
  KeyIcon,
  ShieldIcon,
  AlertLockIcon,
  SafeIcon,
  PriceTagIcon,
  HandshakeIcon,
} from "@/components/Icons";
import type { Locale } from "./locale";
import type { ComponentType } from "react";

type IconProps = { className?: string };
type ServiceCard = {
  text: (lieu: string) => string;
  Icon: ComponentType<IconProps>;
  image?: { src: string; alt: string };
};

export const serviceCardsByLocale: Record<Locale, Record<string, ServiceCard>> = {
  fr: {
    "/urgence-serrurier-nice/": {
      text: (lieu) =>
        `Serrure bloquée, cylindre grippé, clé qui force ${lieu} : je diagnostique la panne avant d'intervenir, et je répare plutôt que je ne remplace quand c'est possible.`,
      Icon: WrenchIcon,
      image: {
        src: "/images/serrurier-nice-depannage-reparation.webp",
        alt: "Dépannage serrurier Nice",
      },
    },
    "/ouverture-de-porte-nice/": {
      text: (lieu) =>
        `Porte claquée ou fermée à clé ${lieu} : ouverture sans casse quand la configuration le permet, prix annoncé avant le moindre outil sorti.`,
      Icon: DoorIcon,
      image: {
        src: "/images/serrurier-nice-ouverture-de-porte.webp",
        alt: "Ouverture de porte Nice",
      },
    },
    "/changement-serrure-nice/": {
      text: (lieu) =>
        `Remplacement de cylindre ou de serrure complète ${lieu}, multipoints compris. Pose réglée et testée, pas juste vissée.`,
      Icon: KeyIcon,
      image: {
        src: "/images/serrurier-nice-changement-de-serrure.webp",
        alt: "Changement de serrure Nice",
      },
    },
    "/serrure-carenee-nice/": {
      text: (lieu) =>
        `Renfort intermédiaire entre cylindre standard et blindage complet ${lieu}, sans reprendre toute la porte.`,
      Icon: KeyIcon,
      image: {
        src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
        alt: "Serrure carénée Nice",
      },
    },
    "/poignee-blindee-nice/": {
      text: (lieu) =>
        `Le cylindre exposé recouvert et protégé ${lieu}, pour un renfort rapide et économique sans reprendre toute la serrure.`,
      Icon: ShieldIcon,
      image: {
        src: "/images/pool/poignee-serrure-moderne-porte-creme-nice.webp",
        alt: "Poignée blindée Nice",
      },
    },
    "/blindage-porte-nice/": {
      text: (lieu) =>
        `Renforcer votre porte existante ${lieu} sans la remplacer : bâti acier et serrure en applique, pour un budget nettement inférieur à un bloc-porte neuf.`,
      Icon: ShieldIcon,
      image: {
        src: "/images/pool/porte-blindee-pose-serrurier-nice.webp",
        alt: "Blindage de porte Nice",
      },
    },
    "/installation-porte-blindee-nice/": {
      text: (lieu) =>
        `Remplacement complet par un bloc-porte neuf ${lieu}, certifié A2P, quand la porte ou son bâti ne tiennent plus la route.`,
      Icon: DoorIcon,
      image: {
        src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
        alt: "Installation porte blindée Nice",
      },
    },
    "/mise-en-securite-apres-effraction-nice/": {
      text: (lieu) =>
        `Mise en sécurité immédiate 24h/24 ${lieu}, puis solution durable une fois le diagnostic fait. Facture détaillée pour votre assurance.`,
      Icon: AlertLockIcon,
      image: {
        src: "/images/serrurier-nice-securite-apres-effraction.webp",
        alt: "Mise en sécurité après effraction Nice",
      },
    },
    "/agences-syndics-nice/": {
      text: (lieu) =>
        `Interlocuteur unique pour vos biens en gestion locative ou en copropriété ${lieu}, tarif étudié selon le volume.`,
      Icon: HandshakeIcon,
      image: {
        src: "/images/agences-syndics-remise-de-cles.webp",
        alt: "Serrurier agences et syndics Nice",
      },
    },
    "/ouverture-de-coffre-fort-nice/": {
      text: (lieu) =>
        `Code oublié, clé perdue, coffre hérité ${lieu} : diagnostic du mécanisme et ouverture en privilégiant la méthode la moins destructive.`,
      Icon: SafeIcon,
      image: {
        src: "/images/serrurier-nice-coffre-fort.webp",
        alt: "Ouverture coffre-fort Nice",
      },
    },
    "/installation-coffre-fort-nice/": {
      text: (lieu) =>
        `Conseil sur le modèle, fixation sécurisée au sol ou au mur ${lieu} : un coffre non fixé ne protège pas grand-chose.`,
      Icon: SafeIcon,
      image: {
        src: "/images/serrurier-nice-coffre-fort.webp",
        alt: "Installation coffre-fort Nice",
      },
    },
    "/tarifs-serrurier-nice/": {
      text: (lieu) =>
        `Grille de prix complète pour chaque intervention ${lieu}, toujours annoncée avant que je me déplace.`,
      Icon: PriceTagIcon,
    },
  },
  en: {
    "/urgence-serrurier-nice/": {
      text: (lieu) =>
        `Jammed lock, stuck cylinder, key that won't turn in ${lieu}: I diagnose the fault before I intervene, and repair rather than replace whenever possible.`,
      Icon: WrenchIcon,
      image: {
        src: "/images/serrurier-nice-depannage-reparation.webp",
        alt: "Lock repair Nice",
      },
    },
    "/ouverture-de-porte-nice/": {
      text: (lieu) =>
        `Slammed shut or locked with the key inside in ${lieu}: opened without damage when the setup allows it, price quoted before any tool comes out.`,
      Icon: DoorIcon,
      image: {
        src: "/images/serrurier-nice-ouverture-de-porte.webp",
        alt: "Door opening Nice",
      },
    },
    "/changement-serrure-nice/": {
      text: (lieu) =>
        `Cylinder or full lock replacement in ${lieu}, multipoint locks included. Fitted, adjusted and tested, not just screwed in.`,
      Icon: KeyIcon,
      image: {
        src: "/images/serrurier-nice-changement-de-serrure.webp",
        alt: "Lock change Nice",
      },
    },
    "/serrure-carenee-nice/": {
      text: (lieu) =>
        `An intermediate reinforcement between a standard cylinder and full armoring in ${lieu}, without redoing the whole door.`,
      Icon: KeyIcon,
      image: {
        src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
        alt: "Shrouded lock Nice",
      },
    },
    "/poignee-blindee-nice/": {
      text: (lieu) =>
        `The exposed cylinder covered and protected in ${lieu}, a quick, affordable reinforcement without replacing the whole lock.`,
      Icon: ShieldIcon,
      image: {
        src: "/images/pool/poignee-serrure-moderne-porte-creme-nice.webp",
        alt: "Armored handle Nice",
      },
    },
    "/blindage-porte-nice/": {
      text: (lieu) =>
        `Reinforcing your existing door in ${lieu} without replacing it: steel frame and rim lock, at a much lower cost than a new door block.`,
      Icon: ShieldIcon,
      image: {
        src: "/images/pool/porte-blindee-pose-serrurier-nice.webp",
        alt: "Door reinforcement Nice",
      },
    },
    "/installation-porte-blindee-nice/": {
      text: (lieu) =>
        `Full replacement with a new A2P-certified armored door block in ${lieu}, when the door or its frame no longer hold up.`,
      Icon: DoorIcon,
      image: {
        src: "/images/serrurier-nice-porte-blindee-multipoints.webp",
        alt: "Armored door installation Nice",
      },
    },
    "/mise-en-securite-apres-effraction-nice/": {
      text: (lieu) =>
        `Immediate securing 24/7 in ${lieu}, then a lasting solution once the diagnosis is done. Detailed invoice for your insurance.`,
      Icon: AlertLockIcon,
      image: {
        src: "/images/serrurier-nice-securite-apres-effraction.webp",
        alt: "Break-in securing Nice",
      },
    },
    "/agences-syndics-nice/": {
      text: (lieu) =>
        `A single point of contact for your rental or co-ownership properties in ${lieu}, rate studied by volume.`,
      Icon: HandshakeIcon,
      image: {
        src: "/images/agences-syndics-remise-de-cles.webp",
        alt: "Property managers Nice",
      },
    },
    "/ouverture-de-coffre-fort-nice/": {
      text: (lieu) =>
        `Forgotten code, lost key, inherited safe in ${lieu}: mechanism diagnosis and opening using the least destructive method available.`,
      Icon: SafeIcon,
      image: {
        src: "/images/serrurier-nice-coffre-fort.webp",
        alt: "Safe opening Nice",
      },
    },
    "/installation-coffre-fort-nice/": {
      text: (lieu) =>
        `Advice on the right model, secure fixing to floor or wall in ${lieu}: a safe that isn't bolted down doesn't protect much.`,
      Icon: SafeIcon,
      image: {
        src: "/images/serrurier-nice-coffre-fort.webp",
        alt: "Safe installation Nice",
      },
    },
    "/tarifs-serrurier-nice/": {
      text: (lieu) => `Full price list for every callout in ${lieu}, always quoted before I travel.`,
      Icon: PriceTagIcon,
    },
  },
};
