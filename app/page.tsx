import type { Metadata } from "next";
import { config } from "@/data/config";
import { home } from "@/data/paginas";
import { HeroOscuro } from "@/components/HeroOscuro";
import { ServiciosGrid } from "@/components/ServiciosGrid";
import { PorQue } from "@/components/PorQue";
import { ComoFunciona } from "@/components/ComoFunciona";
import { StatsBar } from "@/components/StatsBar";
import { ZonasSection } from "@/components/ZonasSection";
import { FAQSection } from "@/components/FAQSection";
import { CTAFinal } from "@/components/CTAFinal";

export const metadata: Metadata = {
  title: { absolute: home.metaTitle },
  description: `${home.metaDescription} ☎ ${config.telefono.display}`,
  alternates: { canonical: "/" },
};

export default function Home() {
  return (
    <>
      <HeroOscuro
        eyebrow={config.hero.eyebrow}
        h1={config.hero.h1}
        sub={config.hero.sub}
      />
      <ServiciosGrid intro={home.serviciosIntro} />
      <PorQue
        h2={home.porQue.h2}
        parrafos={home.porQue.parrafos}
        bullets={home.porQue.bullets}
      />
      <ComoFunciona />
      {/* Stats y reseñas: solo con datos reales (flags en /data/config.ts) */}
      <StatsBar />
      <ZonasSection />
      {/* Bloque largo de contenido SEO de la home */}
      <section className="bg-paper">
        <div className="mx-auto max-w-3xl px-4 py-16">
          <h2 className="font-display text-3xl font-bold text-ink sm:text-4xl">
            {home.textoSeo.h2}
          </h2>
          {home.textoSeo.parrafos.map((p) => (
            <p key={p.slice(0, 40)} className="mt-5 text-slate">
              {p}
            </p>
          ))}
        </div>
      </section>
      <FAQSection faqs={home.faqs} fondoAlterno />
      <CTAFinal
        h2={home.ctaFinal.h2}
        texto={home.ctaFinal.texto}
        formId="form-presupuesto-final"
      />
    </>
  );
}
