const fs = require('fs');
const path = require('path');

function getPackageNames(directoryPath) {
  try {
    const packages = fs.readdirSync(directoryPath);
    const packageNames = [];

    packages.forEach((packageName) => {
      const packageJsonPath = path.join(directoryPath, packageName, 'package.json');

      if (fs.existsSync(packageJsonPath)) {
        const packageJson = require(packageJsonPath);
        packageNames.push(packageJson.name.replace('@asu/', ''));
      }
    });

    return packageNames;
  } catch (err) {
    console.error('Error reading package names:', err);
    return [];
  }
}
exports.getPackageNames = getPackageNames;
