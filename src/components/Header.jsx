import React from 'react';
import './Header.css';
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      <div className="header-left">
        {/* Redes sociales */}
        <a href="#" className="social"><FaFacebookF /></a>
        <a href="#" className="social"><FaLinkedinIn /></a>
        <a href="#" className="social"><FaTiktok /></a>

        {/* Logo / Nombre */}
        <h1 className="logo">Mediaciones</h1>
      </div>

      {/* Menú de navegación */}
      <nav className="nav-menu">
        <a href="#">Home</a>
        <a href="#quienes-somos">Quiénes somos</a>
        <a href="#servicios">Servicios</a>
        <a href="#productos">Productos</a>
        <a href="#contacto">Contacto</a>
      </nav>

      {/* Teléfono y correo */}
      <div className="header-right">
        <div className="contact-box">
          <p className="phone">+00-123-456789</p>
          <p className="email">info@mediaciones.com</p>
        </div>
      </div>
    </header>
  );
}
