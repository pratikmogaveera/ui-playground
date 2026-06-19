# UI Playground

A sandbox for experimenting with UI packages, libraries, ideas, layouts, and interaction patterns.

## Purpose

Quick, low-friction space to try things out — new component libraries, animation tools, layout techniques, design patterns — without polluting real projects.

## Tech Stack

- Next.js 16 (App Router, Turbopack)
- React 19
- TypeScript
- Tailwind CSS v4
- shadcn/ui (Base UI primitives)

## How to Run

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000).

## File Structure

```
ui-playground/
├── src/
│   ├── app/
│   │   ├── layout.tsx        — root layout (dark theme default)
│   │   ├── page.tsx          — home page
│   │   └── globals.css       — Tailwind + shadcn theme variables
│   ├── components/ui/
│   │   └── button.tsx        — shadcn button component
│   └── lib/
│       └── utils.ts          — cn() class merge helper
├── public/                   — static assets
├── components.json           — shadcn/ui config
├── postcss.config.mjs        — PostCSS with Tailwind
├── tsconfig.json             — TypeScript config
└── package.json
```

## Progress

- [x] Project setup (Next.js + Tailwind + shadcn/ui)
- [x] Dark theme configured as default

## Resources

- [shadcn/ui docs](https://ui.shadcn.com/docs)
- [Tailwind CSS v4](https://tailwindcss.com/docs)
- [Next.js docs](https://nextjs.org/docs)
