import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-white py-8 text-center text-sm">
      <p>&copy; {new Date().getFullYear()} Mediaciones. Todos los derechos reservados.</p>
      <p className="mt-2">Sitio desarrollado por tu equipo de confianza.</p>
    </footer>
  );
}
