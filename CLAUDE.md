# CLAUDE.md

This file provides guidance to Claude Code (claude.ai/code) when working with code in this repository.

## Commands

```bash
npm run dev          # Start dev server on port 3000
npm run build        # Production build
npm run test         # Run tests (Vitest)
npm run lint         # Lint with Biome
npm run format       # Format with Biome
npm run check        # Full Biome check
```

Add Shadcn components:
```bash
pnpm dlx shadcn@latest add <component>
```

## Tech Stack

- **Framework**: React 19 with TanStack Start (SSR via Nitro)
- **Routing**: TanStack Router (file-based, routes in `src/routes/`)
- **Styling**: Tailwind CSS 4 with Shadcn UI (New York style)
- **Build**: Vite 7 with React Compiler
- **Testing**: Vitest with Testing Library
- **Linting**: Biome (tabs, double quotes, organize imports)

## Architecture

**File-based routing**: Add routes by creating files in `src/routes/`. The router auto-generates `src/routeTree.gen.ts` (do not edit).

**Root layout**: `src/routes/__root.tsx` sets up the HTML shell, loads Adobe TypeKit fonts (Modesto), and includes TanStack devtools.

**Path aliases**: Use `@/` to import from `src/` (e.g., `@/components`, `@/lib/utils`).

**Shadcn config**: Components go in `@/components/ui`, utilities in `@/lib/utils`.

## Code Style

- Use tabs for indentation
- Use double quotes for strings
- Biome handles import organization automatically
