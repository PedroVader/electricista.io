/**
 * Mapa de slugs castellano → catalán. Es la única fuente de verdad para las
 * URLs de /ca: hreflang, sitemap, selector de idioma y enlaces internos.
 * Las URLs en catalán usan "lampista", que es como se busca en catalán.
 */
export const SLUGS_CA: Record<string, string> = {
  "electricista-barcelona": "lampista-barcelona",
  "electricista-sabadell": "lampista-sabadell",
  "electricista-badalona": "lampista-badalona",
  "electricista-mataro": "lampista-mataro",
  "electricista-granollers": "lampista-granollers",
  "electricista-hospitalet": "lampista-hospitalet",
  "electricista-terrassa": "lampista-terrassa",
  "electricista-sant-cugat": "lampista-sant-cugat",
  "electricista-eixample": "lampista-eixample",
  "electricista-gracia": "lampista-gracia",
  "electricista-sants": "lampista-sants",
  "electricista-sant-marti": "lampista-sant-marti",
  "electricista-sant-andreu": "lampista-sant-andreu",
  "electricista-les-corts": "lampista-les-corts",
  "electricista-sarria-sant-gervasi": "lampista-sarria-sant-gervasi",
  "electricista-horta": "lampista-horta",
  "electricista-ciutat-vella": "lampista-ciutat-vella",
  "electricista-nou-barris": "lampista-nou-barris",
  "electricistas-urgentes-24-horas": "electricistes-urgents-24-hores",
  "electricista-urgente-barcelona": "electricista-urgent-barcelona",
  "boletin-electrico": "butlleti-electric",
  "averias-electricas": "averies-electriques",
  "cambio-cuadro-electrico": "canvi-quadre-electric",
  "instalaciones-electricas": "installacions-electriques",
  "instalacion-punto-de-carga-coche-electrico": "punt-de-recarrega-cotxe-electric",
  "subir-potencia-luz": "pujar-potencia-llum",
  "electricistas-para-empresas-y-comunidades": "electricistes-empreses-comunitats",
  "boletin-electrico-sabadell": "butlleti-electric-sabadell",
  "electricista-urgente-sabadell": "electricista-urgent-sabadell",
  "electricista-urgente-badalona": "electricista-urgent-badalona",
};

/** Rutas fijas: castellano → catalán */
export const RUTAS_CA: Record<string, string> = {
  "/": "/ca",
  "/presupuesto": "/ca/pressupost",
  "/contacto": "/ca/contacte",
};

/** Ruta en catalán equivalente a una ruta en castellano, o undefined si no existe */
export function rutaCa(rutaEs: string): string | undefined {
  if (RUTAS_CA[rutaEs]) return RUTAS_CA[rutaEs];
  const slug = rutaEs.replace(/^\//, "");
  return SLUGS_CA[slug] ? `/ca/${SLUGS_CA[slug]}` : undefined;
}
