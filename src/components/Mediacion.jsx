import React from 'react';
import './Mediacion.css';
import { useLanguage } from '../context/LanguageContext';
import OptimizedImage from './OptimizedImage';

export default function Mediacion() {
  const { copy, lang } = useLanguage();
  const mediation = copy.mediation;
  const conflictImage = lang === 'en' ? '/img/conflict-en.png' : '/img/conflicto.jpg';

  return (
    <section id="mediacion" className="mediacion-section">
      <div className="mediacion-container">
        <h2 className="mediacion-title">{mediation.title}</h2>

        <div className="mediacion-image-wrapper">
          <OptimizedImage
            src="/img/amina-lamediacion.jpg"
            alt={mediation.firstImageAlt}
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
            alt={mediation.secondImageAlt}
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
      </div>
    </section>
  );
}
