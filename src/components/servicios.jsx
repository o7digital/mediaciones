import React from 'react';

export default function Servicios() {
  return (
    <section className="bg-[#0f0f0f] text-white py-20 px-4 md:px-20">
      <h2 className="text-4xl font-bold mb-10 text-center">Servicios de Mediación Legal</h2>

      <div className="space-y-12">

        {/* ¿Qué es la Mediación? */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">¿Qué es la Mediación?</h3>
          <p className="mb-2">La mediación es un método alternativo de resolución de conflictos en el que las partes, asistidas por un mediador imparcial, negocian acuerdos mutuamente satisfactorios. Se caracteriza por:</p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
            <li><strong>Voluntariedad:</strong> Las partes participan libremente.</li>
            <li><strong>Confidencialidad:</strong> La información compartida no se divulga.</li>
            <li><strong>Imparcialidad y neutralidad:</strong> El mediador no toma partido.</li>
            <li><strong>Flexibilidad:</strong> El proceso se adapta a las necesidades de las partes.</li>
          </ul>
        </div>

        {/* Servicios Ofrecidos */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Servicios Ofrecidos</h3>
          <p className="mb-2"><strong>Mediación Privada Certificada con Fe Pública:</strong> Acuerdos con validez legal y fuerza de cosa juzgada (vinculantes).</p>
          <p className="mb-4 font-semibold">Áreas de Especialización:</p>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
            <li><strong>Civil y Mercantil:</strong> Conflictos contractuales, comerciales, etc.</li>
            <li><strong>Bancario y Financiero:</strong> Reestructuración de deudas, mediación hipotecaria.</li>
            <li><strong>Administrativo y Amparo:</strong> Disputas con entidades públicas.</li>
            <li><strong>Familiar y Comunitaria:</strong> Conflictos familiares o sociales.</li>
            <li><strong>Corporativo y Cumplimiento Normativo:</strong> Gobierno corporativo, prevención de conflictos en empresas.</li>
          </ul>
        </div>

        {/* Beneficios */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Beneficios de la Mediación</h3>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
            <li><strong>Eficiencia:</strong> Reduce costos y tiempo vs. litigios tradicionales.</li>
            <li><strong>Preserva Relaciones:</strong> Fomenta soluciones colaborativas.</li>
            <li><strong>Ejecución Garantizada:</strong> Los convenios son exigibles legalmente (artículos 17 y 18 Constitucionales, Ley de Justicia Alternativa).</li>
          </ul>
        </div>

        {/* Sector Financiero */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Mediación en el Sector Financiero</h3>
          <p className="text-gray-300">Enfocada en reestructurar deudas (ej. préstamos hipotecarios) entre acreedores (bancos) y deudores. Su objetivo es evitar desalojos y promover acuerdos sostenibles.</p>
        </div>

        {/* Profesional */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Equipo Profesional</h3>
          <p className="text-gray-300"><strong>Lic. Emma Patricia Solís Cámara Cano:</strong><br />
          Mediador Privado Certificado (No. 122) por el Tribunal Superior de Justicia de la CDMX.<br />
          Experiencia en derecho corporativo, bancario y comunitario.</p>
        </div>

        {/* Fundamento Legal */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Fundamentos Legales</h3>
          <ul className="list-disc list-inside ml-4 space-y-1 text-gray-300">
            <li><strong>Constitución Mexicana (Art. 17):</strong> Promueve mecanismos alternativos de solución de controversias.</li>
            <li><strong>Ley de Justicia Alternativa:</strong> Los convenios de mediación tienen fuerza de cosa juzgada (Art. 38) y pueden registrarse en el Registro Público para garantizar su cumplimiento.</li>
          </ul>
        </div>

        {/* Contacto */}
        <div>
          <h3 className="text-2xl font-semibold mb-4">Contacto</h3>
          <ul className="text-gray-300 space-y-1">
            <li><strong>Correo:</strong> mediacionlegalprivada@gmail.com</li>
            <li><strong>Teléfono:</strong> 55 46 16 77 98</li>
            <li><strong>Dirección:</strong> Río Pánuco 43, Col. Renacimiento, Cuauhtémoc, CDMX.</li>
          </ul>
        </div>

      </div>
    </section>
  );
}
