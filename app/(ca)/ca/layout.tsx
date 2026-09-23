import type { Metadata } from "next";
import "../../globals.css";
import { config } from "@/data/config";
import { Sitio, metadataBase } from "@/components/Sitio";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${config.marca.nombre}, lampistes a Barcelona i el Vallès`,
    template: `%s | ${config.marca.nombre}`,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayoutCa({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Sitio locale="ca">{children}</Sitio>;
}
