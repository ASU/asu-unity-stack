# Architecture Lock — Shared AI Configuration: Copilot Native Adapter

Status: LOCKED against the user's approved recommendation (2026-11-18).

Artifact exception: `.pipeline/design-doc.md` is the existing, approved Charter
Bubbles specification, and `.pipeline/impl-report.md` has pre-existing user
changes. The orchestrator explicitly directed use of this task-specific path to
preserve those artifacts. Implementation and review use this document and their
own `ai-config-*` reports. Production changes stay in AI configuration files.

## 1. Problem framing and scope

The prior comparison established the problem, affected hosts, required behavior,
and exclusions; the user authorized that concrete recommendation with “do the
recommended action.” Those answers satisfy the framing questions without asking
the user to repeat decisions.

### Problem statement

Copilot developers need generated configuration that applies the shared
pipeline's supported native controls and integration inventory, because the
current adapter reduces models, delegation restrictions, and hooks to prose and
does not configure VS Code's actual MCP inventory.

### Stakeholders

- Copilot users need discoverable orchestration, working report creation, and
  the same Jira/Figma/Storybook definitions maintained for other hosts.
- Kiro and Codex users need their generated adapters to remain coherent with
  the corrected role capability contract.
- Maintainers need one source of truth and offline regression checks that catch
  stale or incomplete generated adapters before commit.

### Success criteria

1. Each generated Copilot agent has an explicit model preference from the shared
   host mapping. Implementation and independent review prefer different model
   families. Fallback lists remain within the respective family.
2. Only the orchestrator is user-invocable; specialists remain callable as
   subagents. The orchestrator emits the native `agents` allowlist.
3. Agent hooks initialize `.pipeline`, log orchestrator completion, and guard
   reviewer/visual edit tools. The output uses current Copilot hook schemas.
4. The reviewer can create `.pipeline/review-report.md` but is instructed and,
   for supported edit tools, guarded against implementation-file edits.
5. `.vscode/mcp.json` is generated from the canonical MCP source with Atlassian,
   Figma, and every enabled Storybook server, including components-homepage.
   Environment references are adapted without reading or embedding secrets.
6. Offline tests exercise actual generator and hook processes; stale VS Code
   MCP output fails `--check` and the existing pre-commit freshness gate.
7. Existing unmanaged adapters, host model choices for Kiro/Codex, skills, Stage B
   handoff contract, UI packages, and unrelated user changes are preserved.

### Scope decision

Hold scope. Correct the shared metadata, generator, generated adapters, lifecycle
commands, validation integration, and documentation. Tests are required because
this changes permissions and generated integration contracts. No UI is built:
brand, accessibility, Storybook, and handoff skills/validators do not apply.

### Out of scope

No branch merge/cherry-pick, dependency installation, model benchmarking, broad
pipeline prompt rewrite, Jira writes, secrets migration, application changes,
PR creation, or git commits. Do not claim a hook is a complete security boundary
for shell commands; normal host/session permissions continue to govern execute.

## 2. Design

```text
.agents/roles/*.md -----------+
  capabilities / write scope |
  user_invocable / delegates |
  model_profile / hooks      |
                            v
.agents/config/agent-hosts.json --> sync-ai-config.mjs
  host models + hook mappings       | validate all inputs before writing
                                    +--> .github/agents/*.agent.md
                                    |    native model / tools / agents /
                                    |    user-invocable / hooks + shared refs
                                    +--> .agents/adapters/kiro/agents/*.json
                                    +--> .codex/agents/*.toml

.agents/config/mcp-servers.json ---> sync-ai-config.mjs
                                    +--> existing Kiro link
                                    +--> .codex/config.toml
                                    +--> .vscode/mcp.json

agent preToolUse event --> pipeline-write-guard.mjs
                          parse tool identity and edit targets
                          resolve canonical filesystem paths
                          .pipeline-only? {} : top-level deny JSON

sync --check / offline validator / pre-commit
  expected bytes != actual bytes --> nonzero + sync instruction
  same bytes                     --> success
```

### 2.1 Metadata and Copilot rendering

