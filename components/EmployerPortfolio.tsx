import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES, PROFILE } from '../content';
import SkipLink from './SkipLink';

const SYSTEM_FLOWS: Record<string, string[]> = {
  'enterprise-ai-adoption-automattic': ['Access', 'Guidance', 'Peer practice', 'Feedback'],
  'ai-product-leadership-dremio': ['Customer signal', 'Product direction', 'Engineering', 'Delivery'],
  'bloom-assessment-workflow': ['Source material', 'Generation', 'Teacher review', 'Structured output'],
};

export default function EmployerPortfolio() {
  return (
    <div className="site-shell hybrid-home">
      <SkipLink />

      <div className="hybrid-layout">
        <aside className="profile-rail" aria-labelledby="hero-heading">
          <Link className="rail-brand" to="/" aria-label="Alex Aidun home">
            <span className="rail-brand-mark" aria-hidden="true">A</span>
            <span>Alex Aidun</span>
          </Link>

          <div className="rail-story">
            <p className="rail-eyebrow">Enterprise AI · systems · adoption</p>
            <h1 id="hero-heading">Enterprise AI product <span>&amp; adoption</span> leader.</h1>
            <p className="rail-summary">{PROFILE.summary}</p>

            <div className="rail-status" aria-label="Current role">
              <div className="rail-status-label"><span /> Currently</div>
              <strong>AI Adoption Manager</strong>
              <p>Automattic · roughly 1,500 employees</p>
            </div>

            <p className="rail-perspective">I build with the tools because proximity sharpens judgment: where agents create leverage, where they lose context, and where human design still carries the premium.</p>
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
          <header className="surface-header">
            <div>
              <span>Portfolio</span>
              <strong>Selected systems</strong>
            </div>
            <nav aria-label="Primary navigation">
              <a className="active" href="#work">Work</a>
              <Link to="/builds">Builds</Link>
              <Link to="/about">About</Link>
              <a href={`mailto:${PROFILE.email}`}>Contact</a>
            </nav>
          </header>

          <section className="surface-intro" id="work" aria-labelledby="case-heading">
            <div>
              <p className="eyebrow">Professional work</p>
              <h2 id="case-heading">Evidence over adjectives.</h2>
            </div>
            <p>Three examples of how I connect operating models, products, and adoption around work people need to do.</p>
          </section>

          <section className="system-list" aria-label="Selected case studies">
            {CASE_STUDIES.map((study, index) => (
              <article className="system-card" key={study.slug}>
                <div className="system-index" aria-hidden="true">0{index + 1}</div>
                <div className="system-copy">
                  <p className="eyebrow">{study.eyebrow}</p>
                  <h3>{study.title}</h3>
                  <p>{study.summary}</p>
                  <ol className="system-flow" aria-label={`${study.title} workflow`}>
                    {SYSTEM_FLOWS[study.slug]?.map((step) => <li key={step}>{step}</li>)}
                  </ol>
                </div>
                <div className="system-result">
                  <span>Evidence</span>
                  <strong>{study.evidence[0].value}</strong>
                  <p>{study.evidence[0].label}</p>
                  <Link to={`/case-studies/${study.slug}`} aria-label={`Read case study: ${study.title}`}>
                    Read the case <ArrowRight aria-hidden="true" size={16} />
                  </Link>
                </div>
              </article>
            ))}
          </section>

          <section className="surface-close" aria-labelledby="surface-close-heading">
            <div>
              <p className="eyebrow">Making practice</p>
              <h2 id="surface-close-heading">Products, tools, and experiments.</h2>
              <p>The Build Lab is where I work through product ideas, interaction loops, and the practical limits of current AI systems.</p>
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
