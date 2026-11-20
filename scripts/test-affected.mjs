#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import process from "node:process";
import { fileURLToPath } from "node:url";

const run = (command, args, options = {}) => {
  const result = spawnSync(command, args, {
    encoding: "utf8",
    ...options,
  });

  if (result.error) throw result.error;

  return result;
};

export const resolveTestBase = ({
  mode = process.env.PRE_PUSH_TEST_MODE,
  suppliedBase = process.env.PRE_PUSH_BASE,
  runCommand = run,
} = {}) => {
  if (mode === "all") return null;

  const candidate =
    mode === "affected"
      ? suppliedBase
      : runCommand(
          "git",
          ["rev-parse", "--verify", "--quiet", "@{upstream}^{commit}"],
          { cwd: process.cwd() }
        ).stdout.trim();

  if (!candidate) return null;

  const verification = runCommand(
    "git",
    ["rev-parse", "--verify", "--quiet", `${candidate}^{commit}`],
    { cwd: process.cwd() }
  );

  return verification.status === 0 ? verification.stdout.trim() : null;
};

export const testCommandForBase = base =>
  base
    ? [
        "lerna",
        "run",
        "test",
        "--since",
        base,
        "--include-dependents",
        "--stream",
        "--parallel",
      ]
    : ["test:cached"];

export const main = () => {
  const base = resolveTestBase();
  const args = testCommandForBase(base);

  if (base) {
    console.log(`Running cached tests affected since ${base}.`);
  } else {
    console.log("No unambiguous push base found; running all cached tests.");
  }

  const result = spawnSync("yarn", args, {
    cwd: process.cwd(),
    stdio: "inherit",
  });

  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main();
}
