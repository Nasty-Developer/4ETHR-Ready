import Reveal from './Reveal';
import Photo from './Photo';
import { TEAM } from '../data/team';
import { PROJECTS } from '../data/projects';
import { go } from '../lib/utils';

export default function Team({open,onExplore}){return <section id="team"><div className="wrap">
 <Reveal as="h2">Different minds.<br/>A shared frequency.</Reveal>
 <div className="team">{TEAM.map((m,i)=><Reveal key={m.id} d={i*.12} className="glass tm">
  <button onClick={()=>open(m.id)} aria-label={"Open profile of "+m.name} style={{display:"block",textAlign:"left"}}><Photo m={m}/><h3 style={{marginTop:14}}>{m.name}</h3></button>
  <p className="role">{m.role}</p>
  <div className="chips">{m.skills.slice(0,4).map(s=><span key={s} className="chip">{s}</span>)}</div>
  <p className="role">{PROJECTS.filter(p=>p.member===m.id).length} projects</p>
   <button className="ex" onClick={()=>{onExplore(m.id);go("projects")}}>See your work ↗</button></Reveal>)}</div></div></section>}
