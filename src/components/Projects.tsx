"use client";

import { motion } from "framer-motion";
import GlowCard from "@/components/GlowCard";
import RevealText from "@/components/RevealText";

const FEATURED = [
  {
    name: "E-commerce Analytics BR",
    file: "ecommerce_analytics.ipynb",
    description:
      "Projeto end-to-end de dados sobre o e-commerce Olist: ETL em Python, análise exploratória (pandas/seaborn), dashboard em Streamlit e modelagem em Power BI (DAX).",
    repo: "https://github.com/lukvilela/ecommerce-analytics-br",
    live: null,
    stack: "Python · pandas · Streamlit · Power BI",
    tag: "Dados",
    span: "md:col-span-3",
  },
  {
    name: "Industrial Ops Analytics",
    file: "industrial_ops.ipynb",
    description:
      "Confiabilidade e manutenção preditiva industrial: ETL, EDA e modelo de previsão de falha (scikit-learn, AUC 0.97), com dashboard e simulador de risco.",
    repo: "https://github.com/lukvilela/industrial-ops-analytics",
    live: null,
    stack: "Python · scikit-learn · ML",
    tag: "Dados / ML",
    span: "md:col-span-3",
  },
  {
    name: "Ritmo",
    file: "ritmo.tsx",
    description:
      "SaaS de planejamento de estudos para o ENEM com IA: plano personalizado, tutora virtual, simulados e acompanhamento de progresso. No ar, com usuários reais.",
    repo: null,
    live: "https://ritmo-44c33.web.app",
    stack: "React · Firebase · Stripe · IA",
    tag: "SaaS",
    span: "md:col-span-3",
  },
  {
    name: "Akira Mangás",
    file: "akira.tsx",
    description:
      "E-commerce de mangás com estética cyberpunk: catálogo, carrinho e checkout, testes end-to-end com Playwright e deploy contínuo.",
    repo: "https://github.com/lukvilela/manga-store",
    live: "https://mangaverse-zeta.vercel.app",
    stack: "Next.js 16 · Prisma · Playwright",
    tag: "Full-stack",
    span: "md:col-span-3",
  },
  {
    name: "Landhub",
    file: "landhub.tsx",
    description:
      "Gerador de landing pages para consultoras: monta a página por nicho a partir de um formulário guiado, com vários temas, dark mode e acessibilidade.",
    repo: null,
    live: "https://landhub-demo.netlify.app",
    stack: "Next.js · React · TypeScript",
    tag: "SaaS",
    span: "md:col-span-3",
  },
  {
    name: "Kanaru",
    file: "kanaru.tsx",
    description:
      "SaaS freemium pra aprender japonês com repetição espaçada (SRS), conteúdo por nível JLPT e trilha gamificada.",
    repo: "https://github.com/lukvilela/kanaru",
    live: null,
    stack: "Next.js · TypeScript · Firebase",
    tag: "SaaS",
    span: "md:col-span-3",
  },
  {
    name: "Nihongo Quest",
    file: "nihongo-quest.js",
    description:
      "Jogo em canvas pra aprender hiragana e katakana: XP, combos, missão diária, loja e streak. Feito do zero, sem engine.",
    repo: "https://github.com/lukvilela/nihongo-game",
    live: null,
    stack: "Canvas · JavaScript · HTML5",
    tag: "Jogo",
    span: "md:col-span-3",
  },
  {
    name: "Command Center",
    file: "command_center.js",
    description:
      "Ferramenta de gestão estilo Trello, feita do zero e config-driven: kanban com drag-and-drop, sincronização com GitHub (PRs e runs), métricas e documentação. Multi-projeto.",
    repo: "https://github.com/lukvilela/command-center",
    live: "https://command-center-ashy-theta.vercel.app",
    stack: "JavaScript · HTML/CSS · Netlify Functions",
    tag: "Ferramenta",
    span: "md:col-span-3",
  },
  {
    name: "Violino Dojo",
    file: "violino_dojo.tsx",
    description:
      "Treinador de violino no navegador: leitura de partitura (VexFlow), afinador por microfone (pitchy), XP com repetição espaçada (SRS) e níveis Suzuki.",
    repo: "https://github.com/lukvilela/violino-dojo",
    live: null,
    stack: "Next.js · Tailwind · Framer Motion",
    tag: "App",
    span: "md:col-span-3",
  },
];

