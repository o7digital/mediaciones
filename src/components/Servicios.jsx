import React from 'react';
import './Servicios.css';

const servicios = [
  {
    titulo: 'Civil y Mercantil',
    descripcion: 'Conflictos contractuales, comerciales y de propiedad.'
  },
  {
    titulo: 'Bancario y Financiero',
    descripcion: 'Reestructuración de deudas y mediación hipotecaria.'
  },
  {
    titulo: 'Familiar y Comunitario',
    descripcion: 'Conflictos familiares o sociales buscando preservar relaciones.'
  },
  {
    titulo: 'Corporativo',
    descripcion: 'Prevención de conflictos en empresas y cumplimiento normativo.'
  }
];

export default function Servicios() {
  return (
    <section id="servicios" className="servicios-section">
      <h2 className="servicios-title">Nuestros Servicios</h2>
      <div className="servicios-grid">
        {servicios.map((servicio, index) => (
          <div key={index} className="servicio-card">
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
            <button className="btn-ver-mas">Ver más</button>
          </div>
        ))}
      </div>
    </section>
  );
}
