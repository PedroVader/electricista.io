"use client";

import Link from "next/link";
import { useState } from "react";
import { config } from "@/data/config";
import { serviciosGlobales } from "@/data/servicios";
import { ciudades } from "@/data/ciudades";
import { Icono } from "./Iconos";

type Item = { href: string; texto: string; icono: string };

function Dropdown({ etiqueta, items }: { etiqueta: string; items: Item[] }) {
  return (
    <div className="group relative">
      <button
        type="button"
        className="flex items-center gap-1 px-3 py-2 text-sm font-medium text-white hover:text-amber"
        aria-haspopup="true"
      >
        {etiqueta}
        <Icono nombre="chevron" className="h-4 w-4" />
      </button>
      <div className="invisible absolute left-0 top-full z-50 min-w-64 rounded-lg border border-white/10 bg-ink py-2 opacity-0 shadow-xl transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="flex items-center gap-3 px-4 py-2 text-sm text-white/90 hover:bg-white/5 hover:text-amber"
          >
            <span className="shrink-0 text-amber">
              <Icono nombre={item.icono} className="h-5 w-5" />
            </span>
            {item.texto}
          </Link>
        ))}
      </div>
    </div>
  );
}

function AcordeonMovil({
  etiqueta,
  items,
  onNavega,
}: {
  etiqueta: string;
  items: Item[];
  onNavega: () => void;
}) {
  return (
    <details className="group border-b border-white/10">
      <summary className="flex cursor-pointer list-none items-center justify-between py-3 font-semibold text-white [&::-webkit-details-marker]:hidden">
        {etiqueta}
        <span className="text-amber transition-transform group-open:rotate-180">
          <Icono nombre="chevron" className="h-5 w-5" />
        </span>
      </summary>
      <div className="pb-3">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            onClick={onNavega}
            className="flex items-center gap-3 rounded-md px-2 py-2.5 text-white/90 hover:bg-white/5 hover:text-amber"
          >
            <span className="shrink-0 text-amber">
              <Icono nombre={item.icono} className="h-5 w-5" />
            </span>
            {item.texto}
          </Link>
        ))}
      </div>
    </details>
  );
}

export function Header() {
  const [abierto, setAbierto] = useState(false);
  const { telefono, marca } = config;
  const cerrar = () => setAbierto(false);

  const itemsServicios: Item[] = serviciosGlobales.map((s) => ({
    href: `/${s.slug}`,
    texto: s.nombre,
    icono: s.card.icono,
  }));
  const itemsZonas: Item[] = ciudades.map((c) => ({
    href: `/${c.slug}`,
    texto: c.nombre,
    icono: "pin",
  }));

  return (
    <header className="site-header sticky top-0 z-50 bg-ink">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4">
        {/* Logo: wordmark + franja de obra (versión en código del logo oficial, /img/logo.png) */}
        <Link
          href="/"
          className="inline-block"
          aria-label={`${marca.nombre}, inicio`}
        >
          <span className="font-display text-xl font-extrabold leading-none tracking-tight text-white">
            {marca.wordmarkBase}
            <span className="text-amber">{marca.wordmarkTld}</span>
          </span>
          <span className="franja-logo mt-1 block" aria-hidden="true" />
        </Link>

        {/* Nav escritorio */}
        <nav className="hidden items-center lg:flex" aria-label="Principal">
          <Dropdown etiqueta="Servicios" items={itemsServicios} />
          <Dropdown etiqueta="Zonas" items={itemsZonas} />
          <Link
            href="/presupuesto"
            className="px-3 py-2 text-sm font-medium text-white hover:text-amber"
          >
            Presupuesto
          </Link>
          <Link
            href="/blog"
            className="px-3 py-2 text-sm font-medium text-white hover:text-amber"
          >
            Consejos
          </Link>
          <Link
            href="/contacto"
            className="px-3 py-2 text-sm font-medium text-white hover:text-amber"
          >
            Contacto
          </Link>
        </nav>

        <div className="flex items-center gap-2">
          {/* El teléfono NUNCA se esconde en el menú hamburguesa */}
          <a
            href={`tel:${telefono.numero}`}
            data-event="llamada_header"
            className="flex items-center gap-2 rounded-md bg-paper px-3 py-2 font-bold text-ink hover:bg-paper-warm"
          >
            <span className="text-amber-dark">
              <Icono nombre="telefono" className="h-5 w-5" />
            </span>
            <span className="hidden sm:inline">{telefono.display}</span>
            <span className="sr-only sm:hidden">
              Llamar al {telefono.display}
            </span>
          </a>
          <Link
            href="/contacto"
            data-event="cta_header"
            className="hidden rounded-md bg-amber px-4 py-2 text-sm font-bold text-ink hover:bg-amber-dark md:block"
          >
            Pedir presupuesto
          </Link>
          {/* Hamburguesa móvil */}
          <button
            type="button"
            onClick={() => setAbierto(!abierto)}
            className="rounded-md p-2 text-white lg:hidden"
            aria-expanded={abierto}
            aria-label={abierto ? "Cerrar menú" : "Abrir menú"}
          >
            <svg
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              strokeLinecap="round"
              className="h-6 w-6"
              aria-hidden="true"
            >
              {abierto ? (
                <path d="M6 6l12 12M18 6L6 18" />
              ) : (
                <path d="M4 7h16M4 12h16M4 17h16" />
              )}
            </svg>
          </button>
        </div>
      </div>

      {/* Menú móvil: acciones rápidas + acordeones, con scroll propio */}
      {abierto && (
        <nav
          className="max-h-[calc(100dvh-4rem)] overflow-y-auto border-t border-white/10 bg-ink px-4 pb-8 pt-4 lg:hidden"
          aria-label="Menú móvil"
        >
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${telefono.numero}`}
              data-event="llamada_menu_movil"
              className="flex items-center justify-center gap-2 rounded-md bg-amber py-3 font-bold text-ink"
            >
              <Icono nombre="telefono" className="h-5 w-5" />
              Llamar
            </a>
            <Link
              href="/contacto"
              data-event="cta_menu_movil"
              onClick={cerrar}
              className="flex items-center justify-center gap-2 rounded-md border-2 border-amber py-3 font-bold text-white"
            >
              Presupuesto
            </Link>
          </div>

          <div className="mt-4">
            <AcordeonMovil
              etiqueta="Servicios"
              items={itemsServicios}
              onNavega={cerrar}
            />
            <AcordeonMovil
              etiqueta="Zonas"
              items={itemsZonas}
              onNavega={cerrar}
            />
            <Link
              href="/presupuesto"
              onClick={cerrar}
              className="flex items-center justify-between border-b border-white/10 py-3 font-semibold text-white hover:text-amber"
            >
              Presupuesto
              <span className="text-amber">
                <Icono nombre="flecha" className="h-5 w-5" />
              </span>
            </Link>
            <Link
              href="/blog"
              onClick={cerrar}
              className="flex items-center justify-between border-b border-white/10 py-3 font-semibold text-white hover:text-amber"
            >
              Consejos
              <span className="text-amber">
                <Icono nombre="flecha" className="h-5 w-5" />
              </span>
            </Link>
            <Link
              href="/contacto"
              onClick={cerrar}
              className="flex items-center justify-between py-3 font-semibold text-white hover:text-amber"
            >
              Contacto
              <span className="text-amber">
                <Icono nombre="flecha" className="h-5 w-5" />
              </span>
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
