import { config } from "@/data/config";

/**
 * Stats bar (§6.1.6). Solo se renderiza con números REALES:
 * hasta activarla en /data/config.ts con datos verificados, no aparece.
 */
export function StatsBar() {
  const { stats } = config;
  if (!stats.enabled || stats.items.length === 0) return null;
  return (
    <section className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl grid-cols-2 gap-8 px-4 py-12 text-center sm:grid-cols-4">
        {stats.items.map((item) => (
          <div key={item.etiqueta}>
            <p className="font-display text-3xl font-bold text-amber">
              {item.valor}
            </p>
            <p className="mt-1 text-sm text-white/80">{item.etiqueta}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
