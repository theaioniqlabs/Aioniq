# MCP Credentials Reference

**⚠️ SECURITY WARNING**: This file contains credential placeholders. Actual credentials should NEVER be committed to the repository.

## Credential Locations

All actual credentials should be stored in:
- `.env.local` (for environment variables)
- `.cursor/mcp.json` (for Cursor IDE MCP configuration)

Both files are gitignored.

## API Keys and Tokens

### GitHub MCP
- **Token**: GitHub Personal Access Token
- **Format**: `github_pat_...`
- **Location**: `.env.local` as `GITHUB_TOKEN`
- **Get from**: https://github.com/settings/tokens

### Tavily MCP
- **API Key**: `YOUR_TAVILY_API_KEY_HERE` (format: `tvly-dev-...`)
- **Endpoint**: `https://tavily.api.tadata.com/mcp/tavily/noun-stream-donut-skpasx`
- **Location**: `.env.local` as `TAVILY_API_KEY`
- **Get from**: https://tavily.com

### Firecrawl MCP
- **API Key**: `YOUR_FIRECRAWL_API_KEY_HERE` (format: `fc-...`)
- **Location**: `.env.local` as `FIRECRAWL_API_KEY`
- **Get from**: https://www.firecrawl.dev/

### Magic MCP
- **API Key**: `YOUR_MAGIC_API_KEY_HERE` (format: hex string)
- **Package**: `21st-dev/magic@latest`
- **Location**: `.env.local` as `MAGIC_API_KEY`
- **Get from**: https://21st.dev

## Setup Instructions

1. Copy `.env.local.example` to `.env.local`
2. Fill in all API keys and tokens
3. Copy `.cursor/mcp.json.example` to `.cursor/mcp.json`
4. Fill in all API keys and tokens in `.cursor/mcp.json`
5. Restart Cursor IDE to load MCP configurations

## Security Notes

- Never commit actual credentials
- Rotate keys regularly (every 90 days)
- Use environment variables when possible
- Review git history if credentials were accidentally committed
- Revoke and regenerate keys if exposed

---

**Last Updated**: 2025-01-09

