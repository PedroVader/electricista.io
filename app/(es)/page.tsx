import { PaginaHome, metadataHome } from "@/components/PaginaHome";

export const metadata = metadataHome("es");

export default function Home() {
  return <PaginaHome locale="es" />;
}
