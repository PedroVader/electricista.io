import Link from "next/link";
import { datos } from "@/lib/datos";
import { ui, rutaLanding, type Locale } from "@/lib/i18n";
import { Icono } from "./Iconos";
import { Reveal } from "./Reveal";

/** Grid de servicios: filas compactas en móvil, 2 col tablet, 3 desktop. */
export function ServiciosGrid({
  titulo,
  ciudad,
  intro,
  locale = "es",
}: {
  titulo?: string;
  ciudad?: string;
  intro?: string;
  locale?: Locale;
}) {
  const t = ui(locale).secciones;
  const idiomaDatos = locale === "en" ? "es" : locale;
  const d = datos(idiomaDatos);
  const cards = [
    ...d.serviciosGlobales.map((s) => ({
      titulo: s.card.titulo,
      linea: s.card.linea,
      icono: s.card.icono,
      href: rutaLanding(idiomaDatos, s.slug),
      destacada: s.card.destacada,
      animada: s.card.animada,
    })),
    ...d.cardsExtra.map((c) => ({ ...c, destacada: false, animada: false })),
  ];

  return (
    <section className="services-section bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="eyebrow">{t.servicios}</p>
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          {ciudad ? t.serviciosEn(ciudad) : (titulo ?? t.queNecesitas)}
        </h2>
        {intro && <p className="mt-3 max-w-3xl text-slate">{intro}</p>}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {cards.map((card) => (
            <Reveal key={card.href + card.titulo} className="h-full">
              <Link
                href={card.href}
                className="service-card card group flex h-full flex-col overflow-hidden"
              >
                {card.destacada && (
                  <div
                    className={`franja-firma-fina ${
                      card.animada ? "franja-animada" : ""
                    }`}
                    aria-hidden="true"
                  />
                )}
                {/* Móvil: icono a la izquierda y texto al lado; desde sm, en columna */}
                <div className="grid flex-1 grid-cols-[auto_1fr] gap-x-4 p-5 sm:flex sm:flex-col sm:p-7">
                  <span className="icon-box row-span-3">
                    <Icono nombre={card.icono} className="h-6 w-6" />
                  </span>
                  <h3 className="font-display text-lg font-bold text-ink sm:mt-5">
                    {card.titulo}
                  </h3>
                  <p className="mt-1 flex-1 text-sm text-slate">{card.linea}</p>
                  <span className="mt-3 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-amber-dark sm:mt-5 sm:border-t sm:border-line sm:pt-4">
                    {t.verDetalles}
                    <Icono nombre="flecha" className="h-4 w-4" />
                  </span>
                </div>
              </Link>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
