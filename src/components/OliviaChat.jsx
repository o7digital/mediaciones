import { useEffect, useRef, useState } from 'react';
import './OliviaChat.css';
import { useLanguage } from '../context/LanguageContext';

const API_BASE_URL = (import.meta.env.VITE_OLIVIA_API_URL || 'https://olivia-ai.o7digital.com').replace(/\/$/, '');
const API_URL = API_BASE_URL.endsWith('/api/olivia/chat')
  ? API_BASE_URL
  : `${API_BASE_URL}/api/olivia/chat`;
const IDENTITY_URL = `${API_BASE_URL.replace(/\/api\/olivia\/chat$/, '')}/api/widget/identity`;
const CLIENT_CODE = import.meta.env.VITE_OLIVIA_CLIENT_CODE || 'scmabogados';

const copy = {
  es: {
    title: 'Olivia IA',
    status: 'Asistente virtual',
    welcome: 'Hola, soy Olivia. Puedo orientarte sobre mediación certificada y servicios legales.',
    placeholder: 'Escribe tu consulta...',
    send: 'Enviar',
    open: 'Abrir Olivia IA',
    close: 'Cerrar Olivia IA',
    loading: 'Olivia está escribiendo...',
    error: 'No pude responder en este momento. Inténtalo de nuevo en unos instantes.',
    consent: 'Acepto el tratamiento de mis datos conforme al Aviso de Privacidad.',
    consentRequired: 'Acepta el Aviso de Privacidad para iniciar la conversación.',
  },
  en: {
    title: 'Olivia AI',
    status: 'Virtual assistant',
    welcome: 'Hello, I am Olivia. I can guide you about certified mediation and legal services.',
    placeholder: 'Write your question...',
    send: 'Send',
    open: 'Open Olivia AI',
    close: 'Close Olivia AI',
    loading: 'Olivia is typing...',
    error: 'I could not answer right now. Please try again shortly.',
    consent: 'I accept the processing of my data under the Privacy Notice.',
    consentRequired: 'Accept the Privacy Notice to start the conversation.',
  },
};

export default function OliviaChat() {
  const { lang } = useLanguage();
  const text = copy[lang] || copy.es;
  const [open, setOpen] = useState(false);
  const [accepted, setAccepted] = useState(false);
  const [input, setInput] = useState('');
  const [loading, setLoading] = useState(false);
  const [widgetIdentity, setWidgetIdentity] = useState('');
  const [messages, setMessages] = useState([{ role: 'assistant', content: text.welcome }]);
  const visitorId = useRef('');

  useEffect(() => {
    visitorId.current = window.crypto?.randomUUID?.() || `visitor-${Date.now()}`;
    try {
      setAccepted(localStorage.getItem('oliviaPrivacyConsent') === 'accepted');
    } catch (_) {
      setAccepted(false);
    }
  }, []);

  useEffect(() => {
    let cancelled = false;
    fetch(IDENTITY_URL, { cache: 'no-store' })
      .then((response) => response.json().then((data) => ({ response, data })))
      .then(({ response, data }) => {
        if (!response.ok) throw new Error(data.error || 'Olivia identity unavailable');
        if (!cancelled && data.clientCode === CLIENT_CODE) setWidgetIdentity(data.identity);
      })
      .catch(() => {
        if (!cancelled) setWidgetIdentity('');
      });
    return () => { cancelled = true; };
  }, []);

  useEffect(() => {
    setMessages([{ role: 'assistant', content: text.welcome }]);
  }, [text.welcome]);

  const acceptConsent = () => {
    setAccepted(true);
    try { localStorage.setItem('oliviaPrivacyConsent', 'accepted'); } catch (_) {}
  };

  const sendMessage = async (event) => {
    event.preventDefault();
    const message = input.trim();
    if (!message || loading) return;
    if (!accepted) {
      setMessages((current) => [...current, { role: 'assistant', content: text.consentRequired }]);
      return;
    }
    if (!widgetIdentity) {
      setMessages((current) => [...current, { role: 'assistant', content: text.error }]);
      return;
    }

    const history = messages.slice(-12);
    setInput('');
    setMessages((current) => [...current, { role: 'user', content: message }]);
    setLoading(true);

    try {
      const response = await fetch(API_URL, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
          'X-Olivia-Widget-Identity': widgetIdentity,
        },
        body: JSON.stringify({
          clientCode: CLIENT_CODE,
          visitorId: visitorId.current,
          language: lang,
          message,
          source: 'website',
          history,
          metadata: {
            pageUrl: window.location.href,
            pageTitle: document.title,
            pageContent: document.body.innerText.replace(/\s+/g, ' ').slice(0, 5000),
            dataConsent: true,
          },
        }),
      });
      const data = await response.json();
      if (!response.ok) throw new Error(data.error || 'Olivia request failed');
      setMessages((current) => [...current, { role: 'assistant', content: data.reply || data.message || text.error }]);
    } catch (_) {
      setMessages((current) => [...current, { role: 'assistant', content: text.error }]);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="olivia-chat">
      {open && (
        <section className="olivia-panel" aria-label={text.title}>
          <header className="olivia-header">
            <div>
              <strong>{text.title}</strong>
              <span>{text.status}</span>
            </div>
            <button type="button" onClick={() => setOpen(false)} aria-label={text.close}>×</button>
          </header>
          <div className="olivia-messages" aria-live="polite">
            {messages.map((item, index) => (
              <p className={`olivia-message ${item.role}`} key={`${item.role}-${index}`}>{item.content}</p>
            ))}
            {loading && <p className="olivia-message assistant">{text.loading}</p>}
          </div>
          <div className="olivia-consent">
            <label>
              <input type="checkbox" checked={accepted} onChange={(event) => event.target.checked ? acceptConsent() : setAccepted(false)} />
              <span>{text.consent} <a href="/aviso-privacidad.html" target="_blank" rel="noopener noreferrer">Aviso</a></span>
            </label>
          </div>
          <form className="olivia-form" onSubmit={sendMessage}>
            <input value={input} onChange={(event) => setInput(event.target.value)} placeholder={text.placeholder} aria-label={text.placeholder} />
            <button type="submit" disabled={loading}>{text.send}</button>
          </form>
        </section>
      )}
      <button type="button" className="olivia-toggle" onClick={() => setOpen((current) => !current)} aria-label={open ? text.close : text.open}>
        <span aria-hidden="true">✦</span> {open ? text.close : text.title}
      </button>
    </div>
  );
}