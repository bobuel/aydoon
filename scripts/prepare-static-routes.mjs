import { copyFile, mkdir, readFile, writeFile } from 'node:fs/promises';
import path from 'node:path';

const outputDirectory = path.resolve('dist');
const homeHtml = await readFile(path.join(outputDirectory, 'index.html'), 'utf8');
const previewOrigin = 'https://bobuel.github.io/aydoon';

const caseStudies = [
  {
    slug: 'enterprise-ai-adoption-automattic',
    title: 'Enterprise AI adoption at Automattic',
    description: 'How Alex Aidun approaches enterprise AI adoption through product ownership, enablement, and a distributed champion network.',
  },
  {
    slug: 'ai-product-leadership-dremio',
    title: 'AI portfolio at Dremio',
    description: 'How Alex Aidun shaped four AI product initiatives while keeping product evidence distinct from Dremio University adoption metrics.',
  },
  {
    slug: 'bloom-assessment-workflow',
    title: 'Bloom assessment workflow',
    description: 'How Alex Aidun turned Bloom\'s taxonomy into a repeatable assessment workflow used more than 1,000 times.',
  },
];

function escapeAttribute(value) {
  return value.replaceAll('&', '&amp;').replaceAll('"', '&quot;');
}

function withMetadata(html, study) {
  const url = `${previewOrigin}/case-studies/${study.slug}`;
  const pageTitle = `${study.title} | Alex Aidun`;
  const replacements = [
    [/<title>.*?<\/title>/, `<title>${pageTitle}</title>`],
    [/<meta name="description" content="[^"]*"\s*\/>/, `<meta name="description" content="${escapeAttribute(study.description)}" />`],
    [/<link rel="canonical" href="[^"]*"\s*\/>/, `<link rel="canonical" href="${url}" />`],
    [/<meta property="og:title" content="[^"]*"\s*\/>/, `<meta property="og:title" content="${escapeAttribute(pageTitle)}" />`],
    [/<meta property="og:description" content="[^"]*"\s*\/>/, `<meta property="og:description" content="${escapeAttribute(study.description)}" />`],
    [/<meta property="og:url" content="[^"]*"\s*\/>/, `<meta property="og:url" content="${url}" />`],
    [/<meta name="twitter:title" content="[^"]*"\s*\/>/, `<meta name="twitter:title" content="${escapeAttribute(pageTitle)}" />`],
    [/<meta name="twitter:description" content="[^"]*"\s*\/>/, `<meta name="twitter:description" content="${escapeAttribute(study.description)}" />`],
  ];
  return replacements.reduce((updated, [pattern, replacement]) => updated.replace(pattern, replacement), html);
}

for (const study of caseStudies) {
  const routeDirectory = path.join(outputDirectory, 'case-studies', study.slug);
  await mkdir(routeDirectory, { recursive: true });
  await writeFile(path.join(routeDirectory, 'index.html'), withMetadata(homeHtml, study));
}

await copyFile(path.join(outputDirectory, 'index.html'), path.join(outputDirectory, '404.html'));
await writeFile(path.join(outputDirectory, '.nojekyll'), '');
console.log(`Prepared ${caseStudies.length} direct case-study routes and the Pages fallback.`);
