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
          <form className="contact-form" name="contact" method="POST" data-netlify="true" netlify-honeypot="bot-field">
            <input type="hidden" name="form-name" value="contact" />
            <p className="form-honeypot">
              <label>Do not fill this out: <input name="bot-field" /></label>
            </p>
            <label className="sr-only" htmlFor="contact-name">{contact.placeholders.name}</label>
            <input
              id="contact-name"
              name="name"
              autoComplete="name"
              type="text"
              placeholder={contact.placeholders.name}
              required
            />
            <label className="sr-only" htmlFor="contact-email">{contact.placeholders.email}</label>
            <input
              id="contact-email"
              name="email"
              autoComplete="email"
              type="email"
              placeholder={contact.placeholders.email}
              required
            />
            <label className="sr-only" htmlFor="contact-message">{contact.placeholders.message}</label>
            <textarea
              id="contact-message"
              name="message"
              placeholder={contact.placeholders.message}
              rows="5"
              required
            />
            <button type="submit" className="contact-btn">{contact.button}</button>
          </form>
        </div>
      </div>
    </section>
  );
}
