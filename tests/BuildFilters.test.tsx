import axe from 'axe-core';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter, useLocation, useNavigate } from 'react-router-dom';
import HybridPortfolio from '../components/HybridPortfolio';
import { RouteScrollReset } from '../App';
import { PROJECTS } from '../content';

function HistoryControls() {
  const navigate = useNavigate();
  const location = useLocation();
  return <><output data-testid="location">{location.pathname}{location.search}</output><button onClick={() => navigate(-1)}>Back</button><button onClick={() => navigate(1)}>Forward</button></>;
}
function show(path: string) {
  return render(<MemoryRouter initialEntries={[path]}><RouteScrollReset /><HybridPortfolio /><HistoryControls /></MemoryRouter>);
}
const filterNav = () => screen.getByRole('navigation', { name: 'Build filters' });

it.each([
  ['/builds', 'All'], ['/builds?filter=tools', 'Tools'], ['/builds?filter=games', 'Games'],
  ['/games/', 'Games'], ['/builds?filter=unknown', 'All'],
])('loads %s with the correct filter and complete matching projects', (path, selected) => {
  show(path);
  expect(within(filterNav()).getByRole('link', { name: selected })).toHaveAttribute('aria-current', 'page');
  const primary = screen.getByRole('navigation', { name: 'Primary navigation' });
  expect(within(primary).queryByRole('link', { name: 'Games' })).not.toBeInTheDocument();
  expect(within(primary).getByRole('link', { name: 'Builds' })).toHaveAttribute('aria-current', 'page');
  const expected = PROJECTS.filter(project => selected === 'All' || (selected === 'Games' ? project.category === 'Games' : project.category !== 'Games'));
  expect(screen.getAllByRole('article')).toHaveLength(expected.length);
  for (const project of expected) expect(screen.getByRole('heading', { name: project.title })).toBeInTheDocument();
  if (path === '/games/') expect(screen.getByTestId('location')).toHaveTextContent('/builds?filter=games');
});

it('preserves filter focus and supports back, forward, and clearing to All', () => {
  show('/builds');
  const tools = within(filterNav()).getByRole('link', { name: 'Tools' });
  tools.focus();
  fireEvent.click(tools);
  expect(tools).toHaveFocus();
  expect(screen.queryByRole('heading', { name: 'Brassline' })).not.toBeInTheDocument();
  fireEvent.click(within(filterNav()).getByRole('link', { name: 'Games' }));
  expect(screen.queryByRole('heading', { name: 'CertifyFast' })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole('button', { name: 'Back' }));
  expect(tools).toHaveAttribute('aria-current', 'page');
  fireEvent.click(screen.getByRole('button', { name: 'Forward' }));
  expect(within(filterNav()).getByRole('link', { name: 'Games' })).toHaveAttribute('aria-current', 'page');
  fireEvent.click(within(filterNav()).getByRole('link', { name: 'All' }));
  expect(screen.getByTestId('location').textContent).toBe('/builds');
  expect(screen.getAllByRole('article')).toHaveLength(PROJECTS.length);
});

it.each(['/builds?filter=tools', '/builds?filter=games'])('has no serious accessibility violations on %s', async path => {
  const { container } = render(<MemoryRouter initialEntries={[path]}><HybridPortfolio /></MemoryRouter>);
  const results = await axe.run(container);
  expect(results.violations.filter(item => ['serious', 'critical'].includes(item.impact ?? ''))).toEqual([]);
});
