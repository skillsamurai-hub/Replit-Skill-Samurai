#!/bin/bash
set -e
pnpm install --frozen-lockfile
pnpm --filter db push
git push -f "https://${GITHUB_TOKEN}@github.com/skillsamurai-hub/Replit-Skill-Samurai.git" main