- Add `github` ordered model preferences to each model profile in
  `.agents/config/agent-hosts.json`. Use current, documented Copilot model names
  and preserve the coder/reviewer family distinction. Suggested conservative
  mappings are planning `Claude Opus 4.8 (copilot)` then `Claude Sonnet 4.6
  (copilot)`; implementation and visual `Claude Sonnet 4.6 (copilot)`;
  independent review `GPT-6.1 Sol (copilot)` then `GPT-5.6 Sol (copilot)`.
  These are editable host preferences; plan access/runtime availability still
  requires a live client smoke test. Do not reuse retired models from July.
- Add boolean `user_invocable` to canonical role frontmatter: true for the
  orchestrator, false for architect/coder/reviewer/visual. Extend the metadata
  parser to handle actual booleans and reject malformed visibility metadata.
- Render YAML `model`, `user-invocable`, `agents`, and `hooks` natively. Render
  `agents` using canonical delegate names, matching generated agent names.
- Keep portable metadata and role bodies authoritative; do not copy full prompts
  or skills into `.github`.
- Validate model profile/capability/hook/delegate references before writing any
  expected output. A typo must exit nonzero rather than produce partial output.

### 2.2 Report-writing contract

- Introduce a portable capability `pipeline-write` mapped to Kiro `fs_write`
  and Copilot `edit`, with the description “write pipeline reports only.”
- Change reviewer capabilities to include `pipeline-write` and set
  `write_scope: pipeline`; keep `auto_approve` conservative.
- Treat pipeline-write as a writing capability when emitting Kiro
  `toolsSettings.write.allowedPaths: [".pipeline/**"]`. Preserve existing denied
  implementation paths. Do not attach the legacy blanket fs_write blocker to
  the reviewer, because it would deny the required report itself.
- Reviewer and visual attach the new Copilot pipeline-write guard. The visual
  role already has a pipeline write scope; no broader scope is introduced.
- Keep Codex capability text explicit about report-only writes; no unsupported
  Codex tool restriction schema is invented.

### 2.3 Hook mapping and implementation

- Extend the canonical hook definitions with explicit Copilot event/command
  mappings. Keep existing Kiro event behavior unless correcting the reviewer
  contradiction described above. Support a hook with no native mapping on one
  host by emitting its prompt fallback only.
- Copilot event names: `sessionStart` for directory creation, `agentStop` for
  completion logging, `preToolUse` for edit validation. Commands use `node` or
  explicit `bash` invocation so executable-bit differences do not break them.
- Add `.agents/hooks/pipeline-write-guard.mjs`, dependency-free and reading one
  stdin JSON event. Support current `toolName`/`toolArgs` and compatible
  `tool_name`/`tool_input`, including JSON-string tool arguments where documented.
- Identify supported edit tools by their exact known names/aliases (including
  write/edit/apply_patch). Do not scan arbitrary read or test command text for
  `packages/` and block it just because it references source files.
- Extract every mutation target from known path fields, edit arrays, rename
  source/destination pairs, and apply_patch headers. Missing/unparseable targets
  on an identified mutation tool deny rather than allow.
- Resolve targets relative to event `cwd` (falling back to process cwd), then
  require containment in the repository's `.pipeline` directory. Reject sibling
  `.pipeline-other`, traversal, absolute paths outside it, symlink escapes, and
  mixed allowed/disallowed multi-file edits. Resolve the nearest existing parent
  for new files; `.pipeline` itself cannot be a symlink outside the repository.
- Return `{}` for no decision and a top-level `permissionDecision: "deny"`
  with a clear reason for denial. Invalid event JSON returns a denial and exits
  predictably. Never echo entire tool arguments or file contents.
- The guard covers recognized edit tools. Execute remains available for tests,
  and host permissions must constrain shell activity; documentation must state
  this limitation instead of claiming arbitrary code cannot modify files.
- Update phase logging to accept current stop-event fields while preserving
  legacy assistant_response support. Log bounded text, JSON-escaped; handle an
  absent response without failing the session.

### 2.4 VS Code MCP projection

- Add `.vscode/mcp.json` to the generator's expected-file map. The entire file is
  managed, as the current tracked file contains only the shared server list.
- Emit `{ "servers": { ... } }`; command servers have `type: "stdio"`, HTTP
  servers have `type: "http"`. Preserve args, URL, fixed env values, and server
  identity. Omit disabled servers from this active VS Code inventory, documenting
  that canonical `disabled: true` is the source of truth.
