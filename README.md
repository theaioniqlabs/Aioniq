# AiONIQ Labs

A hybrid digital studio + intelligent product environment. Blending AI engineering, brand systems, design excellence, and high-end web-app UI.

## Overview

AiONIQ Labs creates premium digital experiences that feel like a Single Page Application (SPA) but maintain the visual storytelling of a design portfolio. A union of Apple × Stripe × OpenAI × Linear — clean, intelligent, futuristic.

## Tech Stack

- **Framework:** Next.js 14+ (App Router)
- **Styling:** TailwindCSS
- **UI Components:** shadcn/ui
- **Animation:** Framer Motion
- **3D (Optional):** Spline
- **Testing:** Vitest (unit), Playwright (E2E)
- **Package Manager:** pnpm

## Project Structure

```
project-root/
├── frontend/          # Next.js application
│   └── src/
│       ├── app/       # App Router pages
│       ├── components/ # React components
│       └── design/    # Design tokens
├── ui/                # Design token files
│   ├── tokens.json
│   ├── colors.json
│   ├── typography.json
│   └── layout-widths.json
├── scripts/           # Automation scripts
└── docs/              # Documentation
```

## Getting Started

### Prerequisites

- Node.js 20+
- pnpm 8+

### Installation

```bash
# Install dependencies
cd frontend
pnpm install

# Run development server
pnpm dev

# Type check
pnpm type-check

# Run tests
pnpm test

# Run E2E tests
pnpm e2e
```

## Design System

This project uses a token-first design system. All design values (spacing, colors, typography, container widths) must reference tokens defined in `/ui/`.

### Container System

- **Marketing:** 1280px (text-heavy content)
- **Visual:** 1440px (bento grids, galleries)
- **Showcase:** 1728px (hero 3D, immersive visuals)
- **App:** 1800px (dashboard-like layouts)

### Typography

- **Display:** Sora
- **Sans:** Inter

See `/ui/typography.json` for size/line-height pairs.

### Colors

Neutral, premium palette. See `/ui/colors.json` for the complete color system.

## Development Workflow

1. Create a branch following: `chore/aioniq-{short-desc}-{YYYYMMDD}`
2. Follow token-first approach (no raw px/rem/hex values)
3. Run `pnpm token:scan` to check token coverage
4. Ensure `pnpm build` passes before committing

## Documentation

- [Project Structure Guide](./aioniq_full_structure.md)
- [Master Context](./AIONIQ_MASTER_CONTEXT.txt)
- [MCP Configuration](./aioniq-mcp-config.md)
- [All MCP Servers Setup](./docs/mcp/all-mcp-setup.md)
- [GitHub MCP Setup](./docs/mcp/github-setup.md)
- [Cursor Rules](./.cursorrules)

## MCP Servers

This project uses multiple Model Context Protocol (MCP) servers:

- **GitHub MCP** - Repository management and code operations
- **Tavily MCP** - Structured web search and extraction
- **Firecrawl MCP** - Large-scale web crawling
- **Magic MCP** - Frontend automation and UI component generation

See [docs/mcp/all-mcp-setup.md](./docs/mcp/all-mcp-setup.md) for setup instructions.

## License

Copyright © AiONIQ Labs

