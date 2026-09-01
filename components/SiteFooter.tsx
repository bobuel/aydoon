import { PROFILE } from '../content';

export default function SiteFooter() {
  return (
    <footer className="site-footer">
      <div className="section-grid footer-inner">
        <p>© {new Date().getFullYear()} Alex Aidun</p>
        <nav aria-label="Footer links">
          <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
        </nav>
      </div>
    </footer>
  );
}
