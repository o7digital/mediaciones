import { useEffect, useMemo, useState } from 'react';
import './TestimonialsCarousel.css';

export default function TestimonialsCarousel({
  items = [],
  labels = {
    aria: 'Carrusel de testimonios',
    prev: 'Anterior',
    next: 'Siguiente',
    page: 'Ir a la página',
  },
}) {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const total = items.length;

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

  // Auto-avanzar cada 5s en todos los tamaños y volver al inicio al final
  useEffect(() => {
    if (total === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 5000);
    return () => clearInterval(id);
  }, [maxIndex, total]);

  return (
    <div className="tst-carousel" role="region" aria-label={labels.aria} style={{ ['--cards-per-view']: cardsPerView }}>
      <button className="tst-arrow left" onClick={prev} aria-label={labels.prev}>‹</button>

      <div className="tst-viewport">
        <div className="tst-track" style={{ transform: `translateX(-${(clampedIndex * 100) / cardsPerView}%)` }}>
          {items.map((t, i) => (
            <div className="tst-card" key={i}>
              <div className="tst-card-inner">
                <div className="tst-stars" aria-hidden>★★★★★</div>
                <p className="tst-quote">“{t.quote}”</p>
                <div className="tst-author">— <strong>{t.name}</strong>, {t.role}</div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="tst-arrow right" onClick={next} aria-label={labels.next}>›</button>

      <div className="tst-dots">
        {Array.from({ length: pages }).map((_, p) => (
          <button
            key={p}
            className={`tst-dot ${p === activePage ? 'active' : ''}`}
            onClick={() => onDot(p)}
            aria-label={`${labels.page || 'Ir a la página'} ${p + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
