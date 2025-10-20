import React, { useEffect, useState } from "react";
import "./HeroLawhere.css";

export default function HeroLawhere() {

  // Gestion du changement de vidéo toutes les 10 secondes
  const videos = [
    "video/mediacion.mp4",
    "video/mediacion2.mp4",
    "video/mediation3.mp4"
  ];
  const [current, setCurrent] = useState(0);
  const currentVideo = videos[current];

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % videos.length);
    }, 10000);
    return () => clearInterval(interval);
  }, [videos.length]);

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

      {/* Contenido sobre el video */}
      <div className="hero-overlay">
        <div className="hero-content">
          {/* Izquierda */}
          <div className="hero-left">
            <div className="hero-box">
              <h3>Nuestra Misión</h3>
              <p>
                Promover soluciones justas y efectivas mediante procesos de
                mediación que fortalezcan las relaciones humanas y profesionales.
              </p>
            </div>

            <div className="hero-box">
              <h3>Nuestra Visión</h3>
              <p>
                Ser líderes en mediación legal privada, garantizando confianza,
                transparencia y acuerdos sostenibles.
              </p>
            </div>
          </div>

          {/* Derecha */}
          <div className="hero-right">
            <div className="stat">
              <h4>98 575+</h4>
              <p>Horas de audiencia</p>
            </div>
            <div className="stat">
              <h4>12K</h4>
              <p>Clientes satisfechos</p>
            </div>
            <div className="stat">
              <h4>86%</h4>
              <p>Arbitrajes exitosos</p>
            </div>
            <div className="stat">
              <h4>35+</h4>
              <p>Años de experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
