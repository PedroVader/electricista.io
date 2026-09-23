import Link from "next/link";
import { config } from "@/data/config";
import { datos } from "@/lib/datos";
import { ui, rutaLanding, RUTAS, type Locale } from "@/lib/i18n";
import { SelloGoogle } from "./SelloGoogle";
import { Instagram } from "./Instagram";

export function Footer({ locale = "es" }: { locale?: Locale }) {
  const { marca, empresa, telefono, email } = config;
  const t = ui(locale);
  const rutas = RUTAS[locale];
  // El inglés no tiene landings propias: enlaza a las versiones en castellano
  const d = datos(locale === "en" ? "es" : locale);
  const landing = (slug: string) => rutaLanding(locale === "en" ? "es" : locale, slug);

  return (
    <footer className="site-footer bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marca + NAP consistente con GBP */}
        <div>
          <p className="inline-block">
            <span className="font-display text-xl font-bold leading-none tracking-tight">
              {marca.wordmarkBase}
              <span className="text-amber">{marca.wordmarkTld}</span>
            </span>
            <span className="franja-logo mt-1 block" aria-hidden="true" />
          </p>
          <address className="mt-4 text-sm not-italic leading-relaxed text-white/70">
            {empresa.razonSocial}
            <br />
            {empresa.direccion.calle}
            <br />
            {empresa.direccion.cp} {empresa.direccion.ciudad} (
            {empresa.direccion.provincia})
          </address>
          <p className="mt-3 text-sm">
            <a
              href={`tel:${telefono.numero}`}
              data-event="llamada_footer"
              className="font-semibold text-amber hover:text-amber-dark"
            >
              {telefono.display}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <a href={`mailto:${email}`} className="text-white/70 hover:text-amber">
              {email}
            </a>
          </p>
          <p className="mt-1 text-sm">
            <Instagram variante="linea" evento="instagram_footer" locale={locale} />
          </p>
          <div className="mt-4">
            <SelloGoogle evento="google_sello_footer" locale={locale} />
          </div>
        </div>

        <nav aria-label={t.footer.servicios}>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            {t.footer.servicios}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {d.serviciosGlobales.map((s) => (
              <li key={s.slug}>
                <Link href={landing(s.slug)} className="text-white/80 hover:text-amber">
                  {s.nombre}
                </Link>
              </li>
            ))}
            <li>
              <Link href={rutas.presupuesto} className="text-white/80 hover:text-amber">
                {t.footer.pedirPresupuesto}
              </Link>
            </li>
          </ul>

          {/* Servicio por ciudad: sin esto solo recibían dos enlaces internos */}
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/50">
            {t.footer.serviciosPorCiudad}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {d.serviciosLocales.map((s) => (
              <li key={s.slug}>
                <Link href={landing(s.slug)} className="text-white/80 hover:text-amber">
                  {s.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t.footer.zonas}>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            {t.footer.zonas}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {d.ciudades.map((c) => (
              <li key={c.slug}>
                <Link href={landing(c.slug)} className="text-white/80 hover:text-amber">
                  {t.footer.electricistaEn(c.nombre)}
                </Link>
              </li>
            ))}
          </ul>

          {/* Distritos: sin esto solo recibían un enlace interno en toda la web */}
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/50">
            {t.footer.barrios}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {d.distritos.map((dist) => (
              <li key={dist.slug}>
                <Link href={landing(dist.slug)} className="text-white/80 hover:text-amber">
                  {t.footer.electricistaEn(dist.nombre)}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label={t.footer.legal}>
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            {t.footer.legal}
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/aviso-legal" className="text-white/80 hover:text-amber">
                {t.footer.avisoLegal}
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="text-white/80 hover:text-amber">
                {t.footer.privacidad}
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-white/80 hover:text-amber">
                {t.footer.cookies}
              </Link>
            </li>
            <li>
              <Link href={rutas.blog} className="text-white/80 hover:text-amber">
                {t.footer.consejos}
              </Link>
            </li>
            <li>
              <Link href={rutas.contacto} className="text-white/80 hover:text-amber">
                {t.footer.contacto}
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-white/70">
          <p>{d.footer.lineaFinal}</p>
          <p className="mt-2 text-xs text-white/50">{d.footer.disclaimerImagenes}</p>
        </div>
      </div>
    </footer>
  );
}
