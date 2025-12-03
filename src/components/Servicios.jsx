import React from 'react';
import './Servicios.css';
import ServicesCarousel from './ServicesCarousel';
import { useLanguage } from '../context/LanguageContext';

export default function Servicios() {
  const { copy } = useLanguage();
  const services = copy.services;

  return (
    <section id="servicios" className="servicios-section">
      <div className="servicios-container">
        <h2 className="servicios-title">{services.title}</h2>
        <div className="servicios-list-grid" aria-label={services.summaryAria}>
          <ul className="servicios-list">
            {services.summaryColumns[0].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
          <ul className="servicios-list">
            {services.summaryColumns[1].map((item) => (
              <li key={item}>{item}</li>
            ))}
          </ul>
        </div>
        <ServicesCarousel items={services.items} labels={services.labels} />
      </div>
    </section>
  );
}