- Convert exact `$VAR` environment placeholders to VS Code `${env:VAR}` strings.
  Never inspect `process.env` to render values. Keep fixed values unchanged.
- Preserve the already working Codex TOML output and Kiro source link.
- Add `.vscode/mcp.json` to the pre-commit unstaged-generated-files list.
- Make preflight run the generator's `--check` before reporting readiness so it
  cannot pass with a stale consumer configuration. Existing credential checks
  continue to reflect the shared env-based Atlassian setup; do not copy the July
  branch's claim that VS Code inputs are configured when they are absent.

### 2.5 Offline validation and preservation

- Add dependency-free `node --test` regression files under
  `.agents/scripts/tests/`. Exercise the actual generator as a child process in
  temporary directories containing real source fixtures, rather than mocking its
  internal rendering functions. Temp resources isolate writes from the worktree.
- Run offline tests and freshness/schema checks from the shared validator. Native
  Kiro/Codex commands are optional integration checks, not a prerequisite for
  offline validation; gate them behind an explicit `--native` option or clearly
  separate command. Native failure must return nonzero and must not be described
  as a successful live validation. This avoids auth-dependent local checks
  obscuring whether the portable regression suite ran.
- No change to `.agents/skills`, schemas/handoff placement, or unmanaged agent
  deletion behavior. Regenerate adapters only through the synchronizer.

## 3. State transitions and error paths

Generator states: READ -> VALIDATE -> RENDER -> COMPARE -> CHECK_SUCCESS or
CHECK_FAILURE; normal mode proceeds COMPARE -> WRITE -> SUCCESS. Invalid sources
terminate during validation before writes. Existing stale-adapter deletion is
limited to generated-marker files in managed directories, as today.

Guard states: PARSE -> CLASSIFY -> EXTRACT_TARGETS -> RESOLVE -> ALLOW/DENY.
Malformed JSON -> DENY; non-edit tools -> ALLOW/no decision; identified edits with
missing or untrusted targets -> DENY. Filesystem errors resolving a proposed edit
also deny; diagnostics disclose only the rule and target category.

| Failure | Detection | Recovery / impact |
| --- | --- | --- |
| Missing model/hook/delegate mapping | source validation | nonzero with source/role name; fix canonical source and rerun |
| Stale or absent VS Code MCP output | sync --check/preflight | nonzero plus sync command; no writes during check |
| Secret placeholder expanded | process-level regression assertion | test fails; never commit expanded config |
| Edit escapes pipeline through traversal/symlink | canonical path containment | deny before tool; coder performs implementation edits |
| Copilot model unavailable or hooks disabled | live client diagnostics | adjust shared profile or enable supported runtime features; offline tests cannot prove runtime availability |
| Native CLI auth unavailable | explicit native check | report limitation and nonzero native result; offline checks remain independently runnable |

## 4. Test matrix

| Behavior | Level | Boundary/seam | Dependency | Command | Failure covered |
| --- | --- | --- | --- | --- | --- |
| Models, visibility, hooks, delegates in generated Copilot agents | integration/regression | temp filesystem + real CLI child process | real Node, fixture files | `node --test .agents/scripts/tests/*.test.mjs` | silent fallback to default model, missing control fields |
| Reviewer gets edit/report scope and Kiro pipeline paths | integration/regression | actual generated adapters | real generator | same command | report blocked or broad path grant |
| VS Code MCP includes all enabled canonical servers and env placeholders | integration/contract | JSON output parsed from temp resource | real filesystem | same command | missing integrations, literal `$VAR`, leaked env value |
| --check catches stale/missing VS Code output without writing | integration | byte comparison before/after child process | real filesystem | same command | false freshness pass, mutation during check |
| Invalid role/model/delegate input produces no partial writes | integration | malformed temporary source | real filesystem | same command | inconsistent generated state |
| Unmanaged adapter survives sync; generated stale role is removed | regression | temporary managed directory | real filesystem | same command | user configuration loss |
| Guard allows pipeline report creates/edits, reads and tests | contract/integration | stdin fixture -> child stdout JSON | real Node/filesystem | same command | source reads incorrectly blocked, report cannot be written |
| Guard denies traversal, sibling dirs, absolute outside paths, symlink escapes, rename/multi-file mixed edits | adversarial regression | temporary filesystem + stdin fixtures | real symlinks/process | same command | write outside pipeline allowed |
| Guard denies malformed edits/JSON and parses both documented input variants | contract | actual hook stdin/out | real child process | same command | fail-open input parsing |
| Stop log remains valid/bounded JSONL for current and legacy events | integration | temporary cwd/stdin | real shell/Node | same command | malformed phase log or missing-field crash |
| Generated checkout is current, shell syntax valid | integration | repository outputs | real files | `node .agents/scripts/sync-ai-config.mjs --check`; `bash .agents/scripts/validate-ai-config.sh`; `bash -n .husky/pre-commit .agents/scripts/preflight.sh .agents/scripts/validate-ai-config.sh` | stale checked-in files, syntax errors |

