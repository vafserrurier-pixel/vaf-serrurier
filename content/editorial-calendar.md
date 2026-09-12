# Calendrier editorial - vaf-serrurier.fr

Genere par `scripts/generate-editorial-calendar.js`. Ne pas editer a la
main : relancer le script pour regenerer (ex. si une page est ajoutee/retiree
du site, voir `scripts/editorial-pages.js`). Le fichier JSON jumeau
(`editorial-calendar.json`) est celui lu par le workflow GitHub Action de
rappel ; ce Markdown est la version pour consultation humaine.

## Principe

- **Niveau 1** (priorite haute, 14 pages) : accueil, 4 secteurs,
  tarifs, agences-syndics, 7 pages service. 2 pages proposees a chaque cycle
  -> rotation complete tous les ~7 cycles (~2-3 semaines).
- **Niveau 2** (priorite normale, 50 pages) : 46 quartiers + 4
  communes voisines. 1 page proposee a chaque cycle -> rotation complete tous
  les ~50 cycles (~3-4 mois).
- **Cycle** : chaque lundi/mercredi/vendredi (3 par semaine).
- Calendrier genere sur 52 semaines (156 cycles) a partir du
  2026-09-14.

## Echantillon des 30 premiers jours

| Date | Niveau 1 | Niveau 1 | Niveau 2 |
|---|---|---|---|
| 2026-09-14 | Accueil | Secteur Nice Centre | Quartier : Jean-Médecin |
| 2026-09-16 | Secteur Nice Est | Secteur Nice Nord | Quartier : Carré d'Or |
| 2026-09-18 | Secteur Nice Ouest | Tarifs | Quartier : Quartier Wilson |
| 2026-09-21 | Agences & syndics | Service : Dépannage serrurier | Quartier : Quartier des Musiciens |
| 2026-09-23 | Service : Ouverture de porte | Service : Changement de serrure | Quartier : Quartier des Fleurs |
| 2026-09-25 | Service : Installation porte blindée | Service : Après effraction | Quartier : Baumettes |
| 2026-09-28 | Service : Ouverture de coffre-fort | Service : Installation de coffre-fort | Quartier : Libération |
| 2026-09-30 | Accueil | Secteur Nice Centre | Quartier : Gambetta |
| 2026-10-02 | Secteur Nice Est | Secteur Nice Nord | Quartier : Cimiez |
| 2026-10-05 | Secteur Nice Ouest | Tarifs | Quartier : Desambrois |
| 2026-10-07 | Agences & syndics | Service : Dépannage serrurier | Quartier : Carabacel |
| 2026-10-09 | Service : Ouverture de porte | Service : Changement de serrure | Quartier : Garibaldi |
| 2026-10-12 | Service : Installation porte blindée | Service : Après effraction | Quartier : Parc Impérial |

## Listes completes

### Niveau 1 (14 pages)
1. Accueil (`/`)
2. Secteur Nice Centre (`/serrurier-nice-centre/`)
3. Secteur Nice Est (`/serrurier-nice-est/`)
4. Secteur Nice Nord (`/serrurier-nice-nord/`)
5. Secteur Nice Ouest (`/serrurier-nice-ouest/`)
6. Tarifs (`/tarifs-serrurier-nice/`)
7. Agences & syndics (`/agences-syndics-nice/`)
8. Service : Dépannage serrurier (`/depannage-serrurier-nice/`)
9. Service : Ouverture de porte (`/ouverture-de-porte-nice/`)
10. Service : Changement de serrure (`/changement-serrure-nice/`)
11. Service : Installation porte blindée (`/installation-porte-blindee-nice/`)
12. Service : Après effraction (`/mis-en-securite-apres-effraction-nice/`)
13. Service : Ouverture de coffre-fort (`/ouverture-de-coffre-fort-nice/`)
14. Service : Installation de coffre-fort (`/installation-coffre-fort-nice/`)

