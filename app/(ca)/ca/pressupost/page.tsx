import { PaginaPresupuesto, metadataPresupuesto } from "@/components/PaginaPresupuesto";

export const metadata = metadataPresupuesto("ca");

export default function Pressupost() {
  return <PaginaPresupuesto locale="ca" />;
}
