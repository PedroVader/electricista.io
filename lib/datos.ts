import type { Locale } from "./i18n";
import { config } from "@/data/config";
import { ciudades, getCiudad } from "@/data/ciudades";
import { distritos, getDistrito } from "@/data/distritos";
import {
  servicios,
  cardsExtra,
  serviciosGlobales,
  serviciosLocales,
  serviciosDeCiudad,
  hijosDeServicio,
  getServicio,
} from "@/data/servicios";
import { home, presupuesto, contacto } from "@/data/paginas";
import { trabajos, trabajosPorEtiqueta } from "@/data/trabajos";
import { ciudadesCa, getCiudadCa } from "@/data/ca/ciudades";
import { distritosCa, getDistritoCa } from "@/data/ca/distritos";
import {
  serviciosCa,
  cardsExtraCa,
  serviciosGlobalesCa,
  serviciosLocalesCa,
  serviciosDeCiudadCa,
  hijosDeServicioCa,
  getServicioCa,
} from "@/data/ca/servicios";
import { homeCa, presupuestoCa, contactoCa } from "@/data/ca/paginas";
import { trabajosCa, trabajosPorEtiquetaCa } from "@/data/ca/trabajos";
import { configCa } from "@/data/ca/config";
import { landingEn } from "@/data/en/landing";

/**
 * Acceso a los datos por idioma desde componentes de servidor. Los
 * componentes de cliente (Header, formulario) reciben lo que necesitan por
 * props para no cargar los dos idiomas en el bundle.
 *
 * El inglés es una única landing: reutiliza los datos en castellano para lo
 * que no tiene traducción (listas del formulario) y sus propios textos de
 * hero y pie.
 */
export function datos(locale: Locale) {
  if (locale === "ca") {
    return {
      ciudades: ciudadesCa,
      distritos: distritosCa,
      servicios: serviciosCa,
      cardsExtra: cardsExtraCa,
      serviciosGlobales: serviciosGlobalesCa,
      serviciosLocales: serviciosLocalesCa,
      serviciosDeCiudad: serviciosDeCiudadCa,
      hijosDeServicio: hijosDeServicioCa,
      getCiudad: getCiudadCa,
      getDistrito: getDistritoCa,
      getServicio: getServicioCa,
      home: homeCa,
      presupuesto: presupuestoCa,
      contacto: contactoCa,
      trabajos: trabajosCa,
      trabajosPorEtiqueta: trabajosPorEtiquetaCa,
      hero: configCa.hero,
      badges: configCa.badges,
      footer: configCa.footer,
      mensajeExito: configCa.formulario.mensajeExito,
      whatsappMensaje: configCa.whatsappMensaje,
    };
  }
  return {
    ciudades,
    distritos,
    servicios,
    cardsExtra,
    serviciosGlobales,
    serviciosLocales,
    serviciosDeCiudad,
    hijosDeServicio,
    getCiudad,
    getDistrito,
    getServicio,
    home,
    presupuesto,
    contacto,
    trabajos,
    trabajosPorEtiqueta,
    hero: config.hero,
    badges: config.badges,
    footer: config.footer,
    mensajeExito: config.formulario.mensajeExito,
    whatsappMensaje: config.whatsapp.mensaje,
  };
}

/** Opciones del desplegable "¿Qué necesitas?" del formulario */
export function opcionesServicio(locale: Locale): string[] {
  if (locale === "en") return landingEn.servicios.items.map((s) => s.titulo);
  const d = datos(locale);
  return [
    ...d.servicios.map((s) => s.card.titulo),
    ...d.cardsExtra.map((c) => c.titulo),
  ];
}

/** Nombres de ciudad del desplegable del formulario */
export function nombresCiudad(locale: Locale): string[] {
  return datos(locale === "en" ? "es" : locale).ciudades.map((c) => c.nombre);
}
