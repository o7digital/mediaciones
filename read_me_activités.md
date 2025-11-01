# README Activités

Ce document sert à documenter toutes les activités, modifications et fonctionnalités ajoutées au site. Veuillez ajouter chaque nouvelle activité ou modification importante ci-dessous, en précisant la date, l'auteur, et une description claire de l'action réalisée.

## Journal des activités

---

**Date :**
**Auteur :**
**Description :**

---

*Ajoutez vos entrées ci-dessus à chaque modification.*
---

**Date :** 2025-10-21
**Auteur :** Codex CLI
**Description :** Documentación de mejoras de responsive, hero y carruseles.

- Hero (móvil):
  - Se quita el video en dispositivos móviles (≤767px) y se muestra una imagen de fondo `public/img/mobile.jpg`.
  - Solo queda visible el cuadro “CONFIANZA LEGAL, SOLUCIONES REALES”; se oculta el segundo rectángulo y las estadísticas del lado derecho.
  - Se evita el desplazamiento lateral en móvil y se ajusta la altura para que no se corten los bloques.
- Hero (tablets/iPad/desktop):
  - El video permanece activo para ≥768px.
  - En tablet (768–1024px) se eliminan desplazamientos/márgenes negativos, se ajustan tipografías/padding y se desactiva el transform lateral de estadísticas para evitar overflow.
- Carruseles (auto‑avance móvil + loop):
  - ¿Quiénes Somos? (asociados), Nuestros Servicios y Testimonios avanzan automáticamente cada 10s en móvil (≤767px).
  - Al llegar al final, regresan al inicio (comportamiento circular).
  - Flechas prev/next ahora son circulares en todas las vistas (pasan del último al primero y viceversa).
- Contacto (móvil):
  - Reorganización con CSS Grid para asegurar que el formulario aparezca debajo del mapa.
  - Se añadieron `z-index` para evitar que el iframe del mapa tape el formulario.
- Global CSS:
  - `overflow-x: hidden` en móvil y tablet para evitar bamboleo horizontal.
- Puntos de quiebre:
  - Móvil definido como `max-width: 767px`.
  - Tablet como `min-width: 768px` y `max-width: 1024px`.

Archivos modificados:
- `src/components/HeroLawhere.jsx`
- `src/components/HeroLawhere.css`
- `index.css`
- `src/components/AssociatesCarousel.jsx`
- `src/components/ServicesCarousel.jsx`
- `src/components/TestimonialsCarousel.jsx`
- `src/components/Contact.jsx` (estructura sin cambios funcionales; solo estilos)
- `src/components/Contact.css`

Activo/Assets añadidos o usados:
- Imagen de móvil: `public/img/mobile.jpg`

Notas:
- El video del hero no se renderiza ni precarga en móvil para optimizar rendimiento.
- El auto‑avance de carruseles se activa únicamente en móvil; en desktop/tablet se mantiene la interacción manual con flechas y dots (ahora con loop).
