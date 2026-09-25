import type { Metadata } from "next";
import Link from "next/link";
import { config } from "@/data/config";
import { posts } from "@/data/posts";
import { datos } from "@/lib/datos";
import { ui, alternates, RUTAS } from "@/lib/i18n";
import { Icono } from "./Iconos";
import { Reveal } from "./Reveal";
import { HeroOscuro } from "./HeroOscuro";
import { ServiciosGrid } from "./ServiciosGrid";
import { PorQue } from "./PorQue";
import { TrabajosReales } from "./TrabajosReales";
import { ComoFunciona } from "./ComoFunciona";
import { StatsBar } from "./StatsBar";
import { ZonasSection } from "./ZonasSection";
import { FAQSection } from "./FAQSection";
import { CTAFinal } from "./CTAFinal";

type LocaleHome = "es" | "ca";

export function metadataHome(locale: LocaleHome): Metadata {
  const { home } = datos(locale);
  const t = ui(locale).secciones;
  return {
    title: { absolute: home.metaTitle },
    description: [
      home.metaDescription,
      config.googleResenas.enabled && config.googleResenas.total > 0
        ? `${config.googleResenas.notaDisplay} ${t.enGoogle}.`
        : "",
      `☎ ${config.telefono.display}`,
    ]
      .filter(Boolean)
      .join(" "),
    alternates: alternates({ actual: locale, es: "/", ca: "/ca", en: "/en" }),
  };
}

export function PaginaHome({ locale }: { locale: LocaleHome }) {
  const d = datos(locale);
  const { home } = d;
  const t = ui(locale);
  return (
    <>
      <HeroOscuro
        locale={locale}
        eyebrow={d.hero.eyebrow}
        h1={d.hero.h1}
        sub={d.hero.sub}
      />

      {/* Banda de disponibilidad 24h */}
      <div className="availability-band bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="band-tag">{t.cta.urgencias24h}</span>
            <p>
              <span className="font-semibold">
                {home.bandaUrgencias.texto}
              </span>{" "}
              <span className="hidden text-white/70 2xl:inline">
                {home.bandaUrgencias.subtexto}
              </span>
            </p>
          </div>
          <a
            href={`tel:${config.telefono.numero}`}
            data-event="llamada_banda_home"
            className="inline-flex shrink-0 items-center gap-2 font-bold text-amber hover:text-amber-dark"
          >
            <Icono nombre="telefono" className="h-4 w-4" />
            {config.telefono.display}
          </a>
        </div>
      </div>

      <ServiciosGrid intro={home.serviciosIntro} locale={locale} />
      <PorQue
        locale={locale}
        h2={home.porQue.h2}
        parrafos={home.porQue.parrafos}
        bullets={home.porQue.bullets}
      />
      {/* Destacado: boletín eléctrico, el servicio más transaccional */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="featured-service overflow-hidden">
            <div className="franja-firma-fina" aria-hidden="true" />
            <div className="grid gap-8 bg-white p-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <p className="eyebrow">{t.home.boletin}</p>
                <h2 className="font-display text-3xl font-bold text-ink">
                  {home.boletinDestacado.h2}
                </h2>
                {home.boletinDestacado.parrafos.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-slate">
                    {p}
                  </p>
                ))}
                <Link
                  href={home.boletinDestacado.ctaHref}
                  className="mt-6 inline-flex items-center gap-2 rounded-md bg-amber px-6 py-3 font-bold text-ink hover:bg-amber-dark"
                >
                  {home.boletinDestacado.ctaTexto}
                  <Icono nombre="flecha" className="h-4 w-4" />
                </Link>
              </div>
              <ul className="space-y-4 self-center">
                {home.boletinDestacado.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 font-medium text-ink"
                  >
                    <span className="mt-0.5 shrink-0 text-amber-dark">
                      <Icono nombre="boletin" className="h-5 w-5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </section>

      <ComoFunciona locale={locale} />

      {/* Fotos reales del equipo: la prueba más directa que tenemos */}
      <TrabajosReales trabajos={d.trabajos} locale={locale} />

      {/* Stats y reseñas: solo con datos reales (flags en /data/config.ts) */}
      <StatsBar />
      <ZonasSection locale={locale} />
      {/* Bloque largo de contenido SEO de la home */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <p className="eyebrow">{t.home.sobreNosotros}</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {home.textoSeo.h2}
          </h2>
          {home.textoSeo.parrafos.map((p) => (
            <p key={p.slice(0, 40)} className="mt-5 text-slate">
              {p}
            </p>
          ))}
        </div>
      </section>
      {/* Escaparate del blog (las guías están en castellano) */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow">{t.home.consejos}</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {home.consejos.h2}
          </h2>
          <p className="mt-3 max-w-2xl text-slate">{home.consejos.intro}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <Reveal key={post.slug} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  hrefLang="es"
                  className="guide-link card group flex h-full flex-col p-6"
                >
                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-amber-dark" lang="es">
                    {post.titulo}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate" lang="es">
                    {post.descripcion}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-amber-dark">
                    {t.home.leerGuia}
                    <Icono nombre="flecha" className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link
            href={RUTAS[locale].blog}
            className="mt-8 inline-flex items-center gap-2 font-semibold text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-dark"
          >
            {home.consejos.ctaTexto}
            <Icono nombre="flecha" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <FAQSection faqs={home.faqs} fondoAlterno locale={locale} />
      <CTAFinal
        locale={locale}
        h2={home.ctaFinal.h2}
        texto={home.ctaFinal.texto}
        formId="form-presupuesto-final"
      />
    </>
  );
}
