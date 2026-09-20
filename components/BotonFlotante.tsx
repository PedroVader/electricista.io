import { config } from "@/data/config";
import { enlaceWhatsapp } from "@/lib/whatsapp";
import { Icono } from "./Iconos";

export const FORM_ID = "form-presupuesto";

/**
 * Botón flotante global de urgencias: llamada directa.
 * Incluye botón de WhatsApp controlado por flag en /data/config.ts
 * (desactivado en v1).
 */
export function BotonFlotante() {
  const { whatsapp, telefono } = config;

  return (
    <div className="fixed bottom-20 right-4 z-40 flex flex-col items-end gap-3 md:bottom-6">
      {whatsapp.enabled && whatsapp.number && (
        <a
          href={enlaceWhatsapp()}
          target="_blank"
          rel="noopener noreferrer"
          data-event="whatsapp_flotante"
          className="flex h-12 w-12 items-center justify-center rounded-full bg-[#25d366] text-white shadow-lg hover:bg-[#1fbd59]"
          aria-label="Escribir por WhatsApp"
        >
          <Icono nombre="whatsapp" className="h-7 w-7" />
        </a>
      )}
      <a
        href={`tel:${telefono.numero}`}
        data-event="llamada_flotante"
        className="boton-urgencia flex items-center gap-3 bg-ink py-2.5 pl-2.5 pr-5 font-semibold text-white shadow-lg hover:bg-[#2c2c2c]"
        aria-label={`Urgencias 24 horas. Llamar al ${telefono.display}`}
      >
        <span className="flex h-10 w-10 items-center justify-center bg-amber text-ink">
          <Icono nombre="telefono" className="h-5 w-5" />
        </span>
        <span className="leading-tight">
          <span className="block text-[11px] font-medium uppercase tracking-wider text-white/60">
            Urgencias 24h
          </span>
          <span className="block">{telefono.display}</span>
        </span>
      </a>
    </div>
  );
}
