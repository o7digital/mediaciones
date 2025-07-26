import React from 'react';
import './HeroLawhere.css';
import { FaBullseye, FaEye } from 'react-icons/fa';

export default function HeroLawhere() {
  return (
    <section className="hero-lawhere">
      <video className="hero-video" autoPlay muted loop>
        <source src="video/mediacion.mp4" type="video/mp4" />
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          {/* Cuadros de la izquierda */}
          <div className="hero-left">
            <div className="hero-box">
              <h3>
                <FaBullseye className="icon" /> Nuestra Misión
              </h3>
              <p>
                Brindar soluciones legales efectivas a través de la mediación y el diálogo.
              </p>
            </div>
            <div className="hero-box">
              <h3>
                <FaEye className="icon" /> Nuestra Visión
              </h3>
              <p>
                Ser líderes en mediación profesional con impacto humano y social.
              </p>
            </div>
          </div>

          {/* Cuadros de estadísticas a la derecha */}
          <div className="hero-right">
            <div className="stat transparent">
              <h4>98 575+</h4>
              <p>Horas de Audiencia</p>
            </div>
            <div className="stat transparent">
              <h4>12K</h4>
              <p>Clientes Satisfechos</p>
            </div>
            <div className="stat transparent">
              <h4>86%</h4>
              <p>Arbitrajes Exitosos</p>
            </div>
            <div className="stat transparent">
              <h4>35+</h4>
              <p>Años de Experiencia</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
