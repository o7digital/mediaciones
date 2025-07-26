import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-content">
        <p>
          <strong>Correo:</strong> mediacionlegalprivada@gmail.com
        </p>
        <p>
          <strong>Teléfono:</strong> 55 46 16 77 98
        </p>
        <p>
          <strong>Dirección:</strong> Río Pánuco 43, Col. Renacimiento, Cuauhtémoc, CDMX.
        </p>
      </div>
      <p className="footer-copy">© 2024 Mediaciones. Todos los derechos reservados.</p>
    </footer>
  );
}
