import { home } from "@/data/paginas";
import { Reveal } from "./Reveal";

/** 3 pasos numerados (la numeración es secuencia real). */
export function ComoFunciona() {
  const { h2, pasos } = home.comoFunciona;
  return (
    <section className="process-section bg-paper">
      <div className="mx-auto max-w-6xl px-4 py-16">
        <p className="eyebrow">Cómo trabajamos</p>
        <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
          {h2}
        </h2>
        <ol className="mt-10 grid gap-6 sm:grid-cols-3">
          {pasos.map((paso, i) => (
            <li key={paso.titulo} className="h-full">
              <Reveal className="process-step card h-full">
                <span className="step-number font-display">
                  {i + 1}
                </span>
                <h3 className="mt-4 font-display text-xl font-bold text-ink">
                  {paso.titulo}
                </h3>
                <p className="mt-2 text-sm text-slate">{paso.texto}</p>
              </Reveal>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
