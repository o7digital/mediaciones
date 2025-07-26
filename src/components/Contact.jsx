import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section id="contacto" className="contact-section">
      <div className="contact-container">
        <h2 className="contact-title">Contáctanos</h2>
        <p className="contact-subtitle">
          Si tienes dudas o deseas agendar una mediación, llena el formulario y nos pondremos en contacto.
        </p>
        <form className="contact-form">
          <div className="form-group">
            <input type="text" placeholder="Nombre completo" required />
          </div>
          <div className="form-group">
            <input type="email" placeholder="Correo electrónico" required />
          </div>
          <div className="form-group">
            <textarea placeholder="Escribe tu mensaje aquí" rows="5" required></textarea>
          </div>
          <button type="submit" className="contact-button">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
