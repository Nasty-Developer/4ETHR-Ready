import Reveal from './Reveal';
import { TEAM } from '../data/team';

export default function Skills(){return <section id="skills"><div className="wrap"><Reveal as="h2">What we work with</Reveal>
 <div className="sk">{TEAM.map((m,i)=><Reveal key={m.id} d={i*.12} className="glass"><h3>{m.name.split(" ")[0]}</h3><div className="chips">{m.skills.map(s=><span key={s} className="chip">{s}</span>)}</div></Reveal>)}</div></div></section>}
