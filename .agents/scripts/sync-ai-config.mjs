#!/usr/bin/env node

import { mkdir, readFile, readdir, unlink, writeFile } from "node:fs/promises";
import path from "node:path";
import process from "node:process";

const MCP_SOURCE = ".agents/config/mcp-servers.json";
const HOST_SOURCE = ".agents/config/agent-hosts.json";
const ROLE_DIRECTORY = ".agents/roles";
const KIRO_AGENTS = ".agents/adapters/kiro/agents";
const CODEX_CONFIG = ".codex/config.toml";
const CODEX_AGENTS = ".codex/agents";
const GITHUB_AGENTS = ".github/agents";
const SYNC_COMMAND = "node .agents/scripts/sync-ai-config.mjs";
const CHECK = process.argv.includes("--check");

const quote = value => JSON.stringify(String(value));
const tomlKey = value => String(value).replaceAll("-", "_");
const unique = values => [...new Set(values)];
const environmentReference = value => {
  const match = /^\$([A-Za-z_][A-Za-z0-9_]*)$/.exec(String(value));
  return match?.[1] ?? null;
};
const parseMetadataValue = value => {
  const trimmed = value.trim();
  return trimmed.startsWith("[") || trimmed.startsWith("{")
    ? JSON.parse(trimmed)
    : trimmed;
};

const parseRole = (fileName, source) => {
  const match = /^---\r?\n([\s\S]*?)\r?\n---\r?\n/.exec(source);
  if (!match) throw new Error(`${ROLE_DIRECTORY}/${fileName} needs YAML frontmatter`);
  const metadata = {};
  for (const line of match[1].split(/\r?\n/)) {
    if (!line.trim()) continue;
    const separator = line.indexOf(":");
    if (separator < 1) throw new Error(`Invalid role metadata: ${line}`);
    metadata[line.slice(0, separator).trim()] = parseMetadataValue(line.slice(separator + 1));
  }
  const name = path.basename(fileName, ".md");
  for (const field of ["description", "model_profile", "capabilities", "auto_approve", "write_scope", "skills", "hooks"]) {
    if (metadata[field] === undefined) throw new Error(`${ROLE_DIRECTORY}/${fileName} needs ${field}`);
  }
  for (const field of ["capabilities", "auto_approve", "skills", "hooks"]) {
    if (!Array.isArray(metadata[field])) throw new Error(`${ROLE_DIRECTORY}/${fileName} ${field} must be a JSON array`);
  }
  return { name, metadata };
};

const renderServer = (name, server) => {
  const lines = [`[mcp_servers.${tomlKey(name)}]`];
  if (server.command) lines.push(`command = ${quote(server.command)}`);
  if (server.args) lines.push(`args = [${server.args.map(quote).join(", ")}]`);
  if (server.url) lines.push(`url = ${quote(server.url)}`);
  if (server.disabled === true) lines.push("enabled = false");
  const environmentEntries = Object.entries(server.env ?? {});
  const forwardedVariables = environmentEntries.map(([, value]) => environmentReference(value)).filter(Boolean);
  const fixedEnvironment = environmentEntries.filter(([, value]) => !environmentReference(value));
  if (forwardedVariables.length) lines.push(`env_vars = [${forwardedVariables.map(quote).join(", ")}]`);
  if (fixedEnvironment.length) {
    lines.push("", `[mcp_servers.${tomlKey(name)}.env]`);
    for (const [environmentKey, value] of fixedEnvironment) lines.push(`${environmentKey} = ${quote(value)}`);
  }
  return lines.join("\n");
};

const renderCodexConfig = servers => `${[
  "# Generated from .agents/config/mcp-servers.json.",
  `# Run: ${SYNC_COMMAND}`,
  "# Do not edit MCP entries in this file directly.",
].join("\n")}\n\n[agents]\nmax_concurrent_threads_per_session = 4\n\n${Object.entries(servers).map(([name, server]) => renderServer(name, server)).join("\n\n")}\n`;

const roleReferences = role => {
  const references = [`\`.agents/roles/${role.name}.md\``];
  if (role.metadata.guidance) references.push(`\`${role.metadata.guidance}\``);
  return references.join(" and ");
};

