import { ImageResponse } from "next/og";
import { site } from "@/data/site";

export const alt = site.seo.title;
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OgImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          flexDirection: "column",
          justifyContent: "space-between",
          background: "#0b0908",
          padding: 80,
          position: "relative",
        }}
      >
        <div
          style={{
            position: "absolute",
            top: -180,
            left: 200,
            width: 700,
            height: 700,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(251,146,60,0.32), rgba(11,9,8,0) 65%)",
            display: "flex",
          }}
        />
        <div
          style={{
            position: "absolute",
            bottom: -240,
            right: -80,
            width: 640,
            height: 640,
            borderRadius: 9999,
            background: "radial-gradient(circle, rgba(244,114,182,0.28), rgba(11,9,8,0) 65%)",
            display: "flex",
          }}
        />

        <div style={{ display: "flex", alignItems: "center", gap: 18 }}>
          <div
            style={{
              width: 52,
              height: 52,
              borderRadius: 14,
              background: "linear-gradient(135deg, #fb923c, #f472b6 52%, #facc15)",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              color: "#fff",
              fontSize: 22,
              fontWeight: 700,
            }}
          >
            SG
          </div>
          <div style={{ color: "#b5aaa4", fontSize: 26 }}>{site.name}</div>
        </div>

        <div style={{ display: "flex", flexDirection: "column" }}>
          <div
            style={{
              color: "#ffffff",
              fontSize: 96,
              fontWeight: 700,
              letterSpacing: -3,
              lineHeight: 1.05,
              display: "flex",
            }}
          >
            AI Product Engineer
          </div>
          <div
            style={{
              color: "#b5aaa4",
              fontSize: 32,
              marginTop: 26,
              maxWidth: 940,
              lineHeight: 1.4,
              display: "flex",
            }}
          >
            {site.tagline}
          </div>
        </div>

        <div style={{ display: "flex", gap: 14, color: "#8b8079", fontSize: 24 }}>
          <span>Next.js</span>
          <span>·</span>
          <span>TypeScript</span>
          <span>·</span>
          <span>Supabase</span>
          <span>·</span>
          <span>Claude Code</span>
          <span>·</span>
          <span>{site.location}</span>
        </div>
      </div>
    ),
    size,
  );
}
