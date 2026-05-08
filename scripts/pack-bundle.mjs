import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const html = fs.readFileSync('index.html', 'utf8');
const manifestRe = /(<script type="__bundler\/manifest">)([\s\S]*?)(<\/script>)/;
const templateRe = /(<script type="__bundler\/template">)([\s\S]*?)(<\/script>)/;

const manifestMatch = html.match(manifestRe);
const templateMatch = html.match(templateRe);
if (!manifestMatch || !templateMatch) { console.error('manifest or template not found'); process.exit(1); }

const manifest = JSON.parse(manifestMatch[2]);
const mimeToExt = {
  'text/javascript': 'js',
  'application/javascript': 'js',
  'text/jsx': 'jsx',
  'font/woff2': 'woff2',
};

for (const [uuid, entry] of Object.entries(manifest)) {
  const ext = mimeToExt[entry.mime] || 'bin';
  const filePath = path.join('src/extracted', `${uuid}.${ext}`);
  const buf = fs.readFileSync(filePath);
  const encoded = entry.compressed ? zlib.gzipSync(buf, { level: 9 }) : buf;
  entry.data = encoded.toString('base64');
}

const newTemplate = fs.readFileSync('src/extracted/__template.html', 'utf8');

// JSON inside <script>...</script> must not contain a literal </script>, since the
// HTML parser would close the script tag mid-string. Escape `/` in `</` to `<\/`
// (valid JSON, decodes to `</`).
const safeJson = (v) => JSON.stringify(v).replace(/<\/(?=script)/gi, '<\\/');

const newHtml = html
  .replace(manifestRe, (_m, a, _b, c) => `${a}${safeJson(manifest)}${c}`)
  .replace(templateRe, (_m, a, _b, c) => `${a}${safeJson(newTemplate)}${c}`);

fs.writeFileSync('index.html', newHtml);
console.log(`Repacked index.html (${newHtml.length} bytes)`);
