import type { Metadata } from "next";
import Link from "next/link";
import { config } from "@/data/config";
import { landingEn } from "@/data/en/landing";
import { alternates } from "@/lib/i18n";
import { schemaBreadcrumb } from "@/lib/schema";
import { HeroOscuro } from "@/components/HeroOscuro";
import { PorQue } from "@/components/PorQue";
import { FAQSection } from "@/components/FAQSection";
import { CTAFinal } from "@/components/CTAFinal";
import { CTAInline } from "@/components/CTAInline";
import { Instagram } from "@/components/Instagram";
import { JsonLd } from "@/components/JsonLd";
import { Icono } from "@/components/Iconos";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: { absolute: landingEn.metaTitle },
  description: `${landingEn.metaDescription} ☎ ${config.telefono.display}`,
  alternates: alternates({ actual: "en", es: "/", ca: "/ca", en: "/en" }),
};

export default function LandingEn() {
  const l = landingEn;
  return (
    <>
      <JsonLd
        data={schemaBreadcrumb([
          { nombre: "Home", url: "/" },
          { nombre: "English", url: "/en" },
        ])}
      />
      <HeroOscuro
        locale="en"
        eyebrow={l.hero.eyebrow}
        h1={l.hero.h1}
        sub={l.hero.sub}
        imagen="/img/hero-equipo.jpg"
        badges={l.badges}
      />

      {/* Servicios en inglés: enlazan a las páginas completas en castellano */}
      <section className="services-section bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow">Services</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {l.servicios.h2}
          </h2>
          <p className="mt-3 max-w-3xl text-slate">{l.servicios.intro}</p>
          <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
            {l.servicios.items.map((s) => (
              <Reveal key={s.slugEs} className="h-full">
                <div className="service-card card flex h-full flex-col p-6">
                  <span className="icon-box">
                    <Icono nombre={s.icono} className="h-6 w-6" />
                  </span>
                  <h3 className="mt-4 font-display text-lg font-bold text-ink">
                    {s.titulo}
                  </h3>
                  <p className="mt-1 flex-1 text-sm text-slate">{s.texto}</p>
                  <Link
                    href={`/${s.slugEs}`}
                    hrefLang="es"
                    className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink hover:text-amber-dark"
                  >
                    Full details (in Spanish)
                    <Icono nombre="flecha" className="h-4 w-4" />
                  </Link>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <PorQue
        locale="en"
        h2={l.porQue.h2}
        parrafos={l.porQue.parrafos}
        bullets={l.porQue.bullets}
      />

      {/* El boletín: lo que un recién llegado no sabe */}
      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="featured-service overflow-hidden">
            <div className="franja-firma-fina" aria-hidden="true" />
            <div className="grid gap-8 bg-white p-8 lg:grid-cols-2 lg:gap-12">
              <div>
                <p className="eyebrow">Electrical certificate</p>
                <h2 className="font-display text-3xl font-bold text-ink">
                  {l.boletin.h2}
                </h2>
                {l.boletin.parrafos.map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-slate">
                    {p}
                  </p>
                ))}
              </div>
              <ul className="space-y-4 self-center">
                {l.boletin.bullets.map((b) => (
                  <li key={b} className="flex items-start gap-3 font-medium text-ink">
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

      <div className="bg-paper pb-10">
        <CTAInline locale="en" evento="llamada_cta_en" />
      </div>

      {/* Cómo funciona, en inglés */}
      <section className="process-section bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow">How we work</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {l.comoFunciona.h2}
          </h2>
          <ol className="mt-10 grid gap-6 sm:grid-cols-3">
            {l.comoFunciona.pasos.map((paso, i) => (
              <li key={paso.titulo} className="h-full">
                <Reveal className="process-step card h-full">
                  <span className="step-number font-display">{i + 1}</span>
                  <h3 className="mt-4 font-display text-xl font-bold text-ink">
                    {paso.titulo}
                  </h3>
                  <p className="mt-2 text-sm text-slate">{paso.texto}</p>
                </Reveal>
              </li>
            ))}
          </ol>
        </div>
      </section>

      {/* Zonas */}
      <section className="bg-paper-warm">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <p className="eyebrow">Service areas</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {l.zonas.h2}
          </h2>
          <p className="mt-3 max-w-3xl text-slate">{l.zonas.texto}</p>
          <ul className="mt-6 flex flex-wrap gap-3">
            {l.zonas.ciudades.map((c) => (
              <li
                key={c}
                className="flex items-center gap-2 rounded-md border border-slate/20 bg-paper px-4 py-2 text-sm font-medium text-ink"
              >
                <span className="text-amber-dark">
                  <Icono nombre="pin" className="h-4 w-4" />
                </span>
                {c}
              </li>
            ))}
          </ul>
          <Instagram evento="instagram_en" className="mt-10" locale="en" />
        </div>
      </section>

      <FAQSection faqs={l.faqs} locale="en" />

      <CTAFinal
        locale="en"
        h2={l.ctaFinal.h2}
        texto={l.ctaFinal.texto}
        formId="form-presupuesto-final"
      />
    </>
  );
}
