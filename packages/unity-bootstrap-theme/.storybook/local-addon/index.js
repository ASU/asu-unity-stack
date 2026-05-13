import { fileURLToPath } from "url";

export function previewAnnotations(entry = []) {
  return [...entry, fileURLToPath(import.meta.resolve("./entry.js"))];
}

export function managerEntries(entry = []) {
  return [...entry, fileURLToPath(import.meta.resolve("./addon.js"))];
}
