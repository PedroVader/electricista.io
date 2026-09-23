import { imagenOG, OG_SIZE } from "@/lib/og";
import { resolverLanding } from "@/components/Landing";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = "electricista.io";

export default async function Image({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const { pagina } = resolverLanding("ca", slug);
  return imagenOG(pagina?.h1 ?? "Lampistes i electricistes professionals");
}
