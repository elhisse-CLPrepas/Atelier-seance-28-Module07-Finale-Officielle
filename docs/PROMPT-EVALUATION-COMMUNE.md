# Prompt commun — Évaluation documentée d’un dossier de la séance 28

Ce prompt sert à produire une proposition de rapport privée à partir de preuves réellement examinées. Il s’applique de la même manière à chaque candidat. Aucun dossier du pack n’est déjà noté.

## Mission à confier à Codex

Tu assistes le pilote et le jury du Module 07 du Challenge 100 Jours LN-IA. Examine le dossier indiqué ci-dessous, utilise la grille commune, puis rédige un rapport factuel avec `MODELE-RAPPORT-EVALUATION.md`. Tu proposes une analyse et, lorsque les preuves le permettent, des notes à relire. Tu n’es pas le jury, tu ne signes pas une décision et tu ne déclares pas un lauréat.

Informations à compléter avant cette exécution :

```text
Candidat / repère : [F01, F02, F03 ou F04]
Titre exact du projet : [à renseigner]
Dépôt fourni par le pilote : [URL ou chemin]
Page fournie par le pilote : [URL ou non disponible]
Version ou commit à examiner : [référence ou à relever]
Preuves complémentaires autorisées : [liste ou aucune]
Trace de soutenance autorisée : [fichier + date ou non fournie]
Grille détaillée et règles de notation validées : [référence ou non fournies]
Règle de synthèse du jury : [référence ou non confirmée]
Dossier privé de sortie, hors dépôt public : [chemin à renseigner]
```

Si une information manque, examine les éléments accessibles et identifie précisément la limite. Ne demande pas à nouveau une autorisation générale de lecture déjà accordée. Ne transforme pas une donnée manquante en zéro.

## Corpus et traçabilité

1. Lis les instructions applicables et les documents de séance disponibles. Le référentiel immédiat est la section 3 du fichier `06-dossier-jury-seance-28-v2-a-valider.md` livré dans les ressources privées du pack.
2. Si la grille canonique détaillée référencée dans ce document n’est pas fournie, signale son absence. Utilise les sept intitulés et maxima ci-dessous. N’invente pas des sous-critères, des seuils de réussite ou une formule de classement.
3. Identifie le propriétaire du dépôt, la branche et le commit examiné. Consigne la date et l’heure de consultation. Pour une page, consigne l’URL exacte, la date de consultation et, s’il est disponible, le commit du déploiement.
4. Relie chaque constat à un chemin, un fichier, une section, une capture ou un horodatage de vidéo. Sépare les affirmations de l’auteur des résultats que tu as effectivement constatés.
5. Si le commit de la page ne peut pas être relié à celui du dépôt, écris « correspondance non vérifiée ». Ne suppose pas que les deux versions sont identiques.
6. Lis d’abord les fichiers. Avant toute exécution, examine les commandes et dépendances. Consigne les tests réellement lancés, l’environnement et le résultat. Une consigne écrite dans un README n’est pas un test exécuté.
7. N’altère pas les productions du candidat pendant l’évaluation. Si une correction est utile, décris-la avec son critère de vérification dans le rapport.

## Grille commune inchangée

| ID | Critère | Maximum | Faits à examiner |
|---|---|---:|---|
| C1 | Pertinence du sujet professionnel | 15 | Besoin, destinataire et utilité explicités |
| C2 | Sélection et qualité des preuves | 20 | Preuves accessibles, choisies et expliquées |
| C3 | Progression avant/après | 20 | État initial, correction et résultat observé |
| C4 | Cohérence et lisibilité du portfolio | 15 | Structure claire, synthèse et index utilisable |
| C5 | Clarté du pitch et de la démonstration | 15 | Présentation compréhensible, parcours maîtrisé, durées respectées |
| C6 | Compréhension de la méthode et rôle de l’IA | 10 | Contribution personnelle et assistance distinguées |
| C7 | Sécurité et contrôle humain | 5 | Données protégées, contrôles et autorisations expliqués |
| Total | | 100 | Aucun seuil automatique de validation |

