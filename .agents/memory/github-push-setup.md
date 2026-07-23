---
name: GitHub push setup
description: GitHub repo target, auth token account, and force-push requirement after Replit checkpoints
---

# GitHub Push Setup

## Repository
`skillsamurai-hub/Replit-Skill-Samurai` — https://github.com/skillsamurai-hub/Replit-Skill-Samurai

The original remote (genesis-tuazon/skill-samurai-website) is NOT the push target — the user only has access to the skillsamurai-hub GitHub account.

## Auth
`GITHUB_TOKEN` secret in Replit holds a classic PAT with `repo` scope for the skillsamurai-hub account. It is embedded directly in the origin remote URL.

## Force push requirement
Replit's checkpoint system creates local commits after a push, causing local and remote to diverge. Use `git push -f origin main` to keep GitHub in sync.

**Why:** Replit's platform-managed git adds checkpoint commits to the local branch automatically. These commits do not exist on the GitHub remote, so a regular push gets rejected as non-fast-forward.

**How to apply:** Any time a push to GitHub is requested and `git push origin main` fails with "non-fast-forward", follow up with `git push -f origin main`.
