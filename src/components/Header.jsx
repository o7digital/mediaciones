// src/components/Header.jsx
import './Header.css';

export default function Header() {
  return (
    <header className="header">
      <div className="header-top">
        <div className="social-icons">
          <a href="#" aria-label="Facebook"><i className="fab fa-facebook-f"></i></a>
          <a href="#" aria-label="LinkedIn"><i className="fab fa-linkedin-in"></i></a>
          <a href="#" aria-label="TikTok"><i className="fab fa-tiktok"></i></a>
        </div>
        <div className="contact-info">
          <span><i className="fas fa-phone-alt"></i> +00-123-456789</span>
          <span><i className="fas fa-envelope"></i> info@mediaciones.com</span>
        </div>
      </div>
      <nav className="navbar">
        <div className="logo">Mediaciones</div>
        <ul className="nav-links">
          <li><a href="#home">Home</a></li>
          <li><a href="#quienes">Quiénes somos</a></li>
          <li><a href="#servicios">Servicios</a></li>
          <li><a href="#productos">Productos</a></li>
          <li><a href="#contacto">Contacto</a></li>
        </ul>
      </nav>
    </header>
  );
}
