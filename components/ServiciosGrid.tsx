import Link from "next/link";
import { serviciosGlobales, cardsExtra } from "@/data/servicios";
import { Icono } from "./Iconos";
import { Reveal } from "./Reveal";

/** Grid de servicios (§6.1.3): 2 col móvil, 4 desktop. */
export function ServiciosGrid({
  titulo = "¿Qué necesitas?",
  ciudad,
  intro,
}: {
  titulo?: string;
  ciudad?: string;
  intro?: string;
}) {
  const cards = [
    ...serviciosGlobales.map((s) => ({
      titulo: s.card.titulo,
      linea: s.card.linea,
      icono: s.card.icono,
      href: `/${s.slug}`,
      destacada: s.card.destacada,
      animada: s.card.animada,
    })),
    ...cardsExtra.map((c) => ({ ...c, destacada: false, animada: false })),
  ];

  return (
    <section className="services-section bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          {ciudad ? `Servicios en ${ciudad}` : titulo}
        </h2>
        {intro && <p className="mt-3 max-w-3xl text-slate">{intro}</p>}
        <div className="mt-10 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {cards.map((card) => (
            <Reveal key={card.href + card.titulo} className="h-full">
              <Link
                href={card.href}
                className="service-card group flex h-full flex-col overflow-hidden"
              >
                {card.destacada && (
                  <div
                    className={`franja-firma-fina ${
                      card.animada ? "franja-animada" : ""
                    }`}
                    aria-hidden="true"
                  />
                )}
                <div className="flex flex-1 flex-col p-5">
                  <span className="text-amber-dark">
                    <Icono nombre={card.icono} className="h-8 w-8" />
                  </span>
                  <h3 className="mt-3 font-display text-lg font-bold text-ink">
                    {card.titulo}
                  </h3>
                  <p className="mt-1 flex-1 text-sm text-slate">{card.linea}</p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-amber-dark">
                    Ver detalles
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
