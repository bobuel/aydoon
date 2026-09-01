import axe from 'axe-core';
import { fireEvent, render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BuildLabPage from '../components/BuildLabPage';
import EmployerPortfolio from '../components/EmployerPortfolio';

describe('EmployerPortfolio', () => {
  it('presents the employer positioning, proof, and working calls to action', () => {
    render(<MemoryRouter><EmployerPortfolio /></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Enterprise AI product.*adoption.*leader/i);
    expect(screen.getByText(/connect AI operations, product workflows, and adoption/i)).toBeInTheDocument();
    expect(screen.getByText('1,500')).toBeInTheDocument();
    expect(screen.getByText('3,200+')).toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /résumé/i })).not.toBeInTheDocument();
    expect(screen.getAllByRole('link', { name: /LinkedIn/i })[0]).toHaveAttribute('href', 'https://www.linkedin.com/in/aaidun/');
    expect(screen.queryByRole('button', { name: /Ask/i })).not.toBeInTheDocument();
    expect(screen.getByRole('link', { name: /professional impact/i })).toHaveAttribute('href', '/work');
    expect(screen.getAllByRole('link', { name: /Build Lab/i })[0]).toHaveAttribute('href', '/builds');
    expect(screen.getAllByRole('link', { name: /games/i })[0]).toHaveAttribute('href', '/games');
  });

  it('moves keyboard focus to the main content from the skip link', () => {
    render(<MemoryRouter><EmployerPortfolio /></MemoryRouter>);

    fireEvent.click(screen.getByRole('link', { name: /Skip to main content/i }));
    expect(document.querySelector('main')).toHaveFocus();
  });

  it('renders private projects without a fake or empty interactive link', () => {
    render(<MemoryRouter><BuildLabPage /></MemoryRouter>);

    const card = screen.getByRole('heading', { name: 'Informa' }).closest('article');
    expect(card).not.toBeNull();
    expect(within(card as HTMLElement).queryByRole('link')).not.toBeInTheDocument();
    expect(within(card as HTMLElement).getByText(/Private working prototype/i)).toBeInTheDocument();
  });

  it('features only public, reviewable projects on the homepage', () => {
    render(<MemoryRouter><EmployerPortfolio /></MemoryRouter>);

    expect(screen.getByRole('heading', { name: 'Retrieval Guard' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'Informa' })).not.toBeInTheDocument();
  });

  it('has no critical automated accessibility violations in the homepage content', async () => {
    const { container } = render(<MemoryRouter><EmployerPortfolio /></MemoryRouter>);
    const results = await axe.run(container);
    expect(results.violations.filter((violation) => violation.impact === 'critical')).toEqual([]);
  });
});
