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
const crypto = require("crypto");
const fs = require("fs/promises");
const path = require("path");
const app = express();
const PORT = Number(process.env.PORT || 3000);
const API_ORIGIN = "https://asuapp2dev.prod.acquia-sites.com";
// API_PATH_PREFIX is for local routing within this server
const API_PATH_PREFIX = "/api/v1";
// SEARCH_API_PATH is for upstream URL construction
const SEARCH_API_PATH = `${API_PATH_PREFIX}/`;
const CACHE_TTL_MS = 24 * 60 * 60 * 1000;
const CACHE_DIR = path.join(__dirname, ".cache", "api-response-cache");

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

function normalizeQuery(query = {}) {
  const normalized = {};
  for (const key of Object.keys(query).sort()) {
    const value = query[key];
    if (Array.isArray(value)) {
      normalized[key] = [...value].map(String);
      continue;
    }
    if (value === undefined) {
      continue;
    }
    normalized[key] = String(value);
  }
  return normalized;
}

function getCacheFilePath({ path, method = "GET", query, useSearchApiPath = true }) {
  const cacheKeyData = {
    path,
    method,
    query: normalizeQuery(query),
    useSearchApiPath,
  };
  const hash = crypto
    .createHash("sha256")
    .update(JSON.stringify(cacheKeyData))
    .digest("hex");
  return pathJoinSafe(CACHE_DIR, `${hash}.json`);
}

function pathJoinSafe(...parts) {
  return path.join(...parts);
}

function shouldUseCache({ path, method = "GET" }) {
  if (method.toUpperCase() !== "GET") {
    return false;
  }
  // Token values should always come from upstream to avoid stale auth failures.
  return path !== "/session/token";
}

function createProxyLikeResponse({ status, contentType, bodyText }) {
  return {
    status,
    headers: {
      get: headerName =>
        headerName && headerName.toLowerCase() === "content-type"
          ? contentType
          : null,
    },
    text: async () => bodyText,
    json: async () => JSON.parse(bodyText),
  };
}

async function readCachedResponse(cacheFilePath) {
  try {
    const stats = await fs.stat(cacheFilePath);
    const cacheAgeMs = Date.now() - stats.mtimeMs;
    if (cacheAgeMs > CACHE_TTL_MS) {
      return null;
    }

    const fileText = await fs.readFile(cacheFilePath, "utf8");
    const parsed = JSON.parse(fileText);
    if (
      typeof parsed?.status !== "number" ||
      typeof parsed?.bodyText !== "string"
    ) {
      return null;
    }

    return createProxyLikeResponse({
      status: parsed.status,
      contentType: parsed.contentType || "text/plain",
      bodyText: parsed.bodyText,
    });
  } catch (_error) {
    return null;
  }
}

async function writeCachedResponse(cacheFilePath, response) {
  try {
    await fs.mkdir(CACHE_DIR, { recursive: true });
    await fs.writeFile(cacheFilePath, JSON.stringify(response), "utf8");
  } catch (error) {
    console.warn("[API] Cache write failed:", error.message);
  }
}

async function proxyRequestWithCache(options) {
  if (!shouldUseCache(options)) {
    return proxyRequest(options);
  }

  const cacheFilePath = getCacheFilePath(options);
  const cachedResponse = await readCachedResponse(cacheFilePath);
  if (cachedResponse) {
    console.log("[API] Cache HIT", options.path);
    return cachedResponse;
  }

  console.log("[API] Cache MISS", options.path);
  const upstreamResponse = await proxyRequest(options);
  const bodyText = await upstreamResponse.text();
  const contentType = upstreamResponse.headers.get("content-type") || "text/plain";

  if (upstreamResponse.status >= 200 && upstreamResponse.status < 300) {
    await writeCachedResponse(cacheFilePath, {
      status: upstreamResponse.status,
      contentType,
      bodyText,
    });
  }

  return createProxyLikeResponse({
    status: upstreamResponse.status,
    contentType,
    bodyText,
  });
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
    const upstreamResponse = await proxyRequestWithCache({
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
    const upstreamResponse = await proxyRequestWithCache({
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
