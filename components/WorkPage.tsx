import { ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAREER_HIGHLIGHTS, CASE_STUDIES, PROFILE, PROOF_METRICS } from '../content';
import PageShell from './PageShell';

export default function WorkPage() {
  return (
    <PageShell>
      <section className="page-hero section-grid" aria-labelledby="work-heading">
        <p className="eyebrow">Professional impact</p>
        <h1 id="work-heading">I design the systems that make enterprise AI usable.</h1>
        <p>Across functional and cost operations, product workflows, learning, and adoption.</p>
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

      <section className="case-section" aria-labelledby="work-cases-heading">
        <div className="section-heading">
          <div>
            <p className="eyebrow">Case studies</p>
            <h2 id="work-cases-heading">Evidence over adjectives.</h2>
          </div>
          <p>What I owned, how I made decisions, and how I separated evidence from assumptions.</p>
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

      <section className="career-section section-grid" aria-labelledby="work-career-heading">
        <div className="section-heading compact-heading">
          <div>
            <p className="eyebrow">Experience</p>
            <h2 id="work-career-heading">Across the product–adoption seam.</h2>
          </div>
          <p>A career spent making technical products easier to understand, use, and trust.</p>
        </div>
        <div className="timeline">
          {CAREER_HIGHLIGHTS.map((item) => (
            <article className="timeline-item" key={item.company}>
              <div><p className="timeline-period">{item.period}</p><h3>{item.company}</h3></div>
              <div><strong>{item.role}</strong><p>{item.detail}</p></div>
            </article>
          ))}
        </div>
      </section>

      <section className="contact-section" aria-labelledby="work-contact-heading">
        <div className="section-grid contact-inner">
          <div><p className="eyebrow">Let’s compare notes</p><h2 id="work-contact-heading">Building AI people can actually use?</h2><p>I’m interested in enterprise AI product, adoption, enablement, and product-led transformation roles.</p></div>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${PROFILE.email}`}>Email Alex</a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
