import axe from 'axe-core';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import AboutPage from '../components/AboutPage';

describe('AboutPage', () => {
  it('explains the human judgment and agent execution thesis with attributed evidence', () => {
    render(<MemoryRouter><AboutPage /></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Systems thinker/i);
    expect(screen.getByRole('heading', { name: /design premium is rising/i })).toBeInTheDocument();
    expect(screen.getByText('70% / 80%')).toBeInTheDocument();
    expect(screen.getByText('43.5%')).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Anthropic research/i })).toHaveAttribute(
      'href',
      'https://www.anthropic.com/research/claude-code-expertise',
    );
    expect(screen.getByRole('link', { name: /OpenAI research/i })).toHaveAttribute(
      'href',
      'https://openai.com/index/how-ai-is-expanding-what-people-do-at-work/',
    );
  });

  it('connects the research to Alex’s operating point of view', () => {
    render(<MemoryRouter><AboutPage /></MemoryRouter>);

    expect(screen.getByText(/distinguish capability from theater/i)).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /Systems thinkers in the AI era/i })).toBeInTheDocument();
    expect(screen.getByRole('link', { name: /AI product sense through hands-on use/i })).toBeInTheDocument();
  });

  it('has no critical automated accessibility violations', async () => {
    const { container } = render(<MemoryRouter><AboutPage /></MemoryRouter>);
    const results = await axe.run(container);
    expect(results.violations.filter((violation) => violation.impact === 'critical')).toEqual([]);
  });
});
