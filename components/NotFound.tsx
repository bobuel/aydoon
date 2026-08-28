import { Link } from 'react-router-dom';
import SiteHeader from './SiteHeader';

export default function NotFound() {
  return (
    <div className="site-shell">
      <SiteHeader />
      <main className="empty-page section-grid">
        <p className="eyebrow">404</p>
        <h1>That page is not in this portfolio.</h1>
        <p>The homepage and case studies are still available.</p>
        <Link className="button button-primary" to="/">Return home</Link>
      </main>
    </div>
  );
}

