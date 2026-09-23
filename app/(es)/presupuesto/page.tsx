import { PaginaPresupuesto, metadataPresupuesto } from "@/components/PaginaPresupuesto";

export const metadata = metadataPresupuesto("es");

export default function Presupuesto() {
  return <PaginaPresupuesto locale="es" />;
}
