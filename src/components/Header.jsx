import React from 'react';
import './Header.css';
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      {/* Redes sociales */}
      <div className="social-icons">
        <a href="#" aria-label="Facebook"><FaFacebookF /></a>
        <a href="#" aria-label="LinkedIn"><FaLinkedinIn /></a>
        <a href="#" aria-label="TikTok"><FaTiktok /></a>
      </div>

      {/* Logo */}
      <div className="logo">Mediaciones</div>

      {/* Menú */}
      <nav className="nav-menu">
        <a href="#">Home</a>
        <a href="#">Quiénes somos</a>
        <a href="#">Servicios</a>
        <a href="#">Productos</a>
        <a href="#">Contacto</a>
      </nav>

      {/* Contacto */}
      <div className="contact-info">
        <span>+00-123-456789</span>
        <span>info@mediaciones.com</span>
      </div>
    </header>
  );
}
