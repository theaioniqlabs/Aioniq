# AiONIQ Project Folder Structure & Automation Guide

This document consolidates the complete merged folder structure, testing setup, automation scripts, and development notes for the AiONIQ project.

---

## 1. Canonical Project Folder Structure

```
project-root/
├── .vscode/
│   ├── launch.json
│   └── settings.json
├── .github/
│   └── workflows/
│       ├── ci.yml
│       └── e2e.yml
├── docker/
│   └── Dockerfile.web
├── infra/
│   ├── terraform/
│   └── scripts/
├── frontend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── next.config.js
│   ├── tailwind.config.js
│   ├── postcss.config.js
│   ├── public/
│   │   ├── favicon.ico
│   │   ├── robots.txt
│   │   └── assets/
│   └── src/
│       ├── app/
│       │   ├── layout.tsx
│       │   ├── globals.css
│       │   ├── page.tsx
│       │   ├── (home)/
│       │   ├── what/
│       │   ├── why/
│       │   ├── how/
│       │   ├── who/
│       │   ├── work/
│       │   ├── contact/
│       │   └── dashboard/
│       ├── components/
│       │   ├── layout/
│       │   ├── ui/
│       │   ├── bento/
│       │   ├── hero/
│       │   └── motion/
│       ├── design/
│       │   ├── tokens.ts
│       │   └── typography.ts
│       ├── lib/
│       ├── hooks/
│       ├── contexts/
│       ├── styles/
│       │   ├── tailwind.css
│       │   └── variables.css
│       ├── 3d/
│       ├── types/
│       └── tests/
├── backend/
│   ├── package.json
│   ├── tsconfig.json
│   ├── src/
│   │   ├── controllers/
│   │   ├── models/
│   │   ├── routes/
│   │   ├── middleware/
│   │   ├── config/
│   │   └── server.ts
│   ├── tests/
│   │   ├── unit/
│   │   └── integration/
│   └── .env
├── database/
│   ├── migrations/
│   └── seeds/
├── docs/
│   ├── api-spec.md
│   └── deployment-guide.md
├── scripts/
│   ├── deploy.sh
│   └── backup-db.sh
├── workspace_storage/
│   ├── backup/
│   └── references/
├── .cursorrule
├── .gitignore
├── README.md
└── docker-compose.yml
```

---

## 2. `.gitignore` Additions

```
# Temporary local work files
/workspace_storage/
```

---

## 3. Testing & Automation Stack

**Unit Testing:** Vitest + React Testing Library  
**E2E Testing:** Playwright  
**Type Checking:** TypeScript (tsc)  
**Linting:** ESLint  
**CI:** GitHub Actions (CI + E2E)

### Install commands

```
pnpm add -D vitest @testing-library/react @testing-library/jest-dom playwright @playwright/test eslint typescript ts-node
```

---

## 4. Frontend `package.json` Scripts

```json
{
  "scripts": {
    "dev": "next dev",
    "build": "next build",
    "start": "next start",
    "type-check": "tsc --noEmit",
    "lint": "eslint 'src/**/*.{ts,tsx}'",
    "format": "prettier --write .",
    "test": "vitest run",
    "test:watch": "vitest",
    "e2e": "playwright test",
    "e2e:headed": "playwright test --headed",
    "prepare": "playwright install"
  }
}
```

---

## 5. Playwright Config (`playwright.config.ts`)

```ts
import { defineConfig, devices } from '@playwright/test';

export default defineConfig({
  testDir: './tests/e2e',
  timeout: 30000,
  expect: { timeout: 5000 },
  fullyParallel: true,
  retries: process.env.CI ? 2 : 0,
  reporter: [['list'], ['html', { open: 'never' }]],
  use: {
    baseURL: 'http://localhost:3000',
    trace: 'on-first-retry',
    headless: process.env.CI ? true : false,
  },
  projects: [
    { name: 'chromium', use: { ...devices['Desktop Chrome'] } },
    { name: 'firefox', use: { ...devices['Desktop Firefox'] } }
  ]
});
```

---

## 6. Vitest Config (`vitest.config.ts`)

```ts
import { defineConfig } from 'vitest/config';

export default defineConfig({
  test: {
    environment: 'jsdom',
    globals: true,
    setupFiles: './tests/setupTests.ts',
    include: ['src/**/*.{test,spec}.{ts,tsx}']
  }
});
```

---

## 7. VS Code Debug Setup (`.vscode/launch.json`)

```json
{
  "version": "0.2.0",
  "configurations": [
    {
      "name": "Next: Dev",
      "type": "pwa-node",
      "request": "launch",
      "program": "${workspaceFolder}/frontend/node_modules/next/dist/bin/next",
      "args": ["dev"],
      "cwd": "${workspaceFolder}/frontend",
      "console": "integratedTerminal",
      "env": { "NODE_ENV": "development" }
    },
    {
      "name": "Playwright: Headed Test",
      "type": "pwa-node",
      "request": "launch",
      "program": "${workspaceFolder}/frontend/node_modules/.bin/playwright",
      "args": ["test", "--headed"],
      "cwd": "${workspaceFolder}/frontend",
      "console": "integratedTerminal"
    }
  ]
}
```

---

## 8. GitHub Actions CI (`.github/workflows/ci.yml`)

```yaml
name: CI

on: [push, pull_request]

jobs:
  test:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: 20
      - name: Install dependencies
        run: |
          cd frontend
          pnpm install
      - name: Type check
        run: pnpm --filter frontend run type-check
      - name: Unit tests
        run: pnpm --filter frontend run test
      - name: Playwright E2E
        run: |
          cd frontend
          pnpm run prepare
          pnpm run dev &
          npx wait-on http://localhost:3000
          pnpm run e2e
```

---

## 9. Dev Commands

```
cd frontend
pnpm install
pnpm run dev
pnpm run type-check
pnpm run test
pnpm run prepare
pnpm run e2e
pnpm run e2e:headed
```

---

## 10. `.cursorrule`

File is kept exactly at:

```
project-root/.cursorrule
```

---

This file contains everything required to set up, maintain, and automate the AiONIQ project structure end‑to‑end.
