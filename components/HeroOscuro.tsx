import Image from "next/image";
import { config } from "@/data/config";
import { datos } from "@/lib/datos";
import { ui, type Locale } from "@/lib/i18n";
import { Icono } from "./Iconos";
import { FranjaFirma } from "./FranjaFirma";
import { Formulario } from "./Formulario";
import { SelloGoogle } from "./SelloGoogle";

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
  imagen = "/img/hero-averias.jpg",
  alt,
  locale = "es",
  badges,
}: {
  eyebrow: string;
  h1: string;
  sub: string;
  imagen?: string;
  /** Alt de la foto de hero: es la imagen LCP y la principal de la página */
  alt?: string;
  locale?: Locale;
  /** Claims de confianza; por defecto los del idioma */
  badges?: { icono: string; texto: string }[];
}) {
  const { telefono, email } = config;
  const t = ui(locale);
  const listaBadges =
    badges ?? datos(locale === "en" ? "es" : locale).badges;
  return (
    <>
      <section className="hero-electricista relative bg-ink text-white">
        <Image
          src={imagen}
          alt={alt ?? t.hero.altDefecto(config.marca.nombre)}
          fill
          priority
          sizes="100vw"
          className="hero-photo object-cover object-[50%_30%] opacity-80"
        />
        {/* Degradado: sólido sobre el texto, más abierto sobre la foto */}
        <div
          className="hero-overlay absolute inset-0"
          aria-hidden="true"
        />
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-14 sm:pb-16 sm:pt-20">
          <div className="grid items-start gap-10 lg:grid-cols-[1fr_400px] lg:gap-14">
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-amber">
                {eyebrow}
              </p>
              <h1 className="mt-4 font-display text-[clamp(2.2rem,5vw,3.5rem)] font-semibold leading-[1.1]">
                {h1}
              </h1>
              <p className="mt-5 max-w-2xl text-lg text-white/85">{sub}</p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <a
                  href={`tel:${telefono.numero}`}
                  data-event="llamada_hero"
                  className="flex items-center justify-center gap-2.5 rounded-md bg-amber px-7 py-3.5 text-base font-semibold text-ink hover:bg-amber-dark"
                >
                  <Icono nombre="telefono" className="h-5 w-5" />
                  {t.hero.llamarAl} {telefono.display}
                </a>
                <a
                  href="#form-presupuesto"
                  data-event="form_hero"
                  className="rounded-md border border-white/50 px-7 py-3.5 text-center text-base font-semibold text-white hover:border-amber hover:text-amber sm:hidden"
                >
                  {t.hero.pedirPresupuesto}
                </a>
              </div>

              {/* Prueba social: valoración real en Google */}
              <SelloGoogle evento="google_sello_hero" className="mt-6" locale={locale} />
            </div>

            {/* Captación de leads en el hero */}
            <div className="hero-form rounded-lg p-6 text-ink">
              <p className="font-display text-xl font-semibold">
                {t.hero.solicita}
              </p>
              <p className="mt-1 text-sm text-slate">{t.hero.sinCompromiso}</p>
              <div className="mt-4">
                <Formulario compacto locale={locale} />
              </div>
              <div className="mt-4 border-t border-slate/20 pt-4 text-sm text-slate">
                {t.hero.esUrgente}{" "}
                <a
                  href={`tel:${telefono.numero}`}
                  data-event="llamada_hero_form"
                  className="font-bold text-ink underline decoration-amber decoration-2 underline-offset-2 hover:text-amber-dark"
                >
                  {telefono.display}
                </a>{" "}
                {t.hero.oEscribenos}{" "}
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

          {/* Franja de credenciales: los claims de confianza en una rejilla */}
          <ul className="hero-credenciales mt-10 grid grid-cols-1 gap-px border border-white/15 bg-white/15 sm:grid-cols-3 lg:grid-cols-5">
            {listaBadges.map((badge) => (
              <li
                key={badge.texto}
                className="flex items-center gap-3 bg-[#202020] px-4 py-3.5 font-medium text-white/90"
              >
                <span className="icon-box icon-box-dark">
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
