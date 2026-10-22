// Configuración central del sitio.
// Todos los enlaces externos, formularios y cifras viven aquí:
// al conectar el dominio o cambiar un formulario, se edita solo este archivo.

export const site = {
  name: 'Softmetrics',
  url: 'https://softmetrics.co',
  tagline: 'Claridad sobre personas y ejecución, sin adivinar.',
  description:
    'Ciencia, tecnología y criterio experto para CEOs y líderes de talento en Latinoamérica.',
  email: 'sales@softmetrics.co',
  whatsapp: 'https://wa.me/584122443537',
  agendaCalendar: 'https://calendar.app.google/2cY9zf5WJmzWKcFq9',
  perfilAgente: 'https://gemini.google.com/gem/1YqwXhkZ2hWBwpDLc1qOrpMrACkJRDKOj?usp=sharing',
};

// Formularios de Typeform. Si un valor está vacío, la página muestra
// una alternativa (WhatsApp y agenda) en lugar del formulario.
export const forms = {
  pedido: '', // Typeform de pedido de evaluación (individual o terna)
  agenda: 'https://softmetrics.typeform.com/Leads', // Typeform único de Agenda con campo oculto "solucion"
  radar: 'https://softmetrics.typeform.com/radar',
  asociados: 'https://softmetrics.typeform.com/pedidos',
  soporte: 'https://softmetrics.typeform.com/soporte', // Formulario de soporte existente
};

export const cifras = {
  empresas: '100+',
  paises: '5',
  anios: '20+',
  evaluaciones: '100K+',
};

export const soluciones = [
  { label: 'Selecciona', href: '/soluciones/selecciona', desc: 'Contrata a quien dará resultados', momento: 'Seleccionar' },
  { label: 'Evaluaciones bajo demanda', href: '/soluciones/evaluaciones-bajo-demanda', desc: 'Recomendación argumentada por candidato', momento: 'Seleccionar' },
  { label: 'Insight 360', href: '/soluciones/insight-360', desc: '360 corporativo con acompañamiento completo', momento: 'Desarrollar' },
  { label: 'Orientación profesional', href: '/soluciones/orientacion-profesional', desc: 'Mentoría 1:1 en rutas de 3 a 10 sesiones', momento: 'Desarrollar' },
  { label: 'RADAR 2027', href: '/soluciones/radar', desc: 'Dónde se frena la ejecución de tu negocio', momento: 'Diagnosticar' },
];

export const perfiles = [
  { label: 'CEO y dirección', items: ['RADAR 2027', 'Insight 360'] },
  { label: 'Líderes de talento', items: ['Selecciona', 'Insight 360'] },
  { label: 'Empresas que contratan poco', items: ['Evaluaciones bajo demanda'] },
  { label: 'Consultores y psicólogos', items: ['Evaluaciones bajo demanda'], extra: { label: 'Consultores asociados', href: '/asociados', desc: 'Pedidos de socios comerciales' } },
  { label: 'Profesionales', items: ['Orientación profesional'] },
];

// Selector del inicio: el visitante ve rol y problema; la solución
// sugerida viaja como dato (analítica y campos ocultos), no se muestra.
export const selector = [
  { id: 'ceo', label: 'CEO o dirección', problems: [
    { label: 'Lo que decidimos no se convierte en resultados', offer: 'RADAR 2027', href: '/soluciones/radar' },
    { label: 'Mi empresa crece, pero se vuelve más lenta y compleja', offer: 'RADAR 2027', href: '/soluciones/radar' },
    { label: 'Mi equipo directivo no ve sus puntos ciegos', offer: 'Insight 360', href: '/soluciones/insight-360' },
    { label: 'Contratamos gerentes que no dan resultados', offer: 'Selecciona', href: '/soluciones/selecciona' },
  ] },
  { id: 'talento', label: 'Líder de talento o RR. HH.', problems: [
    { label: 'Contratamos personas que no dan resultados', offer: 'Selecciona', href: '/soluciones/selecciona' },
    { label: 'Necesito desarrollar a nuestros líderes', offer: 'Insight 360', href: '/soluciones/insight-360' },
  ] },
  { id: 'pyme', label: 'Empresa que contrata poco', problems: [
    { label: 'Tengo que decidir una contratación pronto', offer: 'Evaluaciones bajo demanda', href: '/soluciones/evaluaciones-bajo-demanda' },
    { label: 'Tengo 3 finalistas y no sé a quién elegir', offer: 'Evaluaciones bajo demanda · Terna', href: '/soluciones/evaluaciones-bajo-demanda#opciones' },
  ] },
  { id: 'consultor', label: 'Consultor o psicólogo', problems: [
    { label: 'Evalúo varios candidatos al mes para mis clientes', offer: 'Selecciona para consultores', href: '/agenda?solucion=consultores' },
    { label: 'Hago pedidos puntuales como socio', offer: 'Consultores asociados', href: '/asociados' },
  ] },
  { id: 'profesional', label: 'Profesional', problems: [
    { label: 'Me siento estancado o sin dirección', offer: 'Orientación profesional', href: '/soluciones/orientacion-profesional' },
    { label: 'Quiero crecer como líder', offer: 'Orientación profesional · Líderes en transición', href: '/soluciones/orientacion-profesional#lideres' },
  ] },
];
