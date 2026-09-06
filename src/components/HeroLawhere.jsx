import React, { useEffect, useState } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./HeroLawhere.css";

const VIDEOS = [
  '/video/mediacion_compressed.mp4',
  '/video/mediacion2_compressed.mp4',
];

export default function HeroLawhere() {
  const { copy } = useLanguage();
  const hero = copy.hero;

  // Gestion du changement de vidéo toutes les 10 secondes
  const [current, setCurrent] = useState(0);
  const currentVideo = VIDEOS[current];
  const [isDesktop, setIsDesktop] = useState(false);

  // Detecta mobile por media query y escucha cambios de tamaño
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const apply = () => setIsDesktop(!mq.matches);
    apply();
    const handler = (e) => setIsDesktop(!e.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler); // fallback
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    if (!isDesktop) return undefined;

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % VIDEOS.length);
    }, 10000);
    return () => {
      clearInterval(interval);
    };
  }, [isDesktop]);

  return (
    <section className="hero-lawhere" id="home">
      {/* Video de fondo (solo desktop/tablet) */}
      {isDesktop && (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          poster="/img/mobile.webp"
          key={currentVideo}
        >
          <source src={currentVideo} type="video/mp4" />
          {hero.videoFallback}
        </video>
      )}

      {/* Fondo móvil (imagen) */}
      <div className="hero-mobile-image" aria-hidden="true" />

      {/* Contenido sobre el video */}
      <div className="hero-overlay">
        <div className="hero-content">
          {/* Izquierda */}
          <div className="hero-left">
            <div className="hero-box hero-mission-custom">
              <h1 className="hero-mission-title">
                {hero.missionTitle}
              </h1>
            </div>
            {/* El segundo rectángulo se oculta en móvil por CSS */}
            <div className="hero-box hero-vision-custom">
              <p className="hero-vision-text">
                {hero.visionText}
              </p>
            </div>
          </div>

          {/* Derecha */}
          <div className="hero-right">
            {hero.stats.map((item) => (
              <div className="stat" key={item.label}>
                <h4>{item.value}</h4>
                <p>{item.label}</p>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
