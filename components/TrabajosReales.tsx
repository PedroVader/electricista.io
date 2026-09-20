import Image from "next/image";
import type { Trabajo } from "@/data/tipos";
import { Reveal } from "./Reveal";
import { Instagram } from "./Instagram";

/**
 * Galería de fotos REALES de trabajos. Se separa deliberadamente de las
 * fotos de hero (ilustrativas) y así se dice en el propio bloque, para que
 * el aviso de imágenes generadas con IA no contamine estas.
 */
export function TrabajosReales({
  trabajos,
  h2 = "Trabajos reales de nuestros electricistas",
  intro = "Fotografías tomadas por nuestro equipo durante las intervenciones, sin retoques ni bancos de imágenes.",
}: {
  trabajos: Trabajo[];
  h2?: string;
  intro?: string;
}) {
  if (trabajos.length === 0) return null;

  return (
    <section className="work-section bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          {h2}
        </h2>
        <p className="mt-3 max-w-3xl text-slate">{intro}</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trabajos.map((t) => (
            <Reveal key={t.src} className="h-full">
              <figure className="work-figure flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[4/3] w-full bg-ink/5">
                  <Image
                    src={t.src}
                    alt={t.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex flex-1 flex-col py-5">
                  <p className="font-display text-lg font-bold text-ink">
                    {t.titulo}
                  </p>
                  <p className="mt-2 text-sm text-slate">{t.pie}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Continuación natural de la galería: el mismo material, a diario */}
        <Instagram evento="instagram_trabajos" className="mt-10" />
      </div>
    </section>
  );
}
