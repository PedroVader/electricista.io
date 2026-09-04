import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { notFound } from "next/navigation";
import { config } from "@/data/config";
import { home } from "@/data/paginas";
import { ciudades, getCiudad } from "@/data/ciudades";
import { distritos, getDistrito } from "@/data/distritos";
import {
  servicios,
  getServicio,
  serviciosDeCiudad,
  hijosDeServicio,
} from "@/data/servicios";
import { hrefDeZona } from "@/data/zonas";
import { posts } from "@/data/posts";
import { trabajosPorEtiqueta } from "@/data/trabajos";
import { TrabajosReales } from "@/components/TrabajosReales";
import type { Ciudad, Servicio } from "@/data/tipos";
import { HeroOscuro } from "@/components/HeroOscuro";
import { FranjaFirma } from "@/components/FranjaFirma";
import { ServiciosGrid } from "@/components/ServiciosGrid";
import { PorQue } from "@/components/PorQue";
import { ComoFunciona } from "@/components/ComoFunciona";
import { StatsBar } from "@/components/StatsBar";
import { ZonasSection } from "@/components/ZonasSection";
import { FAQSection } from "@/components/FAQSection";
import { CTAFinal } from "@/components/CTAFinal";
import { CTAInline } from "@/components/CTAInline";
import { BarraUrgencias } from "@/components/BarraUrgencias";
import { JsonLd } from "@/components/JsonLd";
import { Icono } from "@/components/Iconos";
import { Reveal } from "@/components/Reveal";
import { schemaBreadcrumb } from "@/lib/schema";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return [
    ...ciudades.map((c) => ({ slug: c.slug })),
    ...distritos.map((d) => ({ slug: d.slug })),
    ...servicios.map((s) => ({ slug: s.slug })),
  ];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pagina = getCiudad(slug) ?? getDistrito(slug) ?? getServicio(slug);
  if (!pagina) return {};
  return {
    // Sin sufijo de marca: estos titles ya son completos y el sufijo solo
    // empujaba las keywords fuera del ancho que Google muestra en SERP.
    title: { absolute: pagina.metaTitle },
    description: `${pagina.metaDescription} ☎ ${config.telefono.display}`,
    alternates: { canonical: `/${slug}` },
  };
}

/* ---------- Plantilla de ciudad (§6.2) ---------- */

