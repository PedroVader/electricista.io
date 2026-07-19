"use client";

import { useEffect, useState } from "react";
import { config } from "@/data/config";

declare global {
  interface Window {
    dataLayer: unknown[];
    gtag: (...args: unknown[]) => void;
  }
}

const CLAVE_CONSENT = "cookie-consent";

function cargarGA(id: string) {
  if (document.getElementById("ga4-script")) return;
  window.dataLayer = window.dataLayer || [];
  window.gtag = function gtag(...args: unknown[]) {
    window.dataLayer.push(args);
  };
  window.gtag("js", new Date());
  window.gtag("config", id);
  const script = document.createElement("script");
  script.id = "ga4-script";
  script.async = true;
  script.src = `https://www.googletagmanager.com/gtag/js?id=${id}`;
  document.head.appendChild(script);
}

/**
 * GA4 + banner de cookies + tracking de eventos data-event.
 * Con ga4Id vacío en /data/config.ts no se carga nada ni aparece banner
 * (no hay cookies no esenciales → no hace falta banner, §9).
 */
export function Analytics() {
  const ga4Id = config.analytics.ga4Id;
  const [mostrarBanner, setMostrarBanner] = useState(false);

  useEffect(() => {
    if (!ga4Id) return;
    const eleccion = localStorage.getItem(CLAVE_CONSENT);
    if (eleccion === "accepted") cargarGA(ga4Id);
    else if (!eleccion) setMostrarBanner(true);
  }, [ga4Id]);

  // Tracking de clics en elementos con data-event (tel:, CTAs, formulario)
  useEffect(() => {
    function onClick(e: MouseEvent) {
      const objetivo = (e.target as HTMLElement).closest<HTMLElement>(
        "[data-event]",
      );
      if (objetivo && typeof window.gtag === "function") {
        window.gtag("event", objetivo.dataset.event, {
          event_category: "conversion",
        });
      }
    }
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  function decidir(acepta: boolean) {
    localStorage.setItem(CLAVE_CONSENT, acepta ? "accepted" : "rejected");
    setMostrarBanner(false);
    if (acepta && ga4Id) cargarGA(ga4Id);
  }

  if (!ga4Id || !mostrarBanner) return null;

  return (
    <div
      role="dialog"
      aria-label="Aviso de cookies"
      className="fixed inset-x-4 bottom-4 z-[60] mx-auto max-w-xl rounded-lg border border-slate/20 bg-paper p-5 shadow-xl"
    >
      <p className="text-sm text-ink">
        Usamos cookies de analítica (Google Analytics) para entender cómo se
        usa la web. Puedes aceptarlas o rechazarlas; la web funciona igual.{" "}
        <a href="/cookies" className="underline">
          Más información
        </a>
        .
      </p>
      <div className="mt-4 flex gap-3">
        <button
          type="button"
          onClick={() => decidir(true)}
          className="rounded-md bg-amber px-4 py-2 text-sm font-bold text-ink hover:bg-amber-dark"
        >
          Aceptar
        </button>
        <button
          type="button"
          onClick={() => decidir(false)}
          className="rounded-md border border-slate/40 px-4 py-2 text-sm font-semibold text-ink hover:bg-paper-warm"
        >
          Rechazar
        </button>
      </div>
    </div>
  );
}
