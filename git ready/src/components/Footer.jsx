import Reveal from './Reveal';
import { SITE } from '../data/site';
import { TEAM } from '../data/team';
import { PROJECTS } from '../data/projects';
import { go } from '../lib/utils';

const NAV=[['About','about'],['Team','team'],['Projects','projects'],['Skills','skills'],['Themes','themes'],['Contact','contact']];

export default function Footer(){
  return <footer className="site-footer">
    <div className="wrap">
      <Reveal className="footer-top">
        <div className="footer-brand">
          <a className="footer-logo" href="#home" onClick={e=>{e.preventDefault();go('home')}}>4ETHR<span aria-hidden="true">/</span></a>
          <p>{SITE.tagline}</p>
          <span className="footer-kicker">NESCOE Hackathon · 2026</span>
          <div className="footer-socials">{Object.entries(SITE.socials).map(([label,url])=><a key={label} href={url} target="_blank" rel="noopener noreferrer">{label} ↗</a>)}</div>
          <small className="social-manager">{SITE.socialManager}</small>
        </div>
        <div className="footer-col">
          <h3>Explore</h3>
          <div className="footer-links">{NAV.map(([label,id])=><a key={id} href={'#'+id} onClick={e=>{e.preventDefault();go(id)}}>{label}</a>)}</div>
        </div>
        <div className="footer-col">
          <h3>The team</h3>
          <div className="footer-links">{TEAM.map(m=><a key={m.id} href="#team" onClick={e=>{e.preventDefault();go('team')}}>{m.name}</a>)}</div>
        </div>
        <div className="footer-col">
          <h3>Selected work</h3>
          <div className="footer-links">{PROJECTS.slice(0,3).map(p=>p.url
            ? <a key={p.id} href={p.url} target="_blank" rel="noopener noreferrer">{p.title}</a>
            : <span className="footer-placeholder" key={p.id}>{p.title}<small>Link coming soon</small></span>)}</div>
        </div>
      </Reveal>
      <Reveal className="footer-bottom" d={.12}>
        <span>© 2026 {SITE.name} · Built by the team, in public spirit.</span>
        <span>{SITE.email?<a href={'mailto:'+SITE.email}>{SITE.email}</a>:<span className="footer-placeholder inline">Contact details coming soon</span>}</span>
      </Reveal>
    </div>
  </footer>
}