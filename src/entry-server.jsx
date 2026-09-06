import React from 'react';
import { renderToString } from 'react-dom/server';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { getAlternatesForRoute, getSeoForRoute, getServiceSchema, organizationSchema } from './seo';
import { PRERENDER_ROUTES, resolveRoute } from './routes';

export const routes = PRERENDER_ROUTES;

export function renderPage(pathname) {
  const route = resolveRoute(pathname);
  const html = renderToString(
    <LanguageProvider initialLang={route.lang}>
      <App pathname={pathname} />
    </LanguageProvider>,
  );

  return {
    html,
    lang: route.lang,
    seo: getSeoForRoute(route),
    alternates: getAlternatesForRoute(route),
    schemas: [organizationSchema, getServiceSchema(route)].filter(Boolean),
  };
}
