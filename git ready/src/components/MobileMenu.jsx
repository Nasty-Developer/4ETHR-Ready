import { go } from '../lib/utils';

export const NAV_LINKS = ['About', 'Team', 'Projects', 'Skills', 'Themes', 'Contact'];

// Link list: horizontal on desktop, dropdown panel on mobile (toggled via `open`).
export default function MobileMenu({ open, setOpen, mode, setMode }) {
  return (
    <div className={'links ' + (open ? 'open' : '')}>
      {NAV_LINKS.map((l) => (
        <a key={l} href={'#' + l.toLowerCase()} onClick={(e) => { e.preventDefault(); setOpen(false); go(l.toLowerCase()); }}>{l}</a>
      ))}
      <button className="mode" onClick={() => setMode(mode === 'dark' ? 'light' : 'dark')} aria-label={'Switch to ' + (mode === 'dark' ? 'light' : 'dark') + ' mode'}>
        {mode === 'dark' ? 'Light' : 'Dark'}
      </button>
    </div>
  );
}
