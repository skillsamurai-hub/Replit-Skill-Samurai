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

## Custom-domain promotion

A Vercel deployment created with `target: production` can reach `READY` while the public custom-domain aliases remain pinned to the previous deployment.

**Why:** This happened after a successful production build: the project’s default Vercel aliases moved to the new deployment, but `www.skillsamuraiwinnipeg.com` and `www.codingforkidswinnipeg.com` still referenced the older deployment.

**How to apply:** After a deployment reaches `READY`, verify both public aliases reference its deployment ID. If not, assign both aliases to that deployment before reporting the change as live. Also check DNS configuration and fetch each public URL: an alias can point at the right deployment while its hostname resolves to a registrar instead of Vercel. The apex domains redirect to these `www` aliases.

## GitHub repository permissions

The live-source repository and the separate `origin` repository require different authorized GitHub identities; a successful push to one does not imply write access to the other.

**Why:** The account permitted to update the Vercel source received a permission error when pushing the same commit to `origin`; the separately configured workspace credential worked for `origin`.

**How to apply:** Check both remote heads after a requested push. Use the appropriate existing workspace authentication for each repository, without exposing credential values or force-pushing to work around a permission error.
