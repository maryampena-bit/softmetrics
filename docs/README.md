# Guía de edición de la web de Softmetrics

Guía para hacer cambios en softmetrics.co sin romper nada, la haga Maryam, Claude u otra persona. Actualizada el 8 de noviembre de 2026.

## Cómo funciona

- **Tecnología:** sitio estático hecho con [Astro](https://astro.build). No tiene base de datos ni panel de administración: todo vive en archivos de este repositorio.
- **Publicación:** Vercel, equipo "SOFTMETRICS's projects", proyecto `softmetrics`. Cada cambio que llega a la rama `main` en GitHub se publica solo en un par de minutos.
- **Sitio de prueba:** https://softmetrics-eight.vercel.app (hasta conectar el dominio).
- **Formularios:** Typeform, incrustado en las páginas. Las respuestas se ven en Typeform, no en el sitio.
- **Analítica:** Vercel Web Analytics, sin cookies. El selector del inicio registra los eventos `selector_rol` y `selector_problema`.

## Dónde está cada cosa

| Quiero cambiar… | Archivo |
| --- | --- |
| Un enlace de formulario, el WhatsApp, el correo, el calendario o el agente de Gemini | `src/config/site.ts` |
| Las cifras de autoridad (100+, 5 países…) | `src/config/site.ts` → `cifras` |
| Las soluciones del menú y del pie | `src/config/site.ts` → `soluciones` y `perfiles` |
| Los roles y problemas del selector del inicio | `src/config/site.ts` → `selector` |
| El texto de una página de solución o del inicio | `src/content/<página>.html` |
| Las páginas de gracias | `src/content/gracias-<tipo>.html` |
| Los textos legales | `src/content/legal/aviso-legal.md`, `privacidad.md`, `terminos.md` |
| La fecha de "Última actualización" de los legales | `src/pages/aviso-legal.astro`, `privacidad.astro`, `terminos.astro` → `updated` |
| Los precios de la página de pedido | `src/pages/pedido/evaluacion.astro` → `opciones` |
| Los precios en la página de Evaluaciones | `src/content/evaluaciones.html` |
| El menú superior | `src/components/Header.astro` |
| El pie de página | `src/components/Footer.astro` |
| Colores, tipografías y estilos generales | `src/styles/global.css` |
| Logos de Softmetrics | `public/img/logo.svg` y `public/img/logo-blanco.svg` |
| Logos de clientes | `public/img/clientes/*.png` |
| Fotos de testimonios | `public/img/testimonios/*.webp` (cuadradas, 192 px) |
| Favicon | `public/favicon.svg`, `public/favicon-32.png`, `public/apple-touch-icon.png` |
| Redirecciones (direcciones viejas → nuevas) | `vercel.json` |

**Regla principal:** un enlace externo o un formulario se cambia solo en `src/config/site.ts`. Así, cuando cambie el dominio o un Typeform, se edita un archivo y no veinte.

## Páginas del sitio

| Dirección | Archivo de la ruta | Contenido | En el menú |
| --- | --- | --- | --- |
| / | `src/pages/index.astro` | `inicio.html` + selector | Sí |
| /soluciones/selecciona | `soluciones/selecciona.astro` | `selecciona.html` | Sí |
| /soluciones/evaluaciones-bajo-demanda | `soluciones/evaluaciones-bajo-demanda.astro` | `evaluaciones.html` | Sí |
| /soluciones/insight-360 | `soluciones/insight-360.astro` | `insight360.html` | Sí |
| /soluciones/radar | `soluciones/radar.astro` | `radar.html` + Typeform RADAR | Sí (página de campaña) |
| /soluciones/selecciona-consultores | `soluciones/selecciona-consultores.astro` | `consultores.html` | No, solo campañas |
| /soluciones/orientacion-profesional | `soluciones/orientacion-profesional.astro` | `orientacion.html` | No, solo campañas |
| /recursos/perfil-de-competencias | `recursos/perfil-de-competencias.astro` | `perfil.html` | No |
| /recursos/elegir-pruebas | `recursos/elegir-pruebas.astro` | Asistente de 3 pasos (IPR, pruebas BH, motivacional); las listas de pruebas están al inicio del archivo | No (enlazada desde Selecciona) |
| /nosotros | `nosotros.astro` | `nosotros.html` (foto en `public/img/equipo/maryam-pena.webp`) | Sí |
| /pedido/evaluacion | `pedido/evaluacion.astro` | Precios + Typeform de pedido | Botón del menú |
| /agenda | `agenda.astro` | Typeform Leads | Botón del menú |
| /soporte | `soporte.astro` | Typeform cliente y soporte | Sí |
| /gracias/evaluacion, /orientacion, /agenda, /radar, /consultores | `gracias/[tipo].astro` | `gracias-*.html` | No |
| /aviso-legal, /privacidad, /terminos | `*.astro` | `content/legal/*.md` | Pie de página |

Las páginas de campaña (`variant="campaign"`) no tienen menú y usan un pie corto. No se enlazan desde el menú ni desde el inicio.

**En pausa (noviembre de 2026):** Selecciona para consultores y Orientación profesional. Sus páginas siguen existiendo pero nada del sitio las enlaza; el selector del inicio lleva a los consultores a Evaluaciones bajo demanda y `/consultores` redirige ahí. Para reactivarlas, revertir esos dos cambios en `src/config/site.ts` y `vercel.json`.

## Cambios frecuentes

### Cambiar un texto
1. Abre el archivo de la página en `src/content/` (tabla de arriba).
2. Busca la frase y cámbiala. No toques las etiquetas `<...>` ni los atributos `style=`.
3. Guarda y sube el cambio a `main`.

En GitHub se puede hacer desde el navegador: abre el archivo, pulsa el lápiz, edita y pulsa "Commit changes".

### Cambiar o agregar un formulario de Typeform
1. En `src/config/site.ts`, dentro de `forms`, pega el enlace en la línea que corresponde: `pedido`, `agenda`, `radar`, `soporte` o `soporteCliente`.
2. Si un enlace queda vacío (`''`), la página muestra botones de WhatsApp y calendario en lugar del formulario. Eso es a propósito.

### Campos ocultos de Typeform
El sitio le pasa al formulario todo lo que viene en la dirección de la página. Por ejemplo, `/agenda?solucion=selecciona` llega a Typeform como `solucion=selecciona`. Typeform solo lo guarda si el formulario tiene un campo oculto (URL parameter) con ese nombre exacto, en minúsculas.

| Formulario | Campos ocultos | Valores |
| --- | --- | --- |
| Pedido | `tipo`, `reporte` | individual / terna; basico / pack / especial / comparativo |
| Agenda (Leads) | `solucion`, `perfil`, `rol`, `problema` | selecciona / insight-360 / consultores / orientacion / radar; lider; ceo / talento / pyme / consultor; 1 / 2 |
| RADAR | `rol`, `problema` (opcional) | ceo; 1 / 2 |

Si cambias el nombre de un campo en Typeform, cambia también los enlaces del sitio que lo usan. Para encontrarlos, busca en el repositorio, por ejemplo, `solucion=`.

### Cambiar un precio
Hay que cambiarlo en tres lugares:
1. `src/content/evaluaciones.html`: tarjetas de precio y preguntas frecuentes.
2. `src/pages/pedido/evaluacion.astro`: lista `opciones`.
3. El Typeform de pedido: opciones y cálculo del monto.

Revisa también "desde USD 35" en `inicio.html` y `evaluaciones.html`. Los precios se publican sin IVA; para Venezuela se muestra base + IVA (16 %) + total.

### Cambiar los textos legales
1. Edita el `.md` en `src/content/legal/`. Es texto simple: `##` es un título, `-` es una viñeta.
2. Actualiza la fecha `updated` en la página `.astro` del mismo nombre.
3. Mantén el mismo texto en el Centro legal (documento de trabajo en Claude) para que ambos coincidan.

Los anexos de los términos se pueden enlazar directo: `/terminos#anexo-a-evaluaciones-on-demand`, `#anexo-b-suscripciones-de-empresas`, `#anexo-c-selecciona-para-consultores` y `#anexo-d-servicios-asistidos-y-proyectos-insight-360-y-radar`. Si cambias el título de un anexo, cambia también su dirección.

### Agregar o cambiar un logo de cliente
1. Prepara el logo en PNG, en gris medio (#8A93A8) y sin fondo, de unos 160 px de alto.
2. Súbelo a `public/img/clientes/`.
3. Agrégalo en el bloque de logos de `inicio.html`, `selecciona.html`, `insight360.html` y `evaluaciones.html`, copiando una línea `<img …>` existente. Ajusta `height` para que el peso visual se parezca al de los demás.

### Quitar un bloque que no tiene contenido todavía
Los testimonios y casos pendientes aparecen entre corchetes, por ejemplo `[Testimonio real de…]`. Si no llegan, borra la `<section>` o el `<figure>` completo que los contiene. Busca `[` en `src/content/` para ver lo que queda pendiente.

### Agregar una redirección
En `vercel.json`, dentro de `redirects`, agrega una línea:
`{ "source": "/direccion-vieja", "destination": "/direccion-nueva", "permanent": true }`

## Marca

- **Colores:**
  - Navy `#011D66` (texto y fondos oscuros).
  - Blue 600 `#0159FD` (acentos y botones).
  - Blue 500 `#1C84F4`.
  - Fucsia `#B500D4`, solo para "requiere atención" en RADAR.
- **Tipografías:** Inter (texto), Anton (números grandes) y JetBrains Mono (precios y datos).
- **Botones:** en forma de píldora (bordes redondeados completos).
- **Sin emoji.** Precios con el formato "USD 35".
- **Vocabulario:** se dice "responsable de talento", no "líder de talento". La cifra de autoridad es "más de 100 empresas en 5 países".

## Trabajar en local (opcional)

Requiere Node.js 18 o superior.

```bash
npm install
npm run dev      # vista previa en http://localhost:4321
npm run build    # genera dist/ y avisa si algo está roto
```

Antes de subir un cambio grande, corre `npm run build`. Si termina con "Complete!", está listo.

## Dominio

Pendiente de conectar. Cuando softmetrics.co apunte a Vercel, la configuración de DNS no debe tocar los registros MX, para no afectar el correo.

- La dirección principal es `softmetrics.co`; `www.softmetrics.co` redirige a ella.
- `src/config/site.ts` (`site.url`) y `astro.config.mjs` (`site`) usan `https://softmetrics.co`. Si el dominio cambia, se cambian ahí.

## Si algo sale mal

- **El sitio no se actualizó:** en Vercel, proyecto `softmetrics` → Deployments, revisa si el último quedó en "Error" y lee el registro.
- **Volver a la versión anterior:** en Vercel → Deployments, elige el último que funcionaba y pulsa "Promote to Production". En GitHub, también se puede revertir el commit.
- **Un formulario no carga:** revisa que el enlace en `src/config/site.ts` sea el de "Share" de Typeform y que el formulario esté publicado.
