import axe from 'axe-core';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import { RouteScrollReset } from '../App';
import HybridPortfolio from '../components/HybridPortfolio';
import { siteUrl } from '../sitePaths';
import { WRITING_ARTICLES, WRITING_DESCRIPTION, readingMinutes } from '../writing/content';

function show(path = '/writing') {
  return render(<MemoryRouter initialEntries={[path]}><RouteScrollReset /><HybridPortfolio /></MemoryRouter>);
}

beforeEach(() => { vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined); });
afterEach(() => { vi.restoreAllMocks(); });

describe('published Writing section', () => {
  it('adds a sidebar destination without changing the homepage content or primary navigation', () => {
    show('/');
    expect(screen.getAllByRole('article')).toHaveLength(3);
    expect(within(screen.getByRole('navigation', { name: 'Primary navigation' })).getAllByRole('link').map(link => link.textContent)).toEqual(['Work', 'Builds', 'Games']);
    const sidebar = screen.getByRole('complementary');
    fireEvent.click(within(sidebar).getByRole('link', { name: 'Writing' }));
    expect(screen.getByRole('complementary')).toBe(sidebar);
    expect(screen.getByRole('heading', { level: 2, name: 'Writing' })).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveFocus();
    expect(screen.getByRole('link', { name: 'Writing' })).toHaveAttribute('aria-current', 'page');
    expect(screen.queryByText('Design is the premium.')).not.toBeInTheDocument();
  });

  it('lists approved articles without draft labels, dates, downloads, or an extra hero', () => {
    show('/writing/');
    expect(screen.getAllByRole('article')).toHaveLength(4);
    expect(screen.queryByText('Local review. Drafts are excluded from production builds.')).not.toBeInTheDocument();
    for (const article of WRITING_ARTICLES) {
      const row = screen.getByRole('heading', { level: 3, name: article.title }).closest('article')!;
      expect(within(row).getByRole('link')).toHaveAttribute('href', `/writing/${article.slug}`);
      expect(within(row).getByText(article.summary)).toBeInTheDocument();
      expect(row).not.toHaveTextContent('Draft for review');
      expect(readingMinutes(article)).toBeLessThanOrEqual(3);
    }
    expect(screen.getAllByRole('heading', { level: 1 })).toHaveLength(1);
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /download|résumé|resume/i })).not.toBeInTheDocument();
  });

  it.each(WRITING_ARTICLES)('loads every paragraph of $title on its direct route', article => {
    show(`/writing/${article.slug}/`);
    expect(screen.getByRole('heading', { level: 2, name: article.title })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: 'Writing' })).toHaveAttribute('aria-current', 'page');
    for (const paragraph of article.opening) expect(screen.getByText(paragraph)).toBeInTheDocument();
    for (const section of article.sections) {
      expect(screen.getByRole('heading', { level: 3, name: section.heading })).toBeInTheDocument();
      for (const paragraph of section.body) expect(screen.getByText(paragraph)).toBeInTheDocument();
      if (section.example) {
        expect(screen.getByRole('heading', { level: 4, name: section.example.label })).toBeInTheDocument();
        const record = screen.getByRole('heading', { name: section.example.label }).parentElement!;
        expect(record.querySelector('dl')).toHaveAccessibleName(section.example.label);
        for (const field of section.example.fields) {
          expect(within(record).getByText(field.label, { selector: 'dt' })).toBeInTheDocument();
          expect(within(record).getByText(field.value, { selector: 'dd' })).toBeInTheDocument();
        }
      }
    }
    fireEvent.click(screen.getAllByRole('link', { name: 'Back to writing' })[1]);
    expect(screen.getByRole('heading', { level: 2, name: 'Writing' })).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveFocus();
  });

  it('navigates from a listed title and updates title, canonical and social metadata', () => {
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    const description = document.createElement('meta');
    description.name = 'description';
    const ogTitle = document.createElement('meta');
    ogTitle.setAttribute('property', 'og:title');
    document.head.append(canonical, description, ogTitle);
    try {
      show();
      expect(document.title).toBe('Writing | Alex Aidun');
      expect(description.content).toBe(WRITING_DESCRIPTION);
      const article = WRITING_ARTICLES[0];
      fireEvent.click(screen.getByRole('link', { name: article.title }));
      expect(document.title).toBe(`${article.title} | Alex Aidun`);
      expect(ogTitle.content).toBe(document.title);
      expect(canonical.href).toBe(siteUrl(`writing/${article.slug}`));
      expect(description.content).toBe(article.summary);
      expect(screen.getByRole('main')).toHaveFocus();
    } finally { canonical.remove(); description.remove(); ogTitle.remove(); }
  });

  it('handles an unknown article without inventing content', () => {
    show('/writing/not-an-article');
    expect(screen.getByRole('heading', { name: 'That page isn’t here.' })).toBeInTheDocument();
    expect(document.title).toBe('Page not found | Alex Aidun');
    fireEvent.click(screen.getByRole('link', { name: 'Writing' }));
    expect(screen.getAllByRole('article')).toHaveLength(4);
  });

  it('leads with cost and adoption and brings the product framing into the opening', () => {
    show();
    expect(screen.getAllByRole('heading', { level: 3 }).slice(0, 2).map(heading => heading.textContent)).toEqual(['Cost per verified outcome', 'Make good workflows reusable']);
    fireEvent.click(screen.getByRole('link', { name: 'Make good workflows reusable' }));
    expect(document.querySelector('.writing-opening')?.firstElementChild).toHaveTextContent('A reusable workflow is a small product.');
  });

  it('counts the example text in the reading time', () => {
    const article = { ...WRITING_ARTICLES[0], opening: ['Short opening.'], sections: [{ heading: 'Example', body: [], example: { label: 'Hypothetical example', fields: [{ label: 'Details', value: Array(420).fill('word').join(' ') }] } }] };
    expect(readingMinutes(article)).toBe(3);
  });

  it.each(['/writing', ...WRITING_ARTICLES.map(article => `/writing/${article.slug}`)])('has no serious or critical automated accessibility violations on %s', async route => {
    const { container } = show(route);
    const result = await axe.run(container);
    expect(result.violations.filter(violation => ['critical', 'serious'].includes(violation.impact ?? ''))).toEqual([]);
  });
});
