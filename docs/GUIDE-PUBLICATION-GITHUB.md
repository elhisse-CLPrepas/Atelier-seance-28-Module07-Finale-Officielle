# Publier le dépôt indépendant et GitHub Pages

Le ZIP est un atelier de travail. Seul le contenu de `site/` doit devenir le dépôt public. Les dossiers `ressources-privees/` et `prompts/` restent dans le pack local.

## Préparation assistée

Prérequis : Node.js 24, Git, GitHub CLI (`gh`) connecté au compte `elhisse-CLPrepas`, et identité Git configurée. Ne collez jamais de jeton dans un fichier du projet.

Dans `site/` :

```bash
npm ci
npm run check
gh auth status
npm run github:prepare -- --execute
```

Le script crée uniquement un nouveau dépôt public avec README, une Issue, une branche d’implémentation et une PR. Il clone le dépôt dans `../github-publication/Atelier-seance-28-Module07-Finale-Officielle/`, copie une liste explicite de fichiers publics et exécute les contrôles avant l’envoi.

Il ne modifie aucun dépôt existant. Si une étape distante échoue, le dépôt, l’Issue ou la branche peuvent déjà exister. Inspectez l’état indiqué, puis reprenez manuellement. Ne supprimez pas le dépôt et ne forcez pas le push pour relancer le script.

## Revue et première publication

1. Ouvrir la PR retournée par le script. Examiner les fichiers et le résultat local. Faire consigner la revue humaine requise par l’atelier.
2. Attendre la réussite du contrôle `Contrôler le site` sur le dernier commit de la PR.
3. Fusionner cette PR après la revue, avec l’autorisation initiale de publication déjà donnée dans la mission. Ne pas prétendre que la revue est acquise avant son exécution.
4. Dans le dépôt, ouvrir Settings → Pages. Choisir GitHub Actions comme source.
5. Ouvrir Actions → Publier GitHub Pages → Run workflow, branche `main`.
6. Attendre le résultat du workflow. Ouvrir l’URL retournée par le job de déploiement et contrôler le site ainsi que les affiches.

URL attendue, non certifiée tant que le déploiement n’a pas réussi :

`https://elhisse-clprepas.github.io/Atelier-seance-28-Module07-Finale-Officielle/`

La configuration `base: './'` conserve les actifs relatifs à l’index et fonctionne sous le chemin du dépôt. Le site utilise des ancres, sans routes serveur. Le workflow publie uniquement `dist/`.

## Reprise d’un dépôt déjà créé

Dans une nouvelle copie de travail, utiliser `gh repo clone elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle`, examiner README, branches et PR ouvertes puis reprendre la branche existante. S’il faut préparer une nouvelle modification, ouvrir une Issue et une branche dédiée. Copier les seuls fichiers publics utiles. Ne jamais réimporter le pack complet.

Si les scripts `npm ci` échouent, lire l’erreur et conserver le lockfile. Si l’accès aux workflows est refusé, vérifier les droits du compte et l’accès GitHub Actions. Si Pages renvoie une erreur, examiner le job échoué avant de relancer.

## Mises à jour après la finale

Suivre `GUIDE-AJOUT-DOSSIER.md`, préparer une PR, vérifier les contrôles et les autorisations du contenu, puis fusionner et lancer à nouveau le workflow Pages. La compilation ne génère aucune note et ne contacte aucune API d’IA.

## Références techniques consultées le 7 septembre 2026

- [Déploiement statique Vite et GitHub Pages](https://vite.dev/guide/static-deploy.html#github-pages).
- [Workflows personnalisés GitHub Pages](https://docs.github.com/en/pages/getting-started-with-github-pages/using-custom-workflows-with-github-pages).
- [Création de dépôt avec GitHub CLI](https://cli.github.com/manual/gh_repo_create).

## État de la reprise — 7 septembre 2026

Le dépôt public demandé et l’[Issue #1](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/issues/1) sont créés. La branche `feat/presentation-seance-28` porte le site. Ne pas relancer le script de création : suivre la procédure de reprise d’un dépôt existant.

Les contrôles locaux ont réussi sous Node 24.12.0 : installation `npm ci`, 12 tests et build. Chrome local a contrôlé les largeurs 1440, 390 et 320 pixels, le clavier, les images, les ancres et le rafraîchissement sous le préfixe du dépôt. La revue indépendante d’agent est favorable à la présentation de la PR. Les détails sont dans `CONTROLES-PREPUBLICATION.md`.

La revue humaine du résultat concret reste à consigner avant fusion. L’autorisation de première publication a déjà été donnée ; elle ne valide aucune future note ou décision de candidat. GitHub Pages ne sera déclaré publié qu’après réussite du workflow et vérification de l’URL effective.
