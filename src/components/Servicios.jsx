import React from 'react';
import './Servicios.css';
import ServicesCarousel from './ServicesCarousel';

export default function Servicios() {
  const servicios = [
    {
      titulo: 'Mediación Privada Certificada con Fe Pública',
      desc: 'Acuerdos con validez legal y fuerza de cosa juzgada (vinculantes).',
      detalles: 'Ofrecemos mediación privada certificada con fe pública para resolver conflictos de manera eficiente y con validez legal. Preparación de convenios, firmas y seguimiento del cumplimiento.',
    },
    {
      titulo: 'Áreas Civil y Mercantil',
      desc: 'Conflictos contractuales, comerciales, entre otros.',
      detalles: 'Atendemos controversias civiles y mercantiles: incumplimientos de contrato, arrendamiento, cobros, daños y perjuicios, conflictos entre socios y proveedores, entre otros.',
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
