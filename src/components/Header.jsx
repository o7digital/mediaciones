import React, { useState } from 'react';
import { FaFacebookF, FaLinkedinIn, FaTiktok } from 'react-icons/fa';

export default function Header() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 left-0 w-full bg-black bg-opacity-80 text-white z-50 shadow-md">
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Redes sociales */}
        <div className="flex space-x-4">
          <a href="#" aria-label="Facebook" className="hover:text-blue-500">
            <FaFacebookF />
          </a>
          <a href="#" aria-label="LinkedIn" className="hover:text-blue-400">
            <FaLinkedinIn />
          </a>
          <a href="#" aria-label="TikTok" className="hover:text-gray-300">
            <FaTiktok />
          </a>
        </div>

        {/* Logo / Nombre */}
        <h1 className="text-lg font-bold">Mediaciones</h1>

        {/* Menú Desktop */}
        <nav className="hidden md:flex space-x-8">
          <a href="#home" className="hover:text-blue-400">Home</a>
          <a href="#quienes-somos" className="hover:text-blue-400">Quiénes Somos</a>
          <a href="#mediacion" className="hover:text-blue-400">La Mediación</a>
          <a href="#servicios" className="hover:text-blue-400">Servicios</a>
          <a href="#contacto" className="hover:text-blue-400">Contacto</a>
        </nav>

        {/* Teléfono y correo */}
        <div className="hidden md:block bg-white text-black px-3 py-1 rounded text-sm text-right">
          <p>Tel: +52 55 4616 7798</p>
          <p
