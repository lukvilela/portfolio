"use client";

import { motion } from "framer-motion";
import { useState } from "react";

export default function Contact() {
  const [copied, setCopied] = useState(false);
  const email = "lucasregiobritovilela52@gmail.com";

  const copy = (e: React.MouseEvent) => {
    e.preventDefault();
    navigator.clipboard.writeText(email).then(() => {
      setCopied(true);
      setTimeout(() => setCopied(false), 1800);
    });
  };

  return (
    <section id="contato" className="px-6 md:px-10 py-32 md:py-44 border-t border-[var(--line-2)]">
      <div className="mx-auto max-w-[820px]">
        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="eyebrow mono mb-10"
        >
          <span className="c-green">$</span> ./contato.sh
        </motion.p>

        <motion.h2
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, delay: 0.1 }}
          className="cine text-4xl md:text-6xl leading-tight max-w-2xl"
        >
          Bora <span className="grad-text">conversar</span>.
        </motion.h2>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, delay: 0.2 }}
          className="mt-8 text-[17px] md:text-[19px] leading-relaxed text-[var(--fg-soft)] max-w-2xl"
        >
          Pode me chamar pra falar de tecnologia, dados ou um projeto. Tô nas
          redes abaixo — respondo rápido.
        </motion.p>

        <motion.ul
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0, delay: 0.3 }}
          className="mt-16 space-y-4 max-w-xl"
        >
          <Row
            label="Email"
            jp="メール"
            value={copied ? "copiado ✓" : email}
            onClick={copy}
          />
          <Row
            label="GitHub"
            jp="ギット"
            value="@lukvilela"
            href="https://github.com/lukvilela"
          />
          <Row
            label="LinkedIn"
            jp="リンク"
            value="britovilela"
            href="https://linkedin.com/in/britovilela"
          />
          <Row label="Localização" jp="所在地" value="Barueri · São Paulo · BR" />
        </motion.ul>

        {/* Footer */}
        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.0, delay: 0.5 }}
          className="mt-32 pt-8 border-t border-[var(--line-2)] flex flex-col md:flex-row justify-between gap-3 text-xs font-mono text-[var(--fg-muted)]"
        >
          <p>© 2026 Lucas Vilela · Feito à mão</p>
          <p>
            Next.js · Tailwind · Vercel{" "}
            <span className="text-[var(--accent)] ml-2 jp">ありがとう</span>
          </p>
        </motion.div>
      </div>
    </section>
  );
}

function Row({
  label,
  jp,
  value,
  href,
  onClick,
}: {
  label: string;
  jp: string;
  value: string;
  href?: string;
  onClick?: (e: React.MouseEvent) => void;
}) {
  const content = (
    <div className="grid grid-cols-12 gap-3 items-baseline text-[15px] md:text-base">
      <span className="col-span-2 jp text-xs text-[var(--accent-2)] opacity-80">
        {jp}
      </span>
      <span className="col-span-3 eyebrow opacity-60">{label}</span>
      <span className="col-span-1 text-center opacity-30">·</span>
      <span className="col-span-6 font-display italic text-[var(--fg)]">
        {value}
      </span>
    </div>
  );

  if (href) {
    return (
      <li>
        <a
          href={href}
          target="_blank"
          rel="noreferrer"
          className="block film-row -mx-3 px-3 py-3"
        >
          {content}
        </a>
      </li>
    );
  }
  if (onClick) {
    return (
      <li>
        <a
          href="#"
          onClick={onClick}
          className="block film-row -mx-3 px-3 py-3"
        >
          {content}
        </a>
      </li>
    );
  }
  return (
    <li>
      <div className="film-row -mx-3 px-3 py-3">{content}</div>
    </li>
  );
}
