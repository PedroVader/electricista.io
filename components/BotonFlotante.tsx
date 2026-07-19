import { config } from "@/data/config";
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
          href={`https://wa.me/${whatsapp.number.replace(/\D/g, "")}`}
          target="_blank"
          rel="noopener noreferrer"
          data-event="whatsapp_flotante"
          className="flex h-14 w-14 items-center justify-center rounded-full bg-[#25d366] text-white shadow-xl transition-transform hover:scale-105 hover:bg-[#1fbd59]"
          aria-label="Escribir por WhatsApp"
        >
          <Icono nombre="whatsapp" className="h-8 w-8" />
        </a>
      )}
      <a
        href={`tel:${telefono.numero}`}
        data-event="llamada_flotante"
        className="boton-urgencia flex items-center gap-3 rounded-full bg-amber py-2.5 pl-2.5 pr-6 font-bold text-ink shadow-xl transition-transform hover:scale-[1.03] hover:bg-amber-dark"
      >
        <span className="flex h-10 w-10 items-center justify-center rounded-full bg-ink text-amber">
          <Icono nombre="telefono" className="h-5 w-5" />
        </span>
        ¿Tienes una urgencia? ¡Llámanos!
      </a>
    </div>
  );
}
