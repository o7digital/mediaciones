import { useEffect } from 'react';
import Header from './components/Header';
import HeroLawhere from './components/HeroLawhere';
import QuienesSomos from './components/QuienesSomos';
import Mediacion from './components/Mediacion';
import Servicios from './components/Servicios';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import { useLanguage } from './context/LanguageContext';
import './index.css';

export default function App() {
  const { lang } = useLanguage();

  useEffect(() => {
    document.documentElement.lang = lang;
    if (lang === 'es') {
      document.title = 'Sitio Oficial - Solís Cámara Mediadores Abogados y Asociados - Especialistas en Mediaciones';
    } else {
      document.title = 'Official Website - Solis Camara Mediators & Attorneys - Mediation Specialists';
    }
  }, [lang]);

  return (
    <>
      <Header />
      <main>
        <HeroLawhere />
        <QuienesSomos />
        <Mediacion />
        <Servicios />
        <Testimonials />
        <Contact />
        <Footer />
      </main>
      <CookieConsent />
    </>
  );
}
