import { Mail } from 'lucide-react';
import { PROFILE } from '../content';
import PageShell from './PageShell';

export default function AboutPage() {
  return (
    <PageShell>
      <section className="page-hero section-grid" aria-labelledby="about-heading">
        <p className="eyebrow">About Alex</p>
        <h1 id="about-heading">I work across AI operations, product, and adoption.</h1>
        <p>My work connects the pieces companies often separate: functional and cost operations, product ownership, rollout, learning, documentation, evaluation, and peer adoption.</p>
      </section>

      <section className="about-story about-story-editorial section-grid" aria-labelledby="about-story-heading">
        <div>
          <p className="eyebrow">How I work</p>
          <h2 id="about-story-heading">I make complex systems easier to use.</h2>
          <p>My career has moved through education, documentation, product, and adoption, but the central question has stayed consistent: how do people understand a technical system, build confidence with it, and turn its capability into useful, repeatable work?</p>
          <p>I build products myself to understand where AI helps, where it loses context, and where people need to stay involved. That experience shapes how I design workflows and help others use them.</p>
          <p>As execution gets cheaper, the design premium rises. I help organizations turn that shift into practical operating systems, products, learning, and behavior change—without reducing it to hype.</p>
        </div>
      </section>

      <section className="contact-section" aria-labelledby="about-contact-heading">
        <div className="section-grid contact-inner">
          <div>
            <p className="eyebrow">Say hello</p>
            <h2 id="about-contact-heading">Have an interesting problem?</h2>
            <p>I’m always happy to compare notes on enterprise AI, product adoption, and hands-on building.</p>
          </div>
          <div className="contact-actions">
            <a className="button button-light" href={`mailto:${PROFILE.email}`}>
              Email Alex <Mail aria-hidden="true" size={18} />
            </a>
          </div>
        </div>
      </section>
    </PageShell>
  );
}
