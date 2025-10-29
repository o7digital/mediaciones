import React from 'react';
import './Servicios.css';
import ServicesCarousel from './ServicesCarousel';

export default function Servicios() {
  const servicios = [
    {
      titulo: 'Mediación Privada Certificada con Fe Pública',
      desc: 'Acuerdos con validez legal y fuerza de cosa juzgada (vinculantes).',
      detalles: 'Ofrecemos mediación privada certificada con fe pública para resolver conflictos de manera eficiente y con validez legal. Preparación de convenios, firmas y seguimiento del cumplimiento.',
      bullets: [
        'Acuerdos basados en los intereses y necesidades (búsqueda de consensos).',
        'Acuerdo benéfico para las partes.',
        'Seguridad, economía, Fe Pública y certeza jurídica para los involucrados.',
      ],
      modal: (
        <>
          <p>
            La <strong>mediación privada certificada</strong> ofrece una alternativa eficaz y segura para la resolución
            de conflictos sin necesidad de recurrir a un juicio.
          </p>
          <p>
            A través de la <strong>intervención de mediadores certificados con Fe Pública</strong>, los acuerdos alcanzados
            adquieren <strong>validez legal y fuerza de cosa juzgada</strong>, lo que significa que son <strong>vinculantes y ejecutables</strong>
            ante cualquier autoridad.
          </p>
          <p>Este tipo de mediación garantiza:</p>
          <ul>
            <li>
              <strong>Seguridad jurídica</strong>, al estar respaldada por la ley y por un mediador autorizado.
            </li>
            <li>
              <strong>Economía procesal</strong>, ya que reduce costos y tiempos en comparación con un proceso judicial.
            </li>
            <li>
              <strong>Fe Pública</strong>, que otorga <strong>certeza y autenticidad</strong> a los convenios firmados.
            </li>
            <li>
              <strong>Certeza jurídica</strong> para todas las partes involucradas, asegurando que los compromisos se cumplan
              conforme al marco legal vigente.
            </li>
          </ul>
          <p>
            De esta forma, la mediación privada certificada promueve la <strong>solución pacífica de controversias</strong>,
            el <strong>diálogo constructivo</strong> y el fortalecimiento de la <strong>confianza entre las partes</strong>.
          </p>
        </>
      ),
    },
    {
      titulo: 'Áreas Civil y Mercantil',
      desc: 'Conflictos contractuales y comerciales. Incumplimientos, disputas y arrendamientos.',
      detalles: 'Atendemos controversias civiles y mercantiles con soluciones legales y consensuadas, evitando procesos judiciales largos y costosos.',
      bullets: [
        'Conflictos contractuales y comerciales.',
        'Incumplimiento de acuerdos o pagos.',
        'Disputas entre socios o proveedores.',
        'Arrendamientos, compraventa y obligaciones civiles.',
      ],
      modal: (
        <>
          <p>
            En esta área abordamos los conflictos derivados de relaciones civiles y comerciales, ofreciendo
            soluciones legales y consensuadas que eviten procesos judiciales largos y costosos.
          </p>
          <p>Atendemos asuntos como:</p>
          <ul>
            <li>
              Conflictos contractuales y comerciales, derivados de compraventas, prestación de servicios o distribución.
            </li>
            <li>
              Incumplimiento de obligaciones o pagos, ofreciendo mecanismos de mediación para lograr acuerdos de pago o resarcimiento.
            </li>
            <li>
              Disputas entre socios, proveedores o clientes, buscando restablecer la confianza y continuidad en las relaciones comerciales.
            </li>
            <li>
              Arrendamientos, comodatos, préstamos y otras relaciones civiles, garantizando seguridad jurídica a ambas partes.
            </li>
          </ul>
          <p>
            Nuestra mediación en materia civil y mercantil promueve acuerdos rápidos, económicos y con validez legal,
            generando certeza jurídica y evitando la saturación judicial.
          </p>
          <p>
            El objetivo es que ambas partes obtengan una solución justa y equilibrada, preservando sus intereses y
            relaciones comerciales a futuro.
          </p>
        </>
      ),
    },
    {
      titulo: 'Áreas Bancario y Financiero',
      desc: 'Reestructuración de deudas, mediación hipotecaria y acuerdos con instituciones.',
      detalles: 'Acompañamiento especializado para resolver conflictos con instituciones financieras mediante mediación y negociación efectiva.',
      bullets: [
        'Reestructuración de deudas.',
        'Mediación hipotecaria.',
        'Acuerdos con instituciones financieras.',
        'Conflictos por créditos o garantías.',
      ],
      modal: (
        <>
          <p>
            En esta área se brinda acompañamiento especializado para la solución de conflictos entre particulares e instituciones
            financieras, mediante procesos de mediación que buscan acuerdos sostenibles y justos.
          </p>
          <p>Atendemos principalmente:</p>
          <ul>
            <li>
              Reestructuración de deudas, logrando convenios que permitan a los deudores cumplir con sus obligaciones sin
              comprometer su estabilidad económica.
            </li>
            <li>
              Mediación hipotecaria, orientada a conservar el patrimonio familiar y evitar juicios o remates innecesarios.
            </li>
            <li>
              Negociación con bancos, financieras y casas de crédito, buscando plazos, intereses o condiciones más favorables para ambas partes.
            </li>
            <li>
              Conflictos por créditos, tarjetas o garantías, fomentando acuerdos que restablezcan la confianza y protejan los derechos de los involucrados.
            </li>
          </ul>
          <p>
            Nuestra mediación en materia bancaria y financiera garantiza seguridad jurídica, transparencia y economía procesal,
            ofreciendo soluciones con validez legal y certeza jurídica reconocidas por las instituciones.
          </p>
        </>
      ),
    },
    {
      titulo: 'Áreas Administrativo y Amparo',
      desc: 'Disputas con entidades públicas, multas, licencias y amparo.',
      detalles: 'Asesoría y mediación especializada en conflictos con autoridades administrativas para soluciones legales sin litigios prolongados.',
      bullets: [
        'Disputas con entidades públicas.',
        'Multas, sanciones o clausuras.',
        'Negativas de permisos o licencias.',
        'Defensa y protección de derechos ciudadanos.',
      ],
      modal: (
        <>
          <p>
            En esta área se ofrece asesoría y mediación especializada en conflictos entre particulares y autoridades
            gubernamentales o administrativas, promoviendo soluciones legales sin necesidad de litigios prolongados.
          </p>
          <p>Atendemos casos como:</p>
          <ul>
            <li>
              Disputas con entidades públicas, derivadas de actos administrativos que afectan derechos o intereses legítimos.
            </li>
            <li>
              Multas, sanciones o clausuras, buscando su revisión o modificación a través del diálogo y la mediación.
            </li>
            <li>
              Negativas o retrasos en permisos, licencias o trámites administrativos, impulsando acuerdos que permitan la regularización.
            </li>
            <li>
              Procedimientos de amparo, orientados a proteger los derechos fundamentales frente a actos de autoridad considerados injustos o arbitrarios.
            </li>
          </ul>
          <p>
            Nuestra intervención garantiza certeza jurídica, transparencia y economía procesal, privilegiando siempre la resolución
            pacífica de controversias y la protección efectiva de los derechos ciudadanos.
          </p>
        </>
      ),
    },
    {
      titulo: 'Áreas Familiar y Comunitaria',
      desc: 'Conflictos familiares o sociales.',
      detalles: 'Mediación en divorcios, pensiones, guarda y custodia, herencias y conflictos vecinales o comunitarios, con enfoque restaurativo y acuerdos sostenibles.',
    },
    {
      titulo: 'Áreas Corporativo y Cumplimiento Normativo',
      desc: 'Gobierno corporativo, prevención de conflictos en empresas.',
      detalles: 'Diseño de políticas, gobierno corporativo, cumplimiento regulatorio, prevención de riesgos y solución de disputas corporativas mediante ADR.',
    },
  ];

  return (
    <section id="servicios" className="servicios-section">
      <div className="servicios-container">
        <h2 className="servicios-title">Nuestros Servicios</h2>
        <ServicesCarousel items={servicios} />
      </div>
    </section>
  );
}
