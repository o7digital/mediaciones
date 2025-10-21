import { useEffect, useMemo, useState } from 'react';
import './ServicesCarousel.css';

export default function ServicesCarousel({ items = [] }) {
  const [index, setIndex] = useState(0);
  const [open, setOpen] = useState(null); // índice de item abierto en modal
  const [cardsPerView, setCardsPerView] = useState(4);
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
    <div className="svc-carousel" role="region" aria-label="Carrusel de servicios" style={{ ['--cards-per-view']: cardsPerView }}>
      <button className="svc-arrow left" onClick={prev} aria-label="Anterior">‹</button>

      <div className="svc-viewport">
        <div className="svc-track" style={{ transform: `translateX(-${(clampedIndex * 100) / cardsPerView}%)` }}>
          {items.map((s, i) => (
            <div className="svc-card" key={i}>
              <div className="svc-card-inner">
                <div className="svc-info">
                  <h3 className="svc-title">{s.titulo}</h3>
                  <p className="svc-desc">{s.desc}</p>
                  <button className="btn-ver-mas" onClick={() => setOpen(i)}>Ver más</button>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="svc-arrow right" onClick={next} aria-label="Siguiente">›</button>

      <div className="svc-dots">
        {Array.from({ length: pages }).map((_, p) => (
          <button key={p} className={`svc-dot ${p === activePage ? 'active' : ''}`} onClick={() => onDot(p)} aria-label={`Ir a la página ${p + 1}`} />
        ))}
      </div>

      {open !== null && (
        <div className="svc-modal-backdrop" onClick={() => setOpen(null)}>
          <div
            className="svc-modal"
            role="dialog"
            aria-modal="true"
            aria-labelledby="svc-modal-title"
            onClick={(e) => e.stopPropagation()}
          >
            <button className="svc-modal-close" aria-label="Cerrar" onClick={() => setOpen(null)}>×</button>
            <h3 id="svc-modal-title" className="svc-modal-title">{items[open]?.titulo}</h3>
            <div className="svc-modal-content">
              <p>{items[open]?.detalles || items[open]?.desc}</p>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
