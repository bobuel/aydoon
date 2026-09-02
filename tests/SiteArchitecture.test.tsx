import { fireEvent, render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import BuildLabPage from '../components/BuildLabPage';
import SiteHeader from '../components/SiteHeader';

describe('simplified portfolio architecture', () => {
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
