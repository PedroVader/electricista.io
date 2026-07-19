import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import { config } from "@/data/config";
import { posts, getPost } from "@/data/posts";
import { getServicio } from "@/data/servicios";
import { CTAFinal } from "@/components/CTAFinal";
import { CTAInline } from "@/components/CTAInline";
import { FAQSection } from "@/components/FAQSection";
import { JsonLd } from "@/components/JsonLd";
import { schemaBreadcrumb } from "@/lib/schema";
import { Icono } from "@/components/Iconos";

type Props = { params: Promise<{ slug: string }> };

export function generateStaticParams() {
  return posts.map((p) => ({ slug: p.slug }));
}

export const dynamicParams = false;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) return {};
  return {
    title: { absolute: `${post.titulo} | ${config.marca.nombre}` },
    description: post.descripcion,
    alternates: { canonical: `/blog/${slug}` },
  };
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params;
  const post = getPost(slug);
  if (!post) notFound();

  const relacionados = post.relacionados
    .map((s) => getServicio(s))
    .filter(Boolean);

  return (
    <>
      <JsonLd
        data={{
          "@context": "https://schema.org",
          "@type": "Article",
          headline: post.titulo,
          description: post.descripcion,
          datePublished: post.fecha,
          inLanguage: "es-ES",
          author: {
            "@type": "Organization",
            name: config.marca.nombre,
            url: config.dominio,
          },
          publisher: {
            "@type": "Organization",
            name: config.marca.nombre,
          },
          mainEntityOfPage: `${config.dominio}/blog/${post.slug}`,
        }}
      />
      <JsonLd
        data={schemaBreadcrumb([
          { nombre: "Inicio", url: "/" },
          { nombre: "Consejos", url: "/blog" },
          { nombre: post.titulo, url: `/blog/${post.slug}` },
        ])}
      />

      <section className="bg-paper-warm">
        <div className="mx-auto max-w-3xl px-4 pb-10 pt-14 sm:pt-20">
          <Link
            href="/blog"
            className="text-sm font-semibold text-slate hover:text-amber-dark"
          >
            ‹ Todos los consejos
          </Link>
          <h1 className="mt-4 font-display text-[clamp(2rem,4.5vw,3rem)] font-extrabold leading-[1.12] text-ink">
            {post.titulo}
          </h1>
          <p className="mt-4 text-lg text-slate">{post.resumen}</p>
        </div>
      </section>

      <article className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-12">
          {post.secciones.map((seccion) => (
            <section key={seccion.h2} className="mt-10 first:mt-0">
              <h2 className="font-display text-2xl font-bold text-ink sm:text-3xl">
                {seccion.h2}
              </h2>
              {seccion.parrafos
                .filter((p) => p.length > 0)
                .map((p) => (
                  <p key={p.slice(0, 40)} className="mt-4 text-slate">
                    {p}
                  </p>
                ))}
              {seccion.bullets && (
                <ul className="mt-4 space-y-3">
                  {seccion.bullets.map((b) => (
                    <li
                      key={b}
                      className="flex items-start gap-3 font-medium text-ink"
                    >
                      <span className="mt-0.5 shrink-0 text-amber-dark">
                        <Icono nombre="check" className="h-5 w-5" />
                      </span>
                      {b}
                    </li>
                  ))}
                </ul>
              )}
            </section>
          ))}

          {relacionados.length > 0 && (
            <aside className="mt-12 rounded-lg border border-slate/15 bg-paper-warm p-6">
              <p className="font-display text-lg font-bold text-ink">
                Te lo resolvemos nosotros
              </p>
              <ul className="mt-3 space-y-2">
                {relacionados.map((servicio) => (
                  <li key={servicio!.slug}>
                    <Link
                      href={`/${servicio!.slug}`}
                      className="inline-flex items-center gap-2 font-semibold text-ink underline decoration-amber decoration-2 underline-offset-4 hover:text-amber-dark"
                    >
                      {servicio!.nombre}
                      <Icono nombre="flecha" className="h-4 w-4" />
                    </Link>
                  </li>
                ))}
              </ul>
            </aside>
          )}
        </div>
      </article>

      <div className="bg-paper pb-10">
        <CTAInline evento={`llamada_blog_${post.slug}`} />
      </div>

      {post.faqs && post.faqs.length > 0 && (
        <FAQSection faqs={post.faqs} fondoAlterno />
      )}

      <CTAFinal
        h2="¿Lo miramos?"
        texto="Cuéntanos qué te pasa y te damos precio cerrado por escrito en menos de 2 horas, sin compromiso."
      />
    </>
  );
}
