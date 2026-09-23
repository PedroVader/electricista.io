import type { Metadata } from "next";
import Link from "next/link";
import { config } from "@/data/config";
import { postsRecientes } from "@/data/posts";
import { CTAFinal } from "@/components/CTAFinal";
import { JsonLd } from "@/components/JsonLd";
import { schemaBreadcrumb } from "@/lib/schema";
import { Icono } from "@/components/Iconos";
import { Reveal } from "@/components/Reveal";

export const metadata: Metadata = {
  title: {
    absolute: `Consejos de electricista: guías claras | ${config.marca.nombre}`,
  },
  description:
    "Guías prácticas de nuestros electricistas: diferencial que salta, boletines, cuadros antiguos, potencia y puntos de carga. Sin rodeos.",
  alternates: { canonical: "/blog" },
};

export default function Blog() {
  return (
    <>
      <JsonLd
        data={schemaBreadcrumb([
          { nombre: "Inicio", url: "/" },
          { nombre: "Consejos", url: "/blog" },
        ])}
      />
      <section className="bg-paper-warm">
        <div className="mx-auto max-w-6xl px-4 pb-12 pt-14 sm:pt-20">
          <h1 className="max-w-3xl font-display text-[clamp(2.2rem,5vw,3.5rem)] font-extrabold leading-[1.1] text-ink">
            Consejos de electricista, sin rodeos
          </h1>
          <p className="mt-5 max-w-2xl text-lg text-slate">
            Guías escritas por nuestros instaladores para las dudas que nos
            preguntáis cada semana. Lo que puedes comprobar tú, cuándo llamar y
            qué esperar del trabajo.
          </p>
        </div>
      </section>

      <section className="bg-paper">
        <div className="mx-auto max-w-6xl px-4 py-16">
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {postsRecientes.map((post) => (
              <Reveal key={post.slug} className="h-full">
                <Link
                  href={`/blog/${post.slug}`}
                  className="group flex h-full flex-col rounded-lg border border-slate/15 bg-paper p-6 shadow-sm transition-shadow hover:shadow-md"
                >
                  <h2 className="font-display text-xl font-bold text-ink group-hover:text-amber-dark">
                    {post.titulo}
                  </h2>
                  <p className="mt-3 flex-1 text-sm text-slate">
                    {post.resumen}
                  </p>
                  <span className="mt-4 inline-flex items-center gap-1 text-sm font-semibold text-ink group-hover:text-amber-dark">
                    Leer la guía
                    <Icono nombre="flecha" className="h-4 w-4" />
                  </span>
                </Link>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-3xl px-4 py-14">
          <h2 className="font-display text-3xl font-bold text-ink">
            Qué puedes hacer tú y qué no
          </h2>
          <p className="mt-4 text-slate">
            Estas guías están escritas para que entiendas lo que te pasa y
            puedas acotar el problema antes de que venga nadie. Muchas veces
            eso ahorra una visita, y cuando no la ahorra, al menos hace que la
            llamada dure dos minutos en lugar de diez.
          </p>
          <p className="mt-4 text-slate">
            Dicho eso, hay una frontera clara. Comprobar qué circuito hace
            saltar el diferencial, desenchufar aparatos para descartar cuál
            falla, mirar qué hay dentro de tu cuadro o revisar tu potencia
            contratada son cosas que puedes hacer sin riesgo y sin
            herramientas. Abrir un mecanismo, manipular el cuadro con tensión,
            empalmar cable o sustituir una protección no lo son: ahí te juegas
            algo serio y además cualquier modificación de la instalación
            necesita quedar certificada para ser legal.
          </p>
          <p className="mt-4 text-slate">
            Por eso ninguna de estas guías te va a explicar cómo hacer el
            trabajo. Te explican qué está pasando, qué puedes comprobar sin
            peligro y en qué momento conviene parar y llamar. Que es,
            francamente, la información que nos habría gustado encontrar a
            nosotros cuando empezamos.
          </p>
          <p className="mt-4 text-slate">
            Si echas en falta alguna duda que no hemos cubierto, dínosla y la
            escribimos: casi todas estas guías han salido de preguntas que nos
            hacéis por teléfono.
          </p>
        </div>
      </section>

      <CTAFinal
        h2="¿Prefieres que lo miremos nosotros?"
        texto="Cuéntanos qué te pasa y te damos precio cerrado por escrito en menos de 2 horas."
      />
    </>
  );
}
