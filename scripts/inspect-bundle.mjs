import fs from 'node:fs';
import zlib from 'node:zlib';

const html = fs.readFileSync('index.html', 'utf8');
const manifestMatch = html.match(/<script type="__bundler\/manifest">([\s\S]*?)<\/script>/);
const templateMatch = html.match(/<script type="__bundler\/template">([\s\S]*?)<\/script>/);
if (!manifestMatch || !templateMatch) { console.error('manifest or template not found'); process.exit(1); }

const manifest = JSON.parse(manifestMatch[1]);
const template = JSON.parse(templateMatch[1]);

const summary = Object.entries(manifest).map(([uuid, entry]) => {
  let buf = Buffer.from(entry.data, 'base64');
  if (entry.compressed) buf = zlib.gunzipSync(buf);
  return { uuid, mime: entry.mime, bytes: buf.length, compressed: !!entry.compressed };
});

console.log('Files in bundle:', summary.length);
console.log('Mimes:', [...new Set(summary.map(s => s.mime))]);
console.log('Template keys:', Object.keys(template));
console.log('Template (first 1500 chars):');
console.log(JSON.stringify(template, null, 2).slice(0, 1500));
console.log('\nFile summary (sorted by size desc):');
summary.sort((a,b) => b.bytes - a.bytes).forEach(s => {
  console.log(`  ${s.uuid}  ${s.mime.padEnd(30)} ${String(s.bytes).padStart(8)} bytes`);
});
