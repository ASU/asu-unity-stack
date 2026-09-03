#!/usr/bin/env node
/**
 * Creates an "unlisted" static drop under packages/static-site/public/drop/<slug>/
 * so it deploys to GitHub Pages at a hard-to-guess URL that is never linked from
 * any nav, MPA route (see packages/static-site/src/routes/config.js), or sitemap.
 *
 * Usage:
 *   node scripts/create-static-drop.js <path-to-file-or-directory> [slug]
 *
 * Examples:
 *   node scripts/create-static-drop.js ./my-report/index.html
 *   node scripts/create-static-drop.js ./my-report-folder my-custom-slug
 */
const fs = require('fs');
const path = require('path');
const crypto = require('crypto');

const DROP_ROOT = path.resolve(__dirname, '..', 'packages/static-site/public/drop');
const ROBOTS_PATH = path.resolve(__dirname, '..', 'packages/static-site/public/robots.txt');
const SITE_ORIGIN = 'https://unity.web.asu.edu';

const NOINDEX_META = '<meta name="robots" content="noindex, nofollow, noarchive">';

// Slugs become a folder name under DROP_ROOT, so keep them restricted to safe,
// unambiguous characters - this also rules out "../" path traversal and
// accidental empty/whitespace-only slugs.
const SLUG_PATTERN = /^[a-zA-Z0-9_-]+$/;
const MAX_SLUG_LENGTH = 64;

// Never copy these in, even if a developer points the script at a directory
// that happens to contain them (e.g. a repo checkout, a home directory, etc).
const DENYLIST = new Set(['.git', 'node_modules', '.env', '.aws', '.ssh']);

function isDenied(name) {
  return DENYLIST.has(name) || name.startsWith('.env.');
}

function copyRecursive(src, dest) {
  // Use lstat (not stat) so symlinks are detected instead of followed - a
  // followed symlink could copy files from outside the input tree (e.g. a
  // symlinked secret) into the publicly-deployed drop.
  const stat = fs.lstatSync(src);

  if (stat.isSymbolicLink()) {
    console.warn(`Skipping symlink (not followed): ${src}`);
    return;
  }

  if (stat.isDirectory()) {
    fs.mkdirSync(dest, { recursive: true });
    for (const entry of fs.readdirSync(src)) {
      if (isDenied(entry)) {
        console.warn(`Skipping "${entry}" (denylisted, likely sensitive)`);
        continue;
      }
      copyRecursive(path.join(src, entry), path.join(dest, entry));
    }
  } else {
    fs.mkdirSync(path.dirname(dest), { recursive: true });
    fs.copyFileSync(src, dest);
  }
}

function injectNoIndex(filePath) {
  const html = fs.readFileSync(filePath, 'utf8');

  // Skip files that aren't real text/HTML (e.g. a binary file that happens
  // to be named *.html) so we don't corrupt them with a string injection.
  if (html.includes('\u0000')) {
    console.warn(`Skipping noindex injection for non-text file: ${filePath}`);
    return;
  }

  if (/name=["']robots["']/i.test(html)) return;

  const headTagPattern = /<head[^>]*>/i;
  const updated = headTagPattern.test(html)
    ? html.replace(headTagPattern, (match) => `${match}\n    ${NOINDEX_META}`)
    : `${NOINDEX_META}\n${html}`;

  fs.writeFileSync(filePath, updated);
}

function walkHtmlFiles(dir) {
  const results = [];
  for (const entry of fs.readdirSync(dir, { withFileTypes: true })) {
    const full = path.join(dir, entry.name);
    if (entry.isDirectory()) {
      results.push(...walkHtmlFiles(full));
    } else if (entry.name.endsWith('.html')) {
      results.push(full);
    }
  }
  return results;
}

function ensureRobotsDisallow() {
  const rule = 'Disallow: /drop/';
  const existing = fs.existsSync(ROBOTS_PATH) ? fs.readFileSync(ROBOTS_PATH, 'utf8').trimEnd() : 'User-agent: *';
  const contents = existing.includes(rule) ? `${existing}\n` : `${existing}\n${rule}\n`;
  fs.writeFileSync(ROBOTS_PATH, contents);
}

function main() {
  const [inputPath, providedSlug] = process.argv.slice(2);

  if (!inputPath) {
    console.error('Usage: node scripts/create-static-drop.js <path-to-file-or-directory> [slug]');
    process.exit(1);
  }

  const resolvedInput = path.resolve(inputPath);
  if (!fs.existsSync(resolvedInput)) {
    console.error(`Input not found: ${resolvedInput}`);
    process.exit(1);
  }

  const slug = providedSlug ? providedSlug.trim() : crypto.randomBytes(8).toString('hex');

  if (!SLUG_PATTERN.test(slug) || slug.length > MAX_SLUG_LENGTH) {
    console.error(
      `Invalid slug "${slug}": must be 1-${MAX_SLUG_LENGTH} characters, letters/numbers/hyphens/underscores only.`
    );
    process.exit(1);
  }

  const destDir = path.join(DROP_ROOT, slug);

  // Defense in depth: even though SLUG_PATTERN already rules out ".." and "/",
  // double-check the resolved path can't escape DROP_ROOT before writing anything.
  if (path.resolve(destDir) !== path.join(path.resolve(DROP_ROOT), slug)) {
    console.error(`Invalid slug "${slug}": resolves outside of ${DROP_ROOT}.`);
    process.exit(1);
  }

  if (fs.existsSync(destDir)) {
    console.error(`Slug "${slug}" already exists at ${destDir}. Choose a different slug.`);
    process.exit(1);
  }

  const inputStat = fs.statSync(resolvedInput);
  if (inputStat.isDirectory()) {
    copyRecursive(resolvedInput, destDir);
  } else {
    // Single files are always served as the drop's index.html so the shared
    // link never needs to include a filename.
    fs.mkdirSync(destDir, { recursive: true });
    fs.copyFileSync(resolvedInput, path.join(destDir, 'index.html'));
  }

  walkHtmlFiles(destDir).forEach(injectNoIndex);
  ensureRobotsDisallow();

  console.log(`\nCreated static drop: ${destDir}`);
  console.log(`Shareable URL (after next gh-pages deploy): ${SITE_ORIGIN}/drop/${slug}/`);
  console.log('\nNext steps:');
  console.log('  1. Review the copied files - do not include secrets, this repo is public.');
  console.log('  2. Commit and merge to dev.');
  console.log('  3. Jenkins builds + publishes to gh-pages automatically on merge to dev.');
}

main();
