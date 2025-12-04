import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-layout">
        <div className="map-container">
          <iframe
            title="Ubicación: Río Pánuco 43, Col. Renacimiento, Cuauhtémoc, CDMX"
            className="map-frame"
            src="https://www.google.com/maps?q=R%C3%ADo%20P%C3%A1nuco%2043%2C%20Col.%20Renacimiento%2C%20Cuauht%C3%A9moc%2C%20CDMX&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label="Mapa de la dirección Río Pánuco 43, Col. Renacimiento, Cuauhtémoc, CDMX"
          />
        </div>

        <div className="contact-container">
          <h2 className="contact-title">Contactar</h2>
          <p className="contact-description">
            Si tienes dudas o deseas agendar una mediación, llena el formulario y nos pondremos en contacto contigo.
          </p>
          <form className="contact-form">
            <input 
              type="text" 
              placeholder="Nombre completo" 
              required 
            />
            <input 
              type="email" 
              placeholder="Correo electrónico" 
              required 
            />
            <textarea 
              placeholder="Escribe tu mensaje aquí" 
              rows="5" 
              required
            ></textarea>
            <button type="submit" className="contact-btn">Enviar mensaje</button>
          </form>
        </div>
      </div>
    </section>
  );
}
