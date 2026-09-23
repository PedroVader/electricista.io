import { imagenOG, OG_SIZE } from "@/lib/og";
import { landingEn } from "@/data/en/landing";

export const size = OG_SIZE;
export const contentType = "image/png";
export const alt = landingEn.hero.h1;

export default function Image() {
  return imagenOG(landingEn.hero.h1);
}
