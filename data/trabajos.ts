import type { Trabajo } from "./tipos";

/**
 * Fotos REALES de trabajos hechos por nuestros electricistas.
 * A diferencia de las fotos de hero, estas no son ilustrativas: no las
 * mezclamos con imágenes generadas y así se indica en la web.
 *
 * `etiquetas` decide en qué páginas de servicio aparece cada una.
 */

export const trabajos: Trabajo[] = [
  {
    src: "/img/trabajos/cuadro-electrico-terminado-hager.jpg",
    alt: "Cuadro eléctrico terminado con diferencial y magnetotérmicos Hager, protector de sobretensiones Toscano Vigivolt y borna de tierra",
    titulo: "Cuadro terminado, circuito a circuito",
    pie: "Cuadro nuevo con diferencial y magnetotérmicos Hager, un magnetotérmico por circuito y protector de sobretensiones Toscano Vigivolt arriba a la izquierda. Cableado peinado con bridas y borna de tierra propia.",
    etiquetas: ["cuadro", "boletin", "potencia"],
  },
  {
    src: "/img/trabajos/cuadro-electrico-local-gracia-barcelona.jpg",
    alt: "Cuadro eléctrico de un local en Gràcia, Barcelona, con cinco filas de diferenciales y magnetotérmicos",
    titulo: "Cuadro de un local en Gràcia",
    pie: "Cuadro de un local en el barrio de Gràcia, Barcelona: interruptor general, un diferencial por grupo de circuitos y cada línea con su magnetotérmico. Cableado numerado y ordenado por filas para que cualquier ampliación futura no sea un rompecabezas.",
    etiquetas: ["cuadro", "potencia"],
  },
  {
    src: "/img/trabajos/electricista-badalona-centralizacion-contadores-comunidad.jpg",
    alt: "Centralización de contadores de una comunidad de vecinos en Badalona, con caja general de protección, embarrado y seis contadores digitales",
    titulo: "Centralización de contadores en Badalona",
    pie: "Centralización de una finca de Badalona: caja general de protección con fusibles, embarrado de cobre y seis contadores digitales, con la derivación individual de cada vivienda identificada. Parte de una renovación de la instalación común del edificio.",
    etiquetas: ["cuadro", "potencia", "boletin"],
  },
  {
    src: "/img/trabajos/instalacion-placas-solares-castellar-del-valles.jpg",
    alt: "Placas solares fotovoltaicas montadas sobre una cubierta metálica en Castellar del Vallès",
    titulo: "Placas solares en Castellar del Vallès",
    pie: "Instalación fotovoltaica de unos 24 módulos, cerca de 10 kWp, para las oficinas de una empresa de reciclaje en Castellar del Vallès. Terminada en agosto de 2026: tres días de trabajo con cuatro operarios, módulos fijados a la estructura y cableado recogido bajo los paneles. La parte eléctrica de un autoconsumo es la que decide si la instalación rinde y pasa la legalización sin sustos.",
    etiquetas: ["carga", "potencia"],
  },
  {
    src: "/img/trabajos/caja-derivacion-inundada-agua.jpg",
    alt: "Caja de derivación exterior completamente llena de agua estancada, causa de una derivación eléctrica",
    titulo: "Así es una derivación por humedad",
    pie: "Caja de derivación de un jardín, llena de agua hasta arriba. El diferencial de la casa saltaba cada vez que llovía y nadie relacionaba una cosa con la otra.",
    etiquetas: ["averias", "urgencias"],
  },
  {
    src: "/img/trabajos/caja-derivacion-reparada-wago.jpg",
    alt: "La misma caja de derivación ya reparada, con conexiones rehechas mediante bornas WAGO 221",
    titulo: "La misma caja, ya resuelta",
    pie: "Conexiones rehechas con bornas WAGO 221 y caja estanca nueva. Esto es lo que hay detrás de un diferencial que dejó de saltar.",
    etiquetas: ["averias", "urgencias"],
  },
  {
    src: "/img/trabajos/sustitucion-cuadro-antiguo.jpg",
    alt: "Cuadro eléctrico antiguo de dos elementos desmontado junto al envolvente del cuadro nuevo",
    titulo: "Lo que había antes",
    pie: "Dos automáticos sujetos a un perfil, sin diferencial, para toda una vivienda. A la derecha, el envolvente del cuadro nuevo esperando.",
    etiquetas: ["cuadro"],
  },
  {
    src: "/img/trabajos/cuadro-en-montaje-schneider.jpg",
    alt: "Cuadro eléctrico durante el montaje, con un magnetotérmico Schneider ya conectado y los circuitos por conectar",
    titulo: "Montaje en curso",
    pie: "Momento intermedio de un cambio de cuadro, con el primer magnetotérmico Schneider ya conectado. Cada circuito se identifica antes de conectarlo, no después.",
    etiquetas: ["cuadro", "potencia"],
  },
  {
    src: "/img/trabajos/circuitos-etiquetados-antes-de-cerrar.jpg",
    alt: "Cables de una caja de derivación etiquetados uno a uno con cinta antes de conectarlos",
    titulo: "Etiquetar antes de conectar",
    pie: "Cada línea rotulada antes de cerrar. Es lo que permite que dentro de cinco años alguien sepa qué es cada cosa sin ir a ciegas.",
    etiquetas: ["cuadro", "boletin"],
  },
  {
    src: "/img/trabajos/caja-derivacion-cableado-ordenado.jpg",
    alt: "Caja de derivación empotrada con el cableado recogido con bridas y conexiones con bornas WAGO",
    titulo: "Una caja de registro como debe quedar",
    pie: "Cable recogido con bridas, conexiones con borna y espacio suficiente para que nada trabaje forzado. Un empalme fuera de caja no lo verás en un trabajo nuestro.",
    etiquetas: ["averias", "cuadro"],
  },
  {
    src: "/img/trabajos/caja-derivacion-tierras-recogidas.jpg",
    alt: "Caja de derivación con los conductores de tierra amarillo y verde recogidos y conectados con bornas",
    titulo: "La tierra, conectada de verdad",
    pie: "Conductores de protección recogidos y unidos con borna. En muchas instalaciones antiguas el cable de tierra existe pero no llega a ninguna parte.",
    etiquetas: ["boletin", "averias"],
  },
  {
    src: "/img/trabajos/caja-estanca-exterior-jardin.jpg",
    alt: "Caja de conexiones estanca instalada en el muro exterior de un jardín, con tubo corrugado y canalización enterrada",
    titulo: "Instalación a la intemperie",
    pie: "Caja estanca montada en el muro de un jardín, con canalización enterrada. En exterior el material tiene que ser estanco de verdad, no un enchufe de interior con tapa.",
    etiquetas: ["averias", "carga"],
  },
];

export function trabajosPorEtiqueta(etiqueta: string): Trabajo[] {
  return trabajos.filter((t) => t.etiquetas.includes(etiqueta));
}
