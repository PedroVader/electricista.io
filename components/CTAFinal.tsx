import { config } from "@/data/config";
import { ui, type Locale } from "@/lib/i18n";
import { Formulario } from "./Formulario";

/** CTA final de página: fondo ink, teléfono grande + formulario embebido. */
export function CTAFinal({
  h2,
  texto,
  formId,
  locale = "es",
}: {
  h2?: string;
  texto?: string;
  /** Id alternativo cuando la página ya tiene el formulario del hero */
  formId?: string;
  locale?: Locale;
}) {
  const { telefono } = config;
  const t = ui(locale).cta;
  return (
    <section className="cta-final bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16">
        <div>
          <p className="eyebrow">{t.etiqueta}</p>
          <h2 className="font-display text-4xl font-bold">{h2 ?? t.hablamos}</h2>
          <p className="mt-4 text-white/80">{texto ?? t.texto}</p>
          <a
            href={`tel:${telefono.numero}`}
            data-event="llamada_cta_final"
            className="mt-6 inline-block font-display text-3xl font-semibold text-amber hover:text-amber-dark sm:text-4xl"
          >
            {telefono.display}
          </a>
          <p className="mt-2 text-sm text-white/60">{t.urgencias24}</p>
        </div>
        <div>
          <Formulario oscuro id={formId} locale={locale} />
        </div>
      </div>
    </section>
  );
}
