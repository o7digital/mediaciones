import { createContext, useContext, useEffect, useMemo, useState } from 'react';
import { content, languages } from '../i18n/content';

const LanguageContext = createContext({
  lang: 'es',
  setLang: () => {},
  toggle: () => {},
  languages,
  copy: content.es,
});

export function LanguageProvider({ children }) {
  const [lang, setLang] = useState(() => {
    if (typeof window === 'undefined') return 'es';
    const stored = window.localStorage.getItem('lang');
    return stored || 'es';
  });

  useEffect(() => {
    try {
      window.localStorage.setItem('lang', lang);
    } catch (_) {
      // ignore write errors (private mode)
    }
  }, [lang]);

  const value = useMemo(
    () => ({
      lang,
      setLang,
      toggle: () => setLang((prev) => (prev === 'es' ? 'en' : 'es')),
      languages,
      copy: content[lang] || content.es,
    }),
    [lang]
  );

  return <LanguageContext.Provider value={value}>{children}</LanguageContext.Provider>;
}

export const useLanguage = () => useContext(LanguageContext);
