import { readFileSync } from 'node:fs';
import { fileURLToPath } from 'node:url';

export const writingFilePath = fileURLToPath(new URL('./pieces.json', import.meta.url));
export const writingDescription = 'Notes on AI operations, systems design, and making useful workflows repeatable.';

/**
 * Filter before injecting data into the client. Hiding a draft route alone would
 * still publish its text in JavaScript assets.
 * @param {{ includeDrafts?: boolean, articles?: import('../types').WritingArticle[] }} options
 * @returns {import('../types').WritingArticle[]}
 */
export function getWritingArticles({ includeDrafts = false, articles = JSON.parse(readFileSync(writingFilePath, 'utf8')) } = {}) {
  const slugs = new Set();
  for (const article of articles) {
    if (!/^[a-z0-9]+(?:-[a-z0-9]+)*$/.test(article.slug) || slugs.has(article.slug)) {
      throw new Error('Writing slugs must be unique and URL-safe.');
    }
    if (!['draft', 'published'].includes(article.status)) {
      throw new Error(`Unknown writing status for ${article.slug}.`);
    }
    slugs.add(article.slug);
  }
  return articles.filter(article => article.status === 'published' || includeDrafts);
}

/** @param {import('../types').WritingArticle[]} articles */
export function getWritingPages(articles = getWritingArticles()) {
  const published = articles.filter(article => article.status === 'published');
  if (!published.length) return [];
  return [
    { path: 'writing', title: 'Writing', description: writingDescription },
    ...published.map(article => ({ path: `writing/${article.slug}`, title: article.title, description: article.summary })),
  ];
}
