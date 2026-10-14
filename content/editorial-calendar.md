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
- **Niveau 2** (priorite normale, 6 pages) : Jean-Medecin + 5
  communes voisines. 1 page proposee a chaque cycle -> rotation complete tous
  les ~50 cycles (~3-4 mois).
- **Cycle** : chaque lundi/mercredi/vendredi (3 par semaine).
- Calendrier genere sur 52 semaines (156 cycles) a partir du
  2026-09-14.

## Echantillon des 30 premiers jours

| Date | Niveau 1 | Niveau 1 | Niveau 2 |
|---|---|---|---|
| 2026-09-14 | Accueil | Secteur Nice Centre | Quartier : Jean-Médecin |
| 2026-09-16 | Secteur Nice Est | Secteur Nice Nord |  |
| 2026-09-18 | Secteur Nice Ouest | Tarifs |  |
| 2026-09-21 | Agences & syndics | Service : Dépannage serrurier |  |
| 2026-09-23 | Service : Ouverture de porte | Service : Changement de serrure |  |
| 2026-09-25 | Service : Installation porte blindée | Service : Après effraction |  |
| 2026-09-28 | Service : Ouverture de coffre-fort | Service : Installation de coffre-fort |  |
| 2026-09-30 | Accueil | Secteur Nice Centre |  |
| 2026-10-02 | Secteur Nice Est | Secteur Nice Nord |  |
| 2026-10-05 | Secteur Nice Ouest | Tarifs |  |
| 2026-10-07 | Agences & syndics | Service : Dépannage serrurier |  |
| 2026-10-09 | Service : Ouverture de porte | Service : Changement de serrure |  |
| 2026-10-12 | Service : Installation porte blindée | Service : Après effraction |  |

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
12. Service : Après effraction (`/mise-en-securite-apres-effraction-nice/`)
13. Service : Ouverture de coffre-fort (`/ouverture-de-coffre-fort-nice/`)
14. Service : Installation de coffre-fort (`/installation-coffre-fort-nice/`)

### Niveau 2 (6 pages)
1. Quartier : Jean-Médecin (`/serrurier-jean-medecin-nice/`)
2. Commune : Èze (`/serrurier-eze/`)
3. Commune : Villefranche-sur-Mer (`/serrurier-villefranche-sur-mer/`)
4. Commune : Saint-Laurent-du-Var (`/serrurier-saint-laurent-du-var/`)
5. Commune : Cagnes-sur-Mer (`/serrurier-cagnes-sur-mer/`)
6. Commune : Beaulieu-sur-Mer (`/serrurier-beaulieu-sur-mer/`)
