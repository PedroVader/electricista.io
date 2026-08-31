import type { Metadata } from "next";
import Link from "next/link";
import { config } from "@/data/config";
import { home } from "@/data/paginas";
import { posts } from "@/data/posts";
import { Icono } from "@/components/Iconos";
import { Reveal } from "@/components/Reveal";
import { HeroOscuro } from "@/components/HeroOscuro";
import { ServiciosGrid } from "@/components/ServiciosGrid";
import { PorQue } from "@/components/PorQue";
import { TrabajosReales } from "@/components/TrabajosReales";
import { trabajos } from "@/data/trabajos";
import { ComoFunciona } from "@/components/ComoFunciona";
import { StatsBar } from "@/components/StatsBar";
import { ZonasSection } from "@/components/ZonasSection";
import { FAQSection } from "@/components/FAQSection";
import { CTAFinal } from "@/components/CTAFinal";

export const metadata: Metadata = {
  title: { absolute: home.metaTitle },
  description: `${home.metaDescription} ☎ ${config.telefono.display}`,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroOscuro
        eyebrow={config.hero.eyebrow}
        h1={config.hero.h1}
        sub={config.hero.sub}
      />

      {/* Banda de disponibilidad 24h */}
      <div className="bg-ink">
        <div className="mx-auto flex max-w-6xl flex-col gap-2 px-4 py-4 text-white sm:flex-row sm:items-center sm:justify-between">
          <div className="flex items-center gap-3">
            <span className="relative flex h-3 w-3 shrink-0">
              <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-amber opacity-75" />
              <span className="relative inline-flex h-3 w-3 rounded-full bg-amber" />
            </span>
            <p>
              <span className="font-semibold">
                {home.bandaUrgencias.texto}
              </span>{" "}
              <span className="hidden text-white/70 md:inline">
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

      <ServiciosGrid intro={home.serviciosIntro} />
      <PorQue
        h2={home.porQue.h2}
        parrafos={home.porQue.parrafos}
        bullets={home.porQue.bullets}
      />
      {/* Destacado: boletín eléctrico, el servicio más transaccional */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="overflow-hidden rounded-lg border border-slate/15 shadow-sm">
            <div className="franja-firma-fina" aria-hidden="true" />
            <div className="grid gap-8 bg-paper-warm p-8 lg:grid-cols-2 lg:gap-12">
              <div>
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

      <ComoFunciona />

      {/* Fotos reales del equipo: la prueba más directa que tenemos */}
      <TrabajosReales trabajos={trabajos} />

      {/* Stats y reseñas: solo con datos reales (flags en /data/config.ts) */}
      <StatsBar />
      <ZonasSection />
      {/* Bloque largo de contenido SEO de la home */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-16">
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
      {/* Escaparate del blog */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {home.consejos.h2}
          </h2>
          <p className="mt-3 max-w-2xl text-slate">{home.consejos.intro}</p>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {posts.slice(0, 3).map((post) => (
              <Reveal key={post.slug} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-slate/15 bg-paper p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h3 className="font-display text-lg font-bold text-ink group-hover:text-amber-dark">
                    {post.titulo}
                  </h3>
                  <p className="mt-2 flex-1 text-sm text-slate">
                    {post.descripcion}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-amber-dark">
                    Leer la guía
                    <Icono nombre="flecha" className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
          <Link
            href="/blog"
            className="mt-8 inline-flex items-center gap-2 font-semibold text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-dark"
          >
            {home.consejos.ctaTexto}
            <Icono nombre="flecha" className="h-4 w-4" />
          </Link>
        </div>
      </section>

      <FAQSection faqs={home.faqs} fondoAlterno />
      <CTAFinal
        h2={home.ctaFinal.h2}
        texto={home.ctaFinal.texto}
        formId="form-presupuesto-final"
      />
    </>
  );
}
