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
      desc: 'Reestructuración de deudas, mediación hipotecaria.',
      detalles: 'Experiencia en reestructuras, recuperación de cartera, negociación con instituciones, créditos hipotecarios y garantías. Acompañamiento desde la negociación hasta la formalización.',
    },
    {
      titulo: 'Áreas Administrativo y Amparo',
      desc: 'Disputas con entidades públicas.',
      detalles: 'Impugnación de actos de autoridad, recursos administrativos y juicios de amparo. Estrategia integral para prevenir, corregir o anular actos que vulneren derechos.',
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
