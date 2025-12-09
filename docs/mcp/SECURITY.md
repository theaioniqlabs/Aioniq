# MCP Security Guidelines

## ⚠️ CRITICAL: Never Commit API Keys or Credentials

This document outlines security best practices for MCP configuration in the AiONIQ project.

## Files That MUST Never Contain Real Credentials

### ❌ Never Commit These Files with Real Keys:
- `.cursor/mcp.json` - Contains actual API keys (gitignored)
- `.env.local` - Contains all environment variables (gitignored)
- `*cred*.txt` - Any credential text files (gitignored)
- `**/All MCP cred.txt` - Credentials file (gitignored)
- `mcp/**/.env.example` - Example files that might have been filled in (gitignored)

### ✅ Safe to Commit (Placeholders Only):
- `.cursor/mcp.json.example` - Template with placeholders
- `mcp-config.json` - Uses `${VAR_NAME}` placeholders
- `docs/mcp/credentials-reference.md` - Only placeholders, no real keys
- `docs/mcp/*.md` - Documentation files (no real credentials)

## Pre-Commit Checklist

Before every commit, verify:

1. ✅ No actual API keys in any `.md`, `.json`, or `.txt` files
2. ✅ All credentials use placeholders like `${GITHUB_TOKEN}` or `YOUR_KEY_HERE`
3. ✅ `.env.local` is not staged
4. ✅ `.cursor/mcp.json` is not staged
5. ✅ No files from `temp Folder/` or `@@temp Folder/` are staged
6. ✅ Run `git status` to verify no credential files are included

## Git Commands to Check Before Pushing

```bash
# Check what will be committed
git status

# Verify no credential files
git diff --cached --name-only | grep -i "cred\|secret\|token\|key\|.env"

# Check for API key patterns in staged files
git diff --cached | grep -i "github_pat_\|tvly-\|fc-\|api.*key"
```

## If Credentials Were Accidentally Committed

1. **Immediately rotate all exposed keys**:
   - GitHub: Revoke token and create new one
   - Tavily: Regenerate API key
   - Firecrawl: Regenerate API key
   - Magic: Regenerate API key

2. **Remove from git history**:
   ```bash
   git filter-branch --force --index-filter \
     "git rm --cached --ignore-unmatch PATH_TO_FILE" \
     --prune-empty --tag-name-filter cat -- --all
   ```

3. **Force push** (coordinate with team):
   ```bash
   git push origin --force --all
   ```

4. **Update .gitignore** to prevent future commits

## Environment Variable Pattern

Always use environment variables in configuration:

```json
{
  "mcpServers": {
    "github": {
      "headers": {
        "Authorization": "Bearer ${GITHUB_TOKEN}"
      }
    }
  }
}
```

**Never** hardcode:
```json
{
  "mcpServers": {
    "github": {
      "headers": {
        "Authorization": "Bearer github_pat_11B2HZTDY0..."  // ❌ NEVER DO THIS
      }
    }
  }
}
```

## .gitignore Protection

The `.gitignore` file includes comprehensive patterns to prevent credential commits:

- All `.env*` files
- All `*cred*` files
- All `*secret*` files
- `.cursor/mcp.json` (actual config)
- `temp Folder/` and `@@temp Folder/`

## Review Process

Before merging any PR:
1. Review all changed files for credential patterns
2. Check for hardcoded API keys
3. Verify environment variables are used
4. Confirm `.gitignore` is up to date

---

**Remember**: If you're unsure whether a file contains credentials, **don't commit it**. Ask for review first.

