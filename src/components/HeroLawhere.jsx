import React, { useEffect, useState, useRef } from "react";
import "./HeroLawhere.css";

export default function HeroLawhere() {

  // Gestion du changement de vidéo toutes les 10 secondes
  const videos = [
    "video/mediacion.mp4",
    "video/mediacion2.mp4"
  ];
  const videoRefs = [useRef(null), useRef(null)];
  const [current, setCurrent] = useState(0);
  const currentVideo = videos[current];

  useEffect(() => {
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
  }, [current, videos]);

  return (
    <section className="hero-lawhere" id="home">
      {/* Video de fondo dynamique */}
      <video
        className="hero-video"
        autoPlay
        muted
        loop
        key={currentVideo}
      >
        <source src={currentVideo} type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      {/* Fondo móvil (imagen) */}
      <div className="hero-mobile-image" aria-hidden="true" />

      {/* Contenido sobre el video */}
      <div className="hero-overlay">
        <div className="hero-content">
          {/* Izquierda */}
          <div className="hero-left">
            <div className="hero-box hero-mission-custom">
              <p className="hero-mission-title">
                CONFIANZA LEGAL, SOLUCIONES REALES
              </p>
            </div>

            <div className="hero-box hero-vision-custom">
              <p className="hero-vision-text">
                Desde la mediación hasta el litigio, brindamos soluciones legales integrales en lo civil, mercantil, fiscal y migratorio.
              </p>
            </div>
          </div>

          {/* Derecha */}
          <div className="hero-right">
            <div className="stat">
              <h4>1500+</h4>
              <p>Horas de audiencia</p>
            </div>
            <div className="stat">
              <h4>150</h4>
              <p>Clientes satisfechos</p>
            </div>
            <div className="stat">
              <h4>95%</h4>
              <p>Arbitrajes exitosos</p>
            </div>
            <div className="stat">
              <h4>+35</h4>
              <p>Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
