import { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link, NavLink } from 'react-router-dom';

export default function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const closeMenu = () => setMenuOpen(false);

  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Alex Aidun home">
        <span className="brand-mark" aria-hidden="true">A</span>
        <span>Alex Aidun</span>
      </Link>
      <button
        className="menu-toggle"
        type="button"
        aria-expanded={menuOpen}
        aria-controls="primary-menu"
        onClick={() => setMenuOpen((open) => !open)}
      >
        {menuOpen ? <X aria-hidden="true" size={19} /> : <Menu aria-hidden="true" size={19} />}
        <span>{menuOpen ? 'Close' : 'Menu'}</span>
      </button>
      <nav id="primary-menu" className={menuOpen ? 'header-links open' : 'header-links'} aria-label="Primary navigation">
        <NavLink to="/work" onClick={closeMenu}>Work</NavLink>
        <NavLink to="/builds" onClick={closeMenu}>Build Lab</NavLink>
        <NavLink to="/games" onClick={closeMenu}>Games</NavLink>
        <NavLink to="/about" onClick={closeMenu}>About</NavLink>
        <a className="header-cta" href="mailto:bobuel@gmail.com" onClick={closeMenu}>Let’s talk</a>
      </nav>
    </header>
  );
}
