# GitHub MCP Setup Guide

This document describes how to set up and use the GitHub Model Context Protocol (MCP) server for the AiONIQ project.

## Overview

The GitHub MCP server enables AI agents and assistants to interact with the GitHub repository `theaioniqlabs/Aioniq` through a standardized protocol. This allows for automated repository operations, code analysis, and workflow automation.

## Repository Information

- **Repository**: `theaioniqlabs/Aioniq`
- **URL**: https://github.com/theaioniqlabs/Aioniq
- **Owner**: theaioniqlabs

## Prerequisites

1. GitHub Personal Access Token (PAT) with appropriate scopes
2. Node.js and npm/pnpm installed
3. Cursor IDE with MCP support (or compatible MCP client)

## Setup Steps

### 1. Environment Configuration

Create a `.env.local` file in the project root (already gitignored):

```bash
GITHUB_TOKEN=your_github_token_here
GITHUB_REPO=theaioniqlabs/Aioniq
GITHUB_API_URL=https://api.github.com
```

**Security Note**: Never commit the `.env.local` file to the repository. It is already included in `.gitignore`.

### 2. GitHub Token Requirements

Your GitHub Personal Access Token should have the following scopes:

**Read Operations:**
- `repo` (read access)
- `read:org` (if accessing organization repos)

**Write Operations (optional, for write capabilities):**
- `repo` (full access)
- `write:packages` (if needed)

To create a token:
1. Go to GitHub Settings → Developer settings → Personal access tokens → Tokens (classic)
2. Generate new token (classic)
3. Select appropriate scopes
4. Copy token and add to `.env.local`

### 3. MCP Server Configuration

The MCP server configuration is stored in:
- `mcp/github/config.json` - Server configuration
- `.cursor/mcp.json` - Cursor IDE MCP configuration (uses GitHub Copilot API endpoint)
- `mcp-config.json` - General MCP configuration

### 4. GitHub Copilot MCP Endpoint

This project uses GitHub Copilot's MCP API endpoint directly:

**Endpoint**: `https://api.githubcopilot.com/mcp/`

**Configuration** (`.cursor/mcp.json`):
```json
{
  "mcpServers": {
    "github": {
      "url": "https://api.githubcopilot.com/mcp/",
      "headers": {
        "Authorization": "Bearer YOUR_GITHUB_TOKEN"
      }
    }
  }
}
```

**Note**: The token is stored directly in the configuration for GitHub Copilot API. Ensure `.cursor/mcp.json` is in `.gitignore` if it contains sensitive tokens.

## Usage

### Basic Operations

#### Read Repository Information

```json
{
  "jsonrpc": "2.0",
  "id": "1",
  "method": "repo.read",
  "params": {
    "path": "README.md",
    "ref": "main"
  }
}
```

#### List Repository Contents

```json
{
  "jsonrpc": "2.0",
  "id": "2",
  "method": "repo.list",
  "params": {
    "path": "frontend/src",
    "ref": "main"
  }
}
```

#### Create Pull Request

```json
{
  "jsonrpc": "2.0",
  "id": "3",
  "method": "pr.create",
  "params": {
    "title": "Feature: Add new component",
    "body": "Description of changes",
    "head": "feature-branch",
    "base": "main"
  }
}
```

### Using with Cursor IDE

Cursor IDE automatically detects the MCP configuration in `.cursor/mcp.json`. The GitHub MCP server will be available for:

- Reading repository files
- Analyzing code
- Creating pull requests (with approval)
- Managing issues
- Automating workflows

### Environment Variables

The MCP server uses the following environment variables:

- `GITHUB_TOKEN` - GitHub Personal Access Token (required)
- `GITHUB_REPO` - Repository in format `owner/repo` (optional, defaults to theaioniqlabs/Aioniq)
- `GITHUB_API_URL` - GitHub API base URL (optional, defaults to https://api.github.com)

## Security Best Practices

1. **Token Storage**: Always store tokens in `.env.local` (gitignored)
2. **Token Scopes**: Use minimal required scopes (start with read-only)
3. **Token Rotation**: Rotate tokens regularly (every 90 days recommended)
4. **Write Operations**: Enable approval requirements for write operations
5. **Rate Limiting**: Be aware of GitHub API rate limits (60 requests/hour for unauthenticated, 5000/hour for authenticated)

## Troubleshooting

### Authentication Errors

If you encounter authentication errors:
1. Verify `GITHUB_TOKEN` is set in `.env.local`
2. Check token has not expired
3. Verify token has required scopes
4. Ensure `.env.local` is being loaded by your environment

### Connection Issues

If the MCP server cannot connect:
1. Check GitHub API status: https://www.githubstatus.com/
2. Verify network connectivity
3. Check firewall/proxy settings
4. Review MCP server logs

### Rate Limiting

If you hit rate limits:
1. Implement request throttling
2. Use authenticated requests (higher limits)
3. Cache responses when possible
4. Implement exponential backoff

## Capabilities

### Read Capabilities

- Read repository files
- List repository contents
- Read commit history
- Read branch information
- Read pull request information
- Read issue information

### Write Capabilities (Require Approval)

- Create/update files
- Create pull requests
- Create/update issues
- Create commits
- Merge pull requests (with approval)

## API Reference

For detailed API documentation, see:
- [GitHub MCP Server Documentation](https://github.com/github/github-mcp-server)
- [Model Context Protocol Specification](https://modelcontextprotocol.io)

## Support

For issues or questions:
- Check the [GitHub MCP Server repository](https://github.com/github/github-mcp-server)
- Review MCP documentation
- Contact: devops@aioniq.example.com

## Token Rotation

To rotate your GitHub token:

1. Generate a new token in GitHub settings
2. Update `GITHUB_TOKEN` in `.env.local`
3. Test the connection
4. Revoke the old token after confirming new token works
5. Update any CI/CD systems or other services using the token

---

**Last Updated**: 2025-01-09
**Version**: 1.0.0

