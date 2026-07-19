"use client";

import Link from "next/link";
import { useState } from "react";
import { config } from "@/data/config";
import { servicios } from "@/data/servicios";
import { ciudades } from "@/data/ciudades";
import { Icono } from "./Iconos";

function Dropdown({
  etiqueta,
  items,
}: {
  etiqueta: string;
  items: { href: string; texto: string }[];
}) {
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
      <div className="invisible absolute left-0 top-full z-50 min-w-56 rounded-lg border border-white/10 bg-ink py-2 opacity-0 shadow-xl transition-opacity group-focus-within:visible group-focus-within:opacity-100 group-hover:visible group-hover:opacity-100">
        {items.map((item) => (
          <Link
            key={item.href}
            href={item.href}
            className="block px-4 py-2 text-sm text-white/90 hover:bg-white/5 hover:text-amber"
          >
            {item.texto}
          </Link>
        ))}
      </div>
    </div>
  );
}

export function Header() {
  const [abierto, setAbierto] = useState(false);
  const { telefono, marca } = config;

  const itemsServicios = servicios.map((s) => ({
    href: `/${s.slug}`,
    texto: s.nombre,
  }));
  const itemsZonas = ciudades.map((c) => ({
    href: `/${c.slug}`,
    texto: c.nombre,
  }));

  return (
    <header className="sticky top-0 z-50 bg-ink">
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
            className="flex items-center gap-2 rounded-md px-2 py-2 font-semibold text-amber hover:text-amber-dark"
          >
            <Icono nombre="telefono" className="h-5 w-5" />
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

      {/* Menú móvil */}
      {abierto && (
        <nav
          className="border-t border-white/10 bg-ink px-4 pb-6 pt-2 lg:hidden"
          aria-label="Menú móvil"
        >
          <p className="pt-2 text-xs font-semibold uppercase tracking-wide text-white/50">
            Servicios
          </p>
          {itemsServicios.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setAbierto(false)}
              className="block py-2 text-white/90 hover:text-amber"
            >
              {item.texto}
            </Link>
          ))}
          <p className="pt-4 text-xs font-semibold uppercase tracking-wide text-white/50">
            Zonas
          </p>
          {itemsZonas.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setAbierto(false)}
              className="block py-2 text-white/90 hover:text-amber"
            >
              {item.texto}
            </Link>
          ))}
          <div className="mt-4 flex flex-col gap-2 border-t border-white/10 pt-4">
            <Link
              href="/presupuesto"
              onClick={() => setAbierto(false)}
              className="py-2 font-medium text-white hover:text-amber"
            >
              Presupuesto
            </Link>
            <Link
              href="/contacto"
              onClick={() => setAbierto(false)}
              className="py-2 font-medium text-white hover:text-amber"
            >
              Contacto
            </Link>
            <Link
              href="/contacto"
              data-event="cta_menu_movil"
              onClick={() => setAbierto(false)}
              className="mt-2 rounded-md bg-amber px-4 py-3 text-center font-bold text-ink"
            >
              Pedir presupuesto
            </Link>
          </div>
        </nav>
      )}
    </header>
  );
}
