import Link from "next/link";
import { ciudades } from "@/data/ciudades";
import { home } from "@/data/paginas";
import { Icono } from "./Iconos";
import { Reveal } from "./Reveal";

/** Bloque de zonas: cards a las landings de ciudad + municipios cubiertos. */
export function ZonasSection({
  servicioNombre,
  excluirSlug,
}: {
  /** Si se pasa, el H2 es "Zonas donde ofrecemos {servicio}" (interlinking §4) */
  servicioNombre?: string;
  excluirSlug?: string;
}) {
  const lista = ciudades.filter((c) => c.slug !== excluirSlug);
  const municipios = [
    ...new Set(ciudades.flatMap((c) => c.tambienServicio.municipios)),
  ].filter((m) => !ciudades.some((c) => c.nombre === m));

  return (
    <section className="bg-paper-warm">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="eyebrow">Zonas de servicio</p>
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          {servicioNombre
            ? `Zonas donde ofrecemos ${servicioNombre}`
            : home.zonas.h2}
        </h2>
        <p className="mt-3 max-w-2xl text-slate">{home.zonas.intro}</p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {lista.map((c) => (
            <Reveal key={c.slug} className="h-full">
              <Link
                href={`/${c.slug}`}
                className="zone-link card group flex h-full items-center gap-3"
              >
                <span className="text-amber-dark">
                  <Icono nombre="pin" className="h-6 w-6" />
                </span>
                <span className="font-semibold text-ink group-hover:text-amber-dark">
                  {c.nombre}
                </span>
              </Link>
            </Reveal>
          ))}
        </div>
        <p className="mt-6 text-sm text-slate">
          También en: {municipios.join(", ")}.
        </p>
      </div>
    </section>
  );
}
