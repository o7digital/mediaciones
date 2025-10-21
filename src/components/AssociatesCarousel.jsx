import { useEffect, useMemo, useState } from 'react';
import './AssociatesCarousel.css';

const associates = [
  {
    name: 'Emma Patricia Solís Cámara Cano',
    photo: '/img/emma.jpg',
    alt: 'Emma Patricia Solís Cámara Cano',
    bio:
      'Licenciada en Derecho por la Universidad Iberoamericana, Maestría en Derechos Humanos (UIA) y diplomado en Derecho Corporativo por el ITAM. Mediadora privada certificada (No. 122) por el Tribunal Superior de Justicia. Experiencia en mediación comunitaria y corporativa con empresas como Grupo Minero de México, Banca Monex, Bancomer y comunidades agrarias. Fue presidenta de la Asociación de Egresados de Derecho de la Universidad Iberoamericana y miembro del Ilustre y Nacional Colegio de Abogados de México.',
  },
  {
    name: 'José María Fernández Alonso',
    photo: '/img/jose-maria.jpg',
    alt: 'José María Fernández Alonso',
    bio:
      'Egresado de la licenciatura en Derecho por la Universidad Panamericana, contando con especialidades en Derecho Económico Corporativo y Derecho Fiscal, por la misma Universidad Panamericana. Tiene una trayectoria de 34 años en el sector financiero. Ha trabajado como Gerente Jurídico en Banco Nacional de México S.A., Director Jurídico de Financiamiento Corporativo en Banco Santander, S.A. y Director General Adjunto de Autorizaciones al Sistema Financiero A en la Comisión Nacional Bancaria y de Valores.',
  },
  {
    name: 'Jaime Villa Escobosa',
    photo: '/img/jaime-villa.jpg',
    alt: 'Jaime Villa Escobosa',
    bio:
      'Egresado de la Licenciatura en Derecho del Instituto Tecnológico Autónomo de México. Tiene una trayectoria de 22 años en el sector financiero, tanto público como privado. Ha trabajado para Banco de México, en la Dirección de Disposiciones de Banca Central. Fue abogado general de Dynaworld Bank & Trust (institución bancaria constituida en las Islas Caimán) y Subdirector Jurídico Corporativo de Confía, S. A., Institución de Banca Múltiple. Fungió como Coordinador Jurídico en Citibank, S.A. En 1999 se incorporó a la entonces recién creada Comisión Nacional para la Protección y Defensa de los Usuarios de Servicios Financieros (Condusef) como Director General Jurídico Corporativo.',
  },
  {
    name: 'José Medina Gómez',
    photo: '/img/jose-medina.jpg',
    alt: 'José Medina Gómez',
    bio:
      'Egresado de la Licenciatura de Derecho de la Universidad Iberoamericana. Con una trayectoria de 10 años en el Sector Público y 14 años de práctica legal en materia civil, mercantil, administrativa y financiera. Ha trabajado en la Gerencia Jurídica de Petróleos Mexicanos como abogado en las áreas penal y laboral; en la Subsidiaria Pemex-Refinación, como asesor legal del Subdirector de Distribución; posteriormente en la Cámara de Senadores como asesor legal de la Comisión de Comercio y por último como Subdirector de Concesiones de Zona Federal Marítimo Terrestre en la Secretaría del Medio Ambiente y Recursos Naturales. Durante este tiempo, ha representado ante la CONDUSEF, CNBV, SHCP y BANXICO y diversas autoridades administrativas a diversas Instituciones Financieras como Banca Confía (liquidada), CITIBANK S. A., BANORTE, BANAMEX, HSBC, GE Money Bank, S.A. y GE Consumo México.',
  },
  {
    name: 'Fabián Alejandro Guzmán García',
    photo: '/img/fabian-ale.jpg',
    alt: 'Fabián Alejandro Guzmán García',
    bio:
      'Egresado de la Escuela Libre de Derecho. Se especializa en las áreas bursátiles, bancaria y financiera tanto a nivel nacional como internacional. Fue abogado en la Dirección de Disposiciones de Banca Central de Banco de México para operaciones de cambios internacionales, metales, deuda pública externa y control de cambios. Durante nueve años trabajó en Mijares, Angoitia, Cortés y Fuentes y en Fried, Frank, Harris, Shriver & Jacobson, dos importantes firmas en México y Nueva York. Fue socio fundador y socio encargado del área financiera de Romo, Paillés y Guzmán, S.C. durante más de 10 años. Como abogado en México y en Nueva York ha participado en un gran número de operaciones en el mercado de capitales durante los últimos 20 años.',
  },
  {
    name: 'Félix Alonso Garza Roa',
    photo: '/img/felix-alonso.jpg',
    alt: 'Félix Alonso Garza Roa',
    bio:
      'Egresado de la licenciatura en Derecho del Tecnológico Universitario de México. Cuenta con maestría en Derecho Civil y doctorado en Derecho y Ciencias Jurídicas así como más de 20 años de experiencia, especializándose en el área de litigio civil-mercantil y familiar. Su práctica incluye la representación de clientes nacionales e internacionales en todos los niveles del sistema Judicial, tanto Locales como Federales. Así mismo, cuenta con experiencia en materia de análisis y dictaminación de asuntos litigiosos en general, destacando la práctica de diversas auditorias sobre cartera litigiosa de distintas entidades públicas y privadas. Desde 1999 a 2010, colaboró como socio en el despacho Isos & Poire, Abogados S.C., fungiendo como Director del área de Litigio. Socio del despacho Villa, Medina, Guzmán y Gil Abogados, S.C. de 2011 a la fecha.',
  },
  {
    name: 'José Manuel Guillemot Cesari',
    photo: '/img/jose-manuel2.jpg',
    alt: 'José Manuel Guillemot Cesari',
    bio:
      'Egresado de la Licenciatura en Derecho del Instituto Tecnológico Autónomo de México. Tiene una trayectoria de 30 años en el sector financiero, tanto público como privado. Comenzó su carrera como Subdirector de Proyectos y Desarrollo en la Comisión Nacional Bancaria y de Valores, para posteriormente trabajar como Director Jurídico de Latinoamérica para Merrill Lynch/Bank of America y posteriormente como Director Jurídico y Compliance de The Royal Bank of Scotland. Fungió como Presidente del Comité de Contralores Normativos y participó en los Comités Jurídico, de Certificación y Relaciones Públicas de la Asociación Mexicana de Intermediarios Bursátiles. Sus áreas de práctica son: Financiero (incluyendo Bancario y Bursátil), Tecnología Financiera (FinTech), Compliance, Corporativo, Mercantil y Prevención de Lavado de Dinero.',
  },
  {
    name: 'Fernando Luis Corvera Caraza',
    photo: '/img/fernando-luis.jpg',
    alt: 'Fernando Luis Corvera Caraza',
    bio:
      'Es abogado, egresado de la Universidad Iberoamericana, A.C. Cuenta con un diplomado en Derecho Económico y Corporativo en la Universidad Panamericana. Tiene amplia experiencia laboral en el sector público. Ingresó al Banco de México en 1981. A partir de 1989 ocupó diversos cargos de funcionario, entre los que destacan: Gerente de Disposiciones al Sistema Financiero, Director de Disposiciones de Banca Central, Secretario de la Junta de Gobierno y Secretario de la Comisión de Cambios del propio Banco Central. Ha impartido diversas conferencias tanto en México como en el extranjero. Participó como Vocal en la Junta de Gobierno de la Comisión Nacional Bancaria y de Valores, fue Secretario del Comité de Remuneraciones del Banco de México y Coordinador del Comité de Información del propio Banco, en materia de Transparencia. Recibió una condecoración al mérito en Derecho Financiero en 2016, por el organismo denominado Institución del Día del Abogado, A.C.',
  },
  {
    name: 'José Antonio Bahena Morales',
    photo: '/img/jose-antonio2.jpg',
    alt: 'José Antonio Bahena Morales',
    bio:
      'Egresado de la Licenciatura en Derecho por la Universidad Nacional Autónoma de México. Tiene una trayectoria de 37 años de servicio en la Administración Pública Federal, en el sector financiero. Ha trabajado para la Secretaría de Hacienda y Crédito Público, en la extinta Comisión Nacional de Valores y en la Comisión Nacional Bancaria y de Valores, ocupando diversos cargos de funcionario, entre los que destacan: Director General de Disposiciones, Autorizaciones y Consultas y Director General de Autorizaciones al Sistema Financiero, participando con tal carácter en la conformación del marco regulatorio bancario y bursátil mexicano y en numerosos procesos de constitución, organización y operación de entidades del sector. Ha sido catedrático en la Universidad Nacional Autónoma de México en las materias de Introducción al Estudio del Derecho y Derecho Civil y expositor en diversos diplomados de prestigiosas Universidades del país.',
  },
];

