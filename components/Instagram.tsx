import { config } from "@/data/config";
import { Icono } from "./Iconos";

/**
 * Enlace al perfil de Instagram. Solo se renderiza con instagram.enabled
 * en /data/config.ts, igual que el sello de Google.
 *
 * - "bloque": tarjeta ancha que cierra la sección de trabajos reales, que es
 *   donde el usuario ya está mirando fotos de obra y el salto tiene sentido.
 * - "linea": enlace compacto para el footer.
 */
export function Instagram({
  variante = "bloque",
  evento = "instagram",
  className = "",
}: {
  variante?: "bloque" | "linea";
  evento?: string;
  className?: string;
}) {
  const { instagram } = config;
  if (!instagram.enabled) return null;

  const arroba = `@${instagram.usuario}`;
  const comun = {
    href: instagram.url,
    target: "_blank",
    rel: "noopener noreferrer",
    "data-event": evento,
  } as const;

  if (variante === "linea") {
    return (
      <a
        {...comun}
        aria-label={`Instagram ${arroba}, se abre en una pestaña nueva`}
        className={`inline-flex items-center gap-2 text-sm text-white/70 hover:text-amber ${className}`}
      >
        <Icono nombre="instagram" className="h-5 w-5" />
        {arroba}
      </a>
    );
  }

  return (
    <a
      {...comun}
      aria-label={`Ver nuestros trabajos en Instagram, ${arroba}. Se abre en una pestaña nueva`}
      className={`group flex flex-col gap-5 rounded-lg border border-ink/15 bg-paper-warm p-6 transition-colors hover:border-amber-dark sm:flex-row sm:items-center sm:justify-between ${className}`}
    >
      <span className="flex items-center gap-4">
        <span className="shrink-0 text-amber-dark">
          <Icono nombre="instagram" className="h-9 w-9" />
        </span>
        <span>
          <span className="block font-display text-lg font-bold text-ink">
            Subimos cada trabajo a Instagram
          </span>
          <span className="mt-1 block text-sm text-slate">
            Cuadros, averías y obras terminadas, día a día en {arroba}
          </span>
        </span>
      </span>
      <span className="inline-flex shrink-0 items-center gap-2 font-semibold text-ink group-hover:text-amber-dark">
        Seguirnos
        <Icono nombre="flecha" className="h-4 w-4" />
      </span>
    </a>
  );
}
