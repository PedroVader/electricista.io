import Link from "next/link";
import { datos } from "@/lib/datos";
import { ui, rutaLanding, type Locale } from "@/lib/i18n";
import { Icono } from "./Iconos";
import { Reveal } from "./Reveal";

/** Bloque de zonas: cards a las landings de ciudad + municipios cubiertos. */
export function ZonasSection({
  servicioNombre,
  excluirSlug,
  locale = "es",
}: {
  /** Si se pasa, el H2 es "Zonas donde ofrecemos {servicio}" (interlinking §4) */
  servicioNombre?: string;
  excluirSlug?: string;
  locale?: Locale;
}) {
  const t = ui(locale).secciones;
  const idiomaDatos = locale === "en" ? "es" : locale;
  const d = datos(idiomaDatos);
  const lista = d.ciudades.filter((c) => c.slug !== excluirSlug);
  const municipios = [
    ...new Set(d.ciudades.flatMap((c) => c.tambienServicio.municipios)),
  ].filter((m) => !d.ciudades.some((c) => c.nombre === m));

  return (
    <section className="bg-paper-warm">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="eyebrow">{t.zonasServicio}</p>
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          {servicioNombre ? t.zonasDonde(servicioNombre) : d.home.zonas.h2}
        </h2>
        <p className="mt-3 max-w-2xl text-slate">{d.home.zonas.intro}</p>
        <div className="mt-8 grid grid-cols-2 gap-4 md:grid-cols-3 lg:grid-cols-5">
          {lista.map((c) => (
            <Reveal key={c.slug} className="h-full">
              <Link
                href={rutaLanding(idiomaDatos, c.slug)}
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
          {t.tambienEn} {municipios.join(", ")}.
        </p>
      </div>
    </section>
  );
}
