import { imagenOG, OG_SIZE } from "@/lib/og";
import { config } from "@/data/config";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = config.hero.h1;

export default function Image() {
  return imagenOG(config.hero.h1);
}
