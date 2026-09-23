import type { Metadata } from "next";
import "../../globals.css";
import { config } from "@/data/config";
import { Sitio, metadataBase } from "@/components/Sitio";

export const metadata: Metadata = {
  metadataBase,
  title: {
    default: `${config.marca.nombre}, English-speaking electricians in Barcelona`,
    template: `%s | ${config.marca.nombre}`,
  },
  manifest: "/site.webmanifest",
};

export default function RootLayoutEn({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return <Sitio locale="en">{children}</Sitio>;
}
