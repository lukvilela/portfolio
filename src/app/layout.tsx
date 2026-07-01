import type { Metadata } from "next";
import { Inter, Sora, JetBrains_Mono, Noto_Serif_JP } from "next/font/google";
import "./globals.css";
import SmoothScroll from "@/components/SmoothScroll";
import { Analytics } from "@vercel/analytics/next";

const sans = Inter({
  subsets: ["latin"],
  variable: "--font-sans",
  display: "swap",
});

const display = Sora({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800"],
  variable: "--font-display",
  display: "swap",
});

const mono = JetBrains_Mono({
  subsets: ["latin"],
  variable: "--font-mono",
  display: "swap",
});

const jp = Noto_Serif_JP({
  subsets: ["latin"],
  weight: ["400", "600", "900"],
  variable: "--font-jp",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://portfolio-jet-xi-82.vercel.app"),
  title: "Lucas Vilela — Desenvolvedor Full-stack",
  description:
    "Desenvolvedor full-stack e estudante de Ciência de Dados, 18 anos, de Barueri-SP. Construo SaaS, automações e análises de dados de ponta a ponta.",
  openGraph: {
    title: "Lucas Vilela — Desenvolvedor Full-stack",
    description:
      "Construo produtos do back-end ao pixel e transformo dados em decisão.",
    type: "website",
    locale: "pt_BR",
  },
  twitter: {
    card: "summary_large_image",
    title: "Lucas Vilela — Desenvolvedor Full-stack",
    description:
      "Meu portfólio é um terminal. Digita um comando e explora.",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="pt-BR">
      <body
        className={`${sans.variable} ${display.variable} ${mono.variable} ${jp.variable} font-sans`}
      >
        <SmoothScroll />
        <div className="grid-bg" aria-hidden />
        {children}
        <Analytics />
      </body>
    </html>
  );
}