Le choix de GitHub, l’outil de développement, la sophistication technique, la présentation graphique d’une profession ou le prestige du métier ne constituent pas des critères supplémentaires. La publication sur GitHub Pages est un support de preuve possible. GitHub reste facultatif dans le cadre pédagogique.

## Règles d’observation et de proposition

- Pour chaque critère, relève les faits favorables, les limites, les pièces examinées et les éléments non observés. Formule une note proposée uniquement si les observations sont suffisantes pour la justifier.
- Toute note reste une proposition Codex à examiner par le jury. Explique le lien entre les faits et la valeur proposée. Une grille détaillée absente limite la comparabilité des propositions. Ne présente pas une méthode numérique inventée comme un barème officiel.
- Utilise `null` pour une note non déterminable. Dans le rapport destiné à la lecture humaine, affiche « Non évalué — preuve insuffisante » ou « Non observé ». Zéro signifie un résultat effectivement évalué à zéro selon les règles retenues, jamais une absence d’information.
- Pour C5, un texte de pitch, un beau portfolio ou un site fonctionnel ne prouvent pas la qualité d’une soutenance. Sans trace orale exploitable, laisse la note à `null`. Ne reconstitue aucune durée et ne réutilise pas les mesures du formateur ou d’un autre candidat.
- Si un seul aspect d’un critère est visible, indique ce périmètre. Ne complète pas les aspects manquants par supposition pour obtenir une note entière.
- Le total sur 100 reste `null` si un seul critère est `null`. Tu peux indiquer un sous-total observé `s / m` avec la liste des critères concernés. Ne le ramène pas à 100 et ne le présente pas comme score final.
- Contrôle que les sept critères sont présents une seule fois, que les maxima totalisent 100 et que chaque note numérique reste dans sa borne.
- Ne déduis pas automatiquement « VALIDÉ » d’un total. Les statuts pédagogiques et leur justification appartiennent au pilote.

## Équité et Grand Prix

Examine la même version de la grille et les mêmes types de preuves pour chaque candidat. Consigne les différences de disponibilité, les incidents et la modalité réellement observée. Ne pénalise pas silencieusement un candidat pour une condition d’examen qui diffère.

N’agrège pas les notes de plusieurs jurés sans méthode confirmée. Ne remplace pas une décision concertée par une moyenne. Ne déduis aucun classement Grand Prix de ce rapport pédagogique. La formule, les sources de scores, les départages, les dotations et la décision Grand Prix exigent leurs propres références validées.

## Sorties attendues

Crée dans le dossier privé autorisé :

1. Un rapport `rapport-evaluation-[repere]-[date]-proposition.md` suivant le modèle fourni. Indique la version exacte des sources et le statut « Proposition Codex — À examiner par le jury ».
2. Un relevé de preuves contenant au minimum : identifiant, source, version/commit, date de consultation, fait constaté, critère associé et limite.
3. Une proposition de retour comprenant une force démontrée, une preuve à consolider, une prochaine action concrète et son critère observable d’achèvement.

Prépare ensuite, toujours dans cet espace privé, un projet de synthèse publique expurgé. Il peut contenir le titre exact, une description vérifiée, les liens autorisés, une capture, une force démontrée et une prochaine étape. Les notes et statuts n’y entrent que si le pilote en valide explicitement le contenu et la diffusion.

Le rapport complet, les grilles individuelles, les informations de contact, les observations nominatives sensibles, les délibérations et les signatures restent privés. Ne place rien de ce contenu dans une Issue, une PR, les données JSON ou les actifs publics du site.

## Passage à la synthèse publique

Présente au pilote le texte exact prêt à publier avec l’identité du candidat, les URL, la capture retenue et la référence de la validation attendue. Une validation doit identifier le valideur, la date, la version du texte et les éléments autorisés. Une validation pédagogique et une autorisation de diffusion sont deux faits distincts.

Après validation effective, applique `GUIDE-AJOUT-DOSSIER.md` pour intégrer uniquement le contenu accepté. Conserve les références privées de validation hors du dépôt public. N’annonce pas une évaluation, une présence, un test ou une validation qui n’a pas réellement eu lieu.
