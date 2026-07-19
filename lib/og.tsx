import { ImageResponse } from "next/og";
import { config } from "@/data/config";

export const OG_SIZE = { width: 1200, height: 630 };

/** Plantilla OG (§7): fondo ink + wordmark + título de página. */
export function imagenOG(titulo: string) {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#17181c",
          padding: "72px",
          fontFamily: "sans-serif",
        }}
      >
        <div style={{ display: "flex", fontSize: 40, fontWeight: 700, color: "#ffffff" }}>
          {config.marca.wordmarkBase}
          <span style={{ color: "#ffb400" }}>{config.marca.wordmarkTld}</span>
        </div>
        <div
          style={{
            display: "flex",
            fontSize: 64,
            fontWeight: 800,
            color: "#ffffff",
            lineHeight: 1.15,
            maxWidth: "1000px",
          }}
        >
          {titulo}
        </div>
        <div
          style={{
            display: "flex",
            width: "100%",
            height: "16px",
            backgroundImage:
              "repeating-linear-gradient(45deg, #ffb400 0, #ffb400 24px, #17181c 24px, #17181c 48px)",
          }}
        />
      </div>
    ),
    OG_SIZE,
  );
}
