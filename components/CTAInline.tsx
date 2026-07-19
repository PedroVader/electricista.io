import { config } from "@/data/config";
import { Icono } from "./Iconos";

/** CTA doble (llamada + formulario) para intercalar entre secciones. */
export function CTAInline({
  texto = "Precio cerrado por escrito antes de empezar. Pídelo gratis:",
  evento = "llamada_cta_inline",
}: {
  texto?: string;
  evento?: string;
}) {
  const { telefono } = config;
  return (
    <div className="mx-auto max-w-3xl px-4">
      <div className="flex flex-col items-center gap-4 rounded-lg bg-ink px-6 py-6 text-center sm:flex-row sm:justify-between sm:text-left">
        <p className="font-semibold text-white">{texto}</p>
        <div className="flex shrink-0 flex-col gap-2 sm:flex-row">
          <a
            href={`tel:${telefono.numero}`}
            data-event={evento}
            className="flex items-center justify-center gap-2 rounded-md bg-amber px-5 py-2.5 font-bold text-ink hover:bg-amber-dark"
          >
            <Icono nombre="telefono" className="h-4 w-4" />
            {telefono.display}
          </a>
          <a
            href="#form-presupuesto"
            data-event="form_cta_inline"
            className="rounded-md border-2 border-amber px-5 py-2.5 text-center font-bold text-white hover:bg-white/5"
          >
            Pedir presupuesto
          </a>
        </div>
      </div>
    </div>
  );
}
