import { useState, useEffect, useRef } from 'react';
import Photo from './Photo';
import { PROJECTS } from '../data/projects';

export default function MemberProfile({m,close}){
 const ref=useRef();
 useEffect(()=>{const k=e=>e.key==="Escape"&&close();addEventListener("keydown",k);document.body.style.overflow="hidden";ref.current.focus();return()=>{removeEventListener("keydown",k);document.body.style.overflow=""}},[]);
 const soc=Object.entries(m.socials).filter(([,v])=>v);
 return <div className="ov" role="dialog" aria-modal="true" aria-label={m.name+" profile"}><div className="wrap">
  <button ref={ref} className="glass back" onClick={close}>← Back to team</button>
  <div className="pf"><Photo m={m}/><div>
   <p className="role">{m.role}</p><h2>{m.name}</h2><p style={{fontSize:"1.2rem"}}>{m.intro}</p>
   {m.bio&&<div className="sec"><h3>Bio</h3><p>{m.bio}</p></div>}
   {m.interests.length>0&&<div className="sec"><h3>Interests</h3><div className="chips">{m.interests.map(s=><span className="chip" key={s}>{s}</span>)}</div></div>}
   {m.learning.length>0&&<div className="sec"><h3>Currently learning</h3><div className="chips">{m.learning.map(s=><span className="chip" key={s}>{s}</span>)}</div></div>}
   <div className="sec"><h3>Skills</h3><div className="chips">{m.skills.map(s=><span className="chip" key={s}>{s}</span>)}</div></div>
   <div className="sec"><h3>Projects</h3>{PROJECTS.filter(p=>p.member===m.id).map(p=><div className="glass pp" key={p.id}><b>{p.title}</b><p className="role">{p.desc}</p>{p.url?<a href={p.url} target="_blank" rel="noopener noreferrer">Visit ↗</a>:<span className="project-link-note">{p.configValue?`Configurable link: ${p.configValue}`:"Working link not provided yet"}</span>}</div>)}</div>
   {soc.length>0&&<div className="sec"><h3>Find them</h3><div className="chips">{soc.map(([k,v])=><a className="chip" key={k} href={v} target="_blank" rel="noopener noreferrer">{k}</a>)}</div></div>}
  </div></div></div></div>}
