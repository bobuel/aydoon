import { ArrowRight, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';
import { CASE_STUDIES, PROFILE, PROJECTS, PROOF_METRICS } from '../content';
import { siteAsset } from '../sitePaths';
import CompactBuildCard from './CompactBuildCard';
import SkipLink from './SkipLink';
import SiteFooter from './SiteFooter';
import SiteHeader from './SiteHeader';

const homepageBuildIds = new Set(['certifyfast', 'kidgrow', 'retrieval-guard']);
const featuredProjects = PROJECTS.filter((project) => homepageBuildIds.has(project.id));
const creativeProjects = PROJECTS.filter((project) => project.collections?.includes('Games'));

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
              <Link className="button button-primary" to="/work">
                See my professional impact <ArrowRight aria-hidden="true" size={18} />
              </Link>
              <Link className="button button-secondary" to="/builds">Explore the Build Lab</Link>
            </div>
            <p className="hero-personal">I build with the tools myself because making sharpens product sense: it reveals where agents create leverage and where human judgment still carries the design premium.</p>
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

        <section className="case-section" id="case-studies" aria-labelledby="case-heading">
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

        <section className="build-section home-build-section" id="builds" aria-labelledby="build-heading">
          <div className="section-grid">
            <div className="section-heading">
              <div>
                <p className="eyebrow">Build Lab</p>
                <h2 id="build-heading">A few things I’ve made.</h2>
              </div>
              <p>Selected products and open-source experiments. The full catalog lives in the Build Lab.</p>
            </div>
            <div className="compact-build-grid">
              {featuredProjects.map((project) => <CompactBuildCard key={project.id} project={project} />)}
            </div>
            <div className="section-action"><Link className="button button-primary" to="/builds">Browse the complete Build Lab <ArrowRight aria-hidden="true" size={18} /></Link></div>
          </div>
        </section>

        <section className="games-gateway" id="games" aria-labelledby="games-home-heading">
          <div className="section-grid games-gateway-inner">
            <div>
              <div><p className="eyebrow">Games & creative work</p><h2 id="games-home-heading">Systems, stories, and things made for fun.</h2></div>
              <p>Playful projects are part of the same making practice: loops, atmosphere, probability, voice, and interaction.</p>
              <Link className="button button-primary" to="/games">Explore the games collection <ArrowRight aria-hidden="true" size={18} /></Link>
            </div>
            <div className="games-preview-grid">
              {creativeProjects.map((project) => (
                <Link className="game-preview" key={project.id} to="/games" aria-label={`Explore ${project.title} in the games collection`}>
                  <div className={`game-preview-image accent-${project.accent}`}>
                    {project.image ? <img src={siteAsset(project.image)} alt="" /> : <span aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}</span>}
                  </div>
                  <span>{project.title}</span>
                </Link>
              ))}
            </div>
          </div>
        </section>

        <section className="home-close" id="contact" aria-labelledby="profile-home-heading">
          <div className="section-grid home-close-inner">
            <div className="home-close-profile">
              <p className="eyebrow">About Alex</p>
              <h2 id="profile-home-heading">Systems thinker, adoption leader, hands-on builder.</h2>
              <p>As agents absorb more execution, the work shifts toward steering: framing the right problem, designing the system around it, defining quality, and helping people adapt. I build to keep that judgment grounded in what the technology can actually do.</p>
              <Link className="text-link" to="/about">Read the profile <ArrowRight aria-hidden="true" size={16} /></Link>
            </div>
            <div className="home-close-contact">
              <p className="eyebrow">Let’s compare notes</p>
              <h2>Building AI people can actually use?</h2>
              <p>I’m interested in enterprise AI product, adoption, enablement, and transformation roles.</p>
              <div className="contact-actions">
              <a className="button button-light" href={`mailto:${PROFILE.email}`}>
                Email Alex <Mail aria-hidden="true" size={18} />
              </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <SiteFooter />
    </div>
  );
}
