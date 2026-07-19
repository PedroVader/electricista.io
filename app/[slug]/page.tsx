import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { config } from "@/data/config";
import { home } from "@/data/paginas";
import { ciudades, getCiudad } from "@/data/ciudades";
import { servicios, getServicio } from "@/data/servicios";
import type { Ciudad, Servicio } from "@/data/tipos";
import { HeroOscuro } from "@/components/HeroOscuro";
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
    ...servicios.map((s) => ({ slug: s.slug })),
  ];
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const pagina = getCiudad(slug) ?? getServicio(slug);
  if (!pagina) return {};
  return {
    title: { absolute: `${pagina.metaTitle} | ${config.marca.nombre}` },
    description: `${pagina.metaDescription} ☎ ${config.telefono.display}`,
    alternates: { canonical: `/${slug}` },
  };
}

/* ---------- Plantilla de ciudad (§6.2) ---------- */

function PaginaCiudad({ ciudad }: { ciudad: Ciudad }) {
  return (
    <div className="pb-14 md:pb-0">
      <HeroOscuro
        eyebrow={`Instaladores autorizados en ${ciudad.nombre} (${ciudad.comarca})`}
        h1={ciudad.h1}
        sub={config.hero.sub}
      />

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
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

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
            {ciudad.tambienServicio.municipios.map((m) => (
              <li
                key={m}
                className="flex items-center gap-2 rounded-md border border-slate/20 bg-paper-warm px-4 py-2 text-sm font-medium text-ink"
              >
                <span className="text-amber-dark">
                  <Icono nombre="pin" className="h-4 w-4" />
                </span>
                {m}
              </li>
            ))}
          </ul>
        </div>
      </section>

      <FAQSection
        faqs={[...ciudad.faqsLocales, ...home.faqs.slice(0, 3)]}
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

function PaginaServicio({ servicio }: { servicio: Servicio }) {
  const ctaPrincipal = servicio.ctaLabel ?? "Pedir presupuesto gratis";
  return (
    <div className={servicio.urgencias ? "pb-14 md:pb-0" : ""}>
      {/* Hero corto claro */}
      <section className="bg-paper-warm">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-14 sm:pt-20">
          <h1 className="max-w-3xl font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] text-ink">
            {servicio.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate">{servicio.heroSub}</p>
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
              className="rounded-md border-2 border-ink px-7 py-3.5 text-center text-lg font-bold text-ink hover:border-amber-dark hover:text-amber-dark"
            >
              {ctaPrincipal}
            </a>
          </div>
        </div>
      </section>

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
        titulo={`Preguntas sobre ${servicio.nombre.toLowerCase()}`}
      />

      {/* Interlinking: zonas donde ofrecemos el servicio */}
      <ZonasSection servicioNombre={servicio.nombre.toLowerCase()} />

      {/* Enlace SEO a /presupuesto desde todas las páginas de servicio */}
      <div className="bg-paper-warm">
        <div className="mx-auto max-w-6xl px-4 pb-10">
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
  const ciudad = getCiudad(slug);
  const servicio = getServicio(slug);
  if (!ciudad && !servicio) notFound();

  const nombre = ciudad ? ciudad.h1 : servicio!.nombre;

  return (
    <>
      <JsonLd
        data={schemaBreadcrumb([
          { nombre: "Inicio", url: "/" },
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
