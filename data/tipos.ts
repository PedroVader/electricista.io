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
  /** Nombre corto para nav, footer e interlinking */
  nombre: string;
  card: {
    titulo: string;
    linea: string;
    icono: string;
    /** true = borde superior con el patrón firma (urgencias y boletín) */
    destacada?: boolean;
  };
  h1: string;
  heroSub: string;
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
};

/** Card del grid de la home sin página propia en v1 (enlaza a otra ruta) */
export type CardExtra = {
  titulo: string;
  linea: string;
  icono: string;
  href: string;
};

export type Ciudad = {
  /** Slug completo de la URL, p.ej. "electricista-barcelona" */
  slug: string;
  nombre: string;
  comarca: string;
  metaTitle: string;
  metaDescription: string;
  h1: string;
  /** 100-150 palabras ESPECÍFICAS de la ciudad. Prohibido clonar entre ciudades. */
  porQue: string[];
  tambienServicio: {
    intro: string;
    municipios: string[];
  };
  /** Bloque "barrio a barrio": contenido específico por zona de la ciudad */
  zonas: {
    h2: string;
    intro: string;
    items: { nombre: string; texto: string }[];
  };
  faqsLocales: FAQ[];
  /** Barcelona enlaza de forma destacada a /electricista-urgente-barcelona */
  enlaceUrgente?: { href: string; texto: string };
};
