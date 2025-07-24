import React from "react";
import "./HeroLawhere.css";

const HeroLawhere = () => {
  return (
    <section className="hero-lawhere">
      <video className="hero-video" autoPlay muted loop>
        <source src="/video/lawhero.mp4" type="video/mp4" />
        Your browser does not support the video tag.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-left">
            <div className="hero-box white-bg">
              <h3>Misión</h3>
              <p>Brindar soluciones legales efectivas a través de procesos de mediación profesionales, humanos y justos.</p>
            </div>
            <div className="hero-box white-bg">
              <h3>Visión</h3>
              <p>Convertirnos en referentes en mediación legal en LATAM con ética, experiencia y compromiso.</p>
            </div>
          </div>

          <div className="hero-right">
            <img src="/img/lawyer.png" alt="Abogado Mediador" className="hero-lawyer" />
          </div>
        </div>

        <div className="hero-stats">
          <div className="stat">
            <h4>+10 Años</h4>
            <p>de experiencia</p>
          </div>
          <div className="stat">
            <h4>+500</h4>
            <p>clientes satisfechos</p>
          </div>
          <div className="stat">
            <h4>98%</h4>
            <p>casos exitosos</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLawhere;

