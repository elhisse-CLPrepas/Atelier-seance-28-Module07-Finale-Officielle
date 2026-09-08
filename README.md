# Atelier — Séance 28 — Module 07 — Finale officielle

Mini-site Vite de clôture du Challenge 100 Jours / Relance d’été LN-IA. Quatre projets à découvrir sur GitHub Pages, leurs affiches et un retour qualitatif destiné aux participants. Le programme préparé pour la finale du 7 septembre 2026 et la grille du Module 07 restent consultables comme références.

**[Ouvrir le site publié](https://elhisse-clprepas.github.io/Atelier-seance-28-Module07-Finale-Officielle/)** — Première publication du 7 septembre 2026, après validation du pilote et fusion de la [PR #2](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/pull/2). [Déploiement réussi](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/actions/runs/34145998799).

**[Tous gagnants : regards sur les projets](https://elhisse-clprepas.github.io/Atelier-seance-28-Module07-Finale-Officielle/rapports/retour-qualitatif-participants.html)** — Rapport qualitatif publié le 8 septembre 2026 (GMT+1), après fusion de la [PR #6](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/pull/6). Quatre portraits, leurs forces et une perspective pour poursuivre l’apprentissage, sans notation ni classement. Accessible depuis « Bravo à tous », imprimable et téléchargeable en texte. [Contrôles de publication](docs/GUIDE-PUBLICATION-GITHUB.md#publication-du-rapport-tous-gagnants--8-septembre-2026).

## Démarrer

Installer Node.js 24 LTS. Dans ce dossier :

```bash
npm ci
npm run dev
```

Ouvrir l’adresse affichée par Vite. Pour contrôler et construire :

```bash
npm run check
npm run preview
```

Vite 8.0.13 est fixé dans le lockfile. Le projet ne demande aucune clé API. Les évaluations se préparent dans Codex, en dehors du site.

## Contenu

- Présentation de la finale et affiche S28.
- Quatre cartes avec titre, présentation, affiche, lien GitHub Pages et accès au retour qualitatif correspondant.
- Félicitations collectives et message de clôture du Challenge Relance d’été.
- Conducteur proposé et sept critères conservés dans des sections repliables ; affiches des séances 25 à 28.
- Évaluations ou décision Grand Prix affichées uniquement si leur publication est validée dans les données.

## Mettre à jour

| Fichier | Usage |
|---|---|
| `src/data/finalistes.json` | Dossiers, captures, preuves et évaluations publiques |
| `src/data/affiches.json` | Correspondance F01–F04, chemins et textes alternatifs des affiches |
| `src/data/grille.json` | Référentiel commun, poids inchangés |
| `src/data/resultats.json` | Décision Grand Prix après validation |
| `public/assets/dossiers/` | Captures réelles des projets, créées lors de leur intégration |
| `public/assets/affiches/` | Quatre affiches originales fournies par le pilote, affichées intégralement et agrandissables |
| `public/rapports/` | Rapport qualitatif des participants et futures synthèses autorisées |
| `docs/GUIDE-AJOUT-DOSSIER.md` | Procédure de mise à jour |
| `docs/GUIDE-PUBLICATION-GITHUB.md` | Préparation du dépôt et publication |

Le validateur refuse les notes hors bornes, les liens factices, les champs de publication absents et les actifs publics non référencés. Il contrôle la structure des traces de validation, pas leur authenticité : la relecture du pilote reste nécessaire.

La demande du pilote du 8 septembre 2026 autorise les quatre liens GitHub Pages et la clôture collective. Le repère `LIENS-PUBLICS-FINALISTES-2026-09-08` trace ce périmètre dans les fiches ; les titres et présentations reprennent les projets déjà décrits dans le rapport public. Cette trace autorise leur diffusion et ne constitue pas une validation pédagogique. Les liens vérifiés correspondent exactement aux quatre pages fournies, dont le portfolio de Mohamed Boumrah sous `/rewire-90-jours/portfolio/`.

Les affiches de présentation sont intégrées à la demande du pilote du 8 septembre 2026, dans les cartes F01–F04 et les portraits du rapport « Tous gagnants ». Elles sont distinctes des captures de preuves et n’activent aucun statut d’évaluation. Leurs proportions sont conservées ; un lien permet de les ouvrir en taille originale. Le rapport Markdown reste la version textuelle. Pour remplacer une affiche, mettre à jour les deux emplacements de présentation et vérifier leur concordance avant la PR.

## Publication

Le dépôt `Atelier-seance-28-Module07-Finale-Officielle` et son site GitHub Pages existent. Ne relancez pas le script de création `github:prepare -- --execute` pour une mise à jour. Le contenu de ce dossier forme la racine du dépôt public ; le pack complet reste privé.

Pour intégrer un dossier reçu, suivre [le guide d’ajout](docs/GUIDE-AJOUT-DOSSIER.md) : vérifier ses sources, préparer le contenu autorisé, travailler dans une branche dédiée, exécuter les contrôles et présenter la PR pour revue humaine. La publication d’une fiche, d’une évaluation et d’une décision de prix exige leurs validations respectives.

Le workflow Pages est configuré avec GitHub Actions et se lance manuellement après fusion autorisée. Le workflow de contrôle s’exécute sur les PR et sur `main`. [Procédure de publication et état vérifié](docs/GUIDE-PUBLICATION-GITHUB.md).

## Cadre

Source pédagogique : pack S28 V2 fourni par le pilote, notamment le dossier jury, section 3. Aucune note, présence réelle, durée mesurée ou décision de prix n’est anticipée. Les images sont les affiches fournies par l’organisateur. La reconnaissance LN-IA est interne et ne constitue pas un diplôme d’État.
