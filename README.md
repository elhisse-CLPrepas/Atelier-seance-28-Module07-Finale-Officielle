# Atelier — Séance 28 — Module 07 — Finale officielle

Mini-site Vite du Grand Prix LN-IA des projets professionnels. Lundi 7 septembre 2026, 19 h GMT+1. Quatre finalistes confirmés. Les dossiers, évaluations et décisions restent à intégrer après vérification.

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
- Quatre fiches extensibles, liens GitHub, aperçus et preuves.
- Conducteur proposé et continuité des séances 25 à 28.
- Sept critères sur 100 et synthèses publiques validées.
- Décision Grand Prix distincte des scores pédagogiques.

## Mettre à jour

| Fichier | Usage |
|---|---|
| `src/data/finalistes.json` | Dossiers, captures, preuves et évaluations publiques |
| `src/data/grille.json` | Référentiel commun, poids inchangés |
| `src/data/resultats.json` | Décision Grand Prix après validation |
| `public/assets/dossiers/` | Captures réelles des projets, créées lors de leur intégration |
| `public/rapports/` | Synthèses publiques autorisées, créées après évaluation |
| `docs/GUIDE-AJOUT-DOSSIER.md` | Procédure de mise à jour |
| `docs/GUIDE-PUBLICATION-GITHUB.md` | Préparation du dépôt et publication |

Le validateur refuse les notes hors bornes, les liens factices, les champs de publication absents et les actifs publics non référencés. Il contrôle la structure des traces de validation, pas leur authenticité : la relecture du pilote reste nécessaire.

## Publication

Nom technique demandé : `Atelier-seance-28-Module07-Finale-Officielle`. Le contenu de ce dossier forme la racine du dépôt public. Ne pas envoyer le ZIP complet.

```bash
npm run github:prepare
```

Cette commande affiche le mode d’emploi. Ajouter `-- --execute` pour préparer un nouveau dépôt public et une PR avec GitHub CLI connecté. Le script ne fusionne pas et ne déclenche pas Pages. La procédure de suite est dans le guide.

Le workflow Pages se lance manuellement depuis Actions après fusion autorisée et activation de Settings → Pages → GitHub Actions. Le workflow de contrôle s’exécute sur les PR et sur main.

## Cadre

Source pédagogique : pack S28 V2 fourni par le pilote, notamment le dossier jury, section 3. Aucune note, présence réelle, durée mesurée ou décision de prix n’est anticipée. Les images sont les affiches fournies par l’organisateur. La reconnaissance LN-IA est interne et ne constitue pas un diplôme d’État.
