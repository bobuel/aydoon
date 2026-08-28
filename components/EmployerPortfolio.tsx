import { useMemo, useState } from 'react';
import { ArrowRight, Mail, MessageCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAREER_HIGHLIGHTS, CASE_STUDIES, PROFILE, PROJECTS, PROOF_METRICS } from '../content';
import type { ProjectCategory } from '../types';
import BuildCard from './BuildCard';
import ChatModal from './ChatModal';
import SiteHeader from './SiteHeader';

const filters: Array<'All' | ProjectCategory> = ['All', 'Products', 'Agents & Tools', 'Games', 'Open Source'];

export default function EmployerPortfolio() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const [isChatOpen, setChatOpen] = useState(false);
  const visibleProjects = useMemo(
    () => PROJECTS.filter((project) => filter === 'All' || project.category === filter),
    [filter],
  );

  return (
    <div className="site-shell">
      <a className="skip-link" href="#main">Skip to main content</a>
      <SiteHeader onOpenChat={() => setChatOpen(true)} />

      <main id="main">
        <section className="hero section-grid" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">Enterprise AI · Product · Adoption</p>
            <h1 id="hero-heading">Enterprise AI product <span>&amp; adoption</span> leader.</h1>
            <p className="hero-lede">{PROFILE.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#case-studies">
                Explore the work <ArrowRight aria-hidden="true" size={18} />
              </a>
              <a className="button button-secondary" href={PROFILE.resume}>View résumé</a>
            </div>
            <div className="social-links" aria-label="Contact links">
              <a href={PROFILE.github} target="_blank" rel="noreferrer">
                GitHub
              </a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">
                LinkedIn
              </a>
              <a href={`mailto:${PROFILE.email}`}>
                <Mail aria-hidden="true" size={18} /> Email
              </a>
            </div>
          </div>

          <aside className="now-card" aria-label="Current role">
            <p className="now-label"><span /> Currently</p>
            <h2>AI Adoption Manager at Automattic</h2>
            <p>
              Product manager and operator for internal AI products, learning, and agentic
              workflows—plus an AI Guides champion program.
            </p>
            <div className="now-foot">
              <span>New York</span>
              <span>Hands-on by default</span>
            </div>
          </aside>
        </section>

        <section className="proof-band" aria-label="Verified proof points">
          {PROOF_METRICS.map((metric) => (
            <div className="metric" key={metric.value + metric.label}>
              <strong>{metric.value}</strong>
              <span>{metric.label}</span>
              {metric.note && <small>{metric.note}</small>}
            </div>
          ))}
        </section>

        <section className="case-section" id="case-studies" aria-labelledby="case-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected case studies</p>
              <h2 id="case-heading">Evidence over adjectives.</h2>
            </div>
            <p>How I frame the problem, make product decisions, and create the conditions for sustained use.</p>
          </div>
          <div className="case-grid">
            {CASE_STUDIES.map((study, index) => (
              <article className="case-card" key={study.slug}>
                <span className="case-number">0{index + 1}</span>
                <p className="eyebrow">{study.eyebrow}</p>
                <h3>{study.title}</h3>
                <p>{study.summary}</p>
                <Link className="text-link" to={`/case-studies/${study.slug}`}>
                  Read case study <ArrowRight aria-hidden="true" size={16} />
                </Link>
              </article>
            ))}
          </div>
        </section>

        <section className="build-section" id="builds" aria-labelledby="build-heading">
          <div className="section-grid">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Selected builds</p>
                <h2 id="build-heading">Product thinking, made tangible.</h2>
              </div>
              <p>Small experiments and working prototypes that explore trustworthy workflows, useful interfaces, and playful systems.</p>
            </div>
            <div className="filter-row" aria-label="Filter selected builds">
              {filters.map((item) => (
                <button
                  className={filter === item ? 'filter-button active' : 'filter-button'}
                  key={item}
                  type="button"
                  aria-pressed={filter === item}
                  onClick={() => setFilter(item)}
                >
                  {item}
                </button>
              ))}
            </div>
            <div className="build-grid" aria-live="polite">
              {visibleProjects.map((project) => <BuildCard key={project.id} project={project} />)}
            </div>
          </div>
        </section>

        <section className="career-section section-grid" id="experience" aria-labelledby="career-heading">
          <div className="section-heading compact-heading">
            <div>
              <p className="eyebrow">Experience</p>
              <h2 id="career-heading">Across the product–adoption seam.</h2>
            </div>
            <p>I’ve spent my career making technical products easier to understand, use, and trust.</p>
          </div>
          <div className="timeline">
            {CAREER_HIGHLIGHTS.map((item) => (
              <article className="timeline-item" key={item.company}>
                <div>
                  <p className="timeline-period">{item.period}</p>
                  <h3>{item.company}</h3>
                </div>
                <div>
                  <strong>{item.role}</strong>
                  <p>{item.detail}</p>
                </div>
              </article>
            ))}
          </div>
        </section>

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="section-grid contact-inner">
            <div>
              <p className="eyebrow">Let’s compare notes</p>
              <h2 id="contact-heading">Building AI people can actually use?</h2>
              <p>I’m especially interested in enterprise AI product, adoption, enablement, and product-led transformation roles.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${PROFILE.email}`}>
                Email Alex <Mail aria-hidden="true" size={18} />
              </a>
              <button className="button button-outline-light" type="button" onClick={() => setChatOpen(true)}>
                Ask the portfolio <MessageCircle aria-hidden="true" size={18} />
              </button>
            </div>
          </div>
        </section>
      </main>

      <footer className="site-footer">
        <div className="section-grid footer-inner">
          <p>© {new Date().getFullYear()} Alex Aidun</p>
          <nav aria-label="Footer links">
            <a href={PROFILE.resume}>Résumé</a>
            <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
            <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
          </nav>
        </div>
      </footer>

      <ChatModal isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}

