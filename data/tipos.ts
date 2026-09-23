export type FAQ = {
  pregunta: string;
  respuesta: string;
};

export type Seccion = {
  h2: string;
  parrafos: string[];
  bullets?: string[];
};

export type Servicio = {
  slug: string;
  /** Solo en las versiones traducidas: slug de la página equivalente en castellano (hreflang) */
  slugEs?: string;
  /** Nombre corto para nav, footer e interlinking */
  nombre: string;
  card: {
    titulo: string;
    linea: string;
    icono: string;
    /** true = borde superior con el patrón firma (urgencias y boletín) */
    destacada?: boolean;
    /** true = la franja del borde se anima como cinta en movimiento */
    animada?: boolean;
  };
  h1: string;
  heroSub: string;
  /** Foto de hero propia; con ella el hero del servicio pasa a fondo oscuro */
  heroImage?: string;
  metaTitle: string;
  metaDescription: string;
  queIncluye: { titulo: string; texto: string }[];
  secciones: Seccion[];
  faqs: FAQ[];
  /** Bloque de disponibilidad + barra de urgencias móvil siempre activa */
  urgencias?: boolean;
  /** Tono B2B: visita técnica, CIF, IVA desglosado */
  b2b?: boolean;
  /** CTA cada dos secciones (páginas muy transaccionales, p.ej. boletín) */
  ctaFrecuente?: boolean;
  /** Texto del CTA principal si difiere del genérico */
  ctaLabel?: string;
  /**
   * Landing de servicio por ciudad (p.ej. boletín en Sabadell). No entra en
   * nav, footer ni grid: se enlaza desde la ciudad y desde el servicio padre.
   */
  local?: {
    ciudad: string;
    ciudadSlug: string;
    servicioPadre: string;
  };
};

/** Foto real de un trabajo hecho por el equipo. Nunca ilustrativa. */
export type Trabajo = {
  src: string;
  alt: string;
  titulo: string;
  pie: string;
  /** Servicios en los que tiene sentido mostrarla */
  etiquetas: string[];
};

/** Card del grid de la home sin página propia en v1 (enlaza a otra ruta) */
export type CardExtra = {
  titulo: string;
  linea: string;
  icono: string;
  href: string;
};

export type Post = {
  slug: string;
  titulo: string;
  descripcion: string;
  /** Fecha ISO de publicación */
  fecha: string;
  resumen: string;
  /** Foto real del trabajo, si el post cuenta un caso concreto */
  imagen?: { src: string; alt: string; pie: string };
  secciones: Seccion[];
  faqs?: FAQ[];
  /** Slugs de servicios relacionados para el interlinking */
  relacionados: string[];
};

export type Ciudad = {
  /** Slug completo de la URL, p.ej. "electricista-barcelona" */
  slug: string;
  /** Solo en las versiones traducidas: slug de la página equivalente en castellano (hreflang) */
  slugEs?: string;
  nombre: string;
  comarca: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** Foto de hero propia; si falta se usa la foto de equipo por defecto */
  heroImage?: string;
  /** 100-150 palabras ESPECÍFICAS de la ciudad. Prohibido clonar entre ciudades. */
  porQue: string[];
  tambienServicio: {
    intro: string;
    municipios: string[];
  };
  /** Bloque "barrio a barrio": contenido específico por zona de la ciudad.
   *  Si un item lleva href, la tarjeta enlaza a su landing (distritos). */
  zonas: {
    h2: string;
    intro: string;
    items: { nombre: string; texto: string; href?: string }[];
  };
  /** Distritos: ciudad de la que cuelgan (breadcrumb y enlace de vuelta) */
  padre?: { nombre: string; slug: string };
  /**
   * Contenido largo exclusivo de esta zona. Es lo que diferencia la landing
   * de sus hermanas: sin esto, las páginas de distrito comparten demasiado
   * texto de plantilla y compiten entre ellas. Prohibido clonar entre zonas.
   */
  secciones?: Seccion[];
  faqsLocales: FAQ[];
  /** Barcelona enlaza de forma destacada a /electricista-urgente-barcelona */
  enlaceUrgente?: { href: string; texto: string };
};
