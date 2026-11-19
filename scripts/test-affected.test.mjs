import assert from "node:assert/strict";
import test from "node:test";

import { resolveTestBase, testCommandForBase } from "./test-affected.mjs";

const result = (status, stdout = "") => ({ status, stdout });

test("uses the verified base supplied by a single existing pushed ref", () => {
  const calls = [];
  const runCommand = (_command, args) => {
    calls.push(args);
    return result(0, "abc123\n");
  };

  assert.equal(
    resolveTestBase({
      mode: "affected",
      suppliedBase: "abc123",
      runCommand,
    }),
    "abc123"
  );
  assert.deepEqual(calls, [
    ["rev-parse", "--verify", "--quiet", "abc123^{commit}"],
  ]);
});

test("falls back to all tests when the hook marks the push as ambiguous", () => {
  assert.equal(
    resolveTestBase({
      mode: "all",
      suppliedBase: "abc123",
      runCommand: () => {
        throw new Error("Git should not be called");
      },
    }),
    null
  );
});

test("uses the current branch upstream for a manual pre-push run", () => {
  const responses = [result(0, "upstream123\n"), result(0, "upstream123\n")];

  assert.equal(
    resolveTestBase({ runCommand: () => responses.shift() }),
    "upstream123"
  );
});

test("falls back to all tests when a candidate base cannot be verified", () => {
  assert.equal(
    resolveTestBase({
      mode: "affected",
      suppliedBase: "missing",
      runCommand: () => result(1),
    }),
    null
  );
});

test("builds the affected cached test command with dependents", () => {
  assert.deepEqual(testCommandForBase("abc123"), [
    "lerna",
    "run",
    "test",
    "--since",
    "abc123",
    "--include-dependents",
    "--stream",
    "--parallel",
  ]);
  assert.deepEqual(testCommandForBase(null), ["test:cached"]);
});
