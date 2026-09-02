import { useMemo, useState } from 'react';
import { PROJECTS } from '../content';
import type { ProjectCategory } from '../types';
import BuildCard from './BuildCard';
import PageShell from './PageShell';

const filters: Array<'All' | ProjectCategory> = ['All', 'Products', 'Agents & Tools', 'Games', 'Open Source'];

export default function BuildLabPage() {
  const [filter, setFilter] = useState<(typeof filters)[number]>('All');
  const visibleProjects = useMemo(
    () => PROJECTS.filter(
      (project) => filter === 'All'
        || project.category === filter
        || (filter === 'Games' && project.collections?.includes('Games')),
    ),
    [filter],
  );

  return (
    <PageShell>
      <section className="page-hero section-grid lab-hero" aria-labelledby="lab-heading">
        <p className="eyebrow">Build Lab</p>
        <h1 id="lab-heading">Products, tools, open source, games, and experiments.</h1>
        <p>This is the complete making practice—not just the projects that fit neatly into a résumé.</p>
      </section>

      <section className="build-section page-build-section" aria-labelledby="all-builds-heading">
        <div className="section-grid">
          <div className="section-heading">
            <div><p className="eyebrow">Everything so far</p><h2 id="all-builds-heading">Browse the lab.</h2></div>
            <p>Working prototypes, private explorations, open-source workflows, and playful systems.</p>
          </div>
          <div className="filter-row" aria-label="Filter Build Lab projects">
            {filters.map((item) => (
              <button
                className={filter === item ? 'filter-button active' : 'filter-button'}
                key={item}
                type="button"
                aria-pressed={filter === item}
                onClick={() => setFilter(item)}
              >
                {item}
              </button>
            ))}
          </div>
          <div className="build-grid" aria-live="polite">
            {visibleProjects.map((project) => <BuildCard key={project.id} project={project} />)}
          </div>
        </div>
      </section>
    </PageShell>
  );
}
