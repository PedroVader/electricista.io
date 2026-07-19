import Link from "next/link";

export default function NoEncontrada() {
  return (
    <section className="bg-paper">
      <div className="mx-auto max-w-3xl px-4 py-24 text-center">
        <p className="font-display text-6xl font-extrabold text-amber-dark">404</p>
        <h1 className="mt-4 font-display text-3xl font-bold text-ink">
          Esta página no existe
        </h1>
        <p className="mt-4 text-slate">
          Puede que el enlace esté mal escrito. Lo que sí funciona siempre:
        </p>
        <div className="mt-8 flex flex-col justify-center gap-3 sm:flex-row">
          <Link
            href="/"
            className="rounded-md bg-amber px-6 py-3 font-bold text-ink hover:bg-amber-dark"
          >
            Ir a la portada
          </Link>
          <Link
            href="/contacto"
            className="rounded-md border-2 border-ink px-6 py-3 font-bold text-ink hover:border-amber-dark hover:text-amber-dark"
          >
            Pedir presupuesto
          </Link>
        </div>
      </div>
    </section>
  );
}
