import React from 'react';
import './Footer.css';
import { useLanguage } from '../context/LanguageContext';

export default function Footer() {
  const { copy, lang } = useLanguage();
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

      {lang === 'es' && (
        <section className="footer-seo">
          <h3>Servicios y Especialidades</h3>
          <p>
            Mediación certificada CDMX • Mediación con fe pública • Mediación civil • Mediación mercantil •
            Mediación familiar • Mediación bancaria • Solución de conflictos • Métodos alternativos de
            solución de conflictos • Abogados mediadores • Despacho jurídico CDMX • Mediación privada •
            Conciliación profesional • Mediación empresarial • Mediación en sector financiero • Mediación
            profesional • Mediadores autorizados • Servicios legales en Ciudad de México • Acuerdos legales •
            Consultoría legal • Mediación corporativa • Mediación comercial • Servicios jurídicos CDMX.
          </p>
        </section>
      )}

      {lang === 'en' && (
        <section className="footer-seo">
          <h3>Services & Specialties</h3>
          <p>
            Certified mediation Mexico City • Legal mediation services • Civil mediation • Commercial
            mediation • Family mediation • Banking mediation • Professional conflict resolution • Alternative
            dispute resolution • Mediation specialists • Legal consulting Mexico • Corporate mediation •
            Private mediation • Professional mediators • Authorized mediators • Dispute resolution services •
            Negotiation and settlement • Legal mediation experts • Bilingual mediation • Commercial conflict
            resolution • Financial mediation • Mediation consulting • Legal services Mexico City.
          </p>
        </section>
      )}

      <div className="footer-bottom">
        <p>{footer.rights}
          <a href="/aviso-privacidad.html" target="_blank" rel="noopener noreferrer"> {footer.privacy}</a>
        </p>
      </div>
    </footer>
  );
}
