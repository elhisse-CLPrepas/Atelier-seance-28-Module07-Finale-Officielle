import './style.css';
import finalistes from './data/finalistes.json';
import affiches from './data/affiches.json';
import grille from './data/grille.json';
import resultats from './data/resultats.json';
import { renderProjects, renderCriteria, renderEvaluations, renderAward } from './render.js';
document.querySelector('#finalistes').innerHTML = renderProjects(finalistes,affiches);
document.querySelector('#criteria').innerHTML = renderCriteria(grille);
document.querySelector('#evaluations').innerHTML = finalistes.some(p=>p.evaluation?.status==='validee') ? renderEvaluations(finalistes,grille) : '';
if(resultats.status==='publie'){const award=document.querySelector('#grand-prix');award.hidden=false;award.innerHTML=renderAward(resultats,finalistes);}
const journey=[['25','Sélectionner','Choisir les preuves qui montrent la progression.'],['26','Synthétiser','Construire un portfolio professionnel lisible.'],['27','Préparer','Structurer le pitch et répéter la démonstration.'],['28','Présenter','Soutenir le projet et expliquer ses choix.']];
document.querySelector('#journey').innerHTML=journey.map(([n,title,description])=>`<a class="journey-card" href="assets/seance-${n}.png" target="_blank" rel="noopener noreferrer"><div class="journey-image"><img src="assets/seance-${n}.png" alt="Affiche de la séance ${n} : ${title}" loading="lazy" width="1024" height="1536" /></div><div><span>SÉANCE ${n}</span><h3>${title} <span aria-hidden="true">↗</span></h3><p>${description}</p></div></a>`).join('');

function revealReference(){const target=document.getElementById(location.hash.slice(1));if(target?.matches('details.archive-panel'))target.open=true;}
document.querySelectorAll('a[href="#programme"],a[href="#grille"]').forEach(link=>link.addEventListener('click',()=>{document.querySelector(link.getAttribute('href')).open=true;}));
window.addEventListener('hashchange',revealReference);
revealReference();
