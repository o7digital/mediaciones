
import React from 'react';
import './HeroLawhere.css'; // Asegúrate de tener estilos adecuados

const HeroLawhere = () => {
  return (
    <section className="hero-lawhere">
      <video autoPlay muted loop className="hero-video">
        <source src="/video/lawhero.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>
      <div className="hero-overlay">
        <div className="hero-content">
          <div className="hero-left">
            <div className="box white-box">
              <h3>Our Mission</h3>
              <p>Brindar soluciones legales efectivas mediante la mediación y el acuerdo entre partes.</p>
            </div>
            <div className="box white-box">
              <h3>Our Vision</h3>
              <p>Convertirnos en referentes de la mediación legal accesible, empática y eficiente.</p>
            </div>
          </div>
          <div className="hero-right">
            <img src="/img/lawyer.png" alt="Abogado" className="hero-lawyer" />
            <div className="stats">
              <div><strong>98 575+</strong><br />Courtroom Hours</div>
              <div><strong>12K</strong><br />Satisfied Clients</div>
              <div><strong>86%</strong><br />Successful Arbitration</div>
              <div><strong>35+</strong><br />Years Of Experience</div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroLawhere;
