import React from 'react';

const testimonials = [
  {
    name: 'Carlos Méndez',
    role: 'Cliente',
    quote: 'Gracias a Mediaciones pudimos resolver un conflicto familiar complejo sin llegar a juicio. Excelente trato y profesionalismo.',
  },
  {
    name: 'Laura García',
    role: 'Directora de RRHH',
    quote: 'La mediación laboral que realizamos con ellos nos ayudó a mejorar el ambiente de trabajo y evitar demandas.',
  },
  {
    name: 'Andrés Torres',
    role: 'Empresario',
    quote: 'Muy agradecido con la rapidez y claridad del proceso. Recomendado al 100%.',
  },
];

export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-5xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-12">Testimonios</h2>
        <div className="space-y-12">
          {testimonials.map((t, index) => (
            <div key={index} className="bg-white p-6 rounded-lg shadow-md">
              <p className="text-lg italic text-gray-600">“{t.quote}”</p>
              <div className="mt-4 text-sm text-gray-500">
                — <strong>{t.name}</strong>, {t.role}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
