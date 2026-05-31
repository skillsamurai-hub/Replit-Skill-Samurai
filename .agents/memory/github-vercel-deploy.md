---
name: GitHub-Vercel deploy workflow
description: How Replit changes get to the live site at skillsamuraiwinnipeg.com
---

# Deploy workflow

**Live site**: skillsamuraiwinnipeg.com (served by Vercel, NOT Replit hosting)
**GitHub repo**: github.com/genesis-tuazon/skill-samurai-website (public)
**Push command**: `git --no-optional-locks push https://genesis-tuazon:${GITHUB_PERSONAL_ACCESS_TOKEN}@github.com/genesis-tuazon/skill-samurai-website.git main`

## Flow
Replit edits → push to GitHub (manual) → Vercel auto-deploys (~1 min)

**Why:** Domain skillsamuraiwinnipeg.com DNS points to Vercel, not Replit. Vercel's Git integration auto-deploys on push to main (works because repo is public — Hobby plan blocks auto-deploy on private repos for non-owner commit authors).

**How to apply:** After finishing any batch of changes, push to GitHub. GITHUB_PERSONAL_ACCESS_TOKEN secret is stored in Replit.
