import { SITE } from '../data/site';

// Stacked bottom-right: back-to-top, 4ETHR AI, WhatsApp (only when a number is set in data/site.js)
export default function FloatingControls({ chat, setChat, showTop }) {
  const whatsappNumber = SITE.whatsapp.replace(/\D/g, '');
  const whatsappHref = whatsappNumber.length === 10 ? 'https://wa.me/91' + whatsappNumber : 'https://wa.me/' + whatsappNumber;
  return (
    <>
      {SITE.whatsapp && (
        <a className="fl f-wa glass" href={whatsappHref + '?text=' + encodeURIComponent(SITE.waText)} target="_blank" rel="noopener noreferrer" aria-label="Chat with 4ETHR on WhatsApp" title="Chat with 4ETHR on WhatsApp">WA</a>
      )}
      <button className="fl f-ai" onClick={() => setChat(!chat)} aria-label="Open 4ETHR AI assistant" aria-expanded={chat}>AI</button>
      <button className={'fl f-top glass ' + (showTop ? '' : 'h')} onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })} aria-label="Back to top">↑</button>
    </>
  );
}
