# Sitio web Softmetrics

Sitio estático en Astro, publicado en Vercel (equipo SOFTMETRICS's projects).

- `src/config/site.ts`: único lugar para enlaces externos, formularios de Typeform, cifras y el selector del inicio. Al cambiar un formulario o el dominio, se edita solo este archivo.
- `src/content/*.html`: contenido de cada página, convertido desde los mockups aprobados en el canvas de Claude Design. Se edita el texto aquí.
- `src/pages/`: rutas. Las páginas de campaña (RADAR y Selecciona para consultores) usan `variant="campaign"`: sin menú y con pie corto, y no se enlazan desde el menú.
- Marca: Navy #011D66, Blue 600 #0159FD, Inter / Anton / JetBrains Mono, botones en píldora, sin emoji.
- Precios sin IVA; para Venezuela se muestra base + IVA + total.
- `npm run build` genera `dist/`.
