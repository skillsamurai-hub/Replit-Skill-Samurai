#!/bin/bash
set -e
pnpm install --frozen-lockfile
pnpm --filter db push

# Capture both stdout/stderr and the exit code without triggering `set -e`.
# Using an if/else block is the POSIX-safe way to run a command whose failure
# we want to handle ourselves rather than letting errexit terminate the script.
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
