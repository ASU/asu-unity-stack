import { fileURLToPath } from "url";

export function previewAnnotations(entry = []) {
  return [...entry, fileURLToPath(import.meta.resolve('./preset/preview.js'))];
}

export function managerEntries(entry = []) {
  return [...entry, fileURLToPath(import.meta.resolve('./preset/manager.js'))];
}
