import { ArrowUpRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteAsset } from '../sitePaths';
import type { Project } from '../types';

export default function CompactBuildCard({ project }: { project: Project }) {
  const primaryLink = project.links[0];

  return (
    <article className="compact-build-card">
      <div className={`compact-build-visual accent-${project.accent}`}>
        {project.image ? (
          <img src={siteAsset(project.image)} alt={project.imageAlt ?? ''} />
        ) : (
          <span aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <div className="compact-build-copy">
        <div className="compact-build-meta"><span>{project.category}</span><span>{project.status}</span></div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        {primaryLink && (
          primaryLink.kind === 'case-study' ? (
            <Link className="text-link" to={primaryLink.href}>{primaryLink.label} <ArrowUpRight aria-hidden="true" size={15} /></Link>
          ) : (
            <a className="text-link" href={primaryLink.href} target="_blank" rel="noreferrer">
              {primaryLink.label} <ArrowUpRight aria-hidden="true" size={15} />
            </a>
          )
        )}
      </div>
    </article>
  );
}
