import type { MetadataRoute } from "next";
import { config } from "@/data/config";
import { ciudades } from "@/data/ciudades";
import { servicios } from "@/data/servicios";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = config.dominio;
  const fijas = ["", "/presupuesto", "/contacto"];
  return [
    ...fijas.map((ruta) => ({
      url: `${base}${ruta}`,
      changeFrequency: "weekly" as const,
      priority: ruta === "" ? 1 : 0.7,
    })),
    ...ciudades.map((c) => ({
      url: `${base}/${c.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...servicios.map((s) => ({
      url: `${base}/${s.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
  ];
}
