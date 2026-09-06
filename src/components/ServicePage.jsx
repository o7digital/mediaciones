import Header from './Header';
import Footer from './Footer';
import CookieConsent from './CookieConsent';
import { useLanguage } from '../context/LanguageContext';
import { SERVICE_ROUTES } from '../routes';
import './ServicePage.css';

const labels = {
  es: {
    home: 'Inicio',
    services: 'Servicios',
    scope: 'Asuntos que atendemos',
    approach: 'Cómo trabajamos',
    benefits: 'Alcance del servicio',
    related: 'Otros servicios',
    contactTitle: 'Hablemos de su caso',
    contactText: 'Explíquenos brevemente la situación para identificar la ruta legal o de mediación más adecuada.',
    contactButton: 'Contactar al despacho',
  },
  en: {
    home: 'Home',
    services: 'Services',
    scope: 'Matters we handle',
    approach: 'How we work',
    benefits: 'Service scope',
    related: 'Other services',
    contactTitle: 'Let’s discuss your matter',
    contactText: 'Tell us briefly about the situation so we can identify the most appropriate legal or mediation path.',
    contactButton: 'Contact the firm',
  },
};

export default function ServicePage({ route }) {
  const { copy, lang } = useLanguage();
  const service = copy.services.items[route.serviceIndex];
  const text = labels[lang];

  return (
    <>
      <Header route={route} />
      <main className="service-page">
        <nav className="breadcrumbs" aria-label="Breadcrumb">
          <a href={lang === 'en' ? '/en/' : '/'}>{text.home}</a>
          <span aria-hidden="true">/</span>
          <a href={`${lang === 'en' ? '/en/' : '/'}#servicios`}>{text.services}</a>
          <span aria-hidden="true">/</span>
          <span aria-current="page">{service.titulo}</span>
        </nav>

        <article className="service-article">
          <header className="service-hero">
            <p className="service-eyebrow">Solís Cámara · {text.services}</p>
            <h1>{service.titulo}</h1>
            <p className="service-lead">{service.detalles}</p>
          </header>

          <div className="service-content-grid">
            <section>
              <h2>{text.scope}</h2>
              <ul>
                {service.bullets.map((item) => <li key={item}>{item}</li>)}
              </ul>
            </section>

            <section>
              <h2>{text.approach}</h2>
              <ol>
                {copy.about.methodology.map((item) => <li key={item}>{item}</li>)}
              </ol>
            </section>
          </div>

          <section className="service-details">
            <h2>{text.benefits}</h2>
            {service.modal.map((paragraph) => <p key={paragraph}>{paragraph}</p>)}
          </section>

          <aside className="service-contact">
            <h2>{text.contactTitle}</h2>
            <p>{text.contactText}</p>
            <a className="service-contact-button" href={`${lang === 'en' ? '/en/' : '/'}#contacto`}>
              {text.contactButton}
            </a>
          </aside>

          <nav className="related-services" aria-label={text.related}>
            <h2>{text.related}</h2>
            <ul>
              {SERVICE_ROUTES.filter((item) => item.serviceIndex !== route.serviceIndex).map((item) => (
                <li key={item[lang]}>
                  <a href={item[lang]}>{copy.services.items[item.serviceIndex].titulo}</a>
                </li>
              ))}
            </ul>
          </nav>
        </article>
      </main>
      <Footer route={route} />
      <CookieConsent />
    </>
  );
}
