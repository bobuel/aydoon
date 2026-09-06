import { readdir, readFile } from 'node:fs/promises';
import path from 'node:path';
import { getWritingArticles } from '../writing/registry.mjs';

const textExtensions = new Set(['.html', '.js', '.mjs', '.css', '.json', '.map', '.xml', '.txt', '.svg']);

/** Check the actual output, not only navigation or the registry filter. */
export async function verifyWritingBuild(directory, articles = getWritingArticles({ includeDrafts: true })) {
  const drafts = articles.filter(article => article.status === 'draft');
  async function inspect(current) {
    for (const entry of await readdir(current, { withFileTypes: true })) {
      const filename = path.join(current, entry.name);
      if (drafts.some(article => entry.name.includes(article.slug))) {
        throw new Error(`Draft writing path found in build: ${filename}`);
      }
      if (entry.isDirectory()) {
        await inspect(filename);
      } else if (textExtensions.has(path.extname(filename))) {
        const contents = await readFile(filename, 'utf8');
        for (const article of drafts) {
          const markers = [article.slug, article.title, ...article.opening, ...article.sections.flatMap(section => [
            ...section.body,
            ...(section.example ? [section.example.label, ...section.example.fields.map(field => field.value)] : []),
          ])];
          if (markers.some(marker => contents.includes(marker) || contents.includes(JSON.stringify(marker).slice(1, -1)))) {
            throw new Error(`Unapproved writing found in build: ${filename} (${article.slug})`);
          }
        }
      }
    }
  }
  await inspect(directory);
  console.log(`Writing build check passed: ${drafts.length} drafts excluded from assets and routes.`);
}
