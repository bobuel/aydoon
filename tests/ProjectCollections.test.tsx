import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom';
import HybridPortfolio from '../components/HybridPortfolio';
import { RouteScrollReset } from '../App';
import { PROJECTS } from '../content';
import { vi } from 'vitest';

beforeEach(() => { vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined); });
afterEach(() => { vi.restoreAllMocks(); });

function HistoryControls() {
  const navigate = useNavigate();
  const location = useLocation();
  return <><output data-testid="location">{location.pathname}{location.search}</output><button onClick={() => navigate(-1)}>Back</button><button onClick={() => navigate(1)}>Forward</button></>;
}
function show(path: string) {
  return render(<MemoryRouter initialEntries={[path]}><RouteScrollReset /><HybridPortfolio /><HistoryControls /></MemoryRouter>);
}

it.each([
  ['/builds', '/tools'], ['/builds/', '/tools'], ['/builds?filter=tools', '/tools'],
  ['/builds?filter=games', '/games'], ['/builds?filter=all', '/tools'], ['/builds?filter=unknown', '/tools'],
])('redirects legacy %s to %s', (path, destination) => {
  show(path);
  expect(screen.getByTestId('location').textContent).toBe(destination);
  const primary = screen.getByRole('navigation', { name: 'Primary navigation' });
  expect(within(primary).getByRole('link', { name: destination === '/games' ? 'Games' : 'Tools' })).toHaveAttribute('aria-current', 'page');
});

it('puts every project in exactly one collection and preserves its links', () => {
  const titles: string[] = [];
  for (const path of ['/plugins', '/tools', '/games']) {
    const page = show(path);
    for (const row of screen.getAllByRole('article')) {
      const title = within(row).getByRole('heading', { level: 2 }).textContent!;
      titles.push(title);
      const project = PROJECTS.find(item => item.title === title)!;
      for (const link of project.links) expect(within(row).getByRole('link', { name: `${link.label}: ${title}` })).toHaveAttribute('href', link.href);
      if (!project.links.length) expect(within(row).getByText('Details available in conversation')).toBeInTheDocument();
      if (project.category === 'Open Source' && project.status === 'Open source') expect(within(row).getAllByText(/^open source$/i)).toHaveLength(1);
    }
    page.unmount();
  }
  expect(titles.sort()).toEqual(PROJECTS.map(project => project.title).sort());
  expect(new Set(titles).size).toBe(PROJECTS.length);
});

it('supports category navigation, keyboard focus, and browser history', () => {
  show('/plugins');
  const primary = screen.getByRole('navigation', { name: 'Primary navigation' });
  fireEvent.click(within(primary).getByRole('link', { name: 'Tools' }));
  expect(screen.getByRole('main')).toHaveFocus();
  fireEvent.click(within(primary).getByRole('link', { name: 'Games' }));
  fireEvent.click(screen.getByRole('button', { name: 'Back' }));
  expect(screen.getByTestId('location').textContent).toBe('/tools');
  fireEvent.click(screen.getByRole('button', { name: 'Forward' }));
  expect(screen.getByTestId('location').textContent).toBe('/games');
  expect(screen.queryByRole('heading', { name: 'CertifyFast' })).not.toBeInTheDocument();
});

it('closes the mobile menu after selection and supports Escape', () => {
  show('/plugins');
  const toggle = document.querySelector<HTMLButtonElement>('.navigation-toggle')!;
  const primary = screen.getByRole('navigation', { name: 'Primary navigation' });
  fireEvent.click(toggle);
  expect(toggle).toHaveAttribute('aria-expanded', 'true');
  fireEvent.keyDown(primary, { key: 'Escape' });
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveFocus();
  fireEvent.click(toggle);
  fireEvent.click(within(primary).getByRole('link', { name: 'Tools' }));
  expect(toggle).toHaveAttribute('aria-expanded', 'false');
  expect(toggle).toHaveTextContent('Tools');
  expect(screen.getByRole('main')).toHaveFocus();
});
