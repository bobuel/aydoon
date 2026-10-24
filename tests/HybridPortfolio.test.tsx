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
    expect(closingLine.parentElement).toHaveTextContent('I start with a real task, build something others can reuse, and change the tools when they get in the way. Design is the premium.');
    expect(closingLine.parentElement?.textContent).not.toContain('?');
    expect(screen.queryByRole('navigation', { name: 'Choose a design option' })).not.toBeInTheDocument();
    expect(screen.queryByRole('navigation', { name: 'Choose a copy option' })).not.toBeInTheDocument();
    expect(screen.queryByText('Local previews')).not.toBeInTheDocument();
    expect(screen.queryByText('Enterprise AI leader')).not.toBeInTheDocument();
  });

  it('shows the AI Lab role and distinguishes participant outcomes from Alex’s work', () => {
    show();
    const identity = screen.getByRole('complementary');
    expect(within(identity).getByText('AI Lab · internal tools and adoption')).toBeInTheDocument();
    expect(within(identity).getByText('I design and drive adoption of internal AI tools.')).toBeInTheDocument();
    expect(identity.querySelectorAll('.identity-story > p')).toHaveLength(2);
    expect(within(identity).getByText('Design is the premium.')).toBeInTheDocument();
    expect(within(identity).getByText('OpenAI Champions program participant')).toBeInTheDocument();
    expect(screen.queryByText('More on outcomes and impact in the case study')).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: 'Read case study: AI Lab and enablement at Automattic' }));
    expect(screen.getByText(/Their draft still needed review/)).toBeInTheDocument();
    expect(screen.getByText(/another facilitator used/)).toBeInTheDocument();
    expect(screen.getByText(/Those are shared results, including work that started before I joined/)).toBeInTheDocument();
    expect(screen.getByText(/what new tools can do/)).toBeInTheDocument();
    expect(screen.getByText(/March 2026–present/)).toBeInTheDocument();
    expect(screen.getByText(/3×ed themselves 10× their teams/)).toBeInTheDocument();
    expect(document.body.textContent).not.toMatch(/â€|Ã—|Â·/);
    expect(screen.queryByText(/daily social reporting/i)).not.toBeInTheDocument();
    expect(screen.queryByText(/\bIris\b/i)).not.toBeInTheDocument();
    fireEvent.click(screen.getByRole('link', { name: 'About' }));
    expect(screen.getByText('I also participate in the OpenAI Champions program.')).toBeInTheDocument();
    expect(screen.getByText(/Before AI became part of my title/)).toBeInTheDocument();
    expect(screen.getByText(/Dremio University team reached 3,200\+ users/)).toBeInTheDocument();
  });

  it('keeps the identity panel while switching Work, Tools and Games', () => {
    show();
    const identity = screen.getByRole('complementary');
    const navigation = screen.getByRole('navigation', { name: 'Primary navigation' });
    expect(within(navigation).getAllByRole('link').map(link => link.textContent)).toEqual(['Work', 'Plugins / Skills', 'Tools', 'Games', 'Writing', 'About']);
    fireEvent.click(within(navigation).getByRole('link', { name: 'Tools' }));
    expect(screen.queryByText('Design is the premium.')).not.toBeInTheDocument();
    expect(screen.getByRole('complementary')).toBe(identity);
    expect(screen.getByRole('main')).toHaveFocus();
    expect(within(navigation).getByRole('link', { name: 'Tools' })).toHaveAttribute('aria-current', 'page');
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
    expect(screen.getByRole('link', { name: 'Email' })).toHaveAttribute('href', `mailto:${PROFILE.email}`);
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.queryByRole('link', { name: /resume|résumé/i })).not.toBeInTheDocument();
    const contacts = screen.getByRole('navigation', { name: 'Contact and profiles' });
    expect(contacts.closest('.identity-intro')).not.toBeNull();
    expect(contacts.compareDocumentPosition(document.querySelector('.identity-story')!) & Node.DOCUMENT_POSITION_FOLLOWING).toBeTruthy();
    expect(screen.queryByRole('navigation', { name: 'Profile links' })).not.toBeInTheDocument();
    expect(document.querySelector('.navigation-toggle')).toHaveAttribute('aria-expanded', 'false');
  });

  it('keeps homepage proof inline and labels Dremio learning separately from AI products', () => {
    show();
    expect(screen.getAllByRole('article')).toHaveLength(2);
    expect(screen.queryByText('Featured game')).not.toBeInTheDocument();
    const explore = screen.getByRole('navigation', { name: 'Explore projects' });
    expect(within(explore).getByRole('link', { name: /Plugins \/ Skills/ })).toHaveAttribute('href', '/plugins');
    expect(within(explore).getByText(/Bloom Quiz Builder, Certification Workshop, and Eventer/)).toBeInTheDocument();
    expect(screen.queryByText('More on outcomes and impact in the case study')).not.toBeInTheDocument();
    const dremio = screen.getByRole('link', { name: 'AI products at Dremio' }).closest('article')!;
    expect(within(dremio).getByText('4')).toBeInTheDocument();
    expect(within(dremio).getByText(/Dremio University reached 3,200\+ users in six months/)).toBeInTheDocument();
    expect(screen.queryByText('+78')).not.toBeInTheDocument();
    for (const study of CASE_STUDIES.slice(0, 2)) {
      expect(screen.getByRole('link', { name: `Read case study: ${study.title}` })).toHaveAttribute('href', `/case-studies/${study.slug}`);
    }
  });

  it('shows tools with their availability, without duplicating games or plugins', () => {
    show('/tools');
    expect(screen.getAllByRole('article')).toHaveLength(7);
    expect(screen.getAllByRole('heading', { level: 2 }).slice(0, 5).map(heading => heading.textContent)).toEqual(['Model advisor', 'Retrieval Guard', 'CertifyFast', 'Informa', 'KidGrow']);
    expect(screen.queryByText('Featured game')).not.toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'KidGrow' }).closest('article')).toHaveTextContent('Sign-in required');
    expect(screen.getByRole('link', { name: 'Open sign-in: KidGrow' })).toHaveAttribute('href', 'https://kidgrow.base44.app');
    expect(screen.getByRole('heading', { name: 'CertifyFast' }).closest('article')).toHaveTextContent('Prototype');
    expect(screen.getByRole('heading', { name: 'ManagerAI (Grdn)' })).toBeInTheDocument();
    expect(screen.getByText(/Evaluation is ongoing/)).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Bloom Quiz Builder Skill' })).not.toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Brassline' })).not.toBeInTheDocument();
    expect(screen.queryByRole('img')).not.toBeInTheDocument();
  });

  it('loads the selected Games view directly', () => {
    show('/games/');
    expect(screen.getAllByRole('heading', { level: 2 }).map(heading => heading.textContent)).toEqual(['Last Ferry — Porto Sol Operation', 'Blackout NYC', 'Iron Hand: Sector 13', 'Brassline', 'Manymade', '25Hours']);
    expect(screen.getByRole('link', { name: 'Play on itch.io: Last Ferry — Porto Sol Operation' })).toHaveAttribute('href', 'https://bobuel.itch.io/last-ferry');
    expect(screen.getByRole('link', { name: 'Download on itch.io: Blackout NYC' })).toHaveAttribute('href', 'https://bobuel.itch.io/blackout-nyc');
    expect(screen.getByRole('link', { name: 'Play game: Brassline' })).toHaveAttribute('href', 'https://bobuel.github.io/brassline/');
    expect(screen.getByRole('link', { name: 'Play game: Iron Hand: Sector 13' })).toHaveAttribute('href', 'https://bobuel.github.io/ironhand-rpg/');
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
    const plugin = ['bloom-assessment-workflow', 'certification-workshop', 'eventer-planning-workflow'].includes(study.slug);
    fireEvent.click(screen.getAllByRole('link', { name: plugin ? 'Back to plugins / skills' : 'Back to work' })[0]);
    if (plugin) expect(screen.getByRole('heading', { name: 'Bloom Quiz Builder Skill' })).toBeInTheDocument();
    else expect(screen.getByText('Design is the premium.', { selector: 'strong' })).toBeInTheDocument();
    expect(screen.getByRole('main')).toHaveFocus();
  });

  it.each(['/#work', '/#case-studies'])('preserves the shared %s anchor', path => {
    const scroll = vi.spyOn(HTMLElement.prototype, 'scrollIntoView');
    show(path);
    expect(scroll.mock.instances.at(-1)).toBe(document.getElementById('work'));
  });

  it('keeps the legacy Work route and the About narrative accessible', () => {
    show('/work');
    expect(screen.getByRole('heading', { name: 'AI Lab and enablement at Automattic' })).toBeInTheDocument();
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
      fireEvent.click(screen.getByRole('link', { name: 'Tools' }));
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

  it.each(['/', '/plugins', '/tools', '/games', '/about', '/case-studies/ai-product-leadership-dremio'])('has no serious or critical automated accessibility violations on %s', async path => {
    const { container } = show(path);
    const result = await axe.run(container);
    expect(result.violations.filter(violation => ['critical', 'serious'].includes(violation.impact ?? ''))).toEqual([]);
  });

  it('lets visitors discover Bloom, inspect its evidence, and return to the plugin collection', () => {
    show('/');
    const identity = screen.getByRole('complementary');
    const navigation = screen.getByRole('navigation', { name: 'Primary navigation' });
    fireEvent.click(within(navigation).getByRole('link', { name: 'Plugins / Skills' }));
    expect(screen.getByRole('complementary')).toBe(identity);
    expect(screen.getByRole('main')).toHaveFocus();
    expect(document.title).toBe('Plugins / Skills | Alex Aidun');
    expect(screen.getAllByRole('heading', { level: 2 }).map(h => h.textContent)).toEqual(['Bloom Quiz Builder Skill', 'Certification Workshop', 'Eventer']);
    expect(screen.queryByRole('navigation', { name: 'Build filters' })).not.toBeInTheDocument();
    const bloom = screen.getByRole('heading', { name: 'Bloom Quiz Builder Skill' }).closest('article')!;
    expect(within(bloom).getByRole('link', { name: 'View source: Bloom Quiz Builder Skill' })).toHaveAttribute('href', 'https://github.com/bobuel/bloom-taxonomy-quiz-builder-skill');
    fireEvent.click(within(bloom).getByRole('link', { name: 'Read case study: Bloom Quiz Builder Skill' }));
    expect(within(navigation).getByRole('link', { name: 'Plugins / Skills' })).toHaveAttribute('aria-current', 'page');
    fireEvent.click(screen.getAllByRole('link', { name: 'Back to plugins / skills' })[0]);
    expect(screen.getAllByRole('article')).toHaveLength(3);
  });

  it('opens the plugins collection directly with its canonical metadata', () => {
    const canonical = document.createElement('link');
    canonical.rel = 'canonical';
    document.head.append(canonical);
    try {
      show('/plugins/');
      expect(document.title).toBe('Plugins / Skills | Alex Aidun');
      expect(canonical.href).toBe(siteUrl('plugins'));
      expect(screen.getAllByRole('article')).toHaveLength(3);
    } finally { canonical.remove(); }
  });
});