Tests must first fail against the existing implementation for the intended
behavior. Use no new package dependencies. Record RED/GREEN commands and results
in `.pipeline/ai-config-impl-report.md`.

## 5. Ordered implementation tasks

1. Add `.agents/scripts/tests/sync-ai-config.test.mjs` with a real temp-source
   harness invoking the existing generator. Assert Copilot native fields,
   report-write scope, VS Code MCP projection, secrets placeholder preservation,
   no-write check failure, unmanaged preservation and invalid-input failures.
   Run `node --test .agents/scripts/tests/sync-ai-config.test.mjs` and capture RED.
2. Update `.agents/config/agent-hosts.json`, `.agents/roles/*.md`, and
   `.agents/scripts/sync-ai-config.mjs` with the metadata/rendering rules above.
   Run the same generator tests until GREEN. Depends on 1.
3. Add `.agents/scripts/tests/pipeline-hooks.test.mjs` exercising actual guard and
   logging child processes with the cases in the matrix. Run
   `node --test .agents/scripts/tests/pipeline-hooks.test.mjs` and capture RED.
   Add `.agents/hooks/pipeline-write-guard.mjs`, update
   `.agents/hooks/log-phase.sh` and relevant host hook mappings. Run that test to
   GREEN. Depends on 2 for emitted hook command contract.
4. Add freshness/test invocation to `.agents/scripts/validate-ai-config.sh`,
   `.agents/scripts/preflight.sh`, and `.husky/pre-commit` as specified; ensure
   native checks are explicitly separated. Extend temp-process regression tests
   where needed to prove the new validation branch. Run
   `node --test .agents/scripts/tests/*.test.mjs`. Depends on 2 and 3.
5. Update `.agents/README.md` and `.github/copilot-instructions.md` with generated
   VS Code config ownership, native Copilot fields, models as preferences, hook
   scope/limits, offline/native check commands, and a short VS Code smoke-test
   checklist. Run `node .agents/scripts/sync-ai-config.mjs`; then
   `node .agents/scripts/sync-ai-config.mjs --check` and
   `bash .agents/scripts/validate-ai-config.sh`. Inspect `git diff --check` and
   verify existing Charter Bubbles artifacts are untouched. Depends on 4.

## 6. Security and performance

No credentials are read to generate configuration. Treat source files as trusted
maintainer input, tool-event fields as untrusted, and filesystem realpaths as the
authority for guard containment. Never execute tool-input strings in a shell.
The edit hook supplements host permissions; it cannot secure unrestricted test
execution. Document runtime trust/enterprise hook restrictions and do not claim
an offline test proves actual client invocation.

Generator work remains linear in five small roles and eleven MCP definitions;
no network calls or new runtime dependencies. Hook parsing and path resolution
are bounded by one tool call; ordinary test/read operations return promptly.

## 7. Reference contracts checked on 2026-11-18

- VS Code custom-agent native fields and model arrays:
  https://code.visualstudio.com/docs/agents/reference/custom-agent-file-reference
- Copilot scoped hooks, aliases, events and decision output:
  https://docs.github.com/en/copilot/reference/hooks-reference
- VS Code hook behavior and runtime verification requirements:
  https://code.visualstudio.com/docs/agent-customization/hooks
- Current supported model catalog (availability varies by client/plan):
  https://docs.github.com/en/copilot/reference/ai-models/supported-models

The coder should verify exact VS Code MCP schema/environment syntax and any
ambiguous edit-tool payload with official documentation before implementing that
projection. If runtime testing is unavailable, report that limitation explicitly;
do not block the authorized offline implementation on account access.
