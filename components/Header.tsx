"use client";

import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";
import { config } from "@/data/config";
import { ui, rutaEquivalente, RUTAS, type Locale } from "@/lib/i18n";
import { Icono } from "./Iconos";

export type ItemNav = { href: string; texto: string; icono: string };

function Dropdown({ etiqueta, items }: { etiqueta: string; items: ItemNav[] }) {
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
  items: ItemNav[];
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

const IDIOMAS: { locale: Locale; etiqueta: string; nombre: string }[] = [
  { locale: "es", etiqueta: "ES", nombre: "Castellano" },
  { locale: "ca", etiqueta: "CA", nombre: "Català" },
  { locale: "en", etiqueta: "EN", nombre: "English" },
];

/** Selector de idioma: enlaza a la página equivalente (o a la portada del idioma). */
function SelectorIdioma({ locale, className = "" }: { locale: Locale; className?: string }) {
  const pathname = usePathname();
  const t = ui(locale);
  return (
    <nav aria-label={t.nav.idioma} className={`flex items-center gap-1 text-xs font-semibold ${className}`}>
      {IDIOMAS.map((idioma, i) => (
        <span key={idioma.locale} className="flex items-center">
          {i > 0 && <span className="px-1 text-white/30" aria-hidden="true">·</span>}
          {idioma.locale === locale ? (
            <span className="text-amber" aria-current="true" lang={idioma.locale}>
              {idioma.etiqueta}
            </span>
          ) : (
            <a
              href={rutaEquivalente(pathname, idioma.locale)}
              hrefLang={idioma.locale}
              lang={idioma.locale}
              title={idioma.nombre}
              className="text-white/70 hover:text-amber"
            >
              {idioma.etiqueta}
            </a>
          )}
        </span>
      ))}
    </nav>
  );
}

export function Header({
  locale = "es",
  itemsServicios,
  itemsZonas,
}: {
  locale?: Locale;
  itemsServicios: ItemNav[];
  itemsZonas: ItemNav[];
}) {
  const [abierto, setAbierto] = useState(false);
  const { telefono, marca } = config;
  const t = ui(locale);
  const rutas = RUTAS[locale];
  const cerrar = () => setAbierto(false);

  return (
    <header className="site-header sticky top-0 z-50 bg-ink">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between gap-2 px-4">
        {/* Logo: wordmark + franja de obra (versión en código del logo oficial) */}
        <Link
          href={rutas.home}
          className="inline-block"
          aria-label={`${marca.nombre}, ${t.nav.inicio}`}
        >
          <span className="font-display text-xl font-bold leading-none tracking-tight text-white">
            {marca.wordmarkBase}
            <span className="text-amber">{marca.wordmarkTld}</span>
          </span>
          <span className="franja-logo mt-1 block" aria-hidden="true" />
        </Link>

        {/* Nav escritorio */}
        <nav className="hidden items-center lg:flex" aria-label={t.nav.principal}>
          {itemsServicios.length > 0 && (
            <Dropdown etiqueta={t.nav.servicios} items={itemsServicios} />
          )}
          {itemsZonas.length > 0 && (
            <Dropdown etiqueta={t.nav.zonas} items={itemsZonas} />
          )}
          <Link
            href={rutas.presupuesto}
            className="px-3 py-2 text-sm font-medium text-white hover:text-amber"
          >
            {t.nav.presupuesto}
          </Link>
          {locale !== "en" && (
            <Link
              href={rutas.blog}
              className="px-3 py-2 text-sm font-medium text-white hover:text-amber"
            >
              {t.nav.consejos}
            </Link>
          )}
          <Link
            href={rutas.contacto}
            className="px-3 py-2 text-sm font-medium text-white hover:text-amber"
          >
            {t.nav.contacto}
          </Link>
          <SelectorIdioma locale={locale} className="ml-3 border-l border-white/15 pl-3" />
        </nav>

        <div className="flex items-center gap-2">
          {/* El teléfono NUNCA se esconde en el menú hamburguesa */}
          <a
            href={`tel:${telefono.numero}`}
            data-event="llamada_header"
            className="flex items-center gap-2 rounded-md bg-paper px-3 py-2 font-semibold text-ink hover:bg-paper-warm"
          >
            <span className="text-amber-dark">
              <Icono nombre="telefono" className="h-5 w-5" />
            </span>
            <span className="hidden sm:inline">{telefono.display}</span>
            <span className="sr-only sm:hidden">
              {t.nav.llamarAl} {telefono.display}
            </span>
          </a>
          <Link
            href={rutas.contacto}
            data-event="cta_header"
            className="hidden rounded-md bg-amber px-4 py-2 text-sm font-semibold text-ink hover:bg-amber-dark md:block"
          >
            {t.nav.pedirPresupuesto}
          </Link>
          {/* Hamburguesa móvil */}
          <button
            type="button"
            onClick={() => setAbierto(!abierto)}
            className="rounded-md p-2 text-white lg:hidden"
            aria-expanded={abierto}
            aria-label={abierto ? t.nav.cerrarMenu : t.nav.abrirMenu}
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
          aria-label={t.nav.menuMovil}
        >
          <div className="grid grid-cols-2 gap-2">
            <a
              href={`tel:${telefono.numero}`}
              data-event="llamada_menu_movil"
              className="flex items-center justify-center gap-2 rounded-md bg-amber py-3 font-bold text-ink"
            >
              <Icono nombre="telefono" className="h-5 w-5" />
              {t.nav.llamar}
            </a>
            <Link
              href={rutas.contacto}
              data-event="cta_menu_movil"
              onClick={cerrar}
              className="flex items-center justify-center gap-2 rounded-md border-2 border-amber py-3 font-bold text-white"
            >
              {t.nav.presupuesto}
            </Link>
          </div>

          <div className="mt-4">
            {itemsServicios.length > 0 && (
              <AcordeonMovil
                etiqueta={t.nav.servicios}
                items={itemsServicios}
                onNavega={cerrar}
              />
            )}
            {itemsZonas.length > 0 && (
              <AcordeonMovil
                etiqueta={t.nav.zonas}
                items={itemsZonas}
                onNavega={cerrar}
              />
            )}
            <Link
              href={rutas.presupuesto}
              onClick={cerrar}
              className="flex items-center justify-between border-b border-white/10 py-3 font-semibold text-white hover:text-amber"
            >
              {t.nav.presupuesto}
              <span className="text-amber">
                <Icono nombre="flecha" className="h-5 w-5" />
              </span>
            </Link>
            {locale !== "en" && (
              <Link
                href={rutas.blog}
                onClick={cerrar}
                className="flex items-center justify-between border-b border-white/10 py-3 font-semibold text-white hover:text-amber"
              >
                {t.nav.consejos}
                <span className="text-amber">
                  <Icono nombre="flecha" className="h-5 w-5" />
                </span>
              </Link>
            )}
            <Link
              href={rutas.contacto}
              onClick={cerrar}
              className="flex items-center justify-between border-b border-white/10 py-3 font-semibold text-white hover:text-amber"
            >
              {t.nav.contacto}
              <span className="text-amber">
                <Icono nombre="flecha" className="h-5 w-5" />
              </span>
            </Link>
            <SelectorIdioma locale={locale} className="py-4 text-sm" />
          </div>
        </nav>
      )}
    </header>
  );
}
