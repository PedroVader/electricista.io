import type { Metadata } from "next";
import "../globals.css";
import { config } from "@/data/config";
import { Sitio, metadataBase } from "@/components/Sitio";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${config.marca.nombre}, electricistas en Barcelona y Vallès`,
    template: `%s | ${config.marca.nombre}`,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Sitio locale="es">{children}</Sitio>;
}
