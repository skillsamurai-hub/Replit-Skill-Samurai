---
name: GitHub-Vercel deploy workflow
description: How Replit changes get to the live site at skillsamuraiwinnipeg.com
---

## Deploy Flow

`scripts/post-merge.sh` does two things on every merge/manual run:
1. Force-pushes to `skillsamurai-hub/Replit-Skill-Samurai` on GitHub
2. Calls Vercel REST API to trigger a production deployment

## Vercel API Deploy (no Git connection needed in Vercel dashboard)

Uses `POST https://api.vercel.com/v13/deployments` with:
- `teamId=team_baXFXlFK2Y9ThvOv2ZcMcgvZ`
- `project=prj_awlTOmcLyHWuTGOVPRQTSOhW835q`
- `gitSource.repoId=1309542257` (GitHub repo ID for skillsamurai-hub/Replit-Skill-Samurai — do NOT change)
- `gitSource.ref=main`

**Why:** Vercel project (`skill-samurai-website-skill-samurai` on team `genesis-projects4`) was originally connected to `genesis-tuazon/skill-samurai-website` (different account). Reconnecting via the Vercel UI to `skillsamurai-hub` failed due to OAuth account isolation. The REST API workaround works by passing the GitHub repo ID directly — no UI Git connection needed.

**Required:** `VERCEL_TOKEN` (Replit secret), `VERCEL_ORG_ID` + `VERCEL_PROJECT_ID` (Replit shared env vars, already set).

**How to apply:** Run `bash scripts/post-merge.sh` to push + deploy. Runs automatically after every task merge.
