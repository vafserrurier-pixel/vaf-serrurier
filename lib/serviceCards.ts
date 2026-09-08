// Source unique des icônes + descriptions courtes utilisées à la fois par
// ServiceGrid (accueil, pages secteur, fond navy) et RelatedServicesGrid
// (pages quartier/commune/service, fond blanc) — pour ne jamais avoir deux
// textes différents pour le même service selon la page.
//
// Le texte est une fonction (lieu) => string plutôt qu'une chaîne fixe : ça
// permet d'injecter le nom réel du quartier/commune dans la phrase existante
// (au lieu de réécrire une phrase différente par page, ce qui finirait par
// ressembler à du contenu généré en série).

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
type ServiceCard = { text: (lieu: string) => string; Icon: ComponentType<IconProps> };

export const serviceCardsByLocale: Record<Locale, Record<string, ServiceCard>> = {
  fr: {
    "/depannage-serrurier-nice/": {
      text: (lieu) =>
        `Serrure bloquée, cylindre grippé, clé qui force à ${lieu} : je diagnostique la panne avant d'intervenir, et je répare plutôt que je ne remplace quand c'est possible.`,
      Icon: WrenchIcon,
    },
    "/ouverture-de-porte-nice/": {
      text: (lieu) =>
        `Porte claquée ou fermée à clé à ${lieu} : ouverture sans casse quand la configuration le permet, prix annoncé avant le moindre outil sorti.`,
      Icon: DoorIcon,
    },
    "/changement-serrure-nice/": {
      text: (lieu) =>
        `Remplacement de cylindre ou de serrure complète à ${lieu}, multipoints compris. Pose réglée et testée, pas juste vissée.`,
      Icon: KeyIcon,
    },
    "/serrure-carenee-nice/": {
      text: (lieu) =>
        `Renfort intermédiaire entre cylindre standard et blindage complet à ${lieu}, sans reprendre toute la porte.`,
      Icon: KeyIcon,
    },
    "/installation-porte-blindee-nice/": {
      text: (lieu) =>
        `Bloc-porte blindé complet ou blindage d'une porte existante à ${lieu} : je vous aide à choisir selon l'état réel de votre porte et de votre bâti.`,
      Icon: ShieldIcon,
    },
    "/mis-en-securite-apres-effraction-nice/": {
      text: (lieu) =>
        `Mise en sécurité immédiate 24h/24 à ${lieu}, puis solution durable une fois le diagnostic fait. Facture détaillée pour votre assurance.`,
      Icon: AlertLockIcon,
    },
    "/agences-syndics-nice/": {
      text: (lieu) =>
        `Interlocuteur unique pour vos biens en gestion locative ou en copropriété à ${lieu}, tarif étudié selon le volume.`,
      Icon: HandshakeIcon,
    },
    "/ouverture-de-coffre-fort-nice/": {
      text: (lieu) =>
        `Code oublié, clé perdue, coffre hérité à ${lieu} : diagnostic du mécanisme et ouverture en privilégiant la méthode la moins destructive.`,
      Icon: SafeIcon,
    },
    "/installation-coffre-fort-nice/": {
      text: (lieu) =>
        `Conseil sur le modèle, fixation sécurisée au sol ou au mur à ${lieu} : un coffre non fixé ne protège pas grand-chose.`,
      Icon: SafeIcon,
    },
    "/tarifs-serrurier-nice/": {
      text: (lieu) =>
        `Grille de prix complète pour chaque intervention à ${lieu}, toujours annoncée avant que je me déplace.`,
      Icon: PriceTagIcon,
    },
  },
  en: {
    "/depannage-serrurier-nice/": {
      text: (lieu) =>
        `Jammed lock, stuck cylinder, key that won't turn in ${lieu}: I diagnose the fault before I intervene, and repair rather than replace whenever possible.`,
      Icon: WrenchIcon,
    },
    "/ouverture-de-porte-nice/": {
      text: (lieu) =>
        `Slammed shut or locked with the key inside in ${lieu}: opened without damage when the setup allows it, price quoted before any tool comes out.`,
      Icon: DoorIcon,
    },
    "/changement-serrure-nice/": {
      text: (lieu) =>
        `Cylinder or full lock replacement in ${lieu}, multipoint locks included. Fitted, adjusted and tested, not just screwed in.`,
      Icon: KeyIcon,
    },
    "/serrure-carenee-nice/": {
      text: (lieu) =>
        `An intermediate reinforcement between a standard cylinder and full armoring in ${lieu}, without redoing the whole door.`,
      Icon: KeyIcon,
    },
    "/installation-porte-blindee-nice/": {
      text: (lieu) =>
        `Full armored door block or reinforcing an existing door in ${lieu}: I help you choose based on the real condition of your door and building.`,
      Icon: ShieldIcon,
    },
    "/mis-en-securite-apres-effraction-nice/": {
      text: (lieu) =>
        `Immediate securing 24/7 in ${lieu}, then a lasting solution once the diagnosis is done. Detailed invoice for your insurance.`,
      Icon: AlertLockIcon,
    },
    "/agences-syndics-nice/": {
      text: (lieu) =>
        `A single point of contact for your rental or co-ownership properties in ${lieu}, rate studied by volume.`,
      Icon: HandshakeIcon,
    },
    "/ouverture-de-coffre-fort-nice/": {
      text: (lieu) =>
        `Forgotten code, lost key, inherited safe in ${lieu}: mechanism diagnosis and opening using the least destructive method available.`,
      Icon: SafeIcon,
    },
    "/installation-coffre-fort-nice/": {
      text: (lieu) =>
        `Advice on the right model, secure fixing to floor or wall in ${lieu}: a safe that isn't bolted down doesn't protect much.`,
      Icon: SafeIcon,
    },
    "/tarifs-serrurier-nice/": {
      text: (lieu) => `Full price list for every callout in ${lieu}, always quoted before I travel.`,
      Icon: PriceTagIcon,
    },
  },
};