const capabilityContract = (role, hosts) => {
  const capabilities = role.metadata.capabilities.map(name => {
    const definition = hosts.capabilities[name];
    if (!definition) throw new Error(`Unknown capability '${name}' in ${role.name}`);
    return definition.description;
  });
  const skillText = role.metadata.skills.length
    ? `Use these shared skills when applicable: ${role.metadata.skills.map(name => `\`${name}\``).join(", ")}.`
    : "No additional shared skills are registered.";
  const hookFallbacks = role.metadata.hooks.map(name => {
    const hook = hosts.hooks[name];
    if (!hook) throw new Error(`Unknown hook '${name}' in ${role.name}`);
    return hook.fallback;
  });
  const delegates = role.metadata.delegates?.length
    ? `Delegation is limited to: ${role.metadata.delegates.map(name => `\`${name}\``).join(", ")}.`
    : null;
  return [
    `Model profile intent: ${role.metadata.model_profile}.`,
    `Capability contract: ${capabilities.join(", ")}.`,
    `Write scope: ${role.metadata.write_scope}.`,
    skillText,
    delegates,
    ...hookFallbacks,
  ].filter(Boolean).join("\n");
};

const resolveModel = (role, hosts, host) => {
  const profile = hosts.modelProfiles[role.metadata.model_profile];
  if (!profile?.[host]) throw new Error(`Unknown ${host} model profile '${role.metadata.model_profile}' in ${role.name}`);
  return profile[host];
};

const kiroTools = (capabilities, hosts) => unique(capabilities.flatMap(name => {
  const definition = hosts.capabilities[name];
  if (!definition) throw new Error(`Unknown capability '${name}'`);
  return definition.kiroTools ?? [];
}));

const githubTools = (capabilities, hosts) => unique(capabilities.flatMap(name => {
  const definition = hosts.capabilities[name];
  if (!definition) throw new Error(`Unknown capability '${name}'`);
  return definition.githubTools ?? [];
}));

const renderKiroAgent = (role, hosts) => {
  const agent = {
    name: `acp-${role.name}`,
    model: resolveModel(role, hosts, "kiro"),
    description: role.metadata.description,
    prompt: `file://../../.agents/roles/${role.name}.md`,
    tools: kiroTools(role.metadata.capabilities, hosts),
    allowedTools: kiroTools(role.metadata.auto_approve, hosts),
    resources: ["file://../steering/**/*.md", ...role.metadata.skills.map(name => `skill://.kiro/skills/${name}/SKILL.md`)],
  };
  if (role.metadata.delegates?.length) {
    const delegates = role.metadata.delegates.map(name => `acp-${name}`);
    agent.toolsSettings = { subagent: { availableAgents: delegates, trustedAgents: delegates } };
  } else if (role.metadata.write_scope === "pipeline" && role.metadata.capabilities.includes("write")) {
    agent.toolsSettings = { write: { allowedPaths: [".pipeline/**"], deniedPaths: ["packages/**", "docroot/**", "src/**"] } };
  }
  for (const hookName of role.metadata.hooks) {
    const definition = hosts.hooks[hookName];
    if (!definition) throw new Error(`Unknown hook '${hookName}' in ${role.name}`);
    agent.hooks ??= {};
    agent.hooks[definition.kiroEvent] ??= [];
    agent.hooks[definition.kiroEvent].push({
      ...(definition.matcher ? { matcher: definition.matcher } : {}),
      command: definition.command,
      description: definition.description,
    });
  }
  if (role.metadata.shortcut) agent.keyboardShortcut = role.metadata.shortcut;
  if (role.metadata.welcome_message) agent.welcomeMessage = role.metadata.welcome_message;
  return `${JSON.stringify(agent, null, 2)}\n`;
};

