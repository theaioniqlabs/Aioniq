# AiONIQ MCP Configuration Blueprint

Purpose
-------
Starter configuration the Cursor agent can use to discover and call your MCP (Model Context Protocol) servers.
Includes both local (dev) and cloud-ready examples, capability manifests, example JSON-RPC calls, a .cursorrule snippet, and a beginner-safe checklist.

How to use
----------
1. Pick files to include in your repo: `aioniq-mcp-config.md`, `aioniq-mcp-config.json`, or `aioniq-mcp-config.txt`.
2. Replace placeholder hostnames, ports, and credentials with real values.
3. Implement `GET /.well-known/mcp` on each MCP server returning a manifest (examples below).
4. Add `workspace_storage/` and keep secrets out of repo, or use your secrets manager.

Target modes
------------
This file supports:
- Local dev mode (localhost endpoints)
- Cloud-ready mode (HTTPS endpoints)
Both are included; use what fits your environment.

Proposed MCP servers (included)
-------------------------------
1. GitHub MCP — repo read/write, PRs
2. Browser MCP — Playwright/Puppeteer (local) or Browserbase (managed)
3. Tavily MCP — structured web search / extraction
4. Firecrawl MCP — large-scale crawler (optional, later)
5. Context7 MCP — authoritative docs / API slices
6. Sequential Thinking MCP — multi-step planner (optional)
7. magic-mcp — frontend automation (optional)

Important placeholders you must replace
--------------------------------------
- <GITHUB_MCP_HOST_LOCAL>  e.g. http://localhost:7001
- <GITHUB_MCP_HOST_CLOUD>  e.g. https://mcp.github.aioniq.example.com
- <OIDC_ISSUER>             e.g. https://auth.example.com
- <CLIENT_ID> / <CLIENT_SECRET>
- <SERVICE_ACCOUNT_ID>

Minimal recommended scopes
-------------------------
- repo.read
- repo.write (enable only after audits)
- browser.run
- search.read
- crawl.read
- docs.read
- sequential.run

Example `.well-known/mcp` manifest (YAML)
----------------------------------------
Place at `GET /.well-known/mcp` on each server. This is the machine-readable discovery manifest.

```yaml
mcp_version: "1.0"
server_name: "aioniq-github-mcp"
host: "REPLACE_ME"
capabilities:
  - id: "repo.read"
    title: "Read repository files"
    description: "Return file contents and metadata"
    params:
      - name: "path"
        type: "string"
      - name: "ref"
        type: "string"
    requires_scope: "repo.read"
  - id: "repo.pr.create"
    title: "Create Pull Request"
    description: "Open a PR with changes"
    params:
      - name: "branch"
        type: "string"
      - name: "title"
        type: "string"
      - name: "body"
        type: "string"
    requires_scope: "repo.write"
auth:
  - type: "oauth2"
    token_url: "<OIDC_ISSUER>/oauth/token"
  - type: "mtls"
metadata:
  contact: "devops@aioniq.example.com"
  docs: "/docs/mcp/github"
```

Example JSON-RPC request (read file)
-----------------------------------
```http
POST /v1/call HTTP/1.1
Host: <GITHUB_MCP_HOST>
Content-Type: application/json
Authorization: Bearer <SHORT_LIVED_TOKEN>

{
  "jsonrpc": "2.0",
  "id": "req-1",
  "method": "repo.read",
  "params": {
    "path": "src/app/layout.tsx",
    "ref": "main",
    "max_bytes": 15000
  }
}
```

Example JSON-RPC response
-------------------------
```json
{
  "jsonrpc": "2.0",
  "id": "req-1",
  "result": {
    "content": "export default function Layout() { ... }",
    "mime": "text/typescript",
    "size": 1234
  }
}
```

Cursor `.cursorrule` snippet (basic)
-----------------------------------
Drop this in your repo root `.cursorrule` (adapt hosts/scopes):

```yaml
title: "AiONIQ: Default MCP routing"
priority: 100
rules:
  - when: |
      task mentions "read file" or "open file"
    do: |
      CALL_MCP(
        server_local="http://localhost:7001",
        server_cloud="https://mcp.github.aioniq.example.com",
        method="repo.read",
        params={"path": $path, "ref": $branch},
        auth_scope="repo.read"
      )

  - when: |
      task mentions "run browser script" or "login flow"
    do: |
      CALL_MCP(
        server_local="http://localhost:7010",
        server_cloud="https://browser.mcp.aioniq.example.com",
        method="browser.run",
        params={"script": $script, "session": $session},
        auth_scope="browser.run"
      )

notes:
  - "Agent must request human consent for any repo.write or destructive capability."
  - "All calls must use short-lived tokens issued by <OIDC_ISSUER>."
```

Security checklist (beginner)
-----------------------------
1. Use OIDC (Keycloak/Auth0) to issue short-lived tokens. Store client secrets in Vault.  
2. Start with read-only capabilities only. Enable write after audit and manual approval flows.  
3. Place MCP servers behind a reverse proxy (Traefik/nginx) with TLS.  
4. Add strict rate-limiting and WAF rules.  
5. Log every request and retain audit trails (request metadata only, not full sensitive payloads).  
6. Pin third-party MCP code to commit SHAs and review before install.

Quick local dev commands
------------------------
Assuming the MCP server is a Docker image exposing port 7001:

```bash
# Run a dev MCP server image
docker run --rm -p 7001:7001 -e NODE_ENV=development aioniq/mcp:dev

# Check the manifest
curl http://localhost:7001/.well-known/mcp

# Test a sample call (replace token)
curl -X POST http://localhost:7001/v1/call   -H "Authorization: Bearer <TOKEN>"   -H "Content-Type: application/json"   -d '{"jsonrpc":"2.0","id":"1","method":"repo.read","params":{"path":"README.md"}}'
```

What you must fill in (action items)
------------------------------------
- Register an OIDC provider and create a client for Cursor agents.
- Provision secrets in Vault or your cloud secrets manager.
- Deploy one MCP server locally and one cloud endpoint. Update manifests with real hostnames.
- Implement `/.well-known/mcp` on each server.
- Add `.cursorrule` to repo root and test basic read flows.

Further help
------------
If you want, I can:
- generate a minimal Node/Express MCP server template (dev-ready)
- generate a ready `.cursorrule` with your real hostnames
- produce OAuth token minting example using Keycloak

Which of those do you want next?