export default function AssociatesCarousel() {
  const [index, setIndex] = useState(0); // premier visible
  const [cardsPerView, setCardsPerView] = useState(4);
  const total = associates.length;
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const compute = () => {
      const w = window.innerWidth;
      if (w >= 1280) return 4;
      if (w >= 1024) return 3;
      if (w >= 640) return 2;
      return 1;
    };
    const update = () => setCardsPerView(compute());
    update();
    window.addEventListener('resize', update);
    return () => window.removeEventListener('resize', update);
  }, []);

  const maxIndex = Math.max(0, total - cardsPerView);
  const clampedIndex = useMemo(() => Math.min(index, maxIndex), [index, maxIndex]);

  const prev = () => setIndex((i) => (i <= 0 ? maxIndex : i - 1));
  const next = () => setIndex((i) => (i >= maxIndex ? 0 : i + 1));

  const pages = Math.max(1, Math.ceil(total / cardsPerView));
  const activePage = Math.floor(clampedIndex / cardsPerView);

  const onDot = (p) => setIndex(Math.min(p * cardsPerView, maxIndex));

  // Detectar móvil y auto-avanzar cada 10s solo en móvil
  useEffect(() => {
    const mq = window.matchMedia('(max-width: 767px)');
    const apply = () => setIsMobile(mq.matches);
    apply();
    const handler = (e) => setIsMobile(e.matches);
    if (mq.addEventListener) mq.addEventListener('change', handler);
    else mq.addListener(handler);
    return () => {
      if (mq.removeEventListener) mq.removeEventListener('change', handler);
      else mq.removeListener(handler);
    };
  }, []);

  useEffect(() => {
    if (!isMobile || total === 0) return;
    const id = setInterval(() => {
      setIndex((i) => (i >= maxIndex ? 0 : i + 1));
    }, 10000);
    return () => clearInterval(id);
  }, [isMobile, maxIndex, total]);

  return (
    <div
      className="assoc-carousel"
      role="region"
      aria-label="Carrusel de asociados"
      style={{ ['--cards-per-view']: cardsPerView }}
    >
      <button className="assoc-arrow left" onClick={prev} aria-label="Anterior">‹</button>

      <div className="assoc-viewport">
        <div
          className="assoc-track"
          style={{ transform: `translateX(-${(clampedIndex * 100) / cardsPerView}%)` }}
        >
          {associates.map((a, i) => (
            <div className="assoc-card" key={i}>
              <div className="assoc-card-inner">
                <div className="assoc-photo">
                  <img
                    src={a.photo}
                    alt={a.alt}
                    onError={(e) => { e.currentTarget.src = '/img/maria-del-pilar.jpg'; }}
                  />
                </div>
                <div className="assoc-info">
                  <h3 className="assoc-name">{a.name}</h3>
                  <p className="assoc-bio">{a.bio}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <button className="assoc-arrow right" onClick={next} aria-label="Siguiente">›</button>

      <div className="assoc-dots">
        {Array.from({ length: pages }).map((_, p) => (
          <button
            key={p}
            className={`assoc-dot ${p === activePage ? 'active' : ''}`}
            onClick={() => onDot(p)}
            aria-label={`Ir a la página ${p + 1}`}
          />
        ))}
      </div>
    </div>
  );
}
