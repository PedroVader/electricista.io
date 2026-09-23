import type { FAQ } from "@/data/tipos";
import { ui, type Locale } from "@/lib/i18n";
import { JsonLd } from "./JsonLd";
import { schemaFAQ } from "@/lib/schema";
import { Icono } from "./Iconos";

export function FAQSection({
  faqs,
  titulo,
  fondoAlterno = false,
  locale = "es",
}: {
  faqs: FAQ[];
  titulo?: string;
  fondoAlterno?: boolean;
  locale?: Locale;
}) {
  if (faqs.length === 0) return null;
  const t = ui(locale).secciones;
  return (
    <section className={fondoAlterno ? "bg-paper-warm" : "bg-paper"}>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <p className="eyebrow">{t.dudas}</p>
        <h2 className="font-display text-3xl font-bold text-ink">
          {titulo ?? t.preguntasFrecuentes}
        </h2>
        <div className="mt-8 space-y-3">
          {faqs.map((faq) => (
            <details key={faq.pregunta} className="faq-item card" open>
              <summary className="flex items-center justify-between gap-4 font-semibold text-ink">
                {faq.pregunta}
                <span className="faq-chevron shrink-0 text-amber-dark">
                  <Icono nombre="chevron" className="h-5 w-5" />
                </span>
              </summary>
              <p className="mt-3 text-slate">{faq.respuesta}</p>
            </details>
          ))}
        </div>
        <JsonLd data={schemaFAQ(faqs)} />
      </div>
    </section>
  );
}
