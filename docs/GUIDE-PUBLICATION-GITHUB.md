# Publier le dépôt indépendant et GitHub Pages

Le ZIP est un atelier de travail. Seul le contenu de `site/` doit devenir le dépôt public. Les dossiers `ressources-privees/` et `prompts/` restent dans le pack local.

**Le dépôt et le site sont désormais publiés.** Pour les prochaines modifications, utiliser la section « Reprise d’un dépôt déjà créé » et le guide d’ajout de dossier. Les étapes de création ci-dessous sont conservées pour documenter la préparation initiale ; ne pas les relancer sur ce dépôt.

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

URL publique vérifiée après le déploiement réussi du 7 septembre 2026 :

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

## Publication vérifiée — 7 septembre 2026

Le pilote a validé le résultat et confirmé la fusion de la [PR #2](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/pull/2). L’[Issue #1](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/issues/1) est fermée. Le commit publié est `1248c25134ecb5d3e8ae895b8132d2d0cb646594`.

La [CI de main](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/actions/runs/34145881625) et le [workflow Pages](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/actions/runs/34145998799) ont réussi. Le job de déploiement s’est terminé à 17 h 04 min 07 s UTC, soit 18 h 04 min 07 s GMT+1. L’installation, les 12 tests et le build ont réussi dans ce workflow.

Le site public a été ouvert et contrôlé avec Chrome local aux largeurs 1440, 390 et 320 pixels : quatre fiches, sept critères, clavier, images, ancres et rafraîchissement vérifiés ; aucun débordement ni erreur JavaScript/HTTP observée. La page, le JavaScript, le CSS et les cinq images répondent HTTP 200. Les empreintes des cinq images publiées correspondent aux originaux. Le pilote a également confirmé avoir consulté le site et constaté son fonctionnement.

Les [contrôles de prépublication](CONTROLES-PREPUBLICATION.md) restent disponibles comme historique. Les contrôles mobiles portent sur des dimensions de fenêtre Chrome, pas sur tous les appareils physiques.

La validation de la présentation ne vaut pas validation d’une future note, synthèse ou décision de candidat. Les dossiers et résultats restent en attente de sources vérifiées et de leurs autorisations propres.

## Publication du rapport Tous gagnants — 8 septembre 2026

Le pilote a demandé la publication d’un retour qualitatif aux participants, puis confirmé la fusion de la [PR #6](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/pull/6). Fusion vérifiée le 7 septembre à 22:53:16 UTC, soit 23:53:16 GMT+1. Le commit publié est `0d723f61305a557dbcf7f3e0577515b069745b06`, dont le contenu est identique à la version relue de la PR.

Le rapport **« Tous gagnants : regards sur les projets »** présente les réalisations, forces et perspectives des quatre participants sans notation ni classement. « Tous gagnants » exprime la reconnaissance collective de leur engagement et de leurs progrès. Le contenu est accessible depuis la rubrique « Bravo à tous » du site :

- [Lire le rapport](https://elhisse-clprepas.github.io/Atelier-seance-28-Module07-Finale-Officielle/rapports/retour-qualitatif-participants.html).
- [Ouvrir le texte Markdown](https://elhisse-clprepas.github.io/Atelier-seance-28-Module07-Finale-Officielle/rapports/retour-qualitatif-participants.md).

La [CI de main](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/actions/runs/34168182191) et le [déploiement Pages](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/actions/runs/34168583590) ont réussi. Le job de déploiement s’est terminé le 7 septembre à 23:01:05 UTC, soit le **8 septembre à 00:01:05 GMT+1**. Installation, 13 tests, validation et compilation réussies ; seul `dist/` est publié.

Contrôles réalisés sur les adresses publiques avec Chrome aux largeurs 1440, 390 et 320 pixels : accès depuis l’accueil, quatre portraits, logo chargé, navigation au clavier, rafraîchissement, lien de retour et absence de débordement horizontal. Aucune erreur JavaScript ou HTTP observée. Le téléchargement Markdown fonctionne. Les deux fichiers du rapport répondent HTTP 200 et sont identiques octet pour octet à ceux du commit déployé ; les quatre liens de projets répondent également HTTP 200. Les captures bureau et mobile ont été inspectées. Ces contrôles portent sur des dimensions de fenêtre Chrome, pas sur tous les appareils physiques.

La revue indépendante du périmètre fusionné est favorable. Les champs d’évaluation et de décision du Grand Prix restent inchangés. Le présent ajout documentaire conserve la trace de cette publication et ne nécessite pas de nouveau déploiement du site.

## Publication des affiches des finalistes — 8 septembre 2026

Le pilote a confirmé la fusion de la [PR #10](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/pull/10), vérifiée le 7 septembre à 23:53:50 UTC, soit le 8 septembre à 00:53:50 GMT+1. Le commit publié est `46d05b9efd1b03d4c95388b0bedd5ec0896a8beb` ; son contenu est identique à la version relue de cette PR.

Les quatre affiches fournies sont visibles dans les [cartes des finalistes](https://elhisse-clprepas.github.io/Atelier-seance-28-Module07-Finale-Officielle/#dossiers) et les portraits du [rapport Tous gagnants](https://elhisse-clprepas.github.io/Atelier-seance-28-Module07-Finale-Officielle/rapports/retour-qualitatif-participants.html). Chaque affiche s’ouvre en taille originale dans un nouvel onglet, au clic ou au clavier. Les proportions sont conservées et le chargement est différé.

La [CI de main](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/actions/runs/34171543199) et le [workflow Pages](https://github.com/elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle/actions/runs/34171642779) ont réussi. Le job de déploiement s’est terminé le 7 septembre à 23:56:47 UTC, soit le **8 septembre à 00:56:47 GMT+1**. L’installation, les tests, la validation et la compilation ont réussi avant la publication de `dist/`.

Contrôles sur le site public : les quatre PNG répondent HTTP 200 et leurs empreintes SHA-256 correspondent aux originaux fournis. Dans les cartes et dans le rapport, Chrome aux largeurs 1440, 390 et 320 pixels confirme les quatre associations, les textes alternatifs, le chargement des images, les proportions et les 24 ouvertures en grand format au clavier. Aucun débordement horizontal ni erreur JavaScript/HTTP observé. Les captures bureau/mobile ont été inspectées ; ces essais ne couvrent pas tous les appareils physiques.

Les 13 tests, la validation et la compilation ont également réussi localement pour la clôture documentaire. La revue indépendante du périmètre fusionné est favorable. Les affiches restent des supports de présentation ; aucune note, capture de preuve ou décision de prix n’a été ajoutée. Les originaux sont conservés. Cet addendum documentaire ne nécessite pas de nouveau déploiement après sa fusion.
