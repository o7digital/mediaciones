import './HeroLawhere.css';

export default function HeroLawhere() {
  return (
    <section className="hero-section" id="home">
      {/* Video de fondo */}
      <video autoPlay muted loop playsInline className="hero-video">
        <source src="/video/mediacion.mp4" type="video/mp4" />
        Tu navegador no soporta videos HTML5.
      </video>

      {/* Contenido */}
      <div className="hero-overlay">
        {/* Bloques blancos (Misión y Visión) */}
        <div className="hero-left">
          <div className="hero-card">
            <h3>🕊️ Nuestra Misión</h3>
            <p>
              Promover soluciones justas y efectivas mediante procesos de mediación que fortalezcan
              las relaciones humanas y profesionales.
            </p>
          </div>
          <div className="hero-card">
            <h3>🌟 Nuestra Visión</h3>
            <p>
              Ser líderes en mediación legal privada, garantizando confianza, transparencia y acuerdos sostenibles.
            </p>
          </div>
        </div>

        {/* Estadísticas */}
        <div className="hero-right">
          <div className="stat-card">
            <h3>95%</h3>
            <p>Casos exitosos</p>
          </div>
          <div className="stat-card">
            <h3>15+</h3>
            <p>Años de experiencia</p>
          </div>
          <div className="stat-card">
            <h3>100%</h3>
            <p>Confidencialidad</p>
          </div>
        </div>
      </div>
    </section>
  );
}
