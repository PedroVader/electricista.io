import { config } from "@/data/config";

/**
 * Enlace a WhatsApp con el mensaje predefinido de /data/config.ts.
 * WhatsApp interpreta *negrita* y saltos de línea en el texto prellenado.
 */
export function enlaceWhatsapp(mensaje: string = config.whatsapp.mensaje) {
  const numero = config.whatsapp.number.replace(/\D/g, "");
  return `https://wa.me/${numero}?text=${encodeURIComponent(mensaje)}`;
}
