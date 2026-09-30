import Reveal from './Reveal';
import { byId } from '../data/team';
import { PROJECT_COLORS } from '../data/projects';

export default function ProjectCard({ p }) {
  const c = PROJECT_COLORS[p.id - 1];
  return (
    <Reveal as="article" className="proj">
      <div className="art" style={{ '--c1': c[0], '--c2': c[1] }}>
        {p.image
          ? <img src={p.image} alt={p.title} style={{ width: '100%', height: '100%', objectFit: 'cover' }} />
          : <span aria-hidden="true">{p.title[0]}</span>}
      </div>
      <div>
        <span className="by">{byId(p.member).name}</span>
        <h3>{p.title}</h3>
        <p>{p.desc}</p>
        <div className="chips" style={{ marginBottom: 18 }}>{p.tech.map((t) => <span key={t} className="chip">{t}</span>)}</div>
        {p.url
          ? <a className="btn" href={p.url} target="_blank" rel="noopener noreferrer">View project ↗</a>
          : <span className="project-link-note" title={p.configValue ? `Configurable value: ${p.configValue}` : "A working project URL was not provided."}>{p.configValue ? `Link configurable: ${p.configValue}` : "Project link coming soon"}</span>}
      </div>
    </Reveal>
  );
}
