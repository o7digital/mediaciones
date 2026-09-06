import React from 'react';
import './Mediacion.css';
import { useLanguage } from '../context/LanguageContext';
import OptimizedImage from './OptimizedImage';

export default function Mediacion() {
  const { copy, lang } = useLanguage();
  const mediation = copy.mediation;
  const conflictImage = lang === 'en' ? '/img/conflict-en.png' : '/img/conflicto.jpg';
  const conflictWebpSrcSet = lang === 'en'
    ? '/img/conflict-en-640.webp 640w, /img/conflict-en-1280.webp 1280w, /img/conflict-en.webp 1536w'
    : '/img/conflicto-640.webp 640w, /img/conflicto-1280.webp 1280w, /img/conflicto.webp 1972w';
  const altSeo =
    lang === 'es'
      ? 'Abogados mediadores certificados en CDMX – mediación profesional'
      : 'Certified mediation attorneys Mexico City – professional mediation';

  return (
    <section id="mediacion" className="mediacion-section">
      <div className="mediacion-container">
        <h2 className="mediacion-title">{mediation.title}</h2>

        <div className="mediacion-image-wrapper">
          <OptimizedImage
            src="/img/amina-lamediacion.jpg"
            webpSrcSet="/img/amina-lamediacion-480.webp 480w, /img/amina-lamediacion-960.webp 960w, /img/amina-lamediacion.webp 1600w"
            sizes="(max-width: 767px) 92vw, 1000px"
            width="1600"
            height="1067"
            alt={altSeo}
            className="mediacion-image"
          />
        </div>

        {mediation.intro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <h3>{mediation.whatIsTitle}</h3>
        {mediation.whatIs.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <div className="mediacion-image-wrapper">
          <OptimizedImage
            src={conflictImage}
            webpSrcSet={conflictWebpSrcSet}
            sizes="(max-width: 767px) 92vw, 1000px"
            width={lang === 'en' ? '1536' : '1972'}
            height={lang === 'en' ? '1024' : '686'}
            alt={altSeo}
            className="mediacion-image"
          />
        </div>

        <h3>{mediation.certifiedTitle}</h3>
        {mediation.certifiedIntro.map((paragraph) => (
          <p key={paragraph}>{paragraph}</p>
        ))}

        <ul>
          {mediation.certifiedBullets.map((item) => (
            <li key={item}>{item}</li>
          ))}
        </ul>

        <aside className="mediation-sources" aria-labelledby="official-sources-title">
          <h3 id="official-sources-title">{mediation.officialSourcesTitle}</h3>
          <ul>
            <li>
              <a href="https://www.diputados.gob.mx/LeyesBiblio/ref/cpeum_art.htm" target="_blank" rel="noopener noreferrer">
                {mediation.officialSources.constitution}
              </a>
            </li>
            <li>
              <a href="https://poderjudicialcdmx.gob.mx/cja/mediacion-privada-2/" target="_blank" rel="noopener noreferrer">
                {mediation.officialSources.mediation}
              </a>
            </li>
          </ul>
        </aside>
      </div>
    </section>
  );
}
