/**
 * Development backend server for Web Directory API endpoints.
 * Proxies requests to the real API for Storybook development.
 *
 * Endpoints:
 * - GET /session/token
 * - GET /webdir-profiles/*
 * - POST /webdir-profiles/*
 */

const express = require("express");
const app = express();
const PORT = Number(process.env.PORT || 3000);
const API_ORIGIN = "https://asuapp2dev.prod.acquia-sites.com";
// API_PATH_PREFIX is for local routing within this server
const API_PATH_PREFIX = "/api/v1";
// SEARCH_API_PATH is for upstream URL construction
const SEARCH_API_PATH = `${API_PATH_PREFIX}/`;

app.use(express.json());

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "GET,POST,OPTIONS");
  res.setHeader(
    "Access-Control-Allow-Headers",
    "Content-Type, X-CSRF-Token, Authorization"
  );

  if (req.method === "OPTIONS") {
    res.sendStatus(204);
    return;
  }

  next();
});

function getTargetUrl(path, queryParams, useSearchApiPath = true) {
  const baseUrl = useSearchApiPath
    ? new URL(SEARCH_API_PATH, API_ORIGIN)
    : new URL("/", API_ORIGIN);
  const normalizedPath = path.startsWith("/") ? path.slice(1) : path;
  const url = new URL(normalizedPath, baseUrl);
  if (queryParams) {
    for (const [key, value] of Object.entries(queryParams)) {
      if (value !== undefined) {
        url.searchParams.append(key, value);
      }
    }
  }
  return url;
}

async function proxyRequest({
  path,
  method = "GET",
  query,
  body,
  headers = {},
  useSearchApiPath = true,
}) {
  const targetUrl = getTargetUrl(path, query, useSearchApiPath);
  const requestOptions = {
    method,
    headers,
  };

  if (body !== undefined) {
    requestOptions.body = JSON.stringify(body);
    requestOptions.headers = {
      "Content-Type": "application/json",
      ...headers,
    };
  }

  return fetch(targetUrl, requestOptions);
}

function withApiPrefix(path) {
  return [path, `${API_PATH_PREFIX}${path}`];
}

function toUpstreamPath(requestPath) {
  if (requestPath.startsWith(`${API_PATH_PREFIX}/`)) {
    return requestPath.slice(API_PATH_PREFIX.length + 1);
  }
  if (requestPath.startsWith("/")) {
    return requestPath.slice(1);
  }
  return requestPath;
}

async function relayUpstreamResponse(upstreamResponse, res) {
  const contentType = upstreamResponse.headers.get("content-type") || "";

  if (contentType.includes("application/json")) {
    const payload = await upstreamResponse.json();
    res.status(upstreamResponse.status).json(payload);
    return;
  }

  const payload = await upstreamResponse.text();
  res
    .status(upstreamResponse.status)
    .type(contentType || "text/plain")
    .send(payload);
}

// Routes
app.get(withApiPrefix("/session/token"), async (req, res) => {
  console.log("[API] GET /session/token");
  try {
    const upstreamResponse = await proxyRequest({
      path: "/session/token",
      method: "GET",
      useSearchApiPath: false,
    });
    const token = await upstreamResponse.text();
    res.status(upstreamResponse.status).send(token);
  } catch (error) {
    console.error("[API] Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.get(withApiPrefix("/webdir-profiles/*"), async (req, res) => {
  console.log("[API] GET", req.path, req.query);
  try {
    const upstreamResponse = await proxyRequest({
      path: toUpstreamPath(req.path),
      method: "GET",
      query: req.query,
    });
    await relayUpstreamResponse(upstreamResponse, res);
  } catch (error) {
    console.error("[API] Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

app.post(withApiPrefix("/webdir-profiles/*"), async (req, res) => {
  console.log("[API] POST", req.path, req.body);
  try {
    const upstreamResponse = await proxyRequest({
      path: toUpstreamPath(req.path),
      method: "POST",
      query: req.query,
      body: req.body,
      headers: {
        "X-CSRF-Token": req.headers["x-csrf-token"] || "",
      },
    });
    await relayUpstreamResponse(upstreamResponse, res);
  } catch (error) {
    console.error("[API] Error:", error.message);
    res.status(500).json({ error: error.message });
  }
});

// Health check endpoint
app.get("/health", (req, res) => {
  res.json({ status: "ok", timestamp: new Date().toISOString() });
});

// Start server
app.listen(PORT, () => {
  console.log(
    `\n[Web Directory API Server] Running on http://localhost:${PORT}`
  );
  console.log(
    `[Web Directory API Server] Proxy target: ${API_ORIGIN}${SEARCH_API_PATH}\n`
  );
});

// Graceful shutdown
process.on("SIGTERM", () => {
  console.log("\n[Web Directory API Server] Shutting down...\n");
  process.exit(0);
});
