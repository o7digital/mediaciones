import React from 'react';
import './Header.css';
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <div className="header-container">
        {/* Redes sociales */}
        <div className="social-icons">
          <a href="#"><FaFacebookF /></a>
          <a href="#"><FaLinkedinIn /></a>
          <a href="#"><FaTiktok /></a>
        </div>

        {/* Menú actualizado */}
        <nav className="main-nav">
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#quienes-somos">Quiénes Somos</a></li>
            <li><a href="#mediacion">La Mediación</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </nav>

        {/* Teléfono y correo */}
        <div className="contact-box">
          <p>Tel: +52 55 4616 7798</p>
          <p>info@mediaciones.com</p>
        </div>
      </div>
    </header>
  );
}
