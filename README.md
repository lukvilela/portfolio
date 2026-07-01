# Lucas Vilela — Portfolio

Portfólio pessoal, tema editorial preto e branco.
Stack: Next.js 15 (App Router) · TypeScript · Tailwind CSS · Google Fonts (Inter + Instrument Serif + JetBrains Mono).

## Rodar localmente

```bash
npm install
npm run dev
```

Abre em `http://localhost:3000`.

## Deploy

Vercel — push pro GitHub e conecta. Sem variáveis de ambiente necessárias.

## Estrutura

- `src/app/layout.tsx` — fonts + grain texture + metadata
- `src/app/page.tsx` — composição da página
- `src/app/globals.css` — design tokens + animações
- `src/components/*` — Nav, Hero, About, Stack, Projects, Contact, Footer, Reveal

## Editar conteúdo

- **Hero**: `src/components/Hero.tsx` — tagline, métricas
- **About**: `src/components/About.tsx` — bio + sidebar
- **Stack**: `src/components/Stack.tsx` — array `ITEMS`
- **Projects**: `src/components/Projects.tsx` — array `PROJECTS`
- **Contact**: `src/components/Contact.tsx` — email/links

## Notas de design

- Preto puro `#0a0a0a` (ink) + paper `#fafafa`.
- Tipografia: **Instrument Serif** (display, com itálico expressivo) + **Inter** (body) + **JetBrains Mono** (labels).
- Grão sutil global (4% opacity) — vibe editorial impressa.
- Marquee horizontal pra stack — movimento sem ruído.
- Reveal-on-scroll via IntersectionObserver puro (sem dependência).
- Cursor padrão (sem custom cursor — não atrapalha em mobile).
