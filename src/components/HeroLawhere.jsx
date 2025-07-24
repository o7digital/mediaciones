import React from 'react';
import './HeroLawhere.css';

function HeroLawhere() {
  return (
    <section className="hero-lawhere">
      <video autoPlay loop muted playsInline className="hero-video">
        <source src="/video/mediacion.mp4" type="video/mp4" />
        Tu navegador no soporta video HTML5.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-box">
              <h2>Nuestra Misión</h2>
              <p>Brindar soluciones legales efectivas a través de la mediación y el diálogo.</p>
            </div>
            <div className="hero-box">
              <h2>Nuestra Visión</h2>
              <p>Ser líderes en mediación profesional con impacto humano y social.</p>
            </div>
          </div>

          <div className="hero-right">
            <img src="/img/mediator.jpg" alt="Mediador profesional" className="hero-lawyer" />
            <div className="hero-stats">
              <div className="stat">
                <h4>95%</h4>
                <p>Casos Resueltos</p>
              </div>
              <div className="stat">
                <h4>+500</h4>
                <p>Clientes Satisfechos</p>
              </div>
              <div className="stat">
                <h4>15 Años</h4>
                <p>de Experiencia</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroLawhere;


