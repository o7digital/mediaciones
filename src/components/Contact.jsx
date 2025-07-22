import React from 'react';

export default function Contact() {
  return (
    <section id="contact" className="py-20 bg-gray-100 text-gray-800">
      <div className="max-w-4xl mx-auto px-6 text-center">
        <h2 className="text-3xl font-bold mb-8">Contáctanos</h2>
        <form className="space-y-6 text-left">
          <input type="text" placeholder="Nombre" className="w-full p-3 rounded border" />
          <input type="email" placeholder="Correo electrónico" className="w-full p-3 rounded border" />
          <textarea rows="5" placeholder="Mensaje" className="w-full p-3 rounded border" />
          <button className="bg-blue-600 text-white px-6 py-2 rounded hover:bg-blue-700 transition">Enviar</button>
        </form>
        <div className="mt-8 text-sm text-gray-600">
          También puedes escribirnos a <a href="mailto:contacto@mediaciones.mx" className="text-blue-600">contacto@mediaciones.mx</a>
        </div>
      </div>
    </section>
  );
}
