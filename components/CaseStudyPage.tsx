import { useEffect, useRef, useState } from 'react';
import { ArrowLeft, ArrowRight, MessageCircle } from 'lucide-react';
import { Link, Navigate, useParams } from 'react-router-dom';
import { CASE_STUDIES, getCaseStudy, PROFILE } from '../content';
import ChatModal from './ChatModal';
import SiteHeader from './SiteHeader';

export default function CaseStudyPage() {
  const { slug = '' } = useParams();
  const study = getCaseStudy(slug);
  const [isChatOpen, setChatOpen] = useState(false);
  const priorTitle = useRef(document.title);

  useEffect(() => {
    if (!study) return;
    document.title = `${study.title} | Alex Aidun`;
    const description = document.querySelector<HTMLMetaElement>('meta[name="description"]');
    const priorDescription = description?.content;
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    const priorCanonical = canonical?.href;
    const pageUrl = `https://aydoon.com/case-studies/${study.slug}`;
    const socialUpdates = [
      ['meta[property="og:title"]', `${study.title} | Alex Aidun`],
      ['meta[property="og:description"]', study.summary],
      ['meta[property="og:url"]', pageUrl],
      ['meta[name="twitter:title"]', `${study.title} | Alex Aidun`],
      ['meta[name="twitter:description"]', study.summary],
    ] as const;
    const priorSocialValues = socialUpdates.map(([selector]) =>
      document.querySelector<HTMLMetaElement>(selector)?.content,
    );
    if (description) description.content = study.summary;
    if (canonical) canonical.href = pageUrl;
    socialUpdates.forEach(([selector, value]) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) element.content = value;
    });
    return () => {
      document.title = priorTitle.current;
      if (description && priorDescription) description.content = priorDescription;
      if (canonical && priorCanonical) canonical.href = priorCanonical;
      socialUpdates.forEach(([selector], updateIndex) => {
        const element = document.querySelector<HTMLMetaElement>(selector);
        const priorValue = priorSocialValues[updateIndex];
        if (element && priorValue) element.content = priorValue;
      });
    };
  }, [study]);

  if (!study) return <Navigate to="/not-found" replace />;

  const index = CASE_STUDIES.findIndex((item) => item.slug === study.slug);
  const nextStudy = CASE_STUDIES[(index + 1) % CASE_STUDIES.length];

  return (
    <div className="site-shell case-page">
      <a className="skip-link" href="#main">Skip to main content</a>
      <SiteHeader onOpenChat={() => setChatOpen(true)} />
      <main id="main">
        <header className="case-hero section-grid">
          <Link className="back-link" to="/#case-studies">
            <ArrowLeft aria-hidden="true" size={17} /> All case studies
          </Link>
          <p className="eyebrow">{study.eyebrow}</p>
          <h1>{study.title}</h1>
          <p className="case-summary">{study.summary}</p>
          <dl className="case-details">
            <div><dt>Role</dt><dd>{study.role}</dd></div>
            <div><dt>Period</dt><dd>{study.period}</dd></div>
          </dl>
        </header>

        <section className="case-evidence" aria-label="Verified evidence">
          <div className="section-grid case-evidence-grid">
            {study.evidence.map((item) => (
              <div key={item.value + item.label}>
                <strong>{item.value}</strong>
                <span>{item.label}</span>
              </div>
            ))}
          </div>
        </section>

        <article className="case-body section-grid">
          {study.sections.map((section, sectionIndex) => (
            <section className="case-section-block" key={section.heading}>
              <div className="case-section-label">
                <span>{String(sectionIndex + 1).padStart(2, '0')}</span>
                <h2>{section.heading}</h2>
              </div>
              <div className="case-section-copy">
                {section.body.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
                {section.bullets && (
                  <ul>{section.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}</ul>
                )}
              </div>
            </section>
          ))}
        </article>

        <section className="next-case">
          <div className="section-grid next-case-inner">
            <div>
              <p className="eyebrow">Next case study</p>
              <h2>{nextStudy.title}</h2>
            </div>
            <Link className="button button-primary" to={`/case-studies/${nextStudy.slug}`}>
              Read next <ArrowRight aria-hidden="true" size={18} />
            </Link>
          </div>
        </section>

        <section className="case-contact section-grid" aria-label="Contact Alex">
          <div>
            <h2>Want the deeper version?</h2>
            <p>I can walk through the decisions, constraints, and role fit in conversation.</p>
          </div>
          <div className="contact-actions dark-actions">
            <a className="button button-primary" href={`mailto:${PROFILE.email}`}>Email Alex</a>
            <button className="button button-secondary" type="button" onClick={() => setChatOpen(true)}>
              Ask the portfolio <MessageCircle aria-hidden="true" size={18} />
            </button>
          </div>
        </section>
      </main>
      <ChatModal isOpen={isChatOpen} onClose={() => setChatOpen(false)} />
    </div>
  );
}

