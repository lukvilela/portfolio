"use client";

import { motion } from "framer-motion";

export default function About() {
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
          <span className="c-green">$</span> cat sobre.md
        </motion.p>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1.0 }}
          className="space-y-8 text-[18px] md:text-[20px] leading-[1.7] text-[var(--fg-soft)]"
        >
          <p>
            Comecei a programar no curso técnico e, com{" "}
            <span className="text-[var(--fg)]">~3 anos de prática</span>{" "}
            escrevendo código quase todo dia, virei desenvolvedor full-stack —
            construo produtos do back-end ao pixel.
          </p>

          <p>
            Sou{" "}
            <span className="italic text-[var(--accent)]">curioso e prático</span>:
            gosto de pegar um problema e transformar em automação ou produto. Me
            viro bem com integrações (APIs, pagamentos, OAuth), pipelines de IA
            com LLMs e bastante Python.
          </p>

          <p>
            Agora curso{" "}
            <span className="text-[var(--fg)]">Ciência de Dados</span> na UNIVESP
            e venho me aprofundando em Python, análise de dados e um olhar mais
            analítico pra construir produtos melhores.
          </p>

          <p>
            No GitHub eu mantenho de tudo:{" "}
            <a href="#projetos" className="lnk">
              SaaS no ar
            </a>{" "}
            (Ritmo, Landhub), um e-commerce de mangás, apps pra aprender japonês
            e experimentos pra estudar conceitos novos. Gosto de terminar o que
            começo e deixar redondo.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
