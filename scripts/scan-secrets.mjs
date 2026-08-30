import fs from 'node:fs';
import path from 'node:path';

const roots = ['components', 'dist'];
const extensions = new Set(['.js', '.mjs', '.cjs', '.ts', '.tsx', '.html', '.css', '.map']);
const secretPatterns = [
  { name: 'Google API key', pattern: /AIza[0-9A-Za-z_-]{30,}/g },
  { name: 'client-side Gemini environment reference', pattern: /(?:VITE_GEMINI|process\.env\.(?:API_KEY|GEMINI_API_KEY))/g, clientOnly: true },
  { name: 'private key', pattern: /-----BEGIN (?:RSA |EC |OPENSSH )?PRIVATE KEY-----/g },
];
const findings = [];

function scan(target) {
  if (!fs.existsSync(target)) return;
  const stat = fs.statSync(target);
  if (stat.isDirectory()) {
    for (const entry of fs.readdirSync(target)) scan(path.join(target, entry));
    return;
  }
  if (!extensions.has(path.extname(target))) return;
  const contents = fs.readFileSync(target, 'utf8');
  for (const { name, pattern, clientOnly } of secretPatterns) {
    if (clientOnly && !target.startsWith('components') && !target.startsWith('dist')) continue;
    pattern.lastIndex = 0;
    if (pattern.test(contents)) findings.push(`${name}: ${target}`);
  }
}

for (const root of roots) scan(root);
if (findings.length) {
  console.error(`Secret scan failed:\n${findings.join('\n')}`);
  process.exit(1);
}
console.log('Secret scan passed. No client key material or private keys found.');
