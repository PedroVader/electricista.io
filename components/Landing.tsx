import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { config } from "@/data/config";
import { posts } from "@/data/posts";
import { SLUGS_CA } from "@/data/ca/slugs";
import { hrefDeZona } from "@/data/zonas";
import type { Ciudad, Servicio } from "@/data/tipos";
import { datos } from "@/lib/datos";
import { ui, rutaLanding, alternates, RUTAS } from "@/lib/i18n";
import { schemaBreadcrumb } from "@/lib/schema";
import { TrabajosReales } from "./TrabajosReales";
import { HeroOscuro } from "./HeroOscuro";
import { FranjaFirma } from "./FranjaFirma";
import { ServiciosGrid } from "./ServiciosGrid";
import { PorQue } from "./PorQue";
import { ComoFunciona } from "./ComoFunciona";
import { StatsBar } from "./StatsBar";
import { ZonasSection } from "./ZonasSection";
import { FAQSection } from "./FAQSection";
import { CTAFinal } from "./CTAFinal";
import { CTAInline } from "./CTAInline";
import { BarraUrgencias } from "./BarraUrgencias";
import { JsonLd } from "./JsonLd";
import { Icono } from "./Iconos";
import { Reveal } from "./Reveal";

/**
 * Plantillas de landing (ciudad, distrito y servicio) compartidas por los
 * idiomas. Las rutas /[slug] y /ca/[slug] solo resuelven el idioma y
 * delegan aquí.
 */

type LocaleLanding = "es" | "ca";

export function slugsLanding(locale: LocaleLanding) {
  const d = datos(locale);
  return [
    ...d.ciudades.map((c) => ({ slug: c.slug })),
    ...d.distritos.map((dist) => ({ slug: dist.slug })),
    ...d.servicios.map((s) => ({ slug: s.slug })),
  ];
}

export function resolverLanding(locale: LocaleLanding, slug: string) {
  const d = datos(locale);
  const ciudad = d.getCiudad(slug) ?? d.getDistrito(slug);
  const servicio = d.getServicio(slug);
  return { ciudad, servicio, pagina: ciudad ?? servicio };
}

/** hreflang de una landing: castellano en la raíz, catalán bajo /ca */
function alternatesLanding(locale: LocaleLanding, pagina: Ciudad | Servicio) {
  const slugEs = locale === "es" ? pagina.slug : pagina.slugEs;
  const slugCa = locale === "ca" ? pagina.slug : SLUGS_CA[pagina.slug];
  return alternates({
    actual: locale,
    es: slugEs ? `/${slugEs}` : undefined,
    ca: slugCa ? `/ca/${slugCa}` : undefined,
  });
}

export function metadataLanding(locale: LocaleLanding, slug: string): Metadata {
  const { pagina } = resolverLanding(locale, slug);
  if (!pagina) return {};
  return {
    // Sin sufijo de marca: estos titles ya son completos y el sufijo solo
    // empujaba las keywords fuera del ancho que Google muestra en SERP.
    title: { absolute: pagina.metaTitle },
    description: `${pagina.metaDescription} ☎ ${config.telefono.display}`,
    alternates: alternatesLanding(locale, pagina),
  };
}

/* ---------- Plantilla de ciudad (§6.2) ---------- */

