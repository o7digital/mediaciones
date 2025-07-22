import React from 'react';

export default function HeroLawhere() {
  return (
    <section className="relative h-screen bg-black text-white overflow-hidden">
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute w-full h-full object-cover opacity-30"
      >
        <source src="/video/hero-bg.mp4" type="video/mp4" />
        Tu navegador no soporta video.
      </video>

      <div className="relative z-10 max-w-7xl mx-auto px-6 py-16 flex flex-col md:flex-row items-center justify-between h-full">
        {/* Columna izquierda */}
        <div className="md:w-1/2 space-y-6">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Expert Advice, <span className="text-yellow-400">Powerful</span> Legal <span className="text-yellow-400">Representation</span>
          </h1>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-2">Our Mission</h3>
            <p className="text-sm text-gray-200">Habitant eleifend varius taciti mi semper fringilla vel morbi. Nisi blandit egestas cubilia lacus quis lectus viverra leo.</p>
          </div>

          <div className="bg-white bg-opacity-10 p-6 rounded-lg backdrop-blur-md">
            <h3 className="text-xl font-semibold mb-2">Our Vision</h3>
            <p className="text-sm text-gray-200">Lectus auctor sodales suscipit, condimentum purus eu. Vulputate viverra egestas pharetra, montes phasellus porttitor nostra tellus.</p>
          </div>
        </div>

        {/* Columna derecha */}
        <div className="md:w-1/2 mt-10 md:mt-0 flex flex-col items-center">
          <img
            src="/img/lawyer-placeholder.png"
            alt="Lawyer"
            className="w-72 h-auto rounded-lg shadow-lg"
          />
          <div className="mt-6 grid grid-cols-2 gap-4 text-center">
            <div>
              <h2 className="text-3xl font-bold text-yellow-400">98 575+</h2>
              <p className="text-sm">Courtroom Hours</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-yellow-400">12K</h2>
              <p className="text-sm">Satisfied Clients</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-yellow-400">86%</h2>
              <p className="text-sm">Successful Arbitration</p>
            </div>
            <div>
              <h2 className="text-3xl font-bold text-yellow-400">35+</h2>
              <p className="text-sm">Years of Experience</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
