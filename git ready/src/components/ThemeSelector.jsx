import Reveal from './Reveal';
import { THEMES } from '../data/themes';

export default function ThemeSelector({theme,setTheme}){return <section id="themes"><div className="wrap"><Reveal as="h2">Pick a mood</Reveal>
 <div className="themes">{THEMES.map((t,i)=><Reveal as="button" key={t.id} d={i*.08} className={"glass th "+(theme===t.id?"on":"")} aria-pressed={theme===t.id} onClick={()=>setTheme(t.id)}>
  <div className="sw">{t.sw.map(c=><i key={c} style={{background:c}}/>)}</div><b>{t.name}</b></Reveal>)}</div></div></section>}
