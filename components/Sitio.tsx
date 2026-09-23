import { Archivo, Inter } from "next/font/google";
import { config } from "@/data/config";
import { datos } from "@/lib/datos";
import { HTML_LANG, rutaLanding, type Locale } from "@/lib/i18n";
import { schemaNegocio } from "@/lib/schema";
import { Header, type ItemNav } from "./Header";
import { Footer } from "./Footer";
import { BotonFlotante } from "./BotonFlotante";
import { Analytics } from "./Analytics";
import { JsonLd } from "./JsonLd";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["500", "600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

/**
 * Esqueleto común de los root layouts (uno por idioma, en grupos de ruta).
 * Cada idioma tiene su propio <html lang>, y los datos de navegación se
 * resuelven aquí en servidor para pasárselos al Header (cliente) por props.
 */
export function Sitio({
  locale,
  children,
}: {
  locale: Locale;
  children: React.ReactNode;
}) {
  const idiomaDatos = locale === "en" ? "es" : locale;
  const d = datos(idiomaDatos);
  const itemsServicios: ItemNav[] =
    locale === "en"
      ? []
      : d.serviciosGlobales.map((s) => ({
          href: rutaLanding(idiomaDatos, s.slug),
          texto: s.nombre,
          icono: s.card.icono,
        }));
  const itemsZonas: ItemNav[] =
    locale === "en"
      ? []
      : d.ciudades.map((c) => ({
          href: rutaLanding(idiomaDatos, c.slug),
          texto: c.nombre,
          icono: "pin",
        }));

  return (
    <html
      lang={HTML_LANG[locale]}
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <Header
          locale={locale}
          itemsServicios={itemsServicios}
          itemsZonas={itemsZonas}
        />
        <main className="flex-1">{children}</main>
        <Footer locale={locale} />
        <BotonFlotante
          locale={locale}
          whatsappMensaje={locale === "en" ? undefined : d.whatsappMensaje}
        />
        <Analytics />
        <JsonLd data={schemaNegocio()} />
      </body>
    </html>
  );
}

export const metadataBase = new URL(config.dominio);
