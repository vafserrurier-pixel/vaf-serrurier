# Votre Artisan Français — vaf-serrurier.fr

Site du serrurier Benoît Jaoui (Nice), refonte complète en Next.js. Voir
`DEPLOY.md` pour la mise en ligne.

## Développement local

```bash
npm install
npm run dev
```

Ouvrir [http://localhost:3000](http://localhost:3000).

## Variables d'environnement

Copier `.env.example` en `.env.local` et renseigner :

- `RESEND_API_KEY` — envoi du formulaire de contact (obligatoire pour que le
  formulaire fonctionne réellement, sinon il échoue proprement avec un
  message d'erreur)
- `GOOGLE_PLACES_API_KEY` / `GOOGLE_PLACE_ID` — optionnel, active le carrousel
  d'avis Google en direct (sinon 3 avis réels connus s'affichent par défaut)

## Stack

Next.js (App Router, SSG) + TypeScript + Tailwind CSS v4. Détail de
l'architecture et des décisions dans `lib/business.ts` et `lib/quartiers.ts`.

## Commandes utiles

```bash
npm run build   # build de production
npm run lint    # vérification ESLint
npm run start   # sert le build de production en local
```
