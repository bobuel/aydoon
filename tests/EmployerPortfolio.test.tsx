import axe from 'axe-core';
import { render, screen, within } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import EmployerPortfolio from '../components/EmployerPortfolio';

describe('EmployerPortfolio', () => {
  it('presents the employer positioning, proof, and working calls to action', () => {
    render(<MemoryRouter><EmployerPortfolio /></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Enterprise AI product.*adoption.*leader/i);
    expect(screen.getByText('1,500')).toBeInTheDocument();
    expect(screen.getByText('3,200+')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /View résumé/i })).toHaveAttribute('href', '/alexander-aidun-resume.pdf');
    expect(screen.getAllByRole('link', { name: /LinkedIn/i })[0]).toHaveAttribute('href', 'https://www.linkedin.com/in/aaidun/');
  });

  it('renders private projects without a fake or empty interactive link', () => {
    render(<MemoryRouter><EmployerPortfolio /></MemoryRouter>);

    const card = screen.getByRole('heading', { name: 'Informa' }).closest('article');
    expect(card).not.toBeNull();
    expect(within(card as HTMLElement).queryByRole('link')).not.toBeInTheDocument();
    expect(within(card as HTMLElement).getByText(/Private working prototype/i)).toBeInTheDocument();
  });

  it('has no critical automated accessibility violations in the homepage content', async () => {
    const { container } = render(<MemoryRouter><EmployerPortfolio /></MemoryRouter>);
    const results = await axe.run(container);
    expect(results.violations.filter((violation) => violation.impact === 'critical')).toEqual([]);
  });
});

