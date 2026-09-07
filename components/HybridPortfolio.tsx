import { useEffect } from 'react';
import { ArrowLeft, ArrowRight, ArrowUpRight } from 'lucide-react';
import { Link, Navigate, Route, Routes, useLocation, useParams } from 'react-router-dom';
import { CASE_STUDIES, PROFILE, PROJECTS, getCaseStudy } from '../content';
import { siteUrl } from '../sitePaths';
import { WRITING_ARTICLES, WRITING_DESCRIPTION, getWritingArticle } from '../writing/content';
import { WritingDetail, WritingIndex } from './Writing';

const SUMMARIES: Record<string, string> = {
  'enterprise-ai-adoption-automattic': 'At Automattic, I connect AI operations, internal products, and employee adoption, while helping manage costs. The work is about making those pieces function together.',
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
  const { pathname } = useLocation();
  return (
    <aside className="identity" aria-label="About Alex">
      <div className="identity-intro">
        <Link className="identity-name" to="/"><h1>Alex Aidun</h1></Link>
        <p className="identity-role">AI operations · product · adoption</p>
        <nav className="identity-contact" aria-label="Contact and profiles">
          <a href={PROFILE.github} target="_blank" rel="noreferrer">GitHub <ArrowUpRight size={12} aria-hidden="true" /></a>
          <a href={PROFILE.linkedin} target="_blank" rel="noreferrer">LinkedIn <ArrowUpRight size={12} aria-hidden="true" /></a>
          <a href={`mailto:${PROFILE.email}`}>Email</a>
        </nav>
        <div className="identity-story">
          {pathname === '/' ? <>
            <p>My work connects AI tools, the people using them, and the systems around them. My background spans education, documentation, and AI product leadership. I build tools and games, too.</p>
            <p className="design-context">AI makes coding cheaper. The value is in deciding what gets built, how people experience it, how it’s evaluated and monitored, and what it actually achieves.</p>
            <p className="design-context">Build for tomorrow’s models while delivering something useful today. Today’s limitations shouldn’t become permanent architecture. <strong>Design is the premium.</strong></p>
          </> : <>
            <p>My work connects AI tools, the people using them, and the systems around them.</p>
            <p>My background spans education, documentation, and AI product leadership. I build tools and games, too.</p>
            <p>I bring systems thinking to how the pieces fit, and design thinking to how people use them. AI makes building easier. Deciding what’s useful, and how it should work, is still the hard part.</p>
          </>}
        </div>
        <div className="identity-current">
          <span>Currently at Automattic</span>
          <strong>AI Adoption Manager</strong>
          <span className="champions-line">OpenAI Champions program participant</span>
        </div>
      </div>
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
            <h2><Link to={`/case-studies/${study.slug}`}>{study.title}</Link></h2>
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
            <h2>{project.title}</h2>
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
      <p>I work broadly to understand where AI can help, then go deep on an immediate opportunity. The first useful result should improve the work and help employees see what else is possible.</p>
      <p>I also participate in the OpenAI Champions program.</p>
      <p>As execution gets cheaper, the design premium rises. I help organizations turn that shift into practical operating systems, products, learning, and behavior change—without reducing it to hype.</p>
      <a className="row-link" href={`mailto:${PROFILE.email}`}>Have an interesting problem? <ArrowUpRight size={15} aria-hidden="true" /></a>
    </section>
  );
}

function NotFound() {
  return <section className="about-copy"><h2>That page isn’t here.</h2><Link className="back-link" to="/">Back to work</Link></section>;
}

function ArticleRoute() {
  const { slug = '' } = useParams();
  const article = getWritingArticle(slug);
  return article ? <WritingDetail article={article} /> : <NotFound />;
}

export default function HybridPortfolio() {
  const { pathname, hash } = useLocation();
  const path = pathname.replace(/\/$/, '') || '/';
  const study = path.startsWith('/case-studies/') ? getCaseStudy(path.slice('/case-studies/'.length)) : undefined;
  const article = path.startsWith('/writing/') ? getWritingArticle(path.slice('/writing/'.length)) : undefined;
  const view = path === '/builds' ? 'builds' : path === '/games' ? 'games' : path === '/about' ? 'about' : path === '/writing' || article ? 'writing' : path === '/' || path === '/work' || study ? 'work' : '';

  useEffect(() => {
    const metadata = study ? { title: `${study.title} | Alex Aidun`, description: study.summary }
      : article ? { title: `${article.title} | Alex Aidun`, description: article.summary }
      : path === '/writing' && WRITING_ARTICLES.length ? { title: 'Writing | Alex Aidun', description: WRITING_DESCRIPTION }
      : PAGE_METADATA[path];
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
  }, [path, study, article]);

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
            <nav className="view-navigation" aria-label="Primary navigation">
              {[{ id: 'work', label: 'Work', to: '/' }, { id: 'builds', label: 'Builds', to: '/builds' }, { id: 'games', label: 'Games', to: '/games' }, ...(WRITING_ARTICLES.length ? [{ id: 'writing', label: 'Writing', to: '/writing' }] : []), { id: 'about', label: 'About', to: '/about' }].map(item => (
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
            {WRITING_ARTICLES.length > 0 && <Route path="/writing" element={<WritingIndex />} />}
            {WRITING_ARTICLES.length > 0 && <Route path="/writing/:slug" element={<ArticleRoute />} />}
            <Route path="/case-studies/:slug" element={<CaseDetail />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </main>
      </div>
    </div>
  );
}
