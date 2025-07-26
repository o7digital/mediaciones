import Header from './components/Header';
import HeroLawhere from './components/HeroLawhere';
import Servicios from './components/Servicios';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      {/* Header con menú y redes sociales */}
      <Header />

      <main className="pt-20">
        {/* Hero con video de fondo y cuadros */}
        <HeroLawhere />

        {/* Servicios con tarjetas */}
        <Servicios />

        {/* Testimoniales */}
        <Testimonials />

        {/* Contacto con formulario */}
        <Contact />

        {/* Footer con datos de contacto */}
        <Footer />
      </main>
    </>
  );
}
