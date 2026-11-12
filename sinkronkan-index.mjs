import { readFile, writeFile } from 'node:fs/promises';

const read = path => readFile(new URL(path, import.meta.url), 'utf8');
const [html, css, js, icon] = await Promise.all([
  read('index.html'),
  read('assets/styles.css'),
  read('assets/dashboard.js'),
  read('assets/favicon.svg'),
]);

function replaceOne(source, pattern, replacement) {
  if ([...source.matchAll(pattern)].length !== 1) {
    throw new Error('Blok pada index.html hilang atau ganda: ' + pattern);
  }
  return source.replace(pattern, () => replacement);
}

if (/<\/style/i.test(css) || /<\/script/i.test(js)) {
  throw new Error('Sumber CSS atau JavaScript memuat tag penutup HTML.');
}
const iconUrl = 'data:image/svg+xml,' + encodeURIComponent(icon.trim());
let updated = replaceOne(html, /<style>[\s\S]*?<\/style>/g, '<style>\n' + css.trim() + '\n</style>');
updated = replaceOne(updated, /<script>[\s\S]*?<\/script>/g, '<script>\n' + js.trim() + '\n</script>');
updated = replaceOne(updated, /<link rel="icon" href="[^"]*">/g, '<link rel="icon" href="' + iconUrl + '">');
await writeFile(new URL('index.html', import.meta.url), updated, 'utf8');
console.log('index.html sudah disinkronkan.');
