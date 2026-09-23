import type { MetadataRoute } from "next";
import { config } from "@/data/config";
import { ciudades } from "@/data/ciudades";
import { distritos } from "@/data/distritos";
import { servicios } from "@/data/servicios";
import { posts } from "@/data/posts";
import { SLUGS_CA, RUTAS_CA } from "@/data/ca/slugs";

/** Última revisión de contenido de las landings. Actualizar al tocar copy. */
const ACTUALIZADO = new Date("2026-09-23");

export default function sitemap(): MetadataRoute.Sitemap {
  const base = config.dominio;

  /** Entrada con sus alternativas de idioma (hreflang en el sitemap) */
  const entrada = (
    rutaEs: string,
    rutaCa: string | undefined,
    priority: number,
    extra?: { rutaEn?: string; lastModified?: Date; changeFrequency?: "weekly" | "monthly" },
  ): MetadataRoute.Sitemap => {
    const languages: Record<string, string> = { es: `${base}${rutaEs}` };
    if (rutaCa) languages.ca = `${base}${rutaCa}`;
    if (extra?.rutaEn) languages.en = `${base}${extra.rutaEn}`;
    const comun = {
      lastModified: extra?.lastModified ?? ACTUALIZADO,
      changeFrequency: extra?.changeFrequency ?? ("weekly" as const),
      alternates: Object.keys(languages).length > 1 ? { languages } : undefined,
    };
    return [
      { url: `${base}${rutaEs}`, priority, ...comun },
      ...(rutaCa ? [{ url: `${base}${rutaCa}`, priority: priority - 0.1, ...comun }] : []),
      ...(extra?.rutaEn ? [{ url: `${base}${extra.rutaEn}`, priority: priority - 0.1, ...comun }] : []),
    ];
  };

  const landing = (slug: string, priority: number) =>
    entrada(`/${slug}`, SLUGS_CA[slug] ? `/ca/${SLUGS_CA[slug]}` : undefined, priority);

  return [
    ...entrada("/", RUTAS_CA["/"], 1, { rutaEn: "/en" }),
    ...entrada("/presupuesto", RUTAS_CA["/presupuesto"], 0.7),
    ...entrada("/contacto", RUTAS_CA["/contacto"], 0.7),
    ...entrada("/blog", undefined, 0.7),
    ...ciudades.flatMap((c) => landing(c.slug, 0.9)),
    ...distritos.flatMap((d) => landing(d.slug, 0.8)),
    ...servicios.flatMap((s) => landing(s.slug, 0.8)),
    ...posts.map((p) => ({
      url: `${base}/blog/${p.slug}`,
      lastModified: new Date(p.fecha),
      changeFrequency: "monthly" as const,
      priority: 0.6,
    })),
  ];
}
