import './QuienesSomos.css';
import AssociatesCarousel from './AssociatesCarousel';
import { useLanguage } from '../context/LanguageContext';

export default function QuienesSomos() {
  const { copy } = useLanguage();
  const about = copy.about;

  return (
    <section className="quienes-somos-section" id="quienes-somos">
      <h2>{about.title}</h2>
      <p>{about.intro}</p>

      <h3 style={{ color: '#003366' }}>{about.philosophyTitle}</h3>
      <p>{about.philosophyText}</p>

      <h3 style={{ color: '#003366' }}>{about.methodologyTitle}</h3>
      <ul style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto 1rem', lineHeight: 1.8, fontSize: '1.25rem' }}>
        {about.methodology.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <h3 style={{ color: '#003366' }}>{about.areasTitle}</h3>
      <ul style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto 1.5rem', lineHeight: 1.8, fontSize: '1.25rem' }}>
        {about.areas.map((item) => (
          <li key={item}>{item}</li>
        ))}
      </ul>

      <AssociatesCarousel
        associates={copy.associates}
        ariaLabel={about.carouselLabel}
        labels={about.carouselLabels}
      />
    </section>
  );
}
