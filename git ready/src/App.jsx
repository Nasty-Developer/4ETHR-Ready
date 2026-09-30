import { useState, useEffect } from 'react';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Team from './components/Team';
import MemberProfile from './components/MemberProfile';
import Projects from './components/Projects';
import Skills from './components/Skills';
import ThemeSelector from './components/ThemeSelector';
import Contact from './components/Contact';
import Chatbot from './components/Chatbot';
import FloatingControls from './components/FloatingControls';
import Footer from './components/Footer';
import { byId } from './data/team';
import { store, go } from './lib/utils';

export default function App() {
  const [theme, setTheme] = useState(() => store.get('4e-theme') || 'editorial');
  const [mode, setMode] = useState(() => store.get('4e-mode') || 'light');
  const [filter, setFilter] = useState('all');
  const [prof, setProf] = useState(null);
  const [chat, setChat] = useState(false);
  const [top, setTop] = useState(false);

  useEffect(() => {
    const r = document.documentElement;
    r.dataset.theme = theme; r.dataset.mode = mode;
    store.set('4e-theme', theme); store.set('4e-mode', mode);
  }, [theme, mode]);

  useEffect(() => {
    const f = () => setTop(window.scrollY > 500);
    window.addEventListener('scroll', f, { passive: true });
    return () => window.removeEventListener('scroll', f);
  }, []);

  useEffect(() => {
    const h = () => {
      const m = location.hash.match(/^#team\/(\w+)/);
      setProf(m && byId(m[1]) ? m[1] : null);
    };
    h();
    window.addEventListener('hashchange', h);
    return () => window.removeEventListener('hashchange', h);
  }, []);

  const open = (id) => { try { history.replaceState(null, '', '#team/' + id); } catch (e) {} setProf(id); };
  const close = () => { try { history.replaceState(null, '', '#team'); } catch (e) {} setProf(null); };
  const explore = (id) => { setFilter(id); go('projects'); };

  return (
    <>
      <Navbar mode={mode} setMode={setMode} />
      <main>
         <Hero theme={theme} /><About />
        <Team open={open} onExplore={explore} />
        <Projects filter={filter} setFilter={setFilter} />
        <Skills />
        <ThemeSelector theme={theme} setTheme={setTheme} />
        <Contact />
      </main>
      <Footer />
      {prof && <MemberProfile m={byId(prof)} close={close} />}
      {chat && <Chatbot close={() => setChat(false)} />}
      <FloatingControls chat={chat} setChat={setChat} showTop={top} />
    </>
  );
}
