import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  experimental: {
    // Hay un root layout por idioma (grupos de ruta), así que el 404 de
    // URLs que no casan con ninguna ruta se define en app/global-not-found.tsx
    globalNotFound: true,
  },
};

export default nextConfig;
