"use client";

import { motion } from "framer-motion";

const ITEMS = [
  {
    period: "2026 — Atual",
    title: "UNIVESP · Ciência de Dados",
    role: "Bacharelado · EAD",
    note: "Graduação em andamento. Estatística, programação, machine learning e análise de dados — EAD, compatível com 100% do expediente.",
    type: "edu",
  },
  {
    period: "2023 — 2025",
    title: "Técnico em Informática · Instituto Técnico de Barueri",
    role: "Integrado ao Ensino Médio",
    note: "Formação técnica concluída junto com o ensino médio. Da lógica de programação ao desenvolvimento, teste e manutenção de sistemas — Python, Java, JavaScript, SQL, HTML/CSS, bancos de dados e noções de IA e cloud.",
    type: "edu",
  },
];

export default function Education() {
  return (
    <section className="px-6 md:px-10 py-32 md:py-40 border-t border-[var(--line-2)]">
      <div className="mx-auto max-w-[820px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="eyebrow mono mb-10"
        >
          <span className="c-green">$</span> cat formacao.log
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, delay: 0.1 }}
          className="divide-y divide-[var(--line)]"
        >
          {ITEMS.map((item) => (
            <li
              key={item.title}
              className="film-row -mx-3 px-3 py-6 grid grid-cols-12 gap-4 items-baseline"
            >
              <div className="col-span-12 md:col-span-3">
                <p className="eyebrow text-[var(--accent)] numerals">
                  {item.period}
                </p>
                <p className="eyebrow opacity-50 mt-1">
                  {item.type === "work" ? "Trabalho · 仕事" : "Estudo · 学習"}
                </p>
              </div>
              <div className="col-span-12 md:col-span-9">
                <h3 className="cine text-2xl md:text-3xl">
                  {item.title}
                </h3>
                <p className="text-sm text-[var(--fg-muted)] font-display italic mt-1">
                  {item.role}
                </p>
                <p className="mt-3 text-[15px] md:text-base text-[var(--fg-soft)] leading-relaxed max-w-2xl">
                  {item.note}
                </p>
              </div>
            </li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
