/**
 * Configuración de marca del vertical.
 *
 * PLANTILLA MULTI-VERTICAL: para clonar este proyecto en otro vertical
 * (fontanero, cerrajero...) solo hay que cambiar este archivo,
 * /data/servicios.ts y /data/ciudades.ts. Cero cambios en componentes.
 */

export const config = {
  marca: {
    /** Wordmark: parte principal + TLD acentuado en ámbar */
    nombre: "electricista.io",
    wordmarkBase: "electricista",
    wordmarkTld: ".io",
    /** Profesión, para textos genéricos de componentes */
    profesion: "electricista",
    profesionPlural: "electricistas",
  },

  dominio: "https://electricista.io",

  empresa: {
    razonSocial: "Fast Horizons SL",
    direccion: {
      calle: "Calle Alcarria 22, P.1 Pta.4",
      cp: "08207",
      ciudad: "Sabadell",
      provincia: "Barcelona",
      pais: "ES",
    },
  },

  // [PLACEHOLDER] Número exclusivo del vertical pendiente — sustituir antes
  // de publicar. No compartir con limpieza.ai para poder atribuir llamadas.
  telefono: {
    numero: "+34930000000",
    display: "930 00 00 00",
  },

  // [PLACEHOLDER] Email de destino de notificaciones y contacto.
  email: "info@electricista.io",

  /** WhatsApp desactivado en v1: activar aquí cuando exista número, sin tocar código */
  whatsapp: {
    enabled: true,
    // [PLACEHOLDER] Número de WhatsApp provisional: sustituir por el real
    number: "+34930000000",
  },

  /** GA4 desactivado hasta tener ID. Con ID vacío no se carga nada ni aparece banner de cookies. */
  analytics: {
    ga4Id: "",
  },

  formulario: {
    nombre: "presupuesto",
    mensajeExito: "Recibido. Te llamamos en menos de 2 h en horario laboral.",
  },

  /**
   * Stats bar y reseñas: SOLO números y reseñas reales.
   * Hasta tenerlos, enabled: false y las secciones no se renderizan.
   */
  stats: {
    enabled: false,
    items: [] as { valor: string; etiqueta: string }[],
  },
  resenas: {
    enabled: false,
    items: [] as { autor: string; texto: string; estrellas: number }[],
  },

  /** Claims de confianza del hero (trust badges) */
  badges: [
    { icono: "reloj", texto: "Urgencias 24h" },
    { icono: "check", texto: "Instaladores habilitados" },
    { icono: "boletin", texto: "Emitimos boletín (CIE)" },
    { icono: "rapido", texto: "Presupuesto en menos de 2h" },
    { icono: "precio", texto: "Precio cerrado antes de empezar" },
  ],

  /** Eyebrow y claims principales del hero de la home */
  hero: {
    eyebrow: "Instaladores autorizados en Barcelona y Vallès",
    h1: "Electricistas profesionales con boletín. Hoy mismo si es urgente.",
    sub: "Averías, urgencias 24h, boletines eléctricos, cuadros y cualquier instalación. Presupuesto claro antes de empezar.",
  },

  footer: {
    lineaFinal:
      "Instaladores eléctricos habilitados. Emitimos boletín eléctrico (CIE).",
  },
};

export type Config = typeof config;
