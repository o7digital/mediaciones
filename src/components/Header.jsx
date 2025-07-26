import React from 'react';
import './Header.css';
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

export default function Header() {
  return (
    <header className="header">
      {/* Redes sociales y logo */}
      <div className="header-left">
        <div className="social-icons">
          <a href="#" target="_blank" rel="noopener noreferrer"><FaFacebookF /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaLinkedinIn /></a>
          <a href="#" target="_blank" rel="noopener noreferrer"><FaTiktok /></a>
        </div>
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
          <p className="phone">+52 55 4616 7798</p>
          <p className="email">info@mediaciones.com</p>
        </div>
      </div>
    </header>
  );
}
