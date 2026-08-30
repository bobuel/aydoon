import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CAREER_HIGHLIGHTS, PROFILE } from '../content';
import { siteAsset } from '../sitePaths';
import PageShell from './PageShell';

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero section-grid about-hero" aria-labelledby="about-heading">
        <p className="eyebrow">About Alex</p>
        <h1 id="about-heading">Product leader, adoption operator, hands-on builder.</h1>
        <p>I work where product behavior and human behavior meet. I like turning ambiguity into something people can understand, try, and trust.</p>
      </section>

      <section className="about-story about-story-editorial section-grid" aria-labelledby="about-story-heading">
        <div>
          <p className="eyebrow">The connective tissue</p>
          <h2 id="about-story-heading">Serious systems and playful experiments belong together.</h2>
          <p>My career has moved through education, documentation, product, and adoption, but the central question has stayed consistent: how do people build confidence with a technical system and turn its capability into useful, repeatable work?</p>
          <p>I prototype because working software exposes assumptions faster than slides. I make games because loops, feedback, narrative, and the feeling of learning a system are product questions too.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/work">See professional impact <ArrowRight aria-hidden="true" size={18} /></Link>
            <a className="button button-secondary" href={siteAsset(PROFILE.resume)}>View résumé</a>
          </div>
        </div>
      </section>

      <section className="principles-section section-grid" aria-labelledby="principles-heading">
        <div className="section-heading">
          <div><p className="eyebrow">How I work</p><h2 id="principles-heading">Three recurring instincts.</h2></div>
          <p>The same operating principles show up in enterprise programs, product prototypes, and games.</p>
        </div>
        <div className="principles-grid">
          <article><span>01</span><h3>Adoption is product work.</h3><p>Access is only the beginning. Workflows, guidance, feedback, and peer examples shape whether capability becomes useful behavior.</p></article>
          <article><span>02</span><h3>Make the idea tangible.</h3><p>A working prototype creates better questions, exposes hidden assumptions, and gives people something concrete to respond to.</p></article>
          <article><span>03</span><h3>Play sharpens systems thinking.</h3><p>Games make loops, incentives, feedback, and comprehension visible in ways that transfer back into product work.</p></article>
        </div>
      </section>

      <section className="career-section section-grid" aria-labelledby="about-career-heading">
        <div className="section-heading compact-heading">
          <div><p className="eyebrow">Experience</p><h2 id="about-career-heading">The through line.</h2></div>
          <p>Helping people understand, adopt, and get value from technical products.</p>
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

      <section className="contact-section" aria-labelledby="about-contact-heading">
        <div className="section-grid contact-inner">
          <div><p className="eyebrow">Say hello</p><h2 id="about-contact-heading">Have an interesting problem?</h2><p>I’m always happy to compare notes on enterprise AI, product adoption, and the things people build for the joy of it.</p></div>
          <div className="contact-actions"><a className="button button-light" href={`mailto:${PROFILE.email}`}>Email Alex <Mail aria-hidden="true" size={18} /></a></div>
        </div>
      </section>
    </PageShell>
  );
}
