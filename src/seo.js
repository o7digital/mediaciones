import { content } from './i18n/content';
import { HOME_ROUTES, getLanguagePath } from './routes';

export const SITE_URL = 'https://scmabogados.com';
export const SOCIAL_IMAGE = `${SITE_URL}/img/og-image.jpg`;

export const pageSeo = {
  es: {
    title: 'Abogados mediadores en CDMX | Solís Cámara',
    description:
      'Resolvemos conflictos civiles, mercantiles, familiares y financieros mediante mediación privada certificada con fe pública en Ciudad de México.',
    ogDescription:
      'Mediación privada certificada y servicios legales para resolver controversias con seguridad jurídica en Ciudad de México.',
    locale: 'es_MX',
  },
  en: {
    title: 'Mediation Lawyers in Mexico City | Solís Cámara',
    description:
      'Resolve civil, commercial, family, and financial disputes through certified private mediation and legal services in Mexico City.',
    ogDescription:
      'Certified private mediation and legal services for secure, enforceable dispute resolution in Mexico City.',
    locale: 'en_US',
  },
};

const serviceSeo = {
  es: [
    {
      title: 'Mediación privada certificada en CDMX | Solís Cámara',
      description: 'Acuerdos ejecutables con fe pública para resolver controversias sin un juicio prolongado. Mediadores privados certificados en Ciudad de México.',
    },
    {
      title: 'Mediación deportiva en México | Solís Cámara',
      description: 'Solución confidencial de controversias entre deportistas, clubes, agentes, entrenadores, ligas y patrocinadores mediante mediación deportiva.',
    },
    {
      title: 'Mediación civil y mercantil en CDMX | Solís Cámara',
      description: 'Resolvemos incumplimientos, disputas contractuales, arrendamientos y conflictos entre socios mediante mediación civil y mercantil.',
    },
    {
      title: 'Mediación bancaria y financiera | Solís Cámara',
      description: 'Negociación de deudas, créditos, garantías y controversias con instituciones mediante mediación bancaria y financiera especializada.',
    },
    {
      title: 'Derecho administrativo y amparo | Solís Cámara',
      description: 'Asesoría ante multas, sanciones, clausuras, permisos y actos de autoridad, con estrategia administrativa y de amparo en México.',
    },
    {
      title: 'Mediación familiar y comunitaria | Solís Cámara',
      description: 'Acuerdos sostenibles para divorcio, pensión, custodia, herencias y convivencia mediante mediación familiar y comunitaria en CDMX.',
    },
    {
      title: 'Derecho corporativo y compliance | Solís Cámara',
      description: 'Prevención de riesgos, gobierno corporativo, cumplimiento normativo y solución de controversias entre socios, clientes y proveedores.',
    },
  ],
  en: [
    {
      title: 'Certified Private Mediation in Mexico City | Solís Cámara',
      description: 'Reach enforceable agreements through certified private mediation with public faith and resolve disputes without prolonged litigation.',
    },
    {
      title: 'Sports Mediation in Mexico | Solís Cámara',
      description: 'Confidential dispute resolution for athletes, clubs, agents, coaches, federations, leagues, and sponsors through sports mediation.',
    },
    {
      title: 'Civil and Commercial Mediation | Solís Cámara',
      description: 'Resolve contractual breaches, lease disputes, and conflicts between partners or suppliers through civil and commercial mediation.',
    },
    {
      title: 'Banking and Financial Mediation | Solís Cámara',
      description: 'Specialized negotiation of debt, credit, collateral, and disputes with financial institutions through banking and financial mediation.',
    },
    {
      title: 'Administrative Law and Amparo | Solís Cámara',
      description: 'Legal advice for fines, sanctions, closures, permits, licensing, and government action through administrative and amparo strategy.',
    },
    {
      title: 'Family and Community Mediation | Solís Cámara',
      description: 'Sustainable agreements for divorce, support, custody, inheritance, and coexistence through family and community mediation in Mexico City.',
    },
    {
      title: 'Corporate Law and Compliance | Solís Cámara',
      description: 'Risk prevention, corporate governance, regulatory compliance, and dispute resolution for partners, clients, and suppliers in Mexico.',
    },
  ],
};

export function absoluteUrl(path) {
  return new URL(path, SITE_URL).href;
}

export function getSeoForRoute(route) {
  const lang = route.lang || 'es';
  const base = route.type === 'service'
    ? serviceSeo[lang][route.serviceIndex]
    : pageSeo[lang];

  return {
    ...base,
    canonicalUrl: absoluteUrl(route.path || HOME_ROUTES[lang]),
    locale: pageSeo[lang].locale,
    lang,
  };
}

export function getAlternatesForRoute(route) {
  return [
    { hreflang: 'es-MX', href: absoluteUrl(getLanguagePath(route, 'es')) },
    { hreflang: 'en', href: absoluteUrl(getLanguagePath(route, 'en')) },
    { hreflang: 'x-default', href: absoluteUrl(getLanguagePath(route, 'es')) },
  ];
}

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': 'LegalService',
  '@id': `${SITE_URL}/#organization`,
  name: 'Solís Cámara Mediadores Abogados y Asociados',
  legalName: 'Solís Cámara Mediadores Abogados y Asociados',
  url: `${SITE_URL}/`,
  image: SOCIAL_IMAGE,
  logo: SOCIAL_IMAGE,
  description:
    'Despacho especializado en mediación privada certificada con fe pública y solución de conflictos civiles, familiares, mercantiles y financieros en Ciudad de México.',
  telephone: '+52-55-4616-7798',
  email: 'info@scmabogados.com',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Río Pánuco 43, Col. Renacimiento',
    addressLocality: 'Cuauhtémoc',
    addressRegion: 'Ciudad de México',
    addressCountry: 'MX',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+52-55-4616-7798',
    email: 'info@scmabogados.com',
    contactType: 'customer service',
    availableLanguage: ['es', 'en'],
  },
  areaServed: {
    '@type': 'Country',
    name: 'México',
  },
  knowsLanguage: ['es', 'en'],
  employee: content.es.associates.map((person) => ({
    '@type': 'Person',
    name: person.name,
    image: absoluteUrl(person.photo),
    description: person.bio,
  })),
  hasOfferCatalog: {
    '@type': 'OfferCatalog',
    name: 'Servicios legales y de mediación',
    itemListElement: content.es.services.items.map((service) => ({
      '@type': 'Offer',
      itemOffered: {
        '@type': 'Service',
        name: service.titulo,
        description: service.detalles,
      },
    })),
  },
};

export function getServiceSchema(route) {
  if (route.type !== 'service') return null;
  const service = content[route.lang].services.items[route.serviceIndex];

  return {
    '@context': 'https://schema.org',
    '@type': 'Service',
    '@id': `${absoluteUrl(route.path)}#service`,
    name: service.titulo,
    description: service.detalles,
    url: absoluteUrl(route.path),
    areaServed: {
      '@type': 'Country',
      name: route.lang === 'en' ? 'Mexico' : 'México',
    },
    provider: {
      '@id': `${SITE_URL}/#organization`,
    },
  };
}
