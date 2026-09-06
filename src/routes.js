export const HOME_ROUTES = {
  es: '/',
  en: '/en/',
};

export const SERVICE_ROUTES = [
  {
    serviceIndex: 0,
    es: '/mediacion-privada-certificada-cdmx/',
    en: '/en/certified-private-mediation-mexico-city/',
  },
  {
    serviceIndex: 1,
    es: '/mediacion-deportiva/',
    en: '/en/sports-mediation/',
  },
  {
    serviceIndex: 2,
    es: '/mediacion-civil-mercantil/',
    en: '/en/civil-commercial-mediation/',
  },
  {
    serviceIndex: 3,
    es: '/mediacion-bancaria-financiera/',
    en: '/en/banking-financial-mediation/',
  },
  {
    serviceIndex: 4,
    es: '/derecho-administrativo-amparo/',
    en: '/en/administrative-law-amparo/',
  },
  {
    serviceIndex: 5,
    es: '/mediacion-familiar-comunitaria/',
    en: '/en/family-community-mediation/',
  },
  {
    serviceIndex: 6,
    es: '/derecho-corporativo-compliance/',
    en: '/en/corporate-law-compliance/',
  },
];

export const normalizePath = (pathname = '/') => {
  const cleanPath = pathname.split('?')[0].split('#')[0] || '/';
  if (cleanPath === '/') return '/';
  return `${cleanPath.replace(/\/+$/, '')}/`;
};

export function resolveRoute(pathname = '/') {
  const path = normalizePath(pathname);

  if (path === HOME_ROUTES.es) return { type: 'home', lang: 'es', path };
  if (path === HOME_ROUTES.en) return { type: 'home', lang: 'en', path };

  const service = SERVICE_ROUTES.find((route) => route.es === path || route.en === path);
  if (service) {
    const lang = service.en === path ? 'en' : 'es';
    return {
      type: 'service',
      lang,
      path,
      serviceIndex: service.serviceIndex,
      alternates: { es: service.es, en: service.en },
    };
  }

  return { type: 'not-found', lang: path.startsWith('/en/') ? 'en' : 'es', path };
}

export function getLanguagePath(route, lang) {
  if (route.type === 'service') {
    return route.alternates[lang];
  }
  return HOME_ROUTES[lang];
}

export const PRERENDER_ROUTES = [
  { path: HOME_ROUTES.es, lang: 'es' },
  { path: HOME_ROUTES.en, lang: 'en' },
  ...SERVICE_ROUTES.flatMap((route) => [
    { path: route.es, lang: 'es', serviceIndex: route.serviceIndex },
    { path: route.en, lang: 'en', serviceIndex: route.serviceIndex },
  ]),
];
