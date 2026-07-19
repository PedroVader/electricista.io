import { config } from "@/data/config";
import { FormPresupuesto } from "./FormPresupuesto";

/** CTA final de página: fondo ink, teléfono grande + formulario embebido. */
export function CTAFinal({
  h2 = "¿Hablamos?",
  texto = "Llámanos y te decimos precio cerrado, o déjanos tus datos y te llamamos nosotros en menos de 2 horas en horario laboral.",
  formId,
}: {
  h2?: string;
  texto?: string;
  /** Id alternativo cuando la página ya tiene el formulario del hero */
  formId?: string;
}) {
  const { telefono } = config;
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-16 lg:grid-cols-2 lg:gap-16">
        <div>
          <h2 className="font-display text-4xl font-bold">{h2}</h2>
          <p className="mt-4 text-white/80">{texto}</p>
          <a
            href={`tel:${telefono.numero}`}
            data-event="llamada_cta_final"
            className="mt-6 inline-block font-display text-4xl font-bold text-amber hover:text-amber-dark sm:text-5xl"
          >
            {telefono.display}
          </a>
          <p className="mt-2 text-sm text-white/60">
            Urgencias atendidas 24 horas, todos los días.
          </p>
        </div>
        <div>
          <FormPresupuesto oscuro id={formId} />
        </div>
      </div>
    </section>
  );
}
