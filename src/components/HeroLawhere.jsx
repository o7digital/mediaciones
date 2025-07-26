import React from 'react';
import './HeroLawhere.css';

export default function HeroLawhere() {
  return (
    <section id="home" className="hero-lawhere">
      <video className="hero-video" autoPlay loop muted>
        <source src="video/mediacion.mp4" type="video/mp4" />
        Tu navegador no soporta videos.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-box">
              <h3>Nuestra Misión</h3>
              <p>
                Promover soluciones justas y efectivas mediante procesos de mediación 
                que fortalezcan las relaciones humanas y profesionales.
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

          <div className="hero-right">
            {/* Rectángulos de estadísticas o información */}
            <div className="hero-stats">
              <div className="stat">
                <h4>95%</h4>
                <p>Casos exitosos</p>
              </div>
              <div className="stat">
                <h4>15+</h4>
                <p>Años de experiencia</p>
              </div>
              <div className="stat">
                <h4>100%</h4>
                <p>Confidencialidad</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
