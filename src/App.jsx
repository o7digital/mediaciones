import Header from './components/Header';
import HeroLawhere from './components/HeroLawhere';
import ServicesShowcase from './components/ServicesShowcase';

export default function App() {
  return (
    <>
      <Header />
      <div className="pt-20">
        <HeroLawhere />
        <ServicesShowcase />
      </div>
    </>
  );
}
