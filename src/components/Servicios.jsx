import React from 'react';
import './Servicios.css';

export default function Servicios() {
  const servicios = [
    {
      titulo: 'Mediación Familiar',
      descripcion: 'Resolución de conflictos familiares con enfoque humano y profesional.'
    },
    {
      titulo: 'Mediación Laboral',
      descripcion: 'Soluciones efectivas para conflictos entre empleados y trabajadores.'
    },
    {
      titulo: 'Mediación Civil y Mercantil',
      descripcion: 'Alternativas legales para conflictos civiles y comerciales.'
    },
    {
      titulo: 'Capacitación Legal',
      descripcion: 'Cursos y talleres en resolución de conflictos y derecho colaborativo.'
    }
  ];

  return (
    <section className="servicios">
      <h2>Nuestros Servicios</h2>
      <div className="servicios-grid">
        {servicios.map((servicio, index) => (
          <div className="servicio-card" key={index}>
            <h3>{servicio.titulo}</h3>
            <p>{servicio.descripcion}</p>
            <button className="btn">Ver más</button>
          </div>
        ))}
      </div>
    </section>
  );
}
