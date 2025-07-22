import Header from './components/Header';
import HeroLawhere from './components/HeroLawhere';

export default function App() {
  return (
    <>
      <Header />
      <div className="pt-20"> {/* espacio por el header fijo */}
        <HeroLawhere />
      </div>
    </>
  );
}
