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
      es: 'Solis Camara Mediadores Abogados y Asociados: sitio oficial. Especialistas en mediación certificada y asuntos legales en CDMX y a nivel nacional, civil, mercantil, familiar y bancaria.',
      en: 'Solis Camara Mediadores Abogados y Asociados: official site. Mediation and legal specialists in Mexico City and nationwide, covering civil, commercial, family, and banking matters.',
    };
    const metaDescription = descriptions[lang] || descriptions.es;
    const titles = {
      es: 'Solis Camara Mediadores Abogados y Asociados : Sitio Oficial | Especialistas en Mediaciones y Asuntos Legales en CDMX y a Nivel Nacional',
      en: 'Solis Camara Mediadores Abogados y Asociados: Official Site | Mediation and Legal Specialists in Mexico City and Nationwide',
    };
    const ogDescriptions = {
      es: 'Despacho especializado en mediación certificada, métodos alternativos de solución de conflictos y asesoría legal en CDMX y a nivel nacional.',
      en: 'Law firm specialized in certified mediation, alternative dispute resolution, and legal advisory in Mexico City and across Mexico.',
    };

    let descTag = document.querySelector('meta[name="description"]');
    if (!descTag) {
      descTag = document.createElement('meta');
      descTag.name = 'description';
      document.head.appendChild(descTag);
    }
    descTag.setAttribute('content', metaDescription);

    // Update canonical URL
    let canonicalTag = document.querySelector('link[rel="canonical"]');
    if (!canonicalTag) {
      canonicalTag = document.createElement('link');
      canonicalTag.rel = 'canonical';
      document.head.appendChild(canonicalTag);
    }
    canonicalTag.setAttribute('href', `https://scmabogados.com/${lang === 'en' ? 'en' : ''}`);

    // Organization Schema
    const organizationSchema = {
      '@context': 'https://schema.org',
      '@type': 'Organization',
      name: 'Solís Cámara Mediadores Abogados y Asociados',
      url: 'https://scmabogados.com',
      logo: 'https://scmabogados.com/img/logo.png',
      description: ogDescriptions[lang] || ogDescriptions.es,
      address: {
        '@type': 'PostalAddress',
        addressLocality: 'Ciudad de México',
        addressRegion: 'CDMX',
        addressCountry: 'MX',
      },
      contactPoint: {
        '@type': 'ContactPoint',
        contactType: 'customer service',
        availableLanguage: ['es', 'en'],
      },
      areaServed: {
        '@type': 'Country',
        name: 'México',
      },
    };

    let orgScript = document.getElementById('organization-schema');
    if (!orgScript) {
      orgScript = document.createElement('script');
      orgScript.id = 'organization-schema';
      orgScript.type = 'application/ld+json';
      document.head.appendChild(orgScript);
    }
    orgScript.textContent = JSON.stringify(organizationSchema);

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
      document.title = titles.es;
    } else {
      document.title = titles.en;
    }

    const ensureMeta = (selector, attrs) => {
      let el = document.querySelector(selector);
      if (!el) {
        el = document.createElement('meta');
        Object.entries(attrs).forEach(([k, v]) => el.setAttribute(k, v));
        document.head.appendChild(el);
      }
      return el;
    };
    const ogTitle = ensureMeta('meta[property="og:title"]', { property: 'og:title' });
    ogTitle.setAttribute('content', titles[lang]);

    const ogDesc = ensureMeta('meta[property="og:description"]', { property: 'og:description' });
    ogDesc.setAttribute('content', ogDescriptions[lang] || ogDescriptions.es);

    // Update Twitter Card meta tags
    const ensureTwitterMeta = (name, content) => {
      let el = document.querySelector(`meta[name="${name}"]`);
      if (!el) {
        el = document.createElement('meta');
        el.setAttribute('name', name);
        document.head.appendChild(el);
      }
      el.setAttribute('content', content);
    };
    
    ensureTwitterMeta('twitter:title', titles[lang]);
    ensureTwitterMeta('twitter:description', ogDescriptions[lang] || ogDescriptions.es);
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
