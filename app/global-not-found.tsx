import type { Metadata } from "next";
import { Archivo, Inter } from "next/font/google";
import "./globals.css";
import { NoEncontrada } from "@/components/NoEncontrada";

const archivo = Archivo({
  variable: "--font-archivo",
  subsets: ["latin"],
  weight: ["600", "700", "800"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "Página no encontrada | electricista.io",
};

/**
 * 404 global: con varios root layouts (uno por idioma) Next no puede
 * componer el 404 desde un layout, así que esta página se sirve sola.
 */
export default function GlobalNotFound() {
  return (
    <html lang="es" className={`${archivo.variable} ${inter.variable} h-full antialiased`}>
      <body className="flex min-h-full flex-col bg-paper text-ink">
        <main className="flex-1">
          <NoEncontrada locale="es" />
        </main>
      </body>
    </html>
  );
}
