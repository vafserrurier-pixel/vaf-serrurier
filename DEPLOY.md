# Déploiement — vaf-serrurier.fr sur Vercel

Ce guide part du principe que le code est prêt (c'est le cas) et que
l'hébergement se fait sur Vercel, le domaine restant enregistré chez
O2switch pour le DNS uniquement — voir la conversation avec Claude pour le
détail des raisons de ce choix.

## 1. Créer le dépôt GitHub

Le dépôt Git local existe déjà (`git init` fait, premier commit prêt). Il
manque juste un dépôt distant privé :

```bash
gh repo create vaf-serrurier --private --source=. --remote=origin
git push -u origin main
```

(Ou créer le dépôt vide depuis github.com puis `git remote add origin <url>`
et `git push -u origin main`.)

## 2. Connecter Vercel

1. Créer un compte sur [vercel.com](https://vercel.com) si besoin (avec le
   compte GitHub, le plus simple)
2. "Add New Project" → importer le dépôt `vaf-serrurier`
3. Vercel détecte Next.js automatiquement, aucune configuration de build à
   changer

## 3. Variables d'environnement

Dans les réglages du projet Vercel (Settings → Environment Variables),
ajouter :

- `RESEND_API_KEY` — clé créée sur [resend.com](https://resend.com/api-keys)
- `RESEND_FROM_EMAIL` — optionnel, sinon utilise le sandbox Resend
- `GOOGLE_PLACES_API_KEY` / `GOOGLE_PLACE_ID` — optionnel, pour les avis
  Google en direct

Puis redéployer (ou le premier déploiement les prendra en compte s'ils sont
ajoutés avant).

## 4. Domaine personnalisé

1. Dans le projet Vercel → Settings → Domains → ajouter `vaf-serrurier.fr`
   et `www.vaf-serrurier.fr`
2. Vercel donne les enregistrements DNS à créer (un A record pour l'apex,
   un CNAME pour www)
3. Aller dans le panel O2switch → zone DNS du domaine → créer ces
   enregistrements. Le domaine reste enregistré chez O2switch, seul le DNS
   pointe vers Vercel.
4. Attendre la propagation DNS (quelques minutes à quelques heures) —
   Vercel émet automatiquement le certificat HTTPS une fois le DNS validé

## 5. Vérifications post-déploiement (avant de couper l'ancien site)

- [ ] Tester le formulaire de contact en conditions réelles (email bien
      reçu à vafserrurier@gmail.com)
- [ ] Tester les liens `tel:` sur un vrai téléphone
- [ ] Vérifier le sitemap : `https://vaf-serrurier.fr/sitemap.xml`
- [ ] Soumettre le sitemap à Google Search Console
- [ ] Score PageSpeed Insights (mobile + desktop) sur l'accueil et une page
      quartier
- [ ] Vérifier les headers de sécurité via
      [securityheaders.com](https://securityheaders.com)
- [ ] Réduire le TTL DNS chez O2switch quelques jours avant la bascule
      finale, pour pouvoir revenir en arrière rapidement en cas de problème
- [ ] Garder l'ancien WordPress accessible (fichiers + base de données) au
      moins 30 jours après la bascule
