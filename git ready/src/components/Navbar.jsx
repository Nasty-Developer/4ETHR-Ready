import { useState, useEffect } from 'react';
import MobileMenu from './MobileMenu';
import { go } from '../lib/utils';

export default function Navbar({ mode, setMode }) {
  const [open, setOpen] = useState(false);
  const [sm, setSm] = useState(false);
  useEffect(() => {
    const f = () => setSm(window.scrollY > 40);
    f();
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);
  return (
    <nav className={'glass ' + (sm ? 'sm' : '')} aria-label="Main">
      <a className="logo" href="#home" onClick={(e) => { e.preventDefault(); go('home'); }}>4ETHR</a>
      <MobileMenu open={open} setOpen={setOpen} mode={mode} setMode={setMode} />
      <button className="burger" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} onClick={() => setOpen(!open)}>
        <span className={'burger-lines ' + (open ? 'active' : '')} aria-hidden="true"><i/><i/><i/></span>
      </button>
    </nav>
  );
}
