import Header from './components/Header';
import HeroLawhere from './components/HeroLawhere';
import ServicesShowcase from './components/ServicesShowcase';
import WhyChooseUs from './components/WhyChooseUs';

export default function App() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <HeroLawhere />
        <ServicesShowcase />
        <WhyChooseUs />
      </div>
    </>
  );
}
