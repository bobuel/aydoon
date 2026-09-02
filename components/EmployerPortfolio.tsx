import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES, PROFILE, PROOF_METRICS } from '../content';
import SkipLink from './SkipLink';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

export default function EmployerPortfolio() {
  return (
    <div className="site-shell">
      <SkipLink />
      <SiteHeader />

      <main id="main" tabIndex={-1}>
        <section className="hero section-grid" aria-labelledby="hero-heading">
          <div className="hero-copy">
            <p className="eyebrow">Enterprise AI · Systems · Operations · Adoption</p>
            <h1 id="hero-heading">Enterprise AI product <span>&amp; adoption</span> leader.</h1>
            <p className="hero-lede">{PROFILE.summary}</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#work">
                See selected work <ArrowRight aria-hidden="true" size={18} />
              </a>
              <Link className="button button-secondary" to="/builds">Browse what I’ve built</Link>
            </div>
            <p className="hero-personal">I build with the tools myself because making sharpens product sense: it reveals where agents create leverage and where human judgment still carries the design premium.</p>
            <div className="social-links" aria-label="Contact links">
              <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub</a>
              <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn</a>
              <a href={`mailto:${PROFILE.email}`}><Mail aria-hidden="true" size={18} /> Email</a>
            </div>
          </div>

          <aside className="now-card" aria-label="Current role">
            <p className="now-label"><span /> Currently</p>
            <h2>AI Adoption Manager at Automattic</h2>
            <p>
              Designing and operating the system around enterprise AI: functional and cost
              operations, internal products, learning, agentic workflows, and an AI Guides
              champion network.
            </p>
            <div className="now-foot">
              <span>New York</span>
              <span>Systems thinker · hands-on builder</span>
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

        <section className="case-section home-case-section" id="work" aria-labelledby="case-heading">
          <div className="section-heading">
            <div>
              <p className="eyebrow">Selected case studies</p>
              <h2 id="case-heading">Evidence over adjectives.</h2>
            </div>
            <p>Problems framed, product decisions made, and adoption earned.</p>
          </div>
          <div className="case-grid home-case-grid">
            {CASE_STUDIES.map((study, index) => (
              <article className="case-card home-case-card" key={study.slug}>
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

        <section className="contact-section" id="contact" aria-labelledby="contact-heading">
          <div className="section-grid contact-inner">
            <div>
              <p className="eyebrow">Let’s compare notes</p>
              <h2 id="contact-heading">Building AI people can actually use?</h2>
              <p>I’m interested in enterprise AI product, operations, adoption, and transformation work.</p>
            </div>
            <div className="contact-actions">
              <a className="button button-light" href={`mailto:${PROFILE.email}`}>
                Email Alex <Mail aria-hidden="true" size={18} />
              </a>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
