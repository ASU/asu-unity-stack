import assert from "node:assert/strict";
import path from "node:path";
import test from "node:test";

import {
  findChangedFiles,
  parseArguments,
  parseNullSeparated,
} from "./lint-changed.mjs";

test("parses null-separated Git output without breaking spaces", () => {
  assert.deepEqual(parseNullSeparated("src/a.js\0src/has space.jsx\0"), [
    "src/a.js",
    "src/has space.jsx",
  ]);
});

test("combines staged, unstaged, and untracked package files", () => {
  const repositoryRoot = path.join(path.sep, "repo");
  const cwd = path.join(repositoryRoot, "packages", "example");
  const responses = new Map([
    ["rev-parse --show-toplevel", `${repositoryRoot}\n`],
    [
      "diff --name-only --diff-filter=ACMR -z",
      "packages/example/src/unstaged.js\0packages/other/ignored.js\0",
    ],
    [
      "diff --cached --name-only --diff-filter=ACMR -z",
      "packages/example/src/staged.jsx\0packages/example/src/unstaged.js\0packages/example/src/deleted.js\0",
    ],
    [
      "ls-files --others --exclude-standard -z",
      "packages/example/src/new.ts\0packages/example/src/has space.js\0packages/example/config.js\0",
    ],
  ]);
  const runCommand = (_command, args) => responses.get(args.join(" ")) ?? "";

  assert.deepEqual(
    findChangedFiles({
      cwd,
      extensions: ["js", "jsx"],
      includePaths: ["src"],
      fileExists: file => !file.endsWith("deleted.js"),
      runCommand,
    }),
    ["src/has space.js", "src/staged.jsx", "src/unstaged.js"]
  );
});

test("parses the linter command after the separator", () => {
  assert.deepEqual(
    parseArguments([
      "--extensions",
      "css,scss",
      "--include",
      "src,stories",
      "--",
      "stylelint",
      "--fix",
    ]),
    {
      extensions: ["css", "scss"],
      includePaths: ["src", "stories"],
      command: "stylelint",
      commandArguments: ["--fix"],
    }
  );
});
