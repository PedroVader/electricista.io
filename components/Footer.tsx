import Link from "next/link";
import { config } from "@/data/config";
import { serviciosGlobales, serviciosLocales } from "@/data/servicios";
import { ciudades } from "@/data/ciudades";
import { distritos } from "@/data/distritos";
import { SelloGoogle } from "./SelloGoogle";
import { Instagram } from "./Instagram";

export function Footer() {
  const { marca, empresa, telefono, email, footer } = config;

  return (
    <footer className="bg-ink text-white">
      <div className="mx-auto grid max-w-6xl gap-10 px-4 py-14 sm:grid-cols-2 lg:grid-cols-4">
        {/* Marca + NAP consistente con GBP */}
        <div>
          <p className="inline-block">
            <span className="font-display text-xl font-extrabold leading-none tracking-tight">
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
            <Instagram variante="linea" evento="instagram_footer" />
          </p>
          <div className="mt-4">
            <SelloGoogle evento="google_sello_footer" />
          </div>
        </div>

        <nav aria-label="Servicios">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Servicios
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {serviciosGlobales.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-white/80 hover:text-amber">
                  {s.nombre}
                </Link>
              </li>
            ))}
            <li>
              <Link href="/presupuesto" className="text-white/80 hover:text-amber">
                Pedir presupuesto
              </Link>
            </li>
          </ul>

          {/* Servicio por ciudad: sin esto solo recibían dos enlaces internos */}
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/50">
            Servicios por ciudad
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {serviciosLocales.map((s) => (
              <li key={s.slug}>
                <Link href={`/${s.slug}`} className="text-white/80 hover:text-amber">
                  {s.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Zonas">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Zonas
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {ciudades.map((c) => (
              <li key={c.slug}>
                <Link href={`/${c.slug}`} className="text-white/80 hover:text-amber">
                  Electricista en {c.nombre}
                </Link>
              </li>
            ))}
          </ul>

          {/* Distritos: sin esto solo recibían un enlace interno en toda la web */}
          <p className="mt-6 text-sm font-semibold uppercase tracking-wide text-white/50">
            Barrios de Barcelona
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            {distritos.map((d) => (
              <li key={d.slug}>
                <Link href={`/${d.slug}`} className="text-white/80 hover:text-amber">
                  Electricista en {d.nombre}
                </Link>
              </li>
            ))}
          </ul>
        </nav>

        <nav aria-label="Legal">
          <p className="text-sm font-semibold uppercase tracking-wide text-white/50">
            Legal
          </p>
          <ul className="mt-4 space-y-2 text-sm">
            <li>
              <Link href="/aviso-legal" className="text-white/80 hover:text-amber">
                Aviso legal
              </Link>
            </li>
            <li>
              <Link href="/privacidad" className="text-white/80 hover:text-amber">
                Política de privacidad
              </Link>
            </li>
            <li>
              <Link href="/cookies" className="text-white/80 hover:text-amber">
                Política de cookies
              </Link>
            </li>
            <li>
              <Link href="/blog" className="text-white/80 hover:text-amber">
                Consejos
              </Link>
            </li>
            <li>
              <Link href="/contacto" className="text-white/80 hover:text-amber">
                Contacto
              </Link>
            </li>
          </ul>
        </nav>
      </div>

      <div className="border-t border-white/10">
        <div className="mx-auto max-w-6xl px-4 py-6 text-center text-sm text-white/70">
          <p>{footer.lineaFinal}</p>
          <p className="mt-2 text-xs text-white/50">{footer.disclaimerImagenes}</p>
        </div>
      </div>
    </footer>
  );
}
