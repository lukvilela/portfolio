"use client";

import { useEffect, useRef, useState } from "react";
import type { ReactNode } from "react";
import { motion } from "framer-motion";

function Prompt() {
  return (
    <>
      <span className="c-green">lucas@vilela</span>
      <span className="c-muted">:</span>
      <span className="c-blue">~/portfolio</span>
      <span className="c-muted">$ </span>
    </>
  );
}

const PROJECTS = [
  { n: "ritmo", d: "SaaS de estudos p/ ENEM com IA · no ar", u: "https://ritmo-44c33.web.app", live: true },
  { n: "akira-mangas", d: "e-commerce cyberpunk de mangás · no ar", u: "https://mangaverse-zeta.vercel.app", live: true },
  { n: "landhub", d: "gerador de landing pages (SaaS) · no ar", u: "https://landhub-demo.netlify.app", live: true },
  { n: "kanaru", d: "SaaS pra aprender japonês (SRS, JLPT)", u: "https://github.com/lukvilela/kanaru", live: false },
  { n: "nihongo-quest", d: "jogo em canvas pra aprender hiragana/katakana", u: "https://github.com/lukvilela/nihongo-game", live: false },
  { n: "command-center", d: "ferramenta de gestão estilo Trello · demo no ar", u: "https://command-center-ashy-theta.vercel.app", live: true },
];

const CAT = ` /\\_/\\\n( o.o )\n > ^ <`;

const HINTS = ["help", "whoami", "sobre", "projetos", "stack", "formacao", "contato", "cv", "neofetch"];

const COMMANDS_LIST = [
  "help", "whoami", "sobre", "projetos", "stack", "formacao", "contato", "cv", "neofetch", "github", "clear",
];

function commonPrefix(arr: string[]) {
  if (!arr.length) return "";
  let p = arr[0];
  for (const s of arr) while (!s.startsWith(p)) p = p.slice(0, -1);
  return p;
}

function Line({ children, className }: { children: ReactNode; className?: string }) {
  return <p className={`mb-1 ${className ?? ""}`}>{children}</p>;
}

function CvDownload() {
  const [p, setP] = useState(0);
  useEffect(() => {
    const id = setInterval(
      () => setP((v) => (v >= 100 ? 100 : v + 6 + Math.random() * 15)),
      85
    );
    return () => clearInterval(id);
  }, []);
  const pct = Math.min(100, Math.round(p));
  const filled = Math.round((pct / 100) * 22);
  const bar = "█".repeat(filled) + "░".repeat(22 - filled);
  return (
    <p className="mb-1 mono">
      <span className="c-green">⬇ baixando</span>{" "}
      <span className="c-muted">Lucas-Vilela-CV.pdf</span>{" "}
      <span className="c-cyan">[{bar}]</span> {pct}%{" "}
      {pct >= 100 && <span className="c-green">✓ pronto</span>}
    </p>
  );
}

