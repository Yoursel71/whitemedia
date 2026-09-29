import { mkdir, readFile, rm, writeFile } from "node:fs/promises";
import { dirname } from "node:path";
import { build } from "vite";

const SITE_URL = "https://whitemedia.com.tr";
const imageUrl = `${SITE_URL}/social/white-media-og.png`;
const dist = new URL("../dist/", import.meta.url);
const serverBundle = new URL("../.prerender/", import.meta.url);
const template = await readFile(new URL("index.html", dist), "utf8");

function escapeHtml(value) {
  return String(value).replace(/[&<>"']/g, (char) => ({
    "&": "&amp;", "<": "&lt;", ">": "&gt;", '"': "&quot;", "'": "&#39;",
  })[char]);
}

function documentFor(path, renderPage) {
  const { markup, meta } = renderPage(path);
  const canonical = new URL(meta.path || path, SITE_URL).toString();
  const title = escapeHtml(meta.title);
  const description = escapeHtml(meta.description);
  const tags = [
    `<title>${title}</title>`,
    `<meta name="description" content="${description}" />`,
    `<meta name="robots" content="${meta.noIndex ? "noindex, nofollow" : "index, follow"}" />`,
    `<link rel="canonical" href="${escapeHtml(canonical)}" />`,
    `<meta property="og:site_name" content="White Media" />`,
    `<meta property="og:locale" content="tr_TR" />`,
    `<meta property="og:type" content="${meta.type || "website"}" />`,
    `<meta property="og:title" content="${title}" />`,
    `<meta property="og:description" content="${description}" />`,
    `<meta property="og:url" content="${escapeHtml(canonical)}" />`,
    `<meta property="og:image" content="${imageUrl}" />`,
    `<meta property="og:image:width" content="1200" />`,
    `<meta property="og:image:height" content="630" />`,
    `<meta name="twitter:card" content="summary_large_image" />`,
    `<meta name="twitter:title" content="${title}" />`,
    `<meta name="twitter:description" content="${description}" />`,
  ].join("\n    ");

  const withoutDefaultMeta = template
    .replace(/<title>[\s\S]*?<\/title>/, "")
    .replace(/<meta\b[^>]*(?:name|property)="(?:description|robots|og:[^"]+|twitter:[^"]+)"[^>]*>/g, "");
  if (!withoutDefaultMeta.includes('<div id="root"></div>')) {
    throw new Error("Vite output is missing the root placeholder");
  }
  return withoutDefaultMeta
    .replace("</head>", `    ${tags}\n  </head>`)
    .replace('<div id="root"></div>', `<div id="root">${markup}</div>`);
}

try {
  await build({
    publicDir: false,
    logLevel: "error",
    build: {
      ssr: "src/entry-server.tsx",
      outDir: ".prerender",
      emptyOutDir: true,
    },
  });
  const { pagePaths, renderPage } = await import(new URL("entry-server.js", serverBundle).href);
  for (const path of [...pagePaths, "/404"]) {
    const filename = path === "/" ? "index.html" : `${path.slice(1)}.html`;
    const output = new URL(filename, dist);
    await mkdir(dirname(output.pathname), { recursive: true });
    await writeFile(output, documentFor(path, renderPage));
  }
  console.log(`Prerendered ${pagePaths.length} pages and 404.html`);
} finally {
  await rm(serverBundle, { recursive: true, force: true });
}
