import { existsSync, readFileSync } from 'node:fs';
import { dirname, join, resolve } from 'node:path';

const root = resolve(import.meta.dirname, '..');
const pages = [
  'index.html', 'about/index.html', 'staff/index.html', 'contact/index.html',
  'staff-portal/index.html', 'data-access/index.html',
  'localised-data-storage-upload-iclou/index.html',
  'padlock-archive-45581/index.html', 'celldata-backend/index.html', '404.html'
];

const requiredCopy = new Map([
  ['index.html', ["Managing Britain's mobile data infrastructure. Securely.", "The UK's national mobile data infrastructure", '©2022 UK Cellnet.']],
  ['about/index.html', ["Britain's cellular infrastructure", 'Whichever mobile data provider you use']],
  ['staff/index.html', ['Daniel Ballentine', 'Sally Burns', 'Jeet Iyer', 'Erica Small']],
  ['contact/index.html', ['UK Cellnet cannot be contacted by customers.']],
  ['staff-portal/index.html', ['020 3962 0484', 'Cellular Data Portal']],
  ['data-access/index.html', ['Welcome back, Sally.', 'https://ukcellnet.uk/celldata/index.html']]
]);

const failures = [];

for (const page of pages) {
  const fullPath = join(root, page);
  if (!existsSync(fullPath)) {
    failures.push(`Missing page: ${page}`);
    continue;
  }
  const html = readFileSync(fullPath, 'utf8');
  if (!html.includes('noindex, nofollow')) failures.push(`Missing noindex: ${page}`);
  for (const text of requiredCopy.get(page) ?? []) {
    if (!html.includes(text)) failures.push(`Missing required copy in ${page}: ${text}`);
  }
  for (const match of html.matchAll(/(?:href|src)="(\/[^"]+)"/g)) {
    const target = match[1].split(/[?#]/, 1)[0];
    if (target === '/') continue;
    let localPath = join(root, target);
    if (target.endsWith('/')) localPath = join(localPath, 'index.html');
    if (!existsSync(localPath)) failures.push(`Broken local reference in ${page}: ${target}`);
  }
}

const css = readFileSync(join(root, 'assets/css/site.css'), 'utf8');
for (const match of css.matchAll(/url\("?(\.\.\/[^"')]+)"?\)/g)) {
  const target = resolve(dirname(join(root, 'assets/css/site.css')), match[1]);
  if (!existsSync(target)) failures.push(`Broken CSS asset: ${match[1]}`);
}

if (failures.length) {
  console.error(failures.join('\n'));
  process.exit(1);
}

console.log(`Checked ${pages.length} pages: routes, local assets and protected copy are present.`);