const renderCodexAgent = (role, hosts) => {
  const model = resolveModel(role, hosts, "codex");
  return `# Generated from .agents/roles/${role.name}.md.
# Run: ${SYNC_COMMAND}
# Do not edit this file directly.
name = ${quote(role.name)}
description = ${quote(role.metadata.description)}
model = ${quote(model.model)}
model_reasoning_effort = ${quote(model.reasoningEffort)}
developer_instructions = """
Read and follow ${roleReferences(role)}. Treat the shared role and its frontmatter
as the canonical instruction and capability source.

${capabilityContract(role, hosts)}
"""
`;
};

const renderGithubAgent = (role, hosts) => `---
name: ${role.name}
description: ${role.metadata.description}
tools: ${JSON.stringify(githubTools(role.metadata.capabilities, hosts))}
---

<!-- Generated from .agents/roles/${role.name}.md. Run: ${SYNC_COMMAND} -->

Read and follow ${roleReferences(role)}. Treat the shared role and its frontmatter
as the canonical instruction and capability source.

${capabilityContract(role, hosts)}
`;

const readJson = async file => JSON.parse(await readFile(file, "utf8"));
const mcpSource = await readJson(MCP_SOURCE);
const hosts = await readJson(HOST_SOURCE);
if (!mcpSource.mcpServers || typeof mcpSource.mcpServers !== "object" || Array.isArray(mcpSource.mcpServers)) {
  throw new Error(`${MCP_SOURCE} must contain an mcpServers object`);
}

const expectedFiles = new Map([[CODEX_CONFIG, renderCodexConfig(mcpSource.mcpServers)]]);
const roleFiles = (await readdir(ROLE_DIRECTORY)).filter(file => file.endsWith(".md")).sort();
for (const file of roleFiles) {
  const role = parseRole(file, await readFile(path.join(ROLE_DIRECTORY, file), "utf8"));
  expectedFiles.set(path.join(KIRO_AGENTS, `acp-${role.name}.json`), renderKiroAgent(role, hosts));
  expectedFiles.set(path.join(CODEX_AGENTS, `${role.name}.toml`), renderCodexAgent(role, hosts));
  expectedFiles.set(path.join(GITHUB_AGENTS, `${role.name}.agent.md`), renderGithubAgent(role, hosts));
}

const generatedDirectories = new Map([
  [KIRO_AGENTS, { extension: ".json", marker: "file://../../.agents/roles/" }],
  [CODEX_AGENTS, { extension: ".toml", marker: "Generated from .agents/roles/" }],
  [GITHUB_AGENTS, { extension: ".agent.md", marker: "Generated from .agents/roles/" }],
]);
const staleFiles = [];
for (const [directory, definition] of generatedDirectories) {
  const expectedInDirectory = new Set([...expectedFiles.keys()].filter(file => path.dirname(file) === directory));
  for (const file of await readdir(directory).catch(() => [])) {
    const filePath = path.join(directory, file);
    const content = await readFile(filePath, "utf8").catch(() => "");
    if (file.endsWith(definition.extension) && !expectedInDirectory.has(filePath) && content.includes(definition.marker)) staleFiles.push(filePath);
  }
}

const changedFiles = [];
for (const [file, expected] of expectedFiles) {
  const current = await readFile(file, "utf8").catch(() => "");
  if (current !== expected) changedFiles.push(file);
}

if (CHECK) {
  const outOfDate = [...changedFiles, ...staleFiles];
  if (outOfDate.length) {
    console.error(`Generated AI configuration is stale:\n${outOfDate.map(file => `  - ${file}`).join("\n")}\nRun: ${SYNC_COMMAND}`);
    process.exitCode = 1;
  } else {
    console.log("Generated AI configuration is current.");
  }
} else {
  for (const [file, content] of expectedFiles) {
    await mkdir(path.dirname(file), { recursive: true });
    await writeFile(file, content);
  }
  for (const file of staleFiles) await unlink(file);
  console.log(`Synchronized ${expectedFiles.size} generated AI configuration files.`);
  if (staleFiles.length) console.log(`Removed ${staleFiles.length} stale adapter file(s).`);
}
