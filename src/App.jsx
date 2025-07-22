import Header from './components/Header';
import HeroLawhere from './components/HeroLawhere';
import ServicesShowcase from './components/ServicesShowcase';
import WhyChooseUs from './components/WhyChooseUs';
import Testimonials from './components/Testimonials';

export default function App() {
  return (
    <>
      <Header />
      <main className="pt-20">
        <HeroLawhere />
        <ServicesShowcase />
        <WhyChooseUs />
        <Testimonials />
        {/* Aquí luego agregaremos Productos y Contacto */}
      </main>
    </>
  );
}
