import Reveal from './Reveal';
import { SITE } from '../data/site';

export default function About(){return <section id="about"><div className="wrap about">
 <Reveal className="about-intro"><span className="section-kicker">ABOUT US</span><h2>Built by three.<br/>Tuned as one.</h2><p style={{marginTop:24}}>{SITE.about}</p></Reveal>
 <Reveal d={.12} className="glass name-card"><span className="section-kicker">WHY 4ETHR</span><h3>Four elements.<br/>Three people.<br/>One shared frequency.</h3><p>{SITE.nameMeaning}</p><div className="name-lockup" aria-hidden="true"><b>4</b><i>×</i><span>ETHR</span></div></Reveal>
 <div className="stats">{[["3","team members"],["6","projects"],["1","shared frequency"]].map(([n,l],i)=><Reveal key={l} d={i*.12} className="glass stat"><b>{n}</b><span>{l}</span></Reveal>)}</div>
 <div className="story-grid">
  {[["Purpose",SITE.purpose],["Our goal",SITE.goal],["Our mission",SITE.mission]].map(([title,text],i)=><Reveal key={title} d={i*.1} className="glass story-card"><span className="section-kicker">0{i+1}</span><h3>{title}</h3><p>{text}</p></Reveal>)}
 </div>
 </div></section>}
