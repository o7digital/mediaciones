import React from 'react';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        {/* Columna 1 */}
        <div className="footer-col">
          <h3 className="footer-logo">Mediaciones</h3>
          <p>
            Soluciones legales efectivas a través de mediación privada certificada,
            reduciendo tiempos, costos y preservando relaciones.
          </p>
        </div>

        {/* Columna 2 */}
        <div className="footer-col">
          <h4>Enlaces</h4>
          <ul>
            <li><a href="#home">Home</a></li>
            <li><a href="#quienes">Quiénes somos</a></li>
            <li><a href="#servicios">Servicios</a></li>
            <li><a href="#productos">Productos</a></li>
            <li><a href="#contacto">Contacto</a></li>
          </ul>
        </div>

        {/* Columna 3 */}
        <div className="footer-col">
          <h4>Contacto</h4>
          <p>Tel: +52 55 4616 7798</p>
          <p>Email: info@mediaciones.com</p>
          <p>Río Pánuco 43, Col. Renacimiento, Cuauhtémoc, CDMX</p>
        </div>
      </div>

      {/* Barra inferior */}
      <div className="footer-bottom">
        <p>© 2025 Mediaciones. Todos los derechos reservados. 
          <a href="/aviso-privacidad" className="aviso-link"> Aviso de Privacidad</a>
        </p>
      </div>
    </footer>
  );
}