const EXPERIMENTS = [
  { name: "SmartFinance", repo: "https://github.com/lukvilela/smartfinance" },
  { name: "Piano", repo: "https://github.com/lukvilela/piano" },
  { name: "Pokédex", repo: "https://github.com/lukvilela/pokedex" },
  { name: "Todo Python", repo: "https://github.com/lukvilela/todo-python" },
  { name: "Itaquiti CCB", repo: "https://github.com/lukvilela/itaquiticcb" },
];

export default function Projects() {
  return (
    <section
      id="projetos"
      className="px-6 md:px-10 py-32 md:py-40 border-t border-[var(--line-2)]"
    >
      <div className="mx-auto max-w-[1080px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="eyebrow mono mb-8"
        >
          <span className="c-green">$</span> ls ~/projetos
        </motion.p>

        <RevealText
          text="Uma seleção do que já construí."
          gradientWords={["construí"]}
          className="cine text-4xl md:text-6xl leading-[1.05] mb-14 max-w-3xl"
        />

        {/* Bento grid of code-window cards */}
        <div className="grid grid-cols-1 md:grid-cols-6 auto-rows-[minmax(230px,1fr)] gap-4">
          {FEATURED.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-60px" }}
              transition={{ duration: 0.7, delay: (i % 3) * 0.08 }}
              className={p.span}
            >
              <GlowCard className="h-full flex flex-col">
                {/* window title bar with filename */}
                <div className="card-bar">
                  <span className="term-dot r" style={{ width: 10, height: 10 }} />
                  <span className="term-dot y" style={{ width: 10, height: 10 }} />
                  <span className="term-dot g" style={{ width: 10, height: 10 }} />
                  <span className="ml-1.5 mono text-[12px] text-[var(--fg-muted)]">
                    {p.file}
                  </span>
                  {p.live && (
                    <span className="ml-auto mono text-[11px] c-green flex items-center gap-1.5">
                      <span className="dot dot-on" /> live
                    </span>
                  )}
                </div>

                <div className="p-6 md:p-7 flex flex-col flex-1">
                  <span className="eyebrow mono c-cyan">{p.tag}</span>
                  <h3 className="cine text-2xl md:text-[28px] mt-3">{p.name}</h3>
                  <p className="text-[14px] md:text-[15px] text-[var(--fg-soft)] leading-relaxed mt-3">
                    {p.description}
                  </p>

                  <div className="mt-auto pt-5 flex items-end justify-between gap-3">
                    <p className="mono text-[11px] text-[var(--fg-muted)] leading-snug">
                      {p.stack}
                    </p>
                    <div className="flex gap-4 text-sm shrink-0">
                      {p.live && (
                        <a href={p.live} target="_blank" rel="noreferrer" className="lnk lnk-arrow mono">
                          demo <span className="arr">↗</span>
                        </a>
                      )}
                      {p.repo && (
                        <a href={p.repo} target="_blank" rel="noreferrer" className="lnk lnk-arrow mono">
                          código <span className="arr">↗</span>
                        </a>
                      )}
                    </div>
                  </div>
                </div>
              </GlowCard>
            </motion.div>
          ))}
        </div>

        {/* Experiments */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="mt-16"
        >
          <p className="eyebrow mono mb-6">
            <span className="c-green">$</span> ls ~/experimentos
          </p>
          <div className="flex flex-wrap gap-3">
            {EXPERIMENTS.map((e) => (
              <a
                key={e.name}
                href={e.repo}
                target="_blank"
                rel="noreferrer"
                className="chip hover:border-[var(--accent)] hover:text-[var(--accent)] transition-colors"
              >
                {e.name} <span className="opacity-60">↗</span>
              </a>
            ))}
            <a
              href="https://github.com/lukvilela?tab=repositories"
              target="_blank"
              rel="noreferrer"
              className="chip hover:border-[var(--accent-2)] hover:text-[var(--accent-2)] transition-colors"
            >
              ver tudo no github <span className="opacity-60">↗</span>
            </a>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
