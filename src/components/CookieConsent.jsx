import { useEffect, useState } from 'react';
import './CookieConsent.css';

export default function CookieConsent() {
  const [visible, setVisible] = useState(false);

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
    <div className="cookie-consent" role="dialog" aria-live="polite" aria-label="Aviso de cookies">
      <div className="cookie-content">
        <p>
          Usamos cookies para mejorar tu experiencia, analizar el tráfico y personalizar contenido.
          Consulta el <a href="/aviso-privacidad.html" target="_blank" rel="noopener noreferrer">Aviso de Privacidad</a> para más información.
        </p>
        <div className="cookie-actions">
          <button className="cookie-btn primary" onClick={accept}>Aceptar</button>
          <a className="cookie-link" href="/aviso-privacidad.html" target="_blank" rel="noopener noreferrer">Más información</a>
        </div>
      </div>
    </div>
  );
}
