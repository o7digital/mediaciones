import { useEffect } from 'react';
import Header from './components/Header';
import HeroLawhere from './components/HeroLawhere';
import QuienesSomos from './components/QuienesSomos';
import Mediacion from './components/Mediacion';
import Servicios from './components/Servicios';
import Contact from './components/Contact';
import Footer from './components/Footer';
import CookieConsent from './components/CookieConsent';
import OliviaChat from './components/OliviaChat';
import ServicePage from './components/ServicePage';
import { useLanguage } from './context/LanguageContext';
import {
  SOCIAL_IMAGE,
  getAlternatesForRoute,
  getSeoForRoute,
  getServiceSchema,
  organizationSchema,
} from './seo';
import { resolveRoute } from './routes';
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

function removeElement(selector) {
  document.querySelector(selector)?.remove();
}

export default function App({ pathname }) {
  const { lang } = useLanguage();
  const route = resolveRoute(pathname || (typeof window !== 'undefined' ? window.location.pathname : '/'));

  useEffect(() => {
    const seo = getSeoForRoute({ ...route, lang });

    document.documentElement.lang = lang;
    document.title = seo.title;
    setMeta('meta[name="description"]', { name: 'description' }, seo.description);

    const canonicalTag = ensureElement('link[rel="canonical"]', () => {
      const link = document.createElement('link');
      link.rel = 'canonical';
      return link;
    });
    canonicalTag.setAttribute('href', seo.canonicalUrl);

    document.querySelectorAll('link[rel="alternate"][hreflang]').forEach((element) => element.remove());
    getAlternatesForRoute(route).forEach(({ hreflang, href }) => {
      const link = ensureElement(`link[rel="alternate"][hreflang="${hreflang}"]`, () => {
        const element = document.createElement('link');
        element.rel = 'alternate';
        element.setAttribute('hreflang', hreflang);
        return element;
      });
      link.setAttribute('href', href);
    });

    setMeta('meta[property="og:title"]', { property: 'og:title' }, seo.title);
    setMeta('meta[property="og:description"]', { property: 'og:description' }, seo.ogDescription || seo.description);
    setMeta('meta[property="og:type"]', { property: 'og:type' }, 'website');
    setMeta('meta[property="og:url"]', { property: 'og:url' }, seo.canonicalUrl);
    setMeta('meta[property="og:image"]', { property: 'og:image' }, SOCIAL_IMAGE);
    setMeta('meta[property="og:image:width"]', { property: 'og:image:width' }, '1200');
    setMeta('meta[property="og:image:height"]', { property: 'og:image:height' }, '630');
    setMeta('meta[property="og:image:alt"]', { property: 'og:image:alt' }, 'Solís Cámara Mediadores Abogados y Asociados');
    setMeta('meta[property="og:site_name"]', { property: 'og:site_name' }, 'Solís Cámara');
    setMeta('meta[property="og:locale"]', { property: 'og:locale' }, seo.locale);
    setMeta('meta[name="twitter:card"]', { name: 'twitter:card' }, 'summary_large_image');
    setMeta('meta[name="twitter:title"]', { name: 'twitter:title' }, seo.title);
    setMeta('meta[name="twitter:description"]', { name: 'twitter:description' }, seo.ogDescription || seo.description);
    setMeta('meta[name="twitter:image"]', { name: 'twitter:image' }, SOCIAL_IMAGE);

    setJsonLd('organization-schema', organizationSchema);
    const serviceSchema = getServiceSchema(route);
    if (serviceSchema) setJsonLd('service-schema', serviceSchema);
    else removeElement('#service-schema');
  }, [lang, pathname]);

  if (route.type === 'service') {
    return (
      <>
        <ServicePage route={route} />
        <OliviaChat />
      </>
    );
  }

  return (
    <>
      <Header route={route} />
      <main>
        <HeroLawhere />
        <QuienesSomos />
        <Mediacion />
        <Servicios />
        <Contact />
      </main>
      <Footer route={route} />
      <CookieConsent />
      <OliviaChat />
    </>
  );
}
