import { readFileSync, existsSync, readdirSync } from 'node:fs';
import { resolve, relative, extname } from 'node:path';
import { fileURLToPath } from 'node:url';
import { validateData } from './data-contract.mjs';
const root=fileURLToPath(new URL('../',import.meta.url));
const read=(path)=>JSON.parse(readFileSync(resolve(root,path),'utf8'));
const finalistes=read('src/data/finalistes.json'),grille=read('src/data/grille.json'),resultats=read('src/data/resultats.json');
try {
  validateData(finalistes,grille,resultats);
  const expected=new Set(['assets/logo-ln-ia.png',...[25,26,27,28].map(n=>`assets/seance-${n}.png`),'rapports/retour-qualitatif-participants.html','rapports/retour-qualitatif-participants.md']);
  const affiches=read('src/data/affiches.json');
  if(Object.keys(affiches).length!==finalistes.length)throw new Error('Une affiche par finaliste est requise');
  for(const p of finalistes){
    const poster=affiches[p.id];
    if(!poster || Object.keys(poster).sort().join(',')!=='alt,src' || typeof poster.alt!=='string' || !poster.alt.trim() || !new RegExp(`^assets/affiches/Affiche-${p.id}-[A-Za-z-]+\\.png$`).test(poster.src))throw new Error(`Affiche invalide : ${p.id}`);
    expected.add(poster.src);
  }
  finalistes.forEach(p=>{
    if(p.preview)expected.add(p.preview.src);
    if(p.evaluation){expected.add(p.evaluation.reportPath);const report=readFileSync(resolve(root,'public',p.evaluation.reportPath),'utf8');if(!report.includes('Statut : SYNTHÈSE PUBLIQUE VALIDÉE')||!report.includes(`Candidat : ${p.id}`))throw new Error(`En-tête de synthèse publique manquant : ${p.id}`);}
  });
  for(const p of expected)if(!existsSync(resolve(root,'public',p)))throw new Error(`Fichier public absent : ${p}`);
  function walk(dir){return readdirSync(dir,{withFileTypes:true}).flatMap(e=>e.isDirectory()?walk(resolve(dir,e.name)):[resolve(dir,e.name)])}
  for(const p of walk(resolve(root,'public'))){const rel=relative(resolve(root,'public'),p).replaceAll('\\','/');if(!expected.has(rel))throw new Error(`Fichier public non référencé : ${rel}`);if(extname(p)==='.md'&&/gh[pousr]_[A-Za-z0-9]{20,}|sk-proj-[A-Za-z0-9_-]{16,}|^-----BEGIN (?:RSA |EC |DSA |OPENSSH |ENCRYPTED )?PRIVATE KEY-----\r?$/m.test(readFileSync(p,'utf8')))throw new Error(`Motif de secret détecté : ${rel}`);}
  console.log('Contrat vérifié : 4 finalistes, 7 critères, 100 points, autorisations renseignées pour tout dossier publié et fichiers publics référencés.');
} catch(error){console.error(`Validation refusée : ${error.message}`);process.exitCode=1;}
