import { Link } from 'react-router-dom';

export default function SiteHeader() {
  return (
    <header className="site-header">
      <Link className="brand" to="/" aria-label="Alex Aidun home">
        <span className="brand-mark" aria-hidden="true">A</span>
        <span>Alex Aidun</span>
      </Link>
      <nav className="header-links" aria-label="Primary navigation">
        <Link to="/#case-studies">Case studies</Link>
        <Link to="/#builds">Selected builds</Link>
        <a className="header-cta" href="mailto:bobuel@gmail.com">Let’s talk</a>
      </nav>
    </header>
  );
}
