import { config } from "@/data/config";
import { enlaceWhatsapp } from "@/lib/whatsapp";
import { ui, type Locale } from "@/lib/i18n";
import { Icono } from "./Iconos";

export const FORM_ID = "form-presupuesto";

/**
 * Botón flotante global de urgencias: llamada directa.
 * Incluye botón de WhatsApp controlado por flag en /data/config.ts.
 */
export function BotonFlotante({
  locale = "es",
  whatsappMensaje,
}: {
  locale?: Locale;
  /** Mensaje prellenado de WhatsApp en el idioma de la página */
  whatsappMensaje?: string;
}) {
  const { whatsapp, telefono } = config;
  const t = ui(locale).cta;

  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end gap-3 md:bottom-6">
      {whatsapp.enabled && whatsapp.number && (
        <a
          href={enlaceWhatsapp(whatsappMensaje)}
          target="_blank"
          rel="noopener noreferrer"
          data-event="whatsapp_flotante"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg hover:bg-[#1fbd59]"
          aria-label={t.whatsapp}
        >
          <Icono nombre="whatsapp" className="h-7 w-7" />
        </a>
      )}
      <a
        href={`tel:${telefono.numero}`}
        data-event="llamada_flotante"
        className="boton-urgencia flex items-center lg:hidden gap-3 bg-ink py-2.5 pl-2.5 pr-5 font-semibold text-white shadow-lg hover:bg-[#2c2c2c]"
        aria-label={t.urgenciasLlamar(telefono.display)}
      >
        <span className="flex h-10 w-10 items-center justify-center bg-amber text-ink">
          <Icono nombre="telefono" className="h-5 w-5" />
        </span>
        <span className="leading-tight">
          <span className="block text-[11px] font-medium uppercase tracking-wider text-white/60">
            {t.urgencias24h}
          </span>
          <span className="block">{telefono.display}</span>
        </span>
      </a>
    </div>
  );
}
