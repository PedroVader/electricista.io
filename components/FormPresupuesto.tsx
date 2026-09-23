"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import { config } from "@/data/config";
import { ui, type Locale } from "@/lib/i18n";
import { FORM_ID } from "./BotonFlotante";
import { Icono } from "./Iconos";

/**
 * Formulario de presupuesto con Netlify Forms (§8 del SPEC).
 * La definición estática vive en public/__forms.html para que Netlify
 * la detecte en build; el envío se hace por fetch a esa ruta.
 *
 * Variante compacta (hero): nombre + teléfono/WhatsApp + servicio.
 * Variante completa (contacto, CTA final): añade ciudad y mensaje.
 *
 * Es un componente de cliente: recibe las listas y textos por props para
 * no cargar los datos de todos los idiomas en el bundle.
 */
export type FormProps = {
  locale: Locale;
  opcionesServicio: string[];
  ciudades: string[];
  mensajeExito: string;
  whatsappHref?: string;
};

export function FormPresupuesto({
  oscuro = false,
  compacto = false,
  id = FORM_ID,
  locale,
  opcionesServicio,
  ciudades,
  mensajeExito,
  whatsappHref,
}: FormProps & {
  oscuro?: boolean;
  compacto?: boolean;
  id?: string;
}) {
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">(
    "idle",
  );
  const pathname = usePathname();
  const t = ui(locale).form;

  const opciones = [...opcionesServicio, t.otro];

  async function enviar(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    setEstado("enviando");
    const form = e.currentTarget;
    const datos = new FormData(form);
    try {
      const res = await fetch("/__forms.html", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: new URLSearchParams(
          datos as unknown as Record<string, string>,
        ).toString(),
      });
      if (!res.ok) throw new Error(`Estado ${res.status}`);
      setEstado("ok");
      form.reset();
    } catch {
      setEstado("error");
    }
  }

  const labelClase = oscuro
    ? "block text-sm font-medium text-white/90"
    : "block text-sm font-medium text-ink";
  const campoClase = oscuro
    ? "mt-1 w-full rounded-md border border-white/20 bg-white/10 px-3 py-2.5 text-white placeholder-white/40 focus:border-amber"
    : "mt-1 w-full rounded-md border border-slate/30 bg-paper px-3 py-2.5 text-ink placeholder-slate/60 focus:border-amber-dark";

  if (estado === "ok") {
    return (
      <div
        id={id}
        role="status"
        className={`rounded-lg border-2 border-amber p-6 text-center font-semibold ${
          oscuro ? "text-white" : "text-ink"
        }`}
      >
        <span className="mb-2 inline-flex text-amber-dark">
          <Icono nombre="check" className="h-8 w-8" />
        </span>
        <p>{mensajeExito}</p>
      </div>
    );
  }

  const sufijo = compacto ? "-hero" : "";

  return (
    <form
      id={id}
      name={config.formulario.nombre}
      data-netlify="true"
      data-netlify-honeypot="bot-field"
      onSubmit={enviar}
      className="scroll-mt-24 space-y-4"
    >
      <input type="hidden" name="form-name" value={config.formulario.nombre} />
      {/* Atribución: página desde la que llegó el lead (incluye el idioma) */}
      <input type="hidden" name="pagina" value={pathname} />
      {/* Honeypot antispam */}
      <p className="hidden">
        <label>
          {t.honeypot} <input name="bot-field" />
        </label>
      </p>

      <div className={compacto ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor={`f-nombre${sufijo}`} className={labelClase}>
            {t.nombre}
          </label>
          <input
            id={`f-nombre${sufijo}`}
            name="nombre"
            type="text"
            required
            autoComplete="name"
            placeholder={t.tuNombre}
            className={campoClase}
          />
        </div>
        <div>
          <label htmlFor={`f-telefono${sufijo}`} className={labelClase}>
            {t.telefono}
          </label>
          <input
            id={`f-telefono${sufijo}`}
            name="telefono"
            type="tel"
            required
            autoComplete="tel"
            placeholder="600 000 000"
            className={campoClase}
          />
        </div>
      </div>

      <div>
        <label htmlFor={`f-servicio${sufijo}`} className={labelClase}>
          {t.queNecesitas}
        </label>
        <select
          id={`f-servicio${sufijo}`}
          name="servicio"
          required
          defaultValue=""
          className={campoClase}
        >
          <option value="" disabled>
            {t.eligeServicio}
          </option>
          {opciones.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </select>
      </div>

      {!compacto && (
        <>
          <div>
            <label htmlFor="f-ciudad" className={labelClase}>
              {t.ciudad}
            </label>
            <select
              id="f-ciudad"
              name="ciudad"
              required
              defaultValue=""
              className={campoClase}
            >
              <option value="" disabled>
                {t.eligeZona}
              </option>
              {ciudades.map((c) => (
                <option key={c} value={c}>
                  {t.alrededores(c)}
                </option>
              ))}
              <option value="Otra">{t.otraZona}</option>
            </select>
          </div>

          <div>
            <label htmlFor="f-mensaje" className={labelClase}>
              {t.mensaje}
            </label>
            <textarea
              id="f-mensaje"
              name="mensaje"
              rows={3}
              placeholder={t.placeholderMensaje}
              className={campoClase}
            />
          </div>
        </>
      )}

      {estado === "error" && (
        <p role="alert" className="text-sm font-medium text-red-500">
          {t.error}{" "}
          <a href={`tel:${config.telefono.numero}`} className="underline">
            {config.telefono.display}
          </a>
          .
        </p>
      )}

      <button
        type="submit"
        disabled={estado === "enviando"}
        data-event="form_envio"
        className={`w-full rounded-md bg-amber px-6 py-3.5 font-semibold text-ink hover:bg-amber-dark disabled:opacity-60 ${
          compacto ? "" : "sm:w-auto"
        }`}
      >
        {estado === "enviando" ? t.enviando : t.enviar}
      </button>
      {whatsappHref && (
        <p className={`text-sm ${oscuro ? "text-white/80" : "text-slate"}`}>
          {t.tienesFotos}{" "}
          <a
            href={whatsappHref}
            target="_blank"
            rel="noopener noreferrer"
            data-event="whatsapp_fotos_form"
            className="font-semibold underline underline-offset-4"
          >
            {t.enviaWhatsapp}
          </a>.
        </p>
      )}
      <p className={`text-xs ${oscuro ? "text-white/60" : "text-slate"}`}>
        {t.teLlamamos}
      </p>
    </form>
  );
}
