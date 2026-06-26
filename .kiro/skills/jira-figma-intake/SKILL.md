---
name: jira-figma-intake
description: "Use at pipeline INTAKE to turn a component request into an enriched intake brief. A component name is ALWAYS required; a Jira key, a Figma URL, and/or one-or-more screenshots in .intake/ are optional enrichment. Reads Jira via mcp-atlassian (read-only), design specs/tokens via the Figma Dev Mode MCP, and screenshots via vision. Ask clarifying questions when inputs are sparse or conflicting. Produces .pipeline/intake-brief.md for the architect."
---

# Jira / Figma / Screenshot Intake

The first step of the Unity stage. Convert whatever the user provides into a
single, unambiguous **intake brief** that the architect turns into a design doc.

## The one hard requirement

**A component name is always required.** Everything else is enrichment. If the
user did not give a name, ask for one before doing anything else. If they gave a
Jira key or Figma URL but no name, propose a name derived from it and confirm.

## Inputs (any combination)

| Source | How to read it | Notes |
|--------|----------------|-------|
| Component name | from the prompt | Required. Drives the slug + handoff anchor. |
| Jira key (e.g. `WS2-1234`) | `mcp-atlassian` (read-only) | Optional. See Jira notes below. |
| Figma URL | Figma Dev Mode MCP | Optional. Extract the node id from the URL. |
| Screenshot(s) | read image files in `.intake/` (vision) | Optional. Multiple allowed: states, breakpoints, hover/focus. |
| Free-text description | from the prompt | Optional. |

## Jira intake (read-only)

Fetch the **specific issue by key** — do not rely on search.

1. Prefer `mcp-atlassian` `jira_get_issue` with the key. Pull: summary,
   description, acceptance criteria, issue type, status, labels, and any links.
2. Scan the description/links for an embedded **Figma URL** and a component name.
3. Caveat (asudev instance): `mcp-atlassian` *search* and user lookups are
   unreliable and can silently return empty — an empty result is NOT proof of
   "no match". If a by-key fetch comes back empty or errors, fall back to the
   Jira v3 REST API by key:
   `curl -s -u "$JIRA_USER:$JIRA_API_TOKEN" -H "Accept: application/json" \
     "https://asudev.jira.com/rest/api/3/issue/<KEY>?fields=summary,description,issuetype,status,labels"`
   (`JIRA_USER` / `JIRA_API_TOKEN` come from the environment — never hardcode
   credentials in this repo.)

## Figma intake (Dev Mode MCP)

If a Figma URL is provided (directly or found in the Jira ticket):

1. Extract the node id from the URL (`?node-id=1-2` → `1:2`).
2. `get_design_context` — reference code + screenshot + metadata for the node.
3. `get_variable_defs` — **design tokens** (colors, spacing, typography). Map
   these to ASU SCSS variables during design (see the `unity-components` and
   `asu-brand` skills); flag any token with no Unity equivalent.
4. `get_screenshot` — a render of the frame to compare against later (the
   `acp-visual` step reuses this).
5. `get_code_connect_map` — if the node is already mapped to a Unity component,
   prefer updating that component over creating a new one.

Requires the Figma desktop app with Dev Mode MCP running on `127.0.0.1:3845`.
If it is unreachable, note that in the brief and proceed from name + screenshots.

## Screenshot intake (vision)

- Read every image in `.intake/` — treat them as part of the spec.
- Multiple images usually mean multiple **states** (default/hover/focus/active),
  **breakpoints** (mobile/desktop), or **variants**. Label each in the brief.
- Describe structure, hierarchy, spacing, color, and text so a non-vision agent
  (the reviewer) can use the description.

## Clarifying-question protocol

Ask (one at a time, prefer multiple choice) only when it changes the outcome:
- Ambiguous which existing Unity component this maps to (new vs. update).
- Conflicting signals (ticket says X, screenshot shows Y).
- Missing the target package (`unity-react-core` vs `unity-bootstrap-theme` vs an
  app/component package).
- Interactive states or breakpoints implied but not shown.
Do not interrogate when the inputs already answer the question.

## Output — `.pipeline/intake-brief.md`

Write a brief with:
- **Component**: name + slug (kebab-case) + handoff anchor (Jira key if present, else slug).
- **Sources**: Jira key, Figma node, screenshot filenames (with what each shows).
- **Intent**: new component vs. update to an existing one (+ which, with evidence).
- **Target package** (best inference + confidence).
- **Requirements**: behavior, variants, states, breakpoints, a11y notes.
- **Design tokens** observed (Figma vars / colors / spacing) to reconcile with ASU tokens.
- **Open questions** still outstanding (if any).

End by summarizing the brief back to the user and asking: "Ready to send this to
the Architect?" The architect reads `.pipeline/intake-brief.md` as the starting
point for the design document.
