import Image from "next/image";
import { config } from "@/data/config";
import { Icono } from "./Iconos";
import { FranjaFirma } from "./FranjaFirma";
import { FormPresupuesto } from "./FormPresupuesto";

/**
 * Hero de home y ciudades: fondo ink con foto técnica + overlay oscuro,
 * copy a la izquierda y formulario de captación a la derecha.
 * Cierra con la franja firma.
 * [PLACEHOLDER: foto propia pendiente; provisional de Unsplash]
 */
export function HeroOscuro({
  eyebrow,
  h1,
  sub,
  imagen = "/img/hero-equipo.jpg",
  alt,
}: {
  eyebrow: string;
  h1: string;
  sub: string;
  imagen?: string;
  /** Alt de la foto de hero: es la imagen LCP y la principal de la página */
  alt?: string;
}) {
  const { telefono, badges, email } = config;
  return (
    <>
      <section className="relative bg-ink text-white">
        <Image
          src={imagen}
          alt={alt ?? `${config.marca.profesion} de ${config.marca.nombre} trabajando en una instalación eléctrica`}
          fill
          priority
          sizes="100vw"
          className="object-cover object-[50%_30%] opacity-80"
        />
        {/* Degradado: sólido sobre el texto, más abierto sobre la foto */}
        <div
          className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/25"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-14 sm:pb-16 sm:pt-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_400px] lg:gap-14">
            <div>
              <p className="text-sm font-bold uppercase tracking-wide text-amber">
                {eyebrow}
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1]">
                {h1}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-white/85">{sub}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${telefono.numero}`}
                  data-event="llamada_hero"
                  className="flex items-center justify-center gap-2.5 rounded-md bg-amber px-7 py-3.5 text-lg font-bold text-ink hover:bg-amber-dark"
                >
                  <Icono nombre="telefono" className="h-5 w-5" />
                  Llamar ahora
                </a>
                <a
                  href="#form-presupuesto"
                  data-event="form_hero"
                  className="rounded-md border-2 border-white/60 px-7 py-3.5 text-center text-lg font-bold text-white hover:border-amber hover:text-amber sm:hidden"
                >
                  Pedir presupuesto gratis
                </a>
              </div>

              <ul className="mt-10 hidden flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/90 lg:flex">
                {badges.map((badge) => (
                  <li key={badge.texto} className="flex items-center gap-2">
                    <span className="text-amber">
                      <Icono nombre={badge.icono} className="h-5 w-5" />
                    </span>
                    {badge.texto}
                  </li>
                ))}
              </ul>
            </div>

            {/* Captación de leads en el hero */}
            <div className="rounded-lg bg-paper p-6 text-ink shadow-xl">
              <p className="font-display text-xl font-bold">
                Pide presupuesto gratis
              </p>
              <p className="mt-1 text-sm text-slate">
                Precio cerrado por escrito antes de empezar.
              </p>
              <div className="mt-4">
                <FormPresupuesto compacto />
              </div>
              <div className="mt-4 border-t border-slate/20 pt-4 text-sm text-slate">
                ¿Es urgente? Llama al{" "}
                <a
                  href={`tel:${telefono.numero}`}
                  data-event="llamada_hero_form"
                  className="font-bold text-ink underline decoration-amber decoration-2 underline-offset-2 hover:text-amber-dark"
                >
                  {telefono.display}
                </a>{" "}
                o escríbenos a{" "}
                <a
                  href={`mailto:${email}`}
                  data-event="email_hero"
                  className="font-bold text-ink underline decoration-amber decoration-2 underline-offset-2 hover:text-amber-dark"
                >
                  {email}
                </a>
              </div>
            </div>
          </div>

          {/* Trust badges en móvil/tablet, bajo el formulario */}
          <ul className="mt-8 flex flex-wrap gap-x-6 gap-y-3 text-sm font-medium text-white/90 lg:hidden">
            {badges.map((badge) => (
              <li key={badge.texto} className="flex items-center gap-2">
                <span className="text-amber">
                  <Icono nombre={badge.icono} className="h-5 w-5" />
                </span>
                {badge.texto}
              </li>
            ))}
          </ul>
        </div>
      </section>
      <FranjaFirma />
    </>
  );
}
