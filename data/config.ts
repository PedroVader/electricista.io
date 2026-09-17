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
  googleBusinessProfile: "https://share.google/mT5RExWEB0FEHxYce",

  /**
   * Sello de valoración en Google. SOLO cifras reales, copiadas del perfil.
   * Actualizar a mano cuando cambien (comprobado el 13/09/2026: 5,0 con 5 reseñas).
   */
  googleResenas: {
    enabled: true,
    nota: 5,
    notaDisplay: "5,0",
    total: 5,
  },

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

  /** Número exclusivo del vertical: no compartir con limpieza.ai para poder
   *  atribuir las llamadas. Se propaga a tel:, JSON-LD y meta descriptions. */
  telefono: {
    numero: "+34688323663",
    display: "688 32 36 63",
  },

  /** Buzón operativo: destino de notificaciones y de los mailto: del sitio */
  email: "info@electricista.io",

  /** WhatsApp sobre el mismo número (es móvil, así que admite WhatsApp) */
  whatsapp: {
    enabled: true,
    number: "+34688323663",
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
    { icono: "boletin", texto: "Gestionamos tu boletín (CIE)" },
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
      "Trabajamos con instaladores eléctricos habilitados. Gestionamos y tramitamos tu boletín eléctrico (CIE).",
    disclaimerImagenes:
      "Las fotos del apartado «Trabajos reales» son de instalaciones hechas por nuestro equipo. El resto de imágenes son ilustrativas y pueden haber sido generadas o retocadas con inteligencia artificial.",
  },
};

export type Config = typeof config;
