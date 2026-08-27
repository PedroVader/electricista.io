import type { Metadata } from "next";
import Link from "next/link";
import { config } from "@/data/config";
import { presupuesto } from "@/data/paginas";
import { CTAInline } from "@/components/CTAInline";
import { FAQSection } from "@/components/FAQSection";
import { CTAFinal } from "@/components/CTAFinal";
import { JsonLd } from "@/components/JsonLd";
import { schemaBreadcrumb } from "@/lib/schema";

export const metadata: Metadata = {
  title: { absolute: presupuesto.metaTitle },
  description: `${presupuesto.metaDescription} ☎ ${config.telefono.display}`,
  alternates: { canonical: "/presupuesto" },
};

export default function PaginaPresupuesto() {
  return (
    <>
      <JsonLd
        data={schemaBreadcrumb([
          { nombre: "Inicio", url: "/" },
          { nombre: "Presupuesto", url: "/presupuesto" },
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
              {seccion.h2.includes("boletín") && (
                <p className="mt-4">
                  <Link
                    href="/boletin-electrico"
                    className="font-semibold text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-dark"
                  >
                    Todo sobre el boletín eléctrico (CIE) →
                  </Link>
                </p>
              )}
            </div>
          </section>
          {/* CTA doble tras cada bloque (§6.4) */}
          <div className={i % 2 === 0 ? "bg-paper pb-8" : "bg-paper-warm pb-8"}>
            <CTAInline evento={`llamada_presupuesto_${i}`} />
          </div>
        </div>
      ))}

      <FAQSection faqs={presupuesto.faqs} fondoAlterno />
      <CTAFinal
        h2="Pide tu precio cerrado"
        texto="Gratis, por escrito y en menos de 2 horas en horario laboral. O llámanos y te lo damos por teléfono."
      />
    </>
  );
}
