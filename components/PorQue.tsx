import Image from "next/image";
import { config } from "@/data/config";
import { ui, type Locale } from "@/lib/i18n";
import { Icono } from "./Iconos";

/** Sección "Por qué" 60/40 texto+imagen sobre fondo paper-warm. */
export function PorQue({
  h2,
  parrafos,
  bullets,
  locale = "es",
}: {
  h2: string;
  parrafos: string[];
  bullets: string[];
  locale?: Locale;
}) {
  const t = ui(locale).secciones;
  return (
    <section className="about-section bg-paper-warm">
      <div className="mx-auto grid max-w-6xl items-center gap-10 px-4 py-16 lg:grid-cols-5">
        <div className="lg:col-span-3">
          <p className="eyebrow">{t.porQueNosotros}</p>
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {h2}
          </h2>
          {parrafos.map((p) => (
            <p key={p.slice(0, 40)} className="mt-4 text-slate">
              {p}
            </p>
          ))}
          <ul className="mt-6 space-y-3">
            {bullets.map((b) => (
              <li key={b} className="flex items-start gap-3 font-medium text-ink">
                <span className="mt-0.5 shrink-0 text-amber-dark">
                  <Icono nombre="check" className="h-5 w-5" />
                </span>
                {b}
              </li>
            ))}
          </ul>
        </div>
        <div className="about-frame lg:col-span-2">
          <div className="relative aspect-[4/5] overflow-hidden">
          <Image
            src="/img/porque-cuadro.jpg"
            alt={t.altPorQue(config.marca.nombre)}
            fill
            sizes="(min-width: 1024px) 40vw, 100vw"
            className="object-cover"
          />
          </div>
        </div>
      </div>
    </section>
  );
}
