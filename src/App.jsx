import Header from './components/Header';
import HeroLawhere from './components/HeroLawhere';
import ServicesShowcase from './components/ServicesShowcase';
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
        <HeroLawhere />
        <ServicesShowcase />
        <WhyChooseUs />
        <Testimonials />
        <Products />
        <Contact />
        <Footer />
      </main>
    </>
  );
}
