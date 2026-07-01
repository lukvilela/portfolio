"use client";

import { motion } from "framer-motion";

/**
 * Heading that reveals word-by-word, each word rising from behind a mask
 * as it scrolls into view. Pass `gradientLast` to gradient-color the last word.
 */
export default function RevealText({
  text,
  className,
  gradientWords = [],
  delay = 0,
}: {
  text: string;
  className?: string;
  gradientWords?: string[];
  delay?: number;
}) {
  const words = text.split(" ");
  return (
    <h2 className={className}>
      <span className="sr-only">{text}</span>
      <span aria-hidden className="inline">
        {words.map((w, i) => {
          const grad = gradientWords.includes(w.replace(/[.,]/g, ""));
          return (
            <span key={i} className="reveal-word mr-[0.25em]">
              <motion.span
                className={`inline-block ${grad ? "grad-text" : ""}`}
                initial={{ y: "110%" }}
                whileInView={{ y: "0%" }}
                viewport={{ once: true, margin: "-80px" }}
                transition={{
                  duration: 0.7,
                  delay: delay + i * 0.06,
                  ease: [0.2, 0.7, 0.2, 1],
                }}
              >
                {w}
              </motion.span>
            </span>
          );
        })}
      </span>
    </h2>
  );
}
