#!/bin/bash
set -e

pnpm install --frozen-lockfile
pnpm --filter db push

# ---------------------------------------------------------------------------
# Token health check
# Verify GITHUB_TOKEN is set and valid before attempting anything that needs
# it.  Also warns when the token is within EXPIRY_WARN_DAYS days of expiring
# (GitHub returns the `x-oauth-expiry` header for fine-grained PATs; classic
# PATs omit it, so the expiry check is silently skipped for them).
# ---------------------------------------------------------------------------
EXPIRY_WARN_DAYS=14

if [ -z "${GITHUB_TOKEN}" ]; then
  echo ""
  echo "=========================================="
  echo "  GITHUB_TOKEN IS NOT SET"
  echo "  The Replit secret 'GITHUB_TOKEN' is missing."
  echo "  See docs/github-token-rotation.md to create"
  echo "  a new PAT and add it as a Replit secret."
  echo "=========================================="
  echo ""
  exit 1
fi

TOKEN_CHECK=$(curl -s -w "\n%{http_code}" \
  -H "Authorization: Bearer ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  -D /tmp/gh_token_headers.txt \
  https://api.github.com/user)

TOKEN_HTTP=$(echo "${TOKEN_CHECK}" | tail -n1)

if [ "${TOKEN_HTTP}" = "401" ]; then
  TIMESTAMP=$(date -u '+%Y-%m-%dT%H:%M:%SZ')
  echo ""
  echo "=========================================="
  echo "  GITHUB_TOKEN IS INVALID OR EXPIRED"
  echo "  Timestamp : ${TIMESTAMP}"
  echo "  The token was rejected by GitHub (HTTP 401)."
  echo "  See docs/github-token-rotation.md to rotate"
  echo "  the token and update the Replit secret."
  echo "=========================================="
  echo ""
  exit 1
fi

# Check x-oauth-expiry header (fine-grained PATs only).
EXPIRY_EPOCH=$(grep -i '^x-oauth-expiry:' /tmp/gh_token_headers.txt 2>/dev/null \
  | tr -d '\r' | awk '{print $2}')

if [ -n "${EXPIRY_EPOCH}" ]; then
  NOW_EPOCH=$(date -u +%s)
  DAYS_LEFT=$(( (EXPIRY_EPOCH - NOW_EPOCH) / 86400 ))
  EXPIRY_DATE=$(date -u -d "@${EXPIRY_EPOCH}" '+%Y-%m-%d' 2>/dev/null \
    || date -u -r "${EXPIRY_EPOCH}" '+%Y-%m-%d' 2>/dev/null \
    || echo "unknown")

  if [ "${DAYS_LEFT}" -le "${EXPIRY_WARN_DAYS}" ]; then
    echo ""
    echo "=========================================="
    echo "  GITHUB_TOKEN EXPIRY WARNING"
    echo "  Expires : ${EXPIRY_DATE} (${DAYS_LEFT} day(s) remaining)"
    echo "  Rotate the token before it expires to keep"
    echo "  auto-pushes working."
    echo "  See docs/github-token-rotation.md for steps."
    echo "=========================================="
    echo ""
  fi
fi

# ---------------------------------------------------------------------------
# Push to GitHub
# ---------------------------------------------------------------------------

PUSH_ERROR=""
if PUSH_ERROR=$(git push -f "https://${GITHUB_TOKEN}@github.com/skillsamurai-hub/Replit-Skill-Samurai.git" main 2>&1); then
  exit 0
fi
PUSH_EXIT=$?

TIMESTAMP=$(date -u '+%Y-%m-%dT%H:%M:%SZ')

ISSUE_TITLE="⚠️ GitHub push failed after task merge — ${TIMESTAMP}"
ISSUE_BODY="## GitHub push failed\n\n**Timestamp:** \`${TIMESTAMP}\`\n\n**Error output:**\n\`\`\`\n${PUSH_ERROR}\n\`\`\`\n\n**What to do:** Re-push manually with:\n\`\`\`bash\ngit push -f \"https://\${GITHUB_TOKEN}@github.com/skillsamurai-hub/Replit-Skill-Samurai.git\" main\n\`\`\`"

# Use Python 3 to safely JSON-encode the payload (avoids shell quoting issues
# with special characters in the error message).
JSON_PAYLOAD=$(python3 -c "
import json, sys
title = sys.argv[1]
body  = sys.argv[2]
print(json.dumps({'title': title, 'body': body}))
" "${ISSUE_TITLE}" "${ISSUE_BODY}")

RESPONSE=$(curl -s -w "\n%{http_code}" -X POST \
  -H "Authorization: Bearer ${GITHUB_TOKEN}" \
  -H "Accept: application/vnd.github+json" \
  -H "X-GitHub-Api-Version: 2022-11-28" \
  -H "Content-Type: application/json" \
  https://api.github.com/repos/skillsamurai-hub/Replit-Skill-Samurai/issues \
  -d "${JSON_PAYLOAD}")

HTTP_CODE=$(echo "${RESPONSE}" | tail -n1)
ISSUE_URL=$(echo "${RESPONSE}" | head -n-1 \
  | python3 -c "import json,sys; d=json.load(sys.stdin); print(d.get('html_url','(unknown)'))" 2>/dev/null \
  || echo "(unknown)")

echo ""
echo "=========================================="
echo "  GITHUB PUSH FAILED"
echo "  Timestamp : ${TIMESTAMP}"
echo "  Error     : ${PUSH_ERROR}"
if [ "${HTTP_CODE}" = "201" ]; then
  echo "  Issue     : ${ISSUE_URL}"
else
  echo "  Issue creation failed (HTTP ${HTTP_CODE}) — check GITHUB_TOKEN"
fi
echo "  Manual re-push: git push -f ... main"
echo "=========================================="
echo ""
exit $PUSH_EXIT
