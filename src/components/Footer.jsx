import React from 'react';
import './Footer.css';
import { useLanguage } from '../context/LanguageContext';
import { HOME_ROUTES } from '../routes';

const keywordRows = {
  es: [
    [
      'mediacion certificada CDMX',
      'mediacion con fe publica Mexico CDMX',
      'mediacion civil y mercantil Mexico CDMX',
      'mediacion familiar Mexico CDMX',
      'mediacion bancaria Mexico CDMX',
      'mediacion financiera Mexico CDMX',
    ],
    [
      'metodos alternativos de solucion de conflictos Mexico CDMX',
      'abogados mediadores Mexico CDMX',
      'servicios legales CDMX',
      'asesoria legal CDMX',
      'solucion de conflictos Mexico CDMX',
      'mediacion privada Mexico CDMX',
    ],
    [
      'mediadores certificados Mexico CDMX',
      'mediacion corporativa Mexico CDMX',
      'mediacion familiar CDMX',
      'mediacion mercantil CDMX',
      'despacho de mediacion Mexico CDMX',
      'Solis Camara Mediadores Abogados y Asociados Mexico CDMX',
    ],
  ],
  en: [
    [
      'certified mediation Mexico City',
      'legal mediation services Mexico CDMX',
      'alternative dispute resolution Mexico CDMX',
      'civil and commercial mediation Mexico CDMX',
      'family mediation Mexico CDMX',
    ],
    [
      'banking and financial mediation Mexico CDMX',
      'mediation specialists Mexico CDMX',
      'legal services Mexico City',
      'private mediation Mexico CDMX',
      'conflict resolution Mexico CDMX',
    ],
  ],
};

export default function Footer() {
  const { copy, lang } = useLanguage();
  const footer = copy.footer;
  const homePath = HOME_ROUTES[lang];
  const rows = keywordRows[lang] || keywordRows.es;

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
            <li><a href={`${homePath}#home`}>{footer.nav.home}</a></li>
            <li><a href={`${homePath}#quienes-somos`}>{footer.nav.about}</a></li>
            <li><a href={`${homePath}#mediacion`}>{footer.nav.mediation}</a></li>
            <li><a href={`${homePath}#servicios`}>{footer.nav.services}</a></li>
            <li><a href={`${homePath}#contacto`}>{footer.nav.contact}</a></li>
          </ul>
        </div>

        {/* Columna derecha */}
        <div className="footer-col">
          <h4>{footer.contactTitle}</h4>
          <address>
            <p>Tel: <a href="tel:+525546167798">+52 55 4616 7798</a></p>
            <p>Email: <a href="mailto:info@scmabogados.com">info@scmabogados.com</a></p>
            <p>
              <a href="https://www.google.com/maps/search/?api=1&query=R%C3%ADo+P%C3%A1nuco+43%2C+Col.+Renacimiento%2C+Cuauht%C3%A9moc%2C+CDMX" target="_blank" rel="noopener noreferrer">
                Río Pánuco 43, Col. Renacimiento, Cuauhtémoc, CDMX
              </a>
            </p>
          </address>
        </div>
      </div>

      <div className="footer-bottom">
        <p>{footer.rights}
          <a href="/aviso-privacidad.html" target="_blank" rel="noopener noreferrer"> {footer.privacy}</a>
        </p>
      </div>

      <section className="footer-keywords" aria-label="SEO keywords">
        {rows.map((row) => (
          <p key={row.join('|')}>{row.join(' • ')}</p>
        ))}
      </section>
    </footer>
  );
}
