import type { MetadataRoute } from "next";
import { config } from "@/data/config";
import { ciudades } from "@/data/ciudades";
import { distritos } from "@/data/distritos";
import { servicios } from "@/data/servicios";
import { posts } from "@/data/posts";

/** Última revisión de contenido de las landings. Actualizar al tocar copy. */
const ACTUALIZADO = new Date("2026-09-04");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = config.dominio;
  const fijas = ["", "/presupuesto", "/contacto", "/blog"];
  return [
    ...fijas.map((ruta) => ({
      url: `${base}${ruta}`,
      lastModified: ACTUALIZADO,
      changeFrequency: "weekly" as const,
      priority: ruta === "" ? 1 : 0.7,
    })),
    ...ciudades.map((c) => ({
      url: `${base}/${c.slug}`,
      lastModified: ACTUALIZADO,
      changeFrequency: "weekly" as const,
      priority: 0.9,
    })),
    ...distritos.map((d) => ({
      url: `${base}/${d.slug}`,
      lastModified: ACTUALIZADO,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...servicios.map((s) => ({
      url: `${base}/${s.slug}`,
      lastModified: ACTUALIZADO,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.fecha),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
