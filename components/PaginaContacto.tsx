import type { Metadata } from "next";
import { config } from "@/data/config";
import { datos } from "@/lib/datos";
import { ui, alternates, RUTAS } from "@/lib/i18n";
import { Formulario } from "./Formulario";
import { FAQSection } from "./FAQSection";
import { JsonLd } from "./JsonLd";
import { schemaBreadcrumb } from "@/lib/schema";
import { Icono } from "./Iconos";

type LocalePagina = "es" | "ca";

export function metadataContacto(locale: LocalePagina): Metadata {
  const { contacto } = datos(locale);
  return {
    title: { absolute: `${contacto.metaTitle} | ${config.marca.nombre}` },
    description: `${contacto.metaDescription} ☎ ${config.telefono.display}`,
    alternates: alternates({
      actual: locale,
      es: RUTAS.es.contacto,
      ca: RUTAS.ca.contacto,
    }),
  };
}

export function PaginaContacto({ locale }: { locale: LocalePagina }) {
  const { telefono, email, empresa } = config;
  const { contacto } = datos(locale);
  const t = ui(locale);
  return (
    <>
      <JsonLd
        data={schemaBreadcrumb([
          { nombre: t.breadcrumb.inicio, url: RUTAS[locale].home },
          { nombre: t.breadcrumb.contacto, url: RUTAS[locale].contacto },
        ])}
      />
      <section className="bg-paper-warm">
        <div className="mx-auto max-w-6xl px-4 pb-16 pt-14 sm:pt-20">
          <h1 className="max-w-3xl font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] text-ink">
            {contacto.h1}
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate">{contacto.intro}</p>

          <div className="mt-12 grid gap-12 lg:grid-cols-2">
            <div className="rounded-lg border border-slate/15 bg-paper p-6 shadow-sm sm:p-8">
              <Formulario locale={locale} />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">
                {t.contacto.prefieresLlamar}
              </h2>
              <a
                href={`tel:${telefono.numero}`}
                data-event="llamada_contacto"
                className="mt-4 inline-flex items-center gap-3 font-display text-4xl font-bold text-ink hover:text-amber-dark"
              >
                <span className="text-amber-dark">
                  <Icono nombre="telefono" className="h-8 w-8" />
                </span>
                {telefono.display}
              </a>
              <p className="mt-2 text-slate">{t.contacto.urgencias}</p>

              <h2 className="mt-10 font-display text-2xl font-bold text-ink">
                {t.contacto.datos}
              </h2>
              <address className="mt-4 space-y-1 not-italic text-slate">
                <p>{empresa.razonSocial}</p>
                <p>
                  {empresa.direccion.calle}, {empresa.direccion.cp}{" "}
                  {empresa.direccion.ciudad} ({empresa.direccion.provincia})
                </p>
                <p>
                  <a
                    href={`mailto:${email}`}
                    className="text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-dark"
                  >
                    {email}
                  </a>
                </p>
              </address>
            </div>
          </div>
        </div>
      </section>

      {contacto.secciones.map((seccion, i) => (
        <section
          key={seccion.h2}
          className={i % 2 === 0 ? "bg-paper" : "bg-paper-warm"}
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

      {/* FAQSection ya emite el JSON-LD FAQPage; no se duplica aquí */}
      <FAQSection faqs={contacto.faqs} titulo={t.contacto.dudas} locale={locale} />
    </>
  );
}
