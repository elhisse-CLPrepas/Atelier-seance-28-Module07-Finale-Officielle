import test from 'node:test';
import assert from 'node:assert/strict';
import { readFileSync } from 'node:fs';

test('Le retour destiné aux participants reste qualitatif et ne contient aucun élément du classement privé', () => {
  for (const extension of ['md', 'html']) {
    const content = readFileSync(new URL(`../public/rapports/retour-qualitatif-participants.${extension}`, import.meta.url), 'utf8');
    const visible = content.replace(/<style[\s\S]*?<\/style>/gi, '').replace(/<[^>]*>/g, ' ');
    assert.doesNotMatch(visible, /\b\d+(?:[,.]\d+)?\s*\/\s*(?:5|10|15|20|50|70|100)\b|\d+(?:[,.]\d+)?\s*%|ex\s*[æa]e?quo|classement|sous.total/i);
    assert.doesNotMatch(content, /suivi-dossiers|evaluation-2026|archives-privees|RECEPTION-ARCHIVES|donnees-evaluation|C:\\\\?DEV|"score"\s*:/i);
  }
});
