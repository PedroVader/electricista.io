import { imagenOG, OG_SIZE } from "@/lib/og";
import { getCiudad } from "@/data/ciudades";
import { getDistrito } from "@/data/distritos";
import { getServicio } from "@/data/servicios";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "electricista.io";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const pagina = getCiudad(slug) ?? getDistrito(slug) ?? getServicio(slug);
  return imagenOG(pagina?.h1 ?? "Electricistas profesionales");
}
