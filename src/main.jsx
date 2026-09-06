import React from 'react';
import { createRoot, hydrateRoot } from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './context/LanguageContext';
import { resolveRoute } from './routes';
import './index.css';

const rootElement = document.getElementById('root');
const pathname = window.location.pathname;
const route = resolveRoute(pathname);
const application = (
  <React.StrictMode>
    <LanguageProvider initialLang={route.lang}>
      <App pathname={pathname} />
    </LanguageProvider>
  </React.StrictMode>
);

if (rootElement.hasChildNodes()) {
  hydrateRoot(rootElement, application);
} else {
  createRoot(rootElement).render(application);
}
