import { PROJECTS } from '../content';
import { Link } from 'react-router-dom';
import BuildCard from './BuildCard';
import PageShell from './PageShell';

const creativeProjects = PROJECTS.filter((project) => project.collections?.includes('Games'));

export default function GamesPage() {
  return (
    <PageShell>
      <section className="page-hero section-grid games-hero" aria-labelledby="games-heading">
        <p className="eyebrow">Games & creative work</p>
        <h1 id="games-heading">Systems, stories, and things made for fun.</h1>
        <p>Play is where I explore loops, narrative, probability, voice, and the way people learn a system by using it.</p>
      </section>

      <section className="games-collection" aria-labelledby="games-collection-heading">
        <div className="section-grid">
          <div className="section-heading">
            <div><p className="eyebrow">Playable experiments</p><h2 id="games-collection-heading">The collection.</h2></div>
            <p>Each project is an experiment in interaction, atmosphere, or game-system design.</p>
          </div>
          <div className="build-grid">
            {creativeProjects.map((project) => (
              <BuildCard
                key={project.id}
                project={project}
                collectionLabel={project.category === 'Games' ? 'Game' : 'Creative interactive'}
              />
            ))}
          </div>
        </div>
      </section>

      <section className="collection-cta" aria-labelledby="games-cta-heading">
        <div className="section-grid collection-cta-inner">
          <div><p className="eyebrow">Keep exploring</p><h2 id="games-cta-heading">The games are one corner of the lab.</h2></div>
          <div className="hero-actions"><Link className="button button-primary" to="/builds">Browse every build</Link></div>
        </div>
      </section>
    </PageShell>
  );
}
