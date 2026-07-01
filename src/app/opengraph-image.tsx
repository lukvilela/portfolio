import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Lucas Vilela — Desenvolvedor Full-stack & Ciência de Dados";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OpengraphImage() {
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
          background:
            "radial-gradient(120% 80% at 50% -10%, #1c2540, #15161e 60%)",
          fontFamily: "monospace",
          padding: 60,
        }}
      >
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            width: 1000,
            borderRadius: 18,
            border: "1px solid rgba(122,162,247,0.25)",
            background: "#1a1b26",
            boxShadow: "0 30px 80px rgba(0,0,0,0.5)",
            overflow: "hidden",
          }}
        >
          {/* title bar */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 10,
              padding: "18px 24px",
              background: "#1b1c28",
              borderBottom: "1px solid rgba(122,162,247,0.12)",
            }}
          >
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#f7768e", display: "flex" }} />
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#e0af68", display: "flex" }} />
            <div style={{ width: 14, height: 14, borderRadius: 7, background: "#9ece6a", display: "flex" }} />
            <div style={{ display: "flex", marginLeft: 12, color: "#565f89", fontSize: 22 }}>
              lucas@vilela: ~/portfolio
            </div>
          </div>

          {/* body */}
          <div style={{ display: "flex", flexDirection: "column", padding: 48, gap: 14 }}>
            <div style={{ display: "flex", fontSize: 30, color: "#565f89" }}>
              <span style={{ color: "#9ece6a" }}>lucas@vilela</span>
              <span>:</span>
              <span style={{ color: "#7aa2f7" }}>~</span>
              <span>$ whoami</span>
            </div>
            <div style={{ display: "flex", fontSize: 84, fontWeight: 700, color: "#c0caf5", letterSpacing: -2 }}>
              Lucas Vilela
            </div>
            <div style={{ display: "flex", fontSize: 34, color: "#7dcfff" }}>
              dev full-stack · estudante de ciência de dados · 18 anos
            </div>
            <div style={{ display: "flex", marginTop: 26, fontSize: 26, color: "#565f89" }}>
              <span style={{ color: "#bb9af7" }}>$</span>
              <span style={{ marginLeft: 12 }}>ls projetos · cv · neofetch</span>
              <span style={{ marginLeft: 14, color: "#7dcfff" }}>▍</span>
            </div>
          </div>
        </div>

        <div style={{ display: "flex", marginTop: 34, fontSize: 26, color: "#565f89" }}>
          github.com/lukvilela
        </div>
      </div>
    ),
    { ...size }
  );
}
