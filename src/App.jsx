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
