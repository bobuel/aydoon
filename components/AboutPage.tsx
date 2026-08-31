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
        <h1 id="about-heading">Systems thinker, adoption operator, hands-on builder.</h1>
        <p>I help organizations adapt as agents take on more execution and the value shifts toward judgment, problem framing, workflow design, and adoption.</p>
      </section>

      <section className="about-story about-story-editorial section-grid" aria-labelledby="about-story-heading">
        <div>
          <p className="eyebrow">The connective tissue</p>
          <h2 id="about-story-heading">Making is how I develop AI product sense.</h2>
          <p>My career has moved through education, documentation, product, and adoption, but the central question has stayed consistent: how do people understand a technical system, build confidence with it, and turn its capability into useful, repeatable work?</p>
          <p>I build working products because proximity matters. Every prototype exposes where a model accelerates execution, where it loses context, and where the design of the workflow, feedback, constraints, and human review determines whether the result is actually useful.</p>
          <p>That hands-on practice lets me explain the shift without reducing it to hype. I can connect what the technology does now to the operating systems, learning, and behavior change an organization needs next.</p>
          <div className="hero-actions">
            <Link className="button button-primary" to="/work">See professional impact <ArrowRight aria-hidden="true" size={18} /></Link>
            <a className="button button-secondary" href={siteAsset(PROFILE.resume)}>View résumé</a>
          </div>
        </div>
      </section>

      <section className="ai-thesis section-grid" aria-labelledby="ai-thesis-heading">
        <div className="ai-thesis-heading">
          <div>
            <p className="eyebrow">How I see the shift</p>
            <h2 id="ai-thesis-heading">Execution is getting cheaper. The design premium is rising.</h2>
          </div>
          <p>Recent usage research makes the new division of work visible. My job is to turn that signal into product and adoption choices people can act on.</p>
        </div>

        <div className="ai-thesis-grid">
          <article>
            <strong>70% / 80%</strong>
            <h3>People steer; agents execute.</h3>
            <p>Anthropic found that people make about 70% of planning decisions in a typical Claude Code session, while Claude makes about 80% of execution decisions. Domain expertise still improves success: knowing what to build, what good looks like, and what to verify becomes the leverage.</p>
            <a href="https://www.anthropic.com/research/claude-code-expertise" target="_blank" rel="noreferrer">Read the Anthropic research</a>
          </article>
          <article>
            <strong>43.5%</strong>
            <h3>Work is crossing role boundaries.</h3>
            <p>OpenAI found that 43.5% of occupation-specific ChatGPT messages involve tasks associated with another occupation. I see the operating implication as broader outcome ownership and fewer handoffs—not less expertise, but expertise moving closer to execution.</p>
            <a href="https://openai.com/index/how-ai-is-expanding-what-people-do-at-work/" target="_blank" rel="noreferrer">Read the OpenAI research</a>
          </article>
          <article>
            <strong>Design premium</strong>
            <h3>The differentiator becomes the system.</h3>
            <p>When implementation accelerates, value moves toward choosing the right problem, shaping the end-to-end workflow, setting the quality bar, and designing the feedback and adoption loops around the technology.</p>
            <Link to="/builds">See how I build to learn</Link>
          </article>
        </div>

        <div className="ai-thesis-footer">
          <p><strong>What this means for my work:</strong> I help leaders distinguish capability from theater, redesign work around human judgment and agent execution, and build the guidance, evaluation, and peer systems that make the change usable.</p>
          <div aria-label="Related ideas I am tracking">
            <span>Related ideas I’m tracking</span>
            <a href="https://www.lennysnewsletter.com/p/netflix-cpto-on-ai-and-the-future" target="_blank" rel="noreferrer">Systems thinkers in the AI era</a>
            <a href="https://www.lennysnewsletter.com/p/how-to-build-ai-product-sense" target="_blank" rel="noreferrer">AI product sense through hands-on use</a>
            <a href="https://www.lennysnewsletter.com/p/ais-third-era-the-rise-of-persistent" target="_blank" rel="noreferrer">Steering as execution scales</a>
          </div>
        </div>
      </section>

      <section className="principles-section section-grid" aria-labelledby="principles-heading">
        <div className="section-heading">
          <div><p className="eyebrow">How I work</p><h2 id="principles-heading">Three recurring instincts.</h2></div>
          <p>The same operating principles show up in enterprise programs, product prototypes, and games.</p>
        </div>
        <div className="principles-grid">
          <article><span>01</span><h3>Adoption is a product system.</h3><p>Access is only the beginning. Workflows, guidance, feedback, incentives, and peer examples determine whether capability becomes useful behavior.</p></article>
          <article><span>02</span><h3>Build to sharpen judgment.</h3><p>A working product creates better questions, exposes hidden assumptions, and develops the taste to separate a compelling demo from a durable workflow.</p></article>
          <article><span>03</span><h3>Design the whole loop.</h3><p>The interface, operating model, learning path, evaluation criteria, and human checkpoints should reinforce one another—not become separate handoffs.</p></article>
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
