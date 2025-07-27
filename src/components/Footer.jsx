import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer-container">
        <p>© {new Date().getFullYear()} Mediaciones. Todos los derechos reservados.</p>
        <a href="#aviso-privacidad" className="footer-link">Aviso de Privacidad</a>
      </div>
    </footer>
  );
}
