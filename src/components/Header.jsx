import React from 'react';

export default function Header() {
  return (
    <header className="bg-white shadow-md fixed w-full top-0 z-50">
      <div className="max-w-7xl mx-auto px-6 py-4 flex justify-between items-center">
        {/* Logo */}
        <div className="text-xl font-bold text-gray-800">
          Mediaciones
        </div>

        {/* Menu */}
        <nav className="space-x-6 text-sm font-medium text-gray-700">
          <a href="#home" className="hover:text-blue-600 transition">Home</a>
          <a href="#about" className="hover:text-blue-600 transition">Quiénes somos</a>
          <a href="#services" className="hover:text-blue-600 transition">Servicios</a>
          <a href="#products" className="hover:text-blue-600 transition">Productos</a>
          <a href="#contact" className="hover:text-blue-600 transition">Contacto</a>
        </nav>
      </div>
    </header>
  );
}
