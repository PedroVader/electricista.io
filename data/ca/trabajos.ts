import type { Trabajo } from "../tipos";

/**
 * Versió en català de les fotos REALS de feines fetes pels nostres
 * electricistes. Mateix `src` i mateixes `etiquetas` que l'original
 * (/data/trabajos.ts): només es tradueixen alt, títol i peu.
 */

export const trabajosCa: Trabajo[] = [
  {
    src: "/img/trabajos/cuadro-electrico-terminado-hager.jpg",
    alt: "Quadre elèctric acabat amb diferencial i magnetotèrmics Hager, protector de sobretensions Toscano Vigivolt i born de terra",
    titulo: "Quadre acabat, circuit a circuit",
    pie: "Quadre nou amb diferencial i magnetotèrmics Hager, un magnetotèrmic per circuit i protector de sobretensions Toscano Vigivolt a dalt a l'esquerra. Cablejat pentinat amb brides i born de terra propi.",
    etiquetas: ["cuadro", "boletin", "potencia"],
  },
  {
    src: "/img/trabajos/cuadro-electrico-local-gracia-barcelona.jpg",
    alt: "Quadre elèctric d'un local a Gràcia, Barcelona, amb cinc files de diferencials i magnetotèrmics",
    titulo: "Quadre d'un local a Gràcia",
    pie: "Quadre d'un local al barri de Gràcia, Barcelona: interruptor general, un diferencial per grup de circuits i cada línia amb el seu magnetotèrmic. Cablejat numerat i ordenat per files perquè qualsevol ampliació futura no sigui un trencaclosques.",
    etiquetas: ["cuadro", "potencia"],
  },
  {
    src: "/img/trabajos/electricista-badalona-centralizacion-contadores-comunidad.jpg",
    alt: "Centralització de comptadors d'una comunitat de veïns a Badalona, amb caixa general de protecció, embarrat i sis comptadors digitals",
    titulo: "Centralització de comptadors a Badalona",
    pie: "Centralització d'una finca de Badalona: caixa general de protecció amb fusibles, embarrat de coure i sis comptadors digitals, amb la derivació individual de cada habitatge identificada. Part d'una renovació de la instal·lació comuna de l'edifici.",
    etiquetas: ["cuadro", "potencia", "boletin"],
  },
  {
    src: "/img/trabajos/instalacion-placas-solares-castellar-del-valles.jpg",
    alt: "Plaques solars fotovoltaiques muntades sobre una coberta metàl·lica a Castellar del Vallès",
    titulo: "Plaques solars a Castellar del Vallès",
    pie: "Instal·lació fotovoltaica d'uns 24 mòduls, prop de 10 kWp, per a les oficines d'una empresa de reciclatge a Castellar del Vallès. Acabada l'agost de 2026: tres dies de feina amb quatre operaris, mòduls fixats a l'estructura i cablejat recollit sota els panells. La part elèctrica d'un autoconsum és la que decideix si la instal·lació rendeix i passa la legalització sense ensurts.",
    etiquetas: ["carga", "potencia"],
  },
  {
    src: "/img/trabajos/caja-derivacion-inundada-agua.jpg",
    alt: "Caixa de derivació exterior completament plena d'aigua estancada, causa d'una derivació elèctrica",
    titulo: "Així és una derivació per humitat",
    pie: "Caixa de derivació d'un jardí, plena d'aigua fins a dalt. El diferencial de la casa saltava cada vegada que plovia i ningú no relacionava una cosa amb l'altra.",
    etiquetas: ["averias", "urgencias"],
  },
  {
    src: "/img/trabajos/caja-derivacion-reparada-wago.jpg",
    alt: "La mateixa caixa de derivació ja reparada, amb les connexions refetes amb borns WAGO 221",
    titulo: "La mateixa caixa, ja resolta",
    pie: "Connexions refetes amb borns WAGO 221 i caixa estanca nova. Això és el que hi ha darrere d'un diferencial que va deixar de saltar.",
    etiquetas: ["averias", "urgencias"],
  },
  {
    src: "/img/trabajos/sustitucion-cuadro-antiguo.jpg",
    alt: "Quadre elèctric antic de dos elements desmuntat al costat de l'envolupant del quadre nou",
    titulo: "El que hi havia abans",
    pie: "Dos automàtics subjectats a un perfil, sense diferencial, per a tot un habitatge. A la dreta, l'envolupant del quadre nou esperant.",
    etiquetas: ["cuadro"],
  },
  {
    src: "/img/trabajos/cuadro-en-montaje-schneider.jpg",
    alt: "Quadre elèctric durant el muntatge, amb un magnetotèrmic Schneider ja connectat i els circuits per connectar",
    titulo: "Muntatge en curs",
    pie: "Moment intermedi d'un canvi de quadre, amb el primer magnetotèrmic Schneider ja connectat. Cada circuit s'identifica abans de connectar-lo, no després.",
    etiquetas: ["cuadro", "potencia"],
  },
  {
    src: "/img/trabajos/circuitos-etiquetados-antes-de-cerrar.jpg",
    alt: "Cables d'una caixa de derivació etiquetats un a un amb cinta abans de connectar-los",
    titulo: "Etiquetar abans de connectar",
    pie: "Cada línia retolada abans de tancar. És el que permet que d'aquí a cinc anys algú sàpiga què és cada cosa sense anar a cegues.",
    etiquetas: ["cuadro", "boletin"],
  },
  {
    src: "/img/trabajos/caja-derivacion-cableado-ordenado.jpg",
    alt: "Caixa de derivació encastada amb el cablejat recollit amb brides i connexions amb borns WAGO",
    titulo: "Una caixa de registre com ha de quedar",
    pie: "Cable recollit amb brides, connexions amb born i espai suficient perquè res no treballi forçat. Un empalmament fora de caixa no el veuràs en una feina nostra.",
    etiquetas: ["averias", "cuadro"],
  },
  {
    src: "/img/trabajos/caja-derivacion-tierras-recogidas.jpg",
    alt: "Caixa de derivació amb els conductors de terra groc i verd recollits i connectats amb borns",
    titulo: "La terra, connectada de debò",
    pie: "Conductors de protecció recollits i units amb born. En moltes instal·lacions antigues el cable de terra existeix però no arriba enlloc.",
    etiquetas: ["boletin", "averias"],
  },
  {
    src: "/img/trabajos/caja-estanca-exterior-jardin.jpg",
    alt: "Caixa de connexions estanca instal·lada al mur exterior d'un jardí, amb tub corrugat i canalització soterrada",
    titulo: "Instal·lació a la intempèrie",
    pie: "Caixa estanca muntada al mur d'un jardí, amb canalització soterrada. A l'exterior el material ha de ser estanc de debò, no un endoll d'interior amb tapa.",
    etiquetas: ["averias", "carga"],
  },
  {
    src: "/img/trabajos/enchufe-estanco-exterior-tubo-corrugado.jpg",
    alt: "Base d'endoll doble estanca amb tapa instal·lada en una façana exterior, alimentada amb tub corrugat negre fixat amb abraçadora metàl·lica",
    titulo: "Presa de corrent a l'exterior, ben feta",
    pie: "Base doble estanca amb tapa i interruptor per presa, muntada en façana. La línia arriba per tub corrugat d'exterior, subjectat amb abraçadora i rematat amb premsaestopa a l'entrada de la caixa perquè no hi entri aigua.",
    etiquetas: ["averias", "carga"],
  },
  {
    src: "/img/trabajos/enchufe-estanco-exterior-doble-detalle.jpg",
    alt: "Detall d'una base d'endoll doble estanca a l'exterior, amb dues preses schuko, interruptors individuals i tapa transparent abatible",
    titulo: "Detall de la base estanca",
    pie: "Cada presa amb el seu interruptor i pilot, tapa abatible i entrada de cable per premsaestopa. És la diferència entre un endoll d'exterior que aguanta anys de pluja i un que acaba fent saltar el diferencial.",
    etiquetas: ["averias", "carga"],
  },
];

export function trabajosPorEtiquetaCa(etiqueta: string): Trabajo[] {
  return trabajosCa.filter((t) => t.etiquetas.includes(etiqueta));
}
