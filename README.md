# Krevia · Landing Page

Landing page moderna y de alto rendimiento para **Krevia**, marca de desarrollo de software y sistemas a medida con base en Rosario, Santa Fe, Argentina.

Construida con **Next.js (App Router)**, **Tailwind CSS**, **TypeScript** y **Phosphor Icons**, bajo una estética SaaS dark-mode inspirada en Linear y Stripe.

---

## 🎨 Identidad Visual y Tokens de Diseño

Todos los tokens de color, tipografía y datos de marca están centralizados en:
- `src/constants/tokens.ts`: Datos de marca (emails, redes, textos de CTA, enlaces de navegación).
- `tailwind.config.js`: Paleta extendida con clases semánticas `krevia-*`:
  - **Fondo:** `#0A0A0A` (`krevia-bg`)
  - **Superficies / Cards:** `#121216` (`krevia-surface`), `#0F0F14` (`krevia-surface-card`)
  - **Acento Violeta:** `#7C5CFF` (`krevia-violet`) / `#2F1C9A` (`krevia-violet-dark`)
  - **Acento Cyan:** `#22D3EE` (`krevia-cyan`)
  - **Bordes sutiles:** `rgba(255, 255, 255, 0.08)` (`krevia-border`)

El logo oficial geométrico (K en violeta/índigo con punto cyan) se encuentra en:
- `public/logo.png`: Archivo original de identidad.
- `public/logo-transparent.png`: Versión con fondo transparente optimizada para componentes.
- `src/components/Logo.tsx`: Componente reutilizable presente en el **Header (Navbar)** y en el **Footer**, con soporte para imagen y vector SVG.

---

## 🚀 Estructura de Secciones

1. **Navbar:** Header sticky con efecto frosted glass, logo oficial de Krevia, navegación fluida a secciones y CTA principal.
2. **Hero:** Propuesta de valor clara para negocios en crecimiento + mockup/UI abstracta e interactiva de un dashboard operativo (pedidos, clientes, inventario en tiempo real).
3. **El Problema:** *"Tu negocio creció. El Excel, no."* Comparativa directa entre la operación manual con planillas/WhatsApp vs. un sistema centralizado.
4. **Servicios:** Sistemas de gestión a medida, webs de alta conversión y automatización de procesos/WhatsApp.
5. **Para quién es Krevia:** Perfiles ideales (comercios, distribuidoras, pymes) y aclaración transparente de para quién NO es.
6. **Cómo trabajamos:** Proceso en 4 pasos (Descubrimiento → Prototipo → Desarrollo → Puesta en marcha y soporte).
7. **Confianza y Garantías:** Propiedad 100% del código, soporte directo en Rosario, tecnologías estándar de la industria y casos de uso arquetípicos.
8. **Contacto / Formulario:** Formulario interactivo para cotización, con integración directa a `krevia2000@gmail.com`, enlace a Instagram `@krevia_software` y botón para copiar mail.
9. **Footer:** Logo oficial, enlaces rápidos, redes y ubicación en Rosario.

---

## 💻 Desarrollo Local

1. Instalar dependencias:
   ```bash
   npm install
   ```

2. Iniciar el servidor de desarrollo:
   ```bash
   npm run dev
   ```

3. Abrir en el navegador:
   ```
   http://localhost:3000
   ```

---

## 📦 Deploy a Producción

El proyecto está 100% listo para desplegar en plataformas como **Vercel**, **Netlify** o cualquier servidor Node.js/Docker.

Para generar el build de producción optimizado:
```bash
npm run build
npm run start
```
