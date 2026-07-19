import type { Metadata } from "next";
import { config } from "@/data/config";
import { contacto } from "@/data/paginas";
import { FormPresupuesto } from "@/components/FormPresupuesto";
import { JsonLd } from "@/components/JsonLd";
import { schemaBreadcrumb } from "@/lib/schema";
import { Icono } from "@/components/Iconos";

export const metadata: Metadata = {
  title: { absolute: `${contacto.metaTitle} | ${config.marca.nombre}` },
  description: `${contacto.metaDescription} ☎ ${config.telefono.display}`,
  alternates: { canonical: "/contacto" },
};

export default function PaginaContacto() {
  const { telefono, email, empresa } = config;
  return (
    <>
      <JsonLd
        data={schemaBreadcrumb([
          { nombre: "Inicio", url: "/" },
          { nombre: "Contacto", url: "/contacto" },
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
              <FormPresupuesto />
            </div>
            <div>
              <h2 className="font-display text-2xl font-bold text-ink">
                ¿Prefieres llamar?
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
              <p className="mt-2 text-slate">
                Urgencias atendidas 24 horas, todos los días del año.
              </p>

              <h2 className="mt-10 font-display text-2xl font-bold text-ink">
                Datos de contacto
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
    </>
  );
}
