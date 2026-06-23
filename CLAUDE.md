# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Overview

WhiteMedia — a monochrome (black/white) editorial marketing site for a Turkish digital agency. Single-page React app, Turkish-language UI. Vite + React 18 + TypeScript (strict) + Tailwind v3 with the shadcn token system. Deploys to Vercel.

## Commands

```bash
npm run dev        # Vite dev server -> http://localhost:5173
npm run build      # tsc -b (typecheck) + vite build -> dist/
npm run preview    # serve the production build locally
```

There is no test suite or linter configured. `npm run build` is the only gate — it typechecks with `strict` plus `noUnusedLocals` / `noUnusedParameters`, so unused imports/vars fail the build.

The contact form's serverless function does **not** run under `vite dev`. To exercise `/api/send` locally, use `vercel dev` (or just deploy).

## Architecture

**Routing.** [src/App.tsx](src/App.tsx) defines all 4 routes under one `<Layout>` (`Nav` + `<Outlet/>` + `Footer`): `/` (Home), `/hizmetler`, `/portfolyo`, `/iletisim`. `vercel.json` rewrites every non-`/api/*` path to `index.html` so client routing works on direct hits.

**Two parallel styling systems coexist — know which one you're touching:**
- Tailwind + shadcn tokens (HSL CSS vars in [src/index.css](src/index.css), themed in `tailwind.config.js`). Use `cn()` from [src/lib/utils.ts](src/lib/utils.ts) for class merging. shadcn components land in `@/components/ui` per `components.json`.
- A legacy vanilla design system in [src/styles/whitemedia.css](src/styles/whitemedia.css) driving class-based markup (`.nav`, `.reveal`, etc.). Pages mix both. The monochrome palette is mapped into the shadcn tokens — preserve the black/white/grey scheme; there is no color accent.

**Imperative DOM effects** live in [src/hooks/usePageEffects.ts](src/hooks/usePageEffects.ts), called once in `Layout`. It ports a former vanilla `app.js`: reveal-on-scroll (`.reveal` → `.in`), animated counters (`[data-count]`, `[data-suffix]`), magnetic buttons (`[data-magnetic]`, fine-pointer only), and the sticky-nav `.scrolled` border. The scroll/counter/magnetic effects **re-run on every route change** (keyed on `location.pathname`) to wire freshly mounted nodes, and all honor `prefers-reduced-motion`. When adding animated elements, use these data-attributes/classes rather than writing new observers.

**Brand logos are hand-coded inline SVG React components** in [src/components/Logos.tsx](src/components/Logos.tsx) (17 `*Logo` exports, e.g. `MedicalparkLogo`). Each takes `SVGProps` and uses `fill="currentColor"`, so color is set by the consumer (see [src/pages/Portfolyo.tsx](src/pages/Portfolyo.tsx), which sizes them with `maxWidth/maxHeight` and passes `color`). Add new client logos here as new exports, then render them in Portfolyo. `implement.md` tracks the backlog of brands/collaborators still to add.

**Path alias:** `@/` → `src/` (configured in both `vite.config.ts` and `tsconfig.json`).

## Contact form (Resend)

[src/pages/Iletisim.tsx](src/pages/Iletisim.tsx) is a controlled form that POSTs JSON to `/api/send`, handled by the Vercel serverless function [api/send.js](api/send.js) (plain `fetch` to the Resend API, no SDK; Node 18+ global fetch).

- The API key never reaches the browser — all sending is server-side.
- Spam: a hidden honeypot field (`website` in the payload) plus server-side email/length validation. If the honeypot is filled, it returns `200 ok` silently.
- Env vars: `RESEND_API_KEY` (required), `CONTACT_TO` (default `trwhitemedia@gmail.com`), `CONTACT_FROM` (default `WhiteMedia <onboarding@resend.dev>`). Set these in Vercel project settings. See `RESEND-KURULUM.md` and `.env.example`.

## Deploy

Vercel, Vite preset (auto-detected). `api/` becomes serverless functions automatically. Add the Resend env vars in project settings before relying on the form.
