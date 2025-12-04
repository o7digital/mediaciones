import { useEffect, useMemo, useState } from 'react';
import './AssociatesCarousel.css';
import OptimizedImage from './OptimizedImage';

export default function AssociatesCarousel({
  associates = [],
  ariaLabel = 'Carrusel',
  labels = {
    prev: 'Anterior',
    next: 'Siguiente',
    page: 'Ir a la página',
  },
}) {
  const [index, setIndex] = useState(0); // premier visible
  const [cardsPerView, setCardsPerView] = useState(4);
  const total = associates.length;

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1280) return 4;
      if (w >= 1024) return 3;
      if (w >= 640) return 2;
      return 1;
    };
    const update = () => setCardsPerView(compute());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, total - cardsPerView);
  const clampedIndex = useMemo(() => Math.min(index, maxIndex), [index, maxIndex]);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const pages = Math.max(1, Math.ceil(total / cardsPerView));
  const activePage = Math.floor(clampedIndex / cardsPerView);

  const onDot = (p) => setIndex(Math.min(p * cardsPerView, maxIndex));

  // Navegación manual únicamente (sin auto-avance)

  return (
    <div
      className="assoc-carousel"
      role="region"
      aria-label={ariaLabel}
      style={{ ['--cards-per-view']: cardsPerView }}
    >
      <button className="assoc-arrow left" onClick={prev} aria-label={labels.prev}>‹</button>

      <div className="assoc-viewport">
        <div
          className="assoc-track"
          style={{ transform: `translateX(-${(clampedIndex * 100) / cardsPerView}%)` }}
        >
          {associates.map((a, i) => (
            <div className="assoc-card" key={i}>
              <div className="assoc-card-inner">
                <div className="assoc-photo">
                  <OptimizedImage
                    src={a.photo}
                    alt={a.alt}
                    onError={(e) => { e.currentTarget.src = '/img/maria-del-pilar.jpg'; }}
                  />
                </div>
                <div className="assoc-info">
                  <h3 className="assoc-name">{a.name}</h3>
                  <p className="assoc-bio">{a.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="assoc-arrow right" onClick={next} aria-label={labels.next}>›</button>

      <div className="assoc-dots">
        {Array.from({ length: pages }).map((_, p) => (
          <button
            key={p}
            className={`assoc-dot ${p === activePage ? 'active' : ''}`}
            onClick={() => onDot(p)}
            aria-label={`${labels.page || 'Ir a la página'} ${p + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
