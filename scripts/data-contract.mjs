const maxima = [15,20,20,15,15,10,5];
const canonical = [
  ['Pertinence du sujet professionnel','Besoin, destinataire et utilité explicités.'],
  ['Sélection et qualité des preuves','Preuves accessibles, choisies et expliquées.'],
  ['Progression avant/après','État initial, correction et résultat observé.'],
  ['Cohérence et lisibilité du portfolio','Structure claire, synthèse et index utilisable.'],
  ['Clarté du pitch et de la démonstration','Présentation compréhensible, parcours maîtrisé, durées respectées.'],
  ['Compréhension de la méthode et rôle de l’IA','Contribution personnelle et assistance distinguées.'],
  ['Sécurité et contrôle humain','Données protégées, contrôles et autorisations expliqués.']
];
const ids = ['F01','F02','F03','F04'];
const assert = (ok,message) => { if(!ok) throw new Error(message); };
const object = (v,keys,label) => {assert(v && typeof v==='object' && !Array.isArray(v),`${label}: objet requis`);assert(Object.keys(v).every(k=>keys.includes(k)) && keys.every(k=>Object.hasOwn(v,k)),`${label}: champs manquants ou non autorisés`);};
const text = (v,label) => assert(typeof v==='string' && v.trim().length>0 && v.length<=6000,`${label}: texte requis`);
const date = (v,label) => assert(typeof v==='string' && /^\d{4}-\d{2}-\d{2}$/.test(v) && !Number.isNaN(Date.parse(v)) && new Date(v).toISOString().slice(0,10)===v,`${label}: date ISO valide requise`);
export function checkUrl(v,kind='any') {
  let u; try {u=new URL(v)} catch {throw new Error('URL invalide')}
  assert(u.protocol==='https:'&&!u.username&&!u.password&&!u.port,'URL publique HTTPS sans identifiant requise');
  assert(!/^(localhost|127\.|0\.|10\.|192\.168\.|172\.(1[6-9]|2\d|3[01])\.|\[)/.test(u.hostname) && u.hostname.includes('.'),'Hôte public requis');
  assert(![...u.searchParams.keys()].some(k=>/token|secret|auth|signature|password/i.test(k)),'URL contenant un accès signé ou un secret');
  if(kind==='repository')assert(u.hostname==='github.com' && /^\/[^/]+\/[^/]+\/?$/.test(u.pathname),'URL de dépôt GitHub requise');
  if(kind==='pages')assert(u.hostname.endsWith('.github.io'),'URL GitHub Pages requise');
  return true;
}
export function checkLocal(v,kind) {
  const re=kind==='preview'?/^assets\/dossiers\/[A-Za-z0-9_-]+\.(png|jpe?g|webp)$/:/^rapports\/[A-Za-z0-9_-]+\.md$/;
  assert(typeof v==='string'&&re.test(v),`Chemin public ${kind} invalide`);return true;
}
export function validateData(finalistes,grille,resultats) {
  object(grille,['version','source','criteria'],'grille');
  assert(grille.version==='LN-IA-S28-V1','Version de grille inconnue');
  assert(Array.isArray(grille.criteria)&&grille.criteria.length===7,'Sept critères requis');
  grille.criteria.forEach((c,i)=>{object(c,['id','label','max','indicator'],`critère ${i}`);assert(c.id===`C${i+1}`&&c.max===maxima[i],'Critères ou maxima modifiés');assert(c.label===canonical[i][0]&&c.indicator===canonical[i][1],'Libellé ou indicateur canonique modifié');});
  assert(Array.isArray(finalistes)&&finalistes.length===4,'Quatre finalistes requis');
  finalistes.forEach((p,i)=>{
    object(p,['id','name','profile','axis','title','summary','repositoryUrl','pagesUrl','preview','evidence','publication','evaluation'],`finaliste ${i}`);
    assert(p.id===ids[i],'Identifiant ou ordre de finaliste modifié');
    ['name','profile','axis'].forEach(k=>text(p[k],k));
    ['title','summary'].forEach(k=>{if(p[k]!==null)text(p[k],k)});
    if(p.repositoryUrl!==null)checkUrl(p.repositoryUrl,'repository');
    if(p.pagesUrl!==null)checkUrl(p.pagesUrl,'pages');
    if(p.preview!==null){object(p.preview,['src','alt','capturedAt','sourceUrl'],'aperçu');checkLocal(p.preview.src,'preview');text(p.preview.alt,'alt');date(p.preview.capturedAt,'capture');checkUrl(p.preview.sourceUrl);}
    assert(Array.isArray(p.evidence),'Liste de preuves requise');
    p.evidence.forEach(v=>{object(v,['label','url','type'],'preuve');text(v.label,'preuve');text(v.type,'type');checkUrl(v.url)});
    const hasContent=p.title!==null||p.summary!==null||p.repositoryUrl!==null||p.pagesUrl!==null||p.preview!==null||p.evidence.length>0||p.evaluation!==null;
    if(hasContent)assert(p.publication!==null,`${p.id}: autorisation publique manquante`);
    if(p.publication!==null){object(p.publication,['validatedBy','validatedAt','decisionRef'],'publication');text(p.publication.validatedBy,'valideur');date(p.publication.validatedAt,'validation');text(p.publication.decisionRef,'décision');}
    if(p.evaluation!==null){
      const v=p.evaluation;
      object(v,['status','gridVersion','publishedAt','validatedBy','decisionRef','reportPath','criteria','strength','nextAction'],'évaluation');
      assert(v.status==='validee'&&v.gridVersion===grille.version,'Seule une synthèse validée selon la grille commune peut être publiée');
      date(v.publishedAt,'publication');text(v.validatedBy,'valideur');text(v.decisionRef,'décision');text(v.strength,'force');text(v.nextAction,'prochaine action');checkLocal(v.reportPath,'report');
      assert(Array.isArray(v.criteria)&&v.criteria.length===7,'Sept observations requises');
      v.criteria.forEach((c,j)=>{object(c,['id','score','observation','evidenceUrls'],'observation');assert(c.id===`C${j+1}`,'Ordre des critères invalide');assert(c.score===null||(typeof c.score==='number'&&Number.isFinite(c.score)&&c.score>=0&&c.score<=maxima[j]),'Score hors bornes');text(c.observation,'observation');assert(Array.isArray(c.evidenceUrls),'Références de preuves requises');c.evidenceUrls.forEach(u=>checkUrl(u));if(c.score!==null)assert(c.evidenceUrls.length>0,'Chaque note publiée doit citer une preuve');});
    }
  });
  object(resultats,['status','winnerId','validatedBy','validatedAt','decisionRef','rulesRef','announcement'],'Grand Prix');
  assert(['en-attente','publie'].includes(resultats.status),'Statut Grand Prix invalide');
  if(resultats.status==='en-attente')assert(Object.entries(resultats).every(([k,v])=>k==='status'||v===null),'Aucune décision anticipée dans les données publiques');
  else {assert(ids.includes(resultats.winnerId),'Lauréat inconnu');['validatedBy','decisionRef','rulesRef','announcement'].forEach(k=>text(resultats[k],k));date(resultats.validatedAt,'date de décision');}
  return true;
}
