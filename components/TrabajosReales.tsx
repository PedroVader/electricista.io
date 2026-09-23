import Image from "next/image";
import type { Trabajo } from "@/data/tipos";
import { ui, type Locale } from "@/lib/i18n";
import { Reveal } from "./Reveal";
import { Instagram } from "./Instagram";

/**
 * Galería de fotos REALES de trabajos. Se separa deliberadamente de las
 * fotos de hero (ilustrativas) y así se dice en el propio bloque, para que
 * el aviso de imágenes generadas con IA no contamine estas.
 */
export function TrabajosReales({
  trabajos,
  h2,
  intro,
  locale = "es",
}: {
  trabajos: Trabajo[];
  h2?: string;
  intro?: string;
  locale?: Locale;
}) {
  if (trabajos.length === 0) return null;
  const t = ui(locale).secciones;

  return (
    <section className="work-section bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="eyebrow">{t.trabajosReales}</p>
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          {h2 ?? t.trabajosH2}
        </h2>
        <p className="mt-3 max-w-3xl text-slate">{intro ?? t.trabajosIntro}</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trabajos.map((tr) => (
            <Reveal key={tr.src} className="h-full">
              <figure className="work-figure card flex h-full flex-col overflow-hidden">
                <div className="relative aspect-[4/3] w-full bg-ink/5">
                  <Image
                    src={tr.src}
                    alt={tr.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 33vw, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption className="flex flex-1 flex-col py-5">
                  <p className="font-display text-lg font-bold text-ink">
                    {tr.titulo}
                  </p>
                  <p className="mt-2 text-sm text-slate">{tr.pie}</p>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>

        {/* Continuación natural de la galería: el mismo material, a diario */}
        <Instagram evento="instagram_trabajos" className="mt-10" locale={locale} />
      </div>
    </section>
  );
}