function PaginaCiudad({ ciudad, locale }: { ciudad: Ciudad; locale: LocaleLanding }) {
  const t = ui(locale);
  const d = datos(locale);
  const serviciosCiudad = d.serviciosDeCiudad(ciudad.slug);
  return (
    // bg-ink: el padding móvil de la barra de urgencias funde con CTA y footer
    <div className="bg-ink pb-14 md:pb-0">
      <HeroOscuro
        locale={locale}
        eyebrow={t.ciudad.eyebrow(ciudad.nombre, ciudad.comarca)}
        h1={ciudad.h1}
        sub={d.hero.sub}
        imagen={ciudad.heroImage ?? "/img/hero-ciudades.jpg"}
        alt={t.ciudad.altHero(config.marca.nombre, ciudad.nombre)}
      />

      {/* Distritos: enlace de vuelta a la ciudad madre */}
      {ciudad.padre && (
        <div className="bg-paper">
          <div className="mx-auto max-w-6xl px-4 pt-6">
            <Link
              href={rutaLanding(locale, ciudad.padre.slug)}
              className="text-sm font-semibold text-slate hover:text-amber-dark"
            >
              {t.ciudad.verPadre(ciudad.padre.nombre)}
            </Link>
          </div>
        </div>
      )}

      {/* Barcelona: enlace destacado a la landing de urgencias */}
      {ciudad.enlaceUrgente && (
        <div className="bg-paper">
          <div className="mx-auto max-w-6xl px-4 pt-8">
            <Link
              href={ciudad.enlaceUrgente.href}
              className="flex items-center justify-between gap-4 rounded-lg border-2 border-amber bg-paper-warm px-5 py-4 font-semibold text-ink hover:bg-amber/10"
            >
              {ciudad.enlaceUrgente.texto}
              <span className="shrink-0 text-amber-dark">
                <Icono nombre="rapido" className="h-6 w-6" />
              </span>
            </Link>
          </div>
        </div>
      )}

      {/* Landings de servicio propias de esta ciudad */}
      {serviciosCiudad.length > 0 && (
        <div className="bg-paper">
          <div className="mx-auto grid max-w-6xl gap-3 px-4 pt-8 sm:grid-cols-2">
            {serviciosCiudad.map((s) => (
              <Link
                key={s.slug}
                href={rutaLanding(locale, s.slug)}
                className="flex items-center justify-between gap-4 rounded-lg border-2 border-amber bg-paper-warm px-5 py-4 font-semibold text-ink hover:bg-amber/10"
              >
                {s.card.titulo}
                <span className="shrink-0 text-amber-dark">
                  <Icono nombre={s.card.icono} className="h-6 w-6" />
                </span>
              </Link>
            ))}
          </div>
        </div>
      )}

      {/* Interlinking: todos los servicios desde la ciudad */}
      <ServiciosGrid ciudad={ciudad.nombre} locale={locale} />

      <PorQue
        locale={locale}
        h2={t.ciudad.porQue(ciudad.nombre)}
        parrafos={ciudad.porQue}
        bullets={d.home.porQue.bullets}
      />

      {/* Barrio a barrio: contenido específico por zona */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {ciudad.zonas.h2}
          </h2>
          <p className="mt-3 max-w-3xl text-slate">{ciudad.zonas.intro}</p>
          <div className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
            {ciudad.zonas.items.map((zona) => (
              <Reveal key={zona.nombre} className="h-full">
                <div className="card h-full p-5">
                  <h3 className="flex items-center gap-2 font-display text-lg font-bold text-ink">
                    <span className="text-amber-dark">
                      <Icono nombre="pin" className="h-5 w-5" />
                    </span>
                    {zona.nombre}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{zona.texto}</p>
                  {zona.href && (
                    <Link
                      href={zona.href}
                      className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ink hover:text-amber-dark"
                    >
                      {t.ciudad.electricistaEn(zona.nombre)}
                      <Icono nombre="flecha" className="h-4 w-4" />
                    </Link>
                  )}
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Contenido largo propio de la zona */}
      {ciudad.secciones?.map((seccion, i) => (
        <section
          key={seccion.h2}
          className={i % 2 === 0 ? "bg-paper-warm" : "bg-paper"}
        >
          <div className="mx-auto max-w-3xl px-4 py-14">
            <h2 className="font-display text-3xl font-bold text-ink">
              {seccion.h2}
            </h2>
            {seccion.parrafos.map((p) => (
              <p key={p.slice(0, 40)} className="mt-4 text-slate">
                {p}
              </p>
            ))}
            {seccion.bullets && (
              <ul className="mt-5 space-y-3">
                {seccion.bullets.map((b) => (
                  <li
                    key={b}
                    className="flex items-start gap-3 font-medium text-ink"
                  >
                    <span className="mt-0.5 shrink-0 text-amber-dark">
                      <Icono nombre="check" className="h-5 w-5" />
                    </span>
                    {b}
                  </li>
                ))}
              </ul>
            )}
          </div>
        </section>
      ))}

      <ComoFunciona locale={locale} />
      <StatsBar />

      {/* También damos servicio en... (texto real, no solo lista) */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {t.ciudad.tambienServicio}
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            {ciudad.tambienServicio.intro}
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {ciudad.tambienServicio.municipios.map((m) => {
              const hrefEs = hrefDeZona(m);
              const slugEs = hrefEs?.replace(/^\//, "");
              const href =
                locale === "ca"
                  ? slugEs && SLUGS_CA[slugEs]
                    ? `/ca/${SLUGS_CA[slugEs]}`
                    : undefined
                  : hrefEs;
              const chip =
                "flex items-center gap-2 rounded-md border border-slate/20 bg-paper-warm px-4 py-2 text-sm font-medium text-ink";
              return (
                <li key={m}>
                  {href && href !== rutaLanding(locale, ciudad.slug) ? (
                    <Link
                      href={href}
                      className={`${chip} underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-dark`}
                    >
                      <span className="text-amber-dark">
                        <Icono nombre="pin" className="h-4 w-4" />
                      </span>
                      {m}
                    </Link>
                  ) : (
                    <span className={chip}>
                      <span className="text-amber-dark">
                        <Icono nombre="pin" className="h-4 w-4" />
                      </span>
                      {m}
                    </span>
                  )}
                </li>
              );
            })}
          </ul>
        </div>
      </section>

      <FAQSection
        locale={locale}
        // Solo FAQs propias: añadir las genéricas de la home duplicaba
        // texto y schema FAQPage en las landings de zona.
        faqs={ciudad.faqsLocales}
        titulo={t.ciudad.faqs(ciudad.nombre)}
        fondoAlterno
      />

      <CTAFinal
        locale={locale}
        h2={t.ciudad.ctaFinal(ciudad.nombre)}
        texto={d.home.ctaFinal.texto}
        formId="form-presupuesto-final"
      />

      <BarraUrgencias locale={locale} />
    </div>
  );
}

/* ---------- Plantilla de servicio (§6.3) ---------- */

/** Guías del blog (en castellano) que declaran este servicio en `relacionados`. */
function postsDeServicio(slugEs: string) {
  return posts.filter((p) => p.relacionados.includes(slugEs));
}

/** Qué fotos reales tienen sentido en cada servicio (por slug en castellano). */
const FOTOS_POR_SERVICIO: Record<string, string> = {
  "electricistas-urgentes-24-horas": "urgencias",
  "electricista-urgente-barcelona": "urgencias",
  "boletin-electrico": "boletin",
  "averias-electricas": "averias",
  "cambio-cuadro-electrico": "cuadro",
  "instalacion-punto-de-carga-coche-electrico": "carga",
  "subir-potencia-luz": "potencia",
  "electricistas-para-empresas-y-comunidades": "cuadro",
  "instalaciones-electricas": "cuadro",
  "boletin-electrico-sabadell": "boletin",
  "electricista-urgente-sabadell": "urgencias",
  "electricista-urgente-badalona": "urgencias",
};

/** Solo la inicial en minúscula: conserva mayúsculas de ciudades y siglas. */
const minuscula = (s: string) => s.charAt(0).toLowerCase() + s.slice(1);

function PaginaServicio({ servicio, locale }: { servicio: Servicio; locale: LocaleLanding }) {
  const t = ui(locale);
  const d = datos(locale);
  const slugEs = servicio.slugEs ?? servicio.slug;
  const ctaPrincipal = servicio.ctaLabel ?? t.servicio.ctaDefecto;
  const hijos = d.hijosDeServicio(servicio.slug);
  const guias = postsDeServicio(slugEs);
  const padre = servicio.local ? d.getServicio(servicio.local.servicioPadre) : undefined;
  return (
    <div className={servicio.urgencias ? "bg-ink pb-14 md:pb-0" : ""}>
      {/* Hero de servicio: oscuro con foto propia, claro sin ella */}
      <section
        className={
          servicio.heroImage
            ? "relative bg-ink text-white"
            : "bg-paper-warm text-ink"
        }
      >
        {servicio.heroImage && (
          <>
            <Image
              src={servicio.heroImage}
              alt={t.servicio.altHero(servicio.h1, config.marca.nombre)}
              fill
              priority
              sizes="100vw"
              className="object-cover object-[70%_30%] opacity-80"
            />
            <div
              className="absolute inset-0 bg-gradient-to-r from-ink via-ink/70 to-ink/25"
              aria-hidden="true"
            />
          </>
        )}
        <div className="relative mx-auto max-w-6xl px-4 pb-12 pt-14 sm:pb-16 sm:pt-20">
          <h1 className="max-w-3xl font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1]">
            {servicio.h1}
          </h1>
          <p
            className={`mt-5 max-w-2xl text-lg ${
              servicio.heroImage ? "text-white/85" : "text-slate"
            }`}
          >
            {servicio.heroSub}
          </p>
          <div className="mt-8 flex flex-col gap-3 sm:flex-row">
            <a
              href={`tel:${config.telefono.numero}`}
              data-event="llamada_hero"
              className="flex items-center justify-center gap-2.5 rounded-md bg-amber px-7 py-3.5 text-lg font-bold text-ink hover:bg-amber-dark"
            >
              <Icono nombre="telefono" className="h-5 w-5" />
              {t.servicio.llamarAhora}
            </a>
            <a
              href="#form-presupuesto"
              data-event="form_hero"
              className={`rounded-md border-2 px-7 py-3.5 text-center text-lg font-bold ${
                servicio.heroImage
                  ? "border-white/60 text-white hover:border-amber hover:text-amber"
                  : "border-ink text-ink hover:border-amber-dark hover:text-amber-dark"
              }`}
            >
              {ctaPrincipal}
            </a>
          </div>
        </div>
      </section>
      {servicio.heroImage && <FranjaFirma />}

      {/* Landing local: enlaces de vuelta al servicio padre y a la ciudad */}
      {servicio.local && (
        <div className="bg-paper">
          <div className="mx-auto flex max-w-6xl flex-wrap gap-x-6 gap-y-2 px-4 pt-6 text-sm font-semibold text-slate">
            <Link
              href={rutaLanding(locale, servicio.local.servicioPadre)}
              className="hover:text-amber-dark"
            >
              {t.servicio.volverPadre(padre?.nombre ?? "")}
            </Link>
            <Link
              href={rutaLanding(locale, servicio.local.ciudadSlug)}
              className="hover:text-amber-dark"
            >
              {t.servicio.volverCiudad(servicio.local.ciudad)}
            </Link>
          </div>
        </div>
      )}

      {/* Bloque de disponibilidad en páginas de urgencias */}
      {servicio.urgencias && (
        <div className="bg-ink">
          <div className="mx-auto flex max-w-6xl items-center gap-3 px-4 py-4 text-white">
            <span className="relative flex h-3 w-3">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-amber" />
            </span>
            <p className="font-semibold">
              {t.servicio.guardia}{" "}
              <a
                href={`tel:${config.telefono.numero}`}
                data-event="llamada_disponibilidad"
                className="text-amber underline hover:text-amber-dark"
              >
                {t.servicio.llamaAl} {config.telefono.display}
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Qué incluye */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow">{t.servicio.elServicio}</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {t.servicio.queIncluye}
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {servicio.queIncluye.map((item) => (
              <Reveal key={item.titulo} className="h-full">
                <div className="card h-full p-6">
                  <span className="icon-box">
                    <Icono nombre="check" className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {item.titulo}
                  </h3>
                  <p className="mt-1 text-sm text-slate">{item.texto}</p>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* Secciones de contenido, con CTA intercalado si la página es muy transaccional */}
      {servicio.secciones.map((seccion, i) => (
        <div key={seccion.h2}>
          <section className={i % 2 === 0 ? "bg-paper-warm" : "bg-paper"}>
            <div className="mx-auto max-w-3xl px-4 py-14">
              <h2 className="font-display text-3xl font-bold text-ink">
                {seccion.h2}
              </h2>
              {seccion.parrafos.map((p) => (
                <p key={p.slice(0, 40)} className="mt-4 text-slate">
                  {p}
                </p>
              ))}
              {seccion.bullets && (
                <ul className="mt-5 space-y-3">
                  {seccion.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 font-medium text-ink"
                    >
                      <span className="mt-0.5 shrink-0 text-amber-dark">
                        <Icono nombre="check" className="h-5 w-5" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </div>
          </section>
          {servicio.ctaFrecuente && i % 2 === 1 && (
            <div className="bg-paper py-6">
              <CTAInline locale={locale} evento={`llamada_cta_${slugEs}_${i}`} />
            </div>
          )}
        </div>
      ))}

      <FAQSection
        locale={locale}
        faqs={servicio.faqs}
        titulo={t.servicio.preguntasSobre(minuscula(servicio.nombre))}
      />

      {/* Landings locales que cuelgan de este servicio */}
      {hijos.length > 0 && (
        <section className="bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-display text-3xl font-bold text-ink">
              {t.servicio.enTuCiudad(servicio.nombre)}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {hijos.map((hijo) => (
                <li key={hijo.slug}>
                  <Link
                    href={rutaLanding(locale, hijo.slug)}
                    className="card block h-full p-5 hover:border-amber-dark"
                  >
                    <p className="font-display text-lg font-bold text-ink">
                      {hijo.card.titulo}
                    </p>
                    <p className="mt-2 text-sm text-slate">{hijo.card.linea}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Interlinking: zonas donde ofrecemos el servicio (no en landings locales) */}
      {!servicio.local && (
        <ZonasSection locale={locale} servicioNombre={minuscula(servicio.nombre)} />
      )}

      {/* Fotos reales del propio servicio */}
      <TrabajosReales
        locale={locale}
        trabajos={d.trabajosPorEtiqueta(FOTOS_POR_SERVICIO[slugEs] ?? "")}
        h2={t.servicio.comoQueda(servicio.nombre.toLowerCase())}
      />

      {/* Interlinking recíproco: las guías ya enlazan al servicio, no al revés */}
      {guias.length > 0 && (
        <section className="bg-paper-warm">
          <div className="mx-auto max-w-6xl px-4 pt-14">
            <h2 className="font-display text-3xl font-bold text-ink">
              {t.servicio.guias}
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {guias.map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    hrefLang="es"
                    className="block h-full rounded-lg border border-slate/15 bg-paper p-5 hover:border-amber"
                  >
                    <p className="font-display text-lg font-bold text-ink" lang="es">
                      {post.titulo}
                    </p>
                    <p className="mt-2 text-sm text-slate" lang="es">{post.descripcion}</p>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </section>
      )}

      {/* Enlace SEO a /presupuesto desde todas las páginas de servicio */}
      <div className="bg-paper-warm">
        <div className="mx-auto max-w-6xl px-4 py-10">
          <Link
            href={RUTAS[locale].presupuesto}
            className="font-semibold text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-dark"
          >
            {t.servicio.comoCalculamos}
          </Link>
        </div>
      </div>

      <CTAFinal
        locale={locale}
        h2={servicio.b2b ? t.servicio.visitaTecnica : t.cta.hablamos}
        texto={servicio.b2b ? t.servicio.b2bTexto : d.home.ctaFinal.texto}
      />

      {servicio.urgencias && <BarraUrgencias locale={locale} />}
    </div>
  );
}

/* ---------- Página completa ---------- */

export function Landing({ locale, slug }: { locale: LocaleLanding; slug: string }) {
  const { ciudad, servicio } = resolverLanding(locale, slug);
  const t = ui(locale);
  const d = datos(locale);
  if (!ciudad && !servicio) return null;

  const nombre = ciudad ? ciudad.h1 : servicio!.nombre;
  const padreServicio = servicio?.local
    ? d.getServicio(servicio.local.servicioPadre)
    : undefined;

  return (
    <>
      <JsonLd
        data={schemaBreadcrumb([
          { nombre: t.breadcrumb.inicio, url: RUTAS[locale].home },
          ...(ciudad?.padre
            ? [
                {
                  nombre: t.ciudad.electricistaEn(ciudad.padre.nombre),
                  url: rutaLanding(locale, ciudad.padre.slug),
                },
              ]
            : []),
          ...(servicio?.local && padreServicio
            ? [
                {
                  nombre: padreServicio.nombre,
                  url: rutaLanding(locale, servicio.local.servicioPadre),
                },
              ]
            : []),
          { nombre, url: rutaLanding(locale, slug) },
        ])}
      />
      {ciudad ? (
        <PaginaCiudad ciudad={ciudad} locale={locale} />
      ) : (
        <PaginaServicio servicio={servicio!} locale={locale} />
      )}
    </>
  );
}
