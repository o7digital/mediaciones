import Header from './components/Header';
import HeroLawhere from './components/HeroLawhere';
import QuienesSomos from './components/QuienesSomos';
import Mediacion from './components/Mediacion';
import Servicios from './components/Servicios';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        {/* Hero */}
        <HeroLawhere />

        {/* Secciones con fondo blanco desde aquí */}
        <div style={{ backgroundColor: '#ffffff' }}>
          {/* Quienes Somos */}
          <QuienesSomos />

          {/* La Mediación */}
          <Mediacion />

          {/* Servicios */}
          <Servicios />

          {/* Testimonios */}
          <Testimonials />

          {/* Contacto */}
          <Contact />
        </div>

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
