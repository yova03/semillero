import { readFileSync, writeFileSync, mkdirSync, rmSync } from 'node:fs';
import { execFileSync } from 'node:child_process';
import { fileURLToPath, pathToFileURL } from 'node:url';
import { join, dirname } from 'node:path';
import { platform } from 'node:os';

const EDGE = platform() === 'win32'
  ? 'C:\\Program Files (x86)\\Microsoft\\Edge\\Application\\msedge.exe'
  : '/Applications/Microsoft Edge.app/Contents/MacOS/Microsoft Edge';
const here = dirname(fileURLToPath(import.meta.url));
const tmp = join(here, '_tmp');
const out = join(here, 'png');
mkdirSync(tmp, { recursive: true });
mkdirSync(out, { recursive: true });

const assets = [
  ['perfil-color', 1080, 1080],
  ['perfil-inversa', 1080, 1080],
  ['perfil-verde', 1080, 1080],
  ['linkedin-perfil-portada', 1584, 396],
  ['linkedin-pagina-portada', 1128, 191],
  ['facebook-portada', 820, 312],
  ['x-portada', 1500, 500],
  ['generico-16x9', 1920, 1080],
];

const FONTS = '<link rel="preconnect" href="https://fonts.googleapis.com"><link rel="preconnect" href="https://fonts.gstatic.com" crossorigin><link href="https://fonts.googleapis.com/css2?family=Fraunces:opsz,wght@9..144,400..600&family=IBM+Plex+Mono:wght@400;500&family=Space+Grotesk:wght@500;700&display=swap" rel="stylesheet">';

for (const [name, w, h] of assets) {
  let svg = readFileSync(join(here, name + '.svg'), 'utf8');
  // quitar el @import interno (las fuentes las carga la página) para evitar dobles cargas
  svg = svg.replace(/<defs>[\s\S]*?<\/defs>/, m => m.replace(/@import[^;]+;/g, ''));
  const html = `<!DOCTYPE html><html><head><meta charset="utf-8">${FONTS}<style>html,body{margin:0;padding:0}svg{display:block}</style></head><body>${svg}</body></html>`;
  const htmlPath = join(tmp, name + '.html');
  const pngPath = join(out, name + '.png');
  writeFileSync(htmlPath, html);
  execFileSync(EDGE, [
    '--headless', '--disable-gpu', '--hide-scrollbars',
    '--force-device-scale-factor=1',
    '--default-background-color=00000000',
    '--virtual-time-budget=4000',
    `--window-size=${w},${h}`,
    `--screenshot=${pngPath}`,
    pathToFileURL(htmlPath).href,
  ], { stdio: 'ignore' });
  console.log('OK', name, w + 'x' + h);
}
rmSync(tmp, { recursive: true, force: true });
console.log('Listo.');
