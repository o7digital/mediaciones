import Header from './components/Header';
import HeroLawhere from './components/HeroLawhere';
import QuienesSomos from './components/QuienesSomos';
import Servicios from './components/Servicios';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main>
        {/* Hero principal */}
        <HeroLawhere />

        {/* Nueva sección Quiénes Somos */}
        <QuienesSomos />

        {/* Fondo blanco desde servicios hasta contacto */}
        <div style={{ backgroundColor: '#ffffff' }}>
          <Servicios />

          <div style={{ backgroundColor: '#ffffff', paddingBottom: '2rem' }}>
            <Testimonials />
          </div>

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
