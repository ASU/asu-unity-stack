#!/usr/bin/env node

import { spawnSync } from "node:child_process";
import { existsSync } from "node:fs";
import path from "node:path";
import process from "node:process";
import { fileURLToPath } from "node:url";

const run = (command, args, options = {}) => {
  const result = spawnSync(command, args, {
    encoding: "utf8",
    ...options,
  });

  if (result.error) throw result.error;
  if (result.status !== 0) {
    process.stderr.write(result.stderr ?? "");
    throw new Error(`${command} exited with status ${result.status}`);
  }

  return result.stdout ?? "";
};

export const parseNullSeparated = output => output.split("\0").filter(Boolean);

export const findChangedFiles = ({
  cwd = process.cwd(),
  extensions,
  includePaths = [],
  fileExists = existsSync,
  runCommand = run,
}) => {
  const repositoryRoot = runCommand("git", ["rev-parse", "--show-toplevel"], {
    cwd,
  }).trim();
  const gitQueries = [
    ["diff", "--name-only", "--diff-filter=ACMR", "-z"],
    ["diff", "--cached", "--name-only", "--diff-filter=ACMR", "-z"],
    ["ls-files", "--others", "--exclude-standard", "-z"],
  ];
  const changed = new Set(
    gitQueries.flatMap(args =>
      parseNullSeparated(runCommand("git", args, { cwd: repositoryRoot }))
    )
  );
  const allowedExtensions = new Set(
    extensions.map(
      extension => `.${extension.replace(/^\./, "").toLowerCase()}`
    )
  );
  const normalizedIncludes = includePaths.map(includePath =>
    includePath.replace(/[\\/]+$/, "")
  );

  return [...changed]
    .map(file => path.relative(cwd, path.join(repositoryRoot, file)))
    .filter(file => file && file !== ".." && !file.startsWith(`..${path.sep}`))
    .filter(
      file =>
        !normalizedIncludes.length ||
        normalizedIncludes.some(
          includePath =>
            file === includePath || file.startsWith(`${includePath}${path.sep}`)
        )
    )
    .filter(file => allowedExtensions.has(path.extname(file).toLowerCase()))
    .filter(file => fileExists(path.join(cwd, file)))
    .sort();
};

export const parseArguments = args => {
  const separator = args.indexOf("--");
  const extensionIndex = args.indexOf("--extensions");
  const includeIndex = args.indexOf("--include");

  if (
    separator < 0 ||
    extensionIndex < 0 ||
    extensionIndex + 1 >= separator ||
    separator + 1 >= args.length
  ) {
    throw new Error(
      "Usage: lint-changed --extensions js,jsx -- <command> [arguments]"
    );
  }

  return {
    extensions: args[extensionIndex + 1].split(",").filter(Boolean),
    includePaths:
      includeIndex >= 0 && includeIndex + 1 < separator
        ? args[includeIndex + 1].split(",").filter(Boolean)
        : [],
    command: args[separator + 1],
    commandArguments: args.slice(separator + 2),
  };
};

export const main = args => {
  const { extensions, includePaths, command, commandArguments } =
    parseArguments(args);
  const files = findChangedFiles({ extensions, includePaths });

  if (!files.length) {
    console.log("No changed files match this lint-fix command.");
    return;
  }

  console.log(`Fixing ${files.length} changed file(s).`);
  const result = spawnSync(command, [...commandArguments, ...files], {
    cwd: process.cwd(),
    stdio: "inherit",
  });
  if (result.error) throw result.error;
  process.exitCode = result.status ?? 1;
};

if (process.argv[1] === fileURLToPath(import.meta.url)) {
  main(process.argv.slice(2));
}
