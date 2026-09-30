import { go } from '../lib/utils';
import { SITE } from '../data/site';

const VISUALS={
 editorial:{label:"EDITORIAL SIGNAL",nodes:["CREATE","SHAPE","SHIP"],core:"4E"},
 orbit:{label:"ORBITAL NETWORK",nodes:["LINK","SYNC","LAUNCH"],core:"4E"},
 crystal:{label:"CRYSTAL LOGIC",nodes:["FORM","LIGHT","FLOW"],core:"◇"},
 velvet:{label:"VELVET CURRENT",nodes:["FEEL","MAKE","MOVE"],core:"4E"},
 noir:{label:"NOIR RADAR",nodes:["PLAN","BUILD","PROVE"],core:"4E"},
 mono:{label:"MONOCHROME MODE",nodes:["ONE","TWO","THREE"],core:"4"}
};

export default function Hero({theme="editorial"}){
 const visual=VISUALS[theme]||VISUALS.editorial;
 return <section id="home"><div className="orb o1"/><div className="orb o2"/>
 <div className="wrap hero-layout">
  <div className="hero-copy hero-in">
   <p className="hero-kicker"><span className="pulse-dot"/> NESCOE HACKATHON · 2026</p>
   <h1 className="hero-t">4ETHR</h1><p className="tag">{SITE.tagline}</p>
   <p className="hero-support">Our shared digital space for projects, skills, experiments, and the ideas we build together.</p>
   <div className="hero-actions"><a className="btn" href="#projects" onClick={e=>{e.preventDefault();go("projects")}}>See our work ↗</a><a className="btn ghost" href="#team" onClick={e=>{e.preventDefault();go("team")}}>Meet the team</a></div>
   <div className="hero-meta" aria-label="4ETHR highlights"><span>3 minds</span><i/> <span>1 signal</span><i/> <span>∞ ideas</span></div>
  </div>
   <div className="hero-visual hero-in" style={{"--visual-delay":".16s"}} role="img" aria-label={`${visual.label} visual representing three connected minds and their work`}>
    <div key={theme} className={`hero-art theme-${theme}`}>
     <div className="art-topline"><span>4ETHR / {visual.label}</span><span className="art-status"><i/> ONLINE</span></div>
    <div className="art-grid"/>
     <div className="art-geometry geometry-editorial"><div className="art-halo halo-one"/><div className="art-halo halo-two"/><div className="art-ring ring-one"/><div className="art-ring ring-two"/><div className="art-ring ring-three"/></div>
     <div className="art-geometry geometry-orbit"><div className="orbit-lattice"/><div className="orbit-planet planet-one"/><div className="orbit-planet planet-two"/><div className="orbit-scan"/></div>
     <div className="art-geometry geometry-crystal"><div className="crystal-prism prism-one"/><div className="crystal-prism prism-two"/><div className="crystal-beam beam-one"/><div className="crystal-beam beam-two"/></div>
     <div className="art-geometry geometry-velvet"><div className="velvet-petal petal-one"/><div className="velvet-petal petal-two"/><div className="velvet-petal petal-three"/><div className="velvet-petal petal-four"/><div className="velvet-spark spark-one"/><div className="velvet-spark spark-two"/></div>
     <div className="art-geometry geometry-noir"><div className="noir-radar"/><div className="noir-sweep"/><i className="noir-tick tick-one"/><i className="noir-tick tick-two"/><i className="noir-tick tick-three"/></div>
     <div className="art-geometry geometry-mono"><div className="mono-grid"/><i className="mono-dot dot-one"/><i className="mono-dot dot-two"/><i className="mono-dot dot-three"/><i className="mono-dot dot-four"/></div>
    <svg className="art-lines" viewBox="0 0 460 460" aria-hidden="true">
      {theme==="editorial"&&<><path d="M230 230 L105 132 M230 230 L356 142 M230 230 L273 365" /><path className="line-soft" d="M105 132 L356 142 L273 365 L105 132" /></>}
      {theme==="orbit"&&<><path d="M230 230 C145 110 95 285 356 142 M230 230 C310 125 395 270 273 365" /><path className="line-soft" d="M105 132 C185 350 315 55 356 142" /></>}
      {theme==="crystal"&&<><path d="M230 230 L105 132 L356 142 L273 365 Z" /><path className="line-soft" d="M230 230 L356 142 M105 132 L273 365" /></>}
      {theme==="velvet"&&<><path d="M230 230 C90 180 120 60 230 230 C340 60 370 180 230 230 C390 320 300 420 230 230 C160 420 70 320 230 230" /><path className="line-soft" d="M105 132 C230 255 356 142 273 365" /></>}
      {theme==="noir"&&<><path d="M230 230 L105 132 M230 230 L356 142 M230 230 L273 365" /><path className="line-soft" d="M230 230 A145 145 0 0 1 356 142" /></>}
      {theme==="mono"&&<><path d="M230 230 L105 132 M230 230 L356 142 M230 230 L273 365" /><path className="line-soft" d="M105 132 L356 142 L273 365 Z" /></>}
    </svg>
     <div className="art-core"><span>{visual.core}</span><b>{theme==="crystal"?"PRISM":theme==="noir"?"PULSE":theme==="mono"?"WORK":"CORE"}</b></div>
     <div className="art-node node-one"><span>01</span><b>{visual.nodes[0]}</b></div>
     <div className="art-node node-two"><span>02</span><b>{visual.nodes[1]}</b></div>
     <div className="art-node node-three"><span>03</span><b>{visual.nodes[2]}</b></div>
    <div className="art-caption"><span>CREATIVE CODE / HUMAN SIGNAL</span><b>01—03</b></div>
   </div>
  </div>
 </div>
 <div className="scroll" aria-hidden="true"/></section>}
