import fs from 'node:fs';
import path from 'node:path';
import zlib from 'node:zlib';

const html = fs.readFileSync('index.html', 'utf8');
const manifestMatch = html.match(/<script type="__bundler\/manifest">([\s\S]*?)<\/script>/);
const templateMatch = html.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);

const manifest = JSON.parse(manifestMatch[1]);
const template = JSON.parse(templateMatch[1]);

const outDir = 'src/extracted';
fs.rmSync(outDir, { recursive: true, force: true });
fs.mkdirSync(outDir, { recursive: true });

const extToMime = {
  'text/javascript': 'js',
  'application/javascript': 'js',
  'text/jsx': 'jsx',
  'font/woff2': 'woff2',
};

for (const [uuid, entry] of Object.entries(manifest)) {
  let buf = Buffer.from(entry.data, 'base64');
  if (entry.compressed) buf = zlib.gunzipSync(buf);
  const ext = extToMime[entry.mime] || 'bin';
  fs.writeFileSync(path.join(outDir, `${uuid}.${ext}`), buf);
}

fs.writeFileSync(path.join(outDir, '__template.html'), typeof template === 'string' ? template : JSON.stringify(template));
console.log('Extracted', Object.keys(manifest).length, 'files to', outDir);
