# All MCP Servers Setup Guide

This document describes the setup for all Model Context Protocol (MCP) servers configured for the AiONIQ project.

## Overview

The AiONIQ project uses multiple MCP servers to enable AI agents to interact with various services:

1. **GitHub MCP** - Repository management and code operations
2. **Tavily MCP** - Structured web search and extraction
3. **Firecrawl MCP** - Large-scale web crawling
4. **Magic MCP** - Frontend automation and UI component generation

## Prerequisites

1. All required API keys and tokens
2. Node.js and npm/pnpm installed
3. Cursor IDE with MCP support (or compatible MCP client)

## Environment Configuration

Create a `.env.local` file in the project root with all API keys:

```bash
# GitHub
GITHUB_TOKEN=your_github_token_here
GITHUB_REPO=theaioniqlabs/Aioniq

# Tavily
TAVILY_API_KEY=your_tavily_api_key_here

# Firecrawl
FIRECRAWL_API_KEY=your_firecrawl_api_key_here

# Magic
MAGIC_API_KEY=your_magic_api_key_here
```

**Security Note**: Never commit the `.env.local` file. It is already included in `.gitignore`.

## MCP Server Configurations

### 1. GitHub MCP

**Purpose**: Repository management, code operations, PRs, issues

**Configuration**:
- **Endpoint**: `https://api.githubcopilot.com/mcp/`
- **Authentication**: Bearer token
- **Token Source**: `GITHUB_TOKEN` environment variable

**Capabilities**:
- Read repository files
- Create/update files
- Create pull requests
- Manage issues
- Read commit history

**Setup**:
1. Get GitHub Personal Access Token from https://github.com/settings/tokens
2. Add to `.env.local` as `GITHUB_TOKEN`
3. Configure in `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer ${GITHUB_TOKEN}"
      }
    }
  }
}
```

**Documentation**: See [docs/mcp/github-setup.md](./github-setup.md)

---

### 2. Tavily MCP

**Purpose**: Structured web search and content extraction

**Configuration**:
- **Endpoint**: `https://tavily.api.tadata.com/mcp/tavily/noun-stream-donut-skpasx`
- **Authentication**: API key in header
- **API Key Source**: `TAVILY_API_KEY` environment variable

**Capabilities**:
- Structured web search
- Content extraction
- Real-time information retrieval

**Setup**:
1. Get Tavily API key from https://tavily.com
2. Add to `.env.local` as `TAVILY_API_KEY`
3. Configure in `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "tavily": {
      "url": "https://tavily.api.tadata.com/mcp/tavily/noun-stream-donut-skpasx",
      "headers": {
        "X-API-Key": "${TAVILY_API_KEY}"
      }
    }
  }
}
```

---

### 3. Firecrawl MCP

**Purpose**: Large-scale web crawling and content extraction

**Configuration**:
- **Command**: `npx -y firecrawl-mcp`
- **Authentication**: API key via environment variable
- **API Key Source**: `FIRECRAWL_API_KEY` environment variable

**Capabilities**:
- Crawl entire websites
- Scrape individual pages
- Extract structured content
- Handle JavaScript-rendered pages

**Setup**:
1. Get Firecrawl API key from https://www.firecrawl.dev/
2. Add to `.env.local` as `FIRECRAWL_API_KEY`
3. Configure in `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "firecrawl-mcp": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": {
        "FIRECRAWL_API_KEY": "${FIRECRAWL_API_KEY}"
      }
    }
  }
}
```

---

### 4. Magic MCP

**Purpose**: Frontend automation and UI component generation

**Configuration**:
- **Command**: `npx -y 21st-dev/magic@latest`
- **Authentication**: API key via environment variable
- **API Key Source**: `MAGIC_API_KEY` environment variable

**Capabilities**:
- Generate UI components from descriptions
- Automate frontend tasks
- Component library integration
- Design system integration

**Setup**:
1. Get Magic API key from https://21st.dev
2. Add to `.env.local` as `MAGIC_API_KEY`
3. Configure in `.cursor/mcp.json`:

