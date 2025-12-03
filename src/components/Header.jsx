import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';
import { useLanguage } from '../context/LanguageContext';
import './Header.css';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);
  const { lang, setLang, languages, copy } = useLanguage();
  const nav = copy.header.nav;
  const menuLabel = menuOpen ? copy.header.menuLabels.close : copy.header.menuLabels.open;

  return (
    <header className="header">
      <div className="header-container">
        <h1 className="logo">{copy.header.logo}</h1>

        <div className="header-actions">
          <nav className={`nav ${menuOpen ? 'open' : ''}`}>
            <a href="#home" onClick={() => setMenuOpen(false)}>{nav.home}</a>
            <a href="#quienes-somos" onClick={() => setMenuOpen(false)}>{nav.about}</a>
            <a href="#mediacion" onClick={() => setMenuOpen(false)}>{nav.mediation}</a>
            <a href="#servicios" onClick={() => setMenuOpen(false)}>{nav.services}</a>
            <a href="#contacto" onClick={() => setMenuOpen(false)}>{nav.contact}</a>
          </nav>

          <div className="social-icons">
            <a href="#" aria-label="Facebook"><FaFacebookF /></a>
            <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
            <a href="#" aria-label="TikTok"><FaTiktok /></a>
          </div>

          <div className="lang-switch" aria-label={copy.header.languageLabel}>
            {languages.map((option) => (
              <button
                key={option.code}
                type="button"
                className={`lang-btn ${lang === option.code ? 'active' : ''}`}
                onClick={() => setLang(option.code)}
                aria-pressed={lang === option.code}
              >
                {option.label}
              </button>
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
              <button
                key={option.code}
                type="button"
                className={`lang-btn ${lang === option.code ? 'active' : ''}`}
                onClick={() => setLang(option.code)}
                aria-pressed={lang === option.code}
              >
                {option.label}
              </button>
            ))}
          </div>
          <a href="#home" onClick={() => setMenuOpen(false)}>{nav.home}</a>
          <a href="#quienes-somos" onClick={() => setMenuOpen(false)}>{nav.about}</a>
          <a href="#mediacion" onClick={() => setMenuOpen(false)}>{nav.mediation}</a>
          <a href="#servicios" onClick={() => setMenuOpen(false)}>{nav.services}</a>
          <a href="#contacto" onClick={() => setMenuOpen(false)}>{nav.contact}</a>
        </div>
      )}
    </header>
  );
}
