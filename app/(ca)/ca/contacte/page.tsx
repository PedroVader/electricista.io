import { PaginaContacto, metadataContacto } from "@/components/PaginaContacto";

export const metadata = metadataContacto("ca");

export default function Contacte() {
  return <PaginaContacto locale="ca" />;
}
