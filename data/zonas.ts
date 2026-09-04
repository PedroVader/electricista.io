import { ciudades } from "./ciudades";
import { distritos } from "./distritos";

const norm = (s: string) =>
  s
    .toLowerCase()
    .normalize("NFD")
    .replace(/[\u0300-\u036f]/g, "")
    .replace(/[^a-z0-9]+/g, " ")
    .trim();

/** Nombres con los que se cita una zona en el copy y que no coinciden con
 *  el campo nombre de su landing. */
const ALIAS: Record<string, string> = {
  "horta guinardo": "electricista-horta",
  "sants montjuic": "electricista-sants",
  "l hospitalet": "electricista-hospitalet",
  hospitalet: "electricista-hospitalet",
  "sant cugat": "electricista-sant-cugat",
};

/** Si una zona citada en "También damos servicio en" tiene landing propia,
 *  devuelve su ruta. Así los chips enlazan sin duplicar datos. */
export function hrefDeZona(nombre: string): string | undefined {
  const n = norm(nombre);
  if (ALIAS[n]) return `/${ALIAS[n]}`;
  const zona = [...ciudades, ...distritos].find((z) => norm(z.nombre) === n);
  return zona ? `/${zona.slug}` : undefined;
}
