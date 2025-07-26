import React from 'react';
import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contacto">
      <h2>Contáctanos</h2>
      <p>
        Si tienes dudas o deseas agendar una mediación, llena el formulario y nos pondremos en contacto.
      </p>
      <form className="contact-form">
        <input type="text" placeholder="Nombre completo" required />
        <input type="email" placeholder="Correo electrónico" required />
        <textarea placeholder="Escribe tu mensaje aquí" rows="4" required></textarea>
        <button type="submit">Enviar mensaje</button>
      </form>
    </section>
  );
}
