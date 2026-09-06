import { mkdir, readFile, rm, writeFile } from 'node:fs/promises';
import path from 'node:path';
import { pathToFileURL } from 'node:url';

const projectRoot = process.cwd();
const distDir = path.join(projectRoot, 'dist');
const serverEntry = path.join(projectRoot, 'dist-ssr', 'entry-server.js');
const template = await readFile(path.join(distDir, 'index.html'), 'utf8');
const { renderPage, routes } = await import(pathToFileURL(serverEntry).href);

const escapeAttribute = (value) => String(value)
  .replaceAll('&', '&amp;')
  .replaceAll('"', '&quot;')
  .replaceAll('<', '&lt;')
  .replaceAll('>', '&gt;');

function replaceMeta(html, attribute, key, content) {
  const expression = new RegExp(`<meta\\s+${attribute}=["']${key}["'][^>]*>`, 'i');
  const tag = `<meta ${attribute}="${key}" content="${escapeAttribute(content)}" />`;
  return expression.test(html) ? html.replace(expression, tag) : html.replace('</head>', `    ${tag}\n  </head>`);
}

function buildDocument(pathname) {
  const rendered = renderPage(pathname);
  let document = template
    .replace(/<html\s+lang=["'][^"']*["']>/i, `<html lang="${rendered.lang}">`)
    .replace(/<title>.*?<\/title>/is, `<title>${escapeAttribute(rendered.seo.title)}</title>`)
    .replace(/<div\s+id=["']root["']><\/div>/i, `<div id="root">${rendered.html}</div>`);

  document = replaceMeta(document, 'name', 'description', rendered.seo.description);
  document = replaceMeta(document, 'property', 'og:title', rendered.seo.title);
  document = replaceMeta(document, 'property', 'og:description', rendered.seo.ogDescription || rendered.seo.description);
  document = replaceMeta(document, 'property', 'og:url', rendered.seo.canonicalUrl);
  document = replaceMeta(document, 'property', 'og:locale', rendered.seo.locale);
  document = replaceMeta(document, 'name', 'twitter:title', rendered.seo.title);
  document = replaceMeta(document, 'name', 'twitter:description', rendered.seo.ogDescription || rendered.seo.description);

  const alternateTags = rendered.alternates
    .map(({ hreflang, href }) => `    <link rel="alternate" hreflang="${hreflang}" href="${href}" />`)
    .join('\n');
  document = document
    .replace(/\s*<link\s+rel=["']alternate["'][^>]*>/gi, '')
    .replace(/<link\s+rel=["']canonical["'][^>]*>/i, `<link rel="canonical" href="${rendered.seo.canonicalUrl}" />\n${alternateTags}`);

  document = document.replace(/\s*<script\s+id=["'](?:organization|service)-schema["'][^>]*>.*?<\/script>/gis, '');
  const schemaTags = rendered.schemas
    .map((schema, index) => {
      const id = index === 0 ? 'organization-schema' : 'service-schema';
      const json = JSON.stringify(schema).replaceAll('<', '\\u003c');
      return `    <script id="${id}" type="application/ld+json">${json}</script>`;
    })
    .join('\n');
  document = document.replace('</head>', `${schemaTags}\n  </head>`);

  return document.replace(/[ \t]+$/gm, '');
}

for (const route of routes) {
  const relativeDirectory = route.path === '/' ? '' : route.path.replace(/^\//, '').replace(/\/$/, '');
  const outputDirectory = path.join(distDir, relativeDirectory);
  await mkdir(outputDirectory, { recursive: true });
  await writeFile(path.join(outputDirectory, 'index.html'), buildDocument(route.path));
}

const sitemapEntries = routes
  .map(({ path: routePath }) => `  <url><loc>${new URL(routePath, 'https://scmabogados.com').href}</loc></url>`)
  .join('\n');
await writeFile(
  path.join(distDir, 'sitemap.xml'),
  `<?xml version="1.0" encoding="UTF-8"?>\n<urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">\n${sitemapEntries}\n</urlset>\n`,
);

await rm(path.join(projectRoot, 'dist-ssr'), { recursive: true, force: true });
