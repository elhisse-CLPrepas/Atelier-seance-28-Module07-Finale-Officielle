# Ajouter un dossier de finaliste au mini-site

Ce guide sert aux prochaines mises à jour. Le site est une vitrine statique Vite. Il n’envoie pas de fichiers, n’appelle pas Codex et ne calcule pas une évaluation en ligne. L’examen des dossiers se déroule dans l’atelier Codex, puis les éléments validés sont intégrés au dépôt public.

## 1. Repérer le candidat et ses sources

Travaillez dans `site/` si vous utilisez le ZIP. Après publication du contenu de `site/` comme dépôt indépendant, les mêmes chemins commencent directement par `src/` et `public/`.

| Repère stable | Finaliste |
|---|---|
| F01 | Abdelmjid Anagri |
| F02 | Karim El Mechti |
| F03 | Abdelmoula Lyazrhi |
| F04 | Mohamed Boumrah |

N’ajoutez pas une cinquième fiche pour représenter la même personne. Mettez à jour l’entrée existante en conservant son identifiant.

Réunissez le titre exact du projet, une description factuelle, le lien fourni vers le dépôt et celui de sa page GitHub Pages. Vérifiez l’identité et la correspondance des deux liens avec le pilote. Un lien cité dans un ancien échange ne vaut pas attribution vérifiée à ce dossier.

Consignez dans le suivi privé la date de contrôle, le propriétaire, le commit examiné et la version de la page si elle est identifiable. Ouvrez les adresses réellement fournies. N’affichez pas une URL calculée comme un site publié si elle n’a pas été vérifiée.

## 2. Préparer l’aperçu

1. Ouvrez la page vérifiée et réalisez une capture de son état réel.
2. Retenez une vue lisible qui ne contient ni données privées, ni notifications, ni compte connecté, ni jeton d’accès.
3. Enregistrez une image WebP ou PNG dans `site/public/assets/dossiers/`, par exemple `f01.webp`.
4. Renseignez un texte alternatif descriptif, la date réelle de capture et l’URL source.

L’aperçu sert à comprendre le dossier. Une capture ne prouve pas à elle seule le bon fonctionnement des interactions. N’utilisez pas une image inventée pour représenter une page réelle.

Si aucune capture n’est disponible, laissez `preview` à `null`. Le site doit présenter cet état sans image cassée. Les chemins enregistrés dans les données sont relatifs à `public/`, sans barre oblique initiale, afin de fonctionner sous le préfixe GitHub Pages du dépôt.

## 3. Modifier les données

Fichier unique des finalistes : `site/src/data/finalistes.json`. Il contient un tableau de quatre objets. Préservez les clés et les types existants.

| Champ | Type et règle |
|---|---|
| `id` | Identifiant stable F01 à F04 |
| `name` | Nom confirmé du finaliste |
| `profile` | Profil de présentation confirmé |
| `axis` | Axe de présentation issu du pack pédagogique |
| `title` | Titre exact du projet ou `null` |
| `summary` | Description factuelle autorisée ou `null` |
| `repositoryUrl` | URL HTTPS d’un dépôt `github.com` vérifié ou `null` |
| `pagesUrl` | URL HTTPS vérifiée sur `*.github.io` ou `null` |
| `preview` | Objet de capture décrit ci-dessous ou `null` |
| `evidence` | Tableau de preuves publiques autorisées, vide au départ |
| `publication` | Trace de validation du contenu de la fiche ou `null` tant que le dossier n’est pas intégré |
| `evaluation` | Synthèse d’évaluation validée conforme au schéma ou `null` |

Un dossier non reçu conserve ses valeurs `null` et `evidence: []`. N’utilisez pas `#`, un domaine fictif ou une URL vers un dossier privé pour remplir un champ.

Forme de `preview`, lorsque la capture existe :

```json
{
  "src": "assets/dossiers/f01.webp",
  "alt": "Description de la capture réelle à renseigner",
  "capturedAt": "YYYY-MM-DD",
  "sourceUrl": "URL_HTTPS_DE_LA_PAGE_VERIFIEE"
}
```

Cet exemple indique la structure. Les chaînes `YYYY-MM-DD` et `URL_HTTPS_DE_LA_PAGE_VERIFIEE` doivent être remplacées par des valeurs contrôlées avant intégration.

Chaque élément du tableau `evidence` comporte `label`, `url` et `type`. Décrivez une preuve réelle et conservez le vocabulaire accepté par le validateur du projet. N’ajoutez aucun document privé sous prétexte qu’il appuie une note.

Forme de `publication`, obligatoire lorsqu’un contenu de dossier est ajouté :

```json
{
  "validatedBy": "NOM_DU_VALIDEUR_REEL",
  "validatedAt": "YYYY-MM-DD",
  "decisionRef": "REFERENCE_PUBLIQUE_NON_SENSIBLE"
}
```

Cette trace identifie une validation qui a réellement eu lieu. `decisionRef` doit être un repère public sans données personnelles inutiles, chemin privé ni signature. Conservez la pièce justificative et sa correspondance dans le suivi privé. N’insérez pas des valeurs d’exemple dans les données publiées.

## 4. Faire préparer l’évaluation dans Codex

