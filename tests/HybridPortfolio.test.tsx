import axe from 'axe-core';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { vi } from 'vitest';
import App, { RouteScrollReset } from '../App';
import HybridPortfolio from '../components/HybridPortfolio';
import { CASE_STUDIES, PROFILE, PROJECTS } from '../content';
import { siteUrl } from '../sitePaths';

function show(path = '/') {
  return render(<MemoryRouter initialEntries={[path]}><RouteScrollReset /><HybridPortfolio /></MemoryRouter>);
}

beforeEach(() => { vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined); });
afterEach(() => { vi.restoreAllMocks(); });

describe('published Hybrid design', () => {
  it('is the actual production app, not a local design selector', () => {
    window.history.replaceState({}, '', import.meta.env.BASE_URL);
    render(<App />);
    expect(screen.getByRole('heading', { level: 1, name: 'Alex Aidun' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Design is the premium.' })).not.toBeInTheDocument();
    const closingLine = screen.getByText('Design is the premium.', { selector: 'strong' });
    expect(closingLine.parentElement?.tagName).toBe('P');
    expect(closingLine.parentElement?.lastChild).toBe(closingLine);
    expect(closingLine.parentElement).toHaveTextContent('AI makes coding cheaper. Build for the model of tomorrow while delivering something useful today. The value is in deciding what gets built, how it’s evaluated and monitored, how people experience it, and what it achieves. Today’s model limitations shouldn’t become permanent architecture. Design is the premium.');
    expect(closingLine.parentElement?.textContent).not.toContain('?');
    expect(screen.queryByRole('navigation', { name: 'Choose a design option' })).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation', { name: 'Choose a copy option' })).not.toBeInTheDocument();
    expect(screen.queryByText('Local previews')).not.toBeInTheDocument();
    expect(screen.queryByText('Enterprise AI leader')).not.toBeInTheDocument();
  });

  it('publishes the approved systems introduction and carefully scoped operations claims', () => {
    show();
    const identity = screen.getByRole('complementary');
    expect(within(identity).getByText('My work connects AI tools, the people using them, and the systems around them.')).toBeInTheDocument();
    expect(within(identity).getByText('My background spans education, documentation, and AI product leadership. I build tools and games, too.')).toBeInTheDocument();
    expect(within(identity).getByText('I bring systems thinking to how the pieces fit, and design thinking to how people use them. AI makes building easier. Deciding what’s useful, and how it should work, is still the hard part.')).toBeInTheDocument();
    expect(within(identity).getByText('OpenAI Champions program participant')).toBeInTheDocument();
    expect(screen.getByText('At Automattic, I connect AI operations, internal products, and employee adoption, while helping manage costs. The work is about making those pieces function together.')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: 'Read case study: AI operations at Automattic' }));
    expect(screen.getByText('Helping with cost management across those AI tools.')).toBeInTheDocument();
    expect(screen.getByText('Functional operations for the company’s ChatGPT, Codex, and Claude environments.')).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: 'About' }));
    expect(screen.getByText('I also participate in the OpenAI Champions program.')).toBeInTheDocument();
    expect(screen.getByText('I work broadly to understand where AI can help, then go deep on an immediate opportunity. The first useful result should improve the work and help employees see what else is possible.')).toBeInTheDocument();
  });

  it('keeps the identity panel while switching Work, Builds and Games', () => {
    show();
    const identity = screen.getByRole('complementary');
    const navigation = screen.getByRole('navigation', { name: 'Primary navigation' });
    expect(within(navigation).getAllByRole('link').map(link => link.textContent)).toEqual(['Work', 'Builds', 'Games']);
    fireEvent.click(within(navigation).getByRole('link', { name: 'Builds' }));
    expect(screen.queryByText('Design is the premium.')).not.toBeInTheDocument();
    expect(screen.getByRole('complementary')).toBe(identity);
    expect(screen.getByRole('main')).toHaveFocus();
    expect(within(navigation).getByRole('link', { name: 'Builds' })).toHaveAttribute('aria-current', 'page');
    expect(screen.getByRole('heading', { name: 'CertifyFast' })).toBeInTheDocument();
    fireEvent.click(within(navigation).getByRole('link', { name: 'Games' }));
    expect(screen.getByRole('heading', { name: 'Brassline' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'CertifyFast' })).not.toBeInTheDocument();
    expect(screen.getByRole('complementary')).toBe(identity);
  });

  it('preserves profile links without reintroducing a résumé or chat CTA', () => {
    show();
    expect(screen.getByRole('link', { name: 'GitHub' })).toHaveAttribute('href', PROFILE.github);
    expect(screen.getByRole('link', { name: 'LinkedIn' })).toHaveAttribute('href', PROFILE.linkedin);
    expect(screen.getByRole('link', { name: 'Email Alex' })).toHaveAttribute('href', `mailto:${PROFILE.email}`);
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.queryByRole('link', { name: /resume|résumé/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('button')).not.toBeInTheDocument();
  });

  it('keeps homepage proof inline and Dremio learning figures inside its case', () => {
    show();
    expect(screen.getAllByRole('article')).toHaveLength(3);
    expect(screen.getByText('1,500')).toBeInTheDocument();
    expect(screen.getByText('4')).toBeInTheDocument();
    expect(screen.getByText('1,000+')).toBeInTheDocument();
    expect(screen.queryByText('3,200+')).not.toBeInTheDocument();
    expect(screen.queryByText('+78')).not.toBeInTheDocument();
    for (const study of CASE_STUDIES) {
      expect(screen.getByRole('link', { name: `Read case study: ${study.title}` })).toHaveAttribute('href', `/case-studies/${study.slug}`);
    }
  });

  it('includes the complete catalog, real links and no duplicate open-source labels', () => {
    show('/builds');
    expect(screen.getAllByRole('article')).toHaveLength(PROJECTS.length);
    expect(screen.getAllByRole('heading', { level: 2 }).slice(0, 4).map(heading => heading.textContent)).toEqual(['CertifyFast', 'Bloom Quiz Builder Skill', 'Brassline', 'Retrieval Guard']);
    for (const project of PROJECTS) {
      const row = screen.getByRole('heading', { name: project.title }).closest('article')!;
      for (const link of project.links) {
        expect(within(row).getByRole('link', { name: `${link.label}: ${project.title}` })).toHaveAttribute('href', link.href);
      }
      if (!project.links.length) {
        expect(within(row).queryByRole('link')).not.toBeInTheDocument();
        expect(within(row).getByText('Details available in conversation')).toBeInTheDocument();
      }
      if (project.category === 'Open Source') expect(within(row).getAllByText(/^open source$/i)).toHaveLength(1);
    }
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('loads the selected Games view directly', () => {
    show('/games/');
    expect(screen.getAllByRole('heading', { level: 2 }).map(heading => heading.textContent)).toEqual(['Brassline', '25Hours', 'Iron Hand']);
    expect(screen.getByRole('link', { name: 'Play game: Brassline' })).toHaveAttribute('href', 'https://bobuel.github.io/brassline/');
  });

  it.each(CASE_STUDIES)('preserves every section and evidence item for $title', study => {
    show(`/case-studies/${study.slug}/`);
    expect(screen.getByRole('heading', { level: 2, name: study.title })).toBeInTheDocument();
    expect(screen.getByText(study.summary)).toBeInTheDocument();
    for (const section of study.sections) {
      expect(screen.getByRole('heading', { name: section.heading })).toBeInTheDocument();
      for (const paragraph of section.body) expect(screen.getByText(paragraph)).toBeInTheDocument();
      for (const bullet of section.bullets ?? []) expect(screen.getByText(bullet)).toBeInTheDocument();
    }
    for (const metric of study.evidence) expect(screen.getByText(metric.label)).toBeInTheDocument();
    fireEvent.click(screen.getAllByRole('link', { name: 'Back to work' })[0]);
    expect(screen.getByText('Design is the premium.', { selector: 'strong' })).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveFocus();
  });

  it.each(['/#work', '/#case-studies'])('preserves the shared %s anchor', path => {
    const scroll = vi.spyOn(HTMLElement.prototype, 'scrollIntoView');
    show(path);
    expect(scroll.mock.instances.at(-1)).toBe(document.getElementById('work'));
  });

  it('keeps the legacy Work route and the About narrative accessible', () => {
    show('/work');
    expect(screen.getByRole('heading', { name: 'AI operations at Automattic' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: 'About' }));
    expect(screen.getByText(/the design premium rises/)).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'I make complex systems easier to use.' })).toBeInTheDocument();
  });

  it('updates metadata on direct loading and subsequent navigation', () => {
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    const description = document.createElement('meta');
    description.name = 'description';
    const ogUrl = document.createElement('meta');
    ogUrl.setAttribute('property', 'og:url');
    document.head.append(canonical, description, ogUrl);
    try {
      show('/case-studies/ai-product-leadership-dremio/');
      expect(document.title).toBe('AI products at Dremio | Alex Aidun');
      expect(canonical.href).toBe(siteUrl('case-studies/ai-product-leadership-dremio'));
      expect(description.content).toBe(CASE_STUDIES[1].summary);
      expect(ogUrl.content).toBe(canonical.href);
      fireEvent.click(screen.getByRole('link', { name: 'Games' }));
      expect(document.title).toBe('Games and creative work | Alex Aidun');
      expect(canonical.href).toBe(siteUrl('games'));
      fireEvent.click(screen.getByRole('link', { name: 'Work' }));
      expect(document.title).toBe('Alex Aidun | Enterprise AI Product, Operations & Adoption Leader');
      expect(canonical.href).toBe(siteUrl());
    } finally { canonical.remove(); description.remove(); ogUrl.remove(); }
  });

  it.each(['/missing', '/case-studies/missing'])('has a working fallback for %s', path => {
    show(path);
    expect(screen.getByRole('heading', { name: 'That page isn’t here.' })).toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: 'Back to work' }));
    expect(screen.getByText('Design is the premium.', { selector: 'strong' })).toBeInTheDocument();
  });

  it('supports the skip link', () => {
    show('/games');
    fireEvent.click(screen.getByRole('link', { name: 'Skip to main content' }));
    expect(screen.getByRole('main')).toHaveFocus();
  });

  it.each(['/', '/builds', '/games', '/about', '/case-studies/ai-product-leadership-dremio'])('has no serious or critical automated accessibility violations on %s', async path => {
    const { container } = show(path);
    const result = await axe.run(container);
    expect(result.violations.filter(violation => ['critical', 'serious'].includes(violation.impact ?? ''))).toEqual([]);
  });
});