```json
{
  "mcpServers": {
    "magic-mcp": {
      "command": "npx",
      "args": ["-y", "21st-dev/magic@latest"],
      "env": {
        "MAGIC_API_KEY": "${MAGIC_API_KEY}"
      }
    }
  }
}
```

---

## Complete Cursor MCP Configuration

Create `.cursor/mcp.json` with all servers:

```json
{
  "mcpServers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer YOUR_GITHUB_TOKEN"
      }
    },
    "tavily": {
      "url": "https://tavily.api.tadata.com/mcp/tavily/noun-stream-donut-skpasx",
      "headers": {
        "X-API-Key": "YOUR_TAVILY_API_KEY"
      }
    },
    "firecrawl-mcp": {
      "command": "npx",
      "args": ["-y", "firecrawl-mcp"],
      "env": {
        "FIRECRAWL_API_KEY": "YOUR_FIRECRAWL_API_KEY"
      }
    },
    "magic-mcp": {
      "command": "npx",
      "args": ["-y", "21st-dev/magic@latest"],
      "env": {
        "MAGIC_API_KEY": "YOUR_MAGIC_API_KEY"
      }
    }
  }
}
```

**Important**: Replace `YOUR_*_KEY` placeholders with actual API keys. This file is gitignored for security.

## Security Best Practices

1. **Never commit API keys**: All keys should be in `.env.local` or `.cursor/mcp.json` (both gitignored)
2. **Use environment variables**: Prefer `${VAR_NAME}` syntax in configs
3. **Rotate keys regularly**: Update API keys every 90 days
4. **Minimal scopes**: Use only required permissions for each service
5. **Monitor usage**: Check API usage dashboards regularly

## Testing MCP Connections

### Test GitHub MCP
```bash
# Verify token works
curl -H "Authorization: Bearer $GITHUB_TOKEN" https://api.github.com/user
```

### Test Tavily MCP
```bash
# Check endpoint accessibility
curl -H "X-API-Key: $TAVILY_API_KEY" https://tavily.api.tadata.com/mcp/tavily/noun-stream-donut-skpasx
```

### Test Firecrawl MCP
```bash
# Run MCP server locally
npx -y firecrawl-mcp
```

### Test Magic MCP
```bash
# Run MCP server locally
npx -y 21st-dev/magic@latest
```

## Troubleshooting

### Connection Issues

1. **Verify API keys**: Check all keys are correct in `.env.local`
2. **Check network**: Ensure endpoints are accessible
3. **Review logs**: Check Cursor IDE MCP logs for errors
4. **Test individually**: Test each MCP server separately

### Authentication Errors

1. **Token expiration**: Some tokens expire - regenerate if needed
2. **Scope issues**: Verify tokens have required permissions
3. **Environment loading**: Ensure `.env.local` is being loaded

### Rate Limiting

1. **GitHub**: 5,000 requests/hour (authenticated)
2. **Tavily**: Check your plan limits
3. **Firecrawl**: Check your plan limits
4. **Magic**: Check your plan limits

## Usage Examples

### Using GitHub MCP
- "Read the README.md file from the repository"
- "Create a new branch for feature X"
- "List all open pull requests"

### Using Tavily MCP
- "Search for latest Next.js 14 features"
- "Find information about TypeScript 5.0"
- "Get recent news about AI development"

### Using Firecrawl MCP
- "Crawl the documentation site"
- "Extract all headings from this URL"
- "Get structured data from this page"

### Using Magic MCP
- "Generate a button component with hover effects"
- "Create a card component matching our design system"
- "Build a form component with validation"

## Support

For issues with specific MCP servers:
- **GitHub**: [GitHub MCP Server](https://github.com/github/github-mcp-server)
- **Tavily**: [Tavily Documentation](https://docs.tavily.com)
- **Firecrawl**: [Firecrawl Documentation](https://docs.firecrawl.dev)
- **Magic**: [21st.dev Documentation](https://21st.dev/docs)

---

**Last Updated**: 2025-01-09
**Version**: 1.0.0

