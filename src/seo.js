export const SITE_URL = 'https://scmabogados.com';
export const SOCIAL_IMAGE = `${SITE_URL}/img/og-image.jpg`;

export const pageSeo = {
  es: {
    title:
      'Solis Camara Mediadores Abogados y Asociados | Mediacion certificada en CDMX',
    description:
      'Solis Camara Mediadores Abogados y Asociados: mediacion certificada, metodos alternativos de solucion de conflictos y asesoria legal en CDMX y a nivel nacional.',
    ogDescription:
      'Despacho especializado en mediacion certificada, solucion de conflictos y asesoria legal en CDMX y a nivel nacional.',
    canonicalPath: '/',
    locale: 'es_MX',
  },
  en: {
    title:
      'Solis Camara Mediadores Abogados y Asociados | Certified Mediation in Mexico City',
    description:
      'Solis Camara Mediadores Abogados y Asociados: certified mediation, alternative dispute resolution, and legal advisory in Mexico City and across Mexico.',
    ogDescription:
      'Law firm specialized in certified mediation, dispute resolution, and legal advisory in Mexico City and across Mexico.',
    canonicalPath: '/en',
    locale: 'en_US',
  },
};

export const alternates = [
  { hreflang: 'es-MX', href: `${SITE_URL}/` },
  { hreflang: 'en', href: `${SITE_URL}/en` },
  { hreflang: 'x-default', href: `${SITE_URL}/` },
];

export const organizationSchema = {
  '@context': 'https://schema.org',
  '@type': ['Organization', 'LegalService'],
  name: 'Solis Camara Mediadores Abogados y Asociados',
  url: SITE_URL,
  image: SOCIAL_IMAGE,
  description:
    'Despacho especializado en mediacion certificada con fe publica y solucion de conflictos civiles, familiares, mercantiles y bancarios en CDMX.',
  address: {
    '@type': 'PostalAddress',
    streetAddress: 'Rio Panuco 43, Col. Renacimiento',
    addressLocality: 'Cuauhtemoc',
    addressRegion: 'CDMX',
    addressCountry: 'MX',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+52-55-4616-7798',
    contactType: 'customer service',
    availableLanguage: ['es', 'en'],
  },
  areaServed: {
    '@type': 'Country',
    name: 'Mexico',
  },
};

export const faqSchema = {
  es: {
    '@context': 'https://schema.org',
    '@type': 'FAQPage',
    mainEntity: [
      {
        '@type': 'Question',
        name: 'Que incluye la mediacion certificada en CDMX?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Incluye mediacion privada con fe publica, acuerdos ejecutables y solucion profesional de conflictos civiles, mercantiles, familiares y bancarios en Ciudad de Mexico.',
        },
      },
      {
        '@type': 'Question',
        name: 'Ofrecen metodos alternativos de solucion de conflictos?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Si, somos especialistas en metodos alternativos de solucion de conflictos, conciliacion y mediacion corporativa, familiar y mercantil con abogados mediadores autorizados.',
        },
      },
      {
        '@type': 'Question',
        name: 'Atienden mediacion familiar y mercantil?',
        acceptedAnswer: {
          '@type': 'Answer',
          text: 'Atendemos mediacion familiar, civil, mercantil y bancaria con servicios legales especializados y orientacion personalizada para acuerdos rapidos y seguros.',
        },
      },
    ],
  },
  en: {
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
  },
};
