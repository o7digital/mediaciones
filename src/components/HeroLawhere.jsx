import React from 'react';
import './HeroLawhere.css';
import { FaBullseye, FaEye } from 'react-icons/fa';

export default function HeroLawhere() {
  return (
    <section className="hero-lawhere">
      {/* Video de fondo */}
      <video className="hero-video" autoPlay muted loop>
        <source src="video/mediacion.mp4" type="video/mp4" />
        Tu navegador no soporta el video.
      </video>

      <div className="hero-overlay">
        <div className="hero-content">
          {/* Cuadros blancos a la izquierda */}
          <div className="hero-left">
            <div className="hero-box">
              <h3><FaBullseye className="icon" /> Nuestra Misión</h3>
              <p>
                Brindar soluciones legales efectivas mediante mediación imparcial, 
                reduciendo tiempos y costos para nuestros clientes.
              </p>
            </div>
            <div className="hero-box">
              <h3><FaEye className="icon" /> Nuestra Visión</h3>
              <p>
                Ser la firma líder en mediación privada en México, ofreciendo 
                acuerdos que fomenten la paz social y la confianza.
              </p>
            </div>
          </div>

          {/* Estadísticas a la derecha */}
          <div className="hero-right">
            <div className="stat transparent">
              <h4>15+</h4>
              <p>Años de experiencia</p>
            </div>
            <div className="stat transparent">
              <h4>98%</h4>
              <p>Casos con acuerdo</p>
            </div>
            <div className="stat transparent">
              <h4>100%</h4>
              <p>Certificación oficial</p>
            </div>
            <div className="stat transparent">
              <h4>+500</h4>
              <p>Clientes satisfechos</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
