import './Testimonials.css';
import TestimonialsCarousel from './TestimonialsCarousel';

const testimonials = [
  {
    name: 'Carlos Méndez',
    role: 'Cliente',
    quote:
      'Gracias a Mediaciones pudimos resolver un conflicto familiar complejo sin llegar a juicio. Excelente trato y profesionalismo.',
  },
  {
    name: 'Laura García',
    role: 'Directora de RRHH',
    quote:
      'La mediación laboral que realizamos con ellos nos ayudó a mejorar el ambiente de trabajo y evitar demandas.',
  },
  {
    name: 'Andrés Torres',
    role: 'Empresario',
    quote:
      'Muy agradecido con la rapidez y claridad del proceso. Recomendado al 100%.',
  },
  {
    name: 'Mariana López',
    role: 'Abogada Corporativa',
    quote:
      'El acompañamiento en la mediación permitió cerrar un conflicto con proveedores sin litigio y en tiempos muy razonables.',
  },
  {
    name: 'Ricardo Hernández',
    role: 'Emprendedor',
    quote:
      'Proceso claro y humano. Resolvimos rápido y con un acuerdo justo para ambas partes.',
  },
  {
    name: 'Sofía Martínez',
    role: 'Directora Legal',
    quote:
      'Excelente comunicación y resultados. Recomendaría el servicio sin dudar.',
  },
];

export default function Testimonials() {
  return (
    <section className="testimonials-section" id="testimonios">
      <h2 className="testimonials-title">Testimonios</h2>
      <TestimonialsCarousel items={testimonials} />
    </section>
  );
}
