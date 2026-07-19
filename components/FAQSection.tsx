import type { FAQ } from "@/data/tipos";
import { JsonLd } from "./JsonLd";
import { schemaFAQ } from "@/lib/schema";
import { Icono } from "./Iconos";

export function FAQSection({
  faqs,
  titulo = "Preguntas frecuentes",
  fondoAlterno = false,
}: {
  faqs: FAQ[];
  titulo?: string;
  fondoAlterno?: boolean;
}) {
  if (faqs.length === 0) return null;
  return (
    <section className={fondoAlterno ? "bg-paper-warm" : "bg-paper"}>
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h2 className="font-display text-3xl font-bold text-ink">{titulo}</h2>
        <div className="mt-8 divide-y divide-slate/20 border-y border-slate/20">
          {faqs.map((faq) => (
            <details key={faq.pregunta} className="faq-item py-4" open>
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
