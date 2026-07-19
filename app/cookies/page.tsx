import type { Metadata } from "next";
import { config } from "@/data/config";

export const metadata: Metadata = {
  title: "Política de cookies",
  description: `Política de cookies de ${config.marca.nombre}.`,
  alternates: { canonical: "/cookies" },
  robots: { index: false },
};

// [PLACEHOLDER: revisar textos legales con asesoría antes de publicar]
export default function Cookies() {
  const usaGA = Boolean(config.analytics.ga4Id);
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-16">
        <h1 className="font-display text-4xl font-bold text-ink">
          Política de cookies
        </h1>
        <div className="mt-8 space-y-6 text-slate">
          <h2 className="font-display text-2xl font-bold text-ink">
            ¿Qué son las cookies?
          </h2>
          <p>
            Son pequeños archivos que se almacenan en tu dispositivo al
            navegar. Sirven para que la web funcione o para obtener
            estadísticas de uso.
          </p>
          <h2 className="font-display text-2xl font-bold text-ink">
            Cookies que usa esta web
          </h2>
          {usaGA ? (
            <p>
              Además de las cookies técnicas imprescindibles, esta web utiliza
              Google Analytics 4 (cookies de análisis de Google LLC) solo si
              las aceptas en el banner de cookies. Puedes retirar tu
              consentimiento en cualquier momento borrando las cookies de tu
              navegador; el banner volverá a aparecer.
            </p>
          ) : (
            <p>
              Actualmente esta web no utiliza cookies de analítica ni de
              publicidad: solo el almacenamiento técnico imprescindible para
              su funcionamiento. Si en el futuro se activa la analítica, te lo
              pediremos mediante un banner de consentimiento antes de cargar
              ninguna cookie.
            </p>
          )}
          <h2 className="font-display text-2xl font-bold text-ink">
            Cómo gestionarlas
          </h2>
          <p>
            Puedes configurar tu navegador para bloquear o eliminar cookies:
            consulta la ayuda de Chrome, Safari, Firefox o Edge según el que
            uses.
          </p>
        </div>
      </div>
    </section>
  );
}
