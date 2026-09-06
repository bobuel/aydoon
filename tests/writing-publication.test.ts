// @vitest-environment node
import { mkdtemp, rm, writeFile } from 'node:fs/promises';
import { tmpdir } from 'node:os';
import path from 'node:path';
import type { WritingArticle } from '../types';
import { getWritingArticles, getWritingPages, writingDescription } from '../writing/registry.mjs';
import { verifyWritingBuild } from '../scripts/verify-writing-build.mjs';
import { WRITING_ARTICLES, WRITING_DESCRIPTION } from '../writing/content';

const articles = getWritingArticles({ includeDrafts: true });
const draft: WritingArticle = {
  slug: 'unpublished-test-fixture',
  title: 'Unpublished test fixture',
  summary: 'Synthetic content for testing the publication boundary.',
  category: 'Test',
  status: 'draft',
  opening: ['This deliberately unpublished fixture must never appear in generated assets.'],
  sections: [{
    heading: 'Fixture section',
    body: ['This is synthetic test content, not an article intended for publication.'],
    example: { label: 'Hypothetical fixture', fields: [{ label: 'Item', value: 'An unpublished fixture example value.' }] },
  }],
};

describe('writing publication boundary', () => {
  it('includes exactly the four articles approved for this release', () => {
    expect(articles.map(article => article.slug)).toEqual([
      'cost-per-verified-outcome',
      'make-good-workflows-reusable',
      'shared-context-for-people-and-agents',
      'a-briefing-that-helps-you-act',
    ]);
    expect(articles.every(article => article.status === 'published')).toBe(true);
    expect(getWritingArticles()).toEqual(articles);
    expect(getWritingPages()).toHaveLength(5);
    expect(WRITING_ARTICLES).toEqual(articles);
    expect(WRITING_DESCRIPTION).toBe(writingDescription);
  });

  it('still excludes unapproved entries from build data and static routes', () => {
    expect(getWritingArticles({ articles: [draft] })).toEqual([]);
    expect(getWritingPages([draft])).toEqual([]);
    expect(getWritingArticles({ articles: [...articles, draft] })).toEqual(articles);
    expect(getWritingArticles({ articles: [draft], includeDrafts: true })).toEqual([draft]);
    expect(getWritingPages([...articles, draft])).toEqual(getWritingPages(articles));
  });

  it('rejects ambiguous status and unsafe or duplicate slugs', () => {
    expect(() => getWritingArticles({ articles: [draft, draft] })).toThrow('unique and URL-safe');
    expect(() => getWritingArticles({ articles: [{ ...draft, slug: '../outside' }] })).toThrow('unique and URL-safe');
    expect(() => getWritingArticles({ articles: [{ ...draft, status: 'ready' as 'draft' }] })).toThrow('Unknown writing status');
  });

  it('keeps the approved writing employer-neutral with explicitly fictional examples', () => {
    // Regression check, not a substitute for Alex reviewing context and permission.
    const text = JSON.stringify(articles);
    expect(text).not.toMatch(/automattic|dremio|braze|arrikto|workfusion|qubole|wordpress|aienablement|\bp2\b|slack|google|codex|claude|openai|chatgpt|https?:\/\/|@[\w.-]+|\b\d+[,%]/i);
    for (const article of articles) {
      const body = [...article.opening, ...article.sections.flatMap(section => section.body)].join(' ');
      expect(body).toMatch(/hypothetical/);
      expect(body).not.toContain('?');
      expect(body).not.toMatch(/\bI would\b/);
      for (const section of article.sections) {
        if (section.example) expect(section.example.label).toMatch(/^Hypothetical /);
      }
    }
  });

  it('catches an accidental draft body in an otherwise normal output file', async () => {
    const directory = await mkdtemp(path.join(tmpdir(), 'aydoon-writing-test-'));
    try {
      await writeFile(path.join(directory, 'index.html'), '<title>Approved site</title>');
      await expect(verifyWritingBuild(directory, [draft])).resolves.toBeUndefined();
      await writeFile(path.join(directory, 'asset.js'), JSON.stringify(draft.opening[0]));
      await expect(verifyWritingBuild(directory, [draft])).rejects.toThrow('Unapproved writing found in build');
    } finally {
      // Only the exact directory created by mkdtemp above; never a workspace path.
      await rm(directory, { recursive: true, force: true });
    }
  });

  it('also catches an isolated example value in build output', async () => {
    const directory = await mkdtemp(path.join(tmpdir(), 'aydoon-writing-test-'));
    try {
      await writeFile(path.join(directory, 'asset.js'), JSON.stringify(draft.sections[0].example!.fields[0].value));
      await expect(verifyWritingBuild(directory, [draft])).rejects.toThrow('Unapproved writing found in build');
    } finally {
      await rm(directory, { recursive: true, force: true });
    }
  });
});
