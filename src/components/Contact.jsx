import React from 'react';
import './Contact.css';
import { useLanguage } from '../context/LanguageContext';

export default function Contact() {
  const { copy } = useLanguage();
  const contact = copy.contact;

  return (
    <section id="contacto" className="contact-section">
      <div className="contact-layout">
        <div className="map-container">
          <iframe
            title={contact.mapTitle}
            className="map-frame"
            src="https://www.google.com/maps?q=R%C3%ADo%20P%C3%A1nuco%2043%2C%20Col.%20Renacimiento%2C%20Cuauht%C3%A9moc%2C%20CDMX&output=embed"
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            aria-label={contact.mapAria}
          />
        </div>

        <div className="contact-container">
          <h2 className="contact-title">{contact.title}</h2>
          <p className="contact-description">{contact.description}</p>
          <form className="contact-form">
            <input 
              type="text" 
              placeholder={contact.placeholders.name}
              required 
            />
            <input 
              type="email" 
              placeholder={contact.placeholders.email}
              required 
            />
            <textarea 
              placeholder={contact.placeholders.message}
              rows="5" 
              required
            ></textarea>
            <button type="submit" className="contact-btn">{contact.button}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
