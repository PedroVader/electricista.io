import type { Metadata } from "next";
import Link from "next/link";
import { config } from "@/data/config";
import { datos } from "@/lib/datos";
import { ui, alternates, rutaLanding, RUTAS } from "@/lib/i18n";
import { SLUGS_CA } from "@/data/ca/slugs";
import { CTAInline } from "./CTAInline";
import { FAQSection } from "./FAQSection";
import { CTAFinal } from "./CTAFinal";
import { JsonLd } from "./JsonLd";
import { Icono } from "./Iconos";
import { schemaBreadcrumb } from "@/lib/schema";

type LocalePagina = "es" | "ca";

export function metadataPresupuesto(locale: LocalePagina): Metadata {
  const { presupuesto } = datos(locale);
  return {
    title: { absolute: presupuesto.metaTitle },
    description: `${presupuesto.metaDescription} ☎ ${config.telefono.display}`,
    alternates: alternates({
      actual: locale,
      es: RUTAS.es.presupuesto,
      ca: RUTAS.ca.presupuesto,
    }),
  };
}

export function PaginaPresupuesto({ locale }: { locale: LocalePagina }) {
  const { presupuesto } = datos(locale);
  const t = ui(locale);
  const slugBoletin = locale === "ca" ? SLUGS_CA["boletin-electrico"] : "boletin-electrico";
  return (
    <>
      <JsonLd
        data={schemaBreadcrumb([
          { nombre: t.breadcrumb.inicio, url: RUTAS[locale].home },
          { nombre: t.breadcrumb.presupuesto, url: RUTAS[locale].presupuesto },
        ])}
      />
      <section className="bg-paper-warm">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-14 sm:pt-20">
          <h1 className="max-w-3xl font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] text-ink">
            {presupuesto.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate">
            {presupuesto.intro}
          </p>
        </div>
      </section>

      {presupuesto.secciones.map((seccion, i) => (
        <div key={seccion.h2}>
          <section className={i % 2 === 0 ? "bg-paper" : "bg-paper-warm"}>
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
              {seccion.h2.toLowerCase().includes(t.presupuesto.palabraBoletin) && (
                <p className="mt-4">
                  <Link
                    href={rutaLanding(locale, slugBoletin)}
                    className="font-semibold text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-dark"
                  >
                    {t.presupuesto.todoBoletin}
                  </Link>
                </p>
              )}
            </div>
          </section>
          {/* CTA doble tras cada bloque (§6.4) */}
          <div className={i % 2 === 0 ? "bg-paper pb-8" : "bg-paper-warm pb-8"}>
            <CTAInline locale={locale} evento={`llamada_presupuesto_${i}`} />
          </div>
        </div>
      ))}

      <FAQSection faqs={presupuesto.faqs} fondoAlterno locale={locale} />
      <CTAFinal
        locale={locale}
        h2={t.presupuesto.ctaH2}
        texto={t.presupuesto.ctaTexto}
      />
    </>
  );
}

