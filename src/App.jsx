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
    const descriptions = {
      es: 'Mediación certificada en CDMX con fe pública: abogados mediadores especializados en solución de conflictos civiles, mercantiles, familiares y financieros.',
      en: 'Certified mediation in Mexico City: legal mediation specialists offering alternative dispute resolution for civil, commercial, family, and financial matters.',
    };
    const metaDescription = descriptions[lang] || descriptions.es;
    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.name = 'description';
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', metaDescription);

    const faqEs = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: '¿Qué incluye la mediación certificada en CDMX?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Incluye mediación privada con fe pública, acuerdos ejecutables y solución profesional de conflictos civiles, mercantiles, familiares y bancarios en Ciudad de México.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Ofrecen métodos alternativos de solución de conflictos?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Sí, somos especialistas en métodos alternativos de solución de conflictos, conciliación y mediación corporativa, familiar y mercantil con abogados mediadores autorizados.',
          },
        },
        {
          '@type': 'Question',
          name: '¿Atienden mediación familiar y mercantil?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Atendemos mediación familiar, civil, mercantil y bancaria con servicios legales especializados y orientación personalizada para acuerdos rápidos y seguros.',
          },
        },
      ],
    };

    const faqEn = {
      '@context': 'https://schema.org',
      '@type': 'FAQPage',
      mainEntity: [
        {
          '@type': 'Question',
          name: 'What does certified mediation in Mexico City include?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'It covers certified private mediation with public faith, enforceable agreements, and professional conflict resolution for civil, commercial, family, and banking matters in Mexico City.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you provide alternative dispute resolution methods?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'Yes, we specialize in alternative dispute resolution methods, corporate and family mediation, and bilingual mediation services with authorized legal mediation specialists.',
          },
        },
        {
          '@type': 'Question',
          name: 'Do you handle family and commercial mediation?',
          acceptedAnswer: {
            '@type': 'Answer',
            text: 'We handle family, civil, commercial, and financial mediation with specialized legal services and personalized guidance for quick, secure settlements.',
          },
        },
      ],
    };

    const faqData = lang === 'es' ? faqEs : faqEn;
    let faqScript = document.getElementById('faq-schema');
    if (!faqScript) {
      faqScript = document.createElement('script');
      faqScript.id = 'faq-schema';
      faqScript.type = 'application/ld+json';
      document.head.appendChild(faqScript);
    }
    faqScript.textContent = JSON.stringify(faqData);

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
