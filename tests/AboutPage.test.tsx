import axe from 'axe-core';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutPage from '../components/AboutPage';

describe('AboutPage', () => {
  it('keeps Alex’s point of view concise and personal', () => {
    render(<MemoryRouter><AboutPage /></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/AI operations, product, and adoption/i);
    expect(screen.getByRole('heading', { name: /complex systems easier to use/i })).toBeInTheDocument();
    expect(screen.getByText(/design premium rises/i)).toBeInTheDocument();
    for (const label of ['About Alex', 'How I work', 'Say hello']) {
      expect(screen.queryByText(label, { exact: true })).not.toBeInTheDocument();
    }
    expect(screen.queryByRole('heading', { name: /The through line/i })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /Anthropic research/i })).not.toBeInTheDocument();
  });

  it('has no critical automated accessibility violations', async () => {
    const { container } = render(<MemoryRouter><AboutPage /></MemoryRouter>);
    const results = await axe.run(container);
    expect(results.violations.filter((violation) => violation.impact === 'critical')).toEqual([]);
  });
});
