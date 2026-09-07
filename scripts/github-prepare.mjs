import { spawnSync } from 'node:child_process';
import { existsSync, mkdirSync, readdirSync, copyFileSync, writeFileSync, lstatSync, readFileSync } from 'node:fs';
import { resolve, basename, dirname } from 'node:path';
import { fileURLToPath } from 'node:url';
const root=fileURLToPath(new URL('../',import.meta.url));
const repo='elhisse-CLPrepas/Atelier-seance-28-Module07-Finale-Officielle';
const branch='feat/presentation-seance-28';
const args=process.argv.slice(2);
if(args.some(a=>!['--execute','--help'].includes(a))){console.error('Option inconnue. Utilisez --help.');process.exit(1)}
if(!args.includes('--execute')||args.includes('--help')){
  console.log(`Préparation du dépôt public ${repo}\n\nPrérequis : Node 24, Git, GitHub CLI et connexion gh auth login.\nExécution : npm run github:prepare -- --execute\n\nLe script contrôle le site, crée uniquement un NOUVEAU dépôt avec README,\nouvre une Issue, clone dans ../github-publication/, copie le contenu public\nsur une branche dédiée, pousse cette branche et ouvre une PR.\nIl s’arrête si le dépôt ou le dossier de destination existe.\nAucune fusion ni publication Pages n’est exécutée par ce script.\nLa suite se trouve dans docs/GUIDE-PUBLICATION-GITHUB.md.`);
  process.exit(0);
}
function run(command,argv,{cwd=root,capture=false,allowFailure=false}={}){
  const r=spawnSync(command,argv,{cwd,encoding:'utf8',shell:false,stdio:capture?'pipe':'inherit'});
  if(r.error)throw new Error(`${command} indisponible : ${r.error.code}`);
  if(r.status!==0&&!allowFailure)throw new Error(`${command} a échoué (code ${r.status}). Reprendre au point indiqué dans le guide, sans recréer le dépôt.`);
  return r;
}
try {
  run('git',['--version']);run('gh',['--version']);run('gh',['auth','status']);
  run(process.execPath,['scripts/validate.mjs']);
  run(process.execPath,['--test',...readdirSync(resolve(root,'tests')).filter(n=>n.endsWith('.test.mjs')).map(n=>`tests/${n}`)]);
  run(process.execPath,['node_modules/vite/bin/vite.js','build']);
  const identity=run('gh',['api','user','--jq','.login'],{capture:true}).stdout.trim();
  if(identity.toLowerCase()!=='elhisse-clprepas')throw new Error('Le compte GitHub actif ne correspond pas à elhisse-CLPrepas. Sélectionnez le bon compte avec gh auth switch.');
  const destination=resolve(root,'..','github-publication',repo.split('/')[1]);
  if(existsSync(destination))throw new Error('Le dossier github-publication existe déjà. Inspectez-le et reprenez manuellement.');
  const lookup=run('gh',['api',`repos/${repo}`],{capture:true,allowFailure:true});
  if(lookup.status===0)throw new Error('Le dépôt cible existe déjà. Aucune modification distante effectuée. Suivez la reprise du guide.');
  if(!lookup.stderr?.includes('HTTP 404'))throw new Error('Impossible de confirmer l’absence du dépôt. Vérifiez la connexion et les droits.');
  const allow=['package.json','package-lock.json','index.html','vite.config.js','.gitignore','AGENTS.md','README.md','src','public','scripts','tests','docs','.github'];
  function inspect(path){const stat=lstatSync(path);if(stat.isSymbolicLink())throw new Error('Lien symbolique refusé dans le lot public');if(stat.isDirectory()){for(const name of readdirSync(path)){if(/^(prive|ressources-privees|node_modules|\.git|\.env.*)$/i.test(name))throw new Error('Fichier ou dossier privé trouvé dans le lot public');inspect(resolve(path,name))}}else if(/\.(md|json|js|mjs|yml|html|css)$/.test(path)){const content=readFileSync(path,'utf8');if(/gh[pousr]_[A-Za-z0-9]{20,}|sk-proj-[A-Za-z0-9_-]{16,}|^-----BEGIN (?:RSA |EC |DSA |OPENSSH |ENCRYPTED )?PRIVATE KEY-----\r?$/m.test(content))throw new Error('Motif de secret trouvé dans le lot public')}}
  for(const name of allow)inspect(resolve(root,name));
  run('gh',['repo','create',repo,'--public','--add-readme','--description','Séance 28 — Finale officielle du Grand Prix LN-IA des projets professionnels']);
  const defaultBranch=run('gh',['repo','view',repo,'--json','defaultBranchRef','--jq','.defaultBranchRef.name'],{capture:true}).stdout.trim();
  if(!defaultBranch)throw new Error('Branche initiale non disponible. Reprendre après vérification du dépôt créé.');
  if(defaultBranch!=='main')run('gh',['api','--method','POST',`repos/${repo}/branches/${encodeURIComponent(defaultBranch)}/rename`,'-f','new_name=main']);
  mkdirSync(dirname(destination),{recursive:true});
  const issueBody=resolve(dirname(destination),'issue-seance-28.md');
  writeFileSync(issueBody,'Créer la présentation de la finale du Module 07 : quatre dossiers à venir, grille commune de sept critères sur 100, affiches S25 à S28 et synthèses validées.\n\nAucune note ni décision Grand Prix n’est préremplie.\n');
  const issue=run('gh',['issue','create','--repo',repo,'--title','Présenter la finale officielle de la séance 28','--body-file',issueBody],{capture:true}).stdout.trim();
  run('gh',['repo','clone',repo,destination]);
  run('git',['switch','-c',branch],{cwd:destination});
  function copy(source,target){if(lstatSync(source).isDirectory()){mkdirSync(target,{recursive:true});for(const n of readdirSync(source))copy(resolve(source,n),resolve(target,n))}else{mkdirSync(dirname(target),{recursive:true});copyFileSync(source,target)}}
  for(const name of allow)copy(resolve(root,name),resolve(destination,name));
  run('git',['add','--',...allow],{cwd:destination});
  run('git',['commit','-m','feat: présenter la finale officielle de la séance 28'],{cwd:destination});
  run('git',['push','-u','origin',branch],{cwd:destination});
  const prBody=resolve(dirname(destination),'pr-seance-28.md');
  writeFileSync(prBody,`La finale a besoin d’un point d’accès commun aux dossiers et aux évaluations validées.\n\nCette PR ajoute le site Vite, les quatre fiches en attente, les affiches, le conducteur proposé et les sept critères officiels. Les rapports et le Grand Prix restent vides jusqu’à leur validation.\n\nContrôles locaux exécutés par le script : contrat des données, tests Node et build Vite. La revue visuelle et la validation humaine sont à consigner avant fusion.\n\nCloses ${issue}\n`);
  const pr=run('gh',['pr','create','--repo',repo,'--base','main','--head',branch,'--title','Présentation de la finale officielle — séance 28','--body-file',prBody],{cwd:destination,capture:true}).stdout.trim();
  console.log(`\nDépôt et PR préparés : ${pr}\nCopie de travail : ${destination}\nSuite : docs/GUIDE-PUBLICATION-GITHUB.md. GitHub Pages n’est pas encore publié.`);
} catch(error){console.error(error.message);process.exitCode=1;}
