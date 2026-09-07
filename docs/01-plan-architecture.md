# Mission A-PLAN / A-ARCHI — 7 septembre 2026

Créer un dépôt public indépendant pour présenter la séance 28 et accueillir les dossiers à venir. Le pilote a demandé le pack Vite et sa publication GitHub Pages. Les décisions d’évaluation futures restent humaines.

## Décisions

- Vite et JavaScript natif, une page ancrée. Aucun serveur ni clé API.
- Données publiques structurées dans `src/data/`. Aucun brouillon privé importé dans le site.
- Les quatre finalistes et le début à 19 h GMT+1 sont confirmés. Les horaires intermédiaires restent proposés.
- Aperçus sous forme de captures locales datées et liens vérifiés. Pas d’intégration iframe dépendante de sites tiers.
- Une seule grille commune de sept critères sur 100. Donnée manquante = `null`, jamais zéro automatique.
- Codex produit les analyses dans un espace privé extérieur au dépôt. Seule une synthèse relue et autorisée peut être ajoutée aux données publiques.
- Résultats pédagogiques et attribution du Grand Prix sont deux décisions distinctes.
- Publication par GitHub Actions. Installation reproductible via `npm ci` et verrou de dépendances.

## Acceptation

Les quatre fiches sont lisibles sans liens fictifs. Les sept poids totalisent 100. Les liens absents ne créent aucun bouton inactif. Les champs et rapports publics sont contrôlés avant compilation. Le pack contient un prompt d’organisation, un prompt d’évaluation, les affiches S25–S28, les sources et un guide de publication.

## Références d’atelier consultées

`AGENTS.md`, `.cursor/rules/70-orchestration-agents.mdc`, `protocols/handoff-agent.md` et `src/modules/orchestration.js` du dépôt privé atelier-dev-moderne. Les six rôles A-PLAN, A-ARCHI, A-DEV, A-TEST, A-REVIEW et A-DOC sont adaptés ici. Aucun fichier interne de cet atelier n’est recopié dans le dépôt public.
