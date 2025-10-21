import './QuienesSomos.css';
import AssociatesCarousel from './AssociatesCarousel';

export default function QuienesSomos() {
  return (
    <section className="quienes-somos-section" id="quienes-somos">
      <h2>¿Quiénes Somos?</h2>
      <p>
        Somos un equipo de mediadores privados certificados por el Tribunal Superior de Justicia de la CDMX,
        especializados en ofrecer soluciones legales efectivas a través de la mediación legal privada. Nuestro
        objetivo es fortalecer las relaciones y lograr acuerdos sostenibles que reduzcan los tiempos y costos
        de los procesos tradicionales.
      </p>

      <AssociatesCarousel />
    </section>
  );
}
