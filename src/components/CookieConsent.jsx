import { useEffect, useState } from 'react';
import './CookieConsent.css';
import { useLanguage } from '../context/LanguageContext';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);
  const { copy } = useLanguage();
  const cookie = copy.cookie;

  useEffect(() => {
    try {
      const stored = localStorage.getItem('cookieConsent');
      if (!stored) setVisible(true);
    } catch (_) {
      setVisible(true);
    }
  }, []);

  const accept = () => {
    try { localStorage.setItem('cookieConsent', 'accepted'); } catch (_) {}
    setVisible(false);
  };

  if (!visible) return null;

  return (
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label={cookie.dialogLabel}>
      <div className="cookie-content">
        <p>
          {cookie.message}
        </p>
        <div className="cookie-actions">
          <button className="cookie-btn primary" onClick={accept}>{cookie.accept}</button>
          <a className="cookie-link" href="/aviso-privacidad.html" target="_blank" rel="noopener noreferrer">{cookie.moreInfo}</a>
        </div>
      </div>
    </div>
  );
}
