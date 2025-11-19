# 🚨 SITIO SUSPENDIDO POR FALTA DE PAGO

**Fecha de suspensión inicial:** 17 de noviembre de 2025
**Reactivación temporal:** 18 de noviembre de 2025 (antes de 15h)
**Re-suspensión:** 18 de noviembre de 2025 (después de 15h)

**Motivo:** Cliente prometió pagar antes de 15h el 18/11/2025 pero no pagó. Suspensión definitiva hasta pago real.

## ⚠️ HISTORIAL DE PROMESAS INCUMPLIDAS:
- 17/11/2025: Suspensión inicial por falta de pago (2 semanas de retraso)
- 18/11/2025: Cliente promete pagar antes de 15h → NO PAGÓ
- 18/11/2025: Sitio re-suspendido definitivamente

## Para reactivar el sitio (cuando paguen):

1. Abrir el archivo: `src/App.jsx`

2. **Comentar estas líneas (1-5):**
```jsx
import ServerError from './components/ServerError';
import './index.css';

export default function App() {
  return <ServerError />;
}
```

3. **Descomentar el código original (líneas 8-28)** - quitar `/*` y `*/`

4. Guardar, hacer commit y push:
```sh
git add .
git commit -m "Sitio reactivado - pago recibido"
git push
```

## Alternativa rápida (un solo comando):

Ejecutar desde la terminal en la raíz del proyecto:
```sh
git revert HEAD
git push
```

Esto revertirá automáticamente el commit de suspensión.

---
**Nota:** El sitio muestra un error 503 "Service Temporarily Unavailable" que parece problema técnico del servidor, no suspensión por falta de pago.
