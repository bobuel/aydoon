import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve('dist');
const homeHtml = await readFile(path.join(outputDirectory, 'index.html'), 'utf8');
const previewOrigin = 'https://bobuel.github.io/aydoon';
const deployOrigin = process.argv[2] || previewOrigin;

const caseStudies = [
  {
    slug: 'enterprise-ai-adoption-automattic',
    title: 'AI operations at Automattic',
    description: 'How Alex Aidun approaches enterprise AI adoption through product ownership, enablement, and a distributed champion network.',
  },
  {
    slug: 'ai-product-leadership-dremio',
    title: 'AI products at Dremio',
    description: 'How Alex Aidun shaped four AI product initiatives while keeping product evidence distinct from Dremio University adoption metrics.',
  },
  {
    slug: 'bloom-assessment-workflow',
    title: 'Bloom assessment workflow',
    description: 'How Alex Aidun used demand from 1,000+ BloomGPT uses to design a source-grounded assessment workflow with teacher review.',
  },
];

const standalonePages = [
  {
    path: 'work',
    title: 'Professional impact',
    description: 'Alex Aidun\'s case studies in enterprise AI adoption, AI product leadership, enablement, and product-led transformation.',
  },
  {
    path: 'builds',
    title: 'Builds',
    description: 'Products, AI tools, open-source workflows, games, and experiments built by Alex Aidun.',
  },
  {
    path: 'games',
    title: 'Games and creative work',
    description: 'Games and creative experiments by Alex Aidun exploring systems, story, voice, probability, and interaction.',
  },
  {
    path: 'about',
    title: 'About Alex Aidun',
    description: 'The professional and creative story behind Alex Aidun\'s work in enterprise AI, product adoption, and hands-on building.',
  },
];

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

function withMetadata(html, page) {
  const url = `${deployOrigin}/${page.path}`;
  const pageTitle = `${page.title} | Alex Aidun`;
  const replacements = [
    [/<title>.*?<\/title>/, `<title>${pageTitle}</title>`],
    [/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeAttribute(page.description)}" />`],
    [/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`],
    [/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeAttribute(pageTitle)}" />`],
    [/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeAttribute(page.description)}" />`],
    [/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`],
    [/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeAttribute(pageTitle)}" />`],
    [/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeAttribute(page.description)}" />`],
  ];
  return replacements.reduce((updated, [pattern, replacement]) => updated.replace(pattern, replacement), html);
}

const routePages = [
  ...standalonePages,
  ...caseStudies.map((study) => ({ ...study, path: `case-studies/${study.slug}` })),
];

for (const page of routePages) {
  const routeDirectory = path.join(outputDirectory, page.path);
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(path.join(routeDirectory, 'index.html'), withMetadata(homeHtml, page));
}

await copyFile(path.join(outputDirectory, 'index.html'), path.join(outputDirectory, '404.html'));

const robotsPath = path.join(outputDirectory, 'robots.txt');
const sitemapPath = path.join(outputDirectory, 'sitemap.xml');
const robots = deployOrigin === previewOrigin
  ? await readFile(robotsPath, 'utf8')
  : `User-agent: *\nAllow: /\n\nSitemap: ${deployOrigin}/sitemap.xml\n`;
const sitemap = (await readFile(sitemapPath, 'utf8')).replaceAll(previewOrigin, deployOrigin);

await writeFile(robotsPath, robots);
await writeFile(sitemapPath, sitemap);
await writeFile(path.join(outputDirectory, '.nojekyll'), '');
console.log(`Prepared ${routePages.length} direct routes for ${deployOrigin} and the Pages fallback.`);