### Niveau 2 (50 pages)
1. Quartier : Jean-Médecin (`/serrurier-jean-medecin-nice/`)
2. Quartier : Carré d'Or (`/serrurier-carre-d-or-nice/`)
3. Quartier : Quartier Wilson (`/serrurier-quartier-wilson-nice/`)
4. Quartier : Quartier des Musiciens (`/serrurier-quartier-des-musiciens-nice/`)
5. Quartier : Quartier des Fleurs (`/serrurier-quartier-des-fleurs-nice/`)
6. Quartier : Baumettes (`/serrurier-baumettes-nice/`)
7. Quartier : Libération (`/serrurier-liberation-nice/`)
8. Quartier : Gambetta (`/serrurier-gambetta-nice/`)
9. Quartier : Cimiez (`/serrurier-cimiez-nice/`)
10. Quartier : Desambrois (`/serrurier-desambrois-nice/`)
11. Quartier : Carabacel (`/serrurier-carabacel-nice/`)
12. Quartier : Garibaldi (`/serrurier-garibaldi-nice/`)
13. Quartier : Parc Impérial (`/serrurier-parc-imperial-nice/`)
14. Quartier : Saint-Philippe (`/serrurier-saint-philippe-nice/`)
15. Quartier : Promenade des Anglais (`/serrurier-promenade-des-anglais-nice/`)
16. Quartier : Magnan (`/serrurier-magnan-nice/`)
17. Quartier : La Madeleine (`/serrurier-la-madeleine-nice/`)
18. Quartier : Saint-Pierre-de-Féric (`/serrurier-saint-pierre-de-feric-nice/`)
19. Quartier : Vieux-Nice (`/serrurier-vieux-nice-nice/`)
20. Quartier : Riquier (`/serrurier-riquier-nice/`)
21. Quartier : Pasteur (`/serrurier-pasteur-nice/`)
22. Quartier : Saint-Roch (`/serrurier-saint-roch-nice/`)
23. Quartier : l'Ariane (`/serrurier-l-ariane-nice/`)
24. Quartier : Mont Boron (`/serrurier-mont-boron-nice/`)
25. Quartier : Mont Alban (`/serrurier-mont-alban-nice/`)
26. Quartier : Le Port (`/serrurier-le-port-nice/`)
27. Quartier : Bon Voyage (`/serrurier-bon-voyage-nice/`)
28. Quartier : Brancolar (`/serrurier-brancolar-nice/`)
29. Quartier : Poètes (`/serrurier-poetes-nice/`)
30. Quartier : Chambrun (`/serrurier-chambrun-nice/`)
31. Quartier : Gairaut (`/serrurier-gairaut-nice/`)
32. Quartier : Rimiez (`/serrurier-rimiez-nice/`)
33. Quartier : Saint-Pancrace (`/serrurier-saint-pancrace-nice/`)
34. Quartier : Corniche des Oliviers (`/serrurier-corniche-des-oliviers-nice/`)
35. Quartier : Pessicart (`/serrurier-pessicart-nice/`)
36. Quartier : L'Archet (`/serrurier-l-archet-nice/`)
37. Quartier : Saint-Antoine (`/serrurier-saint-antoine-nice/`)
38. Quartier : Fabron (`/serrurier-fabron-nice/`)
39. Quartier : Carras (`/serrurier-carras-nice/`)
40. Quartier : Californie (`/serrurier-californie-nice/`)
41. Quartier : Les Moulins (`/serrurier-les-moulins-nice/`)
42. Quartier : Corniche Fleurie (`/serrurier-corniche-fleurie-nice/`)
43. Quartier : Arénas (`/serrurier-arenas-nice/`)
44. Quartier : Saint-Isidore (`/serrurier-saint-isidore-nice/`)
45. Quartier : Lingostière (`/serrurier-lingostiere-nice/`)
46. Quartier : Secteur Bellet (`/serrurier-secteur-bellet-nice/`)
47. Commune : Èze (`/serrurier-eze/`)
48. Commune : Villefranche-sur-Mer (`/serrurier-villefranche-sur-mer/`)
49. Commune : Saint-Laurent-du-Var (`/serrurier-saint-laurent-du-var/`)
50. Commune : Cagnes-sur-Mer (`/serrurier-cagnes-sur-mer/`)
