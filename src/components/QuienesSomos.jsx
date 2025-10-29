import './QuienesSomos.css';
import AssociatesCarousel from './AssociatesCarousel';

export default function QuienesSomos() {
  return (
    <section className="quienes-somos-section" id="quienes-somos">
      <h2>¿Quiénes Somos?</h2>
      <p>
        SCM Y ABOGADOS ASOCIADOS es un despacho orientado a la resolución inteligente de controversias. Nuestra
        práctica combina mediación privada certificada con Fe Pública —que otorga validez legal y fuerza de cosa
        juzgada a los convenios— con estrategia jurídica integral. Así, logramos acuerdos ejecutables, reduciendo
        litigios innecesarios y maximizando la seguridad jurídica, los tiempos y los costos.
      </p>

      <h3 style={{ color: '#003366' }}>Filosofía</h3>
      <p>
        Escuchamos, comprendemos intereses y diseñamos rutas de solución que equilibran lo humano y lo legal. Actuamos
        con ética, confidencialidad y transparencia.
      </p>

      <h3 style={{ color: '#003366' }}>Metodología</h3>
      <ul style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto 1rem', lineHeight: 1.8, fontSize: '1.25rem' }}>
        <li>Diagnóstico claro del conflicto y evaluación de riesgos y alternativas.</li>
        <li>Negociación asistida y búsqueda de consensos entre las partes.</li>
        <li>Formalización de acuerdos con Fe Pública cuando procede.</li>
        <li>Seguimiento del cumplimiento para asegurar efectividad y permanencia.</li>
      </ul>

      <h3 style={{ color: '#003366' }}>Áreas de práctica</h3>
      <ul style={{ textAlign: 'left', maxWidth: '1000px', margin: '0 auto 1.5rem', lineHeight: 1.8, fontSize: '1.25rem' }}>
        <li>Civil y mercantil.</li>
        <li>Bancario y financiero (reestructuración de deudas, mediación hipotecaria, negociación con instituciones).</li>
        <li>Administrativo y amparo (multas, sanciones, licencias y actos de autoridad).</li>
        <li>Familiar y comunitaria.</li>
        <li>Corporativo, gobierno corporativo y cumplimiento normativo (compliance).</li>
      </ul>

      <AssociatesCarousel />
    </section>
  );
}
