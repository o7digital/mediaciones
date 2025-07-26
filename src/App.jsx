import Header from './components/Header';
import HeroLawhere from './components/HeroLawhere';
import Servicios from './components/Servicios';
import Testimonials from './components/Testimonials';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero principal */}
        <HeroLawhere />

        {/* Sección de Servicios */}
        <Servicios />

        {/* Sección de Testimoniales */}
        <Testimonials />

        {/* Formulario de Contacto */}
        <Contact />

        {/* Footer */}
        <Footer />
      </main>
    </>
  );
}
