# Workspace

## Overview

pnpm workspace monorepo using TypeScript. Each package manages its own dependencies.

## Stack

- **Monorepo tool**: pnpm workspaces
- **Node.js version**: 24
- **Package manager**: pnpm
- **TypeScript version**: 5.9
- **API framework**: Express 5
- **Database**: PostgreSQL + Drizzle ORM
- **Validation**: Zod (`zod/v4`), `drizzle-zod`
- **API codegen**: Orval (from OpenAPI spec)
- **Build**: esbuild (CJS bundle)

## Artifacts

### Skill Samurai Winnipeg (`artifacts/skill-samurai`)
- **Framework**: Next.js 15 (App Router) with static export (`output: 'export'`)
- **Styling**: Tailwind CSS v4 via PostCSS (`@tailwindcss/postcss`)
- **Routing**: Next.js file-based routing in `app/` directory
- **Components**: React components in `src/components/` with `'use client'` for all interactive components
- **SEO**: Server-side rendered HTML with per-page `metadata` exports; full SSR on every request in dev, static HTML at build time
- **Images**: `@assets` alias → `../../attached_assets/`; webpack alias in `next.config.ts`
- **Port**: 22075
- **Pages**: `/` (Home), `/faq`, `/schools-community`, `/blog`
- **Brand**: Hot pink `hsl(335 84% 59%)`, navy `hsl(218 42% 29%)`, orange `#F59100`

## Key Commands

- `pnpm run typecheck` — full typecheck across all packages
- `pnpm run build` — typecheck + build all packages
- `pnpm --filter @workspace/api-spec run codegen` — regenerate API hooks and Zod schemas from OpenAPI spec
- `pnpm --filter @workspace/db run push` — push DB schema changes (dev only)
- `pnpm --filter @workspace/api-server run dev` — run API server locally

See the `pnpm-workspace` skill for workspace structure, TypeScript setup, and package details.

## GitHub

- **Repository**: `skillsamurai-hub/Replit-Skill-Samurai` — https://github.com/skillsamurai-hub/Replit-Skill-Samurai
- **Auth**: `GITHUB_TOKEN` secret (skillsamurai-hub PAT with repo scope) embedded in origin remote URL
- **Push command**: `git push origin main` (or `git push -f origin main` if branches diverge after Replit checkpoints)

## User Preferences

- **GitHub/Vercel deploys**: Every task merge auto-pushes to GitHub via `scripts/post-merge.sh`. Manual pushes are only needed if the auto-push fails or for out-of-band changes.
