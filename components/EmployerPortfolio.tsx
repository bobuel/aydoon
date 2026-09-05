import { ArrowRight, Mail } from 'lucide-react';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { CASE_STUDIES, PROFILE } from '../content';
import SkipLink from './SkipLink';

const HOME_CASE_SUMMARIES: Record<string, string> = {
  'enterprise-ai-adoption-automattic': 'I manage operations for ChatGPT, Codex, and Claude, alongside internal products and the AI Guides program.',
  'ai-product-leadership-dremio': 'I turned customer needs into four AI initiatives, working across product, design, and engineering.',
  'bloom-assessment-workflow': 'I turned clear demand into a source-grounded assessment workflow that keeps teachers in control.',
};

const HOME_CASE_EYEBROWS: Record<string, string> = {
  'bloom-assessment-workflow': 'AI education workflow',
};

export default function EmployerPortfolio() {
  const { hash } = useLocation();

  useEffect(() => {
    // React mounts the destination after client-side navigation; keep old shared anchors working too.
    if (hash === '#work' || hash === '#case-studies') {
      document.getElementById('work')?.scrollIntoView();
    }
  }, [hash]);

  return (
    <div className="site-shell hybrid-home">
      <SkipLink />

      <div className="hybrid-layout">
        <header className="surface-header">
          <Link className="mobile-brand" to="/" aria-label="Alex Aidun home">Alex Aidun</Link>
          <div className="surface-label"><span>Portfolio</span><strong>Selected work</strong></div>
          <nav aria-label="Primary navigation">
            <a className="active" href="#work">Work</a>
            <Link to="/builds">Builds</Link>
            <Link to="/about">About</Link>
            <a href={`mailto:${PROFILE.email}`}>Contact</a>
          </nav>
        </header>
        <aside className="profile-rail" aria-labelledby="hero-heading">
          <Link className="rail-brand" to="/" aria-label="Alex Aidun home">
            <span className="rail-brand-mark" aria-hidden="true">A</span>
            <span>Alex Aidun</span>
          </Link>

          <div className="rail-story">
            <p className="rail-eyebrow">AI operations · product · adoption</p>
            <h1 id="hero-heading">Enterprise AI leader.</h1>
            <p className="rail-summary">I work across AI operations, product, and adoption—building the systems that make AI useful in real work.</p>

            <div className="rail-status" aria-label="Current role">
              <div className="rail-status-label"><span /> Currently</div>
              <strong>AI Adoption Manager</strong>
              <p>Automattic · roughly 1,500 employees</p>
            </div>

          </div>

          <div className="rail-footer">
            <nav aria-label="Profile links">
              <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
            </nav>
            <a className="rail-contact" href={`mailto:${PROFILE.email}`}>
              <Mail aria-hidden="true" size={17} /> Email Alex
            </a>
            <small>© {new Date().getFullYear()} Alex Aidun</small>
          </div>
        </aside>

        <main className="work-surface" id="main" tabIndex={-1}>
          <section className="surface-intro" id="work" aria-labelledby="case-heading">
            <div>
              <p className="eyebrow">Professional work</p>
              <h2 id="case-heading">Design is the premium.</h2>
            </div>
            <p>Three examples of making AI useful across operations, products, and everyday work.</p>
          </section>

          <section className="system-list" aria-label="Selected case studies">
            {CASE_STUDIES.map((study) => (
              <article className="system-card" key={study.slug}>
                <div className="system-copy">
                  <p className="eyebrow">{HOME_CASE_EYEBROWS[study.slug] ?? study.eyebrow}</p>
                  <h3>{study.title}</h3>
                  <p>{HOME_CASE_SUMMARIES[study.slug]}</p>
                </div>
                <div className="system-result">
                  <p><strong>{study.evidence[0].value}</strong> {study.evidence[0].label}</p>
                  <Link to={`/case-studies/${study.slug}`} aria-label={`Read case study: ${study.title}`}>
                    Read the case <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </section>

          <section className="surface-close" aria-labelledby="surface-close-heading">
            <div>
              <p className="eyebrow">What I build</p>
              <h2 id="surface-close-heading">Build Lab</h2>
              <p>I build to test ideas, understand the tools, and see where AI actually works.</p>
            </div>
            <Link className="surface-close-link" to="/builds">
              Browse the Build Lab <ArrowRight aria-hidden="true" size={17} />
            </Link>
          </section>
        </main>
      </div>
    </div>
  );
}
