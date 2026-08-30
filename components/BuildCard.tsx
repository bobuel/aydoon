import { ArrowUpRight, LockKeyhole } from 'lucide-react';
import { Link } from 'react-router-dom';
import { siteAsset } from '../sitePaths';
import type { Project } from '../types';

export default function BuildCard({ project, collectionLabel }: { project: Project; collectionLabel?: string }) {
  return (
    <article className="build-card">
      <div className={`build-visual accent-${project.accent}`}>
        {project.image ? (
          <img src={siteAsset(project.image)} alt={project.imageAlt ?? ''} />
        ) : (
          <span aria-hidden="true">{project.title.slice(0, 2).toUpperCase()}</span>
        )}
      </div>
      <div className="build-body">
        <div className="build-meta">
          <span>{collectionLabel ?? project.category}</span>
          <span className="status-pill">
            {project.status === 'Private prototype' && <LockKeyhole aria-hidden="true" size={12} />}
            {project.status}
          </span>
        </div>
        <h3>{project.title}</h3>
        <p>{project.description}</p>
        <ul className="tag-list" aria-label={`${project.title} technologies and themes`}>
          {project.tags.map((tag) => <li key={tag}>{tag}</li>)}
        </ul>
        {project.links.length > 0 ? (
          <div className="build-links">
            {project.links.map((link) => link.kind === 'case-study' ? (
              <Link key={link.href} to={link.href}>{link.label} <ArrowUpRight aria-hidden="true" size={15} /></Link>
            ) : (
              <a key={link.href} href={link.href} target="_blank" rel="noreferrer">
                {link.label} <ArrowUpRight aria-hidden="true" size={15} />
              </a>
            ))}
          </div>
        ) : (
          <p className="private-note">Private working prototype; details available in conversation.</p>
        )}
      </div>
    </article>
  );
}
