import React from 'react';
import './QuienesSomos.css';
import mariaFoto from '../img/maria-del-pilar.jpg'; // Asegúrate de que la imagen esté en esta ruta

export default function QuienesSomos() {
  return (
    <section className="quienes-somos-section">
      <h2 className="quienes-title">¿Quiénes Somos?</h2>
      <p className="quienes-descripcion">
        Somos un equipo de mediadores privados certificados por el Tribunal Superior de Justicia de la CDMX, 
        especializados en ofrecer soluciones legales efectivas a través de la mediación legal privada. 
        Nuestro objetivo es fortalecer las relaciones y lograr acuerdos sostenibles que reduzcan los tiempos 
        y costos de los procesos tradicionales.
      </p>

      <div className="quienes-grid">
        {/* Bloque Emma Patricia */}
        <div className="quienes-card">
          <h3 className="quienes-nombre">Emma Patricia Solís Cámara Cano</h3>
          <p className="quienes-texto">
            Licenciada en Derecho por la Universidad Iberoamericana, Maestría en Derechos Humanos (UIA) 
            y diplomado en Derecho Corporativo por el ITAM. Mediadora privada certificada (No. 122) por 
            el Tribunal Superior de Justicia. Experiencia en mediación comunitaria y corporativa con empresas 
            como Grupo Minero de México, Banca Monex, Bancomer y comunidades agrarias. Fue presidenta de la 
            Asociación de Egresados de Derecho de la Universidad Iberoamericana y miembro del Ilustre y Nacional 
            Colegio de Abogados de México.
          </p>
        </div>

        {/* Bloque con la foto */}
        <div className="quienes-card-img">
          <img src={mariaFoto} alt="María del Pilar Carrizosa Celis" className="quienes-foto" />
        </div>
      </div>

      <p className="quienes-footer">
        Para más información visita nuestro sitio oficial:{" "}
        <a 
          href="https://www.corporativojuridicoydemediacionscyc.com.mx" 
          target="_blank" 
          rel="noopener noreferrer"
        >
          www.corporativojuridicoydemediacionscyc.com.mx
        </a>
      </p>
    </section>
  );
}
