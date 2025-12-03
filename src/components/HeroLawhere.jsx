import React, { useEffect, useState, useRef } from "react";
import { useLanguage } from "../context/LanguageContext";
import "./HeroLawhere.css";

export default function HeroLawhere() {
  const { copy } = useLanguage();
  const hero = copy.hero;

  // Gestion du changement de vidéo toutes les 10 secondes
  const videos = [
    "video/mediacion.mp4",
    "video/mediacion2.mp4"
  ];
  const videoRefs = [useRef(null), useRef(null)];
  const [current, setCurrent] = useState(0);
  const currentVideo = videos[current];
  const [isMobile, setIsMobile] = useState(false);

  // Detecta mobile por media query y escucha cambios de tamaño
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    const handler = (e) => setIsMobile(e.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler); // fallback
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    if (isMobile) return; // no preloads ni intervalos en móvil
    // Précharge la prochaine vidéo
    const nextIndex = (current + 1) % videos.length;
    const link = document.createElement('link');
    link.rel = 'preload';
    link.as = 'video';
    link.href = videos[nextIndex];
    document.head.appendChild(link);

    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 10000);
    return () => {
      clearInterval(interval);
      document.head.removeChild(link);
    };
  }, [current, videos, isMobile]);

  return (
    <section className="hero-lawhere" id="home">
      {/* Video de fondo (solo desktop/tablet) */}
      {!isMobile && (
        <video
          className="hero-video"
          autoPlay
          muted
          loop
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
              <p className="hero-mission-title">
                {hero.missionTitle}
              </p>
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
