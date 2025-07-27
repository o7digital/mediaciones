import './Testimonials.css';

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
];

export default function Testimonials() {
  return (
    <section className="testimonials-section">
      <h2>Testimonios</h2>
      <div className="testimonials-grid">
        {testimonials.map((t, index) => (
          <div key={index} className="testimonial-card">
            <p className="testimonial-quote">“{t.quote}”</p>
            <div className="testimonial-author">
              — <strong>{t.name}</strong>, {t.role}
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
