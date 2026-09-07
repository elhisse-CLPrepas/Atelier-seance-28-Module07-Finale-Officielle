# Contrôles de prépublication — 7 septembre 2026

Cette première présentation réunit les quatre finalistes confirmés, les affiches du Module 07, le programme proposé et les sept critères communs. Aucun dossier, score, rapport nominatif ou lauréat n’est prérempli.

## Résultats locaux

| Contrôle exécuté | Résultat |
| --- | --- |
| `npm ci`, Node 24.12.0 / npm 11.6.2 | Installation du lockfile réussie |
| `npm run check` | 12 tests réussis, contrat des données et build Vite réussis |
| Chrome local sans interface, 1440 × 1000, 390 × 844, 320 × 740 | Quatre fiches et sept critères affichés, aucun débordement horizontal |
| Navigation et clavier | Quatre ancres principales, lien d’évitement et ouverture des détails vérifiés |
| Ressources et rafraîchissement au chemin du dépôt | Images chargées, aucune ancre cassée, aucune erreur JavaScript ou réponse réseau ≥ 400 observée |
| Données initiales | Dossiers et évaluations absents ; Grand Prix en attente |
| Revue indépendante du code et du lot public | Aucun constat technique bloquant restant |

Le titre demandé et les libellés factuels ont été ajustés. Les futurs aperçus ouvrent désormais leur page source vérifiée tout en affichant une capture locale ; un test couvre ce comportement. Aucun lien de candidat n’a été inventé.

Aperçus du site public contrôlé : [accueil bureau](apercus/accueil-1440.png), [accueil mobile](apercus/accueil-390.png), [page complète bureau](apercus/apercu-1440.png), [page complète mobile](apercus/apercu-390.png). Ce sont des captures du mini-site, pas des dossiers de candidats.

Le site ne contient que les données publiques et les guides vierges. Les documents de travail, sauvegardes, pièces sources et comptes rendus internes restent hors du dépôt. Le contrôle de motifs de secrets et d’empreintes complète la relecture sans prouver à lui seul l’absence universelle d’informations sensibles.

## Portée et suite

Les captures et les résultats détaillés des contrôles locaux sont conservés par le pilote. Le contrôle en Chrome local ne remplace pas un essai sur chaque appareil de projection ou navigateur mobile réel. Les validations de contenu, l’identité des futurs liens et l’authenticité des décisions restent humaines.

La revue d’agent n’est pas une revue humaine. Consigner la revue du résultat concret, attendre la CI du dernier commit, fusionner selon les règles du dépôt puis lancer le workflow Pages déjà prévu. Une URL prévue ne constitue pas la preuve d’un déploiement réussi.
