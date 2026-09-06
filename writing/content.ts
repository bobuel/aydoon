import type { WritingArticle } from '../types';

// Vite supplies only the entries permitted for this build. Never import the
// unfiltered source JSON into a client module, including a lazy-loaded module.
declare const __WRITING_ARTICLES__: WritingArticle[];
export const WRITING_ARTICLES = __WRITING_ARTICLES__;
export const WRITING_DESCRIPTION = 'Notes on AI operations, systems design, and making useful workflows repeatable.';

export function getWritingArticle(slug: string) {
  return WRITING_ARTICLES.find(article => article.slug === slug);
}

export function readingMinutes(article: WritingArticle) {
  const words = [...article.opening, ...article.sections.flatMap(section => [
    section.heading,
    ...section.body,
    ...(section.example ? [section.example.label, ...section.example.fields.flatMap(field => [field.label, field.value])] : []),
  ])].join(' ').trim().split(/\s+/).length;
  return Math.max(1, Math.ceil(words / 200));
}
