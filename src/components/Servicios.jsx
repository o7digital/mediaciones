import React from 'react';
import './Servicios.css';

export default function Servicios() {
  const servicios = [
    {
      titulo: 'Civil y Mercantil',
      descripcion: 'Conflictos contractuales, comerciales y de propiedad.',
    },
    {
      titulo: 'Bancario y Financiero',
      descripcion: 'Reestructuración de deudas y mediación hipotecaria.',
    },
    {
      titulo: 'Familiar y Comunitario',
      descripcion: 'Conflictos familiares o sociales buscando preservar relaciones.',
    },
    {
      titulo: 'Corporativo',
      descripcion: 'Prevención de conflictos en empresas y cumplimiento normativo.',
    },
  ];

  return (
    <section className="servicios-section" id="servicios">
      <h2 className="servicios-title">Nuestros Servicios</h2>
      <div className="servicios-grid">
        {servicios.map((s, index) => (
          <div key={index} className="servicio-card">
            <h3>{s.titulo}</h3>
            <p>{s.descripcion}</p>
            <button className="btn-ver-mas">Ver más</button>
          </div>
        ))}
      </div>
    </section>
  );
}
