import Header from './components/Header';
import HeroLawhere from './components/HeroLawhere';
import Servicios from './components/Servicios';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';
import Products from './components/Products';
import Contact from './components/Contact';
import Footer from './components/Footer';

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        {/* Hero principal */}
        <HeroLawhere />

        {/* Sección de Servicios (ya con tarjetas blancas y ver más) */}
        <Servicios />

        {/* Si necesitas más secciones, descomenta las necesarias */}
        {/* <WhyChooseUs /> */}
        {/* <Testimonials /> */}
        {/* <Products /> */}
        {/* <Contact /> */}

        {/* Footer con datos de contacto */}
        <Footer />
      </main>
    </>
  );
}
