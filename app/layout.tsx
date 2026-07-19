import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { config } from "@/data/config";
import { Header } from "@/components/Header";
import { Footer } from "@/components/Footer";
import { BotonFlotante } from "@/components/BotonFlotante";
import { Analytics } from "@/components/Analytics";
import { JsonLd } from "@/components/JsonLd";
import { schemaNegocio } from "@/lib/schema";

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

export const metadata: Metadata = {
  metadataBase: new URL(config.dominio),
  title: {
    default: `${config.marca.nombre}, electricistas en Barcelona`,
    template: `%s | ${config.marca.nombre}`,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="es"
      className={`${archivo.variable} ${inter.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
        <BotonFlotante />
        <Analytics />
        <JsonLd data={schemaNegocio()} />
      </body>
    </html>
  );
}
