import { ImageResponse } from "next/og";
import { business } from "@/lib/business";

export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpengraphImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          backgroundColor: "#0B2447",
          padding: 80,
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 24,
            marginBottom: 32,
          }}
        >
          <div
            style={{
              width: 88,
              height: 88,
              borderRadius: 999,
              backgroundColor: "#F7F6F3",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              fontSize: 44,
              fontWeight: 800,
              color: "#0B2447",
            }}
          >
            VAF
          </div>
        </div>
        <div
          style={{
            fontSize: 56,
            fontWeight: 800,
            color: "#F7F6F3",
            textAlign: "center",
            display: "flex",
          }}
        >
          {business.tagline}, disponible 24h/24
        </div>
        <div
          style={{
            fontSize: 30,
            color: "#F7F6F3",
            opacity: 0.85,
            marginTop: 20,
            display: "flex",
          }}
        >
          Devis annoncé avant intervention
        </div>
        <div
          style={{
            marginTop: 48,
            fontSize: 26,
            color: "#C8102E",
            fontWeight: 700,
            display: "flex",
          }}
        >
          {business.legalName}
        </div>
      </div>
    ),
    { ...size }
  );
}
