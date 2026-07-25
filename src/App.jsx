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
import { SITE_URL, SOCIAL_IMAGE, alternates, faqSchema, organizationSchema, pageSeo } from './seo';
import './index.css';

function ensureElement(selector, createElement) {
  let element = document.querySelector(selector);
  if (!element) {
    element = createElement();
    document.head.appendChild(element);
  }
  return element;
}

function setMeta(selector, attrs, content) {
  const element = ensureElement(selector, () => {
    const meta = document.createElement('meta');
    Object.entries(attrs).forEach(([key, value]) => meta.setAttribute(key, value));
    return meta;
  });
  element.setAttribute('content', content);
}

function setJsonLd(id, data) {
  const script = ensureElement(`#${id}`, () => {
    const element = document.createElement('script');
    element.id = id;
    element.type = 'application/ld+json';
    return element;
  });
  script.textContent = JSON.stringify(data);
}

export default function App() {
  const { lang } = useLanguage();

  useEffect(() => {
    const seo = pageSeo[lang] || pageSeo.es;
    const canonicalUrl = `${SITE_URL}${seo.canonicalPath}`;

    document.documentElement.lang = lang;
    document.title = seo.title;
    setMeta('meta[name="description"]', { name: 'description' }, seo.description);

    const canonicalTag = ensureElement('link[rel="canonical"]', () => {
      const link = document.createElement('link');
      link.rel = 'canonical';
      return link;
    });
    canonicalTag.setAttribute('href', canonicalUrl);

    alternates.forEach(({ hreflang, href }) => {
      const link = ensureElement(`link[rel="alternate"][hreflang="${hreflang}"]`, () => {
        const element = document.createElement('link');
        element.rel = 'alternate';
        element.setAttribute('hreflang', hreflang);
        return element;
      });
      link.setAttribute('href', href);
    });

    setMeta('meta[property="og:title"]', { property: 'og:title' }, seo.title);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, seo.ogDescription);
    setMeta('meta[property="og:type"]', { property: 'og:type' }, 'website');
    setMeta('meta[property="og:url"]', { property: 'og:url' }, canonicalUrl);
    setMeta('meta[property="og:image"]', { property: 'og:image' }, SOCIAL_IMAGE);
    setMeta('meta[property="og:image:width"]', { property: 'og:image:width' }, '1200');
    setMeta('meta[property="og:image:height"]', { property: 'og:image:height' }, '630');
    setMeta('meta[property="og:locale"]', { property: 'og:locale' }, seo.locale);
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, seo.title);
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, seo.ogDescription);
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, SOCIAL_IMAGE);

    setJsonLd('organization-schema', organizationSchema);
    setJsonLd('faq-schema', faqSchema[lang] || faqSchema.es);
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
