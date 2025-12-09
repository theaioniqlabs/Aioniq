# Frontend Starter — AiONIQ

Files generated:
- tailwind.config.js
- src/styles/variables.css
- src/styles/globals.css
- src/design/tokens.ts
- src/components/Container.tsx
- src/components/layout/Header.tsx
- src/components/layout/Footer.tsx
- src/components/motion/presets.ts
- src/app/layout.tsx

How to use
1. Copy these files into `frontend/` in your repo (or `src/` if inside existing Next.js app).
2. Install dependencies:
   pnpm add -D tailwindcss postcss autoprefixer framer-motion
   pnpm add next react react-dom
3. Initialize Tailwind (if not):
   npx tailwindcss init -p
4. Start dev server:
   pnpm dev

Notes
- This starter uses Tailwind + CSS variables (recommended).
- Container uses CSS variable max-widths; adjust tokens in `variables.css`.
- Motion presets use your easing curve and soft lift/hover values.
