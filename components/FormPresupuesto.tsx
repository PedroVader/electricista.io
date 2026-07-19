"use client";

import { useState } from "react";
import { config } from "@/data/config";
import { ciudades } from "@/data/ciudades";
import { servicios, cardsExtra } from "@/data/servicios";
import { FORM_ID } from "./BotonFlotante";
import { Icono } from "./Iconos";

/**
 * Formulario de presupuesto con Netlify Forms (§8 del SPEC).
 * La definición estática vive en public/__forms.html para que Netlify
 * la detecte en build; el envío se hace por fetch a esa ruta.
 *
 * Variante compacta (hero): nombre + teléfono/WhatsApp + servicio.
 * Variante completa (contacto, CTA final): añade ciudad y mensaje.
 */
export function FormPresupuesto({
  oscuro = false,
  compacto = false,
  id = FORM_ID,
}: {
  oscuro?: boolean;
  compacto?: boolean;
  id?: string;
}) {
  const [estado, setEstado] = useState<"idle" | "enviando" | "ok" | "error">(
    "idle",
  );

  const opcionesServicio = [
    ...servicios.map((s) => s.card.titulo),
    ...cardsExtra.map((c) => c.titulo),
    "Otro",
  ];

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
        <p>{config.formulario.mensajeExito}</p>
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
      {/* Honeypot antispam */}
      <p className="hidden">
        <label>
          No rellenes esto: <input name="bot-field" />
        </label>
      </p>

      <div className={compacto ? "space-y-4" : "grid gap-4 sm:grid-cols-2"}>
        <div>
          <label htmlFor={`f-nombre${sufijo}`} className={labelClase}>
            Nombre
          </label>
          <input
            id={`f-nombre${sufijo}`}
            name="nombre"
            type="text"
            required
            autoComplete="name"
            placeholder="Tu nombre"
            className={campoClase}
          />
        </div>
        <div>
          <label htmlFor={`f-telefono${sufijo}`} className={labelClase}>
            Teléfono o WhatsApp
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
          ¿Qué necesitas?
        </label>
        <select
          id={`f-servicio${sufijo}`}
          name="servicio"
          required
          defaultValue=""
          className={campoClase}
        >
          <option value="" disabled>
            Elige el servicio
          </option>
          {opcionesServicio.map((s) => (
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
              Ciudad
            </label>
            <select
              id="f-ciudad"
              name="ciudad"
              required
              defaultValue=""
              className={campoClase}
            >
              <option value="" disabled>
                Elige tu zona
              </option>
              {ciudades.map((c) => (
                <option key={c.slug} value={c.nombre}>
                  {c.nombre} y alrededores
                </option>
              ))}
              <option value="Otra">Otra (área de Barcelona)</option>
            </select>
          </div>

          <div>
            <label htmlFor="f-mensaje" className={labelClase}>
              Cuéntanos más (opcional)
            </label>
            <textarea
              id="f-mensaje"
              name="mensaje"
              rows={3}
              placeholder="Ej.: se me va la luz al encender el horno / necesito un boletín para dar de alta la luz"
              className={campoClase}
            />
          </div>
        </>
      )}

      {estado === "error" && (
        <p role="alert" className="text-sm font-medium text-red-500">
          No se ha podido enviar. Inténtalo de nuevo o llámanos al{" "}
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
        className={`w-full rounded-md bg-amber px-6 py-3.5 font-bold text-ink hover:bg-amber-dark disabled:opacity-60 ${
          compacto ? "" : "sm:w-auto"
        }`}
      >
        {estado === "enviando" ? "Enviando…" : "Pedir presupuesto gratis"}
      </button>
      <p className={`text-xs ${oscuro ? "text-white/60" : "text-slate"}`}>
        Te llamamos en menos de 2 h en horario laboral. Sin compromiso.
      </p>
    </form>
  );
}
