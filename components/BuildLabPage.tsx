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
        <h1 id="lab-heading">Build Lab</h1>
        <p>Products, AI tools, open source, and games. I build to test ideas and see what works.</p>
      </section>

      <section className="build-section page-build-section" aria-label="Browse projects">
        <div className="section-grid">
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
