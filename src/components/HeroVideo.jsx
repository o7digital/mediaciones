export default function HeroVideo() {
  return (
    <section className="relative h-screen w-full overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
        Tu navegador no soporta videos en HTML5.
      </video>
      <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-center items-center text-white text-center px-4">
        <h1 className="text-4xl md:text-6xl font-bold mb-4">Soluciones en Mediación</h1>
        <p className="text-lg md:text-xl mb-6 max-w-2xl">
          Confía en expertos para resolver tus conflictos legales sin juicios largos.
        </p>
        <button className="bg-white text-black font-semibold px-6 py-2 rounded hover:bg-gray-300 transition">
          Contáctanos
        </button>
      </div>
    </section>
  );
}
