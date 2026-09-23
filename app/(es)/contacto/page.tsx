import { PaginaContacto, metadataContacto } from "@/components/PaginaContacto";

export const metadata = metadataContacto("es");

export default function Contacto() {
  return <PaginaContacto locale="es" />;
}
