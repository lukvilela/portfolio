"use client";

import { motion } from "framer-motion";
import Marquee from "@/components/Marquee";

const GROUPS = [
  {
    label: "Dados",
    jp: "デ",
    items: "Python · pandas · SQL · análise de dados · Jupyter",
  },
  {
    label: "Front-end",
    jp: "前",
    items: "TypeScript · React · Next.js · Tailwind · Framer Motion",
  },
  {
    label: "Back-end",
    jp: "後",
    items: "Node.js · Express · Python · Java",
  },
  {
    label: "Banco",
    jp: "DB",
    items: "MongoDB · PostgreSQL · Firebase · Prisma",
  },
  {
    label: "Infra & Tools",
    jp: "基盤",
    items: "Docker · Cloud Run · Vercel · Netlify · Git",
  },
  {
    label: "Integrações & IA",
    jp: "API",
    items: "Stripe · OpenAI · Gemini · Capacitor",
  },
];

const MARQUEE_A = [
  "Python", "pandas", "SQL", "Jupyter",
  "TypeScript", "React", "Next.js", "Tailwind", "Framer Motion",
];
const MARQUEE_B = [
  "Node.js", "Express", "Java", "PostgreSQL", "MongoDB", "Prisma",
  "Firebase", "Docker", "Vercel", "Gemini", "Git",
];

export default function Stack() {
  return (
    <section className="px-6 md:px-10 py-32 md:py-40 border-t border-[var(--line-2)]">
      <div className="mx-auto max-w-[1080px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="eyebrow mono mb-10"
        >
          <span className="c-green">$</span> cat stack.json
        </motion.p>

        {/* Marquees */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-80px" }}
          transition={{ duration: 0.9 }}
          className="space-y-3 mb-14"
        >
          <Marquee items={MARQUEE_A} duration={34} />
          <Marquee items={MARQUEE_B} duration={28} />
        </motion.div>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, delay: 0.1 }}
          className="grid grid-cols-1 md:grid-cols-2 gap-3 max-w-[860px]"
        >
          {GROUPS.map((g) => (
            <li
              key={g.label}
              className="film-row -mx-3 px-3 py-4 flex items-baseline gap-3"
            >
              <span className="jp text-2xl text-[var(--accent-2)] shrink-0">
                {g.jp}
              </span>
              <div>
                <span className="eyebrow text-[var(--accent)] block mb-1">
                  {g.label}
                </span>
                <span className="text-[14px] text-[var(--fg-soft)]">
                  {g.items}.
                </span>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
