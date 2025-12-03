import React from 'react';
import './Footer.css';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { copy } = useLanguage();
  const footer = copy.footer;

  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna izquierda */}
        <div className="footer-col">
          <h3>{footer.brand}</h3>
          <p>{footer.description}</p>
        </div>

        {/* Columna central */}
        <div className="footer-col">
          <h4>{footer.linksTitle}</h4>
          <ul>
            <li><a href="#home">{footer.nav.home}</a></li>
            <li><a href="#quienes-somos">{footer.nav.about}</a></li>
            <li><a href="#mediacion">{footer.nav.mediation}</a></li>
            <li><a href="#servicios">{footer.nav.services}</a></li>
            <li><a href="#contacto">{footer.nav.contact}</a></li>
          </ul>
        </div>

        {/* Columna derecha */}
        <div className="footer-col">
          <h4>{footer.contactTitle}</h4>
          <p>Tel: +52 55 4616 7798</p>
          <p>Email: <a href="mailto:info@scmabogados.com">info@scmabogados.com</a></p>
          <p>Río Pánuco 43, Col. Renacimiento, Cuauhtémoc, CDMX</p>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{footer.rights}
          <a href="/aviso-privacidad.html" target="_blank" rel="noopener noreferrer"> {footer.privacy}</a>
        </p>
      </div>
    </footer>
  );
}
