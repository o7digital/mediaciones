import React, { useState } from 'react';
import { useLanguage } from '../context/LanguageContext';
import { getLanguagePath } from '../routes';
import './Header.css';

export default function Header({ route }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, languages, copy } = useLanguage();
  const nav = copy.header.nav;
  const menuLabel = menuOpen ? copy.header.menuLabels.close : copy.header.menuLabels.open;
  const homePath = getLanguagePath({ type: 'home' }, lang);

  return (
    <header className="header">
      <div className="header-container">
        <a className="logo" href={homePath} aria-label={`${copy.header.logo} — ${nav.home}`}>
          {copy.header.logo}
        </a>

        <div className="header-actions">
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <a href={`${homePath}#home`} onClick={() => setMenuOpen(false)}>{nav.home}</a>
            <a href={`${homePath}#quienes-somos`} onClick={() => setMenuOpen(false)}>{nav.about}</a>
            <a href={`${homePath}#mediacion`} onClick={() => setMenuOpen(false)}>{nav.mediation}</a>
            <a href={`${homePath}#servicios`} onClick={() => setMenuOpen(false)}>{nav.services}</a>
            <a href={`${homePath}#contacto`} onClick={() => setMenuOpen(false)}>{nav.contact}</a>
          </nav>

          <div className="lang-switch" aria-label={copy.header.languageLabel}>
            {languages.map((option) => (
              <a
                key={option.code}
                className={`lang-btn ${lang === option.code ? 'active' : ''}`}
                href={getLanguagePath(route, option.code)}
                hrefLang={option.code === 'es' ? 'es-MX' : 'en'}
                lang={option.code}
                aria-current={lang === option.code ? 'page' : undefined}
              >
                {option.label}
              </a>
            ))}
          </div>

          <button
            className="hamburger"
            onClick={() => setMenuOpen(!menuOpen)}
            aria-label={menuLabel}
          >
            ☰
          </button>
        </div>
      </div>

      {menuOpen && (
        <div className="mobile-menu">
          <div className="lang-switch" aria-label={copy.header.languageLabel}>
            {languages.map((option) => (
              <a
                key={option.code}
                className={`lang-btn ${lang === option.code ? 'active' : ''}`}
                href={getLanguagePath(route, option.code)}
                hrefLang={option.code === 'es' ? 'es-MX' : 'en'}
                lang={option.code}
                aria-current={lang === option.code ? 'page' : undefined}
              >
                {option.label}
              </a>
            ))}
          </div>
          <a href={`${homePath}#home`} onClick={() => setMenuOpen(false)}>{nav.home}</a>
          <a href={`${homePath}#quienes-somos`} onClick={() => setMenuOpen(false)}>{nav.about}</a>
          <a href={`${homePath}#mediacion`} onClick={() => setMenuOpen(false)}>{nav.mediation}</a>
          <a href={`${homePath}#servicios`} onClick={() => setMenuOpen(false)}>{nav.services}</a>
          <a href={`${homePath}#contacto`} onClick={() => setMenuOpen(false)}>{nav.contact}</a>
        </div>
      )}
    </header>
  );
}
