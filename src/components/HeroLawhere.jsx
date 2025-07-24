import React from 'react';
import './HeroLawhere.css';

function HeroLawhere() {
  return (
    <section className="hero-lawhere dark">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/video/mediacion.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      <div className="hero-overlay dark">
        <div className="hero-content">
          <div className="hero-left full-width">
            <div className="hero-box dark-box">
              <h2>Nuestra Misión</h2>
              <p>Brindar soluciones legales efectivas a través de la mediación y el diálogo.</p>
            </div>
            <div className="hero-box dark-box">
              <h2>Nuestra Visión</h2>
              <p>Ser líderes en mediación profesional con impacto humano y social.</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroLawhere;