function PaginaCiudad({ ciudad }: { ciudad: Ciudad }) {
  return (
    // bg-ink: el padding móvil de la barra de urgencias funde con CTA y footer
    <div className="bg-ink pb-14 md:pb-0">
      <HeroOscuro
        eyebrow={`Instaladores autorizados en ${ciudad.nombre} (${ciudad.comarca})`}
        h1={ciudad.h1}
        sub={config.hero.sub}
        imagen={ciudad.heroImage ?? "/img/hero-ciudades.jpg"}
        alt={`Electricista de ${config.marca.nombre} trabajando en ${ciudad.nombre}`}
      />

      {/* Distritos: enlace de vuelta a la ciudad madre */}
      {ciudad.padre && (
        <div className="bg-paper">
          <div className="mx-auto max-w-6xl px-4 pt-6">
            <Link
              href={`/${ciudad.padre.slug}`}
              className="text-sm font-semibold text-slate hover:text-amber-dark"
            >
              ‹ Ver todo nuestro servicio de electricista en{" "}
              {ciudad.padre.nombre}
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
      {serviciosDeCiudad(ciudad.slug).length > 0 && (
        <div className="bg-paper">
          <div className="mx-auto grid max-w-6xl gap-3 px-4 pt-8 sm:grid-cols-2">
            {serviciosDeCiudad(ciudad.slug).map((s) => (
              <Link
                key={s.slug}
                href={`/${s.slug}`}
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
      <ServiciosGrid ciudad={ciudad.nombre} />

      <PorQue
        h2={`Por qué en ${ciudad.nombre} nos llaman a nosotros`}
        parrafos={ciudad.porQue}
        bullets={home.porQue.bullets}
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
                <div className="h-full rounded-lg border border-slate/15 bg-paper-warm p-5">
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
                      Electricista en {zona.nombre}
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

      <ComoFunciona />
      <StatsBar />

      {/* También damos servicio en... (texto real, no solo lista) */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            También damos servicio en
          </h2>
          <p className="mt-4 max-w-3xl text-slate">
            {ciudad.tambienServicio.intro}
          </p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {ciudad.tambienServicio.municipios.map((m) => {
              const href = hrefDeZona(m);
              const chip =
                "flex items-center gap-2 rounded-md border border-slate/20 bg-paper-warm px-4 py-2 text-sm font-medium text-ink";
              return (
                <li key={m}>
                  {href && href !== `/${ciudad.slug}` ? (
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
        // Solo FAQs propias: añadir las genéricas de la home duplicaba
        // texto y schema FAQPage en las 13 landings de zona.
        faqs={ciudad.faqsLocales}
        titulo={`Preguntas frecuentes en ${ciudad.nombre}`}
        fondoAlterno
      />

      <CTAFinal
        h2={`¿Necesitas un electricista en ${ciudad.nombre}?`}
        texto={home.ctaFinal.texto}
        formId="form-presupuesto-final"
      />

      <BarraUrgencias />
    </div>
  );
}

/* ---------- Plantilla de servicio (§6.3) ---------- */

/** Guías del blog que declaran este servicio en `relacionados`. */
function postsDeServicio(slug: string) {
  return posts.filter((p) => p.relacionados.includes(slug));
}

/** Qué fotos reales tienen sentido en cada servicio. */
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

function PaginaServicio({ servicio }: { servicio: Servicio }) {
  const ctaPrincipal = servicio.ctaLabel ?? "Pedir presupuesto gratis";
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
              alt={`${servicio.h1}: electricistas de ${config.marca.nombre} en plena intervención`}
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
              Llamar ahora
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
              href={`/${servicio.local.servicioPadre}`}
              className="hover:text-amber-dark"
            >
              ‹ {getServicio(servicio.local.servicioPadre)?.nombre} en toda el
              área de Barcelona
            </Link>
            <Link
              href={`/${servicio.local.ciudadSlug}`}
              className="hover:text-amber-dark"
            >
              ‹ Electricista en {servicio.local.ciudad}
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
              Ahora mismo hay un electricista de guardia.{" "}
              <a
                href={`tel:${config.telefono.numero}`}
                data-event="llamada_disponibilidad"
                className="text-amber underline hover:text-amber-dark"
              >
                Llama al {config.telefono.display}
              </a>
            </p>
          </div>
        </div>
      )}

      {/* Qué incluye */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            Qué incluye
          </h2>
          <div className="mt-10 grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {servicio.queIncluye.map((item) => (
              <Reveal key={item.titulo} className="h-full">
                <div className="h-full rounded-lg border border-slate/15 bg-paper p-5 shadow-sm">
                  <span className="text-amber-dark">
                    <Icono nombre="check" className="h-7 w-7" />
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink">
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
              <CTAInline evento={`llamada_cta_${servicio.slug}_${i}`} />
            </div>
          )}
        </div>
      ))}

      <FAQSection
        faqs={servicio.faqs}
        titulo={`Preguntas sobre ${minuscula(servicio.nombre)}`}
      />

      {/* Landings locales que cuelgan de este servicio */}
      {hijosDeServicio(servicio.slug).length > 0 && (
        <section className="bg-paper">
          <div className="mx-auto max-w-6xl px-4 py-14">
            <h2 className="font-display text-3xl font-bold text-ink">
              {servicio.nombre} en tu ciudad
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {hijosDeServicio(servicio.slug).map((hijo) => (
                <li key={hijo.slug}>
                  <Link
                    href={`/${hijo.slug}`}
                    className="block h-full rounded-lg border border-slate/15 bg-paper-warm p-5 hover:border-amber"
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
        <ZonasSection servicioNombre={minuscula(servicio.nombre)} />
      )}

      {/* Fotos reales del propio servicio */}
      <TrabajosReales
        trabajos={trabajosPorEtiqueta(FOTOS_POR_SERVICIO[servicio.slug] ?? "")}
        h2={`Cómo queda un trabajo de ${servicio.nombre.toLowerCase()}`}
      />

      {/* Interlinking recíproco: las guías ya enlazan al servicio, no al revés */}
      {postsDeServicio(servicio.slug).length > 0 && (
        <section className="bg-paper-warm">
          <div className="mx-auto max-w-6xl px-4 pt-14">
            <h2 className="font-display text-3xl font-bold text-ink">
              Guías relacionadas
            </h2>
            <ul className="mt-6 grid gap-4 sm:grid-cols-2">
              {postsDeServicio(servicio.slug).map((post) => (
                <li key={post.slug}>
                  <Link
                    href={`/blog/${post.slug}`}
                    className="block h-full rounded-lg border border-slate/15 bg-paper p-5 hover:border-amber"
                  >
                    <p className="font-display text-lg font-bold text-ink">
                      {post.titulo}
                    </p>
                    <p className="mt-2 text-sm text-slate">{post.descripcion}</p>
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
            href="/presupuesto"
            className="font-semibold text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-dark"
          >
            ¿Quieres saber cómo calculamos el precio? Así funciona nuestro
            presupuesto cerrado →
          </Link>
        </div>
      </div>

      <CTAFinal
        h2={servicio.b2b ? "Pide una visita técnica" : "¿Hablamos?"}
        texto={
          servicio.b2b
            ? "Cuéntanos qué instalaciones tenéis y te proponemos plan y precio cerrado. Facturamos con CIF e IVA desglosado."
            : home.ctaFinal.texto
        }
      />

      {servicio.urgencias && <BarraUrgencias />}
    </div>
  );
}

/* ---------- Resolución de ruta ---------- */

export default async function Pagina({ params }: Props) {
  const { slug } = await params;
  const ciudad = getCiudad(slug) ?? getDistrito(slug);
  const servicio = getServicio(slug);
  if (!ciudad && !servicio) notFound();

  const nombre = ciudad ? ciudad.h1 : servicio!.nombre;

  return (
    <>
      <JsonLd
        data={schemaBreadcrumb([
          { nombre: "Inicio", url: "/" },
          ...(ciudad?.padre
            ? [
                {
                  nombre: `Electricista en ${ciudad.padre.nombre}`,
                  url: `/${ciudad.padre.slug}`,
                },
              ]
            : []),
          ...(servicio?.local
            ? [
                {
                  nombre: getServicio(servicio.local.servicioPadre)!.nombre,
                  url: `/${servicio.local.servicioPadre}`,
                },
              ]
            : []),
          { nombre, url: `/${slug}` },
        ])}
      />
      {ciudad ? (
        <PaginaCiudad ciudad={ciudad} />
      ) : (
        <PaginaServicio servicio={servicio!} />
      )}
    </>
  );
}
