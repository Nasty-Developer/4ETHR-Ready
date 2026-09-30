import Reveal from './Reveal';
import ProjectCard from './ProjectCard';
import { TEAM, byId } from '../data/team';
import { PROJECTS } from '../data/projects';

export default function Projects({ filter, setFilter }) {
  const list = PROJECTS.filter((p) => filter === 'all' || p.member === filter);
  return (
    <section id="projects">
      <div className="wrap">
        <Reveal as="h2">Selected work</Reveal>
        <Reveal className="glass filters" d={.08} role="group" aria-label="Filter projects">
          {['all', ...TEAM.map((t) => t.id)].map((f) => (
            <button key={f} className={filter === f ? 'on' : ''} aria-pressed={filter === f} onClick={() => setFilter(f)}>
              {f === 'all' ? 'All' : byId(f).name.split(' ')[0]}
            </button>
          ))}
        </Reveal>
        {list.map((p) => <ProjectCard key={p.id + filter} p={p} />)}
      </div>
    </section>
  );
}
