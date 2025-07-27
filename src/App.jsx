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

        {/* Fondo blanco desde aquí hacia abajo */}
        <div style={{ backgroundColor: '#ffffff' }}>
          {/* Quiénes Somos */}
          <QuienesSomos />

          {/* La Mediación */}
          <Mediacion />

          {/* Servicios */}
          <Servicios />

          {/* Testimoniales */}
          <div style={{ backgroundColor: '#ffffff', paddingBottom: '2rem' }}>
            <Testimonials />
          </div>

          {/* Contacto */}
          <div style={{ backgroundColor: '#ffffff', paddingBottom: '2rem' }}>
            <Contact />
          </div>
        </div>

        {/* Footer con Aviso de Privacidad */}
        <Footer />
      </main>
    </>
  );
}
