const fs = require('fs');
const path = require('path');
const { readdirSync, statSync } = require('fs');

const monorepoRoot = path.resolve(__dirname, '..');
const licensePath = path.join(monorepoRoot, 'LICENSE');

// Get a list of all subdirectories in the packages directory
const packagesDir = path.join(monorepoRoot, 'packages');
const packageDirs = readdirSync(packagesDir)
  .map(name => path.join(packagesDir, name))
  .filter(source => statSync(source).isDirectory());

// Iterate through each package directory
for (const packageDir of packageDirs) {
  const destLicensePath = path.join(packageDir, 'LICENSE');

  try {
    fs.copyFileSync(licensePath, destLicensePath);
  } catch (error) {
    console.error('Error copying LICENSE file:', error.message);
    process.exit(1);
  }
}
