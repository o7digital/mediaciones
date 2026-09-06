import { createContext, useContext } from 'react';
import { content, languages } from '../i18n/content';

const LanguageContext = createContext({
  lang: 'es',
  languages,
  copy: content.es,
});

export function LanguageProvider({ children, initialLang }) {
  const lang = initialLang || (typeof window !== 'undefined' && window.location.pathname.startsWith('/en/') ? 'en' : 'es');
  const value = {
    lang,
    languages,
    copy: content[lang] || content.es,
  };

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
