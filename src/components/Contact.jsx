import './Contact.css';

export default function Contact() {
  return (
    <section className="contact-section" id="contacto">
      <h2>Contacto</h2>
      <p className="contact-intro">
        Si tienes alguna duda o deseas más información sobre nuestros servicios, ponte en contacto con nosotros.
      </p>

      <div className="contact-container">
        {/* Información */}
        <div className="contact-info">
          <p><strong>Teléfono:</strong> 55 46 16 77 98</p>
          <p><strong>Correo:</strong> mediacionlegalprivada@gmail.com</p>
          <p><strong>Dirección:</strong> Río Pánuco 43, Col. Renacimiento, Cuauhtémoc, CDMX</p>
        </div>

        {/* Formulario */}
        <form className="contact-form">
          <input type="text" placeholder="Nombre" required />
          <input type="email" placeholder="Correo electrónico" required />
          <textarea placeholder="Mensaje" rows="5" required></textarea>
          <button type="submit">Enviar mensaje</button>
        </form>
      </div>
    </section>
  );
}
