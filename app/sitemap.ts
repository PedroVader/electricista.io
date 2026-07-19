import type { MetadataRoute } from "next";
import { config } from "@/data/config";
import { ciudades } from "@/data/ciudades";
import { distritos } from "@/data/distritos";
import { servicios } from "@/data/servicios";
import { posts } from "@/data/posts";

export default function sitemap(): MetadataRoute.Sitemap {
  const base = config.dominio;
  const fijas = ["", "/presupuesto", "/contacto", "/blog"];
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
    ...distritos.map((d) => ({
      url: `${base}/${d.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...servicios.map((s) => ({
      url: `${base}/${s.slug}`,
      changeFrequency: "weekly" as const,
      priority: 0.8,
    })),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
