import { useEffect, useMemo, useState } from 'react';
import './TestimonialsCarousel.css';

export default function TestimonialsCarousel({ items = [] }) {
  const [index, setIndex] = useState(0);
  const [cardsPerView, setCardsPerView] = useState(3);
  const total = items.length;
  const [isMobile, setIsMobile] = useState(false);

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

  // Detectar móvil y auto-avanzar cada 10s solo en móvil
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    const handler = (e) => setIsMobile(e.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    if (!isMobile || total === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 10000);
    return () => clearInterval(id);
  }, [isMobile, maxIndex, total]);

  return (
    <div className="tst-carousel" role="region" aria-label="Carrusel de testimonios" style={{ ['--cards-per-view']: cardsPerView }}>
      <button className="tst-arrow left" onClick={prev} aria-label="Anterior">‹</button>

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

      <button className="tst-arrow right" onClick={next} aria-label="Siguiente">›</button>

      <div className="tst-dots">
        {Array.from({ length: pages }).map((_, p) => (
          <button key={p} className={`tst-dot ${p === activePage ? 'active' : ''}`} onClick={() => onDot(p)} aria-label={`Ir a la página ${p + 1}`} />
        ))}
      </div>
    </div>
  );
}
