import { config } from "@/data/config";
import { ui, type Locale } from "@/lib/i18n";
import { Icono } from "./Iconos";

/**
 * Sello de valoración en Google: estrellas + nota + número de reseñas,
 * enlazado al perfil de Google Business. Solo se renderiza con
 * googleResenas.enabled y cifras reales en /data/config.ts.
 */
export function SelloGoogle({
  tono = "oscuro",
  evento = "google_sello",
  className = "",
  locale = "es",
}: {
  /** "oscuro" sobre fondo ink (hero, footer); "claro" sobre fondo paper */
  tono?: "oscuro" | "claro";
  evento?: string;
  className?: string;
  locale?: Locale;
}) {
  const { googleResenas, googleBusinessProfile } = config;
  if (!googleResenas.enabled || googleResenas.total === 0) return null;
  const t = ui(locale).secciones;

  const texto =
    tono === "oscuro" ? "text-white" : "text-ink";
  const suave =
    tono === "oscuro" ? "text-white/70" : "text-slate";
  const borde =
    tono === "oscuro"
      ? "border-white/20 hover:border-amber"
      : "border-ink/15 hover:border-amber-dark";

  const llenas = Math.round(googleResenas.nota);

  return (
    <a
      href={googleBusinessProfile}
      target="_blank"
      rel="noopener noreferrer"
      data-event={evento}
      aria-label={t.selloAria(googleResenas.notaDisplay, googleResenas.total)}
      className={`inline-flex items-center gap-3 rounded-md border px-3.5 py-2 text-sm ${texto} ${borde} ${className}`}
    >
      <span className="flex items-center gap-0.5 text-amber" aria-hidden="true">
        {Array.from({ length: 5 }, (_, i) => (
          <Icono
            key={i}
            nombre="estrella"
            className={`h-4 w-4 ${i < llenas ? "" : "opacity-30"}`}
          />
        ))}
      </span>
      <span className="leading-tight">
        <span className="font-bold">{googleResenas.notaDisplay}</span>
        <span className={`font-medium ${suave}`}> {t.enGoogle}</span>
        <span className={`block text-xs ${suave}`}>
          {googleResenas.total} {googleResenas.total === 1 ? t.resena : t.resenas}
          {" · "}
          <span className="underline underline-offset-2">{t.verPerfil}</span>
        </span>
      </span>
    </a>
  );
}
