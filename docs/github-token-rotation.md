# GitHub Token Rotation Guide

The `GITHUB_TOKEN` Replit secret is a GitHub Personal Access Token (PAT) used by
`scripts/post-merge.sh` to push commits to GitHub after every task merge and to open
GitHub issues when a push fails.

When the token expires or is revoked, both operations fail silently unless you catch
the warning in the merge log.  Follow these steps to rotate the token before that
happens.

---

## When to rotate

- The merge log prints **"GITHUB_TOKEN IS INVALID OR EXPIRED"** — rotate immediately.
- The merge log prints **"GITHUB_TOKEN EXPIRY WARNING"** — rotate within the stated
  number of days.
- You proactively want to refresh a token that is close to its expiry date.

---

## Step 1 — Create a new PAT on GitHub

Log in to GitHub as **skillsamurai-hub**, then:

### Classic PAT (simpler, no expiry header in API responses)

1. Go to **Settings → Developer settings → Personal access tokens → Tokens (classic)**.
2. Click **Generate new token (classic)**.
3. Give it a descriptive name, e.g. `replit-post-merge-2026`.
4. Set **Expiration** — recommended: 90 days (add a calendar reminder to rotate before
   it expires).
5. Under **Select scopes**, tick **`repo`** (full control of private repositories).
6. Click **Generate token** and copy the token value immediately — GitHub only shows it once.

### Fine-grained PAT (scoped, expiry reported in merge log)

1. Go to **Settings → Developer settings → Personal access tokens → Fine-grained tokens**.
2. Click **Generate new token**.
3. Set **Expiration** (max 1 year; add a calendar reminder).
4. Under **Resource owner**, select **skillsamurai-hub**.
5. Under **Repository access**, choose **Only select repositories** and pick
   `Replit-Skill-Samurai`.
6. Under **Permissions → Repository permissions**, grant:
   - **Contents**: Read and write
   - **Issues**: Read and write
7. Click **Generate token** and copy the value immediately.

---

## Step 2 — Update the Replit secret

1. Open the Replit project.
2. Go to **Tools → Secrets** (or the lock icon in the sidebar).
3. Find the secret named **`GITHUB_TOKEN`**.
4. Click **Edit value** and paste the new token.
5. Save.

The secret is immediately available to `post-merge.sh` on the next task merge — no
restart required.

---

## Step 3 — Verify the new token

Run a quick manual check from the Replit shell:

```bash
curl -s -o /dev/null -w "%{http_code}\n" \
  -H "Authorization: Bearer $GITHUB_TOKEN" \
  https://api.github.com/user
```

Expected output: `200`

If you see `401`, the secret was not saved correctly or the token was copied
incorrectly — repeat Step 2.

---

## Step 4 — Discard the old token (optional but recommended)

1. Go back to **GitHub → Settings → Developer settings → Personal access tokens**.
2. Find the old token by name and click **Delete**.

This prevents the old token from being usable if it is ever accidentally exposed.

---

## Reminder cadence

Classic PATs do not report their expiry date via the GitHub API, so the merge log
cannot warn you automatically.  Set a calendar reminder for 1–2 weeks before the
token's expiry date when you create it.

Fine-grained PATs report their expiry via the `x-oauth-expiry` response header.
`post-merge.sh` reads this header and prints a warning in the merge log when fewer
than 14 days remain.
