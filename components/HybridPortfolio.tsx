import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight, Mail } from 'lucide-react';
import { Link, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { CASE_STUDIES, PROFILE, PROJECTS, getCaseStudy } from '../content';
import { siteUrl } from '../sitePaths';

const SUMMARIES: Record<string, string> = {
  'enterprise-ai-adoption-automattic': 'I manage operations for ChatGPT, Codex, and Claude, alongside internal products and the AI Guides program.',
  'ai-product-leadership-dremio': 'I turned customer needs into four AI initiatives, working across product, design, and engineering.',
  'bloom-assessment-workflow': 'I turned clear demand into a source-grounded assessment workflow that keeps teachers in control.',
};

const PAGE_METADATA: Record<string, { title: string; description: string }> = {
  '/': {
    title: 'Alex Aidun | Enterprise AI Product, Operations & Adoption Leader',
    description: 'Alex Aidun designs the systems that connect enterprise AI operations, product workflows, and adoption, grounded in hands-on building and verified outcomes.',
  },
  '/builds': { title: 'Builds | Alex Aidun', description: 'Products, AI tools, open-source workflows, games, and experiments built by Alex Aidun.' },
  '/games': { title: 'Games and creative work | Alex Aidun', description: 'Games and creative experiments by Alex Aidun exploring systems, story, voice, probability, and interaction.' },
  '/about': { title: 'About Alex Aidun | Alex Aidun', description: 'The professional and creative story behind Alex Aidun’s work in enterprise AI, product adoption, and hands-on building.' },
};

function Identity() {
  return (
    <aside className="identity" aria-label="About Alex">
      <div className="identity-intro">
        <Link className="identity-name" to="/"><h1>Alex Aidun</h1></Link>
        <p className="identity-role">AI operations · product · adoption</p>
        <div className="identity-story">
          <p>My work connects AI tools, the people using them, and the systems around them.</p>
          <p>I build to understand what works: simple workflows, clear guidance, and fewer dead ends.</p>
        </div>
        <div className="identity-current">
          <span>Currently at Automattic</span>
          <strong>AI Adoption Manager</strong>
        </div>
      </div>
      <nav className="identity-links" aria-label="Profile links">
        <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={14} aria-hidden="true" /></a>
        <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={14} aria-hidden="true" /></a>
        <Link to="/about">About</Link>
        <a className="identity-email" href={`mailto:${PROFILE.email}`}><Mail size={16} aria-hidden="true" /> Email Alex</a>
      </nav>
    </aside>
  );
}

function WorkList() {
  return (
    <>
      <div id="work" className="work-list" aria-label="Professional case studies">
        {CASE_STUDIES.map(study => (
          <article className="case-row" key={study.slug}>
            <p className="row-label">{study.eyebrow}</p>
            <h3><Link to={`/case-studies/${study.slug}`}>{study.title}</Link></h3>
            <p className="row-description">{SUMMARIES[study.slug]}</p>
            <div className="case-row-footer">
              <p className="case-proof"><strong>{study.evidence[0].value}</strong> {study.evidence[0].label}</p>
              <Link className="row-link" to={`/case-studies/${study.slug}`} aria-label={`Read case study: ${study.title}`}>
                Read the case <ArrowRight size={15} aria-hidden="true" />
              </Link>
            </div>
          </article>
        ))}
      </div>
      <Link className="browse-builds" to="/builds">Explore the tools and games I build <ArrowRight size={16} aria-hidden="true" /></Link>
    </>
  );
}

function ProjectList({ gamesOnly = false }: { gamesOnly?: boolean }) {
  const firstIds = ['certifyfast', 'bloom-skill', 'brassline', 'retrieval-guard'];
  const ordered = [...firstIds.flatMap(id => PROJECTS.filter(project => project.id === id)), ...PROJECTS.filter(project => !firstIds.includes(project.id))];
  const projects = gamesOnly ? ordered.filter(project => project.category === 'Games') : ordered;
  return (
    <div className="project-list" aria-label={gamesOnly ? 'Games' : 'Projects'}>
      {projects.map(project => (
        <article className="project-row" key={project.id}>
          <div className="project-row-heading">
            <h3>{project.title}</h3>
            <span className="project-status">{project.status}</span>
          </div>
          <p className="row-description">{project.description}</p>
          <div className="project-row-footer">
            {project.category.toLowerCase() !== project.status.toLowerCase() && <span className="project-category">{project.category}</span>}
            <div className="project-actions">
              {project.links.map(link => link.href.startsWith('/') ? (
                <Link className="row-link" key={link.href} to={link.href} aria-label={`${link.label}: ${project.title}`}>
                  {link.label} <ArrowRight size={14} aria-hidden="true" />
                </Link>
              ) : (
                <a className="row-link" key={link.href} href={link.href} target="_blank" rel="noreferrer" aria-label={`${link.label}: ${project.title}`}>
                  {link.label} <ArrowUpRight size={14} aria-hidden="true" />
                </a>
              ))}
              {!project.links.length && <span className="private-note">Details available in conversation</span>}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

function CaseDetail() {
  const { slug = '' } = useParams();
  const study = getCaseStudy(slug);
  if (!study) return <NotFound />;
  return (
    <article className="case-detail">
      <Link className="back-link" to="/#work"><ArrowLeft size={15} aria-hidden="true" /> Back to work</Link>
      <p className="row-label">{study.eyebrow}</p>
      <h2>{study.title}</h2>
      <p className="detail-role">{study.role} · {study.period}</p>
      <p className="detail-summary">{study.summary}</p>
      <dl className="detail-evidence" aria-label="Verified evidence">
        {study.evidence.map(metric => <div key={metric.label}><dt>{metric.label}</dt><dd>{metric.value}</dd></div>)}
      </dl>
      {study.sections.map(section => (
        <section key={section.heading}>
          <h3>{section.heading}</h3>
          {section.body.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
          {section.bullets && <ul>{section.bullets.map(bullet => <li key={bullet}>{bullet}</li>)}</ul>}
        </section>
      ))}
      <Link className="back-link" to="/#work"><ArrowLeft size={15} aria-hidden="true" /> Back to work</Link>
    </article>
  );
}

function About() {
  return (
    <section className="about-copy">
      <h2>I make complex systems easier to use.</h2>
      <p>My career has moved through education, documentation, product, and adoption, but the central question has stayed consistent: how do people understand a technical system, build confidence with it, and turn its capability into useful, repeatable work?</p>
      <p>I build products myself to understand where AI helps, where it loses context, and where people need to stay involved. That experience shapes how I design workflows and help others use them.</p>
      <p>As execution gets cheaper, the design premium rises. I help organizations turn that shift into practical operating systems, products, learning, and behavior change—without reducing it to hype.</p>
      <a className="row-link" href={`mailto:${PROFILE.email}`}>Have an interesting problem? <ArrowUpRight size={15} aria-hidden="true" /></a>
    </section>
  );
}

function NotFound() {
  return <section className="about-copy"><h2>That page isn’t here.</h2><Link className="back-link" to="/">Back to work</Link></section>;
}

export default function HybridPortfolio() {
  const { pathname, hash } = useLocation();
  const path = pathname.replace(/\/$/, '') || '/';
  const study = path.startsWith('/case-studies/') ? getCaseStudy(path.slice('/case-studies/'.length)) : undefined;
  const view = path === '/builds' ? 'builds' : path === '/games' ? 'games' : path === '/' || path === '/work' || study ? 'work' : '';

  useEffect(() => {
    const metadata = study ? { title: `${study.title} | Alex Aidun`, description: study.summary } : PAGE_METADATA[path];
    if (!metadata) { document.title = 'Page not found | Alex Aidun'; return; }
    document.title = metadata.title;
    const values = [
      ['meta[name="description"]', metadata.description],
      ['meta[property="og:title"]', metadata.title],
      ['meta[property="og:description"]', metadata.description],
      ['meta[property="og:url"]', siteUrl(path)],
      ['meta[name="twitter:title"]', metadata.title],
      ['meta[name="twitter:description"]', metadata.description],
    ];
    values.forEach(([selector, value]) => {
      const element = document.querySelector<HTMLMetaElement>(selector);
      if (element) element.content = value;
    });
    const canonical = document.querySelector<HTMLLinkElement>('link[rel="canonical"]');
    if (canonical) canonical.href = siteUrl(path);
  }, [path, study]);

  useEffect(() => {
    if (path === '/' && ['#work', '#case-studies'].includes(hash)) document.getElementById('work')?.scrollIntoView({ block: 'start' });
  }, [path, hash]);

  return (
    <div className="hybrid-site">
      <a className="skip-link" href="#main" onClick={event => { event.preventDefault(); document.getElementById('main')?.focus(); }}>Skip to main content</a>
      <div className="hybrid-layout">
        <Identity />
        <main id="main" tabIndex={-1} className="hybrid-content">
          <div className="content-top">
            {!study && PAGE_METADATA[path] && <h2 className="design-tagline">Design is the premium.</h2>}
            <nav className="view-navigation" aria-label="Primary navigation">
              {[{ id: 'work', label: 'Work', to: '/' }, { id: 'builds', label: 'Builds', to: '/builds' }, { id: 'games', label: 'Games', to: '/games' }].map(item => (
                <Link key={item.id} to={item.to} aria-current={view === item.id ? 'page' : undefined}>{item.label}</Link>
              ))}
            </nav>
          </div>
          <Routes>
            <Route path="/" element={<WorkList />} />
            <Route path="/work" element={<Navigate to="/" replace />} />
            <Route path="/builds" element={<ProjectList />} />
            <Route path="/games" element={<ProjectList gamesOnly />} />
            <Route path="/about" element={<About />} />
            <Route path="/case-studies/:slug" element={<CaseDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
