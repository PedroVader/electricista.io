import { config } from "@/data/config";
import { ui, type Locale } from "@/lib/i18n";
import { Icono } from "./Iconos";

/**
 * Barra fija inferior solo móvil (§5.3): mitad llamada, mitad presupuesto.
 * Se muestra en páginas de urgencias y de ciudad.
 */
export function BarraUrgencias({ locale = "es" }: { locale?: Locale }) {
  const { telefono } = config;
  const t = ui(locale).cta;
  return (
    <div
      className="fixed inset-x-0 bottom-0 z-50 flex h-14 md:hidden"
      role="navigation"
      aria-label={t.accionesRapidas}
    >
      <a
        href={`tel:${telefono.numero}`}
        data-event="llamada_barra_urgencias"
        className="flex flex-1 items-center justify-center gap-2 bg-amber font-bold text-ink"
      >
        <Icono nombre="telefono" className="h-5 w-5" />
        {t.llamarAhora}
      </a>
      <a
        href="#form-presupuesto"
        data-event="form_barra_urgencias"
        className="flex flex-1 items-center justify-center border-2 border-amber bg-ink font-bold text-white"
      >
        {t.pedirPresupuesto}
      </a>
    </div>
  );
}
