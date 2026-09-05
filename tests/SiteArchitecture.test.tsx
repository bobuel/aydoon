import { fireEvent, render, screen } from '@testing-library/react';
import { Link, MemoryRouter, Route, Routes } from 'react-router-dom';
import { vi } from 'vitest';
import { RouteScrollReset } from '../App';
import BuildLabPage from '../components/BuildLabPage';
import SiteHeader from '../components/SiteHeader';

describe('simplified portfolio architecture', () => {
  it('opens a new route at the top and moves keyboard focus into its content', () => {
    const scroll = vi.spyOn(window, 'scrollTo').mockImplementation(() => undefined);
    render(
      <MemoryRouter>
        <RouteScrollReset />
        <Link to="/builds">Open builds</Link>
        <Routes>
          <Route path="/" element={<main id="main" tabIndex={-1}>Home</main>} />
          <Route path="/builds" element={<main id="main" tabIndex={-1}>Builds</main>} />
        </Routes>
      </MemoryRouter>,
    );
    fireEvent.click(screen.getByRole('link', { name: 'Open builds' }));
    expect(scroll).toHaveBeenLastCalledWith({ top: 0, left: 0, behavior: 'instant' });
    expect(screen.getByRole('main')).toHaveFocus();
    scroll.mockRestore();
  });

  it('keeps the complete project and games catalog in the Build Lab', () => {
    render(<MemoryRouter><BuildLabPage /></MemoryRouter>);

    expect(screen.getByRole('heading', { name: 'CertifyFast' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Informa' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: '25Hours' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Iron Hand' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Retrieval Guard' })).toBeInTheDocument();

    fireEvent.click(screen.getByRole('button', { name: 'Games' }));
    expect(screen.getByRole('heading', { name: '25Hours' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Iron Hand' })).toBeInTheDocument();
    expect(screen.getByRole('heading', { name: 'Kid Comic Storyteller' })).toBeInTheDocument();
    expect(screen.queryByRole('heading', { name: 'CertifyFast' })).not.toBeInTheDocument();
  });

  it('offers only the essential destinations in the mobile menu', () => {
    render(<MemoryRouter><SiteHeader /></MemoryRouter>);

    const menu = screen.getByRole('button', { name: 'Menu' });
    expect(menu).toHaveAttribute('aria-expanded', 'false');
    fireEvent.click(menu);

    expect(screen.getByRole('button', { name: 'Close' })).toHaveAttribute('aria-expanded', 'true');
    expect(screen.getByRole('link', { name: 'Work' })).toHaveAttribute('href', '/');
    expect(screen.getByRole('link', { name: 'Builds' })).toHaveAttribute('href', '/builds');
    expect(screen.getByRole('link', { name: 'About' })).toHaveAttribute('href', '/about');
    expect(screen.getByRole('link', { name: 'Contact' })).toHaveAttribute('href', 'mailto:bobuel@gmail.com');
    expect(screen.queryByRole('link', { name: 'Games' })).not.toBeInTheDocument();
    expect(screen.queryByRole('link', { name: /résumé/i })).not.toBeInTheDocument();
  });
});
