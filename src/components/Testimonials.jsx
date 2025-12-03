import './Testimonials.css';
import TestimonialsCarousel from './TestimonialsCarousel';
import { useLanguage } from '../context/LanguageContext';

export default function Testimonials() {
  const { copy } = useLanguage();
  const testimonials = copy.testimonials;

  return (
    <section className="testimonials-section" id="testimonios">
      <h2 className="testimonials-title">{testimonials.title}</h2>
      <TestimonialsCarousel items={testimonials.items} labels={testimonials.labels} />
    </section>
  );
}
