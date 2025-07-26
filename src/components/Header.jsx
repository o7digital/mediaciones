import React from 'react';
import './Header.css';
import { FaFacebook, FaLinkedin, FaTiktok } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        {/* Redes sociales */}
        <div className="social-icons">
          <a href="#"><FaFacebook /></a>
          <a href="#"><FaLinkedin /></a>
          <a href="#"><FaTiktok /></a>
        </div>
        <h1 className="logo">Mediaciones</h1>
      </div>

      {/* Menú horizontal */}
      <nav className="header-nav">
        <a href="#home">Home</a>
        <a href="#quienes">Quiénes somos</a>
        <a href="#servicios">Servicios</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
      </nav>

      {/* Teléfono y correo */}
      <div className="header-right">
        <div className="contact-info">
          <p>+00-123-456789</p>
          <p>info@mediaciones.com</p>
        </div>
      </div>
    </header>
  );
}
