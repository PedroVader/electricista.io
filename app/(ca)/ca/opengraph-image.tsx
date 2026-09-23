import { imagenOG, OG_SIZE } from "@/lib/og";
import { configCa } from "@/data/ca/config";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = configCa.hero.h1;

export default function Image() {
  return imagenOG(configCa.hero.h1);
}
