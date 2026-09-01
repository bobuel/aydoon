import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BuildLabPage from '../components/BuildLabPage';
import GamesPage from '../components/GamesPage';
import SiteHeader from '../components/SiteHeader';
import WorkPage from '../components/WorkPage';

describe('unified portfolio architecture', () => {
  it('keeps the complete project catalog in the Build Lab', () => {
    render(<MemoryRouter><BuildLabPage /></MemoryRouter>);

    expect(screen.getByRole('heading', { name: 'CertifyFast' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Informa' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '25Hours' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Iron Hand' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Retrieval Guard' })).toBeInTheDocument();
  });

  it('exposes every primary destination through the mobile menu control', () => {
    render(<MemoryRouter><SiteHeader /></MemoryRouter>);

    const menu = screen.getByRole('button', { name: 'Menu' });
    expect(menu).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(menu);
    expect(screen.getByRole('button', { name: 'Close' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/work');
    expect(screen.getByRole('link', { name: 'Build Lab' })).toHaveAttribute('href', '/builds');
    expect(screen.getByRole('link', { name: 'Games' })).toHaveAttribute('href', '/games');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.queryByRole('link', { name: /résumé/i })).not.toBeInTheDocument();
  });

  it('gives games and creative work a first-class collection', () => {
    render(<MemoryRouter><GamesPage /></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/Systems, stories/i);
    expect(screen.getByRole('heading', { name: '25Hours' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Iron Hand' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Kid Comic Storyteller' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'CertifyFast' })).not.toBeInTheDocument();
  });

  it('keeps professional case studies and experience together', () => {
    render(<MemoryRouter><WorkPage /></MemoryRouter>);

    expect(screen.getByRole('heading', { level: 1 })).toHaveTextContent(/systems that make enterprise AI usable/i);
    expect(screen.getByRole('heading', { name: /Scaling practical AI/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: /AI portfolio at Dremio/i })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Automattic' })).toBeInTheDocument();
  });
});
