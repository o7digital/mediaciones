import React from 'react';
import './QuienesSomos.css';

export default function QuienesSomos() {
  return (
    <section id="quienes-somos" className="quienes-section">
      <div className="quienes-container">
        <h2 className="quienes-title">¿Quiénes Somos?</h2>
        <p className="quienes-description">
          Somos un equipo de mediadores privados certificados por el Tribunal Superior de Justicia de la CDMX, 
          especializados en ofrecer soluciones legales efectivas a través de la mediación legal privada. Nuestro objetivo 
          es fortalecer las relaciones y lograr acuerdos sostenibles que reduzcan los tiempos y costos de los procesos 
          tradicionales.
        </p>

        <div className="quienes-cards">
          {/* Emma Patricia Solís Cámara Cano */}
          <div className="quienes-card">
            <h3>Emma Patricia Solís Cámara Cano</h3>
            <p>
              Licenciada en Derecho por la Universidad Iberoamericana, Maestría en Derechos Humanos (UIA) y diplomado en 
              Derecho Corporativo por el ITAM. Mediadora privada certificada (No. 122) por el Tribunal Superior de Justicia. 
              Experiencia en mediación comunitaria y corporativa con empresas como Grupo Minero de México, Banca Monex, 
              Bancomer y comunidades agrarias. 
              Fue presidenta de la Asociación de Egresados de Derecho de la Universidad Iberoamericana y miembro del 
              Ilustre y Nacional Colegio de Abogados de México.
            </p>
          </div>

          {/* Maria del Pilar Carrizosa Celis */}
          <div className="quienes-card">
            <h3>María del Pilar Carrizosa Celis</h3>
            <p>
              Licenciada en Derecho por la UNAM, Maestría en el Instituto de Estudios Superiores en Derecho Penal. 
              Mediadora privada No. 290 certificada por el Centro de Justicia Alternativa del TSJ de la CDMX. 
              Amplia experiencia en mediación comunitaria en temas sociales y gubernamentales. Actualmente es 
              socia del Centro de Mediación Privada por la Paz de la Ciudad de México y formadora social por una 
              cultura de paz para la Comisión Nacional de Seguridad.
            </p>
          </div>
        </div>

        <p className="quienes-link">
          Para más información visita nuestro sitio oficial:{" "}
          <a 
            href="https://www.corporativojuridicoydemediacionscyc.com.mx/" 
            target="_blank" 
            rel="noopener noreferrer"
          >
            www.corporativojuridicoydemediacionscyc.com.mx
          </a>
        </p>
      </div>
    </section>
  );
}