Exécutez `PROMPT-EVALUATION-COMMUNE.md` avec le dossier, les sources et les éventuelles observations orales. Conservez les rapports complets hors du dépôt public.

La grille reste identique pour tous : C1 sur 15, C2 sur 20, C3 sur 20, C4 sur 15, C5 sur 15, C6 sur 10 et C7 sur 5. Les notes non déterminables restent `null`. Sans soutenance observable, C5 ne reçoit pas de note. Un total sur 100 n’existe que si les sept notes sont renseignées.

Faites relire la proposition de rapport et le texte public exact. La décision pédagogique, la validation de la synthèse et son autorisation de diffusion sont consignées dans le suivi privé. L’autorisation initiale de publier la présentation ne vaut pas validation d’une note future.

## 5. Intégrer une synthèse d’évaluation validée

Placez seulement le rapport public expurgé dans `site/public/rapports/`, par exemple `f01.md`. Les fichiers de `public/` sont accessibles à tous une fois publiés.

Le fichier Markdown public doit commencer par les deux mentions exactes suivantes, adaptées au candidat :

```text
Statut : SYNTHÈSE PUBLIQUE VALIDÉE
Candidat : F01
```

Elles attestent une validation à consigner réellement et ne doivent pas être ajoutées à un brouillon. Chaque note numérique publiée doit citer au moins une URL de preuve publique dans `evidenceUrls`.

Lorsque la synthèse est validée, renseignez `evaluation` avec ces champs :

| Champ | Valeur attendue |
|---|---|
| `status` | Exactement `validee` pour la synthèse publiable |
| `gridVersion` | Exactement `LN-IA-S28-V1` |
| `publishedAt` | Date de publication de la synthèse au format `YYYY-MM-DD` |
| `validatedBy` | Nom du valideur réel |
| `decisionRef` | Repère public non sensible de la validation |
| `reportPath` | Chemin local réel, par exemple `rapports/f01.md` |
| `criteria` | Sept objets, un pour chaque ID C1 à C7 |
| `strength` | Force démontrée dont la diffusion est autorisée |
| `nextAction` | Prochaine action dont la diffusion est autorisée |

Le statut technique `validee` signifie que cette synthèse est autorisée à paraître. Il n’attribue pas automatiquement au candidat le statut pédagogique « VALIDÉ ».

Chaque objet de `criteria` contient :

```json
{
  "id": "C1",
  "score": null,
  "observation": "Constat public validé ou périmètre non observé",
  "evidenceUrls": []
}
```

Répétez la structure pour C2 à C7. Une note numérique exige une observation, une justification et la validation humaine correspondante. Les `evidenceUrls` renvoient exclusivement à des preuves publiques autorisées. Laissez la note à `null` si elle n’est pas disponible ou si sa diffusion n’est pas autorisée. N’ajoutez pas un champ de total bricolé. Le site calcule le total seulement lorsque les sept notes sont présentes.

Si le rapport reste un brouillon ou si sa diffusion n’est pas validée, conservez `evaluation: null`. Ne chargez pas le brouillon dans `public/`, même en masquant son lien dans l’interface.

Les décisions de prix relèvent séparément de `site/src/data/resultats.json`. Ne déduisez pas un podium de l’ordre F01–F04 ou des scores pédagogiques. Sans décision Grand Prix documentée, conservez l’état d’attente existant.

## 6. Vérifier et publier la mise à jour

1. Travaillez dans une branche dédiée selon le workflow Issue → branche → modification bornée → tests → PR → revue humaine → décision.
2. Lancez les commandes déclarées dans `package.json` pour contrôler les données puis construire le site. Utilisez le lockfile existant.
3. Vérifiez les fichiers ajoutés et la sortie de production. Un fichier privé oublié dans le dépôt ou dans `public/` devient public indépendamment des liens affichés.
4. Ouvrez l’aperçu en vue bureau et mobile. Contrôlez l’image, son texte alternatif, les liens, le rapport et les champs en attente.
5. Vérifiez la concordance entre la carte, la synthèse publique et les valeurs validées. Un total absent doit rester absent si une note est `null`.
6. Préparez la PR avec une description publique concise, les contrôles réalisés et la référence publique de validation. Ne joignez pas les délibérations privées.
7. Après fusion autorisée et réussite du workflow Pages, ouvrez la page réelle. Vérifiez la fiche modifiée, l’aperçu et le téléchargement du rapport.

Conservez dans le suivi de travail les URL vérifiées, le commit publié, la date et le résultat des contrôles. N’annoncez « publié » qu’après cette vérification.

## Prompt court pour une mise à jour

```text
Lis AGENTS.md, GUIDE-AJOUT-DOSSIER.md et le schéma de finalistes.json.
Mets à jour seulement le dossier [F0X] avec les éléments fournis et validés.
Ne remplace aucun champ manquant par une valeur inventée.
Garde les rapports complets et décisions privées hors du dépôt public.
Prépare l’aperçu statique, la fiche et, si autorisée, la synthèse publique.
Exécute les contrôles du projet et relis la sortie publique.
Présente le changement et ses preuves de contrôle dans une PR.
N’ajoute aucun classement Grand Prix et ne modifie pas les autres dossiers.
```
