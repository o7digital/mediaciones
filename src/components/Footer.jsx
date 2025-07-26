import React from 'react';

export default function Footer() {
  return (
    <footer className="bg-[#0f0f0f] text-white py-6 text-center text-sm">
      <p>
        © 2025 Mediaciones. Todos los derechos reservados. 
        <a
          href="/aviso-privacidad"
          className="ml-2 underline hover:text-blue-400"
        >
          Aviso de Privacidad
        </a>
      </p>
    </footer>
  );
}
