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
  // Con 3 columnas, si sobran dos fotos la primera ocupa dos huecos en
  // horizontal y la rejilla cierra sin filas cojas.
  const destacarPrimera = trabajos.length % 3 === 2;

  return (
    <section className="work-section bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="eyebrow">{t.trabajosReales}</p>
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          {h2 ?? t.trabajosH2}
        </h2>
        <p className="mt-3 max-w-3xl text-slate">{intro ?? t.trabajosIntro}</p>

        <div className="mt-8 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {trabajos.map((tr, i) => {
            const ancha = destacarPrimera && i === 0;
            return (
            <Reveal
              key={tr.src}
              className={`h-full ${ancha ? "lg:col-span-2" : ""}`}
            >
              <figure
                className={`work-figure card flex h-full flex-col overflow-hidden ${
                  ancha ? "lg:grid lg:grid-cols-2" : ""
                }`}
              >
                <div
                  className={`relative aspect-[4/3] w-full bg-ink/5 ${
                    ancha ? "lg:aspect-auto lg:h-full lg:min-h-[280px]" : ""
                  }`}
                >
                  <Image
                    src={tr.src}
                    alt={tr.alt}
                    fill
                    loading="lazy"
                    sizes="(min-width: 1024px) 400px, (min-width: 640px) 50vw, 100vw"
                    className="object-cover"
                  />
                </div>
                <figcaption
                  className={`flex flex-1 flex-col py-5 ${
                    ancha ? "lg:justify-center lg:py-8" : ""
                  }`}
                >
                  <p
                    className={`font-display font-bold text-ink ${
                      ancha ? "text-lg lg:text-2xl" : "text-lg"
                    }`}
                  >
                    {tr.titulo}
                  </p>
                  <p className="mt-2 text-sm text-slate">{tr.pie}</p>
                </figcaption>
              </figure>
            </Reveal>
            );
          })}
        </div>

        {/* Continuación natural de la galería: el mismo material, a diario */}
        <Instagram evento="instagram_trabajos" className="mt-10" locale={locale} />
      </div>
    </section>
  );
}
