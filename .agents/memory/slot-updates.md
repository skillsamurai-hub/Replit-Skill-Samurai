---
name: Slot availability updates
description: How spot counts actually reach the live Vercel site — static file, not the database
---

## Rule
Spot count changes must be made in the **static page file**, not the database.

**Why:** The live site is on Vercel. The Replit internal PostgreSQL (host: `helium`) is unreachable from Vercel. The Next.js API route (`/api/slots`) returns a 500 Database error on production. The frontend falls back to the static `slots` array defined in the page file.

**How to apply:**
- North East: `artifacts/skill-samurai/src/app/north-east-coding-classes/page.tsx` — the `slots` array at the top has `spotsLeft` per row.
- Seven Oaks: equivalent page file for that location.
- After editing, run `bash scripts/post-merge.sh` to push to GitHub → Vercel.
- The database (`slot_availability` table) is a dead code path for the live site; ignore it for spot count changes.
