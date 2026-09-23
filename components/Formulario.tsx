import { config } from "@/data/config";
import { datos, opcionesServicio, nombresCiudad } from "@/lib/datos";
import { enlaceWhatsapp } from "@/lib/whatsapp";
import type { Locale } from "@/lib/i18n";
import { FormPresupuesto } from "./FormPresupuesto";

/**
 * Envoltorio de servidor del formulario: resuelve listas y textos del
 * idioma y se los pasa al componente de cliente.
 */
export function Formulario({
  locale = "es",
  oscuro = false,
  compacto = false,
  id,
}: {
  locale?: Locale;
  oscuro?: boolean;
  compacto?: boolean;
  id?: string;
}) {
  const d = datos(locale === "en" ? "es" : locale);
  const mensajeExito =
    locale === "en"
      ? "Received. We'll call you within 2 hours during business hours."
      : d.mensajeExito;
  const whatsappHref =
    config.whatsapp.enabled && config.whatsapp.number
      ? enlaceWhatsapp(locale === "en" ? MENSAJE_WHATSAPP_EN : d.whatsappMensaje)
      : undefined;
  return (
    <FormPresupuesto
      locale={locale}
      oscuro={oscuro}
      compacto={compacto}
      id={id}
      opcionesServicio={opcionesServicio(locale)}
      ciudades={nombresCiudad(locale)}
      mensajeExito={mensajeExito}
      whatsappHref={whatsappHref}
    />
  );
}

export const MENSAJE_WHATSAPP_EN = [
  "Hi, I'm writing from electricista.io (English).",
  "",
  "*I need:* ",
  "*Area:* ",
  "*Urgent:* yes / no",
  "",
  "I'll attach photos below if I have any.",
].join("\n");