export default function Terminal() {
  const [lines, setLines] = useState<ReactNode[]>([]);
  const [input, setInput] = useState("");
  const [history, setHistory] = useState<string[]>([]);
  const [hIndex, setHIndex] = useState(-1);
  const [booting, setBooting] = useState(true);
  const [typed, setTyped] = useState("");
  const bodyRef = useRef<HTMLDivElement | null>(null);
  const inputRef = useRef<HTMLInputElement | null>(null);
  const cancelRef = useRef(false);
  const busyRef = useRef(false);

  const push = (node: ReactNode) =>
    setLines((prev) => [
      ...prev,
      <motion.div
        key={prev.length + Math.random()}
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.22, ease: [0.2, 0.7, 0.2, 1] }}
      >
        {node}
      </motion.div>,
    ]);

  const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

  // prints output one line at a time, like a machine responding
  async function streamOut(nodes: ReactNode[], delay = 110) {
    for (const n of nodes) {
      if (cancelRef.current) return;
      push(n);
      await sleep(delay);
    }
  }

  function output(cmd: string): ReactNode[] {
    const c = cmd.trim().toLowerCase();
    switch (c) {
      case "help":
        return [
          <Line><span className="c-yellow">comandos disponíveis:</span></Line>,
          <Line><span className="c-cyan">whoami</span>     quem é o Lucas em uma linha</Line>,
          <Line><span className="c-cyan">sobre</span>      a versão completa</Line>,
          <Line><span className="c-cyan">projetos</span>   o que eu construí (com links)</Line>,
          <Line><span className="c-cyan">stack</span>      tecnologias que uso</Line>,
          <Line><span className="c-cyan">formacao</span>   educação</Line>,
          <Line><span className="c-cyan">contato</span>    como falar comigo</Line>,
          <Line><span className="c-cyan">cv</span>         baixa meu currículo (PDF)</Line>,
          <Line><span className="c-cyan">neofetch</span>   meu &quot;sistema&quot;</Line>,
          <Line><span className="c-cyan">github</span>     abre meu GitHub</Line>,
          <Line><span className="c-cyan">clear</span>      limpa a tela</Line>,
          <Line className="c-muted">dica: ↑/↓ navegam o histórico · ou clique nos chips abaixo</Line>,
        ];
      case "whoami":
        return [
          <Line>
            <span className="c-purple">Lucas Vilela</span> — dev full-stack &amp; estudante de Ciência de Dados, 18 anos, de Barueri-SP.
          </Line>,
        ];
      case "sobre":
      case "about":
        return [
          <Line>Comecei a programar no técnico e não parei mais. Sou dev full-stack: construo produtos do back-end ao pixel e curto pegar um problema e transformar em algo que funciona.</Line>,
          <Line>Agora curso <span className="c-cyan">Ciência de Dados</span> na UNIVESP — me aprofundando em Python, análise de dados e um olhar mais analítico pros produtos.</Line>,
          <Line>Construo rápido e gosto de deixar redondo. <span className="c-muted"># ship it</span></Line>,
        ];
      case "projetos":
      case "projects":
      case "ls":
        return [
          <Line className="c-muted"># {PROJECTS.length} repositórios em destaque</Line>,
          ...PROJECTS.map((p) => (
            <p key={p.n} className="mb-1">
              <span className="c-green">▸ </span>
              <span className="c-cyan">{p.n}</span>
              <span className="c-muted"> — {p.d}  </span>
              <a href={p.u} target="_blank" rel="noreferrer" className="lnk lnk-arrow">
                {p.live ? "abrir" : "código"} <span className="arr">↗</span>
              </a>
            </p>
          )),
          <Line className="c-muted">→ veja a versão visual rolando a página, ou: <span className="c-cyan">github</span></Line>,
        ];
      case "stack":
      case "skills":
        return [
          <Line><span className="c-purple">dados</span>     Python · pandas · SQL · análise · Jupyter</Line>,
          <Line><span className="c-purple">front</span>     TypeScript · React · Next.js · Tailwind · Framer Motion</Line>,
          <Line><span className="c-purple">back</span>      Node.js · Express · Python · Java</Line>,
          <Line><span className="c-purple">dados/db</span>  PostgreSQL · MongoDB · Firebase · Prisma</Line>,
          <Line><span className="c-purple">infra</span>     Docker · Vercel · Netlify · Git · CI</Line>,
        ];
      case "formacao":
      case "educacao":
      case "edu":
        return [
          <Line><span className="c-green">2026 — atual</span>  UNIVESP · Ciência de Dados (bacharelado, EAD)</Line>,
          <Line><span className="c-green">2023 — 2025</span>  Instituto Técnico de Barueri · Técnico em Informática (integrado ao médio)</Line>,
        ];
      case "contato":
      case "contact":
        return [
          <Line>
            <span className="c-muted">email   </span>
            <a href="mailto:lucasregiobritovilela52@gmail.com" className="lnk">lucasregiobritovilela52@gmail.com</a>
          </Line>,
          <Line>
            <span className="c-muted">github  </span>
            <a href="https://github.com/lukvilela" target="_blank" rel="noreferrer" className="lnk">github.com/lukvilela</a>
          </Line>,
          <Line>
            <span className="c-muted">linkedin</span>{" "}
            <a href="https://linkedin.com/in/britovilela" target="_blank" rel="noreferrer" className="lnk">in/britovilela</a>
          </Line>,
        ];
      case "neofetch":
        return [
          <div className="flex gap-4 items-start">
            <pre className="c-cyan leading-tight">{CAT}</pre>
            <div className="text-[var(--fg-soft)]">
              <Line><span className="c-green">lucas@vilela</span></Line>
              <Line className="c-muted">───────────────</Line>
              <Line><span className="c-purple">os     </span> dev full-stack</Line>
              <Line><span className="c-purple">study  </span> Ciência de Dados</Line>
              <Line><span className="c-purple">local  </span> Barueri, SP · BR</Line>
              <Line><span className="c-purple">uptime </span> construindo desde 2023</Line>
              <Line><span className="c-purple">langs  </span> Python · TS · Java · SQL</Line>
              <Line><span className="c-purple">repos  </span> github.com/lukvilela</Line>
            </div>
          </div>,
        ];
      case "cv":
      case "curriculo":
      case "currículo":
      case "resume":
        if (typeof window !== "undefined") {
          const a = document.createElement("a");
          a.href = "/cv-lucas-vilela.pdf";
          a.download = "Lucas-Vilela-CV.pdf";
          document.body.appendChild(a);
          a.click();
          a.remove();
        }
        return [<CvDownload />];
      case "github":
        if (typeof window !== "undefined") window.open("https://github.com/lukvilela", "_blank");
        return [<Line className="c-muted">abrindo github.com/lukvilela ↗</Line>];
      case "sudo":
      case "sudo su":
        return [<Line className="c-red">permissão negada: boa tentativa 😏</Line>];
      case "":
        return [];
      default:
        return [
          <Line>
            <span className="c-red">comando não encontrado:</span> {cmd}. digite{" "}
            <span className="c-cyan">help</span>.
          </Line>,
        ];
    }
  }

  async function run(raw: string) {
    const cmd = raw.trim();
    if (busyRef.current) return;
    if (cmd.toLowerCase() === "clear" || cmd.toLowerCase() === "cls") {
      setLines([]);
      return;
    }
    push(
      <p className="mb-1">
        <Prompt />
        <span className="text-[var(--fg)]">{raw}</span>
      </p>
    );
    if (cmd) setHistory((h) => [...h, cmd]);
    setHIndex(-1);

    const nodes = output(cmd);
    if (nodes.length) {
      busyRef.current = true;
      await sleep(160); // beat antes da máquina "responder"
      await streamOut(nodes);
      busyRef.current = false;
    }
  }

  function onKey(e: React.KeyboardEvent<HTMLInputElement>) {
    if (e.key === "Tab") {
      e.preventDefault();
      const cur = input.trim().toLowerCase();
      if (!cur) return;
      const matches = COMMANDS_LIST.filter((c) => c.startsWith(cur));
      if (matches.length === 1) {
        setInput(matches[0]);
      } else if (matches.length > 1) {
        setInput(commonPrefix(matches));
        push(<Line className="c-muted">{matches.join("   ")}</Line>);
      }
      return;
    }
    if (e.key === "Enter") {
      run(input);
      setInput("");
    } else if (e.key === "ArrowUp") {
      e.preventDefault();
      setHistory((h) => {
        if (!h.length) return h;
        const idx = hIndex < 0 ? h.length - 1 : Math.max(0, hIndex - 1);
        setHIndex(idx);
        setInput(h[idx]);
        return h;
      });
    } else if (e.key === "ArrowDown") {
      e.preventDefault();
      setHistory((h) => {
        if (!h.length || hIndex < 0) return h;
        const idx = hIndex + 1;
        if (idx >= h.length) {
          setHIndex(-1);
          setInput("");
        } else {
          setHIndex(idx);
          setInput(h[idx]);
        }
        return h;
      });
    }
  }

  // boot sequence — auto-types `neofetch`, then prints its output line by line
  useEffect(() => {
    cancelRef.current = false;
    busyRef.current = true;
    const timeouts: ReturnType<typeof setTimeout>[] = [];
    const wait = (ms: number) =>
      new Promise<void>((r) => timeouts.push(setTimeout(r, ms)));

    async function typeInto(str: string) {
      for (let i = 1; i <= str.length; i++) {
        if (cancelRef.current) return;
        setTyped(str.slice(0, i));
        await wait(60);
      }
    }

    (async () => {
      await wait(350);
      if (cancelRef.current) return;
      push(<Line className="c-purple">● portfólio de lucas vilela — build 2026</Line>);
      await wait(250);
      await typeInto("neofetch");
      if (cancelRef.current) return;
      await wait(220);
      push(
        <p className="mb-1">
          <Prompt />
          <span className="text-[var(--fg)]">neofetch</span>
        </p>
      );
      await wait(160);
      await streamOut(output("neofetch"));
      setTyped("");
      await wait(260);
      if (cancelRef.current) return;
      push(
        <Line className="c-muted">
          digite <span className="c-cyan">help</span> e aperte enter — ou clique num comando abaixo ↓{" "}
          <span className="c-muted">(Tab autocompleta)</span>
        </Line>
      );
      busyRef.current = false;
      setBooting(false);
    })();

    return () => {
      cancelRef.current = true;
      timeouts.forEach(clearTimeout);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  useEffect(() => {
    const b = bodyRef.current;
    if (b) b.scrollTop = b.scrollHeight;
  }, [lines, typed]);

  useEffect(() => {
    if (!booting) inputRef.current?.focus();
  }, [booting]);

  return (
    <section className="min-h-[100svh] flex flex-col justify-center px-4 md:px-10 py-20">
      <div className="mx-auto w-full max-w-[860px]">
        <p className="eyebrow mb-4 c-muted">
          <span className="c-green">~</span> bem-vindo ao terminal do meu portfólio
        </p>

        <div
          className="term-window"
          onClick={() => inputRef.current?.focus()}
        >
          <div className="term-bar">
            <span className="term-dot r" />
            <span className="term-dot y" />
            <span className="term-dot g" />
            <span className="term-title">lucas@vilela: ~/portfolio — zsh</span>
          </div>
          <div ref={bodyRef} className="term-body">
            {lines}
            {booting ? (
              <p className="flex items-center">
                <Prompt />
                <span className="text-[var(--fg)]">{typed}</span>
                <span className="blink" />
              </p>
            ) : (
              <p className="flex items-center">
                <Prompt />
                <input
                  ref={inputRef}
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={onKey}
                  className="term-input"
                  spellCheck={false}
                  autoCapitalize="off"
                  autoComplete="off"
                  aria-label="terminal input"
                />
                <span className="blink" />
              </p>
            )}
          </div>
        </div>

        {/* clickable command hints */}
        <div className="flex flex-wrap gap-2 mt-4">
          {HINTS.map((h, i) => (
            <button
              key={h}
              className="cmd-chip"
              style={{ animation: "chipIn 0.4s ease both", animationDelay: `${0.9 + i * 0.05}s` }}
              onClick={() => {
                run(h);
                inputRef.current?.focus();
              }}
            >
              {h}
            </button>
          ))}
        </div>

        <p className="eyebrow c-muted mt-6 text-center">
          ↓ ou role pra ver a versão visual
        </p>
      </div>
    </section>
  );
}
